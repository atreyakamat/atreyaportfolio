import React, { useState } from 'react';
import { FIVE_PILLARS } from '../../data/personalData';
import type { PillarItem } from '../../data/personalData';
import { ArrowUpRight } from 'lucide-react';

export const ThingsIDoPillars: React.FC = () => {
  const [activePillarId, setActivePillarId] = useState<string>('build');

  return (
    <section id="pillars" className="py-28 px-6 max-w-7xl mx-auto font-sans select-none">
      
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <span className="text-xs font-mono text-[#0d9488] font-bold tracking-widest block uppercase mb-3">
          THINGS I DO // POSITIONING
        </span>
        <h2 className="text-4xl sm:text-6xl font-bold font-display text-[#111113] tracking-tight">
          Five Worlds, One Ecosystem
        </h2>
        <p className="text-slate-600 text-base mt-4 max-w-xl">
          Atreya does not fit into a single label. Hover over any domain to inspect examples from that world.
        </p>
      </div>

      {/* Editorial List (Not SaaS Cards) */}
      <div className="space-y-4">
        {FIVE_PILLARS.map((pillar: PillarItem) => {
          const isActive = activePillarId === pillar.id;
          return (
            <div
              key={pillar.id}
              onMouseEnter={() => setActivePillarId(pillar.id)}
              className={`p-6 sm:p-10 rounded-2xl transition-all duration-300 cursor-pointer border ${
                isActive
                  ? 'bg-white border-[#0d9488]/30 shadow-xl'
                  : 'bg-[#fafaf8] border-black/5 hover:border-black/15'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                
                {/* Number & Title */}
                <div className="flex items-baseline space-x-6">
                  <span className="font-mono text-sm sm:text-base text-[#0d9488] font-bold">
                    {pillar.number}
                  </span>
                  <div>
                    <h3 className="text-3xl sm:text-5xl font-bold font-display text-[#111113] tracking-tight flex items-center gap-3">
                      <span>{pillar.title}</span>
                      <ArrowUpRight className={`w-6 h-6 text-[#0d9488] transition-transform ${isActive ? 'translate-x-1 -translate-y-1' : 'opacity-30'}`} />
                    </h3>
                    <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mt-1">
                      {pillar.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description & Interactive Example Tags */}
                <div className="max-w-md font-sans space-y-3">
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Examples Tags */}
                  <div className="flex flex-wrap gap-2 pt-1 font-mono text-[11px]">
                    {pillar.examples.map((ex, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 rounded-full transition-colors ${
                          isActive
                            ? 'bg-[#0d9488]/10 text-[#0d9488] font-bold border border-[#0d9488]/20'
                            : 'bg-black/5 text-slate-600'
                        }`}
                      >
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};
