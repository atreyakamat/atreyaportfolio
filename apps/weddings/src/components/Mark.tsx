/** Saltwater mark: a setting sun over two lines of water. */
export function Mark({ size = 28, className }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} aria-hidden className={className}>
      <circle cx="32" cy="34" r="15" fill="var(--color-sun-400)" />
      <rect x="4" y="34" width="56" height="26" fill="var(--color-tide-950)" />
      <path d="M4 38c5.5 0 5.5-3 11-3s5.5 3 11 3 5.5-3 11-3 5.5 3 11 3 5.5-3 11-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M12 47c4.5 0 4.5-2.5 9-2.5s4.5 2.5 9 2.5 4.5-2.5 9-2.5 4.5 2.5 9 2.5" fill="none" stroke="var(--color-tide-300)" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}
