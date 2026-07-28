import React, { useState } from 'react';
import { BUILD_LOG_ENTRIES } from '../../data/portfolioData';
import type { BuildLogEntry } from '../../data/portfolioData';
import { Tag, Code, Terminal, Calendar } from 'lucide-react';
import { soundFx } from '../OsShell/AudioSystem';

export const BuildLogSection: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('ALL');

  const filteredLogs = selectedTag === 'ALL'
    ? BUILD_LOG_ENTRIES
    : BUILD_LOG_ENTRIES.filter((log) => log.category === selectedTag || log.tags.includes(selectedTag));

  const categories = ['ALL', 'DEPLOYMENT', 'ARCH_DECISION', 'INCIDENT', 'EXPERIMENT', 'HOMELAB'];

  return (
    <section id="build-log" className="py-24 px-4 max-w-7xl mx-auto border-t border-white/10 relative">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center space-x-2 bg-[#ffb000]/10 border border-[#ffb000]/30 px-3 py-1 rounded text-xs font-mono text-[#ffb000] mb-4">
          <Terminal className="w-3.5 h-3.5" />
          <span>SECTION 03 // CHRONOLOGICAL ENGINEERING JOURNAL</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold font-display text-white tracking-tight mb-4">
          Build Log & Deploy Journal
        </h2>
        <p className="text-slate-400 font-sans max-w-2xl text-base">
          A living engineering log documenting real deployments, architectural shifts, homelab upgrades, and post-mortems.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex overflow-x-auto gap-2 pb-4 mb-8 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              soundFx.playClick();
              setSelectedTag(cat);
            }}
            className={`px-3 py-1.5 rounded font-mono text-xs cursor-pointer transition-all ${
              selectedTag === cat
                ? 'bg-[#ffb000] text-[#07080b] font-bold shadow-[0_0_15px_rgba(255,176,0,0.3)]'
                : 'bg-[#0d0f15] border border-white/10 text-slate-400 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Timeline Entries */}
      <div className="space-y-6">
        {filteredLogs.map((entry: BuildLogEntry) => (
          <div
            key={entry.id}
            className="bg-[#0d0f15] border border-white/15 rounded-lg p-6 font-mono text-xs shadow-xl relative overflow-hidden group hover:border-[#ffb000]/50 transition-all"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3 mb-4">
              <div className="flex items-center space-x-3">
                <span
                  className={`px-2 py-0.5 rounded font-bold text-[10px] ${
                    entry.category === 'DEPLOYMENT'
                      ? 'bg-[#00ff66]/20 text-[#00ff66]'
                      : entry.category === 'INCIDENT'
                      ? 'bg-[#ff2e54]/20 text-[#ff2e54]'
                      : entry.category === 'ARCH_DECISION'
                      ? 'bg-[#00f0ff]/20 text-[#00f0ff]'
                      : 'bg-[#ffb000]/20 text-[#ffb000]'
                  }`}
                >
                  [{entry.category}]
                </span>
                <h3 className="text-base font-sans font-bold text-white group-hover:text-[#ffb000] transition-colors">
                  {entry.title}
                </h3>
              </div>

              <div className="flex items-center space-x-1 text-slate-500 text-[11px]">
                <Calendar className="w-3.5 h-3.5" />
                <span>{entry.timestamp}</span>
              </div>
            </div>

            <p className="font-sans text-slate-300 text-sm leading-relaxed mb-4">{entry.summary}</p>
            <p className="font-sans text-slate-400 text-xs mb-4">{entry.details}</p>

            {/* Code Diff preview if present */}
            {entry.codeDiff && (
              <div className="bg-[#050608] p-3 rounded border border-white/10 mb-4 overflow-x-auto text-[11px]">
                <div className="flex items-center space-x-2 text-slate-400 mb-2">
                  <Code className="w-3.5 h-3.5 text-[#00ff66]" />
                  <span>DIFF: {entry.codeDiff.file}</span>
                </div>
                <pre className="text-slate-300">{entry.codeDiff.diff}</pre>
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
              {entry.tags.map((tag, idx) => (
                <span key={idx} className="bg-white/5 border border-white/5 px-2 py-0.5 rounded text-[10px] text-slate-400 flex items-center gap-1">
                  <Tag className="w-2.5 h-2.5 text-[#ffb000]" /> {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
