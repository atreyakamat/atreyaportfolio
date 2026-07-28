import React from 'react';
import { NOW_DATA } from '../../data/personalData';

export const HumanNow: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto font-sans select-none border-t border-black/10">
      
      <div className="max-w-3xl mb-12">
        <span className="text-xs font-mono text-[#0d9488] font-bold tracking-widest block uppercase mb-2">
          NOW // CURRENT FOCUS
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#111113] tracking-tight">
          What I'm doing right now
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
        <div className="bg-white p-6 rounded-xl border border-black/10 shadow-xs space-y-2">
          <span className="text-slate-400 text-[10px] uppercase font-bold block">CURRENTLY WORKING ON</span>
          <p className="text-slate-800 font-sans text-xs leading-relaxed">{NOW_DATA.workingOn}</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-black/10 shadow-xs space-y-2">
          <span className="text-slate-400 text-[10px] uppercase font-bold block">CURRENTLY BUILDING</span>
          <p className="text-slate-800 font-sans text-xs leading-relaxed">{NOW_DATA.building}</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-black/10 shadow-xs space-y-2">
          <span className="text-slate-400 text-[10px] uppercase font-bold block">CURRENTLY EXPLORING</span>
          <p className="text-slate-800 font-sans text-xs leading-relaxed">{NOW_DATA.exploring}</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-black/10 shadow-xs space-y-2">
          <span className="text-slate-400 text-[10px] uppercase font-bold block">CURRENTLY LEARNING</span>
          <p className="text-slate-800 font-sans text-xs leading-relaxed">{NOW_DATA.learning}</p>
        </div>
      </div>

    </section>
  );
};
