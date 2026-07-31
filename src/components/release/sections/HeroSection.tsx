import { Globe, Link2, MapPin } from 'lucide-react';
import { Button } from '../Button';
import { profile } from '../../../content/profile';
import { trackEvent } from '../../../lib/analytics';

export function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="home-title">
      <div className="grainient" aria-hidden="true" />

      <div className="container hero-section__grid">
        <div className="hero-section__copy">
          <p className="eyebrow">Hello, I&apos;m Atreya</p>
          <h1 id="home-title">{profile.headline}</h1>
          <p className="hero-section__intro">{profile.intro}</p>

          <div className="hero-section__actions" aria-label="Primary actions">
            <Button href="/projects">See projects</Button>
            <Button href="/resume" variant="secondary" icon="right">
              Resume
            </Button>
          </div>

          <div className="hero-section__socials" aria-label="Social links">
            <span>
              <MapPin aria-hidden="true" size={16} />
              {profile.location}
            </span>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent('github_open', { source: 'hero' })}
            >
              <Globe aria-hidden="true" size={16} />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent('linkedin_open', { source: 'hero' })}
            >
              <Link2 aria-hidden="true" size={16} />
              LinkedIn
            </a>
          </div>
        </div>

        <figure className="hero-portrait">
          <img src={profile.portrait} alt="Atreya Kamat working in a bright studio space in Goa" />
          <figcaption>
            <span>Software engineer</span>
            <span>Goa / India</span>
          </figcaption>
        </figure>
      </div>

      <div className="container credibility-line" aria-label="Credibility highlights">
        {profile.credibility.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}
