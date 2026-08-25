import { useEffect, useState } from "react";
import {
  Calendar,
  Clock,
  CheckCircle2,
  Sparkles,
  MessageCircle,
  ShieldCheck,
  ChevronRight,
  ChevronLeft,
  AlertCircle,
} from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { formatRupiah, WHATSAPP_NUMBER } from "@/data/jadesta";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

import { submitReservationServerFn } from "@/lib/server-actions";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const durationOptions = [
  {
    id: "full-day",
    nama: "Paket Wisata Full Day (Experience the Authentic Village Life)",
    status: "Resmi (±8 Jam)",
    desc: "Membatik di Rumah Batik Bintan, berkebun bersama masyarakat, kuliner lokal, pementasan budaya desa, & UMKM",
  },
  {
    id: "2d1n-homestay",
    nama: "2D1N Live-in Homestay Rumah Warga",
    status: "Rencana Pengembangan",
    desc: "Bermalam di rumah warga & berinteraksi bersama masyarakat desa",
  },
  {
    id: "3d2n-cbt",
    nama: "3D2N Pengalaman Lengkap CBT Ekang",
    status: "Rencana Pengembangan",
    desc: "Eksplorasi mendalam kehidupan pedesaan & budaya Melayu",
  },
];

const addonExperiences = [
  {
    id: "batik",
    nama: "Membatik di Rumah Batik Bintan (09.00–11.00)",
    desc: "Praktik membatik & membawa pulang karya suvenir",
  },
  {
    id: "farm",
    nama: "Berkebun Bersama Masyarakat (11.00–12.30)",
    desc: "Menanam / memanen sayuran sesuai musim",
  },
  {
    id: "culinary",
    nama: "Menikmati Kuliner Lokal (12.30–14.00)",
    desc: "Makan siang masakan khas & olahan daun ubi",
  },
  {
    id: "culture",
    nama: "Budaya yang Hadir di Berbagai Sudut Desa (14.00–16.00)",
    desc: "Seni Melayu & tradisi lokal di berbagai lokasi budaya desa",
  },
  {
    id: "umkm",
    nama: "Belanja Produk UMKM & Penutupan (16.00–17.00)",
    desc: "Berbelanja batik & produk desa (sertifikat opsional)",
  },
];

// Helper: Get YYYY-MM-DD for today in local time
const getTodayDateString = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

// Helper: Get YYYY-MM-DD for tomorrow
const getTomorrowDateString = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const year = tomorrow.getFullYear();
  const month = String(tomorrow.getMonth() + 1).padStart(2, "0");
  const day = String(tomorrow.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

// Helper: Get HH:MM for current time
const getCurrentTimeString = () => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
};

// Helper: Calculate initial valid date and time
const getInitialValidDateTime = () => {
  const today = getTodayDateString();
  const nowTime = getCurrentTimeString();

  if (nowTime > "17:00") {
    return { date: getTomorrowDateString(), time: "08:00" };
  }
  const validTime = nowTime < "08:00" ? "08:00" : nowTime;
  return { date: today, time: validTime };
};

export function TripPlannerModal({ open, onOpenChange }: Props) {
  const todayStr = getTodayDateString();
  const tomorrowStr = getTomorrowDateString();
  const currentTimeStr = getCurrentTimeString();

  const initialDateTime = getInitialValidDateTime();
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedDuration, setSelectedDuration] = useState("full-day");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [visitDate, setVisitDate] = useState(initialDateTime.date);
  const [visitTime, setVisitTime] = useState(initialDateTime.time);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    "batik",
    "farm",
    "culinary",
    "culture",
    "umkm",
  ]);
  const [namaPemesan, setNamaPemesan] = useState("");
  const [whatsappInput, setWhatsappInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [catatan, setCatatan] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [completedCode, setCompletedCode] = useState("");

  // Sync date & time whenever modal opens
  useEffect(() => {
    if (!open) return;
    const now = getCurrentTimeString();
    const today = getTodayDateString();

    if (now > "17:00" && visitDate <= today) {
      setVisitDate(getTomorrowDateString());
      setVisitTime("08:00");
      toast.info(
        "Jam operasional hari ini (17.00 WIB) telah selesai. Tanggal otomatis disesuaikan ke besok.",
      );
    } else if (visitDate === today) {
      const validTime = now < "08:00" ? "08:00" : now;
      if (visitTime < validTime) {
        setVisitTime(validTime);
      }
    }
  }, [open]);

  const durationObj = durationOptions.find((d) => d.id === selectedDuration) ?? durationOptions[0]!;

  const handleDateChange = (val: string) => {
    if (!val) {
      setVisitDate("");
      return;
    }
    const today = getTodayDateString();
    const now = getCurrentTimeString();

    if (val < today) {
      toast.error("Tanggal tidak boleh di masa lalu. Tanggal disesuaikan ke hari ini/besok.");
      if (now > "17:00") {
        setVisitDate(getTomorrowDateString());
        setVisitTime("08:00");
      } else {
        setVisitDate(today);
        setVisitTime(now < "08:00" ? "08:00" : now);
      }
      return;
    }

    setVisitDate(val);

    if (val === today) {
      if (now > "17:00") {
        toast.info(
          "Jam operasional hari ini telah berakhir (17.00 WIB). Tanggal otomatis dialihkan ke besok.",
        );
        setVisitDate(getTomorrowDateString());
        setVisitTime("08:00");
      } else if (visitTime < now) {
        const validTime = now < "08:00" ? "08:00" : now;
        toast.info(`Jam kedatangan disesuaikan ke jam saat ini (${validTime} WIB).`);
        setVisitTime(validTime);
      }
    } else {
      if (visitTime < "08:00" || visitTime > "17:00") {
        setVisitTime("09:00");
      }
    }
  };

  const handleTimeChange = (val: string) => {
    setVisitTime(val);
    if (!val) return;
    const today = getTodayDateString();
    const now = getCurrentTimeString();

    if (val < "08:00") {
      toast.error("Jam operasional desa dimulai pukul 08.00 WIB. Silakan ganti jam.");
    } else if (val > "17:00") {
      toast.error("Jam operasional desa berakhir pukul 17.00 WIB. Silakan ganti jam.");
    } else if (visitDate === today && val < now) {
      toast.error(
        `Jam ${val} WIB sudah lewat dari jam saat ini (${now} WIB). Silakan ganti jam kedatangan.`,
      );
    }
  };

  // Step 1 Validation Handler for Next Button
  const handleNextStep = () => {
    if (step === 1) {
      const today = getTodayDateString();
      const now = getCurrentTimeString();

      if (!visitDate) {
        toast.error("Mohon tentukan perkiraan tanggal kunjungan Anda.");
        return;
      }

      if (visitDate < today) {
        toast.error(
          "Tanggal kunjungan berada di masa lalu. Mohon pilih tanggal hari ini atau esok hari.",
        );
        return;
      }

      if (visitDate === today && now > "17:00") {
        toast.error(
          "Jam operasional desa hari ini telah berakhir (17.00 WIB). Mohon ubah tanggal kunjungan ke esok hari.",
        );
        return;
      }

      if (!visitTime) {
        toast.error("Mohon tentukan jam kedatangan kunjungan Anda.");
        return;
      }

      if (visitTime < "08:00" || visitTime > "17:00") {
        toast.error(
          "Jam kedatangan harus berada di dalam jam operasional desa (08.00–17.00 WIB). Silakan ganti jam yang sesuai.",
        );
        return;
      }

      if (visitDate === today && visitTime < now) {
        toast.error(
          `Jam kedatangan (${visitTime} WIB) sudah lewat dari waktu saat ini (${now} WIB). Mohon ganti dengan jam kedatangan yang sesuai.`,
        );
        return;
      }
    }

    setStep((s) => Math.min(4, s + 1) as 1 | 2 | 3 | 4);
  };

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  const handleWhatsAppBooking = async () => {
    if (!namaPemesan || namaPemesan.trim().length < 2) {
      toast.error("Mohon lengkapi nama pemesan (minimal 2 karakter).");
      return;
    }

    if (!whatsappInput || whatsappInput.trim().length < 9) {
      toast.error("Mohon lengkapi nomor WhatsApp aktif Anda (contoh: 08123456789).");
      return;
    }

    setIsSubmitting(true);
    try {
      // 1. Simpan ke database server SQLite & dapatkan Kode Reservasi Unik
      const res = await submitReservationServerFn({
        data: {
          namaPemesan,
          whatsapp: whatsappInput,
          email: emailInput,
          tanggalKunjungan: visitDate,
          jamKedatangan: visitTime,
          jumlahDewasa: adults,
          jumlahAnak: children,
          opsiKunjungan: durationObj.nama,
          selectedAddons,
          catatan,
        },
      });

      const kodeReservasi =
        res.kodeReservasi || `EA-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      setCompletedCode(kodeReservasi);

      // 2. Buat pesan WhatsApp otomatis ber-kode reservasi unik
      const addonsListText = selectedAddons
        .map((id) => addonExperiences.find((a) => a.id === id)?.nama)
        .filter(Boolean)
        .join("\n - ");

      const text = `Halo Pengelola Desa Wisata Ekang Anculai,

Saya ingin mengonfirmasi pemesanan kunjungan:
🎫 *Kode Reservasi:* ${kodeReservasi}
👤 *Nama Pemesan:* ${namaPemesan}
📱 *WhatsApp:* ${whatsappInput}
📅 *Tanggal & Jam Kunjungan:* ${visitDate ? visitDate.split("-").reverse().join("/") : "Dikonfirmasi via chat"} (Pukul ${visitTime} WIB)
⏱️ *Pilihan Paket:* ${durationObj.nama}
👥 *Jumlah Peserta:* ${adults} Dewasa${children > 0 ? `, ${children} Anak` : ""}

✨ *Rangkaian Aktivitas Dipilih:*
 - ${addonsListText || "Rangkaian Paket Wisata Full Day Lengkap"}

📝 *Catatan Khusus:* ${catatan || "-"}

Mohon konfirmasi ketersediaan jadwal dan rincian biaya kunjungannya. Terima kasih!`;

      const encoded = encodeURIComponent(text);
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank");

      // 3. Tampilkan layar konfirmasi (Step 4)
      setStep(4);
      toast.success(`Reservasi ${kodeReservasi} berhasil disimpan ke database!`);
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Gagal menyimpan reservasi. Coba beberapa saat lagi.";
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl overflow-hidden rounded-3xl border border-border p-0 shadow-2xl max-h-[92vh] flex flex-col">
        {/* Header banner */}
        <div className="gradient-primary relative p-5 sm:p-6 text-primary-foreground shrink-0">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-background/20 px-3 py-1 text-xs font-bold backdrop-blur">
              <Sparkles className="size-3.5 text-gold" />
              Perencana Kunjungan Interaktif
            </span>
            <span className="text-xs font-bold opacity-80">Langkah {step} dari 3</span>
          </div>
          <DialogTitle className="mt-3 text-xl sm:text-2xl font-extrabold tracking-tight">
            Rencanakan Kunjungan Ke Ekang Anculai
          </DialogTitle>
          <DialogDescription className="mt-1 text-xs text-primary-foreground/80">
            Pilih rencana kunjungan CBT dan komunikasikan langsung ke Pengelola via WhatsApp.
          </DialogDescription>

          {/* Stepper indicator */}
          <div className="mt-4 sm:mt-5 flex items-center justify-between border-t border-primary-foreground/15 pt-3 sm:pt-4 text-xs font-extrabold">
            <button
              type="button"
              onClick={() => setStep(1)}
              className={cn(
                "flex items-center gap-1.5 rounded-full px-3 py-1.5 transition-all cursor-pointer min-h-[36px]",
                step === 1
                  ? "bg-[#C58A32] text-white shadow-md font-black ring-2 ring-[#DCA348]"
                  : step > 1
                    ? "bg-[#14532D] text-white"
                    : "bg-white/10 text-white/60 hover:bg-white/20",
              )}
            >
              <span>01 Rencana</span>
            </button>
            <div
              className={cn(
                "h-0.5 flex-1 mx-1.5 transition-all",
                step >= 2 ? "bg-[#C58A32]" : "bg-white/20",
              )}
            />
            <button
              type="button"
              onClick={() => setStep(2)}
              className={cn(
                "flex items-center gap-1.5 rounded-full px-3 py-1.5 transition-all cursor-pointer min-h-[36px]",
                step === 2
                  ? "bg-[#C58A32] text-white shadow-md font-black ring-2 ring-[#DCA348]"
                  : step > 2
                    ? "bg-[#14532D] text-white"
                    : "bg-white/10 text-white/60 hover:bg-white/20",
              )}
            >
              <span>02 Aktivitas</span>
            </button>
            <div
              className={cn(
                "h-0.5 flex-1 mx-1.5 transition-all",
                step >= 3 ? "bg-[#C58A32]" : "bg-white/20",
              )}
            />
            <button
              type="button"
              onClick={() => setStep(3)}
              className={cn(
                "flex items-center gap-1.5 rounded-full px-3 py-1.5 transition-all cursor-pointer min-h-[36px]",
                step === 3
                  ? "bg-[#C58A32] text-white shadow-md font-black ring-2 ring-[#DCA348]"
                  : step > 3
                    ? "bg-[#14532D] text-white"
                    : "bg-white/10 text-white/60 hover:bg-white/20",
              )}
            >
              <span>03 Data Diri</span>
            </button>
          </div>
        </div>

        {/* Content body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
                  1. Pilih Jenis / Durasi Kunjungan
                </label>
                <div className="mt-3 grid gap-3">
                  {durationOptions.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSelectedDuration(opt.id)}
                      className={cn(
                        "flex items-start justify-between rounded-2xl border p-4 text-left transition-all",
                        selectedDuration === opt.id
                          ? "border-primary bg-primary/5 ring-2 ring-primary/20"
                          : "border-border hover:bg-accent/50",
                      )}
                    >
                      <div>
                        <p className="font-extrabold text-foreground">{opt.nama}</p>
                        <p className="mt-1 text-xs text-muted-foreground">{opt.desc}</p>
                      </div>
                      <span className="shrink-0 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                        {opt.status}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-bold text-muted-foreground">
                    Jumlah Wisatawan Dewasa
                  </label>
                  <div className="mt-2 flex items-center gap-3 rounded-2xl border border-border bg-surface p-2">
                    <button
                      type="button"
                      onClick={() => setAdults((a) => Math.max(1, a - 1))}
                      className="grid size-9 place-items-center rounded-xl bg-card font-bold text-foreground hover:bg-muted"
                    >
                      -
                    </button>
                    <span className="flex-1 text-center font-extrabold text-foreground">
                      {adults} Dewasa
                    </span>
                    <button
                      type="button"
                      onClick={() => setAdults((a) => a + 1)}
                      className="grid size-9 place-items-center rounded-xl bg-card font-bold text-foreground hover:bg-muted"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-muted-foreground">
                    Jumlah Anak-Anak (&lt; 10 Thn)
                  </label>
                  <div className="mt-2 flex items-center gap-3 rounded-2xl border border-border bg-surface p-2">
                    <button
                      type="button"
                      onClick={() => setChildren((c) => Math.max(0, c - 1))}
                      className="grid size-9 place-items-center rounded-xl bg-card font-bold text-foreground hover:bg-muted"
                    >
                      -
                    </button>
                    <span className="flex-1 text-center font-extrabold text-foreground">
                      {children} Anak
                    </span>
                    <button
                      type="button"
                      onClick={() => setChildren((c) => c + 1)}
                      className="grid size-9 place-items-center rounded-xl bg-card font-bold text-foreground hover:bg-muted"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {/* Date Input Column */}
                <div>
                  <label className="text-xs font-bold text-muted-foreground flex items-center gap-1.5">
                    <Calendar className="size-3.5 text-primary" />
                    <span>Perkiraan Tanggal Kunjungan</span>
                  </label>
                  <div
                    className={cn(
                      "mt-2 flex items-center gap-2 rounded-2xl border bg-surface px-4 py-3 shadow-sm transition-all focus-within:ring-2",
                      visitDate && visitDate < todayStr
                        ? "border-destructive ring-2 ring-destructive/20"
                        : "border-border focus-within:ring-primary/20",
                    )}
                  >
                    <input
                      type="date"
                      min={currentTimeStr > "17:00" ? tomorrowStr : todayStr}
                      value={visitDate}
                      onChange={(e) => handleDateChange(e.target.value)}
                      className="w-full bg-transparent text-sm font-medium outline-none"
                    />
                  </div>
                  {visitDate && visitDate < todayStr ? (
                    <p className="mt-1.5 text-[11px] font-extrabold text-destructive flex items-center gap-1">
                      <AlertCircle className="size-3 shrink-0" />
                      Tanggal di masa lalu. Mohon ganti tanggal.
                    </p>
                  ) : (
                    <p className="mt-1.5 text-[11px] text-muted-foreground font-medium">
                      {currentTimeStr > "17:00"
                        ? "Hari ini sudah tutup (otomatis dialihkan ke besok)"
                        : `Minimal hari ini (${todayStr.split("-").reverse().join("/")})`}
                    </p>
                  )}
                </div>

                {/* Time Input Column */}
                <div>
                  <label className="text-xs font-bold text-muted-foreground flex items-center gap-1.5">
                    <Clock className="size-3.5 text-gold" />
                    <span>Jam Kedatangan (08.00–17.00 WIB)</span>
                  </label>
                  <div
                    className={cn(
                      "mt-2 flex items-center gap-2 rounded-2xl border bg-surface px-4 py-3 shadow-sm transition-all focus-within:ring-2",
                      (visitDate === todayStr && visitTime && visitTime < currentTimeStr) ||
                        (visitTime && (visitTime < "08:00" || visitTime > "17:00"))
                        ? "border-destructive ring-2 ring-destructive/20"
                        : "border-border focus-within:ring-primary/20",
                    )}
                  >
                    <input
                      type="time"
                      min={
                        visitDate === todayStr
                          ? currentTimeStr < "08:00"
                            ? "08:00"
                            : currentTimeStr
                          : "08:00"
                      }
                      max="17:00"
                      value={visitTime}
                      onChange={(e) => handleTimeChange(e.target.value)}
                      className="w-full bg-transparent text-sm font-medium outline-none"
                    />
                  </div>
                  {visitDate === todayStr && visitTime && visitTime < currentTimeStr ? (
                    <p className="mt-1.5 text-[11px] font-extrabold text-destructive flex items-center gap-1">
                      <AlertCircle className="size-3 shrink-0" />
                      Jam {visitTime} WIB sudah lewat. Mohon ganti jam ≥ {currentTimeStr} WIB.
                    </p>
                  ) : visitTime && (visitTime < "08:00" || visitTime > "17:00") ? (
                    <p className="mt-1.5 text-[11px] font-extrabold text-destructive flex items-center gap-1">
                      <AlertCircle className="size-3 shrink-0" />
                      Jam di luar operasional. Jam buka 08.00 – 17.00 WIB.
                    </p>
                  ) : (
                    <p className="mt-1.5 text-[11px] text-muted-foreground font-medium">
                      {visitDate === todayStr
                        ? `Hari ini: Jam minimal ${currentTimeStr < "08:00" ? "08.00" : currentTimeStr} WIB`
                        : "Jam operasional 08.00 - 17.00 WIB"}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div>
                <label className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
                  2. Pilih Rangkaian Aktivitas Kunjungan
                </label>
                <p className="mt-1 text-xs text-muted-foreground">
                  Rangkaian aktivitas resmi Paket Wisata Full Day Ekang Anculai.
                </p>

                <div className="mt-4 grid gap-3">
                  {addonExperiences.map((addon) => {
                    const isSelected = selectedAddons.includes(addon.id);
                    return (
                      <button
                        key={addon.id}
                        type="button"
                        onClick={() => toggleAddon(addon.id)}
                        className={cn(
                          "flex items-center justify-between rounded-2xl border p-4 text-left transition-all",
                          isSelected
                            ? "border-primary bg-primary/5 ring-2 ring-primary/20"
                            : "border-border hover:bg-accent/50",
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={cn(
                              "grid size-6 place-items-center rounded-full transition-colors",
                              isSelected
                                ? "bg-primary text-primary-foreground"
                                : "border border-border bg-card",
                            )}
                          >
                            {isSelected && <CheckCircle2 className="size-4" />}
                          </div>
                          <div>
                            <p className="font-bold text-foreground">{addon.nama}</p>
                            <p className="text-xs text-muted-foreground">{addon.desc}</p>
                          </div>
                        </div>
                        <span className="text-xs font-extrabold text-primary">Terkonfirmasi</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
                <p className="text-xs font-bold tracking-wider text-primary uppercase">
                  Ringkasan Perencanaan
                </p>
                <div className="mt-4 space-y-2 border-b border-border pb-4 text-sm">
                  <div className="flex justify-between font-semibold">
                    <span className="text-muted-foreground">Opsi Kunjungan:</span>
                    <span className="text-foreground">{durationObj.nama}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Tanggal & Jam Kunjungan:</span>
                    <span className="text-foreground font-bold">
                      {visitDate ? visitDate.split("-").reverse().join("/") : "Belum dipilih"}{" "}
                      {visitTime ? `(${visitTime} WIB)` : ""}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Jumlah Peserta:</span>
                    <span className="text-foreground">
                      {adults} Dewasa{children > 0 ? `, ${children} Anak` : ""}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Aktivitas Dipilih:</span>
                    <span className="text-foreground">{selectedAddons.length} Aktivitas</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-bold text-foreground">Status Konfirmasi:</span>
                  <span className="text-base font-extrabold text-primary">
                    Konfirmasi Pengelola
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-bold text-muted-foreground">
                      Nama Lengkap Anda <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: Budi Santoso"
                      value={namaPemesan}
                      onChange={(e) => setNamaPemesan(e.target.value)}
                      className="mt-1.5 w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-muted-foreground">
                      Nomor WhatsApp Aktif <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="Contoh: 08123456789"
                      value={whatsappInput}
                      onChange={(e) => setWhatsappInput(e.target.value)}
                      className="mt-1.5 w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-muted-foreground">
                    Alamat Email (Opsional)
                  </label>
                  <input
                    type="email"
                    placeholder="Contoh: budi@gmail.com"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="mt-1.5 w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-muted-foreground">
                    Catatan Khusus (Opsional)
                  </label>
                  <textarea
                    placeholder="Contoh: Berminat pada workshop membatik dan interaksi warga"
                    rows={2}
                    value={catatan}
                    onChange={(e) => setCatatan(e.target.value)}
                    className="mt-1.5 w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-2xl bg-amber-500/10 p-3 text-xs font-medium text-amber-800 dark:text-amber-300">
                <ShieldCheck className="size-4 shrink-0 text-amber-600" />
                <span>
                  Tanpa biaya pembayaran di muka. Kode reservasi unik tersimpan otomatis di database
                  pengelola.
                </span>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="py-6 text-center space-y-5">
              <div className="mx-auto grid size-16 place-items-center rounded-full bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20">
                <CheckCircle2 className="size-10" />
              </div>
              <div>
                <span className="inline-block rounded-full bg-emerald-100 dark:bg-emerald-900/40 px-3 py-1 text-xs font-extrabold text-emerald-800 dark:text-emerald-300 mb-2">
                  Terdaftar di Database Pengelola
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-foreground">
                  Reservasi Berhasil Dibuat!
                </h3>
                <p className="mt-1 text-xs text-muted-foreground max-w-md mx-auto">
                  Kode reservasi resmi Anda telah diterbitkan dan tersimpan di sistem pengelola
                  desa.
                </p>
              </div>

              <div className="mx-auto max-w-sm rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-4 text-center">
                <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">
                  Kode Reservasi Anda
                </p>
                <p className="mt-1 text-2xl font-black text-emerald-700 dark:text-emerald-400 font-mono tracking-widest">
                  {completedCode}
                </p>
                <div className="mt-3 pt-3 border-t border-emerald-500/15 text-xs font-semibold text-muted-foreground flex justify-between">
                  <span>
                    Status: <strong className="text-amber-600">Pending (Menunggu Chat WA)</strong>
                  </span>
                  <span>{visitDate.split("-").reverse().join("/")}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-xs font-extrabold text-white shadow-card hover:bg-emerald-700 transition-all cursor-pointer"
                >
                  <MessageCircle className="size-4" />
                  Buka Chat WhatsApp Pengelola Lagi
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onOpenChange(false);
                    setStep(1);
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-xs font-bold text-foreground hover:bg-accent cursor-pointer"
                >
                  Tutup Modul
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer controls */}
        {step <= 3 && (
          <div className="shrink-0 flex items-center justify-between border-t border-border bg-surface px-4 sm:px-6 py-3 sm:py-4 shadow-soft">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep((s) => Math.max(1, s - 1) as 1 | 2 | 3 | 4)}
                className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold text-muted-foreground hover:bg-accent hover:text-foreground"
              >
                <ChevronLeft className="size-4" />
                Kembali
              </button>
            ) : (
              <div />
            )}

            {step < 3 ? (
              <button
                type="button"
                onClick={handleNextStep}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-extrabold text-primary-foreground shadow-card hover:bg-emerald-deep transition-all active:scale-95 cursor-pointer"
              >
                Lanjutkan
                <ChevronRight className="size-4" />
              </button>
            ) : (
              <button
                type="button"
                disabled={isSubmitting}
                onClick={handleWhatsAppBooking}
                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-xs font-extrabold text-white shadow-card hover:bg-emerald-700 cursor-pointer disabled:opacity-50 transition-all"
              >
                <MessageCircle className="size-4" />
                {isSubmitting ? "Menyimpan Ke Database..." : "Simpan Reservasi & WhatsApp"}
              </button>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
