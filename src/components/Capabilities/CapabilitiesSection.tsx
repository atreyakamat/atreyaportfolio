import React, { useState } from 'react';
import { CAPABILITIES_LIST } from '../../data/portfolioData';
import { Layers, CheckCircle2, Cpu, ArrowUpRight } from 'lucide-react';
import { soundFx } from '../OsShell/AudioSystem';

export const CapabilitiesSection: React.FC = () => {
  const [selectedCapId, setSelectedCapId] = useState<string>(CAPABILITIES_LIST[0].id);

  const selectedCap = CAPABILITIES_LIST.find((c) => c.id === selectedCapId) || CAPABILITIES_LIST[0];

  return (
    <section id="capabilities" className="py-24 px-4 max-w-7xl mx-auto border-t border-white/10 relative">
      {/* Section Header */}
      <div className="mb-12">
        <div className="inline-flex items-center space-x-2 bg-[#00f0ff]/10 border border-[#00f0ff]/30 px-3 py-1 rounded text-xs font-mono text-[#00f0ff] mb-4">
          <Layers className="w-3.5 h-3.5" />
          <span>SECTION 02 // CAPABILITIES & OUTCOMES</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold font-display text-white tracking-tight mb-4">
          Capabilities Over Keywords
        </h2>
        <p className="text-slate-400 font-sans max-w-2xl text-base">
          Do not waste visual space listing dozens of programming languages. Instead, demonstrate engineering decisions, product thinking, and system outcomes.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Domain Selector List */}
        <div className="lg:col-span-6 space-y-3 font-mono text-xs">
          {CAPABILITIES_LIST.map((cap, idx) => {
            const isSelected = cap.id === selectedCapId;
            return (
              <div
                key={cap.id}
                onClick={() => {
                  soundFx.playClick();
                  setSelectedCapId(cap.id);
                }}
                className={`p-4 rounded-lg border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#0a0c10] border-[#00f0ff] text-white shadow-[0_0_15px_rgba(0,240,255,0.15)]'
                    : 'bg-[#050608] border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={isSelected ? 'text-[#00f0ff] font-bold' : 'text-slate-500'}>
                    0{idx + 1} // DOMAIN
                  </span>
                  <span className="text-[10px] text-slate-400">{cap.metrics}</span>
                </div>
                <h3 className="font-sans font-bold text-lg text-white mb-1 flex items-center justify-between">
                  <span>{cap.domain}</span>
                  <ArrowUpRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-[#00f0ff] translate-x-0.5 -translate-y-0.5' : 'text-slate-600'}`} />
                </h3>
                <p className="font-sans text-xs text-slate-400 line-clamp-1">{cap.outcome}</p>
              </div>
            );
          })}
        </div>

        {/* Right: Capability Outcome & Tech Evidence Inspector */}
        <div className="lg:col-span-6 bg-[#0a0c10] border border-white/15 rounded-lg p-6 font-mono text-xs shadow-2xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 text-[#00f0ff]">
              <span className="font-bold tracking-wider uppercase">OUTCOME INSPECTOR</span>
              <span className="text-[10px] bg-[#00f0ff]/10 px-2 py-0.5 rounded font-bold">VERIFIED EVIDENCE</span>
            </div>

            <h3 className="text-2xl font-sans font-bold text-white mb-2">{selectedCap.domain}</h3>
            
            <div className="bg-[#050608] p-4 rounded border border-white/10 mb-6">
              <span className="text-[#00f0ff] font-bold block mb-1">PRIMARY SYSTEM OUTCOME:</span>
              <p className="font-sans text-slate-200 text-sm leading-relaxed">{selectedCap.outcome}</p>
            </div>

            <p className="font-sans text-slate-300 text-xs leading-relaxed mb-6">
              {selectedCap.description}
            </p>

            <div className="border-t border-white/10 pt-4 mb-4">
              <span className="text-slate-400 block mb-3 font-bold text-[10px] flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-[#00f0ff]" /> SUPPORTING EVIDENCE & IMPLEMENTATION STACK:
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedCap.evidence.map((tech, i) => (
                  <span key={i} className="bg-white/5 border border-white/10 px-3 py-1 rounded text-slate-200 text-xs font-mono flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-[#00f0ff]" /> {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-white/10 text-[10px] text-slate-500 flex justify-between">
            <span>METRIC: {selectedCap.metrics}</span>
            <span>SYSTEM INVARIANT VERIFIED</span>
          </div>
        </div>
      </div>
    </section>
  );
};
