import { Enquire } from "@/components/Enquire";
import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Reels } from "@/components/Reels";
import { Tide } from "@/components/Tide";
import { Tracks } from "@/components/Tracks";
import { SITE_URL, faqs, site } from "@/data/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#studio`,
      name: site.name,
      url: SITE_URL,
      description: site.description,
      email: site.email,
      telephone: "+91-77440-20601",
      image: `${SITE_URL}/og/home.png`,
      priceRange: "₹2,000–₹8,000",
      address: { "@type": "PostalAddress", addressRegion: "Goa", addressCountry: "IN" },
      areaServed: { "@type": "State", name: "Goa" },
      founder: { "@type": "Person", name: site.founder.name, url: site.founder.url },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Wedding reels",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Wedding reels for couples", description: "Reels shot at destination and local Goan weddings. Includes 2 reels and a few posts." },
            priceSpecification: { "@type": "PriceSpecification", minPrice: 6000, maxPrice: 8000, priceCurrency: "INR" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Wedding reel editing for videographers", description: "Vertical reel edits from your footage. ₹2,000 per reel above 5 reels a week." },
            priceSpecification: { "@type": "UnitPriceSpecification", minPrice: 2500, priceCurrency: "INR", unitText: "reel" },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <Marquee />
      <Tracks />
      <Tide />
      <Reels />
      <Faq />
      <Enquire />
    </>
  );
}
