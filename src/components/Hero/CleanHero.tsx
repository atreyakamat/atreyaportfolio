import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { HERO_DATA } from '../../data/personalData';
import { ArrowDown, MapPin } from 'lucide-react';
import { InteractiveButton } from '../ui/InteractiveButton';

export const CleanHero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const grainStyle = useMemo(
    () => ({
      backgroundImage: `radial-gradient(circle at 20% 20%, rgba(50,214,197,0.18), transparent 24%), radial-gradient(circle at 80% 0%, rgba(240,90,60,0.15), transparent 24%), repeating-linear-gradient(0deg, rgba(255,255,255,0.22) 0 1px, transparent 1px 4px)`,
    }),
    [],
  );

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
    <section className="relative min-h-[88vh] overflow-hidden px-6 py-24 sm:py-28 lg:px-8">
      <div className="container-shell relative z-10 flex min-h-[80vh] flex-col justify-between">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#32d6c5]/30 bg-[#32d6c5]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#0d9488]">
              <span className="h-2 w-2 rounded-full bg-[#0d9488]" />
              BUILD + PERSONAL
            </div>

            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-[0.35em] text-slate-500">Atreya Kamat</p>
              <h1 className="font-serif text-5xl font-semibold leading-[0.9] tracking-[-0.03em] text-[#111113] sm:text-6xl lg:text-8xl">
                I make useful things happen.
              </h1>
              <p className="max-w-xl text-lg leading-8 text-slate-700 sm:text-xl">
                Software engineer and product builder creating thoughtful digital products, systems and interfaces.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <InteractiveButton onClick={handleScrollToWork} icon={<ArrowDown className="h-4 w-4" />}>
                Explore projects
              </InteractiveButton>
              <InteractiveButton href="/resume" variant="secondary">
                View resume
              </InteractiveButton>
            </div>

            <div className="flex flex-wrap items-center gap-3 border-t border-black/10 pt-6 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1.5">
                <MapPin className="h-4 w-4 text-[#0d9488]" />
                {HERO_DATA.location}
              </span>
              <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1.5">Product engineering · systems thinking · design-conscious build</span>
            </div>
          </div>

          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
            className="relative mx-auto flex w-full max-w-[430px] items-center justify-center"
          >
            <div className="absolute inset-6 rounded-[2.5rem] bg-[radial-gradient(circle_at_20%_20%,_rgba(50,214,197,0.22),_transparent_34%),radial-gradient(circle_at_80%_0%,_rgba(240,90,60,0.16),_transparent_34%)] blur-3xl" />
            <motion.div
              animate={{ x: mousePos.x, y: mousePos.y, rotate: mousePos.x * 0.08 }}
              transition={{ type: 'spring', stiffness: 180, damping: 24 }}
              className="relative w-full overflow-hidden rounded-[2.1rem] border border-black/10 bg-white shadow-[0_35px_80px_rgba(21,21,21,0.08)]"
            >
              <div className="absolute inset-0 opacity-80" style={grainStyle} />
              <div className="absolute left-5 top-5 z-10 rounded-full border border-black/10 bg-white/75 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-600 backdrop-blur">
                Goa · 2026
              </div>
              <img
                src={HERO_DATA.portraitUrl}
                alt="Atreya Kamat"
                className="relative aspect-[4/5] w-full object-cover object-center"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-[1.2rem] border border-black/5 bg-white/85 px-4 py-3 backdrop-blur-sm">
                <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
                  <span>Atreya Kamat</span>
                  <span className="text-[#0d9488]">Available for product work</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
