import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HERO_DATA } from '../../data/productExperienceData';
import { Sparkles, Compass, CheckCircle2, Layers } from 'lucide-react';
import { soundFx } from '../OsShell/AudioSystem';

export const HeroProductObject: React.FC = () => {
  const [activeStageIdx, setActiveStageIdx] = useState<number>(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isPulseActive, setIsPulseActive] = useState<boolean>(false);
  const [showTechDepth, setShowTechDepth] = useState<boolean>(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 12;
    const y = (e.clientY - rect.top - rect.height / 2) / 12;
    setMousePos({ x, y });
  };

  const handleStageClick = (idx: number) => {
    soundFx.playBeep(320 + idx * 120, 'sine', 0.06, 0.04);
    setActiveStageIdx(idx);
  };

  // Undocumented playful interaction: Tangible Synthesis Pulse
  const handleObjectDoubleClick = () => {
    soundFx.playSuccess();
    setIsPulseActive(true);
    const nextIdx = (activeStageIdx + 1) % HERO_DATA.stages.length;
    setActiveStageIdx(nextIdx);
    setTimeout(() => setIsPulseActive(false), 800);
  };

  return (
    <section className="min-h-screen pt-24 pb-16 flex flex-col justify-between px-6 max-w-7xl mx-auto select-none relative font-sans">
      
      {/* Top Tag & Status */}
      <div className="flex justify-between items-center text-xs font-mono text-slate-500">
        <span className="flex items-center gap-1.5 text-[#ff5a36] font-bold">
          <Sparkles className="w-3.5 h-3.5" /> PRODUCT CREATIVE DIRECTION
        </span>
        <span className="bg-[#ffffff] px-3 py-1 rounded-full border border-black/10 text-slate-700 shadow-xs">
          GOA, INDIA // 2026 WORKS
        </span>
      </div>

      {/* Main Hero Container */}
      <div className="my-auto py-8 flex flex-col items-center text-center">
        
        {/* Interactive 3D Tangible Object */}
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
          onDoubleClick={handleObjectDoubleClick}
          className="w-72 h-72 sm:w-88 sm:h-88 mb-10 relative flex items-center justify-center cursor-grab active:cursor-grabbing group"
          style={{
            transform: `perspective(900px) rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)`,
            transition: 'transform 0.15s ease-out'
          }}
          title="Double-tap to trigger tangible synthesis"
        >
          {/* Ambient Lighting Glow */}
          <div className={`absolute inset-0 rounded-full blur-3xl transition-opacity duration-700 ${
            activeStageIdx === 0 ? 'bg-[#ff5a36]/20 opacity-60' :
            activeStageIdx === 1 ? 'bg-[#ffaa00]/20 opacity-70' :
            activeStageIdx === 2 ? 'bg-[#00c2ff]/25 opacity-80' :
            'bg-[#1a1a1e]/20 opacity-90'
          }`} />

          {/* Undocumented Pulse Burst Ring */}
          {isPulseActive && (
            <motion.div
              initial={{ scale: 0.6, opacity: 1 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="absolute inset-0 rounded-full border-2 border-[#ff5a36] pointer-events-none"
            />
          )}

          {/* STAGE 01: IDEA (Sketch Mesh / Wireframe) */}
          <motion.div
            animate={{
              scale: activeStageIdx === 0 ? 1.15 : 0.82,
              opacity: activeStageIdx === 0 ? 1 : 0.25,
              rotate: activeStageIdx === 0 ? 0 : -30,
              z: activeStageIdx === 0 ? 40 : 0
            }}
            transition={{ type: 'spring', stiffness: 280, damping: 22 }}
            className="absolute w-52 h-52 rounded-full border-2 border-dashed border-[#1a1a1e] flex flex-col items-center justify-center p-4 bg-[#ffffff]/60 backdrop-blur-sm shadow-md"
          >
            <span className="font-mono text-xs font-bold text-[#1a1a1e] tracking-wider">01 // IDEA</span>
            <span className="text-[10px] font-sans text-slate-500 mt-1">Raw Concept & Friction</span>
          </motion.div>

          {/* STAGE 02: FORM (Geometric Frosted Solid) */}
          <motion.div
            animate={{
              scale: activeStageIdx === 1 ? 1.18 : 0.85,
              opacity: activeStageIdx === 1 ? 1 : 0.35,
              rotate: activeStageIdx === 1 ? 45 : 15,
              z: activeStageIdx === 1 ? 40 : 0
            }}
            transition={{ type: 'spring', stiffness: 280, damping: 22 }}
            className="absolute w-48 h-48 border-2 border-[#1a1a1e] bg-[#f0eeeb]/90 backdrop-blur-md shadow-xl flex flex-col items-center justify-center rounded-2xl"
          >
            <span className="font-mono text-xs font-bold text-[#1a1a1e] tracking-wider">02 // FORM</span>
            <span className="text-[10px] font-sans text-slate-600 mt-1">Architecture & Wireframes</span>
          </motion.div>

          {/* STAGE 03: INTERACTION (Tactile Translucent Ring) */}
          <motion.div
            animate={{
              scale: activeStageIdx === 2 ? 1.22 : 0.9,
              opacity: activeStageIdx === 2 ? 1 : 0.45,
              rotate: activeStageIdx === 2 ? 90 : 35,
              z: activeStageIdx === 2 ? 40 : 0
            }}
            transition={{ type: 'spring', stiffness: 280, damping: 22 }}
            className="absolute w-56 h-56 rounded-3xl border-2 border-[#00c2ff] bg-[#00c2ff]/15 backdrop-blur-lg shadow-2xl flex flex-col items-center justify-center text-center p-4"
          >
            <span className="font-mono text-xs font-bold text-[#00c2ff] tracking-wider">03 // INTERACTION</span>
            <span className="text-[10px] font-sans text-slate-700 mt-1">Micro-Animations & Physics</span>
          </motion.div>

          {/* STAGE 04: SHIPPED PRODUCT (Polished Obsidian Material) */}
          <motion.div
            animate={{
              scale: activeStageIdx === 3 ? 1.25 : 0.95,
              opacity: activeStageIdx === 3 ? 1 : 0.7,
              rotate: activeStageIdx === 3 ? 0 : -15,
              z: activeStageIdx === 3 ? 40 : 0
            }}
            transition={{ type: 'spring', stiffness: 280, damping: 22 }}
            className="absolute w-44 h-44 rounded-2xl bg-[#1a1a1e] text-white shadow-2xl flex flex-col items-center justify-center p-4 text-center border border-white/20"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 mb-2 shadow-[0_0_8px_#34d399]" />
            <span className="font-mono text-xs font-bold text-[#00c2ff] tracking-widest block">04 // PRODUCT</span>
            <span className="text-[10px] font-sans text-slate-300 mt-0.5">Production Reality</span>
          </motion.div>
        </div>

        {/* Locked Hero Statement */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold font-display text-[#1a1a1e] tracking-tight leading-none mb-4">
          I make ideas tangible.
        </h1>

        <p className="text-xs sm:text-sm font-mono text-slate-500 tracking-widest uppercase mb-8">
          Product × Interaction × Engineering
        </p>

        {/* Stage Stepper Buttons (IDEA -> FORM -> INTERACTION -> PRODUCT) */}
        <div className="flex flex-wrap justify-center gap-2 font-mono text-xs mb-6">
          {HERO_DATA.stages.map((stg, idx) => {
            const isActive = activeStageIdx === idx;
            return (
              <button
                key={idx}
                onClick={() => handleStageClick(idx)}
                className={`px-4 py-2 rounded-full border transition-all cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#1a1a1e] text-white font-bold border-[#1a1a1e] shadow-lg scale-105'
                    : 'bg-[#ffffff] text-slate-600 border-black/10 hover:border-black/30'
                }`}
              >
                <span className="text-[10px] text-[#ff5a36] font-bold">0{idx + 1}.</span>
                <span>{stg.label}</span>
              </button>
            );
          })}
        </div>

        {/* Progressive Disclosure: First Layer (Experience) vs Second/Third Layer */}
        <div className="max-w-md bg-[#ffffff] border border-black/10 p-4 rounded-xl shadow-xs text-center font-sans">
          <p className="text-xs text-slate-700 leading-relaxed font-medium">
            {HERO_DATA.stages[activeStageIdx].description}
          </p>

          <button
            onClick={() => {
              soundFx.playClick();
              setShowTechDepth(!showTechDepth);
            }}
            className="mt-3 text-[11px] font-mono text-slate-500 hover:text-[#1a1a1e] transition-colors inline-flex items-center gap-1 cursor-pointer"
          >
            <Layers className="w-3.5 h-3.5 text-[#00c2ff]" />
            <span>{showTechDepth ? 'Hide Design & Technical Decisions' : 'Inspect Stage Decisions'}</span>
          </button>

          <AnimatePresence>
            {showTechDepth && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="mt-3 pt-3 border-t border-black/10 text-left font-mono text-[11px] space-y-2 text-slate-800"
              >
                <div className="flex items-start gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-[#ff5a36] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#1a1a1e] block">Second Layer (Design Iteration):</span>
                    <span className="text-slate-600 font-sans">Tested 4 morphing geometry variants; chose physical perspective depth over 2D SVG canvas.</span>
                  </div>
                </div>

                <div className="flex items-start gap-1.5 pt-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00c2ff] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#1a1a1e] block">Third Layer (Engineering Invariant):</span>
                    <span className="text-slate-600 font-sans">CSS perspective hardware-accelerated transform matrix without WebGL canvas overhead.</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* Footer hint */}
      <div className="flex justify-between items-center text-xs font-mono text-slate-400 border-t border-black/5 pt-4">
        <span>MOVE CURSOR TO TILT OBJECT // DOUBLE-TAP TO SYNTHESIZE</span>
        <span>SCROLL TO EXPLORE WORLDS ↓</span>
      </div>

    </section>
  );
};

