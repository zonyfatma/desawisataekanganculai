/**
 * Universal Image URL Resolver
 * Resolves static, uploaded, Supabase storage, and fallback images seamlessly across dev and production.
 */

export const STATIC_ASSET_FALLBACKS: Record<string, string> = {
  batik: "/assets/ekang-batik.webp",
  mangrove: "/assets/ekang-mangrove.webp",
  "mangrove-dermaga": "/assets/ekang-mangrove-dermaga.webp",
  dermaga: "/assets/ekang-mangrove-dermaga.webp",
  teko: "/assets/teko-kayangan.webp",
  "teko-kayangan": "/assets/teko-kayangan.webp",
  reog: "/assets/reog-kendang-kempul.webp",
  kendang: "/assets/reog-kendang-kempul.webp",
  perkebunan: "/assets/ekang-agrowisata.webp",
  agrowisata: "/assets/ekang-agrowisata.webp",
  kebun: "/assets/ekang-agrowisata.webp",
  kuliner: "/assets/ekang-kuliner.webp",
  rengginang: "/assets/rengginang-sajian.webp",
  "rengginang-comel": "/assets/rengginang-comel.webp",
  homestay: "/assets/village-ekang-anculai.webp",
  desa: "/assets/village-ekang-anculai.webp",
  "gotong-royong": "/assets/ekang-gotong-royong-kkn.webp",
  kkn: "/assets/ekang-gotong-royong-kkn.webp",
  default: "/assets/village-ekang-anculai.webp",
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
    const clean = trimmed.split("?")[0]!;
    if (clean.startsWith("/assets/") && /\.(png|jpg|jpeg)$/i.test(clean)) {
      return clean.replace(/\.(png|jpg|jpeg)$/i, ".webp");
    }
    return clean;
  }

  // 4. Relative filename fallback
  const cleanRel = trimmed.split("?")[0]!;
  if (/\.(png|jpg|jpeg)$/i.test(cleanRel)) {
    return `/${cleanRel.replace(/\.(png|jpg|jpeg)$/i, ".webp")}`;
  }
  return `/${cleanRel}`;
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
