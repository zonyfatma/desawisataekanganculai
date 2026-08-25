/**
 * Service khusus untuk ekstraksi Open Graph Image / Meta Image dari URL publikasi berita/kegiatan.
 * Berjalan murni di server-side (Node.js / Nitro) untuk menghindari CORS & melarang browser scraping.
 * Dilengkapi dengan proteksi SSRF (Server-Side Request Forgery).
 */

export interface OgImageExtractorResult {
  success: boolean;
  imageUrl?: string;
  sourceTitle?: string;
  error?: string;
  fetchedAt?: string;
}

/**
 * Memeriksa apakah hostname / IP merupakan alamat jaringan lokal / private (SSRF Protection).
 */
function isPrivateHost(hostname: string): boolean {
  const host = hostname.toLowerCase().trim();

  // Localhost & loopback
  if (
    host === "localhost" ||
    host === "127.0.0.1" ||
    host === "0.0.0.0" ||
    host === "::1" ||
    host === "[::1]" ||
    host.endsWith(".local") ||
    host.endsWith(".internal")
  ) {
    return true;
  }

  // Check IPv4 private ranges
  const ipv4Regex = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
  const match = host.match(ipv4Regex);
  if (match) {
    const oct1 = Number(match[1]);
    const oct2 = Number(match[2]);
    if (!isNaN(oct1) && !isNaN(oct2)) {
      // 10.0.0.0/8
      if (oct1 === 10) return true;
      // 172.16.0.0/12
      if (oct1 === 172 && oct2 >= 16 && oct2 <= 31) return true;
      // 192.168.0.0/16
      if (oct1 === 192 && oct2 === 168) return true;
      // 169.254.0.0/16 (Link-local)
      if (oct1 === 169 && oct2 === 254) return true;
      // 127.0.0.0/8
      if (oct1 === 127) return true;
      // 0.0.0.0/8
      if (oct1 === 0) return true;
    }
  }

  return false;
}

/**
 * Mengekstrak foto utama (Open Graph / Twitter / Meta image) dari URL publikasi secara aman di server.
 */
export async function extractOgImageFromUrl(rawUrl: string): Promise<OgImageExtractorResult> {
  const timestamp = new Date().toISOString();

  // 1. Validasi awal URL
  if (!rawUrl || typeof rawUrl !== "string" || !rawUrl.trim()) {
    return {
      success: false,
      error: "URL publikasi wajib diisi.",
      fetchedAt: timestamp,
    };
  }

  let parsedUrl: URL;
  try {
    parsedUrl = new URL(rawUrl.trim());
  } catch {
    return {
      success: false,
      error: "Format URL tidak valid. Contoh: https://website-sumber.com/artikel",
      fetchedAt: timestamp,
    };
  }

  // 2. Proteksi Protokol & SSRF
  if (parsedUrl.protocol !== "http:" && parsedUrl.protocol !== "https:") {
    return {
      success: false,
      error: "URL harus menggunakan protokol HTTP atau HTTPS.",
      fetchedAt: timestamp,
    };
  }

  if (isPrivateHost(parsedUrl.hostname)) {
    return {
      success: false,
      error: "URL sumber tidak diperbolehkan (jaringan lokal / private network).",
      fetchedAt: timestamp,
    };
  }

  // 3. Fetch Halaman Publikasi dengan Timeout & Limit
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 seconds timeout

  try {
    const response = await fetch(parsedUrl.href, {
      method: "GET",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) EkangAnculaiBot/1.0 (+https://desawisataekanganculai.id)",
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
      },
      signal: controller.signal,
      redirect: "follow",
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      return {
        success: false,
        error: `Halaman sumber tidak dapat diakses (Status: ${response.status} ${response.statusText}).`,
        fetchedAt: timestamp,
      };
    }

    const contentType = response.headers.get("content-type") || "";
    if (!contentType.includes("text/html") && !contentType.includes("xhtml")) {
      // Jika langsung mengarahkan ke file gambar
      if (contentType.includes("image/")) {
        return {
          success: true,
          imageUrl: parsedUrl.href,
          fetchedAt: timestamp,
        };
      }
      return {
        success: false,
        error: "Konten URL bukan merupakan halaman HTML publikasi berita.",
        fetchedAt: timestamp,
      };
    }

    // Membaca teks HTML dengan limit (maksimal ~1.5MB)
    const reader = response.body?.getReader();
    let htmlText = "";
    if (reader) {
      const decoder = new TextDecoder("utf-8");
      let bytesRead = 0;
      const MAX_BYTES = 1.5 * 1024 * 1024;

      while (bytesRead < MAX_BYTES) {
        const { done, value } = await reader.read();
        if (done || !value) break;
        bytesRead += value.length;
        htmlText += decoder.decode(value, { stream: true });
      }
    } else {
      htmlText = await response.text();
    }

    // 4. Extraction Open Graph / Twitter Meta Tags (Urutan Prioritas)
    let extractedImage: string | null = null;
    let extractedTitle: string | null = null;

    // A. og:image / og:image:url
    const ogImageMatch =
      htmlText.match(
        /<meta[^>]*property=["']og:image(?::url)?["'][^>]*content=["']([^"']+)["']/i,
      ) ||
      htmlText.match(/<meta[^>]*content=["']([^"']+)["'][^>]*property=["']og:image(?::url)?["']/i);
    if (ogImageMatch && ogImageMatch[1]) {
      extractedImage = ogImageMatch[1].trim();
    }

    // B. twitter:image / twitter:image:src (fallback 1)
    if (!extractedImage) {
      const twitterMatch =
        htmlText.match(
          /<meta[^>]*name=["']twitter:image(?::src)?["'][^>]*content=["']([^"']+)["']/i,
        ) ||
        htmlText.match(
          /<meta[^>]*content=["']([^"']+)["'][^>]*name=["']twitter:image(?::src)?["']/i,
        );
      if (twitterMatch && twitterMatch[1]) {
        extractedImage = twitterMatch[1].trim();
      }
    }

    // C. link rel="image_src" (fallback 2)
    if (!extractedImage) {
      const linkMatch = htmlText.match(
        /<link[^>]*rel=["']image_src["'][^>]*href=["']([^"']+)["']/i,
      );
      if (linkMatch && linkMatch[1]) {
        extractedImage = linkMatch[1].trim();
      }
    }

    // D. Gambar utama artikel (fallback 3: cari <img> pertama dalam artikel yang bukan icon/logo)
    if (!extractedImage) {
      const imgMatches = Array.from(htmlText.matchAll(/<img[^>]*src=["']([^"']+)["']/gi));
      for (const m of imgMatches) {
        const src = m[1]?.trim();
        if (
          src &&
          !src.includes("logo") &&
          !src.includes("icon") &&
          !src.includes("avatar") &&
          !src.includes("banner-ad") &&
          !src.endsWith(".svg") &&
          !src.endsWith(".gif")
        ) {
          extractedImage = src;
          break;
        }
      }
    }

    // Ekstraksi og:title (optional metadata)
    const ogTitleMatch =
      htmlText.match(/<meta[^>]*property=["']og:title["'][^>]*content=["']([^"']+)["']/i) ||
      htmlText.match(/<title[^>]*>([^<]+)<\/title>/i);
    if (ogTitleMatch && ogTitleMatch[1]) {
      extractedTitle = ogTitleMatch[1].trim();
    }

    // 5. Resolusi Relative URL ke Absolute URL
    if (extractedImage) {
      try {
        const resolvedUrl = new URL(extractedImage, parsedUrl.href).href;
        const resolvedParsed = new URL(resolvedUrl);

        if (resolvedParsed.protocol === "http:" || resolvedParsed.protocol === "https:") {
          return {
            success: true,
            imageUrl: resolvedUrl,
            sourceTitle: extractedTitle || "",
            fetchedAt: timestamp,
          };
        }
      } catch {
        // Abaikan jika penataan URL gagal
      }
    }

    return {
      success: false,
      error: "Foto utama (Open Graph image) tidak ditemukan pada halaman publikasi tersebut.",
      fetchedAt: timestamp,
    };
  } catch (err: unknown) {
    clearTimeout(timeoutId);
    const errorMessage =
      err instanceof Error ? err.message : "Kesalahan server saat menghubungi URL.";
    if (errorMessage.includes("aborted")) {
      return {
        success: false,
        error: "Waktu koneksi habis (Timeout 8 detik) saat mengakses halaman sumber.",
        fetchedAt: timestamp,
      };
    }
    return {
      success: false,
      error: `Gagal mengakses halaman sumber. Silakan periksa kembali URL (${errorMessage}).`,
      fetchedAt: timestamp,
    };
  }
}
