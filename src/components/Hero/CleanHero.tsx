import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HERO_DATA } from '../../data/personalData';
import { ArrowDown, MapPin } from 'lucide-react';

export const CleanHero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 30;
    const y = (e.clientY - rect.top - rect.height / 2) / 30;
    setMousePos({ x, y });
  };

  const handleScrollToWork = () => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen pt-28 pb-16 px-6 max-w-7xl mx-auto flex flex-col justify-between select-none relative font-sans">
      
      <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* LEFT COLUMN: Clean Identity Card Intro */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#0d9488] bg-[#0d9488]/10 px-3 py-1 rounded-full border border-[#0d9488]/20">
            <span className="w-2 h-2 rounded-full bg-[#0d9488]" />
            <span>PRIMARY DIGITAL IDENTITY CARD</span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold font-display text-[#111113] tracking-tight leading-[0.95]">
            Hi, I'm Atreya.
          </h1>

          <p className="text-2xl sm:text-4xl font-display font-medium text-[#111113]/90 leading-tight">
            I build, design,<br className="hidden sm:inline" />
            teach and experiment.
          </p>

          <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-sans">
            Engineer by profession. Creative by instinct. Curious about almost everything.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-2 font-mono text-xs">
            <span className="flex items-center gap-1.5 text-slate-500">
              <MapPin className="w-4 h-4 text-[#0d9488]" /> {HERO_DATA.location}
            </span>

            <button
              onClick={handleScrollToWork}
              className="px-6 py-3.5 bg-[#111113] text-white font-sans font-medium text-xs rounded-full hover:bg-[#0d9488] transition-all flex items-center gap-2 cursor-pointer shadow-md group"
            >
              <span>Explore my work</span>
              <ArrowDown className="w-4 h-4 text-[#2dd4bf] group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

        {/* RIGHT COLUMN: Large Editorial Portrait Photograph */}
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
          className="lg:col-span-5 relative flex justify-center items-center"
        >
          {/* Atmospheric Soft Turquoise Aura Glow */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-[#0d9488]/30 via-[#06b6d4]/20 to-transparent rounded-3xl blur-3xl opacity-80 pointer-events-none" />

          {/* Portrait Container with Parallax Tilt */}
          <motion.div
            animate={{
              x: mousePos.x,
              y: mousePos.y
            }}
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            className="relative w-full max-w-md rounded-2xl overflow-hidden border border-black/10 shadow-2xl bg-[#ffffff]"
          >
            <img
              src={HERO_DATA.portraitUrl}
              alt="Atreya Kamat"
              className="w-full h-auto aspect-[4/5] object-cover object-center filter grayscale-[10%] contrast-[105%] hover:grayscale-0 transition-all duration-700"
            />
            
            {/* Subtle Overlay Label */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-xl border border-black/5 font-mono text-[11px] flex justify-between items-center text-[#111113]">
              <span className="font-bold">ATREYA KAMAT</span>
              <span className="text-[#0d9488]">GOA // 2026</span>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Hero Footer Hint */}
      <div className="pt-8 border-t border-black/5 flex justify-between items-center text-xs font-mono text-slate-400">
        <span>BUILD ✦ CREATE ✦ TEACH ✦ SPEAK ✦ EXPERIMENT</span>
        <span>SCROLL FOR OVERVIEW ↓</span>
      </div>

    </section>
  );
};
