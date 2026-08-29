import { useState, useEffect } from "react";
import {
  villages,
  officialFullDayPackage,
  officialTwoDayPackage,
  cbtExperiences8,
  galeri8Categories,
  galeriDataset,
  WHATSAPP_NUMBER,
  type KegiatanItem,
  type UmkmItem,
  type LandmarkItem,
  type ReviewItem,
  type FullDayActivity,
  type TwoDayActivityItem,
  type GaleriFotoItem,
} from "@/data/jadesta";
import {
  getSiteDataServerFn,
  recordPageViewServerFn,
  type DbHomestayRow,
  type DbFaqRow,
} from "./server-actions";

export interface VillageInfoState {
  nama: string;
  tagline: string;
  whatsapp: string;
  email: string;
  alamat: string;
  luasDesa: string;
  luasKawasanWisata: string;
  jamOperasional: string;
  waktuTerbaik: string;
  pokdarwis: string;
  instagram: string;
  facebook: string;
  tiktok: string;
  pemdesWebsite: string;
}

export interface SiteDataState {
  villageInfo: VillageInfoState;
  kegiatanList: KegiatanItem[];
  landmarkList: LandmarkItem[];
  umkmList: UmkmItem[];
  reviews: ReviewItem[];
  fullDay: typeof officialFullDayPackage;
  twoDay: typeof officialTwoDayPackage;
  cbtExperiences: typeof cbtExperiences8;
  galeriCategories: typeof galeri8Categories;
  galeriItems: GaleriFotoItem[];
  homestays?: DbHomestayRow[];
  faqs?: DbFaqRow[];
  visitCount: number;
  uniqueVisitors?: number;
}

const v0 = villages[0];
if (!v0) {
  throw new Error("villages data is empty — check jadesta.ts");
}

const defaultVillageInfo: VillageInfoState = {
  nama: v0.nama,
  tagline: v0.tagline,
  whatsapp: v0.whatsapp,
  email: v0.email ?? "",
  alamat: v0.alamat ?? "",
  luasDesa: v0.luasDesa ?? "",
  luasKawasanWisata: v0.luasKawasanWisata ?? "",
  jamOperasional: v0.jamOperasional ?? "",
  waktuTerbaik: v0.waktuTerbaik ?? "",
  pokdarwis: v0.pokdarwis,
  instagram: v0.instagram ?? "",
  facebook: v0.facebook ?? "",
  tiktok: v0.tiktok ?? "",
  pemdesWebsite: v0.pemdesWebsite ?? "",
};

const defaultSiteData: SiteDataState = {
  villageInfo: defaultVillageInfo,
  kegiatanList: v0.kegiatanList ?? [],
  landmarkList: v0.landmarkList ?? [],
  umkmList: v0.umkmList ?? [],
  reviews: v0.reviews ?? [],
  fullDay: officialFullDayPackage,
  twoDay: officialTwoDayPackage,
  cbtExperiences: cbtExperiences8,
  galeriCategories: galeri8Categories,
  galeriItems: galeriDataset,
  visitCount: 1,
  uniqueVisitors: 1,
};

let currentState: SiteDataState = defaultSiteData;
const listeners = new Set<() => void>();

function notifyListeners() {
  listeners.forEach((listener) => listener());
}

export const cmsStore = {
  getSnapshot(): SiteDataState {
    return currentState;
  },

  subscribe(listener: () => void): () => void {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  },

  setSiteData(data: Partial<SiteDataState>) {
    currentState = {
      ...currentState,
      ...data,
      villageInfo: { ...currentState.villageInfo, ...(data.villageInfo || {}) },
    };
    notifyListeners();
  },

  updateData(updater: (prev: SiteDataState) => SiteDataState) {
    currentState = updater(currentState);
    notifyListeners();
  },

  resetVisitCount() {
    currentState = {
      ...currentState,
      visitCount: 0,
    };
    notifyListeners();
  },

  recordVisit(path?: string) {
    if (typeof window === "undefined") return;
    const currentPath = path || window.location.pathname || "/";
    recordPageViewServerFn({ data: { path: currentPath } })
      .then((res) => {
        if (res?.success && res.totalViews) {
          currentState = {
            ...currentState,
            visitCount: res.totalViews,
            uniqueVisitors: res.uniqueVisitors,
          };
          notifyListeners();
        }
      })
      .catch(() => {
        // silent fallback
      });
  },
};

export function useSiteData(): SiteDataState {
  const [data, setData] = useState<SiteDataState>(cmsStore.getSnapshot());

  useEffect(() => {
    // Fetch live data from server (Supabase or SQLite)
    getSiteDataServerFn()
      .then((serverData) => {
        if (serverData) {
          cmsStore.setSiteData(serverData as Partial<SiteDataState>);
          setData(cmsStore.getSnapshot());
        }
      })
      .catch((err) => {
        // Always log to console so admin can see what went wrong
        console.error("[CMS] Gagal memuat data dari server, menggunakan data fallback:", err);
      });

    return cmsStore.subscribe(() => {
      setData(cmsStore.getSnapshot());
    });
  }, []);

  return data;
}
