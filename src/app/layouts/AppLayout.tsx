import type { ReactNode } from 'react';
import { CleanHeader } from '../../components/Navigation/CleanHeader';
import { StickyFooter } from '../../components/Footer/StickyFooter';

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="app-shell">
      <CleanHeader />
      <main className="app-main">{children}</main>
      <StickyFooter />
    </div>
  );
}
