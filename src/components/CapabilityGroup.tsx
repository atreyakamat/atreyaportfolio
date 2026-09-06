import React from 'react';
import type { CapabilityGroup as ICapabilityGroup } from '../data/portfolioData';

interface CapabilityGroupProps {
  group: ICapabilityGroup;
  index: number;
}

export const CapabilityGroup: React.FC<CapabilityGroupProps> = ({ group, index }) => {
  return (
    <article 
      aria-labelledby={`cap-${index}-title`}
      className="p-unit-lg lg:p-unit-xl flex flex-col justify-between hover:bg-[#F7F5EF]/60 transition-colors"
    >
      <div>
        <span className="font-label-mono text-[11px] text-[#F05A3C] font-semibold uppercase block mb-unit-xs">
          {group.kicker}
        </span>
        <h3 
          id={`cap-${index}-title`}
          className="font-headline-sm text-headline-sm font-bold text-primary mb-unit-xs uppercase"
        >
          {group.title}
        </h3>
        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-unit-lg">
          {group.desc}
        </p>
      </div>
      <ul className="space-y-unit-sm pt-unit-md border-t border-primary/10 font-label-mono text-body-sm text-on-surface">
        {group.items.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#32D6C5] rounded-full shrink-0" aria-hidden="true"></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default CapabilityGroup;
