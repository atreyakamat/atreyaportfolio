import React from 'react';
import { experienceEntries } from '../data/portfolioData';

const Experience: React.FC = () => {
  return (
    <section 
      id="experience" 
      aria-labelledby="experience-heading" 
      className="w-full border-b border-primary/15"
    >
      <div className="max-w-max-width mx-auto px-gutter-mobile lg:px-margin-desktop py-unit-2xl lg:py-unit-4xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-primary/15 pb-unit-md mb-unit-xl gap-unit-sm">
          <div>
            <span className="font-label-mono text-label-mono text-[#F05A3C] font-semibold uppercase tracking-widest">
              04 // EXPERIENCE
            </span>
            <h2 
              id="experience-heading"
              className="font-headline-md text-headline-md text-primary font-bold uppercase tracking-tight mt-1"
            >
              ENGINEERING EXPERIENCE
            </h2>
          </div>
          <div className="font-label-mono text-label-mono text-on-surface-variant max-w-md">
            Chronological background across platform reliability, development, and ML.
          </div>
        </div>

        {/* Clean Scannable Experience Ledger */}
        <div className="border border-primary/20 bg-[#ffffff] divide-y divide-primary/15">
          {experienceEntries.map((exp) => (
            <article 
              key={exp.company + exp.period}
              className="p-unit-lg lg:p-unit-xl grid grid-cols-1 lg:grid-cols-12 gap-unit-md hover:bg-[#F7F5EF]/60 transition-colors"
            >
              <div className="lg:col-span-4">
                <span className="font-label-mono text-[11px] text-on-surface-variant uppercase block">
                  {exp.period}
                </span>
                <h3 className="font-headline-sm text-headline-sm font-bold text-primary mt-0.5">
                  {exp.company}
                </h3>
                <div className={`font-label-mono text-[11px] uppercase mt-1 ${
                  exp.isAccentRole ? 'text-[#006a61] font-semibold' : 'text-on-surface-variant'
                }`}>
                  {exp.role}
                </div>
              </div>
              <div className="lg:col-span-8 flex items-center">
                <p className="font-body-sm text-body-sm text-on-surface leading-relaxed">
                  {exp.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
