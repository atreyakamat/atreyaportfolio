import { useEffect } from 'react';
import { CleanHero } from '../components/Hero/CleanHero';
import { IdentityMarquee } from '../components/Marquee/IdentityMarquee';
import { HumanAbout } from '../components/About/HumanAbout';
import { StackedProjectsSection } from '../components/Work/StackedProjectsSection';
import { LifeArchiveStrip } from '../components/Archive/LifeArchiveStrip';
import { EcosystemSection } from '../components/Ecosystem/EcosystemSection';
import { BuildingWithImpact } from '../components/Impact/BuildingWithImpact';
import { SimpleContact } from '../components/Contact/SimpleContact';
import { updateSeo } from '../lib/seo';
import { PageShell } from './PageShell';

export function HomePage() {
  useEffect(() => {
    updateSeo({
      title: 'Atreya Kamat',
      description: 'Product builder and software engineer crafting useful products, systems and thoughtful digital experiences.',
      path: '/',
    });
  }, []);

  return (
    <PageShell>
      <CleanHero />
      <IdentityMarquee />
      <HumanAbout />
      <StackedProjectsSection />
      <LifeArchiveStrip />
      <EcosystemSection />
      <SimpleContact />
      <BuildingWithImpact />
    </PageShell>
  );
}
