import { createClient } from "@supabase/supabase-js";
import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Load .env
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
}

const SUPABASE_URL = process.env["SUPABASE_URL"];
const SUPABASE_SERVICE_ROLE_KEY = process.env["SUPABASE_SERVICE_ROLE_KEY"];

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.error("❌ SUPABASE_URL atau SUPABASE_SERVICE_ROLE_KEY belum diisi di .env");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
});

function normalizeImgUrl(url) {
  if (!url || typeof url !== "string") return url;
  let clean = url.trim();
  if (clean.startsWith("/src/assets/")) {
    clean = clean.replace("/src/assets/", "/assets/");
  }
  clean = clean.split("?")[0];
  return clean;
}

async function fixTableImages(tableName, imageColumn = "image") {
  const { data: rows, error } = await supabase.from(tableName).select("*");
  if (error) {
    console.warn(`⚠️ Gagal membaca tabel ${tableName}:`, error.message);
    return;
  }

  let updatedCount = 0;
  for (const row of rows || []) {
    const original = row[imageColumn];
    const normalized = normalizeImgUrl(original);
    if (original !== normalized) {
      const { error: updateErr } = await supabase
        .from(tableName)
        .update({ [imageColumn]: normalized })
        .eq("id", row.id);
      if (!updateErr) {
        updatedCount++;
      } else {
        console.warn(`⚠️ Gagal update ${tableName} id=${row.id}:`, updateErr.message);
      }
    }
  }

  console.log(`✅ Tabel ${tableName}: ${rows?.length || 0} baris diperiksa, ${updatedCount} baris dinormalisasi.`);
}

async function ensureStorageBucket() {
  const { data: buckets, error } = await supabase.storage.listBuckets();
  if (error) {
    console.warn("⚠️ Gagal membaca storage buckets:", error.message);
    return;
  }

  const uploadsBucket = buckets?.find((b) => b.name === "uploads");
  if (!uploadsBucket) {
    const { error: createErr } = await supabase.storage.createBucket("uploads", {
      public: true,
      fileSizeLimit: 10485760, // 10MB
    });
    if (!createErr) {
      console.log("✅ Bucket 'uploads' berhasil dibuat sebagai Public Bucket di Supabase Storage.");
    } else {
      console.warn("⚠️ Gagal membuat bucket 'uploads':", createErr.message);
    }
  } else {
    console.log("✅ Bucket 'uploads' sudah ada di Supabase Storage.");
  }
}

async function main() {
  console.log("🚀 Memulai normalisasi URL gambar di Supabase...");
  await ensureStorageBucket();
  await fixTableImages("destinations", "image");
  await fixTableImages("packages", "image");
  await fixTableImages("umkm", "image");
  await fixTableImages("kegiatan", "image");
  await fixTableImages("galleries", "image");
  await fixTableImages("cbt_experiences", "image");
  console.log("🎉 Normalisasi selesai!");
}

main().catch(console.error);
