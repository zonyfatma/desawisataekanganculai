# Wonderful Indonesia Explorer

Act as a Principal Frontend Engineer and UI/UX Designer specialized in modern government and tourism portals.

I want you to build a pixel-perfect, highly responsive, and full-featured web application that clones and modernizes the "Jejaring Desa Wisata (JADESTA)" portal by Kemenparekraf Indonesia.

---

### 1. TECH STACK REQUIREMENTS

- Framework: Next.js (App Router) or React with TypeScript

- Styling: Tailwind CSS

- Icons: Lucide React Icons

- Animations: Framer Motion

- UI Components: Radix UI / Shadcn UI primitives

- Map Integration: Leaflet JS / Mapbox GL (for interactive tourism village map)

- Typography: 'Plus Jakarta Sans' or 'Poppins' via Google Fonts

---

### 2. DESIGN SYSTEM & CSS SPECIFICATIONS

- Color Palette:

  - Primary Green: `#0A5C36` (Forest/Eco Green)

  - Dark Emerald: `#064E3B`

  - Gold Accent: `#EAA813` (ADWI Award Accent)

  - Surface Neutral: `#F8FAFC` (Soft Gray Background)

  - Text Primary: `#0F172A`

  - Text Muted: `#64748B`

- Shadows: Soft custom elevations (`shadow-xl` for modals, `shadow-md` with hover transition `shadow-2xl` for cards).

- Border Radius: Rounded 2XL (`rounded-2xl`) for cards and input containers, Rounded Full (`rounded-full`) for badges and primary pill buttons.

- Hover Effects: Micro-interactions with smooth scale transitions (`transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`).

---

### 3. HOMEPAGE ARCHITECTURE & COMPONENT BREAKDOWN

#### A. Header / Sticky Navigation Bar

- Transparent background over hero section, smoothly morphing into solid white with shadow on scroll.

- Left: Logo combination (Indonesian Tourism Seal + "JADESTA" modern logotype + "Kemenparekraf").

- Center Menu Items: "Beranda", "Desa Wisata", "Kategorisasi", "Peta Persebaran", "E-Katalog / Paket", "Berita & ADWI".

- Right Action Buttons: Search Quick Icon, "Masuk / Daftar" button styled with primary green background and rounded pill borders.

- Mobile Responsive: Slide-over drawer navigation menu with hamburger toggle.

#### B. Hero Section

- Dynamic Full-width Image Carousel / Background Banner featuring breathtaking high-resolution pictures of Indonesian villages (e.g., Penglipuran Bali, Wae Rebo, Tetebatu).

- Dark gradient overlay (`bg-gradient-to-t from-black/80 via-black/40 to-transparent`) for optimal visual text readability.

- Headlines:

  - Small Tag: "JEJARING DESA WISATA INDONESIA" (Gold, Uppercase, Tracking-wider).

  - Main Heading: "Jelajahi Keindahan & Kearifan Lokal Desa Wisata Indonesia".

- Floating Search Card Box (Centered at bottom of Hero):

  - Multi-input filter bar: [ Input: Nama Desa / Wilayah ] | [ Select Dropdown: Provinsi ] | [ Select Dropdown: Kategori (Rintisan, Berkembang, Maju, Mandiri) ] | [ CTA Button: "Cari Desa Wisata" ].

#### C. Live Statistics / Counter Section

- Grid layout (4 Columns on Desktop, 2 on Mobile).

- Cards showcasing live platform figures:

  1. Total Desa Wisata Terdaftar (e.g., 5,240+)

  2. Desa Mandiri & Maju (e.g., 1,120)

  3. Pemenang ADWI (Anugerah Desa Wisata Indonesia)

  4. Total Paket Wisata Terintegrasi

- Subtle count-up animation on viewport scroll using Framer Motion.

#### D. Interactive Categorization Section ("Kategori Klasifikasi Desa")

- Interactive tabs showcasing the 4 levels of Indonesian Tourism Villages:

  1. Desa Wisata Mandiri (Gold/Green Theme)

  2. Desa Wisata Maju (Emerald Theme)

  3. Desa Wisata Berkembang (Blue Theme)

  4. Desa Wisata Rintisan (Gray/Yellow Theme)

- Clicking each tab dynamically updates a description box and filters the highlighted cards grid below.

#### E. Featured Tourism Villages Grid ("Desa Wisata Unggulan & ADWI")

- Grid layout (3 or 4 cards per row, 1 per row on mobile).

- Card Component Spec:

  - Image Container (Aspect ratio 4:3) with gradient overlay and badge pin on top-right (e.g., "Pemenang ADWI 2024" or "Desa Mandiri").

  - Title: Name of the Desa Wisata (e.g., "Desa Wisata Penglipuran").

  - Location Subtitle: Pin Icon + "Kabupaten Bangli, Bali".

  - Metrics: Star Rating (e.g., "4.9 (120 Ulasan)"), Facilities Count badges (e.g., Homestay, Kuliner, Souvenir).

  - Footer: Price range or "Paket Available", with a clean "Lihat Profil" button with arrow animation on hover.

#### F. Interactive GIS Map Section ("Peta Persebaran Desa Wisata")

- Interactive Map Component (using Leaflet.js with custom styled tiles).

- Custom map markers pinned across the Indonesian archipelago.

- Pop-up card on marker click displaying thumbnail image, village name, category badge, and direct link to profile.

- Sidebar search & filter over the map (Filter by Island/Province).

#### G. E-Katalog & Paket Wisata Section

- Horizontal Scroll / Carousel featuring tour packages offered by local village communities (POKDARWIS).

- Package Card layout: Package Image, Title (e.g., "Paket Tracking & Edukasi Budaya 3D2N"), Price Tag (e.g., "Rp 450.000 / pax"), Duration badge, "Pesan Sekarang" CTA.

#### H. News & ADWI Announcements ("Berita & Event Terkini")

- Featured Article (Large card left) + List of recent updates (Right).

- Badges for category: "Pengumuman", "Edukasi", "ADWI Update".

#### I. Footer Section

- Top Row: "Pesona Indonesia", "Wonderful Indonesia", and "Kemenparekraf" official brand visual logos.

- Grid Columns:

  1. About JADESTA & Vision statement.

  2. Quick Navigation Links.

  3. Classification & Guidelines.

  4. Contact Info: Official Address, Hotline, Email, and Social Media Icons (YouTube, Instagram, TikTok, Facebook).

- Bottom Bar: Copyright notice + Privacy Policy + Terms of Service.

---

### 4. DETAIL PAGE TEMPLATE ("Profil Desa Wisata")

Build a dynamic detail view component (`/desa/[slug]`):

- **Hero Banner:** Full-width photo gallery slider with "Simpan / Wishlist" and "Bagikan" buttons.

- **Quick Info Bar:** Classification Badge, Regency/Province, Pokdarwis Manager Name, Contact WhatsApp CTA.

- **Tabbed Content Navigation:**

  1. _Tentang Desa_ (History, Potensi Wisata, Video Profile embed).

  2. _Atraksi & Fasilitas_ (Grid icons: Homestay, Toilet Umum, Internet, Area Parkir, Kuliner).

  3. _Paket Wisata_ (List of bookable tour packages).

  4. _Galeri Foto & Video_ (Masonry photo gallery with Lightbox view).

  5. _Ulasan & Rating_ (Review form + community comments).

  6. _Peta Lokasi & Aksesibilitas_ (Embedded map with route guidance).

---

### 5. UX & FUNCTIONALITY SPECIFICATIONS

- **Filtering System:** Real-time state management for multi-criteria search (Province, Regency, Category, Facilities).

- **Responsive Breakpoints:** Mobile-first design (`sm`, `md`, `lg`, `xl`, `2xl` Tailwind classes used meticulously).

- **Accessibility (a11y):** ARIA labels for buttons, keyboard navigable search, high contrast text color compliance.

- **Empty & Loading States:** Skeleton loaders for image-heavy grid cards and map initialization.

Please generate clean, modular, production-ready React component code with Tailwind CSS that implements this entire architecture with exceptional attention to visual design accuracy and UI polish matching the JADESTA identity.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/0afc2e81-c198-4db6-9890-82318e527316).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
