/**
 * Production Security Headers Middleware Helper
 * Menerapkan HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy,
 * Permissions-Policy, COOP, CORP, dan Content-Security-Policy (CSP) yang diperketat.
 */
export function applySecurityHeaders(response: Response): Response {
  if (!response) return response;

  const headers = new Headers(response.headers);
  const isProduction = process.env["NODE_ENV"] === "production";

  // 1. HSTS (Strict-Transport-Security: 1 tahun, subdomains, preload)
  headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");

  // 2. Anti-MIME Sniffing
  headers.set("X-Content-Type-Options", "nosniff");

  // 3. Clickjacking Protection & Legacy XSS Filter
  headers.set("X-Frame-Options", "SAMEORIGIN");
  headers.set("X-XSS-Protection", "1; mode=block");

  // 4. Referrer Privacy Policy
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  // 5. Modern Origin Isolation (COOP & CORP)
  headers.set("Cross-Origin-Opener-Policy", "same-origin-allow-popups");
  headers.set("Cross-Origin-Resource-Policy", "same-origin");
  headers.set("X-DNS-Prefetch-Control", "on");

  // 6. Device Permissions Policy
  headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(self), payment=(), display-capture=()",
  );

  // 7. Hardened Content-Security-Policy (CSP)
  // Menghapus 'unsafe-eval' pada lingkungan produksi.
  // Whitelist eksplisit untuk aset: Leaflet OpenStreetMap, Google Fonts, Unsplash, YouTube Embeds, & WhatsApp API.
  const scriptDirectives = isProduction
    ? "script-src 'self' 'unsafe-inline'"
    : "script-src 'self' 'unsafe-inline' 'unsafe-eval'";

  const cspDirectives = [
    "default-src 'self'",
    scriptDirectives,
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://unpkg.com",
    "font-src 'self' https://fonts.gstatic.com data:",
    "img-src 'self' data: blob: https://images.unsplash.com https://*.tile.openstreetmap.org https://*.google.com https://*.googleapis.com https://*.gstatic.com https://server.arcgisonline.com https://*.basemaps.cartocdn.com https://unpkg.com",
    "connect-src 'self' https://*.tile.openstreetmap.org https://*.google.com https://*.googleapis.com https://server.arcgisonline.com https://*.basemaps.cartocdn.com https://api.whatsapp.com",
    "frame-src 'self' https://www.google.com https://maps.google.com https://*.google.com https://www.youtube.com https://www.youtube-nocookie.com",
    "frame-ancestors 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self' https://wa.me https://api.whatsapp.com",
    ...(isProduction ? ["upgrade-insecure-requests"] : []),
  ];

  headers.set("Content-Security-Policy", cspDirectives.join("; "));

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}
