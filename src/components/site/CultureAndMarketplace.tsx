import { useState } from "react";
import { MapPin, ChevronRight, ShoppingBag, MessageCircle } from "lucide-react";
import { getVillage, WHATSAPP_NUMBER } from "@/data/jadesta";
import { useSiteData } from "@/lib/cms-store";
import { SourceLink } from "./SourceLink";
import { SectionHeading } from "./Primitives";

export function CultureAndMarketplace() {
  const siteData = useSiteData();
  const village = getVillage("ekang-anculai");
  const [activeTab, setActiveTab] = useState<"semua" | "kuliner" | "kerajinan" | "oleholeh">(
    "semua",
  );

  const umkmList = siteData?.umkmList !== undefined ? siteData.umkmList : village?.umkmList || [];
  const filtered = umkmList.filter((item) => {
    const kat = (item.kategori as string) || "";
    if (activeTab === "kuliner") return kat.includes("Kuliner") || kat.includes("Pangan");
    if (activeTab === "kerajinan")
      return kat.includes("Kerajinan") || kat.includes("Khas") || kat.includes("Kreatif");
    if (activeTab === "oleholeh")
      return kat.includes("Oleh-oleh") || kat.includes("Akomodasi") || kat.includes("Ekowisata");
    return true;
  });

  return (
    <section
      id="umkm-budaya"
      className="w-full scroll-mt-24 bg-[#FEFCE8] dark:bg-amber-950/40 py-20 sm:py-24 border-b border-amber-200/60 dark:border-stone-800"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="PRODUK EKONOMI KREATIF & USAHA LOKAL DESA"
          title="Produk Ekonomi Kreatif dan Usaha Lokal Desa"
          description="Kenali hasil kreativitas dan usaha masyarakat Desa Ekang Anculai melalui produk lokal, kerajinan, kuliner, dan karya ekonomi kreatif yang telah tersedia."
        />

        {/* Tab Filters */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
          {[
            { id: "semua" as const, label: "Semua Produk & Usaha Lokal" },
            { id: "kuliner" as const, label: "Kuliner & Olahan Pangan" },
            { id: "kerajinan" as const, label: "Kerajinan & Produk Khas" },
            { id: "oleholeh" as const, label: "Oleh-oleh & Produk Kreatif" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full px-5 py-2.5 text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground shadow-card"
                  : "bg-card text-muted-foreground ring-1 ring-border hover:bg-accent hover:text-primary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid Product Cards */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="card-lift group flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all duration-500 hover:border-primary/40 hover:shadow-lift"
            >
              <div>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.nama}
                    width={800}
                    height={600}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="hero-overlay absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  <span className="absolute top-3 left-3 rounded-full bg-background/90 px-3 py-1 text-[11px] font-extrabold text-foreground backdrop-blur-md shadow-sm border border-border/40">
                    {item.kategori}
                  </span>

                  <span className="absolute top-3 right-3 rounded-full bg-emerald-700 px-2.5 py-1 text-[10px] font-black text-white backdrop-blur-md shadow-md border border-emerald-400/40">
                    Produk Desa
                  </span>
                </div>

                <div className="p-5">
                  <p className="flex items-center gap-1 text-[11px] font-extrabold text-primary">
                    <MapPin className="size-3.5 text-gold shrink-0" />
                    <span>{item.lokasi || "Desa Ekang Anculai"}</span>
                  </p>
                  <h4 className="mt-2 line-clamp-1 text-lg font-black text-foreground group-hover:text-primary transition-colors">
                    {item.nama}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm font-medium leading-relaxed text-muted-foreground line-clamp-3">
                    {item.deskripsi}
                  </p>

                  {/* Source citation */}
                  <div className="mt-3">
                    <SourceLink source={item.source} />
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-border/40 mt-3">
                <div className="flex items-center justify-between pt-3">
                  <span className="text-xs font-black text-primary bg-emerald-500/10 px-3 py-1.5 rounded-full ring-1 ring-primary/20">
                    {item.hargaInfo}
                  </span>
                  <a
                    href={`https://wa.me/${item.kontak || WHATSAPP_NUMBER}?text=Halo,%20saya%20tertarik%20dengan%20produk%20${encodeURIComponent(item.nama)}`}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Pesan ${item.nama} via WhatsApp`}
                    title={`Pesan ${item.nama} via WhatsApp`}
                    className="grid size-10 place-items-center rounded-full bg-emerald-600 text-white shadow-md transition-all duration-300 hover:bg-emerald-500 hover:scale-110 active:scale-95 ring-2 ring-emerald-500/30 cursor-pointer shrink-0"
                  >
                    <MessageCircle className="size-5 fill-current text-white" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer footer */}
        <p className="mt-8 text-center text-xs text-muted-foreground italic">
          Informasi usaha diperbarui berdasarkan sumber resmi yang tersedia. Hubungi
          pengelola/pemilik untuk informasi terbaru.
        </p>
      </div>
    </section>
  );
}
