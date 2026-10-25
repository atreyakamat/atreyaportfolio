"use client";

import { useState } from "react";
import clsx from "clsx";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { Mark } from "@/components/Mark";

const links = [
  { label: "Couples", href: "#packages", track: "couples" },
  { label: "Videographers", href: "#packages", track: "editors" },
  { label: "Reels", href: "#reels" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);
  useMotionValueEvent(scrollY, "change", (y) => setSolid(y > 40));

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-4 transition-[background-color,border-color,backdrop-filter] duration-500 md:px-10",
        solid ? "border-b border-salt/10 bg-tide-950/80 backdrop-blur-md" : "border-b border-transparent",
      )}
    >
      <a href="#top" className="flex items-center gap-2.5 text-salt" aria-label="Saltwater Studios, back to top">
        <Mark size={30} />
        <span className="font-display text-xl leading-none tracking-tight">
          Saltwater <span className="italic text-sand">Studios</span>
        </span>
      </a>
      <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            onClick={() => l.track && window.dispatchEvent(new CustomEvent("saltwater:track", { detail: l.track }))}
            className="text-sm text-salt/80 transition-colors hover:text-sun-400"
          >
            {l.label}
          </a>
        ))}
      </nav>
      <a
        href="#enquire"
        className="rounded-full bg-salt px-5 py-2.5 text-sm font-semibold text-tide-950 transition-colors hover:bg-sun-400"
      >
        Check your date
      </a>
    </header>
  );
}
