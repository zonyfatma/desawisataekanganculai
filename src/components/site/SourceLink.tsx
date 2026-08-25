import { ExternalLink } from "lucide-react";
import { type Source } from "@/data/jadesta";

/**
 * Memeriksa apakah URL merupakan URL publikasi/artikel spesifik (Bukan homepage / domain root / URL gambar).
 */
export function isSpecificArticleUrl(url?: string): boolean {
  if (!url || typeof url !== "string" || !url.trim() || url === "#") {
    return false;
  }

  try {
    const parsed = new URL(url.trim());
    const pathname = parsed.pathname.toLowerCase();

    // URL file gambar BUKAN URL artikel/publikasi
    if (/\.(jpg|jpeg|png|webp|gif|svg|bmp|ico)$/i.test(pathname)) {
      return false;
    }

    // Homepage domain root BUKAN URL publikasi artikel spesifik
    const homepagePaths = [
      "",
      "/",
      "/index.html",
      "/index.php",
      "/index.htm",
      "/home",
      "/home/",
      "/berita",
      "/berita/",
      "/artikel",
      "/artikel/",
    ];
    if (homepagePaths.includes(pathname)) {
      return false;
    }

    // Harus memiliki path artikel spesifik (slug / id / sub-path)
    return (
      pathname.length > 3 &&
      (pathname.includes("-") ||
        pathname.includes("_") ||
        /\d/.test(pathname) ||
        pathname.split("/").filter(Boolean).length >= 2)
    );
  } catch {
    return false;
  }
}

export function SourceLink({ source }: { source?: Source }) {
  if (!source || (!source.name && !source.url)) return null;

  const hasValidArticleUrl = isSpecificArticleUrl(source.url);

  return (
    <div className="mt-2.5 border-t border-border/40 pt-2 text-[11px] text-muted-foreground/80 font-medium">
      <div className="flex flex-wrap items-center justify-between gap-1.5">
        {source.name ? (
          <span className="truncate max-w-[280px] sm:max-w-none opacity-85">
            <span className="font-semibold text-foreground/80">Sumber:</span> {source.name}
            {source.publishedAt && <span className="ml-1 opacity-75">• {source.publishedAt}</span>}
          </span>
        ) : (
          <span />
        )}
        {hasValidArticleUrl && (
          <a
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-muted-foreground hover:text-primary transition-colors shrink-0"
            title={`Buka artikel publikasi resmi: ${source.name || "Sumber"}`}
          >
            <span>Baca sumber asli</span>
            <ExternalLink className="size-3 opacity-70" />
          </a>
        )}
      </div>
    </div>
  );
}
