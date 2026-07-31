import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Globe, Layers3, Sparkles, Workflow } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const iconMap = [
  { icon: Cpu, label: 'systems' },
  { icon: Globe, label: 'web' },
  { icon: Layers3, label: 'product' },
  { icon: Sparkles, label: 'ai' },
  { icon: Workflow, label: 'ops' },
];

export const BuildingWithImpact: React.FC = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section className="section-shell px-6 lg:px-8">
      <div className="container-shell overflow-hidden rounded-[2.5rem] border border-black/10 bg-[#111113] p-8 text-white shadow-[0_24px_80px_rgba(21,21,21,0.16)] sm:p-10 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="space-y-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#32d6c5]">BUILDING WITH IMPACT</p>
            <h2 className="text-4xl font-semibold leading-[0.92] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              Building work that is useful, legible and durable.
            </h2>
            <p className="max-w-xl text-base leading-8 text-white/75">
              The work moves between product surfaces, infrastructure thinking, AI-assisted workflows and the small details that make software feel calm rather than noisy.
            </p>
          </div>

          <div className="relative min-h-[320px] rounded-[2rem] border border-white/10 bg-[#f7f5ef] p-6 text-[#111113]">
            <div className="absolute inset-0 opacity-15 [background-image:radial-gradient(circle_at_20%_20%,_#32d6c5_0_14%,_transparent_14%),radial-gradient(circle_at_80%_0%,_#f05a3c_0_16%,_transparent_16%)]" />
            <div className="absolute left-6 top-6 text-[2.4rem] font-semibold uppercase tracking-[0.25em] text-[#111113]/70 sm:text-[3rem] lg:text-[3.6rem]">
              BUILDING
            </div>
            <div className="absolute bottom-6 left-6 text-[2.4rem] font-semibold uppercase tracking-[0.25em] text-[#111113]/70 sm:text-[3rem] lg:text-[3.6rem]">
              WITH
            </div>
            <div className="absolute bottom-20 right-6 text-[2.4rem] font-semibold uppercase tracking-[0.25em] text-[#111113]/70 sm:text-[3rem] lg:text-[3.6rem]">
              IMPACT
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative h-40 w-40 rounded-full border border-black/10 bg-white/70 backdrop-blur sm:h-48 sm:w-48">
                <svg viewBox="0 0 220 220" className="h-full w-full">
                  <path id="impact-path" d="M110 15C160 15 200 55 200 110C200 165 160 205 110 205C60 205 20 165 20 110C20 55 60 15 110 15" fill="none" stroke="transparent" />
                  {iconMap.map((item, index) => {
                    const angle = (index / iconMap.length) * Math.PI * 2 - Math.PI / 2;
                    const x = 110 + Math.cos(angle) * 72;
                    const y = 110 + Math.sin(angle) * 72;
                    const Icon = item.icon;
                    return (
                      <g key={item.label}>
                        <circle cx={x} cy={y} r="18" fill="#111113" />
                        <foreignObject x={x - 12} y={y - 12} width="24" height="24">
                          <div className="flex h-full w-full items-center justify-center text-white">
                            <Icon className="h-4 w-4" />
                          </div>
                        </foreignObject>
                      </g>
                    );
                  })}
                </svg>
                <motion.div
                  animate={reducedMotion ? undefined : { rotate: 360 }}
                  transition={reducedMotion ? undefined : { duration: 26, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0"
                >
                  <svg viewBox="0 0 220 220" className="h-full w-full">
                    <path d="M110 15C160 15 200 55 200 110C200 165 160 205 110 205C60 205 20 165 20 110C20 55 60 15 110 15" fill="none" stroke="#32d6c5" strokeWidth="1.5" strokeDasharray="4 6" />
                  </svg>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
