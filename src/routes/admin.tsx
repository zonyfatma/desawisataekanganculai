import { useState, useEffect, useCallback } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  Lock,
  Unlock,
  Save,
  RotateCcw,
  Plus,
  Trash2,
  Edit,
  Eye,
  EyeOff,
  Settings,
  Calendar,
  MapPin,
  ShoppingBag,
  Package,
  Star,
  Download,
  Upload,
  CheckCircle2,
  AlertTriangle,
  Info,
  Phone,
  Mail,
  Globe,
  ExternalLink,
  Search,
  Sparkles,
  Camera,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Loader2,
  RefreshCw,
  Image,
  Link2,
} from "lucide-react";
import { useSiteData, cmsStore, type VillageInfoState, type SiteDataState } from "@/lib/cms-store";
import {
  type KegiatanItem,
  type UmkmItem,
  type LandmarkItem,
  type ReviewItem,
  type GaleriFotoItem,
  WHATSAPP_NUMBER,
} from "@/data/jadesta";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogFooter,
} from "@/components/ui/dialog";
import logoBintan from "@/assets/logo-bintan.png";

import {
  getSiteDataServerFn,
  adminLoginServerFn,
  adminLogoutServerFn,
  checkAdminAuthServerFn,
  getAdminDashboardDataServerFn,
  saveVillageInfoServerFn,
  saveDestinasiServerFn,
  deleteDestinasiServerFn,
  saveKegiatanServerFn,
  extractOgImageServerFn,
  deleteKegiatanServerFn,
  saveUmkmServerFn,
  deleteUmkmServerFn,
  saveGaleriServerFn,
  deleteGaleriServerFn,
  saveReviewServerFn,
  updateReviewStatusServerFn,
  deleteReviewServerFn,
  saveHomestayServerFn,
  deleteHomestayServerFn,
  savePaketServerFn,
  deletePaketServerFn,
  saveFaqServerFn,
  deleteFaqServerFn,
  updateReservationStatusServerFn,
  deleteReservationServerFn,
  uploadImageServerFn,
  migrateBase64ServerFn,
  changePasswordServerFn,
  checkDefaultPasswordServerFn,
  type AdminReservationRow,
} from "@/lib/server-actions";
import type { villageInfoSchema } from "@/lib/schemas";

function PaginationControls({
  currentPage,
  totalPages,
  totalItems,
  pageSize,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}) {
  if (totalPages <= 1) return null;

  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalItems);

  const pages: number[] = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border pt-4 text-xs font-semibold text-muted-foreground">
      <div>
        Menampilkan{" "}
        <strong className="text-foreground">
          {startItem}–{endItem}
        </strong>{" "}
        dari <strong className="text-foreground">{totalItems}</strong> data (Halaman{" "}
        <strong className="text-foreground">{currentPage}</strong> dari {totalPages})
      </div>

      <div className="flex items-center gap-1.5">
        <button
          type="button"
          disabled={currentPage <= 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="inline-flex items-center gap-1 rounded-xl border border-border bg-card px-3 py-1.5 text-xs font-bold text-foreground hover:bg-accent disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
        >
          <ChevronLeft className="size-3.5" />
          <span>Sebelumnya</span>
        </button>

        <div className="hidden sm:flex items-center gap-1">
          {pages.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => onPageChange(p)}
              className={`size-8 rounded-xl font-extrabold text-xs transition-colors cursor-pointer ${
                currentPage === p
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "bg-surface text-foreground hover:bg-accent border border-border"
              }`}
            >
              {p}
            </button>
          ))}
        </div>

        <button
          type="button"
          disabled={currentPage >= totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="inline-flex items-center gap-1 rounded-xl border border-border bg-card px-3 py-1.5 text-xs font-bold text-foreground hover:bg-accent disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
        >
          <span>Berikutnya</span>
          <ChevronRight className="size-3.5" />
        </button>
      </div>
    </div>
  );
}

function getErrMsg(err: unknown, fallback: string): string {
  if (err instanceof Error) return err.message;
  if (typeof err === "string") return err;
  return fallback;
}

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin Panel | Pengelolaan Desa Wisata Ekang Anculai" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminDashboardPage,
});

function AdminDashboardPage() {
  const siteData = useSiteData();
  const villageInfo = siteData?.villageInfo;
  const kegiatanList = siteData?.kegiatanList || [];
  const landmarkList = siteData?.landmarkList || [];
  const umkmList = siteData?.umkmList || [];
  const reviews = siteData?.reviews || [];
  const galeriList = siteData?.galeriItems || [];

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [usernameInput, setUsernameInput] = useState("");
  const [pinInput, setPinInput] = useState("");
  const [pinError, setPinError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState<
    "galeri" | "kegiatan" | "landmark" | "umkm" | "reviews" | "reservasi" | "info" | "backup"
  >("reservasi");

  const [reservationsList, setReservationsList] = useState<AdminReservationRow[]>([]);
  const [reservationStatusFilter, setReservationStatusFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const [reservationPage, setReservationPage] = useState(1);
  const [galeriPage, setGaleriPage] = useState(1);
  const [reviewPage, setReviewPage] = useState(1);
  const PAGE_SIZE = 12;

  const [isDefaultPasswordWarning, setIsDefaultPasswordWarning] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [oldPasswordInput, setOldPasswordInput] = useState("");
  const [newPasswordInput, setNewPasswordInput] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  useEffect(() => {
    setReservationPage(1);
    setGaleriPage(1);
    setReviewPage(1);
  }, [searchQuery, reservationStatusFilter]);

  const checkDefaultPasswordStatus = useCallback(async () => {
    try {
      const res = await checkDefaultPasswordServerFn();
      if (res.isDefaultPassword) {
        setIsDefaultPasswordWarning(true);
      } else {
        setIsDefaultPasswordWarning(false);
      }
    } catch {
      // ignore
    }
  }, []);

  const refreshSiteData = async () => {
    try {
      const serverData = await getSiteDataServerFn();
      if (serverData) {
        cmsStore.setSiteData(serverData as Partial<SiteDataState>);
      }
    } catch (err) {
      if (import.meta.env.DEV) console.error("Gagal menyegarkan data:", err);
    }
  };

  const fetchAdminData = useCallback(async () => {
    try {
      const [data, freshSiteData] = await Promise.all([
        getAdminDashboardDataServerFn({ data: {} }),
        getSiteDataServerFn(),
      ]);
      if (data && data.reservations) {
        setReservationsList(data.reservations);
      }
      if (freshSiteData) {
        cmsStore.setSiteData(freshSiteData as Partial<SiteDataState>);
      }
      checkDefaultPasswordStatus();
    } catch (err) {
      if (import.meta.env.DEV) console.error(err);
    }
  }, [checkDefaultPasswordStatus]);

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await changePasswordServerFn({
        data: { oldPassword: oldPasswordInput, newPassword: newPasswordInput },
      });
      toast.success("Kata sandi admin berhasil diperbarui!");
      setIsPasswordModalOpen(false);
      setIsDefaultPasswordWarning(false);
      setOldPasswordInput("");
      setNewPasswordInput("");
    } catch (err: unknown) {
      toast.error(getErrMsg(err, "Gagal mengubah kata sandi."));
    }
  };

  // Local form state for Village Info
  const [infoForm, setInfoForm] = useState<VillageInfoState>(
    () =>
      villageInfo || {
        nama: "Desa Wisata Ekang Anculai",
        tagline: "Desa Wisata Hijau dan Kreatif Bintan",
        whatsapp: WHATSAPP_NUMBER,
        email: "reservation@desawisataekanganculai.id",
        alamat:
          "Jl. Jendral Sudirman, Kp. Sukoharjo, Desa Ekang Anculai, Kec. Teluk Sebong, Kab. Bintan",
        luasDesa: "5.623 Hektare",
        luasKawasanWisata: "13 Hektare",
        jamOperasional: "08.00–17.00 WIB",
        waktuTerbaik: "Mei – September",
        pokdarwis: "Pengelola Pesona Ekang",
        instagram: "@desawisataekang",
        facebook: "Desa Wisata Ekang Anculai",
        tiktok: "@desawisataekang",
        pemdesWebsite: "https://desaekanganculai.bintankab.go.id/",
      },
  );

  // Modals state
  const [editingKegiatan, setEditingKegiatan] = useState<KegiatanItem | null>(null);
  const [isKegiatanModalOpen, setIsKegiatanModalOpen] = useState(false);
  const [isExtractingOg, setIsExtractingOg] = useState(false);
  const [ogExtractStatus, setOgExtractStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const [editingLandmark, setEditingLandmark] = useState<LandmarkItem | null>(null);
  const [isLandmarkModalOpen, setIsLandmarkModalOpen] = useState(false);

  const [editingUmkm, setEditingUmkm] = useState<UmkmItem | null>(null);
  const [isUmkmModalOpen, setIsUmkmModalOpen] = useState(false);

  const [editingReview, setEditingReview] = useState<ReviewItem | null>(null);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  const [editingGaleri, setEditingGaleri] = useState<GaleriFotoItem | null>(null);
  const [isGaleriModalOpen, setIsGaleriModalOpen] = useState(false);

  const [deleteConfirm, setDeleteConfirm] = useState<{
    isOpen: boolean;
    title: string;
    description: string;
    onConfirm: () => Promise<void>;
  }>({
    isOpen: false,
    title: "",
    description: "",
    onConfirm: async () => {},
  });
  const [isDeleting, setIsDeleting] = useState(false);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Verify session with backend server via HttpOnly cookie
    checkAdminAuthServerFn()
      .then((res) => {
        if (res.isAuthenticated) {
          setIsAuthenticated(true);
          fetchAdminData();
        } else {
          setIsAuthenticated(false);
        }
      })
      .catch(() => {
        setIsAuthenticated(false);
      });
  }, [fetchAdminData]);

  useEffect(() => {
    if (isAuthenticated) {
      fetchAdminData();
    }
  }, [isAuthenticated, activeTab, fetchAdminData]);

  useEffect(() => {
    if (villageInfo) {
      setInfoForm(villageInfo);
    }
  }, [villageInfo]);

  if (!mounted) {
    return (
      <div className="min-h-screen grid place-items-center bg-surface p-6">
        <div className="flex items-center gap-3 text-sm font-bold text-muted-foreground">
          <div className="size-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          <span>Memuat Panel Pengelola...</span>
        </div>
      </div>
    );
  }

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPinError("");
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const username = String(formData.get("username") || usernameInput).trim();
    const password = String(formData.get("password") || pinInput).trim();

    try {
      const res = await adminLoginServerFn({
        data: {
          username,
          password,
        },
      });

      if (res.success && res.user) {
        setIsAuthenticated(true);
        toast.success(`Login terautentikasi! Selamat datang ${res.user.username}.`);
        fetchAdminData();
      } else {
        const msg = res.message || "Username atau kata sandi tidak valid.";
        setPinError(msg);
        toast.error(msg);
      }
    } catch (err: unknown) {
      let msg = getErrMsg(err, "Gagal masuk. Terjadi kesalahan pada server.");
      if (
        typeof msg === "string" &&
        (msg.includes("<!doctype html") ||
          msg.includes("<html") ||
          msg.trim().startsWith("<") ||
          msg.includes("500"))
      ) {
        msg = "Gagal terhubung ke server otentikasi. Silakan coba beberapa saat lagi.";
      }
      setPinError(msg);
      toast.error(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLogout = async () => {
    try {
      await adminLogoutServerFn();
    } catch {
      // ignore
    } finally {
      setIsAuthenticated(false);
      toast.info("Anda telah keluar dari Panel Admin.");
    }
  };

  const getToken = () => "";

  const handleSaveInfo = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = getToken();
      await saveVillageInfoServerFn({
        data: { token, info: infoForm as unknown as typeof villageInfoSchema._input.info },
      });
      toast.success("Informasi & Kontak Desa berhasil disimpan ke database!");
      await refreshSiteData();
    } catch (err: unknown) {
      toast.error(getErrMsg(err, "Gagal menyimpan informasi desa."));
    }
  };

  // --- CRUD KEGIATAN & OG IMAGE EXTRACTION ---
  const handleExtractOgImage = async () => {
    const sourceUrl = editingKegiatan?.source?.url;
    if (!sourceUrl || !sourceUrl.trim()) {
      toast.error("Silakan masukkan URL publikasi terlebih dahulu.");
      setOgExtractStatus({
        type: "error",
        message: "URL publikasi wajib diisi terlebih dahulu.",
      });
      return;
    }

    setIsExtractingOg(true);
    setOgExtractStatus(null);
    toast.info("Mengakses server & mengekstrak foto dari publikasi...");

    try {
      const token = getToken();
      const res = await extractOgImageServerFn({ data: { token, url: sourceUrl } });

      if (res.success && res.imageUrl) {
        setEditingKegiatan((prev) =>
          prev
            ? {
                ...prev,
                image: res.imageUrl!,
                image_source: "source_url",
              }
            : null,
        );
        setOgExtractStatus({
          type: "success",
          message: "✓ Foto utama publikasi berhasil ditemukan!",
        });
        toast.success("Foto utama publikasi berhasil diambil!");
      } else {
        const err = res.error || "Foto utama tidak ditemukan pada halaman tersebut.";
        setOgExtractStatus({ type: "error", message: err });
        toast.error(err);
      }
    } catch (err: unknown) {
      const msg = getErrMsg(err, "Gagal mengambil foto dari URL publikasi.");
      setOgExtractStatus({ type: "error", message: msg });
      toast.error(msg);
    } finally {
      setIsExtractingOg(false);
    }
  };

  const handleSaveKegiatan = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingKegiatan) return;

    try {
      const token = getToken();
      await saveKegiatanServerFn({ data: { token, item: editingKegiatan } });
      setIsKegiatanModalOpen(false);
      setEditingKegiatan(null);
      toast.success("Kegiatan desa berhasil disimpan ke database!");
      await refreshSiteData();
    } catch (err: unknown) {
      toast.error(getErrMsg(err, "Gagal menyimpan kegiatan desa."));
    }
  };

  const handleDeleteKegiatan = (id: string, title?: string) => {
    setDeleteConfirm({
      isOpen: true,
      title: title ? `Hapus Kegiatan "${title}"?` : "Hapus Kegiatan Ini?",
      description: "Data kegiatan desa ini akan dihapus secara permanen dari database.",
      onConfirm: async () => {
        setIsDeleting(true);
        try {
          const token = getToken();
          await deleteKegiatanServerFn({ data: { token, id } });
          toast.success("Kegiatan desa telah dihapus dari database.");
          await refreshSiteData();
        } catch (err: unknown) {
          toast.error(getErrMsg(err, "Gagal menghapus kegiatan."));
        } finally {
          setIsDeleting(false);
          setDeleteConfirm((prev) => ({ ...prev, isOpen: false }));
        }
      },
    });
  };

  // --- CRUD LANDMARK ---
  const handleSaveLandmark = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingLandmark) return;

    try {
      const token = getToken();
      await saveDestinasiServerFn({ data: { token, item: editingLandmark } });
      setIsLandmarkModalOpen(false);
      setEditingLandmark(null);
      toast.success("Daya Tarik / Landmark berhasil disimpan ke database!");
      await refreshSiteData();
    } catch (err: unknown) {
      toast.error(getErrMsg(err, "Gagal menyimpan landmark."));
    }
  };

  const handleDeleteLandmark = (id: string, name?: string) => {
    setDeleteConfirm({
      isOpen: true,
      title: name ? `Hapus Landmark "${name}"?` : "Hapus Landmark Ini?",
      description: "Data landmark/destinasi ini akan dihapus secara permanen dari database.",
      onConfirm: async () => {
        setIsDeleting(true);
        try {
          const token = getToken();
          await deleteDestinasiServerFn({ data: { token, id } });
          toast.success("Landmark telah dihapus dari database.");
          await refreshSiteData();
        } catch (err: unknown) {
          toast.error(getErrMsg(err, "Gagal menghapus landmark."));
        } finally {
          setIsDeleting(false);
          setDeleteConfirm((prev) => ({ ...prev, isOpen: false }));
        }
      },
    });
  };

  // --- CRUD UMKM ---
  const handleSaveUmkm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingUmkm) return;

    try {
      const token = getToken();
      await saveUmkmServerFn({ data: { token, item: editingUmkm } });
      setIsUmkmModalOpen(false);
      setEditingUmkm(null);
      toast.success("Produk UMKM berhasil disimpan ke database!");
      await refreshSiteData();
    } catch (err: unknown) {
      toast.error(getErrMsg(err, "Gagal menyimpan produk UMKM."));
    }
  };

  const handleDeleteUmkm = (id: string, name?: string) => {
    setDeleteConfirm({
      isOpen: true,
      title: name ? `Hapus Produk UMKM "${name}"?` : "Hapus Produk UMKM Ini?",
      description: "Data produk UMKM ini akan dihapus secara permanen dari database.",
      onConfirm: async () => {
        setIsDeleting(true);
        try {
          const token = getToken();
          await deleteUmkmServerFn({ data: { token, id } });
          toast.success("Produk UMKM telah dihapus dari database.");
          await refreshSiteData();
        } catch (err: unknown) {
          toast.error(getErrMsg(err, "Gagal menghapus UMKM."));
        } finally {
          setIsDeleting(false);
          setDeleteConfirm((prev) => ({ ...prev, isOpen: false }));
        }
      },
    });
  };

  // --- CRUD REVIEWS ---
  const handleSaveReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingReview) return;

    try {
      const token = getToken();
      await saveReviewServerFn({ data: { token, item: editingReview } });
      setIsReviewModalOpen(false);
      setEditingReview(null);
      toast.success("Ulasan wisatawan berhasil disimpan ke database!");
      await refreshSiteData();
    } catch (err: unknown) {
      toast.error(getErrMsg(err, "Gagal menyimpan ulasan."));
    }
  };

  const handleUpdateReviewStatus = async (id: string, status: string) => {
    try {
      const token = getToken();
      await updateReviewStatusServerFn({ data: { token, id, status } });
      toast.success(`Status ulasan diperbarui menjadi '${status}'!`);
      await refreshSiteData();
    } catch (err: unknown) {
      toast.error(getErrMsg(err, "Gagal mengbarui status ulasan."));
    }
  };

  const handleDeleteReview = (id: string, author?: string) => {
    setDeleteConfirm({
      isOpen: true,
      title: author ? `Hapus Ulasan dari "${author}"?` : "Hapus Ulasan Ini?",
      description: "Ulasan wisatawan ini akan dihapus secara permanen dari database.",
      onConfirm: async () => {
        setIsDeleting(true);
        try {
          const token = getToken();
          await deleteReviewServerFn({ data: { token, id } });
          toast.success("Ulasan telah dihapus dari database.");
          await refreshSiteData();
        } catch (err: unknown) {
          toast.error(getErrMsg(err, "Gagal menghapus ulasan."));
        } finally {
          setIsDeleting(false);
          setDeleteConfirm((prev) => ({ ...prev, isOpen: false }));
        }
      },
    });
  };

  // --- CRUD GALERI ---
  const handleSaveGaleri = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingGaleri) return;

    try {
      const token = getToken();
      await saveGaleriServerFn({ data: { token, item: editingGaleri } });
      setIsGaleriModalOpen(false);
      setEditingGaleri(null);
      toast.success("Foto galeri berhasil disimpan ke database!");
      await refreshSiteData();
    } catch (err: unknown) {
      toast.error(getErrMsg(err, "Gagal menyimpan foto galeri."));
    }
  };

  const handleDeleteGaleri = (id: string, title?: string) => {
    setDeleteConfirm({
      isOpen: true,
      title: title ? `Hapus Foto "${title}"?` : "Hapus Foto Galeri Ini?",
      description: "Foto galeri ini akan dihapus secara permanen dari database.",
      onConfirm: async () => {
        setIsDeleting(true);
        try {
          const token = getToken();
          await deleteGaleriServerFn({ data: { token, id } });
          toast.success("Foto galeri telah dihapus dari database.");
          await refreshSiteData();
        } catch (err: unknown) {
          toast.error(getErrMsg(err, "Gagal menghapus galeri."));
        } finally {
          setIsDeleting(false);
          setDeleteConfirm((prev) => ({ ...prev, isOpen: false }));
        }
      },
    });
  };

  // --- CRUD RESERVASI ---
  const handleUpdateReservationStatus = async (id: string, status: string) => {
    try {
      // Optimistic instant state update
      setReservationsList((prev) => prev.map((r) => (r.id === id ? { ...r, status } : r)));
      const token = getToken();
      await updateReservationStatusServerFn({ data: { token, id, status } });
      const statusLabels: Record<string, string> = {
        confirmed: "TERKONFIRMASI (Disetujui)",
        completed: "SELESAI (Kunjungan Tuntas)",
        cancelled: "DIBATALKAN",
        pending: "MENUNGGU KONFIRMASI",
      };
      toast.success(
        `Status reservasi berhasil diubah: ${statusLabels[status] || status.toUpperCase()}`,
      );
      fetchAdminData();
    } catch (err: unknown) {
      toast.error(getErrMsg(err, "Gagal memperbarui status reservasi."));
      fetchAdminData();
    }
  };

  const handleDeleteReservation = (id: string, code?: string) => {
    setDeleteConfirm({
      isOpen: true,
      title: code ? `Hapus Reservasi "${code}"?` : "Hapus Data Reservasi Ini?",
      description: "Data reservasi pemesanan ini akan dihapus secara permanen dari database.",
      onConfirm: async () => {
        setIsDeleting(true);
        try {
          const token = getToken();
          await deleteReservationServerFn({ data: { token, id } });
          toast.success("Data reservasi telah dihapus dari database.");
          fetchAdminData();
        } catch (err: unknown) {
          toast.error(getErrMsg(err, "Gagal menghapus data reservasi."));
        } finally {
          setIsDeleting(false);
          setDeleteConfirm((prev) => ({ ...prev, isOpen: false }));
        }
      },
    });
  };

  const handleResetData = () => {
    setDeleteConfirm({
      isOpen: true,
      title: "Reset Seluruh Data Website ke Default?",
      description:
        "Tindakan ini akan mengembalikan data website ke setelan awal. Harap berhati-hati.",
      onConfirm: async () => {
        setIsDeleting(true);
        try {
          cmsStore.setSiteData({ ...cmsStore.getSnapshot() });
          toast.success("Data berhasil di-reset ke setelan awal.");
        } finally {
          setIsDeleting(false);
          setDeleteConfirm((prev) => ({ ...prev, isOpen: false }));
        }
      },
    });
  };

  const handleCreateKegiatan = () => {
    setEditingKegiatan({
      id: `kg-${Date.now()}`,
      judul: "",
      kategori: "Pemberdayaan Masyarakat",
      deskripsi: "",
      tanggal: new Date().toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      image: "",
      source: {
        name: "Pemerintah Desa Ekang Anculai",
        url: villageInfo?.pemdesWebsite || "https://desaekanganculai.bintankab.go.id/",
        publishedAt: new Date().toISOString().slice(0, 10),
      },
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
        url: villageInfo?.pemdesWebsite || "https://desaekanganculai.bintankab.go.id/",
      },
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
        publishedAt: new Date().toISOString().slice(0, 10),
      },
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
      sumber: "Pemerintah Desa Ekang Anculai & Pengelola",
    });
    setIsGaleriModalOpen(true);
  };

  const processFileUpload = async (
    file: File,
    category:
      "destinations" | "packages" | "umkm" | "homestays" | "kegiatan" | "galleries" | "news",
    onSuccess: (url: string) => void,
  ) => {
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      toast.error("Ukuran file foto terlalu besar (maksimal 5MB).");
      return;
    }

    const validTypes = ["image/jpeg", "image/png", "image/webp", "image/jpg"];
    if (!validTypes.includes(file.type.toLowerCase())) {
      toast.error("Format file tidak diizinkan! Gunakan format JPG, PNG, atau WebP.");
      return;
    }

    const toastId = toast.loading("Mengunggah & mengompresi foto ke WebP...");

    const reader = new FileReader();
    reader.onload = async (event) => {
      const result = event.target?.result as string;
      if (result) {
        try {
          const token = getToken();
          const res = await uploadImageServerFn({
            data: { token, category, base64Data: result },
          });
          if (res?.url) {
            onSuccess(res.url);
            toast.success("Foto berhasil diunggah & dioptimasi ke WebP!", { id: toastId });
          } else {
            toast.error("Gagal mengunggah foto.", { id: toastId });
          }
        } catch (err: unknown) {
          toast.error(getErrMsg(err, "Gagal mengunggah foto ke server."), { id: toastId });
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleFileUploadForGaleri = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    processFileUpload(file, "galleries", (url) => {
      setEditingGaleri((prev) => (prev ? { ...prev, image: url } : null));
    });
  };

  const handleFileUploadForKegiatan = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    processFileUpload(file, "kegiatan", (url) => {
      setEditingKegiatan((prev) => (prev ? { ...prev, image: url } : null));
    });
  };

  const handleFileUploadForLandmark = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    processFileUpload(file, "destinations", (url) => {
      setEditingLandmark((prev) => (prev ? { ...prev, image: url } : null));
    });
  };

  const handleFileUploadForUmkm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    processFileUpload(file, "umkm", (url) => {
      setEditingUmkm((prev) => (prev ? { ...prev, image: url } : null));
    });
  };

  // --- EXPORT & IMPORT JSON ---
  const handleExportJSON = () => {
    const dataStr =
      "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(siteData, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute(
      "download",
      `backup-ekang-anculai-${new Date().toISOString().slice(0, 10)}.json`,
    );
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    toast.success("File cadangan JSON berhasil diunduh!");
  };

  const handleImportJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (parsed.villageInfo && parsed.kegiatanList) {
          cmsStore.updateData(() => parsed);
          toast.success("Data website berhasil dipulihkan dari file cadangan!");
        } else {
          toast.error("Format file JSON tidak valid.");
        }
      } catch (err) {
        toast.error("Gagal membaca file JSON.");
      }
    };
    reader.readAsText(file);
  };

  // Login Screen if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen grid place-items-center bg-surface p-4 sm:p-6">
        <div className="w-full max-w-md rounded-3xl border border-border bg-card p-8 shadow-2xl">
          <div className="text-center">
            <div className="mx-auto grid size-16 place-items-center rounded-2xl bg-primary/10 text-primary">
              <img src={logoBintan} alt="Logo Bintan" className="size-10 object-contain" />
            </div>
            <h1 className="mt-4 text-2xl font-black text-foreground tracking-tight">
              Login Pengelola Website
            </h1>
            <p className="mt-1 text-xs text-muted-foreground font-medium">
              Desa Wisata Ekang Anculai — Pengelola Wisata Pesona Ekang
            </p>
          </div>

          <div className="rounded-2xl bg-amber-500/10 border border-amber-500/30 p-3.5 mt-5 text-center text-xs text-amber-900 dark:text-amber-200">
            <span className="font-extrabold block uppercase tracking-wider text-[10px] text-amber-700 dark:text-amber-300">
              🔒 Portal Otentikasi Khusus Admin
            </span>
            <span className="mt-0.5 block">
              Halaman ini khusus untuk personel Pengelola Wisata & Pemdes Ekang Anculai.
            </span>
          </div>

          <form onSubmit={handleLogin} className="mt-6 space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                Username Administrator:
              </label>
              <input
                name="username"
                type="text"
                value={usernameInput}
                onChange={(e) => setUsernameInput(e.target.value)}
                placeholder="Masukkan username (contoh: admin)"
                className="w-full rounded-2xl border border-border bg-surface px-4 py-3.5 text-sm font-semibold text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                autoFocus
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                Kata Sandi Administrator:
              </label>
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  placeholder="Masukkan kata sandi"
                  className="w-full rounded-2xl border border-border bg-surface pl-4 pr-12 py-3.5 text-sm font-semibold text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer rounded-lg hover:bg-black/5 dark:hover:bg-white/5"
                  title={showPassword ? "Sembunyikan Kata Sandi" : "Tampilkan Kata Sandi"}
                >
                  {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                </button>
              </div>
              {pinError && <p className="mt-2 text-xs font-bold text-rose-500">{pinError}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-2xl bg-primary py-4 text-xs font-extrabold text-primary-foreground shadow-card hover:bg-primary/90 transition-all cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? "Memproses Otentikasi..." : "Masuk ke Panel Pengelola"}
            </button>
          </form>

          <div className="mt-6 border-t border-border pt-4 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-1 text-xs font-extrabold text-primary hover:underline"
            >
              <span>← Kembali ke Website Publik Desa</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface pb-20">
      {/* Top Header Navigation */}
      <header className="sticky top-0 z-30 border-b border-border bg-card/95 backdrop-blur shadow-soft">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={logoBintan} alt="Logo Bintan" className="h-9 w-auto object-contain" />
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-black text-foreground">
                  Panel CMS & Pengelola Website
                </h1>
                <span className="rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[10px] font-black text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
                  ONLINE
                </span>
              </div>
              <p className="text-xs font-semibold text-muted-foreground">
                Desa Wisata Ekang Anculai • Pengelola Wisata Pesona Ekang
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setIsPasswordModalOpen(true)}
              className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-2 text-xs font-extrabold text-amber-700 dark:text-amber-300 hover:bg-amber-500/20 transition-all cursor-pointer"
            >
              <Lock className="size-3.5" />
              <span>Ubah Kata Sandi</span>
            </button>

            <Link
              to="/"
              target="_blank"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-4 py-2 text-xs font-extrabold text-foreground hover:bg-card transition-all"
            >
              <Eye className="size-3.5 text-primary" />
              <span>Pratinjau Live Website</span>
              <ExternalLink className="size-3 text-muted-foreground" />
            </Link>

            <button
              onClick={handleResetData}
              className="inline-flex items-center gap-1.5 rounded-full border border-rose-500/30 bg-rose-500/10 px-4 py-2 text-xs font-extrabold text-rose-700 dark:text-rose-300 hover:bg-rose-500/20 transition-all cursor-pointer"
            >
              <RotateCcw className="size-3.5" />
              <span>Reset Default</span>
            </button>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 rounded-full bg-surface border border-border px-4 py-2 text-xs font-extrabold text-muted-foreground hover:text-foreground cursor-pointer"
            >
              <Lock className="size-3.5" />
              <span>Keluar</span>
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-6">
        {/* Security Warning Banner for First Deployment */}
        {isDefaultPasswordWarning && (
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-3xl border border-rose-500/40 bg-rose-500/10 p-5 text-rose-900 dark:text-rose-200">
            <div className="flex items-center gap-3">
              <div className="grid size-10 shrink-0 place-items-center rounded-full bg-rose-500/20 text-rose-600">
                <ShieldCheck className="size-6" />
              </div>
              <div>
                <h3 className="text-sm font-extrabold">PERINGATAN KEAMANAN PRODUKSI</h3>
                <p className="text-xs font-medium text-rose-700 dark:text-rose-300">
                  Akun pengelola masih menggunakan kata sandi bawaan pertama ('admin123'). Harap
                  ubah kata sandi demi keamanan server.
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsPasswordModalOpen(true)}
              className="inline-flex items-center gap-2 rounded-full bg-rose-600 px-5 py-2 text-xs font-extrabold text-white hover:bg-rose-700 transition-all shadow-md shrink-0 cursor-pointer"
            >
              <Lock className="size-3.5" />
              <span>Ubah Kata Sandi Sekarang</span>
            </button>
          </div>
        )}
        {/* Stat Cards Summary */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="rounded-2xl border border-border bg-card p-4 shadow-soft">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase text-muted-foreground">
                Kunjungan
              </span>
              <button
                onClick={() => {
                  cmsStore.resetVisitCount();
                  toast.success("Hitungan kunjungan berhasil di-reset ke 0.");
                }}
                title="Reset Hitungan Kunjungan"
                className="grid size-6 place-items-center rounded-lg bg-surface text-muted-foreground hover:text-rose-600 transition-colors cursor-pointer"
              >
                <RotateCcw className="size-3.5" />
              </button>
            </div>
            <p className="mt-2 text-2xl sm:text-3xl font-black text-emerald-700 dark:text-emerald-400">
              {(siteData?.visitCount ?? 0).toLocaleString("id-ID")}
            </p>
            <span className="text-[11px] font-semibold text-muted-foreground">
              Total Pageviews ({siteData?.uniqueVisitors ?? 1} Pengunjung Unik)
            </span>
          </div>

          <div className="rounded-2xl border border-border bg-card p-4 shadow-soft">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase text-muted-foreground">
                Galeri Foto
              </span>
              <Camera className="size-5 text-sky-600" />
            </div>
            <p className="mt-2 text-2xl sm:text-3xl font-black text-foreground">
              {galeriList.length}
            </p>
            <span className="text-[11px] font-semibold text-muted-foreground">
              Dokumentasi Desa
            </span>
          </div>

          <div className="rounded-2xl border border-border bg-card p-4 shadow-soft">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase text-muted-foreground">
                Kegiatan
              </span>
              <Calendar className="size-5 text-primary" />
            </div>
            <p className="mt-2 text-2xl sm:text-3xl font-black text-foreground">
              {kegiatanList.length}
            </p>
            <span className="text-[11px] font-semibold text-muted-foreground">
              Agenda & Berita 2026
            </span>
          </div>

          <div className="rounded-2xl border border-border bg-card p-4 shadow-soft">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase text-muted-foreground">
                Landmark
              </span>
              <MapPin className="size-5 text-gold" />
            </div>
            <p className="mt-2 text-2xl sm:text-3xl font-black text-foreground">
              {landmarkList.length}
            </p>
            <span className="text-[11px] font-semibold text-muted-foreground">
              5 Ikon Utama & Tempat
            </span>
          </div>

          <div className="rounded-2xl border border-border bg-card p-4 shadow-soft">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase text-muted-foreground">
                Produk UMKM
              </span>
              <ShoppingBag className="size-5 text-amber-600" />
            </div>
            <p className="mt-2 text-2xl sm:text-3xl font-black text-foreground">
              {umkmList.length}
            </p>
            <span className="text-[11px] font-semibold text-muted-foreground">
              Kreatif & Kuliner
            </span>
          </div>

          <div className="rounded-2xl border border-border bg-card p-4 shadow-soft">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase text-muted-foreground">Ulasan</span>
              <Star className="size-5 text-amber-500 fill-amber-500" />
            </div>
            <p className="mt-2 text-2xl sm:text-3xl font-black text-foreground">{reviews.length}</p>
            <span className="text-[11px] font-semibold text-muted-foreground">
              Testimoni Pengunjung
            </span>
          </div>
        </div>

        {/* Quick Actions Bar */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft">
          <div className="flex items-center gap-2">
            <Sparkles className="size-4 text-[#C58A32]" />
            <span className="text-xs font-extrabold text-foreground uppercase tracking-wider">
              Aksi Cepat Pengelola:
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => {
                setActiveTab("kegiatan");
                handleCreateKegiatan();
              }}
              className="inline-flex items-center gap-1.5 rounded-full bg-[#14532D] px-3.5 py-1.5 text-xs font-extrabold text-white hover:bg-[#064E3B] transition-all cursor-pointer shadow-sm"
            >
              <Plus className="size-3.5" />
              <span>Kegiatan / Berita</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveTab("landmark");
                handleCreateLandmark();
              }}
              className="inline-flex items-center gap-1.5 rounded-full bg-[#14532D] px-3.5 py-1.5 text-xs font-extrabold text-white hover:bg-[#064E3B] transition-all cursor-pointer shadow-sm"
            >
              <Plus className="size-3.5" />
              <span>Daya Tarik / Landmark</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveTab("umkm");
                handleCreateUmkm();
              }}
              className="inline-flex items-center gap-1.5 rounded-full bg-[#14532D] px-3.5 py-1.5 text-xs font-extrabold text-white hover:bg-[#064E3B] transition-all cursor-pointer shadow-sm"
            >
              <Plus className="size-3.5" />
              <span>Produk UMKM</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveTab("galeri");
                handleCreateGaleri();
              }}
              className="inline-flex items-center gap-1.5 rounded-full bg-[#C58A32] px-3.5 py-1.5 text-xs font-extrabold text-white hover:bg-[#A87226] transition-all cursor-pointer shadow-sm"
            >
              <Camera className="size-3.5 text-white" />
              <span>Upload Foto Galeri</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mt-8 border-b border-border overflow-x-auto no-scrollbar">
          <nav className="flex gap-2 sm:gap-4 -mb-px min-w-max pb-1">
            {[
              {
                id: "reservasi",
                label: `Reservasi (${reservationsList.length})`,
                icon: MessageCircle,
              },
              { id: "info", label: "Informasi & Kontak", icon: Settings },
              {
                id: "kegiatan",
                label: `Berita & Kegiatan (${kegiatanList.length})`,
                icon: Calendar,
              },
              {
                id: "landmark",
                label: `Landmark & Daya Tarik (${landmarkList.length})`,
                icon: MapPin,
              },
              { id: "umkm", label: `Produk UMKM (${umkmList.length})`, icon: ShoppingBag },
              { id: "galeri", label: `Galeri Foto (${galeriList.length})`, icon: Camera },
              { id: "reviews", label: `Ulasan (${reviews.length})`, icon: Star },
              { id: "backup", label: "Cadangan & Backup", icon: Download },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() =>
                    setActiveTab(
                      tab.id as
                        | "galeri"
                        | "kegiatan"
                        | "landmark"
                        | "umkm"
                        | "reviews"
                        | "reservasi"
                        | "info"
                        | "backup",
                    )
                  }
                  className={`inline-flex items-center gap-2 border-b-2 px-4 py-3 text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                    isActive
                      ? "border-primary text-primary bg-primary/5 rounded-t-xl"
                      : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                  }`}
                >
                  <Icon className="size-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* --- TAB RESERVASI MANAGEMENT --- */}
        {activeTab === "reservasi" && (
          <div className="mt-8 space-y-6">
            {/* Header & Quick Filter Pills */}
            <div className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-lg font-extrabold text-foreground flex items-center gap-2">
                    <MessageCircle className="size-5 text-primary" />
                    <span>Kelola Reservasi Wisatawan</span>
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Seluruh pemesanan wisatawan tersimpan otomatis di database dengan Kode Reservasi
                    Unik (misal EA-2026-E992).
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <div className="relative w-full sm:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Cari pemesan / kode..."
                      className="w-full rounded-2xl border border-border bg-surface pl-9 pr-3 py-1.5 text-xs font-semibold text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={() => setSearchQuery("")}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground font-bold"
                      >
                        ✕
                      </button>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-extrabold text-muted-foreground uppercase">
                      Status:
                    </span>
                    <select
                      value={reservationStatusFilter}
                      onChange={(e) => setReservationStatusFilter(e.target.value)}
                      className="rounded-2xl border border-border bg-surface px-4 py-2 text-xs font-extrabold text-foreground outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="all">Semua Status ({reservationsList.length})</option>
                      <option value="pending">
                        ⏳ Menunggu ({reservationsList.filter((r) => r.status === "pending").length}
                        )
                      </option>
                      <option value="confirmed">
                        ✓ Terkonfirmasi (
                        {reservationsList.filter((r) => r.status === "confirmed").length})
                      </option>
                      <option value="completed">
                        🎉 Selesai (
                        {reservationsList.filter((r) => r.status === "completed").length})
                      </option>
                      <option value="cancelled">
                        ✕ Dibatalkan (
                        {reservationsList.filter((r) => r.status === "cancelled").length})
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Quick Filter Clickable Chips */}
              <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-border/60">
                <button
                  type="button"
                  onClick={() => setReservationStatusFilter("all")}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-extrabold transition-all cursor-pointer ${
                    reservationStatusFilter === "all"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-surface border border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Semua ({reservationsList.length})
                </button>

                <button
                  type="button"
                  onClick={() => setReservationStatusFilter("pending")}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-extrabold transition-all cursor-pointer ${
                    reservationStatusFilter === "pending"
                      ? "bg-amber-500 text-amber-950 shadow-sm"
                      : "bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-300 hover:bg-amber-500/20"
                  }`}
                >
                  ⏳ Menunggu ({reservationsList.filter((r) => r.status === "pending").length})
                </button>

                <button
                  type="button"
                  onClick={() => setReservationStatusFilter("confirmed")}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-extrabold transition-all cursor-pointer ${
                    reservationStatusFilter === "confirmed"
                      ? "bg-emerald-600 text-white shadow-sm"
                      : "bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-500/20"
                  }`}
                >
                  ✓ Terkonfirmasi ({reservationsList.filter((r) => r.status === "confirmed").length}
                  )
                </button>

                <button
                  type="button"
                  onClick={() => setReservationStatusFilter("completed")}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-extrabold transition-all cursor-pointer ${
                    reservationStatusFilter === "completed"
                      ? "bg-sky-600 text-white shadow-sm"
                      : "bg-sky-500/10 border border-sky-500/30 text-sky-800 dark:text-sky-300 hover:bg-sky-500/20"
                  }`}
                >
                  🎉 Selesai ({reservationsList.filter((r) => r.status === "completed").length})
                </button>

                <button
                  type="button"
                  onClick={() => setReservationStatusFilter("cancelled")}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-extrabold transition-all cursor-pointer ${
                    reservationStatusFilter === "cancelled"
                      ? "bg-rose-600 text-white shadow-sm"
                      : "bg-rose-500/10 border border-rose-500/30 text-rose-800 dark:text-rose-300 hover:bg-rose-500/20"
                  }`}
                >
                  ✕ Dibatalkan ({reservationsList.filter((r) => r.status === "cancelled").length})
                </button>
              </div>
            </div>

            {/* Filtered Reservations */}
            {(() => {
              const filtered = reservationsList.filter((r) => {
                if (reservationStatusFilter !== "all" && r.status !== reservationStatusFilter)
                  return false;
                if (searchQuery) {
                  const q = searchQuery.toLowerCase();
                  return (
                    (r.kode_reservasi || "").toLowerCase().includes(q) ||
                    (r.nama_pemesan || "").toLowerCase().includes(q) ||
                    (r.whatsapp || "").toLowerCase().includes(q)
                  );
                }
                return true;
              });

              if (filtered.length === 0) {
                return (
                  <div className="rounded-3xl border border-dashed border-border p-12 text-center bg-card">
                    <MessageCircle className="mx-auto size-12 text-muted-foreground/40 mb-3" />
                    <h4 className="text-sm font-bold text-foreground">Belum Ada Data Reservasi</h4>
                    <p className="mt-1 text-xs text-muted-foreground max-w-sm mx-auto">
                      Reservasi yang dikirim oleh pengunjung melalui modul Perencana Kunjungan akan
                      otomatis muncul di sini.
                    </p>
                  </div>
                );
              }

              const totalItems = filtered.length;
              const totalPages = Math.ceil(totalItems / PAGE_SIZE) || 1;
              const safePage = Math.min(reservationPage, totalPages);
              const paginatedReservations = filtered.slice(
                (safePage - 1) * PAGE_SIZE,
                safePage * PAGE_SIZE,
              );

              return (
                <div className="space-y-6">
                  <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {paginatedReservations.map((res) => {
                      const isConfirmed = res.status === "confirmed";
                      const isCompleted = res.status === "completed";
                      const isCancelled = res.status === "cancelled";
                      const isPending = !res.status || res.status === "pending";

                      const cardBorderClass = isConfirmed
                        ? "border-t-4 border-t-emerald-500 border-emerald-500/40 bg-emerald-500/5 shadow-emerald-500/5"
                        : isCompleted
                          ? "border-t-4 border-t-sky-500 border-sky-500/40 bg-sky-500/5 shadow-sky-500/5"
                          : isCancelled
                            ? "border-t-4 border-t-rose-500 border-rose-500/30 bg-rose-500/5 opacity-80"
                            : "border-t-4 border-t-amber-500 border-amber-500/40 bg-amber-500/5";

                      const badgeClass = isConfirmed
                        ? "bg-emerald-600 text-white font-black"
                        : isCompleted
                          ? "bg-sky-600 text-white font-black"
                          : isCancelled
                            ? "bg-rose-600 text-white font-black"
                            : "bg-amber-500 text-amber-950 font-black";

                      const statusTitle = isConfirmed
                        ? "✓ TERKONFIRMASI"
                        : isCompleted
                          ? "🎉 SELESAI BERKUNJUNG"
                          : isCancelled
                            ? "✕ DIBATALKAN"
                            : "⏳ MENUNGGU KONFIRMASI";

                      const statusBanner = isConfirmed ? (
                        <div className="mb-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 px-3 py-1.5 text-[11px] font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                          <span>✓ Reservasi disetujui & jadwal terkonfirmasi.</span>
                        </div>
                      ) : isCompleted ? (
                        <div className="mb-3 rounded-xl bg-sky-500/15 border border-sky-500/30 px-3 py-1.5 text-[11px] font-bold text-sky-800 dark:text-sky-300 flex items-center gap-1.5">
                          <span>🎉 Kunjungan wisata telah selesai dilaksanakan.</span>
                        </div>
                      ) : isCancelled ? (
                        <div className="mb-3 rounded-xl bg-rose-500/15 border border-rose-500/30 px-3 py-1.5 text-[11px] font-bold text-rose-800 dark:text-rose-300 flex items-center gap-1.5">
                          <span>✕ Reservasi ini telah dibatalkan.</span>
                        </div>
                      ) : (
                        <div className="mb-3 rounded-xl bg-amber-500/15 border border-amber-500/30 px-3 py-1.5 text-[11px] font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
                          <span>⏳ Menunggu verifikasi & follow-up Admin.</span>
                        </div>
                      );

                      const waText = encodeURIComponent(
                        `Halo ${res.nama_pemesan}, mengonfirmasi mengenai reservasi Anda dengan Kode *${res.kode_reservasi}* di Desa Wisata Ekang Anculai pada tanggal ${res.tanggal_kunjungan} (Jam ${res.jam_kedatangan} WIB). Status reservasi saat ini: *${res.status?.toUpperCase() || "PENDING"}*. Apakah ada yang perlu disesuaikan? Terima kasih.`,
                      );

                      return (
                        <div
                          key={res.id}
                          className={`flex flex-col justify-between rounded-3xl border p-5 shadow-soft hover:shadow-card transition-all ${cardBorderClass}`}
                        >
                          <div>
                            {/* Header Code & Badge */}
                            <div className="flex items-center justify-between gap-2 border-b border-border pb-3 mb-3">
                              <span className="font-mono text-sm font-black text-primary tracking-widest">
                                {res.kode_reservasi}
                              </span>
                              <span
                                className={`rounded-full px-3 py-0.5 text-[10px] uppercase shadow-sm ${badgeClass}`}
                              >
                                {statusTitle}
                              </span>
                            </div>

                            {/* Status Banner */}
                            {statusBanner}

                            <div className="space-y-2 text-xs">
                              <div className="flex justify-between py-1 border-b border-border/40">
                                <span className="text-muted-foreground font-semibold">
                                  Nama Pemesan:
                                </span>
                                <span className="font-bold text-foreground">
                                  {res.nama_pemesan}
                                </span>
                              </div>
                              <div className="flex justify-between py-1 border-b border-border/40">
                                <span className="text-muted-foreground font-semibold">
                                  WhatsApp:
                                </span>
                                <span className="font-mono font-bold text-foreground">
                                  {res.whatsapp}
                                </span>
                              </div>
                              <div className="flex justify-between py-1 border-b border-border/40">
                                <span className="text-muted-foreground font-semibold">
                                  Tanggal & Jam:
                                </span>
                                <span className="font-bold text-foreground">
                                  {res.tanggal_kunjungan} ({res.jam_kedatangan} WIB)
                                </span>
                              </div>
                              <div className="flex justify-between py-1 border-b border-border/40">
                                <span className="text-muted-foreground font-semibold">
                                  Jumlah Peserta:
                                </span>
                                <span className="font-bold text-foreground">
                                  {res.jumlah_dewasa} Dewasa
                                  {res.jumlah_anak > 0 ? `, ${res.jumlah_anak} Anak` : ""}
                                </span>
                              </div>
                              <div className="pt-2">
                                <p className="text-[11px] font-extrabold text-muted-foreground uppercase">
                                  Opsi Kunjungan:
                                </p>
                                <p className="mt-0.5 font-bold text-foreground">
                                  {res.opsi_kunjungan}
                                </p>
                              </div>
                              {res.catatan && (
                                <div className="mt-2 text-[11px] bg-muted/50 rounded-xl p-2.5 font-medium italic text-muted-foreground">
                                  "{res.catatan}"
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="mt-5 pt-3 border-t border-border flex flex-col gap-2.5">
                            <a
                              href={`https://wa.me/${res.whatsapp.replace(/[^0-9]/g, "")}?text=${waText}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full inline-flex items-center justify-center gap-1.5 rounded-2xl bg-emerald-600 px-3 py-2.5 text-xs font-extrabold text-white hover:bg-emerald-700 transition-colors shadow-soft"
                            >
                              <MessageCircle className="size-3.5" />
                              <span>Hubungi Wisatawan via WA</span>
                            </a>

                            {/* Status Action Buttons with State Logic Flow */}
                            <div className="pt-1">
                              {isPending && (
                                <div className="space-y-1.5">
                                  <p className="text-[10px] uppercase font-black text-muted-foreground">
                                    Tindakan Admin:
                                  </p>
                                  <div className="grid grid-cols-2 gap-2">
                                    <button
                                      type="button"
                                      onClick={() =>
                                        handleUpdateReservationStatus(res.id, "confirmed")
                                      }
                                      className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-2 text-xs font-extrabold shadow-sm transition-all cursor-pointer"
                                    >
                                      <CheckCircle2 className="size-3.5" />
                                      <span>Konfirmasi</span>
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() =>
                                        handleUpdateReservationStatus(res.id, "cancelled")
                                      }
                                      className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-700 dark:text-rose-300 border border-rose-500/30 px-3 py-2 text-xs font-extrabold transition-all cursor-pointer"
                                    >
                                      <span>Batalkan</span>
                                    </button>
                                  </div>
                                </div>
                              )}

                              {isConfirmed && (
                                <div className="space-y-1.5">
                                  <p className="text-[10px] uppercase font-black text-emerald-700 dark:text-emerald-300">
                                    Tindakan Berikutnya (Terkonfirmasi):
                                  </p>
                                  <div className="grid grid-cols-2 gap-2">
                                    <button
                                      type="button"
                                      onClick={() =>
                                        handleUpdateReservationStatus(res.id, "completed")
                                      }
                                      className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white px-3 py-2 text-xs font-extrabold shadow-sm transition-all cursor-pointer"
                                    >
                                      <Sparkles className="size-3.5 text-amber-300" />
                                      <span>Tandai Selesai</span>
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() =>
                                        handleUpdateReservationStatus(res.id, "cancelled")
                                      }
                                      className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-700 dark:text-rose-300 border border-rose-500/30 px-3 py-2 text-xs font-extrabold transition-all cursor-pointer"
                                    >
                                      <span>Batalkan</span>
                                    </button>
                                  </div>
                                </div>
                              )}

                              {isCompleted && (
                                <div className="rounded-xl bg-sky-500/10 border border-sky-500/30 p-2.5 text-center">
                                  <p className="text-xs font-extrabold text-sky-800 dark:text-sky-300 flex items-center justify-center gap-1.5">
                                    <CheckCircle2 className="size-4 text-sky-600" />
                                    <span>Status Final: Kunjungan Selesai</span>
                                  </p>
                                  <p className="text-[10px] text-muted-foreground mt-0.5">
                                    Tidak dapat diubah lagi karena kunjungan telah tuntas.
                                  </p>
                                </div>
                              )}

                              {isCancelled && (
                                <div className="rounded-xl bg-rose-500/10 border border-rose-500/30 p-2.5 text-center">
                                  <p className="text-xs font-extrabold text-rose-800 dark:text-rose-300 flex items-center justify-center gap-1.5">
                                    <span className="size-3.5 rounded-full bg-rose-600 text-white grid place-items-center text-[9px] font-black">
                                      ✕
                                    </span>
                                    <span>Status Final: Reservasi Dibatalkan</span>
                                  </p>
                                  <p className="text-[10px] text-muted-foreground mt-0.5">
                                    Tidak dapat diproses lagi karena telah dibatalkan.
                                  </p>
                                </div>
                              )}

                              <div className="mt-2.5 flex justify-end">
                                <button
                                  type="button"
                                  onClick={() => handleDeleteReservation(res.id)}
                                  className="inline-flex items-center gap-1 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 px-2.5 py-1 text-[10px] font-bold text-rose-600 transition-colors cursor-pointer"
                                  title="Hapus Reservasi"
                                >
                                  <Trash2 className="size-3 text-rose-600" />
                                  <span>Hapus Data</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <PaginationControls
                    currentPage={safePage}
                    totalPages={totalPages}
                    totalItems={totalItems}
                    pageSize={PAGE_SIZE}
                    onPageChange={(p) => setReservationPage(p)}
                  />
                </div>
              );
            })()}
          </div>
        )}

        {/* TAB 1: INFORMASI & KONTAK */}
        {activeTab === "info" && (
          <div className="mt-8 rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-card">
            <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
              <div>
                <h2 className="text-xl font-extrabold text-foreground">
                  Pengaturan Informasi & Kontak Desa
                </h2>
                <p className="text-xs text-muted-foreground font-medium mt-1">
                  Ubah nomor WhatsApp reservasi, email resmi, alamat, dan link media sosial
                  Pengelola.
                </p>
              </div>
              <button
                onClick={handleSaveInfo}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-extrabold text-primary-foreground shadow-card hover:bg-primary/90 transition-all cursor-pointer"
              >
                <Save className="size-4" />
                <span>Simpan Pengaturan</span>
              </button>
            </div>

            <form onSubmit={handleSaveInfo} className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-extrabold uppercase text-foreground mb-2">
                  Nama Desa / Destinasi
                </label>
                <input
                  type="text"
                  value={infoForm.nama}
                  onChange={(e) => setInfoForm({ ...infoForm, nama: e.target.value })}
                  className="w-full rounded-2xl border border-border bg-surface px-4 py-3 text-xs sm:text-sm font-bold text-foreground"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase text-foreground mb-2">
                  Tagline Wisata
                </label>
                <input
                  type="text"
                  value={infoForm.tagline}
                  onChange={(e) => setInfoForm({ ...infoForm, tagline: e.target.value })}
                  className="w-full rounded-2xl border border-border bg-surface px-4 py-3 text-xs sm:text-sm font-bold text-foreground"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase text-foreground mb-2">
                  Nomor WhatsApp Reservasi Pengelola
                </label>
                <input
                  type="text"
                  value={infoForm.whatsapp}
                  onChange={(e) => setInfoForm({ ...infoForm, whatsapp: e.target.value })}
                  placeholder="Contoh: 628123456789"
                  className="w-full rounded-2xl border border-border bg-surface px-4 py-3 text-xs sm:text-sm font-bold text-foreground"
                />
                <span className="text-[11px] text-muted-foreground mt-1 block">
                  Format: Gunakan kode negara 62 (tanpa tanda +).
                </span>
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase text-foreground mb-2">
                  Email Reservasi Resmi
                </label>
                <input
                  type="email"
                  value={infoForm.email}
                  onChange={(e) => setInfoForm({ ...infoForm, email: e.target.value })}
                  className="w-full rounded-2xl border border-border bg-surface px-4 py-3 text-xs sm:text-sm font-bold text-foreground"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-extrabold uppercase text-foreground mb-2">
                  Alamat Lengkap Desa Wisata
                </label>
                <input
                  type="text"
                  value={infoForm.alamat}
                  onChange={(e) => setInfoForm({ ...infoForm, alamat: e.target.value })}
                  className="w-full rounded-2xl border border-border bg-surface px-4 py-3 text-xs sm:text-sm font-bold text-foreground"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase text-foreground mb-2">
                  Jam Operasional
                </label>
                <input
                  type="text"
                  value={infoForm.jamOperasional}
                  onChange={(e) => setInfoForm({ ...infoForm, jamOperasional: e.target.value })}
                  className="w-full rounded-2xl border border-border bg-surface px-4 py-3 text-xs sm:text-sm font-bold text-foreground"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase text-foreground mb-2">
                  Waktu Terbaik Kunjungan
                </label>
                <input
                  type="text"
                  value={infoForm.waktuTerbaik}
                  onChange={(e) => setInfoForm({ ...infoForm, waktuTerbaik: e.target.value })}
                  className="w-full rounded-2xl border border-border bg-surface px-4 py-3 text-xs sm:text-sm font-bold text-foreground"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase text-foreground mb-2">
                  Instagram Pengelola Wisata
                </label>
                <input
                  type="text"
                  value={infoForm.instagram}
                  onChange={(e) => setInfoForm({ ...infoForm, instagram: e.target.value })}
                  className="w-full rounded-2xl border border-border bg-surface px-4 py-3 text-xs sm:text-sm font-bold text-foreground"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase text-foreground mb-2">
                  Website Resmi Pemdes
                </label>
                <input
                  type="text"
                  value={infoForm.pemdesWebsite}
                  onChange={(e) => setInfoForm({ ...infoForm, pemdesWebsite: e.target.value })}
                  className="w-full rounded-2xl border border-border bg-surface px-4 py-3 text-xs sm:text-sm font-bold text-foreground"
                />
              </div>

              <div className="sm:col-span-2 flex justify-end pt-4 border-t border-border">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-xs font-extrabold text-primary-foreground shadow-card hover:bg-primary/90 transition-all cursor-pointer"
                >
                  <Save className="size-4" />
                  <span>Simpan Perubahan</span>
                </button>
              </div>
            </form>
          </div>
        )}

        {/* TAB 2: BERITA & KEGIATAN DESA */}
        {activeTab === "kegiatan" && (
          <div className="mt-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-extrabold text-foreground">
                  Kelola Berita & Kegiatan Desa
                </h2>
                <p className="text-xs text-muted-foreground font-medium mt-0.5">
                  Tambah, perbarui, atau hapus berita dan agenda kegiatan masyarakat.
                </p>
              </div>

              <button
                onClick={() => {
                  setEditingKegiatan({
                    id: `kg-${Date.now()}`,
                    judul: "",
                    kategori: "Pemberdayaan Masyarakat",
                    deskripsi: "",
                    tanggal: new Date().toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    }),
                    image: "",
                    source: {
                      name: "Pemerintah Desa Ekang Anculai",
                      url:
                        villageInfo?.pemdesWebsite || "https://desaekanganculai.bintankab.go.id/",
                      publishedAt: new Date().toISOString().slice(0, 10),
                    },
                  });
                  setIsKegiatanModalOpen(true);
                }}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-extrabold text-primary-foreground shadow-card hover:bg-primary/90 transition-all cursor-pointer"
              >
                <Plus className="size-4" />
                <span>Tambah Kegiatan Baru</span>
              </button>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {kegiatanList.map((kg) => (
                <div
                  key={kg.id}
                  className="rounded-3xl border border-border bg-card shadow-card flex flex-col justify-between overflow-hidden group"
                >
                  {kg.image && (
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted border-b border-border">
                      <img
                        src={kg.image}
                        alt={kg.judul}
                        className="size-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-extrabold text-primary">
                          {kg.kategori}
                        </span>
                        <span className="text-[11px] font-bold text-muted-foreground">
                          {kg.tanggal}
                        </span>
                      </div>

                      <h3 className="mt-3 text-base font-extrabold text-foreground leading-snug">
                        {kg.judul}
                      </h3>
                      <p className="mt-2 text-xs text-muted-foreground leading-relaxed line-clamp-3">
                        {kg.deskripsi}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-border flex items-center justify-between">
                      <button
                        onClick={() => {
                          setEditingKegiatan(kg);
                          setIsKegiatanModalOpen(true);
                        }}
                        className="inline-flex items-center gap-1 text-xs font-extrabold text-primary hover:underline cursor-pointer"
                      >
                        <Edit className="size-3.5" />
                        <span>Edit</span>
                      </button>

                      <button
                        onClick={() => handleDeleteKegiatan(kg.id)}
                        className="inline-flex items-center gap-1 text-xs font-extrabold text-rose-600 hover:underline cursor-pointer"
                      >
                        <Trash2 className="size-3.5" />
                        <span>Hapus</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: LANDMARK & DAYA TARIK */}
        {activeTab === "landmark" && (
          <div className="mt-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-extrabold text-foreground">
                  Kelola Landmark & Daya Tarik Wisata
                </h2>
                <p className="text-xs text-muted-foreground font-medium mt-0.5">
                  Atur 5 daya tarik utama dan tempat wisata pendukung di Desa Ekang Anculai.
                </p>
              </div>

              <button
                onClick={() => {
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
                      url:
                        villageInfo?.pemdesWebsite || "https://desaekanganculai.bintankab.go.id/",
                    },
                  });
                  setIsLandmarkModalOpen(true);
                }}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-extrabold text-primary-foreground shadow-card hover:bg-primary/90 transition-all cursor-pointer"
              >
                <Plus className="size-4" />
                <span>Tambah Landmark Baru</span>
              </button>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {landmarkList.map((lm) => (
                <div
                  key={lm.id}
                  className="rounded-3xl border border-border bg-card shadow-card flex flex-col justify-between overflow-hidden group"
                >
                  {lm.image && (
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted border-b border-border">
                      <img
                        src={lm.image}
                        alt={lm.nama}
                        className="size-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="rounded-full bg-gold/15 px-3 py-1 text-[10px] font-extrabold text-gold uppercase">
                          {lm.kategori}
                        </span>
                        <span className="text-[11px] font-bold text-muted-foreground">
                          {(lm.lat ?? 1.0868).toFixed(4)}, {(lm.lng ?? 104.3621).toFixed(4)}
                        </span>
                      </div>

                      <h3 className="mt-3 text-base font-extrabold text-foreground">{lm.nama}</h3>
                      <p className="mt-2 text-xs text-muted-foreground leading-relaxed line-clamp-3">
                        {lm.deskripsi}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-border flex items-center justify-between">
                      <button
                        onClick={() => {
                          setEditingLandmark(lm);
                          setIsLandmarkModalOpen(true);
                        }}
                        className="inline-flex items-center gap-1 text-xs font-extrabold text-primary hover:underline cursor-pointer"
                      >
                        <Edit className="size-3.5" />
                        <span>Edit</span>
                      </button>

                      <button
                        onClick={() => handleDeleteLandmark(lm.id)}
                        className="inline-flex items-center gap-1 text-xs font-extrabold text-rose-600 hover:underline cursor-pointer"
                      >
                        <Trash2 className="size-3.5" />
                        <span>Hapus</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: PRODUK UMKM */}
        {activeTab === "umkm" && (
          <div className="mt-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-extrabold text-foreground">Kelola Produk UMKM</h2>
                <p className="text-xs text-muted-foreground font-medium mt-0.5">
                  Tambah dan kelola produk ekonomi kreatif, kuliner, dan kerajinan warga.
                </p>
              </div>

              <button
                onClick={() => {
                  setEditingUmkm({
                    id: `umkm-${Date.now()}`,
                    nama: "",
                    kategori: "Kuliner & Olahan Pangan",
                    deskripsi: "",
                    hargaInfo: "Mulai Rp 20.000",
                    image: "",
                    lokasi: "Ekang Anculai",
                    kontak: WHATSAPP_NUMBER,
                    source: {
                      name: "Pemerintah Desa Ekang Anculai",
                      url:
                        villageInfo?.pemdesWebsite || "https://desaekanganculai.bintankab.go.id/",
                    },
                  });
                  setIsUmkmModalOpen(true);
                }}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-extrabold text-primary-foreground shadow-card hover:bg-primary/90 transition-all cursor-pointer"
              >
                <Plus className="size-4" />
                <span>Tambah Produk UMKM</span>
              </button>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {umkmList.map((um) => (
                <div
                  key={um.id}
                  className="rounded-3xl border border-border bg-card shadow-card flex flex-col justify-between overflow-hidden group"
                >
                  {um.image && (
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted border-b border-border">
                      <img
                        src={um.image}
                        alt={um.nama}
                        className="size-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[10px] font-extrabold text-emerald-700 dark:text-emerald-300">
                          {um.kategori}
                        </span>
                        <span className="text-[11px] font-extrabold text-gold">{um.hargaInfo}</span>
                      </div>

                      <h3 className="mt-3 text-base font-extrabold text-foreground">{um.nama}</h3>
                      <p className="mt-2 text-xs text-muted-foreground leading-relaxed line-clamp-3">
                        {um.deskripsi}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-border flex items-center justify-between">
                      <button
                        onClick={() => {
                          setEditingUmkm(um);
                          setIsUmkmModalOpen(true);
                        }}
                        className="inline-flex items-center gap-1 text-xs font-extrabold text-primary hover:underline cursor-pointer"
                      >
                        <Edit className="size-3.5" />
                        <span>Edit</span>
                      </button>

                      <button
                        onClick={() => handleDeleteUmkm(um.id)}
                        className="inline-flex items-center gap-1 text-xs font-extrabold text-rose-600 hover:underline cursor-pointer"
                      >
                        <Trash2 className="size-3.5" />
                        <span>Hapus</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: ULASAN WISATAWAN */}
        {activeTab === "reviews" && (
          <div className="mt-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-extrabold text-foreground">
                  Kelola Ulasan & Testimoni Wisatawan
                </h2>
                <p className="text-xs text-muted-foreground font-medium mt-0.5">
                  Atur ulasan yang ditampilkan di halaman beranda.
                </p>
              </div>

              <button
                onClick={() => {
                  setEditingReview({
                    id: `rev-${Date.now()}`,
                    nama: "",
                    asal: "Indonesia",
                    rating: 5,
                    tanggal: new Date().toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    }),
                    komentar: "",
                    tipeWisatawan: "Keluarga",
                    avatar: "",
                  });
                  setIsReviewModalOpen(true);
                }}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-extrabold text-primary-foreground shadow-card hover:bg-primary/90 transition-all cursor-pointer"
              >
                <Plus className="size-4" />
                <span>Tambah Ulasan Baru</span>
              </button>
            </div>

            {(() => {
              const filteredReviews = reviews.filter((rev) => {
                if (!searchQuery) return true;
                const q = searchQuery.toLowerCase();
                return (
                  (rev.nama || "").toLowerCase().includes(q) ||
                  (rev.komentar || "").toLowerCase().includes(q) ||
                  (rev.asal || "").toLowerCase().includes(q)
                );
              });

              const totalReviews = filteredReviews.length;
              const totalReviewPages = Math.ceil(totalReviews / PAGE_SIZE) || 1;
              const safeReviewPage = Math.min(reviewPage, totalReviewPages);
              const paginatedReviews = filteredReviews.slice(
                (safeReviewPage - 1) * PAGE_SIZE,
                safeReviewPage * PAGE_SIZE,
              );

              return (
                <div className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {paginatedReviews.map((rev) => (
                      <div
                        key={rev.id}
                        className="rounded-3xl border border-border bg-card p-6 shadow-card flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1 text-amber-500">
                              {Array.from({ length: rev.rating }).map((_, i) => (
                                <Star key={i} className="size-3.5 fill-amber-500" />
                              ))}
                            </div>
                            <span className="text-[11px] font-bold text-muted-foreground">
                              {rev.tanggal}
                            </span>
                          </div>

                          <h3 className="mt-3 text-base font-extrabold text-foreground">
                            {rev.nama}
                          </h3>
                          <span className="text-[11px] font-semibold text-primary">
                            {rev.asal} • {rev.tipeWisatawan}
                          </span>
                          <p className="mt-2 text-xs text-muted-foreground leading-relaxed italic line-clamp-4">
                            "{rev.komentar}"
                          </p>
                        </div>

                        <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                          <button
                            onClick={() => {
                              setEditingReview(rev);
                              setIsReviewModalOpen(true);
                            }}
                            className="inline-flex items-center gap-1 text-xs font-extrabold text-primary hover:underline cursor-pointer"
                          >
                            <Edit className="size-3.5" />
                            <span>Edit</span>
                          </button>

                          <button
                            onClick={() => handleDeleteReview(rev.id)}
                            className="inline-flex items-center gap-1 text-xs font-extrabold text-rose-600 hover:underline cursor-pointer"
                          >
                            <Trash2 className="size-3.5" />
                            <span>Hapus</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <PaginationControls
                    currentPage={safeReviewPage}
                    totalPages={totalReviewPages}
                    totalItems={totalReviews}
                    pageSize={PAGE_SIZE}
                    onPageChange={(p) => setReviewPage(p)}
                  />
                </div>
              );
            })()}
          </div>
        )}

        {/* TAB 6: CADANGAN & BACKUP */}
        {activeTab === "backup" && (
          <div className="mt-8 space-y-6">
            <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-card space-y-6">
              <div>
                <h2 className="text-xl font-extrabold text-foreground">
                  Cadangan Data & Migrasi File Storage
                </h2>
                <p className="text-xs text-muted-foreground font-medium mt-1">
                  Kelola cadangan database JSON dan konversi otomatis file foto Base64 lama ke file
                  fisik WebP.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {/* Export & Import JSON */}
                <div className="rounded-2xl border border-border bg-surface p-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="grid size-10 place-items-center rounded-full bg-sky-500/10 text-sky-600">
                      <Download className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-extrabold text-foreground">
                        Ekspor & Impor JSON
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Unduh salinan penuh database atau pulihkan data dari file JSON.
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <button
                      onClick={handleExportJSON}
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-extrabold text-primary-foreground shadow-card hover:bg-primary/90 transition-all cursor-pointer"
                    >
                      <Download className="size-4" />
                      <span>Unduh Backup JSON</span>
                    </button>

                    <label className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-xs font-extrabold text-foreground hover:bg-accent cursor-pointer">
                      <Upload className="size-4 text-primary" />
                      <span>Impor Data JSON</span>
                      <input
                        type="file"
                        accept=".json"
                        onChange={handleImportJSON}
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>

                {/* Base64 Migration Tool */}
                <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="grid size-10 place-items-center rounded-full bg-emerald-500/20 text-emerald-600">
                      <ShieldCheck className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-extrabold text-foreground">
                        Migrasi Foto Base64 ke Storage WebP
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Konversi otomatis semua foto Base64 di database SQLite menjadi file fisik
                        WebP di folder `/public/uploads/`.
                      </p>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={async () => {
                        try {
                          const token = getToken();
                          const toastId = toast.loading(
                            "Memigrasi foto Base64 ke file fisik WebP...",
                          );
                          const res = await migrateBase64ServerFn({ data: { token } });
                          toast.success(
                            `Berhasil memigrasi ${res.count} foto Base64 ke file fisik WebP!`,
                            { id: toastId },
                          );
                          fetchAdminData();
                        } catch (err: unknown) {
                          toast.error(getErrMsg(err, "Gagal memigrasi foto."));
                        }
                      }}
                      className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-xs font-extrabold text-white shadow-card hover:bg-emerald-700 transition-all cursor-pointer"
                    >
                      <RotateCcw className="size-4" />
                      <span>Jalankan Migrasi Base64 ke WebP File</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: GALERI FOTO */}
        {activeTab === "galeri" && (
          <div className="mt-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-black text-foreground">Galeri Dokumentasi Foto</h2>
                <p className="text-xs font-semibold text-muted-foreground">
                  Kelola foto dokumentasi ekowisata, batik, perkebunan, budaya, dan aktivitas
                  masyarakat.
                </p>
              </div>

              <button
                onClick={handleCreateGaleri}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-extrabold text-primary-foreground shadow-card hover:bg-primary/90 transition-all cursor-pointer shrink-0"
              >
                <Plus className="size-4" />
                <span>Tambah Foto Galeri Baru</span>
              </button>
            </div>

            {/* Filter Search */}
            <div className="relative max-w-md">
              <input
                type="text"
                placeholder="Cari foto galeri..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-border bg-card px-4 py-2.5 pl-10 text-xs font-semibold text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Search className="absolute left-3.5 top-3 size-4 text-muted-foreground" />
            </div>

            {/* Grid Galeri */}
            {(() => {
              const filteredGaleri = galeriList.filter((item) =>
                (item.judul + item.kategori + item.caption + (item.sumber || ""))
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase()),
              );

              const totalGaleri = filteredGaleri.length;
              const totalGaleriPages = Math.ceil(totalGaleri / PAGE_SIZE) || 1;
              const safeGaleriPage = Math.min(galeriPage, totalGaleriPages);
              const paginatedGaleri = filteredGaleri.slice(
                (safeGaleriPage - 1) * PAGE_SIZE,
                safeGaleriPage * PAGE_SIZE,
              );

              return (
                <div className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {paginatedGaleri.map((item) => (
                      <div
                        key={item.id}
                        className="flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card shadow-card group"
                      >
                        <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                          {item.image ? (
                            <img
                              src={item.image}
                              alt={item.alt || item.judul}
                              className="size-full object-cover transition-transform group-hover:scale-105"
                            />
                          ) : (
                            <div className="grid size-full place-items-center text-muted-foreground">
                              <Camera className="size-8 opacity-40" />
                            </div>
                          )}
                          <span className="absolute top-3 left-3 rounded-full bg-background/90 px-3 py-1 text-[11px] font-extrabold text-foreground backdrop-blur shadow-sm">
                            {item.kategori}
                          </span>
                        </div>

                        <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                          <div>
                            <h3 className="text-base font-black text-foreground">{item.judul}</h3>
                            <p className="mt-1.5 text-xs text-muted-foreground font-medium line-clamp-2">
                              {item.caption}
                            </p>
                            {item.sumber && (
                              <span className="mt-2 block text-[10px] font-bold text-primary">
                                Sumber: {item.sumber}
                              </span>
                            )}
                          </div>

                          <div className="flex items-center justify-end gap-2 border-t border-border pt-4">
                            <button
                              onClick={() => {
                                setEditingGaleri(item);
                                setIsGaleriModalOpen(true);
                              }}
                              className="inline-flex items-center gap-1 text-xs font-extrabold text-primary hover:underline cursor-pointer"
                            >
                              <Edit className="size-3.5" />
                              <span>Edit</span>
                            </button>
                            <button
                              onClick={() => handleDeleteGaleri(item.id)}
                              className="inline-flex items-center gap-1 text-xs font-extrabold text-rose-600 hover:underline cursor-pointer"
                            >
                              <Trash2 className="size-3.5" />
                              <span>Hapus</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <PaginationControls
                    currentPage={safeGaleriPage}
                    totalPages={totalGaleriPages}
                    totalItems={totalGaleri}
                    pageSize={PAGE_SIZE}
                    onPageChange={(p) => setGaleriPage(p)}
                  />
                </div>
              );
            })()}
          </div>
        )}

        {/* TAB 6: BACKUP & IMPOR */}
        {activeTab === "backup" && (
          <div className="mt-8 rounded-3xl border border-border bg-card p-8 shadow-card max-w-2xl mx-auto text-center space-y-6">
            <div>
              <Download className="mx-auto size-12 text-primary" />
              <h2 className="mt-3 text-2xl font-black text-foreground">Cadangkan Data Website</h2>
              <p className="mt-2 text-xs text-muted-foreground font-medium leading-relaxed">
                Unduh file cadangan data website (JSON) untuk mengamankan seluruh informasi
                kegiatan, landmark, UMKM, galeri, ulasan, dan kontak yang telah diedit.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <button
                onClick={handleExportJSON}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-xs font-extrabold text-primary-foreground shadow-card hover:bg-primary/90 transition-all cursor-pointer"
              >
                <Download className="size-4" />
                <span>Unduh Backup Data (JSON)</span>
              </button>

              <label className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-8 py-3.5 text-xs font-extrabold text-foreground hover:bg-card transition-all cursor-pointer">
                <Upload className="size-4 text-primary" />
                <span>Pulihkan dari File JSON</span>
                <input type="file" accept=".json" onChange={handleImportJSON} className="hidden" />
              </label>
            </div>
          </div>
        )}
      </div>

      {/* --- MODAL EDIT KEGIATAN --- */}
      {isKegiatanModalOpen && editingKegiatan && (
        <Dialog open={isKegiatanModalOpen} onOpenChange={() => setIsKegiatanModalOpen(false)}>
          <DialogContent className="max-w-lg overflow-hidden rounded-3xl p-6 sm:p-8 bg-card border-border shadow-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-xl font-extrabold text-foreground">
                {editingKegiatan.id.startsWith("kg-")
                  ? "Tambah Kegiatan Desa Baru"
                  : "Edit Kegiatan Desa"}
              </DialogTitle>
            </DialogHeader>

            <form onSubmit={handleSaveKegiatan} className="mt-4 space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block font-bold uppercase text-foreground text-xs mb-1">
                  Judul Kegiatan
                </label>
                <input
                  type="text"
                  required
                  value={editingKegiatan.judul || ""}
                  onChange={(e) =>
                    setEditingKegiatan({ ...editingKegiatan, judul: e.target.value })
                  }
                  className="w-full rounded-2xl border border-border bg-surface px-4 py-2.5 font-semibold text-foreground"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold uppercase text-foreground text-xs mb-1">
                    Kategori Agenda
                  </label>
                  <input
                    type="text"
                    required
                    value={editingKegiatan.kategori || ""}
                    onChange={(e) =>
                      setEditingKegiatan({ ...editingKegiatan, kategori: e.target.value })
                    }
                    className="w-full rounded-2xl border border-border bg-surface px-4 py-2.5 font-semibold text-foreground"
                  />
                </div>

                <div>
                  <label className="block font-bold uppercase text-foreground text-xs mb-1">
                    Tanggal Pelaksanaan
                  </label>
                  <input
                    type="text"
                    required
                    value={editingKegiatan.tanggal || ""}
                    onChange={(e) =>
                      setEditingKegiatan({ ...editingKegiatan, tanggal: e.target.value })
                    }
                    className="w-full rounded-2xl border border-border bg-surface px-4 py-2.5 font-semibold text-foreground"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold uppercase text-foreground text-xs mb-1">
                  Deskripsi Lengkap
                </label>
                <textarea
                  rows={3}
                  required
                  value={editingKegiatan.deskripsi || ""}
                  onChange={(e) =>
                    setEditingKegiatan({ ...editingKegiatan, deskripsi: e.target.value })
                  }
                  className="w-full rounded-2xl border border-border bg-surface px-4 py-2.5 font-medium text-foreground"
                />
              </div>

              {/* Rujukan / Sumber Informasi */}
              <div className="grid grid-cols-2 gap-3 p-3 rounded-2xl border border-border bg-surface/50">
                <div>
                  <label className="block font-bold uppercase text-foreground text-xs mb-1">
                    Nama Sumber Publikasi
                  </label>
                  <input
                    type="text"
                    value={editingKegiatan.source?.name || ""}
                    onChange={(e) =>
                      setEditingKegiatan({
                        ...editingKegiatan,
                        source: {
                          name: e.target.value,
                          url: editingKegiatan.source?.url || "",
                        },
                      })
                    }
                    placeholder="Contoh: Pemdes Ekang / Mahasiswa KKN"
                    className="w-full rounded-xl border border-border bg-card px-3 py-2 text-xs font-semibold text-foreground"
                  />
                </div>

                <div>
                  <label className="block font-bold uppercase text-foreground text-xs mb-1">
                    URL Publikasi Berita
                  </label>
                  <input
                    type="url"
                    value={editingKegiatan.source?.url || ""}
                    onChange={(e) =>
                      setEditingKegiatan({
                        ...editingKegiatan,
                        source: {
                          name: editingKegiatan.source?.name || "Pengelola",
                          url: e.target.value,
                        },
                      })
                    }
                    placeholder="https://website-sumber.com/artikel/..."
                    className="w-full rounded-xl border border-border bg-card px-3 py-2 text-xs font-semibold text-foreground"
                  />
                </div>
              </div>

              {/* Pengaturan Foto / Gambar */}
              <div className="space-y-3 p-4 rounded-2xl border border-border bg-surface">
                <label className="block font-extrabold uppercase text-foreground text-xs">
                  Sumber Foto Berita / Kegiatan
                </label>

                {/* Radio Button Pilihan Sumber Foto */}
                <div className="flex flex-wrap items-center gap-4">
                  <label className="flex items-center gap-2 text-xs font-bold text-foreground cursor-pointer">
                    <input
                      type="radio"
                      name="image_source_mode"
                      value="upload"
                      checked={(editingKegiatan.image_source || "upload") === "upload"}
                      onChange={() =>
                        setEditingKegiatan({ ...editingKegiatan, image_source: "upload" })
                      }
                      className="size-4 text-primary"
                    />
                    <span>📷 Upload Foto Manual</span>
                  </label>

                  <label className="flex items-center gap-2 text-xs font-bold text-foreground cursor-pointer">
                    <input
                      type="radio"
                      name="image_source_mode"
                      value="source_url"
                      checked={editingKegiatan.image_source === "source_url"}
                      onChange={() =>
                        setEditingKegiatan({ ...editingKegiatan, image_source: "source_url" })
                      }
                      className="size-4 text-primary"
                    />
                    <span>🌐 Ambil dari Source URL (Publikasi Berita)</span>
                  </label>
                </div>

                {/* Opsi 1: Upload Manual */}
                {(editingKegiatan.image_source || "upload") === "upload" ? (
                  <div className="space-y-2 pt-1">
                    <label className="flex items-center justify-center gap-2 rounded-2xl border border-dashed border-primary/40 bg-primary/5 px-4 py-2.5 text-xs font-bold text-primary hover:bg-primary/10 transition-all cursor-pointer">
                      <Upload className="size-4" />
                      <span>Upload Foto dari HP / Laptop</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileUploadForKegiatan}
                        className="hidden"
                      />
                    </label>
                    <input
                      type="text"
                      value={editingKegiatan.image || ""}
                      onChange={(e) =>
                        setEditingKegiatan({ ...editingKegiatan, image: e.target.value })
                      }
                      placeholder="Atau masukan path/URL gambar..."
                      className="w-full rounded-2xl border border-border bg-card px-4 py-2 text-xs font-medium text-foreground"
                    />
                  </div>
                ) : (
                  /* Opsi 2: Ambil dari Source URL */
                  <div className="space-y-2 pt-1">
                    <p className="text-[11px] text-muted-foreground leading-relaxed">
                      Sistem server akan mengambil foto utama (Open Graph image) langsung dari URL
                      publikasi berita resmi tanpa melakukan download berlebih.
                    </p>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={handleExtractOgImage}
                        disabled={isExtractingOg}
                        className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-extrabold text-primary-foreground shadow-sm hover:bg-primary/90 transition-all disabled:opacity-50 cursor-pointer"
                      >
                        {isExtractingOg ? (
                          <Loader2 className="size-4 animate-spin" />
                        ) : (
                          <RefreshCw className="size-4" />
                        )}
                        <span>
                          {editingKegiatan.image
                            ? "Refresh Foto dari Sumber"
                            : "Ambil Foto dari Sumber"}
                        </span>
                      </button>
                    </div>

                    {ogExtractStatus && (
                      <div
                        className={`p-3 rounded-xl text-xs font-bold leading-relaxed ${
                          ogExtractStatus.type === "success"
                            ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20"
                            : "bg-destructive/10 text-destructive border border-destructive/20"
                        }`}
                      >
                        {ogExtractStatus.message}
                      </div>
                    )}
                  </div>
                )}

                {/* Preview Foto */}
                {editingKegiatan.image && (
                  <div className="mt-3 relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-muted">
                    <img
                      src={editingKegiatan.image}
                      alt="Preview Foto Kegiatan"
                      className="size-full object-cover"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                      }}
                    />
                    <div className="absolute bottom-2 left-2 rounded-md bg-black/75 backdrop-blur-sm px-2.5 py-1 text-[10px] font-bold text-white shadow-sm">
                      {(editingKegiatan.image_source || "upload") === "source_url"
                        ? "🌐 Foto dari Publikasi Online"
                        : "📷 Dokumentasi Foto Manual"}
                    </div>
                  </div>
                )}
              </div>

              <DialogFooter className="pt-4 border-t border-border flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsKegiatanModalOpen(false)}
                  className="rounded-full bg-surface px-5 py-2.5 text-xs font-bold text-muted-foreground hover:text-foreground cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="rounded-full bg-primary px-6 py-2.5 text-xs font-extrabold text-primary-foreground shadow-card cursor-pointer"
                >
                  Simpan Kegiatan
                </button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      )}

      {/* --- MODAL EDIT LANDMARK --- */}
      {isLandmarkModalOpen && editingLandmark && (
        <Dialog open={isLandmarkModalOpen} onOpenChange={() => setIsLandmarkModalOpen(false)}>
          <DialogContent className="max-w-lg overflow-hidden rounded-3xl p-6 sm:p-8 bg-card border-border shadow-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-xl font-extrabold text-foreground">
                Edit Landmark / Daya Tarik Wisata
              </DialogTitle>
            </DialogHeader>

            <form onSubmit={handleSaveLandmark} className="mt-4 space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block font-bold uppercase text-foreground text-xs mb-1">
                  Nama Tempat / Daya Tarik
                </label>
                <input
                  type="text"
                  required
                  value={editingLandmark.nama || ""}
                  onChange={(e) => setEditingLandmark({ ...editingLandmark, nama: e.target.value })}
                  className="w-full rounded-2xl border border-border bg-surface px-4 py-2.5 font-semibold text-foreground"
                />
              </div>

              <div>
                <label className="block font-bold uppercase text-foreground text-xs mb-1">
                  Kategori
                </label>
                <input
                  type="text"
                  required
                  value={editingLandmark.kategori || ""}
                  onChange={(e) =>
                    setEditingLandmark({ ...editingLandmark, kategori: e.target.value })
                  }
                  className="w-full rounded-2xl border border-border bg-surface px-4 py-2.5 font-semibold text-foreground"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold uppercase text-foreground text-xs mb-1">
                    Lintang (Lat)
                  </label>
                  <input
                    type="number"
                    step="any"
                    value={editingLandmark.lat ?? 1.1278}
                    onChange={(e) =>
                      setEditingLandmark({
                        ...editingLandmark,
                        lat: parseFloat(e.target.value) || 1.1278,
                      })
                    }
                    className="w-full rounded-2xl border border-border bg-surface px-4 py-2.5 font-semibold text-foreground"
                  />
                </div>
                <div>
                  <label className="block font-bold uppercase text-foreground text-xs mb-1">
                    Bujur (Lng)
                  </label>
                  <input
                    type="number"
                    step="any"
                    value={editingLandmark.lng ?? 104.3621}
                    onChange={(e) =>
                      setEditingLandmark({
                        ...editingLandmark,
                        lng: parseFloat(e.target.value) || 104.3621,
                      })
                    }
                    className="w-full rounded-2xl border border-border bg-surface px-4 py-2.5 font-semibold text-foreground"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold uppercase text-foreground text-xs mb-1.5">
                  Foto Tempat / Landmark
                </label>
                <div className="space-y-2">
                  <label className="flex items-center justify-center gap-2 rounded-2xl border border-dashed border-primary/40 bg-primary/5 px-4 py-2.5 text-xs font-bold text-primary hover:bg-primary/10 transition-all cursor-pointer">
                    <Upload className="size-4" />
                    <span>Upload Foto dari Perangkat (HP / Laptop)</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUploadForLandmark}
                      className="hidden"
                    />
                  </label>
                  <input
                    type="text"
                    value={editingLandmark.image || ""}
                    onChange={(e) =>
                      setEditingLandmark({ ...editingLandmark, image: e.target.value })
                    }
                    placeholder="Atau masukan URL gambar Web..."
                    className="w-full rounded-2xl border border-border bg-surface px-4 py-2 text-xs font-medium text-foreground"
                  />
                  {editingLandmark.image && (
                    <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-muted">
                      <img
                        src={editingLandmark.image}
                        alt="Preview"
                        className="size-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block font-bold uppercase text-foreground text-xs mb-1">
                  Deskripsi Singkat
                </label>
                <textarea
                  rows={3}
                  required
                  value={editingLandmark.deskripsi || ""}
                  onChange={(e) =>
                    setEditingLandmark({ ...editingLandmark, deskripsi: e.target.value })
                  }
                  className="w-full rounded-2xl border border-border bg-surface px-4 py-2.5 font-medium text-foreground"
                />
              </div>

              <DialogFooter className="pt-4 border-t border-border flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsLandmarkModalOpen(false)}
                  className="rounded-full bg-surface px-5 py-2.5 text-xs font-bold text-muted-foreground hover:text-foreground cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="rounded-full bg-primary px-6 py-2.5 text-xs font-extrabold text-primary-foreground shadow-card cursor-pointer"
                >
                  Simpan Landmark
                </button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      )}

      {/* --- MODAL EDIT UMKM --- */}
      {isUmkmModalOpen && editingUmkm && (
        <Dialog open={isUmkmModalOpen} onOpenChange={() => setIsUmkmModalOpen(false)}>
          <DialogContent className="max-w-lg overflow-hidden rounded-3xl p-6 sm:p-8 bg-card border-border shadow-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-xl font-extrabold text-foreground">
                Edit Produk UMKM / Usaha Lokal
              </DialogTitle>
            </DialogHeader>

            <form onSubmit={handleSaveUmkm} className="mt-4 space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block font-bold uppercase text-foreground text-xs mb-1">
                  Nama Produk / Usaha
                </label>
                <input
                  type="text"
                  required
                  value={editingUmkm.nama || ""}
                  onChange={(e) => setEditingUmkm({ ...editingUmkm, nama: e.target.value })}
                  className="w-full rounded-2xl border border-border bg-surface px-4 py-2.5 font-semibold text-foreground"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold uppercase text-foreground text-xs mb-1">
                    Kategori Produk
                  </label>
                  <select
                    value={editingUmkm.kategori || "Kuliner & Olahan Pangan"}
                    onChange={(e) =>
                      setEditingUmkm({
                        ...editingUmkm,
                        kategori: e.target.value as UmkmItem["kategori"],
                      })
                    }
                    className="w-full rounded-2xl border border-border bg-surface px-4 py-2.5 font-semibold text-foreground"
                  >
                    <option value="Kuliner & Olahan Pangan">🍲 Kuliner & Olahan Pangan</option>
                    <option value="Kerajinan & Produk Khas">🎨 Kerajinan & Produk Khas</option>
                    <option value="Oleh-oleh & Produk Kreatif">
                      🎁 Oleh-oleh & Produk Kreatif
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold uppercase text-foreground text-xs mb-1">
                    Informasi Harga
                  </label>
                  <input
                    type="text"
                    required
                    value={editingUmkm.hargaInfo || ""}
                    onChange={(e) => setEditingUmkm({ ...editingUmkm, hargaInfo: e.target.value })}
                    className="w-full rounded-2xl border border-border bg-surface px-4 py-2.5 font-semibold text-foreground"
                  />
                </div>

                <div>
                  <label className="block font-bold uppercase text-foreground text-xs mb-1">
                    Lokasi Usaha
                  </label>
                  <input
                    type="text"
                    value={editingUmkm.lokasi || ""}
                    onChange={(e) => setEditingUmkm({ ...editingUmkm, lokasi: e.target.value })}
                    className="w-full rounded-2xl border border-border bg-surface px-4 py-2.5 font-semibold text-foreground"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold uppercase text-foreground text-xs mb-1.5">
                  Foto Produk UMKM
                </label>
                <div className="space-y-2">
                  <label className="flex items-center justify-center gap-2 rounded-2xl border border-dashed border-primary/40 bg-primary/5 px-4 py-2.5 text-xs font-bold text-primary hover:bg-primary/10 transition-all cursor-pointer">
                    <Upload className="size-4" />
                    <span>Upload Foto dari Perangkat (HP / Laptop)</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUploadForUmkm}
                      className="hidden"
                    />
                  </label>
                  <input
                    type="text"
                    value={editingUmkm.image || ""}
                    onChange={(e) => setEditingUmkm({ ...editingUmkm, image: e.target.value })}
                    placeholder="Atau masukan URL gambar Web..."
                    className="w-full rounded-2xl border border-border bg-surface px-4 py-2 text-xs font-medium text-foreground"
                  />
                  {editingUmkm.image && (
                    <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-muted">
                      <img
                        src={editingUmkm.image}
                        alt="Preview"
                        className="size-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block font-bold uppercase text-foreground text-xs mb-1">
                  Deskripsi Produk
                </label>
                <textarea
                  rows={3}
                  required
                  value={editingUmkm.deskripsi || ""}
                  onChange={(e) => setEditingUmkm({ ...editingUmkm, deskripsi: e.target.value })}
                  className="w-full rounded-2xl border border-border bg-surface px-4 py-2.5 font-medium text-foreground"
                />
              </div>

              <DialogFooter className="pt-4 border-t border-border flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsUmkmModalOpen(false)}
                  className="rounded-full bg-surface px-5 py-2.5 text-xs font-bold text-muted-foreground hover:text-foreground cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="rounded-full bg-primary px-6 py-2.5 text-xs font-extrabold text-primary-foreground shadow-card cursor-pointer"
                >
                  Simpan UMKM
                </button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      )}

      {/* --- MODAL EDIT REVIEW --- */}
      {isReviewModalOpen && editingReview && (
        <Dialog open={isReviewModalOpen} onOpenChange={() => setIsReviewModalOpen(false)}>
          <DialogContent className="max-w-lg overflow-hidden rounded-3xl p-6 sm:p-8 bg-card border-border shadow-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-xl font-extrabold text-foreground">
                Edit Ulasan Wisatawan
              </DialogTitle>
            </DialogHeader>

            <form onSubmit={handleSaveReview} className="mt-4 space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block font-bold uppercase text-foreground text-xs mb-1">
                  Nama Pengunjung
                </label>
                <input
                  type="text"
                  required
                  value={editingReview.nama || ""}
                  onChange={(e) => setEditingReview({ ...editingReview, nama: e.target.value })}
                  className="w-full rounded-2xl border border-border bg-surface px-4 py-2.5 font-semibold text-foreground"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold uppercase text-foreground text-xs mb-1">
                    Kota / Negara Asal
                  </label>
                  <input
                    type="text"
                    required
                    value={editingReview.asal || ""}
                    onChange={(e) => setEditingReview({ ...editingReview, asal: e.target.value })}
                    className="w-full rounded-2xl border border-border bg-surface px-4 py-2.5 font-semibold text-foreground"
                  />
                </div>

                <div>
                  <label className="block font-bold uppercase text-foreground text-xs mb-1">
                    Rating Bintang (1–5)
                  </label>
                  <select
                    value={editingReview.rating || 5}
                    onChange={(e) =>
                      setEditingReview({ ...editingReview, rating: parseInt(e.target.value) || 5 })
                    }
                    className="w-full rounded-2xl border border-border bg-surface px-4 py-2.5 font-semibold text-foreground"
                  >
                    <option value={5}>⭐⭐⭐⭐⭐ (5 Bintang)</option>
                    <option value={4}>⭐⭐⭐⭐ (4 Bintang)</option>
                    <option value={3}>⭐⭐⭐ (3 Bintang)</option>
                    <option value={2}>⭐⭐ (2 Bintang)</option>
                    <option value={1}>⭐ (1 Bintang)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold uppercase text-foreground text-xs mb-1">
                  Tipe Wisatawan
                </label>
                <input
                  type="text"
                  value={editingReview.tipeWisatawan || "Keluarga"}
                  onChange={(e) =>
                    setEditingReview({ ...editingReview, tipeWisatawan: e.target.value })
                  }
                  placeholder="Keluarga / Mancanegara / Pasangan / Solo"
                  className="w-full rounded-2xl border border-border bg-surface px-4 py-2.5 font-medium text-foreground"
                />
              </div>

              <div>
                <label className="block font-bold uppercase text-foreground text-xs mb-1">
                  Komentar / Ulasan
                </label>
                <textarea
                  rows={3}
                  required
                  value={editingReview.komentar || ""}
                  onChange={(e) => setEditingReview({ ...editingReview, komentar: e.target.value })}
                  className="w-full rounded-2xl border border-border bg-surface px-4 py-2.5 font-medium text-foreground"
                />
              </div>

              <DialogFooter className="pt-4 border-t border-border flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsReviewModalOpen(false)}
                  className="rounded-full bg-surface px-5 py-2.5 text-xs font-bold text-muted-foreground hover:text-foreground cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="rounded-full bg-primary px-6 py-2.5 text-xs font-extrabold text-primary-foreground shadow-card cursor-pointer"
                >
                  Simpan Ulasan
                </button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      )}

      {/* --- MODAL EDIT / TAMBAH GALERI --- */}
      {isGaleriModalOpen && editingGaleri && (
        <Dialog open={isGaleriModalOpen} onOpenChange={() => setIsGaleriModalOpen(false)}>
          <DialogContent className="max-w-lg overflow-hidden rounded-3xl p-6 sm:p-8 bg-card border-border shadow-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-xl font-extrabold text-foreground">
                {galeriList.some((g) => g.id === editingGaleri.id)
                  ? "Edit Foto Galeri"
                  : "Tambah Foto Galeri Baru"}
              </DialogTitle>
            </DialogHeader>

            <form onSubmit={handleSaveGaleri} className="mt-4 space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block font-bold uppercase text-foreground text-xs mb-1">
                  Judul Foto / Dokumentasi
                </label>
                <input
                  type="text"
                  required
                  value={editingGaleri.judul || ""}
                  onChange={(e) => setEditingGaleri({ ...editingGaleri, judul: e.target.value })}
                  placeholder="Contoh: Sanggar Batik Bintan"
                  className="w-full rounded-2xl border border-border bg-surface px-4 py-2.5 font-semibold text-foreground"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold uppercase text-foreground text-xs mb-1">
                    Kategori Foto
                  </label>
                  <select
                    value={editingGaleri.kategori || "Alam"}
                    onChange={(e) =>
                      setEditingGaleri({
                        ...editingGaleri,
                        kategori: e.target.value as GaleriFotoItem["kategori"],
                      })
                    }
                    className="w-full rounded-2xl border border-border bg-surface px-4 py-2.5 font-semibold text-foreground"
                  >
                    <option value="Alam">Alam</option>
                    <option value="Mangrove">Mangrove</option>
                    <option value="Perkebunan">Perkebunan</option>
                    <option value="Budaya">Budaya</option>
                    <option value="Batik">Batik</option>
                    <option value="Kuliner">Kuliner</option>
                    <option value="Aktivitas Masyarakat">Aktivitas Masyarakat</option>
                    <option value="Kegiatan Desa">Kegiatan Desa</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold uppercase text-foreground text-xs mb-1">
                    Sumber Foto / Lisensi
                  </label>
                  <input
                    type="text"
                    value={editingGaleri.sumber || ""}
                    onChange={(e) => setEditingGaleri({ ...editingGaleri, sumber: e.target.value })}
                    placeholder="Contoh: Pemdes Ekang"
                    className="w-full rounded-2xl border border-border bg-surface px-4 py-2.5 font-semibold text-foreground"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold uppercase text-foreground text-xs mb-1.5">
                  File Gambar / Foto Dokumentasi
                </label>

                <div className="space-y-3">
                  {/* File Upload Button */}
                  <label className="flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-primary/40 bg-primary/5 p-4 text-center text-xs font-bold text-primary hover:bg-primary/10 hover:border-primary transition-all cursor-pointer">
                    <div className="grid size-10 place-items-center rounded-full bg-primary/10 text-primary">
                      <Upload className="size-5" />
                    </div>
                    <div>
                      <span className="block font-extrabold text-sm text-foreground">
                        Pilih Foto dari Perangkat (HP / Laptop)
                      </span>
                      <span className="block text-[11px] text-muted-foreground font-medium mt-0.5">
                        Format PNG, JPG, WEBP (Maksimal 8MB)
                      </span>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUploadForGaleri}
                      className="hidden"
                    />
                  </label>

                  {/* Alternative URL Input */}
                  <div>
                    <label className="block text-[11px] font-bold text-muted-foreground mb-1">
                      Atau Gunakan Tautan / URL Gambar Web:
                    </label>
                    <input
                      type="text"
                      required
                      value={editingGaleri.image || ""}
                      onChange={(e) =>
                        setEditingGaleri({ ...editingGaleri, image: e.target.value })
                      }
                      placeholder="https://images.unsplash.com/... atau Data URL"
                      className="w-full rounded-2xl border border-border bg-surface px-4 py-2.5 font-medium text-foreground text-xs"
                    />
                  </div>

                  {/* Live Image Preview */}
                  {editingGaleri.image && (
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border bg-muted">
                      <img
                        src={editingGaleri.image}
                        alt="Pratinjau Foto"
                        className="size-full object-cover"
                      />
                      <div className="absolute top-2 right-2">
                        <button
                          type="button"
                          onClick={() => setEditingGaleri({ ...editingGaleri, image: "" })}
                          className="rounded-full bg-rose-600/90 px-3 py-1 text-[11px] font-extrabold text-white backdrop-blur hover:bg-rose-700 shadow-md cursor-pointer"
                        >
                          Hapus Foto
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block font-bold uppercase text-foreground text-xs mb-1">
                  Keterangan / Caption
                </label>
                <textarea
                  rows={3}
                  required
                  value={editingGaleri.caption || ""}
                  onChange={(e) => setEditingGaleri({ ...editingGaleri, caption: e.target.value })}
                  placeholder="Jelaskan aktivitas atau keindahan lokasi dalam foto..."
                  className="w-full rounded-2xl border border-border bg-surface px-4 py-2.5 font-medium text-foreground"
                />
              </div>

              <div>
                <label className="block font-bold uppercase text-foreground text-xs mb-1">
                  Teks Aksesibilitas (Alt Text)
                </label>
                <input
                  type="text"
                  value={editingGaleri.alt || ""}
                  onChange={(e) => setEditingGaleri({ ...editingGaleri, alt: e.target.value })}
                  placeholder="Deskripsi singkat gambar untuk pembaca layar..."
                  className="w-full rounded-2xl border border-border bg-surface px-4 py-2.5 font-medium text-foreground"
                />
              </div>

              <DialogFooter className="pt-4 border-t border-border flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsGaleriModalOpen(false)}
                  className="rounded-full bg-surface px-5 py-2.5 text-xs font-bold text-muted-foreground hover:text-foreground cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="rounded-full bg-primary px-6 py-2.5 text-xs font-extrabold text-primary-foreground shadow-card cursor-pointer"
                >
                  Simpan Foto Galeri
                </button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      )}

      {/* --- MODAL UBAH KATA SANDI ADMIN --- */}
      {isPasswordModalOpen && (
        <Dialog open={isPasswordModalOpen} onOpenChange={() => setIsPasswordModalOpen(false)}>
          <DialogContent className="max-w-md overflow-hidden rounded-3xl p-6 sm:p-8 bg-card border-border shadow-2xl">
            <DialogHeader>
              <DialogTitle className="text-xl font-extrabold text-foreground flex items-center gap-2">
                <Lock className="size-5 text-primary" />
                Ubah Kata Sandi Admin
              </DialogTitle>
            </DialogHeader>

            <form onSubmit={handleChangePassword} className="mt-4 space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block font-bold uppercase text-foreground text-xs mb-1">
                  Kata Sandi Lama
                </label>
                <div className="relative">
                  <input
                    type={showOldPassword ? "text" : "password"}
                    required
                    value={oldPasswordInput}
                    onChange={(e) => setOldPasswordInput(e.target.value)}
                    placeholder="Masukkan kata sandi lama Anda..."
                    className="w-full rounded-2xl border border-border bg-surface pl-4 pr-12 py-3 font-medium text-foreground outline-none focus:ring-2 focus:ring-primary/20"
                  />
                  <button
                    type="button"
                    onClick={() => setShowOldPassword((prev) => !prev)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer rounded-lg hover:bg-black/5 dark:hover:bg-white/5"
                    title={showOldPassword ? "Sembunyikan Kata Sandi" : "Tampilkan Kata Sandi"}
                  >
                    {showOldPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block font-bold uppercase text-foreground text-xs mb-1">
                  Kata Sandi Baru (Minimal 8 Karakter)
                </label>
                <div className="relative">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    required
                    minLength={8}
                    value={newPasswordInput}
                    onChange={(e) => setNewPasswordInput(e.target.value)}
                    placeholder="Ketik kata sandi baru yang kuat..."
                    className="w-full rounded-2xl border border-border bg-surface pl-4 pr-12 py-3 font-medium text-foreground outline-none focus:ring-2 focus:ring-primary/20"
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword((prev) => !prev)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer rounded-lg hover:bg-black/5 dark:hover:bg-white/5"
                    title={showNewPassword ? "Sembunyikan Kata Sandi" : "Tampilkan Kata Sandi"}
                  >
                    {showNewPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                  </button>
                </div>
              </div>

              <div className="rounded-2xl bg-amber-500/10 p-3 text-[11px] font-semibold text-amber-800 dark:text-amber-300">
                Gunakan kombinasi huruf besar, huruf kecil, dan angka untuk kata sandi yang lebih
                aman.
              </div>

              <DialogFooter className="pt-4 border-t border-border flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsPasswordModalOpen(false)}
                  className="rounded-full bg-surface px-5 py-2.5 text-xs font-bold text-muted-foreground hover:text-foreground cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="rounded-full bg-primary px-6 py-2.5 text-xs font-extrabold text-primary-foreground shadow-card cursor-pointer"
                >
                  Perbarui Kata Sandi
                </button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      )}

      {/* Delete Confirmation Accessible Modal */}
      {deleteConfirm.isOpen && (
        <Dialog
          open={deleteConfirm.isOpen}
          onOpenChange={(open) => {
            if (!open && !isDeleting) {
              setDeleteConfirm((prev) => ({ ...prev, isOpen: false }));
            }
          }}
        >
          <DialogContent className="max-w-md rounded-3xl p-6 border border-rose-500/30 bg-card shadow-2xl">
            <DialogHeader>
              <div className="flex items-center gap-3 text-rose-600 mb-1">
                <div className="grid size-10 place-items-center rounded-2xl bg-rose-500/15 border border-rose-500/30 shrink-0">
                  <AlertTriangle className="size-5 text-rose-600" />
                </div>
                <DialogTitle className="text-lg font-black text-foreground">
                  {deleteConfirm.title}
                </DialogTitle>
              </div>
            </DialogHeader>

            <p className="text-xs text-muted-foreground font-medium leading-relaxed mt-2">
              {deleteConfirm.description}
            </p>

            <DialogFooter className="mt-6 pt-4 border-t border-border flex items-center justify-end gap-2">
              <button
                type="button"
                disabled={isDeleting}
                onClick={() => setDeleteConfirm((prev) => ({ ...prev, isOpen: false }))}
                className="rounded-full bg-surface px-5 py-2.5 text-xs font-extrabold text-muted-foreground hover:text-foreground border border-border cursor-pointer transition-colors"
              >
                Batal
              </button>

              <button
                type="button"
                disabled={isDeleting}
                onClick={() => deleteConfirm.onConfirm()}
                className="inline-flex items-center gap-2 rounded-full bg-rose-600 px-6 py-2.5 text-xs font-black text-white hover:bg-rose-700 shadow-md transition-all cursor-pointer disabled:opacity-50"
              >
                {isDeleting ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    <span>Menghapus...</span>
                  </>
                ) : (
                  <>
                    <Trash2 className="size-4" />
                    <span>Ya, Hapus Data</span>
                  </>
                )}
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
