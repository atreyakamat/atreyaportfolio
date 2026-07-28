import React, { useState } from 'react';
import { Scale, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';
import { soundFx } from '../OsShell/AudioSystem';

interface TradeoffOption {
  label: string;
  weight: number;
  detail: string;
  gain: string;
  sacrifice: string;
}

interface BalanceScaleProps {
  optionA: TradeoffOption;
  optionB: TradeoffOption;
  invariant: string;
}

export const BalanceScaleWidget: React.FC<BalanceScaleProps> = ({
  optionA,
  optionB,
  invariant
}) => {
  const [selectedSide, setSelectedSide] = useState<'A' | 'B'>('B');

  const tiltAngle = selectedSide === 'A' ? -12 : 12;

  return (
    <div className="bg-[#08080a] border border-white/10 rounded-lg p-6 font-mono text-xs shadow-2xl relative overflow-hidden">
      {/* Widget Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-6">
        <span className="text-[#00f0ff] font-bold tracking-wider flex items-center gap-2">
          <Scale className="w-4 h-4" /> MECHANICAL TRADE-OFF BALANCE SCALE
        </span>
        <span className="text-[10px] text-slate-500">TAP SIDE TO TILT SCALE EQUILIBRIUM</span>
      </div>

      {/* Interactive Graphic Mechanical Scale Visualization */}
      <div className="relative w-full h-40 bg-[#0d0f15] rounded border border-white/5 flex flex-col items-center justify-center mb-6 overflow-hidden">
        {/* Base Pillar */}
        <div className="absolute bottom-2 w-6 h-20 bg-gradient-to-t from-[#121318] to-slate-700 border-x border-white/20" />
        <div className="absolute bottom-2 w-16 h-2 bg-slate-700 rounded" />

        {/* Fulcrum Point */}
        <div className="absolute top-10 w-4 h-4 bg-[#00f0ff] rotate-45 border border-white z-10" />

        {/* Tilting Lever Beam */}
        <div
          className="absolute top-12 w-3/4 h-2 bg-slate-300 rounded transition-transform duration-500 ease-out flex justify-between items-center px-2 z-10"
          style={{ transform: `rotate(${tiltAngle}deg)` }}
        >
          {/* Left Weight Bucket (A) */}
          <div
            onClick={() => {
              soundFx.playClick();
              setSelectedSide('A');
            }}
            className={`-translate-y-1/2 cursor-pointer p-3 rounded border transition-all ${
              selectedSide === 'A'
                ? 'bg-[#ff2e54]/20 border-[#ff2e54] text-white shadow-[0_0_15px_rgba(255,46,84,0.3)]'
                : 'bg-[#121318] border-white/20 text-slate-400 hover:text-white'
            }`}
          >
            <div className="font-bold text-[10px] text-center">{optionA.label}</div>
            <div className="text-[9px] opacity-75 text-center">{optionA.weight}kg Weight</div>
          </div>

          {/* Right Weight Bucket (B) */}
          <div
            onClick={() => {
              soundFx.playClick();
              setSelectedSide('B');
            }}
            className={`-translate-y-1/2 cursor-pointer p-3 rounded border transition-all ${
              selectedSide === 'B'
                ? 'bg-[#00f0ff]/20 border-[#00f0ff] text-white shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                : 'bg-[#121318] border-white/20 text-slate-400 hover:text-white'
            }`}
          >
            <div className="font-bold text-[10px] text-center">{optionB.label}</div>
            <div className="text-[9px] opacity-75 text-center">{optionB.weight}kg Weight</div>
          </div>
        </div>
      </div>

      {/* Inspection Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div
          onClick={() => {
            soundFx.playClick();
            setSelectedSide('A');
          }}
          className={`p-3.5 rounded border transition-all cursor-pointer ${
            selectedSide === 'A'
              ? 'bg-[#121318] border-[#ff2e54]'
              : 'bg-[#08080a] border-white/10 opacity-70 hover:opacity-100'
          }`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="font-bold text-white font-sans">{optionA.label}</span>
            <span className="text-[9px] text-[#ff2e54] font-bold">REJECTED / LOW SCORE</span>
          </div>
          <p className="text-slate-400 font-sans text-xs mb-2">{optionA.detail}</p>
          <div className="text-[10px] text-[#ff2e54] flex items-center gap-1">
            <AlertTriangle className="w-3 h-3" /> Sacrifice: High user friction & complexity
          </div>
        </div>

        <div
          onClick={() => {
            soundFx.playClick();
            setSelectedSide('B');
          }}
          className={`p-3.5 rounded border transition-all cursor-pointer ${
            selectedSide === 'B'
              ? 'bg-[#121318] border-[#00f0ff]'
              : 'bg-[#08080a] border-white/10 opacity-70 hover:opacity-100'
          }`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="font-bold text-white font-sans">{optionB.label}</span>
            <span className="text-[9px] text-[#00f0ff] font-bold">ATREYA'S INVARIANT CHOICE</span>
          </div>
          <p className="text-slate-400 font-sans text-xs mb-2">{optionB.detail}</p>
          <div className="text-[10px] text-[#00f0ff] flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> Gain: 99.4% Proxy Fraud Block & Sub-10ms UX
          </div>
        </div>
      </div>

      {/* Invariant Rule Box */}
      <div className="bg-[#0d0f15] border-l-2 border-[#00f0ff] p-3 rounded-r text-xs flex items-center justify-between">
        <span className="text-slate-300 font-sans">
          <strong className="text-[#00f0ff] font-mono uppercase mr-2">Invariant Rule:</strong>
          {invariant}
        </span>
        <ArrowRight className="w-4 h-4 text-[#00f0ff] shrink-0 hidden sm:block" />
      </div>
    </div>
  );
};
