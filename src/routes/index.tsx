import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { StatsSection } from "@/components/site/StatsSection";
import { DestinationSpotlight } from "@/components/site/DestinationSpotlight";
import { CbtSection } from "@/components/site/CbtSection";
import { VideoSection } from "@/components/site/VideoSection";
import { PackagesSection } from "@/components/site/PackagesSection";
import { CultureAndMarketplace } from "@/components/site/CultureAndMarketplace";
import { MapSection } from "@/components/site/MapSection";
import { EventCalendar } from "@/components/site/EventCalendar";
import { ReviewsAndFaqSection } from "@/components/site/ReviewsAndFaqSection";

import { useSiteData } from "@/lib/cms-store";
import { JsonLdScript, getVillageJsonLd, getFaqJsonLd } from "@/lib/json-ld";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Desa Wisata Hijau dan Kreatif Ekang Anculai | Where Nature, Culture, Creativity, and Village Life Grow Together.",
      },
      {
        name: "description",
        content:
          "Desa Wisata Hijau dan Kreatif Ekang Anculai, Bintan — Where Nature, Culture, Creativity, and Village Life Grow Together. Nikmati pengalaman autentik membatik, perkebunan warga, gastronomi, mangrove, budaya, dan Homestay Rumah Warga.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://desawisataekanganculai.id/" },
      { property: "og:title", content: "Desa Wisata Hijau dan Kreatif Ekang Anculai" },
      {
        property: "og:description",
        content:
          "Where Nature, Culture, Creativity, and Village Life Grow Together. Destinasi wisata berbasis masyarakat di Teluk Sebong, Bintan.",
      },
      {
        property: "og:image",
        content: "https://desawisataekanganculai.id/android-chrome-512x512.png",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Desa Wisata Hijau dan Kreatif Ekang Anculai",
      },
      {
        name: "twitter:description",
        content:
          "Where Nature, Culture, Creativity, and Village Life Grow Together. Destinasi wisata berbasis masyarakat di Teluk Sebong, Bintan.",
      },
      {
        name: "twitter:image",
        content: "https://desawisataekanganculai.id/android-chrome-512x512.png",
      },
    ],
    links: [{ rel: "canonical", href: "https://desawisataekanganculai.id/" }],
  }),
  component: Index,
});

function Index() {
  const siteData = useSiteData();
  const villageInfo = siteData?.villageInfo;
  const reviews = siteData?.reviews || [];
  const faqs = siteData?.faqs || [];
  const villageSchema = getVillageJsonLd(villageInfo, reviews);
  const faqSchema = faqs.length > 0 ? getFaqJsonLd(faqs) : null;

  return (
    <>
      <JsonLdScript data={villageSchema} />
      {faqSchema && <JsonLdScript data={faqSchema} />}
      <main id="main-content" tabIndex={-1} className="outline-none">
        <Hero />
        <StatsSection />
        <DestinationSpotlight />
        <CbtSection />
        <VideoSection />
        <PackagesSection />
        <CultureAndMarketplace />
        <MapSection />
        <EventCalendar />
        <ReviewsAndFaqSection />
      </main>
    </>
  );
}
