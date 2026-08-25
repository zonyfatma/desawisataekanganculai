import { useState, useMemo } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Clock,
  MapPin,
  MessageCircle,
  ArrowRight,
  ExternalLink,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Users,
  HeartHandshake,
  Trees,
  ShoppingBag,
  Home,
  Palette,
  Utensils,
  BookOpen,
  Award,
  Compass,
  Check,
  Calendar,
  ShieldCheck,
  Coffee,
  Info,
  Sun,
  Moon,
  Camera,
  SlidersHorizontal,
  Wand2,
  Plus,
  Trash2,
  Send,
  HelpCircle,
  Footprints,
  Bike,
  Smile,
  BadgeCheck,
} from "lucide-react";
import { TripPlannerModal } from "@/components/site/TripPlannerModal";
import { SourceLink } from "@/components/site/SourceLink";
import { CategoryIcon } from "@/components/site/CategoryIcon";
import {
  officialFullDayPackage,
  officialTwoDayPackage,
  cbtExperiences8,
  galeri8Categories,
  WHATSAPP_NUMBER,
  type FullDayActivity,
  type TwoDayActivityItem,
} from "@/data/jadesta";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useSiteData } from "@/lib/cms-store";
import { JsonLdScript, getBreadcrumbJsonLd } from "@/lib/json-ld";

export const Route = createFileRoute("/rencanakan-kunjungan")({
  head: () => ({
    meta: [
      { title: "Paket & Rancang Wisata Kustom Ekang Anculai | Desa Wisata Hijau dan Kreatif" },
      {
        name: "description",
        content:
          "Pilih paket wisata resmi (Full Day, 2D1N Live-in Homestay) atau rancang paket kustom sendiri sesuai kebutuhan keluarga, komunitas, dan rombongan di Desa Wisata Ekang Anculai Bintan.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://desawisataekanganculai.id/rencanakan-kunjungan" },
      {
        property: "og:title",
        content: "Paket & Rancang Wisata Kustom Ekang Anculai | Desa Wisata Hijau dan Kreatif",
      },
      {
        property: "og:description",
        content:
          "Rencanakan perjalanan wisata autentik di Desa Ekang Anculai Bintan: edukasi membatik, agrowisata, mangrove, budaya, dan Homestay Desa.",
      },
      {
        property: "og:image",
        content: "https://desawisataekanganculai.id/android-chrome-512x512.png",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Paket & Pengalaman Wisata Ekang Anculai Bintan",
      },
      {
        name: "twitter:description",
        content:
          "Rencanakan perjalanan wisata autentik di Desa Ekang Anculai Bintan: edukasi membatik, agrowisata, mangrove, budaya, dan Homestay Desa.",
      },
      {
        name: "twitter:image",
        content: "https://desawisataekanganculai.id/android-chrome-512x512.png",
      },
    ],
    links: [{ rel: "canonical", href: "https://desawisataekanganculai.id/rencanakan-kunjungan" }],
  }),
  component: PaketPengalamanWisataPage,
});

export type CustomModule = {
  id: string;
  nama: string;
  kategori: string;
  estimasi: string;
  icon: string;
  deskripsi: string;
  keunggulan: string;
};

export const customModulesList: CustomModule[] = [
  {
    id: "mod-batik",
    nama: "Edukasi & Workshop Membatik Bintan",
    kategori: "Kreativitas & Kriya",
    estimasi: "± 2 Jam",
    icon: "batik",
    deskripsi:
      "Belajar teknik mencanting batik tulis & cap motif khas Bintan, serta membawa pulang hasil karya kain suvenir sendiri.",
    keunggulan: "Termasuk bahan canting, malam lilin, kain mori, dan bimbingan perajin lokal",
  },
  {
    id: "mod-mangrove",
    nama: "Susur Kawasan Hutan Mangrove & Boardwalk",
    kategori: "Ekowisata & Alam",
    estimasi: "± 1.5 Jam",
    icon: "mangrove",
    deskripsi:
      "Menyusuri jembatan kayu ratusan meter melintasi hutan bakau pedalaman, edukasi ekosistem karbon & pengamatan satwa pesisir.",
    keunggulan: "Pemandangan sunset dan jalur asri bebas polusi",
  },
  {
    id: "mod-kebun",
    nama: "Pengalaman Tani & Berkebun Bersama Petani",
    kategori: "Agrowisata",
    estimasi: "± 1.5 Jam",
    icon: "farm",
    deskripsi:
      "Bercocok tanam langsung di lahan perkebunan masyarakat, mencangkul, merawat tanaman, dan memanen sayuran segar bersama warga.",
    keunggulan: "Interaksi langsung dan pengalaman nyata kehidupan tani",
  },
  {
    id: "mod-reog",
    nama: "Atraksi Kesenian Reog Sedulur Manunggal",
    kategori: "Kesenian Budaya",
    estimasi: "± 1.5 Jam",
    icon: "culture",
    deskripsi:
      "Pementasan atraksi seni tari Reog fersi Kendang Kempul diiringi instrumen gamelan kolosal oleh sanggar seni pemuda desa.",
    keunggulan: "Kesenian budaya autentik kebanggaan masyarakat desa",
  },
  {
    id: "mod-kuliner",
    nama: "Wisata Kuliner & Olahan Rengginang Comel",
    kategori: "Kuliner & UMKM",
    estimasi: "± 1 Jam",
    icon: "culinary",
    deskripsi:
      "Mengenal proses pembuatan Rengginang Comel aneka warna Halal di Dapur Rub, olahan ubi & pisang, serta mencicipi camilan khas desa.",
    keunggulan: "Icip-icip camilan gurih renyah & belanja produk UMKM lokal",
  },
  {
    id: "mod-teko",
    nama: "Ruang Budaya Teko Kayangan & RTH Desa",
    kategori: "Ruang Publik",
    estimasi: "± 1 Jam",
    icon: "culture",
    deskripsi:
      "Kunjungan ke landmark teko air melayang, bersantai di ruang terbuka hijau desa, dan berdiskusi hangat bersama tokoh masyarakat.",
    keunggulan: "Spot foto ikonik & ruang komunitas asri",
  },
  {
    id: "mod-homestay",
    nama: "Live-in Homestay Rumah Warga",
    kategori: "Akomodasi Desa",
    estimasi: "1 Malam",
    icon: "homestay",
    deskripsi:
      "Menginap di kamar keluarga warga desa, merasakan keramahan tuan rumah, sarapan masakan rumahan, dan suasana malam pedesaan.",
    keunggulan: "Kamar bersih berstandar CBT dengan suasana hangat kekeluargaan",
  },
  {
    id: "mod-sepeda",
    nama: "Gowes Keliling Desa & Sentra Kerajinan",
    kategori: "Jelajah Santai",
    estimasi: "± 1 Jam",
    icon: "tour",
    deskripsi:
      "Bersepeda santai menyusuri jalan asri perkampungan, menyapa warga desa, dan singgah di galeri kriya suvenir lokal.",
    keunggulan: "Aktivitas luar ruang yang menyegarkan raga dan pikiran",
  },
];

export const customFacilitiesList = [
  {
    id: "fac-lunch",
    label: "Makan Siang Tradisional Prasmanan Desa (Gulai Daun Ubi, Ikan Segar & Sambal)",
  },
  { id: "fac-dinner", label: "Makan Malam Bersama Keluarga Tuan Rumah (Untuk Paket Menginap)" },
  { id: "fac-coconut", label: "Welcome Drink Air Kelapa Muda Asli Petik Kebun Warga" },
  { id: "fac-guide", label: "Pemandu Wisata Lokal (Local Tour Guide) Berlisensi" },
  { id: "fac-photo", label: "Dokumentasi Foto & Video Kegiatan Selama Kunjungan" },
  {
    id: "fac-transport",
    label: "Layanan Transportasi Antar-Jemput (Pelabuhan BBT Lagoi / Tanjung Uban / TPI)",
  },
];

export function PaketPengalamanWisataPage() {
  const [openPlannerModal, setOpenPlannerModal] = useState(false);
  const [selectedPackageTab, setSelectedPackageTab] = useState<"fullday" | "twoday" | "custom">(
    "fullday",
  );
  const [selectedDay2Tab, setSelectedDay2Tab] = useState<1 | 2>(1);
  const [activeFullDayModal, setActiveFullDayModal] = useState<FullDayActivity | null>(null);
  const [activeTwoDayModal, setActiveTwoDayModal] = useState<TwoDayActivityItem | null>(null);

  // Custom Builder State
  const [customDuration, setCustomDuration] = useState<string>("Full Day (±8 Jam)");
  const [customGroupType, setCustomGroupType] = useState<string>("Keluarga / Family Trip");
  const [customGroupSize, setCustomGroupSize] = useState<string>("3 - 6 Orang");
  const [selectedModules, setSelectedModules] = useState<string[]>([
    "mod-batik",
    "mod-mangrove",
    "mod-kebun",
    "mod-kuliner",
  ]);
  const [selectedFacilities, setSelectedFacilities] = useState<string[]>([
    "fac-lunch",
    "fac-coconut",
    "fac-guide",
  ]);

  const siteData = useSiteData();
  const fullDay = siteData?.fullDay || officialFullDayPackage;
  const twoDay = siteData?.twoDay || officialTwoDayPackage;
  const cbtExperiences = siteData?.cbtExperiences || cbtExperiences8;
  const galeriCategories = siteData?.galeriCategories || galeri8Categories;
  const whatsappNumber = siteData?.villageInfo?.whatsapp || WHATSAPP_NUMBER;

  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Beranda", url: "/" },
    { name: "Paket & Rencanakan Kunjungan", url: "/rencanakan-kunjungan" },
  ]);

  const waFullDayMsg = encodeURIComponent(
    "Halo Pengelola Desa Wisata Ekang Anculai, saya tertarik dengan Paket Wisata Full Day (1 Hari). Mohon informasi ketersediaan jadwal, rincian biaya, dan panduan reservasi.",
  );

  const waTwoDayMsg = encodeURIComponent(
    "Halo Pengelola Desa Wisata Ekang Anculai, saya tertarik dengan Paket Wisata 2 Hari 1 Malam (2D1N Live-in Homestay). Mohon informasi ketersediaan jadwal, rincian biaya, dan panduan reservasi.",
  );

  // Dynamic Custom WhatsApp Message Generator
  const customWhatsAppUrl = useMemo(() => {
    const chosenModulesNames = customModulesList
      .filter((m) => selectedModules.includes(m.id))
      .map((m, idx) => `   ${idx + 1}. ${m.nama} (${m.estimasi})`)
      .join("\n");

    const chosenFacilitiesNames = customFacilitiesList
      .filter((f) => selectedFacilities.includes(f.id))
      .map((f) => `   - ${f.label}`)
      .join("\n");

    const message = `Halo Pengelola Desa Wisata Ekang Anculai, saya ingin konsultasi RANCANGAN PAKET WISATA KUSTOM:

• Pilihan Durasi: ${customDuration}
• Tipe Rombongan: ${customGroupType} (${customGroupSize})
• Modul Aktivitas yang Dipilih (${selectedModules.length} Aktivitas):
${chosenModulesNames || "   (Belum memilih modul aktivitas)"}

• Fasilitas Tambahan (${selectedFacilities.length} Fasilitas):
${chosenFacilitiesNames || "   (Fasilitas standar)"}

Mohon informasi perkiraan anggaran biaya, rekomendasi jadwal terbaik, dan panduan reservasi. Terima kasih!`;

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  }, [
    customDuration,
    customGroupType,
    customGroupSize,
    selectedModules,
    selectedFacilities,
    whatsappNumber,
  ]);

  const toggleModule = (id: string) => {
    setSelectedModules((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const toggleFacility = (id: string) => {
    setSelectedFacilities((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const applyPreset = (presetType: "edukasi" | "keluarga" | "budaya") => {
    if (presetType === "edukasi") {
      setCustomDuration("Full Day (±8 Jam)");
      setCustomGroupType("Sekolah / Kampus / Edukasi");
      setCustomGroupSize("15 - 30 Orang");
      setSelectedModules(["mod-batik", "mod-mangrove", "mod-kebun", "mod-kuliner"]);
      setSelectedFacilities(["fac-lunch", "fac-coconut", "fac-guide", "fac-photo"]);
    } else if (presetType === "keluarga") {
      setCustomDuration("Full Day (±8 Jam)");
      setCustomGroupType("Keluarga / Family Trip");
      setCustomGroupSize("3 - 6 Orang");
      setSelectedModules(["mod-batik", "mod-kuliner", "mod-teko", "mod-mangrove"]);
      setSelectedFacilities(["fac-lunch", "fac-coconut", "fac-guide"]);
    } else if (presetType === "budaya") {
      setCustomDuration("2 Hari 1 Malam (Menginap Homestay)");
      setCustomGroupType("Komunitas / Pemerhati Budaya");
      setCustomGroupSize("5 - 12 Orang");
      setSelectedModules([
        "mod-homestay",
        "mod-batik",
        "mod-reog",
        "mod-mangrove",
        "mod-kuliner",
        "mod-teko",
      ]);
      setSelectedFacilities([
        "fac-lunch",
        "fac-dinner",
        "fac-coconut",
        "fac-guide",
        "fac-photo",
        "fac-transport",
      ]);
    }
  };

  return (
    <div className="min-h-screen bg-surface pt-20 pb-24 text-foreground selection:bg-primary/20 selection:text-primary">
      <JsonLdScript data={breadcrumbSchema} />

      {/* 1. HERO SECTION - PREMIUM & PROFESSIONAL */}
      <section className="relative overflow-hidden bg-card border-b border-border/80 py-16 sm:py-24">
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 size-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 right-0 size-80 rounded-full bg-gold/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 border border-primary/30 px-3.5 py-1 text-xs font-extrabold text-primary uppercase tracking-wider">
                  <Sparkles className="size-3.5" />
                  Community Based Tourism (CBT)
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/20 border border-gold/40 px-3.5 py-1 text-xs font-extrabold text-gold uppercase tracking-wider">
                  <Award className="size-3.5" />
                  Desa Wisata Bintan 2026
                </span>
              </div>

              <h1 className="mt-5 text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-[1.12]">
                Paket Wisata Resmi & <br className="hidden sm:inline" />
                <span className="gradient-text">Rancang Paket Kustom</span>
              </h1>

              <p className="mt-4 text-base sm:text-xl font-bold text-emerald-800 dark:text-emerald-300 italic">
                "{fullDay.tema}"
              </p>

              <p className="mt-4 text-xs sm:text-base leading-relaxed text-muted-foreground font-medium max-w-2xl">
                Pilih paket perjalanan resmi siap berangkat atau rangkai sendiri modul aktivitas
                sesuai keinginan Anda. Dari edukasi membatik canting, bertani sayur, susur hutan
                mangrove, kesenian Reog, hingga live-in homestay ramah keluarga.
              </p>

              {/* Stat & Trust Badges */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-border/80 max-w-2xl">
                <div className="rounded-2xl border border-border bg-surface p-3 text-center">
                  <p className="text-xs font-bold text-muted-foreground">Konsep</p>
                  <p className="text-sm font-extrabold text-primary mt-0.5">100% CBT Desa</p>
                </div>
                <div className="rounded-2xl border border-border bg-surface p-3 text-center">
                  <p className="text-xs font-bold text-muted-foreground">Pilihan Durasi</p>
                  <p className="text-sm font-extrabold text-foreground mt-0.5">
                    1 Hari / 2D1N / Kustom
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-surface p-3 text-center">
                  <p className="text-xs font-bold text-muted-foreground">Pemandu</p>
                  <p className="text-sm font-extrabold text-gold mt-0.5">Warga Lokal</p>
                </div>
                <div className="rounded-2xl border border-border bg-surface p-3 text-center">
                  <p className="text-xs font-bold text-muted-foreground">Aksesibilitas</p>
                  <p className="text-sm font-extrabold text-emerald-600 mt-0.5">15 Mnt dr Lagoi</p>
                </div>
              </div>

              {/* CTA Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#pilih-paket"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-xs font-extrabold text-primary-foreground shadow-card transition-all hover:bg-emerald-deep hover:scale-105 cursor-pointer"
                >
                  <Calendar className="size-4" />
                  <span>Jelajahi Pilihan Paket</span>
                  <ArrowRight className="size-4" />
                </a>

                <button
                  onClick={() => {
                    setSelectedPackageTab("custom");
                    const el = document.getElementById("pilih-paket");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-xs font-extrabold text-gold-foreground shadow-card transition-all hover:bg-gold/90 hover:scale-105 cursor-pointer"
                >
                  <Wand2 className="size-4" />
                  <span>Rancang Paket Kustom ✨</span>
                </button>
              </div>
            </div>

            {/* Hero Image Showcase */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-border shadow-2xl group">
                <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
                  <img
                    src={fullDay.galeri[0]?.image || galeriCategories[0]?.image}
                    alt="Paket & Pengalaman Wisata Ekang Anculai"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-gold px-3 py-1 text-[10px] font-black text-gold-foreground uppercase tracking-wider">
                      Dokumentasi Lapangan
                    </span>
                    <span className="text-[11px] text-white/80 font-medium">
                      Bintan, Kepulauan Riau
                    </span>
                  </div>
                  <p className="mt-2 text-sm sm:text-base font-extrabold text-white leading-snug">
                    Desa Wisata Hijau dan Kreatif Berbasis Pemberdayaan Masyarakat
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16 space-y-24">
        {/* 2. SECTION PILIH PAKET (3-WAY INTERACTIVE SWITCHER: FULL DAY, 2D1N, PAKET KUSTOM) */}
        <section id="pilih-paket" className="scroll-mt-28">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-extrabold text-gold uppercase tracking-wider">
              Pilihan Rangkaian Perjalanan
            </span>
            <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold text-foreground">
              Pilih Paket Sesuai Gaya Kunjungan Anda
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground font-medium">
              Tersedia paket resmi terstruktur 1 Hari & 2D1N, serta fitur interaktif Rancang Paket
              Kustom untuk menyesuaikan aktivitas, fasilitas, dan anggaran rombongan Anda.
            </p>

            {/* 3-WAY Switcher Pills */}
            <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-1.5 rounded-full bg-card border border-border p-1.5 shadow-card">
              <button
                type="button"
                onClick={() => setSelectedPackageTab("fullday")}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-extrabold transition-all cursor-pointer ${
                  selectedPackageTab === "fullday"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Sun className="size-4" />
                <span>Paket 1: Full Day (1 Hari)</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedPackageTab("twoday")}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-extrabold transition-all cursor-pointer ${
                  selectedPackageTab === "twoday"
                    ? "bg-gold text-gold-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Moon className="size-4" />
                <span>Paket 2: 2 Hari 1 Malam (2D1N)</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedPackageTab("custom")}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-extrabold transition-all cursor-pointer ${
                  selectedPackageTab === "custom"
                    ? "bg-emerald-600 text-white shadow-sm ring-2 ring-emerald-400"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Wand2 className="size-4 text-amber-300" />
                <span>Paket 3: Rancang Kustom ✨</span>
              </button>
            </div>
          </div>

          {/* TAB 1: FULL DAY PACKAGE */}
          {selectedPackageTab === "fullday" && (
            <div className="mt-12 rounded-3xl border border-primary/30 bg-card p-6 sm:p-10 shadow-2xl space-y-10 animate-fade-in">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border pb-8">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-primary/10 px-3.5 py-1 text-xs font-black text-primary uppercase tracking-wider">
                      One Day Pass • 1 Hari Penuh
                    </span>
                    <span className="rounded-full bg-surface border border-border px-3 py-1 text-xs font-bold text-muted-foreground">
                      09.00 – 17.00 WIB
                    </span>
                  </div>
                  <h3 className="mt-3 text-2xl sm:text-4xl font-extrabold text-foreground">
                    Paket Wisata Full Day Ekang Anculai
                  </h3>
                  <p className="mt-1 text-sm sm:text-base font-extrabold text-gold italic">
                    "{fullDay.tema}"
                  </p>
                  <p className="mt-3 text-xs sm:text-sm text-muted-foreground max-w-3xl leading-relaxed">
                    Pengalaman satu hari penuh yang memadukan aktivitas edukasi mencanting batik,
                    bertani di kebun sayur masyarakat, menikmati sajian kuliner tradisional,
                    mengenal atraksi seni Reog, dan belanja oleh-oleh UMKM.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row md:flex-col items-stretch gap-3 shrink-0">
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${waFullDayMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-extrabold text-primary-foreground shadow-card hover:bg-emerald-deep transition-all"
                  >
                    <MessageCircle className="size-4" />
                    <span>Konsultasi / Booking via WA</span>
                  </a>
                  <button
                    onClick={() => setOpenPlannerModal(true)}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-surface border border-border px-6 py-3 text-xs font-bold text-foreground hover:bg-accent transition-all cursor-pointer"
                  >
                    <Calendar className="size-4 text-gold" />
                    <span>Formulir Rencana Wisata</span>
                  </button>
                </div>
              </div>

              {/* What is Included Checklist */}
              <div className="rounded-2xl bg-surface border border-border p-6">
                <h4 className="text-xs font-black text-primary uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="size-4 text-emerald-600" />
                  Fasilitas & Layanan Termasuk:
                </h4>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-medium text-foreground">
                  {[
                    "Pemandu wisata lokal berlisensi",
                    "Welcome drink & kelapa muda segar",
                    "Bahan & kain praktik mencanting batik",
                    "Makan siang kuliner khas desa",
                    "Tiket masuk kawasan & daya tarik",
                    "Pendampingan aktivitas tani bersama warga",
                    "Dokumentasi kegiatan",
                    "Akses parkir & fasilitas balai desa",
                  ].map((inc, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline Full Day */}
              <div>
                <h4 className="text-lg font-extrabold text-foreground mb-6 flex items-center gap-2">
                  <Clock className="size-5 text-primary" />
                  Rundown & Jadwal Aktivitas (09.00 – 17.00 WIB)
                </h4>

                <div className="relative pl-6 sm:pl-10 border-l-2 border-primary/30 space-y-8">
                  {fullDay.rangkaian.map((item, idx) => (
                    <div key={idx} className="relative group">
                      <div className="absolute -left-[37px] sm:-left-[53px] top-1.5 grid size-9 sm:size-10 place-items-center rounded-full bg-primary text-primary-foreground font-black text-xs sm:text-sm shadow-card ring-4 ring-card">
                        <CategoryIcon icon={item.icon} className="size-4 sm:size-5" />
                      </div>

                      <div className="rounded-2xl border border-border bg-surface p-5 sm:p-6 shadow-soft hover:border-primary/40 transition-all">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/50 pb-3">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-black text-gold uppercase">
                                {item.num}
                              </span>
                              <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-extrabold text-primary">
                                {item.kategori}
                              </span>
                            </div>
                            <h5 className="mt-1 text-base sm:text-lg font-extrabold text-foreground">
                              {item.judul}
                            </h5>
                          </div>
                          <span className="inline-block rounded-xl bg-card px-3 py-1 text-xs font-black text-primary border border-border shrink-0 self-start sm:self-auto">
                            {item.waktu} WIB
                          </span>
                        </div>

                        <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground font-medium">
                          {item.deskripsi}
                        </p>

                        <div className="mt-3 grid gap-1.5 sm:grid-cols-2 pt-2 border-t border-border/40 text-xs font-medium text-foreground">
                          {item.isi.map((pt, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <Check className="size-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span className="leading-snug">{pt}</span>
                            </div>
                          ))}
                        </div>

                        <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between">
                          {item.linkRef?.url ? (
                            <a
                              href={item.linkRef.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[11px] font-bold text-primary hover:underline"
                            >
                              <span>{item.linkRef.nama}</span>
                              <ExternalLink className="size-3" />
                            </a>
                          ) : (
                            <span className="text-[11px] text-muted-foreground font-medium">
                              Pengalaman Terkurasi CBT
                            </span>
                          )}

                          <button
                            onClick={() => setActiveFullDayModal(item)}
                            className="inline-flex items-center gap-1 text-xs font-bold text-foreground hover:text-primary transition-colors cursor-pointer"
                          >
                            <span>Detail Rinci</span>
                            <ChevronRight className="size-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <SourceLink source={fullDay.source} />
              </div>
            </div>
          )}

          {/* TAB 2: 2 HARI 1 MALAM (2D1N) */}
          {selectedPackageTab === "twoday" && (
            <div className="mt-12 rounded-3xl border border-gold/40 bg-card p-6 sm:p-10 shadow-2xl space-y-10 ring-2 ring-gold/15 animate-fade-in">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border pb-8">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-gold/20 px-3.5 py-1 text-xs font-black text-gold uppercase tracking-wider">
                      Live-in Homestay • 2 Hari 1 Malam
                    </span>
                    <span className="rounded-full bg-surface border border-border px-3 py-1 text-xs font-bold text-muted-foreground">
                      Menginap di Rumah Warga Lokal
                    </span>
                  </div>
                  <h3 className="mt-3 text-2xl sm:text-4xl font-extrabold text-foreground">
                    Paket Wisata 2 Hari 1 Malam (2D1N)
                  </h3>
                  <p className="mt-1 text-sm sm:text-base font-extrabold text-primary italic">
                    "{twoDay.tagline}"
                  </p>
                  <p className="mt-3 text-xs sm:text-sm text-muted-foreground max-w-3xl leading-relaxed">
                    Pengalaman menginap live-in mendalam bersama keluarga tuan rumah di desa.
                    Merasakan ketenangan pedesaan, makan malam bersama warga, susur mangrove pagi
                    hari, hingga berbelanja oleh-oleh produk lokal.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row md:flex-col items-stretch gap-3 shrink-0">
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${waTwoDayMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-xs font-black text-gold-foreground shadow-card hover:bg-gold/90 transition-all"
                  >
                    <MessageCircle className="size-4" />
                    <span>Konsultasi 2D1N via WA</span>
                  </a>
                  <button
                    onClick={() => setOpenPlannerModal(true)}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-surface border border-border px-6 py-3 text-xs font-bold text-foreground hover:bg-accent transition-all cursor-pointer"
                  >
                    <Calendar className="size-4 text-gold" />
                    <span>Formulir Rencana 2D1N</span>
                  </button>
                </div>
              </div>

              {/* What is Included Checklist */}
              <div className="rounded-2xl bg-surface border border-border p-6">
                <h4 className="text-xs font-black text-gold uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="size-4 text-gold" />
                  Fasilitas & Layanan Termasuk (2D1N):
                </h4>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-medium text-foreground">
                  {[
                    "Akomodasi Homestay Rumah Warga (1 Malam)",
                    "Makan 3x (Makan Siang, Malam, & Sarapan)",
                    "Pemandu lokal berlisensi selama 2 hari",
                    "Workshop membatik & hasil karya kain",
                    "Tiket masuk & susur hutan mangrove",
                    "Pengalaman berkebun sayur bersama petani",
                    "Suasana malam & interaksi keluarga tuan rumah",
                    "Dokumentasi lengkap & oleh-oleh khas",
                  ].map((inc, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-gold shrink-0" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Day 1 & Day 2 Sub-Tabs */}
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-border/80 pb-4">
                  <h4 className="text-lg font-extrabold text-foreground flex items-center gap-2">
                    <Calendar className="size-5 text-gold" />
                    Rangkaian Acara 2 Hari 1 Malam
                  </h4>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedDay2Tab(1)}
                      className={`rounded-full px-4 py-1.5 text-xs font-extrabold transition-all cursor-pointer ${
                        selectedDay2Tab === 1
                          ? "bg-gold text-gold-foreground shadow-sm"
                          : "bg-surface border border-border text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      Hari ke-1 (Kedatangan & Budaya)
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedDay2Tab(2)}
                      className={`rounded-full px-4 py-1.5 text-xs font-extrabold transition-all cursor-pointer ${
                        selectedDay2Tab === 2
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "bg-surface border border-border text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      Hari ke-2 (Mangrove & Belanja)
                    </button>
                  </div>
                </div>

                {/* DAY 1 */}
                {selectedDay2Tab === 1 && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="rounded-2xl bg-gold/10 border border-gold/30 p-4">
                      <span className="text-xs font-black text-gold uppercase">Hari Pertama</span>
                      <p className="text-base font-extrabold text-foreground mt-0.5">
                        {twoDay.hari1.subHeader}
                      </p>
                    </div>

                    <div className="relative pl-6 sm:pl-10 border-l-2 border-gold/40 space-y-6">
                      {twoDay.hari1.rangkaian.map((item, idx) => (
                        <div key={idx} className="relative group">
                          <div className="absolute -left-[37px] sm:-left-[53px] top-1.5 grid size-9 sm:size-10 place-items-center rounded-full bg-gold text-gold-foreground font-black text-xs sm:text-sm shadow-card ring-4 ring-card">
                            <CategoryIcon icon={item.icon} className="size-4 sm:size-5" />
                          </div>

                          <div className="rounded-2xl border border-border bg-surface p-5 sm:p-6 shadow-soft">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/50 pb-3">
                              <div>
                                {item.kategori && (
                                  <span className="rounded-full bg-gold/10 px-2.5 py-0.5 text-[11px] font-extrabold text-gold">
                                    {item.kategori}
                                  </span>
                                )}
                                <h5 className="mt-1 text-base sm:text-lg font-extrabold text-foreground">
                                  {item.judul}
                                </h5>
                              </div>
                              <span className="inline-block rounded-xl bg-card px-3 py-1 text-xs font-black text-gold border border-border shrink-0 self-start sm:self-auto">
                                {item.waktu} WIB
                              </span>
                            </div>

                            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground font-medium">
                              {item.deskripsi}
                            </p>

                            <div className="mt-3 space-y-1 text-xs font-medium text-foreground pt-2 border-t border-border/40">
                              {item.isi.map((pt, i) => (
                                <div key={i} className="flex items-start gap-2">
                                  <span className="size-1.5 rounded-full bg-gold shrink-0 mt-1.5" />
                                  <span>{pt}</span>
                                </div>
                              ))}
                            </div>

                            {item.note && (
                              <div className="mt-3 rounded-xl bg-amber-500/10 border border-amber-500/30 px-3 py-1 text-xs font-bold text-amber-800 dark:text-amber-300">
                                💡 Catatan: {item.note}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* DAY 2 */}
                {selectedDay2Tab === 2 && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="rounded-2xl bg-primary/10 border border-primary/30 p-4">
                      <span className="text-xs font-black text-primary uppercase">Hari Kedua</span>
                      <p className="text-base font-extrabold text-foreground mt-0.5">
                        {twoDay.hari2.subHeader}
                      </p>
                    </div>

                    <div className="relative pl-6 sm:pl-10 border-l-2 border-primary/40 space-y-6">
                      {twoDay.hari2.rangkaian.map((item, idx) => (
                        <div key={idx} className="relative group">
                          <div className="absolute -left-[37px] sm:-left-[53px] top-1.5 grid size-9 sm:size-10 place-items-center rounded-full bg-primary text-primary-foreground font-black text-xs sm:text-sm shadow-card ring-4 ring-card">
                            <CategoryIcon icon={item.icon} className="size-4 sm:size-5" />
                          </div>

                          <div className="rounded-2xl border border-border bg-surface p-5 sm:p-6 shadow-soft">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/50 pb-3">
                              <div>
                                {item.kategori && (
                                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-extrabold text-primary">
                                    {item.kategori}
                                  </span>
                                )}
                                <h5 className="mt-1 text-base sm:text-lg font-extrabold text-foreground">
                                  {item.judul}
                                </h5>
                              </div>
                              <span className="inline-block rounded-xl bg-card px-3 py-1 text-xs font-black text-primary border border-border shrink-0 self-start sm:self-auto">
                                {item.waktu} WIB
                              </span>
                            </div>

                            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground font-medium">
                              {item.deskripsi}
                            </p>

                            <div className="mt-3 space-y-1 text-xs font-medium text-foreground pt-2 border-t border-border/40">
                              {item.isi.map((pt, i) => (
                                <div key={i} className="flex items-start gap-2">
                                  <span className="size-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                                  <span>{pt}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="border-t border-border pt-4">
                <SourceLink source={twoDay.source} />
              </div>
            </div>
          )}

          {/* TAB 3: PAKET KUSTOM (INTERACTIVE CUSTOM TOUR BUILDER) */}
          {selectedPackageTab === "custom" && (
            <div className="mt-12 rounded-3xl border-2 border-emerald-500/50 bg-card p-6 sm:p-10 shadow-2xl space-y-12 animate-fade-in relative overflow-hidden">
              {/* Background Accent */}
              <div className="pointer-events-none absolute top-0 right-0 size-96 bg-emerald-500/10 rounded-full blur-3xl" />

              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border pb-8">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 px-3.5 py-1 text-xs font-black text-emerald-800 dark:text-emerald-300 uppercase tracking-wider">
                    <Wand2 className="size-3.5" />
                    Interactive Custom Tour Builder
                  </span>
                  <h3 className="mt-3 text-2xl sm:text-4xl font-extrabold text-foreground">
                    Rancang Paket Wisata Kustom Mandiri
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground max-w-2xl leading-relaxed">
                    Sesuaikan durasi, tipe rombongan, modul kegiatan wisata, dan fasilitas tambahan
                    sesuai preferensi spesifik Anda. Ringkasan akan terbuat otomatis dan siap
                    dikirim langsung ke WhatsApp pengelola.
                  </p>
                </div>

                {/* Preset Quick Actions */}
                <div className="rounded-2xl border border-border bg-surface p-4 shrink-0">
                  <p className="text-[11px] font-black uppercase text-gold tracking-wider mb-2">
                    Template Rekomendasi Cepat:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => applyPreset("edukasi")}
                      className="rounded-full bg-card border border-border px-3 py-1 text-xs font-bold text-foreground hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer"
                    >
                      🎒 Edukasi Sekolah
                    </button>
                    <button
                      type="button"
                      onClick={() => applyPreset("keluarga")}
                      className="rounded-full bg-card border border-border px-3 py-1 text-xs font-bold text-foreground hover:bg-gold hover:text-gold-foreground transition-all cursor-pointer"
                    >
                      👨‍👩‍👧‍👦 Family Relax
                    </button>
                    <button
                      type="button"
                      onClick={() => applyPreset("budaya")}
                      className="rounded-full bg-card border border-border px-3 py-1 text-xs font-bold text-foreground hover:bg-emerald-600 hover:text-white transition-all cursor-pointer"
                    >
                      🌟 Live-in Budaya
                    </button>
                  </div>
                </div>
              </div>

              {/* Main Builder Grid (Left: Configurator, Right: Live Summary) */}
              <div className="grid gap-10 lg:grid-cols-12 items-start">
                {/* CONFIGURATOR CONTROLS (Col 7) */}
                <div className="lg:col-span-7 space-y-10">
                  {/* Step 1: Durasi & Tipe Rombongan */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-black uppercase tracking-wider text-primary flex items-center gap-2">
                      <Clock className="size-4 text-emerald-600" />
                      1. Pilih Durasi & Jumlah Peserta
                    </h4>

                    {/* Duration Buttons */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        "Half Day (±4 Jam)",
                        "Full Day (±8 Jam)",
                        "2 Hari 1 Malam",
                        "3 Hari 2 Malam",
                      ].map((dur) => (
                        <button
                          key={dur}
                          type="button"
                          onClick={() => setCustomDuration(dur)}
                          className={`rounded-2xl p-3 text-center border text-xs font-bold transition-all cursor-pointer ${
                            customDuration.startsWith(dur.slice(0, 8))
                              ? "bg-primary text-primary-foreground border-primary shadow-sm"
                              : "bg-surface border-border text-foreground hover:border-primary/40"
                          }`}
                        >
                          {dur}
                        </button>
                      ))}
                    </div>

                    {/* Group Type & Size Selectors */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div>
                        <label className="text-xs font-bold text-muted-foreground block mb-1.5">
                          Kategori Kunjungan:
                        </label>
                        <select
                          value={customGroupType}
                          onChange={(e) => setCustomGroupType(e.target.value)}
                          className="w-full rounded-xl bg-surface border border-border px-3.5 py-2 text-xs font-bold text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="Keluarga / Family Trip">Keluarga (Family Trip)</option>
                          <option value="Sekolah / Kampus / Edukasi">
                            Sekolah / Kampus (Educational Trip)
                          </option>
                          <option value="Instansi / Corporate Outing">
                            Instansi / Gathering Kantor
                          </option>
                          <option value="Komunitas / Solo Traveler">
                            Komunitas / Solo Traveler
                          </option>
                        </select>
                      </div>

                      <div>
                        <label className="text-xs font-bold text-muted-foreground block mb-1.5">
                          Perkiraan Jumlah Peserta:
                        </label>
                        <select
                          value={customGroupSize}
                          onChange={(e) => setCustomGroupSize(e.target.value)}
                          className="w-full rounded-xl bg-surface border border-border px-3.5 py-2 text-xs font-bold text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="1 - 2 Orang (Solo / Pasangan)">
                            1 - 2 Orang (Solo/Pasangan)
                          </option>
                          <option value="3 - 6 Orang (Keluarga Kecil)">
                            3 - 6 Orang (Keluarga Kecil)
                          </option>
                          <option value="7 - 15 Orang (Rombongan)">7 - 15 Orang (Rombongan)</option>
                          <option value="16 - 30+ Orang (Rombongan Besar)">
                            16 - 30+ Orang (Rombongan Besar)
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Pilih Modul Aktivitas (Checkboxes) */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-black uppercase tracking-wider text-primary flex items-center gap-2">
                        <Palette className="size-4 text-emerald-600" />
                        2. Pilih Modul Aktivitas ({selectedModules.length} Terpilih)
                      </h4>
                      <span className="text-xs font-bold text-muted-foreground">
                        Klik untuk memilih / membatalkan
                      </span>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {customModulesList.map((m) => {
                        const isSelected = selectedModules.includes(m.id);
                        return (
                          <div
                            key={m.id}
                            onClick={() => toggleModule(m.id)}
                            className={`card-lift rounded-2xl border p-4 cursor-pointer transition-all flex flex-col justify-between ${
                              isSelected
                                ? "border-emerald-500 bg-emerald-500/10 dark:bg-emerald-950/20 shadow-soft ring-1 ring-emerald-500"
                                : "border-border bg-surface hover:border-primary/40 opacity-80 hover:opacity-100"
                            }`}
                          >
                            <div>
                              <div className="flex items-center justify-between gap-2">
                                <span className="inline-flex items-center gap-1.5 rounded-full bg-card px-2.5 py-0.5 text-[10px] font-extrabold text-primary border border-border/60">
                                  <CategoryIcon icon={m.icon} className="size-3 text-gold" />
                                  <span>{m.kategori}</span>
                                </span>
                                <span
                                  className={`grid size-5 place-items-center rounded-full text-xs font-black transition-all ${
                                    isSelected
                                      ? "bg-emerald-600 text-white"
                                      : "bg-card border border-border text-transparent"
                                  }`}
                                >
                                  ✓
                                </span>
                              </div>

                              <h5 className="mt-2.5 text-sm font-extrabold text-foreground leading-snug">
                                {m.nama}
                              </h5>
                              <p className="mt-1.5 text-[11px] text-muted-foreground leading-relaxed">
                                {m.deskripsi}
                              </p>
                            </div>

                            <div className="mt-3 pt-2.5 border-t border-border/40 flex items-center justify-between text-[11px] font-bold text-gold">
                              <span>⏱️ {m.estimasi}</span>
                              <span className="text-muted-foreground text-[10px]">
                                {isSelected ? "✓ Termasuk di Rencana" : "+ Klik Tambahkan"}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 3: Fasilitas Ekstra & Layanan */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-black uppercase tracking-wider text-primary flex items-center gap-2">
                      <ShieldCheck className="size-4 text-emerald-600" />
                      3. Fasilitas Tambahan & Layanan Pendukung
                    </h4>

                    <div className="grid gap-2.5 sm:grid-cols-2">
                      {customFacilitiesList.map((f) => {
                        const isSelected = selectedFacilities.includes(f.id);
                        return (
                          <div
                            key={f.id}
                            onClick={() => toggleFacility(f.id)}
                            className={`rounded-xl border p-3 cursor-pointer transition-all flex items-start gap-2.5 ${
                              isSelected
                                ? "border-gold bg-gold/10 text-foreground ring-1 ring-gold/40"
                                : "border-border bg-surface text-muted-foreground hover:text-foreground"
                            }`}
                          >
                            <span
                              className={`grid size-4 shrink-0 place-items-center rounded mt-0.5 text-[10px] font-black ${
                                isSelected
                                  ? "bg-gold text-gold-foreground"
                                  : "bg-card border border-border text-transparent"
                              }`}
                            >
                              ✓
                            </span>
                            <span className="text-xs font-bold leading-relaxed">{f.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* LIVE INTERACTIVE SUMMARY CARD (Col 5) */}
                <div className="lg:col-span-5 sticky top-28 space-y-6">
                  <div className="rounded-3xl border-2 border-primary/40 bg-surface p-6 sm:p-8 shadow-xl space-y-6">
                    <div className="flex items-center justify-between border-b border-border pb-4">
                      <div>
                        <span className="text-[10px] font-black uppercase text-gold tracking-wider">
                          Ringkasan Paket
                        </span>
                        <h4 className="text-xl font-black text-foreground mt-0.5">
                          Rancangan Paket Anda
                        </h4>
                      </div>
                      <span className="rounded-full bg-emerald-600/10 px-3 py-1 text-xs font-black text-emerald-800 dark:text-emerald-300">
                        {selectedModules.length} Aktivitas
                      </span>
                    </div>

                    {/* Metadata Specs */}
                    <div className="space-y-2 text-xs font-medium">
                      <div className="flex justify-between py-1.5 border-b border-border/50">
                        <span className="text-muted-foreground">Durasi:</span>
                        <span className="font-extrabold text-foreground">{customDuration}</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-border/50">
                        <span className="text-muted-foreground">Tipe Rombongan:</span>
                        <span className="font-extrabold text-foreground">{customGroupType}</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-border/50">
                        <span className="text-muted-foreground">Jumlah Peserta:</span>
                        <span className="font-extrabold text-foreground">{customGroupSize}</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-border/50">
                        <span className="text-muted-foreground">Fasilitas Tambahan:</span>
                        <span className="font-extrabold text-gold">
                          {selectedFacilities.length} Layanan
                        </span>
                      </div>
                    </div>

                    {/* Selected Modules Preview List */}
                    <div>
                      <p className="text-[11px] font-black uppercase text-muted-foreground tracking-wider mb-2">
                        Urutan Aktivitas Terpilih:
                      </p>
                      {selectedModules.length === 0 ? (
                        <p className="text-xs text-amber-700 dark:text-amber-300 italic p-3 bg-amber-500/10 rounded-xl">
                          Belum ada aktivitas yang dipilih. Silakan pilih minimal 1 modul di
                          samping.
                        </p>
                      ) : (
                        <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                          {customModulesList
                            .filter((m) => selectedModules.includes(m.id))
                            .map((m, idx) => (
                              <div
                                key={m.id}
                                className="flex items-center justify-between p-2 rounded-xl bg-card border border-border text-xs font-bold"
                              >
                                <span className="flex items-center gap-2">
                                  <span className="size-5 rounded-full bg-primary/10 text-primary grid place-items-center text-[10px] font-black">
                                    {idx + 1}
                                  </span>
                                  <span className="text-foreground">{m.nama}</span>
                                </span>
                                <span className="text-[10px] text-gold">{m.estimasi}</span>
                              </div>
                            ))}
                        </div>
                      )}
                    </div>

                    {/* Direct Action Buttons */}
                    <div className="space-y-3 pt-2">
                      <a
                        href={customWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-4 text-xs font-black text-white shadow-card hover:bg-emerald-700 hover:scale-[1.02] transition-all"
                      >
                        <MessageCircle className="size-4.5" />
                        <span>Kirim Rancangan via WhatsApp</span>
                      </a>

                      <button
                        onClick={() => setOpenPlannerModal(true)}
                        className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-card border border-border px-6 py-3 text-xs font-bold text-foreground hover:bg-accent transition-all cursor-pointer"
                      >
                        <Calendar className="size-4 text-gold" />
                        <span>Buka Formulir Lengkap</span>
                      </button>
                    </div>

                    <p className="text-[11px] text-center text-muted-foreground font-medium leading-relaxed">
                      💡 Pengelola desa wisata akan memberikan konfirmasi ketersediaan instruktur,
                      tempat, serta estimasi rincian biaya resmi secara transparan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* 3. SECTION 8 PILAR CBT WISATA (CLEAN & ATTRACTIVE) */}
        <section id="pengalaman-cbt" className="scroll-mt-28">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-extrabold text-primary uppercase tracking-wider">
              8 Pilar Pengalaman Wisata
            </span>
            <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold text-foreground">
              Aktivitas Autentik Berbasis Warga
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
              Ragam pengalaman hidup pedesaan yang dirancang agar wisatawan dapat berinteraksi,
              belajar, dan mendukung kelestarian desa.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cbtExperiences.map((cbt) => (
              <div
                key={cbt.num}
                className="card-lift flex flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-card hover:border-primary/50 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="grid size-12 place-items-center rounded-2xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <CategoryIcon icon={cbt.icon} className="size-6" />
                    </div>
                    <span className="text-xs font-black text-gold">{cbt.num}</span>
                  </div>
                  <h3 className="mt-5 text-base font-extrabold text-foreground tracking-tight">
                    {cbt.title}
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed font-medium">
                    {cbt.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-border/60 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-primary">CBT Ekang Anculai</span>
                  <span className="text-xs text-muted-foreground">Pilar {cbt.num}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. SECTION DOKUMENTASI VISUAL LAPANGAN (8 CATEGORIES REAL PHOTOS) */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-border pb-6">
            <div>
              <span className="text-xs font-extrabold text-primary uppercase tracking-wider">
                Dokumentasi Visual Autentik
              </span>
              <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold text-foreground">
                Galeri Pengalaman di Lapangan
              </h2>
            </div>
            <Link
              to="/galeri"
              className="inline-flex items-center gap-1.5 text-xs font-extrabold text-primary hover:underline"
            >
              <span>Lihat Seluruh Galeri Foto</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {galeriCategories.map((g) => (
              <div
                key={g.num}
                className="card-lift group relative overflow-hidden rounded-3xl border border-border bg-card shadow-card"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                  <img
                    src={g.image}
                    alt={g.caption}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1 text-[11px] font-extrabold text-foreground backdrop-blur shadow-sm">
                    <CategoryIcon icon={g.icon} className="size-3.5 text-gold shrink-0" />
                    <span>
                      {g.num}. {g.kategori}
                    </span>
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-xs font-bold text-foreground leading-relaxed">{g.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. CTA RESERVASI & KONSULTASI RESMI */}
        <section className="rounded-3xl gradient-primary p-8 sm:p-14 text-center text-primary-foreground shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-4 py-1.5 text-xs font-black text-white uppercase tracking-wider backdrop-blur">
              <Sparkles className="size-3.5 text-amber-300" />
              Layanan Informasi & Reservasi Desa
            </span>

            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
              Siap Menikmati Pengalaman Wisata Autentik?
            </h2>

            <p className="text-xs sm:text-base font-medium text-white/90 leading-relaxed max-w-2xl mx-auto">
              Hubungi Pengelola Desa Wisata Ekang Anculai untuk konsultasi jadwal kunjungan
              rombongan, keluarga, instansi, atau program live-in homestay.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setOpenPlannerModal(true)}
                className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-8 py-4 text-xs font-black text-emerald-950 shadow-card hover:bg-amber-300 hover:scale-105 transition-all cursor-pointer"
              >
                <Compass className="size-4" />
                <span>Isi Formulir Rencana Kunjungan</span>
              </button>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${waFullDayMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-xs font-extrabold text-emerald-900 shadow-card hover:bg-emerald-50 hover:scale-105 transition-all"
              >
                <MessageCircle className="size-4 text-emerald-600 fill-current" />
                <span>Chat WhatsApp Pengelola</span>
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* MODAL DETAIL ITINERARY FULL DAY */}
      {activeFullDayModal && (
        <Dialog open={!!activeFullDayModal} onOpenChange={() => setActiveFullDayModal(null)}>
          <DialogContent className="max-w-md rounded-3xl p-6 bg-card border-border shadow-2xl">
            <DialogTitle className="text-lg font-extrabold text-foreground flex items-center justify-between gap-2">
              <span>{activeFullDayModal.judul}</span>
              <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full shrink-0">
                {activeFullDayModal.waktu} WIB
              </span>
            </DialogTitle>
            <div className="mt-4 space-y-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              <p>{activeFullDayModal.deskripsi}</p>
              <div className="pt-3 border-t border-border space-y-1.5 text-foreground font-medium">
                <p className="font-bold text-xs uppercase text-primary">Aktivitas Utama:</p>
                {activeFullDayModal.isi.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="size-3.5 text-primary shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* TRIP PLANNER MODAL */}
      <TripPlannerModal open={openPlannerModal} onOpenChange={setOpenPlannerModal} />
    </div>
  );
}
