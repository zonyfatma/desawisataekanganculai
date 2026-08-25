import { Award, Building2, Package, Sparkles, TrendingUp, Eye } from "lucide-react";
import { statistik } from "@/data/jadesta";
import { useSiteData } from "@/lib/cms-store";
import { CountUp, Reveal } from "./Primitives";

const icons = [Building2, Sparkles, Award, Package];

export function StatsSection() {
  const siteData = useSiteData();
  const visits = siteData?.visitCount ?? 0;

  return (
    <section className="w-full relative overflow-hidden bg-[#022C22] text-white py-16 sm:py-20 border-t border-b border-emerald-900/80 shadow-2xl">
      {/* Subtle glowing background radial circles */}
      <div className="absolute -top-24 -left-24 size-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 size-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <div className="mb-10 text-center">
          <div className="flex flex-wrap justify-center items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-800/80 px-3.5 py-1 text-xs font-extrabold text-amber-300 uppercase tracking-widest ring-1 ring-emerald-500/40">
              Profil & Statistik Desa
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3.5 py-1 text-xs font-extrabold text-emerald-200 uppercase tracking-widest ring-1 ring-emerald-400/40">
              <Eye className="size-3.5 text-amber-400" />
              <span>{visits.toLocaleString("id-ID")} Kunjungan Website</span>
            </span>
          </div>
          <h2 className="mt-3 text-2xl sm:text-4xl font-black text-white tracking-tight">
            Profil dan Capaian Desa Wisata Ekang Anculai
          </h2>
          <p className="mt-2 text-xs sm:text-sm font-medium text-emerald-200/90 max-w-2xl mx-auto">
            Informasi statistik profil wilayah, potensi CBT, kawasan ekowisata, capaian resmi, dan
            statistik kunjungan pengunjung digital.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {statistik.map((s, i) => {
            const Icon = icons[i]!;
            return (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-emerald-700/50 bg-gradient-to-b from-emerald-900/80 to-emerald-950/90 p-6 shadow-xl backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-amber-400/60 hover:shadow-2xl">
                  {/* Subtle top card glow line */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div>
                    <div className="flex items-center justify-between">
                      <span className="grid size-12 place-items-center rounded-2xl bg-emerald-500/25 text-emerald-300 ring-1 ring-emerald-400/40 shadow-inner transition-transform duration-300 group-hover:scale-110 group-hover:bg-amber-400/20 group-hover:text-amber-300">
                        <Icon className="size-6" />
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-800/60 px-2.5 py-1 text-[10px] font-extrabold text-emerald-200 uppercase tracking-wider ring-1 ring-emerald-600/40">
                        <TrendingUp className="size-3 text-amber-400" />
                        Terverifikasi
                      </span>
                    </div>

                    <p className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-amber-400 drop-shadow-sm">
                      <CountUp value={s.value} suffix={s.suffix} />
                    </p>
                    <p className="mt-2 text-base font-extrabold text-white group-hover:text-amber-200 transition-colors">
                      {s.label}
                    </p>
                    <p className="mt-1.5 text-xs text-emerald-200/85 font-medium leading-relaxed">
                      {s.caption}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
