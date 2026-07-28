import React from 'react';
import { CURRENT_MISSION } from '../../data/portfolioData';
import { Compass, BookOpen, Zap, Rocket, CheckCircle2 } from 'lucide-react';

export const CurrentMissionSection: React.FC = () => {
  return (
    <section id="current-mission" className="py-24 px-4 max-w-7xl mx-auto border-t border-white/10 relative">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center space-x-2 bg-[#00f0ff]/10 border border-[#00f0ff]/30 px-3 py-1 rounded text-xs font-mono text-[#00f0ff] mb-4">
          <Compass className="w-3.5 h-3.5" />
          <span>SECTION 08 // REAL-TIME SYSTEM STATE</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold font-display text-white tracking-tight mb-4">
          Current Mission & Obsessions
        </h2>
        <p className="text-slate-400 font-sans max-w-2xl text-base">
          What I am building, studying, and optimizing right now in 2026.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Currently Building & Obsessions */}
        <div className="lg:col-span-7 space-y-6">
          {/* Currently Building */}
          <div className="bg-[#0a0c10] border border-[#00f0ff]/40 rounded-lg p-6 font-mono text-xs shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#00f0ff] text-[#050608] font-bold px-3 py-1 text-[10px] uppercase">
              ACTIVE PRIORITY
            </div>
            <div className="text-[#00f0ff] font-bold text-sm tracking-wider uppercase mb-2 flex items-center gap-2">
              <Rocket className="w-4 h-4" /> CURRENTLY BUILDING
            </div>
            <h3 className="text-xl font-sans font-bold text-white mb-2">{CURRENT_MISSION.building.title}</h3>
            <p className="text-slate-300 font-sans text-sm leading-relaxed">{CURRENT_MISSION.building.description}</p>
          </div>

          {/* Current Obsessions */}
          <div className="bg-[#0a0c10] border border-white/15 rounded-lg p-6 font-mono text-xs shadow-xl">
            <div className="text-[#00f0ff] font-bold text-xs tracking-wider uppercase mb-4 flex items-center gap-2">
              <Zap className="w-4 h-4" /> TECHNICAL OBSESSIONS (2026)
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CURRENT_MISSION.obsessions.map((obs: string, idx: number) => (
                <div key={idx} className="bg-[#050608] p-3 rounded border border-white/10 flex items-center space-x-2 text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00f0ff] shrink-0" />
                  <span className="font-sans text-xs">{obs}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Currently Reading & 2026 Roadmap */}
        <div className="lg:col-span-5 space-y-6">
          {/* Currently Reading */}
          <div className="bg-[#0a0c10] border border-white/15 rounded-lg p-6 font-mono text-xs shadow-xl">
            <div className="text-[#00f0ff] font-bold text-xs tracking-wider uppercase mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> CURRENTLY READING
            </div>
            <div className="space-y-4">
              {CURRENT_MISSION.reading.map((book: { title: string; author: string; takeaway: string }, idx: number) => (
                <div key={idx} className="bg-[#050608] p-3.5 rounded border border-white/10">
                  <div className="text-white font-sans font-bold text-sm">{book.title}</div>
                  <div className="text-slate-400 text-xs mb-2">by {book.author}</div>
                  <div className="text-[11px] text-[#00f0ff]">Key Takeaway: {book.takeaway}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 2026 Roadmap */}
          <div className="bg-[#0a0c10] border border-white/15 rounded-lg p-6 font-mono text-xs shadow-xl">
            <div className="text-white font-bold text-xs tracking-wider uppercase mb-4">2026 ENGINEERING ROADMAP</div>
            <div className="space-y-3">
              {CURRENT_MISSION.roadmap2026.map((rm: { quarter: string; milestone: string }, idx: number) => (
                <div key={idx} className="flex items-start space-x-3 text-xs">
                  <span className="bg-[#00f0ff]/20 text-[#00f0ff] px-2 py-0.5 rounded font-bold shrink-0">{rm.quarter}</span>
                  <span className="text-slate-300 font-sans">{rm.milestone}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
