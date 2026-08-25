import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect, useState, useMemo, useRef, useCallback } from "react";
import { Link } from "@tanstack/react-router";
import {
  DEFAULT_VILLAGE_COORDINATES,
  DEFAULT_VILLAGE_ADDRESS,
  type Village,
  type LandmarkItem,
} from "@/data/jadesta";
import { resolveImageUrl } from "@/lib/image-resolver";
import {
  Navigation,
  ExternalLink,
  ZoomIn,
  ZoomOut,
  Layers,
  Search,
  Share2,
  LocateFixed,
  Compass,
  X,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { toast } from "sonner";

// Fix Leaflet's default icon URLs
delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: unknown })._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// Category Color System
const CATEGORY_COLORS: Record<string, { bg: string; text: string; pinHex: string }> = {
  "Pusat Desa": { bg: "bg-emerald-900", text: "text-white", pinHex: "#064E3B" },
  Wisata: { bg: "bg-emerald-600", text: "text-white", pinHex: "#16A34A" },
  Budaya: { bg: "bg-orange-700", text: "text-white", pinHex: "#C2410C" },
  Kuliner: { bg: "bg-amber-600", text: "text-white", pinHex: "#D97706" },
  UMKM: { bg: "bg-purple-600", text: "text-white", pinHex: "#7C3AED" },
  Fasilitas: { bg: "bg-blue-600", text: "text-white", pinHex: "#2563EB" },
};

// Icon Cache Map for performance
const ICON_CACHE = new Map<string, L.DivIcon>();

const getCategoryMarkerIcon = (category: string, isVillageCenter = false) => {
  const cacheKey = `${category}-${isVillageCenter}`;
  if (ICON_CACHE.has(cacheKey)) {
    return ICON_CACHE.get(cacheKey)!;
  }

  const catLower = (category || "").toLowerCase();

  let pinColor = "#16A34A"; // Wisata Green default
  let iconSvg = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m8 19 4-4 4 4"/><path d="m7 14 5-5 5 5"/><path d="m6 9 6-7 6 7"/><path d="M12 19v3"/></svg>`;

  if (isVillageCenter) {
    pinColor = "#064E3B"; // Dark Emerald
    iconSvg = `<svg width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
  } else if (
    catLower.includes("budaya") ||
    catLower.includes("craft") ||
    catLower.includes("batik") ||
    catLower.includes("seni") ||
    catLower.includes("rekreasi")
  ) {
    pinColor = "#C2410C"; // Terracotta
    iconSvg = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>`;
  } else if (
    catLower.includes("kuliner") ||
    catLower.includes("gastronomi") ||
    catLower.includes("makanan")
  ) {
    pinColor = "#D97706"; // Amber
    iconSvg = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8Z"/><path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"/></svg>`;
  } else if (
    catLower.includes("umkm") ||
    catLower.includes("oleh") ||
    catLower.includes("kreatif") ||
    catLower.includes("kerajinan")
  ) {
    pinColor = "#7C3AED"; // Purple
    iconSvg = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`;
  } else if (
    catLower.includes("fasilitas") ||
    catLower.includes("pemerintahan") ||
    catLower.includes("kantor") ||
    catLower.includes("kesehatan") ||
    catLower.includes("ibadah") ||
    catLower.includes("pendidikan")
  ) {
    pinColor = "#2563EB"; // Blue
    iconSvg = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`;
  }

  const width = isVillageCenter ? 32 : 26;
  const height = isVillageCenter ? 40 : 34;

  const divIcon = L.divIcon({
    className: "ekang-map-pin",
    html: `
      <div style="position:relative;display:flex;flex-direction:column;align-items:center;cursor:pointer;user-select:none;">
        <div style="position:absolute;bottom:-2px;width:${width * 0.6}px;height:4px;background:rgba(0,0,0,0.3);border-radius:50%;filter:blur(1px);"></div>
        <div style="position:relative;width:${width}px;height:${height}px;filter:drop-shadow(0 3px 5px rgba(0,0,0,0.25));transition:transform .15s ease;" onmouseover="this.style.transform='scale(1.15) translateY(-2px)'" onmouseout="this.style.transform='scale(1) translateY(0)'">
          <svg width="${width}" height="${height}" viewBox="0 0 30 38" fill="none">
            <path d="M15 0C6.71573 0 0 6.71573 0 15C0 26.25 15 38 15 38C15 38 30 26.25 30 15C30 6.71573 23.2843 0 15 0Z" fill="${pinColor}"/>
            <circle cx="15" cy="14" r="9" fill="rgba(0,0,0,0.15)"/>
            <circle cx="15" cy="14" r="8" fill="${pinColor}"/>
          </svg>
          <div style="position:absolute;top:7px;left:${(width - 12) / 2}px;display:grid;place-items:center;pointer-events:none;">
            ${iconSvg}
          </div>
        </div>
      </div>
    `,
    iconSize: [width, height],
    iconAnchor: [width / 2, height],
    popupAnchor: [0, -height],
  });

  ICON_CACHE.set(cacheKey, divIcon);
  return divIcon;
};

// User Location Marker Icon
const getUserLocationMarkerIcon = () => {
  return L.divIcon({
    className: "user-location-pin",
    html: `
      <div style="position:relative;display:grid;place-items:center;">
        <div style="position:absolute;width:24px;height:24px;border-radius:50%;background:rgba(37,99,235,0.35);animation:ping 1.8s cubic-bezier(0,0,0.2,1) infinite;"></div>
        <div style="width:14px;height:14px;border-radius:50%;background:#2563EB;border:2.5px solid #FFFFFF;box-shadow:0 2px 6px rgba(0,0,0,0.3);"></div>
      </div>
    `,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });
};

// Auto-resizer & camera flyTo controller
function MapController({
  focusCoords,
  defaultCenter,
}: {
  focusCoords?: [number, number] | null | undefined;
  defaultCenter: [number, number];
}) {
  const map = useMap();

  useEffect(() => {
    const handleResize = () => {
      try {
        map.invalidateSize();
      } catch {
        // ignore
      }
    };
    handleResize();
    const t1 = setTimeout(handleResize, 100);
    const t2 = setTimeout(handleResize, 350);
    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("resize", handleResize);
    };
  }, [map]);

  useEffect(() => {
    if (focusCoords && focusCoords.length === 2) {
      map.flyTo(focusCoords, 16.5, { duration: 1.2, easeLinearity: 0.2 });
    } else {
      map.setView(defaultCenter, 14.5, { animate: true });
    }
  }, [focusCoords, defaultCenter, map]);

  return null;
}

interface MapCanvasProps {
  items: Village[];
  focusCoords?: [number, number] | null | undefined;
  landmarks?: LandmarkItem[];
}

export default function MapCanvas({ items, focusCoords: initialFocus, landmarks }: MapCanvasProps) {
  const village = items[0];
  const defaultCenter: [number, number] = village?.koordinat || DEFAULT_VILLAGE_COORDINATES;
  const villageAddress = village?.alamat || DEFAULT_VILLAGE_ADDRESS;

  const [activeLayer, setActiveLayer] = useState<"standard" | "satellite">("standard");
  const [activeCategory, setActiveCategory] = useState<string>("Semua");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [focusCoords, setFocusCoords] = useState<[number, number] | null>(initialFocus || null);
  const [userCoords, setUserCoords] = useState<[number, number] | null>(null);
  const [geoLoading, setGeoLoading] = useState<boolean>(false);
  const [isLegendOpen, setIsLegendOpen] = useState<boolean>(false);
  const [activeMarkerId, setActiveMarkerId] = useState<string | null>(null);

  const markerRefs = useRef<Record<string, L.Marker>>({});

  const allLandmarks: LandmarkItem[] = useMemo(() => {
    if (landmarks && landmarks.length > 0) return landmarks;
    return village?.landmarks || [];
  }, [landmarks, village]);

  // Normalized landmark items for search & filter
  const processedLandmarks = useMemo(() => {
    return allLandmarks.map((lm) => {
      const lat = typeof lm.lat === "number" ? lm.lat : defaultCenter[0];
      const lng = typeof lm.lng === "number" ? lm.lng : defaultCenter[1];

      let normalizedCategory = "Wisata";
      const catLower = (lm.kategori || "").toLowerCase();
      if (catLower.includes("budaya") || catLower.includes("craft") || catLower.includes("batik")) {
        normalizedCategory = "Budaya";
      } else if (catLower.includes("kuliner") || catLower.includes("gastronomi")) {
        normalizedCategory = "Kuliner";
      } else if (
        catLower.includes("umkm") ||
        catLower.includes("oleh") ||
        catLower.includes("kreatif")
      ) {
        normalizedCategory = "UMKM";
      } else if (
        catLower.includes("fasilitas") ||
        catLower.includes("pemerintahan") ||
        catLower.includes("kantor") ||
        catLower.includes("ibadah")
      ) {
        normalizedCategory = "Fasilitas";
      }

      return {
        ...lm,
        lat,
        lng,
        normalizedCategory,
      };
    });
  }, [allLandmarks, defaultCenter]);

  // Filtered landmarks based on category filter & search query
  const filteredLandmarks = useMemo(() => {
    return processedLandmarks.filter((lm) => {
      const matchCat =
        activeCategory === "Semua" ||
        lm.normalizedCategory.toLowerCase() === activeCategory.toLowerCase() ||
        lm.kategori.toLowerCase().includes(activeCategory.toLowerCase());

      const matchSearch =
        !searchQuery ||
        lm.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lm.deskripsi.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lm.kategori.toLowerCase().includes(searchQuery.toLowerCase());

      return matchCat && matchSearch;
    });
  }, [processedLandmarks, activeCategory, searchQuery]);

  // Live search suggestions
  const searchSuggestions = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const qLower = searchQuery.toLowerCase();
    return processedLandmarks
      .filter(
        (lm) =>
          lm.nama.toLowerCase().includes(qLower) || lm.kategori.toLowerCase().includes(qLower),
      )
      .slice(0, 5);
  }, [processedLandmarks, searchQuery]);

  const handleSelectLocation = useCallback((id: string, lat: number, lng: number, name: string) => {
    setFocusCoords([lat, lng]);
    setActiveMarkerId(id);
    setSearchQuery("");
    setIsSearchOpen(false);
    toast.info(`Mengarahkan peta ke ${name}`);

    setTimeout(() => {
      const marker = markerRefs.current[id];
      if (marker) {
        marker.openPopup();
      }
    }, 400);
  }, []);

  const handleGetUserLocation = () => {
    if (!navigator.geolocation) {
      toast.error("Browser Anda tidak mendukung layanan lokasi GPS.");
      return;
    }
    setGeoLoading(true);
    toast.info("Mengakses lokasi Anda...");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setGeoLoading(false);
        const coords: [number, number] = [pos.coords.latitude, pos.coords.longitude];
        setUserCoords(coords);
        setFocusCoords(coords);
        toast.success("Lokasi Anda berhasil ditemukan!");
      },
      (err) => {
        setGeoLoading(false);
        if (err.code === err.PERMISSION_DENIED) {
          toast.error("Izin lokasi ditolak. Silakan aktifkan GPS pada pengaturan browser Anda.");
        } else {
          toast.error("Gagal mendapatkan lokasi Anda. Pastikan lokasi perangkat diaktifkan.");
        }
      },
      { timeout: 10000, enableHighAccuracy: true },
    );
  };

  const handleResetCenter = () => {
    setFocusCoords(defaultCenter);
    setActiveMarkerId("village-center");
    toast.info("Peta dipusatkan ke Desa Wisata Ekang Anculai");
  };

  const handleShareLocation = async (nama: string, lat: number, lng: number) => {
    const routeUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${nama} - Desa Wisata Ekang Anculai`,
          text: `Lihat lokasi ${nama} di Desa Wisata Ekang Anculai, Bintan`,
          url: routeUrl,
        });
        return;
      } catch {
        // Fallback to clipboard if share cancelled
      }
    }
    if (navigator.clipboard) {
      navigator.clipboard.writeText(routeUrl);
      toast.success(`Tautan rute lokasi ${nama} berhasil disalin!`);
    }
  };

  const categories = ["Semua", "Wisata", "Budaya", "UMKM", "Kuliner", "Fasilitas"];

  return (
    <div className="relative size-full min-h-[520px] w-full overflow-hidden bg-[#e5e3df] font-sans">
      {/* Top Floating Search & Filter Bar */}
      <div className="absolute top-3 left-3 right-3 z-[1000] max-w-2xl mx-auto flex flex-col gap-2 pointer-events-none">
        {/* Search Bar */}
        <div className="relative pointer-events-auto w-full shadow-lg rounded-2xl bg-white/95 backdrop-blur-md border border-neutral-200">
          <div className="flex items-center px-3.5 py-2.5 gap-2">
            <Search className="size-4 text-emerald-700 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsSearchOpen(true);
              }}
              onFocus={() => setIsSearchOpen(true)}
              aria-label="Cari lokasi, wisata, kuliner, UMKM di desa"
              placeholder="🔍 Cari lokasi, wisata, kuliner, UMKM..."
              className="w-full bg-transparent text-xs font-semibold text-neutral-900 placeholder:text-neutral-500 outline-none"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setIsSearchOpen(false);
                }}
                className="p-1 text-neutral-400 hover:text-neutral-700 transition-colors"
                aria-label="Bersihkan pencarian"
              >
                <X className="size-3.5" />
              </button>
            )}
          </div>

          {/* Live Search Suggestions Dropdown */}
          {isSearchOpen && searchSuggestions.length > 0 && (
            <div className="border-t border-neutral-100 bg-white/95 backdrop-blur-md rounded-b-2xl overflow-hidden shadow-xl max-h-60 overflow-y-auto">
              {searchSuggestions.map((lm) => (
                <button
                  key={lm.id}
                  type="button"
                  onClick={() => handleSelectLocation(lm.id, lm.lat, lm.lng, lm.nama)}
                  className="w-full px-4 py-2.5 text-left text-xs hover:bg-emerald-50 transition-colors flex items-center justify-between gap-2 border-b border-neutral-100 last:border-0"
                >
                  <div className="min-w-0">
                    <p className="font-extrabold text-neutral-900 truncate">{lm.nama}</p>
                    <p className="text-[10px] text-neutral-500 truncate">{lm.kategori}</p>
                  </div>
                  <span className="shrink-0 text-[10px] font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-full">
                    Lihat
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Category Filters Bar */}
        <div className="pointer-events-auto flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`inline-flex shrink-0 items-center gap-1 rounded-full px-3 py-1.5 text-xs font-bold transition-all shadow-md ${
                  isActive
                    ? "bg-[#064E3B] text-white ring-2 ring-emerald-400/50"
                    : "bg-white/95 backdrop-blur-md text-neutral-800 border border-neutral-200 hover:bg-neutral-100"
                }`}
              >
                <span>{cat}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Floating Bottom Left: Responsive Legend */}
      <div className="absolute bottom-4 left-3 z-[1000] pointer-events-auto">
        <div className="rounded-2xl bg-white/95 backdrop-blur-md p-2.5 shadow-lg border border-neutral-200 text-xs">
          <button
            type="button"
            onClick={() => setIsLegendOpen(!isLegendOpen)}
            className="flex items-center justify-between gap-2 font-bold text-neutral-800 text-[11px] w-full text-left"
          >
            <span className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-emerald-600 animate-pulse" />
              Legend Peta
            </span>
            {isLegendOpen ? (
              <ChevronDown className="size-3.5" />
            ) : (
              <ChevronUp className="size-3.5" />
            )}
          </button>

          {isLegendOpen && (
            <div className="mt-2 pt-2 border-t border-neutral-100 grid grid-cols-2 gap-x-3 gap-y-1.5 text-[10px] font-medium text-neutral-700">
              <span className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-[#064E3B]" /> Pusat Desa
              </span>
              <span className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-[#16A34A]" /> Wisata Alam
              </span>
              <span className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-[#C2410C]" /> Budaya
              </span>
              <span className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-[#D97706]" /> Kuliner
              </span>
              <span className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-[#7C3AED]" /> UMKM
              </span>
              <span className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-[#2563EB]" /> Fasilitas
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Floating Bottom Right: Map Layer Switcher & Control Buttons */}
      <div className="absolute bottom-4 right-3 z-[1000] flex flex-col items-end gap-2 pointer-events-none">
        {/* Layer Switcher (Standard vs Satelit) */}
        <div className="pointer-events-auto flex items-center gap-1 rounded-xl bg-white/95 backdrop-blur-md p-1 shadow-lg border border-neutral-200">
          <button
            type="button"
            onClick={() => setActiveLayer("standard")}
            className={`flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs font-extrabold transition-all ${
              activeLayer === "standard"
                ? "bg-[#064E3B] text-white shadow-sm"
                : "text-neutral-700 hover:bg-neutral-100"
            }`}
            title="Peta Standard"
          >
            <Layers className="size-3.5" />
            <span>Standard</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveLayer("satellite")}
            className={`flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs font-extrabold transition-all ${
              activeLayer === "satellite"
                ? "bg-[#064E3B] text-white shadow-sm"
                : "text-neutral-700 hover:bg-neutral-100"
            }`}
            title="Citra Satelit"
          >
            <Compass className="size-3.5" />
            <span>Satelit</span>
          </button>
        </div>

        {/* Action Controls Stack */}
        <div className="pointer-events-auto flex flex-col gap-1.5">
          {/* User Location Button */}
          <button
            type="button"
            onClick={handleGetUserLocation}
            disabled={geoLoading}
            className="grid size-10 place-items-center rounded-xl bg-white text-neutral-800 shadow-lg border border-neutral-200 hover:bg-neutral-50 active:scale-95 transition-all disabled:opacity-50"
            title="◎ Lokasi Saya"
            aria-label="Lokasi Saya"
          >
            <LocateFixed className={`size-5 text-blue-600 ${geoLoading ? "animate-spin" : ""}`} />
          </button>

          {/* Reset Center Button */}
          <button
            type="button"
            onClick={handleResetCenter}
            className="grid size-10 place-items-center rounded-xl bg-white text-neutral-800 shadow-lg border border-neutral-200 hover:bg-neutral-50 active:scale-95 transition-all"
            title="🎯 Pusatkan ke Desa Wisata Ekang Anculai"
            aria-label="Pusatkan Peta"
          >
            <Navigation className="size-4 text-[#064E3B]" />
          </button>
        </div>
      </div>

      {/* Leaflet Map Canvas Container */}
      <MapContainer
        center={defaultCenter}
        zoom={14.5}
        scrollWheelZoom={true}
        className="size-full z-0"
        style={{ height: "100%", minHeight: 520, width: "100%" }}
      >
        {/* Layer Tile Provider */}
        {activeLayer === "standard" ? (
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            maxZoom={19}
          />
        ) : (
          <TileLayer
            attribution='&copy; <a href="https://www.esri.com/" target="_blank" rel="noopener noreferrer">Esri World Imagery</a>'
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            maxZoom={19}
          />
        )}

        {/* Controller for FlyTo */}
        <MapController focusCoords={focusCoords} defaultCenter={defaultCenter} />

        {/* User Geolocation Marker (if permission granted) */}
        {userCoords && (
          <Marker position={userCoords} icon={getUserLocationMarkerIcon()}>
            <Popup className="ekang-map-popup">
              <div className="p-2 text-xs font-bold text-neutral-800">
                📍 Anda berada di sekitar lokasi ini
              </div>
            </Popup>
          </Marker>
        )}

        {/* Village Center Marker */}
        {village && (
          <Marker
            key="village-center-marker"
            position={defaultCenter}
            icon={getCategoryMarkerIcon("Pusat Desa", true)}
            ref={(ref) => {
              if (ref) markerRefs.current["village-center"] = ref;
            }}
          >
            <Popup className="ekang-map-popup">
              <div className="overflow-hidden rounded-2xl bg-white shadow-xl max-w-[270px] font-sans text-neutral-800 border border-neutral-100">
                {village.image && (
                  <div className="relative h-28 w-full overflow-hidden bg-neutral-100">
                    <img
                      src={resolveImageUrl(village.image, village.nama)}
                      alt={village.nama}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = "/assets/village-ekang-anculai.jpg";
                      }}
                      className="h-full w-full object-cover"
                      width={600}
                      height={340}
                    />
                    <span className="absolute bottom-2 left-2 inline-flex items-center rounded-md bg-emerald-950/90 backdrop-blur-sm px-2 py-0.5 text-[10px] font-bold text-white">
                      Pusat Desa Wisata
                    </span>
                  </div>
                )}
                <div className="p-3">
                  <h3 className="text-xs font-black text-neutral-900 leading-tight">
                    {village.nama}
                  </h3>
                  <p className="mt-1 text-[11px] text-neutral-600 line-clamp-2 leading-relaxed">
                    {villageAddress}
                  </p>

                  <div className="mt-3 pt-2.5 border-t border-neutral-100 flex items-center justify-between gap-1.5">
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${defaultCenter[0]},${defaultCenter[1]}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1 rounded-full bg-[#064E3B] hover:bg-emerald-900 py-1.5 px-3 text-[11px] font-extrabold text-white shadow-sm transition-colors"
                    >
                      <Navigation className="size-3" />
                      <span>Mulai Navigasi</span>
                    </a>
                    <Link
                      to="/desa/$slug"
                      params={{ slug: village.slug }}
                      className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white hover:bg-neutral-50 px-3 py-1.5 text-[11px] font-bold text-neutral-700 transition-colors"
                    >
                      Detail
                    </Link>
                  </div>
                </div>
              </div>
            </Popup>
          </Marker>
        )}

        {/* Landmark Category Markers */}
        {filteredLandmarks.map((lm) => {
          const lat = lm.lat;
          const lng = lm.lng;
          return (
            <Marker
              key={`lm-${lm.id}`}
              position={[lat, lng]}
              icon={getCategoryMarkerIcon(lm.kategori, false)}
              ref={(ref) => {
                if (ref) markerRefs.current[lm.id] = ref;
              }}
            >
              <Popup className="ekang-map-popup">
                <div className="overflow-hidden rounded-2xl bg-white shadow-xl max-w-[260px] font-sans text-neutral-800 border border-neutral-100">
                  {lm.image && (
                    <div className="relative h-28 w-full overflow-hidden bg-neutral-100">
                      <img
                        src={resolveImageUrl(lm.image, lm.nama)}
                        alt={lm.nama}
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = "/assets/village-ekang-anculai.jpg";
                        }}
                        className="h-full w-full object-cover"
                        width={500}
                        height={280}
                      />
                      <span className="absolute bottom-2 left-2 inline-flex items-center rounded-md bg-emerald-950/80 backdrop-blur-sm px-2 py-0.5 text-[10px] font-bold text-white">
                        {lm.kategori}
                      </span>
                    </div>
                  )}
                  <div className="p-3">
                    <h4 className="text-xs font-black text-neutral-900 leading-snug">{lm.nama}</h4>
                    {lm.deskripsi && (
                      <p className="mt-1 text-[11px] text-neutral-600 line-clamp-2 leading-relaxed">
                        {lm.deskripsi}
                      </p>
                    )}

                    <div className="mt-3 pt-2.5 border-t border-neutral-100 flex items-center justify-between gap-1.5">
                      <a
                        href={`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1 rounded-full bg-[#064E3B] hover:bg-emerald-900 py-1.5 px-2.5 text-[11px] font-extrabold text-white shadow-sm transition-colors"
                      >
                        <Navigation className="size-3" />
                        <span>Mulai Navigasi</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => handleShareLocation(lm.nama, lat, lng)}
                        className="grid size-7 place-items-center rounded-full border border-neutral-200 hover:bg-neutral-100 text-neutral-600 transition-colors"
                        title="Bagikan Lokasi"
                        aria-label="Bagikan Lokasi"
                      >
                        <Share2 className="size-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
