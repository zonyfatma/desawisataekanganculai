import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Palette,
  Trees,
  Flower2,
  Drama,
  Utensils,
  Home,
  Users,
  Info,
  ExternalLink,
} from "lucide-react";
import { SectionHeading } from "./Primitives";
import { RUMAH_BATIK_URL } from "@/data/jadesta";

type CategoryItem = {
  id: string;
  num: string;
  nama: string;
  sub: string;
  badgeStatus: "TERKONFIRMASI" | "POTENSI";
  desc: string;
  icon: typeof Palette;
  points: string[];
  externalUrl?: string;
  externalLabel?: string;
  importantNote?: string;
};

const cbtCategories: CategoryItem[] = [
  {
    id: "batik",
    num: "01",
    nama: "Rumah Batik Bintan",
    sub: "Ikon Kreatif Ekang Anculai",
    badgeStatus: "TERKONFIRMASI",
    desc: "Wisata edukasi membatik, batik tulis, batik cap, pewarna alam & sintetis, galeri, serta suvenir batik khas Bintan.",
    icon: Palette,
    points: [
      "Wisata edukasi membatik khas Bintan",
      "Koleksi Batik Tulis & Batik Cap motif lokal",
      "Pewarna alam & pewarna sintetis berkualitas",
      "Galeri & suvenir karya perajin desa",
      "Potensi pengalaman workshop membatik bersama perajin",
    ],
    externalUrl: RUMAH_BATIK_URL,
    externalLabel: "Kenali Rumah Batik Bintan ↗",
    importantNote:
      "Potensi pengalaman workshop membatik yang dapat dikembangkan/ditawarkan bersama perajin.",
  },
  {
    id: "mangrove",
    num: "02",
    nama: "Hutan Mangrove Ekang Mangrove Park",
    sub: "Ikon Alam Ekang Anculai",
    badgeStatus: "POTENSI",
    desc: "Hutan Mangrove Ekang Anculai (Ekang Mangrove Park) merupakan ekosistem pesisir pedalaman yang sangat kaya akan keanekaragaman hayati dan menjadi salah satu benteng ekologis serta ikon ekowisata utama Desa Wisata Ekang Anculai. Kawasan konservasi mangrove ini dilengkapi dengan fasilitas boardwalk kayu ratusan meter, tur edukasi konservasi bakau, pengamatan fauna liar, serta pemandangan indah matahari terbenam.",
    icon: Trees,
    points: [
      "Susur kawasan mangrove menyusuri boardwalk kayu ratusan meter",
      "Edukasi konservasi ekosistem pesisir & bakau pedalaman bersama pemandu lokal",
      "Pengamatan flora bakau, burung migran pesisir & biota air payau",
      "Spot fotografi pemandangan matahari terbenam (sunset) yang memukau",
      "Partisipasi aksi pembibitan & penanaman bibit mangrove desa",
    ],
    importantNote:
      "Potensi aktivitas ekowisata mangrove yang dikembangkan bersama pengelola Desa Wisata Ekang.",
  },
  {
    id: "perkebunan",
    num: "03",
    nama: "Perkebunan Sayur Masyarakat",
    sub: "Ikon Hijau Ekang Anculai",
    badgeStatus: "POTENSI",
    desc: "Rasakan kehidupan desa dari dekat melalui aktivitas pertanian masyarakat (edukasi pertanian, mengenal tanaman lokal, Village Farming Experience).",
    icon: Flower2,
    points: [
      "Edukasi pertanian & kehidupan tani warga",
      "Mengenal tanaman lokal ubi & pisang",
      "Aktivitas petani & kearifan lokal",
      "Village Farming Experience ramah lingkungan",
      "Potensi pengalaman panen bersama masyarakat",
    ],
    importantNote: "Potensi pengalaman panen bersama masyarakat berbasis pertanian warga.",
  },
  {
    id: "eko",
    num: "04",
    nama: "Teko Kayangan — Ruang Budaya & Kreativitas",
    sub: "Ruang Budaya & Aktivitas Komunitas",
    badgeStatus: "POTENSI",
    desc: "Teko Kayangan merupakan salah satu ruang budaya dan kreativitas masyarakat Desa Ekang Anculai, Bintan. Tempat ini menjadi wadah pertunjukan seni, kegiatan budaya, dan aktivitas komunitas, sekaligus ruang bagi wisatawan untuk mengenal lebih dekat budaya dan kehidupan masyarakat lokal.",
    icon: Drama,
    points: [
      "Ruang budaya & kreativitas masyarakat Desa Ekang Anculai",
      "Wadah pertunjukan seni, kegiatan budaya & aktivitas komunitas",
      "Ruang bagi wisatawan mengenal lebih dekat budaya lokal",
      "Peluang revitalisasi & fasilitas wisata berbasis masyarakat",
    ],
    importantNote:
      "Teko Kayangan merupakan ruang budaya desa dengan peluang pengembangan dan revitalisasi di masa mendatang.",
  },
  {
    id: "gastronomi",
    num: "05",
    nama: "Kuliner Lokal & Gastronomi",
    sub: "Cita Rasa Desa Ekang Anculai",
    badgeStatus: "TERKONFIRMASI",
    desc: "Wisata gastronomi berbasis pangan lokal. Kenali Ekang Anculai melalui cita rasa yang lahir dari bahan pangan dan kehidupan masyarakat desa.",
    icon: Utensils,
    points: [
      "Olahan ubi & pisang hasil kebun masyarakat",
      "Gulai Daun Ubi khas masakan rumahan desa",
      "Minuman herbal & teh serai hangat khas desa",
      "Demonstrasi memasak & pengalaman menikmati makanan lokal",
    ],
  },
  {
    id: "homestay",
    num: "CBT",
    nama: "Homestay Rumah Warga",
    sub: "Pengalaman Tinggal Bersama Warga",
    badgeStatus: "TERKONFIRMASI",
    desc: "Konsep akomodasi ramah lingkungan (CBT) di rumah warga pedesaan. Wisatawan merasakan langsung keramahan dan suasana autentik desa.",
    icon: Home,
    points: [
      "Tinggal di kamar rumah keluarga warga lokal desa",
      "Makan bersama masakan rumahan olahan tuan rumah",
      "Interaksi akrab & pembelajaran kehidupan sosial pedesaan",
      "Dukungan langsung terhadap ekonomi masyarakat desa",
    ],
  },
];

export function CategorySection() {
  const [activeId, setActiveId] = useState("batik");
  const activeCategory = cbtCategories.find((c) => c.id === activeId) || cbtCategories[0]!;
  const IconComponent = activeCategory.icon;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const interval = setInterval(() => {
      if (document.visibilityState !== "visible") return;
      setActiveId((prev) => {
        const idx = cbtCategories.findIndex((c) => c.id === prev);
        const nextIdx = (idx + 1) % cbtCategories.length;
        return cbtCategories[nextIdx]!.id;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#F0FDF4] dark:bg-emerald-950/40 py-20 sm:py-24 border-t border-b border-emerald-500/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Struktur & Potensi Pengalaman"
          title="Detail 5 Daya Tarik Utama & Pengalaman CBT"
          description="Eksplorasi mendalam 5 daya tarik utama yang menjadi inti storytelling dan konsep pariwisata berbasis masyarakat di Ekang Anculai."
        />

        {/* Tab List */}
        <div
          role="tablist"
          aria-label="Kategori daya tarik wisata desa"
          className="mt-8 flex flex-wrap justify-center gap-2"
        >
          {cbtCategories.map((c) => {
            const Icon = c.icon;
            const isSelected = activeId === c.id;
            return (
              <button
                key={c.id}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveId(c.id)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs sm:text-sm font-extrabold transition-all duration-300 ${
                  isSelected
                    ? "bg-primary text-primary-foreground shadow-card"
                    : "bg-surface text-muted-foreground hover:bg-accent hover:text-primary border border-border"
                }`}
              >
                <span className="text-gold">{c.num}</span>
                <Icon className="size-4" />
                {c.nama}
              </button>
            );
          })}
        </div>

        {/* Tab Detail View */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 mx-auto max-w-4xl rounded-3xl border border-border bg-surface p-6 sm:p-10 shadow-soft"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <IconComponent className="size-6" />
                </span>
                <div>
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">
                    {activeCategory.sub}
                  </span>
                  <h3 className="text-xl font-extrabold tracking-tight text-foreground sm:text-2xl">
                    {activeCategory.num}. {activeCategory.nama}
                  </h3>
                </div>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-extrabold text-white ${
                  activeCategory.badgeStatus === "TERKONFIRMASI" ? "bg-emerald-600" : "bg-amber-600"
                }`}
              >
                {activeCategory.badgeStatus}
              </span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground font-medium">
              {activeCategory.desc}
            </p>

            <div className="mt-6 border-t border-border/60 pt-5">
              <h4 className="text-xs font-bold text-foreground uppercase tracking-wider">
                Fokus Pengalaman & Aktivitas:
              </h4>
              <ul className="mt-3 space-y-2.5">
                {activeCategory.points.map((pt: string, i: number) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-foreground"
                  >
                    <span className="mt-1.5 size-2 shrink-0 rounded-full bg-primary" />
                    <span className="leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {activeCategory.importantNote && (
              <div className="mt-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 p-4 flex items-start gap-3 text-xs text-amber-900 dark:text-amber-200">
                <Info className="size-5 shrink-0 text-amber-600 mt-0.5" />
                <div>
                  <strong className="block font-bold">Catatan Pengembangan:</strong>
                  <span className="leading-relaxed">{activeCategory.importantNote}</span>
                </div>
              </div>
            )}

            {activeCategory.externalUrl && (
              <div className="mt-6 pt-2">
                <a
                  href={activeCategory.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-extrabold text-primary-foreground shadow-card hover:bg-emerald-deep"
                >
                  <span>{activeCategory.externalLabel || "Buka Website Resmi ↗"}</span>
                  <ExternalLink className="size-4" />
                </a>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
