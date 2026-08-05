import { useEffect } from 'react';
import { updateSeo } from '../lib/seo';
import { PageShell } from './PageShell';
import { PageTitle, BodyText } from '../components/layout/primitives';
import { Placeholder } from '../components/ui/Placeholder';

export function AboutPage() {
  useEffect(() => {
    updateSeo({
      title: 'About',
      description: 'Scaffolded about page ready for human context and professional narrative.',
      path: '/about',
    });
  }, []);

  return (
    <PageShell>
      <section className="page-shell__content">
        <PageTitle>About</PageTitle>
        <BodyText>This section will introduce Atreya with background, philosophy, and personal context.</BodyText>
        <Placeholder
          title="About section scaffold"
          description="A dedicated about section will be implemented here with profile details, credibility markers, and core values."
        />
      </section>
    </PageShell>
  );
}
