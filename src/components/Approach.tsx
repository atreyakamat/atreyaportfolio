import React from 'react';
import { approachSteps } from '../data/portfolioData';

const Approach: React.FC = () => {
  return (
    <section 
      id="methodology" 
      aria-labelledby="approach-heading" 
      className="w-full border-b border-primary/15"
    >
      <div className="max-w-max-width mx-auto px-gutter-mobile lg:px-margin-desktop py-unit-2xl lg:py-unit-3xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-primary/15 pb-unit-md mb-unit-xl gap-unit-sm">
          <div>
            <span className="font-label-mono text-label-mono text-[#F05A3C] font-semibold uppercase tracking-widest">
              01 // APPROACH
            </span>
            <h2 
              id="approach-heading"
              className="font-headline-md text-headline-md text-primary font-bold uppercase tracking-tight mt-1"
            >
              HOW I APPROACH PROBLEMS
            </h2>
          </div>
          <div className="font-label-mono text-label-mono text-on-surface-variant max-w-md">
            A practical engineering sequence to turn problems into dependable software.
          </div>
        </div>

        {/* 4 Clean, Airy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-primary/20 bg-[#ffffff] divide-y md:divide-y-0 md:divide-x divide-primary/20">
          {approachSteps.map((step) => (
            <article 
              key={step.num} 
              className="p-unit-lg flex flex-col justify-between min-h-[190px]"
            >
              <div>
                <div className="font-label-mono text-headline-sm text-primary font-bold mb-unit-sm" aria-hidden="true">
                  {step.num}
                </div>
                <h3 className="font-headline-sm text-[1.15rem] text-primary font-semibold mb-unit-xs">
                  {step.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
