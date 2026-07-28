import React, { useState, useEffect } from 'react';
import { REALTIME_EXHIBITION_HUD } from '../../data/exhibitionData';
import { Radio, Clock, Cpu, Server, Activity } from 'lucide-react';

export const Room05_NowFeed: React.FC = () => {
  const [timeStr, setTimeStr] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString('en-US', { hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' }) + ' IST');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="room-05" className="py-24 px-4 max-w-7xl mx-auto border-b border-white/10 relative">
      {/* Room Marker */}
      <div className="flex items-center justify-between text-xs font-mono text-slate-500 pb-4 border-b border-white/10 mb-8">
        <div className="flex items-center space-x-2 text-[#00f0ff]">
          <Radio className="w-4 h-4 animate-cyan-pulse" />
          <span className="font-bold tracking-widest uppercase">EXHIBITION ROOM 05 // DYNAMIC NOW FEED</span>
        </div>
        <div>REAL-TIME TELEMETRY</div>
      </div>

      <h2 className="text-4xl md:text-6xl font-bold font-display text-white tracking-tight mb-8">
        Real-Time System Telemetry
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 font-mono text-xs">
        {/* Active Focus */}
        <div className="lg:col-span-7 bg-[#0a0c10] border border-[#00f0ff]/40 rounded-lg p-6 shadow-2xl relative overflow-hidden flex flex-col justify-between">
          <div>
            <div className="text-[#00f0ff] font-bold text-xs tracking-widest uppercase mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4" /> CURRENT R&D OBSESSION (2026)
            </div>
            <h3 className="text-2xl font-sans font-bold text-white mb-4 leading-tight">{REALTIME_EXHIBITION_HUD.currentFocus}</h3>
          </div>

          <div className="bg-[#050608] p-4 rounded border border-white/10 text-slate-300 font-sans text-xs">
            <span className="text-[#00f0ff] font-mono font-bold block mb-1">SYSTEM UPTIME:</span>
            {REALTIME_EXHIBITION_HUD.uptime} across cloud & homelab edge nodes.
          </div>
        </div>

        {/* Telemetry HUD */}
        <div className="lg:col-span-5 bg-[#0a0c10] border border-white/15 rounded-lg p-6 shadow-2xl space-y-4">
          <div className="flex justify-between items-center text-[#00f0ff] pb-3 border-b border-white/10">
            <span className="font-bold tracking-widest">HARDWARE CLOCK</span>
            <span className="text-[10px] bg-[#00f0ff]/10 px-2 py-0.5 rounded">{REALTIME_EXHIBITION_HUD.version}</span>
          </div>

          <div className="bg-[#050608] p-3.5 rounded border border-white/10 flex items-center justify-between">
            <span className="text-slate-400 flex items-center gap-2"><Clock className="w-4 h-4 text-[#00f0ff]" /> Local Time:</span>
            <span className="text-white font-bold tracking-widest">{timeStr || REALTIME_EXHIBITION_HUD.localTime}</span>
          </div>

          <div className="bg-[#050608] p-3.5 rounded border border-white/10 flex items-center justify-between">
            <span className="text-slate-400 flex items-center gap-2"><Server className="w-4 h-4 text-[#00f0ff]" /> Location:</span>
            <span className="text-slate-200 text-[11px]">{REALTIME_EXHIBITION_HUD.location}</span>
          </div>

          <div className="bg-[#050608] p-3.5 rounded border border-white/10 flex items-center justify-between">
            <span className="text-slate-400 flex items-center gap-2"><Activity className="w-4 h-4 text-[#00f0ff]" /> Active Rooms:</span>
            <span className="text-[#00f0ff] font-bold">7 ROOMS ACTIVE</span>
          </div>
        </div>
      </div>
    </section>
  );
};
