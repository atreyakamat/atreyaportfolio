import { experienceEntries } from "@/data/portfolio";

// Only names that appear in the portfolio data: employers and stack.
const items = [
  ...experienceEntries.map((e) => e.company),
  "Next.js",
  "React",
  "TypeScript",
  "Python",
  "PostgreSQL",
  "Docker",
  "TensorFlow",
  "Ollama",
];

function Track({ hidden }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden}>
      {items.map((item, i) => (
        <li key={`${item}-${i}`} className="flex items-center">
          <span className="whitespace-nowrap px-8 font-display text-3xl font-semibold uppercase tracking-tight text-navy-100/90 md:text-5xl">
            {item}
          </span>
          <span aria-hidden className="text-2xl text-lemon-400 md:text-4xl">
            ✦
          </span>
        </li>
      ))}
    </ul>
  );
}

export function Marquee() {
  return (
    <section
      aria-label="Where I have worked and what I build with"
      className="marquee overflow-hidden border-y border-white/10 bg-navy-900 py-6"
    >
      <div className="marquee-track flex w-max">
        <Track />
        <Track hidden />
      </div>
    </section>
  );
}
