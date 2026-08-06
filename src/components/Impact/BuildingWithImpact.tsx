import React from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { IMPACT_SECTION } from '../../data/personalData';

export const BuildingWithImpact: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const techLabels = IMPACT_SECTION.technologies?.map((tech) => tech.label).filter(Boolean) ?? [];
  const marqueeText = techLabels.join(' • ');
  const repeatedText = Array(IMPACT_SECTION.marqueeRepeat ?? 2)
    .fill(`• ${marqueeText}`)
    .join(' ');

  return (
    <section className="section-shell px-6 lg:px-8 py-24 bg-[#F7F5EF]">
      <div className="container-shell relative overflow-hidden rounded-[2.5rem] border border-black/10 bg-[#151515] p-8 text-white shadow-2xl sm:p-12 lg:p-16">
        <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="space-y-6 max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#32d6c5]">
              {IMPACT_SECTION.label}
            </span>
            <h2 className="font-serif text-4xl font-semibold leading-[0.95] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
              {IMPACT_SECTION.title}
            </h2>
            <p className="text-base leading-8 text-white/75">
              {IMPACT_SECTION.description}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {IMPACT_SECTION.tags?.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative min-h-[380px] w-full overflow-hidden rounded-[2rem] border border-white/15 bg-[#F7F5EF] p-8 text-[#151515]">
            <div className="absolute inset-0 flex flex-col justify-between p-6 opacity-20 select-none pointer-events-none font-serif font-black uppercase leading-none tracking-tighter text-[#151515]">
              <span className="text-5xl sm:text-7xl lg:text-8xl">BUILDING</span>
              <span className="text-5xl sm:text-7xl lg:text-8xl text-right">WITH</span>
              <span className="text-5xl sm:text-7xl lg:text-8xl text-center text-[#087f78]">IMPACT</span>
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 500 350" className="h-full w-full max-w-lg" aria-hidden="true">
                <path
                  id="marquee-svg-path"
                  d="M 50,175 C 100,50 200,50 250,175 C 300,300 400,300 450,175 C 400,50 300,50 250,175 C 200,300 100,300 50,175 Z"
                  fill="none"
                  stroke="#32d6c5"
                  strokeWidth="2"
                  strokeDasharray="6 8"
                  opacity="0.6"
                />
                <text className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] fill-[#151515]">
                  <textPath href="#marquee-svg-path" startOffset="0%">
                    {reducedMotion ? repeatedText : null}
                    {!reducedMotion && (
                      <animate
                        attributeName="startOffset"
                        from="0%"
                        to="100%"
                        dur={`${IMPACT_SECTION.marqueeDuration ?? 20}s`}
                        repeatCount="indefinite"
                      />
                    )}
                    {repeatedText}
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
