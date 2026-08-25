import Database from "better-sqlite3";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dbPath = path.join(__dirname, "..", "data", "ekang_anculai.db");
const outputPath = path.join(__dirname, "..", "data", "supabase_schema_and_data.sql");

if (!fs.existsSync(dbPath)) {
  console.error("Database SQLite tidak ditemukan di:", dbPath);
  process.exit(1);
}

const db = new Database(dbPath, { readonly: true });

console.log("=== EXPORT SQLITE DATA KE SUPABASE POSTGRESQL ===");

let sqlOutput = `-- ===================================================
-- SUPABASE POSTGRESQL SCHEMA & INITIAL DATA MIGRATION
-- Desa Wisata Ekang Anculai
-- ===================================================

-- 1. Enable UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Drop existing tables if needed (Clean Setup)
-- DROP TABLE IF EXISTS page_views, rate_limits, reservations, reviews, galleries, kegiatan, umkm, homestays, faqs, packages, destinations, village_info, sessions, users CASCADE;

-- 3. Create Tables
CREATE TABLE IF NOT EXISTS users (
  id BIGSERIAL PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'admin',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS sessions (
  id TEXT PRIMARY KEY,
  user_id BIGINT REFERENCES users(id) ON DELETE CASCADE,
  expires_at TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS village_info (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS destinations (
  id TEXT PRIMARY KEY,
  num TEXT,
  nama TEXT NOT NULL,
  slug TEXT UNIQUE,
  kategori TEXT NOT NULL,
  badge_status TEXT,
  badge_text TEXT,
  short_desc TEXT,
  full_desc TEXT,
  highlights_json JSONB DEFAULT '[]'::jsonb,
  image TEXT,
  external_url TEXT,
  external_label TEXT,
  important_note TEXT,
  source_json JSONB DEFAULT '{}'::jsonb,
  status TEXT NOT NULL DEFAULT 'published',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS packages (
  id TEXT PRIMARY KEY,
  nama TEXT NOT NULL,
  slug TEXT UNIQUE,
  kategori TEXT NOT NULL,
  durasi TEXT NOT NULL,
  lokasi_spesifik TEXT,
  harga_text TEXT NOT NULL,
  target_visitor TEXT,
  deskripsi_lengkap TEXT,
  highlight TEXT,
  image TEXT,
  fasilitas_json JSONB DEFAULT '[]'::jsonb,
  itinerary_json JSONB DEFAULT '[]'::jsonb,
  source_json JSONB DEFAULT '{}'::jsonb,
  status TEXT NOT NULL DEFAULT 'published',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS umkm (
  id TEXT PRIMARY KEY,
  nama TEXT NOT NULL,
  slug TEXT UNIQUE,
  pemilik TEXT,
  kategori TEXT NOT NULL,
  deskripsi TEXT,
  image TEXT,
  lokasi TEXT,
  kontak TEXT,
  harga_info TEXT,
  source_json JSONB DEFAULT '{}'::jsonb,
  status TEXT NOT NULL DEFAULT 'published',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS kegiatan (
  id TEXT PRIMARY KEY,
  judul TEXT NOT NULL,
  kategori TEXT NOT NULL,
  tanggal TEXT,
  deskripsi TEXT,
  image TEXT,
  source_json JSONB DEFAULT '{}'::jsonb,
  status TEXT NOT NULL DEFAULT 'published',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS galleries (
  id TEXT PRIMARY KEY,
  judul TEXT NOT NULL,
  kategori TEXT NOT NULL,
  image TEXT NOT NULL,
  caption TEXT,
  alt TEXT,
  sumber TEXT,
  status TEXT NOT NULL DEFAULT 'published',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS homestays (
  id TEXT PRIMARY KEY,
  nama TEXT NOT NULL,
  slug TEXT UNIQUE,
  pemilik TEXT,
  kapasitas TEXT,
  kamar INTEGER DEFAULT 1,
  harga_text TEXT,
  fasilitas_json JSONB DEFAULT '[]'::jsonb,
  lokasi TEXT,
  kontak TEXT,
  image TEXT,
  status TEXT NOT NULL DEFAULT 'published',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS faqs (
  id TEXT PRIMARY KEY,
  pertanyaan TEXT NOT NULL,
  jawaban TEXT NOT NULL,
  kategori TEXT NOT NULL DEFAULT 'Umum',
  status TEXT NOT NULL DEFAULT 'published',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

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
  created_at TIMESTAMPTZ DEFAULT NOW()
);

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
  aktivitas_json JSONB DEFAULT '[]'::jsonb,
  catatan TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS page_views (
  id BIGSERIAL PRIMARY KEY,
  path TEXT NOT NULL,
  ip_hash TEXT NOT NULL,
  user_agent TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS rate_limits (
  key TEXT PRIMARY KEY,
  count INTEGER NOT NULL DEFAULT 1,
  first_attempt_at BIGINT NOT NULL,
// 13. CBT Experiences Table
CREATE TABLE IF NOT EXISTS cbt_experiences (
  id TEXT PRIMARY KEY,
  step INTEGER NOT NULL,
  title TEXT NOT NULL,
  "desc" TEXT NOT NULL,
  image TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'published',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 14. Persistent Rate Limits Table
CREATE TABLE IF NOT EXISTS rate_limits (
  key TEXT PRIMARY KEY,
  count INTEGER NOT NULL DEFAULT 1,
  first_attempt_at BIGINT NOT NULL,
  blocked_until BIGINT NOT NULL DEFAULT 0
);

-- 15. Page Views Table
CREATE TABLE IF NOT EXISTS page_views (
  id BIGSERIAL PRIMARY KEY,
  path TEXT NOT NULL,
  ip_hash TEXT NOT NULL,
  user_agent TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ===================================================
-- 4. B-TREE PERFORMANCE INDEXES (20 INDEXES)
-- ===================================================
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
CREATE INDEX IF NOT EXISTS idx_cbt_step ON cbt_experiences(step);
CREATE INDEX IF NOT EXISTS idx_rate_limits_blocked ON rate_limits(blocked_until);
CREATE INDEX IF NOT EXISTS idx_page_views_path ON page_views(path);
CREATE INDEX IF NOT EXISTS idx_page_views_created ON page_views(created_at);
CREATE INDEX IF NOT EXISTS idx_page_views_ip_hash ON page_views(ip_hash);

-- ===================================================
-- 5. ROW LEVEL SECURITY (RLS) POLICIES
-- ===================================================
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE village_info ENABLE ROW LEVEL SECURITY;
ALTER TABLE destinations ENABLE ROW LEVEL SECURITY;
ALTER TABLE packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE umkm ENABLE ROW LEVEL SECURITY;
ALTER TABLE homestays ENABLE ROW LEVEL SECURITY;
ALTER TABLE kegiatan ENABLE ROW LEVEL SECURITY;
ALTER TABLE galleries ENABLE ROW LEVEL SECURITY;
ALTER TABLE faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE cbt_experiences ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;
ALTER TABLE rate_limits ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;

-- Public Read Policies (Published Content Only)
CREATE POLICY "Public Read Village Info" ON village_info FOR SELECT USING (true);
CREATE POLICY "Public Read Published Destinations" ON destinations FOR SELECT USING (status = 'published');
CREATE POLICY "Public Read Published Packages" ON packages FOR SELECT USING (status = 'published');
CREATE POLICY "Public Read Published UMKM" ON umkm FOR SELECT USING (status = 'published');
CREATE POLICY "Public Read Published Homestays" ON homestays FOR SELECT USING (status = 'published');
CREATE POLICY "Public Read Published Kegiatan" ON kegiatan FOR SELECT USING (status = 'published');
CREATE POLICY "Public Read Published Galleries" ON galleries FOR SELECT USING (status = 'published');
CREATE POLICY "Public Read Published FAQs" ON faqs FOR SELECT USING (status = 'published');
CREATE POLICY "Public Read Published CBT" ON cbt_experiences FOR SELECT USING (status = 'published');
CREATE POLICY "Public Read Approved Reviews" ON reviews FOR SELECT USING (status = 'approved');

-- Deny Direct Anonymous Writes (All Writes Go Through Server Functions & Service Role)
-- users, sessions, rate_limits have NO public policies (Default Deny)

-- ===================================================
-- 6. DATA MIGRATION (INSERT INTO TABLES)
-- ===================================================
`;

function escapeSql(val) {
  if (val === null || val === undefined) return "NULL";
  if (typeof val === "number") return val;
  if (typeof val === "boolean") return val ? "TRUE" : "FALSE";
  return "'" + String(val).replace(/'/g, "''") + "'";
}

// Exclude sensitive authentication tables (users, sessions) and ephemeral tables (rate_limits, page_views)
const tablesToExport = [
  "village_info",
  "destinations",
  "packages",
  "umkm",
  "kegiatan",
  "galleries",
  "homestays",
  "faqs",
  "cbt_experiences",
  "reviews",
  "reservations",
];

for (const tableName of tablesToExport) {
  try {
    const rows = db.prepare(`SELECT * FROM ${tableName}`).all();
    if (rows.length > 0) {
      sqlOutput += `\n-- Data for ${tableName} (${rows.length} rows)\n`;
      const cols = Object.keys(rows[0]);
      for (const r of rows) {
        const values = cols.map((c) => escapeSql(r[c])).join(", ");
        sqlOutput += `INSERT INTO ${tableName} (${cols.join(", ")}) VALUES (${values}) ON CONFLICT DO NOTHING;\n`;
      }
    }
  } catch (err) {
    console.warn(`Tabel ${tableName} tidak ada atau gagal diekspor:`, err.message);
  }
}

fs.writeFileSync(outputPath, sqlOutput, "utf-8");
console.log(`\nSukses! File SQL migrasi Supabase berhasil dibuat di:`);
console.log(outputPath);
