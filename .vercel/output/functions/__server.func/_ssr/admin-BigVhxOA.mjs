import { o as __toESM } from "../_runtime.mjs";
import { r as WHATSAPP_NUMBER } from "./schemas-DIbXu2MH.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { D as RefreshCw, Dt as Camera, E as RotateCcw, G as Lock, O as Plus, Ot as Calendar, S as Settings, St as ChevronLeft, T as Save, U as MapPin, _ as Sparkles, b as ShieldCheck, c as TriangleAlert, ct as Eye, d as Trash2, ft as Download, h as SquarePen, lt as EyeOff, m as Star, q as LoaderCircle, s as Upload, ut as ExternalLink, v as ShoppingBag, vt as CircleCheck, w as Search, xt as ChevronRight, z as MessageCircle } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { A as deleteUmkmServerFn, B as saveVillageInfoServerFn, C as checkDefaultPasswordServerFn, D as deleteKegiatanServerFn, E as deleteGaleriServerFn, F as saveDestinasiServerFn, H as updateReservationStatusServerFn, I as saveGaleriServerFn, L as saveKegiatanServerFn, M as getAdminDashboardDataServerFn, N as getSiteDataServerFn, O as deleteReservationServerFn, P as migrateBase64ServerFn, R as saveReviewServerFn, S as checkAdminAuthServerFn, T as deleteDestinasiServerFn, U as uploadImageServerFn, W as useSiteData, _ as DialogHeader, b as adminLogoutServerFn, d as logo_bintan_default, g as DialogFooter, j as extractOgImageServerFn, k as deleteReviewServerFn, m as DialogContent, p as Dialog, v as DialogTitle, w as cmsStore, x as changePasswordServerFn, y as adminLoginServerFn, z as saveUmkmServerFn } from "./router-HcJQJ-TI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-BigVhxOA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PaginationControls({ currentPage, totalPages, totalItems, pageSize, onPageChange }) {
	if (totalPages <= 1) return null;
	const startItem = (currentPage - 1) * pageSize + 1;
	const endItem = Math.min(currentPage * pageSize, totalItems);
	const pages = [];
	for (let i = 1; i <= totalPages; i++) pages.push(i);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border pt-4 text-xs font-semibold text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			"Menampilkan",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
				className: "text-foreground",
				children: [
					startItem,
					"–",
					endItem
				]
			}),
			" ",
			"dari ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
				className: "text-foreground",
				children: totalItems
			}),
			" data (Halaman",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
				className: "text-foreground",
				children: currentPage
			}),
			" dari ",
			totalPages,
			")"
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-1.5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					disabled: currentPage <= 1,
					onClick: () => onPageChange(currentPage - 1),
					className: "inline-flex items-center gap-1 rounded-xl border border-border bg-card px-3 py-1.5 text-xs font-bold text-foreground hover:bg-accent disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Sebelumnya" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden sm:flex items-center gap-1",
					children: pages.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => onPageChange(p),
						className: `size-8 rounded-xl font-extrabold text-xs transition-colors cursor-pointer ${currentPage === p ? "bg-primary text-primary-foreground shadow-soft" : "bg-surface text-foreground hover:bg-accent border border-border"}`,
						children: p
					}, p))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					disabled: currentPage >= totalPages,
					onClick: () => onPageChange(currentPage + 1),
					className: "inline-flex items-center gap-1 rounded-xl border border-border bg-card px-3 py-1.5 text-xs font-bold text-foreground hover:bg-accent disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Berikutnya" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-3.5" })]
				})
			]
		})]
	});
}
function getErrMsg(err, fallback) {
	if (err instanceof Error) return err.message;
	if (typeof err === "string") return err;
	return fallback;
}
function AdminDashboardPage() {
	const siteData = useSiteData();
	const villageInfo = siteData?.villageInfo;
	const kegiatanList = siteData?.kegiatanList || [];
	const landmarkList = siteData?.landmarkList || [];
	const umkmList = siteData?.umkmList || [];
	const reviews = siteData?.reviews || [];
	const galeriList = siteData?.galeriItems || [];
	const [isAuthenticated, setIsAuthenticated] = (0, import_react.useState)(false);
	const [usernameInput, setUsernameInput] = (0, import_react.useState)("");
	const [pinInput, setPinInput] = (0, import_react.useState)("");
	const [pinError, setPinError] = (0, import_react.useState)("");
	const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
	const [activeTab, setActiveTab] = (0, import_react.useState)("reservasi");
	const [reservationsList, setReservationsList] = (0, import_react.useState)([]);
	const [reservationStatusFilter, setReservationStatusFilter] = (0, import_react.useState)("all");
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [reservationPage, setReservationPage] = (0, import_react.useState)(1);
	const [galeriPage, setGaleriPage] = (0, import_react.useState)(1);
	const [reviewPage, setReviewPage] = (0, import_react.useState)(1);
	const PAGE_SIZE = 12;
	const [isDefaultPasswordWarning, setIsDefaultPasswordWarning] = (0, import_react.useState)(false);
	const [isPasswordModalOpen, setIsPasswordModalOpen] = (0, import_react.useState)(false);
	const [oldPasswordInput, setOldPasswordInput] = (0, import_react.useState)("");
	const [newPasswordInput, setNewPasswordInput] = (0, import_react.useState)("");
	const [showPassword, setShowPassword] = (0, import_react.useState)(false);
	const [showOldPassword, setShowOldPassword] = (0, import_react.useState)(false);
	const [showNewPassword, setShowNewPassword] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setReservationPage(1);
		setGaleriPage(1);
		setReviewPage(1);
	}, [searchQuery, reservationStatusFilter]);
	const checkDefaultPasswordStatus = (0, import_react.useCallback)(async () => {
		try {
			if ((await checkDefaultPasswordServerFn()).isDefaultPassword) setIsDefaultPasswordWarning(true);
			else setIsDefaultPasswordWarning(false);
		} catch {}
	}, []);
	const refreshSiteData = async () => {
		try {
			const serverData = await getSiteDataServerFn();
			if (serverData) cmsStore.setSiteData(serverData);
		} catch (err) {}
	};
	const fetchAdminData = (0, import_react.useCallback)(async () => {
		try {
			const [data, freshSiteData] = await Promise.all([getAdminDashboardDataServerFn({ data: {} }), getSiteDataServerFn()]);
			if (data && data.reservations) setReservationsList(data.reservations);
			if (freshSiteData) cmsStore.setSiteData(freshSiteData);
			checkDefaultPasswordStatus();
		} catch (err) {}
	}, [checkDefaultPasswordStatus]);
	const handleChangePassword = async (e) => {
		e.preventDefault();
		try {
			await changePasswordServerFn({ data: {
				oldPassword: oldPasswordInput,
				newPassword: newPasswordInput
			} });
			toast.success("Kata sandi admin berhasil diperbarui!");
			setIsPasswordModalOpen(false);
			setIsDefaultPasswordWarning(false);
			setOldPasswordInput("");
			setNewPasswordInput("");
		} catch (err) {
			toast.error(getErrMsg(err, "Gagal mengubah kata sandi."));
		}
	};
	const [infoForm, setInfoForm] = (0, import_react.useState)(() => villageInfo || {
		nama: "Desa Wisata Ekang Anculai",
		tagline: "Desa Wisata Hijau dan Kreatif Bintan",
		whatsapp: "6283166341280",
		email: "reservation@desawisataekanganculai.id",
		alamat: "Jl. Jendral Sudirman, Kp. Sukoharjo, Desa Ekang Anculai, Kec. Teluk Sebong, Kab. Bintan",
		luasDesa: "5.623 Hektare",
		luasKawasanWisata: "13 Hektare",
		jamOperasional: "08.00–17.00 WIB",
		waktuTerbaik: "Mei – September",
		pokdarwis: "Pengelola Pesona Ekang",
		instagram: "@desawisataekang",
		facebook: "Desa Wisata Ekang Anculai",
		tiktok: "@desawisataekang",
		pemdesWebsite: "https://desaekanganculai.bintankab.go.id/"
	});
	const [editingKegiatan, setEditingKegiatan] = (0, import_react.useState)(null);
	const [isKegiatanModalOpen, setIsKegiatanModalOpen] = (0, import_react.useState)(false);
	const [isExtractingOg, setIsExtractingOg] = (0, import_react.useState)(false);
	const [ogExtractStatus, setOgExtractStatus] = (0, import_react.useState)(null);
	const [editingLandmark, setEditingLandmark] = (0, import_react.useState)(null);
	const [isLandmarkModalOpen, setIsLandmarkModalOpen] = (0, import_react.useState)(false);
	const [editingUmkm, setEditingUmkm] = (0, import_react.useState)(null);
	const [isUmkmModalOpen, setIsUmkmModalOpen] = (0, import_react.useState)(false);
	const [editingReview, setEditingReview] = (0, import_react.useState)(null);
	const [isReviewModalOpen, setIsReviewModalOpen] = (0, import_react.useState)(false);
	const [editingGaleri, setEditingGaleri] = (0, import_react.useState)(null);
	const [isGaleriModalOpen, setIsGaleriModalOpen] = (0, import_react.useState)(false);
	const [deleteConfirm, setDeleteConfirm] = (0, import_react.useState)({
		isOpen: false,
		title: "",
		description: "",
		onConfirm: async () => {}
	});
	const [isDeleting, setIsDeleting] = (0, import_react.useState)(false);
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setMounted(true);
		checkAdminAuthServerFn().then((res) => {
			if (res.isAuthenticated) {
				setIsAuthenticated(true);
				fetchAdminData();
			} else setIsAuthenticated(false);
		}).catch(() => {
			setIsAuthenticated(false);
		});
	}, [fetchAdminData]);
	(0, import_react.useEffect)(() => {
		if (isAuthenticated) fetchAdminData();
	}, [
		isAuthenticated,
		activeTab,
		fetchAdminData
	]);
	(0, import_react.useEffect)(() => {
		if (villageInfo) setInfoForm(villageInfo);
	}, [villageInfo]);
	if (!mounted) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen grid place-items-center bg-surface p-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3 text-sm font-bold text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "size-5 border-2 border-primary border-t-transparent rounded-full animate-spin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Memuat Panel Pengelola..." })]
		})
	});
	const handleLogin = async (e) => {
		e.preventDefault();
		setPinError("");
		setIsSubmitting(true);
		const formData = new FormData(e.currentTarget);
		const username = String(formData.get("username") || usernameInput).trim();
		const password = String(formData.get("password") || pinInput).trim();
		try {
			const res = await adminLoginServerFn({ data: {
				username,
				password
			} });
			if (res.success && res.user) {
				setIsAuthenticated(true);
				toast.success(`Login terautentikasi! Selamat datang ${res.user.username}.`);
				fetchAdminData();
			} else {
				const msg = res.message || "Username atau kata sandi tidak valid.";
				setPinError(msg);
				toast.error(msg);
			}
		} catch (err) {
			let msg = getErrMsg(err, "Gagal masuk. Terjadi kesalahan pada server.");
			if (typeof msg === "string" && (msg.includes("<!doctype html") || msg.includes("<html") || msg.trim().startsWith("<") || msg.includes("500"))) msg = "Gagal terhubung ke server otentikasi. Silakan coba beberapa saat lagi.";
			setPinError(msg);
			toast.error(msg);
		} finally {
			setIsSubmitting(false);
		}
	};
	const handleLogout = async () => {
		try {
			await adminLogoutServerFn();
		} catch {} finally {
			setIsAuthenticated(false);
			toast.info("Anda telah keluar dari Panel Admin.");
		}
	};
	const getToken = () => "";
	const handleSaveInfo = async (e) => {
		e.preventDefault();
		try {
			const token = getToken();
			await saveVillageInfoServerFn({ data: {
				token,
				info: infoForm
			} });
			toast.success("Informasi & Kontak Desa berhasil disimpan ke database!");
			await refreshSiteData();
		} catch (err) {
			toast.error(getErrMsg(err, "Gagal menyimpan informasi desa."));
		}
	};
	const handleExtractOgImage = async () => {
		const sourceUrl = editingKegiatan?.source?.url;
		if (!sourceUrl || !sourceUrl.trim()) {
			toast.error("Silakan masukkan URL publikasi terlebih dahulu.");
			setOgExtractStatus({
				type: "error",
				message: "URL publikasi wajib diisi terlebih dahulu."
			});
			return;
		}
		setIsExtractingOg(true);
		setOgExtractStatus(null);
		toast.info("Mengakses server & mengekstrak foto dari publikasi...");
		try {
			const token = getToken();
			const res = await extractOgImageServerFn({ data: {
				token,
				url: sourceUrl
			} });
			if (res.success && res.imageUrl) {
				setEditingKegiatan((prev) => prev ? {
					...prev,
					image: res.imageUrl,
					image_source: "source_url"
				} : null);
				setOgExtractStatus({
					type: "success",
					message: "✓ Foto utama publikasi berhasil ditemukan!"
				});
				toast.success("Foto utama publikasi berhasil diambil!");
			} else {
				const err = res.error || "Foto utama tidak ditemukan pada halaman tersebut.";
				setOgExtractStatus({
					type: "error",
					message: err
				});
				toast.error(err);
			}
		} catch (err) {
			const msg = getErrMsg(err, "Gagal mengambil foto dari URL publikasi.");
			setOgExtractStatus({
				type: "error",
				message: msg
			});
			toast.error(msg);
		} finally {
			setIsExtractingOg(false);
		}
	};
	const handleSaveKegiatan = async (e) => {
		e.preventDefault();
		if (!editingKegiatan) return;
		try {
			const token = getToken();
			await saveKegiatanServerFn({ data: {
				token,
				item: editingKegiatan
			} });
			setIsKegiatanModalOpen(false);
			setEditingKegiatan(null);
			toast.success("Kegiatan desa berhasil disimpan ke database!");
			await refreshSiteData();
		} catch (err) {
			toast.error(getErrMsg(err, "Gagal menyimpan kegiatan desa."));
		}
	};
	const handleDeleteKegiatan = (id, title) => {
		setDeleteConfirm({
			isOpen: true,
			title: title ? `Hapus Kegiatan "${title}"?` : "Hapus Kegiatan Ini?",
			description: "Data kegiatan desa ini akan dihapus secara permanen dari database.",
			onConfirm: async () => {
				setIsDeleting(true);
				try {
					const token = getToken();
					await deleteKegiatanServerFn({ data: {
						token,
						id
					} });
					toast.success("Kegiatan desa telah dihapus dari database.");
					await refreshSiteData();
				} catch (err) {
					toast.error(getErrMsg(err, "Gagal menghapus kegiatan."));
				} finally {
					setIsDeleting(false);
					setDeleteConfirm((prev) => ({
						...prev,
						isOpen: false
					}));
				}
			}
		});
	};
	const handleSaveLandmark = async (e) => {
		e.preventDefault();
		if (!editingLandmark) return;
		try {
			const token = getToken();
			await saveDestinasiServerFn({ data: {
				token,
				item: editingLandmark
			} });
			setIsLandmarkModalOpen(false);
			setEditingLandmark(null);
			toast.success("Daya Tarik / Landmark berhasil disimpan ke database!");
			await refreshSiteData();
		} catch (err) {
			toast.error(getErrMsg(err, "Gagal menyimpan landmark."));
		}
	};
	const handleDeleteLandmark = (id, name) => {
		setDeleteConfirm({
			isOpen: true,
			title: name ? `Hapus Landmark "${name}"?` : "Hapus Landmark Ini?",
			description: "Data landmark/destinasi ini akan dihapus secara permanen dari database.",
			onConfirm: async () => {
				setIsDeleting(true);
				try {
					const token = getToken();
					await deleteDestinasiServerFn({ data: {
						token,
						id
					} });
					toast.success("Landmark telah dihapus dari database.");
					await refreshSiteData();
				} catch (err) {
					toast.error(getErrMsg(err, "Gagal menghapus landmark."));
				} finally {
					setIsDeleting(false);
					setDeleteConfirm((prev) => ({
						...prev,
						isOpen: false
					}));
				}
			}
		});
	};
	const handleSaveUmkm = async (e) => {
		e.preventDefault();
		if (!editingUmkm) return;
		try {
			const token = getToken();
			await saveUmkmServerFn({ data: {
				token,
				item: editingUmkm
			} });
			setIsUmkmModalOpen(false);
			setEditingUmkm(null);
			toast.success("Produk UMKM berhasil disimpan ke database!");
			await refreshSiteData();
		} catch (err) {
			toast.error(getErrMsg(err, "Gagal menyimpan produk UMKM."));
		}
	};
	const handleDeleteUmkm = (id, name) => {
		setDeleteConfirm({
			isOpen: true,
			title: name ? `Hapus Produk UMKM "${name}"?` : "Hapus Produk UMKM Ini?",
			description: "Data produk UMKM ini akan dihapus secara permanen dari database.",
			onConfirm: async () => {
				setIsDeleting(true);
				try {
					const token = getToken();
					await deleteUmkmServerFn({ data: {
						token,
						id
					} });
					toast.success("Produk UMKM telah dihapus dari database.");
					await refreshSiteData();
				} catch (err) {
					toast.error(getErrMsg(err, "Gagal menghapus UMKM."));
				} finally {
					setIsDeleting(false);
					setDeleteConfirm((prev) => ({
						...prev,
						isOpen: false
					}));
				}
			}
		});
	};
	const handleSaveReview = async (e) => {
		e.preventDefault();
		if (!editingReview) return;
		try {
			const token = getToken();
			await saveReviewServerFn({ data: {
				token,
				item: editingReview
			} });
			setIsReviewModalOpen(false);
			setEditingReview(null);
			toast.success("Ulasan wisatawan berhasil disimpan ke database!");
			await refreshSiteData();
		} catch (err) {
			toast.error(getErrMsg(err, "Gagal menyimpan ulasan."));
		}
	};
	const handleDeleteReview = (id, author) => {
		setDeleteConfirm({
			isOpen: true,
			title: author ? `Hapus Ulasan dari "${author}"?` : "Hapus Ulasan Ini?",
			description: "Ulasan wisatawan ini akan dihapus secara permanen dari database.",
			onConfirm: async () => {
				setIsDeleting(true);
				try {
					const token = getToken();
					await deleteReviewServerFn({ data: {
						token,
						id
					} });
					toast.success("Ulasan telah dihapus dari database.");
					await refreshSiteData();
				} catch (err) {
					toast.error(getErrMsg(err, "Gagal menghapus ulasan."));
				} finally {
					setIsDeleting(false);
					setDeleteConfirm((prev) => ({
						...prev,
						isOpen: false
					}));
				}
			}
		});
	};
	const handleSaveGaleri = async (e) => {
		e.preventDefault();
		if (!editingGaleri) return;
		try {
			const token = getToken();
			await saveGaleriServerFn({ data: {
				token,
				item: editingGaleri
			} });
			setIsGaleriModalOpen(false);
			setEditingGaleri(null);
			toast.success("Foto galeri berhasil disimpan ke database!");
			await refreshSiteData();
		} catch (err) {
			toast.error(getErrMsg(err, "Gagal menyimpan foto galeri."));
		}
	};
	const handleDeleteGaleri = (id, title) => {
		setDeleteConfirm({
			isOpen: true,
			title: title ? `Hapus Foto "${title}"?` : "Hapus Foto Galeri Ini?",
			description: "Foto galeri ini akan dihapus secara permanen dari database.",
			onConfirm: async () => {
				setIsDeleting(true);
				try {
					const token = getToken();
					await deleteGaleriServerFn({ data: {
						token,
						id
					} });
					toast.success("Foto galeri telah dihapus dari database.");
					await refreshSiteData();
				} catch (err) {
					toast.error(getErrMsg(err, "Gagal menghapus galeri."));
				} finally {
					setIsDeleting(false);
					setDeleteConfirm((prev) => ({
						...prev,
						isOpen: false
					}));
				}
			}
		});
	};
	const handleUpdateReservationStatus = async (id, status) => {
		try {
			setReservationsList((prev) => prev.map((r) => r.id === id ? {
				...r,
				status
			} : r));
			const token = getToken();
			await updateReservationStatusServerFn({ data: {
				token,
				id,
				status
			} });
			toast.success(`Status reservasi berhasil diubah: ${{
				confirmed: "TERKONFIRMASI (Disetujui)",
				completed: "SELESAI (Kunjungan Tuntas)",
				cancelled: "DIBATALKAN",
				pending: "MENUNGGU KONFIRMASI"
			}[status] || status.toUpperCase()}`);
			fetchAdminData();
		} catch (err) {
			toast.error(getErrMsg(err, "Gagal memperbarui status reservasi."));
			fetchAdminData();
		}
	};
	const handleDeleteReservation = (id, code) => {
		setDeleteConfirm({
			isOpen: true,
			title: code ? `Hapus Reservasi "${code}"?` : "Hapus Data Reservasi Ini?",
			description: "Data reservasi pemesanan ini akan dihapus secara permanen dari database.",
			onConfirm: async () => {
				setIsDeleting(true);
				try {
					const token = getToken();
					await deleteReservationServerFn({ data: {
						token,
						id
					} });
					toast.success("Data reservasi telah dihapus dari database.");
					fetchAdminData();
				} catch (err) {
					toast.error(getErrMsg(err, "Gagal menghapus data reservasi."));
				} finally {
					setIsDeleting(false);
					setDeleteConfirm((prev) => ({
						...prev,
						isOpen: false
					}));
				}
			}
		});
	};
	const handleResetData = () => {
		setDeleteConfirm({
			isOpen: true,
			title: "Reset Seluruh Data Website ke Default?",
			description: "Tindakan ini akan mengembalikan data website ke setelan awal. Harap berhati-hati.",
			onConfirm: async () => {
				setIsDeleting(true);
				try {
					cmsStore.setSiteData({ ...cmsStore.getSnapshot() });
					toast.success("Data berhasil di-reset ke setelan awal.");
				} finally {
					setIsDeleting(false);
					setDeleteConfirm((prev) => ({
						...prev,
						isOpen: false
					}));
				}
			}
		});
	};
	const handleCreateKegiatan = () => {
		setEditingKegiatan({
			id: `kg-${Date.now()}`,
			judul: "",
			kategori: "Pemberdayaan Masyarakat",
			deskripsi: "",
			tanggal: (/* @__PURE__ */ new Date()).toLocaleDateString("id-ID", {
				day: "numeric",
				month: "long",
				year: "numeric"
			}),
			image: "",
			source: {
				name: "Pemerintah Desa Ekang Anculai",
				url: villageInfo?.pemdesWebsite || "https://desaekanganculai.bintankab.go.id/",
				publishedAt: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)
			}
		});
		setIsKegiatanModalOpen(true);
	};
	const handleCreateLandmark = () => {
		setEditingLandmark({
			id: `lm-${Date.now()}`,
			nama: "",
			kategori: "Kreatif",
			lat: 1.0868,
			lng: 104.3621,
			deskripsi: "",
			image: "",
			source: {
				name: "Pemerintah Desa Ekang Anculai",
				url: villageInfo?.pemdesWebsite || "https://desaekanganculai.bintankab.go.id/"
			}
		});
		setIsLandmarkModalOpen(true);
	};
	const handleCreateUmkm = () => {
		setEditingUmkm({
			id: `umkm-${Date.now()}`,
			nama: "",
			kategori: "Kuliner & Olahan Pangan",
			deskripsi: "",
			hargaInfo: "Mulai dari Rp10.000",
			image: "",
			lokasi: "Desa Ekang Anculai",
			kontak: WHATSAPP_NUMBER,
			source: {
				name: "UMKM Desa Ekang Anculai",
				url: villageInfo?.pemdesWebsite || "https://desaekanganculai.bintankab.go.id/",
				publishedAt: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)
			}
		});
		setIsUmkmModalOpen(true);
	};
	const handleCreateGaleri = () => {
		setEditingGaleri({
			id: `gal-${Date.now()}`,
			judul: "",
			kategori: "Alam",
			image: "",
			caption: "",
			alt: "",
			sumber: "Pemerintah Desa Ekang Anculai & Pengelola"
		});
		setIsGaleriModalOpen(true);
	};
	const processFileUpload = async (file, category, onSuccess) => {
		if (!file) return;
		if (file.size > 5242880) {
			toast.error("Ukuran file foto terlalu besar (maksimal 5MB).");
			return;
		}
		if (![
			"image/jpeg",
			"image/png",
			"image/webp",
			"image/jpg"
		].includes(file.type.toLowerCase())) {
			toast.error("Format file tidak diizinkan! Gunakan format JPG, PNG, atau WebP.");
			return;
		}
		const toastId = toast.loading("Mengunggah & mengompresi foto ke WebP...");
		const reader = new FileReader();
		reader.onload = async (event) => {
			const result = event.target?.result;
			if (result) try {
				const token = getToken();
				const res = await uploadImageServerFn({ data: {
					token,
					category,
					base64Data: result
				} });
				if (res?.url) {
					onSuccess(res.url);
					toast.success("Foto berhasil diunggah & dioptimasi ke WebP!", { id: toastId });
				} else toast.error("Gagal mengunggah foto.", { id: toastId });
			} catch (err) {
				toast.error(getErrMsg(err, "Gagal mengunggah foto ke server."), { id: toastId });
			}
		};
		reader.readAsDataURL(file);
	};
	const handleFileUploadForGaleri = (e) => {
		const file = e.target.files?.[0];
		if (!file) return;
		processFileUpload(file, "galleries", (url) => {
			setEditingGaleri((prev) => prev ? {
				...prev,
				image: url
			} : null);
		});
	};
	const handleFileUploadForKegiatan = (e) => {
		const file = e.target.files?.[0];
		if (!file) return;
		processFileUpload(file, "kegiatan", (url) => {
			setEditingKegiatan((prev) => prev ? {
				...prev,
				image: url
			} : null);
		});
	};
	const handleFileUploadForLandmark = (e) => {
		const file = e.target.files?.[0];
		if (!file) return;
		processFileUpload(file, "destinations", (url) => {
			setEditingLandmark((prev) => prev ? {
				...prev,
				image: url
			} : null);
		});
	};
	const handleFileUploadForUmkm = (e) => {
		const file = e.target.files?.[0];
		if (!file) return;
		processFileUpload(file, "umkm", (url) => {
			setEditingUmkm((prev) => prev ? {
				...prev,
				image: url
			} : null);
		});
	};
	const handleExportJSON = () => {
		const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(siteData, null, 2));
		const downloadAnchor = document.createElement("a");
		downloadAnchor.setAttribute("href", dataStr);
		downloadAnchor.setAttribute("download", `backup-ekang-anculai-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`);
		document.body.appendChild(downloadAnchor);
		downloadAnchor.click();
		downloadAnchor.remove();
		toast.success("File cadangan JSON berhasil diunduh!");
	};
	const handleImportJSON = (e) => {
		const file = e.target.files?.[0];
		if (!file) return;
		const reader = new FileReader();
		reader.onload = (event) => {
			try {
				const parsed = JSON.parse(event.target?.result);
				if (parsed.villageInfo && parsed.kegiatanList) {
					cmsStore.updateData(() => parsed);
					toast.success("Data website berhasil dipulihkan dari file cadangan!");
				} else toast.error("Format file JSON tidak valid.");
			} catch (err) {
				toast.error("Gagal membaca file JSON.");
			}
		};
		reader.readAsText(file);
	};
	if (!isAuthenticated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen grid place-items-center bg-surface p-4 sm:p-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md rounded-3xl border border-border bg-card p-8 shadow-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto grid size-16 place-items-center rounded-2xl bg-primary/10 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: logo_bintan_default,
								alt: "Logo Bintan",
								className: "size-10 object-contain"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 text-2xl font-black text-foreground tracking-tight",
							children: "Login Pengelola Website"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted-foreground font-medium",
							children: "Desa Wisata Ekang Anculai — Pengelola Wisata Pesona Ekang"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-amber-500/10 border border-amber-500/30 p-3.5 mt-5 text-center text-xs text-amber-900 dark:text-amber-200",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-extrabold block uppercase tracking-wider text-[10px] text-amber-700 dark:text-amber-300",
						children: "🔒 Portal Otentikasi Khusus Admin"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-0.5 block",
						children: "Halaman ini khusus untuk personel Pengelola Wisata & Pemdes Ekang Anculai."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleLogin,
					className: "mt-6 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5",
							children: "Username Administrator:"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "username",
							type: "text",
							value: usernameInput,
							onChange: (e) => setUsernameInput(e.target.value),
							placeholder: "Masukkan username (contoh: admin)",
							className: "w-full rounded-2xl border border-border bg-surface px-4 py-3.5 text-sm font-semibold text-foreground focus:outline-none focus:ring-2 focus:ring-primary",
							autoFocus: true
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5",
								children: "Kata Sandi Administrator:"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									name: "password",
									type: showPassword ? "text" : "password",
									value: pinInput,
									onChange: (e) => setPinInput(e.target.value),
									placeholder: "Masukkan kata sandi",
									className: "w-full rounded-2xl border border-border bg-surface pl-4 pr-12 py-3.5 text-sm font-semibold text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setShowPassword((prev) => !prev),
									className: "absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer rounded-lg hover:bg-black/5 dark:hover:bg-white/5",
									title: showPassword ? "Sembunyikan Kata Sandi" : "Tampilkan Kata Sandi",
									children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-4" })
								})]
							}),
							pinError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs font-bold text-rose-500",
								children: pinError
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							disabled: isSubmitting,
							className: "w-full rounded-2xl bg-primary py-4 text-xs font-extrabold text-primary-foreground shadow-card hover:bg-primary/90 transition-all cursor-pointer disabled:opacity-50",
							children: isSubmitting ? "Memproses Otentikasi..." : "Masuk ke Panel Pengelola"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 border-t border-border pt-4 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center gap-1 text-xs font-extrabold text-primary hover:underline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "← Kembali ke Website Publik Desa" })
					})
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-surface pb-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-30 border-b border-border bg-card/95 backdrop-blur shadow-soft",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: logo_bintan_default,
							alt: "Logo Bintan",
							className: "h-9 w-auto object-contain"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-lg font-black text-foreground",
								children: "Panel CMS & Pengelola Website"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[10px] font-black text-emerald-700 dark:text-emerald-300 border border-emerald-500/30",
								children: "ONLINE"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold text-muted-foreground",
							children: "Desa Wisata Ekang Anculai • Pengelola Wisata Pesona Ekang"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setIsPasswordModalOpen(true),
								className: "inline-flex items-center gap-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-2 text-xs font-extrabold text-amber-700 dark:text-amber-300 hover:bg-amber-500/20 transition-all cursor-pointer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ubah Kata Sandi" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/",
								target: "_blank",
								className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-4 py-2 text-xs font-extrabold text-foreground hover:bg-card transition-all",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-3.5 text-primary" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Pratinjau Live Website" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3 text-muted-foreground" })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: handleResetData,
								className: "inline-flex items-center gap-1.5 rounded-full border border-rose-500/30 bg-rose-500/10 px-4 py-2 text-xs font-extrabold text-rose-700 dark:text-rose-300 hover:bg-rose-500/20 transition-all cursor-pointer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Reset Default" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: handleLogout,
								className: "inline-flex items-center gap-1.5 rounded-full bg-surface border border-border px-4 py-2 text-xs font-extrabold text-muted-foreground hover:text-foreground cursor-pointer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Keluar" })]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-6",
				children: [
					isDefaultPasswordWarning && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-3xl border border-rose-500/40 bg-rose-500/10 p-5 text-rose-900 dark:text-rose-200",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid size-10 shrink-0 place-items-center rounded-full bg-rose-500/20 text-rose-600",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-6" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-sm font-extrabold",
								children: "PERINGATAN KEAMANAN PRODUKSI"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium text-rose-700 dark:text-rose-300",
								children: "Akun pengelola masih menggunakan kata sandi bawaan pertama ('admin123'). Harap ubah kata sandi demi keamanan server."
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setIsPasswordModalOpen(true),
							className: "inline-flex items-center gap-2 rounded-full bg-rose-600 px-5 py-2 text-xs font-extrabold text-white hover:bg-rose-700 transition-all shadow-md shrink-0 cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ubah Kata Sandi Sekarang" })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border bg-card p-4 shadow-soft",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-extrabold uppercase text-muted-foreground",
											children: "Kunjungan"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => {
												cmsStore.resetVisitCount();
												toast.success("Hitungan kunjungan berhasil di-reset ke 0.");
											},
											title: "Reset Hitungan Kunjungan",
											className: "grid size-6 place-items-center rounded-lg bg-surface text-muted-foreground hover:text-rose-600 transition-colors cursor-pointer",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-3.5" })
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-2xl sm:text-3xl font-black text-emerald-700 dark:text-emerald-400",
										children: (siteData?.visitCount ?? 0).toLocaleString("id-ID")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[11px] font-semibold text-muted-foreground",
										children: [
											"Total Pageviews (",
											siteData?.uniqueVisitors ?? 1,
											" Pengunjung Unik)"
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border bg-card p-4 shadow-soft",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-extrabold uppercase text-muted-foreground",
											children: "Galeri Foto"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "size-5 text-sky-600" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-2xl sm:text-3xl font-black text-foreground",
										children: galeriList.length
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] font-semibold text-muted-foreground",
										children: "Dokumentasi Desa"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border bg-card p-4 shadow-soft",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-extrabold uppercase text-muted-foreground",
											children: "Kegiatan"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "size-5 text-primary" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-2xl sm:text-3xl font-black text-foreground",
										children: kegiatanList.length
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] font-semibold text-muted-foreground",
										children: "Agenda & Berita 2026"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border bg-card p-4 shadow-soft",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-extrabold uppercase text-muted-foreground",
											children: "Landmark"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-5 text-gold" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-2xl sm:text-3xl font-black text-foreground",
										children: landmarkList.length
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] font-semibold text-muted-foreground",
										children: "5 Ikon Utama & Tempat"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border bg-card p-4 shadow-soft",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-extrabold uppercase text-muted-foreground",
											children: "Produk UMKM"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "size-5 text-amber-600" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-2xl sm:text-3xl font-black text-foreground",
										children: umkmList.length
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] font-semibold text-muted-foreground",
										children: "Kreatif & Kuliner"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border bg-card p-4 shadow-soft",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-extrabold uppercase text-muted-foreground",
											children: "Ulasan"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-5 text-amber-500 fill-amber-500" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-2xl sm:text-3xl font-black text-foreground",
										children: reviews.length
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] font-semibold text-muted-foreground",
										children: "Testimoni Pengunjung"
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4 text-[#C58A32]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-extrabold text-foreground uppercase tracking-wider",
								children: "Aksi Cepat Pengelola:"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => {
										setActiveTab("kegiatan");
										handleCreateKegiatan();
									},
									className: "inline-flex items-center gap-1.5 rounded-full bg-[#14532D] px-3.5 py-1.5 text-xs font-extrabold text-white hover:bg-[#064E3B] transition-all cursor-pointer shadow-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Kegiatan / Berita" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => {
										setActiveTab("landmark");
										handleCreateLandmark();
									},
									className: "inline-flex items-center gap-1.5 rounded-full bg-[#14532D] px-3.5 py-1.5 text-xs font-extrabold text-white hover:bg-[#064E3B] transition-all cursor-pointer shadow-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Daya Tarik / Landmark" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => {
										setActiveTab("umkm");
										handleCreateUmkm();
									},
									className: "inline-flex items-center gap-1.5 rounded-full bg-[#14532D] px-3.5 py-1.5 text-xs font-extrabold text-white hover:bg-[#064E3B] transition-all cursor-pointer shadow-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Produk UMKM" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => {
										setActiveTab("galeri");
										handleCreateGaleri();
									},
									className: "inline-flex items-center gap-1.5 rounded-full bg-[#C58A32] px-3.5 py-1.5 text-xs font-extrabold text-white hover:bg-[#A87226] transition-all cursor-pointer shadow-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "size-3.5 text-white" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Upload Foto Galeri" })]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 border-b border-border overflow-x-auto no-scrollbar",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "flex gap-2 sm:gap-4 -mb-px min-w-max pb-1",
							children: [
								{
									id: "reservasi",
									label: `Reservasi (${reservationsList.length})`,
									icon: MessageCircle
								},
								{
									id: "info",
									label: "Informasi & Kontak",
									icon: Settings
								},
								{
									id: "kegiatan",
									label: `Berita & Kegiatan (${kegiatanList.length})`,
									icon: Calendar
								},
								{
									id: "landmark",
									label: `Landmark & Daya Tarik (${landmarkList.length})`,
									icon: MapPin
								},
								{
									id: "umkm",
									label: `Produk UMKM (${umkmList.length})`,
									icon: ShoppingBag
								},
								{
									id: "galeri",
									label: `Galeri Foto (${galeriList.length})`,
									icon: Camera
								},
								{
									id: "reviews",
									label: `Ulasan (${reviews.length})`,
									icon: Star
								},
								{
									id: "backup",
									label: "Cadangan & Backup",
									icon: Download
								}
							].map((tab) => {
								const Icon = tab.icon;
								const isActive = activeTab === tab.id;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setActiveTab(tab.id),
									className: `inline-flex items-center gap-2 border-b-2 px-4 py-3 text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${isActive ? "border-primary text-primary bg-primary/5 rounded-t-xl" : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: tab.label })]
								}, tab.id);
							})
						})
					}),
					activeTab === "reservasi" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 space-y-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "text-lg font-extrabold text-foreground flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Kelola Reservasi Wisatawan" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground mt-0.5",
									children: "Seluruh pemesanan wisatawan tersimpan otomatis di database dengan Kode Reservasi Unik (misal EA-2026-E992)."
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative w-full sm:w-64",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												value: searchQuery,
												onChange: (e) => setSearchQuery(e.target.value),
												placeholder: "Cari pemesan / kode...",
												className: "w-full rounded-2xl border border-border bg-surface pl-9 pr-3 py-1.5 text-xs font-semibold text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
											}),
											searchQuery && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => setSearchQuery(""),
												className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground font-bold",
												children: "✕"
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-extrabold text-muted-foreground uppercase",
											children: "Status:"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											value: reservationStatusFilter,
											onChange: (e) => setReservationStatusFilter(e.target.value),
											className: "rounded-2xl border border-border bg-surface px-4 py-2 text-xs font-extrabold text-foreground outline-none focus:ring-2 focus:ring-primary/20",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
													value: "all",
													children: [
														"Semua Status (",
														reservationsList.length,
														")"
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
													value: "pending",
													children: [
														"⏳ Menunggu (",
														reservationsList.filter((r) => r.status === "pending").length,
														")"
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
													value: "confirmed",
													children: [
														"✓ Terkonfirmasi (",
														reservationsList.filter((r) => r.status === "confirmed").length,
														")"
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
													value: "completed",
													children: [
														"🎉 Selesai (",
														reservationsList.filter((r) => r.status === "completed").length,
														")"
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
													value: "cancelled",
													children: [
														"✕ Dibatalkan (",
														reservationsList.filter((r) => r.status === "cancelled").length,
														")"
													]
												})
											]
										})]
									})]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2 pt-3 border-t border-border/60",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setReservationStatusFilter("all"),
										className: `rounded-full px-3.5 py-1.5 text-xs font-extrabold transition-all cursor-pointer ${reservationStatusFilter === "all" ? "bg-primary text-primary-foreground shadow-sm" : "bg-surface border border-border text-muted-foreground hover:text-foreground"}`,
										children: [
											"Semua (",
											reservationsList.length,
											")"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setReservationStatusFilter("pending"),
										className: `rounded-full px-3.5 py-1.5 text-xs font-extrabold transition-all cursor-pointer ${reservationStatusFilter === "pending" ? "bg-amber-500 text-amber-950 shadow-sm" : "bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-300 hover:bg-amber-500/20"}`,
										children: [
											"⏳ Menunggu (",
											reservationsList.filter((r) => r.status === "pending").length,
											")"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setReservationStatusFilter("confirmed"),
										className: `rounded-full px-3.5 py-1.5 text-xs font-extrabold transition-all cursor-pointer ${reservationStatusFilter === "confirmed" ? "bg-emerald-600 text-white shadow-sm" : "bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-500/20"}`,
										children: [
											"✓ Terkonfirmasi (",
											reservationsList.filter((r) => r.status === "confirmed").length,
											")"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setReservationStatusFilter("completed"),
										className: `rounded-full px-3.5 py-1.5 text-xs font-extrabold transition-all cursor-pointer ${reservationStatusFilter === "completed" ? "bg-sky-600 text-white shadow-sm" : "bg-sky-500/10 border border-sky-500/30 text-sky-800 dark:text-sky-300 hover:bg-sky-500/20"}`,
										children: [
											"🎉 Selesai (",
											reservationsList.filter((r) => r.status === "completed").length,
											")"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setReservationStatusFilter("cancelled"),
										className: `rounded-full px-3.5 py-1.5 text-xs font-extrabold transition-all cursor-pointer ${reservationStatusFilter === "cancelled" ? "bg-rose-600 text-white shadow-sm" : "bg-rose-500/10 border border-rose-500/30 text-rose-800 dark:text-rose-300 hover:bg-rose-500/20"}`,
										children: [
											"✕ Dibatalkan (",
											reservationsList.filter((r) => r.status === "cancelled").length,
											")"
										]
									})
								]
							})]
						}), (() => {
							const filtered = reservationsList.filter((r) => {
								if (reservationStatusFilter !== "all" && r.status !== reservationStatusFilter) return false;
								if (searchQuery) {
									const q = searchQuery.toLowerCase();
									return (r.kode_reservasi || "").toLowerCase().includes(q) || (r.nama_pemesan || "").toLowerCase().includes(q) || (r.whatsapp || "").toLowerCase().includes(q);
								}
								return true;
							});
							if (filtered.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl border border-dashed border-border p-12 text-center bg-card",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "mx-auto size-12 text-muted-foreground/40 mb-3" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-sm font-bold text-foreground",
										children: "Belum Ada Data Reservasi"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-muted-foreground max-w-sm mx-auto",
										children: "Reservasi yang dikirim oleh pengunjung melalui modul Perencana Kunjungan akan otomatis muncul di sini."
									})
								]
							});
							const totalItems = filtered.length;
							const totalPages = Math.ceil(totalItems / PAGE_SIZE) || 1;
							const safePage = Math.min(reservationPage, totalPages);
							const paginatedReservations = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3",
									children: paginatedReservations.map((res) => {
										const isConfirmed = res.status === "confirmed";
										const isCompleted = res.status === "completed";
										const isCancelled = res.status === "cancelled";
										const isPending = !res.status || res.status === "pending";
										const cardBorderClass = isConfirmed ? "border-t-4 border-t-emerald-500 border-emerald-500/40 bg-emerald-500/5 shadow-emerald-500/5" : isCompleted ? "border-t-4 border-t-sky-500 border-sky-500/40 bg-sky-500/5 shadow-sky-500/5" : isCancelled ? "border-t-4 border-t-rose-500 border-rose-500/30 bg-rose-500/5 opacity-80" : "border-t-4 border-t-amber-500 border-amber-500/40 bg-amber-500/5";
										const badgeClass = isConfirmed ? "bg-emerald-600 text-white font-black" : isCompleted ? "bg-sky-600 text-white font-black" : isCancelled ? "bg-rose-600 text-white font-black" : "bg-amber-500 text-amber-950 font-black";
										const statusTitle = isConfirmed ? "✓ TERKONFIRMASI" : isCompleted ? "🎉 SELESAI BERKUNJUNG" : isCancelled ? "✕ DIBATALKAN" : "⏳ MENUNGGU KONFIRMASI";
										const statusBanner = isConfirmed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mb-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 px-3 py-1.5 text-[11px] font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "✓ Reservasi disetujui & jadwal terkonfirmasi." })
										}) : isCompleted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mb-3 rounded-xl bg-sky-500/15 border border-sky-500/30 px-3 py-1.5 text-[11px] font-bold text-sky-800 dark:text-sky-300 flex items-center gap-1.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🎉 Kunjungan wisata telah selesai dilaksanakan." })
										}) : isCancelled ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mb-3 rounded-xl bg-rose-500/15 border border-rose-500/30 px-3 py-1.5 text-[11px] font-bold text-rose-800 dark:text-rose-300 flex items-center gap-1.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "✕ Reservasi ini telah dibatalkan." })
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mb-3 rounded-xl bg-amber-500/15 border border-amber-500/30 px-3 py-1.5 text-[11px] font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "⏳ Menunggu verifikasi & follow-up Admin." })
										});
										const waText = encodeURIComponent(`Halo ${res.nama_pemesan}, mengonfirmasi mengenai reservasi Anda dengan Kode *${res.kode_reservasi}* di Desa Wisata Ekang Anculai pada tanggal ${res.tanggal_kunjungan} (Jam ${res.jam_kedatangan} WIB). Status reservasi saat ini: *${res.status?.toUpperCase() || "PENDING"}*. Apakah ada yang perlu disesuaikan? Terima kasih.`);
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: `flex flex-col justify-between rounded-3xl border p-5 shadow-soft hover:shadow-card transition-all ${cardBorderClass}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between gap-2 border-b border-border pb-3 mb-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-mono text-sm font-black text-primary tracking-widest",
														children: res.kode_reservasi
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: `rounded-full px-3 py-0.5 text-[10px] uppercase shadow-sm ${badgeClass}`,
														children: statusTitle
													})]
												}),
												statusBanner,
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "space-y-2 text-xs",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex justify-between py-1 border-b border-border/40",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "text-muted-foreground font-semibold",
																children: "Nama Pemesan:"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "font-bold text-foreground",
																children: res.nama_pemesan
															})]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex justify-between py-1 border-b border-border/40",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "text-muted-foreground font-semibold",
																children: "WhatsApp:"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "font-mono font-bold text-foreground",
																children: res.whatsapp
															})]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex justify-between py-1 border-b border-border/40",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "text-muted-foreground font-semibold",
																children: "Tanggal & Jam:"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																className: "font-bold text-foreground",
																children: [
																	res.tanggal_kunjungan,
																	" (",
																	res.jam_kedatangan,
																	" WIB)"
																]
															})]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex justify-between py-1 border-b border-border/40",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "text-muted-foreground font-semibold",
																children: "Jumlah Peserta:"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																className: "font-bold text-foreground",
																children: [
																	res.jumlah_dewasa,
																	" Dewasa",
																	res.jumlah_anak > 0 ? `, ${res.jumlah_anak} Anak` : ""
																]
															})]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "pt-2",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-[11px] font-extrabold text-muted-foreground uppercase",
																children: "Opsi Kunjungan:"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "mt-0.5 font-bold text-foreground",
																children: res.opsi_kunjungan
															})]
														}),
														res.catatan && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "mt-2 text-[11px] bg-muted/50 rounded-xl p-2.5 font-medium italic text-muted-foreground",
															children: [
																"\"",
																res.catatan,
																"\""
															]
														})
													]
												})
											] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-5 pt-3 border-t border-border flex flex-col gap-2.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
													href: `https://wa.me/${res.whatsapp.replace(/[^0-9]/g, "")}?text=${waText}`,
													target: "_blank",
													rel: "noopener noreferrer",
													className: "w-full inline-flex items-center justify-center gap-1.5 rounded-2xl bg-emerald-600 px-3 py-2.5 text-xs font-extrabold text-white hover:bg-emerald-700 transition-colors shadow-soft",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Hubungi Wisatawan via WA" })]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "pt-1",
													children: [
														isPending && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "space-y-1.5",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-[10px] uppercase font-black text-muted-foreground",
																children: "Tindakan Admin:"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "grid grid-cols-2 gap-2",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
																	type: "button",
																	onClick: () => handleUpdateReservationStatus(res.id, "confirmed"),
																	className: "inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-2 text-xs font-extrabold shadow-sm transition-all cursor-pointer",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Konfirmasi" })]
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																	type: "button",
																	onClick: () => handleUpdateReservationStatus(res.id, "cancelled"),
																	className: "inline-flex items-center justify-center gap-1.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-700 dark:text-rose-300 border border-rose-500/30 px-3 py-2 text-xs font-extrabold transition-all cursor-pointer",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Batalkan" })
																})]
															})]
														}),
														isConfirmed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "space-y-1.5",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-[10px] uppercase font-black text-emerald-700 dark:text-emerald-300",
																children: "Tindakan Berikutnya (Terkonfirmasi):"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "grid grid-cols-2 gap-2",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
																	type: "button",
																	onClick: () => handleUpdateReservationStatus(res.id, "completed"),
																	className: "inline-flex items-center justify-center gap-1.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white px-3 py-2 text-xs font-extrabold shadow-sm transition-all cursor-pointer",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5 text-amber-300" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Tandai Selesai" })]
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																	type: "button",
																	onClick: () => handleUpdateReservationStatus(res.id, "cancelled"),
																	className: "inline-flex items-center justify-center gap-1.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-700 dark:text-rose-300 border border-rose-500/30 px-3 py-2 text-xs font-extrabold transition-all cursor-pointer",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Batalkan" })
																})]
															})]
														}),
														isCompleted && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "rounded-xl bg-sky-500/10 border border-sky-500/30 p-2.5 text-center",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
																className: "text-xs font-extrabold text-sky-800 dark:text-sky-300 flex items-center justify-center gap-1.5",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 text-sky-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Status Final: Kunjungan Selesai" })]
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-[10px] text-muted-foreground mt-0.5",
																children: "Tidak dapat diubah lagi karena kunjungan telah tuntas."
															})]
														}),
														isCancelled && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "rounded-xl bg-rose-500/10 border border-rose-500/30 p-2.5 text-center",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
																className: "text-xs font-extrabold text-rose-800 dark:text-rose-300 flex items-center justify-center gap-1.5",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "size-3.5 rounded-full bg-rose-600 text-white grid place-items-center text-[9px] font-black",
																	children: "✕"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Status Final: Reservasi Dibatalkan" })]
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-[10px] text-muted-foreground mt-0.5",
																children: "Tidak dapat diproses lagi karena telah dibatalkan."
															})]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "mt-2.5 flex justify-end",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
																type: "button",
																onClick: () => handleDeleteReservation(res.id),
																className: "inline-flex items-center gap-1 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 px-2.5 py-1 text-[10px] font-bold text-rose-600 transition-colors cursor-pointer",
																title: "Hapus Reservasi",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3 text-rose-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Hapus Data" })]
															})
														})
													]
												})]
											})]
										}, res.id);
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaginationControls, {
									currentPage: safePage,
									totalPages,
									totalItems,
									pageSize: PAGE_SIZE,
									onPageChange: (p) => setReservationPage(p)
								})]
							});
						})()]
					}),
					activeTab === "info" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-b border-border pb-4 mb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-extrabold text-foreground",
								children: "Pengaturan Informasi & Kontak Desa"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground font-medium mt-1",
								children: "Ubah nomor WhatsApp reservasi, email resmi, alamat, dan link media sosial Pengelola."
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: handleSaveInfo,
								className: "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-extrabold text-primary-foreground shadow-card hover:bg-primary/90 transition-all cursor-pointer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Simpan Pengaturan" })]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleSaveInfo,
							className: "grid gap-6 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-extrabold uppercase text-foreground mb-2",
									children: "Nama Desa / Destinasi"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: infoForm.nama,
									onChange: (e) => setInfoForm({
										...infoForm,
										nama: e.target.value
									}),
									className: "w-full rounded-2xl border border-border bg-surface px-4 py-3 text-xs sm:text-sm font-bold text-foreground"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-extrabold uppercase text-foreground mb-2",
									children: "Tagline Wisata"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: infoForm.tagline,
									onChange: (e) => setInfoForm({
										...infoForm,
										tagline: e.target.value
									}),
									className: "w-full rounded-2xl border border-border bg-surface px-4 py-3 text-xs sm:text-sm font-bold text-foreground"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-xs font-extrabold uppercase text-foreground mb-2",
										children: "Nomor WhatsApp Reservasi Pengelola"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										value: infoForm.whatsapp,
										onChange: (e) => setInfoForm({
											...infoForm,
											whatsapp: e.target.value
										}),
										placeholder: "Contoh: 628123456789",
										className: "w-full rounded-2xl border border-border bg-surface px-4 py-3 text-xs sm:text-sm font-bold text-foreground"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] text-muted-foreground mt-1 block",
										children: "Format: Gunakan kode negara 62 (tanpa tanda +)."
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-extrabold uppercase text-foreground mb-2",
									children: "Email Reservasi Resmi"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "email",
									value: infoForm.email,
									onChange: (e) => setInfoForm({
										...infoForm,
										email: e.target.value
									}),
									className: "w-full rounded-2xl border border-border bg-surface px-4 py-3 text-xs sm:text-sm font-bold text-foreground"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "sm:col-span-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-xs font-extrabold uppercase text-foreground mb-2",
										children: "Alamat Lengkap Desa Wisata"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										value: infoForm.alamat,
										onChange: (e) => setInfoForm({
											...infoForm,
											alamat: e.target.value
										}),
										className: "w-full rounded-2xl border border-border bg-surface px-4 py-3 text-xs sm:text-sm font-bold text-foreground"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-extrabold uppercase text-foreground mb-2",
									children: "Jam Operasional"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: infoForm.jamOperasional,
									onChange: (e) => setInfoForm({
										...infoForm,
										jamOperasional: e.target.value
									}),
									className: "w-full rounded-2xl border border-border bg-surface px-4 py-3 text-xs sm:text-sm font-bold text-foreground"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-extrabold uppercase text-foreground mb-2",
									children: "Waktu Terbaik Kunjungan"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: infoForm.waktuTerbaik,
									onChange: (e) => setInfoForm({
										...infoForm,
										waktuTerbaik: e.target.value
									}),
									className: "w-full rounded-2xl border border-border bg-surface px-4 py-3 text-xs sm:text-sm font-bold text-foreground"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-extrabold uppercase text-foreground mb-2",
									children: "Instagram Pengelola Wisata"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: infoForm.instagram,
									onChange: (e) => setInfoForm({
										...infoForm,
										instagram: e.target.value
									}),
									className: "w-full rounded-2xl border border-border bg-surface px-4 py-3 text-xs sm:text-sm font-bold text-foreground"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-extrabold uppercase text-foreground mb-2",
									children: "Website Resmi Pemdes"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: infoForm.pemdesWebsite,
									onChange: (e) => setInfoForm({
										...infoForm,
										pemdesWebsite: e.target.value
									}),
									className: "w-full rounded-2xl border border-border bg-surface px-4 py-3 text-xs sm:text-sm font-bold text-foreground"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "sm:col-span-2 flex justify-end pt-4 border-t border-border",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "submit",
										className: "inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-xs font-extrabold text-primary-foreground shadow-card hover:bg-primary/90 transition-all cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Simpan Perubahan" })]
									})
								})
							]
						})]
					}),
					activeTab === "kegiatan" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 space-y-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-extrabold text-foreground",
								children: "Kelola Berita & Kegiatan Desa"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground font-medium mt-0.5",
								children: "Tambah, perbarui, atau hapus berita dan agenda kegiatan masyarakat."
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => {
									setEditingKegiatan({
										id: `kg-${Date.now()}`,
										judul: "",
										kategori: "Pemberdayaan Masyarakat",
										deskripsi: "",
										tanggal: (/* @__PURE__ */ new Date()).toLocaleDateString("id-ID", {
											day: "numeric",
											month: "long",
											year: "numeric"
										}),
										image: "",
										source: {
											name: "Pemerintah Desa Ekang Anculai",
											url: villageInfo?.pemdesWebsite || "https://desaekanganculai.bintankab.go.id/",
											publishedAt: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)
										}
									});
									setIsKegiatanModalOpen(true);
								},
								className: "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-extrabold text-primary-foreground shadow-card hover:bg-primary/90 transition-all cursor-pointer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Tambah Kegiatan Baru" })]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
							children: kegiatanList.map((kg) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl border border-border bg-card shadow-card flex flex-col justify-between overflow-hidden group",
								children: [kg.image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative aspect-[16/9] w-full overflow-hidden bg-muted border-b border-border",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: kg.image,
										alt: kg.judul,
										className: "size-full object-cover transition-transform group-hover:scale-105"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-5 flex-1 flex flex-col justify-between space-y-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-full bg-primary/10 px-3 py-1 text-[10px] font-extrabold text-primary",
												children: kg.kategori
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[11px] font-bold text-muted-foreground",
												children: kg.tanggal
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-3 text-base font-extrabold text-foreground leading-snug",
											children: kg.judul
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-xs text-muted-foreground leading-relaxed line-clamp-3",
											children: kg.deskripsi
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "pt-3 border-t border-border flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => {
												setEditingKegiatan(kg);
												setIsKegiatanModalOpen(true);
											},
											className: "inline-flex items-center gap-1 text-xs font-extrabold text-primary hover:underline cursor-pointer",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquarePen, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Edit" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => handleDeleteKegiatan(kg.id),
											className: "inline-flex items-center gap-1 text-xs font-extrabold text-rose-600 hover:underline cursor-pointer",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Hapus" })]
										})]
									})]
								})]
							}, kg.id))
						})]
					}),
					activeTab === "landmark" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 space-y-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-extrabold text-foreground",
								children: "Kelola Landmark & Daya Tarik Wisata"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground font-medium mt-0.5",
								children: "Atur 5 daya tarik utama dan tempat wisata pendukung di Desa Ekang Anculai."
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => {
									setEditingLandmark({
										id: `lm-${Date.now()}`,
										nama: "",
										kategori: "Kreatif",
										lat: 1.0868,
										lng: 104.3621,
										deskripsi: "",
										image: "",
										source: {
											name: "Pemerintah Desa Ekang Anculai",
											url: villageInfo?.pemdesWebsite || "https://desaekanganculai.bintankab.go.id/"
										}
									});
									setIsLandmarkModalOpen(true);
								},
								className: "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-extrabold text-primary-foreground shadow-card hover:bg-primary/90 transition-all cursor-pointer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Tambah Landmark Baru" })]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
							children: landmarkList.map((lm) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl border border-border bg-card shadow-card flex flex-col justify-between overflow-hidden group",
								children: [lm.image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative aspect-[16/9] w-full overflow-hidden bg-muted border-b border-border",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: lm.image,
										alt: lm.nama,
										className: "size-full object-cover transition-transform group-hover:scale-105"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-5 flex-1 flex flex-col justify-between space-y-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-full bg-gold/15 px-3 py-1 text-[10px] font-extrabold text-gold uppercase",
												children: lm.kategori
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-[11px] font-bold text-muted-foreground",
												children: [
													(lm.lat ?? 1.0868).toFixed(4),
													", ",
													(lm.lng ?? 104.3621).toFixed(4)
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-3 text-base font-extrabold text-foreground",
											children: lm.nama
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-xs text-muted-foreground leading-relaxed line-clamp-3",
											children: lm.deskripsi
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "pt-3 border-t border-border flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => {
												setEditingLandmark(lm);
												setIsLandmarkModalOpen(true);
											},
											className: "inline-flex items-center gap-1 text-xs font-extrabold text-primary hover:underline cursor-pointer",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquarePen, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Edit" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => handleDeleteLandmark(lm.id),
											className: "inline-flex items-center gap-1 text-xs font-extrabold text-rose-600 hover:underline cursor-pointer",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Hapus" })]
										})]
									})]
								})]
							}, lm.id))
						})]
					}),
					activeTab === "umkm" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 space-y-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-extrabold text-foreground",
								children: "Kelola Produk UMKM"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground font-medium mt-0.5",
								children: "Tambah dan kelola produk ekonomi kreatif, kuliner, dan kerajinan warga."
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => {
									setEditingUmkm({
										id: `umkm-${Date.now()}`,
										nama: "",
										kategori: "Kuliner & Olahan Pangan",
										deskripsi: "",
										hargaInfo: "Mulai Rp 20.000",
										image: "",
										lokasi: "Ekang Anculai",
										kontak: "6283166341280",
										source: {
											name: "Pemerintah Desa Ekang Anculai",
											url: villageInfo?.pemdesWebsite || "https://desaekanganculai.bintankab.go.id/"
										}
									});
									setIsUmkmModalOpen(true);
								},
								className: "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-extrabold text-primary-foreground shadow-card hover:bg-primary/90 transition-all cursor-pointer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Tambah Produk UMKM" })]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
							children: umkmList.map((um) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl border border-border bg-card shadow-card flex flex-col justify-between overflow-hidden group",
								children: [um.image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative aspect-[16/9] w-full overflow-hidden bg-muted border-b border-border",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: um.image,
										alt: um.nama,
										className: "size-full object-cover transition-transform group-hover:scale-105"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-5 flex-1 flex flex-col justify-between space-y-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-full bg-emerald-500/10 px-3 py-1 text-[10px] font-extrabold text-emerald-700 dark:text-emerald-300",
												children: um.kategori
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[11px] font-extrabold text-gold",
												children: um.hargaInfo
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-3 text-base font-extrabold text-foreground",
											children: um.nama
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-xs text-muted-foreground leading-relaxed line-clamp-3",
											children: um.deskripsi
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "pt-3 border-t border-border flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => {
												setEditingUmkm(um);
												setIsUmkmModalOpen(true);
											},
											className: "inline-flex items-center gap-1 text-xs font-extrabold text-primary hover:underline cursor-pointer",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquarePen, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Edit" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: () => handleDeleteUmkm(um.id),
											className: "inline-flex items-center gap-1 text-xs font-extrabold text-rose-600 hover:underline cursor-pointer",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Hapus" })]
										})]
									})]
								})]
							}, um.id))
						})]
					}),
					activeTab === "reviews" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 space-y-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-extrabold text-foreground",
								children: "Kelola Ulasan & Testimoni Wisatawan"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground font-medium mt-0.5",
								children: "Atur ulasan yang ditampilkan di halaman beranda."
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => {
									setEditingReview({
										id: `rev-${Date.now()}`,
										nama: "",
										asal: "Indonesia",
										rating: 5,
										tanggal: (/* @__PURE__ */ new Date()).toLocaleDateString("id-ID", {
											day: "numeric",
											month: "long",
											year: "numeric"
										}),
										komentar: "",
										tipeWisatawan: "Keluarga",
										avatar: ""
									});
									setIsReviewModalOpen(true);
								},
								className: "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-extrabold text-primary-foreground shadow-card hover:bg-primary/90 transition-all cursor-pointer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Tambah Ulasan Baru" })]
							})]
						}), (() => {
							const filteredReviews = reviews.filter((rev) => {
								if (!searchQuery) return true;
								const q = searchQuery.toLowerCase();
								return (rev.nama || "").toLowerCase().includes(q) || (rev.komentar || "").toLowerCase().includes(q) || (rev.asal || "").toLowerCase().includes(q);
							});
							const totalReviews = filteredReviews.length;
							const totalReviewPages = Math.ceil(totalReviews / PAGE_SIZE) || 1;
							const safeReviewPage = Math.min(reviewPage, totalReviewPages);
							const paginatedReviews = filteredReviews.slice((safeReviewPage - 1) * PAGE_SIZE, safeReviewPage * PAGE_SIZE);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
									children: paginatedReviews.map((rev) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-3xl border border-border bg-card p-6 shadow-card flex flex-col justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex items-center gap-1 text-amber-500",
													children: Array.from({ length: rev.rating }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3.5 fill-amber-500" }, i))
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[11px] font-bold text-muted-foreground",
													children: rev.tanggal
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-3 text-base font-extrabold text-foreground",
												children: rev.nama
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-[11px] font-semibold text-primary",
												children: [
													rev.asal,
													" • ",
													rev.tipeWisatawan
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-2 text-xs text-muted-foreground leading-relaxed italic line-clamp-4",
												children: [
													"\"",
													rev.komentar,
													"\""
												]
											})
										] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-6 pt-4 border-t border-border flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												onClick: () => {
													setEditingReview(rev);
													setIsReviewModalOpen(true);
												},
												className: "inline-flex items-center gap-1 text-xs font-extrabold text-primary hover:underline cursor-pointer",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquarePen, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Edit" })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												onClick: () => handleDeleteReview(rev.id),
												className: "inline-flex items-center gap-1 text-xs font-extrabold text-rose-600 hover:underline cursor-pointer",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Hapus" })]
											})]
										})]
									}, rev.id))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaginationControls, {
									currentPage: safeReviewPage,
									totalPages: totalReviewPages,
									totalItems: totalReviews,
									pageSize: PAGE_SIZE,
									onPageChange: (p) => setReviewPage(p)
								})]
							});
						})()]
					}),
					activeTab === "backup" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 space-y-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-card space-y-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-extrabold text-foreground",
								children: "Cadangan Data & Migrasi File Storage"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground font-medium mt-1",
								children: "Kelola cadangan database JSON dan konversi otomatis file foto Base64 lama ke file fisik WebP."
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-6 md:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-border bg-surface p-5 space-y-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid size-10 place-items-center rounded-full bg-sky-500/10 text-sky-600",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-sm font-extrabold text-foreground",
											children: "Ekspor & Impor JSON"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground",
											children: "Unduh salinan penuh database atau pulihkan data dari file JSON."
										})] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "pt-2 flex flex-wrap items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: handleExportJSON,
											className: "inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-extrabold text-primary-foreground shadow-card hover:bg-primary/90 transition-all cursor-pointer",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Unduh Backup JSON" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-xs font-extrabold text-foreground hover:bg-accent cursor-pointer",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-4 text-primary" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Impor Data JSON" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "file",
													accept: ".json",
													onChange: handleImportJSON,
													className: "hidden"
												})
											]
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-5 space-y-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid size-10 place-items-center rounded-full bg-emerald-500/20 text-emerald-600",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-sm font-extrabold text-foreground",
											children: "Migrasi Foto Base64 ke Storage WebP"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground",
											children: "Konversi otomatis semua foto Base64 di database SQLite menjadi file fisik WebP di folder `/public/uploads/`."
										})] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "pt-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: async () => {
												try {
													const token = getToken();
													const toastId = toast.loading("Memigrasi foto Base64 ke file fisik WebP...");
													const res = await migrateBase64ServerFn({ data: { token } });
													toast.success(`Berhasil memigrasi ${res.count} foto Base64 ke file fisik WebP!`, { id: toastId });
													fetchAdminData();
												} catch (err) {
													toast.error(getErrMsg(err, "Gagal memigrasi foto."));
												}
											},
											className: "inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-xs font-extrabold text-white shadow-card hover:bg-emerald-700 transition-all cursor-pointer",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Jalankan Migrasi Base64 ke WebP File" })]
										})
									})]
								})]
							})]
						})
					}),
					activeTab === "galeri" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-2xl font-black text-foreground",
									children: "Galeri Dokumentasi Foto"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold text-muted-foreground",
									children: "Kelola foto dokumentasi ekowisata, batik, perkebunan, budaya, dan aktivitas masyarakat."
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: handleCreateGaleri,
									className: "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-extrabold text-primary-foreground shadow-card hover:bg-primary/90 transition-all cursor-pointer shrink-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Tambah Foto Galeri Baru" })]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative max-w-md",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									placeholder: "Cari foto galeri...",
									value: searchQuery,
									onChange: (e) => setSearchQuery(e.target.value),
									className: "w-full rounded-full border border-border bg-card px-4 py-2.5 pl-10 text-xs font-semibold text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3.5 top-3 size-4 text-muted-foreground" })]
							}),
							(() => {
								const filteredGaleri = galeriList.filter((item) => (item.judul + item.kategori + item.caption + (item.sumber || "")).toLowerCase().includes(searchQuery.toLowerCase()));
								const totalGaleri = filteredGaleri.length;
								const totalGaleriPages = Math.ceil(totalGaleri / PAGE_SIZE) || 1;
								const safeGaleriPage = Math.min(galeriPage, totalGaleriPages);
								const paginatedGaleri = filteredGaleri.slice((safeGaleriPage - 1) * PAGE_SIZE, safeGaleriPage * PAGE_SIZE);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
										children: paginatedGaleri.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card shadow-card group",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative aspect-[4/3] w-full overflow-hidden bg-muted",
												children: [item.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: item.image,
													alt: item.alt || item.judul,
													className: "size-full object-cover transition-transform group-hover:scale-105"
												}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "grid size-full place-items-center text-muted-foreground",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "size-8 opacity-40" })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "absolute top-3 left-3 rounded-full bg-background/90 px-3 py-1 text-[11px] font-extrabold text-foreground backdrop-blur shadow-sm",
													children: item.kategori
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "p-5 flex-1 flex flex-col justify-between space-y-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
														className: "text-base font-black text-foreground",
														children: item.judul
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-1.5 text-xs text-muted-foreground font-medium line-clamp-2",
														children: item.caption
													}),
													item.sumber && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "mt-2 block text-[10px] font-bold text-primary",
														children: ["Sumber: ", item.sumber]
													})
												] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-end gap-2 border-t border-border pt-4",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
														onClick: () => {
															setEditingGaleri(item);
															setIsGaleriModalOpen(true);
														},
														className: "inline-flex items-center gap-1 text-xs font-extrabold text-primary hover:underline cursor-pointer",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquarePen, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Edit" })]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
														onClick: () => handleDeleteGaleri(item.id),
														className: "inline-flex items-center gap-1 text-xs font-extrabold text-rose-600 hover:underline cursor-pointer",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Hapus" })]
													})]
												})]
											})]
										}, item.id))
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaginationControls, {
										currentPage: safeGaleriPage,
										totalPages: totalGaleriPages,
										totalItems: totalGaleri,
										pageSize: PAGE_SIZE,
										onPageChange: (p) => setGaleriPage(p)
									})]
								});
							})()
						]
					}),
					activeTab === "backup" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 rounded-3xl border border-border bg-card p-8 shadow-card max-w-2xl mx-auto text-center space-y-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mx-auto size-12 text-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 text-2xl font-black text-foreground",
								children: "Cadangkan Data Website"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs text-muted-foreground font-medium leading-relaxed",
								children: "Unduh file cadangan data website (JSON) untuk mengamankan seluruh informasi kegiatan, landmark, UMKM, galeri, ulasan, dan kontak yang telah diedit."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap justify-center gap-4 pt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: handleExportJSON,
								className: "inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-xs font-extrabold text-primary-foreground shadow-card hover:bg-primary/90 transition-all cursor-pointer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Unduh Backup Data (JSON)" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "inline-flex items-center gap-2 rounded-full border border-border bg-surface px-8 py-3.5 text-xs font-extrabold text-foreground hover:bg-card transition-all cursor-pointer",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-4 text-primary" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Pulihkan dari File JSON" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "file",
										accept: ".json",
										onChange: handleImportJSON,
										className: "hidden"
									})
								]
							})]
						})]
					})
				]
			}),
			isKegiatanModalOpen && editingKegiatan && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: isKegiatanModalOpen,
				onOpenChange: () => setIsKegiatanModalOpen(false),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-lg overflow-hidden rounded-3xl p-6 sm:p-8 bg-card border-border shadow-2xl max-h-[90vh] overflow-y-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "text-xl font-extrabold text-foreground",
						children: editingKegiatan.id.startsWith("kg-") ? "Tambah Kegiatan Desa Baru" : "Edit Kegiatan Desa"
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSaveKegiatan,
						className: "mt-4 space-y-4 text-xs sm:text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block font-bold uppercase text-foreground text-xs mb-1",
								children: "Judul Kegiatan"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								required: true,
								value: editingKegiatan.judul || "",
								onChange: (e) => setEditingKegiatan({
									...editingKegiatan,
									judul: e.target.value
								}),
								className: "w-full rounded-2xl border border-border bg-surface px-4 py-2.5 font-semibold text-foreground"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block font-bold uppercase text-foreground text-xs mb-1",
									children: "Kategori Agenda"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									required: true,
									value: editingKegiatan.kategori || "",
									onChange: (e) => setEditingKegiatan({
										...editingKegiatan,
										kategori: e.target.value
									}),
									className: "w-full rounded-2xl border border-border bg-surface px-4 py-2.5 font-semibold text-foreground"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block font-bold uppercase text-foreground text-xs mb-1",
									children: "Tanggal Pelaksanaan"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									required: true,
									value: editingKegiatan.tanggal || "",
									onChange: (e) => setEditingKegiatan({
										...editingKegiatan,
										tanggal: e.target.value
									}),
									className: "w-full rounded-2xl border border-border bg-surface px-4 py-2.5 font-semibold text-foreground"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block font-bold uppercase text-foreground text-xs mb-1",
								children: "Deskripsi Lengkap"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								rows: 3,
								required: true,
								value: editingKegiatan.deskripsi || "",
								onChange: (e) => setEditingKegiatan({
									...editingKegiatan,
									deskripsi: e.target.value
								}),
								className: "w-full rounded-2xl border border-border bg-surface px-4 py-2.5 font-medium text-foreground"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-3 p-3 rounded-2xl border border-border bg-surface/50",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block font-bold uppercase text-foreground text-xs mb-1",
									children: "Nama Sumber Publikasi"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: editingKegiatan.source?.name || "",
									onChange: (e) => setEditingKegiatan({
										...editingKegiatan,
										source: {
											name: e.target.value,
											url: editingKegiatan.source?.url || ""
										}
									}),
									placeholder: "Contoh: Pemdes Ekang / Mahasiswa KKN",
									className: "w-full rounded-xl border border-border bg-card px-3 py-2 text-xs font-semibold text-foreground"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block font-bold uppercase text-foreground text-xs mb-1",
									children: "URL Publikasi Berita"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "url",
									value: editingKegiatan.source?.url || "",
									onChange: (e) => setEditingKegiatan({
										...editingKegiatan,
										source: {
											name: editingKegiatan.source?.name || "Pengelola",
											url: e.target.value
										}
									}),
									placeholder: "https://website-sumber.com/artikel/...",
									className: "w-full rounded-xl border border-border bg-card px-3 py-2 text-xs font-semibold text-foreground"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3 p-4 rounded-2xl border border-border bg-surface",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block font-extrabold uppercase text-foreground text-xs",
										children: "Sumber Foto Berita / Kegiatan"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "flex items-center gap-2 text-xs font-bold text-foreground cursor-pointer",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "radio",
												name: "image_source_mode",
												value: "upload",
												checked: (editingKegiatan.image_source || "upload") === "upload",
												onChange: () => setEditingKegiatan({
													...editingKegiatan,
													image_source: "upload"
												}),
												className: "size-4 text-primary"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "📷 Upload Foto Manual" })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "flex items-center gap-2 text-xs font-bold text-foreground cursor-pointer",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "radio",
												name: "image_source_mode",
												value: "source_url",
												checked: editingKegiatan.image_source === "source_url",
												onChange: () => setEditingKegiatan({
													...editingKegiatan,
													image_source: "source_url"
												}),
												className: "size-4 text-primary"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🌐 Ambil dari Source URL (Publikasi Berita)" })]
										})]
									}),
									(editingKegiatan.image_source || "upload") === "upload" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2 pt-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "flex items-center justify-center gap-2 rounded-2xl border border-dashed border-primary/40 bg-primary/5 px-4 py-2.5 text-xs font-bold text-primary hover:bg-primary/10 transition-all cursor-pointer",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-4" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Upload Foto dari HP / Laptop" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "file",
													accept: "image/*",
													onChange: handleFileUploadForKegiatan,
													className: "hidden"
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											value: editingKegiatan.image || "",
											onChange: (e) => setEditingKegiatan({
												...editingKegiatan,
												image: e.target.value
											}),
											placeholder: "Atau masukan path/URL gambar...",
											className: "w-full rounded-2xl border border-border bg-card px-4 py-2 text-xs font-medium text-foreground"
										})]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2 pt-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[11px] text-muted-foreground leading-relaxed",
												children: "Sistem server akan mengambil foto utama (Open Graph image) langsung dari URL publikasi berita resmi tanpa melakukan download berlebih."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "flex gap-2",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													onClick: handleExtractOgImage,
													disabled: isExtractingOg,
													className: "inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-extrabold text-primary-foreground shadow-sm hover:bg-primary/90 transition-all disabled:opacity-50 cursor-pointer",
													children: [isExtractingOg ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: editingKegiatan.image ? "Refresh Foto dari Sumber" : "Ambil Foto dari Sumber" })]
												})
											}),
											ogExtractStatus && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: `p-3 rounded-xl text-xs font-bold leading-relaxed ${ogExtractStatus.type === "success" ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20" : "bg-destructive/10 text-destructive border border-destructive/20"}`,
												children: ogExtractStatus.message
											})
										]
									}),
									editingKegiatan.image && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-3 relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-muted",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: editingKegiatan.image,
											alt: "Preview Foto Kegiatan",
											className: "size-full object-cover",
											onError: (e) => {
												e.currentTarget.style.display = "none";
											}
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute bottom-2 left-2 rounded-md bg-black/75 backdrop-blur-sm px-2.5 py-1 text-[10px] font-bold text-white shadow-sm",
											children: (editingKegiatan.image_source || "upload") === "source_url" ? "🌐 Foto dari Publikasi Online" : "📷 Dokumentasi Foto Manual"
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
								className: "pt-4 border-t border-border flex justify-end gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setIsKegiatanModalOpen(false),
									className: "rounded-full bg-surface px-5 py-2.5 text-xs font-bold text-muted-foreground hover:text-foreground cursor-pointer",
									children: "Batal"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "rounded-full bg-primary px-6 py-2.5 text-xs font-extrabold text-primary-foreground shadow-card cursor-pointer",
									children: "Simpan Kegiatan"
								})]
							})
						]
					})]
				})
			}),
			isLandmarkModalOpen && editingLandmark && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: isLandmarkModalOpen,
				onOpenChange: () => setIsLandmarkModalOpen(false),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-lg overflow-hidden rounded-3xl p-6 sm:p-8 bg-card border-border shadow-2xl max-h-[90vh] overflow-y-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "text-xl font-extrabold text-foreground",
						children: "Edit Landmark / Daya Tarik Wisata"
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSaveLandmark,
						className: "mt-4 space-y-4 text-xs sm:text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block font-bold uppercase text-foreground text-xs mb-1",
								children: "Nama Tempat / Daya Tarik"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								required: true,
								value: editingLandmark.nama || "",
								onChange: (e) => setEditingLandmark({
									...editingLandmark,
									nama: e.target.value
								}),
								className: "w-full rounded-2xl border border-border bg-surface px-4 py-2.5 font-semibold text-foreground"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block font-bold uppercase text-foreground text-xs mb-1",
								children: "Kategori"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								required: true,
								value: editingLandmark.kategori || "",
								onChange: (e) => setEditingLandmark({
									...editingLandmark,
									kategori: e.target.value
								}),
								className: "w-full rounded-2xl border border-border bg-surface px-4 py-2.5 font-semibold text-foreground"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block font-bold uppercase text-foreground text-xs mb-1",
									children: "Lintang (Lat)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									step: "any",
									value: editingLandmark.lat ?? 1.1278,
									onChange: (e) => setEditingLandmark({
										...editingLandmark,
										lat: parseFloat(e.target.value) || 1.1278
									}),
									className: "w-full rounded-2xl border border-border bg-surface px-4 py-2.5 font-semibold text-foreground"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block font-bold uppercase text-foreground text-xs mb-1",
									children: "Bujur (Lng)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									step: "any",
									value: editingLandmark.lng ?? 104.3621,
									onChange: (e) => setEditingLandmark({
										...editingLandmark,
										lng: parseFloat(e.target.value) || 104.3621
									}),
									className: "w-full rounded-2xl border border-border bg-surface px-4 py-2.5 font-semibold text-foreground"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block font-bold uppercase text-foreground text-xs mb-1.5",
								children: "Foto Tempat / Landmark"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "flex items-center justify-center gap-2 rounded-2xl border border-dashed border-primary/40 bg-primary/5 px-4 py-2.5 text-xs font-bold text-primary hover:bg-primary/10 transition-all cursor-pointer",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-4" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Upload Foto dari Perangkat (HP / Laptop)" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "file",
												accept: "image/*",
												onChange: handleFileUploadForLandmark,
												className: "hidden"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										value: editingLandmark.image || "",
										onChange: (e) => setEditingLandmark({
											...editingLandmark,
											image: e.target.value
										}),
										placeholder: "Atau masukan URL gambar Web...",
										className: "w-full rounded-2xl border border-border bg-surface px-4 py-2 text-xs font-medium text-foreground"
									}),
									editingLandmark.image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-muted",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: editingLandmark.image,
											alt: "Preview",
											className: "size-full object-cover"
										})
									})
								]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block font-bold uppercase text-foreground text-xs mb-1",
								children: "Deskripsi Singkat"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								rows: 3,
								required: true,
								value: editingLandmark.deskripsi || "",
								onChange: (e) => setEditingLandmark({
									...editingLandmark,
									deskripsi: e.target.value
								}),
								className: "w-full rounded-2xl border border-border bg-surface px-4 py-2.5 font-medium text-foreground"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
								className: "pt-4 border-t border-border flex justify-end gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setIsLandmarkModalOpen(false),
									className: "rounded-full bg-surface px-5 py-2.5 text-xs font-bold text-muted-foreground hover:text-foreground cursor-pointer",
									children: "Batal"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "rounded-full bg-primary px-6 py-2.5 text-xs font-extrabold text-primary-foreground shadow-card cursor-pointer",
									children: "Simpan Landmark"
								})]
							})
						]
					})]
				})
			}),
			isUmkmModalOpen && editingUmkm && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: isUmkmModalOpen,
				onOpenChange: () => setIsUmkmModalOpen(false),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-lg overflow-hidden rounded-3xl p-6 sm:p-8 bg-card border-border shadow-2xl max-h-[90vh] overflow-y-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "text-xl font-extrabold text-foreground",
						children: "Edit Produk UMKM / Usaha Lokal"
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSaveUmkm,
						className: "mt-4 space-y-4 text-xs sm:text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block font-bold uppercase text-foreground text-xs mb-1",
								children: "Nama Produk / Usaha"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								required: true,
								value: editingUmkm.nama || "",
								onChange: (e) => setEditingUmkm({
									...editingUmkm,
									nama: e.target.value
								}),
								className: "w-full rounded-2xl border border-border bg-surface px-4 py-2.5 font-semibold text-foreground"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block font-bold uppercase text-foreground text-xs mb-1",
										children: "Kategori Produk"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										value: editingUmkm.kategori || "Kuliner & Olahan Pangan",
										onChange: (e) => setEditingUmkm({
											...editingUmkm,
											kategori: e.target.value
										}),
										className: "w-full rounded-2xl border border-border bg-surface px-4 py-2.5 font-semibold text-foreground",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "Kuliner & Olahan Pangan",
												children: "🍲 Kuliner & Olahan Pangan"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "Kerajinan & Produk Khas",
												children: "🎨 Kerajinan & Produk Khas"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "Oleh-oleh & Produk Kreatif",
												children: "🎁 Oleh-oleh & Produk Kreatif"
											})
										]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block font-bold uppercase text-foreground text-xs mb-1",
										children: "Informasi Harga"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										required: true,
										value: editingUmkm.hargaInfo || "",
										onChange: (e) => setEditingUmkm({
											...editingUmkm,
											hargaInfo: e.target.value
										}),
										className: "w-full rounded-2xl border border-border bg-surface px-4 py-2.5 font-semibold text-foreground"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block font-bold uppercase text-foreground text-xs mb-1",
										children: "Lokasi Usaha"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										value: editingUmkm.lokasi || "",
										onChange: (e) => setEditingUmkm({
											...editingUmkm,
											lokasi: e.target.value
										}),
										className: "w-full rounded-2xl border border-border bg-surface px-4 py-2.5 font-semibold text-foreground"
									})] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block font-bold uppercase text-foreground text-xs mb-1.5",
								children: "Foto Produk UMKM"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "flex items-center justify-center gap-2 rounded-2xl border border-dashed border-primary/40 bg-primary/5 px-4 py-2.5 text-xs font-bold text-primary hover:bg-primary/10 transition-all cursor-pointer",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-4" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Upload Foto dari Perangkat (HP / Laptop)" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "file",
												accept: "image/*",
												onChange: handleFileUploadForUmkm,
												className: "hidden"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										value: editingUmkm.image || "",
										onChange: (e) => setEditingUmkm({
											...editingUmkm,
											image: e.target.value
										}),
										placeholder: "Atau masukan URL gambar Web...",
										className: "w-full rounded-2xl border border-border bg-surface px-4 py-2 text-xs font-medium text-foreground"
									}),
									editingUmkm.image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-muted",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: editingUmkm.image,
											alt: "Preview",
											className: "size-full object-cover"
										})
									})
								]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block font-bold uppercase text-foreground text-xs mb-1",
								children: "Deskripsi Produk"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								rows: 3,
								required: true,
								value: editingUmkm.deskripsi || "",
								onChange: (e) => setEditingUmkm({
									...editingUmkm,
									deskripsi: e.target.value
								}),
								className: "w-full rounded-2xl border border-border bg-surface px-4 py-2.5 font-medium text-foreground"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
								className: "pt-4 border-t border-border flex justify-end gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setIsUmkmModalOpen(false),
									className: "rounded-full bg-surface px-5 py-2.5 text-xs font-bold text-muted-foreground hover:text-foreground cursor-pointer",
									children: "Batal"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "rounded-full bg-primary px-6 py-2.5 text-xs font-extrabold text-primary-foreground shadow-card cursor-pointer",
									children: "Simpan UMKM"
								})]
							})
						]
					})]
				})
			}),
			isReviewModalOpen && editingReview && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: isReviewModalOpen,
				onOpenChange: () => setIsReviewModalOpen(false),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-lg overflow-hidden rounded-3xl p-6 sm:p-8 bg-card border-border shadow-2xl max-h-[90vh] overflow-y-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "text-xl font-extrabold text-foreground",
						children: "Edit Ulasan Wisatawan"
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSaveReview,
						className: "mt-4 space-y-4 text-xs sm:text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block font-bold uppercase text-foreground text-xs mb-1",
								children: "Nama Pengunjung"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								required: true,
								value: editingReview.nama || "",
								onChange: (e) => setEditingReview({
									...editingReview,
									nama: e.target.value
								}),
								className: "w-full rounded-2xl border border-border bg-surface px-4 py-2.5 font-semibold text-foreground"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block font-bold uppercase text-foreground text-xs mb-1",
									children: "Kota / Negara Asal"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									required: true,
									value: editingReview.asal || "",
									onChange: (e) => setEditingReview({
										...editingReview,
										asal: e.target.value
									}),
									className: "w-full rounded-2xl border border-border bg-surface px-4 py-2.5 font-semibold text-foreground"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block font-bold uppercase text-foreground text-xs mb-1",
									children: "Rating Bintang (1–5)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: editingReview.rating || 5,
									onChange: (e) => setEditingReview({
										...editingReview,
										rating: parseInt(e.target.value) || 5
									}),
									className: "w-full rounded-2xl border border-border bg-surface px-4 py-2.5 font-semibold text-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: 5,
											children: "⭐⭐⭐⭐⭐ (5 Bintang)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: 4,
											children: "⭐⭐⭐⭐ (4 Bintang)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: 3,
											children: "⭐⭐⭐ (3 Bintang)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: 2,
											children: "⭐⭐ (2 Bintang)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: 1,
											children: "⭐ (1 Bintang)"
										})
									]
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block font-bold uppercase text-foreground text-xs mb-1",
								children: "Tipe Wisatawan"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: editingReview.tipeWisatawan || "Keluarga",
								onChange: (e) => setEditingReview({
									...editingReview,
									tipeWisatawan: e.target.value
								}),
								placeholder: "Keluarga / Mancanegara / Pasangan / Solo",
								className: "w-full rounded-2xl border border-border bg-surface px-4 py-2.5 font-medium text-foreground"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block font-bold uppercase text-foreground text-xs mb-1",
								children: "Komentar / Ulasan"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								rows: 3,
								required: true,
								value: editingReview.komentar || "",
								onChange: (e) => setEditingReview({
									...editingReview,
									komentar: e.target.value
								}),
								className: "w-full rounded-2xl border border-border bg-surface px-4 py-2.5 font-medium text-foreground"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
								className: "pt-4 border-t border-border flex justify-end gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setIsReviewModalOpen(false),
									className: "rounded-full bg-surface px-5 py-2.5 text-xs font-bold text-muted-foreground hover:text-foreground cursor-pointer",
									children: "Batal"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "rounded-full bg-primary px-6 py-2.5 text-xs font-extrabold text-primary-foreground shadow-card cursor-pointer",
									children: "Simpan Ulasan"
								})]
							})
						]
					})]
				})
			}),
			isGaleriModalOpen && editingGaleri && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: isGaleriModalOpen,
				onOpenChange: () => setIsGaleriModalOpen(false),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-lg overflow-hidden rounded-3xl p-6 sm:p-8 bg-card border-border shadow-2xl max-h-[90vh] overflow-y-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "text-xl font-extrabold text-foreground",
						children: galeriList.some((g) => g.id === editingGaleri.id) ? "Edit Foto Galeri" : "Tambah Foto Galeri Baru"
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSaveGaleri,
						className: "mt-4 space-y-4 text-xs sm:text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block font-bold uppercase text-foreground text-xs mb-1",
								children: "Judul Foto / Dokumentasi"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								required: true,
								value: editingGaleri.judul || "",
								onChange: (e) => setEditingGaleri({
									...editingGaleri,
									judul: e.target.value
								}),
								placeholder: "Contoh: Sanggar Batik Bintan",
								className: "w-full rounded-2xl border border-border bg-surface px-4 py-2.5 font-semibold text-foreground"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block font-bold uppercase text-foreground text-xs mb-1",
									children: "Kategori Foto"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: editingGaleri.kategori || "Alam",
									onChange: (e) => setEditingGaleri({
										...editingGaleri,
										kategori: e.target.value
									}),
									className: "w-full rounded-2xl border border-border bg-surface px-4 py-2.5 font-semibold text-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "Alam",
											children: "Alam"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "Mangrove",
											children: "Mangrove"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "Perkebunan",
											children: "Perkebunan"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "Budaya",
											children: "Budaya"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "Batik",
											children: "Batik"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "Kuliner",
											children: "Kuliner"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "Aktivitas Masyarakat",
											children: "Aktivitas Masyarakat"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "Kegiatan Desa",
											children: "Kegiatan Desa"
										})
									]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block font-bold uppercase text-foreground text-xs mb-1",
									children: "Sumber Foto / Lisensi"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: editingGaleri.sumber || "",
									onChange: (e) => setEditingGaleri({
										...editingGaleri,
										sumber: e.target.value
									}),
									placeholder: "Contoh: Pemdes Ekang",
									className: "w-full rounded-2xl border border-border bg-surface px-4 py-2.5 font-semibold text-foreground"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block font-bold uppercase text-foreground text-xs mb-1.5",
								children: "File Gambar / Foto Dokumentasi"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-primary/40 bg-primary/5 p-4 text-center text-xs font-bold text-primary hover:bg-primary/10 hover:border-primary transition-all cursor-pointer",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "grid size-10 place-items-center rounded-full bg-primary/10 text-primary",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-5" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block font-extrabold text-sm text-foreground",
												children: "Pilih Foto dari Perangkat (HP / Laptop)"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "block text-[11px] text-muted-foreground font-medium mt-0.5",
												children: "Format PNG, JPG, WEBP (Maksimal 8MB)"
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "file",
												accept: "image/*",
												onChange: handleFileUploadForGaleri,
												className: "hidden"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-[11px] font-bold text-muted-foreground mb-1",
										children: "Atau Gunakan Tautan / URL Gambar Web:"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										required: true,
										value: editingGaleri.image || "",
										onChange: (e) => setEditingGaleri({
											...editingGaleri,
											image: e.target.value
										}),
										placeholder: "https://images.unsplash.com/... atau Data URL",
										className: "w-full rounded-2xl border border-border bg-surface px-4 py-2.5 font-medium text-foreground text-xs"
									})] }),
									editingGaleri.image && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border bg-muted",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: editingGaleri.image,
											alt: "Pratinjau Foto",
											className: "size-full object-cover"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute top-2 right-2",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => setEditingGaleri({
													...editingGaleri,
													image: ""
												}),
												className: "rounded-full bg-rose-600/90 px-3 py-1 text-[11px] font-extrabold text-white backdrop-blur hover:bg-rose-700 shadow-md cursor-pointer",
												children: "Hapus Foto"
											})
										})]
									})
								]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block font-bold uppercase text-foreground text-xs mb-1",
								children: "Keterangan / Caption"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								rows: 3,
								required: true,
								value: editingGaleri.caption || "",
								onChange: (e) => setEditingGaleri({
									...editingGaleri,
									caption: e.target.value
								}),
								placeholder: "Jelaskan aktivitas atau keindahan lokasi dalam foto...",
								className: "w-full rounded-2xl border border-border bg-surface px-4 py-2.5 font-medium text-foreground"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block font-bold uppercase text-foreground text-xs mb-1",
								children: "Teks Aksesibilitas (Alt Text)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: editingGaleri.alt || "",
								onChange: (e) => setEditingGaleri({
									...editingGaleri,
									alt: e.target.value
								}),
								placeholder: "Deskripsi singkat gambar untuk pembaca layar...",
								className: "w-full rounded-2xl border border-border bg-surface px-4 py-2.5 font-medium text-foreground"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
								className: "pt-4 border-t border-border flex justify-end gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setIsGaleriModalOpen(false),
									className: "rounded-full bg-surface px-5 py-2.5 text-xs font-bold text-muted-foreground hover:text-foreground cursor-pointer",
									children: "Batal"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "rounded-full bg-primary px-6 py-2.5 text-xs font-extrabold text-primary-foreground shadow-card cursor-pointer",
									children: "Simpan Foto Galeri"
								})]
							})
						]
					})]
				})
			}),
			isPasswordModalOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: isPasswordModalOpen,
				onOpenChange: () => setIsPasswordModalOpen(false),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-md overflow-hidden rounded-3xl p-6 sm:p-8 bg-card border-border shadow-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
						className: "text-xl font-extrabold text-foreground flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-5 text-primary" }), "Ubah Kata Sandi Admin"]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleChangePassword,
						className: "mt-4 space-y-4 text-xs sm:text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block font-bold uppercase text-foreground text-xs mb-1",
								children: "Kata Sandi Lama"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: showOldPassword ? "text" : "password",
									required: true,
									value: oldPasswordInput,
									onChange: (e) => setOldPasswordInput(e.target.value),
									placeholder: "Masukkan kata sandi lama Anda...",
									className: "w-full rounded-2xl border border-border bg-surface pl-4 pr-12 py-3 font-medium text-foreground outline-none focus:ring-2 focus:ring-primary/20"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setShowOldPassword((prev) => !prev),
									className: "absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer rounded-lg hover:bg-black/5 dark:hover:bg-white/5",
									title: showOldPassword ? "Sembunyikan Kata Sandi" : "Tampilkan Kata Sandi",
									children: showOldPassword ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-4" })
								})]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block font-bold uppercase text-foreground text-xs mb-1",
								children: "Kata Sandi Baru (Minimal 8 Karakter)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: showNewPassword ? "text" : "password",
									required: true,
									minLength: 8,
									value: newPasswordInput,
									onChange: (e) => setNewPasswordInput(e.target.value),
									placeholder: "Ketik kata sandi baru yang kuat...",
									className: "w-full rounded-2xl border border-border bg-surface pl-4 pr-12 py-3 font-medium text-foreground outline-none focus:ring-2 focus:ring-primary/20"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setShowNewPassword((prev) => !prev),
									className: "absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer rounded-lg hover:bg-black/5 dark:hover:bg-white/5",
									title: showNewPassword ? "Sembunyikan Kata Sandi" : "Tampilkan Kata Sandi",
									children: showNewPassword ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-4" })
								})]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-2xl bg-amber-500/10 p-3 text-[11px] font-semibold text-amber-800 dark:text-amber-300",
								children: "Gunakan kombinasi huruf besar, huruf kecil, dan angka untuk kata sandi yang lebih aman."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
								className: "pt-4 border-t border-border flex justify-end gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setIsPasswordModalOpen(false),
									className: "rounded-full bg-surface px-5 py-2.5 text-xs font-bold text-muted-foreground hover:text-foreground cursor-pointer",
									children: "Batal"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "rounded-full bg-primary px-6 py-2.5 text-xs font-extrabold text-primary-foreground shadow-card cursor-pointer",
									children: "Perbarui Kata Sandi"
								})]
							})
						]
					})]
				})
			}),
			deleteConfirm.isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: deleteConfirm.isOpen,
				onOpenChange: (open) => {
					if (!open && !isDeleting) setDeleteConfirm((prev) => ({
						...prev,
						isOpen: false
					}));
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-md rounded-3xl p-6 border border-rose-500/30 bg-card shadow-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 text-rose-600 mb-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid size-10 place-items-center rounded-2xl bg-rose-500/15 border border-rose-500/30 shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-5 text-rose-600" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
								className: "text-lg font-black text-foreground",
								children: deleteConfirm.title
							})]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground font-medium leading-relaxed mt-2",
							children: deleteConfirm.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
							className: "mt-6 pt-4 border-t border-border flex items-center justify-end gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								disabled: isDeleting,
								onClick: () => setDeleteConfirm((prev) => ({
									...prev,
									isOpen: false
								})),
								className: "rounded-full bg-surface px-5 py-2.5 text-xs font-extrabold text-muted-foreground hover:text-foreground border border-border cursor-pointer transition-colors",
								children: "Batal"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								disabled: isDeleting,
								onClick: () => deleteConfirm.onConfirm(),
								className: "inline-flex items-center gap-2 rounded-full bg-rose-600 px-6 py-2.5 text-xs font-black text-white hover:bg-rose-700 shadow-md transition-all cursor-pointer disabled:opacity-50",
								children: isDeleting ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Menghapus..." })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ya, Hapus Data" })] })
							})]
						})
					]
				})
			})
		]
	});
}
//#endregion
export { AdminDashboardPage as component };
