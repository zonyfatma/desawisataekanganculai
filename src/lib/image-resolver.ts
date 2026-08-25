/**
 * Universal Image URL Resolver
 * Resolves static, uploaded, Supabase storage, and fallback images seamlessly across dev and production.
 */

export const STATIC_ASSET_FALLBACKS: Record<string, string> = {
  batik: "/assets/ekang-batik.png",
  mangrove: "/assets/ekang-mangrove.jpg",
  "mangrove-dermaga": "/assets/ekang-mangrove-dermaga.jpg",
  dermaga: "/assets/ekang-mangrove-dermaga.jpg",
  teko: "/assets/teko-kayangan.jpg",
  "teko-kayangan": "/assets/teko-kayangan.jpg",
  reog: "/assets/reog-kendang-kempul.jpg",
  kendang: "/assets/reog-kendang-kempul.jpg",
  perkebunan: "/assets/ekang-agrowisata.jpg",
  agrowisata: "/assets/ekang-agrowisata.jpg",
  kebun: "/assets/ekang-agrowisata.jpg",
  kuliner: "/assets/ekang-kuliner.png",
  rengginang: "/assets/rengginang-sajian.jpg",
  "rengginang-comel": "/assets/rengginang-comel.jpg",
  homestay: "/assets/village-ekang-anculai.jpg",
  desa: "/assets/village-ekang-anculai.jpg",
  "gotong-royong": "/assets/ekang-gotong-royong-kkn.jpg",
  kkn: "/assets/ekang-gotong-royong-kkn.jpg",
  default: "/assets/village-ekang-anculai.jpg",
};

/**
 * Resolves any raw image URL into a valid, production-ready URL.
 */
export function resolveImageUrl(
  rawUrl?: string | null,
  fallbackHint?: string,
): string {
  if (!rawUrl || typeof rawUrl !== "string" || rawUrl.trim() === "") {
    return getImageFallback(fallbackHint);
  }

  const trimmed = rawUrl.trim();

  // 1. External & Blob/Data URLs
  if (
    trimmed.startsWith("http://") ||
    trimmed.startsWith("https://") ||
    trimmed.startsWith("data:") ||
    trimmed.startsWith("blob:")
  ) {
    return trimmed;
  }

  // 2. Vite dev path normalization: /src/assets/xxx -> /assets/xxx
  if (trimmed.startsWith("/src/assets/")) {
    return trimmed.replace(/^\/src\/assets\//, "/assets/").split("?")[0];
  }

  // 3. Absolute root-relative paths: /assets/xxx, /uploads/xxx
  if (trimmed.startsWith("/")) {
    return trimmed.split("?")[0];
  }

  // 4. Relative filename fallback
  return `/${trimmed.split("?")[0]}`;
}

/**
 * Gets a contextual fallback image based on keywords in title, category, or context.
 */
export function getImageFallback(
  contextName?: string,
  category?: string,
): string {
  const combined = `${contextName || ""} ${category || ""}`.toLowerCase();
  for (const [key, assetPath] of Object.entries(STATIC_ASSET_FALLBACKS)) {
    if (key !== "default" && combined.includes(key)) {
      return assetPath;
    }
  }
  return STATIC_ASSET_FALLBACKS.default;
}
