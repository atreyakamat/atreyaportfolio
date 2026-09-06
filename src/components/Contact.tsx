import React from 'react';
import { personalInfo } from '../data/portfolioData';

const Contact: React.FC = () => {
  return (
    <section 
      id="contact" 
      aria-labelledby="contact-heading" 
      className="w-full bg-[#F7F5EF]"
    >
      <div className="max-w-max-width mx-auto px-gutter-mobile lg:px-margin-desktop py-unit-3xl lg:py-unit-4xl">
        <div className="border border-primary/20 p-unit-lg lg:p-unit-2xl bg-[#ffffff]">
          {/* Header row inside card */}
          <div className="flex items-center justify-between pb-unit-sm border-b border-primary/15 mb-unit-xl font-label-mono text-label-mono text-on-surface-variant">
            <span className="text-[#F05A3C] font-semibold uppercase">06 // GET IN TOUCH</span>
            <span className="uppercase">OPEN TO NEW COLLABORATIONS</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-unit-xl items-center">
            {/* Headline and statement */}
            <div className="lg:col-span-7">
              <h2 
                id="contact-heading"
                className="font-headline-lg text-headline-lg sm:text-[3.25rem] text-primary font-serif tracking-tight leading-[1.1] mb-unit-sm"
              >
                Have a problem worth solving? Let's build.
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                Open to full-time engineering roles, product development, and technical collaboration.
              </p>
            </div>

            {/* Action buttons */}
            <div className="lg:col-span-5 flex flex-col gap-unit-sm">
              <a 
                className="w-full py-3.5 px-unit-md bg-primary text-[#F7F5EF] font-label-mono text-label-mono font-semibold uppercase tracking-wider text-center hover:bg-primary/90 transition-all flex items-center justify-center gap-unit-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" 
                href={`mailto:${personalInfo.email}`}
                aria-label={`Send email to ${personalInfo.email}`}
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>{personalInfo.email}</span>
              </a>

              <div className="grid grid-cols-2 gap-unit-xs">
                <a 
                  className="py-2 px-2 border border-primary text-primary font-label-mono text-[11px] uppercase tracking-wider text-center hover:bg-black/5 transition-all flex items-center justify-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1" 
                  href={personalInfo.githubUrl} 
                  rel="noopener noreferrer" 
                  target="_blank"
                  aria-label="Visit Atreya Kamat GitHub profile"
                >
                  <span>GITHUB</span>
                  <svg className="w-3 h-3 text-[#F05A3C] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
                <a 
                  className="py-2 px-2 border border-primary text-primary font-label-mono text-[11px] uppercase tracking-wider text-center hover:bg-black/5 transition-all flex items-center justify-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1" 
                  href={personalInfo.linkedinUrl} 
                  rel="noopener noreferrer" 
                  target="_blank"
                  aria-label="Visit Atreya Kamat LinkedIn profile"
                >
                  <span>LINKEDIN</span>
                  <svg className="w-3 h-3 text-[#F05A3C] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
              </div>

              <a 
                className="py-2 px-2 border border-primary/30 text-primary font-label-mono text-[11px] uppercase tracking-wider text-center hover:border-primary transition-all flex items-center justify-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1" 
                href={personalInfo.resumeUrl}
                download="atreya_kamat_resume.pdf"
                aria-label="Download Resume PDF file"
              >
                <span>DOWNLOAD RESUME [PDF]</span>
                <svg className="w-3.5 h-3.5 text-[#F05A3C] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </a>
            </div>
          </div>

          <div className="mt-unit-xl pt-unit-sm border-t border-primary/10 flex flex-wrap justify-between items-center font-label-mono text-[10px] text-on-surface-variant uppercase">
            <span>LOCATION: {personalInfo.location}</span>
            <span>DIRECT INQUIRIES: {personalInfo.email.toUpperCase()}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
