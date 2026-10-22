import React from 'react';
import { experienceEntries } from '../data/portfolioData';
import SectionHeader from './SectionHeader';
import ExperienceEntry from './ExperienceEntry';

interface ExperienceProps {
  asH1?: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ asH1 = false }) => {
  return (
    <section 
      id="experience" 
      aria-labelledby="experience-heading" 
      className="w-full border-b border-primary/15"
    >
      <div className="max-w-max-width mx-auto px-gutter-mobile lg:px-margin-desktop py-unit-2xl lg:py-unit-4xl">
        <SectionHeader
          kicker="04 // EXPERIENCE"
          title="ENGINEERING EXPERIENCE"
          description="Chronological background across platform reliability, development, and ML."
          id="experience-heading"
          asH1={asH1}
        />

        {/* Clean Scannable Experience Ledger */}
        <div className="border border-primary/20 bg-[#ffffff] divide-y divide-primary/15">
          {experienceEntries.map((exp) => (
            <ExperienceEntry key={exp.company + exp.period} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
