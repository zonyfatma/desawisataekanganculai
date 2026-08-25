import { getSupabaseAdminClient, isSupabaseAdminConfigured } from "./supabase-admin.server";
import { db } from "./db";

/**
 * Single Database Abstraction Layer (Repository Pattern)
 *
 * Mode Eksekusi:
 * - `DATABASE_MODE=supabase` (Eksplisit Production):
 *   Menggunakan PostgreSQL Supabase via Service Role client di server.
 *   Jika terjadi error jaringan/query, sistem melempar explicit server error tanpa fallback diam-diam.
 * - `DATABASE_MODE=sqlite` (Eksplisit Development / Rollback):
 *   Menggunakan Better-SQLite3 lokal secara eksplisit.
 * - Unset (Default): Menggunakan Supabase jika kredensial terpasang, atau SQLite jika di lingkungan lokal.
 */

export type DatabaseMode = "supabase" | "sqlite";

export function getDatabaseMode(): DatabaseMode {
  const mode = process.env["DATABASE_MODE"]?.toLowerCase()?.trim();
  if (mode === "sqlite") {
    return "sqlite";
  }
  if (mode === "supabase") {
    return "supabase";
  }
  return isSupabaseAdminConfigured() ? "supabase" : "sqlite";
}

// ----------------------------------------------------
// ENTITY TYPES
// ----------------------------------------------------

export interface DestinationEntity {
  id: string;
  num?: string | null | undefined;
  nama: string;
  slug: string;
  kategori: string;
  badge_status?: string | null | undefined;
  badge_text?: string | null | undefined;
  short_desc?: string | null | undefined;
  full_desc?: string | null | undefined;
  highlights_json?: string[] | null | undefined;
  image?: string | null | undefined;
  external_url?: string | null | undefined;
  external_label?: string | null | undefined;
  important_note?: string | null | undefined;
  source_json?: Record<string, unknown> | null | undefined;
  status: string;
  created_at?: string | undefined;
}

export interface PackageEntity {
  id: string;
  nama: string;
  slug: string;
  kategori: string;
  durasi: string;
  lokasi_spesifik?: string | null | undefined;
  harga_text: string;
  target_visitor?: string | null | undefined;
  deskripsi_lengkap?: string | null | undefined;
  highlight?: string | null | undefined;
  image?: string | null | undefined;
  fasilitas_json?: string[] | null | undefined;
  itinerary_json?: Array<Record<string, unknown>> | null | undefined;
  source_json?: Record<string, unknown> | null | undefined;
  status: string;
  created_at?: string | undefined;
}

export interface UmkmEntity {
  id: string;
  nama: string;
  slug: string;
  pemilik?: string | null | undefined;
  kategori: string;
  deskripsi?: string | null | undefined;
  image?: string | null | undefined;
  lokasi?: string | null | undefined;
  kontak?: string | null | undefined;
  harga_info?: string | null | undefined;
  source_json?: Record<string, unknown> | null | undefined;
  status: string;
  created_at?: string | undefined;
}

export interface HomestayEntity {
  id: string;
  nama: string;
  slug: string;
  pemilik?: string | null | undefined;
  kapasitas?: string | null | undefined;
  kamar?: number | null | undefined;
  harga_text?: string | null | undefined;
  fasilitas_json?: string[] | null | undefined;
  lokasi?: string | null | undefined;
  kontak?: string | null | undefined;
  image?: string | null | undefined;
  status: string;
  created_at?: string | undefined;
}

export interface KegiatanEntity {
  id: string;
  judul: string;
  kategori: string;
  tanggal: string;
  deskripsi?: string | null | undefined;
  image?: string | null | undefined;
  image_source?: string | null | undefined;
  source_json?: Record<string, unknown> | null | undefined;
  status: string;
  created_at?: string | undefined;
}

export interface GalleryEntity {
  id: string;
  judul: string;
  kategori: string;
  image: string;
  caption?: string | null | undefined;
  alt?: string | null | undefined;
  sumber?: string | null | undefined;
  status: string;
  created_at?: string | undefined;
}

export interface FaqEntity {
  id: string;
  pertanyaan: string;
  jawaban: string;
  kategori: string;
  status: string;
  created_at?: string | undefined;
}

export interface ReviewEntity {
  id: string;
  nama: string;
  asal: string;
  tipe_wisatawan: string;
  rating: number;
  komentar: string;
  tanggal: string;
  avatar?: string | null | undefined;
  status: string;
  created_at?: string | undefined;
}

export interface CbtExperienceEntity {
  id: string;
  step: number;
  title: string;
  desc: string;
  image: string;
  status: string;
  created_at?: string | undefined;
}

// ----------------------------------------------------
// HELPER: PARSE JSON FIELDS SAFELY
// ----------------------------------------------------

function parseJsonField<T>(field: unknown, defaultValue: T): T {
  if (field === null || field === undefined) {
    return defaultValue;
  }
  if (typeof field === "object") {
    return field as T;
  }
  if (typeof field === "string") {
    try {
      return JSON.parse(field) as T;
    } catch {
      return defaultValue;
    }
  }
  return defaultValue;
}

// ----------------------------------------------------
// REPOSITORY FUNCTIONS (READ OPERATIONS)
// ----------------------------------------------------

/**
 * 1. Village Info (Key-Value Map)
 */
export async function getVillageInfo(): Promise<Record<string, string>> {
  const mode = getDatabaseMode();

  if (mode === "supabase") {
    const supabase = getSupabaseAdminClient();
    const { data, error } = await supabase.from("village_info").select("key, value");

    if (error) {
      throw new Error(
        `[REPOSITORY ERROR] Gagal membaca village_info dari Supabase: ${error.message}`,
      );
    }

    const map: Record<string, string> = {};
    for (const row of data || []) {
      if (row.key) {
        map[row.key] = row.value || "";
      }
    }
    return map;
  }

  // Explicit SQLite Mode
  const rows = db.prepare("SELECT key, value FROM village_info").all() as Array<{
    key: string;
    value: string;
  }>;
  const map: Record<string, string> = {};
  for (const r of rows) {
    map[r.key] = r.value;
  }
  return map;
}

/**
 * 2. Destinations
 */
export async function getDestinations(options?: {
  publishedOnly?: boolean;
}): Promise<DestinationEntity[]> {
  const publishedOnly = options?.publishedOnly ?? true;
  const mode = getDatabaseMode();

  if (mode === "supabase") {
    const supabase = getSupabaseAdminClient();
    let query = supabase.from("destinations").select("*").order("created_at", { ascending: true });

    if (publishedOnly) {
      query = query.eq("status", "published");
    }

    const { data, error } = await query;
    if (error) {
      throw new Error(
        `[REPOSITORY ERROR] Gagal membaca destinations dari Supabase: ${error.message}`,
      );
    }

    return (data || []).map((r) => ({
      id: r.id,
      num: r.num,
      nama: r.nama,
      slug: r.slug,
      kategori: r.kategori,
      badge_status: r.badge_status,
      badge_text: r.badge_text,
      short_desc: r.short_desc,
      full_desc: r.full_desc,
      highlights_json: parseJsonField<string[]>(r.highlights_json, []),
      image: r.image,
      external_url: r.external_url,
      external_label: r.external_label,
      important_note: r.important_note,
      source_json: parseJsonField<Record<string, unknown>>(r.source_json, {}),
      status: r.status,
      created_at: r.created_at,
    }));
  }

  // Explicit SQLite Mode
  const sql = publishedOnly
    ? "SELECT * FROM destinations WHERE status = 'published' ORDER BY created_at ASC"
    : "SELECT * FROM destinations ORDER BY created_at ASC";
  const rows = db.prepare(sql).all() as Array<Record<string, unknown>>;

  return rows.map((r) => ({
    id: String(r["id"]),
    num: r["num"] ? String(r["num"]) : null,
    nama: String(r["nama"]),
    slug: String(r["slug"]),
    kategori: String(r["kategori"]),
    badge_status: r["badge_status"] ? String(r["badge_status"]) : null,
    badge_text: r["badge_text"] ? String(r["badge_text"]) : null,
    short_desc: r["short_desc"] ? String(r["short_desc"]) : null,
    full_desc: r["full_desc"] ? String(r["full_desc"]) : null,
    highlights_json: parseJsonField<string[]>(r["highlights_json"], []),
    image: r["image"] ? String(r["image"]) : null,
    external_url: r["external_url"] ? String(r["external_url"]) : null,
    external_label: r["external_label"] ? String(r["external_label"]) : null,
    important_note: r["important_note"] ? String(r["important_note"]) : null,
    source_json: parseJsonField<Record<string, unknown>>(r["source_json"], {}),
    status: String(r["status"]),
    created_at: r["created_at"] ? String(r["created_at"]) : undefined,
  }));
}

/**
 * 3. Packages
 */
export async function getPackages(options?: { publishedOnly?: boolean }): Promise<PackageEntity[]> {
  const publishedOnly = options?.publishedOnly ?? true;
  const mode = getDatabaseMode();

  if (mode === "supabase") {
    const supabase = getSupabaseAdminClient();
    let query = supabase.from("packages").select("*").order("created_at", { ascending: true });

    if (publishedOnly) {
      query = query.eq("status", "published");
    }

    const { data, error } = await query;
    if (error) {
      throw new Error(`[REPOSITORY ERROR] Gagal membaca packages dari Supabase: ${error.message}`);
    }

    return (data || []).map((r) => ({
      id: r.id,
      nama: r.nama,
      slug: r.slug,
      kategori: r.kategori,
      durasi: r.durasi,
      lokasi_spesifik: r.lokasi_spesifik,
      harga_text: r.harga_text,
      target_visitor: r.target_visitor,
      deskripsi_lengkap: r.deskripsi_lengkap,
      highlight: r.highlight,
      image: r.image,
      fasilitas_json: parseJsonField<string[]>(r.fasilitas_json, []),
      itinerary_json: parseJsonField<Array<Record<string, unknown>>>(r.itinerary_json, []),
      source_json: parseJsonField<Record<string, unknown>>(r.source_json, {}),
      status: r.status,
      created_at: r.created_at,
    }));
  }

  // Explicit SQLite Mode
  const sql = publishedOnly
    ? "SELECT * FROM packages WHERE status = 'published' ORDER BY created_at ASC"
    : "SELECT * FROM packages ORDER BY created_at ASC";
  const rows = db.prepare(sql).all() as Array<Record<string, unknown>>;

  return rows.map((r) => ({
    id: String(r["id"]),
    nama: String(r["nama"]),
    slug: String(r["slug"]),
    kategori: String(r["kategori"]),
    durasi: String(r["durasi"]),
    lokasi_spesifik: r["lokasi_spesifik"] ? String(r["lokasi_spesifik"]) : null,
    harga_text: String(r["harga_text"]),
    target_visitor: r["target_visitor"] ? String(r["target_visitor"]) : null,
    deskripsi_lengkap: r["deskripsi_lengkap"] ? String(r["deskripsi_lengkap"]) : null,
    highlight: r["highlight"] ? String(r["highlight"]) : null,
    image: r["image"] ? String(r["image"]) : null,
    fasilitas_json: parseJsonField<string[]>(r["fasilitas_json"], []),
    itinerary_json: parseJsonField<Array<Record<string, unknown>>>(r["itinerary_json"], []),
    source_json: parseJsonField<Record<string, unknown>>(r["source_json"], {}),
    status: String(r["status"]),
    created_at: r["created_at"] ? String(r["created_at"]) : undefined,
  }));
}

/**
 * 4. UMKM
 */
export async function getUMKM(options?: { publishedOnly?: boolean }): Promise<UmkmEntity[]> {
  const publishedOnly = options?.publishedOnly ?? true;
  const mode = getDatabaseMode();

  if (mode === "supabase") {
    const supabase = getSupabaseAdminClient();
    let query = supabase.from("umkm").select("*").order("created_at", { ascending: true });

    if (publishedOnly) {
      query = query.eq("status", "published");
    }

    const { data, error } = await query;
    if (error) {
      throw new Error(`[REPOSITORY ERROR] Gagal membaca umkm dari Supabase: ${error.message}`);
    }

    return (data || []).map((r) => ({
      id: r.id,
      nama: r.nama,
      slug: r.slug,
      pemilik: r.pemilik,
      kategori: r.kategori,
      deskripsi: r.deskripsi,
      image: r.image,
      lokasi: r.lokasi,
      kontak: r.kontak,
      harga_info: r.harga_info,
      source_json: parseJsonField<Record<string, unknown>>(r.source_json, {}),
      status: r.status,
      created_at: r.created_at,
    }));
  }

  // Explicit SQLite Mode
  const sql = publishedOnly
    ? "SELECT * FROM umkm WHERE status = 'published' ORDER BY created_at ASC"
    : "SELECT * FROM umkm ORDER BY created_at ASC";
  const rows = db.prepare(sql).all() as Array<Record<string, unknown>>;

  return rows.map((r) => ({
    id: String(r["id"]),
    nama: String(r["nama"]),
    slug: String(r["slug"]),
    pemilik: r["pemilik"] ? String(r["pemilik"]) : null,
    kategori: String(r["kategori"]),
    deskripsi: r["deskripsi"] ? String(r["deskripsi"]) : null,
    image: r["image"] ? String(r["image"]) : null,
    lokasi: r["lokasi"] ? String(r["lokasi"]) : null,
    kontak: r["kontak"] ? String(r["kontak"]) : null,
    harga_info: r["harga_info"] ? String(r["harga_info"]) : null,
    source_json: parseJsonField<Record<string, unknown>>(r["source_json"], {}),
    status: String(r["status"]),
    created_at: r["created_at"] ? String(r["created_at"]) : undefined,
  }));
}

/**
 * 5. Homestays
 */
export async function getHomestays(options?: {
  publishedOnly?: boolean;
}): Promise<HomestayEntity[]> {
  const publishedOnly = options?.publishedOnly ?? true;
  const mode = getDatabaseMode();

  if (mode === "supabase") {
    const supabase = getSupabaseAdminClient();
    let query = supabase.from("homestays").select("*").order("created_at", { ascending: true });

    if (publishedOnly) {
      query = query.eq("status", "published");
    }

    const { data, error } = await query;
    if (error) {
      throw new Error(`[REPOSITORY ERROR] Gagal membaca homestays dari Supabase: ${error.message}`);
    }

    return (data || []).map((r) => ({
      id: r.id,
      nama: r.nama,
      slug: r.slug,
      pemilik: r.pemilik,
      kapasitas: r.kapasitas,
      kamar: r.kamar,
      harga_text: r.harga_text,
      fasilitas_json: parseJsonField<string[]>(r.fasilitas_json, []),
      lokasi: r.lokasi,
      kontak: r.kontak,
      image: r.image,
      status: r.status,
      created_at: r.created_at,
    }));
  }

  // Explicit SQLite Mode
  const sql = publishedOnly
    ? "SELECT * FROM homestays WHERE status = 'published' ORDER BY created_at ASC"
    : "SELECT * FROM homestays ORDER BY created_at ASC";
  const rows = db.prepare(sql).all() as Array<Record<string, unknown>>;

  return rows.map((r) => ({
    id: String(r["id"]),
    nama: String(r["nama"]),
    slug: String(r["slug"]),
    pemilik: r["pemilik"] ? String(r["pemilik"]) : null,
    kapasitas: r["kapasitas"] ? String(r["kapasitas"]) : null,
    kamar: typeof r["kamar"] === "number" ? r["kamar"] : 1,
    harga_text: r["harga_text"] ? String(r["harga_text"]) : null,
    fasilitas_json: parseJsonField<string[]>(r["fasilitas_json"], []),
    lokasi: r["lokasi"] ? String(r["lokasi"]) : null,
    kontak: r["kontak"] ? String(r["kontak"]) : null,
    image: r["image"] ? String(r["image"]) : null,
    status: String(r["status"]),
    created_at: r["created_at"] ? String(r["created_at"]) : undefined,
  }));
}

/**
 * 6. Kegiatan / News
 */
export async function getKegiatan(options?: {
  publishedOnly?: boolean;
}): Promise<KegiatanEntity[]> {
  const publishedOnly = options?.publishedOnly ?? true;
  const mode = getDatabaseMode();

  if (mode === "supabase") {
    const supabase = getSupabaseAdminClient();
    let query = supabase.from("kegiatan").select("*").order("created_at", { ascending: false });

    if (publishedOnly) {
      query = query.eq("status", "published");
    }

    const { data, error } = await query;
    if (error) {
      throw new Error(`[REPOSITORY ERROR] Gagal membaca kegiatan dari Supabase: ${error.message}`);
    }

    return (data || []).map((r) => ({
      id: r.id,
      judul: r.judul,
      kategori: r.kategori,
      tanggal: r.tanggal || "",
      deskripsi: r.deskripsi,
      image: r.image,
      source_json: parseJsonField<Record<string, unknown>>(r.source_json, {}),
      status: r.status,
      created_at: r.created_at,
    }));
  }

  // Explicit SQLite Mode
  const sql = publishedOnly
    ? "SELECT * FROM kegiatan WHERE status = 'published' ORDER BY created_at DESC"
    : "SELECT * FROM kegiatan ORDER BY created_at DESC";
  const rows = db.prepare(sql).all() as Array<Record<string, unknown>>;

  return rows.map((r) => ({
    id: String(r["id"]),
    judul: String(r["judul"]),
    kategori: String(r["kategori"]),
    tanggal: String(r["tanggal"] || ""),
    deskripsi: r["deskripsi"] ? String(r["deskripsi"]) : null,
    image: r["image"] ? String(r["image"]) : null,
    source_json: parseJsonField<Record<string, unknown>>(r["source_json"], {}),
    status: String(r["status"]),
    created_at: r["created_at"] ? String(r["created_at"]) : undefined,
  }));
}

/**
 * 7. Galleries
 */
export async function getGalleries(options?: {
  publishedOnly?: boolean;
  kategori?: string;
}): Promise<GalleryEntity[]> {
  const publishedOnly = options?.publishedOnly ?? true;
  const mode = getDatabaseMode();

  if (mode === "supabase") {
    const supabase = getSupabaseAdminClient();
    let query = supabase.from("galleries").select("*").order("created_at", { ascending: true });

    if (publishedOnly) {
      query = query.eq("status", "published");
    }
    if (options?.kategori && options.kategori !== "Semua") {
      query = query.eq("kategori", options.kategori);
    }

    const { data, error } = await query;
    if (error) {
      throw new Error(`[REPOSITORY ERROR] Gagal membaca galleries dari Supabase: ${error.message}`);
    }

    return (data || []).map((r) => ({
      id: r.id,
      judul: r.judul,
      kategori: r.kategori,
      image: r.image,
      caption: r.caption,
      alt: r.alt,
      sumber: r.sumber,
      status: r.status,
      created_at: r.created_at,
    }));
  }

  // Explicit SQLite Mode
  let sql = publishedOnly
    ? "SELECT * FROM galleries WHERE status = 'published'"
    : "SELECT * FROM galleries WHERE 1=1";
  const params: unknown[] = [];

  if (options?.kategori && options.kategori !== "Semua") {
    sql += " AND kategori = ?";
    params.push(options.kategori);
  }
  sql += " ORDER BY created_at ASC";

  const rows = db.prepare(sql).all(...params) as Array<Record<string, unknown>>;

  return rows.map((r) => ({
    id: String(r["id"]),
    judul: String(r["judul"]),
    kategori: String(r["kategori"]),
    image: String(r["image"]),
    caption: r["caption"] ? String(r["caption"]) : null,
    alt: r["alt"] ? String(r["alt"]) : null,
    sumber: r["sumber"] ? String(r["sumber"]) : null,
    status: String(r["status"]),
    created_at: r["created_at"] ? String(r["created_at"]) : undefined,
  }));
}

/**
 * 8. FAQs
 */
export async function getFAQs(options?: { publishedOnly?: boolean }): Promise<FaqEntity[]> {
  const publishedOnly = options?.publishedOnly ?? true;
  const mode = getDatabaseMode();

  if (mode === "supabase") {
    const supabase = getSupabaseAdminClient();
    let query = supabase.from("faqs").select("*").order("created_at", { ascending: true });

    if (publishedOnly) {
      query = query.eq("status", "published");
    }

    const { data, error } = await query;
    if (error) {
      throw new Error(`[REPOSITORY ERROR] Gagal membaca faqs dari Supabase: ${error.message}`);
    }

    return (data || []).map((r) => ({
      id: r.id,
      pertanyaan: r.pertanyaan,
      jawaban: r.jawaban,
      kategori: r.kategori,
      status: r.status,
      created_at: r.created_at,
    }));
  }

  // Explicit SQLite Mode
  const sql = publishedOnly
    ? "SELECT * FROM faqs WHERE status = 'published' ORDER BY created_at ASC"
    : "SELECT * FROM faqs ORDER BY created_at ASC";
  const rows = db.prepare(sql).all() as Array<Record<string, unknown>>;

  return rows.map((r) => ({
    id: String(r["id"]),
    pertanyaan: String(r["pertanyaan"]),
    jawaban: String(r["jawaban"]),
    kategori: String(r["kategori"]),
    status: String(r["status"]),
    created_at: r["created_at"] ? String(r["created_at"]) : undefined,
  }));
}

/**
 * 9. Reviews
 */
export async function getReviews(options?: { approvedOnly?: boolean }): Promise<ReviewEntity[]> {
  const approvedOnly = options?.approvedOnly ?? true;
  const mode = getDatabaseMode();

  if (mode === "supabase") {
    const supabase = getSupabaseAdminClient();
    let query = supabase.from("reviews").select("*").order("created_at", { ascending: false });

    if (approvedOnly) {
      query = query.eq("status", "approved");
    }

    const { data, error } = await query;
    if (error) {
      throw new Error(`[REPOSITORY ERROR] Gagal membaca reviews dari Supabase: ${error.message}`);
    }

    return (data || []).map((r) => ({
      id: r.id,
      nama: r.nama,
      asal: r.asal,
      tipe_wisatawan: r.tipe_wisatawan,
      rating: Number(r.rating) || 5,
      komentar: r.komentar,
      tanggal: r.tanggal,
      avatar: r.avatar,
      status: r.status,
      created_at: r.created_at,
    }));
  }

  // Explicit SQLite Mode
  const sql = approvedOnly
    ? "SELECT * FROM reviews WHERE status = 'approved' ORDER BY created_at DESC"
    : "SELECT * FROM reviews ORDER BY created_at DESC";
  const rows = db.prepare(sql).all() as Array<Record<string, unknown>>;

  return rows.map((r) => ({
    id: String(r["id"]),
    nama: String(r["nama"]),
    asal: String(r["asal"]),
    tipe_wisatawan: String(r["tipe_wisatawan"]),
    rating: Number(r["rating"]) || 5,
    komentar: String(r["komentar"]),
    tanggal: String(r["tanggal"]),
    avatar: r["avatar"] ? String(r["avatar"]) : null,
    status: String(r["status"]),
    created_at: r["created_at"] ? String(r["created_at"]) : undefined,
  }));
}

/**
 * 10. CBT Experiences
 */
export async function getCBTExperiences(options?: {
  publishedOnly?: boolean;
}): Promise<CbtExperienceEntity[]> {
  const publishedOnly = options?.publishedOnly ?? true;
  const mode = getDatabaseMode();

  if (mode === "supabase") {
    const supabase = getSupabaseAdminClient();
    let query = supabase.from("cbt_experiences").select("*").order("step", { ascending: true });

    if (publishedOnly) {
      query = query.eq("status", "published");
    }

    const { data, error } = await query;
    if (error) {
      throw new Error(
        `[REPOSITORY ERROR] Gagal membaca cbt_experiences dari Supabase: ${error.message}`,
      );
    }

    return (data || []).map((r) => ({
      id: r.id,
      step: Number(r.step) || 1,
      title: r.title,
      desc: r.desc,
      image: r.image,
      status: r.status,
      created_at: r.created_at,
    }));
  }

  // Explicit SQLite Mode
  const sql = publishedOnly
    ? "SELECT * FROM cbt_experiences WHERE status = 'published' ORDER BY step ASC"
    : "SELECT * FROM cbt_experiences ORDER BY step ASC";
  const rows = db.prepare(sql).all() as Array<Record<string, unknown>>;

  return rows.map((r) => ({
    id: String(r["id"]),
    step: Number(r["step"]) || 1,
    title: String(r["title"]),
    desc: String(r["desc"]),
    image: String(r["image"]),
    status: String(r["status"]),
    created_at: r["created_at"] ? String(r["created_at"]) : undefined,
  }));
}

/**
 * 11. Page View Statistics
 */
export async function getPageViewStats(): Promise<{
  totalViews: number;
  uniqueVisitors: number;
}> {
  const mode = getDatabaseMode();

  if (mode === "supabase") {
    const supabase = getSupabaseAdminClient();
    const { count: totalViews, error: errTotal } = await supabase
      .from("page_views")
      .select("*", { count: "exact", head: true });

    if (errTotal) {
      throw new Error(
        `[REPOSITORY ERROR] Gagal membaca page_views dari Supabase: ${errTotal.message}`,
      );
    }

    return {
      totalViews: totalViews || 1,
      uniqueVisitors: totalViews || 1,
    };
  }

  // Explicit SQLite Mode
  const total = (db.prepare("SELECT COUNT(*) as c FROM page_views").get() as { c: number })?.c || 0;
  const unique =
    (db.prepare("SELECT COUNT(DISTINCT ip_hash) as c FROM page_views").get() as { c: number })?.c ||
    0;

  return {
    totalViews: total || 1,
    uniqueVisitors: unique || 1,
  };
}

/**
 * 12. Assembled Site Data Bundle (Single Read Path)
 */
export async function getSiteDataBundle() {
  const [villageInfo, destinations, umkm, kegiatan, galleries, reviews, homestays, faqs, stats] =
    await Promise.all([
      getVillageInfo(),
      getDestinations({ publishedOnly: true }),
      getUMKM({ publishedOnly: true }),
      getKegiatan({ publishedOnly: true }),
      getGalleries({ publishedOnly: true }),
      getReviews({ approvedOnly: true }),
      getHomestays({ publishedOnly: true }),
      getFAQs({ publishedOnly: true }),
      getPageViewStats(),
    ]);

  const landmarkList = destinations.map((d) => ({
    id: d.id,
    nama: d.nama,
    kategori: d.kategori,
    deskripsi: d.short_desc || d.full_desc || "",
    image: d.image || "",
    source: (d.source_json as { name: string; url: string }) || {
      name: "Pengelola",
      url: "",
    },
  }));

  const umkmList = umkm.map((u) => ({
    id: u.id,
    nama: u.nama,
    kategori: u.kategori as
      "Produk Ekonomi Kreatif" | "Kuliner Tradisional" | "Ekowisata & Akomodasi",
    deskripsi: u.deskripsi || "",
    image: u.image || "",
    ...(u.lokasi ? { lokasi: u.lokasi } : {}),
    ...(u.kontak ? { kontak: u.kontak } : {}),
    hargaInfo: u.harga_info || "Hubungi Pengelola",
    source: (u.source_json as { name: string; url: string }) || {
      name: "Pengelola",
      url: "",
    },
  }));

  const kegiatanList = kegiatan.map((k) => ({
    id: k.id,
    judul: k.judul,
    kategori: k.kategori,
    tanggal: k.tanggal,
    deskripsi: k.deskripsi || "",
    image: k.image || "",
    image_source: (k.image_source as "upload" | "source_url") || "upload",
    source: (k.source_json as { name: string; url: string }) || {
      name: "Pengelola",
      url: "",
    },
  }));

  const galeriItems = galleries.map((g) => ({
    id: g.id,
    judul: g.judul,
    kategori: g.kategori as
      | "Batik"
      | "Mangrove"
      | "Perkebunan"
      | "Budaya"
      | "Gastronomi"
      | "Homestay"
      | "Alam"
      | "Aktivitas Masyarakat"
      | "Kegiatan Desa",
    image: g.image,
    caption: g.caption || "",
    alt: g.alt || g.judul,
    ...(g.sumber ? { sumber: g.sumber } : {}),
  }));

  const reviewItems = reviews.map((r) => ({
    id: r.id,
    nama: r.nama,
    asal: r.asal,
    tipeWisatawan: r.tipe_wisatawan as
      "Mancanegara" | "Keluarga" | "Pasangan" | "Solo Traveler" | "Rombongan",
    rating: r.rating,
    komentar: r.komentar,
    tanggal: r.tanggal,
    avatar:
      r.avatar ||
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
  }));

  return {
    villageInfo: villageInfo as unknown,
    landmarkList,
    umkmList,
    kegiatanList,
    galeriItems,
    reviews: reviewItems,
    homestays: homestays.map((h) => ({
      id: h.id,
      nama: h.nama,
      slug: h.slug,
      pemilik: h.pemilik || undefined,
      kapasitas: h.kapasitas || undefined,
      kamar: h.kamar || 1,
      harga_text: h.harga_text || undefined,
      fasilitas_json: JSON.stringify(h.fasilitas_json || []),
      lokasi: h.lokasi || undefined,
      kontak: h.kontak || undefined,
      image: h.image || undefined,
      status: h.status,
    })),
    faqs: faqs.map((f) => ({
      id: f.id,
      pertanyaan: f.pertanyaan,
      jawaban: f.jawaban,
      kategori: f.kategori,
      status: f.status,
    })),
    visitCount: stats.totalViews,
    uniqueVisitors: stats.uniqueVisitors,
  };
}
