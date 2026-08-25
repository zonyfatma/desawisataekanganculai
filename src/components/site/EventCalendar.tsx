import { useState, useEffect } from "react";
import {
  Calendar,
  Award,
  ChevronLeft,
  ChevronRight,
  Users,
  Drama,
  Palette,
  Activity,
  Building2,
  ShieldCheck,
  BarChart3,
  FileText,
  HeartHandshake,
  Landmark,
} from "lucide-react";
import { berita, getVillage, type KegiatanItem, type BeritaItem } from "@/data/jadesta";
import { useSiteData } from "@/lib/cms-store";
import { resolveImageUrl } from "@/lib/image-resolver";
import { SourceLink, isSpecificArticleUrl } from "./SourceLink";
import { SectionHeading } from "./Primitives";

function CardThumbnail({
  image,
  title,
  kategori,
  sourceUrl,
  type = "kegiatan",
  isIllustration = false,
}: {
  image?: string;
  title: string;
  kategori: string;
  sourceUrl?: string;
  type?: "kegiatan" | "berita";
  isIllustration?: boolean;
}) {
  const [hasError, setHasError] = useState(false);
  const showImage = Boolean(image && image.trim() !== "" && !hasError);
  const hasValidArticle = isSpecificArticleUrl(sourceUrl);

  const getCategoryIcon = () => {
    const k = (kategori || "").toLowerCase();
    if (k.includes("prestasi") || k.includes("penghargaan") || k.includes("juara")) {
      return <Award className="size-7 text-amber-500" />;
    }
    if (k.includes("statistik") || k.includes("bps")) {
      return <BarChart3 className="size-7 text-blue-500" />;
    }
    if (k.includes("bumdes") || k.includes("ekonomi")) {
      return <Building2 className="size-7 text-emerald-600" />;
    }
    if (k.includes("pangan") || k.includes("pom") || k.includes("sertifikasi")) {
      return <ShieldCheck className="size-7 text-rose-500" />;
    }
    if (k.includes("musyawarah") || k.includes("tata kelola") || k.includes("pemerintahan")) {
      return <FileText className="size-7 text-indigo-500" />;
    }
    if (
      k.includes("bantuan") ||
      k.includes("sosial") ||
      k.includes("blt") ||
      k.includes("stunting")
    ) {
      return <HeartHandshake className="size-7 text-teal-600" />;
    }
    if (k.includes("reog") || k.includes("budaya") || k.includes("seni") || k.includes("pawai")) {
      return <Drama className="size-7 text-purple-500" />;
    }
    if (k.includes("batik") || k.includes("kriya")) {
      return <Palette className="size-7 text-amber-600" />;
    }
    if (k.includes("kesehatan") || k.includes("posyandu") || k.includes("germas")) {
      return <Activity className="size-7 text-emerald-600" />;
    }
    if (k.includes("gotong royong") || k.includes("kerja bakti") || k.includes("pemuda")) {
      return <Users className="size-7 text-emerald-600" />;
    }
    return type === "berita" ? (
      <Award className="size-7 text-amber-600" />
    ) : (
      <Calendar className="size-7 text-emerald-600" />
    );
  };

  const resolvedSrc = resolveImageUrl(image, title);

  const innerContent = (
    <>
      {showImage ? (
        <>
          <img
            src={resolvedSrc}
            alt={title}
            onError={() => setHasError(true)}
            className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

          {/* Image source/type badge */}
          <span className="absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-full bg-black/70 px-2.5 py-0.5 text-[9px] font-bold text-white backdrop-blur shadow-sm">
            {resolvedSrc?.startsWith("http") ? "🌐 Foto Publikasi" : "📷 Dokumentasi Asli"}
          </span>
        </>
      ) : (
        /* Clean, honest vector fallback (100% Non-AI) */
        <div
          className={`flex size-full flex-col items-center justify-center p-5 text-center transition-all duration-300 ${
            type === "berita"
              ? "bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-primary/10 border-b border-amber-500/20"
              : "bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-emerald-500/15 border-b border-emerald-500/20"
          }`}
        >
          <div className="flex size-12 items-center justify-center rounded-2xl bg-card/90 shadow-sm border border-border/60 transition-transform duration-300 group-hover:scale-110">
            {getCategoryIcon()}
          </div>
          <span className="mt-2.5 text-[10px] text-muted-foreground font-medium">
            {type === "berita" ? "Informasi Publik Terverifikasi" : "Kegiatan Masyarakat Desa"}
          </span>
        </div>
      )}

      {/* Category badge top left */}
      <span className="absolute top-3 left-3 rounded-full bg-background/90 px-2.5 py-1 text-[10px] font-bold text-foreground backdrop-blur shadow-sm ring-1 ring-border/50">
        {kategori}
      </span>

      {/* Indicator bottom right */}
      {hasValidArticle && (
        <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-black/65 px-2 py-0.5 text-[9px] font-extrabold text-white backdrop-blur shadow-sm">
          <span>Rujukan Resmi</span>
          <span className="text-emerald-400">↗</span>
        </span>
      )}
    </>
  );

  if (hasValidArticle) {
    return (
      <a
        href={sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block aspect-[16/10] w-full overflow-hidden bg-muted/60 cursor-pointer select-none group"
        title={`Buka rujukan publikasi resmi: ${title}`}
      >
        {innerContent}
      </a>
    );
  }

  return (
    <div className="relative block aspect-[16/10] w-full overflow-hidden bg-muted/60 select-none">
      {innerContent}
    </div>
  );
}

export function EventCalendar() {
  const [activeTab, setActiveTab] = useState<"kegiatan" | "berita">("kegiatan");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [beritaSlide, setBeritaSlide] = useState(0);
  const siteData = useSiteData();
  const village = getVillage("ekang-anculai");

  const rawKegiatanList: KegiatanItem[] =
    siteData?.kegiatanList !== undefined ? siteData.kegiatanList : village?.kegiatanList || [];
  const rawBeritaList: BeritaItem[] = berita || [];

  // Show all published kegiatan items from CMS/database
  const kegiatanList = rawKegiatanList;

  const validBeritaList = rawBeritaList;

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.location.hash === "#kegiatan") {
        setActiveTab("kegiatan");
      } else if (window.location.hash === "#berita" || window.location.hash === "#event-berita") {
        setActiveTab("berita");
      }
    }
  }, []);

  // 5-second automatic photo/slide transition for kegiatan & berita slides
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const interval = setInterval(() => {
      if (document.visibilityState !== "visible") return;

      if (activeTab === "kegiatan") {
        const totalSlides = Math.ceil(kegiatanList.length / 6) || 1;
        if (totalSlides > 1) {
          setCurrentSlide((prev) => (prev + 1) % totalSlides);
        }
      } else {
        const totalSlides = Math.ceil(validBeritaList.length / 6) || 1;
        if (totalSlides > 1) {
          setBeritaSlide((prev) => (prev + 1) % totalSlides);
        }
      }
    }, 5000); // 5 seconds per user request

    return () => clearInterval(interval);
  }, [activeTab, kegiatanList.length, validBeritaList.length]);

  return (
    <section
      id="kegiatan"
      className="w-full scroll-mt-24 bg-[#F0FDF4] dark:bg-emerald-950/50 py-20 sm:py-24 border-b border-emerald-200/60 dark:border-slate-800"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Kegiatan & Publikasi Faktual"
          title="Kegiatan Desa & Berita Resmi Ekang Anculai"
          description="Laporan kegiatan pemerintah desa, musyawarah pembangunan, penyaluran BLT, dan prestasi resmi."
        />

        {/* Tab switcher */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-full bg-card p-1.5 ring-1 ring-border shadow-soft">
            <button
              type="button"
              onClick={() => setActiveTab("kegiatan")}
              className={`inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-extrabold transition-all cursor-pointer ${
                activeTab === "kegiatan"
                  ? "bg-primary text-primary-foreground shadow-card"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Calendar className="size-4" />
              Kegiatan Desa
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("berita")}
              className={`inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-extrabold transition-all cursor-pointer ${
                activeTab === "berita"
                  ? "bg-primary text-primary-foreground shadow-card"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Award className="size-4" />
              Berita & Prestasi Resmi
            </button>
          </div>
        </div>

        {/* Tab Content 1: Kegiatan Desa 2026 (Carousel 6 items per slide) */}
        {activeTab === "kegiatan" &&
          (() => {
            const pageSize = 6;
            const totalSlides = Math.ceil(kegiatanList.length / pageSize) || 1;
            const safeSlide = Math.min(Math.max(0, currentSlide), totalSlides - 1);
            const paginatedItems = kegiatanList.slice(
              safeSlide * pageSize,
              (safeSlide + 1) * pageSize,
            );

            return (
              <div className="mt-8 space-y-6">
                {/* Grid 6 Cards Container (Responsive: 1 col mobile, 2 cols tablet, 3 cols desktop = 6 cards) */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 transition-all duration-300">
                  {paginatedItems.map((ev) => (
                    <div
                      key={ev.id}
                      className="card-lift group flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card shadow-card hover:border-primary/40 transition-all"
                    >
                      <div>
                        <CardThumbnail
                          image={ev.image}
                          title={ev.judul}
                          kategori={ev.kategori}
                          sourceUrl={ev.source?.url}
                          type="kegiatan"
                        />

                        <div className="p-6">
                          <span className="text-[11px] font-bold text-muted-foreground">
                            {ev.tanggal}
                          </span>
                          {isSpecificArticleUrl(ev.source?.url) ? (
                            <a
                              href={ev.source.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-1 block line-clamp-2 text-base font-extrabold text-foreground leading-snug hover:text-primary transition-colors"
                            >
                              {ev.judul}
                            </a>
                          ) : (
                            <h3 className="mt-1 block line-clamp-2 text-base font-extrabold text-foreground leading-snug">
                              {ev.judul}
                            </h3>
                          )}
                          <p className="mt-2 line-clamp-3 text-xs text-muted-foreground leading-relaxed">
                            {ev.deskripsi}
                          </p>
                        </div>
                      </div>

                      <div className="p-6 pt-0 border-t border-border mt-4">
                        <SourceLink source={ev.source} />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Carousel Navigation & Dots Indicator */}
                {totalSlides > 1 && (
                  <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-border/60">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setCurrentSlide((prev) => Math.max(0, prev - 1))}
                        disabled={safeSlide === 0}
                        className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-4 py-2 text-xs font-extrabold text-foreground shadow-sm hover:bg-accent disabled:opacity-40 disabled:pointer-events-none transition-all cursor-pointer"
                      >
                        <ChevronLeft className="size-3.5" />
                        <span>Sebelumnya</span>
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          setCurrentSlide((prev) => Math.min(totalSlides - 1, prev + 1))
                        }
                        disabled={safeSlide === totalSlides - 1}
                        className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-4 py-2 text-xs font-extrabold text-foreground shadow-sm hover:bg-accent disabled:opacity-40 disabled:pointer-events-none transition-all cursor-pointer"
                      >
                        <span>Berikutnya</span>
                        <ChevronRight className="size-3.5" />
                      </button>
                    </div>

                    {/* Dot Indicators */}
                    <div className="flex items-center gap-2">
                      {Array.from({ length: totalSlides }).map((_, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setCurrentSlide(idx)}
                          aria-label={`Buka slide kegiatan ${idx + 1}`}
                          className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                            safeSlide === idx
                              ? "w-8 bg-primary shadow-sm ring-2 ring-primary/30"
                              : "w-2.5 bg-border hover:bg-muted-foreground/40"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })()}

        {/* Tab Content 2: Official News & Prestasi (Carousel 6 items per slide) */}
        {activeTab === "berita" &&
          (() => {
            if (validBeritaList.length === 0) {
              return (
                <div className="mt-8 rounded-2xl border border-border bg-card p-8 text-center shadow-soft">
                  <Award className="mx-auto size-12 text-primary/60" />
                  <h3 className="mt-3 text-base font-extrabold text-foreground">
                    Publikasi Berita & Prestasi Resmi
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground max-w-md mx-auto">
                    Seluruh informasi prestasi dan kegiatan desa dapat diverifikasi langsung melalui
                    dokumen publikasi resmi pemerintah daerah dan pengelola.
                  </p>
                </div>
              );
            }

            const pageSize = 6;
            const totalSlides = Math.ceil(validBeritaList.length / pageSize) || 1;
            const safeSlide = Math.min(Math.max(0, beritaSlide), totalSlides - 1);
            const paginatedItems = validBeritaList.slice(
              safeSlide * pageSize,
              (safeSlide + 1) * pageSize,
            );

            return (
              <div className="mt-8 space-y-6">
                {/* Grid 6 Cards Container (Responsive: 1 col mobile, 2 cols tablet, 3 cols desktop = 6 cards) */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 transition-all duration-300">
                  {paginatedItems.map((item) => (
                    <div
                      key={item.id}
                      className="card-lift group flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card shadow-card hover:border-primary/40 transition-all"
                    >
                      <div>
                        <CardThumbnail
                          image={item.image}
                          title={item.judul}
                          kategori={item.kategori}
                          sourceUrl={item.source?.url}
                          type="berita"
                        />

                        <div className="p-6">
                          <span className="text-[11px] font-bold text-muted-foreground">
                            {item.tanggal}
                          </span>
                          {isSpecificArticleUrl(item.source?.url) ? (
                            <a
                              href={item.source.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-1 block line-clamp-2 text-base font-extrabold text-foreground leading-snug hover:text-primary transition-colors"
                            >
                              {item.judul}
                            </a>
                          ) : (
                            <h3 className="mt-1 block line-clamp-2 text-base font-extrabold text-foreground leading-snug">
                              {item.judul}
                            </h3>
                          )}
                          <p className="mt-2 line-clamp-3 text-xs text-muted-foreground leading-relaxed">
                            {item.ringkas}
                          </p>
                        </div>
                      </div>

                      <div className="p-6 pt-0 border-t border-border/40 mt-auto">
                        <div className="pt-3">
                          <SourceLink source={item.source} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Carousel Navigation & Dots Indicator */}
                {totalSlides > 1 && (
                  <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-border/60">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setBeritaSlide((prev) => Math.max(0, prev - 1))}
                        disabled={safeSlide === 0}
                        className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-4 py-2 text-xs font-extrabold text-foreground shadow-sm hover:bg-accent disabled:opacity-40 disabled:pointer-events-none transition-all cursor-pointer"
                      >
                        <ChevronLeft className="size-3.5" />
                        <span>Sebelumnya</span>
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          setBeritaSlide((prev) => Math.min(totalSlides - 1, prev + 1))
                        }
                        disabled={safeSlide === totalSlides - 1}
                        className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-4 py-2 text-xs font-extrabold text-foreground shadow-sm hover:bg-accent disabled:opacity-40 disabled:pointer-events-none transition-all cursor-pointer"
                      >
                        <span>Berikutnya</span>
                        <ChevronRight className="size-3.5" />
                      </button>
                    </div>

                    {/* Dot Indicators */}
                    <div className="flex items-center gap-2">
                      {Array.from({ length: totalSlides }).map((_, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setBeritaSlide(idx)}
                          aria-label={`Buka slide berita ${idx + 1}`}
                          className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                            safeSlide === idx
                              ? "w-8 bg-primary shadow-sm ring-2 ring-primary/30"
                              : "w-2.5 bg-border hover:bg-muted-foreground/40"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })()}
      </div>
    </section>
  );
}
