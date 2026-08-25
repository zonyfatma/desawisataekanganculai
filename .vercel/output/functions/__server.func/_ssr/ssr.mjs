import fs from "node:fs";
import path from "node:path";
//#region node_modules/.nitro/vite/services/ssr/index.js
var lastCapturedError;
var TTL_MS = 5e3;
function record(error) {
  lastCapturedError = {
    error,
    at: Date.now(),
  };
}
var CAUSE_DEPTH_LIMIT = 5;
var DESCRIPTION_LENGTH_LIMIT = 8e3;
function describeError(error) {
  const parts = [];
  let current = error;
  for (let depth = 0; depth < CAUSE_DEPTH_LIMIT && current != null; depth++) {
    if (!(current instanceof Error)) {
      parts.push(typeof current === "string" ? current : safeStringify(current));
      break;
    }
    const label = depth === 0 ? "" : "caused by: ";
    const status = describeStatus(current);
    parts.push(`${label}${current.stack ?? `${current.name}: ${current.message}`}${status}`);
    current = current.cause;
  }
  return parts.join("\n").slice(0, DESCRIPTION_LENGTH_LIMIT);
}
function describeStatus(error) {
  const { status, statusCode } = error;
  const value = status ?? statusCode;
  return typeof value === "number" ? ` (status ${value})` : "";
}
function safeStringify(value) {
  try {
    return JSON.stringify(value) ?? String(value);
  } catch {
    return String(value);
  }
}
function isErrorLike(value) {
  return value instanceof Error;
}
var originalConsoleError = console.error.bind(console);
console.error = (...args) => {
  originalConsoleError(
    ...args.map((arg) => {
      if (!isErrorLike(arg)) return arg;
      record(arg);
      return describeError(arg);
    }),
  );
};
if (typeof globalThis.addEventListener === "function") {
  globalThis.addEventListener("error", (event) => record(event.error ?? event));
  globalThis.addEventListener("unhandledrejection", (event) => record(event.reason));
}
function consumeLastCapturedError() {
  if (!lastCapturedError) return void 0;
  if (Date.now() - lastCapturedError.at > TTL_MS) {
    lastCapturedError = void 0;
    return;
  }
  const { error } = lastCapturedError;
  lastCapturedError = void 0;
  return error;
}
function renderErrorPage() {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>This page didn't load</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font: 15px/1.5 system-ui, -apple-system, sans-serif; background: #fafafa; color: #111; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2rem; }
      h1 { font-size: 1.25rem; margin: 0 0 0.5rem; }
      p { color: #4b5563; margin: 0 0 1.5rem; }
      .actions { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.5rem 1rem; border-radius: 0.375rem; font: inherit; cursor: pointer; text-decoration: none; border: 1px solid transparent; }
      .primary { background: #111; color: #fff; }
      .secondary { background: #fff; color: #111; border-color: #d1d5db; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>This page didn't load</h1>
      <p>Something went wrong on our end. You can try refreshing or head back home.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Try again</button>
        <a class="secondary" href="/">Go home</a>
      </div>
    </div>
  </body>
</html>`;
}
/**
 * Production Security Headers Middleware Helper
 * Menerapkan HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy,
 * Permissions-Policy, COOP, CORP, dan Content-Security-Policy (CSP) yang diperketat.
 */
function applySecurityHeaders(response) {
  if (!response) return response;
  const headers = new Headers(response.headers);
  headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("X-Frame-Options", "SAMEORIGIN");
  headers.set("X-XSS-Protection", "1; mode=block");
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  headers.set("Cross-Origin-Opener-Policy", "same-origin-allow-popups");
  headers.set("Cross-Origin-Resource-Policy", "same-origin");
  headers.set("X-DNS-Prefetch-Control", "on");
  headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(self), payment=(), display-capture=()",
  );
  const cspDirectives = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline'",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://unpkg.com",
    "font-src 'self' https://fonts.gstatic.com data:",
    "img-src 'self' data: blob: https://images.unsplash.com https://*.tile.openstreetmap.org https://*.google.com https://*.googleapis.com https://*.gstatic.com https://server.arcgisonline.com https://*.basemaps.cartocdn.com https://unpkg.com",
    "connect-src 'self' https://*.tile.openstreetmap.org https://*.google.com https://*.googleapis.com https://server.arcgisonline.com https://*.basemaps.cartocdn.com https://api.whatsapp.com",
    "frame-src 'self' https://www.google.com https://maps.google.com https://*.google.com https://www.youtube.com https://www.youtube-nocookie.com",
    "frame-ancestors 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self' https://wa.me https://api.whatsapp.com",
    ...["upgrade-insecure-requests"],
  ];
  headers.set("Content-Security-Policy", cspDirectives.join("; "));
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}
/**
 * Server Error Sanitizer
 * Mencegah kebocoran informasi sensitif (stack trace, path disk, SQL query/error, token) ke client.
 */
var SENSITIVE_PATTERNS = [
  /sqlite/i,
  /syntax\s+error/i,
  /constraint/i,
  /at\s+.*\((.*):\d+:\d+\)/i,
  /[a-z]:\\[^"'\n\r]+/i,
  /\/(?:home|var|usr|etc|tmp|node_modules|src|app)\/[^"'\n\r]+/i,
  /password_hash/i,
  /process\.env/i,
  /session_token/i,
  /better-sqlite3/i,
  /anonymous/i,
  /referenceerror/i,
  /typeerror/i,
  /evalerror/i,
];
function sanitizeErrorMessage(err) {
  if (!err) return "Terjadi kesalahan internal pada server.";
  const rawMessage = err instanceof Error ? err.message : String(err);
  for (const pattern of SENSITIVE_PATTERNS)
    if (pattern.test(rawMessage))
      return "Terjadi kesalahan pemrosesan pada server. Silakan coba beberapa saat lagi.";
  if (rawMessage.length > 300) return rawMessage.slice(0, 300) + "...";
  return rawMessage;
}
function logServerError(context, err) {
  try {
    const logPath = path.join(process.cwd(), "data", "server-error.log");
    const msg = `[${/* @__PURE__ */ new Date().toISOString()}] ${context}: ${err instanceof Error ? `${err.name}: ${err.message}\n${err.stack}` : String(err)}\n`;
    fs.appendFileSync(logPath, msg);
    console.error(`[SERVER ERROR] ${context}:`, err);
  } catch (e) {
    console.error("Failed to write to log file:", e);
  }
}
var serverEntryPromise;
async function getServerEntry() {
  if (!serverEntryPromise)
    serverEntryPromise = import("./server-o1JyFher.mjs")
      .then((n) => n.c)
      .then((n) => n.t)
      .then((m) => m.default ?? m);
  return serverEntryPromise;
}
async function normalizeCatastrophicSsrResponse(response, request) {
  if (response.status < 500) return response;
  const url = request.url || "";
  const isApiOrServerFn = url.includes("/_serverFn") || url.includes("/api");
  if (!(response.headers.get("content-type") ?? "").includes("application/json")) return response;
  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body)) return response;
  const lastErr =
    consumeLastCapturedError() ?? /* @__PURE__ */ new Error(`h3 swallowed SSR error: ${body}`);
  logServerError(`SSR Handler Error for ${request.method} ${url}`, lastErr);
  if (isApiOrServerFn)
    return new Response(
      JSON.stringify({
        error: "Server Error",
        message: sanitizeErrorMessage(lastErr),
      }),
      {
        status: 500,
        headers: { "content-type": "application/json; charset=utf-8" },
      },
    );
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}
function isH3SwallowedErrorBody(body) {
  try {
    const payload = JSON.parse(body);
    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}
var server_default = {
  async fetch(request, env, ctx) {
    try {
      return applySecurityHeaders(
        await normalizeCatastrophicSsrResponse(
          await (await getServerEntry()).fetch(request, env, ctx),
          request,
        ),
      );
    } catch (error) {
      logServerError(`Catastrophic Fetch Error for ${request.method} ${request.url}`, error);
      const url = request.url || "";
      if (url.includes("/_serverFn") || url.includes("/api"))
        return applySecurityHeaders(
          new Response(
            JSON.stringify({
              error: "Internal Server Error",
              message: sanitizeErrorMessage(error),
            }),
            {
              status: 500,
              headers: { "content-type": "application/json; charset=utf-8" },
            },
          ),
        );
      return applySecurityHeaders(
        new Response(renderErrorPage(), {
          status: 500,
          headers: { "content-type": "text/html; charset=utf-8" },
        }),
      );
    }
  },
};
//#endregion
export { server_default as default, renderErrorPage as t };
