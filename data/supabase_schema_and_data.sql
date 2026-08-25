-- ===================================================
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
  image_source TEXT DEFAULT 'upload',
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

-- 13. CBT Experiences Table
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

-- Data for village_info (14 rows)
INSERT INTO village_info (key, value) VALUES ('nama', 'Desa Wisata Ekang Anculai') ON CONFLICT DO NOTHING;
INSERT INTO village_info (key, value) VALUES ('tagline', 'Where Nature, Culture, Creativity, and Village Life Grow Together.') ON CONFLICT DO NOTHING;
INSERT INTO village_info (key, value) VALUES ('whatsapp', '6287866331231') ON CONFLICT DO NOTHING;
INSERT INTO village_info (key, value) VALUES ('email', 'reservation@desawisataekanganculai.id') ON CONFLICT DO NOTHING;
INSERT INTO village_info (key, value) VALUES ('alamat', 'Jl. Jendral Sudirman, Kp. Sukoharjo, Desa Ekang Anculai, Kec. Teluk Sebong, Kab. Bintan, Kepulauan Riau 29151') ON CONFLICT DO NOTHING;
INSERT INTO village_info (key, value) VALUES ('luasDesa', '5.623 Hektare') ON CONFLICT DO NOTHING;
INSERT INTO village_info (key, value) VALUES ('luasKawasanWisata', '13 Hektare') ON CONFLICT DO NOTHING;
INSERT INTO village_info (key, value) VALUES ('jamOperasional', '08.00–17.00 WIB (Kawasan Wisata)') ON CONFLICT DO NOTHING;
INSERT INTO village_info (key, value) VALUES ('waktuTerbaik', 'Mei – September (Musim Kemarau & Cuaca Cerah)') ON CONFLICT DO NOTHING;
INSERT INTO village_info (key, value) VALUES ('pokdarwis', 'Pengelola Pesona Ekang / Pemdes Ekang Anculai') ON CONFLICT DO NOTHING;
INSERT INTO village_info (key, value) VALUES ('instagram', '@desawisataekang') ON CONFLICT DO NOTHING;
INSERT INTO village_info (key, value) VALUES ('facebook', 'Desa Wisata Ekang Anculai') ON CONFLICT DO NOTHING;
INSERT INTO village_info (key, value) VALUES ('tiktok', '@desawisataekang') ON CONFLICT DO NOTHING;
INSERT INTO village_info (key, value) VALUES ('pemdesWebsite', 'https://desaekanganculai.bintankab.go.id/') ON CONFLICT DO NOTHING;

-- Data for destinations (8 rows)
INSERT INTO destinations (id, num, nama, slug, kategori, badge_status, badge_text, short_desc, full_desc, highlights_json, image, external_url, external_label, important_note, source_json, status, created_at) VALUES ('dst-batik', NULL, 'Rumah Batik Bintan', 'rumah-batik-bintan', 'Budaya & Craft', 'RESMI', 'Sentra Batik Khas Bintan', 'Pusat galeri batik khas Bintan serta ruang workshop membatik tulis dan cap bagi wisatawan.', 'Pusat galeri edukasi dan produksi batik cap dan tulis khas Bintan, di mana pengunjung dapat mempraktikkan proses mencanting dan mewarnai kain batik bersama instruktur perajin lokal.', '["Workshop membatik canting tulis dan cap","Motif khas daun sirih dan biota laut Bintan","Galeri belanja kain batik dan souvenir","Dipandu instruktur perajin desa"]', '/src/assets/ekang-batik.png', NULL, NULL, 'Buka setiap hari jam 08.00 - 17.00 WIB. Konfirmasi terlebih dahulu untuk rombongan workshop.', '{"name":"Pemerintah Kabupaten Bintan","url":"https://www.bintankab.go.id/","publishedAt":"2026-04-12"}', 'published', '2026-08-23 00:25:00') ON CONFLICT DO NOTHING;
INSERT INTO destinations (id, num, nama, slug, kategori, badge_status, badge_text, short_desc, full_desc, highlights_json, image, external_url, external_label, important_note, source_json, status, created_at) VALUES ('dst-mangrove-ekang', NULL, 'Ekang Mangrove Park', 'ekang-mangrove-park', 'Ekowisata', 'RESMI', 'Ekowisata Konservasi Alam', 'Boardwalk kayu menyusuri hutan bakau pesisir pedalaman dengan sarana edukasi konservasi lingkungan.', 'Kawasan konservasi mangrove alami di Desa Ekang Anculai menghadirkan pengalaman susur perairan bakau yang tenang, keanekaragaman hayati pesisir, serta wahana edukasi konservasi bagi wisatawan keluarga dan pelajar.', '["Susur sungai dan perairan hutan bakau alami","Dermaga dan boardwalk kayu tepi sungai","Edukasi konservasi flora-fauna pesisir pedalaman","Spot foto alam yang asri dan tenang"]', '/uploads/destinations/ekang-mangrove.webp', NULL, NULL, 'Harap selalu mengenakan pelampung keselamatan saat susur perahu dan menjaga kebersihan mangrove.', '{"name":"Pengelola Ekowisata Mangrove Ekang","url":"https://desaekanganculai.bintankab.go.id/","publishedAt":"2026-08-23"}', 'published', '2026-08-23 00:25:00') ON CONFLICT DO NOTHING;
INSERT INTO destinations (id, num, nama, slug, kategori, badge_status, badge_text, short_desc, full_desc, highlights_json, image, external_url, external_label, important_note, source_json, status, created_at) VALUES ('dst-teko-kayangan', NULL, 'Teko Kayangan (Ruang Budaya & Kreativitas)', 'teko-kayangan', 'Budaya & Rekreasi', 'POTENSI', 'Ruang Budaya & Aktivitas Komunitas', 'Ikon monumen air mancur teko melayang unik di ruang terbuka hijau desa, menjadi spot foto favorit dan wadah kreativitas budaya masyarakat.', 'Teko Kayangan merupakan salah satu ruang budaya dan kreativitas masyarakat Desa Ekang Anculai, Bintan. Ikon monumen air mancur teko melayang ini menjadi wadah pertunjukan seni, kegiatan budaya, dan aktivitas komunitas, sekaligus ruang bagi wisatawan untuk mengenal lebih dekat budaya dan kehidupan masyarakat lokal.', '["Monumen air mancur teko melayang unik di ruang terbuka hijau","Ruang budaya dan kreativitas masyarakat Desa Ekang Anculai","Wadah pertunjukan seni, kegiatan budaya, dan aktivitas komunitas","Spot foto ikonik favorit wisatawan"]', '/uploads/destinations/teko-kayangan.webp', NULL, NULL, 'Teko Kayangan merupakan ruang budaya dan kreativitas masyarakat desa dengan peluang pengembangan dan revitalisasi di masa mendatang.', '{"name":"Pemerintah Desa Ekang Anculai","url":"https://desaekanganculai.bintankab.go.id/","publishedAt":"2026-08-22"}', 'published', '2026-08-23 00:25:00') ON CONFLICT DO NOTHING;
INSERT INTO destinations (id, num, nama, slug, kategori, badge_status, badge_text, short_desc, full_desc, highlights_json, image, external_url, external_label, important_note, source_json, status, created_at) VALUES ('dst-reog', NULL, 'Sanggar Seni Reog Sedulur Manunggal Fersi Kendang Kempul & Balai Desa', 'sanggar-reog-sedulur-manunggal', 'Budaya & Seni', 'RESMI', 'Pelestarian Seni Tradisional Kolosal', 'Pusat kegiatan masyarakat, pementasan Reog Sedulur Manunggal Fersi Kendang Kempul, dan gelaran musyawarah desa.', 'Wadah pelestarian kesenian tradisional Reog Ponorogo versi Kendang Kempul dan Kuda Kepang yang dimainkan oleh generasi muda desa, dilengkapi balai pertemuan dan galeri atribut seni.', '["Atribut lengkap Dadak Merak dan Singobarong","Irama musik gamelan, gong, dan kendang kempul tradisional","Pentas seni berkala dan festival budaya daerah","Wadah pembinaan generasi muda desa"]', '/uploads/destinations/ekang-reog.webp', NULL, NULL, 'Pementasan kolosal dapat dipesan untuk acara khusus atau festival budaya desa wisata.', '{"name":"Sanggar Seni Reog Sedulur Manunggal Fersi Kendang Kempul","url":"https://desaekanganculai.bintankab.go.id/","publishedAt":"2026-08-23"}', 'published', '2026-08-23 00:25:00') ON CONFLICT DO NOTHING;
INSERT INTO destinations (id, num, nama, slug, kategori, badge_status, badge_text, short_desc, full_desc, highlights_json, image, external_url, external_label, important_note, source_json, status, created_at) VALUES ('dst-perkebunan-sayur', NULL, 'Perkebunan Sayur Masyarakat', 'perkebunan-sayur-masyarakat', 'Pertanian & Agrowisata', 'RESMI', 'Edukasi Pertanian & Kehidupan Desa', 'Lahan perkebunan sayur dan tanaman pangan masyarakat dengan sistem budidaya ramah lingkungan dan kearifan lokal.', 'Perkebunan sayur masyarakat Desa Ekang Anculai menghadirkan pengalaman edukasi pertanian langsung bersama petani desa, mulai dari pengenalan tanaman, perawatan bedengan lanjaran, hingga petik sayur segar.', '["Lahan budidaya sayur dengan lanjaran bambu tradisional","Edukasi teknik pertanian ramah lingkungan","Pengalaman interaksi langsung dengan petani lokal","Pemandangan asri perkebunan terbuka pedesaan"]', '/uploads/destinations/ekang-agrowisata.webp', NULL, NULL, 'Harap menghormati tanaman kebun warga dan didampingi pemandu saat aktivitas petik sayur.', '{"name":"Kelompok Tani Desa Ekang Anculai","url":"https://desaekanganculai.bintankab.go.id/","publishedAt":"2026-08-23"}', 'published', '2026-08-23 00:25:00') ON CONFLICT DO NOTHING;
INSERT INTO destinations (id, num, nama, slug, kategori, badge_status, badge_text, short_desc, full_desc, highlights_json, image, external_url, external_label, important_note, source_json, status, created_at) VALUES ('dst-homestay', NULL, 'Homestay Rumah Warga', 'homestay-rumah-warga', 'Penginapan', 'RESMI', 'Community-Based Tourism (CBT)', 'Konsep pengembangan penginapan di rumah warga lokal untuk tinggal bersama masyarakat.', 'Pengalaman tinggal bersama keluarga warga lokal Desa Ekang Anculai dalam suasana pedesaan yang ramah, asri, dan autentik.', '["Kamar bersih dan nyaman dengan fasilitas lengkap","Sarapan masakan rumahan autentik warga","Interaksi harian bersama masyarakat pedesaan","Akses mudah ke seluruh destinasi wisata"]', '/src/assets/village-ekang-anculai.jpg', NULL, NULL, 'Reservasi disarankan H-3 melalui pengelola Pokdarwis / desa.', '{"name":"Website Resmi Desa Wisata Ekang","url":"https://desawisataekanganculai.id/","publishedAt":"2026-01-10"}', 'published', '2026-08-23 00:25:00') ON CONFLICT DO NOTHING;
INSERT INTO destinations (id, num, nama, slug, kategori, badge_status, badge_text, short_desc, full_desc, highlights_json, image, external_url, external_label, important_note, source_json, status, created_at) VALUES ('dst-kuliner', NULL, 'Warung Kuliner Gastronomi Desa', 'warung-kuliner-desa', 'Kuliner', 'RESMI', 'Cita Rasa Otentik Pedesaan', 'Sentra kuliner desa menyajikan masakan rumahan seperti gulai daun ubi dan olahan ubi renyah.', 'Sentra kuliner desa menyajikan hidangan rumahan autentik dari bahan-bahan segar kebun warga serta camilan khas seperti Rengginang Comel.', '["Menu khas gulai daun ubi dan aneka olahan hasil bumi","Camilan renyah Rengginang Comel Dapur Rub","Minuman tradisional segar dan ramah kantong","Suasana santai pedesaan yang ramah"]', '/src/assets/ekang-kuliner.png', NULL, NULL, 'Buka setiap hari jam 07.00 - 20.00 WIB.', '{"name":"Pemerintah Desa Ekang Anculai","url":"https://desaekanganculai.bintankab.go.id/","publishedAt":"2026-02-15"}', 'published', '2026-08-23 00:25:00') ON CONFLICT DO NOTHING;
INSERT INTO destinations (id, num, nama, slug, kategori, badge_status, badge_text, short_desc, full_desc, highlights_json, image, external_url, external_label, important_note, source_json, status, created_at) VALUES ('dst-mangrove-dermaga', NULL, 'Dermaga Susur Mangrove', 'dermaga-susur-mangrove', 'Ekowisata', 'RESMI', 'Dermaga Perahu Wisata Sungai', 'Dermaga dan jembatan boardwalk kayu menuju perahu wisata susur sungai dan eksplorasi hutan mangrove Desa Ekang Anculai.', 'Dermaga kayu dengan jembatan boardwalk menuju perahu wisata susur alur sungai mangrove yang menghubungkan kawasan konservasi dengan perairan muara.', '["Dermaga perahu susur sungai mangrove","Jalur jembatan boardwalk kayu kokoh","Titik awal perjalanan wisata perahu","Pemandangan asri sungai dan hutan bakau"]', '/uploads/destinations/ekang-mangrove-dermaga.webp', NULL, NULL, 'Wajib menggunakan pelampung dan didampingi nakhoda perahu berpengalaman.', '{"name":"Pengelola Ekowisata Mangrove Ekang","url":"https://desaekanganculai.bintankab.go.id/","publishedAt":"2026-08-23"}', 'published', '2026-08-23 00:25:00') ON CONFLICT DO NOTHING;

-- Data for packages (3 rows)
INSERT INTO packages (id, nama, slug, kategori, durasi, lokasi_spesifik, harga_text, target_visitor, deskripsi_lengkap, highlight, image, fasilitas_json, itinerary_json, source_json, status, created_at) VALUES ('ekg-fullday-official', 'Paket Wisata Full Day – Desa Wisata Hijau dan Kreatif Ekang Anculai', 'ekg-fullday-official', 'Batik & Ekonomi Kreatif', '± 8 jam', 'Desa Wisata Ekang Anculai, Teluk Sebong, Bintan', 'Informasi via Pengelola', 'Wisatawan Budaya & Edukasi', 'Pengalaman wisata satu hari yang mengajak wisatawan mengenal kehidupan Desa Ekang Anculai melalui kreativitas, pertanian masyarakat, kuliner lokal, budaya Melayu, serta produk UMKM desa.', 'Experience the Authentic Village Life', '/src/assets/ekang-batik.png', '["Praktik Membatik di Rumah Batik Bintan","Membawa Pulang Hasil Membatik","Kunjungan Kebun & Interaksi Petani","Makan Siang Kuliner Khas Ekang","Seni Budaya Melayu Desa","Pemandu Lokal Wisata"]', '[{"waktu":"09.00–11.00","kegiatan":"Membatik di Rumah Batik Bintan","kategori":"Creative Experience","deskripsi":"Perjalanan dimulai dengan penyambutan dan pengenalan batik khas Bintan di Rumah Batik Bintan. Wisatawan kemudian diajak mengenal proses membatik secara langsung melalui praktik bersama pengrajin lokal. Pengalaman ini memberikan kesempatan bagi pengunjung untuk belajar, berkarya, dan membawa pulang hasil karya mereka sebagai suvenir."},{"waktu":"11.00–12.30","kegiatan":"Berkebun Bersama Masyarakat","kategori":"Village Farming Experience","deskripsi":"Selanjutnya, wisatawan diajak mengunjungi kebun warga untuk mengenal kehidupan pertanian masyarakat Ekang Anculai. Pengunjung dapat mengenal berbagai tanaman sayur dan tanaman lokal serta mengikuti aktivitas menanam atau memanen hasil kebun sesuai dengan musim. Kegiatan ini menjadi kesempatan untuk berinteraksi langsung dengan petani dan merasakan pengalaman kehidupan desa."},{"waktu":"12.30–14.00","kegiatan":"Menikmati Kuliner Lokal","kategori":"Gastronomy Experience","deskripsi":"Setelah beraktivitas di kebun, wisatawan diajak menikmati makan siang dengan menu khas Ekang Anculai. Hidangan lokal seperti aneka olahan ubi dan daun ubi menjadi bagian dari pengalaman gastronomi desa. Selain menikmati cita rasa pangan lokal, pengunjung juga diajak mengenal cerita dan filosofi yang berkaitan dengan pangan masyarakat setempat."},{"waktu":"14.00–16.00","kegiatan":"Budaya yang Hadir di Berbagai Sudut Desa","kategori":"Cultural Experience","deskripsi":"Perjalanan dilanjutkan dengan mengenal seni dan budaya Melayu yang hadir di berbagai sudut desa, seperti di Rumah Batik Bintan maupun lokasi kegiatan warga. Wisatawan dapat mengenal cerita rakyat, tradisi lokal, dan berinteraksi langsung dengan pelaku seni masyarakat."},{"waktu":"16.00–17.00","kegiatan":"Belanja Produk UMKM & Penutupan","kategori":"Local Product Experience","deskripsi":"Menjelang akhir perjalanan, wisatawan diberikan kesempatan untuk mengenal dan berbelanja produk batik serta produk UMKM desa. Pengunjung dapat memilih produk lokal sebagai oleh-oleh sekaligus mengenal hasil kreativitas masyarakat. Kegiatan kemudian ditutup dengan foto bersama serta penyerahan suvenir dan sertifikat pengalaman apabila tersedia."}]', '{"name":"Pemerintah Desa Ekang Anculai & Pengelola Wisata","url":"https://desaekanganculai.bintankab.go.id/","publishedAt":"2026-07-04"}', 'published', '2026-08-21 07:54:48') ON CONFLICT DO NOTHING;
INSERT INTO packages (id, nama, slug, kategori, durasi, lokasi_spesifik, harga_text, target_visitor, deskripsi_lengkap, highlight, image, fasilitas_json, itinerary_json, source_json, status, created_at) VALUES ('ekg-2d1n-official', 'Paket Wisata 2 Hari 1 Malam', 'ekg-2d1n-official', 'Homestay Rumah Warga', '2 Hari 1 Malam', 'Desa Wisata Ekang Anculai, Teluk Sebong, Bintan', 'Informasi via Pengelola', 'Wisatawan Live-in & CBT', 'Pengalaman menginap dan berinteraksi lebih dekat dengan masyarakat melalui kegiatan kreatif, pertanian, kuliner, kerajinan, mangrove, budaya, dan kehidupan desa.', 'Live Like a Local in Ekang Anculai', '/src/assets/village-ekang-anculai.jpg', '["Akomodasi Homestay Rumah Warga","Makan Bersama Keluarga Tuan Rumah","Pemandu Lokal Wisata","Workshop Membatik & Kerajinan Desa","Eksplorasi Hutan Mangrove & Village Tour"]', '[{"waktu":"09.00–09.30","kegiatan":"Penyambutan dan Welcome Drink","kategori":"Welcome Experience","deskripsi":"Pengalaman dimulai dengan penyambutan wisatawan di Desa Ekang Anculai. Wisatawan menikmati welcome drink sebagai pembuka perjalanan sekaligus mendapatkan pengenalan awal mengenai rangkaian pengalaman wisata yang akan dijalani selama berada di desa."},{"waktu":"09.30–11.30","kegiatan":"Membatik di Rumah Batik Bintan","kategori":"Creative Experience","deskripsi":"Setelah penyambutan, wisatawan diajak mengenal filosofi Batik Bintan dan mencoba proses membatik secara langsung. Bersama pengrajin, pengunjung mendapatkan pengalaman belajar dan berkarya melalui praktik membatik, kemudian membawa pulang hasil karya sebagai bagian dari pengalaman perjalanan."},{"waktu":"11.30–13.00","kegiatan":"Berkebun Bersama Masyarakat","kategori":"Village Farming Experience","deskripsi":"Pengunjung kemudian diajak mengenal kehidupan pertanian desa melalui aktivitas berkebun bersama masyarakat. Wisatawan dapat mengenal pertanian desa, mengikuti kegiatan menanam atau memanen sayuran sesuai musim, serta berinteraksi langsung dengan petani lokal."},{"waktu":"13.00–14.00","kegiatan":"Makan Siang Kuliner Lokal","kategori":"Gastronomy Experience","deskripsi":"Wisatawan menikmati makan siang dengan cita rasa pangan lokal melalui aneka olahan ubi dan daun ubi serta minuman herbal khas desa. Kegiatan ini menjadi bagian dari pengalaman mengenal kekayaan pangan dan cita rasa lokal Ekang Anculai."},{"waktu":"14.00–16.00","kegiatan":"Workshop Kreatif & Kerajinan Desa","kategori":"Creative & Craft Experience","deskripsi":"Pada sore hari, wisatawan diajak mengenal keterampilan kerajinan masyarakat melalui workshop anyaman pandan. Bersama perajin, pengunjung belajar menganyam dan mencoba membuat suvenir sederhana sebagai pengalaman kreatif yang dapat dikenang dari perjalanan di Ekang Anculai."},{"waktu":"16.00–17.00","kegiatan":"Check-in Homestay","kategori":"Homestay Rumah Warga","deskripsi":"Setelah mengikuti berbagai aktivitas sepanjang hari, wisatawan melakukan check-in di Homestay Rumah Warga. Selain beristirahat, pengunjung mendapatkan kesempatan untuk merasakan suasana tinggal di lingkungan masyarakat dan berinteraksi dengan keluarga tuan rumah."},{"waktu":"19.00–20.30","kegiatan":"Makan Malam Bersama & Suasana Malam Desa","kategori":"Village Night Experience","deskripsi":"Malam hari diisi dengan makan malam bersama sambil menikmati suasana kehidupan desa. Wisatawan dapat menikmati hidangan rumahan dan berbincang bersama masyarakat. Api unggun atau pertunjukan musik akustik dapat dilakukan sebagai aktivitas opsional apabila tersedia.","note":"Opsional: api unggun atau pertunjukan musik akustik"}]', '{"name":"Pemerintah Desa Ekang Anculai & Pengelola Wisata","url":"https://desaekanganculai.bintankab.go.id/","publishedAt":"2026-07-04"}', 'published', '2026-08-21 07:54:48') ON CONFLICT DO NOTHING;
INSERT INTO packages (id, nama, slug, kategori, durasi, lokasi_spesifik, harga_text, target_visitor, deskripsi_lengkap, highlight, image, fasilitas_json, itinerary_json, source_json, status, created_at) VALUES ('ekg-mangrove-official', 'Paket Custom', 'ekg-mangrove-official', 'Ekowisata & Mangrove', 'Fleksibel / Sesuai Kebutuhan', 'Desa Wisata Ekang Anculai, Teluk Sebong, Bintan', 'Konsultasi via Pengelola', 'Rombongan, Komunitas, Instansi, & Wisatawan Mandiri', 'Paket kunjungan kustom yang fleksibel dirancang khusus untuk memenuhi preferensi Anda atau rombongan. Anda bebas memilih kombinasi destinasi dan aktivitas desa, mulai dari workshop Rumah Batik Bintan, ekowisata mangrove, perkebunan sayur, pertunjukan budaya, kuliner lokal, hingga penginapan Homestay Rumah Warga.', 'Bebas Menentukan Durasi, Destinasi, dan Rangkaian Aktivitas Sesuai Keinginan', '/src/assets/ekang-mangrove.png', '["Bebas Pilih Kombinasi Destinasi & Aktivitas Desa","Penyesuaian Durasi Kunjungan (Setengah Hari / 1 Hari / Bermalam)","Penyesuaian Anggaran & Jumlah Anggota Rombongan","Pemandu Lokal Khusus Pendamping Rombongan","Konsultasi Rencana & Itinerary Fleksibel"]', '[{"waktu":"Diskusi","kegiatan":"Konsultasi Rencana & Pilihan Aktivitas","kategori":"Persiapan","deskripsi":"Konsultasikan tanggal kunjungan, perkiraan peserta, serta kombinasi aktivitas desa yang Anda inginkan bersama pengelola."},{"waktu":"Personalisasi","kegiatan":"Penyusunan Program & Rencana Kunjungan","kategori":"Kustomisasi","deskripsi":"Pengelola menyusun rangkaian acara yang dipersonalisasi sesuai kebutuhan alokasi waktu dan budget Anda."},{"waktu":"Kunjungan","kegiatan":"Pelaksanaan Pengalaman Wisata Khusus","kategori":"Kunjungan","deskripsi":"Menikmati pengalaman wisata autentik Desa Ekang Anculai dengan fleksibilitas tinggi dan pendampingan pemandu lokal."}]', '{"name":"Pemerintah Desa Ekang Anculai & Pengelola Wisata","url":"https://desaekanganculai.bintankab.go.id/","publishedAt":"2026-07-04","accessedAt":"2026-08-04"}', 'published', '2026-08-21 07:54:48') ON CONFLICT DO NOTHING;

-- Data for umkm (3 rows)
INSERT INTO umkm (id, nama, slug, pemilik, kategori, deskripsi, image, lokasi, kontak, harga_info, source_json, status, created_at) VALUES ('umkm-1', 'Rumah Batik Bintan (Batik Tulis & Cap)', 'umkm-1', 'Masyarakat Desa Ekang', 'Produk Ekonomi Kreatif', 'Pusat edukasi & produksi kain batik eksklusif motif khas Bintan buatan perajin desa.', '/src/assets/ekang-batik.png', 'Ekang Anculai', '6287866331231', 'Mulai Rp 150.000 / kain', '{"name":"Pemerintah Kabupaten Bintan","url":"https://www.bintankab.go.id/","publishedAt":"2026-04-10","accessedAt":"2026-08-04"}', 'published', '2026-08-21 07:54:48') ON CONFLICT DO NOTHING;
INSERT INTO umkm (id, nama, slug, pemilik, kategori, deskripsi, image, lokasi, kontak, harga_info, source_json, status, created_at) VALUES ('umkm-4', 'Homestay Rumah Warga Ekang', 'umkm-4', 'Masyarakat Desa Ekang', 'Ekowisata & Akomodasi', 'Konsep penginapan di rumah warga lokal untuk merasakan kehidupan dan kehangatan masyarakat desa.', '/src/assets/village-ekang-anculai.jpg', 'Kawasan Desa Ekang Anculai', '6287866331231', 'Konsep Pengembangan CBT', '{"name":"Website Resmi Desa Wisata Ekang","url":"https://desawisataekanganculai.id/","publishedAt":"2026-01-15","accessedAt":"2026-08-04"}', 'published', '2026-08-21 07:54:48') ON CONFLICT DO NOTHING;
INSERT INTO umkm (id, nama, slug, pemilik, kategori, deskripsi, image, lokasi, kontak, harga_info, source_json, status, created_at) VALUES ('umkm-5', 'Rengginang Comel (Dapur Rub)', 'umkm-5', 'Dapur Rub (Masyarakat Desa Ekang)', 'Kuliner Tradisional', 'Kreasi rengginang warna-warni khas sejak 2021 yang berkolaborasi dengan BRC. Dibuat dari beras ketan pilihan dengan penjemuran alami. Sudah berizin legalitas, ber-NPWP, dan memiliki sertifikasi Halal resmi.', '/uploads/umkm/rengginang-comel.webp', 'Kp. Sukoharjo, Desa Ekang Anculai', '6287866331231', 'Mentah: Rp 55.000/kg (Rp 27.500/0.5kg) | Goreng: Rp 65.000/kg (Rp 37.500/0.5kg)', '{"name":"Dapur Rub & UMKM Desa Ekang Anculai","url":"https://desawisataekanganculai.id","publishedAt":"2026-08-22"}', 'published', '2026-08-22 21:50:00') ON CONFLICT DO NOTHING;

-- Data for kegiatan (6 rows)
INSERT INTO kegiatan (id, judul, kategori, tanggal, deskripsi, image, source_json, status, created_at) VALUES ('kg-2026-1', 'Laporan Pertanggungjawaban BUMDes Anugrah Ekang Anculai Tahun 2025 Pada 2026', 'Tata Kelola Desa', '12 Februari 2026', 'Pemerintah Desa dan Pengurus BUMDes Anugrah Ekang Anculai menyelenggarakan Musyawarah Desa LPJ Tahun Anggaran 2025 untuk transparansi usaha desa.', '/src/assets/ekang-agrowisata.jpg', '{"name":"Pemerintah Desa Ekang Anculai","url":"https://desaekanganculai.bintankab.go.id/","publishedAt":"2026-02-12","accessedAt":"2026-08-04"}', 'published', '2026-08-21 07:54:48') ON CONFLICT DO NOTHING;
INSERT INTO kegiatan (id, judul, kategori, tanggal, deskripsi, image, source_json, status, created_at) VALUES ('kg-2026-2', 'Ekang Anculai Meraih Peringkat III Lomba Desa/Kelurahan Berprestasi Tingkat Provinsi Kepri 2026', 'Prestasi Daerah', '15 Juni 2026', 'Pemerintah Provinsi Kepulauan Riau secara resmi menetapkan Desa Ekang Anculai meraih Peringkat III Desa Berprestasi 2026 atas efektivitas tata kelola dan inovasi masyarakat.', '/src/assets/village-ekang-anculai.jpg', '{"name":"Pemerintah Kabupaten Bintan","url":"https://www.bintankab.go.id/","publishedAt":"2026-06-15","accessedAt":"2026-08-04"}', 'published', '2026-08-21 07:54:48') ON CONFLICT DO NOTHING;
INSERT INTO kegiatan (id, judul, kategori, tanggal, deskripsi, image, source_json, status, created_at) VALUES ('kg-2026-3', 'Musyawarah Desa Perencanaan Pembangunan & Pengesahan Laporan Indeks Desa 2026', 'Musyawarah Desa', '04 Juli 2026', 'Musbangdes perencanaan pembangunan tahun anggaran 2027 serta pengesahan pemutakhiran Laporan Indeks Desa (ID) Ekang Anculai Tahun 2026.', '/src/assets/ekang-agrowisata.jpg', '{"name":"Pemerintah Desa Ekang Anculai","url":"https://desaekanganculai.bintankab.go.id/","publishedAt":"2026-07-04","accessedAt":"2026-08-04"}', 'published', '2026-08-21 07:54:48') ON CONFLICT DO NOTHING;
INSERT INTO kegiatan (id, judul, kategori, tanggal, deskripsi, image, source_json, status, created_at) VALUES ('kg-2026-4', 'Penyaluran Bantuan Langsung Tunai (BLT) Dana Desa Ekang Anculai Tahun 2026', 'Pemberdayaan Masyarakat', '20 Mei 2026', 'Pemerintah Desa Ekang Anculai menyalurkan BLT Dana Desa penanganan kemiskinan ekstrem secara transparan kepada Keluarga Penerima Manfaat (KPM).', '/src/assets/ekang-agrowisata.jpg', '{"name":"Pemerintah Desa Ekang Anculai","url":"https://desaekanganculai.bintankab.go.id/","publishedAt":"2026-05-20","accessedAt":"2026-08-04"}', 'published', '2026-08-21 07:54:48') ON CONFLICT DO NOTHING;
INSERT INTO kegiatan (id, judul, kategori, tanggal, deskripsi, image, source_json, status, created_at) VALUES ('kg-2026-5', 'Pembangunan Infrastruktur Paving Block Jalan Kurma & Pemeliharaan Drainase Desa', 'Pembangunan Desa', '18 April 2026', 'Kegiatan pembangunan jalan Kurma, drainase Jalan Mangga, serta gotong royong pembukaan akses jalan desa bersama warga.', '/src/assets/ekang-agrowisata.jpg', '{"name":"Pemerintah Desa Ekang Anculai","url":"https://desaekanganculai.bintankab.go.id/","publishedAt":"2026-04-18","accessedAt":"2026-08-04"}', 'published', '2026-08-21 07:54:48') ON CONFLICT DO NOTHING;
INSERT INTO kegiatan (id, judul, kategori, tanggal, deskripsi, image, source_json, status, created_at) VALUES ('kg-2026-6', 'Gotong Royong Membersihkan Lapangan Volly Bersama Mahasiswa KKN 45 Ekang Anculai Universitas Maritim Raja Ali Haji', 'Gotong Royong & Kepemudaan', '22 Agustus 2026', 'Aksi gotong royong pemuda desa dan mahasiswa KKN Angkatan 45 UMRAH membersihkan area sekeliling lapangan bola voli dan saluran drainase demi kenyamanan sarana olahraga masyarakat.', '/uploads/kegiatan/ekang-gotong-royong-kkn.webp', '{"name":"Mahasiswa KKN 45 UMRAH & Pemdes Ekang Anculai","url":"https://desaekanganculai.bintankab.go.id/","publishedAt":"2026-08-22","accessedAt":"2026-08-23"}', 'published', '2026-08-23 00:50:00') ON CONFLICT DO NOTHING;

-- Data for galleries (21 rows)
INSERT INTO galleries (id, judul, kategori, image, caption, alt, sumber, status, created_at) VALUES ('gal-6', 'Homestay Rumah Warga', 'Homestay', '/src/assets/village-ekang-anculai.jpg', 'Kenyamanan menginap dan berinteraksi langsung di rumah-rumah warga desa.', 'Penginapan Homestay Rumah Warga Ekang Anculai', 'Website Resmi Desa Wisata Ekang', 'published', '2026-08-22 23:50:00') ON CONFLICT DO NOTHING;
INSERT INTO galleries (id, judul, kategori, image, caption, alt, sumber, status, created_at) VALUES ('gal-7', 'Danau Alami & Suasana Asri Desa', 'Alam', '/src/assets/village-ekang-anculai.jpg', 'Pemandangan perairan danau alami dan lingkungan hijau asri pedesaan.', 'Lanskap Alam Pedesaan Ekang Anculai', 'Pemerintah Desa Ekang Anculai', 'published', '2026-08-22 23:50:00') ON CONFLICT DO NOTHING;
INSERT INTO galleries (id, judul, kategori, image, caption, alt, sumber, status, created_at) VALUES ('gal-8', 'Gotong Royong & Aktivitas Warga', 'Aktivitas Masyarakat', '/src/assets/ekang-agrowisata.jpg', 'Kebersamaan warga desa dalam merawat kebun dan lingkungan permukiman.', 'Gotong Royong Masyarakat Desa Ekang Anculai', 'Pemerintah Desa Ekang Anculai', 'published', '2026-08-22 23:50:00') ON CONFLICT DO NOTHING;
INSERT INTO galleries (id, judul, kategori, image, caption, alt, sumber, status, created_at) VALUES ('gal-9', 'Musyawarah & Perencanaan Desa 2026', 'Kegiatan Desa', '/src/assets/village-ekang-anculai.jpg', 'Kegiatan musyawarah perencanaan pembangunan dan tata kelola desa partisipatif.', 'Musyawarah Desa Ekang Anculai 2026', 'Pemerintah Desa Ekang Anculai', 'published', '2026-08-22 23:50:00') ON CONFLICT DO NOTHING;
INSERT INTO galleries (id, judul, kategori, image, caption, alt, sumber, status, created_at) VALUES ('gal-batik-keg-1', 'Pameran Karya Membatik Wisatawan', 'Batik', '/src/assets/kegiatan-batik-1.jpg', 'Wisatawan mancanegara memamerkan hasil karya kain batik motif Bintan yang mereka canting sendiri di Rumah Batik Bintan.', 'Wisatawan Mancanegara Menunjukkan Kain Batik Hasil Canting Sendiri', 'Dokumentasi Rumah Batik Bintan & Pengelola Wisata', 'published', '2026-08-22 23:50:00') ON CONFLICT DO NOTHING;
INSERT INTO galleries (id, judul, kategori, image, caption, alt, sumber, status, created_at) VALUES ('gal-batik-keg-2', 'Praktik Mencanting Batik Tradisional', 'Kegiatan Desa', '/src/assets/kegiatan-batik-2.jpg', 'Pengunjung belajar teknik dasar memegang canting dan melukis lilin malam di atas kain mori.', 'Sesi Belajar Mencanting Lilin Batik Bersama Instruktur Perajin', 'Dokumentasi Rumah Batik Bintan & Pengelola Wisata', 'published', '2026-08-22 23:50:00') ON CONFLICT DO NOTHING;
INSERT INTO galleries (id, judul, kategori, image, caption, alt, sumber, status, created_at) VALUES ('gal-batik-keg-3', 'Workshop Pewarnaan Kain Batik', 'Aktivitas Masyarakat', '/src/assets/kegiatan-batik-3.jpg', 'Wisatawan mancanegara mempraktikkan proses pewarnaan kain batik menggunakan pemidangan di Rumah Batik Bintan.', 'Workshop Pewarnaan Batik Wisatawan Mancanegara Ekang Anculai', 'Dokumentasi Rumah Batik Bintan & Pengelola Wisata', 'published', '2026-08-22 23:50:00') ON CONFLICT DO NOTHING;
INSERT INTO galleries (id, judul, kategori, image, caption, alt, sumber, status, created_at) VALUES ('gal-rengginang-1', 'Sajian Rengginang Comel Warna-Warni', 'Gastronomi', '/uploads/galeri/rengginang-sajian.webp', 'Sajian Rengginang Comel renyah aneka warna olahan beras ketan alami karya UMKM Dapur Rub Desa Ekang Anculai.', 'Sajian Rengginang Comel Aneka Warna Khas Desa Ekang Anculai', 'Dapur Rub & UMKM Desa Ekang Anculai', 'published', '2026-08-22 23:50:00') ON CONFLICT DO NOTHING;
INSERT INTO galleries (id, judul, kategori, image, caption, alt, sumber, status, created_at) VALUES ('gal-rengginang-2', 'Kemasan Rengginang Comel Stand Pouch', 'Gastronomi', '/uploads/galeri/rengginang-kemasan-3.webp', 'Kemasan higienis Rengginang Comel siap santap dan oleh-oleh khas desa wisata.', 'Kemasan Rengginang Comel Stand Pouch Higienis', 'Dapur Rub & UMKM Desa Ekang Anculai', 'published', '2026-08-22 23:50:00') ON CONFLICT DO NOTHING;
INSERT INTO galleries (id, judul, kategori, image, caption, alt, sumber, status, created_at) VALUES ('gal-rengginang-3', 'Rengginang Comel Bersertifikat Halal', 'Gastronomi', '/uploads/galeri/rengginang-kemasan-label.webp', 'Produk Rengginang Comel dengan izin legalitas usaha lengkap, NPWP, dan sertifikasi Halal resmi.', 'Kemasan Rengginang Comel Bersertifikat Halal Dapur Rub', 'Dapur Rub & UMKM Desa Ekang Anculai', 'published', '2026-08-22 23:50:00') ON CONFLICT DO NOTHING;
INSERT INTO galleries (id, judul, kategori, image, caption, alt, sumber, status, created_at) VALUES ('gal-rengginang-4', 'Rengginang Comel Siap Goreng', 'Gastronomi', '/uploads/galeri/rengginang-kemasan-mentah.webp', 'Kemasan rengginang mentah kering berkualitas hasil penjemuran alami siap goreng mekar di rumah.', 'Rengginang Comel Mentah Siap Goreng Desa Ekang Anculai', 'Dapur Rub & UMKM Desa Ekang Anculai', 'published', '2026-08-22 23:50:00') ON CONFLICT DO NOTHING;
INSERT INTO galleries (id, judul, kategori, image, caption, alt, sumber, status, created_at) VALUES ('gal-teko-kayangan', 'Monumen Air Mancur Teko Kayangan', 'Budaya', '/uploads/galeri/teko-kayangan.webp', 'Monumen air mancur Teko Kayangan yang unik di ruang terbuka hijau Desa Wisata Ekang Anculai, menjadi spot foto ikonik dan ruang kreativitas masyarakat.', 'Monumen Air Mancur Teko Kayangan Desa Wisata Ekang Anculai', 'Dokumentasi Pengelola Desa Wisata Ekang', 'published', '2026-08-22 23:50:00') ON CONFLICT DO NOTHING;
INSERT INTO galleries (id, judul, kategori, image, caption, alt, sumber, status, created_at) VALUES ('gal-mangrove-dermaga', 'Dermaga Boardwalk Susur Hutan Mangrove', 'Mangrove', '/uploads/galeri/ekang-mangrove-dermaga.webp', 'Dermaga dan jembatan boardwalk kayu menuju perahu wisata susur sungai dan eksplorasi hutan mangrove Desa Ekang Anculai.', 'Dermaga dan Jembatan Kayu Boardwalk Susur Hutan Mangrove Desa Ekang Anculai', 'Dokumentasi Pengelola Desa Wisata Ekang', 'published', '2026-08-22 23:50:00') ON CONFLICT DO NOTHING;
INSERT INTO galleries (id, judul, kategori, image, caption, alt, sumber, status, created_at) VALUES ('gal-1787413618250', 'Kesenian Kuda Kepang', 'Aktivitas Masyarakat', '/uploads/galleries/img-galleries-1787413641042-ef0ceb30235c5978.webp', 'Dokumentasi atraksi kesenian tradisional Kuda Kepang di Desa Ekang Anculai.', 'Kesenian Tradisional Kuda Kepang Desa Ekang Anculai', 'Pengelola Desa Wisata Ekang', 'published', '2026-08-22 23:50:00') ON CONFLICT DO NOTHING;
INSERT INTO galleries (id, judul, kategori, image, caption, alt, sumber, status, created_at) VALUES ('gal-1', 'Ekang Mangrove Park', 'Mangrove', '/src/assets/ekang-mangrove.png', 'Jalur boardwalk kayu menyusuri hutan bakau alami berbasis konservasi di Desa Ekang Anculai.', 'Ekowisata Ekang Mangrove Park Teluk Sebong Bintan', '', 'published', '2026-08-22 17:03:32') ON CONFLICT DO NOTHING;
INSERT INTO galleries (id, judul, kategori, image, caption, alt, sumber, status, created_at) VALUES ('gal-2', 'Rumah Batik Bintan', 'Batik', '/src/assets/ekang-batik.png', 'Galeri edukasi dan produksi kain batik khas Bintan hasil karya perajin lokal desa.', 'Pusat Edukasi Rumah Batik Bintan Ekang Anculai', '', 'published', '2026-08-22 17:03:39') ON CONFLICT DO NOTHING;
INSERT INTO galleries (id, judul, kategori, image, caption, alt, sumber, status, created_at) VALUES ('gal-3', 'Aktivitas Kebun Masyarakat', 'Perkebunan', '/src/assets/ekang-agrowisata.jpg', 'Masyarakat desa mengolah lahan perkebunan ubi dan pisang secara berkelanjutan.', 'Aktivitas Perkebunan Masyarakat Desa Ekang Anculai', '', 'published', '2026-08-22 17:03:46') ON CONFLICT DO NOTHING;
INSERT INTO galleries (id, judul, kategori, image, caption, alt, sumber, status, created_at) VALUES ('gal-4', 'Sanggar Seni Reog Sedulur Manunggal Fersi Kendang Kempul', 'Budaya', '/uploads/galeri/ekang-reog.webp', 'Suasana latihan dan pelestarian seni tradisional Reog Ponorogo di Sanggar Seni Reog Sedulur Manunggal Fersi Kendang Kempul Desa Ekang Anculai.', 'Sanggar Seni Reog Sedulur Manunggal Fersi Kendang Kempul Desa Ekang Anculai', 'Sanggar Seni Reog Sedulur Manunggal Fersi Kendang Kempul', 'published', '2026-08-22 17:03:53') ON CONFLICT DO NOTHING;
INSERT INTO galleries (id, judul, kategori, image, caption, alt, sumber, status, created_at) VALUES ('gal-5', 'Kuliner Tradisional & Masakan Khas Desa', 'Gastronomi', '/src/assets/ekang-kuliner.png', 'Sajian kuliner rumahan masyarakat khas desa dan hidangan tradisional autentik Ekang Anculai.', 'Kuliner Gastronomi Masyarakat Ekang Anculai', '', 'published', '2026-08-22 17:04:00') ON CONFLICT DO NOTHING;
INSERT INTO galleries (id, judul, kategori, image, caption, alt, sumber, status, created_at) VALUES ('gal-reog-gamelan', 'Penabuh Gamelan & Kendang Kempul Reog', 'Budaya', '/uploads/galeri/reog-kendang-kempul.webp', 'Para pemuda dan seniman desa memainkan irama musik gamelan, gong, dan kendang kempul mengiringi pementasan Reog Sedulur Manunggal.', 'Penabuh Gamelan dan Kendang Kempul Sanggar Seni Reog Ekang Anculai', 'Sanggar Seni Reog Sedulur Manunggal Fersi Kendang Kempul', 'published', '2026-08-23 00:15:00') ON CONFLICT DO NOTHING;
INSERT INTO galleries (id, judul, kategori, image, caption, alt, sumber, status, created_at) VALUES ('gal-kkn-volly', 'Gotong Royong Lapangan Volly Bersama KKN 45 UMRAH', 'Aktivitas', '/uploads/galeri/ekang-gotong-royong-kkn.webp', 'Mahasiswa KKN 45 Universitas Maritim Raja Ali Haji (UMRAH) bersama warga dan pemuda desa bergotong royong membersihkan lapangan voli dan saluran drainase di Desa Ekang Anculai.', 'Aksi Gotong Royong Membersihkan Lapangan Volly Bersama Mahasiswa KKN 45 UMRAH Ekang Anculai', 'Dokumentasi Mahasiswa KKN 45 UMRAH & Pemdes Ekang Anculai', 'published', '2026-08-23 00:50:00') ON CONFLICT DO NOTHING;

-- Data for faqs (4 rows)
INSERT INTO faqs (id, pertanyaan, jawaban, kategori, status, created_at) VALUES ('faq-1', 'Bagaimana cara menuju Desa Wisata Ekang Anculai dari Singapura / Batam?', 'Dari Singapura, naik ferry ke Terminal Bandar Bentan Telani (BBT) Lagoi Bintan (45 menit perjalanan ferry). Dari BBT Lagoi, Desa Ekang Anculai berjarak 15 menit berkendara. Dari Batam, naik ferry ke Pelabuhan Roro Tanjung Uban, dilanjutkan 25 menit perjalanan darat.', 'Umum', 'published', '2026-08-21 17:26:19') ON CONFLICT DO NOTHING;
INSERT INTO faqs (id, pertanyaan, jawaban, kategori, status, created_at) VALUES ('faq-2', 'Bagaimana konsep Homestay Rumah Warga di Ekang Anculai?', 'Program Homestay Rumah Warga dikembangkan agar wisatawan dapat menginap di rumah masyarakat yang menyediakan kamar untuk tamu, makan bersama warga, dan mengenal aktivitas desa secara langsung.', 'Umum', 'published', '2026-08-21 17:26:19') ON CONFLICT DO NOTHING;
INSERT INTO faqs (id, pertanyaan, jawaban, kategori, status, created_at) VALUES ('faq-3', 'Metode pembayaran apa saja yang diterima di desa?', 'Transaksi di Rumah Batik Bintan dan stand UMKM desa mendukung pembayaran non-tunai via QRIS (BCA, GoPay, OVO, ShopeePay, Dana, dll) serta pembayaran tunai Rupiah (IDR).', 'Umum', 'published', '2026-08-21 17:26:19') ON CONFLICT DO NOTHING;
INSERT INTO faqs (id, pertanyaan, jawaban, kategori, status, created_at) VALUES ('faq-4', 'Apakah ada program edukasi lingkungan dan membatik?', 'Ada, wisatawan dapat mengikuti edukasi lingkungan di Ekang Mangrove Park dan praktik membatik canting di Rumah Batik Bintan bersama perajin lokal.', 'Umum', 'published', '2026-08-21 17:26:19') ON CONFLICT DO NOTHING;

-- Data for cbt_experiences (8 rows)
INSERT INTO cbt_experiences (id, step, title, "desc", image, status, created_at) VALUES ('cbt-1', 1, 'CREATIVE EXPERIENCE', 'Belajar membatik bersama pengrajin lokal.', '/src/assets/ekang-batik.png', 'published', '2026-08-21 17:26:19') ON CONFLICT DO NOTHING;
INSERT INTO cbt_experiences (id, step, title, "desc", image, status, created_at) VALUES ('cbt-2', 2, 'VILLAGE FARMING', 'Beraktivitas di kebun bersama masyarakat.', '/src/assets/ekang-agrowisata.jpg?t=1787332166566', 'published', '2026-08-21 17:26:19') ON CONFLICT DO NOTHING;
INSERT INTO cbt_experiences (id, step, title, "desc", image, status, created_at) VALUES ('cbt-3', 3, 'LOCAL GASTRONOMY', 'Mengenal pangan dan kuliner lokal.', '/src/assets/ekang-kuliner.png?t=1787332171973', 'published', '2026-08-21 17:26:19') ON CONFLICT DO NOTHING;
INSERT INTO cbt_experiences (id, step, title, "desc", image, status, created_at) VALUES ('cbt-4', 4, 'LOCAL CRAFT', 'Mengenal kreativitas & produk kerajinan desa.', '/src/assets/village-ekang-anculai.jpg?t=1787332176229', 'published', '2026-08-21 17:26:19') ON CONFLICT DO NOTHING;
INSERT INTO cbt_experiences (id, step, title, "desc", image, status, created_at) VALUES ('cbt-5', 5, 'NATURE EXPERIENCE', 'Mengenal ekosistem mangrove dan lingkungan pesisir.', '/src/assets/ekang-mangrove.png?t=1787332173539', 'published', '2026-08-21 17:26:19') ON CONFLICT DO NOTHING;
INSERT INTO cbt_experiences (id, step, title, "desc", image, status, created_at) VALUES ('cbt-6', 6, 'CULTURAL EXPERIENCE', 'Mengenal seni, tradisi, cerita rakyat, dan budaya Melayu.', '/src/assets/ekang-reog.png?t=1787332175440', 'published', '2026-08-21 17:26:19') ON CONFLICT DO NOTHING;
INSERT INTO cbt_experiences (id, step, title, "desc", image, status, created_at) VALUES ('cbt-7', 7, 'VILLAGE HOMESTAY', 'Merasakan pengalaman tinggal dan berinteraksi dengan keluarga masyarakat.', '/src/assets/village-ekang-anculai.jpg?t=1787332176229', 'published', '2026-08-21 17:26:19') ON CONFLICT DO NOTHING;
INSERT INTO cbt_experiences (id, step, title, "desc", image, status, created_at) VALUES ('cbt-8', 8, 'LOCAL PRODUCT', 'Mengenal dan membeli produk masyarakat.', '/src/assets/village-ekang-anculai.jpg?t=1787332176229', 'published', '2026-08-21 17:26:19') ON CONFLICT DO NOTHING;

-- Data for reviews (3 rows)
INSERT INTO reviews (id, nama, asal, tipe_wisatawan, rating, komentar, tanggal, avatar, status, created_at) VALUES ('rev-1', 'Michael & Sarah Jenkins', 'Singapura', 'Mancanegara', 5, 'Pengalaman tinggal bersama masyarakat Ekang Anculai sungguh berkesan! Hanya 15 menit dari Lagoi Ferry Terminal, suasananya sangat tenang, autentik, dan ramah.', '12 Juli 2026', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80', 'approved', '2026-08-21 17:26:19') ON CONFLICT DO NOTHING;
INSERT INTO reviews (id, nama, asal, tipe_wisatawan, rating, komentar, tanggal, avatar, status, created_at) VALUES ('rev-2', 'Hendra Wijaya & Keluarga', 'Batam, Kepri', 'Keluarga', 5, 'Desa wisata yang sangat bersih dan asri. Belajar membatik di Rumah Batik Bintan sangat edukatif untuk anak-anak. Rengginang Comel dan masakan rumahan khas desanya sangat nikmat!', '28 Juni 2026', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80', 'approved', '2026-08-21 17:26:19') ON CONFLICT DO NOTHING;
INSERT INTO reviews (id, nama, asal, tipe_wisatawan, rating, komentar, tanggal, avatar, status, created_at) VALUES ('rev-3', 'Nadia Rahmawati', 'Jakarta Selatan', 'Pasangan', 5, 'Ekowisata mangrove-nya tenang sekali. Pemandu lokal ramah dan cerita kehidupan desa sangat menginspirasi. Tempat pemulihan jiwa di akhir pekan!', '15 Mei 2026', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80', 'approved', '2026-08-21 17:26:19') ON CONFLICT DO NOTHING;
