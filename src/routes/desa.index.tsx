import { useEffect, useMemo, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Filter, Search, X } from "lucide-react";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { VillageCard, VillageCardSkeleton } from "@/components/site/VillageCard";
import { fasilitasMaster, provinsiList, villages } from "@/data/jadesta";

const searchSchema = z.object({
  q: z.string().optional(),
  provinsi: z.string().optional(),
  kategori: z.string().optional(),
});

export const Route = createFileRoute("/desa/")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Profil & Potensi Desa Ekang Anculai — Teluk Sebong, Bintan" },
      {
        name: "description",
        content:
          "Eksplorasi profil dan potensi Desa Ekang Anculai: ekowisata mangrove, Rumah Batik Bintan, UMKM lokal, homestay rumah warga, dan kegiatan masyarakat.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://desawisataekanganculai.id/desa" },
      {
        property: "og:title",
        content: "Profil & Potensi Desa Ekang Anculai — Teluk Sebong, Bintan",
      },
      {
        property: "og:description",
        content:
          "Cari dan jelajahi profil serta potensi Desa Ekang Anculai di Teluk Sebong, Kabupaten Bintan, Kepulauan Riau.",
      },
      {
        property: "og:image",
        content: "https://desawisataekanganculai.id/android-chrome-512x512.png",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Profil & Potensi Desa Ekang Anculai Bintan",
      },
      {
        name: "twitter:description",
        content:
          "Cari dan jelajahi profil serta potensi Desa Ekang Anculai di Teluk Sebong, Kabupaten Bintan, Kepulauan Riau.",
      },
      {
        name: "twitter:image",
        content: "https://desawisataekanganculai.id/android-chrome-512x512.png",
      },
    ],
    links: [{ rel: "canonical", href: "https://desawisataekanganculai.id/desa" }],
  }),
  component: DesaIndex,
});

function DesaIndex() {
  const search = Route.useSearch();
  const navigate = useNavigate({ from: "/desa/" });
  const [q, setQ] = useState(search.q ?? "");
  const [provinsi, setProvinsi] = useState(search.provinsi ?? "semua");
  const [kategori, setKategori] = useState(search.kategori ?? "semua");
  const [fasilitas, setFasilitas] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 450);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    void navigate({
      search: () => ({
        q: q || undefined,
        provinsi: provinsi === "semua" ? undefined : provinsi,
        kategori: kategori === "semua" ? undefined : kategori,
      }),
      replace: true,
    });
  }, [q, provinsi, kategori, navigate]);

  const results = useMemo(
    () =>
      villages.filter((v) => {
        const text = `${v.nama} ${v.kabupaten} ${v.provinsi}`.toLowerCase();
        return (
          text.includes(q.toLowerCase()) &&
          (provinsi === "semua" || v.provinsi === provinsi) &&
          (kategori === "semua" || v.klasifikasi === kategori) &&
          fasilitas.every((f) => v.fasilitas.includes(f))
        );
      }),
    [q, provinsi, kategori, fasilitas],
  );

  const toggleFasilitas = (f: string) =>
    setFasilitas((prev) => (prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]));

  const reset = () => {
    setQ("");
    setProvinsi("semua");
    setKategori("semua");
    setFasilitas([]);
  };

  return (
    <div className="bg-surface pt-28 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="max-w-2xl">
          <span className="inline-flex rounded-full bg-accent px-4 py-1.5 text-xs font-bold tracking-widest text-primary uppercase">
            Profil & Potensi
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Profil & Potensi Desa Ekang Anculai
          </h1>
          <p className="mt-3 text-base text-muted-foreground">
            Jelajahi potensi ekowisata mangrove, Rumah Batik Bintan, perkebunan warga, homestay
            rumah warga, dan kegiatan masyarakat Desa Ekang Anculai, Teluk Sebong, Bintan.
          </p>
        </header>

        <div className="mt-8 grid gap-3 rounded-2xl border border-border bg-card p-5 shadow-card lg:grid-cols-[1.4fr_1fr_1fr_auto]">
          <div className="flex min-w-0 items-center gap-2 rounded-2xl bg-surface px-4">
            <Search className="size-4 shrink-0 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              aria-label="Cari potensi, wisata, UMKM, atau kegiatan"
              placeholder="Cari potensi, wisata, UMKM, atau kegiatan..."
              className="w-full bg-transparent py-3.5 text-sm font-medium outline-none placeholder:text-muted-foreground"
            />
          </div>
          <Select value={provinsi} onValueChange={setProvinsi}>
            <SelectTrigger
              aria-label="Filter provinsi"
              className="h-auto rounded-2xl border-0 bg-surface px-4 py-3.5 text-sm font-medium"
            >
              <SelectValue placeholder="Provinsi" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="semua">Semua Wilayah</SelectItem>
              {provinsiList.map((p) => (
                <SelectItem key={p} value={p}>
                  {p}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={kategori} onValueChange={setKategori}>
            <SelectTrigger
              aria-label="Filter klasifikasi"
              className="h-auto rounded-2xl border-0 bg-surface px-4 py-3.5 text-sm font-medium"
            >
              <SelectValue placeholder="Klasifikasi" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="semua">Semua Klasifikasi</SelectItem>
              {["Rintisan", "Berkembang", "Maju", "Mandiri"].map((k) => (
                <SelectItem key={k} value={k}>
                  {k}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-muted px-6 py-3.5 text-sm font-bold text-foreground transition-colors hover:bg-accent hover:text-primary"
          >
            <X className="size-4" />
            Reset
          </button>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground">
            <Filter className="size-3.5" />
            Fasilitas
          </span>
          {fasilitasMaster.map((f) => (
            <button
              key={f}
              onClick={() => toggleFasilitas(f)}
              aria-pressed={fasilitas.includes(f)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition-colors ${
                fasilitas.includes(f)
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground ring-1 ring-border hover:text-primary"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <p className="mt-6 text-sm font-semibold text-muted-foreground">
          Menampilkan profil desa wisata
        </p>

        <div className="mt-5 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => <VillageCardSkeleton key={i} />)
            : results.map((v) => <VillageCard key={v.slug} village={v} />)}
        </div>

        {!loading && !results.length ? (
          <div className="mt-6 grid place-items-center rounded-2xl border border-dashed border-border bg-card p-16 text-center">
            <p className="text-base font-extrabold text-foreground">Data tidak ditemukan</p>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              Coba gunakan kata kunci lain seperti "mangrove", "batik", "perkebunan", atau
              "gastronomi".
            </p>
            <button
              onClick={reset}
              className="mt-5 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground"
            >
              Reset pencarian
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
