import { useState } from "react";
import {
  ChevronRight,
  Clock,
  MapPin,
  CheckCircle2,
  MessageCircle,
  ArrowLeft,
  X,
  Users,
  Calendar,
  Sparkles,
  FileText,
  Info,
  Compass,
} from "lucide-react";
import { paketList, type Paket, WHATSAPP_NUMBER } from "@/data/jadesta";
import { resolveImageUrl, getImageFallback } from "@/lib/image-resolver";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { SourceLink } from "./SourceLink";
import { SectionHeading } from "./Primitives";
import { TripPlannerModal } from "./TripPlannerModal";

export function PackagesSection() {
  const [selectedKategori, setSelectedKategori] = useState<string>("semua");
  const [activeModalPaket, setActiveModalPaket] = useState<Paket | null>(null);
  const [openPlanner, setOpenPlanner] = useState(false);

  const filteredPaket = paketList.filter((p) => {
    if (selectedKategori === "semua") return true;
    return p.kategori === selectedKategori;
  });

  const getPackageBadgeLabel = (id: string, index: number) => {
    if (id.includes("fullday")) return "FULL DAY";
    if (id.includes("2d1n")) return "2D1N — 1 MALAM";
    if (id.includes("mangrove") || id.includes("custom")) return "CUSTOM";
    return index === 0 ? "FULL DAY" : index === 1 ? "2D1N — 1 MALAM" : "CUSTOM";
  };

  return (
    <section
      id="katalog"
      className="w-full scroll-mt-24 bg-[#F7F4EA] dark:bg-stone-950 py-20 sm:py-24 border-b border-[#14532D]/10 dark:border-stone-800"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="PAKET WISATA"
          title="Paket Wisata Utama"
          description="Pilihan paket kunjungan dan pengalaman kustom berbasis aktivitas masyarakat, ekowisata mangrove, Rumah Batik Bintan, dan homestay rumah warga."
        />

        {/* Category Filters */}
        <div className="mt-8 flex flex-wrap justify-center gap-2.5">
          {[
            { id: "semua", label: "Semua Kunjungan" },
            { id: "Homestay Rumah Warga", label: "Homestay Rumah Warga" },
            { id: "Ekowisata & Mangrove", label: "Ekowisata Mangrove" },
            { id: "Batik & Ekonomi Kreatif", label: "Rumah Batik Bintan" },
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedKategori(cat.id)}
              className={`rounded-full px-5 py-2.5 text-xs font-extrabold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                selectedKategori === cat.id
                  ? "bg-[#14532D] text-white shadow-md scale-105"
                  : "bg-white text-muted-foreground ring-1 ring-border hover:bg-[#E8F1E8] hover:text-[#064E3B]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Responsive Grid Layout */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {filteredPaket.map((p, idx) => (
            <article
              key={p.id}
              className="card-lift group flex flex-col justify-between overflow-hidden rounded-3xl border border-[#14532D]/15 bg-white dark:bg-stone-900 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-[#14532D]/40 hover:shadow-lift h-full"
            >
              <div className="flex flex-col flex-1">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={resolveImageUrl(p.image, p.nama)}
                    alt={p.nama}
                    width={1600}
                    height={1000}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = getImageFallback(p.nama, p.kategori);
                    }}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="hero-overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />

                  {/* Main Package Label Badge: FULL DAY, 2D1N — 1 MALAM, CUSTOM */}
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-[#064E3B] px-3.5 py-1.5 font-black text-xs text-white shadow-lg ring-1 ring-white/20 uppercase tracking-wide">
                    {getPackageBadgeLabel(p.id, idx)}
                  </span>

                  <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-black/75 px-3 py-1.5 text-[11px] font-extrabold text-white backdrop-blur-md shadow-sm border border-white/30">
                    <Clock className="size-3.5 text-[#C58A32]" />
                    {p.durasi}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Lokasi Spesifik */}
                    <p className="flex items-center gap-1.5 text-xs font-extrabold text-[#14532D] dark:text-emerald-400">
                      <MapPin className="size-3.5 shrink-0 text-[#C58A32]" />
                      <span className="truncate">{p.lokasiSpesifik}</span>
                    </p>

                    {/* Title with uniform min-height */}
                    <h3 className="mt-3 text-xl font-black text-foreground line-clamp-2 min-h-[3.25rem] flex items-center leading-snug group-hover:text-[#064E3B] dark:group-hover:text-emerald-300 transition-colors">
                      {p.nama}
                    </h3>

                    {/* Description with uniform min-height */}
                    <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed font-medium line-clamp-3 min-h-[3.75rem]">
                      {p.deskripsiLengkap || p.highlight}
                    </p>

                    {/* Highlights bullet tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#E8F1E8] px-2.5 py-1 text-[11px] font-bold text-[#14532D]">
                        <CheckCircle2 className="size-3.5 text-[#2F7D4A]" />
                        Panduan Lokal
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#E8F1E8] px-2.5 py-1 text-[11px] font-bold text-[#14532D]">
                        <CheckCircle2 className="size-3.5 text-[#2F7D4A]" />
                        Aktivitas CBT
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-black/5">
                    <SourceLink source={p.source} />
                  </div>
                </div>
              </div>

              <div className="border-t border-border p-4 sm:p-5 bg-surface/60 flex items-center justify-between gap-2.5">
                <div>
                  <span className="text-[10px] font-extrabold text-muted-foreground uppercase tracking-wider block">
                    Status Program
                  </span>
                  <p className="text-xs font-black text-[#14532D]">{p.hargaText}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveModalPaket(p)}
                    className="inline-flex items-center gap-1 rounded-full border border-[#14532D]/40 bg-[#14532D]/5 px-3 py-2 text-xs font-extrabold text-[#14532D] hover:bg-[#14532D] hover:text-white transition-all cursor-pointer min-h-[44px]"
                  >
                    <span>Detail Paket</span>
                    <ChevronRight className="size-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setOpenPlanner(true)}
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#C58A32] hover:bg-[#A87226] px-3.5 py-2 text-xs font-black text-white shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer ring-1 ring-[#DCA348] min-h-[44px]"
                  >
                    <Compass className="size-3.5 shrink-0 text-white" />
                    <span className="hidden sm:inline">Rencanakan</span>
                    <span className="sm:hidden">Pesan</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Detail Modal Dialog */}
      {activeModalPaket && (
        <Dialog
          open={!!activeModalPaket}
          onOpenChange={(open) => !open && setActiveModalPaket(null)}
        >
          <DialogContent className="max-w-3xl max-h-[90vh] flex flex-col overflow-hidden rounded-3xl p-0 border-0 bg-card shadow-2xl">
            {/* Header Image & Top Controls Overlay */}
            <div className="relative shrink-0 aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden">
              <img
                src={resolveImageUrl(activeModalPaket.image, activeModalPaket.nama)}
                alt={activeModalPaket.nama}
                onError={(e) => {
                  e.currentTarget.src = getImageFallback(activeModalPaket.nama, activeModalPaket.kategori);
                }}
                className="size-full object-cover"
              />
              <div className="hero-overlay absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/30" />

              {/* Top Controls Bar: Back Button, Category & Close X */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-20">
                <button
                  type="button"
                  onClick={() => setActiveModalPaket(null)}
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-800/90 hover:bg-emerald-900 px-4 py-2 text-xs font-black text-white backdrop-blur-md transition-all shadow-lg ring-1 ring-white/30 active:scale-95 cursor-pointer"
                >
                  <ArrowLeft className="size-4" />
                  <span>Kembali Ke Halaman Sebelumnya</span>
                </button>

                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-gold/90 px-3 py-1 text-[11px] font-black text-gold-foreground backdrop-blur-md shadow-md">
                    {activeModalPaket.kategori}
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveModalPaket(null)}
                    className="grid size-10 place-items-center rounded-full bg-black/80 hover:bg-black text-white hover:text-gold border border-white/40 backdrop-blur-md transition-all shadow-xl hover:scale-110 active:scale-95 cursor-pointer"
                    aria-label="Tutup Detail"
                  >
                    <X className="size-6 stroke-[2.5]" />
                  </button>
                </div>
              </div>

              {/* Title & Highlight Overlay */}
              <div className="absolute bottom-4 left-5 right-5 text-white z-10">
                {activeModalPaket.highlight && (
                  <span className="inline-block rounded-md bg-gold/25 px-2.5 py-0.5 text-[11px] font-black text-gold uppercase tracking-wider backdrop-blur-md ring-1 ring-gold/40 mb-1">
                    {activeModalPaket.highlight}
                  </span>
                )}
                <DialogTitle className="text-xl sm:text-2xl lg:text-3xl font-black text-white leading-tight">
                  {activeModalPaket.nama}
                </DialogTitle>
              </div>
            </div>

            {/* Scrollable Content Body */}
            <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1">
              {/* Quick Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 rounded-2xl bg-surface p-4 border border-border">
                <div className="flex items-start gap-2.5">
                  <MapPin className="size-4 text-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-bold text-muted-foreground uppercase block">
                      Lokasi Kunjungan
                    </span>
                    <p className="text-xs font-extrabold text-foreground">
                      {activeModalPaket.lokasiSpesifik}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="size-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-bold text-muted-foreground uppercase block">
                      Estimasi Durasi
                    </span>
                    <p className="text-xs font-extrabold text-foreground">
                      {activeModalPaket.durasi}
                    </p>
                  </div>
                </div>

                {activeModalPaket.targetVisitor && (
                  <div className="flex items-start gap-2.5 sm:col-span-2 lg:col-span-1">
                    <Users className="size-4 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] font-bold text-muted-foreground uppercase block">
                        Cocok Untuk
                      </span>
                      <p className="text-xs font-extrabold text-foreground">
                        {activeModalPaket.targetVisitor}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Deskripsi Umum Paket */}
              {activeModalPaket.deskripsiLengkap && (
                <div className="rounded-2xl border border-border bg-card p-5 shadow-sm space-y-2">
                  <h4 className="text-xs font-extrabold tracking-wider text-primary uppercase flex items-center gap-2">
                    <FileText className="size-4 text-primary" />
                    Deskripsi Umum Paket:
                  </h4>
                  <p className="text-xs sm:text-sm text-foreground leading-relaxed font-medium">
                    {activeModalPaket.deskripsiLengkap}
                  </p>
                </div>
              )}

              {/* RANGKAIAN PENGALAMAN / ITINERARY LENGKAP */}
              {activeModalPaket.itineraryHari1 && activeModalPaket.itineraryHari2 ? (
                /* 2D1N ITINERARY */
                <div className="space-y-6 border-t border-border pt-5">
                  <div className="flex items-center gap-2">
                    <Calendar className="size-4 text-primary" />
                    <h4 className="text-xs font-extrabold text-primary uppercase tracking-wider">
                      Rangkaian Pengalaman (Itinerary Lengkap 2D1N)
                    </h4>
                  </div>

                  {/* HARI PERTAMA */}
                  <div className="rounded-2xl bg-gold/5 border border-gold/30 p-5 space-y-4">
                    <div className="flex items-center justify-between border-b border-gold/20 pb-3">
                      <span className="text-xs font-black text-gold uppercase tracking-wider">
                        Hari Pertama
                      </span>
                      <h5 className="text-xs sm:text-sm font-extrabold text-foreground">
                        {activeModalPaket.subHeaderHari1 || "Creative & Green Experience"}
                      </h5>
                    </div>

                    <div className="relative pl-5 border-l-2 border-gold/40 space-y-5">
                      {activeModalPaket.itineraryHari1.map((item, i) => (
                        <div key={i} className="relative space-y-1.5">
                          <span className="absolute -left-[27px] top-1 size-3 rounded-full bg-gold ring-4 ring-background" />
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="rounded-md bg-gold/20 px-2 py-0.5 text-[11px] font-black text-gold">
                              {item.waktu} WIB
                            </span>
                            {item.kategori && (
                              <span className="rounded-full bg-surface px-2.5 py-0.5 text-[10px] font-extrabold text-foreground ring-1 ring-border">
                                {item.kategori}
                              </span>
                            )}
                          </div>
                          <h6 className="font-extrabold text-foreground text-sm">
                            {item.kegiatan}
                          </h6>
                          {item.deskripsi && (
                            <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                              {item.deskripsi}
                            </p>
                          )}
                          {item.note && (
                            <div className="mt-1.5 inline-flex items-center gap-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 px-3 py-1 text-[11px] font-bold text-amber-900 dark:text-amber-200">
                              <Info className="size-3.5 text-amber-600 shrink-0" />
                              <span>Catatan: {item.note}</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* HARI KEDUA */}
                  <div className="rounded-2xl bg-primary/5 border border-primary/30 p-5 space-y-4">
                    <div className="flex items-center justify-between border-b border-primary/20 pb-3">
                      <span className="text-xs font-black text-primary uppercase tracking-wider">
                        Hari Kedua
                      </span>
                      <h5 className="text-xs sm:text-sm font-extrabold text-foreground">
                        {activeModalPaket.subHeaderHari2 || "Nature & Cultural Experience"}
                      </h5>
                    </div>

                    <div className="relative pl-5 border-l-2 border-primary/40 space-y-5">
                      {activeModalPaket.itineraryHari2.map((item, i) => (
                        <div key={i} className="relative space-y-1.5">
                          <span className="absolute -left-[27px] top-1 size-3 rounded-full bg-primary ring-4 ring-background" />
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="rounded-md bg-primary/20 px-2 py-0.5 text-[11px] font-black text-primary">
                              {item.waktu} WIB
                            </span>
                            {item.kategori && (
                              <span className="rounded-full bg-surface px-2.5 py-0.5 text-[10px] font-extrabold text-foreground ring-1 ring-border">
                                {item.kategori}
                              </span>
                            )}
                          </div>
                          <h6 className="font-extrabold text-foreground text-sm">
                            {item.kegiatan}
                          </h6>
                          {item.deskripsi && (
                            <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                              {item.deskripsi}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : activeModalPaket.itinerary ? (
                /* FULL DAY / SINGLE DAY ITINERARY */
                <div className="border-t border-border pt-5 space-y-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="size-4 text-primary" />
                    <h4 className="text-xs font-extrabold text-primary uppercase tracking-wider">
                      Rangkaian Pengalaman (Itinerary Lengkap)
                    </h4>
                  </div>

                  <div className="relative pl-5 border-l-2 border-primary/40 space-y-5">
                    {activeModalPaket.itinerary.map((item, i) => (
                      <div key={i} className="relative space-y-1.5">
                        <span className="absolute -left-[27px] top-1 size-3 rounded-full bg-primary ring-4 ring-background" />
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-md bg-primary/10 px-2.5 py-0.5 text-[11px] font-black text-primary border border-primary/20">
                            {item.waktu} WIB
                          </span>
                          {item.kategori && (
                            <span className="rounded-full bg-surface px-2.5 py-0.5 text-[10px] font-extrabold text-foreground ring-1 ring-border">
                              {item.kategori}
                            </span>
                          )}
                        </div>
                        <h6 className="font-extrabold text-foreground text-sm">{item.kegiatan}</h6>
                        {item.deskripsi && (
                          <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                            {item.deskripsi}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {/* Fasilitas & Inklusi */}
              {activeModalPaket.fasilitas && activeModalPaket.fasilitas.length > 0 && (
                <div className="rounded-2xl border border-border bg-surface p-5 space-y-3">
                  <h4 className="text-xs font-extrabold tracking-wider text-primary uppercase flex items-center gap-2">
                    <Sparkles className="size-4 text-primary" />
                    Fasilitas & Inklusi Paket:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalPaket.fasilitas.map((f, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 rounded-full bg-card px-3.5 py-1.5 text-xs font-bold text-foreground ring-1 ring-border shadow-xs"
                      >
                        <CheckCircle2 className="size-3.5 text-emerald-600 shrink-0" />
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Metadata Sumber Citasi */}
              <SourceLink source={activeModalPaket.source} />
            </div>

            {/* Bottom Action Bar: Kembali & Hubungi Pengelola */}
            <div className="shrink-0 bg-surface px-6 py-4 sm:px-8 flex flex-wrap items-center justify-between gap-3 border-t border-border z-20">
              <button
                type="button"
                onClick={() => setActiveModalPaket(null)}
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-6 py-3 text-xs font-black text-primary hover:bg-primary hover:text-primary-foreground shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <ArrowLeft className="size-4" />
                <span className="hidden sm:inline">Kembali Ke Halaman Sebelumnya</span>
                <span className="inline sm:hidden">Kembali</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveModalPaket(null);
                  setOpenPlanner(true);
                }}
                className="inline-flex items-center gap-2 rounded-full bg-[#064E3B] hover:bg-[#166534] px-6 py-3 text-xs font-black text-white shadow-card transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer ring-2 ring-emerald-400/40"
              >
                <Compass className="size-4 text-amber-300" />
                <span>Rencanakan Kunjungan</span>
              </button>
            </div>
          </DialogContent>
        </Dialog>
      )}

      <TripPlannerModal open={openPlanner} onOpenChange={setOpenPlanner} />
    </section>
  );
}
