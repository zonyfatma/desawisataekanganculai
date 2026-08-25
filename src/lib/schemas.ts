import { z } from "zod";

// ====================================================
// REGEX & COMMON PATTERNS
// ====================================================
const PHONE_REGEX = /^(\+?[0-9]{8,18})$/;

// ====================================================
// 1. AUTHENTICATION & ACCOUNT SCHEMAS
// ====================================================
export const loginInputSchema = z.object({
  username: z
    .string({ required_error: "Username wajib diisi." })
    .trim()
    .min(3, "Username minimal 3 karakter.")
    .max(50, "Username maksimal 50 karakter."),
  password: z
    .string({ required_error: "Kata sandi wajib diisi." })
    .trim()
    .min(6, "Kata sandi minimal 6 karakter.")
    .max(100, "Kata sandi maksimal 100 karakter."),
});

export const changePasswordInputSchema = z.object({
  token: z.string().optional(),
  oldPassword: z
    .string({ required_error: "Kata sandi lama wajib diisi." })
    .min(1, "Kata sandi lama wajib diisi.")
    .max(100),
  newPassword: z
    .string({ required_error: "Kata sandi baru wajib diisi." })
    .min(8, "Kata sandi baru minimal 8 karakter.")
    .max(100, "Kata sandi baru maksimal 100 karakter."),
});

export const tokenOnlySchema = z.object({
  token: z.string().optional(),
});

export const deleteItemSchema = z.object({
  token: z.string().optional(),
  id: z.string({ required_error: "ID wajib diisi." }).trim().min(1, "ID wajib diisi."),
});

export const imageUploadSchema = z.object({
  token: z.string().optional(),
  category: z
    .enum(["destinations", "packages", "umkm", "homestays", "kegiatan", "galleries", "news"])
    .default("galleries"),
  base64Data: z
    .string({ required_error: "Data gambar wajib diisi." })
    .min(50, "Data gambar tidak lengkap.")
    .max(10 * 1024 * 1024, "Ukuran payload gambar melebihi batas 10MB."),
});

// ====================================================
// 2. VILLAGE INFO & CONTACT SCHEMA
// ====================================================
export const villageInfoSchema = z.object({
  token: z.string().optional(),
  info: z.object({
    nama: z.string().trim().min(2, "Nama desa minimal 2 karakter.").max(100),
    tagline: z.string().trim().max(200).optional().default(""),
    whatsapp: z
      .string()
      .trim()
      .regex(PHONE_REGEX, "Nomor WhatsApp wajib berupa angka yang valid (8-18 digit)."),
    email: z.string().trim().email("Format email tidak valid.").or(z.literal("")).optional(),
    alamat: z.string().trim().max(300).optional().default(""),
    luasDesa: z.string().trim().max(100).optional().default(""),
    luasKawasanWisata: z.string().trim().max(100).optional().default(""),
    jamOperasional: z.string().trim().max(100).optional().default(""),
    waktuTerbaik: z.string().trim().max(100).optional().default(""),
    pokdarwis: z.string().trim().max(150).optional().default(""),
    instagram: z.string().trim().max(100).optional().default(""),
    facebook: z.string().trim().max(100).optional().default(""),
    tiktok: z.string().trim().max(100).optional().default(""),
    pemdesWebsite: z.string().trim().max(200).optional().default(""),
  }),
});

// ====================================================
// 3. DESTINASI / LANDMARKS SCHEMA
// ====================================================
export const destinasiSchema = z.object({
  token: z.string().optional(),
  item: z.object({
    id: z.string().trim().max(100).optional(),
    num: z.string().trim().max(10).optional().default("01"),
    nama: z
      .string({ required_error: "Nama destinasi wajib diisi." })
      .trim()
      .min(2, "Nama destinasi minimal 2 karakter.")
      .max(150, "Nama destinasi maksimal 150 karakter."),
    slug: z.string().trim().max(150).optional(),
    kategori: z.string().trim().min(1).max(100).default("Daya Tarik Utama"),
    badge_status: z.enum(["TERKONFIRMASI", "POTENSI"]).default("TERKONFIRMASI"),
    badge_text: z.string().trim().max(100).default("Galeri Resmi"),
    short_desc: z.string().trim().max(1000).optional().default(""),
    full_desc: z.string().trim().max(5000).optional().default(""),
    deskripsi: z.string().trim().max(5000).optional(),
    highlights: z.array(z.string().trim().max(200)).optional().default([]),
    image: z.string().trim().max(1000).optional().default(""),
    external_url: z.string().trim().max(500).optional().default(""),
    external_label: z.string().trim().max(100).optional().default(""),
    important_note: z.string().trim().max(1000).optional().default(""),
    source: z
      .object({
        name: z.string().trim().max(100).default("Pengelola"),
        url: z.string().trim().max(500).optional().default(""),
      })
      .optional()
      .default({ name: "Pengelola", url: "" }),
    status: z.enum(["published", "draft"]).default("published"),
  }),
});

// ====================================================
// 4. KEGIATAN / AGENDA / BERITA SCHEMA
// ====================================================
export const kegiatanSchema = z.object({
  token: z.string().optional(),
  item: z.object({
    id: z.string().trim().max(100).optional(),
    judul: z
      .string({ required_error: "Judul kegiatan wajib diisi." })
      .trim()
      .min(2, "Judul kegiatan minimal 2 karakter.")
      .max(200, "Judul kegiatan maksimal 200 karakter."),
    kategori: z.string().trim().min(1).max(100).default("Kegiatan Budaya"),
    tanggal: z.string().trim().min(1).max(100).default("Terbaru"),
    deskripsi: z.string().trim().max(5000).optional().default(""),
    image: z.string().trim().max(1000).optional().default(""),
    image_source: z.enum(["upload", "source_url"]).optional().default("upload"),
    source: z
      .object({
        name: z.string().trim().max(100).default("Pengelola"),
        url: z.string().trim().max(500).optional().default(""),
      })
      .optional()
      .default({ name: "Pengelola", url: "" }),
    status: z.enum(["published", "draft"]).default("published"),
  }),
});

export const extractOgImageSchema = z.object({
  token: z.string().optional(),
  url: z.string({ required_error: "URL publikasi wajib diisi." }).trim().min(1, "URL wajib diisi."),
});

// ====================================================
// 5. UMKM & PRODUK LOKAL SCHEMA
// ====================================================
export const umkmSchema = z.object({
  token: z.string().optional(),
  item: z.object({
    id: z.string().trim().max(100).optional(),
    nama: z
      .string({ required_error: "Nama produk/UMKM wajib diisi." })
      .trim()
      .min(2, "Nama produk/UMKM minimal 2 karakter.")
      .max(150, "Nama produk/UMKM maksimal 150 karakter."),
    slug: z.string().trim().max(150).optional(),
    pemilik: z.string().trim().max(100).optional().default("Masyarakat Desa Ekang"),
    kategori: z.string().trim().min(1).max(100).default("Kuliner & Oleh-Oleh"),
    deskripsi: z.string().trim().max(3000).optional().default(""),
    image: z.string().trim().max(1000).optional().default(""),
    lokasi: z.string().trim().max(200).optional().default("Desa Ekang Anculai"),
    kontak: z.string().trim().max(50).optional().default("08123456789"),
    hargaInfo: z.string().trim().max(100).optional().default("Hubungi Pengelola"),
    source: z
      .object({
        name: z.string().trim().max(100).default("Pengelola"),
        url: z.string().trim().max(500).optional().default(""),
      })
      .optional()
      .default({ name: "Pengelola", url: "" }),
    status: z.enum(["published", "draft"]).default("published"),
  }),
});

// ====================================================
// 6. GALERI FOTO SCHEMA
// ====================================================
export const galeriSchema = z.object({
  token: z.string().optional(),
  item: z.object({
    id: z.string().trim().max(100).optional(),
    judul: z
      .string({ required_error: "Judul foto wajib diisi." })
      .trim()
      .min(2, "Judul foto minimal 2 karakter.")
      .max(150, "Judul foto maksimal 150 karakter."),
    kategori: z.string().trim().min(1).max(100).default("Lanskap Desa"),
    image: z
      .string({ required_error: "Gambar foto wajib diisi." })
      .trim()
      .min(1, "Gambar foto wajib diisi.")
      .max(1000),
    caption: z.string().trim().max(500).optional().default(""),
    alt: z.string().trim().max(200).optional(),
    sumber: z.string().trim().max(100).optional().default("Pengelola"),
    status: z.enum(["published", "draft"]).default("published"),
  }),
});

// ====================================================
// 7. REVIEW / ULASAN SCHEMA
// ====================================================
export const publicReviewSchema = z.object({
  nama: z
    .string({ required_error: "Nama wajib diisi." })
    .trim()
    .min(2, "Nama minimal 2 karakter.")
    .max(100, "Nama maksimal 100 karakter."),
  asal: z.string().trim().max(100).optional().default("Wisatawan"),
  tipeWisatawan: z
    .enum(["Keluarga", "Pasangan", "Mancanegara", "Rombongan / KKN"])
    .default("Keluarga"),
  rating: z
    .number({ required_error: "Rating bintang wajib diisi." })
    .int("Rating harus bilangan bulat.")
    .min(1, "Rating minimal 1 bintang.")
    .max(5, "Rating maksimal 5 bintang."),
  komentar: z
    .string({ required_error: "Ulasan wajib diisi." })
    .trim()
    .min(5, "Ulasan minimal 5 karakter.")
    .max(1000, "Ulasan maksimal 1000 karakter."),
});

export const adminReviewSchema = z.object({
  token: z.string().optional(),
  item: z.object({
    id: z.string().trim().max(100).optional(),
    nama: z.string().trim().min(2).max(100),
    asal: z.string().trim().max(100).optional().default("Wisatawan"),
    tipeWisatawan: z.string().trim().max(50).optional().default("Keluarga"),
    tipe_wisatawan: z.string().trim().max(50).optional(),
    rating: z.number().min(1).max(5).default(5),
    komentar: z.string().trim().min(1).max(1000),
    tanggal: z.string().trim().max(50).optional().default("Terbaru"),
    avatar: z.string().trim().max(1000).optional(),
    status: z.enum(["pending", "approved", "rejected"]).default("approved"),
  }),
});

export const reviewStatusSchema = z.object({
  token: z.string().optional(),
  id: z.string({ required_error: "ID ulasan wajib diisi." }).trim().min(1),
  status: z.enum(["pending", "approved", "rejected"], {
    errorMap: () => ({ message: "Status ulasan harus: pending, approved, atau rejected." }),
  }),
});

// ====================================================
// 8. HOMESTAYS SCHEMA
// ====================================================
export const homestaySchema = z.object({
  token: z.string().optional(),
  item: z.object({
    id: z.string().trim().max(100).optional(),
    nama: z
      .string({ required_error: "Nama homestay wajib diisi." })
      .trim()
      .min(2, "Nama homestay minimal 2 karakter.")
      .max(150, "Nama homestay maksimal 150 karakter."),
    slug: z.string().trim().max(150).optional(),
    pemilik: z.string().trim().max(100).optional().default("Warga Desa"),
    kapasitas: z.string().trim().max(50).optional().default("4-6 Orang"),
    kamar: z.number().int().min(1, "Minimal 1 kamar.").max(50).default(1),
    harga_text: z.string().trim().max(100).optional().default("Hubungi Pengelola"),
    fasilitas: z.array(z.string().trim().max(100)).optional().default([]),
    lokasi: z.string().trim().max(200).optional().default("Desa Ekang Anculai"),
    kontak: z.string().trim().max(50).optional().default("08123456789"),
    image: z.string().trim().max(1000).optional().default(""),
    status: z.enum(["published", "draft"]).default("published"),
  }),
});

// ====================================================
// 9. PAKET WISATA CBT SCHEMA
// ====================================================
export const paketWisataSchema = z.object({
  token: z.string().optional(),
  item: z.object({
    id: z.string().trim().max(100).optional(),
    nama: z
      .string({ required_error: "Nama paket wisata wajib diisi." })
      .trim()
      .min(2, "Nama paket wisata minimal 2 karakter.")
      .max(150, "Nama paket wisata maksimal 150 karakter."),
    slug: z.string().trim().max(150).optional(),
    kategori: z.string().trim().max(100).default("Ekowisata & Mangrove"),
    durasi: z.string().trim().max(100).default("Full Day (09.00–17.00 WIB)"),
    lokasi_spesifik: z.string().trim().max(200).optional().default("Kawasan Wisata Ekang Anculai"),
    harga_text: z.string().trim().max(100).optional().default("Hubungi Pengelola"),
    target_visitor: z.string().trim().max(200).optional().default("Wisatawan Umum & Keluarga"),
    deskripsi_lengkap: z.string().trim().max(5000).optional().default(""),
    highlight: z.string().trim().max(1000).optional().default(""),
    image: z.string().trim().max(1000).optional().default(""),
    fasilitas: z.array(z.string().trim().max(200)).optional().default([]),
    itinerary: z.array(z.unknown()).optional().default([]),
    source: z
      .object({
        name: z.string().trim().max(100).default("Pengelola"),
        url: z.string().trim().max(500).optional().default(""),
      })
      .optional()
      .default({ name: "Pengelola", url: "" }),
    status: z.enum(["published", "draft"]).default("published"),
  }),
});

// ====================================================
// 10. FAQ SCHEMA
// ====================================================
export const faqSchema = z.object({
  token: z.string().optional(),
  item: z.object({
    id: z.string().trim().max(100).optional(),
    pertanyaan: z
      .string({ required_error: "Pertanyaan FAQ wajib diisi." })
      .trim()
      .min(3, "Pertanyaan minimal 3 karakter.")
      .max(300, "Pertanyaan maksimal 300 karakter."),
    jawaban: z
      .string({ required_error: "Jawaban FAQ wajib diisi." })
      .trim()
      .min(3, "Jawaban minimal 3 karakter.")
      .max(2000, "Jawaban maksimal 2000 karakter."),
    kategori: z.string().trim().max(50).default("Umum"),
    status: z.enum(["published", "draft"]).default("published"),
  }),
});

// ====================================================
// 11. RESERVASI / BOOKING SCHEMA
// ====================================================
const DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;
const TIME_REGEX = /^([01]\d|2[0-3]):[0-5]\d$/;

export const reservationPublicSchema = z.object({
  namaPemesan: z
    .string({ required_error: "Nama pemesan wajib diisi." })
    .trim()
    .min(2, "Nama pemesan minimal 2 karakter.")
    .max(100, "Nama pemesan maksimal 100 karakter."),
  whatsapp: z
    .string({ required_error: "Nomor WhatsApp wajib diisi." })
    .trim()
    .regex(PHONE_REGEX, "Nomor WhatsApp wajib berupa angka yang valid (8-18 digit)."),
  email: z
    .string()
    .trim()
    .email("Format email tidak valid.")
    .or(z.literal(""))
    .optional()
    .default(""),
  tanggalKunjungan: z
    .string({ required_error: "Tanggal kunjungan wajib diisi." })
    .trim()
    .regex(DATE_REGEX, "Format tanggal kunjungan harus YYYY-MM-DD.")
    .refine((val) => {
      const parsed = new Date(val);
      return !isNaN(parsed.getTime());
    }, "Tanggal kunjungan tidak valid kalender."),
  jamKedatangan: z
    .string({ required_error: "Jam kedatangan wajib diisi." })
    .trim()
    .regex(TIME_REGEX, "Format jam kedatangan harus HH:mm (contoh: 09:00).")
    .refine(
      (val) => val >= "08:00" && val <= "17:00",
      "Jam kedatangan harus berada di antara jam operasional desa (08.00–17.00 WIB).",
    ),
  jumlahDewasa: z
    .number({ required_error: "Jumlah peserta dewasa wajib diisi." })
    .int("Jumlah peserta dewasa harus berupa bilangan bulat.")
    .min(1, "Minimal 1 peserta dewasa (angka 0 atau negatif ditolak).")
    .max(200, "Maksimal 200 peserta dewasa per reservasi rombongan."),
  jumlahAnak: z
    .number()
    .int("Jumlah anak harus berupa bilangan bulat.")
    .min(0, "Jumlah anak tidak boleh bernilai negatif.")
    .max(200, "Maksimal 200 peserta anak per reservasi.")
    .default(0),
  opsiKunjungan: z
    .string()
    .trim()
    .min(2, "Opsi kunjungan wajib dipilih.")
    .max(150, "Opsi kunjungan maksimal 150 karakter.")
    .default("Paket Wisata Full Day"),
  selectedAddons: z
    .array(z.string().trim().max(100))
    .max(20, "Maksimal 20 aktivitas tambahan.")
    .optional()
    .default([]),
  catatan: z.string().trim().max(1000, "Catatan maksimal 1000 karakter.").optional().default(""),
});

export const reservationStatusSchema = z.object({
  token: z.string().optional(),
  id: z.string({ required_error: "ID reservasi wajib diisi." }).trim().min(1),
  status: z.enum(["pending", "confirmed", "completed", "cancelled"], {
    errorMap: () => ({
      message: "Status reservasi harus: pending, confirmed, completed, atau cancelled.",
    }),
  }),
});

export const recordPageViewSchema = z.object({
  path: z.string().trim().max(300).default("/"),
  referrer: z.string().trim().max(500).optional().default(""),
});
