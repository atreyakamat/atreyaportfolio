import { useEffect } from 'react';
import { updateSeo } from '../lib/seo';
import { PageShell } from './PageShell';
import { PageTitle, BodyText } from '../components/layout/primitives';
import { ContactSection } from '../components/sections/ContactSection';

export function ContactPage() {
  useEffect(() => {
    updateSeo({
      title: 'Contact',
      description: 'Scaffolded contact page prepared for future email, phone, and social touchpoints.',
      path: '/contact',
    });
  }, []);

  return (
    <PageShell>
      <section className="page-shell__content">
        <PageTitle>Contact</PageTitle>
        <BodyText>This page will house contact details, form actions, and connection pathways.</BodyText>
        <ContactSection />
      </section>
    </PageShell>
  );
}
