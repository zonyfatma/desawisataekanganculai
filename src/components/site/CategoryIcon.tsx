import {
  Palette,
  Sprout,
  UtensilsCrossed,
  Trees,
  Home,
  Moon,
  Coffee,
  Footprints,
  HeartHandshake,
  Sparkles,
  Camera,
  Drama,
  ShoppingBag,
  Gift,
  Users,
  Layers,
  Compass,
  CookingPot,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  // 01. Batik & Seni Kreatif
  "🎨": Palette,
  batik: Palette,
  creative: Palette,

  // 02. Pertanian & Kebun
  "🌱": Sprout,
  farm: Sprout,
  farming: Sprout,
  kebun: Sprout,

  // 03. Kuliner & Olahan Pangan
  "🍠": UtensilsCrossed,
  "🍽️": UtensilsCrossed,
  culinary: UtensilsCrossed,
  gastronomy: CookingPot,
  kuliner: UtensilsCrossed,
  dining: UtensilsCrossed,

  // 04. Kerajinan & Produk Khas
  "🧺": Layers,
  craft: Layers,
  kerajinan: Layers,

  // 05. Ekowisata Alam & Mangrove
  "🌿": Trees,
  mangrove: Trees,
  nature: Trees,
  alam: Trees,
  compass: Compass,

  // 06. Seni & Kebudayaan
  "🏺": Drama,
  "🎭": Drama,
  culture: Drama,
  budaya: Drama,
  reog: Drama,

  // 07. Oleh-oleh & Produk Kreatif
  "🛍️": Gift,
  "🎁": Gift,
  souvenir: Gift,
  "oleh-oleh": Gift,
  oleholeh: Gift,
  gift: Gift,
  shopping: ShoppingBag,

  // 08. Kegiatan Masyarakat & Gotong Royong
  "👥": Users,
  "🤝": HeartHandshake,
  community: Users,
  masyarakat: Users,
  kegiatan: Users,
  umkm: ShoppingBag,
  homestay: Home,
  "🏡": Home,

  // Lain-lain & Itinerary
  "🌙": Moon,
  night: Moon,
  "☕": Coffee,
  breakfast: Coffee,
  "🚶": Footprints,
  walk: Footprints,
  "📸": Camera,
  camera: Camera,
  "👋": HeartHandshake,
  farewell: HeartHandshake,
};

export function CategoryIcon({ icon, className = "size-5" }: { icon: string; className?: string }) {
  const normalizedKey = (icon || "").toLowerCase().trim();
  const IconComponent = iconMap[normalizedKey] || iconMap[icon] || Sparkles;
  return <IconComponent className={className} />;
}
