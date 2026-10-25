import { Enquire } from "@/components/Enquire";
import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { LiveLesson } from "@/components/LiveLesson";
import { Tracks } from "@/components/Tracks";
import { WhyMe } from "@/components/WhyMe";
import { faqs, site, tracks } from "@/data/teach";

const goaAreas = ["Panaji", "Porvorim", "Mapusa", "Margao", "Vasco da Gama", "Ponda"];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://atreyakamat.dev/#person",
      name: "Atreya Kamat",
      url: "https://atreyakamat.dev",
      jobTitle: "Software Engineer & Tutor",
      address: { "@type": "PostalAddress", addressRegion: "Goa", addressCountry: "IN" },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${site.url}/#tuition`,
      name: "Atreya Kamat — Computer Science & Coding Tuition",
      url: site.url,
      email: site.email,
      image: `${site.url}/atreyapfp.webp`,
      founder: { "@id": "https://atreyakamat.dev/#person" },
      address: { "@type": "PostalAddress", addressRegion: "Goa", addressCountry: "IN" },
      areaServed: [{ "@type": "State", name: "Goa" }, ...goaAreas.map((name) => ({ "@type": "City", name }))],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Tuition tracks",
        itemListElement: tracks.map((t) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: t.name, description: t.forWho, url: `${site.url}/#${t.slug}` },
        })),
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <Tracks />
      <HowItWorks />
      <LiveLesson />
      <WhyMe />
      <Faq />
      <Enquire />
    </>
  );
}
