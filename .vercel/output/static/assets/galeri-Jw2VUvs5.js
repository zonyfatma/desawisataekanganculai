import { i as e, l as t, t as n } from "./jsx-runtime-D1ym7qjA.js";
import { O as r, k as i, n as a } from "./cms-store-CRB3p42d.js";
import { b as o } from "./utils-Ctb90B5i.js";
import { d as s } from "./jadesta-DqHZHQ8d.js";
import { t as c } from "./funnel-DOTgxi_J.js";
import { I as l, i as u, r as d } from "./index-C7uF6Peh.js";
var f = t(e()),
  p = n(),
  m = [
    `Semua`,
    `Alam`,
    `Mangrove`,
    `Perkebunan`,
    `Budaya`,
    `Batik`,
    `Kuliner`,
    `Aktivitas Masyarakat`,
    `Kegiatan Desa`,
  ];
function h() {
  let e = a()?.galeriItems || s,
    [t, n] = (0, f.useState)(`Semua`),
    [h, g] = (0, f.useState)(null),
    _ = u([
      { name: `Beranda`, url: `/` },
      { name: `Galeri Foto`, url: `/galeri` },
    ]),
    v = e.filter((e) => t === `Semua` || e.kategori === t);
  return (0, p.jsxs)(`div`, {
    className: `bg-surface pt-28 pb-20`,
    children: [
      (0, p.jsx)(d, { data: _ }),
      (0, p.jsxs)(`div`, {
        className: `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`,
        children: [
          (0, p.jsxs)(`header`, {
            className: `max-w-3xl`,
            children: [
              (0, p.jsx)(`span`, {
                className: `inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-[11px] font-extrabold tracking-widest text-primary uppercase ring-1 ring-primary/20 shadow-sm`,
                children: `Dokumentasi Visual`,
              }),
              (0, p.jsx)(`h1`, {
                className: `mt-4 text-3xl font-black tracking-tight text-foreground sm:text-5xl leading-[1.12]`,
                children: `Galeri Foto Desa Wisata Ekang Anculai`,
              }),
              (0, p.jsx)(`p`, {
                className: `mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground font-medium`,
                children: `Dokumentasi keindahan alam, ekowisata mangrove, kreasi Rumah Batik Bintan, aktivitas perkebunan, pertunjukan budaya, dan kehangatan kehidupan desa.`,
              }),
            ],
          }),
          (0, p.jsxs)(`div`, {
            className: `mt-8 flex flex-wrap items-center gap-2`,
            children: [
              (0, p.jsxs)(`span`, {
                className: `inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground`,
                children: [(0, p.jsx)(c, { className: `size-3.5` }), `Kategori:`],
              }),
              m.map((e) =>
                (0, p.jsx)(
                  `button`,
                  {
                    onClick: () => n(e),
                    className: `rounded-full px-4 py-2 text-xs font-bold transition-colors whitespace-nowrap cursor-pointer ${t === e ? `bg-primary text-primary-foreground shadow-card` : `bg-card text-muted-foreground ring-1 ring-border hover:text-primary`}`,
                    children: e,
                  },
                  e,
                ),
              ),
            ],
          }),
          (0, p.jsx)(`div`, {
            className: `mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3`,
            children: v.map((e) =>
              (0, p.jsxs)(
                `div`,
                {
                  onClick: () => g(e),
                  className: `card-lift group relative cursor-pointer overflow-hidden rounded-3xl border border-border bg-card shadow-card`,
                  children: [
                    (0, p.jsxs)(`div`, {
                      className: `relative aspect-[4/3] w-full overflow-hidden`,
                      children: [
                        (0, p.jsx)(`img`, {
                          src: e.image,
                          alt: e.alt,
                          width: 800,
                          height: 600,
                          loading: `lazy`,
                          decoding: `async`,
                          className: `size-full object-cover transition-transform duration-500 group-hover:scale-105`,
                        }),
                        (0, p.jsx)(`span`, {
                          className: `absolute top-3 left-3 rounded-full bg-background/90 px-3 py-1 text-[11px] font-bold text-foreground backdrop-blur`,
                          children: e.kategori,
                        }),
                        (0, p.jsx)(`span`, {
                          className: `absolute inset-0 grid place-items-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity text-white`,
                          children: (0, p.jsx)(l, { className: `size-8` }),
                        }),
                      ],
                    }),
                    (0, p.jsxs)(`div`, {
                      className: `p-5`,
                      children: [
                        (0, p.jsx)(`h3`, {
                          className: `text-base font-extrabold text-foreground`,
                          children: e.judul,
                        }),
                        (0, p.jsx)(`p`, {
                          className: `mt-1 text-xs text-muted-foreground leading-relaxed`,
                          children: e.caption,
                        }),
                        e.sumber &&
                          (0, p.jsxs)(`div`, {
                            className: `mt-3 flex items-center justify-between gap-2 border-t border-border/50 pt-2 text-[11px]`,
                            children: [
                              (0, p.jsxs)(`span`, {
                                className: `font-medium text-muted-foreground truncate`,
                                children: [
                                  `Sumber: `,
                                  (0, p.jsx)(`strong`, {
                                    className: `text-foreground`,
                                    children: e.sumber,
                                  }),
                                ],
                              }),
                              e.sumberUrl &&
                                (0, p.jsxs)(`a`, {
                                  href: e.sumberUrl,
                                  target: `_blank`,
                                  rel: `noopener noreferrer`,
                                  onClick: (e) => e.stopPropagation(),
                                  className: `inline-flex items-center gap-1 font-bold text-primary hover:underline shrink-0`,
                                  children: [
                                    (0, p.jsx)(`span`, { children: `Lihat Rujukan` }),
                                    (0, p.jsx)(o, { className: `size-3` }),
                                  ],
                                }),
                            ],
                          }),
                      ],
                    }),
                  ],
                },
                e.id,
              ),
            ),
          }),
        ],
      }),
      h &&
        (0, p.jsx)(r, {
          open: !!h,
          onOpenChange: () => g(null),
          children: (0, p.jsx)(i, {
            className: `max-w-4xl p-0 overflow-hidden bg-black border-0 rounded-3xl`,
            children: (0, p.jsxs)(`div`, {
              className: `relative`,
              children: [
                (0, p.jsx)(`img`, {
                  src: h.image,
                  alt: h.alt,
                  className: `w-full h-auto max-h-[80vh] object-contain`,
                }),
                (0, p.jsxs)(`div`, {
                  className: `bg-card p-6 border-t border-border`,
                  children: [
                    (0, p.jsx)(`span`, {
                      className: `inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold text-primary`,
                      children: h.kategori,
                    }),
                    (0, p.jsx)(`h3`, {
                      className: `mt-2 text-lg font-extrabold text-foreground`,
                      children: h.judul,
                    }),
                    (0, p.jsx)(`p`, {
                      className: `mt-1 text-xs text-muted-foreground`,
                      children: h.caption,
                    }),
                    h.sumber &&
                      (0, p.jsxs)(`div`, {
                        className: `mt-3 flex items-center justify-between border-t border-border/60 pt-2 text-xs`,
                        children: [
                          (0, p.jsxs)(`span`, {
                            className: `text-muted-foreground`,
                            children: [
                              `Sumber Dokumentasi:`,
                              ` `,
                              (0, p.jsx)(`strong`, {
                                className: `text-foreground`,
                                children: h.sumber,
                              }),
                            ],
                          }),
                          h.sumberUrl &&
                            (0, p.jsxs)(`a`, {
                              href: h.sumberUrl,
                              target: `_blank`,
                              rel: `noopener noreferrer`,
                              className: `inline-flex items-center gap-1 font-bold text-primary hover:underline`,
                              children: [
                                (0, p.jsx)(`span`, { children: `Buka Tautan Rujukan Asli` }),
                                (0, p.jsx)(o, { className: `size-3.5` }),
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
export { h as component };
