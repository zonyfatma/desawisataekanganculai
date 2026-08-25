import { ArrowUpRight, CalendarDays } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/jadesta";
import { useSiteData } from "@/lib/cms-store";
import { resolveImageUrl, getImageFallback } from "@/lib/image-resolver";
import { Reveal, SectionHeading } from "./Primitives";
import { SourceLink, isSpecificArticleUrl } from "./SourceLink";

const badgeClass: Record<string, string> = {
  "Prestasi 2026": "bg-gold/20 text-gold-foreground",
  "Event & Gastronomi": "bg-primary/12 text-primary",
  Ekowisata: "bg-level-berkembang/12 text-level-berkembang",
  "Kesenian Budaya": "bg-primary/12 text-primary",
};

export function NewsSection() {
  const siteData = useSiteData();
  const rawKegiatan = siteData?.kegiatanList || [];
  const whatsapp = siteData?.villageInfo?.whatsapp || WHATSAPP_NUMBER;

  const kegiatanList = rawKegiatan;

  const featured = kegiatanList.find((b) => b.featured) ?? kegiatanList[0];
  const rest = kegiatanList.filter((b) => b.id !== (featured?.id ?? ""));

  return (
    <section id="berita" className="w-full bg-surface py-20 sm:py-24 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            eyebrow="Publikasi & Liputan Resmi"
            title="Kegiatan Desa & Berita Resmi Ekang Anculai"
            description="Informasi faktual mengenai kegiatan pemerintahan desa, kerja bakti warga, dan raihan prestasi desa wisata."
          />
          <a
            href={`https://wa.me/${whatsapp}?text=${encodeURIComponent("Halo Pengelola Wisata Ekang Anculai, saya ingin menanyakan informasi kegiatan & berita desa...")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-extrabold text-primary-foreground shadow-card hover:bg-primary/90 transition-all shrink-0 cursor-pointer"
          >
            <span>Hubungi Redaksi Desa</span>
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal delay={0.1}>
            {featured ? (
              <article className="card-lift group flex flex-col justify-between h-full overflow-hidden rounded-2xl border border-border bg-card shadow-card">
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    {featured.image ? (
                      <img
                        src={resolveImageUrl(featured.image, featured.judul)}
                        alt={featured.judul}
                        width={1600}
                        height={1000}
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = getImageFallback(featured.judul, featured.kategori);
                        }}
                        className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex size-full flex-col items-center justify-center p-6 text-center bg-primary/10">
                        <CalendarDays className="size-10 text-primary" />
                      </div>
                    )}
                    <span
                      className={`absolute top-4 left-4 rounded-full px-3 py-1.5 text-[11px] font-bold ${badgeClass[featured.kategori] ?? "bg-primary/12 text-primary"}`}
                    >
                      {featured.kategori}
                    </span>
                  </div>
                  <div className="p-6">
                    <p className="flex flex-wrap items-center gap-2 text-xs font-semibold text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <CalendarDays className="size-3.5" />
                        {featured.tanggal}
                      </span>
                    </p>
                    <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-foreground text-balance-tight">
                      {isSpecificArticleUrl(featured.source?.url) ? (
                        <a
                          href={featured.source!.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors"
                        >
                          {featured.judul}
                        </a>
                      ) : (
                        featured.judul
                      )}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {featured.deskripsi || featured.ringkas}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0 border-t border-border mt-4">
                  <SourceLink source={featured.source} />
                </div>
              </article>
            ) : null}
          </Reveal>

          <div className="space-y-4">
            {rest.map((b, i) => (
              <Reveal key={b.id} delay={i * 0.06}>
                <article className="card-lift flex flex-col sm:flex-row gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft">
                  {b.image ? (
                    <img
                      src={resolveImageUrl(b.image, b.judul)}
                      alt={b.judul}
                      width={1600}
                      height={1000}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = getImageFallback(b.judul, b.kategori);
                      }}
                      className="size-24 shrink-0 rounded-xl object-cover sm:size-28 bg-muted"
                    />
                  ) : (
                    <div className="flex size-24 shrink-0 items-center justify-center rounded-xl bg-primary/10 sm:size-28 border border-primary/20">
                      <CalendarDays className="size-8 text-primary" />
                    </div>
                  )}
                  <div className="min-w-0 flex-1 flex flex-col justify-between">
                    <div>
                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-bold ${badgeClass[b.kategori] ?? "bg-primary/12 text-primary"}`}
                      >
                        {b.kategori}
                      </span>
                      <h3 className="mt-2 line-clamp-2 text-sm font-extrabold text-foreground">
                        {isSpecificArticleUrl(b.source?.url) ? (
                          <a
                            href={b.source!.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                          >
                            {b.judul}
                          </a>
                        ) : (
                          b.judul
                        )}
                      </h3>
                      <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{b.ringkas}</p>
                    </div>
                    <div className="mt-2">
                      <SourceLink source={b.source} />
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
