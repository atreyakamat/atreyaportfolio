import React, { useState } from 'react';
import { Sliders, Scale } from 'lucide-react';

export const PrinciplesWorkbenchNode: React.FC = () => {
  const [activePrinciple] = useState<number>(0);

  const principles = [
    {
      title: 'Systems Over Syntax',
      subtitle: 'Languages change every decade. Mental models scale forever.',
      statement: 'A developer focuses on writing clean syntax. A systems engineer designs topology, data flow, failure modes, backpressure, and state boundaries before typing a single character of code.',
      tradeoffA: { label: 'SYNTAX FLEET', weight: 30, detail: 'Ad-hoc controllers & un-buffered calls' },
      tradeoffB: { label: 'SYSTEM TOPOLOGY', weight: 80, detail: 'Idempotent events & outbox buffer' },
      keyRule: 'Never write a feature until you have drawn its failure fallback.'
    }
  ];

  const current = principles[activePrinciple];

  return (
    <div id="node-principles" className="w-full py-12 px-4 max-w-6xl mx-auto">
      <div className="bg-[#ffffff] border border-black/10 rounded-xl p-8 sm:p-10 shadow-xl relative overflow-hidden font-sans">
        <div className="flex items-center justify-between border-b border-black/10 pb-4 mb-6 font-mono text-xs text-slate-500">
          <div className="flex items-center space-x-2 text-[#00c2ff]">
            <Sliders className="w-4 h-4" />
            <span className="font-bold tracking-tight text-[#1a1a1e]">FRAME 02 // PRINCIPLES WORKBENCH</span>
          </div>
        </div>

        <div className="bg-[#f0eeeb] p-6 rounded-lg border border-black/5 mb-6">
          <div className="text-xs font-mono text-[#00c2ff] font-bold uppercase mb-1">{current.subtitle}</div>
          <p className="text-base text-[#1a1a1e] font-medium leading-relaxed mb-4">{current.statement}</p>
        </div>

        <div className="bg-[#ffffff] border border-black/10 p-6 rounded-lg font-mono text-xs">
          <div className="flex items-center justify-between border-b border-black/10 pb-3 mb-4">
            <span className="font-bold text-[#1a1a1e] flex items-center gap-2">
              <Scale className="w-4 h-4 text-[#00c2ff]" /> BALANCE SCALE EQUILIBRIUM
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
