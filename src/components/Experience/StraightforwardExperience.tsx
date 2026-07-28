import React from 'react';
import { EXPERIENCE_DATA } from '../../data/personalData';
import type { ExperienceItem } from '../../data/personalData';

export const StraightforwardExperience: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto font-sans select-none border-t border-black/10">
      
      <div className="max-w-3xl mb-12">
        <span className="text-xs font-mono text-[#0d9488] font-bold tracking-widest block uppercase mb-2">
          EXPERIENCE // RECRUITER & PARTNER SUMMARY
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#111113] tracking-tight">
          Professional Background
        </h2>
      </div>

      {/* Straightforward Table/List */}
      <div className="space-y-6">
        {EXPERIENCE_DATA.map((exp: ExperienceItem, idx: number) => (
          <div
            key={idx}
            className="p-6 bg-white rounded-xl border border-black/10 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4 font-sans"
          >
            <div className="md:w-1/3">
              <h3 className="font-bold text-[#111113] text-lg font-display">{exp.company}</h3>
              <span className="text-xs font-mono text-[#0d9488] font-bold">{exp.role}</span>
            </div>

            <div className="md:w-1/6 font-mono text-xs text-slate-500">
              {exp.period}
            </div>

            <div className="md:w-1/2 text-xs text-slate-700 leading-relaxed font-sans">
              {exp.outcome}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
