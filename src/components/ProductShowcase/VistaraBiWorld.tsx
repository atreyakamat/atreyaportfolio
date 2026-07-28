import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Sparkles, Layers, Compass, Code2 } from 'lucide-react';
import { soundFx } from '../OsShell/AudioSystem';

export const VistaraBiWorld: React.FC = () => {
  const [isDataOrganized, setIsDataOrganized] = useState<boolean>(false);
  const [showDepth, setShowDepth] = useState<boolean>(false);
  const [snappedFragments, setSnappedFragments] = useState<number[]>([]);

  const handleOrganizeData = () => {
    soundFx.playSuccess();
    setIsDataOrganized(!isDataOrganized);
  };

  const handleSnapFragment = (id: number) => {
    soundFx.playBeep(440 + id * 100, 'sine', 0.05, 0.04);
    if (!snappedFragments.includes(id)) {
      setSnappedFragments((prev) => [...prev, id]);
    }
  };

  return (
    <section id="project-vistarabi" className="py-24 px-6 max-w-6xl mx-auto select-none font-sans">
      
      {/* Art-Direction Banner */}
      <div className="bg-gradient-to-r from-purple-100/70 via-slate-100 to-transparent p-4 rounded-t-xl border-t border-x border-black/10 font-mono text-xs flex justify-between items-center text-[#1a1a1e]">
        <span className="font-bold uppercase tracking-wider flex items-center gap-1.5 text-purple-600">
          <Database className="w-4 h-4" /> WORLD 05 // VISTARA BI (CONVERSATIONAL BI SYSTEMS)
        </span>
        <span className="bg-[#ffffff] px-2.5 py-1 rounded border border-black/10 font-bold shadow-xs">
          Information Chaos → Structured Insight
        </span>
      </div>

      <div className="bg-[#ffffff] border border-black/10 rounded-b-xl p-8 sm:p-12 shadow-2xl relative">
        
        {/* First Layer: Hook & Experience */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-mono text-purple-600 font-bold tracking-widest block uppercase mb-2">
            FIRST LAYER // EXPERIENCE & OUTCOME
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold font-display text-[#1a1a1e] tracking-tight mb-4">
            What if data chaos organized itself into instant insights?
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Raw CSVs and database tables create information overload. Vistara BI synthesizes natural language prompts into read-only AST-sanitized SQL queries.
          </p>
        </div>

        {/* Interactive Data Chaos -> Clean BI Canvas */}
        <div className="bg-[#f9f8f6] border border-black/10 rounded-xl p-8 mb-8 relative shadow-inner">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 font-mono text-xs mb-6 border-b border-black/10 pb-4">
            <span className="font-bold text-[#1a1a1e]">
              {isDataOrganized ? 'SYNTHESIZED RESULT (AST CLEAN & READ-ONLY)' : 'RAW INFORMATION CHAOS (TAP FRAGMENTS)'}
            </span>
            <button
              onClick={handleOrganizeData}
              className={`px-4 py-2 rounded font-bold cursor-pointer transition-all ${
                isDataOrganized ? 'bg-[#1a1a1e] text-white shadow-md' : 'bg-purple-600 text-white shadow-lg'
              }`}
            >
              {isDataOrganized ? '← Reset Disorganized Fragments' : 'Pull Fragments Together →'}
            </button>
          </div>

          {!isDataOrganized ? (
            /* DISORGANIZED DATA FRAGMENTS */
            <div className="h-64 relative overflow-hidden bg-[#ffffff] border border-black/10 rounded-lg p-6 flex flex-wrap gap-4 items-center justify-center font-mono text-xs text-slate-500">
              <motion.div
                onClick={() => handleSnapFragment(1)}
                animate={{ x: snappedFragments.includes(1) ? 0 : [-10, 10, -10], y: snappedFragments.includes(1) ? 0 : [-5, 5, -5] }}
                transition={{ duration: 4, repeat: snappedFragments.includes(1) ? 0 : Infinity }}
                className={`p-3 rounded border cursor-pointer transition-colors ${
                  snappedFragments.includes(1) ? 'bg-purple-100 border-purple-400 text-purple-900 font-bold' : 'bg-slate-100 border-black/10'
                }`}
              >
                "9402","Sticker Pack","Goa","1,450.00"
              </motion.div>

              <motion.div
                onClick={() => handleSnapFragment(2)}
                animate={{ x: snappedFragments.includes(2) ? 0 : [10, -10, 10], y: snappedFragments.includes(2) ? 0 : [5, -5, 5] }}
                transition={{ duration: 5, repeat: snappedFragments.includes(2) ? 0 : Infinity }}
                className={`p-3 rounded border cursor-pointer transition-colors ${
                  snappedFragments.includes(2) ? 'bg-purple-100 border-purple-400 text-purple-900 font-bold' : 'bg-slate-100 border-black/10 text-[#ff5a36]'
                }`}
              >
                UN-INDEXED NULL ROW #402
              </motion.div>

              <motion.div
                onClick={() => handleSnapFragment(3)}
                animate={{ x: snappedFragments.includes(3) ? 0 : [-5, 5, -5], y: snappedFragments.includes(3) ? 0 : [10, -10, 10] }}
                transition={{ duration: 3, repeat: snappedFragments.includes(3) ? 0 : Infinity }}
                className={`p-3 rounded border cursor-pointer transition-colors ${
                  snappedFragments.includes(3) ? 'bg-purple-100 border-purple-400 text-purple-900 font-bold' : 'bg-slate-100 border-black/10'
                }`}
              >
                SELECT * FROM orders WHERE region='Goa'...
              </motion.div>

              <div className="absolute bottom-4 text-[10px] text-purple-600 font-bold uppercase tracking-widest">
                👉 TAP INDIVIDUAL FRAGMENTS OR CLICK "PULL FRAGMENTS TOGETHER"
              </div>
            </div>
          ) : (
            /* CLEAN SYNTHESIZED PRODUCT RESULT */
            <div className="bg-[#1a1a1e] text-white p-6 rounded-lg font-mono text-xs space-y-4 shadow-2xl">
              <div className="flex justify-between items-center border-b border-white/10 pb-2 text-purple-400 font-bold">
                <span>CONVERSATIONAL PROMPT SYNTHESIS</span>
                <span className="bg-purple-900/50 px-2 py-0.5 rounded text-[10px] text-purple-300">AST SANITIZED // READ ONLY</span>
              </div>

              <div className="bg-white/10 p-3 rounded text-slate-200 font-sans">
                "Show top 5 revenue products in Goa during Q2"
              </div>

              <div className="bg-black/60 p-4 rounded border border-white/10 text-emerald-400 overflow-x-auto">
                WITH target AS (SELECT name, SUM(total) AS rev FROM orders WHERE region='Goa' GROUP BY 1) SELECT * FROM target ORDER BY rev DESC LIMIT 5;
              </div>

              <div className="p-3 bg-purple-950/50 border border-purple-500/40 rounded text-purple-200 text-xs font-sans flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400 shrink-0" />
                <span>96.2% SQL accuracy score. Replaces manual analyst dashboard creation.</span>
              </div>
            </div>
          )}
        </div>

        {/* Outcome Metric */}
        <div className="bg-[#f9f8f6] p-6 rounded-xl border border-black/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs mb-8">
          <div>
            <span className="text-slate-500 uppercase block text-[10px]">VERIFIED ACCURACY</span>
            <span className="text-3xl font-bold font-display text-purple-600">96.2% SQL Precision</span>
          </div>
          <div className="text-slate-600 font-sans max-w-md text-xs">
            Read-only schema replicas with time-bounded AST execution guardrails to prevent database locks.
          </div>
        </div>

        {/* Progressive Disclosure Toggle */}
        <button
          onClick={() => {
            soundFx.playClick();
            setShowDepth(!showDepth);
          }}
          className="text-xs font-mono text-slate-500 hover:text-[#1a1a1e] transition-colors flex items-center gap-1.5 cursor-pointer"
        >
          <Layers className="w-3.5 h-3.5 text-[#00c2ff]" />
          <span>{showDepth ? 'Hide Progressive Disclosure Layers' : 'Inspect Design & Technical Layers'}</span>
        </button>

        {/* Progressive Disclosure Layers */}
        <AnimatePresence>
          {showDepth && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mt-4 space-y-4 font-mono text-xs"
            >
              {/* SECOND LAYER: Design Decisions */}
              <div className="bg-[#f9f8f6] border border-black/10 p-6 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-purple-600 font-bold">
                  <Compass className="w-4 h-4" /> SECOND LAYER // DESIGN DECISIONS & REJECTED APPROACHES
                </div>
                <p className="text-slate-700 font-sans leading-relaxed text-xs">
                  • <strong>Rejected Approach:</strong> Drag-and-drop chart builders with dozens of dropdowns. Business executives gave up and emailed data analysts instead.<br />
                  • <strong>Chosen Solution:</strong> Single natural-language prompt bar backed by AST validation to ensure queries are strictly read-only.
                </p>
              </div>

              {/* THIRD LAYER: Engineering & AST Validation */}
              <div className="bg-[#1a1a1e] text-white p-6 rounded-xl space-y-3">
                <div className="flex items-center gap-2 text-[#00c2ff] font-bold">
                  <Code2 className="w-4 h-4" /> THIRD LAYER // AST GUARDRAIL & SANITIZATION PIPELINE
                </div>
                <pre className="text-xs text-slate-300 overflow-x-auto leading-relaxed">
{`export function sanitizeSqlAst(ast: ASTNode): boolean {
  if (ast.type !== 'SelectStatement') return false;
  if (ast.hasMutations || ast.hasFullScan) return false;
  return true;
}`}
                </pre>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

