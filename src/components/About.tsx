import React from 'react';
import { educationEntries } from '../data/portfolioData';

const About: React.FC = () => {
  return (
    <section 
      id="about" 
      aria-labelledby="about-heading" 
      className="w-full border-b border-primary/15"
    >
      <div className="max-w-max-width mx-auto px-gutter-mobile lg:px-margin-desktop py-unit-2xl lg:py-unit-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-unit-2xl items-start">
          {/* Left: Practical Philosophy */}
          <div className="lg:col-span-7">
            <span className="font-label-mono text-label-mono text-[#F05A3C] font-semibold uppercase tracking-widest">
              05 // ABOUT &amp; PHILOSOPHY
            </span>
            <h2 
              id="about-heading"
              className="font-headline-lg text-headline-lg text-primary font-serif tracking-tight mt-1 mb-unit-md"
            >
              Engineering focused on real-world utility.
            </h2>
            <div className="space-y-unit-md font-body-lg text-body-lg text-on-surface">
              <p>
                Good software starts with understanding real-world constraints. It is about building dependable tools that solve actual problems and remove friction for people and teams.
              </p>
              <p className="text-body-md text-on-surface-variant">
                My approach is grounded in understanding domain requirements first, respecting system constraints, and maintaining high craftsmanship from database schema to browser pixels.
              </p>
            </div>
          </div>

          {/* Right: Academic Foundation */}
          <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-primary/20 pt-unit-xl lg:pt-0 lg:pl-unit-xl">
            <span className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest block mb-unit-sm">
              ACADEMIC FOUNDATION
            </span>
            <div className="space-y-unit-lg">
              {educationEntries.map((edu, idx) => (
                <article 
                  key={edu.degree}
                  className={idx > 0 ? "border-t border-primary/10 pt-unit-md" : ""}
                >
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-headline-sm text-headline-sm font-bold text-primary">
                      {edu.degree}
                    </h3>
                    <span className="font-label-mono text-[11px] text-on-surface-variant">
                      {edu.period}
                    </span>
                  </div>
                  {edu.specialization && (
                    <div className="font-label-mono text-[11px] text-[#006a61] font-semibold uppercase mt-0.5">
                      {edu.specialization}
                    </div>
                  )}
                  <div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    {edu.institution}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
