import {
  Users,
  HeartHandshake,
  Trees,
  TrendingUp,
  Compass,
  ArrowRight,
  Clock,
  MapPin,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Primitives";
import ekangAnculai from "@/assets/village-ekang-anculai.jpg";
import ekangAgrowisata from "@/assets/ekang-agrowisata.jpg";
import ekangMangrove from "@/assets/ekang-mangrove.jpg";
import ekangBatik from "@/assets/ekang-batik.png";
import ekangReog from "@/assets/ekang-reog.jpg";
import kegiatanBatik3 from "@/assets/kegiatan-batik-3.jpg";

const cbtPrinciples = [
  {
    num: "01",
    title: "Masyarakat Terlibat",
    desc: "Masyarakat setempat bertindak sebagai pengelola, perajin batik, petani, dan tuan rumah utama dalam menghadirkan pengalaman wisata.",
    icon: Users,
  },
  {
    num: "02",
    title: "Budaya Tetap Hidup",
    desc: "Seni Melayu, tradisi lokal, keterampilan membatik, dan pementasan budaya dipelihara secara autentik di balai desa dan titik aktivitas masyarakat.",
    icon: HeartHandshake,
  },
  {
    num: "03",
    title: "Alam Dijaga",
    desc: "Ekowisata Hutan Mangrove dan perkebunan sayur masyarakat dijaga dan dikonservasi demi keberlanjutan lingkungan pedesaan.",
    icon: Trees,
  },
  {
    num: "04",
    title: "Ekonomi Lokal Tumbuh",
    desc: "Hasil pengembangan pariwisata memberikan nilai ekonomi langsung bagi perajin Rumah Batik Bintan, kelompok tani, dan usaha kuliner warga.",
    icon: TrendingUp,
  },
];

const experienceSteps = [
  {
    step: "01",
    title: "Datang",
    desc: "Tiba dan menyapa kehangatan suasana pedesaan Ekang Anculai.",
    image: ekangAnculai,
  },
  {
    step: "02",
    title: "Kenali Desa",
    desc: "Orientasi awal & pengenalan potensi daya tarik wisata desa bersama warga.",
    image: ekangAgrowisata,
  },
  {
    step: "03",
    title: "Pilih Pengalaman",
    desc: "Pilih aktivitas sesuai minat: batik, perkebunan, mangrove, budaya, atau kuliner.",
    image: ekangMangrove,
  },
  {
    step: "04",
    title: "Nikmati Aktivitas",
    desc: "Praktik membatik, bercocok tanam, susur mangrove, & santap kuliner rumahan.",
    image: ekangBatik,
  },
  {
    step: "05",
    title: "Berinteraksi dengan Masyarakat",
    desc: "Mengenal kehidupan, pertunjukan budaya Melayu, dan kehangatan warga desa.",
    image: ekangReog,
  },
  {
    step: "06",
    title: "Pulang Membawa Pengalaman",
    desc: "Membawa kenangan autentik, batik buatan sendiri, dan produk UMKM desa.",
    image: kegiatanBatik3,
  },
];

export function CbtSection() {
  return (
    <section
      id="pengalaman"
      className="w-full scroll-mt-24 bg-[#ECFDF5] dark:bg-emerald-950/60 py-20 sm:py-24 border-b border-emerald-300/60 dark:border-stone-800"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Berwisata Bersama Masyarakat"
          title="Community Based Tourism (CBT)"
          description="Ekang Anculai menghadirkan pengalaman wisata yang dekat dengan kehidupan masyarakat. Wisatawan tidak hanya melihat destinasi, tetapi ikut belajar, berinteraksi, berkarya, menikmati pangan lokal, dan merasakan kehidupan desa."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cbtPrinciples.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.num} delay={index * 0.08}>
                <div className="card-lift flex h-full flex-col justify-between rounded-3xl border border-[#166534]/20 bg-white dark:bg-stone-900 p-6 shadow-card transition-all duration-300 hover:border-[#22C55E]/50 hover:shadow-lift">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black text-[#064E3B]">{item.num}</span>
                      <span className="grid size-10 place-items-center rounded-2xl bg-[#DCFCE7] text-[#166534] dark:bg-emerald-950 dark:text-emerald-300">
                        <Icon className="size-5" />
                      </span>
                    </div>
                    <h3 className="mt-5 text-lg font-extrabold tracking-tight text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground font-medium">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-6 border-t border-black/5 pt-3 text-[11px] font-bold text-[#166534] dark:text-emerald-400">
                    Prinsip Keberlanjutan CBT
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* EXPERIENCE ROUTE / GAMBARAN PERJALANAN */}
        <div className="mt-20 rounded-3xl border border-[#166534]/20 bg-white dark:bg-stone-900 p-6 sm:p-10 shadow-soft">
          <div className="mx-auto flex max-w-2xl flex-col items-center justify-center text-center border-b border-black/5 pb-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#DCFCE7] px-3.5 py-1 text-xs font-black text-[#064E3B] uppercase tracking-wider">
              <Compass className="size-3.5" />
              Alur Fleksibel Wisatawan
            </span>
            <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold text-foreground text-center">
              Gambaran Perjalanan Wisata Ekang Anculai
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-muted-foreground text-center leading-relaxed">
              Wisata Ekang Anculai dirancang fleksibel agar pengunjung dapat bebas memilih kombinasi
              pengalaman yang diinginkan.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
            {experienceSteps.map((s, idx) => (
              <div key={s.step} className="group relative flex flex-col h-full">
                {/* Outer Card Container (No overflow-hidden so connecting arrows are never clipped!) */}
                <div className="flex h-full flex-col justify-between rounded-2xl border border-black/10 bg-[#F0FDF4] dark:bg-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#22C55E]/50 hover:shadow-card">
                  <div className="flex flex-col flex-1">
                    {/* Photo Container with rounded top and overflow-hidden strictly for image zoom */}
                    <div className="relative aspect-[16/11] w-full bg-muted rounded-t-2xl overflow-hidden">
                      <img
                        src={s.image}
                        alt={s.title}
                        width={600}
                        height={400}
                        loading="lazy"
                        decoding="async"
                        className="size-full object-cover transition-transform duration-500 group-hover:scale-108"
                      />
                      <span className="absolute top-2.5 left-2.5 grid size-7 place-items-center rounded-xl bg-[#064E3B] text-[11px] font-black text-white shadow-md backdrop-blur-sm">
                        {s.step}
                      </span>
                    </div>

                    <div className="p-4 flex flex-col flex-1 justify-between">
                      <div>
                        <h4 className="text-sm font-extrabold text-foreground group-hover:text-[#166534] dark:group-hover:text-emerald-400 transition-colors min-h-[2.75rem] flex items-center leading-snug">
                          {s.title}
                        </h4>
                        <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed font-medium min-h-[3.25rem]">
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Panah Alur Antar Card (Ditempatkan di luar container overflow-hidden agar 100% Utuh & Tidak Terpotong) */}
                {idx < experienceSteps.length - 1 && (
                  <div className="hidden xl:flex items-center absolute -right-3.5 top-1/4 -translate-y-1/2 z-30 pointer-events-none">
                    <div className="size-7 rounded-full bg-[#064E3B] text-amber-300 shadow-xl ring-4 ring-white dark:ring-stone-900 border border-emerald-400 flex items-center justify-center transition-transform group-hover:scale-110">
                      <ArrowRight className="size-3.5 stroke-[2.5]" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-[#DCFCE7] border border-[#22C55E]/30 p-4 text-center text-xs sm:text-sm font-extrabold text-[#064E3B]">
            "Ekang Anculai menghadirkan pengalaman wisata yang dekat dengan kehidupan masyarakat.
            Wisatawan tidak hanya melihat destinasi, tetapi ikut belajar, berinteraksi, berkarya,
            menikmati pangan lokal, dan merasakan kehidupan desa."
          </div>
        </div>
      </div>
    </section>
  );
}
