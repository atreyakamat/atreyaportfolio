"use client";

import { useMemo, useState } from "react";
import clsx from "clsx";
import { Magnetic } from "@atreya/ui/Magnetic";
import { Reveal } from "@atreya/ui/Reveal";
import { CornerTicks } from "@atreya/ui/Tile";
import { CobaltHeader } from "@/components/CobaltHeader";
import { bookingMailto, formats, site, topics } from "@/data/speak";

const AUDIENCES = ["School students", "College students", "Developers", "Founders & business owners", "Mixed"];

function Chips({ label, options, value, onChange }: { label: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <fieldset>
      <legend className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-white/80">{label}</legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o}
            type="button"
            aria-pressed={value === o}
            onClick={() => onChange(o)}
            className={clsx(
              "rounded-full border px-4 py-2 text-sm transition-colors",
              value === o ? "border-lemonade bg-lemonade text-cobalt-950" : "border-white/30 text-white hover:border-lemonade hover:text-lemonade",
            )}
          >
            {o}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

const inputCls =
  "mt-3 w-full rounded-2xl border border-white/25 bg-cobalt-950/40 p-4 text-white placeholder:text-cobalt-300 focus:border-lemonade focus:outline-none";

/** Booking brief composer: builds the enquiry email for the organiser. */
export function Booking() {
  const [event, setEvent] = useState("");
  const [date, setDate] = useState("");
  const [format, setFormat] = useState(formats[1].title);
  const [audience, setAudience] = useState(AUDIENCES[1]);
  const [topic, setTopic] = useState(topics[0].title);

  const mailto = useMemo(
    () =>
      bookingMailto(
        `Speaking enquiry: ${event || format}`,
        `Hi Atreya,\n\nEvent: ${event || "…"}\nDate / timing: ${date || "…"}\nFormat: ${format}\nAudience: ${audience}\nTopic: ${topic}\n\nAnything else:\n\n`,
      ),
    [event, date, format, audience, topic],
  );

  return (
    <section id="book" aria-labelledby="book-title" className="bg-cobalt-500 px-5 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[96rem]">
        <CobaltHeader
          index="05"
          label="Book a talk"
          meta="Replies personally"
          id="book-title"
          title={
            <>
              Got an event? <span className="font-serif font-normal italic text-lemonade">Let&rsquo;s talk.</span>
            </>
          }
          intro="Pick a few options and it writes the email for you. I reply personally, and tell you honestly if the fit isn't right."
        />

        <Reveal className="mt-16">
          <div className="relative grid gap-10 overflow-hidden rounded-[1.75rem] border border-white/20 bg-cobalt-700/60 p-6 md:p-10 lg:grid-cols-12">
            <CornerTicks className="text-lemonade/70" />
            <div className="grid gap-8 lg:col-span-7">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="event" className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-white/80">
                    01 · Event
                  </label>
                  <input id="event" value={event} onChange={(e) => setEvent(e.target.value)} placeholder="e.g. College tech fest" className={inputCls} />
                </div>
                <div>
                  <label htmlFor="date" className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-white/80">
                    02 · Date / timing
                  </label>
                  <input id="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="e.g. Second week of March" className={inputCls} />
                </div>
              </div>
              <Chips label="03 · Format" options={formats.map((f) => f.title)} value={format} onChange={setFormat} />
              <Chips label="04 · Audience" options={AUDIENCES} value={audience} onChange={setAudience} />
              <Chips label="05 · Topic" options={topics.map((t) => t.title)} value={topic} onChange={setTopic} />
            </div>

            <div className="flex flex-col justify-between gap-8 lg:col-span-5">
              <div className="rounded-2xl border border-white/15 bg-cobalt-950/70 p-5 font-mono text-xs leading-relaxed text-cobalt-300">
                <p className="text-[10.5px] uppercase tracking-[0.2em] text-lemonade">Preview</p>
                {[
                  ["event", event || "…"],
                  ["date", date || "…"],
                  ["format", format],
                  ["audience", audience],
                  ["topic", topic],
                ].map(([k, v]) => (
                  <p key={k} className={k === "event" ? "mt-3" : undefined}>
                    <span className="text-cobalt-300">{k}:</span> <span className="text-white">{v}</span>
                  </p>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Magnetic strength={0.15}>
                  <a
                    href={mailto}
                    className="inline-flex items-center gap-3 rounded-full bg-lemonade px-7 py-4 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-cobalt-950 transition-colors hover:bg-white"
                  >
                    Send the brief <span aria-hidden>→</span>
                  </a>
                </Magnetic>
                <a href={`mailto:${site.email}`} className="font-mono text-xs uppercase tracking-[0.16em] text-white underline-offset-4 hover:text-lemonade hover:underline">
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
