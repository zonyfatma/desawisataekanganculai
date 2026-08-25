import {
  a as objectType,
  i as numberType,
  n as enumType,
  o as stringType,
  r as literalType,
  s as unknownType,
  t as arrayType,
} from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/schemas-DIbXu2MH.js
var ekang_mangrove_dermaga_default = "/assets/ekang-mangrove-dermaga-DXReJdE4.jpg";
var reog_kendang_kempul_default = "/assets/reog-kendang-kempul-BZGq85o6.jpg";
var rengginang_sajian_default = "/assets/rengginang-sajian-fz87gqiT.jpg";
var rengginang_kemasan_3_default = "/assets/rengginang-kemasan-3-TqEw9x0R.jpg";
var rengginang_kemasan_label_default = "/assets/rengginang-kemasan-label--H5bYFYt.jpg";
var rengginang_kemasan_mentah_default = "/assets/rengginang-kemasan-mentah-DonzhfHS.jpg";
var kegiatan_batik_1_default = "/assets/kegiatan-batik-1-C9qFFiFn.jpg";
var kegiatan_batik_2_default = "/assets/kegiatan-batik-2-w4bz9jCL.jpg";
var kegiatan_batik_3_default = "/assets/kegiatan-batik-3-2v2rOTsT.jpg";
var teko_kayangan_default = "/assets/teko-kayangan-BnNeu7Ja.jpg";
var ekang_gotong_royong_kkn_default = "/assets/ekang-gotong-royong-kkn-T4EIBh4a.jpg";
var ekangAnculai = teko_kayangan_default;
var ekangAgrowisata = teko_kayangan_default;
var ekangHomestay = teko_kayangan_default;
var ekangMangrove = ekang_mangrove_dermaga_default;
var ekangBatik = kegiatan_batik_1_default;
var ekangReog = reog_kendang_kempul_default;
var ekangKuliner = rengginang_sajian_default;
var klasifikasiInfo = {
  Mandiri: {
    label: "Desa Wisata Mandiri",
    ringkas: "Pengelolaan mandiri & jejaring luas",
    deskripsi:
      "Desa wisata dengan inovasi tata kelola mandiri berbasis masyarakat, kemitraan pariwisata yang berjalan, serta penerapan standar pelestarian lingkungan.",
    kriteria: [
      "Pengelola Wisata / BUMDes aktif & terstruktur",
      "Kemitraan dengan industri pariwisata",
      "Kanal promosi & reservasi mandiri",
      "Kunjungan wisatawan terdata berkala",
    ],
    badgeClass: "bg-amber-500/15 text-amber-700 dark:text-amber-300 ring-1 ring-amber-500/40",
    dotClass: "bg-amber-500",
  },
  Maju: {
    label: "Desa Wisata Maju",
    ringkas: "Kelembagaan kuat & produk terstruktur",
    deskripsi:
      "Masyarakat aktif mengelola potensi lokal, kelembagaan desa berjalan baik, serta sarana & paket wisata telah ditata rapi.",
    kriteria: [
      "Paket & atraksi wisata terkelola",
      "Penginapan / homestay terverifikasi",
      "Pencatatan kunjungan rutin",
      "Sarana pendukung pariwisata memadai",
    ],
    badgeClass:
      "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 ring-1 ring-emerald-500/40",
    dotClass: "bg-emerald-500",
  },
  Berkembang: {
    label: "Desa Wisata Berkembang",
    ringkas: "Potensi lokal tergarap & terus bertumbuh",
    deskripsi:
      "Desa dengan potensi alam, pertanian, maupun budaya yang terus dikembangkan bersama masyarakat dan pengelola setempat.",
    kriteria: [
      "Atraksi utama dikelola warga setempat",
      "Sarana dasar pariwisata tersedia",
      "Kegiatan promosi desa aktif",
      "Pendampingan SDM berkelanjutan",
    ],
    badgeClass: "bg-sky-500/15 text-sky-700 dark:text-sky-300 ring-1 ring-sky-500/40",
    dotClass: "bg-sky-500",
  },
  Rintisan: {
    label: "Desa Wisata Rintisan",
    ringkas: "Potensi awal & pembinaan masyarakat",
    deskripsi:
      "Desa dengan potensi wisata yang sedang dirintis, didukung kesadaran warga dan pembinaan dari pemerintah daerah.",
    kriteria: [
      "Identifikasi potensi alam/budaya",
      "Kelembagaan Pengelola Wisata dalam penguatan",
      "Kunjungan wisatawan skala terbatas",
      "Pelatihan & pendampingan rutin",
    ],
    badgeClass: "bg-slate-500/15 text-slate-700 dark:text-slate-300 ring-1 ring-slate-500/40",
    dotClass: "bg-slate-400",
  },
};
var provinsiList = ["Kepulauan Riau"];
var WHATSAPP_NUMBER = "6283166341280";
var RUMAH_BATIK_URL = "https://www.bintankab.go.id/";
var YOUTUBE_OFFICIAL_ID = "XnT6XnlvEoA";
var YOUTUBE_OFFICIAL_URL = `https://www.youtube.com/watch?v=${YOUTUBE_OFFICIAL_ID}`;
var galeriDataset = [
  {
    id: "gal-1",
    judul: "Ekang Mangrove Park",
    kategori: "Mangrove",
    image: ekangMangrove,
    caption:
      "Keasrian kanopi hutan bakau alami dan pohon mangrove berbuah di perairan Desa Ekang Anculai.",
    alt: "Ekowisata Hutan Mangrove Alami Desa Ekang Anculai",
    sumber: "Dokumentasi Pengelola Desa Wisata Ekang",
    sumberUrl: "https://jadesta.kemenparekraf.go.id/desa/ekang",
  },
  {
    id: "gal-2",
    judul: "Rumah Batik Bintan",
    kategori: "Batik",
    image: ekangBatik,
    caption: "Galeri edukasi dan produksi kain batik khas Bintan hasil karya perajin lokal desa.",
    alt: "Pusat Edukasi Rumah Batik Bintan Ekang Anculai",
    sumber: "Pemerintah Kabupaten Bintan",
    sumberUrl: "https://www.bintankab.go.id/",
  },
  {
    id: "gal-3",
    judul: "Perkebunan Sayur Masyarakat",
    kategori: "Perkebunan",
    image: ekangAgrowisata,
    caption:
      "Lahan perkebunan sayuran dan tanaman pangan masyarakat Desa Ekang Anculai dengan sistem lanjaran tradisional.",
    alt: "Perkebunan Sayur dan Tanaman Pangan Masyarakat Desa Ekang Anculai",
    sumber: "Dokumentasi Pengelola Desa Wisata Ekang",
    sumberUrl: "https://jadesta.kemenparekraf.go.id/desa/ekang",
  },
  {
    id: "gal-4",
    judul: "Sanggar Seni Reog Sedulur Manunggal Fersi Kendang Kempul",
    kategori: "Budaya",
    image: ekangReog,
    caption:
      "Suasana latihan dan pelestarian seni tradisional Reog Ponorogo di Sanggar Seni Reog Sedulur Manunggal Fersi Kendang Kempul Desa Ekang Anculai.",
    alt: "Sanggar Seni Reog Sedulur Manunggal Fersi Kendang Kempul Desa Ekang Anculai",
    sumber: "Sanggar Seni Reog Sedulur Manunggal Fersi Kendang Kempul",
    sumberUrl: "https://desaekanganculai.bintankab.go.id/",
  },
  {
    id: "gal-5",
    judul: "Kuliner Tradisional & Masakan Khas Desa",
    kategori: "Gastronomi",
    image: ekangKuliner,
    caption:
      "Sajian kuliner rumahan masyarakat khas desa dan hidangan tradisional autentik Ekang Anculai.",
    alt: "Kuliner Gastronomi Masyarakat Ekang Anculai",
    sumber: "Pemerintah Desa Ekang Anculai & Media Daerah",
    sumberUrl: "https://bursakota.co.id/",
  },
  {
    id: "gal-6",
    judul: "Homestay Rumah Warga",
    kategori: "Homestay",
    image: ekangHomestay,
    caption: "Pengalaman tinggal bersama warga lokal untuk mengenal kehidupan dan budaya desa.",
    alt: "Konsep Homestay Rumah Warga Desa Ekang Anculai",
    sumber: "Website Resmi Desa Wisata Ekang",
    sumberUrl: "https://jadesta.kemenparekraf.go.id/desa/ekang",
  },
  {
    id: "gal-7",
    judul: "Danau Alami & Suasana Asri Desa",
    kategori: "Alam",
    image: ekangAnculai,
    caption: "Pemandangan alam pedesaan Ekang Anculai yang hijau, tenang, dan ramah lingkungan.",
    alt: "Pemandangan Alam Asri Desa Wisata Ekang Anculai",
    sumber: "Pemerintah Desa Ekang Anculai",
    sumberUrl: "https://jadesta.kemenparekraf.go.id/desa/ekang",
  },
  {
    id: "gal-8",
    judul: "Gotong Royong & Aktivitas Warga",
    kategori: "Aktivitas Masyarakat",
    image: ekangAgrowisata,
    caption: "Keterlibatan aktif warga desa dalam kegiatan kemasyarakatan dan pembangunan desa.",
    alt: "Keterlibatan Masyarakat dalam Kegiatan Desa Ekang Anculai",
    sumber: "Pemerintah Desa Ekang Anculai",
    sumberUrl: "https://desaekanganculai.bintankab.go.id/",
  },
  {
    id: "gal-9",
    judul: "Musyawarah & Perencanaan Desa 2026",
    kategori: "Kegiatan Desa",
    image: ekangAnculai,
    caption:
      "Musyawarah Desa perencanaan pembangunan dan pengelolaan pariwisata berbasis masyarakat.",
    alt: "Kegiatan Musyawarah Desa Ekang Anculai 2026",
    sumber: "Pemerintah Desa Ekang Anculai",
    sumberUrl: "https://desaekanganculai.bintankab.go.id/",
  },
  {
    id: "gal-batik-keg-1",
    judul: "Pameran Karya Membatik Wisatawan",
    kategori: "Batik",
    image: kegiatan_batik_1_default,
    caption:
      "Wisatawan bangga memperlihatkan hasil karya batik tulis dan pewarnaan tie-dye buatan sendiri di Rumah Batik Bintan.",
    alt: "Pameran Hasil Karya Membatik Wisatawan di Rumah Batik Bintan Ekang Anculai",
    sumber: "Dokumentasi Rumah Batik Bintan & BAZNAS",
    sumberUrl: "https://baznas.go.id/",
  },
  {
    id: "gal-batik-keg-2",
    judul: "Praktik Mencanting Batik Tradisional",
    kategori: "Kegiatan Desa",
    image: kegiatan_batik_2_default,
    caption:
      "Suasana workshop membatik interaktif: wisatawan belajar mencanting dengan malam panas bersama perajin lokal desa.",
    alt: "Workshop Mencanting Batik Tradisional Bersama Perajin Ekang Anculai",
    sumber: "Dokumentasi Rumah Batik Bintan & Pemkab Bintan",
    sumberUrl: "https://www.bintankab.go.id/",
  },
  {
    id: "gal-batik-keg-3",
    judul: "Workshop Pewarnaan Kain Batik",
    kategori: "Aktivitas Masyarakat",
    image: kegiatan_batik_3_default,
    caption:
      "Wisatawan mancanegara mempraktikkan proses pewarnaan kain batik menggunakan pemidangan di Rumah Batik Bintan.",
    alt: "Workshop Pewarnaan Batik Wisatawan Mancanegara Ekang Anculai",
    sumber: "Dokumentasi Rumah Batik Bintan & Pengelola Wisata",
    sumberUrl: "https://www.bintankab.go.id/",
  },
  {
    id: "gal-rengginang-1",
    judul: "Sajian Rengginang Comel Warna-Warni",
    kategori: "Gastronomi",
    image: rengginang_sajian_default,
    caption:
      "Sajian Rengginang Comel renyah aneka warna olahan beras ketan alami karya UMKM Dapur Rub Desa Ekang Anculai.",
    alt: "Sajian Rengginang Comel Aneka Warna Khas Desa Ekang Anculai",
    sumber: "Dapur Rub & UMKM Desa Ekang Anculai",
    sumberUrl: "https://desaekanganculai.bintankab.go.id/",
  },
  {
    id: "gal-rengginang-2",
    judul: "Kemasan Rengginang Comel Stand Pouch",
    kategori: "Gastronomi",
    image: rengginang_kemasan_3_default,
    caption: "Kemasan higienis Rengginang Comel siap santap dan oleh-oleh khas desa wisata.",
    alt: "Kemasan Rengginang Comel Stand Pouch Higienis",
    sumber: "Dapur Rub & UMKM Desa Ekang Anculai",
    sumberUrl: "https://desaekanganculai.bintankab.go.id/",
  },
  {
    id: "gal-rengginang-3",
    judul: "Rengginang Comel Bersertifikat Halal",
    kategori: "Gastronomi",
    image: rengginang_kemasan_label_default,
    caption:
      "Produk Rengginang Comel dengan izin legalitas usaha lengkap, NPWP, dan sertifikasi Halal resmi.",
    alt: "Kemasan Rengginang Comel Bersertifikat Halal Dapur Rub",
    sumber: "Dapur Rub & UMKM Desa Ekang Anculai",
    sumberUrl: "https://desaekanganculai.bintankab.go.id/",
  },
  {
    id: "gal-rengginang-4",
    judul: "Rengginang Comel Siap Goreng",
    kategori: "Gastronomi",
    image: rengginang_kemasan_mentah_default,
    caption:
      "Kemasan rengginang mentah kering berkualitas hasil penjemuran alami siap goreng mekar di rumah.",
    alt: "Rengginang Comel Mentah Siap Goreng Desa Ekang Anculai",
    sumber: "Dapur Rub & UMKM Desa Ekang Anculai",
    sumberUrl: "https://desaekanganculai.bintankab.go.id/",
  },
  {
    id: "gal-teko-kayangan",
    judul: "Monumen Air Mancur Teko Kayangan",
    kategori: "Budaya",
    image: teko_kayangan_default,
    caption:
      "Monumen air mancur Teko Kayangan yang unik di ruang terbuka hijau Desa Wisata Ekang Anculai, menjadi spot foto ikonik dan ruang kreativitas masyarakat.",
    alt: "Monumen Air Mancur Teko Kayangan Desa Wisata Ekang Anculai",
    sumber: "Dokumentasi Pengelola Desa Wisata Ekang",
    sumberUrl: "https://desaekanganculai.bintankab.go.id/",
  },
  {
    id: "gal-mangrove-dermaga",
    judul: "Dermaga Boardwalk Susur Hutan Mangrove",
    kategori: "Mangrove",
    image: ekang_mangrove_dermaga_default,
    caption:
      "Dermaga dan jembatan boardwalk kayu menuju perahu wisata susur sungai dan eksplorasi hutan mangrove Desa Ekang Anculai.",
    alt: "Dermaga dan Jembatan Kayu Boardwalk Susur Hutan Mangrove Desa Ekang Anculai",
    sumber: "Dokumentasi Pengelola Desa Wisata Ekang",
    sumberUrl: "https://jadesta.kemenparekraf.go.id/desa/ekang",
  },
  {
    id: "gal-reog-gamelan",
    judul: "Penabuh Gamelan & Kendang Kempul Reog",
    kategori: "Budaya",
    image: reog_kendang_kempul_default,
    caption:
      "Para pemuda dan seniman desa memainkan irama musik gamelan, gong, dan kendang kempul mengiringi pementasan Reog Sedulur Manunggal.",
    alt: "Penabuh Gamelan dan Kendang Kempul Sanggar Seni Reog Ekang Anculai",
    sumber: "Sanggar Seni Reog Sedulur Manunggal Fersi Kendang Kempul",
    sumberUrl: "https://desaekanganculai.bintankab.go.id/",
  },
  {
    id: "gal-kkn-volly",
    judul: "Membersihkan Lapangan Volly Bersama Mahasiswa KKN 45 UMRAH",
    kategori: "Kegiatan Desa",
    image: ekang_gotong_royong_kkn_default,
    caption:
      "Membersihkan Lapangan Volly bersama mahasiswa UMRAH KKN kelompok 45 Ekang Anculai 2026",
    alt: "Membersihkan Lapangan Volly bersama mahasiswa UMRAH KKN kelompok 45 Ekang Anculai 2026",
    sumber: "Dokumentasi Mahasiswa KKN 45 UMRAH & Pemdes Ekang Anculai",
    sumberUrl: "https://desaekanganculai.bintankab.go.id/",
  },
];
var officialFullDayPackage = {
  nama: "Paket Wisata Full Day – Desa Wisata Hijau dan Kreatif Ekang Anculai",
  tema: "Experience the Authentic Village Life",
  durasi: "± 8 jam",
  waktu: "09.00–17.00 WIB",
  konsep:
    "Pengalaman wisata berbasis masyarakat yang mengajak wisatawan mengenal kreativitas, pertanian, kuliner, budaya, dan produk lokal Desa Ekang Anculai secara langsung.",
  storytelling:
    "Sehari di Ekang Anculai bukan sekadar perjalanan wisata. Anda diajak mengenal kreativitas, kehidupan petani, cita rasa pangan lokal, budaya Melayu, dan produk masyarakat melalui pengalaman yang dekat dengan kehidupan desa.",
  highlights: [
    {
      icon: "batik",
      label: "Batik Experience",
      sub: "Membatik di Rumah Batik Bintan",
    },
    {
      icon: "farm",
      label: "Village Farming",
      sub: "Berkebun Bersama Masyarakat",
    },
    {
      icon: "culinary",
      label: "Local Gastronomy",
      sub: "Menikmati Kuliner Lokal",
    },
    {
      icon: "culture",
      label: "Malay Culture",
      sub: "Budaya yang Hadir di Berbagai Sudut Desa",
    },
    {
      icon: "umkm",
      label: "Local UMKM",
      sub: "Belanja Produk UMKM & Penutupan",
    },
  ],
  rangkaian: [
    {
      num: "01",
      waktu: "09.00–11.00",
      durasi: "2 jam",
      judul: "Membatik di Rumah Batik Bintan",
      kategori: "Creative Experience",
      icon: "batik",
      deskripsi:
        "Perjalanan dimulai dengan penyambutan dan pengenalan batik khas Bintan di Rumah Batik Bintan. Wisatawan kemudian diajak mengenal proses membatik secara langsung melalui praktik bersama pengrajin lokal. Pengalaman ini memberikan kesempatan bagi pengunjung untuk belajar, berkarya, dan membawa pulang hasil karya mereka sebagai suvenir.",
      isi: [
        "Penyambutan dan pengenalan batik khas Bintan.",
        "Praktik membatik bersama pengrajin lokal.",
        "Wisatawan membawa pulang hasil karya sebagai suvenir.",
      ],
      linkRef: {
        nama: "Rumah Batik Bintan – Ikon Kreatif",
        url: RUMAH_BATIK_URL,
      },
    },
    {
      num: "02",
      waktu: "11.00–12.30",
      durasi: "1 jam 30 menit",
      judul: "Berkebun Bersama Masyarakat",
      kategori: "Village Farming Experience",
      icon: "farm",
      deskripsi:
        "Selanjutnya, wisatawan diajak mengunjungi kebun warga untuk mengenal kehidupan pertanian masyarakat Ekang Anculai. Pengunjung dapat mengenal berbagai tanaman sayur dan tanaman lokal serta mengikuti aktivitas menanam atau memanen hasil kebun sesuai dengan musim. Kegiatan ini menjadi kesempatan untuk berinteraksi langsung dengan petani dan merasakan pengalaman kehidupan desa.",
      isi: [
        "Berkunjung ke kebun warga.",
        "Mengenal tanaman sayur dan tanaman lokal.",
        "Menanam atau memanen hasil kebun sesuai musim.",
        "Berinteraksi langsung dengan petani.",
      ],
      linkRef: { nama: "Perkebunan Sayur Masyarakat – Ikon Hijau" },
      note: "Menanam atau memanen hasil kebun dilakukan sesuai musim.",
    },
    {
      num: "03",
      waktu: "12.30–14.00",
      durasi: "1 jam 30 menit",
      judul: "Menikmati Kuliner Lokal",
      kategori: "Gastronomy Experience",
      icon: "culinary",
      deskripsi:
        "Setelah beraktivitas di kebun, wisatawan diajak menikmati makan siang dengan menu khas Ekang Anculai. Hidangan lokal seperti aneka olahan ubi dan daun ubi menjadi bagian dari pengalaman gastronomi desa. Selain menikmati cita rasa pangan lokal, pengunjung juga diajak mengenal cerita dan filosofi yang berkaitan dengan pangan masyarakat setempat.",
      isi: [
        "Makan siang dengan menu khas Ekang Anculai.",
        "Mencicipi aneka olahan ubi dan daun ubi sebagai identitas kuliner desa.",
        "Mengenal cerita dan filosofi pangan lokal.",
      ],
      linkRef: { nama: "Kuliner Lokal & Gastronomi – Cita Rasa Desa" },
    },
    {
      num: "04",
      waktu: "14.00–16.00",
      durasi: "2 jam",
      judul: "Budaya yang Hadir di Berbagai Sudut Desa",
      kategori: "Cultural Experience",
      icon: "culture",
      deskripsi:
        "Perjalanan dilanjutkan dengan mengenal seni dan budaya Melayu yang hadir di berbagai sudut desa, seperti di Rumah Batik Bintan maupun lokasi kegiatan warga. Wisatawan dapat mengenal cerita rakyat, tradisi lokal, dan berinteraksi langsung dengan pelaku seni masyarakat.",
      isi: [
        "Menyaksikan pementasan seni dan budaya di lokasi desa.",
        "Mengenal cerita rakyat dan tradisi lokal.",
        "Berinteraksi dengan pelaku seni dan masyarakat.",
      ],
      linkRef: { nama: "Budaya Desa" },
    },
    {
      num: "05",
      waktu: "16.00–17.00",
      durasi: "1 jam",
      judul: "Belanja Produk UMKM & Penutupan",
      kategori: "Local Product Experience",
      icon: "umkm",
      deskripsi:
        "Menjelang akhir perjalanan, wisatawan diberikan kesempatan untuk mengenal dan berbelanja produk batik serta produk UMKM desa. Pengunjung dapat memilih produk lokal sebagai oleh-oleh sekaligus mengenal hasil kreativitas masyarakat. Kegiatan kemudian ditutup dengan foto bersama serta penyerahan suvenir dan sertifikat pengalaman apabila tersedia.",
      isi: [
        "Berbelanja batik dan produk UMKM desa.",
        "Foto bersama.",
        "Penyerahan suvenir dan sertifikat pengalaman (opsional).",
      ],
      linkRef: { nama: "Produk UMKM Desa" },
      note: "Penyerahan sertifikat pengalaman bersifat opsional.",
    },
  ],
  cbtDescription:
    "Paket ini dirancang untuk menghadirkan pengalaman yang dekat dengan kehidupan masyarakat Ekang Anculai, mulai dari belajar membatik, beraktivitas di kebun, menikmati pangan lokal, mengenal budaya Melayu, hingga melihat dan membeli produk masyarakat.",
  cbtValues: [
    {
      num: "01",
      title: "Belajar dari Masyarakat",
    },
    {
      num: "02",
      title: "Mendukung Produk Lokal",
    },
    {
      num: "03",
      title: "Mengenal Budaya",
    },
    {
      num: "04",
      title: "Menikmati Alam dan Kehidupan Desa",
    },
  ],
  galeri: [
    {
      num: "01",
      kategori: "Batik",
      image: kegiatan_batik_2_default,
      caption: "Pengalaman Edukasi Membatik di Rumah Batik Bintan",
    },
    {
      num: "02",
      kategori: "Perkebunan",
      image: teko_kayangan_default,
      caption: "Aktivitas Berkebun Bersama Petani Masyarakat",
    },
    {
      num: "03",
      kategori: "Kuliner",
      image: rengginang_sajian_default,
      caption: "Sajikan Kuliner & Olahan Pangan Rengginang Comel",
    },
    {
      num: "04",
      kategori: "Budaya",
      image: reog_kendang_kempul_default,
      caption: "Pertunjukan Seni Reog Sedulur Manunggal & Gamelan",
    },
    {
      num: "05",
      kategori: "Oleh-oleh",
      image: rengginang_kemasan_3_default,
      caption: "Belanja Oleh-oleh Rengginang Comel & Produk Kreatif Desa",
    },
  ],
  source: {
    name: "Pemerintah Desa Ekang Anculai & Pengelola Wisata",
    url: "https://desaekanganculai.bintankab.go.id/",
    publishedAt: "2026-07-04",
  },
};
var officialTwoDayPackage = {
  nama: "Paket Wisata 2 Hari 1 Malam",
  tagline: "Live Like a Local in Ekang Anculai",
  durasi: "2 Hari 1 Malam",
  deskripsi:
    "Pengalaman menginap dan berinteraksi lebih dekat dengan masyarakat melalui kegiatan kreatif, pertanian, kuliner, kerajinan, mangrove, budaya, dan kehidupan desa.",
  hari1: {
    judulHeader: "Hari Pertama",
    subHeader: "Creative & Green Experience",
    rangkaian: [
      {
        waktu: "09.00–09.30",
        judul: "Penyambutan dan Welcome Drink",
        kategori: "Welcome Experience",
        icon: "mangrove",
        deskripsi:
          "Pengalaman dimulai dengan penyambutan wisatawan di Desa Ekang Anculai. Wisatawan menikmati welcome drink sebagai pembuka perjalanan sekaligus mendapatkan pengenalan awal mengenai rangkaian pengalaman wisata yang akan dijalani selama berada di desa.",
        isi: ["Penyambutan wisatawan.", "Welcome drink."],
      },
      {
        waktu: "09.30–11.30",
        judul: "Membatik di Rumah Batik Bintan",
        kategori: "Creative Experience",
        icon: "batik",
        deskripsi:
          "Setelah penyambutan, wisatawan diajak mengenal filosofi Batik Bintan dan mencoba proses membatik secara langsung. Bersama pengrajin, pengunjung mendapatkan pengalaman belajar dan berkarya melalui praktik membatik, kemudian membawa pulang hasil karya sebagai bagian dari pengalaman perjalanan.",
        isi: [
          "Mengenal filosofi Batik Bintan.",
          "Praktik membatik.",
          "Membawa pulang hasil karya.",
        ],
      },
      {
        waktu: "11.30–13.00",
        judul: "Berkebun Bersama Masyarakat",
        kategori: "Village Farming Experience",
        icon: "farm",
        deskripsi:
          "Pengunjung kemudian diajak mengenal kehidupan pertanian desa melalui aktivitas berkebun bersama masyarakat. Wisatawan dapat mengenal pertanian desa, mengikuti kegiatan menanam atau memanen sayuran sesuai musim, serta berinteraksi langsung dengan petani lokal.",
        isi: [
          "Mengenal pertanian desa.",
          "Menanam atau memanen sayuran.",
          "Interaksi dengan petani lokal.",
        ],
      },
      {
        waktu: "13.00–14.00",
        judul: "Makan Siang Kuliner Lokal",
        kategori: "Gastronomy Experience",
        icon: "culinary",
        deskripsi:
          "Wisatawan menikmati makan siang dengan cita rasa pangan lokal melalui aneka olahan ubi dan daun ubi serta minuman herbal khas desa. Kegiatan ini menjadi bagian dari pengalaman mengenal kekayaan pangan dan cita rasa lokal Ekang Anculai.",
        isi: ["Aneka olahan ubi dan daun ubi.", "Minuman herbal khas desa."],
      },
      {
        waktu: "14.00–16.00",
        judul: "Workshop Kreatif & Kerajinan Desa",
        kategori: "Creative & Craft Experience",
        icon: "craft",
        deskripsi:
          "Pada sore hari, wisatawan diajak mengenal keterampilan dan kreativitas masyarakat melalui workshop kerajinan desa bersama perajin lokal sebagai pengalaman berkesan dari Ekang Anculai.",
        isi: ["Praktik kerajinan bersama perajin lokal.", "Membuat suvenir kenang-kenangan desa."],
      },
      {
        waktu: "16.00–17.00",
        judul: "Check-in Homestay",
        kategori: "Homestay Rumah Warga",
        icon: "homestay",
        deskripsi:
          "Setelah mengikuti berbagai aktivitas sepanjang hari, wisatawan melakukan check-in di Homestay Rumah Warga. Selain beristirahat, pengunjung mendapatkan kesempatan untuk merasakan suasana tinggal di lingkungan masyarakat dan berinteraksi dengan keluarga tuan rumah.",
        isi: ["Beristirahat.", "Berinteraksi dengan keluarga tuan rumah."],
      },
      {
        waktu: "19.00–20.30",
        judul: "Makan Malam Bersama & Suasana Malam Desa",
        kategori: "Village Night Experience",
        icon: "night",
        deskripsi:
          "Malam hari diisi dengan makan malam bersama sambil menikmati suasana kehidupan desa. Wisatawan dapat menikmati hidangan rumahan dan berbincang bersama masyarakat. Api unggun atau pertunjukan musik akustik dapat dilakukan sebagai aktivitas opsional apabila tersedia.",
        isi: ["Menikmati hidangan rumahan.", "Berbincang bersama masyarakat."],
        note: "Opsional: api unggun atau pertunjukan musik akustik",
      },
    ],
  },
  hari2: {
    judulHeader: "Hari Kedua",
    subHeader: "Nature & Cultural Experience",
    rangkaian: [
      {
        waktu: "07.00–08.00",
        judul: "Sarapan di Homestay",
        kategori: "Homestay Experience",
        icon: "breakfast",
        deskripsi:
          "Memulai hari kedua dengan sarapan di homestay sambil menikmati suasana pagi di lingkungan masyarakat. Kegiatan ini menjadi bagian sederhana dari pengalaman merasakan kehidupan desa sebelum melanjutkan perjalanan.",
        isi: ["Sarapan masakan tradisional tuan rumah."],
      },
      {
        waktu: "08.00–10.00",
        judul: "Eksplorasi Mangrove",
        kategori: "Nature & Conservation Experience",
        icon: "mangrove",
        deskripsi:
          "Perjalanan pagi dilanjutkan dengan eksplorasi kawasan mangrove. Wisatawan diajak menyusuri mangrove sambil mengenal ekosistem pesisir, mengamati flora dan fauna, serta menikmati kesempatan untuk mengabadikan keindahan lingkungan alam sekitar.",
        isi: ["Susur mangrove.", "Edukasi ekosistem pesisir.", "Foto dan pengamatan flora-fauna."],
      },
      {
        waktu: "10.00–11.30",
        judul: "Village Walking Tour",
        kategori: "Village Life Experience",
        icon: "walk",
        deskripsi:
          "Setelah menjelajahi mangrove, wisatawan diajak berjalan menyusuri lingkungan Desa Ekang Anculai untuk mengenal kehidupan masyarakat secara lebih dekat. Dalam perjalanan, pengunjung dapat melihat kebun, mengenal UMKM, serta mengunjungi berbagai titik menarik yang menjadi bagian dari kehidupan desa.",
        isi: [
          "Keliling desa.",
          "Mengenal kehidupan masyarakat.",
          "Mengunjungi kebun, UMKM, dan titik-titik menarik desa.",
        ],
      },
      {
        waktu: "11.30–12.30",
        judul: "Budaya yang Hadir di Berbagai Sudut Desa",
        kategori: "Cultural Experience",
        icon: "culture",
        deskripsi:
          "Pengalaman budaya berlanjut di berbagai titik desa melalui pertunjukan tari, musik tradisional Melayu, dan tradisi lokal. Wisatawan diajak mengenal cerita rakyat dan berinteraksi langsung dengan pelaku seni masyarakat.",
        isi: [
          "Tari atau musik tradisional Melayu.",
          "Cerita rakyat dan budaya lokal.",
          "Interaksi dengan pelaku seni desa.",
        ],
      },
      {
        waktu: "12.30–13.30",
        judul: "Makan Siang",
        kategori: "Gastronomy Experience",
        icon: "dining",
        deskripsi:
          "Setelah mengikuti pengalaman budaya, wisatawan menikmati makan siang sebelum melanjutkan kegiatan terakhir dalam rangkaian perjalanan.",
        isi: ["Makan siang dengan masakan rumahan desa."],
      },
      {
        waktu: "13.30–14.30",
        judul: "Belanja Produk UMKM",
        kategori: "Local Product Experience",
        icon: "shopping",
        deskripsi:
          "Sebagai bagian dari akhir perjalanan, wisatawan diberikan kesempatan untuk mengenal dan membeli berbagai produk lokal masyarakat. Produk yang dapat dikenalkan meliputi Batik Bintan, Rengginang Comel, produk pangan lokal, dan oleh-oleh khas Ekang Anculai.",
        isi: [
          "Batik Bintan",
          "Rengginang Comel (Dapur Rub)",
          "Produk pangan & UMKM lokal",
          "Oleh-oleh khas Ekang Anculai",
        ],
      },
      {
        waktu: "14.30",
        judul: "Penutupan dan Kepulangan",
        kategori: "Farewell Experience",
        icon: "farewell",
        deskripsi:
          "Rangkaian pengalaman wisata di Ekang Anculai ditutup dengan perpisahan dan kepulangan wisatawan setelah mengikuti berbagai aktivitas yang memperkenalkan kreativitas, pertanian, kuliner, kerajinan, alam, budaya, kehidupan masyarakat, dan produk lokal desa.",
        isi: ["Penutupan rangkaian kunjungan 2D1N & kepulangan."],
      },
    ],
  },
  source: {
    name: "Pemerintah Desa Ekang Anculai & Pengelola Wisata",
    url: "https://desaekanganculai.bintankab.go.id/",
    publishedAt: "2026-07-04",
  },
};
var cbtExperiences8 = [
  {
    num: "01",
    step: 1,
    icon: "batik",
    title: "CREATIVE EXPERIENCE",
    desc: "Belajar membatik bersama pengrajin lokal di Rumah Batik Bintan.",
    image: kegiatan_batik_2_default,
  },
  {
    num: "02",
    step: 2,
    icon: "farm",
    title: "VILLAGE FARMING",
    desc: "Beraktivitas di kebun dan mengenal hasil pangan bersama masyarakat.",
    image: teko_kayangan_default,
  },
  {
    num: "03",
    step: 3,
    icon: "culinary",
    title: "KULINER & OLAHAN PANGAN",
    desc: "Sajian kuliner lokal, aneka olahan hasil bumi, dan makanan khas desa.",
    image: rengginang_sajian_default,
  },
  {
    num: "04",
    step: 4,
    icon: "craft",
    title: "KERAJINAN & PRODUK KHAS",
    desc: "Karya kerajinan tangan, batik tulis, dan produk identitas budaya desa.",
    image: kegiatan_batik_1_default,
  },
  {
    num: "05",
    step: 5,
    icon: "mangrove",
    title: "NATURE EXPERIENCE",
    desc: "Mengenal ekosistem mangrove dan susur sungai di Ekang Mangrove Park.",
    image: ekang_mangrove_dermaga_default,
  },
  {
    num: "06",
    step: 6,
    icon: "culture",
    title: "CULTURAL EXPERIENCE",
    desc: "Mengenal seni pementasan Reog Sedulur Manunggal dan tradisi budaya lokal.",
    image: reog_kendang_kempul_default,
  },
  {
    num: "07",
    step: 7,
    icon: "souvenir",
    title: "OLEH-OLEH & PRODUK KREATIF",
    desc: "Produk Rengginang Comel siap santap dan oleh-oleh khas bawa pulang.",
    image: rengginang_kemasan_3_default,
  },
  {
    num: "08",
    step: 8,
    icon: "community",
    title: "KEGIATAN MASYARAKAT",
    desc: "Aksi gotong royong dan kegiatan kolaboratif bersama mahasiswa KKN 45 UMRAH.",
    image: ekang_gotong_royong_kkn_default,
  },
];
var galeri8Categories = [
  {
    num: "01",
    kategori: "Batik",
    icon: "batik",
    image: kegiatan_batik_2_default,
    caption: "Workshop Membatik di Rumah Batik Bintan",
  },
  {
    num: "02",
    kategori: "Perkebunan",
    icon: "farm",
    image: teko_kayangan_default,
    caption: "Aktivitas Berkebun Bersama Masyarakat",
  },
  {
    num: "03",
    kategori: "Kuliner",
    icon: "culinary",
    image: rengginang_sajian_default,
    caption: "Sajian Kuliner & Olahan Pangan Desa",
  },
  {
    num: "04",
    kategori: "Kerajinan",
    icon: "craft",
    image: kegiatan_batik_1_default,
    caption: "Kerajinan & Produk Khas Identitas Desa",
  },
  {
    num: "05",
    kategori: "Mangrove",
    icon: "mangrove",
    image: ekang_mangrove_dermaga_default,
    caption: "Eksplorasi Hutan Mangrove & Boardwalk",
  },
  {
    num: "06",
    kategori: "Budaya",
    icon: "culture",
    image: reog_kendang_kempul_default,
    caption: "Seni Reog Sedulur Manunggal & Gamelan",
  },
  {
    num: "07",
    kategori: "Oleh-oleh",
    icon: "souvenir",
    image: rengginang_kemasan_3_default,
    caption: "Oleh-oleh & Produk Kreatif Siap Beli",
  },
  {
    num: "08",
    kategori: "Kegiatan",
    icon: "community",
    image: ekang_gotong_royong_kkn_default,
    caption: "Gotong Royong Bersama Mahasiswa KKN 45 UMRAH",
  },
];
var DEFAULT_VILLAGE_COORDINATES = [1.0867858876382646, 104.36211358733912];
var villages = [
  {
    slug: "ekang-anculai",
    nama: "Desa Wisata Ekang Anculai",
    tagline: "Where Nature, Culture, Creativity, and Village Life Grow Together.",
    kabupaten: "Kabupaten Bintan",
    provinsi: "Kepulauan Riau",
    pulau: "Sumatera & Kepulauan Riau",
    klasifikasi: "Berkembang",
    adwi: "Peringkat III Desa/Kelurahan Berprestasi Prov. Kepri 2026",
    riwayatAdwi: "300 Besar Anugerah Desa Wisata Indonesia (ADWI) 2021",
    fasilitas: [
      "Homestay Rumah Warga",
      "Ekang Mangrove Park Boardwalk",
      "Rumah Batik Bintan",
      "Perkebunan Sayur Masyarakat",
      "Sentra Gastronomi Desa",
      "Pemandu Lokal Berlisensi",
      "Area Parkir Kendaraan",
      "Warung Desa & Kuliner Lokal",
      "Toilet Umum & Fasilitas Wudhu",
      "Free Wi-Fi Area Balai Desa",
      "Fasilitas Pembayaran QRIS",
    ],
    atraksi: [
      "Rumah Batik Bintan (Ikon Kreatif) — Wisata edukasi membatik canting tulis & cap motif khas Bintan",
      "Teko Kayangan (Ruang Budaya Desa) — Ruang budaya dan kreativitas masyarakat Desa Ekang Anculai sebagai wadah pertunjukan seni, kegiatan budaya, dan aktivitas komunitas",
      "Hutan Mangrove Ekang Mangrove Park (Ikon Alam) — Ekowisata kawasan bakau alami pesisir pedalaman dengan jalur boardwalk kayu ratusan meter, edukasi ekosistem, pengamatan flora-fauna, dan susur sungai",
      "Perkebunan Sayur Masyarakat (Ikon Hijau) — Edukasi pertanian & potensi pengalaman panen warga",
      "Budaya & Kesenian Tradisional (Cita Rasa Budaya) — Pengalaman seni, pementasan Reog Sedulur Manunggal Fersi Kendang Kempul, & tradisi lokal desa",
      "Kuliner Lokal & Gastronomi (Cita Rasa Desa) — Cita rasa olahan ubi, gulai daun ubi, & hasil kebun warga",
      "Homestay Rumah Warga — Konsep pengembangan tempat menginap berbasis masyarakat (CBT)",
    ],
    pokdarwis: "Pengelola Pesona Ekang / Pemdes Ekang Anculai",
    whatsapp: WHATSAPP_NUMBER,
    koordinat: [1.0867858876382646, 104.36211358733912],
    alamat:
      "Jl. Jendral Sudirman, Kp. Sukoharjo, Desa Ekang Anculai, Kec. Teluk Sebong, Kab. Bintan, Kepulauan Riau 29151",
    luasDesa: "5.623 Hektare",
    luasKawasanWisata: "13 Hektare",
    rwCount: 5,
    rtCount: 12,
    jamOperasional: "08.00–17.00 WIB (Kawasan Wisata)",
    waktuTerbaik: "Mei – September (Musim Kemarau & Cuaca Cerah)",
    email: "reservation@desawisataekanganculai.id",
    website: "www.desawisataekanganculai.id",
    pemdesWebsite: "https://desaekanganculai.bintankab.go.id/",
    instagram: "@desawisataekang",
    facebook: "Desa Wisata Ekang Anculai",
    tiktok: "@desawisataekang",
    kesenian: [
      "Reog Sedulur Manunggal — Pentas seni tradisional Reog Ponorogo fersi kendang kempul yang digerakkan oleh pemuda-pemudi desa, pernah tampil resmi di Bintan Resorts Lagoi.",
      "Tari Tor-Tor — Kesenian Suku Batak di Ekang Anculai yang menjuarai Pentas Seni Budaya Daerah Kabupaten Bintan.",
      "Sanggar Seni Reog Sedulur Manunggal Fersi Kendang Kempul — Wadah pelestarian seni tradisional kolosal dan pertunjukan berkala warga.",
      "Teko Kayangan — Ruang budaya dan kreativitas masyarakat Desa Ekang Anculai yang menjadi wadah pertunjukan seni, kegiatan budaya, dan aktivitas komunitas.",
    ],
    komoditas: [
      "Hasil Perkebunan Ubi & Pisang — Hasil tani unggulan desa yang diolah menjadi aneka makanan rumahan.",
      "Olahan Ubi Kayu & Pisang — Aneka olahan ubi renyah & masakan rumahan hasil perkebunan warga.",
      "Batik khas Bintan — Produk kerajinan kain batik cap dan tulis hasil kreasi perajin desa.",
    ],
    ekowisataInfo: [
      "Ekang Mangrove Park — Kawasan hutan bakau alami berbasis konservasi & sarana edukasi lingkungan.",
      "Pariwisata Berbasis Masyarakat — Pengalaman interaksi langsung dengan kehidupan harian warga.",
      "Sistem Pengelolaan Sampah Terpadu — Inovasi Bank Sampah Desa menjaga kebersihan lingkungan desa.",
    ],
    transitInfo: [
      {
        id: "tr-lagoi",
        asal: "Dari Lagoi Ferry Terminal (SG)",
        waktuEstimasi: "± 15–20 Menit",
        via: "via Jl. Bintan Resorts",
        mode: "ship",
      },
      {
        id: "tr-rhf",
        asal: "Dari Bandara RHF Tanjungpinang",
        waktuEstimasi: "± 45–50 Menit",
        via: "via Jl. Lintas Barat Bintan",
        mode: "plane",
      },
      {
        id: "tr-roro",
        asal: "Pelabuhan Roro Tanjung Uban",
        waktuEstimasi: "± 25–30 Menit",
        via: "Akses penyeberangan dari Batam",
        mode: "ship",
      },
      {
        id: "tr-tpi",
        asal: "Pelabuhan Sri Bintan Pura TPI",
        waktuEstimasi: "± 50–60 Menit",
        via: "Dari Pusat Kota Tanjungpinang",
        mode: "car",
      },
    ],
    landmarks: [
      {
        id: "lm-desa-wisata",
        nama: "Desa Wisata Ekang Anculai",
        kategori: "Wisata & Budaya",
        lat: 1.0867858876382646,
        lng: 104.36211358733912,
        deskripsi:
          "Kawasan sentra aktivitas desa wisata hijau dan kreatif berbasis masyarakat (CBT).",
        image: ekangAnculai,
        source: {
          name: "Pengelola Desa Wisata Ekang",
          url: "https://desawisataekanganculai.id/",
          publishedAt: "2026-01-10",
          accessedAt: "2026-08-23",
        },
      },
      {
        id: "lm-batik",
        nama: "Rumah Batik Bintan",
        kategori: "Budaya & Craft",
        lat: 1.08625,
        lng: 104.36345,
        deskripsi:
          "Pusat galeri batik khas Bintan serta ruang workshop membatik tulis dan cap bagi wisatawan.",
        image: ekangBatik,
        source: {
          name: "Pemerintah Kabupaten Bintan",
          url: "https://www.bintankab.go.id/",
          publishedAt: "2026-04-12",
          accessedAt: "2026-08-23",
        },
      },
      {
        id: "lm-mangrove",
        nama: "Ekang Mangrove Park",
        kategori: "Ekowisata",
        lat: 1.08437,
        lng: 104.3658,
        deskripsi:
          "Kawasan konservasi dan ekowisata hutan mangrove pesisir dengan jalur susur sungai alami.",
        image: ekangMangrove,
        source: {
          name: "Pemerintah Desa Ekang Anculai",
          url: "https://desaekanganculai.bintankab.go.id/",
          publishedAt: "2026-05-20",
          accessedAt: "2026-08-23",
        },
      },
      {
        id: "lm-teko-kayangan",
        nama: "Teko Kayangan (Ruang Budaya Desa)",
        kategori: "Budaya & Rekreasi",
        lat: 1.0871,
        lng: 104.3615,
        deskripsi:
          "Monumen air mancur & ruang terbuka hijau tempat pertunjukan budaya dan kreativitas warga.",
        image: teko_kayangan_default,
        source: {
          name: "Pengelola Desa Wisata Ekang",
          url: "https://desaekanganculai.bintankab.go.id/",
          publishedAt: "2026-08-23",
          accessedAt: "2026-08-23",
        },
      },
      {
        id: "lm-kantor-desa",
        nama: "Kantor Desa Ekang Anculai",
        kategori: "Fasilitas Publik",
        lat: 1.0856,
        lng: 104.3612,
        deskripsi:
          "Pusat pelayanan administrasi pemerintahan desa dan balai musyawarah masyarakat.",
        image: ekangAnculai,
        source: {
          name: "Pemerintah Desa Ekang Anculai",
          url: "https://desaekanganculai.bintankab.go.id/",
          publishedAt: "2026-08-23",
          accessedAt: "2026-08-23",
        },
      },
      {
        id: "lm-mesjid-baiturrahman",
        nama: "Mesjid Baiturrahman Kp. Sukoharjo",
        kategori: "Tempat Ibadah",
        lat: 1.0875,
        lng: 104.3628,
        deskripsi:
          "Masjid Baiturrahman pusat kegiatan ibadah dan keagamaan warga Kampung Sukoharjo.",
        image: ekangAnculai,
        source: {
          name: "Pengurus Masjid Baiturrahman",
          url: "https://desaekanganculai.bintankab.go.id/",
          publishedAt: "2026-08-23",
          accessedAt: "2026-08-23",
        },
      },
    ],
    kegiatanList: [
      {
        id: "kg-bumdesma-1",
        judul: "Pembagian Sembako dari BUMDesma Sukses Mandiri Kecamatan Teluk Sebong",
        kategori: "Sosial & Bantuan Masyarakat",
        deskripsi:
          "Penyaluran paket sembako dari BUMDesma Sukses Mandiri Kecamatan Teluk Sebong bagi masyarakat Desa Ekang Anculai.",
        tanggal: "26 Februari 2024",
        image: "",
        source: {
          name: "Website Resmi Desa Ekang Anculai",
          url: "https://desaekanganculai.bintankab.go.id/berita/read/pembagian-sembako-dari-bumdesma-sukses-mandiri-kecamatan-teluk-sebong",
          publishedAt: "2024-02-26",
          accessedAt: "2026-08-24",
        },
      },
      {
        id: "kg-musrenbang-1",
        judul: "Musrenbang Desa – Pembahasan Rancangan RKPDes Tahun 2025",
        kategori: "Pemerintahan & Perencanaan",
        deskripsi:
          "Musyawarah Rencana Pembangunan Desa (Musrenbangdesa) dalam rangka pembahasan dan pengesahan rancangan RKPDes Desa Ekang Anculai.",
        tanggal: "14 Oktober 2024",
        image: "",
        source: {
          name: "Website Resmi Desa Ekang Anculai",
          url: "https://desaekanganculai.bintankab.go.id/berita/read/musrenbang-desa-pembahasan-rancangan-rkpdesa-tahun-2025",
          publishedAt: "2024-10-14",
          accessedAt: "2026-08-24",
        },
      },
      {
        id: "kg-siskeudes-1",
        judul: "Pelatihan Sistem Keuangan Desa (Siskeudes) Perangkat Desa Ekang Anculai",
        kategori: "Tata Kelola & Tata Pamong",
        deskripsi:
          "Pelatihan pengelolaan dan pelaporan keuangan desa berbasis aplikasi Siskeudes untuk aparatur Desa Ekang Anculai.",
        tanggal: "18 Mei 2024",
        image: "",
        source: {
          name: "Website Resmi Desa Ekang Anculai",
          url: "https://www.desaekanganculai.bintankab.go.id/berita/read/pelatihan-siskeudes",
          publishedAt: "2024-05-18",
          accessedAt: "2026-08-24",
        },
      },
      {
        id: "kg-semenisasi-1",
        judul: "Pembangunan Semenisasi Jalan Gang Kancil Desa Ekang Anculai",
        kategori: "Infrastruktur Desa",
        deskripsi:
          "Kegiatan pembangunan infrastruktur jaringan jalan semenisasi Gang Kancil untuk kenyamanan akses warga desa.",
        tanggal: "08 Agustus 2024",
        image: "",
        source: {
          name: "Website Resmi Desa Ekang Anculai",
          url: "https://desaekanganculai.bintankab.go.id/berita/read/semenisasi-jalan-gang-kancil",
          publishedAt: "2024-08-08",
          accessedAt: "2026-08-24",
        },
      },
      {
        id: "kg-2026-1",
        judul:
          "Aksi Gotong Royong Membersihkan Lapangan Volly Bersama Mahasiswa KKN 45 Ekang Anculai Universitas Maritim Raja Ali Haji",
        kategori: "Gotong Royong & Kepemudaan",
        deskripsi:
          "Kerja bakti pembersihan dan penataan fasilitas lapangan volly desa bersama mahasiswa UMRAH KKN kelompok 45 Ekang Anculai.",
        tanggal: "22 Agustus 2026",
        image: ekang_gotong_royong_kkn_default,
        source: {
          name: "Mahasiswa KKN 45 UMRAH & Pemdes Ekang Anculai",
          url: "",
          publishedAt: "2026-08-22",
          accessedAt: "2026-08-24",
        },
      },
      {
        id: "kg-2026-3",
        judul:
          "Pentas Seni Budaya Reog Sedulur Manunggal Fersi Kendang Kempul Ekang Anculai di Kawasan Lagoi",
        kategori: "Kesenian Tradisional",
        deskripsi:
          "Atraksi kesenian reog dan kuda kepang sanggar pemuda desa yang tampil memukau menghibur para wisatawan di kawasan Bintan Resorts Lagoi.",
        tanggal: "10 April 2026",
        image: reog_kendang_kempul_default,
        source: {
          name: "Sanggar Seni Sedulur Manunggal & Pemdes",
          url: "",
          publishedAt: "2026-04-10",
          accessedAt: "2026-08-24",
        },
      },
      {
        id: "kg-2026-6",
        judul:
          "Workshop Edukasi Membatik Canting 'Enjoy With Art' di Rumah Batik Bintan Ekang Anculai",
        kategori: "Kriya & Edukasi Warga",
        deskripsi:
          "Pelatihan keterampilan teknik mencanting dan pewarnaan motif batik khas Bintan bagi generasi muda dan perajin binaan di Rumah Batik Bintan.",
        tanggal: "25 Oktober 2025",
        image: kegiatan_batik_1_default,
        source: {
          name: "Rumah Batik Bintan & BAZNAS Bintan",
          url: "",
          publishedAt: "2025-10-25",
          accessedAt: "2026-08-24",
        },
      },
    ],
    umkmList: [
      {
        id: "umkm-kuliner-1",
        nama: "Sajian Rengginang Comel Goreng (Dapur Rub)",
        kategori: "Kuliner & Olahan Pangan",
        deskripsi:
          "Sajian kudapan tradisional rengginang renyah aneka warna dari olahan ketan berkualitas, disajikan hangat sebagai suguhan kuliner khas bagi wisatawan.",
        hargaInfo: "Rp 15.000 – Rp 25.000 / porsi",
        image: rengginang_sajian_default,
        lokasi: "Dapur Rub, Kp. Sukoharjo, Desa Ekang Anculai",
        kontak: WHATSAPP_NUMBER,
        source: {
          name: "Dapur Rub & UMKM Desa Ekang Anculai",
          url: "https://desaekanganculai.bintankab.go.id/",
          publishedAt: "2026-08-22",
          accessedAt: "2026-08-23",
        },
      },
      {
        id: "umkm-kriya-1",
        nama: "Kain Batik Tulis & Cap Motif Khas Bintan",
        kategori: "Kerajinan & Produk Khas",
        deskripsi:
          "Kain batik tulis dan cap eksklusif bermotif biota laut, daun mangrove, dan ornamen Melayu Bintan karya perajin lokal di Rumah Batik Bintan.",
        hargaInfo: "Mulai Rp 150.000 / lembar",
        image: kegiatan_batik_2_default,
        lokasi: "Rumah Batik Bintan, Desa Ekang Anculai",
        kontak: WHATSAPP_NUMBER,
        source: {
          name: "Pemerintah Kabupaten Bintan",
          url: "https://www.bintankab.go.id/",
          publishedAt: "2026-04-10",
          accessedAt: "2026-08-23",
        },
      },
      {
        id: "umkm-oleholeh-1",
        nama: "Rengginang Comel Kemasan Stand Pouch (Dapur Rub)",
        kategori: "Oleh-oleh & Produk Kreatif",
        deskripsi:
          "Rengginang Comel renyah aneka warna siap santap dalam kemasan standing pouch premium, bersertifikat Halal resmi & berizin PIRT, oleh-oleh favorit wisatawan.",
        hargaInfo: "Rp 37.500 (0.5 kg) / Rp 65.000 (1 kg)",
        image: rengginang_kemasan_3_default,
        lokasi: "Kp. Sukoharjo, Desa Ekang Anculai",
        kontak: WHATSAPP_NUMBER,
        source: {
          name: "Dapur Rub & UMKM Desa Ekang Anculai",
          url: "https://desaekanganculai.bintankab.go.id/",
          publishedAt: "2026-08-22",
          accessedAt: "2026-08-23",
        },
      },
    ],
    panduanKunjungan: {
      jamOperasional: "08.00 – 17.00 WIB (Kawasan Wisata)",
      waktuTerbaik: "Mei hingga September untuk aktivitas outdoor dan kunjungan desa.",
      aksesibilitas:
        "15 menit dari Terminal Ferry Bandar Bentan Telani (BBT Lagoi) / 45 menit dari Bandara RHF Tanjungpinang via jalan aspal mulus.",
      etikaKunjungan: [
        "Menjaga kebersihan dan membawa kembali sampah plastik saat menjelajah Mangrove Park.",
        "Menggunakan pakaian sopan dan menghormati adat istiadat warga desa multietnis.",
        "Mendukung ekonomi lokal dengan membeli kain Batik Bintan, Rengginang Comel, dan produk UMKM desa.",
        "Melakukan konfirmasi kunjungan atau program desa terlebih dahulu via Pengelola Wisata.",
      ],
    },
    perbatasan: {
      utara: "Kawasan Pariwisata Bintan Resorts Lagoi",
      selatan: "Desa Sri Bintan, Kec. Teluk Sebong",
      timur: "Kawasan Hutan Lindung Teluk Sebong",
      barat: "Kelurahan Kota Baru, Kec. Teluk Sebong",
    },
    kelembagaan: {
      bumdes:
        "BUMDes Anugrah Ekang Anculai — Pengelola unit usaha pasar desa, air bersih, & kemitraan.",
      pokdarwis:
        "Pengelola Pesona Ekang — Pengelola operasional harian wahana wisata, pemandu & paket reservasi.",
      sanggar:
        "Sanggar Seni Reog Sedulur Manunggal Fersi Kendang Kempul — Wadah pelestarian seni Reog & Kuda Kepang.",
      mitra: "Dinas Kebudayaan & Pariwisata Kab. Bintan & Kemenparekraf RI.",
    },
    reviews: [
      {
        id: "rev-1",
        nama: "Michael & Sarah Jenkins",
        asal: "Singapura",
        rating: 5,
        tanggal: "12 Juli 2026",
        komentar:
          "Pengalaman tinggal bersama masyarakat Ekang Anculai sungguh berkesan! Hanya 15 menit dari Lagoi Ferry Terminal, suasananya sangat tenang, autentik, dan ramah.",
        tipeWisatawan: "Mancanegara",
        avatar:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      },
      {
        id: "rev-2",
        nama: "Hendra Wijaya & Keluarga",
        asal: "Batam, Kepri",
        rating: 5,
        tanggal: "28 Juni 2026",
        komentar:
          "Desa wisata yang sangat bersih dan asri. Belajar membatik di Rumah Batik Bintan sangat edukatif untuk anak-anak. Rengginang Comel dan masakan rumahan khas desanya sangat nikmat!",
        tipeWisatawan: "Keluarga",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      },
      {
        id: "rev-3",
        nama: "Nadia Rahmawati",
        asal: "Jakarta Selatan",
        rating: 5,
        tanggal: "15 Mei 2026",
        komentar:
          "Ekowisata mangrove-nya tenang sekali. Pemandu lokal ramah dan cerita kehidupan desa sangat menginspirasi. Tempat pemulihan jiwa di akhir pekan!",
        tipeWisatawan: "Pasangan",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
      },
    ],
    faqs: [
      {
        pertanyaan: "Bagaimana cara menuju Desa Wisata Ekang Anculai dari Singapura / Batam?",
        jawaban:
          "Dari Singapura, naik ferry ke Terminal Bandar Bentan Telani (BBT) Lagoi Bintan (45 menit perjalanan ferry). Dari BBT Lagoi, Desa Ekang Anculai berjarak 15 menit berkendara. Dari Batam, naik ferry ke Pelabuhan Roro Tanjung Uban, dilanjutkan 25 menit perjalanan darat.",
        kategori: "Transportasi",
      },
      {
        pertanyaan: "Bagaimana konsep Homestay Rumah Warga di Ekang Anculai?",
        jawaban:
          "Program Homestay Rumah Warga dikembangkan agar wisatawan dapat menginap di rumah masyarakat yang menyediakan kamar untuk tamu, makan bersama warga, dan mengenal aktivitas desa secara langsung.",
        kategori: "Akomodasi & Fasilitas",
      },
      {
        pertanyaan: "Metode pembayaran apa saja yang diterima di desa?",
        jawaban:
          "Transaksi di Rumah Batik Bintan dan stand UMKM desa mendukung pembayaran non-tunai via QRIS (BCA, GoPay, OVO, ShopeePay, Dana, dll) serta pembayaran tunai Rupiah (IDR).",
        kategori: "Sistem Pembayaran",
      },
      {
        pertanyaan: "Apakah ada program edukasi lingkungan dan membatik?",
        jawaban:
          "Ada, wisatawan dapat mengikuti edukasi lingkungan di Ekang Mangrove Park dan praktik membatik canting di Rumah Batik Bintan bersama perajin lokal.",
        kategori: "Akomodasi & Fasilitas",
      },
    ],
    deskripsi:
      "Desa Wisata Ekang Anculai terletak di Kecamatan Teluk Sebong, Kabupaten Bintan, Kepulauan Riau. Desa ini menyajikan perpaduan pesona ekowisata mangrove, kehangatan Homestay Rumah Warga, kerajinan Rumah Batik Bintan, pertunjukan budaya, dan kehidupan pertanian masyarakat yang autentik.",
    sejarah:
      "Nama Ekang Anculai berakar dari istilah dialek Tionghoa (Teochew) 'Gek' atau 'Kang' yang merujuk pada alur sungai dan pemukiman awal masyarakat di tepi sungai. Berdiri sebagai daerah pertanian strategis sejak masa kolonial, desa ini berkembang harmonis dihuni masyarakat multietnis. Wilayah desa mengalami pemekaran administratif secara resmi pada tahun 1979 dan 2007. Desa ini kini dikenal luas atas kesuksesan pengembangan ekowisata berbasis masyarakat dan meraih Peringkat III Desa/Kelurahan Berprestasi Tingkat Provinsi Kepulauan Riau Tahun 2026.",
    image: ekangAnculai,
    galeri: [ekangAnculai, ekangMangrove, ekangBatik, ekangReog, ekangKuliner, ekangAgrowisata],
    paket: [
      {
        id: "ekg-fullday-official",
        nama: officialFullDayPackage.nama,
        desa: "Ekang Anculai",
        lokasiSpesifik: "Desa Wisata Ekang Anculai, Teluk Sebong, Bintan",
        durasi: officialFullDayPackage.durasi,
        hargaNum: 0,
        hargaText: "Informasi via Pengelola",
        image: ekangBatik,
        kategori: "Batik & Ekonomi Kreatif",
        highlight: officialFullDayPackage.tema,
        deskripsiLengkap:
          "Pengalaman wisata satu hari yang mengajak wisatawan mengenal kehidupan Desa Ekang Anculai melalui kreativitas, pertanian masyarakat, kuliner lokal, budaya Melayu, serta produk UMKM desa.",
        fasilitas: [
          "Praktik Membatik di Rumah Batik Bintan",
          "Membawa Pulang Hasil Membatik",
          "Kunjungan Kebun & Interaksi Petani",
          "Makan Siang Kuliner Khas Ekang",
          "Seni Budaya Melayu Desa",
          "Pemandu Lokal Wisata",
        ],
        targetVisitor: "Wisatawan Budaya & Edukasi",
        itinerary: officialFullDayPackage.rangkaian.map((r) => ({
          waktu: r.waktu,
          kegiatan: r.judul,
          kategori: r.kategori,
          deskripsi: r.deskripsi,
        })),
        source: officialFullDayPackage.source,
      },
      {
        id: "ekg-2d1n-official",
        nama: officialTwoDayPackage.nama,
        desa: "Ekang Anculai",
        lokasiSpesifik: "Desa Wisata Ekang Anculai, Teluk Sebong, Bintan",
        durasi: officialTwoDayPackage.durasi,
        hargaNum: 0,
        hargaText: "Informasi via Pengelola",
        image: ekangAnculai,
        kategori: "Homestay Rumah Warga",
        highlight: officialTwoDayPackage.tagline,
        deskripsiLengkap: officialTwoDayPackage.deskripsi,
        fasilitas: [
          "Akomodasi Homestay Rumah Warga",
          "Makan Bersama Keluarga Tuan Rumah",
          "Pemandu Lokal Wisata",
          "Workshop Membatik & Kerajinan Desa",
          "Eksplorasi Hutan Mangrove & Village Tour",
        ],
        subHeaderHari1: officialTwoDayPackage.hari1.subHeader,
        subHeaderHari2: officialTwoDayPackage.hari2.subHeader,
        itineraryHari1: officialTwoDayPackage.hari1.rangkaian.map((r) => ({
          waktu: r.waktu,
          kegiatan: r.judul,
          ...(r.kategori ? { kategori: r.kategori } : {}),
          deskripsi: r.deskripsi,
          ...(r.note ? { note: r.note } : {}),
        })),
        itineraryHari2: officialTwoDayPackage.hari2.rangkaian.map((r) => ({
          waktu: r.waktu,
          kegiatan: r.judul,
          ...(r.kategori ? { kategori: r.kategori } : {}),
          deskripsi: r.deskripsi,
        })),
        targetVisitor: "Wisatawan Live-in & CBT",
        source: officialTwoDayPackage.source,
      },
      {
        id: "ekg-mangrove-official",
        nama: "Paket Custom",
        desa: "Ekang Anculai",
        lokasiSpesifik: "Desa Wisata Ekang Anculai, Teluk Sebong, Bintan",
        durasi: "Fleksibel / Sesuai Kebutuhan",
        hargaNum: 0,
        hargaText: "Konsultasi via Pengelola",
        image: ekangMangrove,
        kategori: "Ekowisata & Mangrove",
        highlight: "Bebas Menentukan Durasi, Destinasi, dan Rangkaian Aktivitas Sesuai Keinginan",
        deskripsiLengkap:
          "Paket kunjungan kustom yang fleksibel dirancang khusus untuk memenuhi preferensi Anda atau rombongan. Anda bebas memilih kombinasi destinasi dan aktivitas desa, mulai dari workshop Rumah Batik Bintan, ekowisata mangrove, perkebunan sayur, pertunjukan budaya, kuliner lokal, hingga penginapan Homestay Rumah Warga.",
        fasilitas: [
          "Bebas Pilih Kombinasi Destinasi & Aktivitas Desa",
          "Penyesuaian Durasi Kunjungan (Setengah Hari / 1 Hari / Bermalam)",
          "Penyesuaian Anggaran & Jumlah Anggota Rombongan",
          "Pemandu Lokal Khusus Pendamping Rombongan",
          "Konsultasi Rencana & Itinerary Fleksibel",
        ],
        targetVisitor: "Rombongan, Komunitas, Instansi, & Wisatawan Mandiri",
        itinerary: [
          {
            waktu: "Diskusi",
            kegiatan: "Konsultasi Rencana & Pilihan Aktivitas",
            kategori: "Persiapan",
            deskripsi:
              "Konsultasikan tanggal kunjungan, perkiraan peserta, serta kombinasi aktivitas desa yang Anda inginkan bersama pengelola.",
          },
          {
            waktu: "Personalisasi",
            kegiatan: "Penyusunan Program & Rencana Kunjungan",
            kategori: "Kustomisasi",
            deskripsi:
              "Pengelola menyusun rangkaian acara yang dipersonalisasi sesuai kebutuhan alokasi waktu dan budget Anda.",
          },
          {
            waktu: "Kunjungan",
            kegiatan: "Pelaksanaan Pengalaman Wisata Khusus",
            kategori: "Kunjungan",
            deskripsi:
              "Menikmati pengalaman wisata autentik Desa Ekang Anculai dengan fleksibilitas tinggi dan pendampingan pemandu lokal.",
          },
        ],
        source: {
          name: "Pemerintah Desa Ekang Anculai & Pengelola Wisata",
          url: "https://desaekanganculai.bintankab.go.id/",
          publishedAt: "2026-07-04",
          accessedAt: "2026-08-04",
        },
      },
    ],
    source: {
      name: "Website Resmi Desa Ekang Anculai",
      url: "https://desaekanganculai.bintankab.go.id/profil/sejarah",
      publishedAt: "2026-08-24",
      accessedAt: "2026-08-24",
    },
  },
];
var paketList = villages.flatMap((v) => v.paket);
var statistik = [
  {
    label: "Luas Wilayah Desa",
    value: 5623,
    suffix: " Ha",
    caption: "Sumber: Pemdes Ekang Anculai",
  },
  {
    label: "Potensi CBT Desa",
    value: 7,
    suffix: " Sektor",
    caption: "Batik, Perkebunan, Budaya, Mangrove & Gastronomi",
  },
  {
    label: "Desa Berprestasi Kepri 2026",
    value: 3,
    suffix: " Besar",
    caption: "Peringkat III Prov. Kepulauan Riau",
  },
  {
    label: "Kawasan Ekowisata",
    value: 13,
    suffix: " Ha",
    caption: "Kawasan Wisata Mangrove & Desa",
  },
];
var berita = [
  {
    id: "n-mjnews-1",
    kategori: "Prestasi Provinsi",
    judul:
      "Ekang Anculai dan Tanjung Uban Selatan Raih Penghargaan Desa dan Kelurahan Berprestasi 2026 Tingkat Provinsi",
    ringkas:
      "Desa Ekang Anculai meraih peringkat III se-Kepulauan Riau dalam evaluasi Desa dan Kelurahan Berprestasi Tingkat Provinsi Kepri 2026.",
    tanggal: "15 Juni 2026",
    image: "",
    featured: true,
    source: {
      name: "MJNews",
      url: "https://www.mjnews.id/berita/m-161926/ekang-anculai-dan-tanjung-uban-selatan-raih-penghargaan-desa-dan-kelurahan-berprestasi-2026-tingkat-provinsi/",
      publishedAt: "2026-06-15",
      accessedAt: "2026-08-24",
    },
  },
  {
    id: "n-kompas-1",
    kategori: "Publikasi Nasional",
    judul: "Desa Wisata Anculai di Bintan, Salah Satu Desa Wisata Terbaik di Indonesia",
    ringkas:
      "Liputan Kompas.com mengenai konsep pengembangan ekowisata pedesaan dan daya tarik wisata berbasis masyarakat (CBT) Desa Wisata Ekang Anculai.",
    tanggal: "24 Januari 2021",
    image: "",
    source: {
      name: "Kompas.com",
      url: "https://travel.kompas.com/read/2021/01/24/142700927/desa-wisata-anculai-di-bintan-salah-satu-desa-wisata-terbaik-di-indonesia?page=all",
      publishedAt: "2021-01-24",
      accessedAt: "2026-08-24",
    },
  },
  {
    id: "n-liputan6-1",
    kategori: "Liputan Media",
    judul: "Pesona Keindahan Desa Wisata Ekang Anculai: Rasanya Tak Ingin Berpaling",
    ringkas:
      "Liputan6 mempublikasikan keasrian alam, konsep tempat tinggal D'Bamboo Kamp, dan aktivitas outdoor menarik di Desa Wisata Ekang Anculai.",
    tanggal: "12 April 2022",
    image: "",
    source: {
      name: "Liputan6.com",
      url: "https://www.liputan6.com/lifestyle/read/4935501/pesona-keindahan-desa-wisata-ekang-anculai-rasanya-tak-ingin-berpaling",
      publishedAt: "2022-04-12",
      accessedAt: "2026-08-24",
    },
  },
  {
    id: "n-katakepri-1",
    kategori: "Publikasi Daerah",
    judul: "Desa Wisata Ekang Anculai: Destinasi Wisata yang Wajib Dikunjungi di Pulau Bintan",
    ringkas:
      "Ulasan KataKepri mengenai ragam daya tarik pariwisata terpadu berbasis masyarakat di Desa Wisata Ekang Anculai.",
    tanggal: "21 Maret 2023",
    image: "",
    source: {
      name: "KataKepri",
      url: "https://katakepri.com/2023/03/21/desa-wisata-ekang-anculai-destinasi-wisata-yang-wajib-dikunjungi-di-pulau-bintan/",
      publishedAt: "2023-03-21",
      accessedAt: "2026-08-24",
    },
  },
  {
    id: "n-gnfi-1",
    kategori: "Publikasi Wisata",
    judul: "Desa Wisata Ekang Anculai: Menikmati Glamping hingga Berkuda di Bintan",
    ringkas:
      "Good News From Indonesia mengulas ragam rekreasi keluarga seru mulai dari penginapan glamping, berkuda, hingga jalur wahana ATV di Ekang Anculai.",
    tanggal: "22 April 2026",
    image: "",
    source: {
      name: "Good News From Indonesia",
      url: "https://www.goodnewsfromindonesia.id/2026/04/22/desa-wisata-ekang-anculai-menikmati-glamping-hingga-berkuda-di-bintan",
      publishedAt: "2026-04-22",
      accessedAt: "2026-08-24",
    },
  },
];
var fasilitasMaster = [
  "Homestay Rumah Warga",
  "Wisata Mangrove Boardwalk",
  "Wisata Perkebunan Warga",
  "Workshop Membatik Bintan",
  "Pemandu Lokal Berlisensi",
  "Restoran & Warung Desa",
  "Fasilitas Pembayaran QRIS",
  "Free Wi-Fi",
];
var getVillage = (slug) => villages.find((v) => v.slug === slug);
var PHONE_REGEX = /^(\+?[0-9]{8,18})$/;
var loginInputSchema = objectType({
  username: stringType({ required_error: "Username wajib diisi." })
    .trim()
    .min(3, "Username minimal 3 karakter.")
    .max(50, "Username maksimal 50 karakter."),
  password: stringType({ required_error: "Kata sandi wajib diisi." })
    .trim()
    .min(6, "Kata sandi minimal 6 karakter.")
    .max(100, "Kata sandi maksimal 100 karakter."),
});
var changePasswordInputSchema = objectType({
  token: stringType().optional(),
  oldPassword: stringType({ required_error: "Kata sandi lama wajib diisi." })
    .min(1, "Kata sandi lama wajib diisi.")
    .max(100),
  newPassword: stringType({ required_error: "Kata sandi baru wajib diisi." })
    .min(8, "Kata sandi baru minimal 8 karakter.")
    .max(100, "Kata sandi baru maksimal 100 karakter."),
});
var tokenOnlySchema = objectType({ token: stringType().optional() });
var deleteItemSchema = objectType({
  token: stringType().optional(),
  id: stringType({ required_error: "ID wajib diisi." }).trim().min(1, "ID wajib diisi."),
});
var imageUploadSchema = objectType({
  token: stringType().optional(),
  category: enumType([
    "destinations",
    "packages",
    "umkm",
    "homestays",
    "kegiatan",
    "galleries",
    "news",
  ]).default("galleries"),
  base64Data: stringType({ required_error: "Data gambar wajib diisi." })
    .min(50, "Data gambar tidak lengkap.")
    .max(10485760, "Ukuran payload gambar melebihi batas 10MB."),
});
var villageInfoSchema = objectType({
  token: stringType().optional(),
  info: objectType({
    nama: stringType().trim().min(2, "Nama desa minimal 2 karakter.").max(100),
    tagline: stringType().trim().max(200).optional().default(""),
    whatsapp: stringType()
      .trim()
      .regex(PHONE_REGEX, "Nomor WhatsApp wajib berupa angka yang valid (8-18 digit)."),
    email: stringType().trim().email("Format email tidak valid.").or(literalType("")).optional(),
    alamat: stringType().trim().max(300).optional().default(""),
    luasDesa: stringType().trim().max(100).optional().default(""),
    luasKawasanWisata: stringType().trim().max(100).optional().default(""),
    jamOperasional: stringType().trim().max(100).optional().default(""),
    waktuTerbaik: stringType().trim().max(100).optional().default(""),
    pokdarwis: stringType().trim().max(150).optional().default(""),
    instagram: stringType().trim().max(100).optional().default(""),
    facebook: stringType().trim().max(100).optional().default(""),
    tiktok: stringType().trim().max(100).optional().default(""),
    pemdesWebsite: stringType().trim().max(200).optional().default(""),
  }),
});
var destinasiSchema = objectType({
  token: stringType().optional(),
  item: objectType({
    id: stringType().trim().max(100).optional(),
    num: stringType().trim().max(10).optional().default("01"),
    nama: stringType({ required_error: "Nama destinasi wajib diisi." })
      .trim()
      .min(2, "Nama destinasi minimal 2 karakter.")
      .max(150, "Nama destinasi maksimal 150 karakter."),
    slug: stringType().trim().max(150).optional(),
    kategori: stringType().trim().min(1).max(100).default("Daya Tarik Utama"),
    badge_status: enumType(["TERKONFIRMASI", "POTENSI"]).default("TERKONFIRMASI"),
    badge_text: stringType().trim().max(100).default("Galeri Resmi"),
    short_desc: stringType().trim().max(1e3).optional().default(""),
    full_desc: stringType().trim().max(5e3).optional().default(""),
    deskripsi: stringType().trim().max(5e3).optional(),
    highlights: arrayType(stringType().trim().max(200)).optional().default([]),
    image: stringType().trim().max(1e3).optional().default(""),
    external_url: stringType().trim().max(500).optional().default(""),
    external_label: stringType().trim().max(100).optional().default(""),
    important_note: stringType().trim().max(1e3).optional().default(""),
    source: objectType({
      name: stringType().trim().max(100).default("Pengelola"),
      url: stringType().trim().max(500).optional().default(""),
    })
      .optional()
      .default({
        name: "Pengelola",
        url: "",
      }),
    status: enumType(["published", "draft"]).default("published"),
  }),
});
var kegiatanSchema = objectType({
  token: stringType().optional(),
  item: objectType({
    id: stringType().trim().max(100).optional(),
    judul: stringType({ required_error: "Judul kegiatan wajib diisi." })
      .trim()
      .min(2, "Judul kegiatan minimal 2 karakter.")
      .max(200, "Judul kegiatan maksimal 200 karakter."),
    kategori: stringType().trim().min(1).max(100).default("Kegiatan Budaya"),
    tanggal: stringType().trim().min(1).max(100).default("Terbaru"),
    deskripsi: stringType().trim().max(5e3).optional().default(""),
    image: stringType().trim().max(1e3).optional().default(""),
    image_source: enumType(["upload", "source_url"]).optional().default("upload"),
    source: objectType({
      name: stringType().trim().max(100).default("Pengelola"),
      url: stringType().trim().max(500).optional().default(""),
    })
      .optional()
      .default({
        name: "Pengelola",
        url: "",
      }),
    status: enumType(["published", "draft"]).default("published"),
  }),
});
var extractOgImageSchema = objectType({
  token: stringType().optional(),
  url: stringType({ required_error: "URL publikasi wajib diisi." })
    .trim()
    .min(1, "URL wajib diisi."),
});
var umkmSchema = objectType({
  token: stringType().optional(),
  item: objectType({
    id: stringType().trim().max(100).optional(),
    nama: stringType({ required_error: "Nama produk/UMKM wajib diisi." })
      .trim()
      .min(2, "Nama produk/UMKM minimal 2 karakter.")
      .max(150, "Nama produk/UMKM maksimal 150 karakter."),
    slug: stringType().trim().max(150).optional(),
    pemilik: stringType().trim().max(100).optional().default("Masyarakat Desa Ekang"),
    kategori: stringType().trim().min(1).max(100).default("Kuliner & Oleh-Oleh"),
    deskripsi: stringType().trim().max(3e3).optional().default(""),
    image: stringType().trim().max(1e3).optional().default(""),
    lokasi: stringType().trim().max(200).optional().default("Desa Ekang Anculai"),
    kontak: stringType().trim().max(50).optional().default("08123456789"),
    hargaInfo: stringType().trim().max(100).optional().default("Hubungi Pengelola"),
    source: objectType({
      name: stringType().trim().max(100).default("Pengelola"),
      url: stringType().trim().max(500).optional().default(""),
    })
      .optional()
      .default({
        name: "Pengelola",
        url: "",
      }),
    status: enumType(["published", "draft"]).default("published"),
  }),
});
var galeriSchema = objectType({
  token: stringType().optional(),
  item: objectType({
    id: stringType().trim().max(100).optional(),
    judul: stringType({ required_error: "Judul foto wajib diisi." })
      .trim()
      .min(2, "Judul foto minimal 2 karakter.")
      .max(150, "Judul foto maksimal 150 karakter."),
    kategori: stringType().trim().min(1).max(100).default("Lanskap Desa"),
    image: stringType({ required_error: "Gambar foto wajib diisi." })
      .trim()
      .min(1, "Gambar foto wajib diisi.")
      .max(1e3),
    caption: stringType().trim().max(500).optional().default(""),
    alt: stringType().trim().max(200).optional(),
    sumber: stringType().trim().max(100).optional().default("Pengelola"),
    status: enumType(["published", "draft"]).default("published"),
  }),
});
var publicReviewSchema = objectType({
  nama: stringType({ required_error: "Nama wajib diisi." })
    .trim()
    .min(2, "Nama minimal 2 karakter.")
    .max(100, "Nama maksimal 100 karakter."),
  asal: stringType().trim().max(100).optional().default("Wisatawan"),
  tipeWisatawan: enumType(["Keluarga", "Pasangan", "Mancanegara", "Rombongan / KKN"]).default(
    "Keluarga",
  ),
  rating: numberType({ required_error: "Rating bintang wajib diisi." })
    .int("Rating harus bilangan bulat.")
    .min(1, "Rating minimal 1 bintang.")
    .max(5, "Rating maksimal 5 bintang."),
  komentar: stringType({ required_error: "Ulasan wajib diisi." })
    .trim()
    .min(5, "Ulasan minimal 5 karakter.")
    .max(1e3, "Ulasan maksimal 1000 karakter."),
});
var adminReviewSchema = objectType({
  token: stringType().optional(),
  item: objectType({
    id: stringType().trim().max(100).optional(),
    nama: stringType().trim().min(2).max(100),
    asal: stringType().trim().max(100).optional().default("Wisatawan"),
    tipeWisatawan: stringType().trim().max(50).optional().default("Keluarga"),
    tipe_wisatawan: stringType().trim().max(50).optional(),
    rating: numberType().min(1).max(5).default(5),
    komentar: stringType().trim().min(1).max(1e3),
    tanggal: stringType().trim().max(50).optional().default("Terbaru"),
    avatar: stringType().trim().max(1e3).optional(),
    status: enumType(["pending", "approved", "rejected"]).default("approved"),
  }),
});
var reviewStatusSchema = objectType({
  token: stringType().optional(),
  id: stringType({ required_error: "ID ulasan wajib diisi." }).trim().min(1),
  status: enumType(["pending", "approved", "rejected"], {
    errorMap: () => ({ message: "Status ulasan harus: pending, approved, atau rejected." }),
  }),
});
var homestaySchema = objectType({
  token: stringType().optional(),
  item: objectType({
    id: stringType().trim().max(100).optional(),
    nama: stringType({ required_error: "Nama homestay wajib diisi." })
      .trim()
      .min(2, "Nama homestay minimal 2 karakter.")
      .max(150, "Nama homestay maksimal 150 karakter."),
    slug: stringType().trim().max(150).optional(),
    pemilik: stringType().trim().max(100).optional().default("Warga Desa"),
    kapasitas: stringType().trim().max(50).optional().default("4-6 Orang"),
    kamar: numberType().int().min(1, "Minimal 1 kamar.").max(50).default(1),
    harga_text: stringType().trim().max(100).optional().default("Hubungi Pengelola"),
    fasilitas: arrayType(stringType().trim().max(100)).optional().default([]),
    lokasi: stringType().trim().max(200).optional().default("Desa Ekang Anculai"),
    kontak: stringType().trim().max(50).optional().default("08123456789"),
    image: stringType().trim().max(1e3).optional().default(""),
    status: enumType(["published", "draft"]).default("published"),
  }),
});
var paketWisataSchema = objectType({
  token: stringType().optional(),
  item: objectType({
    id: stringType().trim().max(100).optional(),
    nama: stringType({ required_error: "Nama paket wisata wajib diisi." })
      .trim()
      .min(2, "Nama paket wisata minimal 2 karakter.")
      .max(150, "Nama paket wisata maksimal 150 karakter."),
    slug: stringType().trim().max(150).optional(),
    kategori: stringType().trim().max(100).default("Ekowisata & Mangrove"),
    durasi: stringType().trim().max(100).default("Full Day (09.00–17.00 WIB)"),
    lokasi_spesifik: stringType()
      .trim()
      .max(200)
      .optional()
      .default("Kawasan Wisata Ekang Anculai"),
    harga_text: stringType().trim().max(100).optional().default("Hubungi Pengelola"),
    target_visitor: stringType().trim().max(200).optional().default("Wisatawan Umum & Keluarga"),
    deskripsi_lengkap: stringType().trim().max(5e3).optional().default(""),
    highlight: stringType().trim().max(1e3).optional().default(""),
    image: stringType().trim().max(1e3).optional().default(""),
    fasilitas: arrayType(stringType().trim().max(200)).optional().default([]),
    itinerary: arrayType(unknownType()).optional().default([]),
    source: objectType({
      name: stringType().trim().max(100).default("Pengelola"),
      url: stringType().trim().max(500).optional().default(""),
    })
      .optional()
      .default({
        name: "Pengelola",
        url: "",
      }),
    status: enumType(["published", "draft"]).default("published"),
  }),
});
var faqSchema = objectType({
  token: stringType().optional(),
  item: objectType({
    id: stringType().trim().max(100).optional(),
    pertanyaan: stringType({ required_error: "Pertanyaan FAQ wajib diisi." })
      .trim()
      .min(3, "Pertanyaan minimal 3 karakter.")
      .max(300, "Pertanyaan maksimal 300 karakter."),
    jawaban: stringType({ required_error: "Jawaban FAQ wajib diisi." })
      .trim()
      .min(3, "Jawaban minimal 3 karakter.")
      .max(2e3, "Jawaban maksimal 2000 karakter."),
    kategori: stringType().trim().max(50).default("Umum"),
    status: enumType(["published", "draft"]).default("published"),
  }),
});
var reservationPublicSchema = objectType({
  namaPemesan: stringType({ required_error: "Nama pemesan wajib diisi." })
    .trim()
    .min(2, "Nama pemesan minimal 2 karakter.")
    .max(100, "Nama pemesan maksimal 100 karakter."),
  whatsapp: stringType({ required_error: "Nomor WhatsApp wajib diisi." })
    .trim()
    .regex(PHONE_REGEX, "Nomor WhatsApp wajib berupa angka yang valid (8-18 digit)."),
  email: stringType()
    .trim()
    .email("Format email tidak valid.")
    .or(literalType(""))
    .optional()
    .default(""),
  tanggalKunjungan: stringType({ required_error: "Tanggal kunjungan wajib diisi." })
    .trim()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Format tanggal kunjungan harus YYYY-MM-DD.")
    .refine((val) => {
      const parsed = new Date(val);
      return !isNaN(parsed.getTime());
    }, "Tanggal kunjungan tidak valid kalender."),
  jamKedatangan: stringType({ required_error: "Jam kedatangan wajib diisi." })
    .trim()
    .regex(/^([01]\d|2[0-3]):[0-5]\d$/, "Format jam kedatangan harus HH:mm (contoh: 09:00).")
    .refine(
      (val) => val >= "08:00" && val <= "17:00",
      "Jam kedatangan harus berada di antara jam operasional desa (08.00–17.00 WIB).",
    ),
  jumlahDewasa: numberType({ required_error: "Jumlah peserta dewasa wajib diisi." })
    .int("Jumlah peserta dewasa harus berupa bilangan bulat.")
    .min(1, "Minimal 1 peserta dewasa (angka 0 atau negatif ditolak).")
    .max(200, "Maksimal 200 peserta dewasa per reservasi rombongan."),
  jumlahAnak: numberType()
    .int("Jumlah anak harus berupa bilangan bulat.")
    .min(0, "Jumlah anak tidak boleh bernilai negatif.")
    .max(200, "Maksimal 200 peserta anak per reservasi.")
    .default(0),
  opsiKunjungan: stringType()
    .trim()
    .min(2, "Opsi kunjungan wajib dipilih.")
    .max(150, "Opsi kunjungan maksimal 150 karakter.")
    .default("Paket Wisata Full Day"),
  selectedAddons: arrayType(stringType().trim().max(100))
    .max(20, "Maksimal 20 aktivitas tambahan.")
    .optional()
    .default([]),
  catatan: stringType().trim().max(1e3, "Catatan maksimal 1000 karakter.").optional().default(""),
});
var reservationStatusSchema = objectType({
  token: stringType().optional(),
  id: stringType({ required_error: "ID reservasi wajib diisi." }).trim().min(1),
  status: enumType(["pending", "confirmed", "completed", "cancelled"], {
    errorMap: () => ({
      message: "Status reservasi harus: pending, confirmed, completed, atau cancelled.",
    }),
  }),
});
var recordPageViewSchema = objectType({
  path: stringType().trim().max(300).default("/"),
  referrer: stringType().trim().max(500).optional().default(""),
});
//#endregion
export {
  paketWisataSchema as A,
  teko_kayangan_default as B,
  kegiatan_batik_2_default as C,
  officialFullDayPackage as D,
  loginInputSchema as E,
  reog_kendang_kempul_default as F,
  umkmSchema as H,
  reservationPublicSchema as I,
  reservationStatusSchema as L,
  publicReviewSchema as M,
  recordPageViewSchema as N,
  officialTwoDayPackage as O,
  rengginang_sajian_default as P,
  reviewStatusSchema as R,
  kegiatanSchema as S,
  klasifikasiInfo as T,
  villageInfoSchema as U,
  tokenOnlySchema as V,
  villages as W,
  galeriDataset as _,
  YOUTUBE_OFFICIAL_URL as a,
  homestaySchema as b,
  cbtExperiences8 as c,
  destinasiSchema as d,
  ekang_mangrove_dermaga_default as f,
  galeri8Categories as g,
  fasilitasMaster as h,
  YOUTUBE_OFFICIAL_ID as i,
  provinsiList as j,
  paketList as k,
  changePasswordInputSchema as l,
  faqSchema as m,
  RUMAH_BATIK_URL as n,
  adminReviewSchema as o,
  extractOgImageSchema as p,
  WHATSAPP_NUMBER as r,
  berita as s,
  DEFAULT_VILLAGE_COORDINATES as t,
  deleteItemSchema as u,
  galeriSchema as v,
  kegiatan_batik_3_default as w,
  imageUploadSchema as x,
  getVillage as y,
  statistik as z,
};
