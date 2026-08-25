import { getRequestHeader } from "@tanstack/react-start/server";
import { db } from "./db";
import { getSupabaseAdminClient, isSupabaseAdminConfigured } from "./supabase-admin.server";

export interface RateLimitStatus {
  isBlocked: boolean;
  remainingSeconds: number;
  message?: string;
}

export interface RateLimitConfig {
  maxAttempts: number;
  windowMs: number;
  lockoutMs: number;
  actionName: string;
}

// Pre-defined Preset Configurations
export const RATE_LIMIT_CONFIGS = {
  // Login: 5 failed attempts per user+IP per 1 min → 3 mins lockout
  LOGIN_USER_IP: {
    maxAttempts: 5,
    windowMs: 60 * 1000,
    lockoutMs: 3 * 60 * 1000,
    actionName: "login akun",
  },
  // Login Global IP: 15 failed attempts per IP per 3 mins → 5 mins lockout
  LOGIN_GLOBAL_IP: {
    maxAttempts: 15,
    windowMs: 3 * 60 * 1000,
    lockoutMs: 5 * 60 * 1000,
    actionName: "login percobaan IP",
  },
  // Public Reservation: 5 bookings per IP+WhatsApp per 10 mins → 10 mins lockout
  RESERVATION_SUBMISSION: {
    maxAttempts: 5,
    windowMs: 10 * 60 * 1000,
    lockoutMs: 10 * 60 * 1000,
    actionName: "pengiriman reservasi",
  },
  // Public Review: 3 reviews per IP+Nama per 10 mins → 10 mins lockout
  REVIEW_SUBMISSION: {
    maxAttempts: 3,
    windowMs: 10 * 60 * 1000,
    lockoutMs: 10 * 60 * 1000,
    actionName: "pengiriman ulasan",
  },
  // Password Change: 5 attempts per user per 5 mins → 15 mins lockout
  PASSWORD_CHANGE: {
    maxAttempts: 5,
    windowMs: 5 * 60 * 1000,
    lockoutMs: 15 * 60 * 1000,
    actionName: "perubahan kata sandi",
  },
} as const;

// In-memory fallback rate limit store (used when Supabase is unavailable)
const inMemoryStore = new Map<
  string,
  { count: number; firstAttemptAt: number; blockedUntil: number }
>();

function isSupabaseMode(): boolean {
  const mode = process.env["DATABASE_MODE"]?.toLowerCase()?.trim();
  if (mode === "sqlite") return false;
  if (mode === "supabase") return true;
  return isSupabaseAdminConfigured();
}

/**
 * Mendapatkan IP Address asli klien dari request header (Cloudflare, Reverse Proxy Nginx, atau direct)
 */
export function getClientIP(): string {
  try {
    const cfIP = getRequestHeader("cf-connecting-ip");
    if (cfIP && typeof cfIP === "string" && cfIP.trim() !== "") {
      return cfIP.split(",")[0]!.trim();
    }

    const xForwardedFor = getRequestHeader("x-forwarded-for");
    if (xForwardedFor && typeof xForwardedFor === "string" && xForwardedFor.trim() !== "") {
      return xForwardedFor.split(",")[0]!.trim();
    }

    const xRealIP = getRequestHeader("x-real-ip");
    if (xRealIP && typeof xRealIP === "string" && xRealIP.trim() !== "") {
      return xRealIP.trim();
    }
  } catch {
    // Non-HTTP context (e.g. CLI or background)
  }
  return "127.0.0.1";
}

/**
 * Membersihkan record rate limit lama dari database
 */
export async function cleanupExpiredRateLimits(): Promise<void> {
  try {
    const now = Date.now();
    if (isSupabaseMode()) {
      try {
        const supabase = getSupabaseAdminClient();
        // Delete records where lockout has expired AND window has expired
        await supabase
          .from("rate_limits")
          .delete()
          .lt("blocked_until", now)
          .lt("first_attempt_at", now - 600000);
      } catch {
        // Supabase cleanup failure is non-critical, use in-memory fallback
        for (const [key, val] of inMemoryStore.entries()) {
          if (val.blockedUntil < now && val.firstAttemptAt + 600000 < now) {
            inMemoryStore.delete(key);
          }
        }
      }
    } else {
      db.prepare(
        "DELETE FROM rate_limits WHERE blocked_until < ? AND (first_attempt_at + 600000) < ?",
      ).run(now, now);
    }
  } catch {
    // Silent catch
  }
}

/**
 * Memeriksa status rate limit (apakah sedang diblokir atau window telah habis)
 */
export async function checkRateLimit(
  key: string,
  config: RateLimitConfig = RATE_LIMIT_CONFIGS.LOGIN_USER_IP,
): Promise<RateLimitStatus> {
  const normalizedKey = (key || "unknown").toLowerCase().trim();
  const now = Date.now();

  try {
    if (isSupabaseMode()) {
      try {
        const supabase = getSupabaseAdminClient();
        const { data, error } = await supabase
          .from("rate_limits")
          .select("count, first_attempt_at, blocked_until")
          .eq("key", normalizedKey)
          .maybeSingle();

        if (error) throw error;
        if (!data) return { isBlocked: false, remainingSeconds: 0 };

        const row = data as { count: number; first_attempt_at: number; blocked_until: number };

        if (row.blocked_until > now) {
          const remainingSeconds = Math.ceil((row.blocked_until - now) / 1000);
          const minutes = Math.ceil(remainingSeconds / 60);
          return {
            isBlocked: true,
            remainingSeconds,
            message: `Terlalu banyak permintaan untuk ${config.actionName}. Akses dibatasi sementara untuk keamanan. Silakan coba kembali dalam ${minutes} menit (${remainingSeconds} detik).`,
          };
        }

        if (now - row.first_attempt_at > config.windowMs) {
          await supabase.from("rate_limits").delete().eq("key", normalizedKey);
          return { isBlocked: false, remainingSeconds: 0 };
        }

        return { isBlocked: false, remainingSeconds: 0 };
      } catch {
        // Supabase error → use in-memory fallback (fail-open)
        return checkInMemory(normalizedKey, config, now);
      }
    }

    // SQLite mode
    const row = db
      .prepare("SELECT count, first_attempt_at, blocked_until FROM rate_limits WHERE key = ?")
      .get(normalizedKey) as
      { count: number; first_attempt_at: number; blocked_until: number } | undefined;

    if (!row) return { isBlocked: false, remainingSeconds: 0 };

    if (row.blocked_until > now) {
      const remainingSeconds = Math.ceil((row.blocked_until - now) / 1000);
      const minutes = Math.ceil(remainingSeconds / 60);
      return {
        isBlocked: true,
        remainingSeconds,
        message: `Terlalu banyak permintaan untuk ${config.actionName}. Akses dibatasi sementara untuk keamanan. Silakan coba kembali dalam ${minutes} menit (${remainingSeconds} detik).`,
      };
    }

    if (now - row.first_attempt_at > config.windowMs) {
      db.prepare("DELETE FROM rate_limits WHERE key = ?").run(normalizedKey);
      return { isBlocked: false, remainingSeconds: 0 };
    }

    return { isBlocked: false, remainingSeconds: 0 };
  } catch (err) {
    console.error("Gagal memeriksa rate limit di database:", err);
    return { isBlocked: false, remainingSeconds: 0 };
  }
}

/**
 * Mencatat percobaan gagal (misal salah password) dan mengunci jika batas tercapai
 */
export async function recordFailedAttempt(
  key: string,
  config: RateLimitConfig = RATE_LIMIT_CONFIGS.LOGIN_USER_IP,
): Promise<{ isNowBlocked: boolean; remainingAttempts: number }> {
  const normalizedKey = (key || "unknown").toLowerCase().trim();
  const now = Date.now();

  try {
    if (isSupabaseMode()) {
      try {
        const supabase = getSupabaseAdminClient();
        const { data } = await supabase
          .from("rate_limits")
          .select("count, first_attempt_at")
          .eq("key", normalizedKey)
          .maybeSingle();

        const row = data as { count: number; first_attempt_at: number } | null;

        if (!row || now - row.first_attempt_at > config.windowMs) {
          await supabase
            .from("rate_limits")
            .upsert({ key: normalizedKey, count: 1, first_attempt_at: now, blocked_until: 0 });
          return { isNowBlocked: false, remainingAttempts: config.maxAttempts - 1 };
        }

        const newCount = row.count + 1;
        if (newCount >= config.maxAttempts) {
          const blockedUntil = now + config.lockoutMs;
          await supabase
            .from("rate_limits")
            .update({ count: newCount, blocked_until: blockedUntil })
            .eq("key", normalizedKey);
          console.warn(
            `[SECURITY AUDIT] Rate limit dipicu untuk key '${normalizedKey}'. Akses dikunci selama ${config.lockoutMs / 1000} detik.`,
          );
          return { isNowBlocked: true, remainingAttempts: 0 };
        }

        await supabase.from("rate_limits").update({ count: newCount }).eq("key", normalizedKey);
        return { isNowBlocked: false, remainingAttempts: config.maxAttempts - newCount };
      } catch {
        // Supabase error → use in-memory fallback
        return recordFailedInMemory(normalizedKey, config, now);
      }
    }

    // SQLite mode
    const row = db
      .prepare("SELECT count, first_attempt_at FROM rate_limits WHERE key = ?")
      .get(normalizedKey) as { count: number; first_attempt_at: number } | undefined;

    if (!row || now - row.first_attempt_at > config.windowMs) {
      db.prepare(
        "INSERT OR REPLACE INTO rate_limits (key, count, first_attempt_at, blocked_until) VALUES (?, 1, ?, 0)",
      ).run(normalizedKey, now);
      return { isNowBlocked: false, remainingAttempts: config.maxAttempts - 1 };
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
        `[SECURITY AUDIT] Rate limit dipicu untuk key '${normalizedKey}'. Akses dikunci selama ${
          config.lockoutMs / 1000
        } detik.`,
      );
      return { isNowBlocked: true, remainingAttempts: 0 };
    }

    db.prepare("UPDATE rate_limits SET count = ? WHERE key = ?").run(newCount, normalizedKey);
    return { isNowBlocked: false, remainingAttempts: config.maxAttempts - newCount };
  } catch (err) {
    console.error("Gagal mencatat percobaan rate limit di database:", err);
    return { isNowBlocked: false, remainingAttempts: 1 };
  }
}

/**
 * Mengonsumsi kuota rate limit untuk aksi publik (misal pengiriman reservasi atau ulasan).
 * Jika kuota habis dalam window, langsung mengunci key dan mengembalikan isBlocked: true.
 */
export async function consumeRateLimit(
  key: string,
  config: RateLimitConfig,
): Promise<RateLimitStatus> {
  const normalizedKey = (key || "unknown").toLowerCase().trim();
  const now = Date.now();

  try {
    if (isSupabaseMode()) {
      try {
        const supabase = getSupabaseAdminClient();
        const { data } = await supabase
          .from("rate_limits")
          .select("count, first_attempt_at, blocked_until")
          .eq("key", normalizedKey)
          .maybeSingle();

        const row = data as {
          count: number;
          first_attempt_at: number;
          blocked_until: number;
        } | null;

        if (!row) {
          await supabase
            .from("rate_limits")
            .insert({ key: normalizedKey, count: 1, first_attempt_at: now, blocked_until: 0 });
          return { isBlocked: false, remainingSeconds: 0 };
        }

        if (row.blocked_until > now) {
          const remainingSeconds = Math.ceil((row.blocked_until - now) / 1000);
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
            .update({ count: 1, first_attempt_at: now, blocked_until: 0 })
            .eq("key", normalizedKey);
          return { isBlocked: false, remainingSeconds: 0 };
        }

        const newCount = row.count + 1;
        if (newCount > config.maxAttempts) {
          const blockedUntil = now + config.lockoutMs;
          await supabase
            .from("rate_limits")
            .update({ count: newCount, blocked_until: blockedUntil })
            .eq("key", normalizedKey);
          const remainingSeconds = Math.ceil(config.lockoutMs / 1000);
          const minutes = Math.ceil(remainingSeconds / 60);
          return {
            isBlocked: true,
            remainingSeconds,
            message: `Batas kuota pengiriman untuk ${config.actionName} tercapai (${config.maxAttempts}x). Silakan coba lagi dalam ${minutes} menit.`,
          };
        }

        await supabase.from("rate_limits").update({ count: newCount }).eq("key", normalizedKey);
        return { isBlocked: false, remainingSeconds: 0 };
      } catch {
        // Supabase error → use in-memory fallback (fail-open)
        return consumeInMemory(normalizedKey, config, now);
      }
    }

    // SQLite mode
    const row = db
      .prepare("SELECT count, first_attempt_at, blocked_until FROM rate_limits WHERE key = ?")
      .get(normalizedKey) as
      { count: number; first_attempt_at: number; blocked_until: number } | undefined;

    if (!row) {
      db.prepare(
        "INSERT INTO rate_limits (key, count, first_attempt_at, blocked_until) VALUES (?, 1, ?, 0)",
      ).run(normalizedKey, now);
      return { isBlocked: false, remainingSeconds: 0 };
    }

    if (row.blocked_until > now) {
      const remainingSeconds = Math.ceil((row.blocked_until - now) / 1000);
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
      return { isBlocked: false, remainingSeconds: 0 };
    }

    const newCount = row.count + 1;
    if (newCount > config.maxAttempts) {
      const blockedUntil = now + config.lockoutMs;
      db.prepare("UPDATE rate_limits SET count = ?, blocked_until = ? WHERE key = ?").run(
        newCount,
        blockedUntil,
        normalizedKey,
      );
      const remainingSeconds = Math.ceil(config.lockoutMs / 1000);
      const minutes = Math.ceil(remainingSeconds / 60);
      return {
        isBlocked: true,
        remainingSeconds,
        message: `Batas kuota pengiriman untuk ${config.actionName} tercapai (${config.maxAttempts}x). Silakan coba lagi dalam ${minutes} menit.`,
      };
    }

    db.prepare("UPDATE rate_limits SET count = ? WHERE key = ?").run(newCount, normalizedKey);
    return { isBlocked: false, remainingSeconds: 0 };
  } catch (err) {
    console.error("Gagal mengonsumsi rate limit di database:", err);
    return { isBlocked: false, remainingSeconds: 0 };
  }
}

/**
 * Menghapus counter rate limit saat aksi berhasil (misal login berhasil)
 */
export async function recordSuccessfulLogin(key: string): Promise<void> {
  const normalizedKey = (key || "unknown").toLowerCase().trim();
  try {
    if (isSupabaseMode()) {
      try {
        const supabase = getSupabaseAdminClient();
        await supabase.from("rate_limits").delete().eq("key", normalizedKey);
      } catch {
        inMemoryStore.delete(normalizedKey);
      }
    } else {
      db.prepare("DELETE FROM rate_limits WHERE key = ?").run(normalizedKey);
    }
    console.info(`[SECURITY AUDIT] Rate limit counter di-reset untuk key '${normalizedKey}'.`);
  } catch {
    // Silent catch
  }
}

// -------------------------------------------------------
// IN-MEMORY FALLBACK HELPERS (when Supabase is unavailable)
// -------------------------------------------------------

function checkInMemory(key: string, config: RateLimitConfig, now: number): RateLimitStatus {
  const entry = inMemoryStore.get(key);
  if (!entry) return { isBlocked: false, remainingSeconds: 0 };
  if (entry.blockedUntil > now) {
    const remainingSeconds = Math.ceil((entry.blockedUntil - now) / 1000);
    const minutes = Math.ceil(remainingSeconds / 60);
    return {
      isBlocked: true,
      remainingSeconds,
      message: `Terlalu banyak permintaan untuk ${config.actionName}. Silakan coba kembali dalam ${minutes} menit.`,
    };
  }
  if (now - entry.firstAttemptAt > config.windowMs) {
    inMemoryStore.delete(key);
    return { isBlocked: false, remainingSeconds: 0 };
  }
  return { isBlocked: false, remainingSeconds: 0 };
}

function recordFailedInMemory(
  key: string,
  config: RateLimitConfig,
  now: number,
): { isNowBlocked: boolean; remainingAttempts: number } {
  const entry = inMemoryStore.get(key);
  if (!entry || now - entry.firstAttemptAt > config.windowMs) {
    inMemoryStore.set(key, { count: 1, firstAttemptAt: now, blockedUntil: 0 });
    return { isNowBlocked: false, remainingAttempts: config.maxAttempts - 1 };
  }
  const newCount = entry.count + 1;
  if (newCount >= config.maxAttempts) {
    entry.blockedUntil = now + config.lockoutMs;
    entry.count = newCount;
    return { isNowBlocked: true, remainingAttempts: 0 };
  }
  entry.count = newCount;
  return { isNowBlocked: false, remainingAttempts: config.maxAttempts - newCount };
}

function consumeInMemory(key: string, config: RateLimitConfig, now: number): RateLimitStatus {
  const entry = inMemoryStore.get(key);
  if (!entry) {
    inMemoryStore.set(key, { count: 1, firstAttemptAt: now, blockedUntil: 0 });
    return { isBlocked: false, remainingSeconds: 0 };
  }
  if (entry.blockedUntil > now) {
    const remainingSeconds = Math.ceil((entry.blockedUntil - now) / 1000);
    const minutes = Math.ceil(remainingSeconds / 60);
    return {
      isBlocked: true,
      remainingSeconds,
      message: `Terlalu banyak permintaan untuk ${config.actionName}. Silakan coba kembali dalam ${minutes} menit.`,
    };
  }
  if (now - entry.firstAttemptAt > config.windowMs) {
    inMemoryStore.set(key, { count: 1, firstAttemptAt: now, blockedUntil: 0 });
    return { isBlocked: false, remainingSeconds: 0 };
  }
  const newCount = entry.count + 1;
  if (newCount > config.maxAttempts) {
    entry.blockedUntil = now + config.lockoutMs;
    entry.count = newCount;
    const remainingSeconds = Math.ceil(config.lockoutMs / 1000);
    const minutes = Math.ceil(remainingSeconds / 60);
    return {
      isBlocked: true,
      remainingSeconds,
      message: `Batas kuota pengiriman untuk ${config.actionName} tercapai (${config.maxAttempts}x). Silakan coba lagi dalam ${minutes} menit.`,
    };
  }
  entry.count = newCount;
  return { isBlocked: false, remainingSeconds: 0 };
}
