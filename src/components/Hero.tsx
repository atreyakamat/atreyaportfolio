import React from 'react';
import portraitImage from '../assets/atreyapfp.webp';
import { personalInfo, proofStats } from '../data/portfolioData';

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      aria-labelledby="hero-heading" 
      className="w-full border-b border-primary/15"
    >
      <div className="max-w-max-width mx-auto px-gutter-mobile lg:px-margin-desktop py-unit-xl lg:py-unit-3xl">
        {/* Intro Metadata Coordinate Line */}
        <div className="flex flex-wrap items-center justify-between gap-unit-sm pb-unit-sm mb-unit-lg font-label-mono text-label-mono uppercase text-on-surface-variant border-b border-primary/10">
          <div className="flex items-center gap-unit-md">
            <span className="text-primary font-semibold">{personalInfo.name}</span>
            <span className="text-outline-variant" aria-hidden="true">/</span>
            <span>{personalInfo.title}</span>
          </div>
          <div className="flex items-center gap-unit-sm">
            <span className="inline-block w-2 h-2 rounded-full bg-[#32D6C5]" aria-hidden="true"></span>
            <span className="text-primary">{personalInfo.statusBanner}</span>
          </div>
        </div>

        {/* Editorial Grid Split (Portrait & Content) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-unit-xl items-stretch">
          {/* Left: Editorial Portrait */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="w-full aspect-[3/4] bg-surface-container-high border border-primary/20 overflow-hidden group shadow-sm">
              <img 
                className="w-full h-full object-cover grayscale contrast-105 group-hover:contrast-100 group-hover:grayscale-0 transition-all duration-500 ease-out" 
                alt={`Studio portrait of ${personalInfo.name}, ${personalInfo.title}`} 
                src={portraitImage}
                width={1086}
                height={1448}
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>
            <div className="mt-unit-sm flex items-center justify-between font-label-mono text-[11px] text-on-surface-variant">
              <span className="text-primary font-semibold tracking-wider">{personalInfo.name}</span>
              <span>{personalInfo.title} · {personalInfo.location}</span>
            </div>
          </div>

          {/* Right: Headline, Copy, CTAs, Proof Strip */}
          <div className="lg:col-span-7 flex flex-col justify-between py-unit-xs">
            <div>
              <div className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest mb-unit-sm">
                {personalInfo.kicker}
              </div>
              <h1 
                id="hero-heading"
                className="font-headline-lg text-headline-lg sm:text-display-xl text-primary font-serif tracking-tight leading-[1.06] mb-unit-lg"
              >
                {personalInfo.headlinePrefix}
                <span className="italic underline decoration-1 decoration-outline-variant underline-offset-8">
                  {personalInfo.headlineHighlight}
                </span>
                {personalInfo.headlineSuffix}
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed mb-unit-xl">
                {personalInfo.bio}
              </p>
              
              {/* CTA Group */}
              <div className="flex flex-wrap items-center gap-unit-md">
                <a 
                  className="px-6 py-3 bg-primary text-[#F7F5EF] font-label-mono text-label-mono tracking-widest uppercase hover:bg-primary/85 transition-all flex items-center gap-unit-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" 
                  href="#selected-work"
                >
                  <span>VIEW SELECTED WORK →</span>
                </a>
                <a 
                  className="px-6 py-3 border border-primary text-primary font-label-mono text-label-mono tracking-widest uppercase hover:bg-black/5 transition-all flex items-center gap-unit-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" 
                  href={personalInfo.resumeUrl}
                  download="atreya_kamat_resume.pdf"
                >
                  <span>DOWNLOAD RESUME →</span>
                </a>
              </div>
            </div>

            {/* Proof Strip */}
            <div 
              aria-label="Key Proof and Qualifications"
              className="border-t border-primary/15 pt-unit-md mt-unit-2xl grid grid-cols-2 sm:grid-cols-4 gap-unit-md"
            >
              {proofStats.map((stat) => (
                <div 
                  key={stat.label}
                  className={`border-l-2 ${stat.isAccent ? 'border-[#32D6C5]' : 'border-primary'} pl-2.5`}
                >
                  <div className="font-headline-sm text-headline-sm font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="font-label-mono text-[10px] tracking-wider text-on-surface-variant uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
