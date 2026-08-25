import Database from "better-sqlite3";

const db = new Database("data/ekang_anculai.db");

// 1. Insert into galleries
const insertGalleryStmt = db.prepare(`
  INSERT OR REPLACE INTO galleries (
    id, judul, kategori, image, caption, alt, sumber, status, created_at
  ) VALUES (
    ?, ?, ?, ?, ?, ?, ?, ?, ?
  )
`);

insertGalleryStmt.run(
  "gal-kkn-volly",
  "Gotong Royong Lapangan Volly Bersama KKN 45 UMRAH",
  "Aktivitas",
  "/uploads/galeri/ekang-gotong-royong-kkn.webp",
  "Mahasiswa KKN 45 Universitas Maritim Raja Ali Haji (UMRAH) bersama warga dan pemuda desa bergotong royong membersihkan lapangan voli dan saluran drainase di Desa Ekang Anculai.",
  "Aksi Gotong Royong Membersihkan Lapangan Volly Bersama Mahasiswa KKN 45 UMRAH Ekang Anculai",
  "Dokumentasi Mahasiswa KKN 45 UMRAH & Pemdes Ekang Anculai",
  "published",
  "2026-08-23 00:50:00",
);

// 2. Insert into activities / kegiatan table if exists
try {
  const tableCheck = db
    .prepare("SELECT name FROM sqlite_master WHERE type='table' AND name='kegiatan'")
    .get();
  if (tableCheck) {
    db.prepare(
      `
      INSERT OR REPLACE INTO kegiatan (
        id, judul, kategori, deskripsi, tanggal, image, source_json, status, created_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `,
    ).run(
      "kg-2026-6",
      "Gotong Royong Membersihkan Lapangan Volly Bersama Mahasiswa KKN 45 Ekang Anculai Universitas Maritim Raja Ali Haji",
      "Gotong Royong & Kepemudaan",
      "Aksi gotong royong pemuda desa dan mahasiswa KKN Angkatan 45 UMRAH membersihkan area sekeliling lapangan bola voli dan saluran drainase demi kenyamanan sarana olahraga masyarakat.",
      "22 Agustus 2026",
      "/uploads/kegiatan/ekang-gotong-royong-kkn.webp",
      JSON.stringify({
        name: "Mahasiswa KKN 45 UMRAH & Pemdes Ekang Anculai",
        url: "https://desaekanganculai.bintankab.go.id/",
        publishedAt: "2026-08-22",
        accessedAt: "2026-08-23",
      }),
      "published",
      "2026-08-23 00:50:00",
    );
  }
} catch (e) {
  console.log("Kegiatan table note:", e.message);
}

console.log("Successfully synced KKN 45 UMRAH kegiatan in SQLite DB");
