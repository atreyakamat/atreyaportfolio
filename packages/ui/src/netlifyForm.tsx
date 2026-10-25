"use client";

import { useState } from "react";

/*
  Netlify Forms for statically exported Next.js sites.

  Netlify detects forms at deploy time from plain HTML, so each app ships
  public/__forms.html with a hidden copy of its form (same name, same field
  names). The React form then POSTs url-encoded data to that file, which
  Netlify intercepts and stores as a submission (and emails, if enabled).
  Locally there is no Netlify, so the POST fails and the UI falls back to email.
*/

export type FormState = "idle" | "sending" | "sent" | "error";

/** POSTs a submission to Netlify Forms. Throws on any non-2xx response. */
export async function submitNetlifyForm(formName: string, data: Record<string, string>): Promise<void> {
  const body = new URLSearchParams({ "form-name": formName, "bot-field": "", ...data }).toString();
  const res = await fetch("/__forms.html", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
  if (!res.ok) throw new Error(`Form submission failed (${res.status})`);
}

/** Loose check: an email address, or a phone number of 8–15 digits. */
export function isValidContact(value: string): boolean {
  const v = value.trim();
  if (!v) return false;
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return true;
  const digits = v.replace(/\D/g, "");
  return /^[+\d\s().-]+$/.test(v) && digits.length >= 8 && digits.length <= 15;
}

/**
 * Form state for one Netlify form: validation of the contact field,
 * the honeypot, and the idle → sending → sent / error lifecycle.
 */
export function useNetlifyForm(formName: string) {
  const [state, setState] = useState<FormState>("idle");
  const [contactError, setContactError] = useState<string | null>(null);
  const [trap, setTrap] = useState("");

  const submit = async (contact: string, data: Record<string, string>) => {
    if (!isValidContact(contact)) {
      setContactError(contact.trim() ? "That doesn't look like an email or phone number." : "Add an email or WhatsApp number so I can reply.");
      return;
    }
    setContactError(null);
    // A filled honeypot means a bot: pretend success, send nothing.
    if (trap) {
      setState("sent");
      return;
    }
    setState("sending");
    try {
      await submitNetlifyForm(formName, { ...data, contact: contact.trim() });
      setState("sent");
    } catch {
      setState("error");
    }
  };

  return { state, setState, contactError, setContactError, trap, setTrap, submit };
}

/** Hidden spam trap. Real people never see or fill it. */
export function Honeypot({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <p aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
      <label>
        Leave this empty
        <input name="bot-field" tabIndex={-1} autoComplete="off" value={value} onChange={(e) => onChange(e.target.value)} />
      </label>
    </p>
  );
}
