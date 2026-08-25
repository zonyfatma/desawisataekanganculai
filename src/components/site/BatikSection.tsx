import { Sparkles, ExternalLink, CheckCircle2, Camera } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { RUMAH_BATIK_URL } from "@/data/jadesta";
import { SectionHeading } from "./Primitives";
import ekangBatik from "@/assets/ekang-batik.png";
import kegiatanBatik1 from "@/assets/kegiatan-batik-1.jpg";
import kegiatanBatik2 from "@/assets/kegiatan-batik-2.jpg";
import kegiatanBatik3 from "@/assets/kegiatan-batik-3.jpg";

export function BatikSection() {
  const batikActivities = [
    {
      image: kegiatanBatik1,
      title: "Hasil Membatik Wisatawan",
      desc: "Karya batik canting & tie-dye warna-warni kreasi peserta workshop.",
    },
    {
      image: kegiatanBatik2,
      title: "Praktik Mencanting Batik",
      desc: "Mencanting menggunakan malam panas langsung dari wajan pemanas.",
    },
    {
      image: kegiatanBatik3,
      title: "Workshop Wisatawan Asing",
      desc: "Pengalaman membatik wisatawan mancanegara pada pemidangan kain.",
    },
  ];

  return (
    <section className="scroll-mt-24 bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Wisata Batik & Kreatif"
          title="Belajar, Berkarya, dan Mengenal Batik"
          description="Kenali proses dan karya batik yang berkembang di kawasan Ekang Anculai melalui galeri dan sanggar kreasi Rumah Batik Bintan."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-card">
            <img
              src={ekangBatik}
              alt="Rumah Batik Bintan Desa Wisata Ekang Anculai"
              loading="lazy"
              className="size-full object-cover"
            />
            <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-gold/90 px-3.5 py-1.5 text-xs font-extrabold text-gold-foreground backdrop-blur">
              <Sparkles className="size-3.5" />
              Sentra Kreatif Desa
            </span>
          </div>

          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold text-primary uppercase">
                Ekonomi Kreatif Lokal
              </span>
              <h3 className="mt-2 text-2xl font-extrabold text-foreground sm:text-3xl">
                Rumah Batik Bintan
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Rumah Batik Bintan merupakan pusat pembelajaran dan karya seni batik khas Bintan di
                Ekang Anculai. Pengunjung dapat melihat langsung karya batik tulis dan cap bermotif
                flora-fauna khas pesisir serta mengenal karya kreatif perajin desa.
              </p>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm font-semibold text-foreground">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                <span>Mengenal proses pembuatan batik canting tulis dan cap motif Bintan.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                <span>Produk kreatif buatan tangan perajin lokal masyarakat desa.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                <span>Pengalaman budaya yang menguatkan identitas dan ekonomi desa.</span>
              </li>
            </ul>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={RUMAH_BATIK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-xs font-extrabold text-primary-foreground shadow-card transition-all duration-300 hover:bg-emerald-deep hover:shadow-lift"
              >
                <span>Jelajahi Rumah Batik Bintan</span>
                <ExternalLink className="size-4" />
              </a>
              <Link
                to="/galeri"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3.5 text-xs font-bold text-foreground transition-all duration-300 hover:bg-accent hover:text-primary"
              >
                <Camera className="size-4 text-primary" />
                <span>Lihat Semua Galeri Kegiatan</span>
              </Link>
            </div>
          </div>
        </div>

        {/* 3-Photo Activity Showcase Grid */}
        <div className="mt-14 pt-10 border-t border-border">
          <div className="flex items-center justify-between gap-4">
            <div>
              <span className="text-xs font-extrabold text-primary uppercase tracking-wider block">
                Dokumentasi Pengunjung
              </span>
              <h4 className="text-xl font-black text-foreground sm:text-2xl mt-1">
                Aktivitas Membatik & Belajar Wisatawan
              </h4>
            </div>
            <Link
              to="/galeri"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-extrabold text-primary hover:underline"
            >
              <span>Galeri Lengkap</span>
              <Camera className="size-3.5" />
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {batikActivities.map((act, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={act.image}
                    alt={act.title}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm font-black text-white">{act.title}</p>
                    <p className="text-xs text-white/80 font-medium mt-0.5 leading-snug">
                      {act.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
