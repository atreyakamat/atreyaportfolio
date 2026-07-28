import { CleanHeader } from './components/Navigation/CleanHeader';
import { CleanHero } from './components/Hero/CleanHero';
import { IdentityMarquee } from './components/Marquee/IdentityMarquee';
import { HumanAbout } from './components/About/HumanAbout';
import { ThingsIDoPillars } from './components/Pillars/ThingsIDoPillars';
import { SelectedWorkGrid } from './components/Work/SelectedWorkGrid';
import { StraightforwardExperience } from './components/Experience/StraightforwardExperience';
import { HumanNow } from './components/Now/HumanNow';
import { EcosystemSection } from './components/Ecosystem/EcosystemSection';
import { SimpleContact } from './components/Contact/SimpleContact';
import { CleanFooter } from './components/Footer/CleanFooter';

export function App() {
  return (
    <div className="min-h-screen bg-[#fafaf8] text-[#111113] relative selection:bg-[#0d9488] selection:text-white font-sans">
      {/* Tiny Header Nav */}
      <CleanHeader />

      {/* Main Flow */}
      <main className="relative z-10">
        <CleanHero />
        <IdentityMarquee />
        <HumanAbout />
        <ThingsIDoPillars />
        <SelectedWorkGrid />
        <StraightforwardExperience />
        <HumanNow />
        <EcosystemSection />
        <SimpleContact />
      </main>

      {/* Footer */}
      <CleanFooter />
    </div>
  );
}

export default App;
