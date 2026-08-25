import crypto from "node:crypto";
import bcrypt from "bcryptjs";
import { db } from "./db";
import { getSupabaseAdminClient, isSupabaseAdminConfigured } from "./supabase-admin.server";

export interface SessionUser {
  userId: number;
  username: string;
  role: string;
}

export const ADMIN_COOKIE_NAME = "ekang_admin_session";
export const SESSION_DURATION_HOURS = 24;

export function hashPassword(password: string): string {
  return bcrypt.hashSync(password, 10);
}

export function verifyPassword(password: string, hash: string): boolean {
  return bcrypt.compareSync(password, hash);
}

function isSupabaseMode(): boolean {
  const mode = process.env["DATABASE_MODE"]?.toLowerCase()?.trim();
  if (mode === "sqlite") return false;
  if (mode === "supabase") return true;
  return isSupabaseAdminConfigured();
}

export async function cleanExpiredSessions(): Promise<void> {
  try {
    if (isSupabaseMode()) {
      const supabase = getSupabaseAdminClient();
      await supabase.from("sessions").delete().lt("expires_at", new Date().toISOString());
    } else {
      db.prepare("DELETE FROM sessions WHERE datetime(expires_at) < datetime('now')").run();
    }
  } catch (err) {
    console.error("Gagal membersihkan sesi kadaluarsa:", err);
  }
}

export async function createSession(userId: number): Promise<{ token: string; expiresAt: Date }> {
  // Clean up any globally expired sessions first
  await cleanExpiredSessions();

  // Generate cryptographically secure random token (256-bit entropy)
  const token = crypto.randomBytes(32).toString("hex");
  const expiresAt = new Date();
  expiresAt.setHours(expiresAt.getHours() + SESSION_DURATION_HOURS);
  const expiresIso = expiresAt.toISOString();

  if (isSupabaseMode()) {
    const supabase = getSupabaseAdminClient();
    // Prevent session reuse/fixation by clearing previous sessions for this user
    await supabase.from("sessions").delete().eq("user_id", userId);
    // Insert new session record
    const { error } = await supabase
      .from("sessions")
      .insert({ id: token, user_id: userId, expires_at: expiresIso });
    if (error) {
      throw new Error(`[AUTH ERROR] Gagal membuat sesi di Supabase: ${error.message}`);
    }
  } else {
    // Prevent session reuse/fixation by clearing previous sessions for this user
    db.prepare("DELETE FROM sessions WHERE user_id = ?").run(userId);
    // Insert new session record
    db.prepare("INSERT INTO sessions (id, user_id, expires_at) VALUES (?, ?, ?)").run(
      token,
      userId,
      expiresIso,
    );
  }

  return { token, expiresAt };
}

export async function validateSession(token: string): Promise<SessionUser | null> {
  if (!token || typeof token !== "string" || token.trim() === "") return null;

  try {
    if (isSupabaseMode()) {
      const supabase = getSupabaseAdminClient();
      const { data, error } = await supabase
        .from("sessions")
        .select("expires_at, users(id, username, role)")
        .eq("id", token.trim())
        .single();

      if (error || !data) return null;

      const expiresAt = new Date(data.expires_at as string);
      if (expiresAt < new Date()) {
        // Session expired → remove from DB immediately
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

    // SQLite mode
    const row = db
      .prepare(
        `SELECT s.expires_at, u.id as userId, u.username, u.role
         FROM sessions s
         JOIN users u ON s.user_id = u.id
         WHERE s.id = ?`,
      )
      .get(token.trim()) as
      { expires_at: string; userId: number; username: string; role: string } | undefined;

    if (!row) return null;

    const expiresAt = new Date(row.expires_at);
    if (expiresAt < new Date()) {
      // Session expired → remove from DB immediately
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

export async function destroySession(token: string): Promise<void> {
  if (!token || typeof token !== "string") return;
  try {
    if (isSupabaseMode()) {
      const supabase = getSupabaseAdminClient();
      await supabase.from("sessions").delete().eq("id", token.trim());
    } else {
      db.prepare("DELETE FROM sessions WHERE id = ?").run(token.trim());
    }
  } catch (err) {
    console.error("Gagal menghapus sesi admin:", err);
  }
}

export function parseSessionCookie(cookieHeader: string | null): string | null {
  if (!cookieHeader) return null;
  const regex = new RegExp(`${ADMIN_COOKIE_NAME}=([^;]+)`);
  const match = cookieHeader.match(regex);
  return match ? match[1]! : null;
}
