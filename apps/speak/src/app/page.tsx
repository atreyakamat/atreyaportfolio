import { MoreTalks } from "@/components/MoreTalks";
import { Booking } from "@/components/Booking";
import { Faq } from "@/components/Faq";
import { Formats } from "@/components/Formats";
import { Hero } from "@/components/Hero";
import { SpeakerKit } from "@/components/SpeakerKit";
import { TopicStrip } from "@/components/TopicStrip";
import { Topics } from "@/components/Topics";
import { Workshop } from "@/components/Workshop";
import { bios, faqs, site, topics } from "@/data/speak";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.devUrl}/#person`,
      name: "Atreya Kamat",
      jobTitle: "Software Engineer & Speaker",
      description: bios.short,
      url: site.url,
      image: `${site.url}/atreyapfp.webp`,
      email: `mailto:${site.email}`,
      address: { "@type": "PostalAddress", addressRegion: "Goa", addressCountry: "IN" },
      sameAs: [site.devUrl, site.linkedin, site.github],
      knowsAbout: [...topics.map((t) => t.title), "Prompt engineering", "Google Stitch", "Google AI Studio", "Gemini CLI"],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
};

export default function SpeakHome() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <TopicStrip />
      <Workshop />
      <MoreTalks />
      <Topics />
      <Formats />
      <SpeakerKit />
      <Booking />
      <Faq />
    </>
  );
}
