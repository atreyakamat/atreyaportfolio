import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ECOSYSTEM_DESTINATIONS, ECOSYSTEM_SECTION } from '../../data/personalData';
import type { EcosystemDestination } from '../../data/personalData';

export const EcosystemSection: React.FC = () => {
  return (
    <section className="py-28 px-6 max-w-7xl mx-auto font-sans select-none border-t border-black/10">
      <div className="max-w-3xl mb-16">
        <span className="text-xs font-mono text-[#0d9488] font-bold tracking-widest block uppercase mb-3">
          {ECOSYSTEM_SECTION.label}
        </span>
        <h2 className="text-4xl sm:text-6xl font-bold font-display text-[#111113] tracking-tight">
          {ECOSYSTEM_SECTION.title}
        </h2>
        <p className="text-slate-600 text-base mt-4 max-w-xl">
          {ECOSYSTEM_SECTION.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-mono text-xs">
        {ECOSYSTEM_DESTINATIONS.map((dest: EcosystemDestination, idx: number) => (
          <a
            key={dest.url ?? idx}
            href={dest.url}
            target="_blank"
            rel="noreferrer"
            className="p-8 bg-white border border-black/10 rounded-2xl shadow-sm hover:shadow-xl hover:border-[#0d9488]/40 transition-all duration-300 flex flex-col justify-between group"
            aria-label={`Visit ${dest.label}`}
          >
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-[#0d9488] font-bold text-xs uppercase tracking-wider">
                  {dest.pillar}
                </span>
                {dest.status ? (
                  <span
                    className={`px-2.5 py-0.5 rounded text-[10px] font-bold ${
                      dest.status === 'Active'
                        ? 'bg-[#0d9488]/10 text-[#0d9488]'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {dest.status}
                  </span>
                ) : null}
              </div>

              <h3 className="text-xl font-bold font-display text-[#111113] mb-2 group-hover:text-[#0d9488] transition-colors flex items-center justify-between gap-3">
                <span>{dest.label}</span>
                <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-all text-[#0d9488]" />
              </h3>
            </div>

            <div className="pt-6 border-t border-black/5 mt-6 text-slate-500 font-mono text-xs group-hover:text-[#111113] transition-colors">
              → {dest.subdomain}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
