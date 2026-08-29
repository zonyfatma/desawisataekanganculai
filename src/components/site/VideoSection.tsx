import { useState } from "react";
import { Play, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { YOUTUBE_OFFICIAL_URL, YOUTUBE_OFFICIAL_ID } from "@/data/jadesta";
import { SectionHeading } from "./Primitives";
import ekangAnculai from "@/assets/village-ekang-anculai.webp";

export function VideoSection() {
  const [openVideo, setOpenVideo] = useState(false);

  return (
    <section className="w-full scroll-mt-24 bg-[#022C22] text-white dark:bg-stone-900 py-20 sm:py-24 border-y border-emerald-900/60 dark:border-stone-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          dark={true}
          eyebrow="Kenali Ekang Anculai"
          title="Kenali Ekang Anculai"
          description="Saksikan gambaran Desa Ekang Anculai melalui dokumentasi video yang menampilkan suasana desa, potensi alam, kegiatan masyarakat, budaya, dan pengalaman wisata berbasis masyarakat."
        />

        <div className="mt-10 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-2xl">
          <div className="relative aspect-video w-full overflow-hidden group">
            <img
              src={ekangAnculai}
              alt="Thumbnail Video Kenali Ekang Anculai"
              loading="lazy"
              className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="hero-overlay absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => setOpenVideo(true)}
                aria-label="Putar video Kenali Ekang Anculai"
                className="group/btn flex items-center gap-3 rounded-full bg-gold px-7 py-4 font-extrabold text-gold-foreground shadow-2xl transition-all duration-300 hover:scale-108 hover:bg-gold/90 cursor-pointer"
              >
                <span className="grid size-9 place-items-center rounded-full bg-black/20">
                  <Play className="size-5 fill-current ml-0.5" />
                </span>
                <span className="text-sm font-extrabold tracking-wide">Putar Video Utama</span>
              </button>
            </div>
          </div>

          {/* Section CTA Video YouTube */}
          <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-zinc-800 bg-zinc-900">
            <div>
              <h3 className="text-base font-extrabold text-white">Video Ekang Anculai</h3>
              <p className="mt-1 text-xs text-zinc-300">
                Dokumentasi Desa Ekang Anculai yang menampilkan suasana desa, potensi wisata,
                kegiatan masyarakat, budaya, dan kehidupan lokal.
              </p>
            </div>
            <a
              href={YOUTUBE_OFFICIAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-xs font-extrabold text-black transition-colors hover:bg-gold/90 shrink-0"
            >
              <span>Lihat lebih banyak video di YouTube</span>
              <ExternalLink className="size-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Video Modal Dialog */}
      <Dialog open={openVideo} onOpenChange={setOpenVideo}>
        <DialogContent className="max-w-4xl overflow-hidden rounded-3xl p-0 border-0 bg-black shadow-2xl">
          <DialogTitle className="sr-only">
            Video Dokumentasi Resmi Desa Wisata Ekang Anculai
          </DialogTitle>
          <div className="relative aspect-video w-full bg-black">
            <iframe
              src={`https://www.youtube.com/embed/${YOUTUBE_OFFICIAL_ID}?autoplay=1&rel=0`}
              title="Video Dokumentasi Resmi Desa Wisata Ekang Anculai"
              className="size-full border-0"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
