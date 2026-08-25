import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Camera, Filter, ExternalLink } from "lucide-react";
import { galeriDataset, type GaleriFotoItem } from "@/data/jadesta";
import { useSiteData } from "@/lib/cms-store";
import { resolveImageUrl, getImageFallback } from "@/lib/image-resolver";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { JsonLdScript, getBreadcrumbJsonLd } from "@/lib/json-ld";

const categories = [
  "Semua",
  "Alam",
  "Mangrove",
  "Perkebunan",
  "Budaya",
  "Batik",
  "Kuliner",
  "Aktivitas Masyarakat",
  "Kegiatan Desa",
] as const;

export const Route = createFileRoute("/galeri")({
  head: () => ({
    meta: [
      { title: "Galeri Foto | Desa Wisata Ekang Anculai Bintan" },
      {
        name: "description",
        content:
          "Galeri foto dokumentasi Desa Wisata Ekang Anculai: alam, mangrove, perkebunan, batik, budaya, gastronomi, homestay, dan aktivitas masyarakat.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://desawisataekanganculai.id/galeri" },
      { property: "og:title", content: "Galeri Foto | Desa Wisata Ekang Anculai Bintan" },
      {
        property: "og:description",
        content:
          "Galeri foto dokumentasi Desa Wisata Ekang Anculai: alam, mangrove, perkebunan, batik, budaya, gastronomi, homestay, dan aktivitas masyarakat.",
      },
      {
        property: "og:image",
        content: "https://desawisataekanganculai.id/android-chrome-512x512.png",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Galeri Foto | Desa Wisata Ekang Anculai Bintan",
      },
      {
        name: "twitter:description",
        content:
          "Dokumentasi keindahan alam, budaya, membatik, dan kehidupan masyarakat Desa Wisata Ekang Anculai Bintan.",
      },
      {
        name: "twitter:image",
        content: "https://desawisataekanganculai.id/android-chrome-512x512.png",
      },
    ],
    links: [{ rel: "canonical", href: "https://desawisataekanganculai.id/galeri" }],
  }),
  component: GaleriPage,
});

function GaleriPage() {
  const siteData = useSiteData();
  const galeriList = siteData?.galeriItems || galeriDataset;

  const [activeCategory, setActiveCategory] = useState<string>("Semua");
  const [lightbox, setLightbox] = useState<GaleriFotoItem | null>(null);

  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Beranda", url: "/" },
    { name: "Galeri Foto", url: "/galeri" },
  ]);

  const filtered = galeriList.filter((item) => {
    if (activeCategory === "Semua") return true;
    return item.kategori === activeCategory;
  });

  return (
    <div className="bg-surface pt-28 pb-20">
      <JsonLdScript data={breadcrumbSchema} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl">
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-[11px] font-extrabold tracking-widest text-primary uppercase ring-1 ring-primary/20 shadow-sm">
            Dokumentasi Visual
          </span>
          <h1 className="mt-4 text-3xl font-black tracking-tight text-foreground sm:text-5xl leading-[1.12]">
            Galeri Foto Desa Wisata Ekang Anculai
          </h1>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground font-medium">
            Dokumentasi keindahan alam, ekowisata mangrove, kreasi Rumah Batik Bintan, aktivitas
            perkebunan, pertunjukan budaya, dan kehangatan kehidupan desa.
          </p>
        </header>

        {/* Filter Categories */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground">
            <Filter className="size-3.5" />
            Kategori:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-2 text-xs font-bold transition-colors whitespace-nowrap cursor-pointer ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-card"
                  : "bg-card text-muted-foreground ring-1 ring-border hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightbox(item)}
              className="card-lift group relative cursor-pointer overflow-hidden rounded-3xl border border-border bg-card shadow-card"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={resolveImageUrl(item.image, item.judul)}
                  alt={item.alt}
                  width={800}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.src = getImageFallback(item.judul, item.kategori);
                  }}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 rounded-full bg-background/90 px-3 py-1 text-[11px] font-bold text-foreground backdrop-blur">
                  {item.kategori}
                </span>
                <span className="absolute inset-0 grid place-items-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity text-white">
                  <Camera className="size-8" />
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-base font-extrabold text-foreground">{item.judul}</h3>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{item.caption}</p>
                {item.sumber && (
                  <div className="mt-3 flex items-center justify-between gap-2 border-t border-border/50 pt-2 text-[11px]">
                    <span className="font-medium text-muted-foreground truncate">
                      Sumber: <strong className="text-foreground">{item.sumber}</strong>
                    </span>
                    {item.sumberUrl && (
                      <a
                        href={item.sumberUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 font-bold text-primary hover:underline shrink-0"
                      >
                        <span>Lihat Rujukan</span>
                        <ExternalLink className="size-3" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Dialog */}
      {lightbox && (
        <Dialog open={!!lightbox} onOpenChange={() => setLightbox(null)}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black border-0 rounded-3xl">
            <div className="relative">
              <img
                src={resolveImageUrl(lightbox.image, lightbox.judul)}
                alt={lightbox.alt}
                onError={(e) => {
                  e.currentTarget.src = getImageFallback(lightbox.judul, lightbox.kategori);
                }}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="bg-card p-6 border-t border-border">
                <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold text-primary">
                  {lightbox.kategori}
                </span>
                <h3 className="mt-2 text-lg font-extrabold text-foreground">{lightbox.judul}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{lightbox.caption}</p>
                {lightbox.sumber && (
                  <div className="mt-3 flex items-center justify-between border-t border-border/60 pt-2 text-xs">
                    <span className="text-muted-foreground">
                      Sumber Dokumentasi:{" "}
                      <strong className="text-foreground">{lightbox.sumber}</strong>
                    </span>
                    {lightbox.sumberUrl && (
                      <a
                        href={lightbox.sumberUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-bold text-primary hover:underline"
                      >
                        <span>Buka Tautan Rujukan Asli</span>
                        <ExternalLink className="size-3.5" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
