import clsx from "clsx";

export type Site = "dev" | "teach" | "speak" | "create";

export const SITES: { id: Site; label: string; href: string; blurb: string }[] = [
  { id: "dev", label: "dev", href: "https://atreyakamat.dev", blurb: "Software & systems" },
  { id: "teach", label: "teach", href: "https://teach.atreyakamat.dev", blurb: "Tuition & workshops" },
  { id: "speak", label: "speak", href: "https://speak.atreyakamat.dev", blurb: "Talks" },
  { id: "create", label: "create", href: "https://create.atreyakamat.dev", blurb: "Creative work" },
];

/**
 * Small switcher linking the four atreyakamat.dev sites.
 * `tone` picks colours for dark or light headers.
 */
export function EcosystemNav({
  current,
  tone = "dark",
  className,
}: {
  current: Site;
  tone?: "dark" | "light";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <nav aria-label="Atreya Kamat sites" className={clsx("flex items-center gap-1 font-mono text-[10.5px] uppercase tracking-[0.16em]", className)}>
      {SITES.map((s) => {
        const on = s.id === current;
        return (
          <a
            key={s.id}
            href={s.href}
            aria-current={on ? "page" : undefined}
            title={s.blurb}
            className={clsx(
              "rounded-full px-2.5 py-1 transition-colors",
              on && (dark ? "bg-lemon-400 text-navy-950" : "bg-ink-navy text-marker"),
              !on && (dark ? "text-navy-300 hover:text-lemon-400" : "text-ink-navy/60 hover:text-ink-navy"),
            )}
          >
            {s.label}
          </a>
        );
      })}
    </nav>
  );
}
