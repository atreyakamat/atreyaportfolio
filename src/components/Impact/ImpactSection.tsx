import React, { useState } from 'react';
import { PROJECT_DOCUMENTARIES } from '../../data/portfolioData';
import type { ProjectDocumentary } from '../../data/portfolioData';
import { Shield, Database, Code2, Cpu, CheckCircle, BarChart3 } from 'lucide-react';
import { soundFx } from '../OsShell/AudioSystem';

export const ImpactSection: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(PROJECT_DOCUMENTARIES[0].id);
  const [activeTab, setActiveTab] = useState<'OVERVIEW' | 'ARCHITECTURE' | 'SCHEMA' | 'CODE' | 'TRADEOFFS'>('OVERVIEW');

  const project: ProjectDocumentary = PROJECT_DOCUMENTARIES.find((p) => p.id === selectedProjectId) || PROJECT_DOCUMENTARIES[0];

  return (
    <section id="impact" className="py-24 px-4 max-w-7xl mx-auto border-t border-white/10 relative">
      {/* Section Header */}
      <div className="mb-12">
        <div className="inline-flex items-center space-x-2 bg-[#00f0ff]/10 border border-[#00f0ff]/30 px-3 py-1 rounded text-xs font-mono text-[#00f0ff] mb-4">
          <BarChart3 className="w-3.5 h-3.5" />
          <span>SECTION 02 // ENGINEERING DOCUMENTARIES</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold font-display text-white tracking-tight mb-4">
          Impact & System Case Studies
        </h2>
        <p className="text-slate-400 font-sans max-w-2xl text-base">
          Projects are not resume bullet points. They are engineered outcomes. Deconstruct the architecture, database schemas, code invariants, and performance trade-offs below.
        </p>
      </div>

      {/* Project Selector Nav Tabs */}
      <div className="flex overflow-x-auto space-x-3 pb-4 mb-8 border-b border-white/10 no-scrollbar">
        {PROJECT_DOCUMENTARIES.map((proj) => {
          const isSelected = proj.id === selectedProjectId;
          return (
            <button
              key={proj.id}
              onClick={() => {
                soundFx.playClick();
                setSelectedProjectId(proj.id);
                setActiveTab('OVERVIEW');
              }}
              className={`px-4 py-2.5 rounded font-mono text-xs whitespace-nowrap transition-all cursor-pointer flex items-center space-x-2 ${
                isSelected
                  ? 'bg-[#00f0ff] text-[#07080b] font-bold shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                  : 'bg-[#0d0f15] border border-white/10 text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              <span>{proj.title.split('—')[0]}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded ${isSelected ? 'bg-black/20 text-[#07080b]' : 'bg-white/10 text-slate-400'}`}>
                {proj.category}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Case Study Documentary Container */}
      <div className="bg-[#0d0f15] border border-white/15 rounded-lg overflow-hidden shadow-2xl">
        {/* Documentary Header Bar */}
        <div className="p-6 border-b border-white/10 bg-[#131722] flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-[#00ff66] mb-1">
              <span className="w-2 h-2 rounded-full bg-[#00ff66]" />
              <span>{project.status.toUpperCase()} // ROLE: {project.role.toUpperCase()}</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold font-display text-white">{project.title}</h3>
            <p className="text-slate-400 font-sans text-sm mt-1">{project.tagline}</p>
          </div>

          {/* Sub-Tabs Selector */}
          <div className="flex flex-wrap gap-1 bg-[#07080b] p-1 rounded border border-white/10 font-mono text-xs">
            {(['OVERVIEW', 'ARCHITECTURE', 'SCHEMA', 'CODE', 'TRADEOFFS'] as const).map((tab) => (
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

        {/* Impact Metrics Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10 border-b border-white/10 bg-[#07080b] font-mono">
          {project.impactMetrics.map((metric, idx) => (
            <div key={idx} className="p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-[#00ff66] mb-1 font-display">{metric.value}</div>
              <div className="text-xs text-white font-bold">{metric.label}</div>
              <div className="text-[10px] text-slate-500">{metric.detail}</div>
            </div>
          ))}
        </div>

        {/* Tab Content Panels */}
        <div className="p-6">
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'OVERVIEW' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#07080b] p-4 rounded border border-white/10">
                  <h4 className="text-xs font-mono font-bold text-[#ff2e54] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Shield className="w-4 h-4" /> 01. Problem Statement
                  </h4>
                  <p className="text-slate-300 font-sans text-sm leading-relaxed">{project.problem}</p>
                </div>

                <div className="bg-[#07080b] p-4 rounded border border-white/10">
                  <h4 className="text-xs font-mono font-bold text-[#00f0ff] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Cpu className="w-4 h-4" /> 02. Real-World Context
                  </h4>
                  <p className="text-slate-300 font-sans text-sm leading-relaxed">{project.context}</p>
                </div>
              </div>

              {/* Engineering Constraints */}
              <div className="bg-[#07080b] p-4 rounded border border-white/10 font-mono text-xs">
                <h4 className="text-xs font-bold text-[#ffb000] uppercase tracking-wider mb-3">
                  03. System Constraints & Invariants
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {project.constraints.map((c, i) => (
                    <div key={i} className="flex items-start space-x-2 text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-[#00ff66] shrink-0 mt-0.5" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Technical Decisions */}
              <div>
                <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-3">
                  04. Key Technical Decisions
                </h4>
                <div className="space-y-3 font-mono text-xs">
                  {project.technicalDecisions.map((dec, idx) => (
                    <div key={idx} className="bg-[#131722] p-4 rounded border border-white/10">
                      <div className="text-[#00ff66] font-bold mb-1">{dec.decision}: {dec.choice}</div>
                      <div className="text-slate-300 font-sans text-xs mb-2 leading-relaxed">{dec.why}</div>
                      <div className="text-[10px] text-slate-500">
                        Rejected Alternatives: {dec.rejectedAlternatives.join(', ')}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outcome & Lesson */}
              <div className="bg-[#00ff66]/10 border border-[#00ff66]/30 p-4 rounded font-mono text-xs flex flex-col sm:flex-row justify-between gap-4">
                <div>
                  <span className="text-[#00ff66] font-bold block mb-1">METRICS RESULT</span>
                  <span className="text-slate-200 font-sans text-sm">{project.metricsResult}</span>
                </div>
                <div>
                  <span className="text-[#00f0ff] font-bold block mb-1">CORE LESSON</span>
                  <span className="text-slate-200 font-sans text-sm">{project.lessonLearned}</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ARCHITECTURE DIAGRAM */}
          {activeTab === 'ARCHITECTURE' && (
            <div className="bg-[#07080b] p-6 rounded border border-white/10 font-mono text-xs">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/10 text-slate-400">
                <span className="text-[#00f0ff] font-bold">SYSTEM TOPOLOGY ARCHITECTURE MAP</span>
                <span>STATUS: VERIFIED PRODUCTION</span>
              </div>
              
              <div className="p-8 bg-[#090b10] border border-white/10 rounded min-h-[300px] flex flex-col items-center justify-center relative overflow-hidden">
                {/* SVG Architecture Diagram Blueprint */}
                <div className="w-full max-w-2xl space-y-6">
                  <div className="flex items-center justify-between gap-4">
                    <div className="p-3 bg-[#131722] border border-[#00f0ff] rounded text-center w-36">
                      <div className="text-[#00f0ff] font-bold text-[10px]">CLIENT LAYER</div>
                      <div className="text-slate-300 text-[9px]">Web Browser / App</div>
                    </div>
                    <div className="h-[2px] flex-1 bg-gradient-to-r from-[#00f0ff] to-[#00ff66] relative">
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[9px] text-slate-400 bg-[#090b10] px-2">
                        HTTPS / WSS (12ms)
                      </div>
                    </div>
                    <div className="p-3 bg-[#131722] border border-[#00ff66] rounded text-center w-36">
                      <div className="text-[#00ff66] font-bold text-[10px]">EDGE GATEWAY</div>
                      <div className="text-slate-300 text-[9px]">Subnet / Auth Invariant</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="w-[2px] h-10 bg-[#00ff66]" />
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <div className="p-3 bg-[#131722] border border-[#ffb000] rounded text-center w-36">
                      <div className="text-[#ffb000] font-bold text-[10px]">CACHE & QUEUE</div>
                      <div className="text-slate-300 text-[9px]">Redis / BullMQ Buffer</div>
                    </div>
                    <div className="h-[2px] flex-1 bg-[#ffb000]" />
                    <div className="p-3 bg-[#131722] border border-[#ff2e54] rounded text-center w-36">
                      <div className="text-[#ff2e54] font-bold text-[10px]">PERSISTENCE DB</div>
                      <div className="text-slate-300 text-[9px]">PostgreSQL Cluster</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: DATABASE SCHEMA */}
          {activeTab === 'SCHEMA' && (
            <div className="bg-[#050608] p-4 rounded border border-white/10 font-mono text-xs overflow-x-auto text-slate-200">
              <div className="flex items-center justify-between mb-3 text-slate-400 pb-2 border-b border-white/10">
                <span className="flex items-center gap-1.5 text-[#00ff66] font-bold">
                  <Database className="w-4 h-4" /> RELATIONAL DDL / JSON SCHEMA SPECIFICATION
                </span>
                <span>POSTGRESQL 16</span>
              </div>
              <pre className="text-[11px] leading-relaxed text-[#00ff66]">{project.databaseSchema}</pre>
            </div>
          )}

          {/* TAB 4: REAL CODE SNIPPET */}
          {activeTab === 'CODE' && (
            <div className="bg-[#050608] p-4 rounded border border-white/10 font-mono text-xs overflow-x-auto">
              <div className="flex items-center justify-between mb-3 text-slate-400 pb-2 border-b border-white/10">
                <span className="flex items-center gap-1.5 text-[#00f0ff] font-bold">
                  <Code2 className="w-4 h-4" /> FILE: {project.codeSnippet.filename}
                </span>
                <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-white">{project.codeSnippet.language}</span>
              </div>
              <pre className="text-[11px] leading-relaxed text-slate-200 mb-4">{project.codeSnippet.code}</pre>
              <div className="bg-[#131722] p-3 rounded border border-white/10 text-slate-300 text-xs font-sans">
                <span className="text-[#00ff66] font-mono font-bold block mb-1">INVARIANT EXPLANATION:</span>
                {project.codeSnippet.explanation}
              </div>
            </div>
          )}

          {/* TAB 5: TRADEOFFS MATRIX */}
          {activeTab === 'TRADEOFFS' && (
            <div className="space-y-4 font-mono text-xs">
              <div className="text-slate-400 mb-2">SYSTEM DIMENSION TRADEOFF MATRIX</div>
              {project.tradeoffs.map((to, i) => (
                <div key={i} className="bg-[#07080b] p-4 rounded border border-white/10 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <span className="text-slate-500 block text-[10px]">DIMENSION</span>
                    <span className="text-white font-bold">{to.dimension}</span>
                  </div>
                  <div>
                    <span className="text-[#00ff66] block text-[10px]">ACCEPTED GAIN</span>
                    <span className="text-[#00ff66]">{to.gain}</span>
                  </div>
                  <div>
                    <span className="text-[#ff2e54] block text-[10px]">INTENTIONAL SACRIFICE</span>
                    <span className="text-[#ff2e54]">{to.sacrifice}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
