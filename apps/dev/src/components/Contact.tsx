"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { Magnetic } from "@/components/Magnetic";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/system/SectionHeader";
import { CornerTicks } from "@/components/system/Tile";
import { personalInfo } from "@/data/portfolio";

const TYPES = ["Website / landing page", "Custom software / tool", "AI & automation", "Not sure yet"];
const TIMELINES = ["As soon as possible", "Next 1–2 months", "Flexible"];

function Chips({ label, options, value, onChange }: { label: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <fieldset>
      <legend className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-navy-300">{label}</legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o}
            type="button"
            aria-pressed={value === o}
            onClick={() => onChange(o)}
            className={clsx(
              "rounded-full border px-4 py-2 text-sm transition-colors",
              value === o ? "border-lemon-400 bg-lemon-400 text-navy-950" : "border-white/20 text-paper hover:border-lemon-400 hover:text-lemon-400",
            )}
          >
            {o}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

/** Brief composer: the visitor picks a few options and it writes the email for them. */
export function Contact() {
  const [type, setType] = useState(TYPES[0]);
  const [timeline, setTimeline] = useState(TIMELINES[1]);
  const [problem, setProblem] = useState("");
  const [copied, setCopied] = useState(false);

  const mailto = useMemo(() => {
    const body = `Hi Atreya,\n\nProject type: ${type}\nTimeline: ${timeline}\n\nWhat is broken / slow right now:\n${problem || "…"}\n\nWho it is for:\n\n`;
    return `mailto:${personalInfo.email}?subject=${encodeURIComponent(`Project enquiry: ${type}`)}&body=${encodeURIComponent(body)}`;
  }, [type, timeline, problem]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable: the mailto link still works */
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="px-5 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[96rem]">
        <SectionHeader
          index="09"
          label="Start a project"
          meta="Replies personally"
          id="contact-title"
          title={
            <>
              Tell me what&rsquo;s <span className="font-serif font-normal italic text-lemon-400">broken</span>.
            </>
          }
          intro="Two lines is plenty. I reply personally with a plan, and tell you honestly if I'm not the right fit."
        />

        <Reveal className="mt-16">
          <div className="relative grid gap-10 overflow-hidden rounded-[1.75rem] border border-white/10 bg-navy-900/80 p-6 md:p-10 lg:grid-cols-12">
            <CornerTicks />
            <div className="space-y-8 lg:col-span-7">
              <Chips label="01 · What do you need?" options={TYPES} value={type} onChange={setType} />
              <Chips label="02 · When?" options={TIMELINES} value={timeline} onChange={setTimeline} />
              <div>
                <label htmlFor="problem" className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-navy-300">
                  03 · What&rsquo;s slowing you down?
                </label>
                <textarea
                  id="problem"
                  rows={3}
                  value={problem}
                  onChange={(e) => setProblem(e.target.value)}
                  placeholder="e.g. Bookings come in over WhatsApp and we keep double-booking rooms."
                  className="mt-3 w-full resize-none rounded-2xl border border-white/15 bg-navy-950/70 p-4 text-paper placeholder:text-navy-500 focus:border-lemon-400 focus:outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col justify-between gap-8 lg:col-span-5">
              <div className="flex items-center gap-4">
                <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full ring-2 ring-lemon-400 ring-offset-4 ring-offset-navy-900">
                  <Image src="/atreyapfp.webp" alt="Atreya Kamat" fill sizes="64px" className="object-cover" />
                </span>
                <p className="text-[15px] leading-snug text-paper">
                  You&rsquo;ll hear back from <strong className="text-lemon-400">me</strong>, not a sales team.
                  <span className="mt-1 block font-mono text-[10.5px] uppercase tracking-[0.18em] text-navy-300">Atreya Kamat · Goa</span>
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-navy-950/80 p-5 font-mono text-xs leading-relaxed text-navy-300">
                <p className="text-[10.5px] uppercase tracking-[0.2em] text-lemon-400">Preview</p>
                <p className="mt-3">
                  <span className="text-navy-500">subject:</span> <span className="text-paper">Project enquiry: {type}</span>
                </p>
                <p>
                  <span className="text-navy-500">timeline:</span> <span className="text-paper">{timeline}</span>
                </p>
                <p className="line-clamp-3">
                  <span className="text-navy-500">problem:</span> <span className="text-paper">{problem || "…"}</span>
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Magnetic strength={0.15}>
                  <a
                    href={mailto}
                    className="inline-flex items-center gap-3 rounded-full bg-lemon-400 px-7 py-4 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-navy-950 transition-colors hover:bg-lemon-300"
                  >
                    Send the brief <span aria-hidden>→</span>
                  </a>
                </Magnetic>
                <button
                  type="button"
                  onClick={copy}
                  className="rounded-full border border-white/25 px-6 py-4 font-mono text-xs uppercase tracking-[0.18em] text-paper transition-colors hover:border-lemon-400 hover:text-lemon-400"
                >
                  {copied ? "Copied ✓" : personalInfo.email}
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
