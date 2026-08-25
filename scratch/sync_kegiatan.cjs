const Database = require("better-sqlite3");
const db = new Database("data/ekang_anculai.db");

db.prepare("DELETE FROM kegiatan").run();

const items = [
  {
    id: "kg-2026-1",
    judul:
      "Aksi Gotong Royong Membersihkan Lapangan Volly Bersama Mahasiswa KKN 45 Ekang Anculai Universitas Maritim Raja Ali Haji",
    kategori: "Gotong Royong & Kepemudaan",
    tanggal: "22 Agustus 2026",
    deskripsi:
      "Kerja bakti pembersihan dan penataan fasilitas lapangan volly desa bersama mahasiswa UMRAH KKN kelompok 45 Ekang Anculai 2026.",
    image: "/ekang-gotong-royong-kkn.jpg",
    source_json: JSON.stringify({
      name: "Mahasiswa KKN 45 UMRAH & Pemdes Ekang Anculai",
      url: "https://desaekanganculai.bintankab.go.id/",
      publishedAt: "2026-08-22",
      accessedAt: "2026-08-23",
    }),
  },
  {
    id: "kg-2026-2",
    judul: "Kerja Bakti Gotong Royong Penataan Paving Block Jalan Kurma & Pembersihan Drainase",
    kategori: "Gotong Royong Lingkungan",
    tanggal: "18 April 2026",
    deskripsi:
      "Kerja bakti swadaya masyarakat bersama perangkat desa dalam penataan paving block Jalan Kurma dan pembersihan saluran drainase menjelang musim hujan.",
    image: "",
    source_json: JSON.stringify({
      name: "Pemerintah Desa Ekang Anculai",
      url: "https://desaekanganculai.bintankab.go.id/",
      publishedAt: "2026-04-18",
      accessedAt: "2026-08-23",
    }),
  },
  {
    id: "kg-2026-3",
    judul:
      "Pentas Seni Budaya Reog Sedulur Manunggal Fersi Kendang Kempul Ekang Anculai di Kawasan Lagoi",
    kategori: "Kesenian Tradisional",
    tanggal: "10 April 2026",
    deskripsi:
      "Atraksi kesenian reog dan kuda kepang sanggar pemuda desa yang tampil memukau menghibur para wisatawan di kawasan Bintan Resorts Lagoi.",
    image: "/assets/reog-kendang-kempul.jpg",
    source_json: JSON.stringify({
      name: "Sanggar Seni Sedulur Manunggal & Pemdes",
      url: "https://desaekanganculai.bintankab.go.id/",
      publishedAt: "2026-04-10",
      accessedAt: "2026-08-23",
    }),
  },
  {
    id: "kg-2026-4",
    judul: "Pawai Budaya Nusantara & Festival Kreasi Seni Warga Desa Ekang Anculai",
    kategori: "Pawai & Festival Warga",
    tanggal: "29–30 November 2026",
    deskripsi:
      "Pawai adat multi-etnis, pagelaran seni lokal, dan perlombaan lagu daerah yang melibatkan seluruh RT/RW dan paguyuban warga desa.",
    image: "",
    source_json: JSON.stringify({
      name: "Pemerintah Desa Ekang Anculai",
      url: "https://desaekanganculai.bintankab.go.id/",
      publishedAt: "2026-07-01",
      accessedAt: "2026-08-23",
    }),
  },
  {
    id: "kg-2026-5",
    judul: "Aksi Sosial BAZNAS Bintan: Santunan Anak Yatim & Program Nutrisi Penurunan Stunting",
    kategori: "Bakti Sosial & Pemberdayaan",
    tanggal: "14 Oktober 2025",
    deskripsi:
      "Penyaluran bantuan logistik sembako, santunan anak yatim dhuafa, dan program nutrisi pencegahan stunting bagi balita keluarga prasejahtera desa.",
    image: "",
    source_json: JSON.stringify({
      name: "BAZNAS Bintan & Pemdes Ekang Anculai",
      url: "https://baznas.go.id/",
      publishedAt: "2025-10-14",
      accessedAt: "2026-08-23",
    }),
  },
  {
    id: "kg-2026-6",
    judul: "Workshop Edukasi Membatik Canting 'Enjoy With Art' Bersama Perajin Rumah Batik Bintan",
    kategori: "Kriya & Edukasi Warga",
    tanggal: "25 Oktober 2025",
    deskripsi:
      "Pelatihan keterampilan teknik mencanting dan pewarnaan motif batik khas Bintan bagi generasi muda dan perajin desa binaan.",
    image: "/assets/kegiatan-batik-1.jpg",
    source_json: JSON.stringify({
      name: "Rumah Batik Bintan & BAZNAS Bintan",
      url: "https://baznas.go.id/",
      publishedAt: "2025-10-25",
      accessedAt: "2026-08-23",
    }),
  },
  {
    id: "kg-2026-7",
    judul: "Sosialisasi Gerakan Masyarakat Hidup Sehat (Germas) & Pemeriksaan Kesehatan Posyandu",
    kategori: "Kesehatan Masyarakat",
    tanggal: "12 Januari 2026",
    deskripsi:
      "Kegiatan edukasi pola hidup bersih dan sehat, senam kebugaran bersama warga, serta pemeriksaan tensi dan penimbangan balita rutin di Posyandu.",
    image: "",
    source_json: JSON.stringify({
      name: "Puskesmas Pembantu Ekang & Kader Posyandu",
      url: "https://desaekanganculai.bintankab.go.id/",
      publishedAt: "2026-01-12",
      accessedAt: "2026-08-23",
    }),
  },
  {
    id: "kg-2026-8",
    judul: "Festival Kuliner Rakyat Berbahan Olahan Ketan, Ubi & Pisang Bersama Dasawisma PKK",
    kategori: "Pemberdayaan Wanita PKK",
    tanggal: "15 Maret 2026",
    deskripsi:
      "Bursa kreasi olahan pangan lokal rengginang comel, getuk ubi, dan aneka camilan tradisional oleh kelompok ibu-ibu PKK desa.",
    image: "",
    source_json: JSON.stringify({
      name: "TP-PKK Desa Ekang Anculai",
      url: "https://desaekanganculai.bintankab.go.id/",
      publishedAt: "2026-03-15",
      accessedAt: "2026-08-23",
    }),
  },
];

const insert = db.prepare(`
  INSERT INTO kegiatan (id, judul, kategori, tanggal, deskripsi, image, source_json, status)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?)
`);

for (const it of items) {
  insert.run(
    it.id,
    it.judul,
    it.kategori,
    it.tanggal,
    it.deskripsi,
    it.image,
    it.source_json,
    "published",
  );
}

console.log(
  "Successfully synced kegiatan in SQLite database. Total rows:",
  db.prepare("SELECT COUNT(*) as count FROM kegiatan").get().count,
);
