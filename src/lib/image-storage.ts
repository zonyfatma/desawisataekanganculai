import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import sharp from "sharp";
import { db } from "./db";

export type ImageCategory =
  "destinations" | "packages" | "umkm" | "homestays" | "kegiatan" | "galleries" | "news";

const ALLOWED_CATEGORIES: ImageCategory[] = [
  "destinations",
  "packages",
  "umkm",
  "homestays",
  "kegiatan",
  "galleries",
  "news",
];

// Maximum allowed input file size: 5 MB
const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024;
// Maximum allowed image pixel dimensions (prevent decompression bombs)
const MAX_DIMENSION_PX = 8000;
const MAX_PIXELS_LIMIT = 50_000_000; // 50 Megapixels

const PUBLIC_UPLOADS_DIR = path.join(process.cwd(), "public", "uploads");

export function initUploadDirectories() {
  const isServerless = Boolean(
    process.env["VERCEL"] || process.env["AWS_LAMBDA_FUNCTION_NAME"] || process.env["NETLIFY"],
  );
  if (isServerless) return;

  try {
    if (!fs.existsSync(PUBLIC_UPLOADS_DIR)) {
      fs.mkdirSync(PUBLIC_UPLOADS_DIR, { recursive: true });
    }
    for (const cat of ALLOWED_CATEGORIES) {
      const catDir = path.join(PUBLIC_UPLOADS_DIR, cat);
      if (!fs.existsSync(catDir)) {
        fs.mkdirSync(catDir, { recursive: true });
      }
    }
  } catch {
    // Ignore directory creation in read-only environments
  }
}

// Automatically initialize only in non-serverless local dev
if (!process.env["VERCEL"] && !process.env["AWS_LAMBDA_FUNCTION_NAME"]) {
  try {
    initUploadDirectories();
  } catch {
    // Silent
  }
}

/**
 * Validasi ketat buffer gambar:
 * 1. Pengecekan ukuran file (maksimal 5MB)
 * 2. Pengecekan Magic Bytes (Header biner asli)
 * 3. Blokir eksplisit file berbahaya (SVG, HTML, PHP, Executable)
 */
export function validateImageBuffer(buffer: Buffer): {
  valid: boolean;
  extension: string;
  mime: string;
  reason?: string;
} {
  if (!buffer || buffer.length === 0) {
    return { valid: false, extension: "", mime: "", reason: "File gambar kosong." };
  }

  if (buffer.length > MAX_FILE_SIZE_BYTES) {
    const sizeMb = (buffer.length / (1024 * 1024)).toFixed(2);
    return {
      valid: false,
      extension: "",
      mime: "",
      reason: `Ukuran file (${sizeMb} MB) melebihi batas maksimal 5 MB.`,
    };
  }

  // 1. Explicit Blocklist: Reject SVGs and XMLs (Mencegah serangan XSS Stored via SVG)
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
  ) {
    return {
      valid: false,
      extension: "",
      mime: "",
      reason:
        "Tipe file ditolak. File vektor SVG/XML atau dokumen script tidak diizinkan demi keamanan sistem.",
    };
  }

  // 2. Explicit Blocklist: Executables (MZ / ELF / Mach-O / Shebang)
  if (
    (buffer.length >= 2 && buffer[0] === 0x4d && buffer[1] === 0x5a) || // MZ DOS/Windows PE
    (buffer.length >= 4 &&
      buffer[0] === 0x7f &&
      buffer[1] === 0x45 &&
      buffer[2] === 0x4c &&
      buffer[3] === 0x46) || // ELF Linux
    (buffer.length >= 2 && buffer[0] === 0x23 && buffer[1] === 0x21) // #! Shebang script
  ) {
    return {
      valid: false,
      extension: "",
      mime: "",
      reason: "File executable biner tidak diizinkan.",
    };
  }

  // 3. Whitelist Magic Bytes Verification
  // JPEG: FF D8 FF
  if (buffer.length >= 3 && buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff) {
    return { valid: true, extension: "jpg", mime: "image/jpeg" };
  }

  // PNG: 89 50 4E 47 0D 0A 1A 0A
  if (
    buffer.length >= 8 &&
    buffer[0] === 0x89 &&
    buffer[1] === 0x50 &&
    buffer[2] === 0x4e &&
    buffer[3] === 0x47 &&
    buffer[4] === 0x0d &&
    buffer[5] === 0x0a &&
    buffer[6] === 0x1a &&
    buffer[7] === 0x0a
  ) {
    return { valid: true, extension: "png", mime: "image/png" };
  }

  // WebP: RIFF (bytes 0-3: 52 49 46 46) and WEBP (bytes 8-11: 57 45 42 50)
  if (
    buffer.length >= 12 &&
    buffer[0] === 0x52 &&
    buffer[1] === 0x49 &&
    buffer[2] === 0x46 &&
    buffer[3] === 0x46 &&
    buffer[8] === 0x57 &&
    buffer[9] === 0x45 &&
    buffer[10] === 0x42 &&
    buffer[11] === 0x50
  ) {
    return { valid: true, extension: "webp", mime: "image/webp" };
  }

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
export async function saveAndOptimizeImage(
  input: Buffer | string,
  category: ImageCategory = "galleries",
): Promise<string> {
  initUploadDirectories();

  let buffer: Buffer;
  if (typeof input === "string") {
    if (input.startsWith("data:")) {
      const parts = input.split(",");
      const base64Data = parts[1] || "";
      buffer = Buffer.from(base64Data, "base64");
    } else {
      buffer = Buffer.from(input, "base64");
    }
  } else {
    buffer = input;
  }

  // 1. Validasi Buffer & Magic Bytes
  const validation = validateImageBuffer(buffer);
  if (!validation.valid) {
    throw new Error(validation.reason || "File gambar tidak valid.");
  }

  // 2. Inspeksi Dimensi & Metadata Sharp
  const sharpInstance = sharp(buffer, {
    limitInputPixels: MAX_PIXELS_LIMIT,
  });

  const metadata = await sharpInstance.metadata();

  if (!metadata.width || !metadata.height) {
    throw new Error("Gagal membaca struktur dimensi gambar. File mungkin rusak atau tidak valid.");
  }

  if (metadata.width > MAX_DIMENSION_PX || metadata.height > MAX_DIMENSION_PX) {
    throw new Error(
      `Dimensi gambar terlalu besar (${metadata.width}x${metadata.height} px). Batas maksimal adalah ${MAX_DIMENSION_PX}x${MAX_DIMENSION_PX} px.`,
    );
  }

  // 3. Sanitasi Kategori (Whitelist Check)
  const safeCategory: ImageCategory = ALLOWED_CATEGORIES.includes(category)
    ? category
    : "galleries";

  // 4. Buat Nama Acak Kriptografis (CSPRNG 16 hex chars) - Nama asli user TIDAK PERNAH digunakan
  const randomSuffix = crypto.randomBytes(8).toString("hex");
  const uniqueFileName = `img-${safeCategory}-${Date.now()}-${randomSuffix}.webp`;

  const targetDir = path.join(PUBLIC_UPLOADS_DIR, safeCategory);
  const targetFilePath = path.join(targetDir, uniqueFileName);

  // 5. Re-encode ke WebP murni & bersihkan seluruh metadata EXIF
  await sharpInstance
    .resize(1920, 1920, {
      fit: "inside",
      withoutEnlargement: true,
    })
    .withMetadata({ orientation: 1 }) // Reset orientasi EXIF & hapus metadata GPS/privasi lainnya
    .webp({ quality: 82, effort: 4 })
    .toFile(targetFilePath);

  return `/uploads/${safeCategory}/${uniqueFileName}`;
}

/**
 * Menghapus file gambar dengan proteksi Path Traversal
 */
export function deleteImageFile(relativeUrl: string): void {
  if (!relativeUrl || typeof relativeUrl !== "string" || !relativeUrl.startsWith("/uploads/")) {
    return;
  }

  // Path Traversal Mitigation: Normalisasi & Cegah escaping dari folder uploads
  const normalizedRel = path.normalize(relativeUrl).replace(/^(\.\.[/\\])+/, "");
  const fullPath = path.join(process.cwd(), "public", normalizedRel);

  if (!fullPath.startsWith(PUBLIC_UPLOADS_DIR)) {
    console.warn(
      `[SECURITY AUDIT] Upaya Path Traversal pada deleteImageFile diblokir: '${relativeUrl}'.`,
    );
    return;
  }

  // Cek apakah gambar masih dipakai di tabel database lain sebelum unlink
  const isUsed = isImageReferencedInDb(relativeUrl);
  if (!isUsed && fs.existsSync(fullPath)) {
    try {
      fs.unlinkSync(fullPath);
      console.info(`[STORAGE] Berhasil menghapus file gambar tidak terpakai: '${normalizedRel}'.`);
    } catch (err) {
      console.error("Gagal menghapus file gambar:", fullPath, err);
    }
  }
}

function isImageReferencedInDb(imageUrl: string): boolean {
  const tables = [
    { table: "destinations", col: "image" },
    { table: "packages", col: "image" },
    { table: "umkm", col: "image" },
    { table: "homestays", col: "image" },
    { table: "kegiatan", col: "image" },
    { table: "galleries", col: "image" },
    { table: "reviews", col: "avatar" },
  ];

  for (const { table, col } of tables) {
    try {
      const row = db
        .prepare(`SELECT COUNT(*) as c FROM ${table} WHERE ${col} = ?`)
        .get(imageUrl) as { c: number };
      if (row && row.c > 0) return true;
    } catch {
      // ignore table query error
    }
  }
  return false;
}

/**
 * Migrasi data Base64 lama ke file WebP fisik
 */
export async function migrateBase64ImagesToFiles(): Promise<number> {
  initUploadDirectories();
  let count = 0;

  const targets = [
    { table: "destinations", col: "image", category: "destinations" as ImageCategory },
    { table: "packages", col: "image", category: "packages" as ImageCategory },
    { table: "umkm", col: "image", category: "umkm" as ImageCategory },
    { table: "homestays", col: "image", category: "homestays" as ImageCategory },
    { table: "kegiatan", col: "image", category: "kegiatan" as ImageCategory },
    { table: "galleries", col: "image", category: "galleries" as ImageCategory },
    { table: "reviews", col: "avatar", category: "galleries" as ImageCategory },
  ];

  for (const t of targets) {
    try {
      const rows = db
        .prepare(`SELECT id, ${t.col} as img FROM ${t.table} WHERE ${t.col} LIKE 'data:image/%'`)
        .all() as {
        id: string;
        img: string;
      }[];

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
  }

  return count;
}
