import { CleanHero } from '../components/Hero/CleanHero';
import { IdentityMarquee } from '../components/Marquee/IdentityMarquee';
import { HumanAbout } from '../components/About/HumanAbout';
import { StackedProjectsSection } from '../components/Work/StackedProjectsSection';
import { LifeArchiveStrip } from '../components/Archive/LifeArchiveStrip';
import { BuildingWithImpact } from '../components/Impact/BuildingWithImpact';
import { SimpleContact } from '../components/Contact/SimpleContact';
import { PageShell } from './PageShell';

export function HomePage() {
  return (
    <PageShell>
      <CleanHero />
      <IdentityMarquee />
      <HumanAbout />
      <StackedProjectsSection />
      <LifeArchiveStrip />
      <BuildingWithImpact />
      <SimpleContact />
    </PageShell>
  );
}
