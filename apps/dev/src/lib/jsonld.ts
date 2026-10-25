import { personalInfo } from "@/data/portfolio";
import { goaAreas, services, type Faq } from "@/data/services";

const site = personalInfo.siteUrl;

export const personLd = {
  "@type": "Person",
  "@id": `${site}/#person`,
  name: "Atreya Kamat",
  jobTitle: "Freelance Software Engineer",
  url: site,
  email: `mailto:${personalInfo.email}`,
  image: `${site}/atreyapfp.webp`,
  address: { "@type": "PostalAddress", addressRegion: "Goa", addressCountry: "IN" },
  sameAs: [personalInfo.githubUrl, personalInfo.linkedinUrl],
  knowsAbout: ["Web development", "Custom software", "Next.js", "Python", "AI automation", "Local SEO"],
};

export const businessLd = {
  "@type": "ProfessionalService",
  "@id": `${site}/#business`,
  name: "Atreya Kamat — Software & Web Development",
  url: site,
  email: personalInfo.email,
  image: `${site}/atreyapfp.webp`,
  founder: { "@id": `${site}/#person` },
  address: { "@type": "PostalAddress", addressRegion: "Goa", addressCountry: "IN" },
  areaServed: [{ "@type": "State", name: "Goa" }, ...goaAreas.map((name) => ({ "@type": "City", name }))],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.name, url: `${site}/services/${s.slug}/` },
    })),
  },
};

export const faqLd = (faqs: Faq[]) => ({
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
});

export const graph = (...nodes: object[]) => JSON.stringify({ "@context": "https://schema.org", "@graph": nodes });
