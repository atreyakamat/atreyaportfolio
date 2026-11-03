"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

/** Sticky contents list that marks the section you are reading. */
export function Toc({ headings }: { headings: { id: string; text: string }[] }) {
  const [active, setActive] = useState<string>(headings[0]?.id ?? "");

  useEffect(() => {
    if (!headings.length) return;
    const nodes = headings.map((h) => document.getElementById(h.id)).filter((n): n is HTMLElement => n !== null);
    if (!nodes.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -65% 0px", threshold: 0 },
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [headings]);

  if (headings.length < 3) return null;

  return (
    <nav aria-label="On this page" className="sticky top-24">
      <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-muted">On this page</p>
      <ul className="mt-4 space-y-1 border-l border-rule">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              aria-current={active === h.id ? "location" : undefined}
              className={clsx(
                "-ml-px block border-l-2 py-1.5 pl-4 text-[14px] leading-snug transition-colors",
                active === h.id ? "border-link font-semibold text-link" : "border-transparent text-muted hover:text-ink",
              )}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
