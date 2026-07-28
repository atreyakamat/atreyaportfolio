import React, { useState } from 'react';
import { LAB_NOTES } from '../../data/portfolioData';
import type { LabNote } from '../../data/portfolioData';
import { MessageSquareCode, Calendar, Tag, ChevronDown, ChevronUp } from 'lucide-react';
import { soundFx } from '../OsShell/AudioSystem';

export const LabNotesSection: React.FC = () => {
  const [expandedNoteId, setExpandedNoteId] = useState<string | null>(LAB_NOTES[0].id);

  const toggleExpand = (id: string) => {
    soundFx.playClick();
    setExpandedNoteId(expandedNoteId === id ? null : id);
  };

  return (
    <section id="lab-notes" className="py-24 px-4 max-w-7xl mx-auto border-t border-white/10 relative">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center space-x-2 bg-[#00f0ff]/10 border border-[#00f0ff]/30 px-3 py-1 rounded text-xs font-mono text-[#00f0ff] mb-4">
          <MessageSquareCode className="w-3.5 h-3.5" />
          <span>SECTION 06 // ENGINEERING LAB NOTES & DESIGN CRITIQUES</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold font-display text-white tracking-tight mb-4">
          Lab Notes & Working Hypotheses
        </h2>
        <p className="text-slate-400 font-sans max-w-2xl text-base">
          Engineering journal entries, tactile UI teardowns, and evolving product hypotheses. People should understand how technical ideas evolve.
        </p>
      </div>

      {/* Lab Notes Cards */}
      <div className="space-y-6">
        {LAB_NOTES.map((note: LabNote) => {
          const isExpanded = expandedNoteId === note.id;
          return (
            <div
              key={note.id}
              className="bg-[#0a0c10] border border-white/15 rounded-lg p-6 font-mono text-xs shadow-xl transition-all hover:border-[#00f0ff]/50"
            >
              <div
                onClick={() => toggleExpand(note.id)}
                className="flex items-start justify-between cursor-pointer group"
              >
                <div>
                  <div className="flex items-center space-x-3 text-[11px] mb-2">
                    <span className="bg-[#00f0ff]/20 text-[#00f0ff] px-2 py-0.5 rounded font-bold">
                      {note.category}
                    </span>
                    <span className="text-slate-500 flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {note.date}
                    </span>
                    <span className="text-[#00f0ff] font-bold text-[10px]">[{note.status.toUpperCase()}]</span>
                  </div>
                  <h3 className="text-xl font-sans font-bold text-white group-hover:text-[#00f0ff] transition-colors">
                    {note.title}
                  </h3>
                </div>

                <button className="text-slate-400 group-hover:text-white p-2 cursor-pointer">
                  {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
              </div>

              <p className="font-sans text-slate-300 text-sm mt-3 leading-relaxed">{note.summary}</p>

              {/* Expanded content */}
              {isExpanded && (
                <div className="mt-6 pt-6 border-t border-white/10 space-y-4 font-sans text-slate-200 text-sm leading-relaxed bg-[#050608] p-4 rounded border border-white/5">
                  <div className="font-mono text-xs text-[#00f0ff] font-bold tracking-wider uppercase mb-2">
                    FULL HYPOTHESIS & ANALYSIS
                  </div>
                  <div className="whitespace-pre-line">{note.content}</div>

                  <div className="flex flex-wrap gap-2 pt-3 font-mono text-xs">
                    {note.tags.map((tag, idx) => (
                      <span key={idx} className="bg-white/5 border border-white/10 px-2 py-0.5 rounded text-[10px] text-slate-400 flex items-center gap-1">
                        <Tag className="w-2.5 h-2.5 text-[#00f0ff]" /> {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
