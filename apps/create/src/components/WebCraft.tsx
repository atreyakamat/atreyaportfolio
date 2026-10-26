"use client";

import type { PointerEvent } from "react";
import Image from "next/image";
import { Reveal } from "@atreya/ui/Reveal";
import { SectionHeader } from "@atreya/ui/SectionHeader";
import { webWorks } from "@/data/create";

/** Gallery of live sites. Screens sit in greyscale; hover brings colour and an acid glow that follows the cursor. */
export function WebCraft() {
  const onMove = (e: PointerEvent<HTMLAnchorElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--gx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--gy", `${e.clientY - r.top}px`);
  };

  return (
    <section id="web" aria-labelledby="web-title" className="border-t-2 border-acid bg-ink px-5 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[96rem]">
        <SectionHeader
          index="05"
          label="Web as craft"
          meta={`${webWorks.length} live sites`}
          id="web-title"
          title={
            <>
              Websites with a <span className="font-serif font-normal italic text-acid">point of view.</span>
            </>
          }
          intro="Every one of these is live. Each has its own look, built for its own audience. Hover to bring it to life."
        />

        <ul className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          {webWorks.map((w, i) => (
            <li key={w.name} className={i < 2 ? "lg:col-span-3" : "lg:col-span-2"}>
              <Reveal delay={(i % 3) * 0.07} className="h-full">
                <a
                  href={w.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onPointerMove={onMove}
                  className="group relative block h-full border-2 border-paper/15 bg-ink p-3 transition-colors hover:border-acid"
                  style={{ ["--gx" as string]: "50%", ["--gy" as string]: "50%" }}
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: "radial-gradient(380px circle at var(--gx) var(--gy), rgba(255,107,26,0.16), transparent 60%)" }}
                  />
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={w.image}
                      alt={`${w.name} home page`}
                      fill
                      sizes="(min-width: 1024px) 45vw, 90vw"
                      className="object-cover object-top grayscale transition duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
                    />
                  </div>
                  <div className="relative mt-4 flex items-end justify-between gap-4 px-1 pb-1">
                    <div>
                      <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-paper/55">{w.kind}</p>
                      <h3 className="mt-1 font-display text-2xl font-extrabold tracking-tight">{w.name}</h3>
                    </div>
                    <span aria-hidden className="font-mono text-2xl text-acid transition-transform duration-300 group-hover:-rotate-45">
                      →
                    </span>
                  </div>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
