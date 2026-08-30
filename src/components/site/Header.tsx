import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, MapPin, Clock, Sun, Compass, PhoneCall } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { TripPlannerModal } from "./TripPlannerModal";
import { WHATSAPP_NUMBER } from "@/data/jadesta";
import { cn } from "@/lib/utils";
import logoBintan from "@/assets/logo-bintan.webp";

const navItems = [
  { label: "Profil Desa", to: "/" },
  { label: "Potensi Wisata", to: "/", hash: "potensi" },
  { label: "Pengalaman", to: "/", hash: "pengalaman" },
  { label: "Kegiatan", to: "/", hash: "kegiatan" },
  { label: "Galeri", to: "/galeri" },
  { label: "Paket Wisata", to: "/rencanakan-kunjungan" },
  { label: "Kontak", to: "/", hash: "kontak" },
] as const;

function Logo({ inverted }: { inverted: boolean }) {
  return (
    <Link
      to="/"
      className="flex shrink-0 items-center gap-2 sm:gap-2.5 group"
      aria-label="Desa Wisata Ekang Anculai"
    >
      <div className="relative shrink-0 flex items-center justify-center rounded-xl bg-white p-1 sm:p-1.5 shadow-sm ring-1 ring-border/60 transition-transform duration-300 group-hover:scale-105">
        <img
          src={logoBintan}
          alt="Logo Lambang Bintan - Desa Wisata Ekang Anculai"
          className="h-7 sm:h-8.5 w-auto object-contain"
        />
      </div>
      <span className="shrink-0 leading-tight">
        <span className="flex items-center gap-1.5">
          <span
            className={cn(
              "block whitespace-nowrap text-sm sm:text-lg font-black tracking-tight",
              inverted ? "text-white" : "text-foreground",
            )}
          >
            EKANG ANCULAI
          </span>
          <span className="hidden xl:inline-flex shrink-0 rounded-full bg-gold/20 px-2 py-0.5 text-[10px] font-extrabold text-gold ring-1 ring-gold/40">
            Desa Berprestasi 2026
          </span>
        </span>
        <span
          className={cn(
            "block whitespace-nowrap text-[10px] sm:text-[11px] font-semibold",
            inverted ? "text-white/80" : "text-muted-foreground",
          )}
        >
          Teluk Sebong, Bintan
        </span>
      </span>
    </Link>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [openPlanner, setOpenPlanner] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = isHome && !scrolled;

  return (
    <>
      {/* Skip to Main Content link for keyboard accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-amber-400 focus:px-4 focus:py-2 focus:text-xs focus:font-black focus:text-black focus:shadow-2xl focus:ring-2 focus:ring-black"
      >
        Skip to main content
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          transparent
            ? "bg-gradient-to-b from-black/80 via-black/40 to-transparent"
            : "border-b border-border/80 bg-background/95 shadow-sm backdrop-blur-xl",
        )}
      >
        {/* Top Info Banner */}
        <div
          className={cn(
            "hidden lg:block border-b text-[11px] font-semibold transition-all py-1.5",
            transparent
              ? "border-white/15 bg-black/25 text-white/90 backdrop-blur-md"
              : "border-border/60 bg-muted/40 text-muted-foreground",
          )}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-5">
              <span className="flex items-center gap-1.5">
                <Sun className="size-3.5 text-[#C58A32] shrink-0" />
                <span>Cuaca Bintan: Cerah 29°C</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="size-3.5 text-[#2F7D4A] shrink-0" />
                <span>Jam Operasional: 08.00 - 17.00 WIB</span>
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="size-3.5 text-[#C58A32] shrink-0" />
                <span>Teluk Sebong, Bintan</span>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E8F1E8] px-2.5 py-0.5 text-[#14532D] font-extrabold ring-1 ring-[#2F7D4A]/30">
                <span className="size-1.5 rounded-full bg-[#2F7D4A] animate-pulse" />
                Desa Wisata Hijau & Kreatif
              </span>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 font-extrabold text-[#C58A32] hover:underline focus:outline-none focus:ring-1 focus:ring-[#C58A32] rounded-sm"
              >
                <PhoneCall className="size-3" />
                <span>Hotline Pengelola: +62 856-6877-6209</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6 lg:px-8">
          <Logo inverted={transparent} />

          <nav className="hidden items-center gap-1 lg:gap-1.5 xl:flex" aria-label="Navigasi utama">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                {...("hash" in item ? { hash: item.hash } : {})}
                className={cn(
                  "rounded-full px-3.5 py-1.5 text-xs font-extrabold transition-all whitespace-nowrap min-h-[38px] inline-flex items-center",
                  transparent
                    ? "text-white/90 hover:bg-white/20 hover:text-[#F7F4EA]"
                    : "text-foreground/80 hover:bg-[#E8F1E8] hover:text-[#064E3B] active:bg-[#064E3B] active:text-white",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => setOpenPlanner(true)}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#C58A32] hover:bg-[#A87226] px-4 py-2 text-xs font-black text-white shadow-card transition-all duration-300 hover:scale-105 active:scale-95 ring-1 ring-[#DCA348] cursor-pointer min-h-[44px]"
            >
              <Compass className="size-4 shrink-0 text-white" />
              <span>Rencanakan Kunjungan</span>
            </button>

            <Sheet open={openMobileMenu} onOpenChange={setOpenMobileMenu}>
              <SheetTrigger asChild>
                <button
                  aria-label="Buka menu navigasi"
                  className={cn(
                    "grid size-10 place-items-center rounded-full transition-colors lg:hidden",
                    transparent
                      ? "bg-white/20 text-white hover:bg-white/30"
                      : "bg-muted text-foreground hover:bg-accent",
                  )}
                >
                  <Menu className="size-5" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[88vw] max-w-sm border-l border-border p-0 [&>button]:hidden"
              >
                <div className="flex items-center justify-between border-b border-border px-5 py-4">
                  <Logo inverted={false} />
                  <button
                    onClick={() => setOpenMobileMenu(false)}
                    aria-label="Tutup menu"
                    className="grid size-9 place-items-center rounded-full bg-muted text-foreground"
                  >
                    <X className="size-4" />
                  </button>
                </div>
                <nav className="flex flex-col gap-1 p-4" aria-label="Navigasi mobile">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.to}
                      {...("hash" in item ? { hash: item.hash } : {})}
                      onClick={() => setOpenMobileMenu(false)}
                      className="rounded-2xl px-4 py-3 text-sm font-bold text-foreground transition-colors hover:bg-accent hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <button
                    type="button"
                    onClick={() => {
                      setOpenMobileMenu(false);
                      setOpenPlanner(true);
                    }}
                    className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-4 py-3 text-center text-xs font-extrabold text-gold-foreground shadow-card hover:bg-gold/90 active:scale-95 cursor-pointer"
                  >
                    <Compass className="size-4" />
                    Rencanakan Kunjungan
                  </button>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setOpenMobileMenu(false)}
                    className="mt-2 rounded-full bg-primary px-4 py-3 text-center text-xs font-extrabold text-primary-foreground"
                  >
                    Hubungi WA Pengelola
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Trip Planner Modal */}
      <TripPlannerModal open={openPlanner} onOpenChange={setOpenPlanner} />
    </>
  );
}
