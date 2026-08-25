import React from "react";
import type { VillageInfoState } from "./cms-store";
import type { LandmarkItem, KegiatanItem, ReviewItem } from "../data/jadesta";

const DEFAULT_SITE_URL = "https://desawisataekanganculai.id";

/**
 * Safely render JSON-LD script tag with JSON stringification to prevent XSS
 */
export function JsonLdScript({
  data,
}: {
  data: Record<string, unknown> | Record<string, unknown>[];
}) {
  if (!data) return null;
  const jsonString = JSON.stringify(data).replace(/</g, "\\u003c").replace(/>/g, "\\u003e");

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonString }} />;
}

/**
 * Schema.org TouristDestination & LocalBusiness for Ekang Anculai Village
 */
export function getVillageJsonLd(
  villageInfo?: VillageInfoState,
  approvedReviews: ReviewItem[] = [],
) {
  const baseUrl = (process.env["SITE_URL"] || DEFAULT_SITE_URL).replace(/\/$/, "");

  const avgRating =
    approvedReviews.length > 0
      ? (
          approvedReviews.reduce((sum, r) => sum + (r.rating || 5), 0) / approvedReviews.length
        ).toFixed(1)
      : null;

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["TouristDestination", "LocalBusiness"],
    "@id": `${baseUrl}/#village`,
    name: villageInfo?.nama || "Desa Wisata Ekang Anculai",
    description:
      villageInfo?.tagline ||
      "Desa Wisata Hijau dan Kreatif Bintan. Destinasi ekowisata berbasis masyarakat di Kecamatan Teluk Sebong, Kabupaten Bintan, Kepulauan Riau.",
    url: baseUrl,
    telephone: villageInfo?.whatsapp || "+6281268326284",
    email: villageInfo?.email || "reservation@desawisataekanganculai.id",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        villageInfo?.alamat || "Jl. Jendral Sudirman, Kp. Sukoharjo, Desa Ekang Anculai",
      addressLocality: "Teluk Sebong",
      addressRegion: "Kepulauan Riau",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 1.1345,
      longitude: 104.4211,
    },
    openingHours: "Mo-Su 08:00-17:00",
    priceRange: "$$",
    touristType: ["Ecotourist", "Cultural Tourist", "Family Tourist", "Nature Lover"],
  };

  if (avgRating && approvedReviews.length > 0) {
    schema["aggregateRating"] = {
      "@type": "AggregateRating",
      ratingValue: avgRating,
      reviewCount: approvedReviews.length,
      bestRating: "5",
      worstRating: "1",
    };
  }

  return schema;
}

/**
 * Schema.org TouristAttraction for individual destination spotlight/landmark
 */
export function getDestinationJsonLd(landmark: LandmarkItem) {
  const baseUrl = (process.env["SITE_URL"] || DEFAULT_SITE_URL).replace(/\/$/, "");

  return {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: landmark.nama,
    description: landmark.deskripsi,
    image: landmark.image,
    url: `${baseUrl}/desa/${landmark.id}`,
    touristType: [landmark.kategori || "Wisata Alam"],
    location: {
      "@type": "Place",
      name: "Desa Wisata Ekang Anculai",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Teluk Sebong",
        addressRegion: "Kepulauan Riau",
        addressCountry: "ID",
      },
    },
  };
}

/**
 * Schema.org Event for village agenda & events
 */
export function getEventJsonLd(kegiatan: KegiatanItem) {
  const baseUrl = (process.env["SITE_URL"] || DEFAULT_SITE_URL).replace(/\/$/, "");

  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: kegiatan.judul,
    description: kegiatan.deskripsi,
    startDate: new Date().toISOString().split("T")[0],
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: "Desa Wisata Ekang Anculai",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Teluk Sebong",
        addressRegion: "Kepulauan Riau",
        addressCountry: "ID",
      },
    },
    image: kegiatan.image,
    organizer: {
      "@type": "Organization",
      name: "Pengelola Wisata Pesona Ekang",
      url: baseUrl,
    },
  };
}

/**
 * Schema.org BreadcrumbList
 */
export function getBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  const baseUrl = (process.env["SITE_URL"] || DEFAULT_SITE_URL).replace(/\/$/, "");

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${baseUrl}${item.url}`,
    })),
  };
}

/**
 * Schema.org FAQPage for FAQ section
 */
export function getFaqJsonLd(faqs: { pertanyaan: string; jawaban: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.pertanyaan,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.jawaban,
      },
    })),
  };
}
