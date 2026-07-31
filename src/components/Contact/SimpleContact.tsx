import React from 'react';
import { CONTACT_DATA } from '../../data/personalData';
import { Mail } from 'lucide-react';
import { InteractiveButton } from '../ui/InteractiveButton';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

export const SimpleContact: React.FC = () => {
  return (
    <section id="contact" className="section-shell px-6 lg:px-8 py-20 bg-[#F7F5EF]">
      <div className="container-shell overflow-hidden rounded-[2.5rem] border border-black/10 bg-white p-8 shadow-xl sm:p-12 lg:p-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.35em] text-[#087f78]">
              CONTACT // LET'S BUILD SOMETHING USEFUL
            </span>
            <h2 className="font-serif text-4xl font-semibold leading-[0.95] tracking-[-0.03em] text-[#151515] sm:text-5xl lg:text-6xl">
              {CONTACT_DATA.headline}
            </h2>
            <p className="text-base leading-8 text-slate-700">
              Open for product engineering, systems work, and technical collaboration.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 lg:justify-end">
            <InteractiveButton href={`mailto:${CONTACT_DATA.email}`} variant="primary">
              <Mail className="h-4 w-4" />
              Email Atreya
            </InteractiveButton>
            <InteractiveButton href={CONTACT_DATA.linkedin} target="_blank" rel="noopener noreferrer" variant="secondary">
              <LinkedinIcon className="h-4 w-4" />
              LinkedIn
            </InteractiveButton>
            <InteractiveButton href={CONTACT_DATA.github} target="_blank" rel="noopener noreferrer" variant="secondary">
              <GithubIcon className="h-4 w-4" />
              GitHub
            </InteractiveButton>
          </div>
        </div>
      </div>
    </section>
  );
};
