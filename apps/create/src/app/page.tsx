import { TopReels } from "@/components/TopReels";
import { Collabs } from "@/components/Collabs";
import { Commission } from "@/components/Commission";
import { CreativeCoding } from "@/components/CreativeCoding";
import { Hero } from "@/components/Hero";
import { Reels } from "@/components/Reels";
import { StixStrip } from "@/components/StixStrip";
import { WebCraft } from "@/components/WebCraft";
import { site, webWorks } from "@/data/create";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://atreyakamat.dev/#person",
      name: "Atreya Kamat",
      url: "https://atreyakamat.dev",
      email: `mailto:${site.email}`,
      address: { "@type": "PostalAddress", addressRegion: "Goa", addressCountry: "IN" },
      sameAs: ["https://github.com/atreyakamat", "https://linkedin.com/in/atreya-kamat", "https://www.instagram.com/atreya.mp4/", site.url],
    },
    {
      "@type": "CollectionPage",
      name: "atreya.mp4 — creator and brand collaborations",
      url: site.url,
      author: { "@id": "https://atreyakamat.dev/#person" },
      hasPart: webWorks.map((w) => ({ "@type": "WebSite", name: w.name, url: w.url })),
    },
  ],
};

export default function CreatePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <TopReels />
      <Collabs />
      <Commission />
      <StixStrip />
      <CreativeCoding />
      <WebCraft />
      <Reels />
    </>
  );
}
