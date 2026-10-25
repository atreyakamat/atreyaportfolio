"use client";

import { useState } from "react";
import { Reveal } from "@atreya/ui/Reveal";
import { SectionHeader } from "@atreya/ui/SectionHeader";
import { TiltCard } from "@atreya/ui/TiltCard";
import { TileLabel } from "@atreya/ui/Tile";
import { CobaltPortrait } from "@/components/CobaltPortrait";
import { bios, topics } from "@/data/speak";

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setCopied(true);
          setTimeout(() => setCopied(false), 1800);
        } catch {
          /* clipboard unavailable: text stays selectable */
        }
      }}
      className="rounded-full border border-white/25 px-4 py-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-white transition-colors hover:border-lemonade hover:text-lemonade"
    >
      {copied ? "Copied ✓" : label}
    </button>
  );
}

/** Everything an organiser needs: headshot, short + long bio, topic list. */
export function SpeakerKit() {
  const topicList = topics.map((t) => `• ${t.title}`).join("\n");
  return (
    <section id="kit" aria-labelledby="kit-title" className="bg-cobalt-950 px-5 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[96rem]">
        <SectionHeader
          index="04"
          label="Speaker kit"
          meta="Copy · paste · done"
          id="kit-title"
          title={
            <>
              For organisers, <span className="font-serif font-normal italic text-lemonade">ready to paste</span>.
            </>
          }
          intro="Bios, a headshot and a topic list, so your poster, page and intro are sorted in a couple of minutes."
        />

        <div className="mt-16 grid gap-3 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <TiltCard className="h-full rounded-[1.5rem]">
              <div className="flex h-full flex-col rounded-[1.5rem] border border-white/10 bg-cobalt-900 p-3">
                <CobaltPortrait className="aspect-[4/5]" />
                <div className="flex flex-wrap items-center justify-between gap-3 px-2 pb-2 pt-4">
                  <TileLabel className="text-cobalt-300">Headshot · 1086×1448</TileLabel>
                  <a
                    href="/atreyapfp.webp"
                    download="atreya-kamat-headshot.webp"
                    className="rounded-full bg-lemonade px-4 py-2 font-mono text-[10.5px] font-semibold uppercase tracking-[0.18em] text-cobalt-950 transition-colors hover:bg-white"
                  >
                    Download ↓
                  </a>
                </div>
              </div>
            </TiltCard>
          </Reveal>

          <div className="grid gap-3 lg:col-span-8">
            {(
              [
                ["Short bio", "~40 words · posters, social", bios.short],
                ["Long bio", "~120 words · event pages, intros", bios.long],
              ] as const
            ).map(([title, meta, text], i) => (
              <Reveal key={title} delay={0.08 * (i + 1)}>
                <article className="rounded-[1.5rem] border border-white/10 bg-cobalt-900/70 p-6 md:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="font-display text-2xl font-bold tracking-tight text-white">{title}</h3>
                      <p className="mt-1 font-mono text-[10.5px] uppercase tracking-[0.18em] text-cobalt-300">{meta}</p>
                    </div>
                    <CopyButton text={text} label="Copy bio" />
                  </div>
                  <p className="mt-5 max-w-3xl leading-relaxed text-white/90">{text}</p>
                </article>
              </Reveal>
            ))}
            <Reveal delay={0.24}>
              <article className="flex flex-wrap items-center justify-between gap-4 rounded-[1.5rem] bg-lemonade p-6 text-cobalt-950 md:p-8">
                <div>
                  <h3 className="font-display text-2xl font-bold tracking-tight">Topic list</h3>
                  <p className="mt-1 font-mono text-[10.5px] uppercase tracking-[0.18em] text-cobalt-700">{topics.length} topics · plain text</p>
                </div>
                <button
                  type="button"
                  onClick={() => navigator.clipboard?.writeText(topicList).catch(() => {})}
                  className="rounded-full bg-cobalt-950 px-5 py-2.5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-lemonade transition-colors hover:bg-cobalt-700"
                >
                  Copy topics
                </button>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
