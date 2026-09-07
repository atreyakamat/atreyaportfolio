import React from 'react';
import { Link } from 'react-router-dom';
import type { ProjectItem } from '../data/portfolioData';
import { ArrowOutward } from './ProjectCard';

interface ProjectArchiveItemProps {
  project: ProjectItem;
}

export const ProjectArchiveItem: React.FC<ProjectArchiveItemProps> = ({ project }) => {
  return (
    <article className="p-unit-lg flex flex-col justify-between bg-[#ffffff] hover:bg-[#FAF9F5] relative transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(21,21,21,0.04)] hover:z-10 motion-reduce:hover:translate-y-0 group focus-within:z-10 focus-within:ring-1 focus-within:ring-primary/20">
      <div>
        {/* Top Metadata Header */}
        <div className="flex items-center justify-between gap-2 mb-2 pb-1 border-b border-primary/5">
          <span className="font-label-mono text-[10px] text-on-surface-variant group-hover:text-primary transition-colors duration-200 uppercase tracking-wider font-medium">
            {project.number} {project.category ? `// ${project.category}` : ''}
          </span>
          {project.tag && (
            <span className="font-label-mono text-[10px] text-[#006a61] group-hover:text-primary transition-colors duration-200 uppercase tracking-wider font-semibold">
              {project.tag}
            </span>
          )}
        </div>

        {/* Project Title with Subtle Font Weight & Accent Rule Micro-interaction */}
        <h4 className="font-headline-sm text-[1.1rem] leading-snug font-semibold group-hover:font-bold text-primary mb-unit-xs transition-all duration-200">
          <Link 
            to={`/projects/${project.slug}`}
            className="inline relative text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
          >
            <span className="relative">
              {project.title}
              <span 
                className="absolute left-0 -bottom-0.5 w-0 h-[1.5px] bg-[#32D6C5] group-hover:w-full transition-all duration-200 ease-out motion-reduce:transition-none"
                aria-hidden="true"
              />
            </span>
          </Link>
        </h4>

        {/* Problem & Build Summary */}
        <p className="font-body-sm text-[13px] text-on-surface-variant group-hover:text-on-surface transition-colors duration-200 leading-relaxed mb-unit-md">
          {project.triad.build}
        </p>
      </div>

      {/* Tech Stack & Coordinated Action Controls */}
      <div className="pt-unit-sm border-t border-primary/10 flex flex-wrap items-center justify-between gap-2">
        <span className="font-label-mono text-[10px] text-on-surface-variant group-hover:text-primary/90 transition-colors duration-200">
          {project.stack}
        </span>
        <div className="flex items-center gap-2.5 shrink-0">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View source code for ${project.title} on GitHub`}
              className="font-label-mono text-[10px] text-on-surface-variant hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary inline-flex items-center gap-0.5"
            >
              <span>CODE</span>
              <ArrowOutward className="w-2.5 h-2.5 text-[#F05A3C]" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open live URL for ${project.title}`}
              className="text-[#006a61] hover:text-primary transition-colors font-label-mono text-[10px] font-semibold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary inline-flex items-center gap-0.5"
            >
              <span>LIVE</span>
              <ArrowOutward className="w-2.5 h-2.5 text-[#32D6C5]" />
            </a>
          )}
          <Link
            to={`/projects/${project.slug}`}
            aria-label={`View details and architecture for ${project.title}`}
            className="font-label-mono text-[10px] text-primary group-hover:text-[#F05A3C] font-semibold group-hover:font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
          >
            <span>DETAILS</span>
            <span 
              className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0 text-[#F05A3C]" 
              aria-hidden="true"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProjectArchiveItem;
