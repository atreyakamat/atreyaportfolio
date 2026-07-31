import React from 'react';
import { ABOUT_DATA } from '../../data/personalData';

export const HumanAbout: React.FC = () => {
  return (
    <section id="about" className="section-shell px-6 lg:px-8">
      <div className="container-shell grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div className="order-2 lg:order-1">
          <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_24px_80px_rgba(21,21,21,0.06)]">
            <img
              src={ABOUT_DATA.candidUrl}
              alt="Atreya Kamat in a personal work setting"
              className="aspect-[4/3] w-full object-cover object-center"
            />
          </div>
        </div>

        <div className="order-1 space-y-6 lg:order-2">
          <div className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#0d9488]">
            ABOUT // THE PERSPECTIVE
          </div>

          <h2 className="max-w-2xl text-3xl font-semibold leading-[1.02] tracking-[-0.02em] text-[#111113] sm:text-4xl lg:text-5xl">
            {ABOUT_DATA.headline}
          </h2>

          <p className="max-w-2xl text-lg leading-8 text-slate-700">
            {ABOUT_DATA.body}
          </p>

          <div className="grid gap-5 border-t border-black/10 pt-6 sm:grid-cols-3">
            <div>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400">Location</span>
              <span className="mt-2 block font-medium text-[#111113]">Goa, India</span>
            </div>
            <div>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400">Focus</span>
              <span className="mt-2 block font-medium text-[#111113]">Product + systems + craft</span>
            </div>
            <div>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400">Ethos</span>
              <span className="mt-2 block font-medium text-[#0d9488]">Simplicity as feature</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
