import type { SVGProps } from "react";

type MonogramProps = Omit<SVGProps<SVGSVGElement>, "viewBox"> & {
  /** Rendered width and height in px. */
  size?: number;
  /** Colour of the AK strokes. Defaults to currentColor. */
  stroke?: string;
  /** Colour of the accent dot. */
  accent?: string;
};

/**
 * The AK monogram: a shared spine joins the A and the K.
 * Strokes use currentColor so it inherits text colour on any background.
 */
export function Monogram({
  size = 40,
  stroke = "currentColor",
  accent = "var(--color-lemon-400)",
  ...props
}: MonogramProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      fill="none"
      role="img"
      aria-label="AK monogram"
      {...props}
    >
      <g stroke={stroke} strokeLinecap="round" strokeLinejoin="round">
        <line x1="16" y1="48" x2="34" y2="16" strokeWidth="5" />
        <line x1="34" y1="16" x2="34" y2="48" strokeWidth="5" />
        <line x1="23" y1="34" x2="34" y2="34" strokeWidth="4.5" />
        <line x1="34" y1="32" x2="48" y2="16" strokeWidth="5" />
        <line x1="34" y1="32" x2="48" y2="48" strokeWidth="5" />
      </g>
      <circle cx="51" cy="13" r="3" fill={accent} />
    </svg>
  );
}
