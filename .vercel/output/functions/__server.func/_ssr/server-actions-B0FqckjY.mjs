import {
  A as paketWisataSchema,
  E as loginInputSchema,
  H as umkmSchema,
  I as reservationPublicSchema,
  L as reservationStatusSchema,
  M as publicReviewSchema,
  N as recordPageViewSchema,
  R as reviewStatusSchema,
  S as kegiatanSchema,
  U as villageInfoSchema,
  V as tokenOnlySchema,
  W as villages,
  _ as galeriDataset,
  b as homestaySchema,
  c as cbtExperiences8,
  d as destinasiSchema,
  l as changePasswordInputSchema,
  m as faqSchema,
  o as adminReviewSchema,
  p as extractOgImageSchema,
  u as deleteItemSchema,
  v as galeriSchema,
  x as imageUploadSchema,
} from "./schemas-DIbXu2MH.mjs";
import {
  o as getRequestHeader,
  r as createServerFn,
  t as TSS_SERVER_FUNCTION,
} from "./server-o1JyFher.mjs";
import { t as bcryptjs_default } from "../_libs/bcryptjs.mjs";
import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
import crypto$1 from "node:crypto";
import nodeCrypto from "crypto";
import fs from "node:fs";
import path from "node:path";
import Database from "better-sqlite3";
import sharp from "sharp";
//#region node_modules/.nitro/vite/services/ssr/assets/server-actions-B0FqckjY.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
  const url = "/_serverFn/" + serverFnMeta.id;
  return Object.assign(splitImportFn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true,
  });
};
var DEFAULT_SITE_URL = "https://desawisataekanganculai.id";
function generateSitemapXml() {
  const baseUrl = (process.env["SITE_URL"] || DEFAULT_SITE_URL).replace(/\/$/, "");
  const staticRoutes = [
    {
      path: "/",
      priority: "1.0",
      changefreq: "daily",
    },
    {
      path: "/desa/ekang-anculai",
      priority: "0.9",
      changefreq: "weekly",
    },
    {
      path: "/galeri",
      priority: "0.8",
      changefreq: "weekly",
    },
    {
      path: "/rencanakan-kunjungan",
      priority: "0.8",
      changefreq: "weekly",
    },
  ];
  let publishedSlugs = ["ekang-anculai"];
  try {
    if (db && typeof db.prepare === "function") {
      const rows = db.prepare("SELECT slug FROM destinations WHERE status = 'published'").all();
      if (rows && rows.length > 0) publishedSlugs = Array.from(new Set(rows.map((r) => r.slug)));
    }
  } catch (err) {
    console.error("Gagal membaca slug destinasi dari database untuk sitemap:", err);
  }
  const todayIso = /* @__PURE__ */ new Date().toISOString().split("T")[0];
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  for (const route of staticRoutes) {
    xml += `  <url>\n`;
    xml += `    <loc>${baseUrl}${route.path}</loc>\n`;
    xml += `    <lastmod>${todayIso}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += `  </url>\n`;
  }
  for (const slug of publishedSlugs) {
    if (slug === "ekang-anculai") continue;
    xml += `  <url>\n`;
    xml += `    <loc>${baseUrl}/desa/${slug}</loc>\n`;
    xml += `    <lastmod>${todayIso}</lastmod>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>0.8</priority>\n`;
    xml += `  </url>\n`;
  }
  xml += `</urlset>\n`;
  return xml;
}
function writeSitemapFile() {
  try {
    const xmlContent = generateSitemapXml();
    const publicDir = path.join(process.cwd(), "public");
    if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
    const sitemapPath = path.join(publicDir, "sitemap.xml");
    fs.writeFileSync(sitemapPath, xmlContent, "utf-8");
  } catch (err) {
    console.error("Gagal menulis file sitemap.xml:", err);
  }
}
var dataDir = path.join(process.cwd(), "data");
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
var dbPath = path.join(dataDir, "ekang_anculai.db");
var db = new Database(dbPath);
db.pragma("journal_mode = WAL");
db.pragma("foreign_keys = ON");
function initDatabase() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      role TEXT NOT NULL DEFAULT 'admin',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);
  db.exec(`
    CREATE TABLE IF NOT EXISTS sessions (
      id TEXT PRIMARY KEY,
      user_id INTEGER NOT NULL,
      expires_at DATETIME NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );
  `);
  db.exec(`
    CREATE TABLE IF NOT EXISTS village_info (
      key TEXT PRIMARY KEY,
      value TEXT NOT NULL
    );
  `);
  db.exec(`
    CREATE TABLE IF NOT EXISTS destinations (
      id TEXT PRIMARY KEY,
      num TEXT,
      nama TEXT NOT NULL,
      slug TEXT UNIQUE NOT NULL,
      kategori TEXT NOT NULL,
      badge_status TEXT NOT NULL,
      badge_text TEXT NOT NULL,
      short_desc TEXT,
      full_desc TEXT,
      highlights_json TEXT,
      image TEXT,
      external_url TEXT,
      external_label TEXT,
      important_note TEXT,
      source_json TEXT,
      status TEXT DEFAULT 'published',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);
  db.exec(`
    CREATE TABLE IF NOT EXISTS packages (
      id TEXT PRIMARY KEY,
      nama TEXT NOT NULL,
      slug TEXT UNIQUE NOT NULL,
      kategori TEXT NOT NULL,
      durasi TEXT NOT NULL,
      lokasi_spesifik TEXT,
      harga_text TEXT,
      target_visitor TEXT,
      deskripsi_lengkap TEXT,
      highlight TEXT,
      image TEXT,
      fasilitas_json TEXT,
      itinerary_json TEXT,
      source_json TEXT,
      status TEXT DEFAULT 'published',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);
  db.exec(`
    CREATE TABLE IF NOT EXISTS umkm (
      id TEXT PRIMARY KEY,
      nama TEXT NOT NULL,
      slug TEXT UNIQUE NOT NULL,
      pemilik TEXT,
      kategori TEXT NOT NULL,
      deskripsi TEXT,
      image TEXT,
      lokasi TEXT,
      kontak TEXT,
      harga_info TEXT,
      source_json TEXT,
      status TEXT DEFAULT 'published',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);
  db.exec(`
    CREATE TABLE IF NOT EXISTS homestays (
      id TEXT PRIMARY KEY,
      nama TEXT NOT NULL,
      slug TEXT UNIQUE NOT NULL,
      pemilik TEXT,
      kapasitas TEXT,
      kamar INTEGER DEFAULT 1,
      harga_text TEXT,
      fasilitas_json TEXT,
      lokasi TEXT,
      kontak TEXT,
      image TEXT,
      status TEXT DEFAULT 'published',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);
  db.exec(`
    CREATE TABLE IF NOT EXISTS kegiatan (
      id TEXT PRIMARY KEY,
      judul TEXT NOT NULL,
      kategori TEXT NOT NULL,
      tanggal TEXT NOT NULL,
      deskripsi TEXT,
      image TEXT,
      image_source TEXT DEFAULT 'upload',
      source_json TEXT,
      status TEXT DEFAULT 'published',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);
  try {
    db.exec("ALTER TABLE kegiatan ADD COLUMN image_source TEXT DEFAULT 'upload'");
  } catch {}
  db.exec(`
    CREATE TABLE IF NOT EXISTS galleries (
      id TEXT PRIMARY KEY,
      judul TEXT NOT NULL,
      kategori TEXT NOT NULL,
      image TEXT NOT NULL,
      caption TEXT,
      alt TEXT,
      sumber TEXT,
      status TEXT DEFAULT 'published',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);
  db.exec(`
    CREATE TABLE IF NOT EXISTS reviews (
      id TEXT PRIMARY KEY,
      nama TEXT NOT NULL,
      asal TEXT NOT NULL,
      tipe_wisatawan TEXT NOT NULL,
      rating INTEGER NOT NULL,
      komentar TEXT NOT NULL,
      tanggal TEXT NOT NULL,
      avatar TEXT,
      status TEXT NOT NULL DEFAULT 'approved',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);
  db.exec(`
    CREATE TABLE IF NOT EXISTS reservations (
      id TEXT PRIMARY KEY,
      kode_reservasi TEXT UNIQUE NOT NULL,
      nama_pemesan TEXT NOT NULL,
      whatsapp TEXT NOT NULL,
      email TEXT,
      tanggal_kunjungan TEXT NOT NULL,
      jam_kedatangan TEXT NOT NULL,
      jumlah_dewasa INTEGER DEFAULT 1,
      jumlah_anak INTEGER DEFAULT 0,
      opsi_kunjungan TEXT,
      aktivitas_json TEXT,
      catatan TEXT,
      status TEXT NOT NULL DEFAULT 'pending',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);
  db.exec(`
    CREATE TABLE IF NOT EXISTS faqs (
      id TEXT PRIMARY KEY,
      pertanyaan TEXT NOT NULL,
      jawaban TEXT NOT NULL,
      kategori TEXT NOT NULL DEFAULT 'Umum',
      status TEXT NOT NULL DEFAULT 'published',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);
  db.exec(`
    CREATE TABLE IF NOT EXISTS cbt_experiences (
      id TEXT PRIMARY KEY,
      step INTEGER NOT NULL,
      title TEXT NOT NULL,
      desc TEXT NOT NULL,
      image TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'published',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);
  db.exec(`
    CREATE TABLE IF NOT EXISTS rate_limits (
      key TEXT PRIMARY KEY,
      count INTEGER NOT NULL DEFAULT 1,
      first_attempt_at INTEGER NOT NULL,
      blocked_until INTEGER NOT NULL DEFAULT 0
    );
  `);
  db.exec(`
    CREATE TABLE IF NOT EXISTS page_views (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      path TEXT NOT NULL,
      ip_hash TEXT NOT NULL,
      user_agent TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);
  db.exec(`
    CREATE INDEX IF NOT EXISTS idx_sessions_user_id ON sessions(user_id);
    CREATE INDEX IF NOT EXISTS idx_sessions_expires_at ON sessions(expires_at);

    CREATE INDEX IF NOT EXISTS idx_destinations_status ON destinations(status);
    CREATE INDEX IF NOT EXISTS idx_destinations_slug ON destinations(slug);
    CREATE INDEX IF NOT EXISTS idx_destinations_created_at ON destinations(created_at);

    CREATE INDEX IF NOT EXISTS idx_packages_status ON packages(status);
    CREATE INDEX IF NOT EXISTS idx_packages_slug ON packages(slug);

    CREATE INDEX IF NOT EXISTS idx_umkm_status ON umkm(status);
    CREATE INDEX IF NOT EXISTS idx_umkm_slug ON umkm(slug);
    CREATE INDEX IF NOT EXISTS idx_umkm_created_at ON umkm(created_at);

    CREATE INDEX IF NOT EXISTS idx_homestays_status ON homestays(status);
    CREATE INDEX IF NOT EXISTS idx_homestays_slug ON homestays(slug);

    CREATE INDEX IF NOT EXISTS idx_kegiatan_status ON kegiatan(status);
    CREATE INDEX IF NOT EXISTS idx_kegiatan_created_at ON kegiatan(created_at);

    CREATE INDEX IF NOT EXISTS idx_galleries_status ON galleries(status);
    CREATE INDEX IF NOT EXISTS idx_galleries_kategori ON galleries(kategori);
    CREATE INDEX IF NOT EXISTS idx_galleries_created_at ON galleries(created_at);

    CREATE INDEX IF NOT EXISTS idx_reviews_status ON reviews(status);
    CREATE INDEX IF NOT EXISTS idx_reviews_created_at ON reviews(created_at);

    CREATE INDEX IF NOT EXISTS idx_reservations_status ON reservations(status);
    CREATE INDEX IF NOT EXISTS idx_reservations_kode ON reservations(kode_reservasi);
    CREATE INDEX IF NOT EXISTS idx_reservations_whatsapp_tgl ON reservations(whatsapp, tanggal_kunjungan);
    CREATE INDEX IF NOT EXISTS idx_reservations_created_at ON reservations(created_at);

    CREATE INDEX IF NOT EXISTS idx_faqs_status ON faqs(status);
    CREATE INDEX IF NOT EXISTS idx_rate_limits_blocked ON rate_limits(blocked_until);
    CREATE INDEX IF NOT EXISTS idx_page_views_path ON page_views(path);
    CREATE INDEX IF NOT EXISTS idx_page_views_created ON page_views(created_at);
    CREATE INDEX IF NOT EXISTS idx_page_views_ip_hash ON page_views(ip_hash);
  `);
  seedDefaultData();
}
function seedDefaultData() {
  try {
    if (db.prepare("SELECT COUNT(*) as count FROM users").get().count === 0) {
      const initialPassword = process.env["ADMIN_INITIAL_PASSWORD"];
      if (!initialPassword || initialPassword.trim() === "")
        console.warn(
          "[SECURITY NOTICE] Tidak ada akun admin di database dan 'ADMIN_INITIAL_PASSWORD' belum disetel di environment variable. Akun default TIDAK dibuat otomatis. Silakan setel ADMIN_INITIAL_PASSWORD di file .env atau gunakan scripts/reset-admin-password.js.",
        );
      else {
        const adminUsername = process.env["ADMIN_INITIAL_USERNAME"]?.trim() || "admin";
        const adminPasswordHash = bcryptjs_default.hashSync(initialPassword.trim(), 10);
        db.prepare(
          "INSERT OR IGNORE INTO users (username, password_hash, role) VALUES (?, ?, ?)",
        ).run(adminUsername, adminPasswordHash, "admin");
        console.info(
          `[SECURITY AUDIT] Akun administrator '${adminUsername}' berhasil di-bootstrap dari ADMIN_INITIAL_PASSWORD.`,
        );
      }
    }
    if (db.prepare("SELECT COUNT(*) as count FROM village_info").get().count === 0) {
      const v = villages[0];
      if (v) {
        const infoMap = {
          nama: v.nama,
          tagline: v.tagline,
          whatsapp: v.whatsapp,
          email: v.email ?? "",
          alamat: v.alamat ?? "",
          luasDesa: v.luasDesa ?? "",
          luasKawasanWisata: v.luasKawasanWisata ?? "",
          jamOperasional: v.jamOperasional ?? "",
          waktuTerbaik: v.waktuTerbaik ?? "",
          pokdarwis: v.pokdarwis,
          instagram: v.instagram ?? "",
          facebook: v.facebook ?? "",
          tiktok: v.tiktok ?? "",
          pemdesWebsite: v.pemdesWebsite ?? "",
        };
        const insertStmt = db.prepare(
          "INSERT OR REPLACE INTO village_info (key, value) VALUES (?, ?)",
        );
        for (const [k, val] of Object.entries(infoMap)) insertStmt.run(k, String(val));
      }
    }
    if (
      db.prepare("SELECT COUNT(*) as count FROM destinations").get().count === 0 &&
      villages[0]?.landmarkList
    ) {
      const insertDest = db.prepare(`
        INSERT OR IGNORE INTO destinations (id, num, nama, slug, kategori, badge_status, badge_text, short_desc, full_desc, highlights_json, image, external_url, external_label, important_note, source_json, status)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'published')
      `);
      for (const lm of villages[0].landmarkList)
        insertDest.run(
          lm.id,
          "01",
          lm.nama,
          lm.id,
          lm.kategori,
          "TERKONFIRMASI",
          "Galeri Resmi",
          lm.deskripsi,
          lm.deskripsi,
          JSON.stringify([]),
          lm.image,
          "",
          "",
          "",
          JSON.stringify(lm.source),
        );
    }
    if (
      db.prepare("SELECT COUNT(*) as count FROM packages").get().count === 0 &&
      villages[0]?.paket
    ) {
      const insertPkg = db.prepare(`
        INSERT OR IGNORE INTO packages (id, nama, slug, kategori, durasi, lokasi_spesifik, harga_text, target_visitor, deskripsi_lengkap, highlight, image, fasilitas_json, itinerary_json, source_json, status)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'published')
      `);
      for (const p of villages[0].paket)
        insertPkg.run(
          p.id,
          p.nama,
          p.id,
          p.kategori,
          p.durasi,
          p.lokasiSpesifik,
          p.hargaText,
          p.targetVisitor || "",
          p.deskripsiLengkap || p.highlight,
          p.highlight,
          p.image,
          JSON.stringify(p.fasilitas || []),
          JSON.stringify(p.itinerary || p.itineraryHari1 || []),
          JSON.stringify(p.source),
        );
    }
    if (
      db.prepare("SELECT COUNT(*) as count FROM umkm").get().count === 0 &&
      villages[0]?.umkmList
    ) {
      const insertUmkm = db.prepare(`
        INSERT OR IGNORE INTO umkm (id, nama, slug, pemilik, kategori, deskripsi, image, lokasi, kontak, harga_info, source_json, status)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'published')
      `);
      for (const u of villages[0].umkmList)
        insertUmkm.run(
          u.id,
          u.nama,
          u.id,
          "Masyarakat Desa Ekang",
          u.kategori,
          u.deskripsi,
          u.image,
          u.lokasi || "Ekang Anculai",
          u.kontak || "6283166341280",
          u.hargaInfo,
          JSON.stringify(u.source),
        );
    }
    if (
      db.prepare("SELECT COUNT(*) as count FROM kegiatan").get().count === 0 &&
      villages[0]?.kegiatanList
    ) {
      const insertKeg = db.prepare(`
        INSERT OR IGNORE INTO kegiatan (id, judul, kategori, tanggal, deskripsi, image, source_json, status)
        VALUES (?, ?, ?, ?, ?, ?, ?, 'published')
      `);
      for (const k of villages[0].kegiatanList)
        insertKeg.run(
          k.id,
          k.judul,
          k.kategori,
          k.tanggal,
          k.deskripsi,
          k.image || "",
          JSON.stringify(k.source),
        );
    }
    if (db.prepare("SELECT COUNT(*) as count FROM galleries").get().count === 0) {
      const insertGal = db.prepare(`
        INSERT OR IGNORE INTO galleries (id, judul, kategori, image, caption, alt, sumber, status)
        VALUES (?, ?, ?, ?, ?, ?, ?, 'published')
      `);
      for (const g of galeriDataset)
        insertGal.run(
          g.id,
          g.judul,
          g.kategori,
          g.image,
          g.caption,
          g.alt,
          g.sumber || "Pengelola",
        );
    }
    if (
      db.prepare("SELECT COUNT(*) as count FROM reviews").get().count === 0 &&
      villages[0]?.reviews
    ) {
      const insertRev = db.prepare(`
        INSERT OR IGNORE INTO reviews (id, nama, asal, tipe_wisatawan, rating, komentar, tanggal, avatar, status)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'approved')
      `);
      for (const r of villages[0].reviews)
        insertRev.run(
          r.id,
          r.nama,
          r.asal,
          r.tipeWisatawan,
          r.rating,
          r.komentar,
          r.tanggal,
          r.avatar || "",
        );
    }
    if (db.prepare("SELECT COUNT(*) as count FROM cbt_experiences").get().count === 0) {
      const insertCbt = db.prepare(`
        INSERT OR IGNORE INTO cbt_experiences (id, step, title, desc, image, status)
        VALUES (?, ?, ?, ?, ?, 'published')
      `);
      cbtExperiences8.forEach((item, idx) => {
        insertCbt.run(`cbt-${idx + 1}`, item.step, item.title, item.desc, item.image);
      });
    }
    if (db.prepare("SELECT COUNT(*) as count FROM faqs").get().count === 0 && villages[0]?.faqs) {
      const insertFaq = db.prepare(`
        INSERT OR IGNORE INTO faqs (id, pertanyaan, jawaban, kategori, status)
        VALUES (?, ?, ?, ?, 'published')
      `);
      villages[0].faqs.forEach((f, idx) => {
        insertFaq.run(`faq-${idx + 1}`, f.pertanyaan, f.jawaban, "Umum");
      });
    }
    try {
      writeSitemapFile();
    } catch (err) {
      console.error("Gagal men-generate sitemap.xml di db init:", err);
    }
  } catch (err) {
    console.error("Gagal menjalankan seedDefaultData:", err);
  }
}
initDatabase();
/**
 * Server-Side Privileged Supabase Client (Service Role)
 *
 * PENTING:
 * - File ini bertipe `.server.ts` dan HANYA boleh diimpor di lingkungan server (Nitro SSR / Server Functions).
 * - Menggunakan SUPABASE_SERVICE_ROLE_KEY untuk operasi database/storage server-side.
 * - Tidak boleh diimpor dari browser / komponen React / client bundles.
 * - Service role hanyalah kredensial koneksi server-side, BUKAN identitas otorisasi admin aplikasi.
 *   Otorisasi admin aplikasi tetap wajib melalui session verification `requireAdmin()`.
 */
var adminClientInstance = null;
function isSupabaseAdminConfigured() {
  const url = process.env["SUPABASE_URL"];
  const serviceRoleKey = process.env["SUPABASE_SERVICE_ROLE_KEY"];
  return Boolean(
    url &&
    serviceRoleKey &&
    url.trim() !== "" &&
    serviceRoleKey.trim() !== "" &&
    !url.includes("placeholder") &&
    !url.includes("your-project") &&
    !serviceRoleKey.includes("placeholder") &&
    !serviceRoleKey.includes("your-key"),
  );
}
function getSupabaseAdminClient() {
  if (adminClientInstance) return adminClientInstance;
  const url = process.env["SUPABASE_URL"];
  const serviceRoleKey = process.env["SUPABASE_SERVICE_ROLE_KEY"];
  if (!url || !serviceRoleKey || !isSupabaseAdminConfigured())
    throw new Error(
      "[SUPABASE CONFIG ERROR] SUPABASE_URL atau SUPABASE_SERVICE_ROLE_KEY belum disetel dengan benar di environment server. Pastikan kredensial Supabase terpasang.",
    );
  adminClientInstance = createClient(url, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
  return adminClientInstance;
}
function getDatabaseMode() {
  const mode = process.env["DATABASE_MODE"]?.toLowerCase()?.trim();
  if (mode === "sqlite") return "sqlite";
  if (mode === "supabase") return "supabase";
  return isSupabaseAdminConfigured() ? "supabase" : "sqlite";
}
function parseJsonField(field, defaultValue) {
  if (field === null || field === void 0) return defaultValue;
  if (typeof field === "object") return field;
  if (typeof field === "string")
    try {
      return JSON.parse(field);
    } catch {
      return defaultValue;
    }
  return defaultValue;
}
/**
 * 1. Village Info (Key-Value Map)
 */
async function getVillageInfo() {
  if (getDatabaseMode() === "supabase") {
    const { data, error } = await getSupabaseAdminClient()
      .from("village_info")
      .select("key, value");
    if (error)
      throw new Error(
        `[REPOSITORY ERROR] Gagal membaca village_info dari Supabase: ${error.message}`,
      );
    const map = {};
    for (const row of data || []) if (row.key) map[row.key] = row.value || "";
    return map;
  }
  const rows = db.prepare("SELECT key, value FROM village_info").all();
  const map = {};
  for (const r of rows) map[r.key] = r.value;
  return map;
}
/**
 * 2. Destinations
 */
async function getDestinations(options) {
  const publishedOnly = options?.publishedOnly ?? true;
  if (getDatabaseMode() === "supabase") {
    let query = getSupabaseAdminClient()
      .from("destinations")
      .select("*")
      .order("created_at", { ascending: true });
    if (publishedOnly) query = query.eq("status", "published");
    const { data, error } = await query;
    if (error)
      throw new Error(
        `[REPOSITORY ERROR] Gagal membaca destinations dari Supabase: ${error.message}`,
      );
    return (data || []).map((r) => ({
      id: r.id,
      num: r.num,
      nama: r.nama,
      slug: r.slug,
      kategori: r.kategori,
      badge_status: r.badge_status,
      badge_text: r.badge_text,
      short_desc: r.short_desc,
      full_desc: r.full_desc,
      highlights_json: parseJsonField(r.highlights_json, []),
      image: r.image,
      external_url: r.external_url,
      external_label: r.external_label,
      important_note: r.important_note,
      source_json: parseJsonField(r.source_json, {}),
      status: r.status,
      created_at: r.created_at,
    }));
  }
  const sql = publishedOnly
    ? "SELECT * FROM destinations WHERE status = 'published' ORDER BY created_at ASC"
    : "SELECT * FROM destinations ORDER BY created_at ASC";
  return db
    .prepare(sql)
    .all()
    .map((r) => ({
      id: String(r["id"]),
      num: r["num"] ? String(r["num"]) : null,
      nama: String(r["nama"]),
      slug: String(r["slug"]),
      kategori: String(r["kategori"]),
      badge_status: r["badge_status"] ? String(r["badge_status"]) : null,
      badge_text: r["badge_text"] ? String(r["badge_text"]) : null,
      short_desc: r["short_desc"] ? String(r["short_desc"]) : null,
      full_desc: r["full_desc"] ? String(r["full_desc"]) : null,
      highlights_json: parseJsonField(r["highlights_json"], []),
      image: r["image"] ? String(r["image"]) : null,
      external_url: r["external_url"] ? String(r["external_url"]) : null,
      external_label: r["external_label"] ? String(r["external_label"]) : null,
      important_note: r["important_note"] ? String(r["important_note"]) : null,
      source_json: parseJsonField(r["source_json"], {}),
      status: String(r["status"]),
      created_at: r["created_at"] ? String(r["created_at"]) : void 0,
    }));
}
/**
 * 4. UMKM
 */
async function getUMKM(options) {
  const publishedOnly = options?.publishedOnly ?? true;
  if (getDatabaseMode() === "supabase") {
    let query = getSupabaseAdminClient()
      .from("umkm")
      .select("*")
      .order("created_at", { ascending: true });
    if (publishedOnly) query = query.eq("status", "published");
    const { data, error } = await query;
    if (error)
      throw new Error(`[REPOSITORY ERROR] Gagal membaca umkm dari Supabase: ${error.message}`);
    return (data || []).map((r) => ({
      id: r.id,
      nama: r.nama,
      slug: r.slug,
      pemilik: r.pemilik,
      kategori: r.kategori,
      deskripsi: r.deskripsi,
      image: r.image,
      lokasi: r.lokasi,
      kontak: r.kontak,
      harga_info: r.harga_info,
      source_json: parseJsonField(r.source_json, {}),
      status: r.status,
      created_at: r.created_at,
    }));
  }
  const sql = publishedOnly
    ? "SELECT * FROM umkm WHERE status = 'published' ORDER BY created_at ASC"
    : "SELECT * FROM umkm ORDER BY created_at ASC";
  return db
    .prepare(sql)
    .all()
    .map((r) => ({
      id: String(r["id"]),
      nama: String(r["nama"]),
      slug: String(r["slug"]),
      pemilik: r["pemilik"] ? String(r["pemilik"]) : null,
      kategori: String(r["kategori"]),
      deskripsi: r["deskripsi"] ? String(r["deskripsi"]) : null,
      image: r["image"] ? String(r["image"]) : null,
      lokasi: r["lokasi"] ? String(r["lokasi"]) : null,
      kontak: r["kontak"] ? String(r["kontak"]) : null,
      harga_info: r["harga_info"] ? String(r["harga_info"]) : null,
      source_json: parseJsonField(r["source_json"], {}),
      status: String(r["status"]),
      created_at: r["created_at"] ? String(r["created_at"]) : void 0,
    }));
}
/**
 * 5. Homestays
 */
async function getHomestays(options) {
  const publishedOnly = options?.publishedOnly ?? true;
  if (getDatabaseMode() === "supabase") {
    let query = getSupabaseAdminClient()
      .from("homestays")
      .select("*")
      .order("created_at", { ascending: true });
    if (publishedOnly) query = query.eq("status", "published");
    const { data, error } = await query;
    if (error)
      throw new Error(`[REPOSITORY ERROR] Gagal membaca homestays dari Supabase: ${error.message}`);
    return (data || []).map((r) => ({
      id: r.id,
      nama: r.nama,
      slug: r.slug,
      pemilik: r.pemilik,
      kapasitas: r.kapasitas,
      kamar: r.kamar,
      harga_text: r.harga_text,
      fasilitas_json: parseJsonField(r.fasilitas_json, []),
      lokasi: r.lokasi,
      kontak: r.kontak,
      image: r.image,
      status: r.status,
      created_at: r.created_at,
    }));
  }
  const sql = publishedOnly
    ? "SELECT * FROM homestays WHERE status = 'published' ORDER BY created_at ASC"
    : "SELECT * FROM homestays ORDER BY created_at ASC";
  return db
    .prepare(sql)
    .all()
    .map((r) => ({
      id: String(r["id"]),
      nama: String(r["nama"]),
      slug: String(r["slug"]),
      pemilik: r["pemilik"] ? String(r["pemilik"]) : null,
      kapasitas: r["kapasitas"] ? String(r["kapasitas"]) : null,
      kamar: typeof r["kamar"] === "number" ? r["kamar"] : 1,
      harga_text: r["harga_text"] ? String(r["harga_text"]) : null,
      fasilitas_json: parseJsonField(r["fasilitas_json"], []),
      lokasi: r["lokasi"] ? String(r["lokasi"]) : null,
      kontak: r["kontak"] ? String(r["kontak"]) : null,
      image: r["image"] ? String(r["image"]) : null,
      status: String(r["status"]),
      created_at: r["created_at"] ? String(r["created_at"]) : void 0,
    }));
}
/**
 * 6. Kegiatan / News
 */
async function getKegiatan(options) {
  const publishedOnly = options?.publishedOnly ?? true;
  if (getDatabaseMode() === "supabase") {
    let query = getSupabaseAdminClient()
      .from("kegiatan")
      .select("*")
      .order("created_at", { ascending: false });
    if (publishedOnly) query = query.eq("status", "published");
    const { data, error } = await query;
    if (error)
      throw new Error(`[REPOSITORY ERROR] Gagal membaca kegiatan dari Supabase: ${error.message}`);
    return (data || []).map((r) => ({
      id: r.id,
      judul: r.judul,
      kategori: r.kategori,
      tanggal: r.tanggal || "",
      deskripsi: r.deskripsi,
      image: r.image,
      source_json: parseJsonField(r.source_json, {}),
      status: r.status,
      created_at: r.created_at,
    }));
  }
  const sql = publishedOnly
    ? "SELECT * FROM kegiatan WHERE status = 'published' ORDER BY created_at DESC"
    : "SELECT * FROM kegiatan ORDER BY created_at DESC";
  return db
    .prepare(sql)
    .all()
    .map((r) => ({
      id: String(r["id"]),
      judul: String(r["judul"]),
      kategori: String(r["kategori"]),
      tanggal: String(r["tanggal"] || ""),
      deskripsi: r["deskripsi"] ? String(r["deskripsi"]) : null,
      image: r["image"] ? String(r["image"]) : null,
      source_json: parseJsonField(r["source_json"], {}),
      status: String(r["status"]),
      created_at: r["created_at"] ? String(r["created_at"]) : void 0,
    }));
}
/**
 * 7. Galleries
 */
async function getGalleries(options) {
  const publishedOnly = options?.publishedOnly ?? true;
  if (getDatabaseMode() === "supabase") {
    let query = getSupabaseAdminClient()
      .from("galleries")
      .select("*")
      .order("created_at", { ascending: true });
    if (publishedOnly) query = query.eq("status", "published");
    if (options?.kategori && options.kategori !== "Semua")
      query = query.eq("kategori", options.kategori);
    const { data, error } = await query;
    if (error)
      throw new Error(`[REPOSITORY ERROR] Gagal membaca galleries dari Supabase: ${error.message}`);
    return (data || []).map((r) => ({
      id: r.id,
      judul: r.judul,
      kategori: r.kategori,
      image: r.image,
      caption: r.caption,
      alt: r.alt,
      sumber: r.sumber,
      status: r.status,
      created_at: r.created_at,
    }));
  }
  let sql = publishedOnly
    ? "SELECT * FROM galleries WHERE status = 'published'"
    : "SELECT * FROM galleries WHERE 1=1";
  const params = [];
  if (options?.kategori && options.kategori !== "Semua") {
    sql += " AND kategori = ?";
    params.push(options.kategori);
  }
  sql += " ORDER BY created_at ASC";
  return db
    .prepare(sql)
    .all(...params)
    .map((r) => ({
      id: String(r["id"]),
      judul: String(r["judul"]),
      kategori: String(r["kategori"]),
      image: String(r["image"]),
      caption: r["caption"] ? String(r["caption"]) : null,
      alt: r["alt"] ? String(r["alt"]) : null,
      sumber: r["sumber"] ? String(r["sumber"]) : null,
      status: String(r["status"]),
      created_at: r["created_at"] ? String(r["created_at"]) : void 0,
    }));
}
/**
 * 8. FAQs
 */
async function getFAQs(options) {
  const publishedOnly = options?.publishedOnly ?? true;
  if (getDatabaseMode() === "supabase") {
    let query = getSupabaseAdminClient()
      .from("faqs")
      .select("*")
      .order("created_at", { ascending: true });
    if (publishedOnly) query = query.eq("status", "published");
    const { data, error } = await query;
    if (error)
      throw new Error(`[REPOSITORY ERROR] Gagal membaca faqs dari Supabase: ${error.message}`);
    return (data || []).map((r) => ({
      id: r.id,
      pertanyaan: r.pertanyaan,
      jawaban: r.jawaban,
      kategori: r.kategori,
      status: r.status,
      created_at: r.created_at,
    }));
  }
  const sql = publishedOnly
    ? "SELECT * FROM faqs WHERE status = 'published' ORDER BY created_at ASC"
    : "SELECT * FROM faqs ORDER BY created_at ASC";
  return db
    .prepare(sql)
    .all()
    .map((r) => ({
      id: String(r["id"]),
      pertanyaan: String(r["pertanyaan"]),
      jawaban: String(r["jawaban"]),
      kategori: String(r["kategori"]),
      status: String(r["status"]),
      created_at: r["created_at"] ? String(r["created_at"]) : void 0,
    }));
}
/**
 * 9. Reviews
 */
async function getReviews(options) {
  const approvedOnly = options?.approvedOnly ?? true;
  if (getDatabaseMode() === "supabase") {
    let query = getSupabaseAdminClient()
      .from("reviews")
      .select("*")
      .order("created_at", { ascending: false });
    if (approvedOnly) query = query.eq("status", "approved");
    const { data, error } = await query;
    if (error)
      throw new Error(`[REPOSITORY ERROR] Gagal membaca reviews dari Supabase: ${error.message}`);
    return (data || []).map((r) => ({
      id: r.id,
      nama: r.nama,
      asal: r.asal,
      tipe_wisatawan: r.tipe_wisatawan,
      rating: Number(r.rating) || 5,
      komentar: r.komentar,
      tanggal: r.tanggal,
      avatar: r.avatar,
      status: r.status,
      created_at: r.created_at,
    }));
  }
  const sql = approvedOnly
    ? "SELECT * FROM reviews WHERE status = 'approved' ORDER BY created_at DESC"
    : "SELECT * FROM reviews ORDER BY created_at DESC";
  return db
    .prepare(sql)
    .all()
    .map((r) => ({
      id: String(r["id"]),
      nama: String(r["nama"]),
      asal: String(r["asal"]),
      tipe_wisatawan: String(r["tipe_wisatawan"]),
      rating: Number(r["rating"]) || 5,
      komentar: String(r["komentar"]),
      tanggal: String(r["tanggal"]),
      avatar: r["avatar"] ? String(r["avatar"]) : null,
      status: String(r["status"]),
      created_at: r["created_at"] ? String(r["created_at"]) : void 0,
    }));
}
/**
 * 11. Page View Statistics
 */
async function getPageViewStats() {
  if (getDatabaseMode() === "supabase") {
    const { count: totalViews, error: errTotal } = await getSupabaseAdminClient()
      .from("page_views")
      .select("*", {
        count: "exact",
        head: true,
      });
    if (errTotal)
      throw new Error(
        `[REPOSITORY ERROR] Gagal membaca page_views dari Supabase: ${errTotal.message}`,
      );
    return {
      totalViews: totalViews || 1,
      uniqueVisitors: totalViews || 1,
    };
  }
  const total = db.prepare("SELECT COUNT(*) as c FROM page_views").get()?.c || 0;
  const unique = db.prepare("SELECT COUNT(DISTINCT ip_hash) as c FROM page_views").get()?.c || 0;
  return {
    totalViews: total || 1,
    uniqueVisitors: unique || 1,
  };
}
/**
 * 12. Assembled Site Data Bundle (Single Read Path)
 */
async function getSiteDataBundle() {
  const [villageInfo, destinations, umkm, kegiatan, galleries, reviews, homestays, faqs, stats] =
    await Promise.all([
      getVillageInfo(),
      getDestinations({ publishedOnly: true }),
      getUMKM({ publishedOnly: true }),
      getKegiatan({ publishedOnly: true }),
      getGalleries({ publishedOnly: true }),
      getReviews({ approvedOnly: true }),
      getHomestays({ publishedOnly: true }),
      getFAQs({ publishedOnly: true }),
      getPageViewStats(),
    ]);
  return {
    villageInfo,
    landmarkList: destinations.map((d) => ({
      id: d.id,
      nama: d.nama,
      kategori: d.kategori,
      deskripsi: d.short_desc || d.full_desc || "",
      image: d.image || "",
      source: d.source_json || {
        name: "Pengelola",
        url: "",
      },
    })),
    umkmList: umkm.map((u) => ({
      id: u.id,
      nama: u.nama,
      kategori: u.kategori,
      deskripsi: u.deskripsi || "",
      image: u.image || "",
      ...(u.lokasi ? { lokasi: u.lokasi } : {}),
      ...(u.kontak ? { kontak: u.kontak } : {}),
      hargaInfo: u.harga_info || "Hubungi Pengelola",
      source: u.source_json || {
        name: "Pengelola",
        url: "",
      },
    })),
    kegiatanList: kegiatan.map((k) => ({
      id: k.id,
      judul: k.judul,
      kategori: k.kategori,
      tanggal: k.tanggal,
      deskripsi: k.deskripsi || "",
      image: k.image || "",
      image_source: k.image_source || "upload",
      source: k.source_json || {
        name: "Pengelola",
        url: "",
      },
    })),
    galeriItems: galleries.map((g) => ({
      id: g.id,
      judul: g.judul,
      kategori: g.kategori,
      image: g.image,
      caption: g.caption || "",
      alt: g.alt || g.judul,
      ...(g.sumber ? { sumber: g.sumber } : {}),
    })),
    reviews: reviews.map((r) => ({
      id: r.id,
      nama: r.nama,
      asal: r.asal,
      tipeWisatawan: r.tipe_wisatawan,
      rating: r.rating,
      komentar: r.komentar,
      tanggal: r.tanggal,
      avatar:
        r.avatar ||
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
    })),
    homestays: homestays.map((h) => ({
      id: h.id,
      nama: h.nama,
      slug: h.slug,
      pemilik: h.pemilik || void 0,
      kapasitas: h.kapasitas || void 0,
      kamar: h.kamar || 1,
      harga_text: h.harga_text || void 0,
      fasilitas_json: JSON.stringify(h.fasilitas_json || []),
      lokasi: h.lokasi || void 0,
      kontak: h.kontak || void 0,
      image: h.image || void 0,
      status: h.status,
    })),
    faqs: faqs.map((f) => ({
      id: f.id,
      pertanyaan: f.pertanyaan,
      jawaban: f.jawaban,
      kategori: f.kategori,
      status: f.status,
    })),
    visitCount: stats.totalViews,
    uniqueVisitors: stats.uniqueVisitors,
  };
}
var ADMIN_COOKIE_NAME = "ekang_admin_session";
function verifyPassword(password, hash) {
  return bcryptjs_default.compareSync(password, hash);
}
function isSupabaseMode$2() {
  const mode = process.env["DATABASE_MODE"]?.toLowerCase()?.trim();
  if (mode === "sqlite") return false;
  if (mode === "supabase") return true;
  return isSupabaseAdminConfigured();
}
async function cleanExpiredSessions() {
  try {
    if (isSupabaseMode$2())
      await getSupabaseAdminClient()
        .from("sessions")
        .delete()
        .lt("expires_at", /* @__PURE__ */ new Date().toISOString());
    else db.prepare("DELETE FROM sessions WHERE datetime(expires_at) < datetime('now')").run();
  } catch (err) {
    console.error("Gagal membersihkan sesi kadaluarsa:", err);
  }
}
async function createSession(userId) {
  await cleanExpiredSessions();
  const token = crypto$1.randomBytes(32).toString("hex");
  const expiresAt = /* @__PURE__ */ new Date();
  expiresAt.setHours(expiresAt.getHours() + 24);
  const expiresIso = expiresAt.toISOString();
  if (isSupabaseMode$2()) {
    const supabase = getSupabaseAdminClient();
    await supabase.from("sessions").delete().eq("user_id", userId);
    const { error } = await supabase.from("sessions").insert({
      id: token,
      user_id: userId,
      expires_at: expiresIso,
    });
    if (error) throw new Error(`[AUTH ERROR] Gagal membuat sesi di Supabase: ${error.message}`);
  } else {
    db.prepare("DELETE FROM sessions WHERE user_id = ?").run(userId);
    db.prepare("INSERT INTO sessions (id, user_id, expires_at) VALUES (?, ?, ?)").run(
      token,
      userId,
      expiresIso,
    );
  }
  return {
    token,
    expiresAt,
  };
}
async function validateSession(token) {
  if (!token || typeof token !== "string" || token.trim() === "") return null;
  try {
    if (isSupabaseMode$2()) {
      const supabase = getSupabaseAdminClient();
      const { data, error } = await supabase
        .from("sessions")
        .select("expires_at, users(id, username, role)")
        .eq("id", token.trim())
        .single();
      if (error || !data) return null;
      if (new Date(data.expires_at) < /* @__PURE__ */ new Date()) {
        await supabase.from("sessions").delete().eq("id", token.trim());
        return null;
      }
      const user = Array.isArray(data.users) ? data.users[0] : data.users;
      if (!user) return null;
      return {
        userId: Number(user.id),
        username: String(user.username),
        role: String(user.role),
      };
    }
    const row = db
      .prepare(
        `SELECT s.expires_at, u.id as userId, u.username, u.role
         FROM sessions s
         JOIN users u ON s.user_id = u.id
         WHERE s.id = ?`,
      )
      .get(token.trim());
    if (!row) return null;
    if (new Date(row.expires_at) < /* @__PURE__ */ new Date()) {
      db.prepare("DELETE FROM sessions WHERE id = ?").run(token.trim());
      return null;
    }
    return {
      userId: row.userId,
      username: row.username,
      role: row.role,
    };
  } catch (err) {
    console.error("Gagal memvalidasi sesi admin:", err);
    return null;
  }
}
async function destroySession(token) {
  if (!token || typeof token !== "string") return;
  try {
    if (isSupabaseMode$2())
      await getSupabaseAdminClient().from("sessions").delete().eq("id", token.trim());
    else db.prepare("DELETE FROM sessions WHERE id = ?").run(token.trim());
  } catch (err) {
    console.error("Gagal menghapus sesi admin:", err);
  }
}
var SESSION_MAX_AGE_SECONDS = 86400;
async function getSessionToken(explicitToken) {
  if (explicitToken && typeof explicitToken === "string" && explicitToken.trim() !== "")
    return explicitToken.trim();
  try {
    const { getCookie } = await import("./server-CrgTAgFJ.mjs");
    const cookieVal = getCookie(ADMIN_COOKIE_NAME);
    if (cookieVal && typeof cookieVal === "string") return cookieVal.trim();
  } catch {}
  return "";
}
/**
 * 1. requireAuth: Memastikan request memiliki sesi otentikasi yang valid di database.
 * Mengembalikan data user otentik (userId, username, role).
 */
async function requireAuth(explicitToken) {
  const activeToken = await getSessionToken(explicitToken);
  if (!activeToken)
    throw new Error(
      "Akses ditolak (401): Otentikasi diperlukan. Sesi tidak ditemukan. Silakan login terlebih dahulu.",
    );
  const user = await validateSession(activeToken);
  if (!user)
    throw new Error(
      "Akses ditolak (401): Sesi tidak valid atau telah kadaluarsa. Silakan login kembali.",
    );
  return user;
}
/**
 * 2. requireAdmin: Memastikan user terotentikasi DAN memiliki role === 'admin' di database.
 * Mengabaikan input role dari frontend untuk mencegah privilege escalation.
 */
async function requireAdmin(explicitToken) {
  const user = await requireAuth(explicitToken);
  if (user.role !== "admin") {
    console.warn(
      `[SECURITY AUDIT] Akses ditolak (403): User '${user.username}' (ID: ${user.userId}) dengan role '${user.role}' mencoba akses endpoint admin.`,
    );
    throw new Error(
      "Akses ditolak (403): Anda tidak memiliki hak akses Administrator untuk melakukan aksi ini.",
    );
  }
  return user;
}
async function setAdminSessionCookie(token) {
  try {
    const { setCookie } = await import("./server-CrgTAgFJ.mjs");
    setCookie(ADMIN_COOKIE_NAME, token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      maxAge: SESSION_MAX_AGE_SECONDS,
    });
  } catch (cookieErr) {
    console.error("Gagal mengatur cookie sesi admin:", cookieErr);
  }
}
async function clearAdminSessionCookie() {
  try {
    const { deleteCookie } = await import("./server-CrgTAgFJ.mjs");
    deleteCookie(ADMIN_COOKIE_NAME, {
      path: "/",
      httpOnly: true,
      secure: true,
      sameSite: "lax",
    });
  } catch {}
}
/**
 * Memeriksa apakah hostname / IP merupakan alamat jaringan lokal / private (SSRF Protection).
 */
function isPrivateHost(hostname) {
  const host = hostname.toLowerCase().trim();
  if (
    host === "localhost" ||
    host === "127.0.0.1" ||
    host === "0.0.0.0" ||
    host === "::1" ||
    host === "[::1]" ||
    host.endsWith(".local") ||
    host.endsWith(".internal")
  )
    return true;
  const match = host.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);
  if (match) {
    const oct1 = Number(match[1]);
    const oct2 = Number(match[2]);
    if (!isNaN(oct1) && !isNaN(oct2)) {
      if (oct1 === 10) return true;
      if (oct1 === 172 && oct2 >= 16 && oct2 <= 31) return true;
      if (oct1 === 192 && oct2 === 168) return true;
      if (oct1 === 169 && oct2 === 254) return true;
      if (oct1 === 127) return true;
      if (oct1 === 0) return true;
    }
  }
  return false;
}
/**
 * Mengekstrak foto utama (Open Graph / Twitter / Meta image) dari URL publikasi secara aman di server.
 */
async function extractOgImageFromUrl(rawUrl) {
  const timestamp = /* @__PURE__ */ new Date().toISOString();
  if (!rawUrl || typeof rawUrl !== "string" || !rawUrl.trim())
    return {
      success: false,
      error: "URL publikasi wajib diisi.",
      fetchedAt: timestamp,
    };
  let parsedUrl;
  try {
    parsedUrl = new URL(rawUrl.trim());
  } catch {
    return {
      success: false,
      error: "Format URL tidak valid. Contoh: https://website-sumber.com/artikel",
      fetchedAt: timestamp,
    };
  }
  if (parsedUrl.protocol !== "http:" && parsedUrl.protocol !== "https:")
    return {
      success: false,
      error: "URL harus menggunakan protokol HTTP atau HTTPS.",
      fetchedAt: timestamp,
    };
  if (isPrivateHost(parsedUrl.hostname))
    return {
      success: false,
      error: "URL sumber tidak diperbolehkan (jaringan lokal / private network).",
      fetchedAt: timestamp,
    };
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8e3);
  try {
    const response = await fetch(parsedUrl.href, {
      method: "GET",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) EkangAnculaiBot/1.0 (+https://desawisataekanganculai.id)",
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
      },
      signal: controller.signal,
      redirect: "follow",
    });
    clearTimeout(timeoutId);
    if (!response.ok)
      return {
        success: false,
        error: `Halaman sumber tidak dapat diakses (Status: ${response.status} ${response.statusText}).`,
        fetchedAt: timestamp,
      };
    const contentType = response.headers.get("content-type") || "";
    if (!contentType.includes("text/html") && !contentType.includes("xhtml")) {
      if (contentType.includes("image/"))
        return {
          success: true,
          imageUrl: parsedUrl.href,
          fetchedAt: timestamp,
        };
      return {
        success: false,
        error: "Konten URL bukan merupakan halaman HTML publikasi berita.",
        fetchedAt: timestamp,
      };
    }
    const reader = response.body?.getReader();
    let htmlText = "";
    if (reader) {
      const decoder = new TextDecoder("utf-8");
      let bytesRead = 0;
      const MAX_BYTES = 1572864;
      while (bytesRead < MAX_BYTES) {
        const { done, value } = await reader.read();
        if (done || !value) break;
        bytesRead += value.length;
        htmlText += decoder.decode(value, { stream: true });
      }
    } else htmlText = await response.text();
    let extractedImage = null;
    let extractedTitle = null;
    const ogImageMatch =
      htmlText.match(
        /<meta[^>]*property=["']og:image(?::url)?["'][^>]*content=["']([^"']+)["']/i,
      ) ||
      htmlText.match(/<meta[^>]*content=["']([^"']+)["'][^>]*property=["']og:image(?::url)?["']/i);
    if (ogImageMatch && ogImageMatch[1]) extractedImage = ogImageMatch[1].trim();
    if (!extractedImage) {
      const twitterMatch =
        htmlText.match(
          /<meta[^>]*name=["']twitter:image(?::src)?["'][^>]*content=["']([^"']+)["']/i,
        ) ||
        htmlText.match(
          /<meta[^>]*content=["']([^"']+)["'][^>]*name=["']twitter:image(?::src)?["']/i,
        );
      if (twitterMatch && twitterMatch[1]) extractedImage = twitterMatch[1].trim();
    }
    if (!extractedImage) {
      const linkMatch = htmlText.match(
        /<link[^>]*rel=["']image_src["'][^>]*href=["']([^"']+)["']/i,
      );
      if (linkMatch && linkMatch[1]) extractedImage = linkMatch[1].trim();
    }
    if (!extractedImage) {
      const imgMatches = Array.from(htmlText.matchAll(/<img[^>]*src=["']([^"']+)["']/gi));
      for (const m of imgMatches) {
        const src = m[1]?.trim();
        if (
          src &&
          !src.includes("logo") &&
          !src.includes("icon") &&
          !src.includes("avatar") &&
          !src.includes("banner-ad") &&
          !src.endsWith(".svg") &&
          !src.endsWith(".gif")
        ) {
          extractedImage = src;
          break;
        }
      }
    }
    const ogTitleMatch =
      htmlText.match(/<meta[^>]*property=["']og:title["'][^>]*content=["']([^"']+)["']/i) ||
      htmlText.match(/<title[^>]*>([^<]+)<\/title>/i);
    if (ogTitleMatch && ogTitleMatch[1]) extractedTitle = ogTitleMatch[1].trim();
    if (extractedImage)
      try {
        const resolvedUrl = new URL(extractedImage, parsedUrl.href).href;
        const resolvedParsed = new URL(resolvedUrl);
        if (resolvedParsed.protocol === "http:" || resolvedParsed.protocol === "https:")
          return {
            success: true,
            imageUrl: resolvedUrl,
            sourceTitle: extractedTitle || "",
            fetchedAt: timestamp,
          };
      } catch {}
    return {
      success: false,
      error: "Foto utama (Open Graph image) tidak ditemukan pada halaman publikasi tersebut.",
      fetchedAt: timestamp,
    };
  } catch (err) {
    clearTimeout(timeoutId);
    const errorMessage =
      err instanceof Error ? err.message : "Kesalahan server saat menghubungi URL.";
    if (errorMessage.includes("aborted"))
      return {
        success: false,
        error: "Waktu koneksi habis (Timeout 8 detik) saat mengakses halaman sumber.",
        fetchedAt: timestamp,
      };
    return {
      success: false,
      error: `Gagal mengakses halaman sumber. Silakan periksa kembali URL (${errorMessage}).`,
      fetchedAt: timestamp,
    };
  }
}
var ALLOWED_CATEGORIES = [
  "destinations",
  "packages",
  "umkm",
  "homestays",
  "kegiatan",
  "galleries",
  "news",
];
var MAX_FILE_SIZE_BYTES = 5242880;
var MAX_DIMENSION_PX = 8e3;
var MAX_PIXELS_LIMIT = 5e7;
var PUBLIC_UPLOADS_DIR = path.join(process.cwd(), "public", "uploads");
function initUploadDirectories() {
  if (!fs.existsSync(PUBLIC_UPLOADS_DIR)) fs.mkdirSync(PUBLIC_UPLOADS_DIR, { recursive: true });
  for (const cat of ALLOWED_CATEGORIES) {
    const catDir = path.join(PUBLIC_UPLOADS_DIR, cat);
    if (!fs.existsSync(catDir)) fs.mkdirSync(catDir, { recursive: true });
  }
}
initUploadDirectories();
/**
 * Validasi ketat buffer gambar:
 * 1. Pengecekan ukuran file (maksimal 5MB)
 * 2. Pengecekan Magic Bytes (Header biner asli)
 * 3. Blokir eksplisit file berbahaya (SVG, HTML, PHP, Executable)
 */
function validateImageBuffer(buffer) {
  if (!buffer || buffer.length === 0)
    return {
      valid: false,
      extension: "",
      mime: "",
      reason: "File gambar kosong.",
    };
  if (buffer.length > MAX_FILE_SIZE_BYTES)
    return {
      valid: false,
      extension: "",
      mime: "",
      reason: `Ukuran file (${(buffer.length / 1048576).toFixed(2)} MB) melebihi batas maksimal 5 MB.`,
    };
  const headerSlice = buffer
    .subarray(0, Math.min(buffer.length, 512))
    .toString("utf8")
    .toLowerCase();
  if (
    headerSlice.includes("<svg") ||
    headerSlice.includes("<?xml") ||
    headerSlice.includes("<!doctype svg") ||
    headerSlice.includes("<html") ||
    headerSlice.includes("<script") ||
    headerSlice.includes("<?php")
  )
    return {
      valid: false,
      extension: "",
      mime: "",
      reason:
        "Tipe file ditolak. File vektor SVG/XML atau dokumen script tidak diizinkan demi keamanan sistem.",
    };
  if (
    (buffer.length >= 2 && buffer[0] === 77 && buffer[1] === 90) ||
    (buffer.length >= 4 &&
      buffer[0] === 127 &&
      buffer[1] === 69 &&
      buffer[2] === 76 &&
      buffer[3] === 70) ||
    (buffer.length >= 2 && buffer[0] === 35 && buffer[1] === 33)
  )
    return {
      valid: false,
      extension: "",
      mime: "",
      reason: "File executable biner tidak diizinkan.",
    };
  if (buffer.length >= 3 && buffer[0] === 255 && buffer[1] === 216 && buffer[2] === 255)
    return {
      valid: true,
      extension: "jpg",
      mime: "image/jpeg",
    };
  if (
    buffer.length >= 8 &&
    buffer[0] === 137 &&
    buffer[1] === 80 &&
    buffer[2] === 78 &&
    buffer[3] === 71 &&
    buffer[4] === 13 &&
    buffer[5] === 10 &&
    buffer[6] === 26 &&
    buffer[7] === 10
  )
    return {
      valid: true,
      extension: "png",
      mime: "image/png",
    };
  if (
    buffer.length >= 12 &&
    buffer[0] === 82 &&
    buffer[1] === 73 &&
    buffer[2] === 70 &&
    buffer[3] === 70 &&
    buffer[8] === 87 &&
    buffer[9] === 69 &&
    buffer[10] === 66 &&
    buffer[11] === 80
  )
    return {
      valid: true,
      extension: "webp",
      mime: "image/webp",
    };
  return {
    valid: false,
    extension: "",
    mime: "",
    reason:
      "Format file tidak valid. Hanya file gambar raster asli (JPG, PNG, atau WebP) yang diizinkan.",
  };
}
/**
 * Pipeline Pemrosesan Gambar Aman:
 * 1. Decode base64 / buffer
 * 2. Validasi magic bytes biner
 * 3. Inspeksi metadata dimensi melalui Sharp (Mencegah decompression bomb)
 * 4. Resize proporsional (Maksimal 1920x1920 px)
 * 5. Re-encoding ke format WebP terstandarisasi (menghapus seluruh EXIF dan payload non-gambar)
 * 6. Simpan dengan nama acak CSPRNG unik (mengabaikan nama asli file dari pengguna)
 */
async function saveAndOptimizeImage(input, category = "galleries") {
  initUploadDirectories();
  let buffer;
  if (typeof input === "string")
    if (input.startsWith("data:")) {
      const base64Data = input.split(",")[1] || "";
      buffer = Buffer.from(base64Data, "base64");
    } else buffer = Buffer.from(input, "base64");
  else buffer = input;
  const validation = validateImageBuffer(buffer);
  if (!validation.valid) throw new Error(validation.reason || "File gambar tidak valid.");
  const sharpInstance = sharp(buffer, { limitInputPixels: MAX_PIXELS_LIMIT });
  const metadata = await sharpInstance.metadata();
  if (!metadata.width || !metadata.height)
    throw new Error("Gagal membaca struktur dimensi gambar. File mungkin rusak atau tidak valid.");
  if (metadata.width > MAX_DIMENSION_PX || metadata.height > MAX_DIMENSION_PX)
    throw new Error(
      `Dimensi gambar terlalu besar (${metadata.width}x${metadata.height} px). Batas maksimal adalah ${MAX_DIMENSION_PX}x${MAX_DIMENSION_PX} px.`,
    );
  const safeCategory = ALLOWED_CATEGORIES.includes(category) ? category : "galleries";
  const randomSuffix = crypto$1.randomBytes(8).toString("hex");
  const uniqueFileName = `img-${safeCategory}-${Date.now()}-${randomSuffix}.webp`;
  const targetDir = path.join(PUBLIC_UPLOADS_DIR, safeCategory);
  const targetFilePath = path.join(targetDir, uniqueFileName);
  await sharpInstance
    .resize(1920, 1920, {
      fit: "inside",
      withoutEnlargement: true,
    })
    .withMetadata({ orientation: 1 })
    .webp({
      quality: 82,
      effort: 4,
    })
    .toFile(targetFilePath);
  return `/uploads/${safeCategory}/${uniqueFileName}`;
}
/**
 * Menghapus file gambar dengan proteksi Path Traversal
 */
function deleteImageFile(relativeUrl) {
  if (!relativeUrl || typeof relativeUrl !== "string" || !relativeUrl.startsWith("/uploads/"))
    return;
  const normalizedRel = path.normalize(relativeUrl).replace(/^(\.\.[/\\])+/, "");
  const fullPath = path.join(process.cwd(), "public", normalizedRel);
  if (!fullPath.startsWith(PUBLIC_UPLOADS_DIR)) {
    console.warn(
      `[SECURITY AUDIT] Upaya Path Traversal pada deleteImageFile diblokir: '${relativeUrl}'.`,
    );
    return;
  }
  if (!isImageReferencedInDb(relativeUrl) && fs.existsSync(fullPath))
    try {
      fs.unlinkSync(fullPath);
      console.info(`[STORAGE] Berhasil menghapus file gambar tidak terpakai: '${normalizedRel}'.`);
    } catch (err) {
      console.error("Gagal menghapus file gambar:", fullPath, err);
    }
}
function isImageReferencedInDb(imageUrl) {
  for (const { table, col } of [
    {
      table: "destinations",
      col: "image",
    },
    {
      table: "packages",
      col: "image",
    },
    {
      table: "umkm",
      col: "image",
    },
    {
      table: "homestays",
      col: "image",
    },
    {
      table: "kegiatan",
      col: "image",
    },
    {
      table: "galleries",
      col: "image",
    },
    {
      table: "reviews",
      col: "avatar",
    },
  ])
    try {
      const row = db.prepare(`SELECT COUNT(*) as c FROM ${table} WHERE ${col} = ?`).get(imageUrl);
      if (row && row.c > 0) return true;
    } catch {}
  return false;
}
/**
 * Migrasi data Base64 lama ke file WebP fisik
 */
async function migrateBase64ImagesToFiles() {
  initUploadDirectories();
  let count = 0;
  for (const t of [
    {
      table: "destinations",
      col: "image",
      category: "destinations",
    },
    {
      table: "packages",
      col: "image",
      category: "packages",
    },
    {
      table: "umkm",
      col: "image",
      category: "umkm",
    },
    {
      table: "homestays",
      col: "image",
      category: "homestays",
    },
    {
      table: "kegiatan",
      col: "image",
      category: "kegiatan",
    },
    {
      table: "galleries",
      col: "image",
      category: "galleries",
    },
    {
      table: "reviews",
      col: "avatar",
      category: "galleries",
    },
  ])
    try {
      const rows = db
        .prepare(`SELECT id, ${t.col} as img FROM ${t.table} WHERE ${t.col} LIKE 'data:image/%'`)
        .all();
      for (const r of rows) {
        if (!r.img || !r.img.startsWith("data:image/")) continue;
        try {
          const newUrl = await saveAndOptimizeImage(r.img, t.category);
          db.prepare(`UPDATE ${t.table} SET ${t.col} = ? WHERE id = ?`).run(newUrl, r.id);
          count++;
        } catch (err) {
          console.error(`Gagal memigrasi Base64 gambar untuk ID ${r.id} di tabel ${t.table}:`, err);
        }
      }
    } catch (err) {
      console.error(`Gagal query migrasi gambar pada tabel ${t.table}:`, err);
    }
  return count;
}
var RATE_LIMIT_CONFIGS = {
  LOGIN_USER_IP: {
    maxAttempts: 5,
    windowMs: 6e4,
    lockoutMs: 18e4,
    actionName: "login akun",
  },
  LOGIN_GLOBAL_IP: {
    maxAttempts: 15,
    windowMs: 18e4,
    lockoutMs: 3e5,
    actionName: "login percobaan IP",
  },
  RESERVATION_SUBMISSION: {
    maxAttempts: 5,
    windowMs: 6e5,
    lockoutMs: 6e5,
    actionName: "pengiriman reservasi",
  },
  REVIEW_SUBMISSION: {
    maxAttempts: 3,
    windowMs: 6e5,
    lockoutMs: 6e5,
    actionName: "pengiriman ulasan",
  },
  PASSWORD_CHANGE: {
    maxAttempts: 5,
    windowMs: 3e5,
    lockoutMs: 9e5,
    actionName: "perubahan kata sandi",
  },
};
var inMemoryStore = /* @__PURE__ */ new Map();
function isSupabaseMode$1() {
  const mode = process.env["DATABASE_MODE"]?.toLowerCase()?.trim();
  if (mode === "sqlite") return false;
  if (mode === "supabase") return true;
  return isSupabaseAdminConfigured();
}
/**
 * Mendapatkan IP Address asli klien dari request header (Cloudflare, Reverse Proxy Nginx, atau direct)
 */
function getClientIP() {
  try {
    const cfIP = getRequestHeader("cf-connecting-ip");
    if (cfIP && typeof cfIP === "string" && cfIP.trim() !== "") return cfIP.split(",")[0].trim();
    const xForwardedFor = getRequestHeader("x-forwarded-for");
    if (xForwardedFor && typeof xForwardedFor === "string" && xForwardedFor.trim() !== "")
      return xForwardedFor.split(",")[0].trim();
    const xRealIP = getRequestHeader("x-real-ip");
    if (xRealIP && typeof xRealIP === "string" && xRealIP.trim() !== "") return xRealIP.trim();
  } catch {}
  return "127.0.0.1";
}
/**
 * Memeriksa status rate limit (apakah sedang diblokir atau window telah habis)
 */
async function checkRateLimit(key, config = RATE_LIMIT_CONFIGS.LOGIN_USER_IP) {
  const normalizedKey = (key || "unknown").toLowerCase().trim();
  const now = Date.now();
  try {
    if (isSupabaseMode$1())
      try {
        const supabase = getSupabaseAdminClient();
        const { data, error } = await supabase
          .from("rate_limits")
          .select("count, first_attempt_at, blocked_until")
          .eq("key", normalizedKey)
          .maybeSingle();
        if (error) throw error;
        if (!data)
          return {
            isBlocked: false,
            remainingSeconds: 0,
          };
        const row = data;
        if (row.blocked_until > now) {
          const remainingSeconds = Math.ceil((row.blocked_until - now) / 1e3);
          const minutes = Math.ceil(remainingSeconds / 60);
          return {
            isBlocked: true,
            remainingSeconds,
            message: `Terlalu banyak permintaan untuk ${config.actionName}. Akses dibatasi sementara untuk keamanan. Silakan coba kembali dalam ${minutes} menit (${remainingSeconds} detik).`,
          };
        }
        if (now - row.first_attempt_at > config.windowMs) {
          await supabase.from("rate_limits").delete().eq("key", normalizedKey);
          return {
            isBlocked: false,
            remainingSeconds: 0,
          };
        }
        return {
          isBlocked: false,
          remainingSeconds: 0,
        };
      } catch {
        return checkInMemory(normalizedKey, config, now);
      }
    const row = db
      .prepare("SELECT count, first_attempt_at, blocked_until FROM rate_limits WHERE key = ?")
      .get(normalizedKey);
    if (!row)
      return {
        isBlocked: false,
        remainingSeconds: 0,
      };
    if (row.blocked_until > now) {
      const remainingSeconds = Math.ceil((row.blocked_until - now) / 1e3);
      const minutes = Math.ceil(remainingSeconds / 60);
      return {
        isBlocked: true,
        remainingSeconds,
        message: `Terlalu banyak permintaan untuk ${config.actionName}. Akses dibatasi sementara untuk keamanan. Silakan coba kembali dalam ${minutes} menit (${remainingSeconds} detik).`,
      };
    }
    if (now - row.first_attempt_at > config.windowMs) {
      db.prepare("DELETE FROM rate_limits WHERE key = ?").run(normalizedKey);
      return {
        isBlocked: false,
        remainingSeconds: 0,
      };
    }
    return {
      isBlocked: false,
      remainingSeconds: 0,
    };
  } catch (err) {
    console.error("Gagal memeriksa rate limit di database:", err);
    return {
      isBlocked: false,
      remainingSeconds: 0,
    };
  }
}
/**
 * Mencatat percobaan gagal (misal salah password) dan mengunci jika batas tercapai
 */
async function recordFailedAttempt(key, config = RATE_LIMIT_CONFIGS.LOGIN_USER_IP) {
  const normalizedKey = (key || "unknown").toLowerCase().trim();
  const now = Date.now();
  try {
    if (isSupabaseMode$1())
      try {
        const supabase = getSupabaseAdminClient();
        const { data } = await supabase
          .from("rate_limits")
          .select("count, first_attempt_at")
          .eq("key", normalizedKey)
          .maybeSingle();
        const row = data;
        if (!row || now - row.first_attempt_at > config.windowMs) {
          await supabase.from("rate_limits").upsert({
            key: normalizedKey,
            count: 1,
            first_attempt_at: now,
            blocked_until: 0,
          });
          return {
            isNowBlocked: false,
            remainingAttempts: config.maxAttempts - 1,
          };
        }
        const newCount = row.count + 1;
        if (newCount >= config.maxAttempts) {
          const blockedUntil = now + config.lockoutMs;
          await supabase
            .from("rate_limits")
            .update({
              count: newCount,
              blocked_until: blockedUntil,
            })
            .eq("key", normalizedKey);
          console.warn(
            `[SECURITY AUDIT] Rate limit dipicu untuk key '${normalizedKey}'. Akses dikunci selama ${config.lockoutMs / 1e3} detik.`,
          );
          return {
            isNowBlocked: true,
            remainingAttempts: 0,
          };
        }
        await supabase.from("rate_limits").update({ count: newCount }).eq("key", normalizedKey);
        return {
          isNowBlocked: false,
          remainingAttempts: config.maxAttempts - newCount,
        };
      } catch {
        return recordFailedInMemory(normalizedKey, config, now);
      }
    const row = db
      .prepare("SELECT count, first_attempt_at FROM rate_limits WHERE key = ?")
      .get(normalizedKey);
    if (!row || now - row.first_attempt_at > config.windowMs) {
      db.prepare(
        "INSERT OR REPLACE INTO rate_limits (key, count, first_attempt_at, blocked_until) VALUES (?, 1, ?, 0)",
      ).run(normalizedKey, now);
      return {
        isNowBlocked: false,
        remainingAttempts: config.maxAttempts - 1,
      };
    }
    const newCount = row.count + 1;
    if (newCount >= config.maxAttempts) {
      const blockedUntil = now + config.lockoutMs;
      db.prepare("UPDATE rate_limits SET count = ?, blocked_until = ? WHERE key = ?").run(
        newCount,
        blockedUntil,
        normalizedKey,
      );
      console.warn(
        `[SECURITY AUDIT] Rate limit dipicu untuk key '${normalizedKey}'. Akses dikunci selama ${config.lockoutMs / 1e3} detik.`,
      );
      return {
        isNowBlocked: true,
        remainingAttempts: 0,
      };
    }
    db.prepare("UPDATE rate_limits SET count = ? WHERE key = ?").run(newCount, normalizedKey);
    return {
      isNowBlocked: false,
      remainingAttempts: config.maxAttempts - newCount,
    };
  } catch (err) {
    console.error("Gagal mencatat percobaan rate limit di database:", err);
    return {
      isNowBlocked: false,
      remainingAttempts: 1,
    };
  }
}
/**
 * Mengonsumsi kuota rate limit untuk aksi publik (misal pengiriman reservasi atau ulasan).
 * Jika kuota habis dalam window, langsung mengunci key dan mengembalikan isBlocked: true.
 */
async function consumeRateLimit(key, config) {
  const normalizedKey = (key || "unknown").toLowerCase().trim();
  const now = Date.now();
  try {
    if (isSupabaseMode$1())
      try {
        const supabase = getSupabaseAdminClient();
        const { data } = await supabase
          .from("rate_limits")
          .select("count, first_attempt_at, blocked_until")
          .eq("key", normalizedKey)
          .maybeSingle();
        const row = data;
        if (!row) {
          await supabase.from("rate_limits").insert({
            key: normalizedKey,
            count: 1,
            first_attempt_at: now,
            blocked_until: 0,
          });
          return {
            isBlocked: false,
            remainingSeconds: 0,
          };
        }
        if (row.blocked_until > now) {
          const remainingSeconds = Math.ceil((row.blocked_until - now) / 1e3);
          const minutes = Math.ceil(remainingSeconds / 60);
          return {
            isBlocked: true,
            remainingSeconds,
            message: `Terlalu banyak permintaan untuk ${config.actionName}. Silakan coba kembali dalam ${minutes} menit (${remainingSeconds} detik).`,
          };
        }
        if (now - row.first_attempt_at > config.windowMs) {
          await supabase
            .from("rate_limits")
            .update({
              count: 1,
              first_attempt_at: now,
              blocked_until: 0,
            })
            .eq("key", normalizedKey);
          return {
            isBlocked: false,
            remainingSeconds: 0,
          };
        }
        const newCount = row.count + 1;
        if (newCount > config.maxAttempts) {
          const blockedUntil = now + config.lockoutMs;
          await supabase
            .from("rate_limits")
            .update({
              count: newCount,
              blocked_until: blockedUntil,
            })
            .eq("key", normalizedKey);
          const remainingSeconds = Math.ceil(config.lockoutMs / 1e3);
          const minutes = Math.ceil(remainingSeconds / 60);
          return {
            isBlocked: true,
            remainingSeconds,
            message: `Batas kuota pengiriman untuk ${config.actionName} tercapai (${config.maxAttempts}x). Silakan coba lagi dalam ${minutes} menit.`,
          };
        }
        await supabase.from("rate_limits").update({ count: newCount }).eq("key", normalizedKey);
        return {
          isBlocked: false,
          remainingSeconds: 0,
        };
      } catch {
        return consumeInMemory(normalizedKey, config, now);
      }
    const row = db
      .prepare("SELECT count, first_attempt_at, blocked_until FROM rate_limits WHERE key = ?")
      .get(normalizedKey);
    if (!row) {
      db.prepare(
        "INSERT INTO rate_limits (key, count, first_attempt_at, blocked_until) VALUES (?, 1, ?, 0)",
      ).run(normalizedKey, now);
      return {
        isBlocked: false,
        remainingSeconds: 0,
      };
    }
    if (row.blocked_until > now) {
      const remainingSeconds = Math.ceil((row.blocked_until - now) / 1e3);
      const minutes = Math.ceil(remainingSeconds / 60);
      return {
        isBlocked: true,
        remainingSeconds,
        message: `Terlalu banyak permintaan untuk ${config.actionName}. Silakan coba kembali dalam ${minutes} menit (${remainingSeconds} detik).`,
      };
    }
    if (now - row.first_attempt_at > config.windowMs) {
      db.prepare(
        "UPDATE rate_limits SET count = 1, first_attempt_at = ?, blocked_until = 0 WHERE key = ?",
      ).run(now, normalizedKey);
      return {
        isBlocked: false,
        remainingSeconds: 0,
      };
    }
    const newCount = row.count + 1;
    if (newCount > config.maxAttempts) {
      const blockedUntil = now + config.lockoutMs;
      db.prepare("UPDATE rate_limits SET count = ?, blocked_until = ? WHERE key = ?").run(
        newCount,
        blockedUntil,
        normalizedKey,
      );
      const remainingSeconds = Math.ceil(config.lockoutMs / 1e3);
      const minutes = Math.ceil(remainingSeconds / 60);
      return {
        isBlocked: true,
        remainingSeconds,
        message: `Batas kuota pengiriman untuk ${config.actionName} tercapai (${config.maxAttempts}x). Silakan coba lagi dalam ${minutes} menit.`,
      };
    }
    db.prepare("UPDATE rate_limits SET count = ? WHERE key = ?").run(newCount, normalizedKey);
    return {
      isBlocked: false,
      remainingSeconds: 0,
    };
  } catch (err) {
    console.error("Gagal mengonsumsi rate limit di database:", err);
    return {
      isBlocked: false,
      remainingSeconds: 0,
    };
  }
}
/**
 * Menghapus counter rate limit saat aksi berhasil (misal login berhasil)
 */
async function recordSuccessfulLogin(key) {
  const normalizedKey = (key || "unknown").toLowerCase().trim();
  try {
    if (isSupabaseMode$1())
      try {
        await getSupabaseAdminClient().from("rate_limits").delete().eq("key", normalizedKey);
      } catch {
        inMemoryStore.delete(normalizedKey);
      }
    else db.prepare("DELETE FROM rate_limits WHERE key = ?").run(normalizedKey);
    console.info(`[SECURITY AUDIT] Rate limit counter di-reset untuk key '${normalizedKey}'.`);
  } catch {}
}
function checkInMemory(key, config, now) {
  const entry = inMemoryStore.get(key);
  if (!entry)
    return {
      isBlocked: false,
      remainingSeconds: 0,
    };
  if (entry.blockedUntil > now) {
    const remainingSeconds = Math.ceil((entry.blockedUntil - now) / 1e3);
    const minutes = Math.ceil(remainingSeconds / 60);
    return {
      isBlocked: true,
      remainingSeconds,
      message: `Terlalu banyak permintaan untuk ${config.actionName}. Silakan coba kembali dalam ${minutes} menit.`,
    };
  }
  if (now - entry.firstAttemptAt > config.windowMs) {
    inMemoryStore.delete(key);
    return {
      isBlocked: false,
      remainingSeconds: 0,
    };
  }
  return {
    isBlocked: false,
    remainingSeconds: 0,
  };
}
function recordFailedInMemory(key, config, now) {
  const entry = inMemoryStore.get(key);
  if (!entry || now - entry.firstAttemptAt > config.windowMs) {
    inMemoryStore.set(key, {
      count: 1,
      firstAttemptAt: now,
      blockedUntil: 0,
    });
    return {
      isNowBlocked: false,
      remainingAttempts: config.maxAttempts - 1,
    };
  }
  const newCount = entry.count + 1;
  if (newCount >= config.maxAttempts) {
    entry.blockedUntil = now + config.lockoutMs;
    entry.count = newCount;
    return {
      isNowBlocked: true,
      remainingAttempts: 0,
    };
  }
  entry.count = newCount;
  return {
    isNowBlocked: false,
    remainingAttempts: config.maxAttempts - newCount,
  };
}
function consumeInMemory(key, config, now) {
  const entry = inMemoryStore.get(key);
  if (!entry) {
    inMemoryStore.set(key, {
      count: 1,
      firstAttemptAt: now,
      blockedUntil: 0,
    });
    return {
      isBlocked: false,
      remainingSeconds: 0,
    };
  }
  if (entry.blockedUntil > now) {
    const remainingSeconds = Math.ceil((entry.blockedUntil - now) / 1e3);
    const minutes = Math.ceil(remainingSeconds / 60);
    return {
      isBlocked: true,
      remainingSeconds,
      message: `Terlalu banyak permintaan untuk ${config.actionName}. Silakan coba kembali dalam ${minutes} menit.`,
    };
  }
  if (now - entry.firstAttemptAt > config.windowMs) {
    inMemoryStore.set(key, {
      count: 1,
      firstAttemptAt: now,
      blockedUntil: 0,
    });
    return {
      isBlocked: false,
      remainingSeconds: 0,
    };
  }
  const newCount = entry.count + 1;
  if (newCount > config.maxAttempts) {
    entry.blockedUntil = now + config.lockoutMs;
    entry.count = newCount;
    const remainingSeconds = Math.ceil(config.lockoutMs / 1e3);
    const minutes = Math.ceil(remainingSeconds / 60);
    return {
      isBlocked: true,
      remainingSeconds,
      message: `Batas kuota pengiriman untuk ${config.actionName} tercapai (${config.maxAttempts}x). Silakan coba lagi dalam ${minutes} menit.`,
    };
  }
  entry.count = newCount;
  return {
    isBlocked: false,
    remainingSeconds: 0,
  };
}
function extractPayload(input) {
  const raw = input || {};
  if (
    raw &&
    typeof raw === "object" &&
    "data" in raw &&
    raw["data"] !== void 0 &&
    raw["data"] !== null &&
    typeof raw["data"] === "object"
  )
    return raw["data"];
  return raw;
}
function isSupabaseMode() {
  const mode = process.env["DATABASE_MODE"]?.toLowerCase()?.trim();
  if (mode === "sqlite") return false;
  if (mode === "supabase") return true;
  return isSupabaseAdminConfigured();
}
var checkAdminAuthServerFn_createServerFn_handler = createServerRpc(
  {
    id: "25cd601fdb16e7781722c13c9a52f3f399a5ee982977e49bd7f9c03be1380bc2",
    name: "checkAdminAuthServerFn",
    filename: "src/lib/server-actions.ts",
  },
  (opts) => checkAdminAuthServerFn.__executeServer(opts),
);
var checkAdminAuthServerFn = createServerFn({ method: "POST" })
  .validator((data) => tokenOnlySchema.parse(extractPayload(data)))
  .handler(checkAdminAuthServerFn_createServerFn_handler, async ({ data }) => {
    const token = await getSessionToken(data?.token);
    if (!token)
      return {
        isAuthenticated: false,
        role: null,
      };
    const user = await validateSession(token);
    if (!user) {
      await clearAdminSessionCookie();
      return {
        isAuthenticated: false,
        role: null,
      };
    }
    return {
      isAuthenticated: user.role === "admin",
      user: {
        username: user.username,
        role: user.role,
      },
    };
  });
var adminLoginServerFn_createServerFn_handler = createServerRpc(
  {
    id: "9d359cea8999f5f1547a80d5811a74164cf232ac0befc4e9ac2dda353fdb4d17",
    name: "adminLoginServerFn",
    filename: "src/lib/server-actions.ts",
  },
  (opts) => adminLoginServerFn.__executeServer(opts),
);
var adminLoginServerFn = createServerFn({ method: "POST" })
  .validator((data) => loginInputSchema.parse(extractPayload(data)))
  .handler(adminLoginServerFn_createServerFn_handler, async ({ data }) => {
    const username = data.username;
    const password = data.password;
    const clientIP = getClientIP();
    const userKey = `login:${clientIP}:${username.toLowerCase()}`;
    const ipKey = `login_ip:${clientIP}`;
    try {
      const ipLimitStatus = await checkRateLimit(ipKey, RATE_LIMIT_CONFIGS.LOGIN_GLOBAL_IP);
      if (ipLimitStatus.isBlocked)
        return {
          success: false,
          message:
            ipLimitStatus.message ||
            "Terlalu banyak percobaan login dari IP Anda. Akses dikunci sementara.",
        };
      const userLimitStatus = await checkRateLimit(userKey, RATE_LIMIT_CONFIGS.LOGIN_USER_IP);
      if (userLimitStatus.isBlocked)
        return {
          success: false,
          message:
            userLimitStatus.message ||
            "Terlalu banyak percobaan login yang gagal. Akses dikunci sementara selama 3 menit.",
        };
      let userRow;
      if (isSupabaseMode()) {
        const { data: rows } = await getSupabaseAdminClient()
          .from("users")
          .select("id, username, password_hash, role")
          .ilike("username", username)
          .limit(1);
        userRow = rows?.[0];
      } else
        userRow = db
          .prepare(
            "SELECT id, username, password_hash, role FROM users WHERE LOWER(username) = LOWER(?)",
          )
          .get(username);
      const GENERIC_AUTH_ERROR = "Username atau kata sandi tidak valid.";
      if (!userRow) {
        const failed = await recordFailedAttempt(userKey, RATE_LIMIT_CONFIGS.LOGIN_USER_IP);
        await recordFailedAttempt(ipKey, RATE_LIMIT_CONFIGS.LOGIN_GLOBAL_IP);
        if (failed.isNowBlocked)
          return {
            success: false,
            message:
              "Terlalu banyak percobaan login yang gagal (5x). Akses dikunci sementara selama 3 menit.",
          };
        return {
          success: false,
          message: GENERIC_AUTH_ERROR,
        };
      }
      if (!verifyPassword(password, userRow.password_hash)) {
        const failed = await recordFailedAttempt(userKey, RATE_LIMIT_CONFIGS.LOGIN_USER_IP);
        await recordFailedAttempt(ipKey, RATE_LIMIT_CONFIGS.LOGIN_GLOBAL_IP);
        if (failed.isNowBlocked)
          return {
            success: false,
            message:
              "Terlalu banyak percobaan login yang gagal (5x). Akses dikunci sementara selama 3 menit.",
          };
        return {
          success: false,
          message: GENERIC_AUTH_ERROR,
        };
      }
      if (userRow.role !== "admin")
        return {
          success: false,
          message: "Akses ditolak: Akun Anda tidak memiliki hak akses Administrator.",
        };
      await recordSuccessfulLogin(userKey);
      await recordSuccessfulLogin(ipKey);
      await setAdminSessionCookie((await createSession(userRow.id)).token);
      return {
        success: true,
        user: {
          username: userRow.username,
          role: userRow.role,
        },
      };
    } catch (err) {
      console.error("Login server error:", err);
      return {
        success: false,
        message: "Terjadi kesalahan sistem saat otentikasi server.",
      };
    }
  });
var changePasswordServerFn_createServerFn_handler = createServerRpc(
  {
    id: "e63307d11e39b31d5e923c3dff123e83b7c8a41d5d5578acf73d2e5660812399",
    name: "changePasswordServerFn",
    filename: "src/lib/server-actions.ts",
  },
  (opts) => changePasswordServerFn.__executeServer(opts),
);
var changePasswordServerFn = createServerFn({ method: "POST" })
  .validator((data) => changePasswordInputSchema.parse(extractPayload(data)))
  .handler(changePasswordServerFn_createServerFn_handler, async ({ data }) => {
    const user = await requireAdmin(data.token);
    const pwKey = `password_change:${getClientIP()}:${user.userId}`;
    const limitStatus = await checkRateLimit(pwKey, RATE_LIMIT_CONFIGS.PASSWORD_CHANGE);
    if (limitStatus.isBlocked)
      throw new Error(
        limitStatus.message ||
          "Terlalu banyak percobaan ganti kata sandi. Silakan coba kembali nanti.",
      );
    let userRow;
    if (isSupabaseMode()) {
      const { data: rows } = await getSupabaseAdminClient()
        .from("users")
        .select("id, password_hash")
        .eq("id", user.userId)
        .limit(1);
      userRow = rows?.[0];
    } else
      userRow = db.prepare("SELECT id, password_hash FROM users WHERE id = ?").get(user.userId);
    if (!userRow || !verifyPassword(data.oldPassword, userRow.password_hash)) {
      await recordFailedAttempt(pwKey, RATE_LIMIT_CONFIGS.PASSWORD_CHANGE);
      throw new Error("Kata sandi lama tidak sesuai.");
    }
    await recordSuccessfulLogin(pwKey);
    const newHash = bcryptjs_default.hashSync(data.newPassword, 10);
    if (isSupabaseMode()) {
      const { error } = await getSupabaseAdminClient()
        .from("users")
        .update({ password_hash: newHash })
        .eq("id", user.userId);
      if (error) throw new Error(`Gagal memperbarui kata sandi: ${error.message}`);
    } else db.prepare("UPDATE users SET password_hash = ? WHERE id = ?").run(newHash, user.userId);
    console.info(
      `[SECURITY AUDIT] Password diubah untuk user ID ${user.userId} (${user.username}).`,
    );
    return {
      success: true,
      message: "Kata sandi admin berhasil diperbarui!",
    };
  });
var checkDefaultPasswordServerFn_createServerFn_handler = createServerRpc(
  {
    id: "1c8571d11ef815895fcc86fd357d12c0c28f2831540b627db4f701e0f8ed033e",
    name: "checkDefaultPasswordServerFn",
    filename: "src/lib/server-actions.ts",
  },
  (opts) => checkDefaultPasswordServerFn.__executeServer(opts),
);
var checkDefaultPasswordServerFn = createServerFn({ method: "POST" })
  .validator((data) => tokenOnlySchema.parse(extractPayload(data)))
  .handler(checkDefaultPasswordServerFn_createServerFn_handler, async ({ data }) => {
    const user = await requireAdmin(data?.token);
    let passwordHash;
    if (isSupabaseMode()) {
      const { data: rows } = await getSupabaseAdminClient()
        .from("users")
        .select("password_hash")
        .eq("id", user.userId)
        .limit(1);
      passwordHash = rows?.[0]?.password_hash;
    } else
      passwordHash = db
        .prepare("SELECT password_hash FROM users WHERE id = ?")
        .get(user.userId)?.password_hash;
    if (!passwordHash) return { isDefaultPassword: false };
    const initialPassword = process.env["ADMIN_INITIAL_PASSWORD"];
    return {
      isDefaultPassword:
        Boolean(initialPassword && initialPassword.trim() !== "") &&
        verifyPassword(initialPassword.trim(), passwordHash),
    };
  });
var adminLogoutServerFn_createServerFn_handler = createServerRpc(
  {
    id: "29c1517d9458b0123dac993772de06bbe266e58194c5237700be2a8e7709a28d",
    name: "adminLogoutServerFn",
    filename: "src/lib/server-actions.ts",
  },
  (opts) => adminLogoutServerFn.__executeServer(opts),
);
var adminLogoutServerFn = createServerFn({ method: "POST" })
  .validator((data) => tokenOnlySchema.parse(extractPayload(data)))
  .handler(adminLogoutServerFn_createServerFn_handler, async ({ data }) => {
    const token = await getSessionToken(data?.token);
    if (token) await destroySession(token);
    await clearAdminSessionCookie();
    return { success: true };
  });
var uploadImageServerFn_createServerFn_handler = createServerRpc(
  {
    id: "a9f0fb56447d1fff8822013e974f946d82605c26b8409287d440e51c74da37ea",
    name: "uploadImageServerFn",
    filename: "src/lib/server-actions.ts",
  },
  (opts) => uploadImageServerFn.__executeServer(opts),
);
var uploadImageServerFn = createServerFn({ method: "POST" })
  .validator((data) => imageUploadSchema.parse(extractPayload(data)))
  .handler(uploadImageServerFn_createServerFn_handler, async ({ data }) => {
    await requireAdmin(data.token);
    return {
      success: true,
      url: await saveAndOptimizeImage(data.base64Data, data.category),
    };
  });
var migrateBase64ServerFn_createServerFn_handler = createServerRpc(
  {
    id: "f3304e289a018751170c3241b905634a8200163297c8d80d5aecbf8fb0c34f80",
    name: "migrateBase64ServerFn",
    filename: "src/lib/server-actions.ts",
  },
  (opts) => migrateBase64ServerFn.__executeServer(opts),
);
var migrateBase64ServerFn = createServerFn({ method: "POST" })
  .validator((data) => tokenOnlySchema.parse(extractPayload(data)))
  .handler(migrateBase64ServerFn_createServerFn_handler, async ({ data }) => {
    await requireAdmin(data?.token);
    return {
      success: true,
      count: await migrateBase64ImagesToFiles(),
    };
  });
var getSiteDataServerFn_createServerFn_handler = createServerRpc(
  {
    id: "066ff2d20809eace1a7df5454e466475299769619bb4c50e122c7b4795c17549",
    name: "getSiteDataServerFn",
    filename: "src/lib/server-actions.ts",
  },
  (opts) => getSiteDataServerFn.__executeServer(opts),
);
var getSiteDataServerFn = createServerFn({ method: "GET" }).handler(
  getSiteDataServerFn_createServerFn_handler,
  async () => {
    try {
      return await getSiteDataBundle();
    } catch (err) {
      console.error("Gagal mengambil site data dari database repository:", err);
      throw new Error(
        err instanceof Error ? err.message : "Gagal mengambil data dari database repository.",
      );
    }
  },
);
var recordPageViewServerFn_createServerFn_handler = createServerRpc(
  {
    id: "f736c0a0cc906d0ab6c97941d2459e54c6c95bea803d3c645dbaef68e817b38f",
    name: "recordPageViewServerFn",
    filename: "src/lib/server-actions.ts",
  },
  (opts) => recordPageViewServerFn.__executeServer(opts),
);
var recordPageViewServerFn = createServerFn({ method: "POST" })
  .validator((data) => recordPageViewSchema.parse(extractPayload(data)))
  .handler(recordPageViewServerFn_createServerFn_handler, async ({ data }) => {
    try {
      const clientIP = getClientIP();
      const ipHash = nodeCrypto
        .createHash("sha256")
        .update(clientIP + "_ekang_salt")
        .digest("hex")
        .slice(0, 16);
      const path = data?.path || "/";
      if (isSupabaseMode()) {
        const supabase = getSupabaseAdminClient();
        const tenMinutesAgo = /* @__PURE__ */ new Date(Date.now() - 6e5).toISOString();
        const { data: recent } = await supabase
          .from("page_views")
          .select("id")
          .eq("ip_hash", ipHash)
          .eq("path", path)
          .gt("created_at", tenMinutesAgo)
          .limit(1);
        if (!recent || recent.length === 0)
          await supabase.from("page_views").insert({
            path,
            ip_hash: ipHash,
          });
        const { count: totalViews } = await supabase.from("page_views").select("*", {
          count: "exact",
          head: true,
        });
        return {
          success: true,
          totalViews: totalViews || 0,
          uniqueVisitors: totalViews || 0,
        };
      }
      const tenMinutesAgo = /* @__PURE__ */ new Date(Date.now() - 6e5)
        .toISOString()
        .replace("T", " ")
        .slice(0, 19);
      if (
        !db
          .prepare(
            `
        SELECT id FROM page_views 
        WHERE ip_hash = ? AND path = ? AND created_at > ?
        LIMIT 1
      `,
          )
          .get(ipHash, path, tenMinutesAgo)
      )
        db.prepare("INSERT INTO page_views (path, ip_hash) VALUES (?, ?)").run(path, ipHash);
      return {
        success: true,
        totalViews: db.prepare("SELECT COUNT(*) as c FROM page_views").get()?.c || 0,
        uniqueVisitors:
          db.prepare("SELECT COUNT(DISTINCT ip_hash) as c FROM page_views").get()?.c || 0,
      };
    } catch (err) {
      console.error("Gagal mencatat pageview:", err);
      return {
        success: false,
        totalViews: 0,
        uniqueVisitors: 0,
      };
    }
  });
var getAdminDashboardDataServerFn_createServerFn_handler = createServerRpc(
  {
    id: "483e53b28e55f0d2a198f29fa2afdd46eebd419cffbf5245bf35f15acb5de881",
    name: "getAdminDashboardDataServerFn",
    filename: "src/lib/server-actions.ts",
  },
  (opts) => getAdminDashboardDataServerFn.__executeServer(opts),
);
var getAdminDashboardDataServerFn = createServerFn({ method: "POST" })
  .validator((data) => tokenOnlySchema.parse(extractPayload(data)))
  .handler(getAdminDashboardDataServerFn_createServerFn_handler, async ({ data }) => {
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
        supabase.from("page_views").select("*", {
          count: "exact",
          head: true,
        }),
      ]);
      const villageInfoMap = {};
      for (const r of infoRows || []) if (r.key) villageInfoMap[r.key] = r.value || "";
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
        reservations: reservations || [],
        totalPageViews: totalPageViews || 0,
        uniqueVisitors: totalPageViews || 0,
      };
    }
    const infoRows = db.prepare("SELECT key, value FROM village_info").all();
    const villageInfoMap = {};
    for (const r of infoRows) villageInfoMap[r.key] = r.value;
    return {
      villageInfo: villageInfoMap,
      landmarkList: db.prepare("SELECT * FROM destinations ORDER BY created_at DESC").all(),
      packageList: db.prepare("SELECT * FROM packages ORDER BY created_at DESC").all(),
      umkmList: db.prepare("SELECT * FROM umkm ORDER BY created_at DESC").all(),
      kegiatanList: db.prepare("SELECT * FROM kegiatan ORDER BY created_at DESC").all(),
      galeriItems: db.prepare("SELECT * FROM galleries ORDER BY created_at DESC").all(),
      reviews: db.prepare("SELECT * FROM reviews ORDER BY created_at DESC").all(),
      homestays: db.prepare("SELECT * FROM homestays ORDER BY created_at DESC").all(),
      faqs: db.prepare("SELECT * FROM faqs ORDER BY created_at ASC").all(),
      reservations: db.prepare("SELECT * FROM reservations ORDER BY created_at DESC").all(),
      totalPageViews: db.prepare("SELECT COUNT(*) as c FROM page_views").get()?.c || 0,
      uniqueVisitors:
        db.prepare("SELECT COUNT(DISTINCT ip_hash) as c FROM page_views").get()?.c || 0,
    };
  });
var submitPublicReviewServerFn_createServerFn_handler = createServerRpc(
  {
    id: "e23d26f7912843cc3803f048cd4e5edbd520779d405437c265d6828917717fa2",
    name: "submitPublicReviewServerFn",
    filename: "src/lib/server-actions.ts",
  },
  (opts) => submitPublicReviewServerFn.__executeServer(opts),
);
var submitPublicReviewServerFn = createServerFn({ method: "POST" })
  .validator((data) => publicReviewSchema.parse(extractPayload(data)))
  .handler(submitPublicReviewServerFn_createServerFn_handler, async ({ data }) => {
    const limitStatus = await consumeRateLimit(
      `review:${getClientIP()}:${data.nama.toLowerCase()}`,
      RATE_LIMIT_CONFIGS.REVIEW_SUBMISSION,
    );
    if (limitStatus.isBlocked)
      return {
        success: false,
        message:
          limitStatus.message ||
          "Batas kuota pengiriman ulasan tercapai. Silakan coba kembali beberapa saat lagi.",
      };
    const id = `rev-${Date.now()}`;
    const today = /* @__PURE__ */ new Date().toLocaleDateString("id-ID", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    const avatarUrl = `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80`;
    if (isSupabaseMode()) {
      const { error } = await getSupabaseAdminClient().from("reviews").insert({
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
    } else
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
    return {
      success: true,
      message:
        "Terima kasih! Ulasan Anda telah berhasil dikirim dan menunggu moderasi tim pengelola.",
    };
  });
async function generateUniqueReservationCode(year) {
  for (let attempt = 0; attempt < 10; attempt++) {
    const candidate = `EA-${year}-${nodeCrypto.randomBytes(2).toString("hex").toUpperCase()}`;
    let exists = false;
    if (isSupabaseMode()) {
      const { data } = await getSupabaseAdminClient()
        .from("reservations")
        .select("id")
        .eq("kode_reservasi", candidate)
        .limit(1);
      exists = (data?.length || 0) > 0;
    } else
      exists = Boolean(
        db.prepare("SELECT id FROM reservations WHERE kode_reservasi = ?").get(candidate),
      );
    if (!exists) return candidate;
  }
  return `EA-${year}-${Date.now().toString(36).toUpperCase().slice(-4)}`;
}
var submitReservationServerFn_createServerFn_handler = createServerRpc(
  {
    id: "daf5adaff011fc8d310fa55f8257f8df96e5447e2255f827f045683ac0e279d7",
    name: "submitReservationServerFn",
    filename: "src/lib/server-actions.ts",
  },
  (opts) => submitReservationServerFn.__executeServer(opts),
);
var submitReservationServerFn = createServerFn({ method: "POST" })
  .validator((data) => reservationPublicSchema.parse(extractPayload(data)))
  .handler(submitReservationServerFn_createServerFn_handler, async ({ data }) => {
    const limitStatus = await consumeRateLimit(
      `reservation:${getClientIP()}:${data.whatsapp}`,
      RATE_LIMIT_CONFIGS.RESERVATION_SUBMISSION,
    );
    if (limitStatus.isBlocked)
      throw new Error(
        limitStatus.message ||
          "Batas kuota pengiriman reservasi tercapai. Silakan coba kembali beberapa saat lagi.",
      );
    if (isSupabaseMode()) {
      const supabase = getSupabaseAdminClient();
      const fifteenSecondsAgo = /* @__PURE__ */ new Date(Date.now() - 15e3).toISOString();
      const { data: duplicates } = await supabase
        .from("reservations")
        .select("id, kode_reservasi")
        .eq("whatsapp", data.whatsapp)
        .eq("tanggal_kunjungan", data.tanggalKunjungan)
        .eq("nama_pemesan", data.namaPemesan)
        .gte("created_at", fifteenSecondsAgo)
        .order("created_at", { ascending: false })
        .limit(1);
      if (duplicates && duplicates.length > 0)
        return {
          success: true,
          kodeReservasi: duplicates[0].kode_reservasi,
          id: duplicates[0].id,
        };
      const year = /* @__PURE__ */ new Date().getFullYear();
      const id = `res-${Date.now()}-${nodeCrypto.randomBytes(4).toString("hex")}`;
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
      return {
        success: true,
        kodeReservasi,
        id,
      };
    }
    const recentDuplicate = db
      .prepare(
        `SELECT id, kode_reservasi FROM reservations 
         WHERE whatsapp = ? AND tanggal_kunjungan = ? AND nama_pemesan = ? 
         AND created_at >= datetime('now', '-15 seconds')
         ORDER BY created_at DESC LIMIT 1`,
      )
      .get(data.whatsapp, data.tanggalKunjungan, data.namaPemesan);
    if (recentDuplicate)
      return {
        success: true,
        kodeReservasi: recentDuplicate.kode_reservasi,
        id: recentDuplicate.id,
      };
    const year = /* @__PURE__ */ new Date().getFullYear();
    const id = `res-${Date.now()}-${nodeCrypto.randomBytes(4).toString("hex")}`;
    let kodeReservasi = "";
    let inserted = false;
    for (let attempt = 0; attempt < 5; attempt++)
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
      } catch (err) {
        if (
          err instanceof Error &&
          err.message.includes("UNIQUE constraint failed: reservations.kode_reservasi")
        )
          continue;
        throw err;
      }
    if (!inserted)
      throw new Error(
        "Gagal memproses kode reservasi unik. Silakan coba kembali beberapa saat lagi.",
      );
    return {
      success: true,
      kodeReservasi,
      id,
    };
  });
var saveVillageInfoServerFn_createServerFn_handler = createServerRpc(
  {
    id: "2d7172bc24f5eb36e24c17a144e53327e20e2072e491b3f66434b5be8176a300",
    name: "saveVillageInfoServerFn",
    filename: "src/lib/server-actions.ts",
  },
  (opts) => saveVillageInfoServerFn.__executeServer(opts),
);
var saveVillageInfoServerFn = createServerFn({ method: "POST" })
  .validator((data) => villageInfoSchema.parse(extractPayload(data)))
  .handler(saveVillageInfoServerFn_createServerFn_handler, async ({ data }) => {
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
      for (const [k, v] of Object.entries(data.info)) stmt.run(k, String(v));
    }
    return { success: true };
  });
var saveDestinasiServerFn_createServerFn_handler = createServerRpc(
  {
    id: "c51de335367ac26553e5b9101a0b3ba95b47b7aa9a9ee985e448f0828e4c4176",
    name: "saveDestinasiServerFn",
    filename: "src/lib/server-actions.ts",
  },
  (opts) => saveDestinasiServerFn.__executeServer(opts),
);
var saveDestinasiServerFn = createServerFn({ method: "POST" })
  .validator((data) => destinasiSchema.parse(extractPayload(data)))
  .handler(saveDestinasiServerFn_createServerFn_handler, async ({ data }) => {
    await requireAdmin(data.token);
    const item = data.item;
    const id = item.id || `lm-${Date.now()}`;
    const slug = item.slug || item.nama.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    if (isSupabaseMode()) {
      const { error } = await getSupabaseAdminClient()
        .from("destinations")
        .upsert({
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
          source_json: item.source || {
            name: "Pengelola",
            url: "",
          },
          status: item.status,
        });
      if (error) throw new Error(`Gagal menyimpan destinasi: ${error.message}`);
    } else
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
        JSON.stringify(
          item.source || {
            name: "Pengelola",
            url: "",
          },
        ),
        item.status,
      );
    return {
      success: true,
      id,
    };
  });
var deleteDestinasiServerFn_createServerFn_handler = createServerRpc(
  {
    id: "dc1cc92c7665ad45fc84d3b1bf4bc2124e946d89e1fd66febc83dbaf98356ca3",
    name: "deleteDestinasiServerFn",
    filename: "src/lib/server-actions.ts",
  },
  (opts) => deleteDestinasiServerFn.__executeServer(opts),
);
var deleteDestinasiServerFn = createServerFn({ method: "POST" })
  .validator((data) => deleteItemSchema.parse(extractPayload(data)))
  .handler(deleteDestinasiServerFn_createServerFn_handler, async ({ data }) => {
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
      const row = db.prepare("SELECT image FROM destinations WHERE id = ?").get(data.id);
      db.prepare("DELETE FROM destinations WHERE id = ?").run(data.id);
      if (row?.image) deleteImageFile(row.image);
    }
    return { success: true };
  });
var extractOgImageServerFn_createServerFn_handler = createServerRpc(
  {
    id: "8a7022dbe1e34a63b1ef0b1db72a0054b4d0e8680744775253d3cab22d2876b1",
    name: "extractOgImageServerFn",
    filename: "src/lib/server-actions.ts",
  },
  (opts) => extractOgImageServerFn.__executeServer(opts),
);
var extractOgImageServerFn = createServerFn({ method: "POST" })
  .validator((data) => extractOgImageSchema.parse(extractPayload(data)))
  .handler(extractOgImageServerFn_createServerFn_handler, async ({ data }) => {
    await requireAdmin(data.token);
    return await extractOgImageFromUrl(data.url);
  });
var saveKegiatanServerFn_createServerFn_handler = createServerRpc(
  {
    id: "70c47140bbdb8e4e3225c6c19ea1f83c9ba8e571c1a8912a940fc651f77a2e88",
    name: "saveKegiatanServerFn",
    filename: "src/lib/server-actions.ts",
  },
  (opts) => saveKegiatanServerFn.__executeServer(opts),
);
var saveKegiatanServerFn = createServerFn({ method: "POST" })
  .validator((data) => kegiatanSchema.parse(extractPayload(data)))
  .handler(saveKegiatanServerFn_createServerFn_handler, async ({ data }) => {
    await requireAdmin(data.token);
    const item = data.item;
    const id = item.id || `keg-${Date.now()}`;
    if (isSupabaseMode()) {
      const { error } = await getSupabaseAdminClient()
        .from("kegiatan")
        .upsert({
          id,
          judul: item.judul,
          kategori: item.kategori,
          tanggal: item.tanggal,
          deskripsi: item.deskripsi || "",
          image: item.image || "",
          image_source: item.image_source || "upload",
          source_json: item.source || {
            name: "Pengelola",
            url: "",
          },
          status: item.status,
        });
      if (error) throw new Error(`Gagal menyimpan kegiatan: ${error.message}`);
    } else {
      try {
        db.exec("ALTER TABLE kegiatan ADD COLUMN image_source TEXT DEFAULT 'upload'");
      } catch {}
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
        JSON.stringify(
          item.source || {
            name: "Pengelola",
            url: "",
          },
        ),
        item.status,
      );
    }
    return {
      success: true,
      id,
    };
  });
var deleteKegiatanServerFn_createServerFn_handler = createServerRpc(
  {
    id: "0f2a7074a88cbedea55ca409de9764e7e85d5ced2760c7bb2f76d192a8d53ffd",
    name: "deleteKegiatanServerFn",
    filename: "src/lib/server-actions.ts",
  },
  (opts) => deleteKegiatanServerFn.__executeServer(opts),
);
var deleteKegiatanServerFn = createServerFn({ method: "POST" })
  .validator((data) => deleteItemSchema.parse(extractPayload(data)))
  .handler(deleteKegiatanServerFn_createServerFn_handler, async ({ data }) => {
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
      const row = db.prepare("SELECT image FROM kegiatan WHERE id = ?").get(data.id);
      db.prepare("DELETE FROM kegiatan WHERE id = ?").run(data.id);
      if (row?.image) deleteImageFile(row.image);
    }
    return { success: true };
  });
var saveUmkmServerFn_createServerFn_handler = createServerRpc(
  {
    id: "e9274f2bf7eeec05351ab696d62e9071cad1c3c828cf4709bccfd1116f2a2149",
    name: "saveUmkmServerFn",
    filename: "src/lib/server-actions.ts",
  },
  (opts) => saveUmkmServerFn.__executeServer(opts),
);
var saveUmkmServerFn = createServerFn({ method: "POST" })
  .validator((data) => umkmSchema.parse(extractPayload(data)))
  .handler(saveUmkmServerFn_createServerFn_handler, async ({ data }) => {
    await requireAdmin(data.token);
    const item = data.item;
    const id = item.id || `umkm-${Date.now()}`;
    const slug = item.slug || item.nama.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    if (isSupabaseMode()) {
      const { error } = await getSupabaseAdminClient()
        .from("umkm")
        .upsert({
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
          source_json: item.source || {
            name: "Pengelola",
            url: "",
          },
          status: item.status,
        });
      if (error) throw new Error(`Gagal menyimpan UMKM: ${error.message}`);
    } else
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
        JSON.stringify(
          item.source || {
            name: "Pengelola",
            url: "",
          },
        ),
        item.status,
      );
    return {
      success: true,
      id,
    };
  });
var deleteUmkmServerFn_createServerFn_handler = createServerRpc(
  {
    id: "9bafb474685506142ab6a68e5347486912e3e41911c45e1eb425dcf5c2650c2d",
    name: "deleteUmkmServerFn",
    filename: "src/lib/server-actions.ts",
  },
  (opts) => deleteUmkmServerFn.__executeServer(opts),
);
var deleteUmkmServerFn = createServerFn({ method: "POST" })
  .validator((data) => deleteItemSchema.parse(extractPayload(data)))
  .handler(deleteUmkmServerFn_createServerFn_handler, async ({ data }) => {
    await requireAdmin(data.token);
    if (isSupabaseMode()) {
      const supabase = getSupabaseAdminClient();
      const { data: row } = await supabase.from("umkm").select("image").eq("id", data.id).single();
      const { error } = await supabase.from("umkm").delete().eq("id", data.id);
      if (error) throw new Error(`Gagal menghapus UMKM: ${error.message}`);
      if (row?.image) deleteImageFile(row.image);
    } else {
      const row = db.prepare("SELECT image FROM umkm WHERE id = ?").get(data.id);
      db.prepare("DELETE FROM umkm WHERE id = ?").run(data.id);
      if (row?.image) deleteImageFile(row.image);
    }
    return { success: true };
  });
var saveGaleriServerFn_createServerFn_handler = createServerRpc(
  {
    id: "13845e65ebac5b8709ea3f6abba067859f3534df5a15741e30c808575e1d3ff4",
    name: "saveGaleriServerFn",
    filename: "src/lib/server-actions.ts",
  },
  (opts) => saveGaleriServerFn.__executeServer(opts),
);
var saveGaleriServerFn = createServerFn({ method: "POST" })
  .validator((data) => galeriSchema.parse(extractPayload(data)))
  .handler(saveGaleriServerFn_createServerFn_handler, async ({ data }) => {
    await requireAdmin(data.token);
    const item = data.item;
    const id = item.id || `gal-${Date.now()}`;
    if (isSupabaseMode()) {
      const { error } = await getSupabaseAdminClient()
        .from("galleries")
        .upsert({
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
    } else
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
    return {
      success: true,
      id,
    };
  });
var deleteGaleriServerFn_createServerFn_handler = createServerRpc(
  {
    id: "1ac8aa0dd46d83da103fa86acea43e27ac7074b4f9ce08eec6ee6ee88611719b",
    name: "deleteGaleriServerFn",
    filename: "src/lib/server-actions.ts",
  },
  (opts) => deleteGaleriServerFn.__executeServer(opts),
);
var deleteGaleriServerFn = createServerFn({ method: "POST" })
  .validator((data) => deleteItemSchema.parse(extractPayload(data)))
  .handler(deleteGaleriServerFn_createServerFn_handler, async ({ data }) => {
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
      const row = db.prepare("SELECT image FROM galleries WHERE id = ?").get(data.id);
      db.prepare("DELETE FROM galleries WHERE id = ?").run(data.id);
      if (row?.image) deleteImageFile(row.image);
    }
    return { success: true };
  });
var saveReviewServerFn_createServerFn_handler = createServerRpc(
  {
    id: "b00d1bbbd203a7e21aea7dd8988b261cbdf0dbc02176742027b38610d3c94fae",
    name: "saveReviewServerFn",
    filename: "src/lib/server-actions.ts",
  },
  (opts) => saveReviewServerFn.__executeServer(opts),
);
var saveReviewServerFn = createServerFn({ method: "POST" })
  .validator((data) => adminReviewSchema.parse(extractPayload(data)))
  .handler(saveReviewServerFn_createServerFn_handler, async ({ data }) => {
    await requireAdmin(data.token);
    const item = data.item;
    const id = item.id || `rev-${Date.now()}`;
    const avatarUrl =
      item.avatar ||
      `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80`;
    if (isSupabaseMode()) {
      const { error } = await getSupabaseAdminClient()
        .from("reviews")
        .upsert({
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
    } else
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
    return {
      success: true,
      id,
    };
  });
var updateReviewStatusServerFn_createServerFn_handler = createServerRpc(
  {
    id: "622151c6d7078b8fa025c877bdbcbd03c0b6ebc88b31b33b742ea03373b39343",
    name: "updateReviewStatusServerFn",
    filename: "src/lib/server-actions.ts",
  },
  (opts) => updateReviewStatusServerFn.__executeServer(opts),
);
var updateReviewStatusServerFn = createServerFn({ method: "POST" })
  .validator((data) => reviewStatusSchema.parse(extractPayload(data)))
  .handler(updateReviewStatusServerFn_createServerFn_handler, async ({ data }) => {
    await requireAdmin(data.token);
    if (isSupabaseMode()) {
      const { error } = await getSupabaseAdminClient()
        .from("reviews")
        .update({ status: data.status })
        .eq("id", data.id);
      if (error) throw new Error(`Gagal mengubah status review: ${error.message}`);
    } else db.prepare("UPDATE reviews SET status = ? WHERE id = ?").run(data.status, data.id);
    return { success: true };
  });
var deleteReviewServerFn_createServerFn_handler = createServerRpc(
  {
    id: "e760faafa665349c13470887b5e37cbb7004d8fdd6d68c79ac98b9ece3f3d9d3",
    name: "deleteReviewServerFn",
    filename: "src/lib/server-actions.ts",
  },
  (opts) => deleteReviewServerFn.__executeServer(opts),
);
var deleteReviewServerFn = createServerFn({ method: "POST" })
  .validator((data) => deleteItemSchema.parse(extractPayload(data)))
  .handler(deleteReviewServerFn_createServerFn_handler, async ({ data }) => {
    await requireAdmin(data.token);
    if (isSupabaseMode()) {
      const { error } = await getSupabaseAdminClient().from("reviews").delete().eq("id", data.id);
      if (error) throw new Error(`Gagal menghapus review: ${error.message}`);
    } else db.prepare("DELETE FROM reviews WHERE id = ?").run(data.id);
    return { success: true };
  });
var saveHomestayServerFn_createServerFn_handler = createServerRpc(
  {
    id: "395ba6a1fdd8bba1f1659621df557076fae2365f78529ba51141c973831e6449",
    name: "saveHomestayServerFn",
    filename: "src/lib/server-actions.ts",
  },
  (opts) => saveHomestayServerFn.__executeServer(opts),
);
var saveHomestayServerFn = createServerFn({ method: "POST" })
  .validator((data) => homestaySchema.parse(extractPayload(data)))
  .handler(saveHomestayServerFn_createServerFn_handler, async ({ data }) => {
    await requireAdmin(data.token);
    const item = data.item;
    const id = item.id || `home-${Date.now()}`;
    const slug = item.slug || item.nama.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    if (isSupabaseMode()) {
      const { error } = await getSupabaseAdminClient()
        .from("homestays")
        .upsert({
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
    } else
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
    return {
      success: true,
      id,
    };
  });
var deleteHomestayServerFn_createServerFn_handler = createServerRpc(
  {
    id: "8d944807815d91a456482cb8f56496758d829a718d870a86635c5b7db8fdc97c",
    name: "deleteHomestayServerFn",
    filename: "src/lib/server-actions.ts",
  },
  (opts) => deleteHomestayServerFn.__executeServer(opts),
);
var deleteHomestayServerFn = createServerFn({ method: "POST" })
  .validator((data) => deleteItemSchema.parse(extractPayload(data)))
  .handler(deleteHomestayServerFn_createServerFn_handler, async ({ data }) => {
    await requireAdmin(data.token);
    if (isSupabaseMode()) {
      const { error } = await getSupabaseAdminClient().from("homestays").delete().eq("id", data.id);
      if (error) throw new Error(`Gagal menghapus homestay: ${error.message}`);
    } else db.prepare("DELETE FROM homestays WHERE id = ?").run(data.id);
    return { success: true };
  });
var savePaketServerFn_createServerFn_handler = createServerRpc(
  {
    id: "1e1bc6970b0abe13a4807eb80a553f597e24de42ae4ae517ddea5ca426ccd075",
    name: "savePaketServerFn",
    filename: "src/lib/server-actions.ts",
  },
  (opts) => savePaketServerFn.__executeServer(opts),
);
var savePaketServerFn = createServerFn({ method: "POST" })
  .validator((data) => paketWisataSchema.parse(extractPayload(data)))
  .handler(savePaketServerFn_createServerFn_handler, async ({ data }) => {
    await requireAdmin(data.token);
    const item = data.item;
    const id = item.id || `pkg-${Date.now()}`;
    const slug = item.slug || item.nama.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    if (isSupabaseMode()) {
      const { error } = await getSupabaseAdminClient()
        .from("packages")
        .upsert({
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
          source_json: item.source || {
            name: "Pengelola",
            url: "",
          },
          status: item.status,
        });
      if (error) throw new Error(`Gagal menyimpan paket wisata: ${error.message}`);
    } else
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
        JSON.stringify(
          item.source || {
            name: "Pengelola",
            url: "",
          },
        ),
        item.status,
      );
    return {
      success: true,
      id,
    };
  });
var deletePaketServerFn_createServerFn_handler = createServerRpc(
  {
    id: "750562c31640665a2c5941c01ce34b22e4d693b016dc30ced3ebce1a1a63be7d",
    name: "deletePaketServerFn",
    filename: "src/lib/server-actions.ts",
  },
  (opts) => deletePaketServerFn.__executeServer(opts),
);
var deletePaketServerFn = createServerFn({ method: "POST" })
  .validator((data) => deleteItemSchema.parse(extractPayload(data)))
  .handler(deletePaketServerFn_createServerFn_handler, async ({ data }) => {
    await requireAdmin(data.token);
    if (isSupabaseMode()) {
      const { error } = await getSupabaseAdminClient().from("packages").delete().eq("id", data.id);
      if (error) throw new Error(`Gagal menghapus paket wisata: ${error.message}`);
    } else db.prepare("DELETE FROM packages WHERE id = ?").run(data.id);
    return { success: true };
  });
var saveFaqServerFn_createServerFn_handler = createServerRpc(
  {
    id: "360eb360e69eed3a2c9bbb5859829cc757d9ff9741a43bd6482a5d4dd44ba14c",
    name: "saveFaqServerFn",
    filename: "src/lib/server-actions.ts",
  },
  (opts) => saveFaqServerFn.__executeServer(opts),
);
var saveFaqServerFn = createServerFn({ method: "POST" })
  .validator((data) => faqSchema.parse(extractPayload(data)))
  .handler(saveFaqServerFn_createServerFn_handler, async ({ data }) => {
    await requireAdmin(data.token);
    const item = data.item;
    const id = item.id || `faq-${Date.now()}`;
    if (isSupabaseMode()) {
      const { error } = await getSupabaseAdminClient().from("faqs").upsert({
        id,
        pertanyaan: item.pertanyaan,
        jawaban: item.jawaban,
        kategori: item.kategori,
        status: item.status,
      });
      if (error) throw new Error(`Gagal menyimpan FAQ: ${error.message}`);
    } else
      db.prepare(
        `
        INSERT OR REPLACE INTO faqs (id, pertanyaan, jawaban, kategori, status)
        VALUES (?, ?, ?, ?, ?)
      `,
      ).run(id, item.pertanyaan, item.jawaban, item.kategori, item.status);
    return {
      success: true,
      id,
    };
  });
var deleteFaqServerFn_createServerFn_handler = createServerRpc(
  {
    id: "1fa08bdfb5e76bcc2fb118273da19fb84fb50375ccf82f708b1f6566e3467156",
    name: "deleteFaqServerFn",
    filename: "src/lib/server-actions.ts",
  },
  (opts) => deleteFaqServerFn.__executeServer(opts),
);
var deleteFaqServerFn = createServerFn({ method: "POST" })
  .validator((data) => deleteItemSchema.parse(extractPayload(data)))
  .handler(deleteFaqServerFn_createServerFn_handler, async ({ data }) => {
    await requireAdmin(data.token);
    if (isSupabaseMode()) {
      const { error } = await getSupabaseAdminClient().from("faqs").delete().eq("id", data.id);
      if (error) throw new Error(`Gagal menghapus FAQ: ${error.message}`);
    } else db.prepare("DELETE FROM faqs WHERE id = ?").run(data.id);
    return { success: true };
  });
var updateReservationStatusServerFn_createServerFn_handler = createServerRpc(
  {
    id: "92d386995ce1354db653f6f793f4aa1b053bc0f67ce0c5830c2b378492ce7a42",
    name: "updateReservationStatusServerFn",
    filename: "src/lib/server-actions.ts",
  },
  (opts) => updateReservationStatusServerFn.__executeServer(opts),
);
var updateReservationStatusServerFn = createServerFn({ method: "POST" })
  .validator((data) => reservationStatusSchema.parse(extractPayload(data)))
  .handler(updateReservationStatusServerFn_createServerFn_handler, async ({ data }) => {
    await requireAdmin(data.token);
    if (isSupabaseMode()) {
      const { error } = await getSupabaseAdminClient()
        .from("reservations")
        .update({ status: data.status })
        .eq("id", data.id);
      if (error) throw new Error(`Gagal mengubah status reservasi: ${error.message}`);
    } else db.prepare("UPDATE reservations SET status = ? WHERE id = ?").run(data.status, data.id);
    return { success: true };
  });
var deleteReservationServerFn_createServerFn_handler = createServerRpc(
  {
    id: "b70e8fc52b84ba27a79456c03d5c7b1958a63ea4d777d89a1ea97e2ef645b2d5",
    name: "deleteReservationServerFn",
    filename: "src/lib/server-actions.ts",
  },
  (opts) => deleteReservationServerFn.__executeServer(opts),
);
var deleteReservationServerFn = createServerFn({ method: "POST" })
  .validator((data) => deleteItemSchema.parse(extractPayload(data)))
  .handler(deleteReservationServerFn_createServerFn_handler, async ({ data }) => {
    await requireAdmin(data.token);
    if (isSupabaseMode()) {
      const { error } = await getSupabaseAdminClient()
        .from("reservations")
        .delete()
        .eq("id", data.id);
      if (error) throw new Error(`Gagal menghapus reservasi: ${error.message}`);
    } else db.prepare("DELETE FROM reservations WHERE id = ?").run(data.id);
    return { success: true };
  });
//#endregion
export {
  adminLoginServerFn_createServerFn_handler,
  adminLogoutServerFn_createServerFn_handler,
  changePasswordServerFn_createServerFn_handler,
  checkAdminAuthServerFn_createServerFn_handler,
  checkDefaultPasswordServerFn_createServerFn_handler,
  deleteDestinasiServerFn_createServerFn_handler,
  deleteFaqServerFn_createServerFn_handler,
  deleteGaleriServerFn_createServerFn_handler,
  deleteHomestayServerFn_createServerFn_handler,
  deleteKegiatanServerFn_createServerFn_handler,
  deletePaketServerFn_createServerFn_handler,
  deleteReservationServerFn_createServerFn_handler,
  deleteReviewServerFn_createServerFn_handler,
  deleteUmkmServerFn_createServerFn_handler,
  extractOgImageServerFn_createServerFn_handler,
  getAdminDashboardDataServerFn_createServerFn_handler,
  getSiteDataServerFn_createServerFn_handler,
  migrateBase64ServerFn_createServerFn_handler,
  recordPageViewServerFn_createServerFn_handler,
  saveDestinasiServerFn_createServerFn_handler,
  saveFaqServerFn_createServerFn_handler,
  saveGaleriServerFn_createServerFn_handler,
  saveHomestayServerFn_createServerFn_handler,
  saveKegiatanServerFn_createServerFn_handler,
  savePaketServerFn_createServerFn_handler,
  saveReviewServerFn_createServerFn_handler,
  saveUmkmServerFn_createServerFn_handler,
  saveVillageInfoServerFn_createServerFn_handler,
  submitPublicReviewServerFn_createServerFn_handler,
  submitReservationServerFn_createServerFn_handler,
  updateReservationStatusServerFn_createServerFn_handler,
  updateReviewStatusServerFn_createServerFn_handler,
  uploadImageServerFn_createServerFn_handler,
};
