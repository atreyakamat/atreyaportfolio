import React from 'react';
import { CONTACT_DATA } from '../../data/personalData';
import { ArrowUpRight, Mail, Globe } from 'lucide-react';

export const SimpleContact: React.FC = () => {
  return (
    <section id="contact" className="section-shell px-6 lg:px-8">
      <div className="container-shell overflow-hidden rounded-[2rem] border border-black/10 bg-[#ffffff] p-8 shadow-[0_30px_90px_rgba(21,21,21,0.08)] sm:p-12 lg:p-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div className="max-w-2xl space-y-5">
            <div className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#0d9488]">
              CONTACT // LET'S BUILD SOMETHING USEFUL
            </div>
            <h2 className="font-serif text-4xl font-semibold leading-[0.95] tracking-[-0.02em] text-[#111113] sm:text-5xl lg:text-6xl">
              {CONTACT_DATA.headline}
            </h2>
            <p className="max-w-xl text-lg leading-8 text-slate-700">
              Open for product engineering, thoughtful technical collaboration and carefully scoped product work.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <a href={`mailto:${CONTACT_DATA.email}`} className="group flex items-center justify-between rounded-2xl border border-black/10 bg-[#fafaf8] p-4 transition-all hover:-translate-y-0.5 hover:border-[#32d6c5] hover:bg-white">
              <span className="flex items-center gap-3 text-sm font-medium text-[#111113]">
                <Mail className="h-4 w-4 text-[#0d9488]" />
                Email
              </span>
              <ArrowUpRight className="h-4 w-4 text-slate-500 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a href={CONTACT_DATA.linkedin} target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-2xl border border-black/10 bg-[#fafaf8] p-4 transition-all hover:-translate-y-0.5 hover:border-[#32d6c5] hover:bg-white">
              <span className="flex items-center gap-3 text-sm font-medium text-[#111113]">
                <Globe className="h-4 w-4 text-[#0d9488]" />
                LinkedIn
              </span>
              <ArrowUpRight className="h-4 w-4 text-slate-500 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a href={CONTACT_DATA.github} target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-2xl border border-black/10 bg-[#fafaf8] p-4 transition-all hover:-translate-y-0.5 hover:border-[#32d6c5] hover:bg-white">
              <span className="flex items-center gap-3 text-sm font-medium text-[#111113]">
                <Globe className="h-4 w-4 text-[#0d9488]" />
                GitHub
              </span>
              <ArrowUpRight className="h-4 w-4 text-slate-500 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a href={CONTACT_DATA.instagram} target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-2xl border border-black/10 bg-[#fafaf8] p-4 transition-all hover:-translate-y-0.5 hover:border-[#32d6c5] hover:bg-white">
              <span className="flex items-center gap-3 text-sm font-medium text-[#111113]">
                <Globe className="h-4 w-4 text-[#0d9488]" />
                Instagram
              </span>
              <ArrowUpRight className="h-4 w-4 text-slate-500 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
