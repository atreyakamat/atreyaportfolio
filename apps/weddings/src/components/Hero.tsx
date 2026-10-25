"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { TRACK_EVENT } from "@/lib/contact";

const LINES: { words: string[]; accent?: boolean }[] = [
  { words: ["Weddings,"] },
  { words: ["cut", "for"] },
  { words: ["the", "scroll."], accent: true },
];

/** One seamless wave strip (drawn twice, slides by 50%). */
function WaveStrip({ className, fill, y = 0, amp = 10 }: { className?: string; fill: string; y?: number; amp?: number }) {
  const seg = (x: number) => `Q ${x + 25} ${y - amp} ${x + 50} ${y} T ${x + 100} ${y}`;
  let d = `M 0 ${y} `;
  for (let x = 0; x < 400; x += 100) d += seg(x) + " ";
  d += `L 400 120 L 0 120 Z`;
  return (
    <div className={`absolute inset-x-0 bottom-0 h-full w-[200%] ${className ?? ""}`}>
      <svg viewBox="0 0 400 120" preserveAspectRatio="none" className="h-full w-full">
        <path d={d} fill={fill} />
      </svg>
    </div>
  );
}

function Viewfinder() {
  const tc = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();

  // Running timecode (hh:mm:ss:ff at 25fps), written straight to the DOM: no re-renders.
  useEffect(() => {
    if (reduce || !tc.current) return;
    const start = performance.now();
    let raf = 0;
    const pad = (n: number) => String(n).padStart(2, "0");
    const tick = (now: number) => {
      const t = (now - start) / 1000 + 12;
      const f = Math.floor((t % 1) * 25);
      const s = Math.floor(t) % 60;
      const m = Math.floor(t / 60) % 60;
      if (tc.current) tc.current.textContent = `00:${pad(m)}:${pad(s)}:${pad(f)}`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduce]);

  return (
    <figure
      aria-label="Illustration: a vertical camera viewfinder at golden hour over the sea"
      className="rise-in relative mx-auto aspect-[9/16] w-[min(72vw,22rem)] overflow-hidden rounded-[2rem] border border-salt/20 bg-tide-900 shadow-[0_50px_120px_-40px_rgba(242,166,90,0.45)] lg:w-[min(30vw,24rem)]"
      style={{ ["--d" as string]: "0.35s", ["--rise" as string]: "40px" }}
    >
      {/* sky */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#1d3550_0%,#6b4a5e_38%,#e8875a_62%,#f2a65a_70%)]" />
      {/* sun */}
      <div className="absolute left-1/2 top-[52%] h-28 w-28 -translate-x-1/2 rounded-full bg-[#ffd9a0] blur-[1px] shadow-[0_0_80px_30px_rgba(255,200,140,0.55)]" />
      {/* sea */}
      <div className="absolute inset-x-0 bottom-0 h-[36%] overflow-hidden">
        <WaveStrip className="swell-slow" fill="#2a5670" y={18} amp={8} />
        <WaveStrip className="swell" fill="#143447" y={42} amp={10} />
        <WaveStrip className="swell-slow" fill="#081a26" y={70} amp={7} />
        {/* glints */}
        <div className="absolute left-[38%] top-[8%] h-[3px] w-12 rounded-full bg-[#ffe2b8]/80 blur-[1px]" />
        <div className="absolute left-[52%] top-[18%] h-[2px] w-8 rounded-full bg-[#ffe2b8]/60 blur-[1px]" />
      </div>

      {/* viewfinder overlay */}
      <div aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_33.2%,rgba(244,241,234,0.12)_33.3%,rgba(244,241,234,0.12)_33.5%,transparent_33.6%,transparent_66.4%,rgba(244,241,234,0.12)_66.5%,rgba(244,241,234,0.12)_66.7%,transparent_66.8%),linear-gradient(to_bottom,transparent_33.2%,rgba(244,241,234,0.12)_33.3%,rgba(244,241,234,0.12)_33.5%,transparent_33.6%,transparent_66.4%,rgba(244,241,234,0.12)_66.5%,rgba(244,241,234,0.12)_66.7%,transparent_66.8%)]" />
        {["left-4 top-4 border-l-2 border-t-2", "right-4 top-4 border-r-2 border-t-2", "bottom-4 left-4 border-b-2 border-l-2", "bottom-4 right-4 border-b-2 border-r-2"].map((c) => (
          <span key={c} className={`absolute h-6 w-6 border-salt/90 ${c}`} />
        ))}
        <div className="absolute inset-x-6 top-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-salt">
          <span className="flex items-center gap-1.5">
            <span className="rec h-2 w-2 rounded-full bg-[#ff4d4d]" /> Rec
          </span>
          <span ref={tc} className="tabular-nums">
            00:00:12:00
          </span>
        </div>
        {/* story-style progress */}
        <div className="absolute inset-x-6 bottom-12 flex gap-1">
          {[1, 1, 0.45, 0].map((v, i) => (
            <span key={i} className="h-[3px] flex-1 overflow-hidden rounded-full bg-salt/30">
              <span className="block h-full rounded-full bg-salt" style={{ width: `${v * 100}%` }} />
            </span>
          ))}
        </div>
        <div className="absolute inset-x-6 bottom-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-salt/90">
          <span>Golden hour</span>
          <span>9:16</span>
        </div>
      </div>
    </figure>
  );
}

export function Hero() {
  let w = 0;
  const pick = (track: "couples" | "editors") => window.dispatchEvent(new CustomEvent(TRACK_EVENT, { detail: track }));

  return (
    <section id="top" aria-labelledby="hero-title" className="relative isolate overflow-hidden px-5 pb-20 pt-28 md:px-10 md:pt-32 lg:min-h-[100svh]">
      {/* golden-hour light leaks */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="leak absolute -right-[20%] -top-[30%] h-[80vh] w-[80vh] rounded-full bg-[radial-gradient(circle,rgba(242,166,90,0.32),transparent_65%)]" />
        <div className="leak-2 absolute -bottom-[30%] -left-[15%] h-[70vh] w-[70vh] rounded-full bg-[radial-gradient(circle,rgba(42,86,112,0.6),transparent_65%)]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="rise-in font-mono text-[11px] uppercase tracking-[0.25em] text-sand" style={{ ["--d" as string]: "0.05s" }}>
            Saltwater Studios · Wedding reels · Goa
          </p>

          <h1 id="hero-title" className="mt-8 font-display text-[clamp(3.6rem,10vw,9.5rem)] leading-[0.9] tracking-[-0.02em] text-salt">
            <span className="sr-only">Saltwater Studios: weddings, cut for the scroll.</span>
            {LINES.map((line, li) => (
              <span key={li} aria-hidden className="flex flex-wrap gap-x-[0.22em] overflow-hidden pb-[0.1em]">
                {line.words.map((word) => {
                  const i = w++;
                  return (
                    <span
                      key={word}
                      className={line.accent ? "letter-up italic text-sun-400" : "letter-up"}
                      style={{ ["--d" as string]: `${0.15 + i * 0.09}s` }}
                    >
                      {word}
                    </span>
                  );
                })}
              </span>
            ))}
          </h1>

          <p className="rise-in mt-8 max-w-xl text-lg leading-relaxed text-salt/85 md:text-xl" style={{ ["--d" as string]: "0.55s" }}>
            Vertical wedding reels, edited from your footage if you&rsquo;re a videographer or photographer, or shot for couples at destination and local Goan weddings.
          </p>

          <div className="rise-in mt-10 flex flex-wrap gap-3" style={{ ["--d" as string]: "0.7s" }}>
            <a
              href="#packages"
              onClick={() => pick("editors")}
              className="inline-flex items-center gap-2 rounded-full bg-sun-400 px-7 py-4 text-sm font-semibold text-tide-950 transition-transform hover:-translate-y-0.5"
            >
              I&rsquo;m a videographer <span aria-hidden>→</span>
            </a>
            <a
              href="#packages"
              onClick={() => pick("couples")}
              className="inline-flex items-center gap-2 rounded-full border border-salt/30 px-7 py-4 text-sm font-semibold text-salt transition-colors hover:border-sun-400 hover:text-sun-400"
            >
              We&rsquo;re getting married <span aria-hidden>→</span>
            </a>
          </div>

          <dl className="rise-in mt-12 grid max-w-lg grid-cols-2 gap-px overflow-hidden rounded-2xl border border-salt/10 bg-salt/10" style={{ ["--d" as string]: "0.85s" }}>
            <div className="bg-tide-950/80 p-4">
              <dt className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-tide-300">Reel editing</dt>
              <dd className="mt-1 font-display text-2xl text-salt">
                from ₹2,500<span className="text-base text-tide-300"> / reel</span>
              </dd>
            </div>
            <div className="bg-tide-950/80 p-4">
              <dt className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-tide-300">Couples</dt>
              <dd className="mt-1 font-display text-2xl text-salt">₹6,000–8,000</dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-5">
          <Viewfinder />
        </div>
      </div>
    </section>
  );
}
