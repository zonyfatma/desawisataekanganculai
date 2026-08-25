import { o as __toESM } from "../_runtime.mjs";
import { T as klasifikasiInfo, W as villages, h as fasilitasMaster, j as provinsiList } from "./schemas-DIbXu2MH.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { Ct as ChevronDown, Nt as ArrowRight, U as MapPin, bt as ChevronUp, rt as Funnel, t as X, w as Search, wt as Check } from "../_libs/lucide-react.mjs";
import { G as cn, l as SourceLink, r as Route$1 } from "./router-HcJQJ-TI.mjs";
import { t as Skeleton } from "./skeleton-D9W9wFsj.mjs";
import { a as SelectItemIndicator, c as SelectPortal, d as SelectSeparator$1, f as SelectTrigger$1, i as SelectItem$1, l as SelectScrollDownButton$1, m as SelectViewport, n as SelectContent$1, o as SelectItemText, p as SelectValue$1, r as SelectIcon, s as SelectLabel$1, t as Select$1, u as SelectScrollUpButton$1 } from "../_libs/@radix-ui/react-select+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/desa.index-DHfHNPQS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Select = Select$1;
var SelectValue = SelectValue$1;
var SelectTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
	ref,
	className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 opacity-50" })
	})]
}));
SelectTrigger.displayName = SelectTrigger$1.displayName;
var SelectScrollUpButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-4 w-4" })
}));
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
var SelectScrollDownButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
}));
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
var SelectContent = import_react.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent$1, {
	ref,
	className: cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
	position,
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
			className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton, {})
	]
}) }));
SelectContent.displayName = SelectContent$1.displayName;
var SelectLabel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel$1, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", className),
	...props
}));
SelectLabel.displayName = SelectLabel$1.displayName;
var SelectItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
	ref,
	className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children })]
}));
SelectItem.displayName = SelectItem$1.displayName;
var SelectSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectSeparator$1, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
SelectSeparator.displayName = SelectSeparator$1.displayName;
function VillageCard({ village, priority = false }) {
	const info = klasifikasiInfo[village.klasifikasi];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "card-lift group flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all duration-300 hover:shadow-lift",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[4/3] overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: village.image,
					alt: `Pemandangan ${village.nama} di ${village.kabupaten}`,
					width: 1600,
					height: 1e3,
					loading: priority ? "eager" : "lazy",
					className: "size-full object-cover transition-transform duration-700 group-hover:scale-108"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `absolute top-3 right-3 rounded-full px-3 py-1.5 text-[11px] font-extrabold backdrop-blur shadow-soft ${village.adwi ? "bg-gold text-gold-foreground" : "bg-background/90 text-primary"}`,
					children: village.adwi ?? `Desa ${village.klasifikasi}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1.5 text-[11px] font-bold text-foreground backdrop-blur",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3.5 text-primary" }), village.kabupaten]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `w-fit rounded-full px-3 py-1 text-[11px] font-extrabold ${info.badgeClass}`,
					children: info.label
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-3 text-xl font-extrabold tracking-tight text-foreground",
					children: village.nama
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1.5 flex items-center gap-1.5 text-xs font-semibold text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "truncate",
						children: [
							village.kabupaten,
							", ",
							village.provinsi
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 line-clamp-2 text-xs leading-relaxed text-muted-foreground",
					children: village.deskripsi
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-wrap gap-1.5",
					children: [village.fasilitas.slice(0, 3).map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-surface px-2.5 py-1 text-[11px] font-semibold text-muted-foreground border border-border/60",
						children: f
					}, f)), village.fasilitas.length > 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-bold text-primary",
						children: [
							"+",
							village.fasilitas.length - 3,
							" fasilitas"
						]
					}) : null]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceLink, { source: village.source })
			]
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 flex items-center justify-between gap-3 border-t border-border p-6 pt-4 bg-surface/50",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] font-bold text-muted-foreground uppercase",
					children: "Pengelola"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "truncate text-xs font-extrabold text-foreground",
					children: village.pokdarwis
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/desa/$slug",
				params: { slug: village.slug },
				className: "inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-bold text-primary-foreground shadow-card transition-all duration-300 hover:bg-emerald-deep hover:shadow-lift",
				children: ["Lihat Profil Lengkap", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5 transition-transform duration-300 group-hover:translate-x-1" })]
			})]
		})]
	});
}
function VillageCardSkeleton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-hidden rounded-3xl border border-border bg-card shadow-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "aspect-[4/3] w-full rounded-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-3 p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-24 rounded-full" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-5 w-3/4" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-1/2" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-9 w-full rounded-full" })
			]
		})]
	});
}
function DesaIndex() {
	const search = Route$1.useSearch();
	const navigate = useNavigate({ from: "/desa/" });
	const [q, setQ] = (0, import_react.useState)(search.q ?? "");
	const [provinsi, setProvinsi] = (0, import_react.useState)(search.provinsi ?? "semua");
	const [kategori, setKategori] = (0, import_react.useState)(search.kategori ?? "semua");
	const [fasilitas, setFasilitas] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const t = setTimeout(() => setLoading(false), 450);
		return () => clearTimeout(t);
	}, []);
	(0, import_react.useEffect)(() => {
		navigate({
			search: () => ({
				q: q || void 0,
				provinsi: provinsi === "semua" ? void 0 : provinsi,
				kategori: kategori === "semua" ? void 0 : kategori
			}),
			replace: true
		});
	}, [
		q,
		provinsi,
		kategori,
		navigate
	]);
	const results = (0, import_react.useMemo)(() => villages.filter((v) => {
		return `${v.nama} ${v.kabupaten} ${v.provinsi}`.toLowerCase().includes(q.toLowerCase()) && (provinsi === "semua" || v.provinsi === provinsi) && (kategori === "semua" || v.klasifikasi === kategori) && fasilitas.every((f) => v.fasilitas.includes(f));
	}), [
		q,
		provinsi,
		kategori,
		fasilitas
	]);
	const toggleFasilitas = (f) => setFasilitas((prev) => prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]);
	const reset = () => {
		setQ("");
		setProvinsi("semua");
		setKategori("semua");
		setFasilitas([]);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-surface pt-28 pb-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex rounded-full bg-accent px-4 py-1.5 text-xs font-bold tracking-widest text-primary uppercase",
							children: "Profil & Potensi"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl",
							children: "Profil & Potensi Desa Ekang Anculai"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-base text-muted-foreground",
							children: "Jelajahi potensi ekowisata mangrove, Rumah Batik Bintan, perkebunan warga, homestay rumah warga, dan kegiatan masyarakat Desa Ekang Anculai, Teluk Sebong, Bintan."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-3 rounded-2xl border border-border bg-card p-5 shadow-card lg:grid-cols-[1.4fr_1fr_1fr_auto]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-w-0 items-center gap-2 rounded-2xl bg-surface px-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4 shrink-0 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: q,
								onChange: (e) => setQ(e.target.value),
								"aria-label": "Cari potensi, wisata, UMKM, atau kegiatan",
								placeholder: "Cari potensi, wisata, UMKM, atau kegiatan...",
								className: "w-full bg-transparent py-3.5 text-sm font-medium outline-none placeholder:text-muted-foreground"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							value: provinsi,
							onValueChange: setProvinsi,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
								"aria-label": "Filter provinsi",
								className: "h-auto rounded-2xl border-0 bg-surface px-4 py-3.5 text-sm font-medium",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Provinsi" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "semua",
								children: "Semua Wilayah"
							}), provinsiList.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: p,
								children: p
							}, p))] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							value: kategori,
							onValueChange: setKategori,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
								"aria-label": "Filter klasifikasi",
								className: "h-auto rounded-2xl border-0 bg-surface px-4 py-3.5 text-sm font-medium",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Klasifikasi" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: "semua",
								children: "Semua Klasifikasi"
							}), [
								"Rintisan",
								"Berkembang",
								"Maju",
								"Mandiri"
							].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
								value: k,
								children: k
							}, k))] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: reset,
							className: "inline-flex items-center justify-center gap-2 rounded-full bg-muted px-6 py-3.5 text-sm font-bold text-foreground transition-colors hover:bg-accent hover:text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), "Reset"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "size-3.5" }), "Fasilitas"]
					}), fasilitasMaster.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => toggleFasilitas(f),
						"aria-pressed": fasilitas.includes(f),
						className: `rounded-full px-3.5 py-1.5 text-xs font-bold transition-colors ${fasilitas.includes(f) ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground ring-1 ring-border hover:text-primary"}`,
						children: f
					}, f))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-sm font-semibold text-muted-foreground",
					children: "Menampilkan profil desa wisata"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 grid gap-6 sm:grid-cols-2 xl:grid-cols-3",
					children: loading ? Array.from({ length: 3 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VillageCardSkeleton, {}, i)) : results.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VillageCard, { village: v }, v.slug))
				}),
				!loading && !results.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid place-items-center rounded-2xl border border-dashed border-border bg-card p-16 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-base font-extrabold text-foreground",
							children: "Data tidak ditemukan"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-sm text-sm text-muted-foreground",
							children: "Coba gunakan kata kunci lain seperti \"mangrove\", \"batik\", \"perkebunan\", atau \"gastronomi\"."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: reset,
							className: "mt-5 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground",
							children: "Reset pencarian"
						})
					]
				}) : null
			]
		})
	});
}
//#endregion
export { DesaIndex as component };
