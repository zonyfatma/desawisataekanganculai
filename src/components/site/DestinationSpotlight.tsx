import { useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  X,
  Palette,
  Trees,
  Flower2,
  Drama,
  Utensils,
  ExternalLink,
  ShieldCheck,
  Info,
  CheckCircle2,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Primitives";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { SourceLink } from "./SourceLink";
import { useSiteData } from "@/lib/cms-store";
import { RUMAH_BATIK_URL } from "@/data/jadesta";
import { resolveImageUrl, getImageFallback } from "@/lib/image-resolver";
import kegiatanBatik2 from "@/assets/kegiatan-batik-2.webp";
import ekangMangroveDermaga from "@/assets/ekang-mangrove-dermaga.webp";
import tekoKayangan from "@/assets/teko-kayangan.webp";
import reogKendangKempul from "@/assets/reog-kendang-kempul.webp";
import rengginangSajian from "@/assets/rengginang-sajian.webp";

export type AttractionDetail = {
  num: string;
  id: string;
  judul: string;
  kategori: string;
  badgeStatus: "TERKONFIRMASI" | "POTENSI";
  badgeText: string;
  icon: typeof Palette;
  image: string;
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  externalUrl?: string;
  externalLabel?: string;
  importantNote?: string;
  source: {
    name: string;
    url: string;
    publishedAt?: string;
  };
};

export const mainAttractions: AttractionDetail[] = [
  {
    num: "01",
    id: "batik",
    judul: "Rumah Batik Bintan",
    kategori: "Ikon Kreatif",
    badgeStatus: "TERKONFIRMASI",
    badgeText: "Galeri Terkonfirmasi / Potensi Workshop",
    icon: Palette,
    image: kegiatanBatik2,
    shortDesc:
      "Pusat kreasi batik khas Bintan dengan teknik canting tulis dan cap karya perajin desa.",
    fullDesc:
      "Rumah Batik Bintan merupakan pusat edukasi dan galeri produksi kain batik dengan motif khas keanekaragaman flora-fauna Bintan. Wisatawan dapat menyaksikan keindahan kain batik tulis dan cap yang diproduksi oleh perajin lokal desa.",
    highlights: [
      "Wisata edukasi membatik canting",
      "Batik tulis & batik cap motif khas Bintan",
      "Pewarna alam & pewarna sintetis berkualitas",
      "Galeri suvenir batik khas Bintan",
      "Potensi pengalaman workshop membatik bersama perajin",
    ],
    externalUrl: RUMAH_BATIK_URL,
    externalLabel: "Kenali Rumah Batik Bintan ↗",
    importantNote:
      "Potensi pengalaman workshop membatik dapat dikembangkan dan ditawarkan bersama perajin lokal desa.",
    source: {
      name: "Pemerintah Kabupaten Bintan",
      url: "https://www.bintankab.go.id/",
      publishedAt: "2026-04-12",
    },
  },
  {
    num: "02",
    id: "mangrove",
    judul: "Hutan Mangrove Ekang Mangrove Park",
    kategori: "Ikon Alam",
    badgeStatus: "POTENSI",
    badgeText: "Ekowisata & Edukasi Lingkungan",
    icon: Trees,
    image: ekangMangroveDermaga,
    shortDesc:
      "Ekosistem pesisir pedalaman unggulan yang hijau dan asri, dilengkapi boardwalk kayu ratusan meter, edukasi konservasi bakau, serta pemandangan sunset.",
    fullDesc:
      "Hutan Mangrove Ekang Anculai (Ekang Mangrove Park) merupakan ekosistem pesisir pedalaman yang sangat kaya akan keanekaragaman hayati dan menjadi salah satu benteng ekologis serta ikon ekowisata utama Desa Wisata Ekang Anculai. Kawasan konservasi mangrove ini dilengkapi dengan fasilitas boardwalk kayu yang kokoh dan tertata rapi sepanjang ratusan meter, memungkinkan pengunjung menyusuri keasrian hutan bakau yang masih sangat alami, teduh, dan terjaga kelestariannya.\n\nDi sepanjang jalur susur mangrove, wisatawan disuguhkan pemandangan pepohonan bakau rindang berusia puluhan tahun, rimbunnya flora khas vegetasi pesisir, serta dapat mengamati secara langsung habitat berbagai fauna liar seperti burung migran pesisir, kepiting bakau, kelip-kelip (kunang-kunang) malam hari, dan biota air payau. Pengalaman ini semakin lengkap dengan adanya tur edukasi konservasi bersama pemandu lokal berlisensi, yang membagikan wawasan mengenai peran krusial mangrove sebagai penyerap karbon, penahan erosi pesisir, penyaring alami air, serta sumber penghidupan masyarakat lokal. Pengunjung juga dapat menikmati keindahan pemandangan matahari terbenam (sunset) di atas perairan sungai bakau dan mengikuti kegiatan penanaman bibit mangrove sebagai bentuk partisipasi nyata dalam pelestarian alam pedesaan.",
    highlights: [
      "Susur kawasan bakau menyusuri jalur boardwalk kayu ratusan meter",
      "Edukasi ekosistem pesisir, fungsi ekologis bakau & aksi tanam bibit",
      "Pengamatan keanekaragaman flora, burung migran & biota air payau",
      "Spot fotografi pemandangan sunset & keasrian hutan bakau pedalaman",
      "Konservasi lingkungan dan keberlanjutan ekosistem pesisir pedesaan",
    ],
    importantNote:
      "Potensi aktivitas wisata dan pengalaman susur mangrove yang terkelola bersama Pengelola Desa Wisata.",
    source: {
      name: "Pemerintah Desa Ekang Anculai",
      url: "https://desaekanganculai.bintankab.go.id/",
      publishedAt: "2026-05-20",
    },
  },
  {
    num: "03",
    id: "perkebunan",
    judul: "Perkebunan Sayur Masyarakat",
    kategori: "Ikon Hijau",
    badgeStatus: "POTENSI",
    badgeText: "Potensi Wisata Pertanian (CBT)",
    icon: Flower2,
    image: tekoKayangan,
    shortDesc:
      "Pengalaman pertanian autentik: melihat kebun, bertemu petani, menanam, mencangkul, dan memanen.",
    fullDesc:
      "Nikmati pengalaman autentik kehidupan tani masyarakat desa. Pengunjung dapat menyusuri kebun warga, mengenal berbagai tanaman lokal (ubi, pisang, sayuran), bertemu dengan petani asli, serta berpartisipasi langsung dalam aktivitas bercocok tanam, mencangkul, hingga memanen hasil perkebunan.",
    highlights: [
      "Melihat kebun & mengenal keanekaragaman tanaman lokal",
      "Bertemu dan berinteraksi langsung dengan petani asli Ekang",
      "Aktivitas menanam, mencangkul, dan merawat tanaman",
      "Pengalaman memanen hasil kebun bersama masyarakat",
      "Mengenal komoditas unggulan ubi dan pisang lokal",
    ],
    importantNote:
      "Pengalaman aktivitas pertanian warga dilakukan langsung di lahan masyarakat bersama pendampingan petani lokal.",
    source: {
      name: "Pemerintah Desa Ekang Anculai",
      url: "https://desaekanganculai.bintankab.go.id/",
      publishedAt: "2026-03-01",
    },
  },
  {
    num: "04",
    id: "budaya",
    judul: "Seni & Tradisi Reog Sedulur Manunggal",
    kategori: "Ruang Budaya",
    badgeStatus: "POTENSI",
    badgeText: "Kesenian Tradisional & Komunitas",
    icon: Drama,
    image: reogKendangKempul,
    shortDesc:
      "Sanggar seni tradisional Reog Sedulur Manunggal Fersi Kendang Kempul kebanggaan pemuda desa.",
    fullDesc:
      "Sanggar Seni Reog Sedulur Manunggal Fersi Kendang Kempul Desa Ekang Anculai merupakan wadah pelestarian seni budaya tradisional yang aktif tampil dalam berbagai ajang festival dan pementasan seni, memperagakan atraksi budaya diiringi tabuhan gamelan dan kendang kempul.",
    highlights: [
      "Atraksi seni tari tradisional Reog Ponorogo & Kendang Kempul",
      "Harmonisasi instrumen gamelan, gong, dan kendang kempul",
      "Keterlibatan aktif generasi muda dan seniman lokal desa",
      "Pementasan budaya dalam perayaan festival daerah & Bintan Resorts",
    ],
    importantNote:
      "Pementasan seni budaya dikelola langsung oleh Sanggar Seni Reog Sedulur Manunggal Desa Ekang Anculai.",
    source: {
      name: "Pemerintah Desa Ekang Anculai",
      url: "https://desaekanganculai.bintankab.go.id/",
      publishedAt: "2026-04-10",
    },
  },
  {
    num: "05",
    id: "gastronomi",
    judul: "Kuliner Lokal & Olahan Pangan Desa",
    kategori: "Cita Rasa Desa",
    badgeStatus: "TERKONFIRMASI",
    badgeText: "Pangan Lokal & Rengginang Comel",
    icon: Utensils,
    image: rengginangSajian,
    shortDesc:
      "Sajian kuliner lokal, Rengginang Comel renyah aneka warna, olahan hasil kebun warga, dan cita rasa autentik desa.",
    fullDesc:
      "Wisata gastronomi Desa Ekang Anculai menyajikan pengalaman menikmati hasil pangan dan masakan tradisional olahan warga desa. Olahan Rengginang Comel yang renyah dan gurih, sajian masakan rumahan autentik, serta aneka olahan ubi dan pisang lokal menjadi simbol kehangatan tradisi yang terus dipelihara.",
    highlights: [
      "Produk Rengginang Comel aneka warna bersertifikasi Halal resmi",
      "Olahan ubi & pisang hasil perkebunan masyarakat",
      "Masakan rumahan desa khas Gulai Daun Ubi & lauk lokal",
      "Edukasi pangan lokal & interaksi dengan pembuat kuliner desa",
    ],
    importantNote:
      "Pengalaman kuliner rumahan diproduksi dan disajikan langsung oleh masyarakat desa.",
    source: {
      name: "Dapur Rub & UMKM Desa Ekang Anculai",
      url: "https://desaekanganculai.bintankab.go.id/",
      publishedAt: "2026-07-01",
    },
  },
];

export function DestinationSpotlight() {
  const [selectedAttraction, setSelectedAttraction] = useState<AttractionDetail | null>(null);
  const [activeFilter, setActiveFilter] = useState("semua");
  const siteData = useSiteData();
  const cmsLandmarks = siteData?.landmarkList || [];

  const attractions =
    cmsLandmarks.length > 0
      ? cmsLandmarks.map((lm, idx) => {
          const matched = mainAttractions.find(
            (a) => a.id === lm.id || a.judul.toLowerCase() === lm.nama.toLowerCase(),
          );
          if (matched) {
            return {
              ...matched,
              judul: lm.nama || matched.judul,
              shortDesc: lm.deskripsi || matched.shortDesc,
              fullDesc: lm.deskripsi || matched.fullDesc,
              image: resolveImageUrl(lm.image || matched.image, lm.nama || matched.judul),
              source: (lm.source as { name: string; url: string }) || matched.source,
            };
          }
          return {
            num: String(idx + 1).padStart(2, "0"),
            id: lm.id,
            judul: lm.nama,
            kategori: lm.kategori || "Destinasi",
            badgeStatus: "TERKONFIRMASI" as const,
            badgeText: "Destinasi Terkonfirmasi",
            icon: Trees,
            image: resolveImageUrl(lm.image, lm.nama || lm.kategori),
            shortDesc: lm.deskripsi || "",
            fullDesc: lm.deskripsi || "",
            highlights: [lm.nama, lm.kategori],
            source: (lm.source as { name: string; url: string }) || {
              name: "Pemerintah Desa",
              url: "",
            },
          };
        })
      : mainAttractions;

  const filteredAttractions = attractions.filter((a) => {
    if (activeFilter === "semua") return true;
    if (activeFilter === "kreatif")
      return (
        a.id.includes("batik") ||
        a.kategori.toLowerCase().includes("kreatif") ||
        a.kategori.toLowerCase().includes("craft")
      );
    if (activeFilter === "alam")
      return (
        a.id.includes("mangrove") ||
        a.kategori.toLowerCase().includes("alam") ||
        a.kategori.toLowerCase().includes("ekowisata")
      );
    if (activeFilter === "hijau")
      return (
        a.id.includes("perkebunan") ||
        a.kategori.toLowerCase().includes("agrowisata") ||
        a.kategori.toLowerCase().includes("pertanian")
      );
    if (activeFilter === "budaya")
      return (
        a.id.includes("budaya") ||
        a.id.includes("reog") ||
        a.kategori.toLowerCase().includes("budaya") ||
        a.kategori.toLowerCase().includes("seni")
      );
    if (activeFilter === "kuliner")
      return (
        a.id.includes("kuliner") ||
        a.id.includes("gastronomi") ||
        a.kategori.toLowerCase().includes("kuliner") ||
        a.kategori.toLowerCase().includes("gastronomi")
      );
    return true;
  });

  const getDestinationStyle = (id: string) => {
    switch (id) {
      case "batik":
        return {
          cardBg: "bg-[#FEFCE8] dark:bg-stone-900/90 border-[#6B7F3A]/30",
          badgeBg: "bg-[#FEFCE8] text-[#064E3B] border border-[#064E3B]/30",
          tagBg: "bg-[#6B7F3A]/15 text-[#3F6212]",
          accentColor: "text-[#064E3B]",
          btnHover: "group-hover:bg-[#064E3B] group-hover:text-white",
        };
      case "perkebunan":
        return {
          cardBg: "bg-[#F0FDF4] dark:bg-emerald-950/50 border-[#22C55E]/30",
          badgeBg: "bg-[#DCFCE7] text-[#064E3B] border border-[#22C55E]/40",
          tagBg: "bg-[#22C55E]/15 text-[#166534]",
          accentColor: "text-[#166534]",
          btnHover: "group-hover:bg-[#166534] group-hover:text-white",
        };
      case "mangrove":
        return {
          cardBg: "bg-[#E2EFE0] dark:bg-emerald-950/60 border-[#166534]/30",
          badgeBg: "bg-[#DCFCE7] text-[#166534] border border-[#166534]/40",
          tagBg: "bg-[#166534]/15 text-[#064E3B]",
          accentColor: "text-[#064E3B]",
          btnHover: "group-hover:bg-[#064E3B] group-hover:text-white",
        };
      case "budaya":
        return {
          cardBg: "bg-[#F4F6EC] dark:bg-stone-900/90 border-[#3F6212]/30",
          badgeBg: "bg-[#A7C7A5]/30 text-[#064E3B] border border-[#3F6212]/30",
          tagBg: "bg-[#3F6212]/15 text-[#3F6212]",
          accentColor: "text-[#3F6212]",
          btnHover: "group-hover:bg-[#3F6212] group-hover:text-white",
        };
      case "gastronomi":
        return {
          cardBg: "bg-[#FEFCE8] dark:bg-amber-950/40 border-[#6B7F3A]/30",
          badgeBg: "bg-[#FEFCE8] text-[#6B7F3A] border border-[#6B7F3A]/40",
          tagBg: "bg-[#6B7F3A]/15 text-[#6B7F3A]",
          accentColor: "text-[#6B7F3A]",
          btnHover: "group-hover:bg-[#6B7F3A] group-hover:text-white",
        };
      case "homestay":
      default:
        return {
          cardBg: "bg-[#F5F1E8] dark:bg-stone-900/90 border-[#166534]/30",
          badgeBg: "bg-[#F5F1E8] text-[#3F6212] border border-[#3F6212]/40",
          tagBg: "bg-[#166534]/15 text-[#166534]",
          accentColor: "text-[#166534]",
          btnHover: "group-hover:bg-[#166534] group-hover:text-white",
        };
    }
  };

  const filterChips = [
    { id: "semua", label: "Semua Daya Tarik (5)" },
    { id: "kreatif", label: "Ikon Kreatif & Batik" },
    { id: "alam", label: "Ekowisata Mangrove" },
    { id: "hijau", label: "Perkebunan Sayur" },
    { id: "budaya", label: "Teko Kayangan & Budaya" },
    { id: "kuliner", label: "Kuliner Lokal" },
  ];

  return (
    <section
      id="potensi"
      className="w-full scroll-mt-24 bg-[#F8FAFC] dark:bg-slate-900 py-20 sm:py-24 border-b border-emerald-900/10 dark:border-slate-800"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Daya Tarik Utama"
          title="5 Daya Tarik Utama Ekang Anculai"
          description="Kenali pengalaman wisata yang mempertemukan alam, kreativitas, budaya, pangan lokal, dan kehidupan masyarakat."
        />

        {/* Filter Chips Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {filterChips.map((chip) => (
            <button
              key={chip.id}
              onClick={() => setActiveFilter(chip.id)}
              className={`rounded-full px-4 py-2 text-xs font-extrabold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                activeFilter === chip.id
                  ? "bg-primary text-primary-foreground shadow-md scale-105 ring-2 ring-primary/40"
                  : "bg-card text-muted-foreground hover:bg-emerald-50 hover:text-primary border border-border"
              }`}
            >
              {chip.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          {filteredAttractions.map((item, index) => {
            const Icon = item.icon;
            const style = getDestinationStyle(item.id);
            return (
              <Reveal key={item.id} delay={index * 0.08}>
                <article
                  className={`card-lift group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border ${style.cardBg} shadow-card transition-all duration-500 hover:shadow-lift`}
                >
                  <div>
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <img
                        src={resolveImageUrl(item.image, item.judul)}
                        alt={item.judul}
                        width={800}
                        height={600}
                        loading="lazy"
                        decoding="async"
                        onError={(e) => {
                          e.currentTarget.src = getImageFallback(item.judul, item.kategori);
                        }}
                        className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="hero-overlay absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                      {/* Number Badge */}
                      <span className="absolute top-3 left-3 grid size-9 place-items-center rounded-2xl bg-[#064E3B] font-black text-xs text-white shadow-lg ring-1 ring-emerald-400/40">
                        {item.num}
                      </span>

                      {/* Destination Custom Badge */}
                      <span
                        className={`absolute top-3 right-3 inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-black backdrop-blur-md shadow-md ${style.badgeBg}`}
                      >
                        {item.badgeStatus}
                      </span>
                    </div>

                    <div className="p-5">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-extrabold uppercase ring-1 ring-black/5 ${style.tagBg}`}
                      >
                        <Icon className="size-3.5" />
                        {item.kategori}
                      </span>

                      <h3
                        className={`mt-2.5 text-lg font-black text-foreground group-hover:${style.accentColor} transition-colors leading-tight`}
                      >
                        {item.judul}
                      </h3>

                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-3 font-medium">
                        {item.shortDesc}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 border-t border-black/5 mt-3">
                    <button
                      onClick={() => setSelectedAttraction(item)}
                      className={`mt-3 inline-flex w-full items-center justify-between rounded-2xl bg-white dark:bg-slate-800 px-4 py-2.5 text-xs font-extrabold text-foreground border border-black/10 transition-all duration-300 ${style.btnHover} cursor-pointer shadow-sm`}
                    >
                      <span>Jelajahi Detail</span>
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Detail Modal Dialog */}
      {selectedAttraction && (
        <Dialog open={!!selectedAttraction} onOpenChange={() => setSelectedAttraction(null)}>
          <DialogContent className="max-w-3xl max-h-[90vh] flex flex-col overflow-hidden rounded-3xl p-0 border-0 bg-card shadow-2xl">
            {/* Header Image & Controls */}
            <div className="relative shrink-0 aspect-[16/9] sm:aspect-video w-full overflow-hidden">
              <img
                src={selectedAttraction.image}
                alt={selectedAttraction.judul}
                className="size-full object-cover"
              />
              <div className="hero-overlay absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/30" />

              {/* Top Controls Bar: Back Button, Badges & Close X */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-20">
                <button
                  type="button"
                  onClick={() => setSelectedAttraction(null)}
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-800/90 hover:bg-emerald-900 px-4 py-2 text-xs font-black text-white backdrop-blur-md transition-all shadow-lg ring-1 ring-white/30 active:scale-95 cursor-pointer"
                >
                  <ArrowLeft className="size-4" />
                  <span className="hidden sm:inline">Kembali Ke Halaman Sebelumnya</span>
                  <span className="inline sm:hidden">Kembali</span>
                </button>

                <div className="flex items-center gap-2">
                  <span className="grid size-8 place-items-center rounded-xl bg-gold font-black text-xs text-gold-foreground shadow-md">
                    {selectedAttraction.num}
                  </span>
                  <span
                    className={`rounded-full px-3 py-1 text-[11px] font-extrabold text-white backdrop-blur-md shadow-md ${
                      selectedAttraction.badgeStatus === "TERKONFIRMASI"
                        ? "bg-emerald-600/90"
                        : "bg-amber-600/90"
                    }`}
                  >
                    {selectedAttraction.badgeStatus}
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedAttraction(null)}
                    className="grid size-10 place-items-center rounded-full bg-black/80 hover:bg-black text-white hover:text-gold border border-white/40 backdrop-blur-md transition-all shadow-xl hover:scale-110 active:scale-95 cursor-pointer"
                    aria-label="Tutup Detail"
                  >
                    <X className="size-6 stroke-[2.5]" />
                  </button>
                </div>
              </div>

              {/* Title & Category Overlay */}
              <div className="absolute bottom-4 left-5 right-5 text-white z-10">
                <span className="inline-block rounded-md bg-gold/25 px-2.5 py-0.5 text-[11px] font-black text-gold uppercase tracking-wider backdrop-blur-md ring-1 ring-gold/40">
                  {selectedAttraction.kategori}
                </span>
                <DialogTitle className="mt-1.5 text-2xl sm:text-3xl font-black text-white leading-tight">
                  {selectedAttraction.judul}
                </DialogTitle>
              </div>
            </div>

            {/* Scrollable Content Body */}
            <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1">
              <p className="text-sm sm:text-base leading-relaxed text-foreground font-medium">
                {selectedAttraction.fullDesc}
              </p>

              <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
                <h4 className="text-xs font-extrabold tracking-wider text-primary uppercase flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" />
                  Fokus Pengalaman & Potensi Wisata:
                </h4>
                <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                  {selectedAttraction.highlights.map((hl, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-xs font-bold text-foreground"
                    >
                      <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="leading-relaxed">{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {selectedAttraction.importantNote && (
                <div className="rounded-2xl bg-amber-500/10 border border-amber-500/30 p-4 flex items-start gap-3 text-xs text-amber-900 dark:text-amber-200">
                  <Info className="size-5 shrink-0 text-amber-600 mt-0.5" />
                  <div>
                    <strong className="block font-bold">Catatan Pengembangan & Status:</strong>
                    <span className="leading-relaxed">{selectedAttraction.importantNote}</span>
                  </div>
                </div>
              )}

              <SourceLink source={selectedAttraction.source} />
            </div>

            {/* Fixed Bottom Action Bar with Back Button */}
            <div className="shrink-0 bg-surface px-6 py-4 sm:px-8 flex flex-wrap items-center justify-between gap-3 border-t border-border z-20">
              <button
                type="button"
                onClick={() => setSelectedAttraction(null)}
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-6 py-3 text-xs font-black text-primary hover:bg-primary hover:text-primary-foreground shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <ArrowLeft className="size-4" />
                <span>Kembali Ke Halaman Sebelumnya</span>
              </button>

              {selectedAttraction.externalUrl && (
                <a
                  href={selectedAttraction.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-black text-primary-foreground shadow-card hover:bg-emerald-deep transition-all active:scale-95"
                >
                  <span>{selectedAttraction.externalLabel || "Baca Sumber Resmi ↗"}</span>
                  <ExternalLink className="size-3.5" />
                </a>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}
