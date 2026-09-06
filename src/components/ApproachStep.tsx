import React from 'react';
import type { ApproachStep as IApproachStep } from '../data/portfolioData';

interface ApproachStepProps {
  step: IApproachStep;
  index: number;
}

export const ApproachStep: React.FC<ApproachStepProps> = ({ step, index }) => {
  return (
    <article 
      aria-labelledby={`step-${step.num}-title`}
      className={`p-unit-lg lg:p-unit-xl ${
        index < 3 ? 'border-b md:border-b-0 md:border-r border-primary/20' : ''
      } flex flex-col justify-between hover:bg-[#F7F5EF]/60 transition-colors`}
    >
      <div>
        <div className="font-label-mono text-label-mono text-[#F05A3C] font-bold mb-unit-md">
          {step.num}
        </div>
        <h3 
          id={`step-${step.num}-title`}
          className="font-headline-sm text-headline-sm font-bold text-primary mb-unit-xs uppercase"
        >
          {step.title}
        </h3>
        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
          {step.desc}
        </p>
      </div>
    </article>
  );
};

export default ApproachStep;
