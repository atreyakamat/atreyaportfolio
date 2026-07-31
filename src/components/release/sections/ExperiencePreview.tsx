import { ArrowUpRight } from 'lucide-react';
import { RouteLink } from '../../../app/router';
import { currentExperience } from '../../../content/experience';
import { trackEvent } from '../../../lib/analytics';

export function ExperiencePreview() {
  return (
    <section className="preview-section" aria-labelledby="experience-preview-title">
      <div className="container preview-grid">
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <h2 id="experience-preview-title">Production work, product ownership and community leadership.</h2>
        </div>

        <div className="preview-list">
          {currentExperience.slice(0, 3).map((item) => (
            <article className="timeline-row" key={item.id}>
              <div>
                <span>{item.period}</span>
                <strong>{item.organization}</strong>
              </div>
              <div>
                <h3>{item.role}</h3>
                <p>{item.summary}</p>
              </div>
            </article>
          ))}

          <RouteLink
            to="/experience"
            className="editorial-link editorial-link--large"
            onClick={() => trackEvent('experience_view', { source: 'home_preview' })}
          >
            View full experience <ArrowUpRight aria-hidden="true" size={18} />
          </RouteLink>
        </div>
      </div>
    </section>
  );
}
