import { ProductHeader } from './components/Navigation/ProductHeader';
import { HeroProductObject } from './components/Hero/HeroProductObject';
import { QuietMomentOne } from './components/Manifesto/QuietMomentOne';
import { VisualPrinciples } from './components/Manifesto/VisualPrinciples';
import { StixNVibesWorld } from './components/ProductShowcase/StixNVibesWorld';
import { AttenDanceWorld } from './components/ProductShowcase/AttenDanceWorld';
import { PulseWatchWorld } from './components/ProductShowcase/PulseWatchWorld';
import { EchoBridgeWorld } from './components/ProductShowcase/EchoBridgeWorld';
import { VistaraBiWorld } from './components/ProductShowcase/VistaraBiWorld';
import { EditorialArchiveTable } from './components/Archive/EditorialArchiveTable';
import { QuietMomentTwo } from './components/Quiet/QuietMomentTwo';
import { HumanContact } from './components/Contact/HumanContact';
import { FooterSection } from './components/Footer/FooterSection';

export function App() {
  return (
    <div className="min-h-screen bg-[#f9f8f6] text-[#1a1a1e] relative selection:bg-[#1a1a1e] selection:text-[#ffffff] figma-dot-grid">
      {/* Top Header */}
      <ProductHeader />

      {/* Main Flow */}
      <main className="relative z-10 space-y-12">
        <HeroProductObject />
        <QuietMomentOne />
        <VisualPrinciples />
        
        {/* Radically Unique Product Worlds */}
        <StixNVibesWorld />
        <AttenDanceWorld />
        <PulseWatchWorld />
        <EchoBridgeWorld />
        <VistaraBiWorld />

        {/* Editorial Table Archive & Quiet Moments */}
        <EditorialArchiveTable />
        <QuietMomentTwo />
        <HumanContact />
      </main>

      <FooterSection />
    </div>
  );
}

export default App;
