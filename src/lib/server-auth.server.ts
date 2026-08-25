import { ADMIN_COOKIE_NAME, validateSession, type SessionUser } from "./auth";

const SESSION_MAX_AGE_SECONDS = 24 * 60 * 60; // 24 hours

export async function getSessionToken(explicitToken?: string): Promise<string> {
  if (explicitToken && typeof explicitToken === "string" && explicitToken.trim() !== "") {
    return explicitToken.trim();
  }
  try {
    const { getCookie } = await import("@tanstack/react-start/server");
    const cookieVal = getCookie(ADMIN_COOKIE_NAME);
    if (cookieVal && typeof cookieVal === "string") {
      return cookieVal.trim();
    }
  } catch {
    // Not within HTTP request context
  }
  return "";
}

/**
 * 1. requireAuth: Memastikan request memiliki sesi otentikasi yang valid di database.
 * Mengembalikan data user otentik (userId, username, role).
 */
export async function requireAuth(explicitToken?: string): Promise<SessionUser> {
  const activeToken = await getSessionToken(explicitToken);
  if (!activeToken) {
    throw new Error(
      "Akses ditolak (401): Otentikasi diperlukan. Sesi tidak ditemukan. Silakan login terlebih dahulu.",
    );
  }
  const user = await validateSession(activeToken);
  if (!user) {
    throw new Error(
      "Akses ditolak (401): Sesi tidak valid atau telah kadaluarsa. Silakan login kembali.",
    );
  }
  return user;
}

/**
 * 2. requireAdmin: Memastikan user terotentikasi DAN memiliki role === 'admin' di database.
 * Mengabaikan input role dari frontend untuk mencegah privilege escalation.
 */
export async function requireAdmin(explicitToken?: string): Promise<SessionUser> {
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

export async function setAdminSessionCookie(token: string): Promise<void> {
  try {
    const { setCookie } = await import("@tanstack/react-start/server");
    setCookie(ADMIN_COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env["NODE_ENV"] === "production",
      sameSite: "lax",
      path: "/",
      maxAge: SESSION_MAX_AGE_SECONDS,
    });
  } catch (cookieErr) {
    console.error("Gagal mengatur cookie sesi admin:", cookieErr);
  }
}

export async function clearAdminSessionCookie(): Promise<void> {
  try {
    const { deleteCookie } = await import("@tanstack/react-start/server");
    deleteCookie(ADMIN_COOKIE_NAME, {
      path: "/",
      httpOnly: true,
      secure: process.env["NODE_ENV"] === "production",
      sameSite: "lax",
    });
  } catch {
    // Silent catch
  }
}
