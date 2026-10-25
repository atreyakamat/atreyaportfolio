import localFont from "next/font/local";

/*
  Self-hosted fonts through next/font: preloaded, with size-matched fallbacks,
  so headlines don't re-render late (better LCP, no layout shift).
  Files come from the @fontsource packages at the repo root.
*/
export const display = localFont({
  src: "../../../../node_modules/@fontsource-variable/bricolage-grotesque/files/bricolage-grotesque-latin-wght-normal.woff2",
  weight: "200 800",
  variable: "--nf-display",
  display: "swap",
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
});

export const serif = localFont({
  src: [
    { path: "../../../../node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../../../../node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--nf-serif",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

export const mono = localFont({
  src: "../../../../node_modules/@fontsource-variable/jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2",
  weight: "100 800",
  variable: "--nf-mono",
  display: "swap",
  preload: false,
  fallback: ["ui-monospace", "Menlo", "monospace"],
});
