import type { ReactNode } from 'react';
import { CleanHeader } from '../components/Navigation/CleanHeader';
import { CleanFooter } from '../components/Footer/CleanFooter';
import { SmoothCursor } from '../components/ui/SmoothCursor';

interface PageShellProps {
  children: ReactNode;
  className?: string;
}

export function PageShell({ children, className = '' }: PageShellProps) {
  return (
    <div className="min-h-screen bg-[#F7F5EF] text-[#151515] relative selection:bg-[#32d6c5] selection:text-[#151515] font-sans">
      <SmoothCursor />
      <CleanHeader />
      <main className={`relative z-10 pt-24 pb-16 ${className}`.trim()}>{children}</main>
      <CleanFooter />
    </div>
  );
}
