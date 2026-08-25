import { createClient, type SupabaseClient } from "@supabase/supabase-js";

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

let adminClientInstance: SupabaseClient | null = null;

export function isSupabaseAdminConfigured(): boolean {
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

export function getSupabaseAdminClient(): SupabaseClient {
  if (adminClientInstance) {
    return adminClientInstance;
  }

  const url = process.env["SUPABASE_URL"];
  const serviceRoleKey = process.env["SUPABASE_SERVICE_ROLE_KEY"];

  if (!url || !serviceRoleKey || !isSupabaseAdminConfigured()) {
    throw new Error(
      "[SUPABASE CONFIG ERROR] SUPABASE_URL atau SUPABASE_SERVICE_ROLE_KEY belum disetel dengan benar di environment server. Pastikan kredensial Supabase terpasang.",
    );
  }

  adminClientInstance = createClient(url, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });

  return adminClientInstance;
}
