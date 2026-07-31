import { ArrowUpRight } from 'lucide-react';
import { RouteLink } from '../../../app/router';
import { featuredSkills } from '../../../content/skills';
import { trackEvent } from '../../../lib/analytics';

export function SkillsPreview() {
  return (
    <section className="skills-preview" aria-labelledby="skills-preview-title">
      <div className="container">
        <div className="skills-preview__intro">
          <p className="eyebrow">Capabilities</p>
          <h2 id="skills-preview-title">Frontend, backend, data, infrastructure and AI where they create leverage.</h2>
        </div>

        <div className="skill-chip-grid" aria-label="Selected skills">
          {featuredSkills.slice(0, 12).map((skill) => (
            <span className="skill-chip" key={`${skill.group}-${skill.name}`}>
              <strong>{skill.name}</strong>
              <small>{skill.group}</small>
            </span>
          ))}
        </div>

        <RouteLink
          to="/skills"
          className="editorial-link editorial-link--large"
          onClick={() => trackEvent('skills_view', { source: 'home_preview' })}
        >
          Explore skills <ArrowUpRight aria-hidden="true" size={18} />
        </RouteLink>
      </div>
    </section>
  );
}
