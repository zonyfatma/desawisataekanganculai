import Database from "better-sqlite3";

const db = new Database("data/ekang_anculai.db");

const destinations = [
  {
    id: "dst-batik",
    nama: "Rumah Batik Bintan",
    slug: "rumah-batik-bintan",
    kategori: "Budaya & Craft",
    badge_status: "RESMI",
    badge_text: "Sentra Batik Khas Bintan",
    short_desc:
      "Pusat galeri batik khas Bintan serta ruang workshop membatik tulis dan cap bagi wisatawan.",
    full_desc:
      "Pusat galeri edukasi dan produksi batik cap dan tulis khas Bintan, di mana pengunjung dapat mempraktikkan proses mencanting dan mewarnai kain batik bersama instruktur perajin lokal.",
    highlights_json: JSON.stringify([
      "Workshop membatik canting tulis dan cap",
      "Motif khas daun sirih dan biota laut Bintan",
      "Galeri belanja kain batik dan souvenir",
      "Dipandu instruktur perajin desa",
    ]),
    image: "/src/assets/ekang-batik.png",
    important_note:
      "Buka setiap hari jam 08.00 - 17.00 WIB. Konfirmasi terlebih dahulu untuk rombongan workshop.",
    source_json: JSON.stringify({
      name: "Pemerintah Kabupaten Bintan",
      url: "https://www.bintankab.go.id/",
      publishedAt: "2026-04-12",
    }),
  },
  {
    id: "dst-mangrove-ekang",
    nama: "Ekang Mangrove Park",
    slug: "ekang-mangrove-park",
    kategori: "Ekowisata",
    badge_status: "RESMI",
    badge_text: "Ekowisata Konservasi Alam",
    short_desc:
      "Boardwalk kayu menyusuri hutan bakau pesisir pedalaman dengan sarana edukasi konservasi lingkungan.",
    full_desc:
      "Kawasan konservasi mangrove alami di Desa Ekang Anculai menghadirkan pengalaman susur perairan bakau yang tenang, keanekaragaman hayati pesisir, serta wahana edukasi konservasi bagi wisatawan keluarga dan pelajar.",
    highlights_json: JSON.stringify([
      "Susur sungai dan perairan hutan bakau alami",
      "Dermaga dan boardwalk kayu tepi sungai",
      "Edukasi konservasi flora-fauna pesisir pedalaman",
      "Spot foto alam yang asri dan tenang",
    ]),
    image: "/uploads/destinations/ekang-mangrove.webp",
    important_note:
      "Harap selalu mengenakan pelampung keselamatan saat susur perahu dan menjaga kebersihan mangrove.",
    source_json: JSON.stringify({
      name: "Pengelola Ekowisata Mangrove Ekang",
      url: "https://desaekanganculai.bintankab.go.id/",
      publishedAt: "2026-08-23",
    }),
  },
  {
    id: "dst-teko-kayangan",
    nama: "Teko Kayangan (Ruang Budaya & Kreativitas)",
    slug: "teko-kayangan",
    kategori: "Budaya & Rekreasi",
    badge_status: "POTENSI",
    badge_text: "Ruang Budaya & Aktivitas Komunitas",
    short_desc:
      "Ikon monumen air mancur teko melayang unik di ruang terbuka hijau desa, menjadi spot foto favorit dan wadah kreativitas budaya masyarakat.",
    full_desc:
      "Teko Kayangan merupakan salah satu ruang budaya dan kreativitas masyarakat Desa Ekang Anculai, Bintan. Ikon monumen air mancur teko melayang ini menjadi wadah pertunjukan seni, kegiatan budaya, dan aktivitas komunitas, sekaligus ruang bagi wisatawan untuk mengenal lebih dekat budaya dan kehidupan masyarakat lokal.",
    highlights_json: JSON.stringify([
      "Monumen air mancur teko melayang unik di ruang terbuka hijau",
      "Ruang budaya dan kreativitas masyarakat Desa Ekang Anculai",
      "Wadah pertunjukan seni, kegiatan budaya, dan aktivitas komunitas",
      "Spot foto ikonik favorit wisatawan",
    ]),
    image: "/uploads/destinations/teko-kayangan.webp",
    important_note:
      "Teko Kayangan merupakan ruang budaya dan kreativitas masyarakat desa dengan peluang pengembangan dan revitalisasi di masa mendatang.",
    source_json: JSON.stringify({
      name: "Pemerintah Desa Ekang Anculai",
      url: "https://desaekanganculai.bintankab.go.id/",
      publishedAt: "2026-08-22",
    }),
  },
  {
    id: "dst-reog",
    nama: "Sanggar Seni Reog Sedulur Manunggal Fersi Kendang Kempul & Balai Desa",
    slug: "sanggar-reog-sedulur-manunggal",
    kategori: "Budaya & Seni",
    badge_status: "RESMI",
    badge_text: "Pelestarian Seni Tradisional Kolosal",
    short_desc:
      "Pusat kegiatan masyarakat, pementasan Reog Sedulur Manunggal Fersi Kendang Kempul, dan gelaran musyawarah desa.",
    full_desc:
      "Wadah pelestarian kesenian tradisional Reog Ponorogo versi Kendang Kempul dan Kuda Kepang yang dimainkan oleh generasi muda desa, dilengkapi balai pertemuan dan galeri atribut seni.",
    highlights_json: JSON.stringify([
      "Atribut lengkap Dadak Merak dan Singobarong",
      "Irama musik gamelan, gong, dan kendang kempul tradisional",
      "Pentas seni berkala dan festival budaya daerah",
      "Wadah pembinaan generasi muda desa",
    ]),
    image: "/uploads/destinations/ekang-reog.webp",
    important_note:
      "Pementasan kolosal dapat dipesan untuk acara khusus atau festival budaya desa wisata.",
    source_json: JSON.stringify({
      name: "Sanggar Seni Reog Sedulur Manunggal Fersi Kendang Kempul",
      url: "https://desaekanganculai.bintankab.go.id/",
      publishedAt: "2026-08-23",
    }),
  },
  {
    id: "dst-perkebunan-sayur",
    nama: "Perkebunan Sayur Masyarakat",
    slug: "perkebunan-sayur-masyarakat",
    kategori: "Pertanian & Agrowisata",
    badge_status: "RESMI",
    badge_text: "Edukasi Pertanian & Kehidupan Desa",
    short_desc:
      "Lahan perkebunan sayur dan tanaman pangan masyarakat dengan sistem budidaya ramah lingkungan dan kearifan lokal.",
    full_desc:
      "Perkebunan sayur masyarakat Desa Ekang Anculai menghadirkan pengalaman edukasi pertanian langsung bersama petani desa, mulai dari pengenalan tanaman, perawatan bedengan lanjaran, hingga petik sayur segar.",
    highlights_json: JSON.stringify([
      "Lahan budidaya sayur dengan lanjaran bambu tradisional",
      "Edukasi teknik pertanian ramah lingkungan",
      "Pengalaman interaksi langsung dengan petani lokal",
      "Pemandangan asri perkebunan terbuka pedesaan",
    ]),
    image: "/uploads/destinations/ekang-agrowisata.webp",
    important_note:
      "Harap menghormati tanaman kebun warga dan didampingi pemandu saat aktivitas petik sayur.",
    source_json: JSON.stringify({
      name: "Kelompok Tani Desa Ekang Anculai",
      url: "https://desaekanganculai.bintankab.go.id/",
      publishedAt: "2026-08-23",
    }),
  },
  {
    id: "dst-homestay",
    nama: "Homestay Rumah Warga",
    slug: "homestay-rumah-warga",
    kategori: "Penginapan",
    badge_status: "RESMI",
    badge_text: "Community-Based Tourism (CBT)",
    short_desc:
      "Konsep pengembangan penginapan di rumah warga lokal untuk tinggal bersama masyarakat.",
    full_desc:
      "Pengalaman tinggal bersama keluarga warga lokal Desa Ekang Anculai dalam suasana pedesaan yang ramah, asri, dan autentik.",
    highlights_json: JSON.stringify([
      "Kamar bersih dan nyaman dengan fasilitas lengkap",
      "Sarapan masakan rumahan autentik warga",
      "Interaksi harian bersama masyarakat pedesaan",
      "Akses mudah ke seluruh destinasi wisata",
    ]),
    image: "/src/assets/village-ekang-anculai.jpg",
    important_note: "Reservasi disarankan H-3 melalui pengelola Pokdarwis / desa.",
    source_json: JSON.stringify({
      name: "Website Resmi Desa Wisata Ekang",
      url: "https://desawisataekanganculai.id/",
      publishedAt: "2026-01-10",
    }),
  },
  {
    id: "dst-kuliner",
    nama: "Warung Kuliner Gastronomi Desa",
    slug: "warung-kuliner-desa",
    kategori: "Kuliner",
    badge_status: "RESMI",
    badge_text: "Cita Rasa Otentik Pedesaan",
    short_desc:
      "Sentra kuliner desa menyajikan masakan rumahan seperti gulai daun ubi dan olahan ubi renyah.",
    full_desc:
      "Sentra kuliner desa menyajikan hidangan rumahan autentik dari bahan-bahan segar kebun warga serta camilan khas seperti Rengginang Comel.",
    highlights_json: JSON.stringify([
      "Menu khas gulai daun ubi dan aneka olahan hasil bumi",
      "Camilan renyah Rengginang Comel Dapur Rub",
      "Minuman tradisional segar dan ramah kantong",
      "Suasana santai pedesaan yang ramah",
    ]),
    image: "/src/assets/ekang-kuliner.png",
    important_note: "Buka setiap hari jam 07.00 - 20.00 WIB.",
    source_json: JSON.stringify({
      name: "Pemerintah Desa Ekang Anculai",
      url: "https://desaekanganculai.bintankab.go.id/",
      publishedAt: "2026-02-15",
    }),
  },
  {
    id: "dst-mangrove-dermaga",
    nama: "Dermaga Susur Mangrove",
    slug: "dermaga-susur-mangrove",
    kategori: "Ekowisata",
    badge_status: "RESMI",
    badge_text: "Dermaga Perahu Wisata Sungai",
    short_desc:
      "Dermaga dan jembatan boardwalk kayu menuju perahu wisata susur sungai dan eksplorasi hutan mangrove Desa Ekang Anculai.",
    full_desc:
      "Dermaga kayu dengan jembatan boardwalk menuju perahu wisata susur alur sungai mangrove yang menghubungkan kawasan konservasi dengan perairan muara.",
    highlights_json: JSON.stringify([
      "Dermaga perahu susur sungai mangrove",
      "Jalur jembatan boardwalk kayu kokoh",
      "Titik awal perjalanan wisata perahu",
      "Pemandangan asri sungai dan hutan bakau",
    ]),
    image: "/uploads/destinations/ekang-mangrove-dermaga.webp",
    important_note: "Wajib menggunakan pelampung dan didampingi nakhoda perahu berpengalaman.",
    source_json: JSON.stringify({
      name: "Pengelola Ekowisata Mangrove Ekang",
      url: "https://desaekanganculai.bintankab.go.id/",
      publishedAt: "2026-08-23",
    }),
  },
];

const insertStmt = db.prepare(`
  INSERT OR REPLACE INTO destinations (
    id, nama, slug, kategori, badge_status, badge_text, short_desc, full_desc, highlights_json, image, important_note, source_json, status, created_at
  ) VALUES (
    ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
  )
`);

for (const d of destinations) {
  insertStmt.run(
    d.id,
    d.nama,
    d.slug,
    d.kategori,
    d.badge_status,
    d.badge_text,
    d.short_desc,
    d.full_desc,
    d.highlights_json,
    d.image,
    d.important_note,
    d.source_json,
    "published",
    "2026-08-23 00:25:00",
  );
}

console.log("Successfully synced all 8 destinations in SQLite DB");
