import type { ReactNode } from 'react';
import { Section, PageTitle, BodyText } from '../layout/primitives';

interface HeroSectionProps {
  headline?: string;
  subheadline?: string;
  children?: ReactNode;
}

export function HeroSection({ headline = 'Hero section', subheadline = 'This area will hold the page introduction and core positioning copy.', children }: HeroSectionProps) {
  return (
    <Section>
      <PageTitle>{headline}</PageTitle>
      <BodyText>{subheadline}</BodyText>
      {children}
    </Section>
  );
}
