import React from 'react';
import type { ExperienceEntry as IExperienceEntry } from '../data/portfolioData';

interface ExperienceEntryProps {
  exp: IExperienceEntry;
}

export const ExperienceEntry: React.FC<ExperienceEntryProps> = ({ exp }) => {
  return (
    <article 
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
  );
};

export default ExperienceEntry;
