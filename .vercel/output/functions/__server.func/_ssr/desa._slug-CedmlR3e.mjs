import { o as __toESM } from "../_runtime.mjs";
import { T as klasifikasiInfo } from "./schemas-DIbXu2MH.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import {
  At as Building2,
  Dt as Camera,
  Et as Car,
  Nt as ArrowRight,
  Pt as ArrowLeft,
  Q as Heart,
  St as ChevronLeft,
  U as MapPin,
  V as Maximize2,
  Y as Instagram,
  Z as House,
  _ as Sparkles,
  _t as Clock,
  et as Handshake,
  f as Toilet,
  gt as Coffee,
  ht as Compass,
  j as Phone,
  jt as Bookmark,
  kt as Building,
  n as Wifi,
  o as Users,
  p as Sun,
  tt as Globe,
  u as Trees,
  v as ShoppingBag,
  x as Share2,
  xt as ChevronRight,
} from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import {
  G as cn,
  W as useSiteData,
  a as getBreadcrumbJsonLd,
  i as JsonLdScript,
  l as SourceLink,
  m as DialogContent,
  n as Route,
  o as getDestinationJsonLd,
  p as Dialog,
} from "./router-HcJQJ-TI.mjs";
import {
  i as Trigger,
  n as List,
  r as Root2,
  t as Content,
} from "../_libs/radix-ui__react-tabs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/desa._slug-CedmlR3e.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Tabs = Root2;
var TabsList = import_react.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
    ref,
    className: cn(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      className,
    ),
    ...props,
  }),
);
TabsList.displayName = List.displayName;
var TabsTrigger = import_react.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      className,
    ),
    ...props,
  }),
);
TabsTrigger.displayName = Trigger.displayName;
var TabsContent = import_react.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
    ref,
    className: cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className,
    ),
    ...props,
  }),
);
TabsContent.displayName = Content.displayName;
var MapCanvas = (0, import_react.lazy)(() => import("./MapCanvas-EOH43IVH.mjs"));
var fasilitasIcon = {
  Homestay: House,
  Kuliner: Coffee,
  Souvenir: ShoppingBag,
  "Toilet Umum": Toilet,
  "Area Parkir": Car,
  Internet: Wifi,
  "Pemandu Lokal Berlisensi": Users,
};
function DesaDetail() {
  const { village } = Route.useLoaderData();
  const siteData = useSiteData();
  const info = klasifikasiInfo[village.klasifikasi];
  const [slide, setSlide] = (0, import_react.useState)(0);
  const [lightbox, setLightbox] = (0, import_react.useState)(null);
  const [saved, setSaved] = (0, import_react.useState)(false);
  const [selectedUmkmCat, setSelectedUmkmCat] = (0, import_react.useState)("Semua");
  (0, import_react.useEffect)(() => setSlide(0), [village.slug]);
  const destinationSchema = getDestinationJsonLd({
    id: village.slug,
    nama: village.nama,
    deskripsi: village.deskripsi,
    image: village.image,
    kategori: village.kategori ?? "Wisata Alam",
  });
  const breadcrumbSchema = getBreadcrumbJsonLd([
    {
      name: "Beranda",
      url: "/",
    },
    {
      name: "Destinasi Desa",
      url: "/desa/ekang-anculai",
    },
    {
      name: village.nama,
      url: `/desa/${village.slug}`,
    },
  ]);
  const share = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    try {
      if (navigator.share)
        await navigator.share({
          title: village.nama,
          url,
        });
      else {
        await navigator.clipboard.writeText(url);
        toast.success("Tautan profil desa disalin");
      }
    } catch {}
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "bg-surface pb-20 pt-20",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLdScript, {
        data: [destinationSchema, breadcrumbSchema],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
        className: "relative h-[60vh] min-h-[420px] w-full overflow-hidden",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
            src: village.galeri[slide] ?? village.image,
            alt: `Galeri ${village.nama}`,
            width: 1600,
            height: 1e3,
            loading: "eager",
            fetchPriority: "high",
            decoding: "sync",
            className: "size-full object-cover",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "hero-overlay absolute inset-0",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className:
              "absolute inset-x-0 top-6 mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
                to: "/",
                className:
                  "inline-flex items-center gap-2 rounded-full bg-background/20 px-4 py-2 text-xs font-bold text-background backdrop-blur transition-colors hover:bg-background/35",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }),
                  "Kembali ke Beranda",
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "flex gap-2",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                    onClick: () => {
                      setSaved((s) => !s);
                      toast.success(saved ? "Dihapus dari simpanan" : "Disimpan ke simpanan Anda");
                    },
                    "aria-pressed": saved,
                    className:
                      "inline-flex items-center gap-2 rounded-full bg-background/20 px-4 py-2 text-xs font-bold text-background backdrop-blur transition-colors hover:bg-background/35",
                    children: [
                      saved
                        ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
                            className: "size-4 fill-gold text-gold",
                          })
                        : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, {
                            className: "size-4",
                          }),
                      "Simpan",
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                    onClick: () => void share(),
                    className:
                      "inline-flex items-center gap-2 rounded-full bg-background/20 px-4 py-2 text-xs font-bold text-background backdrop-blur transition-colors hover:bg-background/35",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "size-4" }),
                      "Bagikan",
                    ],
                  }),
                ],
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                className:
                  "inline-flex items-center gap-2 rounded-full bg-gold px-3 py-1.5 text-[11px] font-extrabold text-gold-foreground",
                children: village.adwi ?? info.label,
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
                className: "mt-3 text-3xl font-black tracking-tight text-background sm:text-5xl",
                children: village.nama,
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                className: "mt-2 flex items-center gap-2 text-sm font-semibold text-background/90",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
                    className: "size-4 text-gold",
                  }),
                  village.kabupaten,
                  ", ",
                  village.provinsi,
                ],
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "absolute right-4 bottom-8 flex gap-2 sm:right-8",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                "aria-label": "Foto sebelumnya",
                onClick: () =>
                  setSlide((s) => (s - 1 + village.galeri.length) % village.galeri.length),
                className:
                  "grid size-10 place-items-center rounded-full bg-background/20 text-background backdrop-blur hover:bg-background/35",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
                  className: "size-5",
                }),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                "aria-label": "Foto berikutnya",
                onClick: () => setSlide((s) => (s + 1) % village.galeri.length),
                className:
                  "grid size-10 place-items-center rounded-full bg-background/20 text-background backdrop-blur hover:bg-background/35",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
                  className: "size-5",
                }),
              }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className:
            "-mt-8 grid gap-4 rounded-3xl border border-border bg-card p-5 sm:p-6 shadow-float sm:grid-cols-2 md:grid-cols-[repeat(3,minmax(0,1fr))_auto] md:items-center",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className: "text-[11px] font-bold tracking-wider text-muted-foreground uppercase",
                  children: "Klasifikasi",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className: `mt-1.5 inline-flex rounded-full px-3 py-1 text-xs font-bold ${info.badgeClass}`,
                  children: info.label,
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "min-w-0",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className: "text-[11px] font-bold tracking-wider text-muted-foreground uppercase",
                  children: "Pengelola Wisata",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className: "mt-1.5 truncate text-sm font-extrabold text-foreground",
                  children: village.pokdarwis,
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className: "text-[11px] font-bold tracking-wider text-muted-foreground uppercase",
                  children: "Prestasi Resmi 2026",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                  className:
                    "mt-1.5 flex items-center gap-1.5 text-xs font-extrabold text-foreground",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, {
                      className: "size-4 text-gold shrink-0",
                    }),
                    village.adwi,
                  ],
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
              href: `https://wa.me/${village.whatsapp}?text=Halo%20Pengelola%20Desa%20Wisata%20Ekang%20Anculai,%20saya%20ingin%20tanya%20informasi%20potensi%20dan%20wisata`,
              target: "_blank",
              rel: "noreferrer",
              className:
                "inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-bold text-primary-foreground transition-all duration-300 hover:bg-emerald-deep",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }),
                "Hubungi Pengelola via WA",
              ],
            }),
          ],
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
          defaultValue: "tentang",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsList, {
              className:
                "no-scrollbar h-auto w-full justify-start gap-1 overflow-x-auto rounded-2xl bg-card p-1.5 shadow-soft",
              children: [
                ["tentang", "Profil & Sejarah"],
                ["fasilitas", "Atraksi & Fasilitas"],
                ["umkm", "Produk UMKM 2026"],
                ["kegiatan", "Kegiatan Desa 2026"],
                ["paket", "Paket Wisata"],
                ["galeri", "Galeri Dokumentasi"],
                ["peta", "Peta & Aksesibilitas"],
              ].map(([v, label]) =>
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  TabsTrigger,
                  {
                    value: v,
                    className:
                      "shrink-0 rounded-full px-4 py-2.5 text-xs font-bold text-muted-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-card",
                    children: label,
                  },
                  v,
                ),
              ),
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
              value: "tentang",
              className: "mt-6",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "grid gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
                    className: "rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
                        className: "text-xl font-extrabold text-foreground",
                        children: "Sekilas Profil Desa",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className: "mt-3 text-sm leading-relaxed text-muted-foreground",
                        children: village.deskripsi,
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                        className: "mt-7 text-lg font-extrabold text-foreground",
                        children: "Sejarah & Asal Usul Nama",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className: "mt-3 text-sm leading-relaxed text-muted-foreground",
                        children: village.sejarah,
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        className: "mt-2",
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceLink, {
                          source: {
                            name: "Website Resmi Desa Ekang Anculai",
                            url: "https://desaekanganculai.bintankab.go.id/profil/sejarah",
                          },
                        }),
                      }),
                      village.perbatasan
                        ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                            import_jsx_runtime.Fragment,
                            {
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                                  className: "mt-7 text-lg font-extrabold text-foreground",
                                  children: "Batas Wilayah & Kondisi Geografis",
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                  className: "mt-3 grid gap-2.5 sm:grid-cols-2 text-xs font-medium",
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                      className:
                                        "rounded-2xl border border-border bg-surface p-3.5",
                                      children: [
                                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                          className: "font-bold text-primary",
                                          children: "Utara:",
                                        }),
                                        " ",
                                        village.perbatasan.utara,
                                      ],
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                      className:
                                        "rounded-2xl border border-border bg-surface p-3.5",
                                      children: [
                                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                          className: "font-bold text-primary",
                                          children: "Selatan:",
                                        }),
                                        " ",
                                        village.perbatasan.selatan,
                                      ],
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                      className:
                                        "rounded-2xl border border-border bg-surface p-3.5",
                                      children: [
                                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                          className: "font-bold text-primary",
                                          children: "Timur:",
                                        }),
                                        " ",
                                        village.perbatasan.timur,
                                      ],
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                      className:
                                        "rounded-2xl border border-border bg-surface p-3.5",
                                      children: [
                                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                          className: "font-bold text-primary",
                                          children: "Barat:",
                                        }),
                                        " ",
                                        village.perbatasan.barat,
                                      ],
                                    }),
                                  ],
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                                  className: "mt-2",
                                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    SourceLink,
                                    {
                                      source: {
                                        name: "Website Resmi Desa Ekang Anculai",
                                        url: "https://desaekanganculai.bintankab.go.id/profil/geografis",
                                      },
                                    },
                                  ),
                                }),
                              ],
                            },
                          )
                        : null,
                      village.kesenian?.length
                        ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                            import_jsx_runtime.Fragment,
                            {
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                                  className: "mt-8 text-lg font-extrabold text-foreground",
                                  children: "Sanggar & Kesenian Budaya",
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                                  className: "mt-3.5 space-y-3",
                                  children: village.kesenian.map((k) =>
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                      "div",
                                      {
                                        className:
                                          "flex items-start gap-3 rounded-2xl border border-border bg-surface p-4 shadow-soft transition-colors hover:border-primary/40",
                                        children: [
                                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                            className:
                                              "grid size-9 shrink-0 place-items-center rounded-xl bg-accent text-primary",
                                            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                              Sparkles,
                                              { className: "size-4.5" },
                                            ),
                                          }),
                                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                                            className:
                                              "text-xs font-semibold leading-relaxed text-foreground",
                                            children: k,
                                          }),
                                        ],
                                      },
                                      k,
                                    ),
                                  ),
                                }),
                              ],
                            },
                          )
                        : null,
                      village.panduanKunjungan?.etikaKunjungan?.length
                        ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                            import_jsx_runtime.Fragment,
                            {
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                                  className: "mt-8 text-lg font-extrabold text-foreground",
                                  children: "Etika & Panduan Kunjungan Wisatawan",
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
                                  className: "mt-3.5 space-y-2.5",
                                  children: village.panduanKunjungan.etikaKunjungan.map((etika) =>
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                      "li",
                                      {
                                        className:
                                          "flex items-start gap-2.5 text-xs font-semibold text-foreground",
                                        children: [
                                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                            className:
                                              "mt-1.5 size-1.5 shrink-0 rounded-full bg-primary",
                                          }),
                                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                            className: "leading-relaxed",
                                            children: etika,
                                          }),
                                        ],
                                      },
                                      etika,
                                    ),
                                  ),
                                }),
                              ],
                            },
                          )
                        : null,
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        className: "mt-8 border-t border-border pt-4",
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceLink, {
                          source: village.source,
                        }),
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
                    className: "space-y-6",
                    children: [
                      village.kelembagaan
                        ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            className: "rounded-3xl border border-border bg-card p-6 shadow-card",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                                className:
                                  "text-xs font-extrabold tracking-wider text-muted-foreground uppercase",
                                children: "Kelembagaan & Pengelola",
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                className: "mt-4 space-y-3",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                    className:
                                      "flex items-start gap-3 rounded-2xl border border-border/70 bg-surface p-3.5",
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                        className:
                                          "grid size-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary",
                                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                          Building2,
                                          { className: "size-4.5" },
                                        ),
                                      }),
                                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                        className: "text-xs",
                                        children: [
                                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                            className: "block font-extrabold text-foreground",
                                            children: "BUMDes Resmi",
                                          }),
                                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                            className: "text-muted-foreground font-medium",
                                            children: "BUMDes Anugrah Ekang Anculai",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                    className:
                                      "flex items-start gap-3 rounded-2xl border border-border/70 bg-surface p-3.5",
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                        className:
                                          "grid size-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary",
                                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                          Users,
                                          { className: "size-4.5" },
                                        ),
                                      }),
                                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                        className: "text-xs",
                                        children: [
                                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                            className: "block font-extrabold text-foreground",
                                            children: "Pengelola Wisata",
                                          }),
                                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                            className: "text-muted-foreground font-medium",
                                            children: village.kelembagaan.pokdarwis,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                    className:
                                      "flex items-start gap-3 rounded-2xl border border-border/70 bg-surface p-3.5",
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                        className:
                                          "grid size-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary",
                                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                          Sparkles,
                                          { className: "size-4.5" },
                                        ),
                                      }),
                                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                        className: "text-xs",
                                        children: [
                                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                            className: "block font-extrabold text-foreground",
                                            children: "Sanggar Budaya",
                                          }),
                                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                            className: "text-muted-foreground font-medium",
                                            children: village.kelembagaan.sanggar,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                    className:
                                      "flex items-start gap-3 rounded-2xl border border-border/70 bg-surface p-3.5",
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                        className:
                                          "grid size-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary",
                                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                          Handshake,
                                          { className: "size-4.5" },
                                        ),
                                      }),
                                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                        className: "text-xs",
                                        children: [
                                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                            className: "block font-extrabold text-foreground",
                                            children: "Kemitraan Instansi",
                                          }),
                                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                            className: "text-muted-foreground font-medium",
                                            children: village.kelembagaan.mitra,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          })
                        : null,
                      village.alamat
                        ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            className: "rounded-3xl border border-border bg-card p-6 shadow-card",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                                className:
                                  "text-xs font-extrabold tracking-wider text-muted-foreground uppercase",
                                children: "Informasi Kontak & Akses",
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                className: "mt-4 space-y-3",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                    className:
                                      "flex items-start gap-3 rounded-2xl border border-border/70 bg-surface p-3.5",
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                        className:
                                          "grid size-9 shrink-0 place-items-center rounded-xl bg-gold/15 text-gold",
                                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                          MapPin,
                                          { className: "size-4.5" },
                                        ),
                                      }),
                                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                        className: "text-xs min-w-0",
                                        children: [
                                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                            className: "block font-extrabold text-foreground",
                                            children: "Alamat Kantor & Wilayah",
                                          }),
                                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                            className:
                                              "text-muted-foreground font-medium leading-relaxed",
                                            children: village.alamat,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  village.luasDesa
                                    ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                        className:
                                          "flex items-center gap-3 rounded-2xl border border-border/70 bg-surface p-3.5",
                                        children: [
                                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                            className:
                                              "grid size-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary",
                                            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                              Maximize2,
                                              { className: "size-4.5" },
                                            ),
                                          }),
                                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                            className: "text-xs",
                                            children: [
                                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                                className: "block font-extrabold text-foreground",
                                                children: "Luas Wilayah Desa",
                                              }),
                                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                                className: "text-muted-foreground font-medium",
                                                children: village.luasDesa,
                                              }),
                                            ],
                                          }),
                                        ],
                                      })
                                    : null,
                                  village.luasKawasanWisata
                                    ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                        className:
                                          "flex items-center gap-3 rounded-2xl border border-border/70 bg-surface p-3.5",
                                        children: [
                                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                            className:
                                              "grid size-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary",
                                            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                              Trees,
                                              { className: "size-4.5" },
                                            ),
                                          }),
                                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                            className: "text-xs",
                                            children: [
                                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                                className: "block font-extrabold text-foreground",
                                                children: "Kawasan Wisata",
                                              }),
                                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                                className: "text-muted-foreground font-medium",
                                                children: village.luasKawasanWisata,
                                              }),
                                            ],
                                          }),
                                        ],
                                      })
                                    : null,
                                  village.jamOperasional
                                    ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                        className:
                                          "flex items-center gap-3 rounded-2xl border border-border/70 bg-surface p-3.5",
                                        children: [
                                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                            className:
                                              "grid size-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary",
                                            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                              Clock,
                                              { className: "size-4.5" },
                                            ),
                                          }),
                                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                            className: "text-xs",
                                            children: [
                                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                                className: "block font-extrabold text-foreground",
                                                children: "Jam Operasional",
                                              }),
                                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                                className: "text-muted-foreground font-medium",
                                                children: village.jamOperasional,
                                              }),
                                            ],
                                          }),
                                        ],
                                      })
                                    : null,
                                  village.waktuTerbaik
                                    ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                        className:
                                          "flex items-center gap-3 rounded-2xl border border-border/70 bg-surface p-3.5",
                                        children: [
                                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                            className:
                                              "grid size-9 shrink-0 place-items-center rounded-xl bg-amber-500/10 text-amber-600",
                                            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                              Sun,
                                              { className: "size-4.5" },
                                            ),
                                          }),
                                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                            className: "text-xs",
                                            children: [
                                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                                className: "block font-extrabold text-foreground",
                                                children: "Waktu Kunjungan Terbaik",
                                              }),
                                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                                className: "text-muted-foreground font-medium",
                                                children: village.waktuTerbaik,
                                              }),
                                            ],
                                          }),
                                        ],
                                      })
                                    : null,
                                  village.instagram
                                    ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                        className:
                                          "flex items-center gap-3 rounded-2xl border border-border/70 bg-surface p-3.5",
                                        children: [
                                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                            className:
                                              "grid size-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary",
                                            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                              Instagram,
                                              { className: "size-4.5" },
                                            ),
                                          }),
                                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                            className: "text-xs truncate",
                                            children: [
                                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                                className: "block font-extrabold text-foreground",
                                                children: "Instagram Resmi",
                                              }),
                                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                                className: "text-muted-foreground font-medium",
                                                children: village.instagram,
                                              }),
                                            ],
                                          }),
                                        ],
                                      })
                                    : null,
                                  village.website
                                    ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                        className:
                                          "flex items-center gap-3 rounded-2xl border border-border/70 bg-surface p-3.5",
                                        children: [
                                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                            className:
                                              "grid size-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary",
                                            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                              Globe,
                                              { className: "size-4.5" },
                                            ),
                                          }),
                                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                            className: "text-xs truncate",
                                            children: [
                                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                                className: "block font-extrabold text-foreground",
                                                children: "Website Wisata",
                                              }),
                                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                                                href: `https://${village.website}`,
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: "text-primary font-bold hover:underline",
                                                children: village.website,
                                              }),
                                            ],
                                          }),
                                        ],
                                      })
                                    : null,
                                  village.pemdesWebsite
                                    ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                        className:
                                          "flex items-center gap-3 rounded-2xl border border-border/70 bg-surface p-3.5",
                                        children: [
                                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                            className:
                                              "grid size-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary",
                                            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                              Building,
                                              { className: "size-4.5" },
                                            ),
                                          }),
                                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                            className: "text-xs truncate",
                                            children: [
                                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                                className: "block font-extrabold text-foreground",
                                                children: "Portal Resmi Pemdes",
                                              }),
                                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                                                href: village.pemdesWebsite,
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className:
                                                  "text-primary font-bold hover:underline truncate block",
                                                children: village.pemdesWebsite,
                                              }),
                                            ],
                                          }),
                                        ],
                                      })
                                    : null,
                                ],
                              }),
                            ],
                          })
                        : null,
                    ],
                  }),
                ],
              }),
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
              value: "fasilitas",
              className: "mt-6",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
                    className: "text-xl font-extrabold text-foreground",
                    children: "Fasilitas Tersedia",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    className: "mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4",
                    children: village.fasilitas.map((f) => {
                      const Icon = fasilitasIcon[f] ?? Globe;
                      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                        "div",
                        {
                          className:
                            "card-lift rounded-2xl border border-border bg-surface p-5 text-center",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                              className:
                                "mx-auto grid size-12 place-items-center rounded-full bg-accent text-primary",
                              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
                                className: "size-5",
                              }),
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                              className: "mt-3 text-xs font-bold text-foreground",
                              children: f,
                            }),
                          ],
                        },
                        f,
                      );
                    }),
                  }),
                ],
              }),
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
              value: "umkm",
              className: "mt-6 space-y-6",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className: "flex flex-wrap items-center gap-2 pb-1",
                  children: [
                    {
                      id: "Semua",
                      label: "Semua Kategori",
                      icon: "✨",
                    },
                    {
                      id: "Kuliner & Olahan Pangan",
                      label: "Kuliner & Olahan Pangan",
                      icon: "🍲",
                    },
                    {
                      id: "Kerajinan & Produk Khas",
                      label: "Kerajinan & Produk Khas",
                      icon: "🎨",
                    },
                    {
                      id: "Oleh-oleh & Produk Kreatif",
                      label: "Oleh-oleh & Produk Kreatif",
                      icon: "🎁",
                    },
                  ].map((cat) =>
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                      "button",
                      {
                        onClick: () => setSelectedUmkmCat(cat.id),
                        className: `inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold transition-all cursor-pointer ${selectedUmkmCat === cat.id ? "bg-primary text-primary-foreground shadow-card" : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/40"}`,
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                            children: cat.icon,
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                            children: cat.label,
                          }),
                        ],
                      },
                      cat.id,
                    ),
                  ),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
                  children: (siteData?.umkmList && siteData.umkmList.length > 0
                    ? siteData.umkmList
                    : (village.umkmList ?? [])
                  )
                    .filter((u) => selectedUmkmCat === "Semua" || u.kategori === selectedUmkmCat)
                    .map((u) =>
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                        "div",
                        {
                          className:
                            "card-lift flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-card",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                              children: [
                                u.image &&
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                                    src: u.image,
                                    alt: u.nama,
                                    className: "aspect-video w-full rounded-2xl object-cover",
                                  }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                  className: "mt-3 flex items-center justify-between gap-2",
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                      className:
                                        "inline-block rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-extrabold text-emerald-700 dark:text-emerald-300",
                                      children: u.kategori,
                                    }),
                                    u.hargaInfo &&
                                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                        className: "text-xs font-bold text-foreground font-mono",
                                        children: u.hargaInfo,
                                      }),
                                  ],
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                                  className: "mt-2 text-base font-extrabold text-foreground",
                                  children: u.nama,
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                                  className:
                                    "mt-2 text-xs font-medium leading-relaxed text-muted-foreground",
                                  children: u.deskripsi,
                                }),
                              ],
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                              className: "mt-4 pt-3 border-t border-border/60",
                              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceLink, {
                                source: u.source,
                              }),
                            }),
                          ],
                        },
                        u.id,
                      ),
                    ),
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
              value: "kegiatan",
              className: "mt-6",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "grid gap-6 md:grid-cols-2",
                children: (siteData?.kegiatanList !== void 0
                  ? siteData.kegiatanList
                  : (village.kegiatanList ?? [])
                ).map((kg) =>
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                    "div",
                    {
                      className:
                        "card-lift flex flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-card",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                              className: "text-xs font-bold text-primary",
                              children: kg.tanggal,
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                              className: "mt-1 text-lg font-extrabold text-foreground",
                              children: kg.judul,
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                              className: "mt-2 text-xs leading-relaxed text-muted-foreground",
                              children: kg.deskripsi,
                            }),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceLink, {
                          source: kg.source,
                        }),
                      ],
                    },
                    kg.id,
                  ),
                ),
              }),
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
              value: "paket",
              className: "mt-6",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
                children: village.paket.map((p) =>
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                    "div",
                    {
                      className:
                        "card-lift flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-card group hover:border-primary/50 transition-all",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                              className:
                                "relative aspect-video w-full overflow-hidden rounded-2xl bg-muted",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                                  src: p.image,
                                  alt: p.nama,
                                  className:
                                    "size-full object-cover transition-transform duration-500 group-hover:scale-105",
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                  className:
                                    "absolute top-2.5 right-2.5 rounded-full bg-black/60 backdrop-blur px-3 py-1 text-[10px] font-black text-white uppercase",
                                  children: "Paket Resmi Desa",
                                }),
                              ],
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                              className: "mt-4 text-base font-extrabold text-foreground",
                              children: p.nama,
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                              className:
                                "mt-2 text-xs text-muted-foreground leading-relaxed font-medium",
                              children: p.highlight,
                            }),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className:
                            "mt-4 pt-3 border-t border-border/60 flex items-center justify-between",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                                  className:
                                    "text-[10px] uppercase font-bold text-muted-foreground",
                                  children: "Keterangan Biaya",
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                                  className: "text-sm font-black text-primary",
                                  children: p.hargaText,
                                }),
                              ],
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
                              to: "/rencanakan-kunjungan",
                              className:
                                "inline-flex items-center gap-1 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-bold text-primary hover:bg-primary hover:text-primary-foreground transition-all",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                  children: "Lihat Rute",
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
                                  className: "size-3",
                                }),
                              ],
                            }),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                          className: "mt-2",
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceLink, {
                            source: p.source,
                          }),
                        }),
                      ],
                    },
                    p.id,
                  ),
                ),
              }),
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
              value: "galeri",
              className: "mt-6",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4",
                children: village.galeri.map((img, i) =>
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                    "button",
                    {
                      onClick: () => setLightbox(img),
                      className:
                        "group relative aspect-square overflow-hidden rounded-2xl border border-border",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                          src: img,
                          alt: `Galeri ${i + 1}`,
                          className:
                            "size-full object-cover transition-transform group-hover:scale-105",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          className:
                            "absolute inset-0 grid place-items-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity text-white",
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, {
                            className: "size-6",
                          }),
                        }),
                      ],
                    },
                    i,
                  ),
                ),
              }),
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
              value: "peta",
              className: "mt-6",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className:
                  "min-h-[460px] overflow-hidden rounded-3xl border border-border shadow-card",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
                  fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    className: "p-12 text-center text-xs",
                    children: "Memuat peta...",
                  }),
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapCanvas, {
                    items: [village],
                    landmarks: siteData.landmarkList,
                  }),
                }),
              }),
            }),
          ],
        }),
      }),
      lightbox &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
          open: !!lightbox,
          onOpenChange: () => setLightbox(null),
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
            className: "max-w-4xl p-0 overflow-hidden bg-black border-0",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
              src: lightbox,
              alt: "Enlarged",
              className: "w-full h-auto max-h-[85vh] object-contain",
            }),
          }),
        }),
    ],
  });
}
//#endregion
export { DesaDetail as component };
