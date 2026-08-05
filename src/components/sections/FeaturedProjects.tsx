import type { ReactNode } from 'react';
import { Section, PageTitle, BodyText } from '../layout/primitives';

interface FeaturedProjectsProps {
  title?: string;
  description?: string;
  children?: ReactNode;
}

export function FeaturedProjects({ title = 'Featured projects', description = 'Project cards and highlights will be placed here.', children }: FeaturedProjectsProps) {
  return (
    <Section>
      <PageTitle>{title}</PageTitle>
      <BodyText>{description}</BodyText>
      {children}
    </Section>
  );
}
