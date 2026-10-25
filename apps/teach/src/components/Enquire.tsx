"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { Magnetic } from "@atreya/ui/Magnetic";
import { Reveal } from "@atreya/ui/Reveal";
import { SectionHeader } from "@atreya/ui/SectionHeader";
import { CornerTicks } from "@atreya/ui/Tile";
import { Marker } from "@/components/Marker";
import { formatOptions, levels, tracks } from "@/data/teach";
import { FormStatus } from "@atreya/ui/FormStatus";
import { Honeypot, useNetlifyForm } from "@atreya/ui/netlifyForm";
import { ENQUIRY_FORM, enquiryChannel, enquiryHref, mailtoHref } from "@/lib/enquiry";

const inputCls =
  "mt-3 w-full rounded-2xl border border-ink-navy/20 bg-sunlit p-3.5 text-ink-navy placeholder:text-ink-navy/40 focus:border-ink-navy focus:outline-none";
const labelCls = "font-mono text-[10.5px] uppercase tracking-[0.2em] text-ink-navy/75";

function Chips({ label, options, value, onChange }: { label: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <fieldset>
      <legend className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-ink-navy/75">{label}</legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o}
            type="button"
            aria-pressed={value === o}
            onClick={() => onChange(o)}
            className={clsx(
              "rounded-full border px-4 py-2 text-sm transition-colors",
              value === o ? "border-ink-navy bg-ink-navy text-marker" : "border-ink-navy/20 bg-white/70 text-ink-navy hover:border-ink-navy",
            )}
          >
            {o}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

export function Enquire() {
  const [level, setLevel] = useState(levels[0]);
  const [track, setTrack] = useState(tracks[0].name);
  const [format, setFormat] = useState(formatOptions[0]);
  const [area, setArea] = useState("");
  const [note, setNote] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const form = useNetlifyForm(ENQUIRY_FORM);

  const message = useMemo(
    () =>
      `Hi Atreya,\n\nName: ${name || "…"}\nReach me at: ${contact || "…"}\nStudent level: ${level}\nTrack: ${track}\nFormat: ${format}\nArea in Goa: ${area || "…"}\n\nWhat I need help with:\n${note || "…"}\n`,
    [level, track, format, area, note, name, contact],
  );
  const subject = `Tuition enquiry: ${track}`;
  const href = enquiryHref(message, subject);
  const mailto = mailtoHref(message, subject);
  const sent = form.state === "sent";

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    void form.submit(contact, { name, level, track, format, area, note });
  };

  return (
    <section id="enquire" aria-labelledby="enquire-title" className="px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[96rem]">
        <SectionHeader
          tone="light"
          index="06"
          label="Book a first session"
          meta="Replies personally"
          id="enquire-title"
          title={
            <>
              Tell me where you&rsquo;re <Marker><span className="font-serif font-normal italic">stuck</span></Marker>.
            </>
          }
          intro="Pick a few options, add a line and how to reach you. It comes straight to me, and I reply personally."
        />

        <Reveal className="mt-14">
          <form
            name={ENQUIRY_FORM}
            onSubmit={onSubmit}
            noValidate
            className="relative grid gap-10 overflow-hidden rounded-[1.75rem] bg-white/80 p-6 ring-1 ring-ink-navy/10 md:p-10 lg:grid-cols-12"
          >
            <CornerTicks className="text-ink-navy/25" />
            <Honeypot value={form.trap} onChange={form.setTrap} />
            <div className="space-y-7 lg:col-span-7">
              <Chips label="01 · Who is learning?" options={levels} value={level} onChange={setLevel} />
              <Chips label="02 · Which track?" options={tracks.map((t) => t.name)} value={track} onChange={setTrack} />
              <Chips label="03 · Format" options={formatOptions} value={format} onChange={setFormat} />
              <div className="grid gap-5 md:grid-cols-[1fr_2fr]">
                <div>
                  <label htmlFor="area" className={labelCls}>
                    04 · Area in Goa
                  </label>
                  <input id="area" name="area" value={area} onChange={(e) => setArea(e.target.value)} placeholder="e.g. Mapusa" className={inputCls} />
                </div>
                <div>
                  <label htmlFor="need" className={labelCls}>
                    05 · What do you need help with?
                  </label>
                  <textarea
                    id="need"
                    name="note"
                    rows={2}
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="e.g. Loops and arrays don't make sense yet."
                    className={`${inputCls} resize-none`}
                  />
                </div>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="enq-name" className={labelCls}>
                    06 · Your name
                  </label>
                  <input id="enq-name" name="name" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Student or parent" className={inputCls} />
                </div>
                <div>
                  <label htmlFor="enq-contact" className={labelCls}>
                    07 · Email or WhatsApp number <span aria-hidden>*</span>
                  </label>
                  <input
                    id="enq-contact"
                    name="contact"
                    required
                    value={contact}
                    onChange={(e) => {
                      setContact(e.target.value);
                      if (form.contactError) form.setContactError(null);
                    }}
                    aria-invalid={form.contactError ? true : undefined}
                    aria-describedby={form.contactError ? "enq-contact-error" : undefined}
                    placeholder="you@mail.com or +91…"
                    className={inputCls}
                  />
                  {form.contactError && (
                    <p id="enq-contact-error" className="mt-2 text-sm font-medium text-red-700">
                      {form.contactError}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-8 lg:col-span-5">
              <div className="flex items-center gap-4">
                <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full ring-4 ring-marker">
                  <Image src="/atreyapfp.webp" alt="Atreya Kamat" fill sizes="64px" className="object-cover" />
                </span>
                <p className="text-[15px] leading-snug text-ink-navy">
                  You&rsquo;ll hear back from me directly.
                  <span className="mt-1 block font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-navy/75">Atreya Kamat · Goa</span>
                </p>
              </div>
              <div className="rounded-2xl bg-ink-navy p-5 font-mono text-xs leading-relaxed text-navy-100">
                <p className="text-[10.5px] uppercase tracking-[0.2em] text-marker">Your message</p>
                <pre className="mt-3 whitespace-pre-wrap font-mono text-[12px] text-paper">{message}</pre>
              </div>
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3">
                  <Magnetic strength={0.15}>
                    <button
                      type="submit"
                      disabled={form.state === "sending" || sent}
                      className="inline-flex items-center gap-3 rounded-full bg-ink-navy px-7 py-4 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-marker transition-transform hover:-translate-y-0.5 disabled:cursor-default disabled:opacity-85"
                    >
                      {sent ? "Enquiry sent ✓" : form.state === "sending" ? "Sending…" : "Send enquiry"} {!sent && <span aria-hidden>→</span>}
                    </button>
                  </Magnetic>
                  {enquiryChannel === "WhatsApp" && (
                    <a
                      href={href}
                      className="rounded-full border border-ink-navy/25 px-6 py-4 font-mono text-xs uppercase tracking-[0.18em] text-ink-navy transition-colors hover:border-ink-navy"
                    >
                      Or WhatsApp me
                    </a>
                  )}
                </div>
                <FormStatus state={form.state} mailto={mailto} className="text-ink-navy" linkClassName="text-ink-navy decoration-marker decoration-2" />
                <a href={mailto} className="inline-block font-mono text-[11px] uppercase tracking-[0.16em] text-ink-navy/75 underline-offset-4 hover:text-ink-navy hover:underline">
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
