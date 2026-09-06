import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { personalInfo } from '../data/portfolioData';

export const ResumeRedirect: React.FC = () => {
  useEffect(() => {
    // Attempt automatic navigation to the canonical PDF
    window.location.href = personalInfo.resumeUrl;
  }, []);

  return (
    <div className="max-w-max-width mx-auto px-gutter-mobile lg:px-margin-desktop py-unit-3xl text-center">
      <div className="font-label-mono text-label-mono text-[#F05A3C] uppercase tracking-widest mb-unit-sm">
        DOCUMENT // RESUME
      </div>
      <h1 className="font-headline-lg text-headline-lg font-serif text-primary mb-unit-md">
        Opening Resume PDF...
      </h1>
      <p className="font-body-md text-on-surface-variant max-w-md mx-auto mb-unit-xl">
        If the download does not begin automatically, use the button below to download the official PDF.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-unit-md">
        <a
          href={personalInfo.resumeUrl}
          download="atreya_kamat_resume.pdf"
          className="px-6 py-3 bg-primary text-[#F7F5EF] font-label-mono text-label-mono tracking-wider uppercase hover:bg-primary/85 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <span>DOWNLOAD RESUME PDF →</span>
        </a>
        <Link
          to="/"
          className="px-6 py-3 border border-primary text-primary font-label-mono text-label-mono tracking-wider uppercase hover:bg-black/5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <span>RETURN TO HOME</span>
        </Link>
      </div>
    </div>
  );
};

export default ResumeRedirect;
