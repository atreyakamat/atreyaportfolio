import { Capabilities } from "@/components/Capabilities";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Pipeline } from "@/components/Pipeline";
import { SelectedWork } from "@/components/SelectedWork";
import { personalInfo } from "@/data/portfolio";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Atreya Kamat",
  jobTitle: "Software Engineer",
  url: personalInfo.siteUrl,
  sameAs: [personalInfo.githubUrl, personalInfo.linkedinUrl],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <Hero />
      <Marquee />
      <SelectedWork />
      <Pipeline />
      <Experience />
      <Capabilities />
      <Contact />
    </>
  );
}
