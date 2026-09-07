import React from 'react';
import { Link } from 'react-router-dom';
import { allProjects } from '../data/portfolioData';
import SectionHeader from '../components/SectionHeader';
import { ArrowOutward } from '../components/ProjectCard';

export const ProjectsPage: React.FC = () => {
  return (
    <div className="max-w-max-width mx-auto px-gutter-mobile lg:px-margin-desktop py-unit-2xl lg:py-unit-4xl">
      {/* Breadcrumb / Back Link */}
      <div className="mb-unit-lg font-label-mono text-label-mono uppercase">
        <Link 
          to="/" 
          className="text-primary hover:text-[#F05A3C] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary inline-flex items-center gap-1"
        >
          <span>← BACK TO OVERVIEW</span>
        </Link>
      </div>

      <SectionHeader
        kicker="INDEX // ALL PROJECTS"
        title="Software & Systems Archive"
        description="Complete catalog of production web applications, reliability services, and AI automations."
        id="projects-index-heading"
        isSerif
        asH1
      />

      <div className="border border-primary/20 bg-[#ffffff] divide-y divide-primary/15">
        {allProjects.map((project) => (
          <article 
            key={project.id}
            className="p-unit-lg lg:p-unit-xl grid grid-cols-1 lg:grid-cols-12 gap-unit-lg hover:bg-[#F7F5EF]/60 transition-colors"
          >
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-label-mono text-[10px] text-on-surface-variant uppercase tracking-wider">
                    {project.number} // {project.category}
                  </span>
                  {project.tag && (
                    <span className="font-label-mono text-[10px] text-[#006a61] uppercase tracking-wider">
                      {project.tag}
                    </span>
                  )}
                </div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-primary">
                  <Link 
                    to={`/projects/${project.slug}`}
                    className="hover:text-[#F05A3C] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
                  >
                    {project.title}
                  </Link>
                </h3>
              </div>
              <div className="font-label-mono text-[11px] text-on-surface-variant mt-unit-sm">
                {project.stack}
              </div>
            </div>

            <div className="lg:col-span-8 flex flex-col justify-between">
              <div className="space-y-unit-xs text-body-sm mb-unit-md">
                <p className="text-on-surface">
                  <span className="font-label-mono text-[11px] text-[#F05A3C] font-bold uppercase">PROBLEM: </span>
                  {project.triad.problem}
                </p>
                <p className="text-on-surface">
                  <span className="font-label-mono text-[11px] text-primary font-bold uppercase">BUILD: </span>
                  {project.triad.build}
                </p>
                <p className="text-primary font-medium">
                  <span className="font-label-mono text-[11px] text-secondary font-bold uppercase">OUTCOME: </span>
                  {project.triad.outcome}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-unit-sm pt-unit-sm border-t border-primary/10">
                <Link
                  to={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1 font-label-mono text-[11px] text-primary hover:text-[#F05A3C] font-semibold uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
                >
                  <span>EXPLORE ARCHITECTURE & CASE STUDY →</span>
                </Link>
                <div className="flex items-center gap-3">
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-label-mono text-[11px] text-primary hover:text-[#F05A3C] uppercase tracking-wider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      <span>SOURCE REPO</span>
                      <ArrowOutward className="w-3 h-3 text-[#F05A3C]" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-label-mono text-[11px] text-[#006a61] hover:text-primary uppercase tracking-wider font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      <span>LIVE APP</span>
                      <ArrowOutward className="w-3 h-3 text-[#32D6C5]" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
