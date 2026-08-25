import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/jadesta";

export function WhatsAppFloat() {
  const initialMessage = encodeURIComponent(
    "Halo Pengelola Desa Wisata Ekang Anculai, saya ingin mengetahui informasi tentang Desa Wisata Ekang Anculai.",
  );
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${initialMessage}`;

  return (
    <aside
      aria-label="Kontak WhatsApp Melayang"
      className="fixed right-6 z-50"
      style={{ bottom: "calc(1.5rem + env(safe-area-inset-bottom, 0px))" }}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        title="Hubungi Pengelola Desa Wisata Ekang Anculai via WhatsApp"
        aria-label="Hubungi Pengelola Desa Wisata Ekang Anculai via WhatsApp"
        className="group relative flex size-14 items-center justify-center rounded-full bg-[#14532D] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#064E3B] active:scale-95 ring-4 ring-[#14532D]/30 cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#C58A32]"
      >
        <MessageCircle className="size-7 text-white fill-current" />
        <span className="sr-only">Tanya Pengelola WA</span>
      </a>
    </aside>
  );
}
