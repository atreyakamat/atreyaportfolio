"use client";

import { useMemo, useRef, useState, useSyncExternalStore } from "react";

const noopSubscribe = () => () => {};
import clsx from "clsx";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@atreya/ui/Reveal";
import { SectionHeader } from "@atreya/ui/SectionHeader";
import { FormStatus } from "@atreya/ui/FormStatus";
import { Honeypot, useNetlifyForm } from "@atreya/ui/netlifyForm";
import { personalInfo } from "@/data/portfolio";

const FORM_NAME = "project-pass";
const NEEDS = ["Website", "Custom software", "AI automation", "Not sure yet"] as const;
type Need = (typeof NEEDS)[number];

const STAGES = ["Discover", "Design", "Build", "Launch", "Support"];

const inputCls =
  "mt-2 w-full rounded-2xl border border-white/15 bg-navy-950/70 px-4 py-3.5 text-paper placeholder:text-navy-300 focus:border-lemon-400 focus:outline-none";
const labelCls = "font-mono text-[10.5px] uppercase tracking-[0.2em] text-navy-300";

function passId(seed: string) {
  let h = 2166136261;
  for (const c of seed) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  return `AK-${(h >>> 0).toString(36).toUpperCase().slice(0, 5).padEnd(5, "0")}`;
}

function today() {
  return new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
}

/** Font family actually loaded by next/font for a given Tailwind font class. */
function fontOf(el: HTMLElement | null, fallback: string) {
  return el ? getComputedStyle(el).fontFamily : fallback;
}

/** Draws the pass as a 1080×1350 (4:5) PNG, ready for a story or a post. */
async function renderPng(p: { name: string; business: string; need: string; id: string; date: string }, fonts: { display: string; serif: string; mono: string }) {
  await document.fonts.ready;
  const W = 1080;
  const H = 1350;
  const c = document.createElement("canvas");
  c.width = W;
  c.height = H;
  const g = c.getContext("2d")!;
  const NAVY = "#070b1a";
  const SURF = "#111836";
  const LEMON = "#e9ff4f";
  const PAPER = "#f5f1e8";
  const CORAL = "#ff7a59";
  const MUTED = "#a3acd4";

  g.fillStyle = NAVY;
  g.fillRect(0, 0, W, H);
  // grid
  g.strokeStyle = "rgba(163,172,212,0.07)";
  g.lineWidth = 1;
  for (let x = 0; x < W; x += 54) {
    g.beginPath();
    g.moveTo(x, 0);
    g.lineTo(x, H);
    g.stroke();
  }
  for (let y = 0; y < H; y += 54) {
    g.beginPath();
    g.moveTo(0, y);
    g.lineTo(W, y);
    g.stroke();
  }

  // card
  const cx = 90;
  const cy = 120;
  const cw = W - 180;
  const ch = H - 300;
  g.fillStyle = SURF;
  g.beginPath();
  g.roundRect(cx, cy, cw, ch, 44);
  g.fill();
  g.strokeStyle = "rgba(255,255,255,0.15)";
  g.lineWidth = 2;
  g.stroke();

  // lemon header band
  g.save();
  g.beginPath();
  g.roundRect(cx, cy, cw, 190, [44, 44, 0, 0]);
  g.clip();
  g.fillStyle = LEMON;
  g.fillRect(cx, cy, cw, 190);
  g.restore();
  g.fillStyle = NAVY;
  g.font = `600 26px ${fonts.mono}`;
  g.fillText("PROJECT PASS · ATREYAKAMAT.DEV", cx + 56, cy + 72);
  g.font = `800 64px ${fonts.display}`;
  g.fillText(p.id, cx + 56, cy + 150);
  g.textAlign = "right";
  g.font = `600 26px ${fonts.mono}`;
  g.fillText(p.date.toUpperCase(), cx + cw - 56, cy + 72);
  g.textAlign = "left";

  // perforation
  const perfY = cy + 190;
  g.fillStyle = NAVY;
  g.beginPath();
  g.arc(cx, perfY, 26, 0, Math.PI * 2);
  g.arc(cx + cw, perfY, 26, 0, Math.PI * 2);
  g.fill();

  const label = (t: string, y: number) => {
    g.fillStyle = MUTED;
    g.font = `500 24px ${fonts.mono}`;
    g.fillText(t, cx + 56, y);
  };
  const fit = (t: string, max: number, size: number, family: string, weight: string) => {
    let s = size;
    g.font = `${weight} ${s}px ${family}`;
    while (g.measureText(t).width > max && s > 30) {
      s -= 4;
      g.font = `${weight} ${s}px ${family}`;
    }
  };

  label("ISSUED TO", cy + 290);
  g.fillStyle = PAPER;
  fit(p.name || "Your name", cw - 112, 96, fonts.display, "800");
  g.fillText(p.name || "Your name", cx + 56, cy + 385);

  label("FOR", cy + 470);
  g.fillStyle = LEMON;
  fit(p.business || "Your business", cw - 112, 64, fonts.serif, "italic 400");
  g.fillText(p.business || "Your business", cx + 56, cy + 545);

  label("BUILDING", cy + 640);
  g.fillStyle = CORAL;
  g.beginPath();
  g.font = `700 30px ${fonts.mono}`;
  const nw = g.measureText(p.need.toUpperCase()).width + 56;
  g.roundRect(cx + 56, cy + 668, nw, 64, 32);
  g.fill();
  g.fillStyle = NAVY;
  g.fillText(p.need.toUpperCase(), cx + 84, cy + 712);

  // stage track
  const ty = cy + 850;
  const tx0 = cx + 80;
  const tx1 = cx + cw - 80;
  g.strokeStyle = "#232e5e";
  g.lineWidth = 4;
  g.beginPath();
  g.moveTo(tx0, ty);
  g.lineTo(tx1, ty);
  g.stroke();
  STAGES.forEach((s, i) => {
    const x = tx0 + ((tx1 - tx0) / (STAGES.length - 1)) * i;
    g.fillStyle = i === 0 ? LEMON : NAVY;
    g.strokeStyle = i === 0 ? LEMON : "#4f5ea8";
    g.lineWidth = 3;
    g.beginPath();
    g.arc(x, ty, 18, 0, Math.PI * 2);
    g.fill();
    g.stroke();
    g.fillStyle = i === 0 ? LEMON : MUTED;
    g.font = `500 20px ${fonts.mono}`;
    g.textAlign = "center";
    g.fillText(s.toUpperCase(), x, ty + 54);
    g.textAlign = "left";
  });

  // footer
  g.fillStyle = PAPER;
  g.font = `800 40px ${fonts.display}`;
  g.fillText("Atreya Kamat", 90, H - 92);
  g.fillStyle = MUTED;
  g.font = `500 24px ${fonts.mono}`;
  g.fillText("PRODUCT ENGINEER · GOA, IN", 90, H - 52);
  g.textAlign = "right";
  g.fillStyle = LEMON;
  g.font = `600 26px ${fonts.mono}`;
  g.fillText("STAGE 01 → DISCOVER", W - 90, H - 72);

  return new Promise<Blob>((res, rej) => c.toBlob((b) => (b ? res(b) : rej(new Error("toBlob failed"))), "image/png"));
}

/**
 * "Get your project pass": the visitor fills three fields, a boarding-pass style
 * card renders live, and issuing it sends the enquiry through Netlify Forms.
 * Afterwards they can download a 4:5 PNG of the pass or share it.
 */
export function ProjectPass() {
  const reduce = useReducedMotion();
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [need, setNeed] = useState<Need>("Website");
  const [contact, setContact] = useState("");
  const [busy, setBusy] = useState(false);
  const form = useNetlifyForm(FORM_NAME);
  const displayRef = useRef<HTMLSpanElement>(null);
  const serifRef = useRef<HTMLSpanElement>(null);
  const monoRef = useRef<HTMLSpanElement>(null);

  // Client date only (the page is prerendered at build time).
  const date = useSyncExternalStore(noopSubscribe, today, () => "");
  const id = useMemo(() => passId(`${name}|${business}|${need}`), [name, business, need]);
  const issued = form.state === "sent" || form.state === "error";

  const mailto = `mailto:${personalInfo.email}?subject=${encodeURIComponent(`Project pass ${id}: ${need}`)}&body=${encodeURIComponent(
    `Hi Atreya,\n\nName: ${name}\nBusiness: ${business}\nNeed: ${need}\nReach me at: ${contact}\n`,
  )}`;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    void form.submit(contact, { name, business, need, pass: id });
  };

  const getBlob = () =>
    renderPng(
      { name: name.trim(), business: business.trim(), need, id, date },
      {
        display: fontOf(displayRef.current, "sans-serif"),
        serif: fontOf(serifRef.current, "serif"),
        mono: fontOf(monoRef.current, "monospace"),
      },
    );

  const download = async () => {
    setBusy(true);
    try {
      const blob = await getBlob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `project-pass-${id}.png`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 2000);
    } finally {
      setBusy(false);
    }
  };

  const share = async () => {
    const text = `Got my project pass ${id} from atreyakamat.dev`;
    setBusy(true);
    try {
      const blob = await getBlob();
      const file = new File([blob], `project-pass-${id}.png`, { type: "image/png" });
      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({ files: [file], text, url: personalInfo.siteUrl });
      } else {
        window.open(`https://wa.me/?text=${encodeURIComponent(`${text} → ${personalInfo.siteUrl}`)}`, "_blank", "noopener,noreferrer");
      }
    } catch {
      /* share sheet dismissed */
    } finally {
      setBusy(false);
    }
  };

  return (
    <section id="pass" aria-labelledby="pass-title" className="px-5 py-28 md:px-10 md:py-36">
      {/* Hidden spans give the canvas the exact next/font families. */}
      <span aria-hidden className="sr-only">
        <span ref={displayRef} className="font-display" />
        <span ref={serifRef} className="font-serif" />
        <span ref={monoRef} className="font-mono" />
      </span>
      <div className="mx-auto max-w-[96rem]">
        <SectionHeader
          index="09"
          label="Project pass"
          meta="Takes 20 seconds"
          id="pass-title"
          title={
            <>
              Get your <span className="font-serif font-normal italic text-lemon-400">project pass.</span>
            </>
          }
          intro="Three fields and you are on the board. Your pass is your enquiry: I see it, and you get a card to keep."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-5">
            <form name={FORM_NAME} onSubmit={onSubmit} noValidate className="relative space-y-6 rounded-[1.75rem] border border-white/10 bg-navy-900/80 p-6 md:p-8">
              <Honeypot value={form.trap} onChange={form.setTrap} />
              <div>
                <label htmlFor="pass-name" className={labelCls}>
                  01 · Your name
                </label>
                <input id="pass-name" name="name" maxLength={28} autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Priya Naik" className={inputCls} />
              </div>
              <div>
                <label htmlFor="pass-biz" className={labelCls}>
                  02 · Business
                </label>
                <input id="pass-biz" name="business" maxLength={34} autoComplete="organization" value={business} onChange={(e) => setBusiness(e.target.value)} placeholder="Café Azul, Panjim" className={inputCls} />
              </div>
              <fieldset>
                <legend className={labelCls}>03 · What are we building?</legend>
                <div className="mt-3 flex flex-wrap gap-2">
                  {NEEDS.map((n) => (
                    <button
                      key={n}
                      type="button"
                      aria-pressed={need === n}
                      onClick={() => setNeed(n)}
                      className={clsx(
                        "rounded-full border px-4 py-2 text-sm transition-colors",
                        need === n ? "border-coral-400 bg-coral-400 text-navy-950" : "border-white/20 text-paper hover:border-coral-400 hover:text-coral-300",
                      )}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </fieldset>
              <div>
                <label htmlFor="pass-contact" className={labelCls}>
                  04 · Email or WhatsApp <span aria-hidden className="text-lemon-400">*</span>
                </label>
                <input
                  id="pass-contact"
                  name="contact"
                  required
                  value={contact}
                  onChange={(e) => {
                    setContact(e.target.value);
                    if (form.contactError) form.setContactError(null);
                  }}
                  aria-invalid={form.contactError ? true : undefined}
                  aria-describedby={form.contactError ? "pass-contact-error" : undefined}
                  placeholder="you@business.com or +91…"
                  className={inputCls}
                />
                {form.contactError && (
                  <p id="pass-contact-error" className="mt-2 text-sm text-lemon-300">
                    {form.contactError}
                  </p>
                )}
              </div>

              {!issued ? (
                <button
                  type="submit"
                  disabled={form.state === "sending" || !name.trim()}
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-lemon-400 px-7 py-4 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-navy-950 transition-colors hover:bg-lemon-300 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {form.state === "sending" ? "Issuing…" : "Issue my pass"} <span aria-hidden>→</span>
                </button>
              ) : (
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={download}
                    disabled={busy}
                    className="flex-1 rounded-full bg-lemon-400 px-6 py-4 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-navy-950 transition-colors hover:bg-lemon-300 disabled:opacity-60"
                  >
                    Download PNG ↓
                  </button>
                  <button
                    type="button"
                    onClick={share}
                    disabled={busy}
                    className="flex-1 rounded-full border border-white/25 px-6 py-4 font-mono text-xs uppercase tracking-[0.18em] text-paper transition-colors hover:border-coral-400 hover:text-coral-300 disabled:opacity-60"
                  >
                    Share ↗
                  </button>
                </div>
              )}
              <FormStatus state={form.state} mailto={mailto} className="text-paper" linkClassName="text-lemon-400" />
            </form>
          </Reveal>

          {/* Live pass preview */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <motion.div
              aria-live="polite"
              aria-label="Your project pass preview"
              animate={issued && !reduce ? { rotate: [0, -2.5, 1.5, 0], scale: [1, 1.03, 1] } : {}}
              transition={{ duration: 0.7 }}
              className="relative mx-auto max-w-2xl overflow-hidden rounded-[2rem] border border-white/15 bg-navy-900 shadow-[0_50px_120px_-50px_rgba(233,255,79,0.35)]"
            >
              <div className="flex items-end justify-between gap-4 bg-lemon-400 px-6 pb-5 pt-6 text-navy-950 md:px-9">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] md:text-[11px]">Project pass · atreyakamat.dev</p>
                  <p className="mt-1 font-display text-4xl font-extrabold tracking-tight md:text-5xl">{id}</p>
                </div>
                <p className="text-right font-mono text-[10px] uppercase tracking-[0.2em] md:text-[11px]">{date}</p>
              </div>
              {/* perforation */}
              <div aria-hidden className="relative h-0">
                <span className="absolute -left-4 -top-4 h-8 w-8 rounded-full bg-navy-950" />
                <span className="absolute -right-4 -top-4 h-8 w-8 rounded-full bg-navy-950" />
              </div>
              <div className="space-y-6 px-6 py-8 md:px-9 md:py-10">
                <div>
                  <p className={labelCls}>Issued to</p>
                  <p className="mt-1 truncate font-display text-4xl font-extrabold tracking-tight text-paper md:text-6xl">{name.trim() || "Your name"}</p>
                </div>
                <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
                  <div className="min-w-0">
                    <p className={labelCls}>For</p>
                    <p className="mt-1 truncate font-serif text-3xl italic text-lemon-400 md:text-4xl">{business.trim() || "Your business"}</p>
                  </div>
                  <div>
                    <p className={labelCls}>Building</p>
                    <p className="mt-2 inline-block rounded-full bg-coral-400 px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.16em] text-navy-950">{need}</p>
                  </div>
                </div>
                <ol className="relative grid grid-cols-5 pt-4" aria-label="Project stages">
                  <span aria-hidden className="absolute left-[10%] right-[10%] top-[1.6rem] h-px bg-navy-700" />
                  {STAGES.map((s, i) => (
                    <li key={s} className="relative flex flex-col items-center gap-2">
                      <span
                        className={clsx(
                          "h-5 w-5 rounded-full border-2",
                          i === 0 ? "border-lemon-400 bg-lemon-400 shadow-[0_0_0_6px_rgba(233,255,79,0.15)]" : "border-navy-500 bg-navy-950",
                        )}
                      />
                      <span className={clsx("font-mono text-[9px] uppercase tracking-[0.14em] md:text-[10px]", i === 0 ? "text-lemon-400" : "text-navy-300")}>{s}</span>
                    </li>
                  ))}
                </ol>
                <p className="border-t border-white/10 pt-5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-navy-300">
                  {issued ? (
                    <span className="text-lemon-400">● Pass issued. I&rsquo;ll be in touch.</span>
                  ) : (
                    "Fill the form to issue this pass"
                  )}
                </p>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
