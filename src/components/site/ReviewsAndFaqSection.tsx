import { useState } from "react";
import {
  Star,
  MessageSquare,
  ShieldCheck,
  Download,
  Plus,
  CheckCircle2,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { getVillage, type TouristReview } from "@/data/jadesta";
import { useSiteData } from "@/lib/cms-store";
import { submitPublicReviewServerFn } from "@/lib/server-actions";
import { SectionHeading } from "./Primitives";
import { toast } from "sonner";

export function ReviewsAndFaqSection() {
  const siteData = useSiteData();
  const village = getVillage("ekang-anculai");
  const reviewsList = siteData?.reviews !== undefined ? siteData.reviews : village?.reviews || [];
  const faqsList =
    siteData?.faqs !== undefined && siteData.faqs.length > 0 ? siteData.faqs : village?.faqs || [];
  const whatsapp = siteData?.villageInfo?.whatsapp || village?.whatsapp || "6287866331231";
  const [openModal, setOpenModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form states
  const [nama, setNama] = useState("");
  const [asal, setAsal] = useState("");
  const [rating, setRating] = useState(5);
  const [komentar, setKomentar] = useState("");
  const [tipe, setTipe] = useState<"Keluarga" | "Pasangan" | "Mancanegara" | "Rombongan / KKN">(
    "Keluarga",
  );

  const handleAddReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nama || !komentar) {
      toast.error("Mohon lengkapi nama dan komentar Anda.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await submitPublicReviewServerFn({
        data: {
          nama,
          asal: asal || "Wisatawan",
          rating,
          komentar,
          tipeWisatawan: tipe as
            "Keluarga" | "Pasangan" | "Mancanegara" | "Solo Traveler" | "Rombongan",
        },
      });

      if (res?.success) {
        toast.success(
          res.message ||
            "Terima kasih! Ulasan Anda telah berhasil dikirim dan menunggu moderasi tim pengelola.",
        );
        setOpenModal(false);
        setNama("");
        setAsal("");
        setKomentar("");
      } else {
        toast.error(res?.message || "Gagal mengirimkan ulasan.");
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Terjadi kesalahan saat mengirim ulasan.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePrintGuide = () => {
    toast.info("Membuka Panduan & Peta Wisata Resmi Desa Ekang Anculai...");
    window.print();
  };

  return (
    <section
      id="ulasan-faq"
      className="w-full scroll-mt-24 bg-[#F5F1E8] dark:bg-stone-900/90 py-20 sm:py-24 border-b border-stone-300/60 dark:border-zinc-800"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Reviews Section */}
        <div>
          <div className="flex flex-col items-center justify-center text-center gap-4">
            <SectionHeading
              align="center"
              eyebrow="Ulasan & Pengalaman"
              title="Apa Kata Wisatawan Tentang Ekang Anculai?"
              description="Pengalaman berkesan wisatawan mancanegara, keluarga, dan pasangan yang telah berkunjung."
            />
            <button
              type="button"
              onClick={() => setOpenModal(true)}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-extrabold text-primary-foreground shadow-card hover:bg-emerald-deep cursor-pointer"
            >
              <Plus className="size-4" />
              Tulis Ulasan Pengalaman
            </button>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviewsList.map((rev) => (
              <div
                key={rev.id}
                className="card-lift flex flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-card"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-500">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`size-4 ${i < rev.rating ? "fill-amber-400 text-amber-400" : "text-border"}`}
                        />
                      ))}
                    </div>
                    <span className="rounded-full bg-surface px-3 py-1 text-[11px] font-bold text-muted-foreground">
                      {rev.tipeWisatawan}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-foreground/90 italic">
                    "{rev.komentar}"
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <img
                    src={rev.avatar}
                    alt={rev.nama}
                    className="size-10 rounded-full object-cover ring-2 ring-primary/20"
                  />
                  <div>
                    <p className="text-sm font-extrabold text-foreground">{rev.nama}</p>
                    <p className="text-xs text-muted-foreground">
                      Asal {rev.asal} • {rev.tanggal}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Travel FAQ Accordion */}
        <div className="mt-20 rounded-3xl border border-border bg-surface p-6 sm:p-10">
          <div className="border-b border-border pb-6 text-center flex flex-col items-center justify-center">
            <span className="text-xs font-bold text-primary uppercase">Panduan & Tanya Jawab</span>
            <h3 className="mt-1 text-2xl font-extrabold text-foreground sm:text-3xl text-center">
              Pertanyaan Sering Diajukan (FAQ)
            </h3>
          </div>

          <Accordion type="single" collapsible className="mt-6 space-y-3">
            {faqsList.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-2xl border border-border bg-card px-5 py-1 shadow-soft"
              >
                <AccordionTrigger className="text-left font-extrabold text-foreground text-sm sm:text-base hover:no-underline hover:text-primary">
                  {faq.pertanyaan}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground pt-1 pb-4">
                  {faq.jawaban}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA Hubungi Pengelola Banner */}
        <div className="mt-12 overflow-hidden rounded-3xl bg-gradient-to-br from-[#064E3B] via-[#047857] to-[#166534] p-8 sm:p-10 text-white shadow-2xl relative">
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-amber-300 backdrop-blur-md">
                <Sparkles className="size-3.5 text-amber-300" />
                Layanan Informasi Reservasi
              </span>
              <h3 className="mt-3 text-2xl sm:text-3xl font-black tracking-tight text-white">
                Hubungi Pengelola
              </h3>
              <p className="mt-2 text-sm text-emerald-100 font-medium max-w-xl">
                Tanyakan paket wisata, kunjungan, kegiatan, dan informasi terbaru Desa Wisata Ekang
                Anculai.
              </p>
            </div>
            <a
              href={`https://wa.me/${whatsapp}?text=Halo%20Pengelola%20Desa%20Wisata%20Ekang%20Anculai,%20saya%20ingin%20tanya%20informasi%20wisata`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gold px-7 py-4 text-xs font-black text-gold-foreground shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-gold/90 cursor-pointer"
            >
              <MessageSquare className="size-4" />
              <span>Hubungi Pengelola via WA</span>
            </a>
          </div>
        </div>
      </div>

      {/* Review Submission Modal */}
      <Dialog open={openModal} onOpenChange={setOpenModal}>
        <DialogContent className="max-w-md rounded-3xl p-6">
          <DialogHeader>
            <DialogTitle className="text-xl font-extrabold text-foreground">
              Bagikan Pengalaman Wisata Anda
            </DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground">
              Ulasan Anda sangat berarti bagi pengembangan Desa Wisata Ekang Anculai.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleAddReview} className="mt-4 space-y-4">
            <div>
              <label className="text-xs font-bold text-muted-foreground">Nama Anda</label>
              <input
                type="text"
                required
                placeholder="Contoh: Andi Permana"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className="mt-1.5 w-full rounded-2xl border border-border bg-surface px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-muted-foreground">Kota / Asal</label>
                <input
                  type="text"
                  placeholder="Contoh: Batam / Singapura"
                  value={asal}
                  onChange={(e) => setAsal(e.target.value)}
                  className="mt-1.5 w-full rounded-2xl border border-border bg-surface px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-muted-foreground">Tipe Kunjungan</label>
                <select
                  value={tipe}
                  onChange={(e) =>
                    setTipe(
                      e.target.value as "Keluarga" | "Pasangan" | "Mancanegara" | "Rombongan / KKN",
                    )
                  }
                  className="mt-1.5 w-full rounded-2xl border border-border bg-surface px-3 py-2.5 text-xs font-medium outline-none"
                >
                  <option value="Keluarga">Keluarga</option>
                  <option value="Pasangan">Pasangan</option>
                  <option value="Mancanegara">Mancanegara</option>
                  <option value="Rombongan / KKN">Rombongan / KKN</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-muted-foreground">Bintang Rating</label>
              <div className="mt-2 flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="p-1 hover:scale-110 transition-transform"
                  >
                    <Star
                      className={`size-6 ${
                        star <= rating
                          ? "fill-amber-400 text-amber-400"
                          : "text-muted-foreground/30"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-muted-foreground">
                Komentar / Pengalaman Anda
              </label>
              <textarea
                required
                rows={3}
                placeholder="Ceritakan pengalaman Anda saat menjelajah Ekang Anculai..."
                value={komentar}
                onChange={(e) => setKomentar(e.target.value)}
                className="mt-1.5 w-full rounded-2xl border border-border bg-surface px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-primary py-3 text-xs font-bold text-primary-foreground shadow-card hover:bg-emerald-deep"
            >
              Kirim Ulasan Resmi
            </button>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
}
