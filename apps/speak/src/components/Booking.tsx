"use client";

import { useMemo, useState } from "react";
import clsx from "clsx";
import { Magnetic } from "@atreya/ui/Magnetic";
import { Reveal } from "@atreya/ui/Reveal";
import { CornerTicks } from "@atreya/ui/Tile";
import { FormStatus } from "@atreya/ui/FormStatus";
import { Honeypot, useNetlifyForm } from "@atreya/ui/netlifyForm";
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

const FORM_NAME = "talk-booking";
const labelCls = "font-mono text-[10.5px] uppercase tracking-[0.2em] text-white/80";

/**
 * Booking brief composer. Sends through Netlify Forms (fields mirrored in
 * public/__forms.html); the prefilled email stays as a fallback.
 */
export function Booking() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [details, setDetails] = useState("");
  const form = useNetlifyForm(FORM_NAME);
  const [event, setEvent] = useState("");
  const [date, setDate] = useState("");
  const [format, setFormat] = useState(formats[1].title);
  const [audience, setAudience] = useState(AUDIENCES[1]);
  const [topic, setTopic] = useState(topics[0].title);

  const mailto = useMemo(
    () =>
      bookingMailto(
        `Speaking enquiry: ${event || format}`,
        `Hi Atreya,\n\nName: ${name || "…"}\nReach me at: ${contact || "…"}\nEvent: ${event || "…"}\nDate / timing: ${date || "…"}\nFormat: ${format}\nAudience: ${audience}\nTopic: ${topic}\n\nAnything else:\n${details}\n`,
      ),
    [event, date, format, audience, topic, name, contact, details],
  );
  const sent = form.state === "sent";

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    void form.submit(contact, { name, event, date, format, audience, topic, details });
  };

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
          intro="Pick a few options, add how to reach you, and send. I reply personally, and tell you honestly if the fit isn't right."
        />

        <Reveal className="mt-16">
          <form
            name={FORM_NAME}
            onSubmit={onSubmit}
            noValidate
            className="relative grid gap-10 overflow-hidden rounded-[1.75rem] border border-white/20 bg-cobalt-700/60 p-6 md:p-10 lg:grid-cols-12"
          >
            <CornerTicks className="text-lemonade/70" />
            <Honeypot value={form.trap} onChange={form.setTrap} />
            <div className="grid gap-8 lg:col-span-7">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="event" className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-white/80">
                    01 · Event
                  </label>
                  <input id="event" name="event" value={event} onChange={(e) => setEvent(e.target.value)} placeholder="e.g. College tech fest" className={inputCls} />
                </div>
                <div>
                  <label htmlFor="date" className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-white/80">
                    02 · Date / timing
                  </label>
                  <input id="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="e.g. Second week of March" className={inputCls} />
                </div>
              </div>
              <Chips label="03 · Format" options={formats.map((f) => f.title)} value={format} onChange={setFormat} />
              <Chips label="04 · Audience" options={AUDIENCES} value={audience} onChange={setAudience} />
              <Chips label="05 · Topic" options={topics.map((t) => t.title)} value={topic} onChange={setTopic} />
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="book-name" className={labelCls}>
                    06 · Your name
                  </label>
                  <input id="book-name" name="name" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Organiser" className={inputCls} />
                </div>
                <div>
                  <label htmlFor="book-contact" className={labelCls}>
                    07 · Email or WhatsApp number <span aria-hidden className="text-lemonade">*</span>
                  </label>
                  <input
                    id="book-contact"
                    name="contact"
                    required
                    value={contact}
                    onChange={(e) => {
                      setContact(e.target.value);
                      if (form.contactError) form.setContactError(null);
                    }}
                    aria-invalid={form.contactError ? true : undefined}
                    aria-describedby={form.contactError ? "book-contact-error" : undefined}
                    placeholder="you@college.edu or +91…"
                    className={inputCls}
                  />
                  {form.contactError && (
                    <p id="book-contact-error" className="mt-2 text-sm text-lemonade">
                      {form.contactError}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="details" className={labelCls}>
                  08 · Anything else (optional)
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={2}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Audience size, venue, session length…"
                  className={`${inputCls} resize-none`}
                />
              </div>
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
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3">
                  <Magnetic strength={0.15}>
                    <button
                      type="submit"
                      disabled={form.state === "sending" || sent}
                      className="inline-flex items-center gap-3 rounded-full bg-lemonade px-7 py-4 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-cobalt-950 transition-colors hover:bg-white disabled:cursor-default disabled:opacity-85"
                    >
                      {sent ? "Brief sent ✓" : form.state === "sending" ? "Sending…" : "Send the brief"} {!sent && <span aria-hidden>→</span>}
                    </button>
                  </Magnetic>
                  <a href={`mailto:${site.email}`} className="font-mono text-xs uppercase tracking-[0.16em] text-white underline-offset-4 hover:text-lemonade hover:underline">
                    {site.email}
                  </a>
                </div>
                <FormStatus state={form.state} mailto={mailto} className="text-white" linkClassName="text-lemonade" />
                <a href={mailto} className="inline-block font-mono text-[11px] uppercase tracking-[0.16em] text-white/75 underline-offset-4 hover:text-lemonade hover:underline">
                  or email directly →
                </a>
              </div>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
