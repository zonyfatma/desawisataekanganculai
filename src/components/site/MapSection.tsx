import { lazy, Suspense, useEffect, useMemo, useState } from "react";
import {
  Navigation,
  Ship,
  Plane,
  Car,
  ExternalLink,
  Copy,
  Check,
  Map as MapIcon,
  MessageCircle,
  Clock,
  Info,
} from "lucide-react";
import {
  villages,
  DEFAULT_VILLAGE_COORDINATES,
  DEFAULT_VILLAGE_ADDRESS,
  type LandmarkItem,
  type TransitItem,
  WHATSAPP_NUMBER,
} from "@/data/jadesta";
import { useSiteData } from "@/lib/cms-store";
import { Skeleton } from "@/components/ui/skeleton";
import { SectionHeading } from "./Primitives";
import { toast } from "sonner";

const MapCanvas = lazy(() => import("./MapCanvas"));

function MapSkeleton() {
  return (
    <div className="grid h-full min-h-[500px] w-full place-items-center bg-surface">
      <div className="w-full max-w-sm space-y-3 px-6 text-center">
        <Skeleton className="mx-auto h-4 w-32" />
        <Skeleton className="h-44 w-full rounded-2xl" />
        <p className="text-center text-xs font-semibold text-muted-foreground animate-pulse">
          Memuat peta interaktif Desa Wisata Ekang Anculai…
        </p>
      </div>
    </div>
  );
}

export function MapSection() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<"leaflet" | "google">("leaflet");
  const [copied, setCopied] = useState(false);

  const siteData = useSiteData();

  useEffect(() => {
    setMounted(true);
  }, []);

  const village = villages[0];
  const coords = village?.koordinat || DEFAULT_VILLAGE_COORDINATES;
  const address = village?.alamat || DEFAULT_VILLAGE_ADDRESS;

  const landmarks: LandmarkItem[] = useMemo(() => {
    const defaultLandmarks = village?.landmarks || [];
    if (siteData.landmarkList && siteData.landmarkList.length > 0) {
      return siteData.landmarkList.map((lm) => {
        const found = defaultLandmarks.find(
          (d) => d.id === lm.id || d.nama.toLowerCase() === lm.nama.toLowerCase(),
        );
        return {
          ...lm,
          lat: typeof lm.lat === "number" ? lm.lat : (found?.lat ?? coords[0]),
          lng: typeof lm.lng === "number" ? lm.lng : (found?.lng ?? coords[1]),
        };
      });
    }
    return defaultLandmarks;
  }, [siteData.landmarkList, village, coords]);

  const copyCoordinates = () => {
    const coordsText = `${coords[0].toFixed(6)}, ${coords[1].toFixed(6)}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(coordsText);
      setCopied(true);
      toast.success(`Koordinat GPS (${coordsText}) berhasil disalin!`);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const transitList: TransitItem[] = village?.transitInfo || [
    {
      id: "tr-lagoi",
      asal: "Dari Lagoi Ferry Terminal (SG)",
      waktuEstimasi: "± 15–20 Menit",
      via: "via Jl. Bintan Resorts",
      mode: "ship",
    },
    {
      id: "tr-rhf",
      asal: "Dari Bandara RHF Tanjungpinang",
      waktuEstimasi: "± 45–50 Menit",
      via: "via Jl. Lintas Barat Bintan",
      mode: "plane",
    },
    {
      id: "tr-roro",
      asal: "Pelabuhan Roro Tanjung Uban",
      waktuEstimasi: "± 25–30 Menit",
      via: "Akses penyeberangan dari Batam",
      mode: "ship",
    },
    {
      id: "tr-tpi",
      asal: "Pelabuhan Sri Bintan Pura TPI",
      waktuEstimasi: "± 50–60 Menit",
      via: "Dari Pusat Kota Tanjungpinang",
      mode: "car",
    },
  ];

  const getTransitIcon = (mode: string) => {
    switch (mode) {
      case "plane":
        return <Plane className="size-5 text-amber-400" />;
      case "car":
        return <Car className="size-5 text-purple-400" />;
      default:
        return <Ship className="size-5 text-sky-400" />;
    }
  };

  const googleMapsRouteUrl = `https://www.google.com/maps/dir/?api=1&destination=${coords[0]},${coords[1]}`;
  const wazeRouteUrl = `https://waze.com/ul?ll=${coords[0]},${coords[1]}&navigate=yes`;

  return (
    <section
      id="peta"
      className="w-full scroll-mt-24 bg-[#064E3B] text-white py-16 sm:py-24 border-y border-emerald-900/60 shadow-2xl relative overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="pointer-events-none absolute -top-40 -right-40 size-96 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 size-96 rounded-full bg-amber-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          align="center"
          dark={true}
          eyebrow="Peta & Aksesibilitas"
          title="Lokasi & Rute Akses Desa Wisata Ekang Anculai"
          description="Peta interaktif untuk membantu menemukan lokasi wisata, fasilitas, dan titik penting di Desa Wisata Ekang Anculai."
        />

        {/* Transit Distance Badges */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {transitList.map((tr) => (
            <div
              key={tr.id}
              className="rounded-3xl border border-emerald-800/80 bg-white/5 backdrop-blur-md p-5 shadow-soft transition-all duration-300 hover:bg-white/10 hover:border-emerald-400/40 hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-3.5">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white/10 border border-white/10">
                  {getTransitIcon(tr.mode)}
                </span>
                <div>
                  <p className="text-xs font-black text-white">{tr.asal}</p>
                  <p className="text-base font-extrabold text-[#C58A32]">{tr.waktuEstimasi}</p>
                  <p className="text-[11px] text-emerald-200/80">{tr.via}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer Waktu Tempuh */}
        <p className="mt-3 text-center text-[11px] italic text-emerald-200/70">
          * Perkiraan waktu perjalanan dapat berubah sesuai kondisi lalu lintas dan cuaca.
        </p>

        {/* Map Explorer Card */}
        <div className="mt-8 overflow-hidden rounded-3xl border border-border/80 bg-card shadow-2xl text-foreground">
          {/* Top Bar with Map Mode Toggle & Quick Info */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-surface px-5 py-3.5">
            <div className="flex items-center gap-2">
              <span className="flex size-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-foreground">
                Koordinat GPS:{" "}
                <span className="font-mono text-emerald-700">
                  {coords[0].toFixed(4)}° N, {coords[1].toFixed(4)}° E
                </span>
              </span>
              <button
                type="button"
                onClick={copyCoordinates}
                className="ml-1 inline-flex items-center gap-1 rounded-lg border border-border bg-card px-2.5 py-1 text-[11px] font-semibold text-muted-foreground transition-colors hover:text-foreground hover:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/40"
                title="Salin Koordinat GPS"
                aria-label="Salin Koordinat GPS"
              >
                {copied ? (
                  <Check className="size-3 text-emerald-600" />
                ) : (
                  <Copy className="size-3" />
                )}
                <span>{copied ? "Tersalin" : "Salin"}</span>
              </button>
            </div>

            {/* View Mode Switch: Leaflet Interactive vs Embedded Maps */}
            <div className="flex items-center rounded-2xl bg-card p-1 border border-border shadow-inner">
              <button
                type="button"
                onClick={() => setActiveTab("leaflet")}
                className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                  activeTab === "leaflet"
                    ? "bg-[#14532D] text-white shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-label="Tampilkan Peta Interaktif"
              >
                <MapIcon className="size-3.5" />
                <span>Peta Interaktif</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("google")}
                className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                  activeTab === "google"
                    ? "bg-[#14532D] text-white shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                aria-label="Tampilkan Google Maps Embed"
              >
                <Navigation className="size-3.5" />
                <span>Google Maps Embed</span>
              </button>
            </div>
          </div>

          {/* Main Full-Width Map Container */}
          <div className="relative min-h-[360px] lg:min-h-[520px] h-[380px] sm:h-[460px] lg:h-[560px] w-full bg-[#f3f4f6]">
            {activeTab === "leaflet" ? (
              mounted && village ? (
                <Suspense fallback={<MapSkeleton />}>
                  <MapCanvas items={[village]} landmarks={landmarks} />
                </Suspense>
              ) : (
                <MapSkeleton />
              )
            ) : (
              <div className="relative size-full min-h-[360px] lg:min-h-[520px]">
                <iframe
                  title="Google Maps Desa Ekang Anculai"
                  src={`https://maps.google.com/maps?q=${coords[0]},${coords[1]}&hl=id&z=15&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="size-full min-h-[360px] lg:min-h-[520px]"
                />
                <div className="absolute top-3 right-3 z-10">
                  <a
                    href={googleMapsRouteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-white/95 px-3.5 py-2 text-xs font-extrabold text-neutral-800 shadow-md hover:bg-white transition-all border border-neutral-200"
                  >
                    <span>Buka Google Maps Penuh</span>
                    <ExternalLink className="size-3.5 text-primary" />
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Map Action Bar: Navigation Shortcuts */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border bg-surface px-5 py-4">
            <div className="flex items-center gap-2.5">
              <span className="grid size-9 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                <Navigation className="size-4" />
              </span>
              <div>
                <p className="text-xs font-extrabold text-foreground">{village?.nama}</p>
                <p className="text-[11px] text-muted-foreground line-clamp-1">{address}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={googleMapsRouteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#14532D] px-5 py-2.5 text-xs font-extrabold text-white shadow-card hover:bg-[#064E3B] transition-all"
              >
                <Navigation className="size-3.5" />
                <span>Mulai Navigasi Google Maps</span>
                <ExternalLink className="size-3" />
              </a>

              <a
                href={wazeRouteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2.5 text-xs font-extrabold text-foreground hover:border-primary/40 transition-colors"
              >
                <span>Navigasi Waze</span>
                <ExternalLink className="size-3" />
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20Pengelola%20Desa%20Ekang%20Anculai,%20mohon%20info%20panduan%20rute%20dan%20akses%20ke%20lokasi`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2.5 text-xs font-extrabold text-emerald-700 dark:text-emerald-300 hover:bg-emerald-500/20 transition-colors"
              >
                <MessageCircle className="size-3.5" />
                <span>Tanya Rute WA</span>
              </a>
            </div>
          </div>
        </div>

        {/* Access Information Details */}
        <div className="mt-8 rounded-3xl border border-emerald-800/80 bg-white/5 backdrop-blur-md p-6 text-white text-xs leading-relaxed flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="grid size-9 shrink-0 place-items-center rounded-2xl bg-[#C58A32]/20 text-[#F7F4EA] font-bold border border-[#C58A32]/30">
              <Clock className="size-4" />
            </div>
            <div>
              <p className="font-extrabold text-sm text-white">
                Informasi Jam Operasional & Layanan Wisata
              </p>
              <p className="mt-0.5 text-emerald-100/80 text-xs">
                Kawasan wisata desa buka setiap hari pukul <strong>08.00 – 17.00 WIB</strong>. Akses
                jalan utama desa dapat dilalui kendaraan roda 2, mobil pribadi, hingga bus
                pariwisata berukuran sedang dan besar dengan area parkir luas.
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20Admin%20Desa%20Wisata%20Ekang%20Anculai,%20saya%20ingin%20reservasi%20layanan%20penjemputan/transportasi%20wisata`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#C58A32] hover:bg-[#A87226] px-5 py-2.5 font-black text-white shadow-md transition-colors"
          >
            <Info className="size-3.5" />
            Reservasi Transportasi / Penjemputan
          </a>
        </div>
      </div>
    </section>
  );
}
