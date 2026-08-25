import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Music2,
  Phone,
  Award,
  ShieldCheck,
  Send,
} from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/jadesta";
import { toast } from "sonner";
import logoBintan from "@/assets/logo-bintan.png";

const kolomNavigasi = [
  { label: "Profil Wisata Ekang Anculai", href: "/" },
  { label: "Potensi Wisata", href: "/#potensi" },
  { label: "Pengalaman CBT", href: "/#pengalaman" },
  { label: "Galeri Foto", href: "/galeri" },
  { label: "Paket & Pengalaman Wisata", href: "/rencanakan-kunjungan" },
  { label: "Kegiatan Desa 2026", href: "/#kegiatan" },
  { label: "Peta & Akses", href: "/#peta" },
];

const kolomPotensi = [
  { label: "Rumah Batik Bintan", href: "/#umkm-budaya" },
  { label: "Ekang Mangrove Park", href: "/#potensi" },
  { label: "Wisata Perkebunan Warga", href: "/#potensi" },
  { label: "Homestay Rumah Warga", href: "/rencanakan-kunjungan" },
  { label: "Wisata Gastronomi", href: "/#umkm-budaya" },
  { label: "Pentas Seni Reog Sedulur Manunggal", href: "/#umkm-budaya" },
];

export function Footer() {
  const [emailSub, setEmailSub] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailSub) return;
    toast.success(
      "Terima kasih! Anda berhasil mendaftar newsletter info wisata Desa Ekang Anculai.",
    );
    setEmailSub("");
  };

  return (
    <footer id="kontak" className="w-full bg-[#022C22] text-white border-t border-emerald-950">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        {/* Official Endorsements Ribbon */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-primary-foreground/15 pb-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/15 px-4 py-2 text-xs font-extrabold text-gold uppercase">
              <Award className="size-4" />
              Desa Berprestasi Prov. Kepri 2026
            </span>
            <span className="rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-2 text-xs font-bold tracking-wide uppercase">
              Pemdes Ekang Anculai
            </span>
            <span className="rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-2 text-xs font-bold tracking-wide uppercase">
              Pemkab Bintan
            </span>
            <span className="rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-2 text-xs font-bold tracking-wide uppercase">
              Pengelola Wisata Pesona Ekang
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-primary-foreground/80">
            <ShieldCheck className="size-4 text-gold" />
            <span>Desa Wisata Hijau dan Kreatif Berbasis Masyarakat</span>
          </div>
        </div>

        <div className="grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-2xl bg-white p-1.5 shadow-soft shrink-0 ring-1 ring-white/20">
                <img src={logoBintan} alt="Logo Lambang Bintan" className="size-8 object-contain" />
              </span>
              <div>
                <span className="text-lg sm:text-xl font-black tracking-tight block">
                  DESA WISATA HIJAU DAN KREATIF
                </span>
                <span className="block text-xs font-black text-gold">EKANG ANCULAI</span>
              </div>
            </div>
            <p className="mt-3 text-xs font-extrabold italic text-gold">
              "Where Nature, Culture, Creativity, and Village Life Grow Together."
            </p>
            <p className="mt-3 text-xs leading-relaxed text-primary-foreground/80">
              Kecamatan Teluk Sebong, Kabupaten Bintan, Kepulauan Riau. Mengusung pariwisata
              berbasis masyarakat (CBT) melalui ekowisata mangrove, Rumah Batik Bintan, perkebunan
              warga, gastronomi, dan kebudayaan desa.
            </p>

            {/* Newsletter form */}
            <form onSubmit={handleSubscribe} className="mt-5 space-y-2">
              <label className="text-[11px] font-extrabold tracking-wider text-gold uppercase">
                Langganan Info & Kunjungan Desa
              </label>
              <div className="flex items-center rounded-full bg-primary-foreground/15 p-1 border border-primary-foreground/20">
                <input
                  type="email"
                  required
                  placeholder="Email Anda..."
                  value={emailSub}
                  onChange={(e) => setEmailSub(e.target.value)}
                  className="w-full bg-transparent px-3 py-1.5 text-xs text-primary-foreground outline-none placeholder:text-primary-foreground/60"
                />
                <button
                  type="submit"
                  aria-label="Daftar newsletter"
                  className="grid size-8 shrink-0 place-items-center rounded-full bg-gold text-gold-foreground transition-transform hover:scale-105"
                >
                  <Send className="size-3.5" />
                </button>
              </div>
            </form>
          </div>

          <div>
            <h3 className="text-xs font-bold tracking-wider text-gold uppercase">Navigasi Utama</h3>
            <ul className="mt-4 space-y-2.5">
              {kolomNavigasi.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-xs text-primary-foreground/80 transition-colors hover:text-gold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold tracking-wider text-gold uppercase">
              Potensi & Pengalaman
            </h3>
            <ul className="mt-4 space-y-2.5">
              {kolomPotensi.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-xs text-primary-foreground/80 transition-colors hover:text-gold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold tracking-wider text-gold uppercase">
              Kontak Pengelola
            </h3>
            <ul className="mt-4 space-y-3 text-xs text-primary-foreground/80">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
                <span>
                  Jl. Jendral Sudirman, Kp. Sukoharjo, Ekang Anculai, Teluk Sebong, Bintan 29151
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="size-4 shrink-0 text-gold" />
                <div>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-gold transition-colors font-bold block"
                  >
                    +62 878 6633 1231 (WA Pengelola)
                  </a>
                  <span className="text-[10px] opacity-75">Layanan Informasi 08.00–17.00 WIB</span>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="size-4 shrink-0 text-gold" />
                <a
                  href="mailto:reservation@desawisataekanganculai.id"
                  className="hover:text-gold transition-colors"
                >
                  reservation@desawisataekanganculai.id
                </a>
              </li>
            </ul>
            <div className="mt-5 flex gap-2">
              {[
                {
                  Icon: Instagram,
                  label: "Instagram",
                  href: "https://instagram.com/desawisataekang",
                },
                { Icon: Facebook, label: "Facebook", href: "https://facebook.com" },
                { Icon: Music2, label: "TikTok", href: "https://tiktok.com" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid size-9 place-items-center rounded-full bg-primary-foreground/15 transition-all duration-300 hover:-translate-y-1 hover:bg-gold hover:text-gold-foreground"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Desa Wisata Ekang Anculai, Kabupaten Bintan. Hak cipta
            dilindungi undang-undang.
          </p>
          <div className="flex gap-5">
            <a
              href="https://desaekanganculai.bintankab.go.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold"
            >
              Portal Resmi Pemdes Ekang Anculai ↗
            </a>
            <a
              href="https://www.bintankab.go.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold"
            >
              Pemkab Bintan ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
