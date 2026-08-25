import { createServerFn } from "@tanstack/react-start";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import { db } from "./db";
import { getSiteDataBundle } from "./db-repository.server";
import { getSupabaseAdminClient, isSupabaseAdminConfigured } from "./supabase-admin.server";
import {
  createSession,
  destroySession,
  validateSession,
  verifyPassword,
  ADMIN_COOKIE_NAME,
  type SessionUser,
} from "./auth";
import {
  getSessionToken,
  requireAuth,
  requireAdmin,
  setAdminSessionCookie,
  clearAdminSessionCookie,
} from "./server-auth.server";
import {
  loginInputSchema,
  changePasswordInputSchema,
  tokenOnlySchema,
  deleteItemSchema,
  villageInfoSchema,
  destinasiSchema,
  kegiatanSchema,
  extractOgImageSchema,
  umkmSchema,
  galeriSchema,
  publicReviewSchema,
  adminReviewSchema,
  reviewStatusSchema,
  homestaySchema,
  paketWisataSchema,
  faqSchema,
  reservationPublicSchema,
  reservationStatusSchema,
  imageUploadSchema,
  recordPageViewSchema,
} from "./schemas";
import { extractOgImageFromUrl } from "./image-source-extractor";
import type { SiteDataState, VillageInfoState } from "./cms-store";
import type {
  KegiatanItem,
  LandmarkItem,
  UmkmItem,
  ReviewItem,
  GaleriFotoItem,
  TouristReview,
} from "../data/jadesta";
import {
  saveAndOptimizeImage,
  deleteImageFile,
  migrateBase64ImagesToFiles,
  type ImageCategory,
} from "./image-storage";
import {
  checkRateLimit,
  recordFailedAttempt,
  recordSuccessfulLogin,
  consumeRateLimit,
  getClientIP,
  RATE_LIMIT_CONFIGS,
} from "./rate-limiter";

function extractPayload<T>(input: unknown): T {
  const raw = (input as Record<string, unknown>) || {};
  if (
    raw &&
    typeof raw === "object" &&
    "data" in raw &&
    raw["data"] !== undefined &&
    raw["data"] !== null &&
    typeof raw["data"] === "object"
  ) {
    return raw["data"] as T;
  }
  return raw as T;
}

function isSupabaseMode(): boolean {
  const mode = process.env["DATABASE_MODE"]?.toLowerCase()?.trim();
  if (mode === "sqlite") return false;
  if (mode === "supabase") return true;
  return isSupabaseAdminConfigured();
}

// ----------------------------------------------------
// AUTH SERVER FUNCTIONS (ZOD VALIDATED)
// ----------------------------------------------------

export const checkAdminAuthServerFn = createServerFn({ method: "POST" })
  .validator((data?: unknown) => tokenOnlySchema.parse(extractPayload(data)))
  .handler(async ({ data }) => {
    const token = await getSessionToken(data?.token);
    if (!token) {
      return { isAuthenticated: false, role: null };
    }

    const user = await validateSession(token);
    if (!user) {
      await clearAdminSessionCookie();
      return { isAuthenticated: false, role: null };
    }

    // Role check: Only users with role === 'admin' get isAuthenticated = true for Admin UI
    const isAdmin = user.role === "admin";

    return {
      isAuthenticated: isAdmin,
      user: {
        username: user.username,
        role: user.role,
      },
    };
  });

export const adminLoginServerFn = createServerFn({ method: "POST" })
  .validator((data: unknown) => loginInputSchema.parse(extractPayload(data)))
  .handler(
    async ({
      data,
    }): Promise<{
      success: boolean;
      user?: { username: string; role: string };
      message?: string;
    }> => {
      const username = data.username;
      const password = data.password;

      const clientIP = getClientIP();
      const userKey = `login:${clientIP}:${username.toLowerCase()}`;
      const ipKey = `login_ip:${clientIP}`;

      try {
        // 1. Check IP Global Rate Limit
        const ipLimitStatus = await checkRateLimit(ipKey, RATE_LIMIT_CONFIGS.LOGIN_GLOBAL_IP);
        if (ipLimitStatus.isBlocked) {
          return {
            success: false,
            message:
              ipLimitStatus.message ||
              "Terlalu banyak percobaan login dari IP Anda. Akses dikunci sementara.",
          };
        }

        // 2. Check User+IP Rate Limit
        const userLimitStatus = await checkRateLimit(userKey, RATE_LIMIT_CONFIGS.LOGIN_USER_IP);
        if (userLimitStatus.isBlocked) {
          return {
            success: false,
            message:
              userLimitStatus.message ||
              "Terlalu banyak percobaan login yang gagal. Akses dikunci sementara selama 3 menit.",
          };
        }

        // 3. Lookup user from database
        let userRow:
          { id: number; username: string; password_hash: string; role: string } | undefined;

        if (isSupabaseMode()) {
          const supabase = getSupabaseAdminClient();
          const { data: rows } = await supabase
            .from("users")
            .select("id, username, password_hash, role")
            .ilike("username", username)
            .limit(1);
          userRow = rows?.[0] as typeof userRow;
        } else {
          userRow = db
            .prepare(
              "SELECT id, username, password_hash, role FROM users WHERE LOWER(username) = LOWER(?)",
            )
            .get(username) as typeof userRow;
        }

        const GENERIC_AUTH_ERROR = "Username atau kata sandi tidak valid.";

        if (!userRow) {
          const failed = await recordFailedAttempt(userKey, RATE_LIMIT_CONFIGS.LOGIN_USER_IP);
          await recordFailedAttempt(ipKey, RATE_LIMIT_CONFIGS.LOGIN_GLOBAL_IP);

          if (failed.isNowBlocked) {
            return {
              success: false,
              message:
                "Terlalu banyak percobaan login yang gagal (5x). Akses dikunci sementara selama 3 menit.",
            };
          }
          return { success: false, message: GENERIC_AUTH_ERROR };
        }

        const isValid = verifyPassword(password, userRow.password_hash);

        if (!isValid) {
          const failed = await recordFailedAttempt(userKey, RATE_LIMIT_CONFIGS.LOGIN_USER_IP);
          await recordFailedAttempt(ipKey, RATE_LIMIT_CONFIGS.LOGIN_GLOBAL_IP);

          if (failed.isNowBlocked) {
            return {
              success: false,
              message:
                "Terlalu banyak percobaan login yang gagal (5x). Akses dikunci sementara selama 3 menit.",
            };
          }
          return { success: false, message: GENERIC_AUTH_ERROR };
        }

        // Enforce role authorization from database
        if (userRow.role !== "admin") {
          return {
            success: false,
            message: "Akses ditolak: Akun Anda tidak memiliki hak akses Administrator.",
          };
        }

        // Successful Login → Reset Rate Limit Counters
        await recordSuccessfulLogin(userKey);
        await recordSuccessfulLogin(ipKey);

        // Generate Server Cryptographic Session
        const session = await createSession(userRow.id);

        // Issue HttpOnly, Secure, SameSite=Lax Cookie
        await setAdminSessionCookie(session.token);

        return {
          success: true,
          user: {
            username: userRow.username,
            role: userRow.role,
          },
        };
      } catch (err: unknown) {
        console.error("Login server error:", err);
        return { success: false, message: "Terjadi kesalahan sistem saat otentikasi server." };
      }
    },
  );

export const changePasswordServerFn = createServerFn({ method: "POST" })
  .validator((data: unknown) => changePasswordInputSchema.parse(extractPayload(data)))
  .handler(async ({ data }) => {
    const user = await requireAdmin(data.token);
    const clientIP = getClientIP();
    const pwKey = `password_change:${clientIP}:${user.userId}`;

    const limitStatus = await checkRateLimit(pwKey, RATE_LIMIT_CONFIGS.PASSWORD_CHANGE);
    if (limitStatus.isBlocked) {
      throw new Error(
        limitStatus.message ||
          "Terlalu banyak percobaan ganti kata sandi. Silakan coba kembali nanti.",
      );
    }

    let userRow: { id: number; password_hash: string } | undefined;

    if (isSupabaseMode()) {
      const supabase = getSupabaseAdminClient();
      const { data: rows } = await supabase
        .from("users")
        .select("id, password_hash")
        .eq("id", user.userId)
        .limit(1);
      userRow = rows?.[0] as typeof userRow;
    } else {
      userRow = db
        .prepare("SELECT id, password_hash FROM users WHERE id = ?")
        .get(user.userId) as typeof userRow;
    }

    if (!userRow || !verifyPassword(data.oldPassword, userRow.password_hash)) {
      await recordFailedAttempt(pwKey, RATE_LIMIT_CONFIGS.PASSWORD_CHANGE);
      throw new Error("Kata sandi lama tidak sesuai.");
    }

    await recordSuccessfulLogin(pwKey);

    const newHash = bcrypt.hashSync(data.newPassword, 10);

    if (isSupabaseMode()) {
      const supabase = getSupabaseAdminClient();
      const { error } = await supabase
        .from("users")
        .update({ password_hash: newHash })
        .eq("id", user.userId);
      if (error) throw new Error(`Gagal memperbarui kata sandi: ${error.message}`);
    } else {
      db.prepare("UPDATE users SET password_hash = ? WHERE id = ?").run(newHash, user.userId);
    }

    console.info(
      `[SECURITY AUDIT] Password diubah untuk user ID ${user.userId} (${user.username}).`,
    );
    return { success: true, message: "Kata sandi admin berhasil diperbarui!" };
  });

export const checkDefaultPasswordServerFn = createServerFn({ method: "POST" })
  .validator((data?: unknown) => tokenOnlySchema.parse(extractPayload(data)))
  .handler(async ({ data }) => {
    const user = await requireAdmin(data?.token);

    let passwordHash: string | undefined;

    if (isSupabaseMode()) {
      const supabase = getSupabaseAdminClient();
      const { data: rows } = await supabase
        .from("users")
        .select("password_hash")
        .eq("id", user.userId)
        .limit(1);
      passwordHash = (rows?.[0] as { password_hash: string } | undefined)?.password_hash;
    } else {
      const row = db.prepare("SELECT password_hash FROM users WHERE id = ?").get(user.userId) as
        { password_hash: string } | undefined;
      passwordHash = row?.password_hash;
    }

    if (!passwordHash) return { isDefaultPassword: false };
    const initialPassword = process.env["ADMIN_INITIAL_PASSWORD"];
    const isDefault =
      Boolean(initialPassword && initialPassword.trim() !== "") &&
      verifyPassword(initialPassword!.trim(), passwordHash);
    return { isDefaultPassword: isDefault };
  });

export const adminLogoutServerFn = createServerFn({ method: "POST" })
  .validator((data?: unknown) => tokenOnlySchema.parse(extractPayload(data)))
  .handler(async ({ data }) => {
    const token = await getSessionToken(data?.token);
    if (token) {
      await destroySession(token);
    }
    await clearAdminSessionCookie();
    return { success: true };
  });

export const uploadImageServerFn = createServerFn({ method: "POST" })
  .validator((data: unknown) => imageUploadSchema.parse(extractPayload(data)))
  .handler(async ({ data }) => {
    await requireAdmin(data.token);
    const relativeUrl = await saveAndOptimizeImage(data.base64Data, data.category);
    return { success: true, url: relativeUrl };
  });

export const migrateBase64ServerFn = createServerFn({ method: "POST" })
  .validator((data?: unknown) => tokenOnlySchema.parse(extractPayload(data)))
  .handler(async ({ data }) => {
    await requireAdmin(data?.token);
    const count = await migrateBase64ImagesToFiles();
    return { success: true, count };
  });

// ----------------------------------------------------
// PUBLIC & ADMIN SITE DATA FETCHING FROM DATABASE
// ----------------------------------------------------

export interface DbHomestayRow {
  id: string;
  nama: string;
  slug: string;
  pemilik?: string;
  kapasitas?: string;
  kamar?: number;
  harga_text?: string;
  fasilitas_json?: string;
  lokasi?: string;
  kontak?: string;
  image?: string;
  status: string;
}

export interface DbFaqRow {
  id: string;
  pertanyaan: string;
  jawaban: string;
  kategori: string;
  status: string;
}

export const getSiteDataServerFn = createServerFn({ method: "GET" }).handler(async () => {
  try {
    const bundle = await getSiteDataBundle();
    return bundle as unknown as SiteDataState;
  } catch (err) {
    console.error("Gagal mengambil site data dari database repository:", err);
    throw new Error(
      err instanceof Error ? err.message : "Gagal mengambil data dari database repository.",
    );
  }
});

// Record Realtime Page View (Debounced per IP per route path)
export const recordPageViewServerFn = createServerFn({ method: "POST" })
  .validator((data?: unknown) => recordPageViewSchema.parse(extractPayload(data)))
  .handler(async ({ data }) => {
    try {
      const clientIP = getClientIP();
      const ipHash = crypto
        .createHash("sha256")
        .update(clientIP + "_ekang_salt")
        .digest("hex")
        .slice(0, 16);
      const path = data?.path || "/";

      if (isSupabaseMode()) {
        const supabase = getSupabaseAdminClient();
        const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000).toISOString();

        // Debounce: only record unique pageview per path per IP every 10 minutes
        const { data: recent } = await supabase
          .from("page_views")
          .select("id")
          .eq("ip_hash", ipHash)
          .eq("path", path)
          .gt("created_at", tenMinutesAgo)
          .limit(1);

        if (!recent || recent.length === 0) {
          await supabase.from("page_views").insert({ path, ip_hash: ipHash });
        }

        const { count: totalViews } = await supabase
          .from("page_views")
          .select("*", { count: "exact", head: true });

        return {
          success: true,
          totalViews: totalViews || 0,
          uniqueVisitors: totalViews || 0,
        };
      }

      // SQLite mode
      const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000)
        .toISOString()
        .replace("T", " ")
        .slice(0, 19);
      const recentView = db
        .prepare(
          `
        SELECT id FROM page_views 
        WHERE ip_hash = ? AND path = ? AND created_at > ?
        LIMIT 1
      `,
        )
        .get(ipHash, path, tenMinutesAgo);

      if (!recentView) {
        db.prepare("INSERT INTO page_views (path, ip_hash) VALUES (?, ?)").run(path, ipHash);
      }

      const totalViews =
        (db.prepare("SELECT COUNT(*) as c FROM page_views").get() as { c: number })?.c || 0;
      const uniqueVisitors =
        (db.prepare("SELECT COUNT(DISTINCT ip_hash) as c FROM page_views").get() as { c: number })
          ?.c || 0;

      return {
        success: true,
        totalViews,
        uniqueVisitors,
      };
    } catch (err) {
      console.error("Gagal mencatat pageview:", err);
      return { success: false, totalViews: 0, uniqueVisitors: 0 };
    }
  });

export interface AdminReservationRow {
  id: string;
  kode_reservasi: string;
  nama_pemesan: string;
  whatsapp: string;
  email?: string | null;
  tanggal_kunjungan: string;
  jam_kedatangan: string;
  jumlah_dewasa: number;
  jumlah_anak: number;
  opsi_kunjungan?: string | null;
  aktivitas_json?: string | null;
  catatan?: string | null;
  status: string;
  created_at?: string;
}

// Admin Raw Fetch Function (returns pending reviews, all status items, reservations, and analytics)
export const getAdminDashboardDataServerFn = createServerFn({ method: "POST" })
  .validator((data?: unknown) => tokenOnlySchema.parse(extractPayload(data)))
  .handler(async ({ data }) => {
    await requireAdmin(data?.token);

    if (isSupabaseMode()) {
      const supabase = getSupabaseAdminClient();

      const [
        { data: infoRows },
        { data: landmarkList },
        { data: packageList },
        { data: umkmList },
        { data: kegiatanList },
        { data: galeriItems },
        { data: reviews },
        { data: homestays },
        { data: faqs },
        { data: reservations },
        { count: totalPageViews },
      ] = await Promise.all([
        supabase.from("village_info").select("key, value"),
        supabase.from("destinations").select("*").order("created_at", { ascending: false }),
        supabase.from("packages").select("*").order("created_at", { ascending: false }),
        supabase.from("umkm").select("*").order("created_at", { ascending: false }),
        supabase.from("kegiatan").select("*").order("created_at", { ascending: false }),
        supabase.from("galleries").select("*").order("created_at", { ascending: false }),
        supabase.from("reviews").select("*").order("created_at", { ascending: false }),
        supabase.from("homestays").select("*").order("created_at", { ascending: false }),
        supabase.from("faqs").select("*").order("created_at", { ascending: true }),
        supabase.from("reservations").select("*").order("created_at", { ascending: false }),
        supabase.from("page_views").select("*", { count: "exact", head: true }),
      ]);

      const villageInfoMap: Record<string, string> = {};
      for (const r of infoRows || []) {
        if (r.key) villageInfoMap[r.key] = r.value || "";
      }

      return {
        villageInfo: villageInfoMap,
        landmarkList: landmarkList || [],
        packageList: packageList || [],
        umkmList: umkmList || [],
        kegiatanList: kegiatanList || [],
        galeriItems: galeriItems || [],
        reviews: reviews || [],
        homestays: homestays || [],
        faqs: faqs || [],
        reservations: (reservations || []) as AdminReservationRow[],
        totalPageViews: totalPageViews || 0,
        uniqueVisitors: totalPageViews || 0,
      };
    }

    // SQLite mode
    const infoRows = db.prepare("SELECT key, value FROM village_info").all() as {
      key: string;
      value: string;
    }[];
    const villageInfoMap: Record<string, string> = {};
    for (const r of infoRows) villageInfoMap[r.key] = r.value;

    type DbRow = Record<string, string | number | boolean | null>;

    const landmarkList = db
      .prepare("SELECT * FROM destinations ORDER BY created_at DESC")
      .all() as DbRow[];
    const packageList = db
      .prepare("SELECT * FROM packages ORDER BY created_at DESC")
      .all() as DbRow[];
    const umkmList = db.prepare("SELECT * FROM umkm ORDER BY created_at DESC").all() as DbRow[];
    const kegiatanList = db
      .prepare("SELECT * FROM kegiatan ORDER BY created_at DESC")
      .all() as DbRow[];
    const galeriItems = db
      .prepare("SELECT * FROM galleries ORDER BY created_at DESC")
      .all() as DbRow[];
    const reviews = db.prepare("SELECT * FROM reviews ORDER BY created_at DESC").all() as DbRow[];
    const homestays = db
      .prepare("SELECT * FROM homestays ORDER BY created_at DESC")
      .all() as DbRow[];
    const faqs = db.prepare("SELECT * FROM faqs ORDER BY created_at ASC").all() as DbRow[];
    const reservations = db
      .prepare("SELECT * FROM reservations ORDER BY created_at DESC")
      .all() as AdminReservationRow[];

    const totalPageViews =
      (db.prepare("SELECT COUNT(*) as c FROM page_views").get() as { c: number })?.c || 0;
    const uniqueVisitors =
      (db.prepare("SELECT COUNT(DISTINCT ip_hash) as c FROM page_views").get() as { c: number })
        ?.c || 0;

    return {
      villageInfo: villageInfoMap,
      landmarkList,
      packageList,
      umkmList,
      kegiatanList,
      galeriItems,
      reviews,
      homestays,
      faqs,
      reservations,
      totalPageViews,
      uniqueVisitors,
    };
  });

// ----------------------------------------------------
// PUBLIC SUBMISSIONS (ZOD VALIDATED)
// ----------------------------------------------------

export const submitPublicReviewServerFn = createServerFn({ method: "POST" })
  .validator((data: unknown) => publicReviewSchema.parse(extractPayload(data)))
  .handler(async ({ data }) => {
    // Rate limit per IP + Nama
    const clientIP = getClientIP();
    const reviewKey = `review:${clientIP}:${data.nama.toLowerCase()}`;
    const limitStatus = await consumeRateLimit(reviewKey, RATE_LIMIT_CONFIGS.REVIEW_SUBMISSION);
    if (limitStatus.isBlocked) {
      return {
        success: false,
        message:
          limitStatus.message ||
          "Batas kuota pengiriman ulasan tercapai. Silakan coba kembali beberapa saat lagi.",
      };
    }

    const id = `rev-${Date.now()}`;
    const today = new Date().toLocaleDateString("id-ID", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    const avatarUrl = `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80`;

    if (isSupabaseMode()) {
      const supabase = getSupabaseAdminClient();
      const { error } = await supabase.from("reviews").insert({
        id,
        nama: data.nama,
        asal: data.asal,
        tipe_wisatawan: data.tipeWisatawan,
        rating: data.rating,
        komentar: data.komentar,
        tanggal: today,
        avatar: avatarUrl,
        status: "pending",
      });
      if (error) throw new Error(`Gagal menyimpan ulasan: ${error.message}`);
    } else {
      db.prepare(
        `
        INSERT INTO reviews (id, nama, asal, tipe_wisatawan, rating, komentar, tanggal, avatar, status)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'pending')
      `,
      ).run(
        id,
        data.nama,
        data.asal,
        data.tipeWisatawan,
        data.rating,
        data.komentar,
        today,
        avatarUrl,
      );
    }

    return {
      success: true,
      message:
        "Terima kasih! Ulasan Anda telah berhasil dikirim dan menunggu moderasi tim pengelola.",
    };
  });

async function generateUniqueReservationCode(year: number): Promise<string> {
  for (let attempt = 0; attempt < 10; attempt++) {
    const randomHex = crypto.randomBytes(2).toString("hex").toUpperCase();
    const candidate = `EA-${year}-${randomHex}`;

    let exists = false;
    if (isSupabaseMode()) {
      const supabase = getSupabaseAdminClient();
      const { data } = await supabase
        .from("reservations")
        .select("id")
        .eq("kode_reservasi", candidate)
        .limit(1);
      exists = (data?.length || 0) > 0;
    } else {
      exists = Boolean(
        db.prepare("SELECT id FROM reservations WHERE kode_reservasi = ?").get(candidate),
      );
    }

    if (!exists) return candidate;
  }
  return `EA-${year}-${Date.now().toString(36).toUpperCase().slice(-4)}`;
}

export const submitReservationServerFn = createServerFn({ method: "POST" })
  .validator((data: unknown) => reservationPublicSchema.parse(extractPayload(data)))
  .handler(async ({ data }) => {
    // 1. Rate limit per IP + WhatsApp
    const clientIP = getClientIP();
    const resKey = `reservation:${clientIP}:${data.whatsapp}`;
    const limitStatus = await consumeRateLimit(resKey, RATE_LIMIT_CONFIGS.RESERVATION_SUBMISSION);
    if (limitStatus.isBlocked) {
      throw new Error(
        limitStatus.message ||
          "Batas kuota pengiriman reservasi tercapai. Silakan coba kembali beberapa saat lagi.",
      );
    }

    if (isSupabaseMode()) {
      const supabase = getSupabaseAdminClient();

      // 2. Anti-Duplicate check (within 15 seconds)
      const fifteenSecondsAgo = new Date(Date.now() - 15000).toISOString();
      const { data: duplicates } = await supabase
        .from("reservations")
        .select("id, kode_reservasi")
        .eq("whatsapp", data.whatsapp)
        .eq("tanggal_kunjungan", data.tanggalKunjungan)
        .eq("nama_pemesan", data.namaPemesan)
        .gte("created_at", fifteenSecondsAgo)
        .order("created_at", { ascending: false })
        .limit(1);

      if (duplicates && duplicates.length > 0) {
        return {
          success: true,
          kodeReservasi: duplicates[0]!.kode_reservasi,
          id: duplicates[0]!.id,
        };
      }

      const year = new Date().getFullYear();
      const id = `res-${Date.now()}-${crypto.randomBytes(4).toString("hex")}`;
      const kodeReservasi = await generateUniqueReservationCode(year);

      const { error } = await supabase.from("reservations").insert({
        id,
        kode_reservasi: kodeReservasi,
        nama_pemesan: data.namaPemesan,
        whatsapp: data.whatsapp,
        email: data.email || "",
        tanggal_kunjungan: data.tanggalKunjungan,
        jam_kedatangan: data.jamKedatangan,
        jumlah_dewasa: data.jumlahDewasa,
        jumlah_anak: data.jumlahAnak,
        opsi_kunjungan: data.opsiKunjungan,
        aktivitas_json: data.selectedAddons,
        catatan: data.catatan,
        status: "pending",
      });

      if (error) throw new Error(`Gagal menyimpan reservasi: ${error.message}`);

      return { success: true, kodeReservasi, id };
    }

    // SQLite mode
    const recentDuplicate = db
      .prepare(
        `SELECT id, kode_reservasi FROM reservations 
         WHERE whatsapp = ? AND tanggal_kunjungan = ? AND nama_pemesan = ? 
         AND created_at >= datetime('now', '-15 seconds')
         ORDER BY created_at DESC LIMIT 1`,
      )
      .get(data.whatsapp, data.tanggalKunjungan, data.namaPemesan) as
      { id: string; kode_reservasi: string } | undefined;

    if (recentDuplicate) {
      return {
        success: true,
        kodeReservasi: recentDuplicate.kode_reservasi,
        id: recentDuplicate.id,
      };
    }

    const year = new Date().getFullYear();
    const id = `res-${Date.now()}-${crypto.randomBytes(4).toString("hex")}`;
    let kodeReservasi = "";
    let inserted = false;

    for (let attempt = 0; attempt < 5; attempt++) {
      try {
        kodeReservasi = await generateUniqueReservationCode(year);
        db.prepare(
          `
          INSERT INTO reservations (id, kode_reservasi, nama_pemesan, whatsapp, email, tanggal_kunjungan, jam_kedatangan, jumlah_dewasa, jumlah_anak, opsi_kunjungan, aktivitas_json, catatan, status)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending')
        `,
        ).run(
          id,
          kodeReservasi,
          data.namaPemesan,
          data.whatsapp,
          data.email || "",
          data.tanggalKunjungan,
          data.jamKedatangan,
          data.jumlahDewasa,
          data.jumlahAnak,
          data.opsiKunjungan,
          JSON.stringify(data.selectedAddons),
          data.catatan,
        );
        inserted = true;
        break;
      } catch (err: unknown) {
        if (
          err instanceof Error &&
          err.message.includes("UNIQUE constraint failed: reservations.kode_reservasi")
        ) {
          continue;
        }
        throw err;
      }
    }

    if (!inserted) {
      throw new Error(
        "Gagal memproses kode reservasi unik. Silakan coba kembali beberapa saat lagi.",
      );
    }

    return { success: true, kodeReservasi, id };
  });

// ----------------------------------------------------
// PROTECTED ADMIN CRUD OPERATIONS (ZOD VALIDATED)
// ----------------------------------------------------

// 1. Village Info
export const saveVillageInfoServerFn = createServerFn({ method: "POST" })
  .validator((data: unknown) => villageInfoSchema.parse(extractPayload(data)))
  .handler(async ({ data }) => {
    await requireAdmin(data.token);

    if (isSupabaseMode()) {
      const supabase = getSupabaseAdminClient();
      const upserts = Object.entries(data.info).map(([k, v]) => ({
        key: k,
        value: String(v),
      }));
      const { error } = await supabase.from("village_info").upsert(upserts, { onConflict: "key" });
      if (error) throw new Error(`Gagal menyimpan village info: ${error.message}`);
    } else {
      const stmt = db.prepare("INSERT OR REPLACE INTO village_info (key, value) VALUES (?, ?)");
      for (const [k, v] of Object.entries(data.info)) {
        stmt.run(k, String(v));
      }
    }
    return { success: true };
  });

// 2. Destinasi (Landmarks)
export const saveDestinasiServerFn = createServerFn({ method: "POST" })
  .validator((data: unknown) => destinasiSchema.parse(extractPayload(data)))
  .handler(async ({ data }) => {
    await requireAdmin(data.token);
    const item = data.item;
    const id = item.id || `lm-${Date.now()}`;
    const slug = item.slug || item.nama.toLowerCase().replace(/[^a-z0-9]+/g, "-");

    if (isSupabaseMode()) {
      const supabase = getSupabaseAdminClient();
      const { error } = await supabase.from("destinations").upsert({
        id,
        num: item.num || "01",
        nama: item.nama,
        slug,
        kategori: item.kategori,
        badge_status: item.badge_status,
        badge_text: item.badge_text,
        short_desc: item.short_desc || item.deskripsi || "",
        full_desc: item.full_desc || item.deskripsi || "",
        highlights_json: item.highlights || [],
        image: item.image || "",
        external_url: item.external_url || "",
        external_label: item.external_label || "",
        important_note: item.important_note || "",
        source_json: item.source || { name: "Pengelola", url: "" },
        status: item.status,
      });
      if (error) throw new Error(`Gagal menyimpan destinasi: ${error.message}`);
    } else {
      db.prepare(
        `
        INSERT OR REPLACE INTO destinations (id, num, nama, slug, kategori, badge_status, badge_text, short_desc, full_desc, highlights_json, image, external_url, external_label, important_note, source_json, status)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
      ).run(
        id,
        item.num || "01",
        item.nama,
        slug,
        item.kategori,
        item.badge_status,
        item.badge_text,
        item.short_desc || item.deskripsi || "",
        item.full_desc || item.deskripsi || "",
        JSON.stringify(item.highlights || []),
        item.image || "",
        item.external_url || "",
        item.external_label || "",
        item.important_note || "",
        JSON.stringify(item.source || { name: "Pengelola", url: "" }),
        item.status,
      );
    }

    return { success: true, id };
  });

export const deleteDestinasiServerFn = createServerFn({ method: "POST" })
  .validator((data: unknown) => deleteItemSchema.parse(extractPayload(data)))
  .handler(async ({ data }) => {
    await requireAdmin(data.token);

    if (isSupabaseMode()) {
      const supabase = getSupabaseAdminClient();
      const { data: row } = await supabase
        .from("destinations")
        .select("image")
        .eq("id", data.id)
        .single();
      const { error } = await supabase.from("destinations").delete().eq("id", data.id);
      if (error) throw new Error(`Gagal menghapus destinasi: ${error.message}`);
      if (row?.image) deleteImageFile(row.image);
    } else {
      const row = db.prepare("SELECT image FROM destinations WHERE id = ?").get(data.id) as
        { image: string } | undefined;
      db.prepare("DELETE FROM destinations WHERE id = ?").run(data.id);
      if (row?.image) deleteImageFile(row.image);
    }
    return { success: true };
  });

// 3. Kegiatan / Agenda / Berita
export const extractOgImageServerFn = createServerFn({ method: "POST" })
  .validator((data: unknown) => extractOgImageSchema.parse(extractPayload(data)))
  .handler(async ({ data }) => {
    await requireAdmin(data.token);
    return await extractOgImageFromUrl(data.url);
  });

export const saveKegiatanServerFn = createServerFn({ method: "POST" })
  .validator((data: unknown) => kegiatanSchema.parse(extractPayload(data)))
  .handler(async ({ data }) => {
    await requireAdmin(data.token);
    const item = data.item;
    const id = item.id || `keg-${Date.now()}`;

    if (isSupabaseMode()) {
      const supabase = getSupabaseAdminClient();
      const { error } = await supabase.from("kegiatan").upsert({
        id,
        judul: item.judul,
        kategori: item.kategori,
        tanggal: item.tanggal,
        deskripsi: item.deskripsi || "",
        image: item.image || "",
        image_source: item.image_source || "upload",
        source_json: item.source || { name: "Pengelola", url: "" },
        status: item.status,
      });
      if (error) throw new Error(`Gagal menyimpan kegiatan: ${error.message}`);
    } else {
      try {
        db.exec("ALTER TABLE kegiatan ADD COLUMN image_source TEXT DEFAULT 'upload'");
      } catch {
        // Column already exists
      }
      db.prepare(
        `
        INSERT OR REPLACE INTO kegiatan (id, judul, kategori, tanggal, deskripsi, image, image_source, source_json, status)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
      ).run(
        id,
        item.judul,
        item.kategori,
        item.tanggal,
        item.deskripsi || "",
        item.image || "",
        item.image_source || "upload",
        JSON.stringify(item.source || { name: "Pengelola", url: "" }),
        item.status,
      );
    }

    return { success: true, id };
  });

export const deleteKegiatanServerFn = createServerFn({ method: "POST" })
  .validator((data: unknown) => deleteItemSchema.parse(extractPayload(data)))
  .handler(async ({ data }) => {
    await requireAdmin(data.token);

    if (isSupabaseMode()) {
      const supabase = getSupabaseAdminClient();
      const { data: row } = await supabase
        .from("kegiatan")
        .select("image")
        .eq("id", data.id)
        .single();
      const { error } = await supabase.from("kegiatan").delete().eq("id", data.id);
      if (error) throw new Error(`Gagal menghapus kegiatan: ${error.message}`);
      if (row?.image) deleteImageFile(row.image);
    } else {
      const row = db.prepare("SELECT image FROM kegiatan WHERE id = ?").get(data.id) as
        { image: string } | undefined;
      db.prepare("DELETE FROM kegiatan WHERE id = ?").run(data.id);
      if (row?.image) deleteImageFile(row.image);
    }
    return { success: true };
  });

// 4. UMKM & Produk
export const saveUmkmServerFn = createServerFn({ method: "POST" })
  .validator((data: unknown) => umkmSchema.parse(extractPayload(data)))
  .handler(async ({ data }) => {
    await requireAdmin(data.token);
    const item = data.item;
    const id = item.id || `umkm-${Date.now()}`;
    const slug = item.slug || item.nama.toLowerCase().replace(/[^a-z0-9]+/g, "-");

    if (isSupabaseMode()) {
      const supabase = getSupabaseAdminClient();
      const { error } = await supabase.from("umkm").upsert({
        id,
        nama: item.nama,
        slug,
        pemilik: item.pemilik,
        kategori: item.kategori,
        deskripsi: item.deskripsi || "",
        image: item.image || "",
        lokasi: item.lokasi,
        kontak: item.kontak,
        harga_info: item.hargaInfo,
        source_json: item.source || { name: "Pengelola", url: "" },
        status: item.status,
      });
      if (error) throw new Error(`Gagal menyimpan UMKM: ${error.message}`);
    } else {
      db.prepare(
        `
        INSERT OR REPLACE INTO umkm (id, nama, slug, pemilik, kategori, deskripsi, image, lokasi, kontak, harga_info, source_json, status)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
      ).run(
        id,
        item.nama,
        slug,
        item.pemilik,
        item.kategori,
        item.deskripsi || "",
        item.image || "",
        item.lokasi,
        item.kontak,
        item.hargaInfo,
        JSON.stringify(item.source || { name: "Pengelola", url: "" }),
        item.status,
      );
    }

    return { success: true, id };
  });

export const deleteUmkmServerFn = createServerFn({ method: "POST" })
  .validator((data: unknown) => deleteItemSchema.parse(extractPayload(data)))
  .handler(async ({ data }) => {
    await requireAdmin(data.token);

    if (isSupabaseMode()) {
      const supabase = getSupabaseAdminClient();
      const { data: row } = await supabase.from("umkm").select("image").eq("id", data.id).single();
      const { error } = await supabase.from("umkm").delete().eq("id", data.id);
      if (error) throw new Error(`Gagal menghapus UMKM: ${error.message}`);
      if (row?.image) deleteImageFile(row.image);
    } else {
      const row = db.prepare("SELECT image FROM umkm WHERE id = ?").get(data.id) as
        { image: string } | undefined;
      db.prepare("DELETE FROM umkm WHERE id = ?").run(data.id);
      if (row?.image) deleteImageFile(row.image);
    }
    return { success: true };
  });

// 5. Galeri Foto
export const saveGaleriServerFn = createServerFn({ method: "POST" })
  .validator((data: unknown) => galeriSchema.parse(extractPayload(data)))
  .handler(async ({ data }) => {
    await requireAdmin(data.token);
    const item = data.item;
    const id = item.id || `gal-${Date.now()}`;

    if (isSupabaseMode()) {
      const supabase = getSupabaseAdminClient();
      const { error } = await supabase.from("galleries").upsert({
        id,
        judul: item.judul,
        kategori: item.kategori,
        image: item.image,
        caption: item.caption || "",
        alt: item.alt || item.judul,
        sumber: item.sumber,
        status: item.status,
      });
      if (error) throw new Error(`Gagal menyimpan galeri: ${error.message}`);
    } else {
      db.prepare(
        `
        INSERT OR REPLACE INTO galleries (id, judul, kategori, image, caption, alt, sumber, status)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `,
      ).run(
        id,
        item.judul,
        item.kategori,
        item.image,
        item.caption || "",
        item.alt || item.judul,
        item.sumber,
        item.status,
      );
    }

    return { success: true, id };
  });

export const deleteGaleriServerFn = createServerFn({ method: "POST" })
  .validator((data: unknown) => deleteItemSchema.parse(extractPayload(data)))
  .handler(async ({ data }) => {
    await requireAdmin(data.token);

    if (isSupabaseMode()) {
      const supabase = getSupabaseAdminClient();
      const { data: row } = await supabase
        .from("galleries")
        .select("image")
        .eq("id", data.id)
        .single();
      const { error } = await supabase.from("galleries").delete().eq("id", data.id);
      if (error) throw new Error(`Gagal menghapus galeri: ${error.message}`);
      if (row?.image) deleteImageFile(row.image);
    } else {
      const row = db.prepare("SELECT image FROM galleries WHERE id = ?").get(data.id) as
        { image: string } | undefined;
      db.prepare("DELETE FROM galleries WHERE id = ?").run(data.id);
      if (row?.image) deleteImageFile(row.image);
    }
    return { success: true };
  });

// 6. Review Moderasi Status (approved, pending, rejected)
export const saveReviewServerFn = createServerFn({ method: "POST" })
  .validator((data: unknown) => adminReviewSchema.parse(extractPayload(data)))
  .handler(async ({ data }) => {
    await requireAdmin(data.token);
    const item = data.item;
    const id = item.id || `rev-${Date.now()}`;
    const avatarUrl =
      item.avatar ||
      `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80`;

    if (isSupabaseMode()) {
      const supabase = getSupabaseAdminClient();
      const { error } = await supabase.from("reviews").upsert({
        id,
        nama: item.nama,
        asal: item.asal || "Wisatawan",
        tipe_wisatawan: item.tipeWisatawan || item.tipe_wisatawan || "Keluarga",
        rating: Number(item.rating || 5),
        komentar: item.komentar,
        tanggal: item.tanggal || "Terbaru",
        avatar: avatarUrl,
        status: item.status,
      });
      if (error) throw new Error(`Gagal menyimpan review: ${error.message}`);
    } else {
      db.prepare(
        `
        INSERT OR REPLACE INTO reviews (id, nama, asal, tipe_wisatawan, rating, komentar, tanggal, avatar, status)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
      ).run(
        id,
        item.nama,
        item.asal || "Wisatawan",
        item.tipeWisatawan || item.tipe_wisatawan || "Keluarga",
        Number(item.rating || 5),
        item.komentar,
        item.tanggal || "Terbaru",
        avatarUrl,
        item.status,
      );
    }

    return { success: true, id };
  });

export const updateReviewStatusServerFn = createServerFn({ method: "POST" })
  .validator((data: unknown) => reviewStatusSchema.parse(extractPayload(data)))
  .handler(async ({ data }) => {
    await requireAdmin(data.token);

    if (isSupabaseMode()) {
      const supabase = getSupabaseAdminClient();
      const { error } = await supabase
        .from("reviews")
        .update({ status: data.status })
        .eq("id", data.id);
      if (error) throw new Error(`Gagal mengubah status review: ${error.message}`);
    } else {
      db.prepare("UPDATE reviews SET status = ? WHERE id = ?").run(data.status, data.id);
    }
    return { success: true };
  });

export const deleteReviewServerFn = createServerFn({ method: "POST" })
  .validator((data: unknown) => deleteItemSchema.parse(extractPayload(data)))
  .handler(async ({ data }) => {
    await requireAdmin(data.token);

    if (isSupabaseMode()) {
      const supabase = getSupabaseAdminClient();
      const { error } = await supabase.from("reviews").delete().eq("id", data.id);
      if (error) throw new Error(`Gagal menghapus review: ${error.message}`);
    } else {
      db.prepare("DELETE FROM reviews WHERE id = ?").run(data.id);
    }
    return { success: true };
  });

// 7. Homestays CRUD
export const saveHomestayServerFn = createServerFn({ method: "POST" })
  .validator((data: unknown) => homestaySchema.parse(extractPayload(data)))
  .handler(async ({ data }) => {
    await requireAdmin(data.token);
    const item = data.item;
    const id = item.id || `home-${Date.now()}`;
    const slug = item.slug || item.nama.toLowerCase().replace(/[^a-z0-9]+/g, "-");

    if (isSupabaseMode()) {
      const supabase = getSupabaseAdminClient();
      const { error } = await supabase.from("homestays").upsert({
        id,
        nama: item.nama,
        slug,
        pemilik: item.pemilik,
        kapasitas: item.kapasitas,
        kamar: item.kamar,
        harga_text: item.harga_text,
        fasilitas_json: item.fasilitas || [],
        lokasi: item.lokasi,
        kontak: item.kontak,
        image: item.image,
        status: item.status,
      });
      if (error) throw new Error(`Gagal menyimpan homestay: ${error.message}`);
    } else {
      db.prepare(
        `
        INSERT OR REPLACE INTO homestays (id, nama, slug, pemilik, kapasitas, kamar, harga_text, fasilitas_json, lokasi, kontak, image, status)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
      ).run(
        id,
        item.nama,
        slug,
        item.pemilik,
        item.kapasitas,
        item.kamar,
        item.harga_text,
        JSON.stringify(item.fasilitas || []),
        item.lokasi,
        item.kontak,
        item.image,
        item.status,
      );
    }

    return { success: true, id };
  });

export const deleteHomestayServerFn = createServerFn({ method: "POST" })
  .validator((data: unknown) => deleteItemSchema.parse(extractPayload(data)))
  .handler(async ({ data }) => {
    await requireAdmin(data.token);

    if (isSupabaseMode()) {
      const supabase = getSupabaseAdminClient();
      const { error } = await supabase.from("homestays").delete().eq("id", data.id);
      if (error) throw new Error(`Gagal menghapus homestay: ${error.message}`);
    } else {
      db.prepare("DELETE FROM homestays WHERE id = ?").run(data.id);
    }
    return { success: true };
  });

// 8. Paket Wisata CRUD
export const savePaketServerFn = createServerFn({ method: "POST" })
  .validator((data: unknown) => paketWisataSchema.parse(extractPayload(data)))
  .handler(async ({ data }) => {
    await requireAdmin(data.token);
    const item = data.item;
    const id = item.id || `pkg-${Date.now()}`;
    const slug = item.slug || item.nama.toLowerCase().replace(/[^a-z0-9]+/g, "-");

    if (isSupabaseMode()) {
      const supabase = getSupabaseAdminClient();
      const { error } = await supabase.from("packages").upsert({
        id,
        nama: item.nama,
        slug,
        kategori: item.kategori,
        durasi: item.durasi,
        lokasi_spesifik: item.lokasi_spesifik,
        harga_text: item.harga_text,
        target_visitor: item.target_visitor,
        deskripsi_lengkap: item.deskripsi_lengkap || item.highlight || "",
        highlight: item.highlight || "",
        image: item.image || "",
        fasilitas_json: item.fasilitas || [],
        itinerary_json: item.itinerary || [],
        source_json: item.source || { name: "Pengelola", url: "" },
        status: item.status,
      });
      if (error) throw new Error(`Gagal menyimpan paket wisata: ${error.message}`);
    } else {
      db.prepare(
        `
        INSERT OR REPLACE INTO packages (id, nama, slug, kategori, durasi, lokasi_spesifik, harga_text, target_visitor, deskripsi_lengkap, highlight, image, fasilitas_json, itinerary_json, source_json, status)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
      ).run(
        id,
        item.nama,
        slug,
        item.kategori,
        item.durasi,
        item.lokasi_spesifik,
        item.harga_text,
        item.target_visitor,
        item.deskripsi_lengkap || item.highlight || "",
        item.highlight || "",
        item.image || "",
        JSON.stringify(item.fasilitas || []),
        JSON.stringify(item.itinerary || []),
        JSON.stringify(item.source || { name: "Pengelola", url: "" }),
        item.status,
      );
    }

    return { success: true, id };
  });

export const deletePaketServerFn = createServerFn({ method: "POST" })
  .validator((data: unknown) => deleteItemSchema.parse(extractPayload(data)))
  .handler(async ({ data }) => {
    await requireAdmin(data.token);

    if (isSupabaseMode()) {
      const supabase = getSupabaseAdminClient();
      const { error } = await supabase.from("packages").delete().eq("id", data.id);
      if (error) throw new Error(`Gagal menghapus paket wisata: ${error.message}`);
    } else {
      db.prepare("DELETE FROM packages WHERE id = ?").run(data.id);
    }
    return { success: true };
  });

// 9. FAQ CRUD
export const saveFaqServerFn = createServerFn({ method: "POST" })
  .validator((data: unknown) => faqSchema.parse(extractPayload(data)))
  .handler(async ({ data }) => {
    await requireAdmin(data.token);
    const item = data.item;
    const id = item.id || `faq-${Date.now()}`;

    if (isSupabaseMode()) {
      const supabase = getSupabaseAdminClient();
      const { error } = await supabase.from("faqs").upsert({
        id,
        pertanyaan: item.pertanyaan,
        jawaban: item.jawaban,
        kategori: item.kategori,
        status: item.status,
      });
      if (error) throw new Error(`Gagal menyimpan FAQ: ${error.message}`);
    } else {
      db.prepare(
        `
        INSERT OR REPLACE INTO faqs (id, pertanyaan, jawaban, kategori, status)
        VALUES (?, ?, ?, ?, ?)
      `,
      ).run(id, item.pertanyaan, item.jawaban, item.kategori, item.status);
    }

    return { success: true, id };
  });

export const deleteFaqServerFn = createServerFn({ method: "POST" })
  .validator((data: unknown) => deleteItemSchema.parse(extractPayload(data)))
  .handler(async ({ data }) => {
    await requireAdmin(data.token);

    if (isSupabaseMode()) {
      const supabase = getSupabaseAdminClient();
      const { error } = await supabase.from("faqs").delete().eq("id", data.id);
      if (error) throw new Error(`Gagal menghapus FAQ: ${error.message}`);
    } else {
      db.prepare("DELETE FROM faqs WHERE id = ?").run(data.id);
    }
    return { success: true };
  });

// 10. Reservasi Status Update & Delete
export const updateReservationStatusServerFn = createServerFn({ method: "POST" })
  .validator((data: unknown) => reservationStatusSchema.parse(extractPayload(data)))
  .handler(async ({ data }) => {
    await requireAdmin(data.token);

    if (isSupabaseMode()) {
      const supabase = getSupabaseAdminClient();
      const { error } = await supabase
        .from("reservations")
        .update({ status: data.status })
        .eq("id", data.id);
      if (error) throw new Error(`Gagal mengubah status reservasi: ${error.message}`);
    } else {
      db.prepare("UPDATE reservations SET status = ? WHERE id = ?").run(data.status, data.id);
    }
    return { success: true };
  });

export const deleteReservationServerFn = createServerFn({ method: "POST" })
  .validator((data: unknown) => deleteItemSchema.parse(extractPayload(data)))
  .handler(async ({ data }) => {
    await requireAdmin(data.token);

    if (isSupabaseMode()) {
      const supabase = getSupabaseAdminClient();
      const { error } = await supabase.from("reservations").delete().eq("id", data.id);
      if (error) throw new Error(`Gagal menghapus reservasi: ${error.message}`);
    } else {
      db.prepare("DELETE FROM reservations WHERE id = ?").run(data.id);
    }
    return { success: true };
  });
