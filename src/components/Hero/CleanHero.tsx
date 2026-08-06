import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HERO_DATA } from '../../data/personalData';
import { ArrowDown, MapPin, FileText } from 'lucide-react';
import { InteractiveButton } from '../ui/InteractiveButton';
import { GrainientBackground } from '../ui/GrainientBackground';
import { Backlight } from '../ui/Backlight';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const CleanHero: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 28;
    const y = (e.clientY - rect.top - rect.height / 2) / 28;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    if (reducedMotion) return;
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section
      className="relative overflow-hidden bg-[#F7F5EF] px-6 py-20 sm:py-28 lg:px-8"
      aria-labelledby="hero-heading"
    >
      <GrainientBackground />

      <div className="container-shell relative z-10 min-h-[calc(100vh-5rem)] flex flex-col justify-center">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <div className="max-w-2xl space-y-8">
            <div className="inline-flex flex-wrap items-center gap-3 rounded-full border border-[#32d6c5]/40 bg-[#32d6c5]/15 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#087f78]">
              <span className="h-2 w-2 rounded-full bg-[#32d6c5] animate-pulse" aria-hidden="true" />
              BUILD + PERSONAL
            </div>

            <div className="space-y-5">
              <p className="text-xs font-mono uppercase tracking-[0.35em] text-slate-500">
                {HERO_DATA.greeting}
              </p>
              <h1 id="hero-heading" className="font-serif text-5xl font-semibold leading-[0.92] tracking-[-0.03em] text-[#151515] sm:text-6xl lg:text-7xl xl:text-8xl">
                {HERO_DATA.headline}
              </h1>
              <p className="max-w-xl text-base leading-8 text-slate-700 sm:text-lg">
                {HERO_DATA.subtext}
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <InteractiveButton href="#work" icon={<ArrowDown className="h-4 w-4" />} className="w-full sm:w-auto">
                Explore Projects
              </InteractiveButton>
              <InteractiveButton href="/resume" variant="secondary" icon={<FileText className="h-4 w-4" />} className="w-full sm:w-auto">
                View Resume
              </InteractiveButton>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 text-sm text-slate-600">
              <div className="flex items-center gap-3 rounded-full border border-black/10 bg-white/80 px-4 py-3 shadow-sm">
                <MapPin className="h-4 w-4 text-[#087f78]" aria-hidden="true" />
                <span>{HERO_DATA.location}</span>
              </div>
              <div className="rounded-full border border-black/10 bg-white/80 px-4 py-3 shadow-sm">
                Product engineering · systems thinking · software craft
              </div>
            </div>
          </div>

          <div
            className="relative mx-auto w-full max-w-[420px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <Backlight color="rgba(50, 214, 197, 0.28)" intensity={reducedMotion ? 20 : 35} className="w-full">
              <motion.div
                animate={reducedMotion ? { x: 0, y: 0, rotate: 0 } : { x: mousePos.x, y: mousePos.y, rotate: mousePos.x * 0.05 }}
                transition={{ type: 'spring', stiffness: 160, damping: 22 }}
                className="relative overflow-hidden rounded-[2.2rem] border border-black/10 bg-white shadow-[0_30px_90px_rgba(21,21,21,0.09)]"
              >
                <div className="absolute -left-6 top-6 z-20 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-[10px] font-mono font-semibold uppercase tracking-[0.28em] text-slate-700 backdrop-blur">
                  Goa · 2026
                </div>
                <img
                  src={HERO_DATA.portraitUrl}
                  alt="Portrait of Atreya Kamat"
                  className="aspect-[4/5] w-full object-cover object-center"
                />
                <div className="absolute inset-x-4 bottom-4 z-20 rounded-3xl border border-black/10 bg-white/90 p-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-700 backdrop-blur">
                  <div className="flex items-center justify-between">
                    <span>Atreya Kamat</span>
                    <span className="text-[#087f78]">Available for product work</span>
                  </div>
                </div>
              </motion.div>
            </Backlight>
          </div>
        </div>
      </div>
    </section>
  );
};
