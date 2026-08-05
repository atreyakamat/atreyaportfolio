import type { ReactNode } from 'react';
import { Section, PageTitle, BodyText } from '../layout/primitives';

interface ContactSectionProps {
  title?: string;
  description?: string;
  children?: ReactNode;
}

export function ContactSection({ title = 'Contact section', description = 'A contact form or connective details will be rendered here.', children }: ContactSectionProps) {
  return (
    <Section>
      <PageTitle>{title}</PageTitle>
      <BodyText>{description}</BodyText>
      {children}
    </Section>
  );
}
