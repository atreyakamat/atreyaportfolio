import React from 'react';
import { capabilityGroups } from '../data/portfolioData';
import SectionHeader from './SectionHeader';
import CapabilityGroup from './CapabilityGroup';

interface CapabilitiesProps {
  asH1?: boolean;
}

const Capabilities: React.FC<CapabilitiesProps> = ({ asH1 = false }) => {
  return (
    <section 
      id="capabilities" 
      aria-labelledby="capabilities-heading" 
      className="w-full border-b border-primary/15"
    >
      <div className="max-w-max-width mx-auto px-gutter-mobile lg:px-margin-desktop py-unit-2xl lg:py-unit-4xl">
        <SectionHeader
          kicker="03 // CAPABILITIES"
          title="CAPABILITIES ACROSS THE STACK"
          description="Core technical proficiencies across client applications, backend services, and infrastructure."
          id="capabilities-heading"
          asH1={asH1}
        />

        {/* Clean 3-Column Layout */}
        <div className="border border-primary/20 bg-[#ffffff] grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-primary/20">
          {capabilityGroups.map((group, index) => (
            <CapabilityGroup key={group.title} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
