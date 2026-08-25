import Database from "better-sqlite3";
import path from "node:path";
import fs from "node:fs";
import bcrypt from "bcryptjs";
import {
  villages,
  officialFullDayPackage,
  officialTwoDayPackage,
  cbtExperiences8,
  galeri8Categories,
  galeriDataset,
  WHATSAPP_NUMBER,
} from "../data/jadesta";
import { writeSitemapFile } from "./sitemap-generator";

const dataDir = path.join(process.cwd(), "data");
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const dbPath = path.join(dataDir, "ekang_anculai.db");
export const db = new Database(dbPath);

// Enable WAL mode & foreign keys
db.pragma("journal_mode = WAL");
db.pragma("foreign_keys = ON");

export function initDatabase() {
  // 1. Users Table
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      role TEXT NOT NULL DEFAULT 'admin',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  // 2. Sessions Table
  db.exec(`
    CREATE TABLE IF NOT EXISTS sessions (
      id TEXT PRIMARY KEY,
      user_id INTEGER NOT NULL,
      expires_at DATETIME NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );
  `);

  // 3. Village Info Table
  db.exec(`
    CREATE TABLE IF NOT EXISTS village_info (
      key TEXT PRIMARY KEY,
      value TEXT NOT NULL
    );
  `);

  // 4. Destinations Table
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

  // 5. Packages Table
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

  // 6. UMKM Table
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

  // 7. Homestays Table
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

  // 8. Kegiatan Table
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
  } catch {
    // Column already exists
  }

  // 9. Galleries Table
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

  // 10. Reviews Table (Moderasi pending -> approved)
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

  // 11. Reservations Table
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

  // 12. FAQs Table
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

  // 13. CBT Experiences / Activities Table
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

  // 14. Persistent Rate Limits Table
  db.exec(`
    CREATE TABLE IF NOT EXISTS rate_limits (
      key TEXT PRIMARY KEY,
      count INTEGER NOT NULL DEFAULT 1,
      first_attempt_at INTEGER NOT NULL,
      blocked_until INTEGER NOT NULL DEFAULT 0
    );
  `);

  // 15. Realtime Page Views & Website Traffic Table
  db.exec(`
    CREATE TABLE IF NOT EXISTS page_views (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      path TEXT NOT NULL,
      ip_hash TEXT NOT NULL,
      user_agent TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  // 16. Performance & Query Optimization Indices
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
    // Seed admin user if not exists
    const userCount = db.prepare("SELECT COUNT(*) as count FROM users").get() as { count: number };
    if (userCount.count === 0) {
      const initialPassword = process.env["ADMIN_INITIAL_PASSWORD"];
      if (!initialPassword || initialPassword.trim() === "") {
        console.warn(
          "[SECURITY NOTICE] Tidak ada akun admin di database dan 'ADMIN_INITIAL_PASSWORD' belum disetel di environment variable. Akun default TIDAK dibuat otomatis. Silakan setel ADMIN_INITIAL_PASSWORD di file .env atau gunakan scripts/reset-admin-password.js.",
        );
      } else {
        const adminUsername = process.env["ADMIN_INITIAL_USERNAME"]?.trim() || "admin";
        const adminPasswordHash = bcrypt.hashSync(initialPassword.trim(), 10);
        db.prepare(
          "INSERT OR IGNORE INTO users (username, password_hash, role) VALUES (?, ?, ?)",
        ).run(adminUsername, adminPasswordHash, "admin");
        console.info(
          `[SECURITY AUDIT] Akun administrator '${adminUsername}' berhasil di-bootstrap dari ADMIN_INITIAL_PASSWORD.`,
        );
      }
    }

    // Seed village info if empty
    const infoCount = db.prepare("SELECT COUNT(*) as count FROM village_info").get() as {
      count: number;
    };
    if (infoCount.count === 0) {
      const v = villages[0];
      if (v) {
        const infoMap: Record<string, string> = {
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
        for (const [k, val] of Object.entries(infoMap)) {
          insertStmt.run(k, String(val));
        }
      }
    }

    // Seed destinations if empty
    const destCount = db.prepare("SELECT COUNT(*) as count FROM destinations").get() as {
      count: number;
    };
    if (destCount.count === 0 && villages[0]?.landmarkList) {
      const insertDest = db.prepare(`
        INSERT OR IGNORE INTO destinations (id, num, nama, slug, kategori, badge_status, badge_text, short_desc, full_desc, highlights_json, image, external_url, external_label, important_note, source_json, status)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'published')
      `);
      for (const lm of villages[0].landmarkList) {
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
    }

    // Seed packages if empty
    const pkgCount = db.prepare("SELECT COUNT(*) as count FROM packages").get() as {
      count: number;
    };
    if (pkgCount.count === 0 && villages[0]?.paket) {
      const insertPkg = db.prepare(`
        INSERT OR IGNORE INTO packages (id, nama, slug, kategori, durasi, lokasi_spesifik, harga_text, target_visitor, deskripsi_lengkap, highlight, image, fasilitas_json, itinerary_json, source_json, status)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'published')
      `);
      for (const p of villages[0].paket) {
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
    }

    // Seed UMKM if empty
    const umkmCount = db.prepare("SELECT COUNT(*) as count FROM umkm").get() as { count: number };
    if (umkmCount.count === 0 && villages[0]?.umkmList) {
      const insertUmkm = db.prepare(`
        INSERT OR IGNORE INTO umkm (id, nama, slug, pemilik, kategori, deskripsi, image, lokasi, kontak, harga_info, source_json, status)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'published')
      `);
      for (const u of villages[0].umkmList) {
        insertUmkm.run(
          u.id,
          u.nama,
          u.id,
          "Masyarakat Desa Ekang",
          u.kategori,
          u.deskripsi,
          u.image,
          u.lokasi || "Ekang Anculai",
          u.kontak || WHATSAPP_NUMBER,
          u.hargaInfo,
          JSON.stringify(u.source),
        );
      }
    }

    // Seed kegiatan if empty
    const kegCount = db.prepare("SELECT COUNT(*) as count FROM kegiatan").get() as {
      count: number;
    };
    if (kegCount.count === 0 && villages[0]?.kegiatanList) {
      const insertKeg = db.prepare(`
        INSERT OR IGNORE INTO kegiatan (id, judul, kategori, tanggal, deskripsi, image, source_json, status)
        VALUES (?, ?, ?, ?, ?, ?, ?, 'published')
      `);
      for (const k of villages[0].kegiatanList) {
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
    }

    // Seed galleries if empty
    const galCount = db.prepare("SELECT COUNT(*) as count FROM galleries").get() as {
      count: number;
    };
    if (galCount.count === 0) {
      const insertGal = db.prepare(`
        INSERT OR IGNORE INTO galleries (id, judul, kategori, image, caption, alt, sumber, status)
        VALUES (?, ?, ?, ?, ?, ?, ?, 'published')
      `);
      for (const g of galeriDataset) {
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
    }

    // Seed reviews if empty
    const revCount = db.prepare("SELECT COUNT(*) as count FROM reviews").get() as { count: number };
    if (revCount.count === 0 && villages[0]?.reviews) {
      const insertRev = db.prepare(`
        INSERT OR IGNORE INTO reviews (id, nama, asal, tipe_wisatawan, rating, komentar, tanggal, avatar, status)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'approved')
      `);
      for (const r of villages[0].reviews) {
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
    }

    // Seed CBT Experiences if empty
    const cbtCount = db.prepare("SELECT COUNT(*) as count FROM cbt_experiences").get() as {
      count: number;
    };
    if (cbtCount.count === 0) {
      const insertCbt = db.prepare(`
        INSERT OR IGNORE INTO cbt_experiences (id, step, title, desc, image, status)
        VALUES (?, ?, ?, ?, ?, 'published')
      `);
      cbtExperiences8.forEach((item, idx) => {
        insertCbt.run(`cbt-${idx + 1}`, item.step, item.title, item.desc, item.image);
      });
    }

    // Seed FAQs if empty
    const faqCount = db.prepare("SELECT COUNT(*) as count FROM faqs").get() as { count: number };
    if (faqCount.count === 0 && villages[0]?.faqs) {
      const insertFaq = db.prepare(`
        INSERT OR IGNORE INTO faqs (id, pertanyaan, jawaban, kategori, status)
        VALUES (?, ?, ?, ?, 'published')
      `);
      villages[0].faqs.forEach((f, idx) => {
        insertFaq.run(`faq-${idx + 1}`, f.pertanyaan, f.jawaban, "Umum");
      });
    }

    // Generate sitemap.xml
    try {
      writeSitemapFile();
    } catch (err) {
      console.error("Gagal men-generate sitemap.xml di db init:", err);
    }
  } catch (err) {
    console.error("Gagal menjalankan seedDefaultData:", err);
  }
}

// Automatically initialize database
initDatabase();
