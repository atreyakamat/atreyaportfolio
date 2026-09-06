import React from 'react';
import { capabilityGroups } from '../data/portfolioData';

const Capabilities: React.FC = () => {
  return (
    <section 
      id="capabilities" 
      aria-labelledby="capabilities-heading" 
      className="w-full border-b border-primary/15"
    >
      <div className="max-w-max-width mx-auto px-gutter-mobile lg:px-margin-desktop py-unit-2xl lg:py-unit-4xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-primary/15 pb-unit-md mb-unit-2xl gap-unit-sm">
          <div>
            <span className="font-label-mono text-label-mono text-[#F05A3C] font-semibold uppercase tracking-widest">
              03 // CAPABILITIES
            </span>
            <h2 
              id="capabilities-heading"
              className="font-headline-md text-headline-md text-primary font-bold uppercase tracking-tight mt-1"
            >
              CAPABILITIES ACROSS THE STACK
            </h2>
          </div>
          <div className="font-label-mono text-label-mono text-on-surface-variant max-w-sm">
            Core technical proficiencies across client applications, backend services, and infrastructure.
          </div>
        </div>

        {/* Clean 3-Column Layout */}
        <div className="border border-primary/20 bg-[#ffffff] grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-primary/20">
          {capabilityGroups.map((col) => (
            <article 
              key={col.title} 
              className="p-unit-lg lg:p-unit-xl flex flex-col justify-between"
            >
              <div>
                <span className="font-label-mono text-[11px] text-on-surface-variant uppercase block mb-1">
                  {col.kicker}
                </span>
                <h3 className="font-headline-sm text-headline-sm font-bold text-primary mb-unit-sm">
                  {col.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-unit-lg">
                  {col.desc}
                </p>
                <ul className="space-y-unit-sm font-body-md text-primary">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" aria-hidden="true"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
