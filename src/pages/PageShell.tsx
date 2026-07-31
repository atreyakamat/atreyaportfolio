import type { ReactNode } from 'react';
import { CleanHeader } from '../components/Navigation/CleanHeader';
import { CleanFooter } from '../components/Footer/CleanFooter';

interface PageShellProps {
  children: ReactNode;
  className?: string;
}

export function PageShell({ children, className = '' }: PageShellProps) {
  return (
    <div className="min-h-screen bg-[#fafaf8] text-[#111113] relative selection:bg-[#0d9488] selection:text-white font-sans">
      <CleanHeader />
      <main className={`relative z-10 pt-24 pb-20 ${className}`.trim()}>{children}</main>
      <CleanFooter />
    </div>
  );
}
