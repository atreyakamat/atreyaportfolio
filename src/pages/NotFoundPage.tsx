import { PageShell } from './PageShell';
import { PageTitle } from '../components/layout/primitives';
import { BodyText } from '../components/layout/primitives';
import { RouteLink } from '../app/router';

export function NotFoundPage() {
  return (
    <PageShell>
      <section className="page-shell__content">
        <PageTitle>Page not found</PageTitle>
        <BodyText>This page does not exist yet. Return to the main sections to continue browsing.</BodyText>
        <RouteLink to="/">Go home</RouteLink>
      </section>
    </PageShell>
  );
}
