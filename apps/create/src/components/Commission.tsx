"use client";

import { useMemo, useState } from "react";
import clsx from "clsx";
import { Magnetic } from "@atreya/ui/Magnetic";
import { Reveal } from "@atreya/ui/Reveal";
import { SectionHeader } from "@atreya/ui/SectionHeader";
import { site } from "@/data/create";

const KINDS = ["Reel edit", "Brand / stickers", "Creative website", "Something else"];

/** Commission composer: pick what you need, describe it, and it writes the email. */
export function Commission() {
  const [kind, setKind] = useState(KINDS[0]);
  const [idea, setIdea] = useState("");

  const mailto = useMemo(() => {
    const body = `Hi Atreya,\n\nI'd like: ${kind}\n\nThe idea:\n${idea || "…"}\n\nLinks / references:\n\nTimeline:\n`;
    return `mailto:${site.email}?subject=${encodeURIComponent(`Commission: ${kind}`)}&body=${encodeURIComponent(body)}`;
  }, [kind, idea]);

  return (
    <section id="commission" aria-labelledby="commission-title" className="bg-ink px-5 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[96rem]">
        <SectionHeader
          index="05"
          label="Commission"
          meta="Replies personally"
          id="commission-title"
          title={
            <>
              Got an idea? <span className="font-serif font-normal italic text-acid">Let&rsquo;s make it.</span>
            </>
          }
        />
        <Reveal className="mt-14">
          <div className="grid gap-10 border-2 border-acid p-6 md:p-10 lg:grid-cols-12">
            <div className="space-y-8 lg:col-span-7">
              <fieldset>
                <legend className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-paper/60">01 · What are we making?</legend>
                <div className="mt-3 flex flex-wrap gap-2">
                  {KINDS.map((k) => (
                    <button
                      key={k}
                      type="button"
                      aria-pressed={kind === k}
                      onClick={() => setKind(k)}
                      className={clsx(
                        "border-2 px-4 py-2 text-sm font-semibold transition-colors",
                        kind === k ? "border-acid bg-acid text-ink" : "border-paper/25 text-paper hover:border-acid hover:text-acid",
                      )}
                    >
                      {k}
                    </button>
                  ))}
                </div>
              </fieldset>
              <div>
                <label htmlFor="idea" className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-paper/60">
                  02 · The idea, in a line or two
                </label>
                <textarea
                  id="idea"
                  rows={4}
                  value={idea}
                  onChange={(e) => setIdea(e.target.value)}
                  placeholder="e.g. A 30-second reel for our café's new menu, using clips we already shot."
                  className="mt-3 w-full resize-none border-2 border-paper/25 bg-ink p-4 text-paper placeholder:text-paper/35 focus:border-acid focus:outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col justify-between gap-8 lg:col-span-5">
              <p className="font-display text-3xl font-extrabold leading-tight tracking-tight">
                You&rsquo;ll hear back from <span className="bg-acid px-1 text-ink">me</span>, with honest thoughts on whether I&rsquo;m the right fit.
              </p>
              <div className="flex flex-wrap gap-3">
                <Magnetic strength={0.15}>
                  <a href={mailto} className="inline-flex items-center gap-3 bg-acid px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.18em] text-ink">
                    Send the idea <span aria-hidden>→</span>
                  </a>
                </Magnetic>
                <a href={`mailto:${site.email}`} className="border-2 border-paper/25 px-6 py-4 font-mono text-xs uppercase tracking-[0.16em] text-paper transition-colors hover:border-acid hover:text-acid">
                  {site.email}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
