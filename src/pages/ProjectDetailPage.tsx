import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProjectBySlug, allProjects, personalInfo } from '../data/portfolioData';
import { ArrowOutward, TriadDisplay } from '../components/ProjectCard';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return (
      <div className="max-w-max-width mx-auto px-gutter-mobile lg:px-margin-desktop py-unit-3xl text-center">
        <div className="font-label-mono text-label-mono text-[#F05A3C] uppercase tracking-widest mb-unit-sm">
          404 // PROJECT NOT FOUND
        </div>
        <h1 className="font-headline-lg text-headline-lg font-serif text-primary mb-unit-md">
          Case Study Unavailable
        </h1>
        <p className="font-body-md text-on-surface-variant max-w-md mx-auto mb-unit-xl">
          The project slug "{slug}" does not match any documented engineering case study.
        </p>
        <Link 
          to="/projects"
          className="inline-flex items-center px-6 py-3 bg-primary text-[#F7F5EF] font-label-mono text-label-mono tracking-wider uppercase hover:bg-primary/85 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <span>VIEW ALL PROJECTS →</span>
        </Link>
      </div>
    );
  }

  // Find next and previous projects for navigation
  const currentIndex = allProjects.findIndex((p) => p.slug === project.slug);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

  return (
    <article className="max-w-max-width mx-auto px-gutter-mobile lg:px-margin-desktop py-unit-2xl lg:py-unit-3xl">
      {/* Top Navigation Coordinate Bar */}
      <div className="flex flex-wrap items-center justify-between gap-unit-sm pb-unit-sm mb-unit-xl font-label-mono text-label-mono uppercase text-on-surface-variant border-b border-primary/10">
        <div className="flex items-center gap-unit-md">
          <Link 
            to="/#selected-work"
            className="text-primary hover:text-[#F05A3C] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary font-semibold"
          >
            ← BACK TO SELECTED WORK
          </Link>
          <span className="text-outline-variant" aria-hidden="true">/</span>
          <span>{project.number}</span>
        </div>
        <div className="flex items-center gap-unit-sm">
          <span className="inline-block w-2 h-2 rounded-full bg-[#32D6C5]" aria-hidden="true"></span>
          <span className="text-primary">{project.category}</span>
        </div>
      </div>

      {/* Main Case Study Header */}
      <header className="mb-unit-2xl">
        <div className="font-label-mono text-label-mono text-[#F05A3C] uppercase tracking-widest mb-unit-xs">
          {project.category} {project.subcategory ? `// ${project.subcategory}` : ''}
        </div>
        <h1 className="font-headline-lg text-headline-lg sm:text-display-xl text-primary font-serif tracking-tight leading-[1.08] mb-unit-md">
          {project.title}
        </h1>
        <div className="flex flex-wrap items-center gap-unit-md font-label-mono text-label-mono text-on-surface-variant">
          <span className="text-primary font-semibold">{project.stack}</span>
          {project.tag && (
            <>
              <span className="text-outline-variant select-none" aria-hidden="true">•</span>
              <span className="text-[#006a61] uppercase">{project.tag}</span>
            </>
          )}
        </div>
      </header>

      {/* Media Screenshot Container */}
      <div className="border border-primary/20 bg-surface-container overflow-hidden mb-unit-2xl group">
        <img 
          src={project.image} 
          alt={project.imageAlt}
          className="w-full h-auto max-h-[550px] object-cover grayscale contrast-105 group-hover:grayscale-0 transition-all duration-500"
          width={1200}
          height={675}
          loading="eager"
        />
        <div className="p-unit-sm bg-[#ffffff] border-t border-primary/10 font-label-mono text-[11px] text-on-surface-variant flex items-center justify-between">
          <span>FIG 01 // INTERFACE &amp; SYSTEM ARCHITECTURE</span>
          <span className="uppercase">{project.title}</span>
        </div>
      </div>

      {/* Two Column Layout: Triad & Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-unit-2xl mb-unit-3xl">
        {/* Left: Problem / Build / Outcome Triad */}
        <div className="lg:col-span-5 space-y-unit-lg">
          <div className="border border-primary/20 bg-[#ffffff] p-unit-lg">
            <h2 className="font-label-mono text-label-mono text-primary font-bold uppercase tracking-wider mb-unit-sm pb-unit-xs border-b border-primary/10">
              CORE PROBLEM &amp; IMPACT
            </h2>
            <TriadDisplay triad={project.triad} />
          </div>

          {/* Links & Source Availability */}
          <div className="border border-primary/20 bg-[#ffffff] p-unit-lg">
            <h2 className="font-label-mono text-label-mono text-primary font-bold uppercase tracking-wider mb-unit-sm pb-unit-xs border-b border-primary/10">
              DEPLOYMENT &amp; SOURCE CODE
            </h2>
            
            {project.liveUrl || project.repoUrl ? (
              <div className="space-y-unit-sm pt-unit-xs">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 bg-primary text-[#F7F5EF] font-label-mono text-label-mono uppercase tracking-wider hover:bg-primary/85 transition-all flex items-center justify-between"
                  >
                    <span>LAUNCH APPLICATION</span>
                    <ArrowOutward className="w-3.5 h-3.5 text-[#32D6C5]" />
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 border border-primary text-primary font-label-mono text-label-mono uppercase tracking-wider hover:bg-black/5 transition-all flex items-center justify-between"
                  >
                    <span>SOURCE REPOSITORY</span>
                    <ArrowOutward className="w-3.5 h-3.5 text-[#F05A3C]" />
                  </a>
                )}
              </div>
            ) : (
              <div className="pt-unit-xs">
                <div className="flex items-center gap-2 mb-unit-sm">
                  <span className="w-2 h-2 rounded-full bg-[#F05A3C]" aria-hidden="true"></span>
                  <span className="font-label-mono text-[11px] font-bold text-primary uppercase">
                    STATUS // REPOSITORY PENDING PUBLIC RELEASE
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-unit-md">
                  Active code repository and production URLs are undergoing internal evaluation or private release. For code samples or a private architecture walkthrough, contact directly:
                </p>
                <a
                  href={`mailto:${personalInfo.email}?subject=${encodeURIComponent(`Walkthrough Request: ${project.title}`)}`}
                  className="inline-flex items-center gap-1.5 font-label-mono text-label-mono text-primary hover:text-[#F05A3C] font-semibold uppercase tracking-wider underline underline-offset-4"
                >
                  <span>REQUEST CODE WALKTHROUGH →</span>
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Right: Architectural In-Depth Breakdown */}
        <div className="lg:col-span-7 space-y-unit-xl">
          <div>
            <h2 className="font-headline-sm text-headline-sm font-bold text-primary uppercase tracking-tight mb-unit-sm">
              SYSTEM OVERVIEW
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
              {project.overview}
            </p>
          </div>

          <div className="border-t border-primary/15 pt-unit-lg">
            <h2 className="font-headline-sm text-headline-sm font-bold text-primary uppercase tracking-tight mb-unit-md">
              KEY ENGINEERING DECISIONS
            </h2>
            <ul className="space-y-unit-sm font-body-md text-on-surface">
              {project.keyFeatures.map((feat) => (
                <li key={feat} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#32D6C5] mt-2 shrink-0" aria-hidden="true"></span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-primary/15 pt-unit-lg">
            <h2 className="font-headline-sm text-headline-sm font-bold text-primary uppercase tracking-tight mb-unit-md">
              TECHNICAL ARCHITECTURE
            </h2>
            <div className="border border-primary/20 bg-[#ffffff] divide-y divide-primary/15 font-label-mono text-body-sm">
              {project.architecture.map((arch, idx) => (
                <div key={idx} className="p-unit-md flex items-center gap-3">
                  <span className="text-[#F05A3C] font-bold">0{idx + 1} //</span>
                  <span className="text-primary">{arch}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Prev / Next Project Links */}
      <footer className="border-t border-primary/20 pt-unit-lg flex flex-wrap items-center justify-between gap-unit-md font-label-mono text-label-mono uppercase">
        {prevProject ? (
          <Link
            to={`/projects/${prevProject.slug}`}
            className="text-primary hover:text-[#F05A3C] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
          >
            ← {prevProject.title}
          </Link>
        ) : (
          <span className="text-outline-variant select-none">FIRST PROJECT</span>
        )}

        <Link
          to="/projects"
          className="text-primary font-bold hover:text-[#F05A3C] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
        >
          ALL PROJECTS INDEX
        </Link>

        {nextProject ? (
          <Link
            to={`/projects/${nextProject.slug}`}
            className="text-primary hover:text-[#F05A3C] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
          >
            {nextProject.title} →
          </Link>
        ) : (
          <span className="text-outline-variant select-none">LAST PROJECT</span>
        )}
      </footer>
    </article>
  );
};

export default ProjectDetailPage;
