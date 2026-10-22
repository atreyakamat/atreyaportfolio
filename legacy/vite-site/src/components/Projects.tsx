import React from 'react';
import { Link } from 'react-router-dom';
import { 
  trackNowProject, 
  gridProjects, 
  lawyerCrmProject, 
  archiveProjectsList,
} from '../data/portfolioData';
import SectionHeader from './SectionHeader';
import ProjectCard, { ArrowOutward, TriadDisplay } from './ProjectCard';
import ProjectArchiveItem from './ProjectArchiveItem';

const Projects: React.FC = () => {
  return (
    <section 
      id="selected-work" 
      aria-labelledby="work-heading" 
      className="w-full border-b border-primary/15"
    >
      <div className="max-w-max-width mx-auto px-gutter-mobile lg:px-margin-desktop py-unit-2xl lg:py-unit-4xl">
        <SectionHeader
          kicker="02 // SELECTED WORK"
          title="Software Built Around Real Problems"
          description="A selection of software, systems, and products built from idea to deployment."
          id="work-heading"
          isSerif
        />

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
                width={800}
                height={500}
              />
            </div>
            <div className="lg:col-span-7 p-unit-lg lg:p-unit-xl flex flex-col justify-between">
              <div>
                <h3 
                  id={`project-${trackNowProject.id}-title`}
                  className="font-headline-md text-headline-md text-primary font-bold tracking-tight mb-unit-sm"
                >
                  <Link 
                    to={`/projects/${trackNowProject.slug}`}
                    className="hover:text-[#F05A3C] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
                  >
                    {trackNowProject.title}
                  </Link>
                </h3>
                <TriadDisplay triad={trackNowProject.triad} />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-unit-sm pt-unit-md border-t border-primary/10">
                <div className="font-label-mono text-label-mono text-on-surface-variant">
                  {trackNowProject.stack}
                </div>
                <div className="flex items-center gap-3">
                  {trackNowProject.repoUrl && (
                    <a 
                      className="inline-flex items-center gap-1 font-label-mono text-label-mono text-primary hover:text-[#F05A3C] font-semibold uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1" 
                      href={trackNowProject.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Source code for ${trackNowProject.title} on GitHub`}
                    >
                      <span>SOURCE CODE</span>
                      <ArrowOutward className="w-3.5 h-3.5 text-[#F05A3C]" />
                    </a>
                  )}
                  {trackNowProject.liveUrl ? (
                    <a 
                      className="inline-flex items-center gap-1 font-label-mono text-label-mono text-primary hover:text-[#F05A3C] font-semibold uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1" 
                      href={trackNowProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Launch ${trackNowProject.title}`}
                    >
                      <span>VIEW APPLICATION</span>
                      <ArrowOutward className="w-3.5 h-3.5 text-[#32D6C5]" />
                    </a>
                  ) : (
                    <Link 
                      to={`/projects/${trackNowProject.slug}`}
                      className="inline-flex items-center gap-1 font-label-mono text-label-mono text-primary hover:text-[#F05A3C] font-semibold uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1" 
                      aria-label={`View architecture details for ${trackNowProject.title}`}
                    >
                      <span>VIEW CASE STUDY →</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* PROJECTS 02 & 03: PULSEWATCH & VISTARABI (2-Column Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-unit-2xl mb-unit-2xl">
          {gridProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
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
                  <Link 
                    to={`/projects/${lawyerCrmProject.slug}`}
                    className="hover:text-[#F05A3C] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
                  >
                    {lawyerCrmProject.title}
                  </Link>
                </h3>
                <TriadDisplay triad={lawyerCrmProject.triad} isCompact />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-unit-sm pt-unit-md border-t border-primary/10">
                <div className="font-label-mono text-[11px] text-on-surface-variant">
                  {lawyerCrmProject.stack}
                </div>
                <div className="flex items-center gap-3">
                  {lawyerCrmProject.repoUrl && (
                    <a 
                      className="inline-flex items-center gap-1 font-label-mono text-[11px] text-primary hover:text-[#F05A3C] font-semibold uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1" 
                      href={lawyerCrmProject.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Source code for ${lawyerCrmProject.title} on GitHub`}
                    >
                      <span>SOURCE CODE</span>
                      <ArrowOutward className="w-3.5 h-3.5 text-[#F05A3C]" />
                    </a>
                  )}
                  {lawyerCrmProject.liveUrl ? (
                    <a 
                      className="inline-flex items-center gap-1 font-label-mono text-label-mono text-primary hover:text-[#F05A3C] font-semibold uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1" 
                      href={lawyerCrmProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Launch ${lawyerCrmProject.title}`}
                    >
                      <span>LAUNCH APP</span>
                      <ArrowOutward className="w-3.5 h-3.5 text-[#32D6C5]" />
                    </a>
                  ) : (
                    <Link 
                      to={`/projects/${lawyerCrmProject.slug}`}
                      className="inline-flex items-center gap-1 font-label-mono text-label-mono text-primary hover:text-[#F05A3C] font-semibold uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1" 
                      aria-label={`View architecture details for ${lawyerCrmProject.title}`}
                    >
                      <span>VIEW CASE STUDY →</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-l border-primary/20 relative bg-surface-container overflow-hidden group order-1 lg:order-2">
              <img 
                className="w-full h-full object-cover min-h-[300px] lg:min-h-[380px] grayscale group-hover:grayscale-0 transition-all duration-300" 
                alt={lawyerCrmProject.imageAlt} 
                src={lawyerCrmProject.image}
                loading="lazy"
                decoding="async"
                width={800}
                height={500}
              />
            </div>
          </div>
        </article>

        {/* ARCHIVE PROJECTS LEDGER */}
        <div className="border border-primary/20 bg-[#ffffff]">
          <div className="p-unit-sm sm:p-unit-md border-b border-primary/15 flex items-center justify-between font-label-mono text-label-mono bg-[#FAF9F5]/70">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#32D6C5]" aria-hidden="true" />
              <span className="font-bold text-primary tracking-wider uppercase text-[12px] sm:text-label-mono">
                ADDITIONAL CODEBASES &amp; SYSTEMS
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-on-surface-variant uppercase text-[11px] tracking-wider">
              <span>ARCHIVE</span>
              <span className="inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold text-primary bg-[#ffffff] border border-primary/20 tracking-normal">
                0{archiveProjectsList.length}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-primary/20">
            {archiveProjectsList.map((project) => (
              <ProjectArchiveItem key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
