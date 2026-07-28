import React, { useState } from 'react';
import { ChevronRight, Radio, Sliders } from 'lucide-react';
import { soundFx } from '../OsShell/AudioSystem';

interface Room00Props {
  onNavigate: (roomId: string) => void;
}

export const Room00_Entrance: React.FC<Room00Props> = ({ onNavigate }) => {
  const [dialFreq, setDialFreq] = useState<number>(440);

  const handleDialChange = (newFreq: number) => {
    setDialFreq(newFreq);
    soundFx.playBeep(newFreq, 'sine', 0.04, 0.03);
  };

  return (
    <section id="room-00" className="min-h-screen pt-28 pb-16 flex flex-col justify-between px-4 max-w-7xl mx-auto border-b border-white/10 relative">
      {/* Top CAD Room Marker */}
      <div className="flex items-center justify-between text-xs font-mono text-slate-500 pb-4 border-b border-white/10">
        <div className="flex items-center space-x-2 text-[#00f0ff]">
          <Radio className="w-4 h-4 animate-cyan-pulse" />
          <span className="font-bold tracking-widest uppercase">EXHIBITION ROOM 00 // ENTRANCE MANIFESTO</span>
        </div>
        <div>COORDINATES: 15.5901° N, 73.8105° E</div>
      </div>

      {/* Hero Visual Statement: Strict 16 Words! */}
      <div className="my-auto py-12">
        <div className="text-xs font-mono text-[#00f0ff] uppercase tracking-widest mb-4">
          STATEMENT // THINKING BEFORE SYNTAX
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold font-display text-white leading-[1.02] tracking-tight max-w-6xl mb-8">
          I build products that create real-world impact.
        </h1>

        {/* Interactive System Calibration Dial */}
        <div className="bg-[#0a0c10] border border-white/15 rounded-lg p-6 max-w-xl font-mono text-xs shadow-2xl mb-8">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
            <span className="text-[#00f0ff] font-bold flex items-center gap-2">
              <Sliders className="w-4 h-4" /> HARDWARE CALIBRATION DIAL
            </span>
            <span className="text-[#00f0ff]">{dialFreq} Hz</span>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between text-slate-400 text-[11px]">
              <span>Frequency Modulation:</span>
              <span>220Hz - 880Hz</span>
            </div>
            <input
              type="range"
              min="220"
              max="880"
              step="20"
              value={dialFreq}
              onChange={(e) => handleDialChange(Number(e.target.value))}
              className="w-full accent-[#00f0ff] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 pt-1">
              <span>SYSTEM CHASSIS OK</span>
              <span>TACTile FEEDBACK ACTIVE</span>
            </div>
          </div>
        </div>

        {/* Enter Exhibition Button */}
        <button
          onClick={() => {
            soundFx.playClick();
            onNavigate('room-01');
          }}
          className="px-6 py-3.5 bg-[#00f0ff] text-[#08080a] font-mono font-bold text-xs uppercase tracking-wider rounded hover:bg-[#00f0ff]/90 transition-all flex items-center space-x-2 cursor-pointer shadow-[0_0_20px_rgba(0,240,255,0.3)]"
        >
          <span>Enter Spatial Exhibition</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Footer Nav Hint */}
      <div className="pt-4 border-t border-white/10 flex justify-between text-xs font-mono text-slate-500">
        <span>PRESS ⌘K FOR TELEPORTATION</span>
        <span>SCROLL TO ENTER ROOM 01</span>
      </div>
    </section>
  );
};
