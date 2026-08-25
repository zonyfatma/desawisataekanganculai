import fs from "node:fs";
import path from "node:path";
import "./lib/error-capture";
import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";
import { applySecurityHeaders } from "./lib/security-headers";
import { sanitizeErrorMessage } from "./lib/error-sanitizer";

function logServerError(context: string, err: unknown) {
  try {
    const isServerless = Boolean(
      process.env["VERCEL"] || process.env["AWS_LAMBDA_FUNCTION_NAME"] || process.env["NETLIFY"],
    );
    if (!isServerless) {
      const dataDir = path.join(process.cwd(), "data");
      if (fs.existsSync(dataDir)) {
        const logPath = path.join(dataDir, "server-error.log");
        const msg = `[${new Date().toISOString()}] ${context}: ${
          err instanceof Error ? `${err.name}: ${err.message}\n${err.stack}` : String(err)
        }\n`;
        fs.appendFileSync(logPath, msg);
      }
    }
  } catch {
    // Ignore filesystem log errors in restricted environments
  }
  console.error(`[SERVER ERROR] ${context}:`, err);
}

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(
  response: Response,
  request: Request,
): Promise<Response> {
  if (response.status < 500) return response;

  // If request is for a server function or API, DO NOT replace with HTML!
  const url = request.url || "";
  const isApiOrServerFn = url.includes("/_serverFn") || url.includes("/api");

  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body)) return response;

  const lastErr = consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`);
  logServerError(`SSR Handler Error for ${request.method} ${url}`, lastErr);

  if (isApiOrServerFn) {
    // Return sanitized JSON error for RPC/API
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
  }

  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as { unhandled?: unknown; message?: unknown };
    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const handler = await getServerEntry();
      const rawResponse = await handler.fetch(request, env, ctx);
      const normalizedResponse = await normalizeCatastrophicSsrResponse(rawResponse, request);
      return applySecurityHeaders(normalizedResponse);
    } catch (error) {
      logServerError(`Catastrophic Fetch Error for ${request.method} ${request.url}`, error);
      const url = request.url || "";
      if (url.includes("/_serverFn") || url.includes("/api")) {
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
      }
      const errorResponse = new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
      return applySecurityHeaders(errorResponse);
    }
  },
};
