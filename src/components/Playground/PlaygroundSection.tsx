import React, { useState } from 'react';
import { SubnetValidatorDemo } from './SubnetValidatorDemo';
import { AudioDspVisualizer } from './AudioDspVisualizer';
import { Cpu, Sparkles, Wrench } from 'lucide-react';
import { soundFx } from '../OsShell/AudioSystem';

export const PlaygroundSection: React.FC = () => {
  const [activeTool, setActiveTool] = useState<'SUBNET' | 'AUDIO_DSP'>('SUBNET');

  return (
    <section id="playground" className="py-24 px-4 max-w-7xl mx-auto border-t border-white/10 relative">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center space-x-2 bg-[#a855f7]/10 border border-[#a855f7]/30 px-3 py-1 rounded text-xs font-mono text-[#a855f7] mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>SECTION 06 // INTERACTIVE PLAYGROUND & MICRO-TOOLS</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold font-display text-white tracking-tight mb-4">
          Playground & Creative Engineering Lab
        </h2>
        <p className="text-slate-400 font-sans max-w-2xl text-base">
          Interactive mini-tools and visual simulations inviting hands-on exploration. Test Atreya's custom security algorithms and DSP audio router below.
        </p>
      </div>

      {/* Tool Selector Buttons */}
      <div className="flex gap-3 mb-8 font-mono text-xs">
        <button
          onClick={() => {
            soundFx.playClick();
            setActiveTool('SUBNET');
          }}
          className={`px-4 py-2.5 rounded transition-all cursor-pointer flex items-center space-x-2 ${
            activeTool === 'SUBNET'
              ? 'bg-[#00ff66] text-[#07080b] font-bold shadow-[0_0_15px_rgba(0,255,102,0.3)]'
              : 'bg-[#0d0f15] border border-white/10 text-slate-400 hover:text-white'
          }`}
        >
          <Wrench className="w-3.5 h-3.5" />
          <span>01. CIDR Subnet Proxy-Proof Checker</span>
        </button>

        <button
          onClick={() => {
            soundFx.playClick();
            setActiveTool('AUDIO_DSP');
          }}
          className={`px-4 py-2.5 rounded transition-all cursor-pointer flex items-center space-x-2 ${
            activeTool === 'AUDIO_DSP'
              ? 'bg-[#00f0ff] text-[#07080b] font-bold shadow-[0_0_15px_rgba(0,240,255,0.3)]'
              : 'bg-[#0d0f15] border border-white/10 text-slate-400 hover:text-white'
          }`}
        >
          <Cpu className="w-3.5 h-3.5" />
          <span>02. WASAPI DSP Waveform Oscilloscope</span>
        </button>
      </div>

      {/* Main Tool Container */}
      <div className="bg-[#0d0f15] border border-white/15 rounded-lg p-6 shadow-2xl">
        {activeTool === 'SUBNET' ? <SubnetValidatorDemo /> : <AudioDspVisualizer />}
      </div>
    </section>
  );
};
