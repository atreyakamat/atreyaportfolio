import React, { useState } from 'react';
import { ENGINEERING_PRINCIPLES } from '../../data/portfolioData';
import { DecisionTreeWidget } from './DecisionTreeWidget';
import { Lightbulb, Code2, AlertOctagon, CheckSquare, Layers } from 'lucide-react';
import { soundFx } from '../OsShell/AudioSystem';

export const ThinkingSection: React.FC = () => {
  const [activePrincipleId, setActivePrincipleId] = useState<string>(ENGINEERING_PRINCIPLES[0].id);

  const activePrinciple = ENGINEERING_PRINCIPLES.find((p) => p.id === activePrincipleId) || ENGINEERING_PRINCIPLES[0];

  return (
    <section id="thinking" className="py-24 px-4 max-w-7xl mx-auto border-t border-white/10 relative">
      {/* Section Header */}
      <div className="mb-16">
        <div className="inline-flex items-center space-x-2 bg-[#00ff66]/10 border border-[#00ff66]/30 px-3 py-1 rounded text-xs font-mono text-[#00ff66] mb-4">
          <Lightbulb className="w-3.5 h-3.5" />
          <span>SECTION 01 // HOW ATREYA THINKS</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold font-display text-white tracking-tight mb-4">
          Engineering Philosophy & Decision Making
        </h2>
        <p className="text-slate-400 font-sans max-w-2xl text-base">
          Languages come and go. Thinking is immutable. Here are the core mental models, trade-offs, and frameworks that govern every system I architect.
        </p>
      </div>

      {/* Principles Selector Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        {/* Left Column: Principle Tabs */}
        <div className="lg:col-span-5 space-y-3">
          {ENGINEERING_PRINCIPLES.map((principle, idx) => {
            const isActive = principle.id === activePrincipleId;
            return (
              <button
                key={principle.id}
                onClick={() => {
                  soundFx.playClick();
                  setActivePrincipleId(principle.id);
                }}
                className={`w-full text-left p-4 rounded-lg border font-mono transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#0d0f15] border-[#00ff66] shadow-[0_0_20px_rgba(0,255,102,0.15)] text-white'
                    : 'bg-[#07080b] border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className={isActive ? 'text-[#00ff66] font-bold' : 'text-slate-500'}>
                    0{idx + 1} // PRINCIPLE
                  </span>
                  {isActive && <span className="text-[10px] text-[#00f0ff] uppercase tracking-widest">[ACTIVE]</span>}
                </div>
                <h3 className="font-sans font-bold text-base text-white mb-1">{principle.title}</h3>
                <p className="text-xs text-slate-400 line-clamp-1">{principle.subtitle}</p>
              </button>
            );
          })}
        </div>

        {/* Right Column: Detailed Principle Breakdown */}
        <div className="lg:col-span-7 bg-[#0d0f15] border border-white/15 rounded-lg p-6 font-mono text-xs flex flex-col justify-between shadow-2xl">
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <span className="text-[#00ff66] font-bold text-sm tracking-wider uppercase">
                {activePrinciple.title}
              </span>
              <span className="text-slate-500 text-[11px]">{activePrinciple.subtitle}</span>
            </div>

            <p className="font-sans text-slate-300 text-base leading-relaxed mb-6">
              {activePrinciple.summary}
            </p>

            {/* Anti-Pattern vs Key Invariant */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-[#ff2e54]/10 border border-[#ff2e54]/30 p-3.5 rounded">
                <div className="flex items-center space-x-1.5 text-[#ff2e54] font-bold mb-1">
                  <AlertOctagon className="w-3.5 h-3.5" />
                  <span>ANTI-PATTERN TO AVOID</span>
                </div>
                <p className="font-sans text-xs text-slate-300 leading-snug">{activePrinciple.antiPattern}</p>
              </div>

              <div className="bg-[#00ff66]/10 border border-[#00ff66]/30 p-3.5 rounded">
                <div className="flex items-center space-x-1.5 text-[#00ff66] font-bold mb-1">
                  <CheckSquare className="w-3.5 h-3.5" />
                  <span>CORE INVARIANT</span>
                </div>
                <p className="font-sans text-xs text-slate-300 leading-snug">{activePrinciple.keyRule}</p>
              </div>
            </div>

            {/* Mental Model Badge */}
            <div className="bg-[#131722] p-3 rounded border border-white/10 flex items-center justify-between text-xs">
              <span className="text-slate-400 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#00f0ff]" />
                Mental Model:
              </span>
              <span className="text-[#00f0ff] font-bold">{activePrinciple.mentalModel}</span>
            </div>
          </div>

          {/* Optional Code Illustration */}
          {activePrinciple.codeIllustration && (
            <div className="mt-6 pt-4 border-t border-white/10">
              <div className="flex items-center space-x-2 text-slate-400 mb-3">
                <Code2 className="w-3.5 h-3.5 text-[#00ff66]" />
                <span className="font-bold">SYSTEM COMPARISON CODE ILLUSTRATION</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[10px]">
                <div className="bg-[#050608] p-2.5 rounded border border-[#ff2e54]/30 text-slate-300 font-mono overflow-x-auto">
                  <span className="text-[#ff2e54] font-bold block mb-1">// Anti-Pattern</span>
                  <pre>{activePrinciple.codeIllustration.bad}</pre>
                </div>
                <div className="bg-[#050608] p-2.5 rounded border border-[#00ff66]/30 text-slate-300 font-mono overflow-x-auto">
                  <span className="text-[#00ff66] font-bold block mb-1">// Systems Approach</span>
                  <pre>{activePrinciple.codeIllustration.good}</pre>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Interactive Decision Tree Widget Embed */}
      <div className="mt-12">
        <DecisionTreeWidget />
      </div>
    </section>
  );
};
