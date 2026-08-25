import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { klasifikasiInfo, type Village } from "@/data/jadesta";
import { Skeleton } from "@/components/ui/skeleton";
import { SourceLink } from "./SourceLink";

export function VillageCard({
  village,
  priority = false,
}: {
  village: Village;
  priority?: boolean;
}) {
  const info = klasifikasiInfo[village.klasifikasi];

  return (
    <article className="card-lift group flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all duration-300 hover:shadow-lift">
      <div>
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={village.image}
            alt={`Pemandangan ${village.nama} di ${village.kabupaten}`}
            width={1600}
            height={1000}
            loading={priority ? "eager" : "lazy"}
            className="size-full object-cover transition-transform duration-700 group-hover:scale-108"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
          <span
            className={`absolute top-3 right-3 rounded-full px-3 py-1.5 text-[11px] font-extrabold backdrop-blur shadow-soft ${
              village.adwi ? "bg-gold text-gold-foreground" : "bg-background/90 text-primary"
            }`}
          >
            {village.adwi ?? `Desa ${village.klasifikasi}`}
          </span>
          <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1.5 text-[11px] font-bold text-foreground backdrop-blur">
            <MapPin className="size-3.5 text-primary" />
            {village.kabupaten}
          </span>
        </div>

        <div className="p-6">
          <span
            className={`w-fit rounded-full px-3 py-1 text-[11px] font-extrabold ${info.badgeClass}`}
          >
            {info.label}
          </span>
          <h3 className="mt-3 text-xl font-extrabold tracking-tight text-foreground">
            {village.nama}
          </h3>
          <p className="mt-1.5 flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
            <MapPin className="size-4 shrink-0 text-primary" />
            <span className="truncate">
              {village.kabupaten}, {village.provinsi}
            </span>
          </p>

          <p className="mt-3 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
            {village.deskripsi}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {village.fasilitas.slice(0, 3).map((f) => (
              <span
                key={f}
                className="rounded-full bg-surface px-2.5 py-1 text-[11px] font-semibold text-muted-foreground border border-border/60"
              >
                {f}
              </span>
            ))}
            {village.fasilitas.length > 3 ? (
              <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-bold text-primary">
                +{village.fasilitas.length - 3} fasilitas
              </span>
            ) : null}
          </div>

          <SourceLink source={village.source} />
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3 border-t border-border p-6 pt-4 bg-surface/50">
        <div className="min-w-0">
          <span className="text-[10px] font-bold text-muted-foreground uppercase">Pengelola</span>
          <p className="truncate text-xs font-extrabold text-foreground">{village.pokdarwis}</p>
        </div>
        <Link
          to="/desa/$slug"
          params={{ slug: village.slug }}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-bold text-primary-foreground shadow-card transition-all duration-300 hover:bg-emerald-deep hover:shadow-lift"
        >
          Lihat Profil Lengkap
          <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}

export function VillageCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-card">
      <Skeleton className="aspect-[4/3] w-full rounded-none" />
      <div className="space-y-3 p-6">
        <Skeleton className="h-4 w-24 rounded-full" />
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-9 w-full rounded-full" />
      </div>
    </div>
  );
}
