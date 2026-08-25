import fs from "node:fs";
import path from "node:path";
import { db } from "./db";

const DEFAULT_SITE_URL = "https://desawisataekanganculai.id";

export function generateSitemapXml(): string {
  const baseUrl = (process.env["SITE_URL"] || DEFAULT_SITE_URL).replace(/\/$/, "");

  // Static public routes
  const staticRoutes = [
    { path: "/", priority: "1.0", changefreq: "daily" },
    { path: "/desa/ekang-anculai", priority: "0.9", changefreq: "weekly" },
    { path: "/galeri", priority: "0.8", changefreq: "weekly" },
    { path: "/rencanakan-kunjungan", priority: "0.8", changefreq: "weekly" },
  ];

  // Published dynamic destination routes from SQLite database
  let publishedSlugs: string[] = ["ekang-anculai"];
  try {
    if (db && typeof db.prepare === "function") {
      const rows = db.prepare("SELECT slug FROM destinations WHERE status = 'published'").all() as {
        slug: string;
      }[];
      if (rows && rows.length > 0) {
        publishedSlugs = Array.from(new Set(rows.map((r) => r.slug)));
      }
    }
  } catch (err) {
    console.error("Gagal membaca slug destinasi dari database untuk sitemap:", err);
  }

  const todayIso = new Date().toISOString().split("T")[0];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // Write static routes
  for (const route of staticRoutes) {
    xml += `  <url>\n`;
    xml += `    <loc>${baseUrl}${route.path}</loc>\n`;
    xml += `    <lastmod>${todayIso}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += `  </url>\n`;
  }

  // Write published dynamic destination routes (excluding ekang-anculai if already in static)
  for (const slug of publishedSlugs) {
    if (slug === "ekang-anculai") continue;
    xml += `  <url>\n`;
    xml += `    <loc>${baseUrl}/desa/${slug}</loc>\n`;
    xml += `    <lastmod>${todayIso}</lastmod>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>0.8</priority>\n`;
    xml += `  </url>\n`;
  }

  xml += `</urlset>\n`;

  return xml;
}

export function writeSitemapFile(): void {
  try {
    const isServerless = Boolean(
      process.env["VERCEL"] || process.env["AWS_LAMBDA_FUNCTION_NAME"] || process.env["NETLIFY"],
    );
    if (isServerless) return;

    const xmlContent = generateSitemapXml();
    const publicDir = path.join(process.cwd(), "public");
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    const sitemapPath = path.join(publicDir, "sitemap.xml");
    fs.writeFileSync(sitemapPath, xmlContent, "utf-8");
  } catch (err) {
    console.error("Gagal menulis file sitemap.xml:", err);
  }
}

// writeSitemapFile is called by db.ts after database initialization
