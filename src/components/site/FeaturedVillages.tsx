import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { villages } from "@/data/jadesta";
import { VillageCard } from "./VillageCard";
import { Reveal, SectionHeading } from "./Primitives";

export function FeaturedVillages() {
  return (
    <section id="unggulan" className="scroll-mt-24 bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center gap-4">
          <SectionHeading
            align="center"
            eyebrow="Destinasi Desa"
            title="Direktori & Profil Desa Wisata"
            description="Mengenal potensi alam, budaya, dan kearifan lokal Desa Wisata Ekang Anculai serta kawasan desa wisata."
          />
          <Link
            to="/desa"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/25 bg-card px-5 py-3 text-sm font-bold text-primary shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground hover:shadow-lift"
          >
            Lihat Semua Desa
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {villages.map((v, i) => (
            <Reveal key={v.slug} delay={i * 0.06}>
              <VillageCard village={v} priority={i < 3} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
