import { o as __toESM } from "../_runtime.mjs";
import { _ as galeriDataset } from "./schemas-DIbXu2MH.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { Dt as Camera, rt as Funnel, ut as ExternalLink } from "../_libs/lucide-react.mjs";
import {
  W as useSiteData,
  a as getBreadcrumbJsonLd,
  i as JsonLdScript,
  m as DialogContent,
  p as Dialog,
} from "./router-HcJQJ-TI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/galeri-Bl2gXHIZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var categories = [
  "Semua",
  "Alam",
  "Mangrove",
  "Perkebunan",
  "Budaya",
  "Batik",
  "Kuliner",
  "Aktivitas Masyarakat",
  "Kegiatan Desa",
];
function GaleriPage() {
  const galeriList = useSiteData()?.galeriItems || galeriDataset;
  const [activeCategory, setActiveCategory] = (0, import_react.useState)("Semua");
  const [lightbox, setLightbox] = (0, import_react.useState)(null);
  const breadcrumbSchema = getBreadcrumbJsonLd([
    {
      name: "Beranda",
      url: "/",
    },
    {
      name: "Galeri Foto",
      url: "/galeri",
    },
  ]);
  const filtered = galeriList.filter((item) => {
    if (activeCategory === "Semua") return true;
    return item.kategori === activeCategory;
  });
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "bg-surface pt-28 pb-20",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLdScript, { data: breadcrumbSchema }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
            className: "max-w-3xl",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                className:
                  "inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-[11px] font-extrabold tracking-widest text-primary uppercase ring-1 ring-primary/20 shadow-sm",
                children: "Dokumentasi Visual",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
                className:
                  "mt-4 text-3xl font-black tracking-tight text-foreground sm:text-5xl leading-[1.12]",
                children: "Galeri Foto Desa Wisata Ekang Anculai",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className:
                  "mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground font-medium",
                children:
                  "Dokumentasi keindahan alam, ekowisata mangrove, kreasi Rumah Batik Bintan, aktivitas perkebunan, pertunjukan budaya, dan kehangatan kehidupan desa.",
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "mt-8 flex flex-wrap items-center gap-2",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                className:
                  "inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "size-3.5" }),
                  "Kategori:",
                ],
              }),
              categories.map((cat) =>
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "button",
                  {
                    onClick: () => setActiveCategory(cat),
                    className: `rounded-full px-4 py-2 text-xs font-bold transition-colors whitespace-nowrap cursor-pointer ${activeCategory === cat ? "bg-primary text-primary-foreground shadow-card" : "bg-card text-muted-foreground ring-1 ring-border hover:text-primary"}`,
                    children: cat,
                  },
                  cat,
                ),
              ),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
            children: filtered.map((item) =>
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                "div",
                {
                  onClick: () => setLightbox(item),
                  className:
                    "card-lift group relative cursor-pointer overflow-hidden rounded-3xl border border-border bg-card shadow-card",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "relative aspect-[4/3] w-full overflow-hidden",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                          src: item.image,
                          alt: item.alt,
                          width: 800,
                          height: 600,
                          loading: "lazy",
                          decoding: "async",
                          className:
                            "size-full object-cover transition-transform duration-500 group-hover:scale-105",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          className:
                            "absolute top-3 left-3 rounded-full bg-background/90 px-3 py-1 text-[11px] font-bold text-foreground backdrop-blur",
                          children: item.kategori,
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          className:
                            "absolute inset-0 grid place-items-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity text-white",
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, {
                            className: "size-8",
                          }),
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "p-5",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                          className: "text-base font-extrabold text-foreground",
                          children: item.judul,
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                          className: "mt-1 text-xs text-muted-foreground leading-relaxed",
                          children: item.caption,
                        }),
                        item.sumber &&
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            className:
                              "mt-3 flex items-center justify-between gap-2 border-t border-border/50 pt-2 text-[11px]",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                                className: "font-medium text-muted-foreground truncate",
                                children: [
                                  "Sumber: ",
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                                    className: "text-foreground",
                                    children: item.sumber,
                                  }),
                                ],
                              }),
                              item.sumberUrl &&
                                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
                                  href: item.sumberUrl,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  onClick: (e) => e.stopPropagation(),
                                  className:
                                    "inline-flex items-center gap-1 font-bold text-primary hover:underline shrink-0",
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                      children: "Lihat Rujukan",
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
                                      className: "size-3",
                                    }),
                                  ],
                                }),
                            ],
                          }),
                      ],
                    }),
                  ],
                },
                item.id,
              ),
            ),
          }),
        ],
      }),
      lightbox &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
          open: !!lightbox,
          onOpenChange: () => setLightbox(null),
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
            className: "max-w-4xl p-0 overflow-hidden bg-black border-0 rounded-3xl",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "relative",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                  src: lightbox.image,
                  alt: lightbox.alt,
                  className: "w-full h-auto max-h-[80vh] object-contain",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "bg-card p-6 border-t border-border",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                      className:
                        "inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold text-primary",
                      children: lightbox.kategori,
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                      className: "mt-2 text-lg font-extrabold text-foreground",
                      children: lightbox.judul,
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      className: "mt-1 text-xs text-muted-foreground",
                      children: lightbox.caption,
                    }),
                    lightbox.sumber &&
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className:
                          "mt-3 flex items-center justify-between border-t border-border/60 pt-2 text-xs",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                            className: "text-muted-foreground",
                            children: [
                              "Sumber Dokumentasi:",
                              " ",
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                                className: "text-foreground",
                                children: lightbox.sumber,
                              }),
                            ],
                          }),
                          lightbox.sumberUrl &&
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
                              href: lightbox.sumberUrl,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className:
                                "inline-flex items-center gap-1 font-bold text-primary hover:underline",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                  children: "Buka Tautan Rujukan Asli",
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
                                  className: "size-3.5",
                                }),
                              ],
                            }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
          }),
        }),
    ],
  });
}
//#endregion
export { GaleriPage as component };
