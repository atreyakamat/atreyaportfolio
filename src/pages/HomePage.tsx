import { CleanHero } from '../components/Hero/CleanHero';
import { IdentityMarquee } from '../components/Marquee/IdentityMarquee';
import { HumanAbout } from '../components/About/HumanAbout';
import { ThingsIDoPillars } from '../components/Pillars/ThingsIDoPillars';
import { SelectedWorkGrid } from '../components/Work/SelectedWorkGrid';
import { StraightforwardExperience } from '../components/Experience/StraightforwardExperience';
import { HumanNow } from '../components/Now/HumanNow';
import { EcosystemSection } from '../components/Ecosystem/EcosystemSection';
import { SimpleContact } from '../components/Contact/SimpleContact';
import { PageShell } from './PageShell';

export function HomePage() {
  return (
    <PageShell>
      <CleanHero />
      <IdentityMarquee />
      <HumanAbout />
      <ThingsIDoPillars />
      <SelectedWorkGrid />
      <StraightforwardExperience />
      <HumanNow />
      <EcosystemSection />
      <SimpleContact />
    </PageShell>
  );
}
