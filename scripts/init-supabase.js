/**
 * scripts/init-supabase.js
 *
 * Script untuk bootstrap akun admin di Supabase PostgreSQL.
 * Jalankan sekali setelah menjalankan supabase_schema_and_data.sql di Supabase Dashboard.
 *
 * Penggunaan:
 *   node scripts/init-supabase.js
 *
 * Membutuhkan environment variables:
 *   SUPABASE_URL
 *   SUPABASE_SERVICE_ROLE_KEY
 *   ADMIN_INITIAL_USERNAME  (opsional, default: admin)
 *   ADMIN_INITIAL_PASSWORD  (wajib)
 */

import { createClient } from "@supabase/supabase-js";
import bcrypt from "bcryptjs";
import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Load .env file manually if it exists
const envPath = join(__dirname, "..", ".env");
if (existsSync(envPath)) {
  const envContent = readFileSync(envPath, "utf-8");
  for (const line of envContent.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const idx = trimmed.indexOf("=");
    if (idx === -1) continue;
    const key = trimmed.slice(0, idx).trim();
    const value = trimmed
      .slice(idx + 1)
      .trim()
      .replace(/^["']|["']$/g, "");
    if (!process.env[key]) {
      process.env[key] = value;
    }
  }
  console.log("✅ File .env berhasil dimuat.");
}

const SUPABASE_URL = process.env["SUPABASE_URL"];
const SUPABASE_SERVICE_ROLE_KEY = process.env["SUPABASE_SERVICE_ROLE_KEY"];
const ADMIN_USERNAME = process.env["ADMIN_INITIAL_USERNAME"]?.trim() || "admin";
const ADMIN_PASSWORD = process.env["ADMIN_INITIAL_PASSWORD"]?.trim();

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.error("❌ ERROR: SUPABASE_URL dan SUPABASE_SERVICE_ROLE_KEY wajib diisi di file .env");
  process.exit(1);
}

if (!ADMIN_PASSWORD) {
  console.error("❌ ERROR: ADMIN_INITIAL_PASSWORD wajib diisi di file .env");
  process.exit(1);
}

if (ADMIN_PASSWORD.length < 8) {
  console.error("❌ ERROR: ADMIN_INITIAL_PASSWORD harus minimal 8 karakter.");
  process.exit(1);
}

console.log("==============================================");
console.log("  INISIALISASI SUPABASE - DESA EKANG ANCULAI  ");
console.log("==============================================");
console.log(`URL     : ${SUPABASE_URL}`);
console.log(`Username: ${ADMIN_USERNAME}`);
console.log("");

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
});

async function run() {
  // 1. Test koneksi
  console.log("🔍 Menguji koneksi ke Supabase...");
  const { error: pingError } = await supabase.from("users").select("id").limit(1);
  if (pingError) {
    console.error("❌ Koneksi ke Supabase gagal:", pingError.message);
    console.error(
      "   Pastikan schema SQL sudah dijalankan di Supabase Dashboard dan kredensial benar.",
    );
    process.exit(1);
  }
  console.log("✅ Koneksi berhasil!\n");

  // 2. Cek apakah admin sudah ada
  const { data: existing, error: fetchError } = await supabase
    .from("users")
    .select("id, username")
    .eq("username", ADMIN_USERNAME)
    .limit(1);

  if (fetchError) {
    console.error("❌ Gagal memeriksa user yang ada:", fetchError.message);
    process.exit(1);
  }

  if (existing && existing.length > 0) {
    console.log(`ℹ️  User admin '${ADMIN_USERNAME}' sudah ada di database.`);
    console.log("   Tidak perlu membuat ulang. Script selesai.");
    return;
  }

  // 3. Buat akun admin baru
  console.log(`👤 Membuat akun admin '${ADMIN_USERNAME}'...`);
  const passwordHash = bcrypt.hashSync(ADMIN_PASSWORD, 10);

  const { data: created, error: insertError } = await supabase
    .from("users")
    .insert({ username: ADMIN_USERNAME, password_hash: passwordHash, role: "admin" })
    .select("id, username, role")
    .single();

  if (insertError) {
    console.error("❌ Gagal membuat akun admin:", insertError.message);
    process.exit(1);
  }

  console.log(`✅ Akun admin berhasil dibuat!`);
  console.log(`   ID      : ${created.id}`);
  console.log(`   Username: ${created.username}`);
  console.log(`   Role    : ${created.role}`);
  console.log("");

  // 4. Verifikasi village_info
  const { count: villageCount } = await supabase
    .from("village_info")
    .select("*", { count: "exact", head: true });

  if (!villageCount || villageCount === 0) {
    console.log("⚠️  Tabel village_info kosong. Jalankan SQL di data/supabase_schema_and_data.sql");
    console.log("   di Supabase Dashboard → SQL Editor untuk mengisi data awal.");
  } else {
    console.log(`✅ village_info memiliki ${villageCount} baris data.`);
  }

  // 5. Summary counts
  const tables = [
    "destinations",
    "packages",
    "umkm",
    "homestays",
    "kegiatan",
    "galleries",
    "faqs",
    "reviews",
    "cbt_experiences",
  ];

  console.log("\n📊 Ringkasan data di Supabase:");
  for (const table of tables) {
    const { count } = await supabase.from(table).select("*", { count: "exact", head: true });
    console.log(`   ${table.padEnd(20)}: ${count ?? 0} baris`);
  }

  console.log("\n🎉 Inisialisasi selesai! Supabase siap digunakan.");
  console.log("   Set DATABASE_MODE=supabase di .env dan jalankan: npm run dev");
}

run().catch((err) => {
  console.error("❌ Error tidak terduga:", err);
  process.exit(1);
});
