import React from 'react';
import { SELECTED_WORKS } from '../../data/personalData';
import type { ProjectItem } from '../../data/personalData';
import { ArrowUpRight } from 'lucide-react';

export const SelectedWorkGrid: React.FC = () => {
  return (
    <section id="work" className="py-28 px-6 max-w-7xl mx-auto font-sans select-none">
      
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <span className="text-xs font-mono text-[#0d9488] font-bold tracking-widest block uppercase mb-3">
          SELECTED WORK // PROOF OF CRAFT
        </span>
        <h2 className="text-4xl sm:text-6xl font-bold font-display text-[#111113] tracking-tight">
          Software, Products & Digital Artefacts
        </h2>
        <p className="text-slate-600 text-base mt-4 max-w-xl">
          A curated selection spanning software architecture, physical merchandise packaging, real-time audio systems, and community initiatives.
        </p>
      </div>

      {/* Editorial Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SELECTED_WORKS.map((project: ProjectItem) => (
          <div
            key={project.id}
            className="group bg-white border border-black/10 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-[#0d9488]/40 transition-all duration-300 flex flex-col justify-between cursor-pointer"
          >
            <div>
              {/* Category & Year */}
              <div className="flex justify-between items-center text-xs font-mono text-slate-500 mb-6">
                <span className="text-[#0d9488] font-bold uppercase tracking-wider">{project.category}</span>
                <span>{project.year}</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold font-display text-[#111113] tracking-tight mb-3 group-hover:text-[#0d9488] transition-colors flex items-center justify-between">
                <span>{project.name}</span>
                <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </h3>

              {/* Outcome */}
              {project.outcome && (
                <p className="text-xs font-mono text-slate-600 bg-[#fafaf8] p-3 rounded-xl border border-black/5 leading-relaxed mt-4">
                  {project.outcome}
                </p>
              )}
            </div>

            <div className="pt-6 border-t border-black/5 mt-8 flex justify-between items-center text-[11px] font-mono text-slate-400">
              <span>ATREYA KAMAT</span>
              <span className="group-hover:text-[#0d9488] transition-colors">VIEW WORK →</span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
