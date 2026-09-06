import React from 'react';
import { approachSteps } from '../data/portfolioData';
import SectionHeader from './SectionHeader';
import ApproachStep from './ApproachStep';

const Approach: React.FC = () => {
  return (
    <section 
      id="methodology" 
      aria-labelledby="approach-heading" 
      className="w-full border-b border-primary/15"
    >
      <div className="max-w-max-width mx-auto px-gutter-mobile lg:px-margin-desktop py-unit-2xl lg:py-unit-3xl">
        <SectionHeader
          kicker="01 // APPROACH"
          title="HOW I APPROACH PROBLEMS"
          description="A practical engineering sequence to turn problems into dependable software."
          id="approach-heading"
        />

        {/* 4 Clean, Airy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-primary/20 bg-[#ffffff] divide-y md:divide-y-0 md:divide-x divide-primary/20">
          {approachSteps.map((step, index) => (
            <ApproachStep key={step.num} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
