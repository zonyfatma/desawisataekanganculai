import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { Toaster } from "@/components/ui/sonner";
import { cmsStore } from "@/lib/cms-store";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Halaman Tidak Ditemukan</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Halaman yang Anda cari tidak ditemukan atau telah dipindahkan.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Kembali ke Profil Wisata Ekang Anculai
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const isDev = import.meta.env.DEV;
  if (isDev) {
    console.error(error);
  }
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-xl text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Terjadi Kendala Memuat Halaman
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {isDev
            ? `Terjadi kesalahan saat memuat data: ${error?.message || String(error)}`
            : "Sistem mengalami kendala sementara saat memuat data. Silakan coba muat ulang halaman."}
        </p>
        {isDev && error?.stack && (
          <pre className="mt-4 p-3 bg-slate-900 text-rose-300 text-xs text-left overflow-auto max-h-40 rounded-xl">
            {error.stack}
          </pre>
        )}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 cursor-pointer"
          >
            Coba Lagi
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent cursor-pointer"
          >
            Kembali ke Beranda
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0d5c3a" },
      { title: "Desa Wisata Ekang Anculai | Desa Wisata Hijau dan Kreatif Bintan" },
      {
        name: "description",
        content:
          "Jelajahi Desa Wisata Ekang Anculai di Teluk Sebong, Bintan. Temukan pengalaman berbasis masyarakat melalui budaya, batik, perkebunan, mangrove, gastronomi, dan kehidupan desa.",
      },
      { name: "author", content: "Pemerintah & Pengelola Desa Wisata Ekang Anculai" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Desa Wisata Ekang Anculai" },
      { property: "og:locale", content: "id_ID" },
      {
        property: "og:title",
        content: "Desa Wisata Ekang Anculai | Desa Wisata Hijau dan Kreatif Bintan",
      },
      {
        property: "og:description",
        content:
          "Jelajahi Desa Wisata Ekang Anculai di Teluk Sebong, Bintan. Temukan pengalaman berbasis masyarakat melalui budaya, batik, perkebunan, mangrove, gastronomi, dan kehidupan desa.",
      },
      {
        property: "og:image",
        content: "https://desawisataekanganculai.id/android-chrome-512x512.png",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Desa Wisata Ekang Anculai | Desa Wisata Hijau dan Kreatif Bintan",
      },
      {
        name: "twitter:description",
        content:
          "Where Nature, Culture, Creativity, and Village Life Grow Together. Destinasi wisata berbasis masyarakat di Teluk Sebong, Bintan.",
      },
      {
        name: "twitter:image",
        content: "https://desawisataekanganculai.id/android-chrome-512x512.png",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isAdmin = pathname.startsWith("/admin");

  useEffect(() => {
    cmsStore.recordVisit();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {!isAdmin && <Header />}
      <main id="main-content" tabIndex={-1} className="outline-none">
        <Outlet />
      </main>
      {!isAdmin && <Footer />}
      {!isAdmin && <WhatsAppFloat />}
      <Toaster position="top-center" />
    </QueryClientProvider>
  );
}
