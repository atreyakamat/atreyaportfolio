import { ArrowUpRight } from 'lucide-react';
import type { CSSProperties } from 'react';
import { RouteLink } from '../../../app/router';
import { featuredProjects } from '../../../content/projects';
import { trackEvent } from '../../../lib/analytics';
import { ProjectMedia } from '../projects/ProjectMedia';

export function StackingProjects() {
  return (
    <section className="stacking-section" id="selected-projects" aria-labelledby="selected-projects-title">
      <div className="container section-heading section-heading--split">
        <div>
          <p className="eyebrow">Selected Projects</p>
          <h2 id="selected-projects-title">Things I&apos;ve built.</h2>
        </div>
        <p>
          A concise proof layer for products, systems and tools. The details stay on the project
          pages; the homepage stays edited.
        </p>
      </div>

      <div className="container stacking-cards">
        {featuredProjects.map((project, index) => (
          <article className="stacking-card" key={project.slug} style={{ '--stack-index': index } as CSSProperties}>
            <div className="stacking-card__media">
              <ProjectMedia media={project.cover} title={project.title} priority={index === 0} />
            </div>
            <div className="stacking-card__copy">
              <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <p className="eyebrow">
                  {project.category} / {project.year}
                </p>
                <h3>{project.title}</h3>
                <p>{project.shortDescription}</p>
              </div>
              <RouteLink
                to={`/projects/${project.slug}`}
                className="editorial-link"
                onClick={() => trackEvent('project_open', { slug: project.slug, source: 'stacking_projects' })}
              >
                View project <ArrowUpRight aria-hidden="true" size={16} />
              </RouteLink>
            </div>
          </article>
        ))}
      </div>

      <div className="container section-cta">
        <RouteLink
          to="/projects"
          className="editorial-link editorial-link--large"
          onClick={() => trackEvent('projects_view_all')}
        >
          See the full project archive <ArrowUpRight aria-hidden="true" size={18} />
        </RouteLink>
      </div>
    </section>
  );
}
