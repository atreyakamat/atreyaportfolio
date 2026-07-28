import React, { useState } from 'react';
import { EXHIBITION_ROOMS } from '../../data/exhibitionData';
import type { ExhibitionRoom } from '../../data/exhibitionData';
import { SubnetValidatorDemo } from '../Playground/SubnetValidatorDemo';
import { AudioDspVisualizer } from '../Playground/AudioDspVisualizer';
import { Code2, Database, BarChart3, ChevronRight } from 'lucide-react';
import { soundFx } from '../OsShell/AudioSystem';

export const Room02_Exhibition: React.FC = () => {
  const [selectedRoomId, setSelectedRoomId] = useState<string>(EXHIBITION_ROOMS[0].id);
  const [activeTab, setActiveTab] = useState<'IMPACT' | 'INVARIANTS' | 'SCHEMA' | 'INTERACTIVE'>('IMPACT');

  const room: ExhibitionRoom = EXHIBITION_ROOMS.find((r) => r.id === selectedRoomId) || EXHIBITION_ROOMS[0];

  return (
    <section id="room-02" className="py-24 px-4 max-w-7xl mx-auto border-b border-white/10 relative">
      {/* Room Marker */}
      <div className="flex items-center justify-between text-xs font-mono text-slate-500 pb-4 border-b border-white/10 mb-8">
        <div className="flex items-center space-x-2 text-[#00f0ff]">
          <BarChart3 className="w-4 h-4" />
          <span className="font-bold tracking-widest uppercase">EXHIBITION ROOM 02 // SYSTEMS EXHIBITION</span>
        </div>
        <div>ENTER ROOM TO DISCOVER ARCHITECTURE</div>
      </div>

      {/* Room Selection Tabs */}
      <div className="flex overflow-x-auto gap-3 pb-4 mb-8 no-scrollbar font-mono text-xs">
        {EXHIBITION_ROOMS.map((r) => {
          const isSelected = r.id === selectedRoomId;
          return (
            <button
              key={r.id}
              onClick={() => {
                soundFx.playClick();
                setSelectedRoomId(r.id);
                setActiveTab('IMPACT');
              }}
              className={`px-4 py-2.5 rounded border whitespace-nowrap cursor-pointer transition-all flex items-center space-x-2 ${
                isSelected
                  ? 'bg-[#00f0ff] text-[#08080a] font-bold shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                  : 'bg-[#0a0c10] border-white/10 text-slate-400 hover:text-white'
              }`}
            >
              <span>{r.roomNumber}</span>
              <span className="opacity-75">| {r.title.split(' ')[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Main Exhibition Room Gallery Vessel */}
      <div className="bg-[#0a0c10] border border-white/15 rounded-lg overflow-hidden shadow-2xl">
        {/* Gallery Room Banner */}
        <div className="p-6 border-b border-white/10 bg-[#121318] flex flex-wrap items-center justify-between gap-4 font-mono">
          <div>
            <div className="text-[#00f0ff] text-xs font-bold tracking-widest mb-1 flex items-center gap-2">
              <span>{room.roomNumber}</span>
              <span>// CATEGORY: {room.category.toUpperCase()}</span>
            </div>
            <h3 className="text-3xl font-bold font-display text-white">{room.title}</h3>
            <p className="text-slate-400 font-sans text-xs mt-1">{room.subtitle}</p>
          </div>

          {/* Room Sub-Nav Tabs */}
          <div className="flex gap-1 bg-[#08080a] p-1 rounded border border-white/10 text-xs">
            {(['IMPACT', 'INVARIANTS', 'SCHEMA', 'INTERACTIVE'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  soundFx.playClick();
                  setActiveTab(tab);
                }}
                className={`px-3 py-1.5 rounded transition-all cursor-pointer ${
                  activeTab === tab
                    ? 'bg-[#00f0ff]/20 text-[#00f0ff] font-bold border border-[#00f0ff]/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* HERO IMPACT METRIC DISPLAY (Show, Never Explain) */}
        <div className="p-8 bg-[#050608] border-b border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 font-mono">
          <div className="text-center md:text-left">
            <div className="text-xs text-slate-500 uppercase tracking-widest mb-1">HERO SYSTEM OUTCOME</div>
            <div className="text-6xl md:text-7xl font-bold font-display text-[#00f0ff] tracking-tight">{room.heroOutcome}</div>
            <div className="text-xs text-white font-bold mt-1">{room.headline}</div>
          </div>

          <div className="max-w-md bg-[#0a0c10] p-4 rounded border border-white/10 text-xs text-slate-300 font-sans leading-relaxed">
            "{room.wordsText}"
          </div>
        </div>

        {/* Room Tab Content */}
        <div className="p-6 font-mono text-xs">
          {activeTab === 'IMPACT' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {room.metrics.map((m, idx) => (
                  <div key={idx} className="bg-[#08080a] p-4 rounded border border-white/10 text-center">
                    <div className="text-3xl font-bold text-[#00f0ff] mb-1 font-display">{m.value}</div>
                    <div className="text-slate-400 text-xs">{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="bg-[#08080a] p-4 rounded border border-white/10">
                <div className="text-[#00f0ff] font-bold mb-3 uppercase">EXHIBITION ROOM INVARIANTS:</div>
                <div className="space-y-2 text-slate-300 font-sans text-xs">
                  {room.invariants.map((inv, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <ChevronRight className="w-3.5 h-3.5 text-[#00f0ff] shrink-0" />
                      <span>{inv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'INVARIANTS' && room.codeSnippet && (
            <div className="bg-[#050608] p-4 rounded border border-white/10 overflow-x-auto text-slate-200">
              <div className="flex justify-between text-slate-400 mb-2 pb-2 border-b border-white/10">
                <span className="text-[#00f0ff] font-bold flex items-center gap-1.5"><Code2 className="w-4 h-4" /> CORE INVARIANT EXECUTABLE</span>
                <span>TYPESCRIPT</span>
              </div>
              <pre className="text-xs text-[#00f0ff] leading-relaxed">{room.codeSnippet}</pre>
            </div>
          )}

          {activeTab === 'SCHEMA' && room.schemaDdl && (
            <div className="bg-[#050608] p-4 rounded border border-white/10 overflow-x-auto text-slate-200">
              <div className="flex justify-between text-slate-400 mb-2 pb-2 border-b border-white/10">
                <span className="text-[#00f0ff] font-bold flex items-center gap-1.5"><Database className="w-4 h-4" /> RELATIONAL DDL SCHEMA</span>
                <span>POSTGRESQL 16</span>
              </div>
              <pre className="text-xs text-[#00f0ff] leading-relaxed">{room.schemaDdl}</pre>
            </div>
          )}

          {activeTab === 'INTERACTIVE' && (
            <div>
              {room.id === 'room-attendance' ? (
                <SubnetValidatorDemo />
              ) : (
                <AudioDspVisualizer />
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
