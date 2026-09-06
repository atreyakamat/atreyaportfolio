import React from 'react';
import { 
  trackNowProject, 
  gridProjects, 
  lawyerCrmProject, 
  archiveProjects,
  type FeaturedProject as IFeaturedProject,
  type ProjectTriad 
} from '../data/portfolioData';

const ArrowOutward: React.FC<{ className?: string }> = ({ className = "w-3.5 h-3.5 text-[#F05A3C] shrink-0" }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const TriadDisplay: React.FC<{ triad: ProjectTriad; isCompact?: boolean }> = ({ triad, isCompact = false }) => (
  <div className="space-y-unit-sm py-unit-sm text-body-sm">
    <div>
      <span className={`font-label-mono ${isCompact ? 'text-[11px]' : 'text-label-mono'} text-[#F05A3C] font-bold uppercase`}>
        PROBLEM:{' '}
      </span>
      <span className="text-on-surface">{triad.problem}</span>
    </div>
    <div>
      <span className={`font-label-mono ${isCompact ? 'text-[11px]' : 'text-label-mono'} text-primary font-bold uppercase`}>
        THE BUILD:{' '}
      </span>
      <span className="text-on-surface">{triad.build}</span>
    </div>
    <div>
      <span className={`font-label-mono ${isCompact ? 'text-[11px]' : 'text-label-mono'} text-secondary font-bold uppercase`}>
        OUTCOME:{' '}
      </span>
      <span className="font-medium text-primary">{triad.outcome}</span>
    </div>
  </div>
);

const Projects: React.FC = () => {
  return (
    <section 
      id="selected-work" 
      aria-labelledby="work-heading" 
      className="w-full border-b border-primary/15"
    >
      <div className="max-w-max-width mx-auto px-gutter-mobile lg:px-margin-desktop py-unit-2xl lg:py-unit-4xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-primary/15 pb-unit-md mb-unit-2xl gap-unit-sm">
          <div>
            <span className="font-label-mono text-label-mono text-[#F05A3C] font-semibold uppercase tracking-widest">
              02 // SELECTED WORK
            </span>
            <h2 
              id="work-heading"
              className="font-headline-lg text-headline-lg text-primary font-serif tracking-tight mt-1"
            >
              Software Built Around Real Problems
            </h2>
          </div>
          <div className="font-label-mono text-label-mono text-on-surface-variant max-w-md">
            A selection of software, systems, and products built from idea to deployment.
          </div>
        </div>

        {/* PROJECT 01: TRACK.NOW (Full Width Split) */}
        <article 
          aria-labelledby={`project-${trackNowProject.id}-title`}
          className="mb-unit-2xl border border-primary/20 bg-[#ffffff]"
        >
          <div className="p-unit-sm sm:p-unit-md border-b border-primary/15 flex items-center justify-between font-label-mono text-label-mono">
            <span className="font-bold text-primary uppercase">
              {trackNowProject.number} // {trackNowProject.category}
            </span>
            {trackNowProject.tag && (
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#32D6C5]" aria-hidden="true"></span>
                <span className="text-primary font-semibold uppercase">{trackNowProject.tag}</span>
              </div>
            )}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-primary/20 relative bg-surface-container overflow-hidden group">
              <img 
                className="w-full h-full object-cover min-h-[300px] lg:min-h-[380px] grayscale group-hover:grayscale-0 transition-all duration-300" 
                alt={trackNowProject.imageAlt} 
                src={trackNowProject.image}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="lg:col-span-7 p-unit-lg lg:p-unit-xl flex flex-col justify-between">
              <div>
                <h3 
                  id={`project-${trackNowProject.id}-title`}
                  className="font-headline-md text-headline-md text-primary font-bold tracking-tight mb-unit-sm"
                >
                  {trackNowProject.title}
                </h3>
                <TriadDisplay triad={trackNowProject.triad} />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-unit-sm pt-unit-md mt-unit-sm border-t border-primary/10">
                <div className="font-label-mono text-[11px] text-on-surface-variant">
                  {trackNowProject.stack}
                </div>
                <a 
                  className="inline-flex items-center gap-1.5 font-label-mono text-label-mono text-primary hover:text-[#F05A3C] font-semibold uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1" 
                  href={trackNowProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${trackNowProject.linkText} for ${trackNowProject.title}`}
                >
                  <span>{trackNowProject.linkText}</span>
                  <ArrowOutward />
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* 2-COLUMN PROJECT GRID: PULSEWATCH & VISTARABI */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-unit-xl mb-unit-2xl">
          {gridProjects.map((project: IFeaturedProject) => (
            <article 
              key={project.id}
              aria-labelledby={`project-${project.id}-title`}
              className="border border-primary/20 bg-[#ffffff] flex flex-col justify-between"
            >
              <div>
                <div className="p-unit-sm border-b border-primary/15 flex items-center justify-between font-label-mono text-[11px]">
                  <span className="font-bold text-primary uppercase">
                    {project.number} // {project.category}
                  </span>
                  <span className="text-on-surface-variant uppercase">{project.tag}</span>
                </div>
                <div className="aspect-[16/9] border-b border-primary/20 relative bg-surface-container overflow-hidden group">
                  <img 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" 
                    alt={project.imageAlt} 
                    src={project.image}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-unit-lg">
                  <h3 
                    id={`project-${project.id}-title`}
                    className="font-headline-sm text-headline-sm font-bold text-primary mb-unit-sm"
                  >
                    {project.title}
                  </h3>
                  <TriadDisplay triad={project.triad} isCompact />
                </div>
              </div>
              <div className="p-unit-lg pt-unit-xs border-t border-primary/10 flex flex-wrap items-center justify-between gap-unit-sm">
                <div className="font-label-mono text-[11px] text-on-surface-variant">
                  {project.stack}
                </div>
                <a 
                  className="inline-flex items-center gap-1 font-label-mono text-[11px] text-primary hover:text-[#F05A3C] font-semibold uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1" 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.linkText} for ${project.title}`}
                >
                  <span>{project.linkText}</span>
                  <ArrowOutward className="w-3 h-3 text-[#F05A3C]" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* PROJECT 04: LAWYER BOOKING & CRM PLATFORM (Inverted Split) */}
        <article 
          aria-labelledby={`project-${lawyerCrmProject.id}-title`}
          className="border border-primary/20 bg-[#ffffff] mb-unit-2xl"
        >
          <div className="p-unit-sm sm:p-unit-md border-b border-primary/15 flex items-center justify-between font-label-mono text-label-mono">
            <span className="font-bold text-primary uppercase">
              {lawyerCrmProject.number} // {lawyerCrmProject.category}
            </span>
            {lawyerCrmProject.subcategory && (
              <span className="text-on-surface-variant uppercase">{lawyerCrmProject.subcategory}</span>
            )}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 p-unit-lg lg:p-unit-xl flex flex-col justify-between order-2 lg:order-1">
              <div>
                <h3 
                  id={`project-${lawyerCrmProject.id}-title`}
                  className="font-headline-md text-headline-md text-primary font-bold tracking-tight mb-unit-sm"
                >
                  {lawyerCrmProject.title}
                </h3>
                <TriadDisplay triad={lawyerCrmProject.triad} isCompact />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-unit-sm pt-unit-md border-t border-primary/10">
                <div className="font-label-mono text-[11px] text-on-surface-variant">
                  {lawyerCrmProject.stack}
                </div>
                <a 
                  className="inline-flex items-center gap-1 font-label-mono text-label-mono text-primary hover:text-[#F05A3C] font-semibold uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1" 
                  href={lawyerCrmProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${lawyerCrmProject.linkText} for ${lawyerCrmProject.title}`}
                >
                  <span>{lawyerCrmProject.linkText}</span>
                  <ArrowOutward />
                </a>
              </div>
            </div>
            <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-primary/20 relative bg-surface-container overflow-hidden order-1 lg:order-2 group">
              <img 
                className="w-full h-full object-cover min-h-[260px] lg:min-h-[340px] grayscale group-hover:grayscale-0 transition-all duration-300" 
                alt={lawyerCrmProject.imageAlt} 
                src={lawyerCrmProject.image}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </article>

        {/* EXTENDED ARCHIVE GRID */}
        <div className="border border-primary/20 bg-[#ffffff] p-unit-lg">
          <div className="flex items-center justify-between pb-unit-sm mb-unit-lg border-b border-primary/10 font-label-mono text-label-mono">
            <span className="font-bold text-primary uppercase">ADDITIONAL CODEBASES</span>
            <span className="text-on-surface-variant uppercase">ARCHIVE</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-unit-xl">
            {archiveProjects.map((archive) => (
              <article key={archive.title} className="flex flex-col justify-between">
                <div>
                  <h4 className="font-headline-sm text-[1.1rem] font-bold text-primary mb-1">
                    {archive.title}
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {archive.desc}
                  </p>
                </div>
                <div className="pt-unit-sm mt-unit-sm font-label-mono text-[11px] text-on-surface-variant">
                  {archive.stack}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
