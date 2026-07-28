import React, { useState, useEffect } from 'react';
import { NOW_DATA } from '../../data/portfolioData';
import { Radio, Clock, ShieldCheck, Activity, Cpu, Server } from 'lucide-react';

export const NowSection: React.FC = () => {
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
    <section id="now" className="py-24 px-4 max-w-7xl mx-auto border-t border-white/10 relative">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center space-x-2 bg-[#00f0ff]/10 border border-[#00f0ff]/30 px-3 py-1 rounded text-xs font-mono text-[#00f0ff] mb-4">
          <Radio className="w-3.5 h-3.5 animate-cyan-pulse" />
          <span>SECTION 07 // REAL-TIME SYSTEM TELEMETRY (NOW)</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold font-display text-white tracking-tight mb-4">
          Live "Now" Telemetry Feed
        </h2>
        <p className="text-slate-400 font-sans max-w-2xl text-base">
          Real-time snapshot of active focus, live deployments, current reading, and system status in 2026.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Live Status & Current Focus */}
        <div className="lg:col-span-7 space-y-6 font-mono text-xs">
          {/* Active Focus Box */}
          <div className="bg-[#0a0c10] border border-[#00f0ff]/40 rounded-lg p-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#00f0ff] text-[#050608] font-bold px-3 py-1 text-[10px] uppercase">
              REAL-TIME FOCUS
            </div>
            <div className="text-[#00f0ff] font-bold text-sm tracking-wider uppercase mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4" /> CURRENT R&D OBSESSION
            </div>
            <h3 className="text-xl font-sans font-bold text-white mb-2">{NOW_DATA.currentFocus}</h3>
            <p className="text-slate-300 font-sans text-xs leading-relaxed">{NOW_DATA.currentlyReading}</p>
          </div>

          {/* Active Deployments Grid */}
          <div className="bg-[#0a0c10] border border-white/15 rounded-lg p-6 shadow-xl">
            <div className="text-white font-bold text-xs tracking-wider uppercase mb-4 flex items-center gap-2">
              <Server className="w-4 h-4 text-[#00f0ff]" /> ACTIVE PRODUCTION DEPLOYMENTS
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {NOW_DATA.activeDeployments.map((dep, idx) => (
                <div key={idx} className="bg-[#050608] p-3 rounded border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-white font-bold">{dep.name}</div>
                    <div className="text-[10px] text-slate-500">{dep.target}</div>
                  </div>
                  <span className="bg-[#00f0ff]/20 text-[#00f0ff] px-2 py-0.5 rounded text-[10px] font-bold">
                    {dep.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Hardware Telemetry HUD */}
        <div className="lg:col-span-5 bg-[#0a0c10] border border-white/15 rounded-lg p-6 font-mono text-xs shadow-2xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 text-[#00f0ff]">
              <span className="font-bold tracking-wider uppercase">HARDWARE TELEMETRY HUD</span>
              <span className="text-[10px] bg-[#00f0ff]/10 px-2 py-0.5 rounded">VERSION {NOW_DATA.version}</span>
            </div>

            <div className="space-y-4 mb-6">
              <div className="bg-[#050608] p-3.5 rounded border border-white/10 flex items-center justify-between">
                <span className="text-slate-400 flex items-center gap-2"><Clock className="w-4 h-4 text-[#00f0ff]" /> Local System Time:</span>
                <span className="text-white font-bold tracking-widest">{timeStr || NOW_DATA.localTime}</span>
              </div>

              <div className="bg-[#050608] p-3.5 rounded border border-white/10 flex items-center justify-between">
                <span className="text-slate-400 flex items-center gap-2"><Activity className="w-4 h-4 text-[#00f0ff]" /> System Uptime:</span>
                <span className="text-[#00f0ff] font-bold">99.98% (30-Day Avg)</span>
              </div>

              <div className="bg-[#050608] p-3.5 rounded border border-white/10 flex items-center justify-between">
                <span className="text-slate-400 flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-[#00f0ff]" /> Campus Coordinates:</span>
                <span className="text-slate-200 text-[11px]">{NOW_DATA.location}</span>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-white/10 text-[10px] text-slate-500 flex justify-between">
            <span>{NOW_DATA.systemStatus}</span>
            <span>PING 12ms</span>
          </div>
        </div>
      </div>
    </section>
  );
};
