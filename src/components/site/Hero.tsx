import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  MapPin,
  Sparkles,
  Compass,
  ArrowRight,
  Award,
  Palette,
  Trees,
  Flower2,
  Home,
  Utensils,
  Drama,
} from "lucide-react";
import { TripPlannerModal } from "./TripPlannerModal";
import ekangAnculai from "@/assets/village-ekang-anculai.jpg";
import ekangMangrove from "@/assets/ekang-mangrove.jpg";
import ekangBatik from "@/assets/ekang-batik.png";
import ekangAgrowisata from "@/assets/ekang-agrowisata.jpg";
import ekangKuliner from "@/assets/ekang-kuliner.png";
import ekangReog from "@/assets/ekang-reog.jpg";
import tekoKayangan from "@/assets/teko-kayangan.jpg";

const slides = [
  {
    id: "batik",
    image: ekangBatik,
    icon: Palette,
    nama: "Rumah Batik Bintan",
    sub: "Ikon Kreatif — Wisata edukasi membatik canting tulis & cap motif Bintan",
    tag: "01 • Ikon Kreatif",
    objectPosition: "center 30%",
  },
  {
    id: "mangrove",
    image: ekangMangrove,
    icon: Trees,
    nama: "Hutan Mangrove",
    sub: "Ikon Alam — Ekowisata dan edukasi lingkungan ekosistem pesisir pedalaman",
    tag: "02 • Ikon Alam",
    objectPosition: "center 40%",
  },
  {
    id: "perkebunan",
    image: ekangAgrowisata,
    icon: Flower2,
    nama: "Perkebunan Sayur Masyarakat",
    sub: "Ikon Hijau — Edukasi pertanian dan kehidupan tani masyarakat desa",
    tag: "03 • Ikon Hijau",
    objectPosition: "center 35%",
  },
  {
    id: "budaya",
    image: tekoKayangan,
    icon: Drama,
    nama: "Teko Kayangan — Ruang Budaya & Kreativitas",
    sub: "Ruang Budaya — Wadah pertunjukan seni, kegiatan budaya, dan aktivitas komunitas desa",
    tag: "04 • Ruang Budaya",
    objectPosition: "center 45%",
  },
  {
    id: "gastronomi",
    image: ekangKuliner,
    icon: Utensils,
    nama: "Kuliner Lokal & Gastronomi",
    sub: "Cita Rasa Desa — Olahan ubi, gulai daun ubi, dan hasil kebun warga",
    tag: "05 • Cita Rasa Desa",
    objectPosition: "center 50%",
  },
  {
    id: "homestay",
    image: ekangAnculai,
    icon: Home,
    nama: "Homestay Rumah Warga",
    sub: "Konsep Pengembangan — Tinggal dan merasakan kehangatan masyarakat desa",
    tag: "CBT Homestay",
    objectPosition: "center 35%",
  },
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const [openPlanner, setOpenPlanner] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const t = setInterval(() => {
      if (document.visibilityState === "visible") {
        setIndex((i) => (i + 1) % slides.length);
      }
    }, 5000); // 5 seconds interval continuous per user request

    return () => clearInterval(t);
  }, [prefersReducedMotion]);

  const active = slides[index]!;

  return (
    <>
      <section
        className="relative min-h-[92vh] w-full overflow-hidden pt-36 pb-32 sm:pb-40 flex flex-col justify-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        {/* Background image slider with smooth zoom transition and focal point position */}
        <AnimatePresence mode="sync">
          <motion.img
            key={index}
            src={active.image}
            alt={active.nama}
            width={1600}
            height={1000}
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "auto"}
            decoding={index === 0 ? "sync" : "async"}
            initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.3 : 1.2, ease: "easeOut" }}
            style={{ objectPosition: active.objectPosition || "center center" }}
            className="absolute inset-0 size-full object-cover"
          />
        </AnimatePresence>

        {/* Ambient overlay gradient */}
        <div className="hero-overlay absolute inset-0 bg-black/45 bg-gradient-to-t from-black/95 via-black/65 to-black/40" />

        {/* Hero main content */}
        <div className="relative mx-auto w-full max-w-7xl px-4 pt-4 sm:px-6 lg:px-8 z-10 text-left">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl flex flex-col items-start justify-start text-left"
          >
            {/* Badges row with ultra-high contrast */}
            <div className="flex flex-wrap items-center justify-start gap-2 text-left">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#C58A32] px-3.5 py-1.5 text-xs font-black tracking-wider text-white uppercase shadow-lg border border-[#DCA348]">
                <Sparkles className="size-3.5 fill-white" />
                Community Based Tourism (CBT)
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#14532D] px-3.5 py-1.5 text-xs font-extrabold text-white shadow-lg border border-[#2F7D4A]/60">
                <Award className="size-3.5 text-white" />
                Desa Berprestasi Kepri 2026
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-black/75 px-3.5 py-1.5 text-xs font-extrabold text-white backdrop-blur-md border border-white/30 shadow-lg">
                <MapPin className="size-3.5 text-[#C58A32]" />
                Teluk Sebong, Bintan
              </span>
            </div>

            {/* Title with crisp drop-shadow */}
            <h1 className="mt-4 sm:mt-5 text-left text-2xl sm:text-5xl lg:text-7xl leading-[1.1] font-black tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)]">
              Desa Wisata Hijau dan Kreatif Ekang Anculai
            </h1>

            {/* Tagline & Subheadline storytelling */}
            <p className="mt-2 sm:mt-3 text-left text-sm sm:text-xl font-black text-[#F7F4EA] italic leading-tight max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
              "Experience the Authentic Village Life"
            </p>
            <p className="mt-2 text-left max-w-2xl text-xs sm:text-base leading-relaxed text-white/95 font-medium drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)]">
              "Where Nature, Culture, Creativity, and Village Life Grow Together"
            </p>

            {/* Interactive Destination Preview Chips */}
            <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-start gap-2 max-w-full text-left py-1">
              {slides.map((s, idx) => {
                const Icon = s.icon;
                const isCurrent = index === idx;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setIndex(idx)}
                    className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[11px] sm:text-xs font-extrabold transition-all duration-300 backdrop-blur-md cursor-pointer whitespace-nowrap min-h-[36px] ${
                      isCurrent
                        ? "bg-[#C58A32] text-white ring-2 ring-[#DCA348] shadow-xl"
                        : "bg-black/75 text-white hover:bg-black/90 hover:text-[#C58A32] border border-white/30 shadow-md"
                    }`}
                    aria-label={`Slide ${idx + 1}: ${s.nama}`}
                  >
                    <Icon className="size-3.5 shrink-0" />
                    <span>{s.tag}</span>
                  </button>
                );
              })}
            </div>

            {/* Action buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3 text-left w-full sm:w-auto">
              {/* PRIMARY CTA: Rencanakan Kunjungan */}
              <button
                type="button"
                onClick={() => setOpenPlanner(true)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C58A32] hover:bg-[#A87226] px-6 sm:px-7 py-3.5 text-xs sm:text-sm font-black text-white shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 ring-2 ring-[#DCA348] cursor-pointer min-h-[48px] w-full sm:w-auto"
              >
                <Compass className="size-4 shrink-0 text-white" />
                <span>Rencanakan Kunjungan</span>
              </button>

              {/* SECONDARY CTA: Jelajahi Potensi */}
              <a
                href="#potensi"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#14532D] hover:bg-[#064E3B] px-6 sm:px-7 py-3.5 text-xs sm:text-sm font-black text-white shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 ring-1 ring-[#2F7D4A]/60 min-h-[48px] w-full sm:w-auto text-center"
              >
                <span>Jelajahi Potensi</span>
                <ArrowRight className="size-4 shrink-0 text-white" />
              </a>
            </div>

            {/* Slide Active Banner Info Card */}
            <div className="mt-6 sm:mt-8 flex items-center gap-3 sm:gap-4 rounded-2xl bg-black/85 p-3.5 sm:p-4 backdrop-blur-md w-full max-w-xl border border-white/30 shadow-2xl text-left">
              <div className="grid size-10 sm:size-11 shrink-0 place-items-center rounded-xl bg-[#C58A32]/25 text-[#F7F4EA] font-black text-xs sm:text-sm border border-[#C58A32]/40">
                0{index + 1}
              </div>
              <div className="min-w-0 flex-1 text-left">
                <div className="flex items-center justify-start gap-2">
                  <span className="text-[10px] font-black text-[#F7F4EA] uppercase tracking-wider">
                    {active.tag}
                  </span>
                </div>
                <p className="truncate text-sm sm:text-base font-black text-white text-left">
                  {active.nama}
                </p>
                <p className="truncate text-[11px] sm:text-xs text-white/80 font-medium text-left">
                  {active.sub}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trip Planner Modal */}
      <TripPlannerModal open={openPlanner} onOpenChange={setOpenPlanner} />
    </>
  );
}
