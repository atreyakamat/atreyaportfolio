import type { Block } from "@/data/posts";

/** Renders typed post blocks with long-form reading typography. */
export function PostBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-6 text-[1.075rem] leading-[1.75] text-navy-100">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "p":
            return <p key={i}>{b.text}</p>;
          case "h2":
            return (
              <h2 key={i} id={b.id} className="scroll-mt-28 pt-8 font-display text-3xl font-extrabold leading-tight tracking-tight text-paper md:text-4xl">
                {b.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="pt-3 font-display text-xl font-bold tracking-tight text-paper md:text-2xl">
                {b.text}
              </h3>
            );
          case "ul":
            return (
              <ul key={i} className="space-y-3 pl-1">
                {b.items.map((it) => (
                  <li key={it} className="flex gap-3">
                    <span aria-hidden className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-lemon-400" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="space-y-4">
                {b.items.map((it, n) => (
                  <li key={it} className="grid grid-cols-[2.25rem_1fr] gap-2">
                    <span className="pt-[0.2em] font-mono text-sm text-lemon-400">{String(n + 1).padStart(2, "0")}</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ol>
            );
          case "callout":
            return (
              <aside key={i} className="relative rounded-2xl border border-lemon-400/40 bg-navy-900 p-6">
                {b.title && <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-lemon-400">{b.title}</p>}
                <p className="mt-2 text-paper">{b.text}</p>
              </aside>
            );
          case "quote":
            return (
              <blockquote key={i} className="border-l-2 border-lemon-400 pl-5 font-serif text-2xl italic text-paper">
                {b.text}
              </blockquote>
            );
        }
      })}
    </div>
  );
}
