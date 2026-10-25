"use client";

import { useEffect, useMemo, useState } from "react";
import clsx from "clsx";
import { FormStatus } from "@atreya/ui/FormStatus";
import { Honeypot, useNetlifyForm } from "@atreya/ui/netlifyForm";
import { site, type TrackId } from "@/data/site";
import { mailLink, TRACK_EVENT, waLink } from "@/lib/contact";

const ROLES = ["Couple", "Videographer / Photographer"] as const;
const PACKAGES = ["Couple reels · ₹6,000–8,000", "Reel editing · from ₹2,500 per reel", "Not sure yet"] as const;

const field =
  "mt-2 w-full rounded-xl border border-salt/20 bg-tide-950/60 px-4 py-3.5 text-salt placeholder:text-tide-300/70 focus:border-sun-400 focus:outline-none";
const label = "font-mono text-[11px] uppercase tracking-[0.2em] text-tide-300";

function Chips<T extends string>({ name, options, value, onChange }: { name: string; options: readonly T[]; value: T; onChange: (v: T) => void }) {
  return (
    <fieldset>
      <legend className={label}>{name}</legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o}
            type="button"
            aria-pressed={value === o}
            onClick={() => onChange(o)}
            className={clsx(
              "rounded-full border px-4 py-2.5 text-sm transition-colors",
              value === o ? "border-sun-400 bg-sun-400 text-tide-950" : "border-salt/25 text-salt hover:border-sun-400",
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
  const [role, setRole] = useState<(typeof ROLES)[number]>("Couple");
  const [pkg, setPkg] = useState<(typeof PACKAGES)[number]>(PACKAGES[0]);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [venue, setVenue] = useState("");
  const [message, setMessage] = useState("");
  const form = useNetlifyForm("wedding-enquiry");

  // Choosing a track anywhere on the page preselects the matching role and package.
  useEffect(() => {
    const apply = (e: Event) => {
      const t = (e as CustomEvent<TrackId>).detail;
      if (t === "editors") {
        setRole("Videographer / Photographer");
        setPkg(PACKAGES[1]);
      } else if (t === "couples") {
        setRole("Couple");
        setPkg(PACKAGES[0]);
      }
    };
    window.addEventListener(TRACK_EVENT, apply);
    window.addEventListener("saltwater:package", apply);
    return () => {
      window.removeEventListener(TRACK_EVENT, apply);
      window.removeEventListener("saltwater:package", apply);
    };
  }, []);

  const summary = useMemo(
    () =>
      `Hi Saltwater Studios,\n\nName: ${name || "…"}\nI am: ${role}\nPackage: ${pkg}\nDate: ${date || "…"}\nVenue: ${venue || "…"}\n\n${message}`.trim(),
    [name, role, pkg, date, venue, message],
  );
  const mailto = mailLink(`Wedding reels enquiry: ${role}`, summary);
  const wa = waLink(summary);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    form.submit(contact, { name, role, date, venue, package: pkg, message });
  };

  return (
    <section id="enquire" aria-labelledby="enquire-title" className="relative overflow-hidden bg-tide-900 px-5 py-28 md:px-10 md:py-36">
      <div aria-hidden className="leak pointer-events-none absolute -right-[10%] top-0 h-[60vh] w-[60vh] rounded-full bg-[radial-gradient(circle,rgba(242,166,90,0.22),transparent_65%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-sand">06 · Enquire</p>
          <h2 id="enquire-title" className="mt-5 font-display text-5xl leading-[0.95] text-salt md:text-7xl">
            Tell me about <em className="text-sun-400">the day.</em>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-salt/80">
            Your date, the venue and what you need. I reply personally, usually on WhatsApp.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-[#06281a]">
              WhatsApp {site.whatsappDisplay}
            </a>
            <a href={mailto} className="inline-flex items-center rounded-full border border-salt/25 px-6 py-3.5 text-sm text-salt hover:border-sun-400">
              Email instead
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} noValidate className="relative space-y-7 rounded-[1.75rem] border border-salt/15 bg-tide-950/50 p-6 md:p-10 lg:col-span-7">
          <Honeypot value={form.trap} onChange={form.setTrap} />
          <Chips name="I am" options={ROLES} value={role} onChange={setRole} />
          <Chips name="Package" options={PACKAGES} value={pkg} onChange={setPkg} />
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className={label}>Your name</span>
              <input id="wed-name" name="name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" className={field} placeholder="e.g. Ria & Karan" />
            </label>
            <label className="block">
              <span className={label}>
                Email or WhatsApp number <span className="text-sun-400">*</span>
              </span>
              <input
                id="wed-contact"
                name="contact"
                value={contact}
                onChange={(e) => {
                  setContact(e.target.value);
                  if (form.contactError) form.setContactError(null);
                }}
                aria-invalid={!!form.contactError}
                aria-describedby={form.contactError ? "wed-contact-error" : undefined}
                required
                autoComplete="email"
                className={clsx(field, form.contactError && "border-sun-500")}
                placeholder="you@email.com or +91…"
              />
              {form.contactError && (
                <span id="wed-contact-error" className="mt-2 block text-sm text-sun-400">
                  {form.contactError}
                </span>
              )}
            </label>
            <label className="block">
              <span className={label}>Wedding date</span>
              <input id="wed-date" name="date" value={date} onChange={(e) => setDate(e.target.value)} className={field} placeholder="e.g. 14 Dec 2026" />
            </label>
            <label className="block">
              <span className={label}>Venue / area</span>
              <input id="wed-venue" name="venue" value={venue} onChange={(e) => setVenue(e.target.value)} className={field} placeholder="e.g. Candolim, North Goa" />
            </label>
          </div>
          <label className="block">
            <span className={label}>Anything else</span>
            <textarea
              id="wed-message"
              name="message"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={clsx(field, "resize-none")}
              placeholder="The vibe you want, events you'd like covered, or how many reels you need edited."
            />
          </label>

          {form.state === "sent" ? (
            <div role="status" className="rounded-2xl bg-salt p-6 text-tide-950">
              <p className="font-display text-3xl">Got it, thank you.</p>
              <p className="mt-2 text-tide-800">I&rsquo;ll reply personally. Want to talk sooner?</p>
              <a href={wa} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block font-semibold text-sun-700 underline underline-offset-4">
                Message on WhatsApp
              </a>
            </div>
          ) : (
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={form.state === "sending"}
                className="inline-flex items-center gap-2 rounded-full bg-sun-400 px-8 py-4 text-sm font-semibold text-tide-950 transition-transform hover:-translate-y-0.5 disabled:opacity-70"
              >
                {form.state === "sending" ? "Sending…" : "Send enquiry"} <span aria-hidden>→</span>
              </button>
              <a href={mailto} className="text-sm text-tide-300 underline underline-offset-4 hover:text-salt">
                or email directly
              </a>
            </div>
          )}
          <FormStatus state={form.state === "sent" ? "idle" : form.state} mailto={mailto} className="text-salt/80" linkClassName="text-sun-400" />
        </form>
      </div>
    </section>
  );
}
