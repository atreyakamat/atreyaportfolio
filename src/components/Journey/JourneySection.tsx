import React from 'react';
import { JOURNEY_MILESTONES } from '../../data/portfolioData';
import { Compass, Lightbulb, CheckCircle2 } from 'lucide-react';

export const JourneySection: React.FC = () => {
  return (
    <section id="journey" className="py-24 px-4 max-w-7xl mx-auto border-t border-white/10 relative">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center space-x-2 bg-[#00f0ff]/10 border border-[#00f0ff]/30 px-3 py-1 rounded text-xs font-mono text-[#00f0ff] mb-4">
          <Compass className="w-3.5 h-3.5" />
          <span>SECTION 05 // INTELLECTUAL EVOLUTION TIMELINE</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold font-display text-white tracking-tight mb-4">
          Journey of Mindset Shifts
        </h2>
        <p className="text-slate-400 font-sans max-w-2xl text-base">
          This is not a traditional job history resume. This is how key engineering milestones continuously reshaped how I think, architect systems, and lead product strategy.
        </p>
      </div>

      {/* Timeline List */}
      <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 sm:before:left-1/2 before:w-[1px] before:bg-white/10">
        {JOURNEY_MILESTONES.map((ms, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={ms.id}
              className={`relative flex flex-col sm:flex-row items-start ${
                isEven ? 'sm:flex-row-reverse' : ''
              } gap-6`}
            >
              {/* Timeline Center Node */}
              <div className="absolute left-3 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#050608] border-2 border-[#00f0ff] z-10 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
              </div>

              {/* Milestone Card */}
              <div className="w-full sm:w-[calc(50%-2rem)] pl-10 sm:pl-0 bg-[#0a0c10] border border-white/15 rounded-lg p-6 font-mono text-xs shadow-xl hover:border-[#00f0ff]/50 transition-all">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3 text-xs">
                  <span className="text-[#00f0ff] font-bold">{ms.year}</span>
                  <span className="text-slate-500">{ms.organization}</span>
                </div>

                <h3 className="text-lg font-sans font-bold text-white mb-3">{ms.title}</h3>

                {/* Mindset Shift Highlight Box */}
                <div className="bg-[#050608] border-l-2 border-[#00f0ff] p-3 rounded-r mb-4 text-xs">
                  <div className="text-[#00f0ff] font-bold text-[10px] uppercase flex items-center gap-1.5 mb-1">
                    <Lightbulb className="w-3.5 h-3.5" /> INTELLECTUAL MINDSET SHIFT:
                  </div>
                  <p className="font-sans text-slate-200 text-xs leading-snug">{ms.mindsetShift}</p>
                </div>

                <p className="font-sans text-slate-300 text-xs leading-relaxed mb-4">{ms.description}</p>

                <div className="pt-3 border-t border-white/10 text-[10px] text-slate-400 flex items-start gap-1 font-sans">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00f0ff] shrink-0 mt-0.5" />
                  <span>Key Takeaway: {ms.keyTakeaway}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
