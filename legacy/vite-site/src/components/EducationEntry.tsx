import React from 'react';
import type { EducationEntry as IEducationEntry } from '../data/portfolioData';

interface EducationEntryProps {
  edu: IEducationEntry;
}

export const EducationEntry: React.FC<EducationEntryProps> = ({ edu }) => {
  return (
    <div className="border-l-2 border-primary/20 pl-unit-md hover:border-primary transition-colors">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
        <h4 className="font-headline-sm text-[1.05rem] font-bold text-primary">
          {edu.degree}
        </h4>
        <span className="font-label-mono text-[11px] text-on-surface-variant">
          {edu.period}
        </span>
      </div>
      {edu.specialization && (
        <span className="font-label-mono text-[11px] text-[#006a61] uppercase tracking-wider block mt-0.5">
          {edu.specialization}
        </span>
      )}
      <p className="font-body-sm text-[13px] text-on-surface-variant mt-1">
        {edu.institution}
      </p>
    </div>
  );
};

export default EducationEntry;
