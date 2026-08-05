import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { PageShell } from './PageShell';
import { PageTitle } from '../components/layout/primitives';
import { BodyText } from '../components/layout/primitives';

interface ErrorBoundaryProps {
  children: ReactNode;
}

export function ErrorBoundary({ children }: ErrorBoundaryProps) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = () => setHasError(true);
    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleError);
    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleError);
    };
  }, []);

  if (hasError) {
    return (
      <PageShell>
        <section className="page-shell__content">
          <PageTitle>Something went wrong</PageTitle>
          <BodyText>There was an error loading this page. Please refresh or return to the home page.</BodyText>
        </section>
      </PageShell>
    );
  }

  return <>{children}</>;
}
