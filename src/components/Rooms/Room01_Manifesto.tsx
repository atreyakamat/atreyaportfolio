import React, { useState } from 'react';
import { EXHIBITION_MANIFESTO } from '../../data/exhibitionData';
import { BalanceScaleWidget } from '../Shared/BalanceScaleWidget';
import { VectorBlueprintWidget } from '../Shared/VectorBlueprintWidget';
import { Layers } from 'lucide-react';
import { soundFx } from '../OsShell/AudioSystem';

export const Room01_Manifesto: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  const activePrinciple = EXHIBITION_MANIFESTO[selectedIdx];

  return (
    <section id="room-01" className="py-24 px-4 max-w-7xl mx-auto border-b border-white/10 relative">
      {/* Room Marker */}
      <div className="flex items-center justify-between text-xs font-mono text-slate-500 pb-4 border-b border-white/10 mb-12">
        <div className="flex items-center space-x-2 text-[#00f0ff]">
          <Layers className="w-4 h-4" />
          <span className="font-bold tracking-widest uppercase">EXHIBITION ROOM 01 // VISUAL PRINCIPLES</span>
        </div>
        <div>SHOW, NEVER EXPLAIN</div>
      </div>

      {/* Oversized Headline */}
      <h2 className="text-4xl md:text-6xl font-bold font-display text-white tracking-tight mb-8">
        Principles Represented Visually
      </h2>

      {/* Principle Selector Pills */}
      <div className="flex overflow-x-auto gap-3 pb-4 mb-8 no-scrollbar font-mono text-xs">
        {EXHIBITION_MANIFESTO.map((p, idx) => (
          <button
            key={p.id}
            onClick={() => {
              soundFx.playClick();
              setSelectedIdx(idx);
            }}
            className={`px-4 py-2 rounded border cursor-pointer transition-all ${
              selectedIdx === idx
                ? 'bg-[#00f0ff] text-[#08080a] font-bold shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                : 'bg-[#0a0c10] border-white/10 text-slate-400 hover:text-white'
            }`}
          >
            {p.number}. {p.title}
          </button>
        ))}
      </div>

      {/* Statement Box: Strict <=25 Words! */}
      <div className="bg-[#0a0c10] border border-white/15 rounded-lg p-6 mb-8 font-mono text-xs shadow-xl">
        <div className="text-[#00f0ff] font-bold uppercase mb-2">PRINCIPLE {activePrinciple.number} STATEMENT</div>
        <p className="font-sans text-xl text-white font-bold leading-relaxed mb-4">
          "{activePrinciple.statement}"
        </p>
      </div>

      {/* Visual Metaphor Representation */}
      <div className="space-y-6">
        {activePrinciple.visualMetaphor === 'BALANCE_SCALE' ? (
          <BalanceScaleWidget
            optionA={activePrinciple.tradeoffA}
            optionB={activePrinciple.tradeoffB}
            invariant={activePrinciple.invariant}
          />
        ) : (
          <VectorBlueprintWidget />
        )}
      </div>
    </section>
  );
};
