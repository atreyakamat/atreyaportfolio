"use client";

import { useState } from "react";
import { FormStatus } from "@atreya/ui/FormStatus";
import { Honeypot, useNetlifyForm } from "@atreya/ui/netlifyForm";
import { site } from "@/data/site";

const FORM_NAME = "blog-subscribe";

/**
 * Email capture for new posts. Submissions land in Netlify Forms; there is no
 * automated newsletter behind it, so the copy promises only what happens.
 */
export function Subscribe({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const form = useNetlifyForm(FORM_NAME);
  const sent = form.state === "sent";

  const mailto = `mailto:${site.email}?subject=${encodeURIComponent("Tell me when you post")}&body=${encodeURIComponent(
    `Hi Atreya, let me know when you publish something new. My email: ${email || "…"}\n`,
  )}`;

  return (
    <section
      aria-labelledby="subscribe-title"
      className={`rounded-[1.5rem] border border-rule bg-card p-7 ${compact ? "" : "md:p-10"}`}
    >
      <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-muted">No schedule, no spam</p>
      <h2 id="subscribe-title" className={`mt-3 font-bold leading-tight tracking-[-0.02em] ${compact ? "text-2xl" : "text-3xl md:text-4xl"}`}>
        Get new posts <span className="marker">in your inbox</span>.
      </h2>
      <p className="mt-3 max-w-lg leading-relaxed text-muted">
        Leave your email and I&rsquo;ll write to you when something new goes up. I send these myself, so expect a real
        email and nothing else.
      </p>

      <form
        name={FORM_NAME}
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          void form.submit(email, { email });
        }}
        className="mt-6 flex flex-col gap-3 sm:flex-row"
      >
        <Honeypot value={form.trap} onChange={form.setTrap} />
        <div className="flex-1">
          <label htmlFor="subscribe-email" className="sr-only">
            Your email address
          </label>
          <input
            id="subscribe-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (form.contactError) form.setContactError(null);
            }}
            aria-invalid={form.contactError ? true : undefined}
            aria-describedby={form.contactError ? "subscribe-error" : undefined}
            placeholder="you@email.com"
            className="w-full rounded-full border border-rule bg-page px-5 py-3.5 text-ink placeholder:text-muted focus:border-link focus:outline-none"
          />
        </div>
        <button
          type="submit"
          disabled={form.state === "sending" || sent}
          className="shrink-0 rounded-full bg-ink px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.16em] text-page transition-opacity hover:opacity-85 disabled:opacity-60"
        >
          {sent ? "You're on the list ✓" : form.state === "sending" ? "Adding…" : "Notify me"}
        </button>
      </form>
      {form.contactError && (
        <p id="subscribe-error" className="mt-2 text-sm text-link-hover">
          {form.contactError}
        </p>
      )}
      <FormStatus state={form.state} mailto={mailto} className="mt-2 text-muted" linkClassName="text-link" />
    </section>
  );
}
