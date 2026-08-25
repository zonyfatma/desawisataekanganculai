import { o as __toESM } from "../_runtime.mjs";
import { B as teko_kayangan_default, C as kegiatan_batik_2_default, F as reog_kendang_kempul_default, P as rengginang_sajian_default, W as villages, a as YOUTUBE_OFFICIAL_URL, f as ekang_mangrove_dermaga_default, i as YOUTUBE_OFFICIAL_ID, k as paketList, n as RUMAH_BATIK_URL, r as WHATSAPP_NUMBER, s as berita, t as DEFAULT_VILLAGE_COORDINATES, w as kegiatan_batik_3_default, y as getVillage, z as statistik } from "./schemas-DIbXu2MH.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as require_jsx_runtime, a as Trigger2, i as Root2, n as Header, r as Item, t as Content2 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { $ as HeartHandshake, A as Plane, At as Building2, Ct as ChevronDown, Et as Car, F as Navigation, Ft as Activity, H as Map, Mt as Award, N as Palette, Nt as ArrowRight, O as Plus, Ot as Calendar, P as Package, Pt as ArrowLeft, R as MessageSquare, St as ChevronLeft, Tt as ChartColumn, U as MapPin, X as Info, Z as House, _ as Sparkles, _t as Clock, at as Flower2, b as ShieldCheck, ct as Eye, dt as Drama, ht as Compass, i as Utensils, k as Play, l as TrendingUp, m as Star, o as Users, ot as FileText, pt as Copy, t as X, u as Trees, ut as ExternalLink, vt as CircleCheck, wt as Check, xt as ChevronRight, y as Ship, z as MessageCircle } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { G as cn, V as submitPublicReviewServerFn, W as useSiteData, _ as DialogHeader, c as getVillageJsonLd, f as TripPlannerModal, h as DialogDescription, i as JsonLdScript, l as SourceLink, m as DialogContent, p as Dialog, s as getFaqJsonLd, u as isSpecificArticleUrl, v as DialogTitle } from "./router-HcJQJ-TI.mjs";
import { t as Skeleton } from "./skeleton-D9W9wFsj.mjs";
import { r as AnimatePresence, t as useInView } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DfSrpcbj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var village_ekang_anculai_default = "/assets/village-ekang-anculai-BfrQMRHa.jpg";
var ekang_mangrove_default = "/assets/ekang-mangrove-C8zsWhLq.jpg";
var ekang_batik_default = "/assets/ekang-batik-D-FszHKD.png";
var ekang_agrowisata_default = "/assets/ekang-agrowisata-CM-JO6qH.jpg";
var slides = [
	{
		id: "batik",
		image: ekang_batik_default,
		icon: Palette,
		nama: "Rumah Batik Bintan",
		sub: "Ikon Kreatif — Wisata edukasi membatik canting tulis & cap motif Bintan",
		tag: "01 • Ikon Kreatif",
		objectPosition: "center 30%"
	},
	{
		id: "mangrove",
		image: ekang_mangrove_default,
		icon: Trees,
		nama: "Hutan Mangrove",
		sub: "Ikon Alam — Ekowisata dan edukasi lingkungan ekosistem pesisir pedalaman",
		tag: "02 • Ikon Alam",
		objectPosition: "center 40%"
	},
	{
		id: "perkebunan",
		image: ekang_agrowisata_default,
		icon: Flower2,
		nama: "Perkebunan Sayur Masyarakat",
		sub: "Ikon Hijau — Edukasi pertanian dan kehidupan tani masyarakat desa",
		tag: "03 • Ikon Hijau",
		objectPosition: "center 35%"
	},
	{
		id: "budaya",
		image: teko_kayangan_default,
		icon: Drama,
		nama: "Teko Kayangan — Ruang Budaya & Kreativitas",
		sub: "Ruang Budaya — Wadah pertunjukan seni, kegiatan budaya, dan aktivitas komunitas desa",
		tag: "04 • Ruang Budaya",
		objectPosition: "center 45%"
	},
	{
		id: "gastronomi",
		image: "/assets/ekang-kuliner-DEWyBtWO.png",
		icon: Utensils,
		nama: "Kuliner Lokal & Gastronomi",
		sub: "Cita Rasa Desa — Olahan ubi, gulai daun ubi, dan hasil kebun warga",
		tag: "05 • Cita Rasa Desa",
		objectPosition: "center 50%"
	},
	{
		id: "homestay",
		image: village_ekang_anculai_default,
		icon: House,
		nama: "Homestay Rumah Warga",
		sub: "Konsep Pengembangan — Tinggal dan merasakan kehangatan masyarakat desa",
		tag: "CBT Homestay",
		objectPosition: "center 35%"
	}
];
function Hero() {
	const [index, setIndex] = (0, import_react.useState)(0);
	const [openPlanner, setOpenPlanner] = (0, import_react.useState)(false);
	const [isPaused, setIsPaused] = (0, import_react.useState)(false);
	const [prefersReducedMotion, setPrefersReducedMotion] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
		setPrefersReducedMotion(mediaQuery.matches);
		const handleChange = (e) => setPrefersReducedMotion(e.matches);
		mediaQuery.addEventListener("change", handleChange);
		return () => mediaQuery.removeEventListener("change", handleChange);
	}, []);
	(0, import_react.useEffect)(() => {
		if (prefersReducedMotion) return;
		const t = setInterval(() => {
			if (document.visibilityState === "visible") setIndex((i) => (i + 1) % slides.length);
		}, 5e3);
		return () => clearInterval(t);
	}, [prefersReducedMotion]);
	const active = slides[index];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative min-h-[92vh] w-full overflow-hidden pt-36 pb-32 sm:pb-40 flex flex-col justify-center",
		onMouseEnter: () => setIsPaused(true),
		onMouseLeave: () => setIsPaused(false),
		onFocus: () => setIsPaused(true),
		onBlur: () => setIsPaused(false),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "sync",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
					src: active.image,
					alt: active.nama,
					width: 1600,
					height: 1e3,
					loading: index === 0 ? "eager" : "lazy",
					fetchPriority: index === 0 ? "high" : "auto",
					decoding: index === 0 ? "sync" : "async",
					initial: {
						opacity: 0,
						scale: prefersReducedMotion ? 1 : 1.05
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					exit: { opacity: 0 },
					transition: {
						duration: prefersReducedMotion ? .3 : 1.2,
						ease: "easeOut"
					},
					style: { objectPosition: active.objectPosition || "center center" },
					className: "absolute inset-0 size-full object-cover"
				}, index)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-overlay absolute inset-0 bg-black/45 bg-gradient-to-t from-black/95 via-black/65 to-black/40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto w-full max-w-7xl px-4 pt-4 sm:px-6 lg:px-8 z-10 text-left",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: prefersReducedMotion ? 0 : 28
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .7,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					className: "max-w-4xl flex flex-col items-start justify-start text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-start gap-2 text-left",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1.5 rounded-full bg-[#C58A32] px-3.5 py-1.5 text-xs font-black tracking-wider text-white uppercase shadow-lg border border-[#DCA348]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5 fill-white" }), "Community Based Tourism (CBT)"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1.5 rounded-full bg-[#14532D] px-3.5 py-1.5 text-xs font-extrabold text-white shadow-lg border border-[#2F7D4A]/60",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "size-3.5 text-white" }), "Desa Berprestasi Kepri 2026"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1 rounded-full bg-black/75 px-3.5 py-1.5 text-xs font-extrabold text-white backdrop-blur-md border border-white/30 shadow-lg",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3.5 text-[#C58A32]" }), "Teluk Sebong, Bintan"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 sm:mt-5 text-left text-2xl sm:text-5xl lg:text-7xl leading-[1.1] font-black tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)]",
							children: "Desa Wisata Hijau dan Kreatif Ekang Anculai"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 sm:mt-3 text-left text-sm sm:text-xl font-black text-[#F7F4EA] italic leading-tight max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]",
							children: "\"Experience the Authentic Village Life\""
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-left max-w-2xl text-xs sm:text-base leading-relaxed text-white/95 font-medium drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)]",
							children: "\"Where Nature, Culture, Creativity, and Village Life Grow Together\""
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 sm:mt-6 flex flex-wrap items-center justify-start gap-2 max-w-full text-left py-1",
							children: slides.map((s, idx) => {
								const Icon = s.icon;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setIndex(idx),
									className: `inline-flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[11px] sm:text-xs font-extrabold transition-all duration-300 backdrop-blur-md cursor-pointer whitespace-nowrap min-h-[36px] ${index === idx ? "bg-[#C58A32] text-white ring-2 ring-[#DCA348] shadow-xl" : "bg-black/75 text-white hover:bg-black/90 hover:text-[#C58A32] border border-white/30 shadow-md"}`,
									"aria-label": `Slide ${idx + 1}: ${s.nama}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-3.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: s.tag })]
								}, s.id);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3 text-left w-full sm:w-auto",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setOpenPlanner(true),
								className: "inline-flex items-center justify-center gap-2 rounded-full bg-[#C58A32] hover:bg-[#A87226] px-6 sm:px-7 py-3.5 text-xs sm:text-sm font-black text-white shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 ring-2 ring-[#DCA348] cursor-pointer min-h-[48px] w-full sm:w-auto",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, { className: "size-4 shrink-0 text-white" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Rencanakan Kunjungan" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#potensi",
								className: "inline-flex items-center justify-center gap-2 rounded-full bg-[#14532D] hover:bg-[#064E3B] px-6 sm:px-7 py-3.5 text-xs sm:text-sm font-black text-white shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 ring-1 ring-[#2F7D4A]/60 min-h-[48px] w-full sm:w-auto text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Jelajahi Potensi" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 shrink-0 text-white" })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 sm:mt-8 flex items-center gap-3 sm:gap-4 rounded-2xl bg-black/85 p-3.5 sm:p-4 backdrop-blur-md w-full max-w-xl border border-white/30 shadow-2xl text-left",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid size-10 sm:size-11 shrink-0 place-items-center rounded-xl bg-[#C58A32]/25 text-[#F7F4EA] font-black text-xs sm:text-sm border border-[#C58A32]/40",
								children: ["0", index + 1]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1 text-left",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-center justify-start gap-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] font-black text-[#F7F4EA] uppercase tracking-wider",
											children: active.tag
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate text-sm sm:text-base font-black text-white text-left",
										children: active.nama
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate text-[11px] sm:text-xs text-white/80 font-medium text-left",
										children: active.sub
									})
								]
							})]
						})
					]
				})
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TripPlannerModal, {
		open: openPlanner,
		onOpenChange: setOpenPlanner
	})] });
}
function CountUp({ value, suffix = "", duration = 1600 }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-80px"
	});
	const [display, setDisplay] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		let raf = 0;
		const start = performance.now();
		const tick = (now) => {
			const p = Math.min((now - start) / duration, 1);
			const eased = 1 - Math.pow(1 - p, 3);
			setDisplay(Math.round(value * eased));
			if (p < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [
		inView,
		value,
		duration
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		className: "tabular-nums",
		children: [display.toLocaleString("id-ID"), suffix]
	});
}
function Reveal({ children, delay = 0, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y: 24
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-60px"
		},
		transition: {
			duration: .55,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className,
		children
	});
}
function SectionHeading({ eyebrow, title, description, align = "center", dark = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: align === "center" ? "mx-auto max-w-3xl text-center flex flex-col items-center justify-center" : "max-w-3xl text-left",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-extrabold tracking-widest uppercase ring-1 shadow-sm ${dark ? "bg-gold/20 text-gold ring-gold/40" : "bg-primary/10 text-primary ring-primary/20"}`,
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: `mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl leading-[1.12] ${dark ? "text-white" : "text-foreground"} ${align === "center" ? "text-center" : "text-left"}`,
				children: title
			}),
			description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `mt-4 text-sm sm:text-base leading-relaxed font-medium max-w-2xl ${dark ? "text-zinc-300" : "text-muted-foreground"} ${align === "center" ? "mx-auto text-center" : "mr-auto ml-0 text-left"}`,
				children: description
			}) : null
		]
	});
}
var icons = [
	Building2,
	Sparkles,
	Award,
	Package
];
function StatsSection() {
	const visits = useSiteData()?.visitCount ?? 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "w-full relative overflow-hidden bg-[#022C22] text-white py-16 sm:py-20 border-t border-b border-emerald-900/80 shadow-2xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-24 -left-24 size-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-24 -right-24 size-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-10 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap justify-center items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex items-center gap-1.5 rounded-full bg-emerald-800/80 px-3.5 py-1 text-xs font-extrabold text-amber-300 uppercase tracking-widest ring-1 ring-emerald-500/40",
								children: "Profil & Statistik Desa"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3.5 py-1 text-xs font-extrabold text-emerald-200 uppercase tracking-widest ring-1 ring-emerald-400/40",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-3.5 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [visits.toLocaleString("id-ID"), " Kunjungan Website"] })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-2xl sm:text-4xl font-black text-white tracking-tight",
							children: "Profil dan Capaian Desa Wisata Ekang Anculai"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs sm:text-sm font-medium text-emerald-200/90 max-w-2xl mx-auto",
							children: "Informasi statistik profil wilayah, potensi CBT, kawasan ekowisata, capaian resmi, dan statistik kunjungan pengunjung digital."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6",
					children: statistik.map((s, i) => {
						const Icon = icons[i];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * .08,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-emerald-700/50 bg-gradient-to-b from-emerald-900/80 to-emerald-950/90 p-6 shadow-xl backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-amber-400/60 hover:shadow-2xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid size-12 place-items-center rounded-2xl bg-emerald-500/25 text-emerald-300 ring-1 ring-emerald-400/40 shadow-inner transition-transform duration-300 group-hover:scale-110 group-hover:bg-amber-400/20 group-hover:text-amber-300",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-6" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1 rounded-full bg-emerald-800/60 px-2.5 py-1 text-[10px] font-extrabold text-emerald-200 uppercase tracking-wider ring-1 ring-emerald-600/40",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "size-3 text-amber-400" }), "Terverifikasi"]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-6 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-amber-400 drop-shadow-sm",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, {
											value: s.value,
											suffix: s.suffix
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-base font-extrabold text-white group-hover:text-amber-200 transition-colors",
										children: s.label
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1.5 text-xs text-emerald-200/85 font-medium leading-relaxed",
										children: s.caption
									})
								] })]
							})
						}, s.label);
					})
				})]
			})
		]
	});
}
var mainAttractions = [
	{
		num: "01",
		id: "batik",
		judul: "Rumah Batik Bintan",
		kategori: "Ikon Kreatif",
		badgeStatus: "TERKONFIRMASI",
		badgeText: "Galeri Terkonfirmasi / Potensi Workshop",
		icon: Palette,
		image: kegiatan_batik_2_default,
		shortDesc: "Pusat kreasi batik khas Bintan dengan teknik canting tulis dan cap karya perajin desa.",
		fullDesc: "Rumah Batik Bintan merupakan pusat edukasi dan galeri produksi kain batik dengan motif khas keanekaragaman flora-fauna Bintan. Wisatawan dapat menyaksikan keindahan kain batik tulis dan cap yang diproduksi oleh perajin lokal desa.",
		highlights: [
			"Wisata edukasi membatik canting",
			"Batik tulis & batik cap motif khas Bintan",
			"Pewarna alam & pewarna sintetis berkualitas",
			"Galeri suvenir batik khas Bintan",
			"Potensi pengalaman workshop membatik bersama perajin"
		],
		externalUrl: RUMAH_BATIK_URL,
		externalLabel: "Kenali Rumah Batik Bintan ↗",
		importantNote: "Potensi pengalaman workshop membatik dapat dikembangkan dan ditawarkan bersama perajin lokal desa.",
		source: {
			name: "Pemerintah Kabupaten Bintan",
			url: "https://www.bintankab.go.id/",
			publishedAt: "2026-04-12"
		}
	},
	{
		num: "02",
		id: "mangrove",
		judul: "Hutan Mangrove Ekang Mangrove Park",
		kategori: "Ikon Alam",
		badgeStatus: "POTENSI",
		badgeText: "Ekowisata & Edukasi Lingkungan",
		icon: Trees,
		image: ekang_mangrove_dermaga_default,
		shortDesc: "Ekosistem pesisir pedalaman unggulan yang hijau dan asri, dilengkapi boardwalk kayu ratusan meter, edukasi konservasi bakau, serta pemandangan sunset.",
		fullDesc: "Hutan Mangrove Ekang Anculai (Ekang Mangrove Park) merupakan ekosistem pesisir pedalaman yang sangat kaya akan keanekaragaman hayati dan menjadi salah satu benteng ekologis serta ikon ekowisata utama Desa Wisata Ekang Anculai. Kawasan konservasi mangrove ini dilengkapi dengan fasilitas boardwalk kayu yang kokoh dan tertata rapi sepanjang ratusan meter, memungkinkan pengunjung menyusuri keasrian hutan bakau yang masih sangat alami, teduh, dan terjaga kelestariannya.\n\nDi sepanjang jalur susur mangrove, wisatawan disuguhkan pemandangan pepohonan bakau rindang berusia puluhan tahun, rimbunnya flora khas vegetasi pesisir, serta dapat mengamati secara langsung habitat berbagai fauna liar seperti burung migran pesisir, kepiting bakau, kelip-kelip (kunang-kunang) malam hari, dan biota air payau. Pengalaman ini semakin lengkap dengan adanya tur edukasi konservasi bersama pemandu lokal berlisensi, yang membagikan wawasan mengenai peran krusial mangrove sebagai penyerap karbon, penahan erosi pesisir, penyaring alami air, serta sumber penghidupan masyarakat lokal. Pengunjung juga dapat menikmati keindahan pemandangan matahari terbenam (sunset) di atas perairan sungai bakau dan mengikuti kegiatan penanaman bibit mangrove sebagai bentuk partisipasi nyata dalam pelestarian alam pedesaan.",
		highlights: [
			"Susur kawasan bakau menyusuri jalur boardwalk kayu ratusan meter",
			"Edukasi ekosistem pesisir, fungsi ekologis bakau & aksi tanam bibit",
			"Pengamatan keanekaragaman flora, burung migran & biota air payau",
			"Spot fotografi pemandangan sunset & keasrian hutan bakau pedalaman",
			"Konservasi lingkungan dan keberlanjutan ekosistem pesisir pedesaan"
		],
		importantNote: "Potensi aktivitas wisata dan pengalaman susur mangrove yang terkelola bersama Pengelola Desa Wisata.",
		source: {
			name: "Pemerintah Desa Ekang Anculai",
			url: "https://desaekanganculai.bintankab.go.id/",
			publishedAt: "2026-05-20"
		}
	},
	{
		num: "03",
		id: "perkebunan",
		judul: "Perkebunan Sayur Masyarakat",
		kategori: "Ikon Hijau",
		badgeStatus: "POTENSI",
		badgeText: "Potensi Wisata Pertanian (CBT)",
		icon: Flower2,
		image: teko_kayangan_default,
		shortDesc: "Pengalaman pertanian autentik: melihat kebun, bertemu petani, menanam, mencangkul, dan memanen.",
		fullDesc: "Nikmati pengalaman autentik kehidupan tani masyarakat desa. Pengunjung dapat menyusuri kebun warga, mengenal berbagai tanaman lokal (ubi, pisang, sayuran), bertemu dengan petani asli, serta berpartisipasi langsung dalam aktivitas bercocok tanam, mencangkul, hingga memanen hasil perkebunan.",
		highlights: [
			"Melihat kebun & mengenal keanekaragaman tanaman lokal",
			"Bertemu dan berinteraksi langsung dengan petani asli Ekang",
			"Aktivitas menanam, mencangkul, dan merawat tanaman",
			"Pengalaman memanen hasil kebun bersama masyarakat",
			"Mengenal komoditas unggulan ubi dan pisang lokal"
		],
		importantNote: "Pengalaman aktivitas pertanian warga dilakukan langsung di lahan masyarakat bersama pendampingan petani lokal.",
		source: {
			name: "Pemerintah Desa Ekang Anculai",
			url: "https://desaekanganculai.bintankab.go.id/",
			publishedAt: "2026-03-01"
		}
	},
	{
		num: "04",
		id: "budaya",
		judul: "Seni & Tradisi Reog Sedulur Manunggal",
		kategori: "Ruang Budaya",
		badgeStatus: "POTENSI",
		badgeText: "Kesenian Tradisional & Komunitas",
		icon: Drama,
		image: reog_kendang_kempul_default,
		shortDesc: "Sanggar seni tradisional Reog Sedulur Manunggal Fersi Kendang Kempul kebanggaan pemuda desa.",
		fullDesc: "Sanggar Seni Reog Sedulur Manunggal Fersi Kendang Kempul Desa Ekang Anculai merupakan wadah pelestarian seni budaya tradisional yang aktif tampil dalam berbagai ajang festival dan pementasan seni, memperagakan atraksi budaya diiringi tabuhan gamelan dan kendang kempul.",
		highlights: [
			"Atraksi seni tari tradisional Reog Ponorogo & Kendang Kempul",
			"Harmonisasi instrumen gamelan, gong, dan kendang kempul",
			"Keterlibatan aktif generasi muda dan seniman lokal desa",
			"Pementasan budaya dalam perayaan festival daerah & Bintan Resorts"
		],
		importantNote: "Pementasan seni budaya dikelola langsung oleh Sanggar Seni Reog Sedulur Manunggal Desa Ekang Anculai.",
		source: {
			name: "Pemerintah Desa Ekang Anculai",
			url: "https://desaekanganculai.bintankab.go.id/",
			publishedAt: "2026-04-10"
		}
	},
	{
		num: "05",
		id: "gastronomi",
		judul: "Kuliner Lokal & Olahan Pangan Desa",
		kategori: "Cita Rasa Desa",
		badgeStatus: "TERKONFIRMASI",
		badgeText: "Pangan Lokal & Rengginang Comel",
		icon: Utensils,
		image: rengginang_sajian_default,
		shortDesc: "Sajian kuliner lokal, Rengginang Comel renyah aneka warna, olahan hasil kebun warga, dan cita rasa autentik desa.",
		fullDesc: "Wisata gastronomi Desa Ekang Anculai menyajikan pengalaman menikmati hasil pangan dan masakan tradisional olahan warga desa. Olahan Rengginang Comel yang renyah dan gurih, sajian masakan rumahan autentik, serta aneka olahan ubi dan pisang lokal menjadi simbol kehangatan tradisi yang terus dipelihara.",
		highlights: [
			"Produk Rengginang Comel aneka warna bersertifikasi Halal resmi",
			"Olahan ubi & pisang hasil perkebunan masyarakat",
			"Masakan rumahan desa khas Gulai Daun Ubi & lauk lokal",
			"Edukasi pangan lokal & interaksi dengan pembuat kuliner desa"
		],
		importantNote: "Pengalaman kuliner rumahan diproduksi dan disajikan langsung oleh masyarakat desa.",
		source: {
			name: "Dapur Rub & UMKM Desa Ekang Anculai",
			url: "https://desaekanganculai.bintankab.go.id/",
			publishedAt: "2026-07-01"
		}
	}
];
function DestinationSpotlight() {
	const [selectedAttraction, setSelectedAttraction] = (0, import_react.useState)(null);
	const [activeFilter, setActiveFilter] = (0, import_react.useState)("semua");
	const cmsLandmarks = useSiteData()?.landmarkList || [];
	const filteredAttractions = (cmsLandmarks.length > 0 ? cmsLandmarks.map((lm, idx) => {
		const matched = mainAttractions.find((a) => a.id === lm.id || a.judul.toLowerCase() === lm.nama.toLowerCase());
		if (matched) return {
			...matched,
			judul: lm.nama || matched.judul,
			shortDesc: lm.deskripsi || matched.shortDesc,
			fullDesc: lm.deskripsi || matched.fullDesc,
			image: lm.image || matched.image,
			source: lm.source || matched.source
		};
		return {
			num: String(idx + 1).padStart(2, "0"),
			id: lm.id,
			judul: lm.nama,
			kategori: lm.kategori || "Destinasi",
			badgeStatus: "TERKONFIRMASI",
			badgeText: "Destinasi Terkonfirmasi",
			icon: Trees,
			image: lm.image || "/assets/kegiatan-batik-2-w4bz9jCL.jpg",
			shortDesc: lm.deskripsi || "",
			fullDesc: lm.deskripsi || "",
			highlights: [lm.nama, lm.kategori],
			source: lm.source || {
				name: "Pemerintah Desa",
				url: ""
			}
		};
	}) : mainAttractions).filter((a) => {
		if (activeFilter === "semua") return true;
		if (activeFilter === "kreatif") return a.id.includes("batik") || a.kategori.toLowerCase().includes("kreatif") || a.kategori.toLowerCase().includes("craft");
		if (activeFilter === "alam") return a.id.includes("mangrove") || a.kategori.toLowerCase().includes("alam") || a.kategori.toLowerCase().includes("ekowisata");
		if (activeFilter === "hijau") return a.id.includes("perkebunan") || a.kategori.toLowerCase().includes("agrowisata") || a.kategori.toLowerCase().includes("pertanian");
		if (activeFilter === "budaya") return a.id.includes("budaya") || a.id.includes("reog") || a.kategori.toLowerCase().includes("budaya") || a.kategori.toLowerCase().includes("seni");
		if (activeFilter === "kuliner") return a.id.includes("kuliner") || a.id.includes("gastronomi") || a.kategori.toLowerCase().includes("kuliner") || a.kategori.toLowerCase().includes("gastronomi");
		return true;
	});
	const getDestinationStyle = (id) => {
		switch (id) {
			case "batik": return {
				cardBg: "bg-[#FEFCE8] dark:bg-stone-900/90 border-[#6B7F3A]/30",
				badgeBg: "bg-[#FEFCE8] text-[#064E3B] border border-[#064E3B]/30",
				tagBg: "bg-[#6B7F3A]/15 text-[#3F6212]",
				accentColor: "text-[#064E3B]",
				btnHover: "group-hover:bg-[#064E3B] group-hover:text-white"
			};
			case "perkebunan": return {
				cardBg: "bg-[#F0FDF4] dark:bg-emerald-950/50 border-[#22C55E]/30",
				badgeBg: "bg-[#DCFCE7] text-[#064E3B] border border-[#22C55E]/40",
				tagBg: "bg-[#22C55E]/15 text-[#166534]",
				accentColor: "text-[#166534]",
				btnHover: "group-hover:bg-[#166534] group-hover:text-white"
			};
			case "mangrove": return {
				cardBg: "bg-[#E2EFE0] dark:bg-emerald-950/60 border-[#166534]/30",
				badgeBg: "bg-[#DCFCE7] text-[#166534] border border-[#166534]/40",
				tagBg: "bg-[#166534]/15 text-[#064E3B]",
				accentColor: "text-[#064E3B]",
				btnHover: "group-hover:bg-[#064E3B] group-hover:text-white"
			};
			case "budaya": return {
				cardBg: "bg-[#F4F6EC] dark:bg-stone-900/90 border-[#3F6212]/30",
				badgeBg: "bg-[#A7C7A5]/30 text-[#064E3B] border border-[#3F6212]/30",
				tagBg: "bg-[#3F6212]/15 text-[#3F6212]",
				accentColor: "text-[#3F6212]",
				btnHover: "group-hover:bg-[#3F6212] group-hover:text-white"
			};
			case "gastronomi": return {
				cardBg: "bg-[#FEFCE8] dark:bg-amber-950/40 border-[#6B7F3A]/30",
				badgeBg: "bg-[#FEFCE8] text-[#6B7F3A] border border-[#6B7F3A]/40",
				tagBg: "bg-[#6B7F3A]/15 text-[#6B7F3A]",
				accentColor: "text-[#6B7F3A]",
				btnHover: "group-hover:bg-[#6B7F3A] group-hover:text-white"
			};
			default: return {
				cardBg: "bg-[#F5F1E8] dark:bg-stone-900/90 border-[#166534]/30",
				badgeBg: "bg-[#F5F1E8] text-[#3F6212] border border-[#3F6212]/40",
				tagBg: "bg-[#166534]/15 text-[#166534]",
				accentColor: "text-[#166534]",
				btnHover: "group-hover:bg-[#166534] group-hover:text-white"
			};
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "potensi",
		className: "w-full scroll-mt-24 bg-[#F8FAFC] dark:bg-slate-900 py-20 sm:py-24 border-b border-emerald-900/10 dark:border-slate-800",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					align: "center",
					eyebrow: "Daya Tarik Utama",
					title: "5 Daya Tarik Utama Ekang Anculai",
					description: "Kenali pengalaman wisata yang mempertemukan alam, kreativitas, budaya, pangan lokal, dan kehidupan masyarakat."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex flex-wrap items-center justify-center gap-2",
					children: [
						{
							id: "semua",
							label: "Semua Daya Tarik (5)"
						},
						{
							id: "kreatif",
							label: "Ikon Kreatif & Batik"
						},
						{
							id: "alam",
							label: "Ekowisata Mangrove"
						},
						{
							id: "hijau",
							label: "Perkebunan Sayur"
						},
						{
							id: "budaya",
							label: "Teko Kayangan & Budaya"
						},
						{
							id: "kuliner",
							label: "Kuliner Lokal"
						}
					].map((chip) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setActiveFilter(chip.id),
						className: `rounded-full px-4 py-2 text-xs font-extrabold transition-all duration-300 cursor-pointer whitespace-nowrap ${activeFilter === chip.id ? "bg-primary text-primary-foreground shadow-md scale-105 ring-2 ring-primary/40" : "bg-card text-muted-foreground hover:bg-emerald-50 hover:text-primary border border-border"}`,
						children: chip.label
					}, chip.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5",
					children: filteredAttractions.map((item, index) => {
						const Icon = item.icon;
						const style = getDestinationStyle(item.id);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: index * .08,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: `card-lift group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border ${style.cardBg} shadow-card transition-all duration-500 hover:shadow-lift`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative aspect-[4/3] w-full overflow-hidden",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: item.image,
											alt: item.judul,
											width: 800,
											height: 600,
											loading: "lazy",
											decoding: "async",
											className: "size-full object-cover transition-transform duration-700 group-hover:scale-110"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-overlay absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "absolute top-3 left-3 grid size-9 place-items-center rounded-2xl bg-[#064E3B] font-black text-xs text-white shadow-lg ring-1 ring-emerald-400/40",
											children: item.num
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `absolute top-3 right-3 inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-black backdrop-blur-md shadow-md ${style.badgeBg}`,
											children: item.badgeStatus
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: `inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-extrabold uppercase ring-1 ring-black/5 ${style.tagBg}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-3.5" }), item.kategori]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: `mt-2.5 text-lg font-black text-foreground group-hover:${style.accentColor} transition-colors leading-tight`,
											children: item.judul
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-3 font-medium",
											children: item.shortDesc
										})
									]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "p-5 pt-0 border-t border-black/5 mt-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => setSelectedAttraction(item),
										className: `mt-3 inline-flex w-full items-center justify-between rounded-2xl bg-white dark:bg-slate-800 px-4 py-2.5 text-xs font-extrabold text-foreground border border-black/10 transition-all duration-300 ${style.btnHover} cursor-pointer shadow-sm`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Jelajahi Detail" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1" })]
									})
								})]
							})
						}, item.id);
					})
				})
			]
		}), selectedAttraction && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open: !!selectedAttraction,
			onOpenChange: () => setSelectedAttraction(null),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
				className: "max-w-3xl max-h-[90vh] flex flex-col overflow-hidden rounded-3xl p-0 border-0 bg-card shadow-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative shrink-0 aspect-[16/9] sm:aspect-video w-full overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: selectedAttraction.image,
								alt: selectedAttraction.judul,
								className: "size-full object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-overlay absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/30" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-20",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setSelectedAttraction(null),
									className: "inline-flex items-center gap-2 rounded-full bg-emerald-800/90 hover:bg-emerald-900 px-4 py-2 text-xs font-black text-white backdrop-blur-md transition-all shadow-lg ring-1 ring-white/30 active:scale-95 cursor-pointer",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "hidden sm:inline",
											children: "Kembali Ke Halaman Sebelumnya"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "inline sm:hidden",
											children: "Kembali"
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid size-8 place-items-center rounded-xl bg-gold font-black text-xs text-gold-foreground shadow-md",
											children: selectedAttraction.num
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `rounded-full px-3 py-1 text-[11px] font-extrabold text-white backdrop-blur-md shadow-md ${selectedAttraction.badgeStatus === "TERKONFIRMASI" ? "bg-emerald-600/90" : "bg-amber-600/90"}`,
											children: selectedAttraction.badgeStatus
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setSelectedAttraction(null),
											className: "grid size-10 place-items-center rounded-full bg-black/80 hover:bg-black text-white hover:text-gold border border-white/40 backdrop-blur-md transition-all shadow-xl hover:scale-110 active:scale-95 cursor-pointer",
											"aria-label": "Tutup Detail",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-6 stroke-[2.5]" })
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute bottom-4 left-5 right-5 text-white z-10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-block rounded-md bg-gold/25 px-2.5 py-0.5 text-[11px] font-black text-gold uppercase tracking-wider backdrop-blur-md ring-1 ring-gold/40",
									children: selectedAttraction.kategori
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
									className: "mt-1.5 text-2xl sm:text-3xl font-black text-white leading-tight",
									children: selectedAttraction.judul
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6 sm:p-8 space-y-6 overflow-y-auto flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm sm:text-base leading-relaxed text-foreground font-medium",
								children: selectedAttraction.fullDesc
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border bg-surface p-5 shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
									className: "text-xs font-extrabold tracking-wider text-primary uppercase flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 text-primary" }), "Fokus Pengalaman & Potensi Wisata:"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-3 grid gap-2.5 sm:grid-cols-2",
									children: selectedAttraction.highlights.map((hl, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-2 text-xs font-bold text-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1 size-1.5 shrink-0 rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "leading-relaxed",
											children: hl
										})]
									}, i))
								})]
							}),
							selectedAttraction.importantNote && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl bg-amber-500/10 border border-amber-500/30 p-4 flex items-start gap-3 text-xs text-amber-900 dark:text-amber-200",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "size-5 shrink-0 text-amber-600 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "block font-bold",
									children: "Catatan Pengembangan & Status:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "leading-relaxed",
									children: selectedAttraction.importantNote
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceLink, { source: selectedAttraction.source })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "shrink-0 bg-surface px-6 py-4 sm:px-8 flex flex-wrap items-center justify-between gap-3 border-t border-border z-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setSelectedAttraction(null),
							className: "inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-6 py-3 text-xs font-black text-primary hover:bg-primary hover:text-primary-foreground shadow-md transition-all active:scale-95 cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Kembali Ke Halaman Sebelumnya" })]
						}), selectedAttraction.externalUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: selectedAttraction.externalUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-black text-primary-foreground shadow-card hover:bg-emerald-deep transition-all active:scale-95",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: selectedAttraction.externalLabel || "Baca Sumber Resmi ↗" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" })]
						})]
					})
				]
			})
		})]
	});
}
var ekang_reog_default = "/assets/ekang-reog-DTbADWLi.jpg";
var cbtPrinciples = [
	{
		num: "01",
		title: "Masyarakat Terlibat",
		desc: "Masyarakat setempat bertindak sebagai pengelola, perajin batik, petani, dan tuan rumah utama dalam menghadirkan pengalaman wisata.",
		icon: Users
	},
	{
		num: "02",
		title: "Budaya Tetap Hidup",
		desc: "Seni Melayu, tradisi lokal, keterampilan membatik, dan pementasan budaya dipelihara secara autentik di balai desa dan titik aktivitas masyarakat.",
		icon: HeartHandshake
	},
	{
		num: "03",
		title: "Alam Dijaga",
		desc: "Ekowisata Hutan Mangrove dan perkebunan sayur masyarakat dijaga dan dikonservasi demi keberlanjutan lingkungan pedesaan.",
		icon: Trees
	},
	{
		num: "04",
		title: "Ekonomi Lokal Tumbuh",
		desc: "Hasil pengembangan pariwisata memberikan nilai ekonomi langsung bagi perajin Rumah Batik Bintan, kelompok tani, dan usaha kuliner warga.",
		icon: TrendingUp
	}
];
var experienceSteps = [
	{
		step: "01",
		title: "Datang",
		desc: "Tiba dan menyapa kehangatan suasana pedesaan Ekang Anculai.",
		image: village_ekang_anculai_default
	},
	{
		step: "02",
		title: "Kenali Desa",
		desc: "Orientasi awal & pengenalan potensi daya tarik wisata desa bersama warga.",
		image: ekang_agrowisata_default
	},
	{
		step: "03",
		title: "Pilih Pengalaman",
		desc: "Pilih aktivitas sesuai minat: batik, perkebunan, mangrove, budaya, atau kuliner.",
		image: ekang_mangrove_default
	},
	{
		step: "04",
		title: "Nikmati Aktivitas",
		desc: "Praktik membatik, bercocok tanam, susur mangrove, & santap kuliner rumahan.",
		image: ekang_batik_default
	},
	{
		step: "05",
		title: "Berinteraksi dengan Masyarakat",
		desc: "Mengenal kehidupan, pertunjukan budaya Melayu, dan kehangatan warga desa.",
		image: ekang_reog_default
	},
	{
		step: "06",
		title: "Pulang Membawa Pengalaman",
		desc: "Membawa kenangan autentik, batik buatan sendiri, dan produk UMKM desa.",
		image: kegiatan_batik_3_default
	}
];
function CbtSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "pengalaman",
		className: "w-full scroll-mt-24 bg-[#ECFDF5] dark:bg-emerald-950/60 py-20 sm:py-24 border-b border-emerald-300/60 dark:border-stone-800",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					align: "center",
					eyebrow: "Berwisata Bersama Masyarakat",
					title: "Community Based Tourism (CBT)",
					description: "Ekang Anculai menghadirkan pengalaman wisata yang dekat dengan kehidupan masyarakat. Wisatawan tidak hanya melihat destinasi, tetapi ikut belajar, berinteraksi, berkarya, menikmati pangan lokal, dan merasakan kehidupan desa."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
					children: cbtPrinciples.map((item, index) => {
						const Icon = item.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: index * .08,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "card-lift flex h-full flex-col justify-between rounded-3xl border border-[#166534]/20 bg-white dark:bg-stone-900 p-6 shadow-card transition-all duration-300 hover:border-[#22C55E]/50 hover:shadow-lift",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-2xl font-black text-[#064E3B]",
											children: item.num
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid size-10 place-items-center rounded-2xl bg-[#DCFCE7] text-[#166534] dark:bg-emerald-950 dark:text-emerald-300",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-5 text-lg font-extrabold tracking-tight text-foreground",
										children: item.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-xs leading-relaxed text-muted-foreground font-medium",
										children: item.desc
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6 border-t border-black/5 pt-3 text-[11px] font-bold text-[#166534] dark:text-emerald-400",
									children: "Prinsip Keberlanjutan CBT"
								})]
							})
						}, item.num);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-20 rounded-3xl border border-[#166534]/20 bg-white dark:bg-stone-900 p-6 sm:p-10 shadow-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto flex max-w-2xl flex-col items-center justify-center text-center border-b border-black/5 pb-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1.5 rounded-full bg-[#DCFCE7] px-3.5 py-1 text-xs font-black text-[#064E3B] uppercase tracking-wider",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, { className: "size-3.5" }), "Alur Fleksibel Wisatawan"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 text-2xl sm:text-3xl font-extrabold text-foreground text-center",
									children: "Gambaran Perjalanan Wisata Ekang Anculai"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-xs sm:text-sm text-muted-foreground text-center leading-relaxed",
									children: "Wisata Ekang Anculai dirancang fleksibel agar pengunjung dapat bebas memilih kombinasi pengalaman yang diinginkan."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6",
							children: experienceSteps.map((s, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group relative flex flex-col h-full",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-full flex-col justify-between rounded-2xl border border-black/10 bg-[#F0FDF4] dark:bg-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#22C55E]/50 hover:shadow-card",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative aspect-[16/11] w-full bg-muted rounded-t-2xl overflow-hidden",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: s.image,
												alt: s.title,
												width: 600,
												height: 400,
												loading: "lazy",
												decoding: "async",
												className: "size-full object-cover transition-transform duration-500 group-hover:scale-108"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "absolute top-2.5 left-2.5 grid size-7 place-items-center rounded-xl bg-[#064E3B] text-[11px] font-black text-white shadow-md backdrop-blur-sm",
												children: s.step
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "p-4 flex flex-col flex-1 justify-between",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "text-sm font-extrabold text-foreground group-hover:text-[#166534] dark:group-hover:text-emerald-400 transition-colors min-h-[2.75rem] flex items-center leading-snug",
												children: s.title
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1.5 text-xs text-muted-foreground leading-relaxed font-medium min-h-[3.25rem]",
												children: s.desc
											})] })
										})]
									})
								}), idx < experienceSteps.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "hidden xl:flex items-center absolute -right-3.5 top-1/4 -translate-y-1/2 z-30 pointer-events-none",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "size-7 rounded-full bg-[#064E3B] text-amber-300 shadow-xl ring-4 ring-white dark:ring-stone-900 border border-emerald-400 flex items-center justify-center transition-transform group-hover:scale-110",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5 stroke-[2.5]" })
									})
								})]
							}, s.step))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 rounded-2xl bg-[#DCFCE7] border border-[#22C55E]/30 p-4 text-center text-xs sm:text-sm font-extrabold text-[#064E3B]",
							children: "\"Ekang Anculai menghadirkan pengalaman wisata yang dekat dengan kehidupan masyarakat. Wisatawan tidak hanya melihat destinasi, tetapi ikut belajar, berinteraksi, berkarya, menikmati pangan lokal, dan merasakan kehidupan desa.\""
						})
					]
				})
			]
		})
	});
}
function VideoSection() {
	const [openVideo, setOpenVideo] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "w-full scroll-mt-24 bg-[#022C22] text-white dark:bg-stone-900 py-20 sm:py-24 border-y border-emerald-900/60 dark:border-stone-800",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				align: "center",
				dark: true,
				eyebrow: "Kenali Ekang Anculai",
				title: "Kenali Ekang Anculai",
				description: "Saksikan gambaran Desa Ekang Anculai melalui dokumentasi video yang menampilkan suasana desa, potensi alam, kegiatan masyarakat, budaya, dan pengalaman wisata berbasis masyarakat."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative aspect-video w-full overflow-hidden group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: village_ekang_anculai_default,
						alt: "Thumbnail Video Kenali Ekang Anculai",
						loading: "lazy",
						className: "size-full object-cover transition-transform duration-700 group-hover:scale-105"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hero-overlay absolute inset-0 flex items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setOpenVideo(true),
							"aria-label": "Putar video Kenali Ekang Anculai",
							className: "group/btn flex items-center gap-3 rounded-full bg-gold px-7 py-4 font-extrabold text-gold-foreground shadow-2xl transition-all duration-300 hover:scale-108 hover:bg-gold/90 cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-9 place-items-center rounded-full bg-black/20",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-5 fill-current ml-0.5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-extrabold tracking-wide",
								children: "Putar Video Utama"
							})]
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-zinc-800 bg-zinc-900",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-base font-extrabold text-white",
						children: "Video Ekang Anculai"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-zinc-300",
						children: "Dokumentasi Desa Ekang Anculai yang menampilkan suasana desa, potensi wisata, kegiatan masyarakat, budaya, dan kehidupan lokal."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: YOUTUBE_OFFICIAL_URL,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-xs font-extrabold text-black transition-colors hover:bg-gold/90 shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Lihat lebih banyak video di YouTube" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-4" })]
					})]
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open: openVideo,
			onOpenChange: setOpenVideo,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
				className: "max-w-4xl overflow-hidden rounded-3xl p-0 border-0 bg-black shadow-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "sr-only",
					children: "Video Dokumentasi Resmi Desa Wisata Ekang Anculai"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative aspect-video w-full bg-black",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						src: `https://www.youtube.com/embed/${YOUTUBE_OFFICIAL_ID}?autoplay=1&rel=0`,
						title: "Video Dokumentasi Resmi Desa Wisata Ekang Anculai",
						className: "size-full border-0",
						loading: "lazy",
						allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
						allowFullScreen: true
					})
				})]
			})
		})]
	});
}
function PackagesSection() {
	const [selectedKategori, setSelectedKategori] = (0, import_react.useState)("semua");
	const [activeModalPaket, setActiveModalPaket] = (0, import_react.useState)(null);
	const [openPlanner, setOpenPlanner] = (0, import_react.useState)(false);
	const filteredPaket = paketList.filter((p) => {
		if (selectedKategori === "semua") return true;
		return p.kategori === selectedKategori;
	});
	const getPackageBadgeLabel = (id, index) => {
		if (id.includes("fullday")) return "FULL DAY";
		if (id.includes("2d1n")) return "2D1N — 1 MALAM";
		if (id.includes("mangrove") || id.includes("custom")) return "CUSTOM";
		return index === 0 ? "FULL DAY" : index === 1 ? "2D1N — 1 MALAM" : "CUSTOM";
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "katalog",
		className: "w-full scroll-mt-24 bg-[#F7F4EA] dark:bg-stone-950 py-20 sm:py-24 border-b border-[#14532D]/10 dark:border-stone-800",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						align: "center",
						eyebrow: "PAKET WISATA",
						title: "Paket Wisata Utama",
						description: "Pilihan paket kunjungan dan pengalaman kustom berbasis aktivitas masyarakat, ekowisata mangrove, Rumah Batik Bintan, dan homestay rumah warga."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 flex flex-wrap justify-center gap-2.5",
						children: [
							{
								id: "semua",
								label: "Semua Kunjungan"
							},
							{
								id: "Homestay Rumah Warga",
								label: "Homestay Rumah Warga"
							},
							{
								id: "Ekowisata & Mangrove",
								label: "Ekowisata Mangrove"
							},
							{
								id: "Batik & Ekonomi Kreatif",
								label: "Rumah Batik Bintan"
							}
						].map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setSelectedKategori(cat.id),
							className: `rounded-full px-5 py-2.5 text-xs font-extrabold transition-all duration-300 cursor-pointer whitespace-nowrap ${selectedKategori === cat.id ? "bg-[#14532D] text-white shadow-md scale-105" : "bg-white text-muted-foreground ring-1 ring-border hover:bg-[#E8F1E8] hover:text-[#064E3B]"}`,
							children: cat.label
						}, cat.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr",
						children: filteredPaket.map((p, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "card-lift group flex flex-col justify-between overflow-hidden rounded-3xl border border-[#14532D]/15 bg-white dark:bg-stone-900 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-[#14532D]/40 hover:shadow-lift h-full",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative aspect-[16/10] overflow-hidden",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: p.image,
											alt: p.nama,
											width: 1600,
											height: 1e3,
											loading: "lazy",
											className: "size-full object-cover transition-transform duration-700 group-hover:scale-108"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-[#064E3B] px-3.5 py-1.5 font-black text-xs text-white shadow-lg ring-1 ring-white/20 uppercase tracking-wide",
											children: getPackageBadgeLabel(p.id, idx)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-black/75 px-3 py-1.5 text-[11px] font-extrabold text-white backdrop-blur-md shadow-sm border border-white/30",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-3.5 text-[#C58A32]" }), p.durasi]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-6 flex flex-col flex-1 justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "flex items-center gap-1.5 text-xs font-extrabold text-[#14532D] dark:text-emerald-400",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3.5 shrink-0 text-[#C58A32]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "truncate",
												children: p.lokasiSpesifik
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-3 text-xl font-black text-foreground line-clamp-2 min-h-[3.25rem] flex items-center leading-snug group-hover:text-[#064E3B] dark:group-hover:text-emerald-300 transition-colors",
											children: p.nama
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed font-medium line-clamp-3 min-h-[3.75rem]",
											children: p.deskripsiLengkap || p.highlight
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4 flex flex-wrap gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "inline-flex items-center gap-1 rounded-full bg-[#E8F1E8] px-2.5 py-1 text-[11px] font-bold text-[#14532D]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3.5 text-[#2F7D4A]" }), "Panduan Lokal"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "inline-flex items-center gap-1 rounded-full bg-[#E8F1E8] px-2.5 py-1 text-[11px] font-bold text-[#14532D]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3.5 text-[#2F7D4A]" }), "Aktivitas CBT"]
											})]
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-4 pt-3 border-t border-black/5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceLink, { source: p.source })
									})]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-t border-border p-4 sm:p-5 bg-surface/60 flex items-center justify-between gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-extrabold text-muted-foreground uppercase tracking-wider block",
									children: "Status Program"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-black text-[#14532D]",
									children: p.hargaText
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setActiveModalPaket(p),
										className: "inline-flex items-center gap-1 rounded-full border border-[#14532D]/40 bg-[#14532D]/5 px-3 py-2 text-xs font-extrabold text-[#14532D] hover:bg-[#14532D] hover:text-white transition-all cursor-pointer min-h-[44px]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Detail Paket" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-3.5" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setOpenPlanner(true),
										className: "inline-flex items-center gap-1.5 rounded-full bg-[#C58A32] hover:bg-[#A87226] px-3.5 py-2 text-xs font-black text-white shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer ring-1 ring-[#DCA348] min-h-[44px]",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, { className: "size-3.5 shrink-0 text-white" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "hidden sm:inline",
												children: "Rencanakan"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "sm:hidden",
												children: "Pesan"
											})
										]
									})]
								})]
							})]
						}, p.id))
					})
				]
			}),
			activeModalPaket && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: !!activeModalPaket,
				onOpenChange: (open) => !open && setActiveModalPaket(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-3xl max-h-[90vh] flex flex-col overflow-hidden rounded-3xl p-0 border-0 bg-card shadow-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative shrink-0 aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: activeModalPaket.image,
									alt: activeModalPaket.nama,
									className: "size-full object-cover"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-overlay absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/30" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-20",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setActiveModalPaket(null),
										className: "inline-flex items-center gap-2 rounded-full bg-emerald-800/90 hover:bg-emerald-900 px-4 py-2 text-xs font-black text-white backdrop-blur-md transition-all shadow-lg ring-1 ring-white/30 active:scale-95 cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Kembali Ke Halaman Sebelumnya" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full bg-gold/90 px-3 py-1 text-[11px] font-black text-gold-foreground backdrop-blur-md shadow-md",
											children: activeModalPaket.kategori
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setActiveModalPaket(null),
											className: "grid size-10 place-items-center rounded-full bg-black/80 hover:bg-black text-white hover:text-gold border border-white/40 backdrop-blur-md transition-all shadow-xl hover:scale-110 active:scale-95 cursor-pointer",
											"aria-label": "Tutup Detail",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-6 stroke-[2.5]" })
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute bottom-4 left-5 right-5 text-white z-10",
									children: [activeModalPaket.highlight && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-block rounded-md bg-gold/25 px-2.5 py-0.5 text-[11px] font-black text-gold uppercase tracking-wider backdrop-blur-md ring-1 ring-gold/40 mb-1",
										children: activeModalPaket.highlight
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
										className: "text-xl sm:text-2xl lg:text-3xl font-black text-white leading-tight",
										children: activeModalPaket.nama
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6 sm:p-8 space-y-6 overflow-y-auto flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 rounded-2xl bg-surface p-4 border border-border",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start gap-2.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4 text-gold shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] font-bold text-muted-foreground uppercase block",
												children: "Lokasi Kunjungan"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs font-extrabold text-foreground",
												children: activeModalPaket.lokasiSpesifik
											})] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start gap-2.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-4 text-primary shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] font-bold text-muted-foreground uppercase block",
												children: "Estimasi Durasi"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs font-extrabold text-foreground",
												children: activeModalPaket.durasi
											})] })]
										}),
										activeModalPaket.targetVisitor && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start gap-2.5 sm:col-span-2 lg:col-span-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-4 text-amber-500 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] font-bold text-muted-foreground uppercase block",
												children: "Cocok Untuk"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs font-extrabold text-foreground",
												children: activeModalPaket.targetVisitor
											})] })]
										})
									]
								}),
								activeModalPaket.deskripsiLengkap && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-border bg-card p-5 shadow-sm space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
										className: "text-xs font-extrabold tracking-wider text-primary uppercase flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-4 text-primary" }), "Deskripsi Umum Paket:"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs sm:text-sm text-foreground leading-relaxed font-medium",
										children: activeModalPaket.deskripsiLengkap
									})]
								}),
								activeModalPaket.itineraryHari1 && activeModalPaket.itineraryHari2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-6 border-t border-border pt-5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "size-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "text-xs font-extrabold text-primary uppercase tracking-wider",
												children: "Rangkaian Pengalaman (Itinerary Lengkap 2D1N)"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-2xl bg-gold/5 border border-gold/30 p-5 space-y-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between border-b border-gold/20 pb-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs font-black text-gold uppercase tracking-wider",
													children: "Hari Pertama"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
													className: "text-xs sm:text-sm font-extrabold text-foreground",
													children: activeModalPaket.subHeaderHari1 || "Creative & Green Experience"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "relative pl-5 border-l-2 border-gold/40 space-y-5",
												children: activeModalPaket.itineraryHari1.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "relative space-y-1.5",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -left-[27px] top-1 size-3 rounded-full bg-gold ring-4 ring-background" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex flex-wrap items-center gap-2",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																className: "rounded-md bg-gold/20 px-2 py-0.5 text-[11px] font-black text-gold",
																children: [item.waktu, " WIB"]
															}), item.kategori && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "rounded-full bg-surface px-2.5 py-0.5 text-[10px] font-extrabold text-foreground ring-1 ring-border",
																children: item.kategori
															})]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h6", {
															className: "font-extrabold text-foreground text-sm",
															children: item.kegiatan
														}),
														item.deskripsi && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-xs text-muted-foreground leading-relaxed font-medium",
															children: item.deskripsi
														}),
														item.note && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "mt-1.5 inline-flex items-center gap-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 px-3 py-1 text-[11px] font-bold text-amber-900 dark:text-amber-200",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "size-3.5 text-amber-600 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Catatan: ", item.note] })]
														})
													]
												}, i))
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-2xl bg-primary/5 border border-primary/30 p-5 space-y-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between border-b border-primary/20 pb-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs font-black text-primary uppercase tracking-wider",
													children: "Hari Kedua"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
													className: "text-xs sm:text-sm font-extrabold text-foreground",
													children: activeModalPaket.subHeaderHari2 || "Nature & Cultural Experience"
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "relative pl-5 border-l-2 border-primary/40 space-y-5",
												children: activeModalPaket.itineraryHari2.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "relative space-y-1.5",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -left-[27px] top-1 size-3 rounded-full bg-primary ring-4 ring-background" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex flex-wrap items-center gap-2",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																className: "rounded-md bg-primary/20 px-2 py-0.5 text-[11px] font-black text-primary",
																children: [item.waktu, " WIB"]
															}), item.kategori && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "rounded-full bg-surface px-2.5 py-0.5 text-[10px] font-extrabold text-foreground ring-1 ring-border",
																children: item.kategori
															})]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h6", {
															className: "font-extrabold text-foreground text-sm",
															children: item.kegiatan
														}),
														item.deskripsi && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-xs text-muted-foreground leading-relaxed font-medium",
															children: item.deskripsi
														})
													]
												}, i))
											})]
										})
									]
								}) : activeModalPaket.itinerary ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border-t border-border pt-5 space-y-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "size-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "text-xs font-extrabold text-primary uppercase tracking-wider",
											children: "Rangkaian Pengalaman (Itinerary Lengkap)"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "relative pl-5 border-l-2 border-primary/40 space-y-5",
										children: activeModalPaket.itinerary.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative space-y-1.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -left-[27px] top-1 size-3 rounded-full bg-primary ring-4 ring-background" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex flex-wrap items-center gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "rounded-md bg-primary/10 px-2.5 py-0.5 text-[11px] font-black text-primary border border-primary/20",
														children: [item.waktu, " WIB"]
													}), item.kategori && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "rounded-full bg-surface px-2.5 py-0.5 text-[10px] font-extrabold text-foreground ring-1 ring-border",
														children: item.kategori
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h6", {
													className: "font-extrabold text-foreground text-sm",
													children: item.kegiatan
												}),
												item.deskripsi && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs text-muted-foreground leading-relaxed font-medium",
													children: item.deskripsi
												})
											]
										}, i))
									})]
								}) : null,
								activeModalPaket.fasilitas && activeModalPaket.fasilitas.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-border bg-surface p-5 space-y-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
										className: "text-xs font-extrabold tracking-wider text-primary uppercase flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4 text-primary" }), "Fasilitas & Inklusi Paket:"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-wrap gap-2",
										children: activeModalPaket.fasilitas.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1.5 rounded-full bg-card px-3.5 py-1.5 text-xs font-bold text-foreground ring-1 ring-border shadow-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3.5 text-emerald-600 shrink-0" }), f]
										}, i))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceLink, { source: activeModalPaket.source })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "shrink-0 bg-surface px-6 py-4 sm:px-8 flex flex-wrap items-center justify-between gap-3 border-t border-border z-20",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setActiveModalPaket(null),
								className: "inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-6 py-3 text-xs font-black text-primary hover:bg-primary hover:text-primary-foreground shadow-md transition-all active:scale-95 cursor-pointer",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "hidden sm:inline",
										children: "Kembali Ke Halaman Sebelumnya"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline sm:hidden",
										children: "Kembali"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => {
									setActiveModalPaket(null);
									setOpenPlanner(true);
								},
								className: "inline-flex items-center gap-2 rounded-full bg-[#064E3B] hover:bg-[#166534] px-6 py-3 text-xs font-black text-white shadow-card transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer ring-2 ring-emerald-400/40",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, { className: "size-4 text-amber-300" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Rencanakan Kunjungan" })]
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TripPlannerModal, {
				open: openPlanner,
				onOpenChange: setOpenPlanner
			})
		]
	});
}
function CultureAndMarketplace() {
	const siteData = useSiteData();
	const village = getVillage("ekang-anculai");
	const [activeTab, setActiveTab] = (0, import_react.useState)("semua");
	const filtered = (siteData?.umkmList !== void 0 ? siteData.umkmList : village?.umkmList || []).filter((item) => {
		const kat = item.kategori || "";
		if (activeTab === "kuliner") return kat.includes("Kuliner") || kat.includes("Pangan");
		if (activeTab === "kerajinan") return kat.includes("Kerajinan") || kat.includes("Khas") || kat.includes("Kreatif");
		if (activeTab === "oleholeh") return kat.includes("Oleh-oleh") || kat.includes("Akomodasi") || kat.includes("Ekowisata");
		return true;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "umkm-budaya",
		className: "w-full scroll-mt-24 bg-[#FEFCE8] dark:bg-amber-950/40 py-20 sm:py-24 border-b border-amber-200/60 dark:border-stone-800",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					align: "center",
					eyebrow: "PRODUK EKONOMI KREATIF & USAHA LOKAL DESA",
					title: "Produk Ekonomi Kreatif dan Usaha Lokal Desa",
					description: "Kenali hasil kreativitas dan usaha masyarakat Desa Ekang Anculai melalui produk lokal, kerajinan, kuliner, dan karya ekonomi kreatif yang telah tersedia."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 flex flex-wrap items-center justify-center gap-2",
					children: [
						{
							id: "semua",
							label: "Semua Produk & Usaha Lokal"
						},
						{
							id: "kuliner",
							label: "Kuliner & Olahan Pangan"
						},
						{
							id: "kerajinan",
							label: "Kerajinan & Produk Khas"
						},
						{
							id: "oleholeh",
							label: "Oleh-oleh & Produk Kreatif"
						}
					].map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setActiveTab(tab.id),
						className: `rounded-full px-5 py-2.5 text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${activeTab === tab.id ? "bg-primary text-primary-foreground shadow-card" : "bg-card text-muted-foreground ring-1 ring-border hover:bg-accent hover:text-primary"}`,
						children: tab.label
					}, tab.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
					children: filtered.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-lift group flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all duration-500 hover:border-primary/40 hover:shadow-lift",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-[4/3] overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: item.image,
									alt: item.nama,
									width: 800,
									height: 600,
									loading: "lazy",
									decoding: "async",
									className: "size-full object-cover transition-transform duration-700 group-hover:scale-108"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-overlay absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute top-3 left-3 rounded-full bg-background/90 px-3 py-1 text-[11px] font-extrabold text-foreground backdrop-blur-md shadow-sm border border-border/40",
									children: item.kategori
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute top-3 right-3 rounded-full bg-emerald-700 px-2.5 py-1 text-[10px] font-black text-white backdrop-blur-md shadow-md border border-emerald-400/40",
									children: "Produk Desa"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-center gap-1 text-[11px] font-extrabold text-primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3.5 text-gold shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.lokasi || "Desa Ekang Anculai" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "mt-2 line-clamp-1 text-lg font-black text-foreground group-hover:text-primary transition-colors",
									children: item.nama
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs sm:text-sm font-medium leading-relaxed text-muted-foreground line-clamp-3",
									children: item.deskripsi
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceLink, { source: item.source })
								})
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "p-5 pt-0 border-t border-border/40 mt-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between pt-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-black text-primary bg-emerald-500/10 px-3 py-1.5 rounded-full ring-1 ring-primary/20",
									children: item.hargaInfo
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `https://wa.me/${item.kontak || "6283166341280"}?text=Halo,%20saya%20tertarik%20dengan%20produk%20${encodeURIComponent(item.nama)}`,
									target: "_blank",
									rel: "noreferrer",
									"aria-label": `Pesan ${item.nama} via WhatsApp`,
									title: `Pesan ${item.nama} via WhatsApp`,
									className: "grid size-10 place-items-center rounded-full bg-emerald-600 text-white shadow-md transition-all duration-300 hover:bg-emerald-500 hover:scale-110 active:scale-95 ring-2 ring-emerald-500/30 cursor-pointer shrink-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-5 fill-current text-white" })
								})]
							})
						})]
					}, item.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-center text-xs text-muted-foreground italic",
					children: "Informasi usaha diperbarui berdasarkan sumber resmi yang tersedia. Hubungi pengelola/pemilik untuk informasi terbaru."
				})
			]
		})
	});
}
var MapCanvas = (0, import_react.lazy)(() => import("./MapCanvas-EOH43IVH.mjs"));
function MapSkeleton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid h-full min-h-[500px] w-full place-items-center bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-sm space-y-3 px-6 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "mx-auto h-4 w-32" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-44 w-full rounded-2xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-xs font-semibold text-muted-foreground animate-pulse",
					children: "Memuat peta interaktif Desa Wisata Ekang Anculai…"
				})
			]
		})
	});
}
function MapSection() {
	const [mounted, setMounted] = (0, import_react.useState)(false);
	const [activeTab, setActiveTab] = (0, import_react.useState)("leaflet");
	const [copied, setCopied] = (0, import_react.useState)(false);
	const siteData = useSiteData();
	(0, import_react.useEffect)(() => {
		setMounted(true);
	}, []);
	const village = villages[0];
	const coords = village?.koordinat || DEFAULT_VILLAGE_COORDINATES;
	const address = village?.alamat || "Jl. Jendral Sudirman, Kp. Sukoharjo, Desa Ekang Anculai, Kec. Teluk Sebong, Kab. Bintan, Kepulauan Riau 29151";
	const landmarks = (0, import_react.useMemo)(() => {
		const defaultLandmarks = village?.landmarks || [];
		if (siteData.landmarkList && siteData.landmarkList.length > 0) return siteData.landmarkList.map((lm) => {
			const found = defaultLandmarks.find((d) => d.id === lm.id || d.nama.toLowerCase() === lm.nama.toLowerCase());
			return {
				...lm,
				lat: typeof lm.lat === "number" ? lm.lat : found?.lat ?? coords[0],
				lng: typeof lm.lng === "number" ? lm.lng : found?.lng ?? coords[1]
			};
		});
		return defaultLandmarks;
	}, [
		siteData.landmarkList,
		village,
		coords
	]);
	const copyCoordinates = () => {
		const coordsText = `${coords[0].toFixed(6)}, ${coords[1].toFixed(6)}`;
		if (navigator.clipboard) {
			navigator.clipboard.writeText(coordsText);
			setCopied(true);
			toast.success(`Koordinat GPS (${coordsText}) berhasil disalin!`);
			setTimeout(() => setCopied(false), 2500);
		}
	};
	const transitList = village?.transitInfo || [
		{
			id: "tr-lagoi",
			asal: "Dari Lagoi Ferry Terminal (SG)",
			waktuEstimasi: "± 15–20 Menit",
			via: "via Jl. Bintan Resorts",
			mode: "ship"
		},
		{
			id: "tr-rhf",
			asal: "Dari Bandara RHF Tanjungpinang",
			waktuEstimasi: "± 45–50 Menit",
			via: "via Jl. Lintas Barat Bintan",
			mode: "plane"
		},
		{
			id: "tr-roro",
			asal: "Pelabuhan Roro Tanjung Uban",
			waktuEstimasi: "± 25–30 Menit",
			via: "Akses penyeberangan dari Batam",
			mode: "ship"
		},
		{
			id: "tr-tpi",
			asal: "Pelabuhan Sri Bintan Pura TPI",
			waktuEstimasi: "± 50–60 Menit",
			via: "Dari Pusat Kota Tanjungpinang",
			mode: "car"
		}
	];
	const getTransitIcon = (mode) => {
		switch (mode) {
			case "plane": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plane, { className: "size-5 text-amber-400" });
			case "car": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Car, { className: "size-5 text-purple-400" });
			default: return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ship, { className: "size-5 text-sky-400" });
		}
	};
	const googleMapsRouteUrl = `https://www.google.com/maps/dir/?api=1&destination=${coords[0]},${coords[1]}`;
	const wazeRouteUrl = `https://waze.com/ul?ll=${coords[0]},${coords[1]}&navigate=yes`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "peta",
		className: "w-full scroll-mt-24 bg-[#064E3B] text-white py-16 sm:py-24 border-y border-emerald-900/60 shadow-2xl relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -top-40 -right-40 size-96 rounded-full bg-emerald-500/10 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -bottom-40 -left-40 size-96 rounded-full bg-amber-500/10 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						align: "center",
						dark: true,
						eyebrow: "Peta & Aksesibilitas",
						title: "Lokasi & Rute Akses Desa Wisata Ekang Anculai",
						description: "Peta interaktif untuk membantu menemukan lokasi wisata, fasilitas, dan titik penting di Desa Wisata Ekang Anculai."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
						children: transitList.map((tr) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-3xl border border-emerald-800/80 bg-white/5 backdrop-blur-md p-5 shadow-soft transition-all duration-300 hover:bg-white/10 hover:border-emerald-400/40 hover:-translate-y-0.5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-12 shrink-0 place-items-center rounded-2xl bg-white/10 border border-white/10",
									children: getTransitIcon(tr.mode)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-black text-white",
										children: tr.asal
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-base font-extrabold text-[#C58A32]",
										children: tr.waktuEstimasi
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-emerald-200/80",
										children: tr.via
									})
								] })]
							})
						}, tr.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-center text-[11px] italic text-emerald-200/70",
						children: "* Perkiraan waktu perjalanan dapat berubah sesuai kondisi lalu lintas dan cuaca."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 overflow-hidden rounded-3xl border border-border/80 bg-card shadow-2xl text-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center justify-between gap-3 border-b border-border bg-surface px-5 py-3.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "flex size-2.5 rounded-full bg-emerald-500 animate-pulse" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-xs font-bold text-foreground",
											children: [
												"Koordinat GPS:",
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "font-mono text-emerald-700",
													children: [
														coords[0].toFixed(4),
														"° N, ",
														coords[1].toFixed(4),
														"° E"
													]
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: copyCoordinates,
											className: "ml-1 inline-flex items-center gap-1 rounded-lg border border-border bg-card px-2.5 py-1 text-[11px] font-semibold text-muted-foreground transition-colors hover:text-foreground hover:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/40",
											title: "Salin Koordinat GPS",
											"aria-label": "Salin Koordinat GPS",
											children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3 text-emerald-600" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: copied ? "Tersalin" : "Salin" })]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center rounded-2xl bg-card p-1 border border-border shadow-inner",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setActiveTab("leaflet"),
										className: `flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${activeTab === "leaflet" ? "bg-[#14532D] text-white shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
										"aria-label": "Tampilkan Peta Interaktif",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Map, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Peta Interaktif" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setActiveTab("google"),
										className: `flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${activeTab === "google" ? "bg-[#14532D] text-white shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
										"aria-label": "Tampilkan Google Maps Embed",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Google Maps Embed" })]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative min-h-[360px] lg:min-h-[520px] h-[380px] sm:h-[460px] lg:h-[560px] w-full bg-[#f3f4f6]",
								children: activeTab === "leaflet" ? mounted && village ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
									fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapSkeleton, {}),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapCanvas, {
										items: [village],
										landmarks
									})
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapSkeleton, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative size-full min-h-[360px] lg:min-h-[520px]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
										title: "Google Maps Desa Ekang Anculai",
										src: `https://maps.google.com/maps?q=${coords[0]},${coords[1]}&hl=id&z=15&output=embed`,
										width: "100%",
										height: "100%",
										style: { border: 0 },
										allowFullScreen: true,
										loading: "lazy",
										referrerPolicy: "no-referrer-when-downgrade",
										className: "size-full min-h-[360px] lg:min-h-[520px]"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute top-3 right-3 z-10",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: googleMapsRouteUrl,
											target: "_blank",
											rel: "noopener noreferrer",
											className: "inline-flex items-center gap-1.5 rounded-xl bg-white/95 px-3.5 py-2 text-xs font-extrabold text-neutral-800 shadow-md hover:bg-white transition-all border border-neutral-200",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Buka Google Maps Penuh" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5 text-primary" })]
										})
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center justify-between gap-3 border-t border-border bg-surface px-5 py-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid size-9 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "size-4" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-extrabold text-foreground",
										children: village?.nama
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-muted-foreground line-clamp-1",
										children: address
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-2.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: googleMapsRouteUrl,
											target: "_blank",
											rel: "noopener noreferrer",
											className: "inline-flex items-center gap-2 rounded-full bg-[#14532D] px-5 py-2.5 text-xs font-extrabold text-white shadow-card hover:bg-[#064E3B] transition-all",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "size-3.5" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Mulai Navigasi Google Maps" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3" })
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: wazeRouteUrl,
											target: "_blank",
											rel: "noopener noreferrer",
											className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2.5 text-xs font-extrabold text-foreground hover:border-primary/40 transition-colors",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Navigasi Waze" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: `https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20Pengelola%20Desa%20Ekang%20Anculai,%20mohon%20info%20panduan%20rute%20dan%20akses%20ke%20lokasi`,
											target: "_blank",
											rel: "noopener noreferrer",
											className: "inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2.5 text-xs font-extrabold text-emerald-700 dark:text-emerald-300 hover:bg-emerald-500/20 transition-colors",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Tanya Rute WA" })]
										})
									]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 rounded-3xl border border-emerald-800/80 bg-white/5 backdrop-blur-md p-6 text-white text-xs leading-relaxed flex flex-col md:flex-row items-start md:items-center justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid size-9 shrink-0 place-items-center rounded-2xl bg-[#C58A32]/20 text-[#F7F4EA] font-bold border border-[#C58A32]/30",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-extrabold text-sm text-white",
								children: "Informasi Jam Operasional & Layanan Wisata"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-0.5 text-emerald-100/80 text-xs",
								children: [
									"Kawasan wisata desa buka setiap hari pukul ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "08.00 – 17.00 WIB" }),
									". Akses jalan utama desa dapat dilalui kendaraan roda 2, mobil pribadi, hingga bus pariwisata berukuran sedang dan besar dengan area parkir luas."
								]
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20Admin%20Desa%20Wisata%20Ekang%20Anculai,%20saya%20ingin%20reservasi%20layanan%20penjemputan/transportasi%20wisata`,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex shrink-0 items-center gap-2 rounded-full bg-[#C58A32] hover:bg-[#A87226] px-5 py-2.5 font-black text-white shadow-md transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "size-3.5" }), "Reservasi Transportasi / Penjemputan"]
						})]
					})
				]
			})
		]
	});
}
function CardThumbnail({ image, title, kategori, sourceUrl, type = "kegiatan", isIllustration = false }) {
	const [hasError, setHasError] = (0, import_react.useState)(false);
	const showImage = Boolean(image && image.trim() !== "" && !hasError);
	const hasValidArticle = isSpecificArticleUrl(sourceUrl);
	const getCategoryIcon = () => {
		const k = (kategori || "").toLowerCase();
		if (k.includes("prestasi") || k.includes("penghargaan") || k.includes("juara")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "size-7 text-amber-500" });
		if (k.includes("statistik") || k.includes("bps")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, { className: "size-7 text-blue-500" });
		if (k.includes("bumdes") || k.includes("ekonomi")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "size-7 text-emerald-600" });
		if (k.includes("pangan") || k.includes("pom") || k.includes("sertifikasi")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-7 text-rose-500" });
		if (k.includes("musyawarah") || k.includes("tata kelola") || k.includes("pemerintahan")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-7 text-indigo-500" });
		if (k.includes("bantuan") || k.includes("sosial") || k.includes("blt") || k.includes("stunting")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartHandshake, { className: "size-7 text-teal-600" });
		if (k.includes("reog") || k.includes("budaya") || k.includes("seni") || k.includes("pawai")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Drama, { className: "size-7 text-purple-500" });
		if (k.includes("batik") || k.includes("kriya")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Palette, { className: "size-7 text-amber-600" });
		if (k.includes("kesehatan") || k.includes("posyandu") || k.includes("germas")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "size-7 text-emerald-600" });
		if (k.includes("gotong royong") || k.includes("kerja bakti") || k.includes("pemuda")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-7 text-emerald-600" });
		return type === "berita" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "size-7 text-amber-600" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "size-7 text-emerald-600" });
	};
	const innerContent = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		showImage ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt: title,
				onError: () => setHasError(true),
				className: "size-full object-cover transition-transform duration-500 group-hover:scale-105",
				loading: "lazy"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-full bg-black/70 px-2.5 py-0.5 text-[9px] font-bold text-white backdrop-blur shadow-sm",
				children: image?.startsWith("http") ? "🌐 Foto Publikasi" : "📷 Dokumentasi Asli"
			})
		] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `flex size-full flex-col items-center justify-center p-5 text-center transition-all duration-300 ${type === "berita" ? "bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-primary/10 border-b border-amber-500/20" : "bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-emerald-500/15 border-b border-emerald-500/20"}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex size-12 items-center justify-center rounded-2xl bg-card/90 shadow-sm border border-border/60 transition-transform duration-300 group-hover:scale-110",
				children: getCategoryIcon()
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-2.5 text-[10px] text-muted-foreground font-medium",
				children: type === "berita" ? "Informasi Publik Terverifikasi" : "Kegiatan Masyarakat Desa"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute top-3 left-3 rounded-full bg-background/90 px-2.5 py-1 text-[10px] font-bold text-foreground backdrop-blur shadow-sm ring-1 ring-border/50",
			children: kategori
		}),
		hasValidArticle && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-black/65 px-2 py-0.5 text-[9px] font-extrabold text-white backdrop-blur shadow-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Rujukan Resmi" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-emerald-400",
				children: "↗"
			})]
		})
	] });
	if (hasValidArticle) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: sourceUrl,
		target: "_blank",
		rel: "noopener noreferrer",
		className: "relative block aspect-[16/10] w-full overflow-hidden bg-muted/60 cursor-pointer select-none group",
		title: `Buka rujukan publikasi resmi: ${title}`,
		children: innerContent
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative block aspect-[16/10] w-full overflow-hidden bg-muted/60 select-none",
		children: innerContent
	});
}
function EventCalendar() {
	const [activeTab, setActiveTab] = (0, import_react.useState)("kegiatan");
	const [currentSlide, setCurrentSlide] = (0, import_react.useState)(0);
	const [beritaSlide, setBeritaSlide] = (0, import_react.useState)(0);
	const siteData = useSiteData();
	const village = getVillage("ekang-anculai");
	const rawKegiatanList = siteData?.kegiatanList !== void 0 ? siteData.kegiatanList : village?.kegiatanList || [];
	const rawBeritaList = berita || [];
	const kegiatanList = rawKegiatanList;
	const validBeritaList = rawBeritaList;
	(0, import_react.useEffect)(() => {
		if (typeof window !== "undefined") {
			if (window.location.hash === "#kegiatan") setActiveTab("kegiatan");
			else if (window.location.hash === "#berita" || window.location.hash === "#event-berita") setActiveTab("berita");
		}
	}, []);
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const interval = setInterval(() => {
			if (document.visibilityState !== "visible") return;
			if (activeTab === "kegiatan") {
				const totalSlides = Math.ceil(kegiatanList.length / 6) || 1;
				if (totalSlides > 1) setCurrentSlide((prev) => (prev + 1) % totalSlides);
			} else {
				const totalSlides = Math.ceil(validBeritaList.length / 6) || 1;
				if (totalSlides > 1) setBeritaSlide((prev) => (prev + 1) % totalSlides);
			}
		}, 5e3);
		return () => clearInterval(interval);
	}, [
		activeTab,
		kegiatanList.length,
		validBeritaList.length
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "kegiatan",
		className: "w-full scroll-mt-24 bg-[#F0FDF4] dark:bg-emerald-950/50 py-20 sm:py-24 border-b border-emerald-200/60 dark:border-slate-800",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					align: "center",
					eyebrow: "Kegiatan & Publikasi Faktual",
					title: "Kegiatan Desa & Berita Resmi Ekang Anculai",
					description: "Laporan kegiatan pemerintah desa, musyawarah pembangunan, penyaluran BLT, dan prestasi resmi."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex rounded-full bg-card p-1.5 ring-1 ring-border shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setActiveTab("kegiatan"),
							className: `inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-extrabold transition-all cursor-pointer ${activeTab === "kegiatan" ? "bg-primary text-primary-foreground shadow-card" : "text-muted-foreground hover:text-foreground"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "size-4" }), "Kegiatan Desa"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setActiveTab("berita"),
							className: `inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-extrabold transition-all cursor-pointer ${activeTab === "berita" ? "bg-primary text-primary-foreground shadow-card" : "text-muted-foreground hover:text-foreground"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "size-4" }), "Berita & Prestasi Resmi"]
						})]
					})
				}),
				activeTab === "kegiatan" && (() => {
					const pageSize = 6;
					const totalSlides = Math.ceil(kegiatanList.length / pageSize) || 1;
					const safeSlide = Math.min(Math.max(0, currentSlide), totalSlides - 1);
					const paginatedItems = kegiatanList.slice(safeSlide * pageSize, (safeSlide + 1) * pageSize);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 space-y-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3 transition-all duration-300",
							children: paginatedItems.map((ev) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "card-lift group flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card shadow-card hover:border-primary/40 transition-all",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardThumbnail, {
									image: ev.image,
									title: ev.judul,
									kategori: ev.kategori,
									sourceUrl: ev.source?.url,
									type: "kegiatan"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[11px] font-bold text-muted-foreground",
											children: ev.tanggal
										}),
										isSpecificArticleUrl(ev.source?.url) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: ev.source.url,
											target: "_blank",
											rel: "noopener noreferrer",
											className: "mt-1 block line-clamp-2 text-base font-extrabold text-foreground leading-snug hover:text-primary transition-colors",
											children: ev.judul
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-1 block line-clamp-2 text-base font-extrabold text-foreground leading-snug",
											children: ev.judul
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 line-clamp-3 text-xs text-muted-foreground leading-relaxed",
											children: ev.deskripsi
										})
									]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "p-6 pt-0 border-t border-border mt-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceLink, { source: ev.source })
								})]
							}, ev.id))
						}), totalSlides > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-border/60",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setCurrentSlide((prev) => Math.max(0, prev - 1)),
									disabled: safeSlide === 0,
									className: "inline-flex items-center gap-1 rounded-full border border-border bg-card px-4 py-2 text-xs font-extrabold text-foreground shadow-sm hover:bg-accent disabled:opacity-40 disabled:pointer-events-none transition-all cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Sebelumnya" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setCurrentSlide((prev) => Math.min(totalSlides - 1, prev + 1)),
									disabled: safeSlide === totalSlides - 1,
									className: "inline-flex items-center gap-1 rounded-full border border-border bg-card px-4 py-2 text-xs font-extrabold text-foreground shadow-sm hover:bg-accent disabled:opacity-40 disabled:pointer-events-none transition-all cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Berikutnya" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-3.5" })]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-2",
								children: Array.from({ length: totalSlides }).map((_, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setCurrentSlide(idx),
									"aria-label": `Buka slide kegiatan ${idx + 1}`,
									className: `h-2.5 rounded-full transition-all duration-300 cursor-pointer ${safeSlide === idx ? "w-8 bg-primary shadow-sm ring-2 ring-primary/30" : "w-2.5 bg-border hover:bg-muted-foreground/40"}`
								}, idx))
							})]
						})]
					});
				})(),
				activeTab === "berita" && (() => {
					if (validBeritaList.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 rounded-2xl border border-border bg-card p-8 text-center shadow-soft",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "mx-auto size-12 text-primary/60" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 text-base font-extrabold text-foreground",
								children: "Publikasi Berita & Prestasi Resmi"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground max-w-md mx-auto",
								children: "Seluruh informasi prestasi dan kegiatan desa dapat diverifikasi langsung melalui dokumen publikasi resmi pemerintah daerah dan pengelola."
							})
						]
					});
					const pageSize = 6;
					const totalSlides = Math.ceil(validBeritaList.length / pageSize) || 1;
					const safeSlide = Math.min(Math.max(0, beritaSlide), totalSlides - 1);
					const paginatedItems = validBeritaList.slice(safeSlide * pageSize, (safeSlide + 1) * pageSize);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 space-y-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3 transition-all duration-300",
							children: paginatedItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "card-lift group flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card shadow-card hover:border-primary/40 transition-all",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardThumbnail, {
									image: item.image,
									title: item.judul,
									kategori: item.kategori,
									sourceUrl: item.source?.url,
									type: "berita"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[11px] font-bold text-muted-foreground",
											children: item.tanggal
										}),
										isSpecificArticleUrl(item.source?.url) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: item.source.url,
											target: "_blank",
											rel: "noopener noreferrer",
											className: "mt-1 block line-clamp-2 text-base font-extrabold text-foreground leading-snug hover:text-primary transition-colors",
											children: item.judul
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-1 block line-clamp-2 text-base font-extrabold text-foreground leading-snug",
											children: item.judul
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 line-clamp-3 text-xs text-muted-foreground leading-relaxed",
											children: item.ringkas
										})
									]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "p-6 pt-0 border-t border-border/40 mt-auto",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "pt-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceLink, { source: item.source })
									})
								})]
							}, item.id))
						}), totalSlides > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-border/60",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setBeritaSlide((prev) => Math.max(0, prev - 1)),
									disabled: safeSlide === 0,
									className: "inline-flex items-center gap-1 rounded-full border border-border bg-card px-4 py-2 text-xs font-extrabold text-foreground shadow-sm hover:bg-accent disabled:opacity-40 disabled:pointer-events-none transition-all cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Sebelumnya" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setBeritaSlide((prev) => Math.min(totalSlides - 1, prev + 1)),
									disabled: safeSlide === totalSlides - 1,
									className: "inline-flex items-center gap-1 rounded-full border border-border bg-card px-4 py-2 text-xs font-extrabold text-foreground shadow-sm hover:bg-accent disabled:opacity-40 disabled:pointer-events-none transition-all cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Berikutnya" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-3.5" })]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-2",
								children: Array.from({ length: totalSlides }).map((_, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setBeritaSlide(idx),
									"aria-label": `Buka slide berita ${idx + 1}`,
									className: `h-2.5 rounded-full transition-all duration-300 cursor-pointer ${safeSlide === idx ? "w-8 bg-primary shadow-sm ring-2 ring-primary/30" : "w-2.5 bg-border hover:bg-muted-foreground/40"}`
								}, idx))
							})]
						})]
					});
				})()
			]
		})
	});
}
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
function ReviewsAndFaqSection() {
	const siteData = useSiteData();
	const village = getVillage("ekang-anculai");
	const reviewsList = siteData?.reviews !== void 0 ? siteData.reviews : village?.reviews || [];
	const faqsList = siteData?.faqs !== void 0 && siteData.faqs.length > 0 ? siteData.faqs : village?.faqs || [];
	const whatsapp = siteData?.villageInfo?.whatsapp || village?.whatsapp || "6287866331231";
	const [openModal, setOpenModal] = (0, import_react.useState)(false);
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const [nama, setNama] = (0, import_react.useState)("");
	const [asal, setAsal] = (0, import_react.useState)("");
	const [rating, setRating] = (0, import_react.useState)(5);
	const [komentar, setKomentar] = (0, import_react.useState)("");
	const [tipe, setTipe] = (0, import_react.useState)("Keluarga");
	const handleAddReview = async (e) => {
		e.preventDefault();
		if (!nama || !komentar) {
			toast.error("Mohon lengkapi nama dan komentar Anda.");
			return;
		}
		setIsSubmitting(true);
		try {
			const res = await submitPublicReviewServerFn({ data: {
				nama,
				asal: asal || "Wisatawan",
				rating,
				komentar,
				tipeWisatawan: tipe
			} });
			if (res?.success) {
				toast.success(res.message || "Terima kasih! Ulasan Anda telah berhasil dikirim dan menunggu moderasi tim pengelola.");
				setOpenModal(false);
				setNama("");
				setAsal("");
				setKomentar("");
			} else toast.error(res?.message || "Gagal mengirimkan ulasan.");
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Terjadi kesalahan saat mengirim ulasan.");
		} finally {
			setIsSubmitting(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "ulasan-faq",
		className: "w-full scroll-mt-24 bg-[#F5F1E8] dark:bg-stone-900/90 py-20 sm:py-24 border-b border-stone-300/60 dark:border-zinc-800",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center justify-center text-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						align: "center",
						eyebrow: "Ulasan & Pengalaman",
						title: "Apa Kata Wisatawan Tentang Ekang Anculai?",
						description: "Pengalaman berkesan wisatawan mancanegara, keluarga, dan pasangan yang telah berkunjung."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setOpenModal(true),
						className: "inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-extrabold text-primary-foreground shadow-card hover:bg-emerald-deep cursor-pointer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), "Tulis Ulasan Pengalaman"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
					children: reviewsList.map((rev) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-lift flex flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-1 text-amber-500",
								children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: `size-4 ${i < rev.rating ? "fill-amber-400 text-amber-400" : "text-border"}` }, i))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-surface px-3 py-1 text-[11px] font-bold text-muted-foreground",
								children: rev.tipeWisatawan
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-sm leading-relaxed text-foreground/90 italic",
							children: [
								"\"",
								rev.komentar,
								"\""
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex items-center gap-3 border-t border-border pt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: rev.avatar,
								alt: rev.nama,
								className: "size-10 rounded-full object-cover ring-2 ring-primary/20"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-extrabold text-foreground",
								children: rev.nama
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground",
								children: [
									"Asal ",
									rev.asal,
									" • ",
									rev.tanggal
								]
							})] })]
						})]
					}, rev.id))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-20 rounded-3xl border border-border bg-surface p-6 sm:p-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-b border-border pb-6 text-center flex flex-col items-center justify-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-bold text-primary uppercase",
							children: "Panduan & Tanya Jawab"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-1 text-2xl font-extrabold text-foreground sm:text-3xl text-center",
							children: "Pertanyaan Sering Diajukan (FAQ)"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
						type: "single",
						collapsible: true,
						className: "mt-6 space-y-3",
						children: faqsList.map((faq, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
							value: `faq-${i}`,
							className: "rounded-2xl border border-border bg-card px-5 py-1 shadow-soft",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
								className: "text-left font-extrabold text-foreground text-sm sm:text-base hover:no-underline hover:text-primary",
								children: faq.pertanyaan
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
								className: "text-sm leading-relaxed text-muted-foreground pt-1 pb-4",
								children: faq.jawaban
							})]
						}, i))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 overflow-hidden rounded-3xl bg-gradient-to-br from-[#064E3B] via-[#047857] to-[#166534] p-8 sm:p-10 text-white shadow-2xl relative",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-amber-300 backdrop-blur-md",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5 text-amber-300" }), "Layanan Informasi Reservasi"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 text-2xl sm:text-3xl font-black tracking-tight text-white",
								children: "Hubungi Pengelola"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-emerald-100 font-medium max-w-xl",
								children: "Tanyakan paket wisata, kunjungan, kegiatan, dan informasi terbaru Desa Wisata Ekang Anculai."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `https://wa.me/${whatsapp}?text=Halo%20Pengelola%20Desa%20Wisata%20Ekang%20Anculai,%20saya%20ingin%20tanya%20informasi%20wisata`,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex shrink-0 items-center gap-2 rounded-full bg-gold px-7 py-4 text-xs font-black text-gold-foreground shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-gold/90 cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Hubungi Pengelola via WA" })]
						})]
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open: openModal,
			onOpenChange: setOpenModal,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
				className: "max-w-md rounded-3xl p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "text-xl font-extrabold text-foreground",
					children: "Bagikan Pengalaman Wisata Anda"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
					className: "text-xs text-muted-foreground",
					children: "Ulasan Anda sangat berarti bagi pengembangan Desa Wisata Ekang Anculai."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleAddReview,
					className: "mt-4 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs font-bold text-muted-foreground",
							children: "Nama Anda"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							required: true,
							placeholder: "Contoh: Andi Permana",
							value: nama,
							onChange: (e) => setNama(e.target.value),
							className: "mt-1.5 w-full rounded-2xl border border-border bg-surface px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/20"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs font-bold text-muted-foreground",
								children: "Kota / Asal"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								placeholder: "Contoh: Batam / Singapura",
								value: asal,
								onChange: (e) => setAsal(e.target.value),
								className: "mt-1.5 w-full rounded-2xl border border-border bg-surface px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/20"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs font-bold text-muted-foreground",
								children: "Tipe Kunjungan"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: tipe,
								onChange: (e) => setTipe(e.target.value),
								className: "mt-1.5 w-full rounded-2xl border border-border bg-surface px-3 py-2.5 text-xs font-medium outline-none",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Keluarga",
										children: "Keluarga"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Pasangan",
										children: "Pasangan"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Mancanegara",
										children: "Mancanegara"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Rombongan / KKN",
										children: "Rombongan / KKN"
									})
								]
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs font-bold text-muted-foreground",
							children: "Bintang Rating"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 flex gap-2",
							children: [
								1,
								2,
								3,
								4,
								5
							].map((star) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setRating(star),
								className: "p-1 hover:scale-110 transition-transform",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: `size-6 ${star <= rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground/30"}` })
							}, star))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs font-bold text-muted-foreground",
							children: "Komentar / Pengalaman Anda"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							required: true,
							rows: 3,
							placeholder: "Ceritakan pengalaman Anda saat menjelajah Ekang Anculai...",
							value: komentar,
							onChange: (e) => setKomentar(e.target.value),
							className: "mt-1.5 w-full rounded-2xl border border-border bg-surface px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/20"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "w-full rounded-full bg-primary py-3 text-xs font-bold text-primary-foreground shadow-card hover:bg-emerald-deep",
							children: "Kirim Ulasan Resmi"
						})
					]
				})]
			})
		})]
	});
}
function Index() {
	const siteData = useSiteData();
	const villageInfo = siteData?.villageInfo;
	const reviews = siteData?.reviews || [];
	const faqs = siteData?.faqs || [];
	const villageSchema = getVillageJsonLd(villageInfo, reviews);
	const faqSchema = faqs.length > 0 ? getFaqJsonLd(faqs) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLdScript, { data: villageSchema }),
		faqSchema && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLdScript, { data: faqSchema }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			id: "main-content",
			tabIndex: -1,
			className: "outline-none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatsSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DestinationSpotlight, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CbtSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackagesSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CultureAndMarketplace, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventCalendar, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewsAndFaqSection, {})
			]
		})
	] });
}
//#endregion
export { Index as component };
