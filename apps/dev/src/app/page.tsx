import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { CaseStudies } from "@/components/CaseStudies";
import { ProofWall } from "@/components/ProofWall";
import { Testimonials } from "@/components/Testimonials";
import { TrustBar } from "@/components/TrustBar";
import { Experience } from "@/components/Experience";
import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Principles } from "@/components/Principles";
import { SelectedWork } from "@/components/SelectedWork";
import { ServicesBento } from "@/components/ServicesBento";
import { SystemDiagram } from "@/components/SystemDiagram";
import { homeFaqs } from "@/data/services";
import { businessLd, faqLd, graph, personLd } from "@/lib/jsonld";

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: graph(personLd, businessLd, faqLd(homeFaqs)) }} />
      <Hero />
      <TrustBar />
      <Marquee />
      <ServicesBento />
      <SystemDiagram />
      <ProofWall />
      <CaseStudies />
      <Testimonials />
      <SelectedWork />
      <About />
      <Principles />
      <Experience />
      <Faq items={homeFaqs} />
      <Contact />
    </>
  );
}
