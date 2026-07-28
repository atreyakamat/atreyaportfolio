import React, { useState } from 'react';
import { Scale, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { soundFx } from '../OsShell/AudioSystem';

export const VisualPrinciples: React.FC = () => {
  const [selectedSide, setSelectedSide] = useState<'A' | 'B'>('B');
  const [showDepth, setShowDepth] = useState<boolean>(false);

  const tiltAngle = selectedSide === 'A' ? -10 : 10;

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto font-sans">
      <div className="text-xs font-mono text-[#00c2ff] uppercase tracking-widest mb-3">
        DESIGN PHILOSOPHY
      </div>

      <h2 className="text-4xl md:text-6xl font-bold font-display text-[#1a1a1e] tracking-tight mb-8">
        Thinking Before Technology
      </h2>

      {/* Interactive Balance Scale */}
      <div className="bg-[#ffffff] border border-black/10 rounded-xl p-8 shadow-xl font-mono text-xs mb-6">
        <div className="flex items-center justify-between border-b border-black/10 pb-4 mb-8">
          <span className="text-[#1a1a1e] font-bold tracking-wider flex items-center gap-2 font-sans text-sm">
            <Scale className="w-4 h-4 text-[#ff5a36]" /> Mechanical Trade-Off Balance Scale
          </span>
          <span className="text-[10px] text-slate-500">TAP SIDE TO TILT EQUILIBRIUM</span>
        </div>

        {/* Visual Tilting Scale */}
        <div className="relative w-full h-44 bg-[#f0eeeb] rounded-lg border border-black/5 flex flex-col items-center justify-center mb-8 overflow-hidden">
          <div className="absolute bottom-2 w-6 h-20 bg-slate-300 border-x border-black/10" />
          <div className="absolute bottom-2 w-20 h-2 bg-slate-400 rounded" />
          <div className="absolute top-10 w-4 h-4 bg-[#ff5a36] rotate-45 z-10" />

          {/* Tilting Lever */}
          <div
            className="absolute top-12 w-3/4 h-2 bg-[#1a1a1e] rounded transition-transform duration-500 ease-out flex justify-between items-center px-2 z-10"
            style={{ transform: `rotate(${tiltAngle}deg)` }}
          >
            {/* Left Weight */}
            <div
              onClick={() => {
                soundFx.playClick();
                setSelectedSide('A');
              }}
              className={`-translate-y-1/2 cursor-pointer p-3 rounded-lg border transition-all ${
                selectedSide === 'A'
                  ? 'bg-[#ff5a36] text-white border-[#ff5a36] shadow-lg'
                  : 'bg-[#ffffff] border-black/10 text-slate-600 hover:text-[#1a1a1e]'
              }`}
            >
              <div className="font-bold text-xs text-center font-sans">UN-BUFFERED SYNTAX</div>
              <div className="text-[10px] opacity-80 text-center">Quick Hack</div>
            </div>

            {/* Right Weight */}
            <div
              onClick={() => {
                soundFx.playClick();
                setSelectedSide('B');
              }}
              className={`-translate-y-1/2 cursor-pointer p-3 rounded-lg border transition-all ${
                selectedSide === 'B'
                  ? 'bg-[#1a1a1e] text-white border-[#1a1a1e] shadow-lg'
                  : 'bg-[#ffffff] border-black/10 text-slate-600 hover:text-[#1a1a1e]'
              }`}
            >
              <div className="font-bold text-xs text-center font-sans">SYSTEM TOPOLOGY</div>
              <div className="text-[10px] opacity-80 text-center">Invariants & Boundaries</div>
            </div>
          </div>
        </div>

        {/* Selected Outcome Note */}
        <div className="bg-[#f0eeeb] p-4 rounded-lg border border-black/5 flex items-center justify-between text-xs font-sans">
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-[#ff5a36]" />
            <span className="text-[#1a1a1e] font-bold">
              {selectedSide === 'B' ? 'Atreya\'s Invariant: Enforce physical network boundaries over client-reported state.' : 'Sacrifice: Cascading failures under surge load.'}
            </span>
          </div>
        </div>
      </div>

      {/* Progressive Disclosure Toggle */}
      <button
        onClick={() => {
          soundFx.playClick();
          setShowDepth(!showDepth);
        }}
        className="text-xs font-mono text-slate-500 hover:text-[#1a1a1e] transition-colors flex items-center gap-1 cursor-pointer"
      >
        <span>{showDepth ? 'Hide Deep Design Rationale' : 'Inspect Deep Design Rationale'}</span>
        {showDepth ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
      </button>

      {showDepth && (
        <div className="mt-4 bg-[#ffffff] border border-black/10 p-6 rounded-lg font-mono text-xs text-slate-700 leading-relaxed">
          <span className="text-[#ff5a36] font-bold block mb-1">// RATIONALE DEEP-DIVE:</span>
          Syntax and frameworks change constantly. Designing system invariants, fault isolation, and clear state boundaries ensures products scale reliably regardless of tech stack updates.
        </div>
      )}

    </section>
  );
};
