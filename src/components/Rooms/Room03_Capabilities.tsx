import React from 'react';
import { CAPABILITIES_EXHIBITION } from '../../data/exhibitionData';
import { Layers, ArrowUpRight, Cpu } from 'lucide-react';

export const Room03_Capabilities: React.FC = () => {
  return (
    <section id="room-03" className="py-24 px-4 max-w-7xl mx-auto border-b border-white/10 relative">
      {/* Room Marker */}
      <div className="flex items-center justify-between text-xs font-mono text-slate-500 pb-4 border-b border-white/10 mb-8">
        <div className="flex items-center space-x-2 text-[#00f0ff]">
          <Layers className="w-4 h-4" />
          <span className="font-bold tracking-widest uppercase">EXHIBITION ROOM 03 // SPATIAL CAPABILITIES</span>
        </div>
        <div>OUTCOMES OVER KEYWORDS</div>
      </div>

      <h2 className="text-4xl md:text-6xl font-bold font-display text-white tracking-tight mb-8">
        Capabilities Architecture
      </h2>

      {/* Spatial Matrix Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-mono text-xs">
        {CAPABILITIES_EXHIBITION.map((cap, idx) => (
          <div
            key={idx}
            className="bg-[#0a0c10] border border-white/15 rounded-lg p-6 flex flex-col justify-between shadow-xl hover:border-[#00f0ff]/50 transition-all group"
          >
            <div>
              <div className="flex items-center justify-between text-slate-500 text-[10px] mb-3">
                <span>0{idx + 1} // DOMAIN</span>
                <span className="text-[#00f0ff] font-bold">{cap.metric}</span>
              </div>

              <h3 className="text-xl font-sans font-bold text-white mb-4 group-hover:text-[#00f0ff] transition-colors flex items-center justify-between">
                <span>{cap.domain}</span>
                <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-[#00f0ff] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </h3>
            </div>

            <div className="pt-4 border-t border-white/10">
              <span className="text-slate-500 text-[10px] block mb-1 flex items-center gap-1">
                <Cpu className="w-3 h-3 text-[#00f0ff]" /> Implementation Evidence:
              </span>
              <span className="text-slate-200 font-mono text-xs">{cap.tech}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
