import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HERO_DATA } from '../../data/personalData';
import { ArrowDown, MapPin, FileText } from 'lucide-react';
import { InteractiveButton } from '../ui/InteractiveButton';
import { GrainientBackground } from '../ui/GrainientBackground';
import { Backlight } from '../ui/Backlight';

export const CleanHero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 32;
    const y = (e.clientY - rect.top - rect.height / 2) / 32;
    setMousePos({ x, y });
  };

  const handleScrollToWork = () => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] overflow-hidden px-6 py-20 sm:py-28 lg:px-8 bg-[#F7F5EF]">
      {/* Atmospheric ReactBits Grainient Canvas Background */}
      <GrainientBackground />

      <div className="container-shell relative z-10 flex min-h-[75vh] flex-col justify-between">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Hero Content Column */}
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#32d6c5]/40 bg-[#32d6c5]/15 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#087f78]">
              <span className="h-2 w-2 rounded-full bg-[#32d6c5] animate-pulse" />
              BUILD + PERSONAL
            </div>

            <div className="space-y-4">
              <p className="text-xs font-mono font-semibold uppercase tracking-[0.35em] text-slate-500">
                Atreya Kamat
              </p>
              <h1 className="font-serif text-5xl font-semibold leading-[0.92] tracking-[-0.03em] text-[#151515] sm:text-6xl lg:text-8xl">
                I make useful things happen.
              </h1>
              <p className="max-w-xl text-base leading-8 text-slate-700 sm:text-lg">
                Software engineer and product builder creating thoughtful digital products, systems and interfaces.
              </p>
            </div>

            {/* Interactive Primary CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <InteractiveButton onClick={handleScrollToWork} icon={<ArrowDown className="h-4 w-4" />}>
                Explore Projects
              </InteractiveButton>
              <InteractiveButton href="/resume" variant="secondary" icon={<FileText className="h-4 w-4" />}>
                View Resume
              </InteractiveButton>
            </div>

            {/* Location & Credibility Metadata */}
            <div className="flex flex-wrap items-center gap-3 border-t border-black/10 pt-6 text-xs font-medium text-slate-600">
              <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3.5 py-1.5 shadow-sm">
                <MapPin className="h-4 w-4 text-[#087f78]" />
                {HERO_DATA.location}
              </span>
              <span className="rounded-full border border-black/10 bg-white/80 px-3.5 py-1.5 shadow-sm">
                Product engineering · systems thinking · software craft
              </span>
            </div>
          </div>

          {/* Hero Portrait with Magic UI Backlight */}
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
            className="relative mx-auto flex w-full max-w-[420px] items-center justify-center"
          >
            <Backlight color="rgba(50, 214, 197, 0.35)" intensity={35} className="w-full">
              <motion.div
                animate={{ x: mousePos.x, y: mousePos.y, rotate: mousePos.x * 0.06 }}
                transition={{ type: 'spring', stiffness: 180, damping: 24 }}
                className="relative w-full overflow-hidden rounded-[2.2rem] border border-black/10 bg-white shadow-[0_30px_90px_rgba(21,21,21,0.09)]"
              >
                <div className="absolute left-4 top-4 z-20 rounded-full border border-black/10 bg-white/80 px-3 py-1.5 text-[10px] font-mono font-semibold uppercase tracking-[0.25em] text-slate-700 backdrop-blur">
                  Goa · 2026
                </div>
                <img
                  src={HERO_DATA.portraitUrl}
                  alt="Atreya Kamat"
                  className="relative aspect-[4/5] w-full object-cover object-center"
                />
                <div className="absolute bottom-4 left-4 right-4 z-20 rounded-2xl border border-black/10 bg-white/90 p-3.5 backdrop-blur-md shadow-sm">
                  <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-slate-700">
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
