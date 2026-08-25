import { lazy, Suspense, useEffect, useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  Building,
  Building2,
  Camera,
  Car,
  ChevronLeft,
  ChevronRight,
  Clock,
  Coffee,
  Compass,
  Globe,
  Handshake,
  Heart,
  Home,
  Instagram,
  MapPin,
  Maximize2,
  Phone,
  Share2,
  ShoppingBag,
  Sparkles,
  Sun,
  Toilet,
  Trees,
  Users,
  Wifi,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { formatRupiah, getVillage, klasifikasiInfo, villages, type Village } from "@/data/jadesta";
import { useSiteData } from "@/lib/cms-store";
import { resolveImageUrl, getImageFallback } from "@/lib/image-resolver";
import { SourceLink } from "@/components/site/SourceLink";
import { toast } from "sonner";
import { JsonLdScript, getDestinationJsonLd, getBreadcrumbJsonLd } from "@/lib/json-ld";

const MapCanvas = lazy(() => import("@/components/site/MapCanvas"));

const fasilitasIcon: Record<string, typeof Home> = {
  Homestay: Home,
  Kuliner: Coffee,
  Souvenir: ShoppingBag,
  "Toilet Umum": Toilet,
  "Area Parkir": Car,
  Internet: Wifi,
  "Pemandu Lokal Berlisensi": Users,
};

export const Route = createFileRoute("/desa/$slug")({
  loader: ({ params }) => {
    const village = getVillage(params.slug);
    if (!village) throw notFound();
    return { village };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Profil Desa tidak ditemukan" }, { name: "robots", content: "noindex" }],
      };
    }
    const v = loaderData.village;
    const title = `${v.nama} — ${v.kabupaten}, ${v.provinsi}`;
    const description = v.deskripsi.slice(0, 155);
    const url = `https://desawisataekanganculai.id/desa/${v.slug}`;
    const image = v.image.startsWith("http")
      ? v.image
      : `https://desawisataekanganculai.id${v.image}`;

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:image", content: image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: image },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: DesaDetail,
  notFoundComponent: DesaNotFound,
});

function DesaNotFound() {
  return (
    <div className="grid min-h-[70vh] place-items-center bg-surface px-4 pt-28">
      <div className="text-center max-w-md">
        <h1 className="text-2xl font-extrabold text-foreground">Profil Desa Tidak Ditemukan</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Halaman yang Anda cari tidak tersedia atau telah dipindahkan.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}

function DesaDetail() {
  const { village } = Route.useLoaderData() as { village: Village };
  const siteData = useSiteData();
  const info = klasifikasiInfo[village.klasifikasi];
  const [slide, setSlide] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);
  const [selectedUmkmCat, setSelectedUmkmCat] = useState<string>("Semua");

  useEffect(() => setSlide(0), [village.slug]);

  const destinationSchema = getDestinationJsonLd({
    id: village.slug,
    nama: village.nama,
    deskripsi: village.deskripsi,
    image: village.image,
    kategori: village.kategori ?? "Wisata Alam",
  });

  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Beranda", url: "/" },
    { name: "Destinasi Desa", url: "/desa/ekang-anculai" },
    { name: village.nama, url: `/desa/${village.slug}` },
  ]);

  const share = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    try {
      if (navigator.share) await navigator.share({ title: village.nama, url });
      else {
        await navigator.clipboard.writeText(url);
        toast.success("Tautan profil desa disalin");
      }
    } catch {
      /* dibatalkan pengguna */
    }
  };

  return (
    <div className="bg-surface pb-20 pt-20">
      <JsonLdScript data={[destinationSchema, breadcrumbSchema]} />
      {/* Hero gallery */}
      <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
        <img
          src={resolveImageUrl(village.galeri[slide] ?? village.image, village.nama)}
          alt={`Galeri ${village.nama}`}
          width={1600}
          height={1000}
          loading="eager"
          fetchPriority="high"
          decoding="sync"
          onError={(e) => {
            e.currentTarget.src = "/assets/village-ekang-anculai.jpg";
          }}
          className="size-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="absolute inset-x-0 top-6 mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-background/20 px-4 py-2 text-xs font-bold text-background backdrop-blur transition-colors hover:bg-background/35"
          >
            <ArrowLeft className="size-4" />
            Kembali ke Beranda
          </Link>
          <div className="flex gap-2">
            <button
              onClick={() => {
                setSaved((s) => !s);
                toast.success(saved ? "Dihapus dari simpanan" : "Disimpan ke simpanan Anda");
              }}
              aria-pressed={saved}
              className="inline-flex items-center gap-2 rounded-full bg-background/20 px-4 py-2 text-xs font-bold text-background backdrop-blur transition-colors hover:bg-background/35"
            >
              {saved ? (
                <Heart className="size-4 fill-gold text-gold" />
              ) : (
                <Bookmark className="size-4" />
              )}
              Simpan
            </button>
            <button
              onClick={() => void share()}
              className="inline-flex items-center gap-2 rounded-full bg-background/20 px-4 py-2 text-xs font-bold text-background backdrop-blur transition-colors hover:bg-background/35"
            >
              <Share2 className="size-4" />
              Bagikan
            </button>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-gold px-3 py-1.5 text-[11px] font-extrabold text-gold-foreground">
            {village.adwi ?? info.label}
          </span>
          <h1 className="mt-3 text-3xl font-black tracking-tight text-background sm:text-5xl">
            {village.nama}
          </h1>
          <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-background/90">
            <MapPin className="size-4 text-gold" />
            {village.kabupaten}, {village.provinsi}
          </p>
        </div>

        <div className="absolute right-4 bottom-8 flex gap-2 sm:right-8">
          <button
            aria-label="Foto sebelumnya"
            onClick={() => setSlide((s) => (s - 1 + village.galeri.length) % village.galeri.length)}
            className="grid size-10 place-items-center rounded-full bg-background/20 text-background backdrop-blur hover:bg-background/35"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            aria-label="Foto berikutnya"
            onClick={() => setSlide((s) => (s + 1) % village.galeri.length)}
            className="grid size-10 place-items-center rounded-full bg-background/20 text-background backdrop-blur hover:bg-background/35"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </section>

      {/* Quick info bar */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="-mt-8 grid gap-4 rounded-3xl border border-border bg-card p-5 sm:p-6 shadow-float sm:grid-cols-2 md:grid-cols-[repeat(3,minmax(0,1fr))_auto] md:items-center">
          <div>
            <p className="text-[11px] font-bold tracking-wider text-muted-foreground uppercase">
              Klasifikasi
            </p>
            <span
              className={`mt-1.5 inline-flex rounded-full px-3 py-1 text-xs font-bold ${info.badgeClass}`}
            >
              {info.label}
            </span>
          </div>
          <div className="min-w-0">
            <p className="text-[11px] font-bold tracking-wider text-muted-foreground uppercase">
              Pengelola Wisata
            </p>
            <p className="mt-1.5 truncate text-sm font-extrabold text-foreground">
              {village.pokdarwis}
            </p>
          </div>
          <div>
            <p className="text-[11px] font-bold tracking-wider text-muted-foreground uppercase">
              Prestasi Resmi 2026
            </p>
            <p className="mt-1.5 flex items-center gap-1.5 text-xs font-extrabold text-foreground">
              <Compass className="size-4 text-gold shrink-0" />
              {village.adwi}
            </p>
          </div>
          <a
            href={`https://wa.me/${village.whatsapp}?text=Halo%20Pengelola%20Desa%20Wisata%20Ekang%20Anculai,%20saya%20ingin%20tanya%20informasi%20potensi%20dan%20wisata`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-bold text-primary-foreground transition-all duration-300 hover:bg-emerald-deep"
          >
            <Phone className="size-4" />
            Hubungi Pengelola via WA
          </a>
        </div>
      </div>

      {/* Tabs */}
      <div className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <Tabs defaultValue="tentang">
          <TabsList className="no-scrollbar h-auto w-full justify-start gap-1 overflow-x-auto rounded-2xl bg-card p-1.5 shadow-soft">
            {(
              [
                ["tentang", "Profil & Sejarah"],
                ["fasilitas", "Atraksi & Fasilitas"],
                ["umkm", "Produk UMKM 2026"],
                ["kegiatan", "Kegiatan Desa 2026"],
                ["paket", "Paket Wisata"],
                ["galeri", "Galeri Dokumentasi"],
                ["peta", "Peta & Aksesibilitas"],
              ] as const
            ).map(([v, label]) => (
              <TabsTrigger
                key={v}
                value={v}
                className="shrink-0 rounded-full px-4 py-2.5 text-xs font-bold text-muted-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-card"
              >
                {label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tab 1: Tentang */}
          <TabsContent value="tentang" className="mt-6">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
              <article className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8">
                <h2 className="text-xl font-extrabold text-foreground">Sekilas Profil Desa</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {village.deskripsi}
                </p>

                <h3 className="mt-7 text-lg font-extrabold text-foreground">
                  Sejarah & Asal Usul Nama
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {village.sejarah}
                </p>
                <div className="mt-2">
                  <SourceLink
                    source={{
                      name: "Website Resmi Desa Ekang Anculai",
                      url: "https://desaekanganculai.bintankab.go.id/profil/sejarah",
                    }}
                  />
                </div>

                {village.perbatasan ? (
                  <>
                    <h3 className="mt-7 text-lg font-extrabold text-foreground">
                      Batas Wilayah & Kondisi Geografis
                    </h3>
                    <div className="mt-3 grid gap-2.5 sm:grid-cols-2 text-xs font-medium">
                      <div className="rounded-2xl border border-border bg-surface p-3.5">
                        <span className="font-bold text-primary">Utara:</span>{" "}
                        {village.perbatasan.utara}
                      </div>
                      <div className="rounded-2xl border border-border bg-surface p-3.5">
                        <span className="font-bold text-primary">Selatan:</span>{" "}
                        {village.perbatasan.selatan}
                      </div>
                      <div className="rounded-2xl border border-border bg-surface p-3.5">
                        <span className="font-bold text-primary">Timur:</span>{" "}
                        {village.perbatasan.timur}
                      </div>
                      <div className="rounded-2xl border border-border bg-surface p-3.5">
                        <span className="font-bold text-primary">Barat:</span>{" "}
                        {village.perbatasan.barat}
                      </div>
                    </div>
                    <div className="mt-2">
                      <SourceLink
                        source={{
                          name: "Website Resmi Desa Ekang Anculai",
                          url: "https://desaekanganculai.bintankab.go.id/profil/geografis",
                        }}
                      />
                    </div>
                  </>
                ) : null}

                {village.kesenian?.length ? (
                  <>
                    <h3 className="mt-8 text-lg font-extrabold text-foreground">
                      Sanggar & Kesenian Budaya
                    </h3>
                    <div className="mt-3.5 space-y-3">
                      {village.kesenian.map((k) => (
                        <div
                          key={k}
                          className="flex items-start gap-3 rounded-2xl border border-border bg-surface p-4 shadow-soft transition-colors hover:border-primary/40"
                        >
                          <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-accent text-primary">
                            <Sparkles className="size-4.5" />
                          </span>
                          <p className="text-xs font-semibold leading-relaxed text-foreground">
                            {k}
                          </p>
                        </div>
                      ))}
                    </div>
                  </>
                ) : null}

                {village.panduanKunjungan?.etikaKunjungan?.length ? (
                  <>
                    <h3 className="mt-8 text-lg font-extrabold text-foreground">
                      Etika & Panduan Kunjungan Wisatawan
                    </h3>
                    <ul className="mt-3.5 space-y-2.5">
                      {village.panduanKunjungan.etikaKunjungan.map((etika) => (
                        <li
                          key={etika}
                          className="flex items-start gap-2.5 text-xs font-semibold text-foreground"
                        >
                          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                          <span className="leading-relaxed">{etika}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : null}

                <div className="mt-8 border-t border-border pt-4">
                  <SourceLink source={village.source} />
                </div>
              </article>

              <aside className="space-y-6">
                {village.kelembagaan ? (
                  <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
                    <h3 className="text-xs font-extrabold tracking-wider text-muted-foreground uppercase">
                      Kelembagaan & Pengelola
                    </h3>
                    <div className="mt-4 space-y-3">
                      <div className="flex items-start gap-3 rounded-2xl border border-border/70 bg-surface p-3.5">
                        <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                          <Building2 className="size-4.5" />
                        </span>
                        <div className="text-xs">
                          <span className="block font-extrabold text-foreground">BUMDes Resmi</span>
                          <span className="text-muted-foreground font-medium">
                            BUMDes Anugrah Ekang Anculai
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 rounded-2xl border border-border/70 bg-surface p-3.5">
                        <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                          <Users className="size-4.5" />
                        </span>
                        <div className="text-xs">
                          <span className="block font-extrabold text-foreground">
                            Pengelola Wisata
                          </span>
                          <span className="text-muted-foreground font-medium">
                            {village.kelembagaan.pokdarwis}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 rounded-2xl border border-border/70 bg-surface p-3.5">
                        <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                          <Sparkles className="size-4.5" />
                        </span>
                        <div className="text-xs">
                          <span className="block font-extrabold text-foreground">
                            Sanggar Budaya
                          </span>
                          <span className="text-muted-foreground font-medium">
                            {village.kelembagaan.sanggar}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 rounded-2xl border border-border/70 bg-surface p-3.5">
                        <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                          <Handshake className="size-4.5" />
                        </span>
                        <div className="text-xs">
                          <span className="block font-extrabold text-foreground">
                            Kemitraan Instansi
                          </span>
                          <span className="text-muted-foreground font-medium">
                            {village.kelembagaan.mitra}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}

                {village.alamat ? (
                  <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
                    <h3 className="text-xs font-extrabold tracking-wider text-muted-foreground uppercase">
                      Informasi Kontak & Akses
                    </h3>
                    <div className="mt-4 space-y-3">
                      <div className="flex items-start gap-3 rounded-2xl border border-border/70 bg-surface p-3.5">
                        <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-gold/15 text-gold">
                          <MapPin className="size-4.5" />
                        </span>
                        <div className="text-xs min-w-0">
                          <span className="block font-extrabold text-foreground">
                            Alamat Kantor & Wilayah
                          </span>
                          <span className="text-muted-foreground font-medium leading-relaxed">
                            {village.alamat}
                          </span>
                        </div>
                      </div>

                      {village.luasDesa ? (
                        <div className="flex items-center gap-3 rounded-2xl border border-border/70 bg-surface p-3.5">
                          <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                            <Maximize2 className="size-4.5" />
                          </span>
                          <div className="text-xs">
                            <span className="block font-extrabold text-foreground">
                              Luas Wilayah Desa
                            </span>
                            <span className="text-muted-foreground font-medium">
                              {village.luasDesa}
                            </span>
                          </div>
                        </div>
                      ) : null}

                      {village.luasKawasanWisata ? (
                        <div className="flex items-center gap-3 rounded-2xl border border-border/70 bg-surface p-3.5">
                          <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                            <Trees className="size-4.5" />
                          </span>
                          <div className="text-xs">
                            <span className="block font-extrabold text-foreground">
                              Kawasan Wisata
                            </span>
                            <span className="text-muted-foreground font-medium">
                              {village.luasKawasanWisata}
                            </span>
                          </div>
                        </div>
                      ) : null}

                      {village.jamOperasional ? (
                        <div className="flex items-center gap-3 rounded-2xl border border-border/70 bg-surface p-3.5">
                          <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                            <Clock className="size-4.5" />
                          </span>
                          <div className="text-xs">
                            <span className="block font-extrabold text-foreground">
                              Jam Operasional
                            </span>
                            <span className="text-muted-foreground font-medium">
                              {village.jamOperasional}
                            </span>
                          </div>
                        </div>
                      ) : null}

                      {village.waktuTerbaik ? (
                        <div className="flex items-center gap-3 rounded-2xl border border-border/70 bg-surface p-3.5">
                          <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-amber-500/10 text-amber-600">
                            <Sun className="size-4.5" />
                          </span>
                          <div className="text-xs">
                            <span className="block font-extrabold text-foreground">
                              Waktu Kunjungan Terbaik
                            </span>
                            <span className="text-muted-foreground font-medium">
                              {village.waktuTerbaik}
                            </span>
                          </div>
                        </div>
                      ) : null}

                      {village.instagram ? (
                        <div className="flex items-center gap-3 rounded-2xl border border-border/70 bg-surface p-3.5">
                          <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                            <Instagram className="size-4.5" />
                          </span>
                          <div className="text-xs truncate">
                            <span className="block font-extrabold text-foreground">
                              Instagram Resmi
                            </span>
                            <span className="text-muted-foreground font-medium">
                              {village.instagram}
                            </span>
                          </div>
                        </div>
                      ) : null}

                      {village.website ? (
                        <div className="flex items-center gap-3 rounded-2xl border border-border/70 bg-surface p-3.5">
                          <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                            <Globe className="size-4.5" />
                          </span>
                          <div className="text-xs truncate">
                            <span className="block font-extrabold text-foreground">
                              Website Wisata
                            </span>
                            <a
                              href={`https://${village.website}`}
                              target="_blank"
                              rel="noreferrer"
                              className="text-primary font-bold hover:underline"
                            >
                              {village.website}
                            </a>
                          </div>
                        </div>
                      ) : null}

                      {village.pemdesWebsite ? (
                        <div className="flex items-center gap-3 rounded-2xl border border-border/70 bg-surface p-3.5">
                          <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                            <Building className="size-4.5" />
                          </span>
                          <div className="text-xs truncate">
                            <span className="block font-extrabold text-foreground">
                              Portal Resmi Pemdes
                            </span>
                            <a
                              href={village.pemdesWebsite}
                              target="_blank"
                              rel="noreferrer"
                              className="text-primary font-bold hover:underline truncate block"
                            >
                              {village.pemdesWebsite}
                            </a>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                ) : null}
              </aside>
            </div>
          </TabsContent>

          {/* Tab 2: Fasilitas */}
          <TabsContent value="fasilitas" className="mt-6">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8">
              <h2 className="text-xl font-extrabold text-foreground">Fasilitas Tersedia</h2>
              <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {village.fasilitas.map((f) => {
                  const Icon = fasilitasIcon[f] ?? Globe;
                  return (
                    <div
                      key={f}
                      className="card-lift rounded-2xl border border-border bg-surface p-5 text-center"
                    >
                      <span className="mx-auto grid size-12 place-items-center rounded-full bg-accent text-primary">
                        <Icon className="size-5" />
                      </span>
                      <p className="mt-3 text-xs font-bold text-foreground">{f}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </TabsContent>

          {/* Tab 3: UMKM 2026 */}
          <TabsContent value="umkm" className="mt-6 space-y-6">
            {/* Category Filter Chips */}
            <div className="flex flex-wrap items-center gap-2 pb-1">
              {[
                { id: "Semua", label: "Semua Kategori", icon: "✨" },
                { id: "Kuliner & Olahan Pangan", label: "Kuliner & Olahan Pangan", icon: "🍲" },
                { id: "Kerajinan & Produk Khas", label: "Kerajinan & Produk Khas", icon: "🎨" },
                {
                  id: "Oleh-oleh & Produk Kreatif",
                  label: "Oleh-oleh & Produk Kreatif",
                  icon: "🎁",
                },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedUmkmCat(cat.id)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold transition-all cursor-pointer ${
                    selectedUmkmCat === cat.id
                      ? "bg-primary text-primary-foreground shadow-card"
                      : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {(siteData?.umkmList && siteData.umkmList.length > 0
                ? siteData.umkmList
                : (village.umkmList ?? [])
              )
                .filter((u) => selectedUmkmCat === "Semua" || u.kategori === selectedUmkmCat)
                .map((u) => (
                  <div
                    key={u.id}
                    className="card-lift flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-card"
                  >
                    <div>
                      {u.image && (
                        <img
                          src={resolveImageUrl(u.image, u.nama)}
                          alt={u.nama}
                          onError={(e) => {
                            e.currentTarget.src = getImageFallback(u.nama, u.kategori);
                          }}
                          className="aspect-video w-full rounded-2xl object-cover"
                        />
                      )}
                      <div className="mt-3 flex items-center justify-between gap-2">
                        <span className="inline-block rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-extrabold text-emerald-700 dark:text-emerald-300">
                          {u.kategori}
                        </span>
                        {u.hargaInfo && (
                          <span className="text-xs font-bold text-foreground font-mono">
                            {u.hargaInfo}
                          </span>
                        )}
                      </div>
                      <h3 className="mt-2 text-base font-extrabold text-foreground">{u.nama}</h3>
                      <p className="mt-2 text-xs font-medium leading-relaxed text-muted-foreground">
                        {u.deskripsi}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-border/60">
                      <SourceLink source={u.source} />
                    </div>
                  </div>
                ))}
            </div>
          </TabsContent>

          {/* Tab 4: Kegiatan Desa 2026 */}
          <TabsContent value="kegiatan" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              {(siteData?.kegiatanList !== undefined
                ? siteData.kegiatanList
                : (village.kegiatanList ?? [])
              ).map((kg) => (
                <div
                  key={kg.id}
                  className="card-lift flex flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-card"
                >
                  <div>
                    <span className="text-xs font-bold text-primary">{kg.tanggal}</span>
                    <h3 className="mt-1 text-lg font-extrabold text-foreground">{kg.judul}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {kg.deskripsi}
                    </p>
                  </div>
                  <SourceLink source={kg.source} />
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Tab 5: Paket Wisata */}
          <TabsContent value="paket" className="mt-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {village.paket.map((p) => (
                <div
                  key={p.id}
                  className="card-lift flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-card group hover:border-primary/50 transition-all"
                >
                  <div>
                    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-muted">
                      <img
                        src={resolveImageUrl(p.image, p.nama)}
                        alt={p.nama}
                        onError={(e) => {
                          e.currentTarget.src = getImageFallback(p.nama, p.kategori);
                        }}
                        className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute top-2.5 right-2.5 rounded-full bg-black/60 backdrop-blur px-3 py-1 text-[10px] font-black text-white uppercase">
                        Paket Resmi Desa
                      </span>
                    </div>
                    <h3 className="mt-4 text-base font-extrabold text-foreground">{p.nama}</h3>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed font-medium">
                      {p.highlight}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase font-bold text-muted-foreground">
                        Keterangan Biaya
                      </p>
                      <p className="text-sm font-black text-primary">{p.hargaText}</p>
                    </div>
                    <Link
                      to="/rencanakan-kunjungan"
                      className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-bold text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <span>Lihat Rute</span>
                      <ArrowRight className="size-3" />
                    </Link>
                  </div>
                  <div className="mt-2">
                    <SourceLink source={p.source} />
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Tab 6: Galeri */}
          <TabsContent value="galeri" className="mt-6">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {village.galeri.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setLightbox(resolveImageUrl(img, `Galeri ${i + 1}`))}
                  className="group relative aspect-square overflow-hidden rounded-2xl border border-border"
                >
                  <img
                    src={resolveImageUrl(img, `Galeri ${i + 1}`)}
                    alt={`Galeri ${i + 1}`}
                    onError={(e) => {
                      e.currentTarget.src = "/assets/village-ekang-anculai.jpg";
                    }}
                    className="size-full object-cover transition-transform group-hover:scale-105"
                  />
                  <span className="absolute inset-0 grid place-items-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity text-white">
                    <Camera className="size-6" />
                  </span>
                </button>
              ))}
            </div>
          </TabsContent>

          {/* Tab 7: Peta */}
          <TabsContent value="peta" className="mt-6">
            <div className="min-h-[460px] overflow-hidden rounded-3xl border border-border shadow-card">
              <Suspense fallback={<div className="p-12 text-center text-xs">Memuat peta...</div>}>
                <MapCanvas items={[village]} landmarks={siteData.landmarkList} />
              </Suspense>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Lightbox Dialog */}
      {lightbox && (
        <Dialog open={!!lightbox} onOpenChange={() => setLightbox(null)}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black border-0">
            <img
              src={resolveImageUrl(lightbox)}
              alt="Enlarged"
              onError={(e) => {
                e.currentTarget.src = "/assets/village-ekang-anculai.jpg";
              }}
              className="w-full h-auto max-h-[85vh] object-contain"
            />
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
