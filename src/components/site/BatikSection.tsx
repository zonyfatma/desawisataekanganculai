import { Sparkles, ExternalLink, CheckCircle2, Camera } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { RUMAH_BATIK_URL } from "@/data/jadesta";
import { resolveImageUrl, getImageFallback } from "@/lib/image-resolver";
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
              src={resolveImageUrl(ekangBatik, "Rumah Batik Bintan")}
              alt="Rumah Batik Bintan Desa Wisata Ekang Anculai"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = "/assets/ekang-batik.png";
              }}
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
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground font-medium">
                Pusat edukasi dan pelestarian budaya membatik di Desa Ekang Anculai. Pengunjung
                diajak langsung mengenal filosofi motif khas Kepulauan Riau (seperti Motif Daun Siri,
                Gonggong, dan Gelombang Laut) serta mempraktikkan proses mencanting dan pewarnaan kain.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-border/80 bg-surface p-4 shadow-soft">
                <p className="text-xs font-extrabold text-foreground">Lokasi Sanggar</p>
                <p className="mt-1 text-xs text-muted-foreground font-medium">
                  Jl. Lintas Barat KM 44, RT 003 / RW 002, Ekang Anculai
                </p>
              </div>
              <div className="rounded-2xl border border-border/80 bg-surface p-4 shadow-soft">
                <p className="text-xs font-extrabold text-foreground">Status Sentra</p>
                <p className="mt-1 text-xs text-emerald-600 dark:text-emerald-400 font-extrabold flex items-center gap-1">
                  <CheckCircle2 className="size-3.5" />
                  Aktif & Terdaftar Resmi
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={RUMAH_BATIK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-black text-primary-foreground shadow-card hover:bg-primary/90 transition-all cursor-pointer"
              >
                <span>Kunjungi Profil Rumah Batik Bintan</span>
                <ExternalLink className="size-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Galeri Kegiatan Membatik */}
        <div className="mt-16 border-t border-border/60 pt-12">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-primary uppercase">Dokumentasi Asli</span>
              <h4 className="text-xl font-extrabold text-foreground mt-1">
                Aktivitas & Workshop Membatik Bersama Wisatawan
              </h4>
            </div>
            <Link
              to="/galeri"
              className="inline-flex items-center gap-1.5 text-xs font-extrabold text-primary hover:underline"
            >
              <span>Lihat Semua Foto Galeri</span>
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
                    src={resolveImageUrl(act.image, act.title)}
                    alt={act.title}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = "/assets/ekang-batik.png";
                    }}
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
