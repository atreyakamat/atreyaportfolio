"use client";

import { useCallback, useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import clsx from "clsx";
import { SectionHeader } from "@atreya/ui/SectionHeader";
import { ARCADE_URL, hookPairs, shortcutPool } from "@/data/arcade";
import { instagram } from "@/data/create";

type GameId = "beat" | "hook" | "keys";

const GAMES: { id: GameId; label: string; code: string; blurb: string }[] = [
  { id: "beat", label: "Cut on the Beat", code: "G/01", blurb: "Tap CUT (or Space) as the playhead hits each beat." },
  { id: "hook", label: "Hook or Scroll", code: "G/02", blurb: "Two opening lines. Pick the one that stops the thumb." },
  { id: "keys", label: "Ctrl+Z Speedrun", code: "G/03", blurb: "20 seconds. Name as many shortcuts as you can." },
];

const btn =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border-2 border-acid px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-[0.16em] transition-transform active:translate-y-0.5";
const btnSolid = `${btn} bg-acid text-ink shadow-[0_4px_0_0_#7a2e05] hover:-translate-y-0.5`;
const btnGhost = `${btn} bg-ink text-acid hover:bg-acid hover:text-ink`;

/* ── shared bits ─────────────────────────────────────────────── */

function readBest(game: GameId): number {
  try {
    return Number(window.localStorage.getItem(`arcade:${game}:best`)) || 0;
  } catch {
    return 0;
  }
}
function saveBest(game: GameId, score: number): number {
  const best = Math.max(readBest(game), score);
  try {
    window.localStorage.setItem(`arcade:${game}:best`, String(best));
  } catch {
    /* storage unavailable: best lives for this round only */
  }
  return best;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function GameOver({
  game,
  score,
  max,
  best,
  verdict,
  onReplay,
}: {
  game: GameId;
  score: number;
  max: number;
  best: number;
  verdict: string;
  onReplay: () => void;
}) {
  const label = GAMES.find((g) => g.id === game)!.label;
  const text = `I scored ${score}/${max} on "${label}" in the atreya.mp4 Creator Arcade. Beat that:`;

  const share = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: "atreya.mp4 arcade", text, url: ARCADE_URL });
        return;
      } catch {
        /* cancelled or blocked: fall through to WhatsApp */
      }
    }
    window.open(`https://wa.me/?text=${encodeURIComponent(`${text} ${ARCADE_URL}`)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div role="status" className="flex flex-col items-start gap-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/65">Final score</p>
      <p className="font-display text-7xl font-extrabold leading-none tracking-tight text-acid md:text-8xl">
        {score}
        <span className="text-3xl text-paper/50 md:text-4xl">/{max}</span>
      </p>
      <p className="max-w-md text-lg text-paper">{verdict}</p>
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper/65">
        Your best: <span className="text-acid">{best}</span>
      </p>
      <div className="flex flex-wrap gap-3">
        <button type="button" onClick={onReplay} className={btnSolid}>
          ↻ Play again
        </button>
        <button type="button" onClick={share} className={btnGhost}>
          Share score
        </button>
        <a href={instagram.url} target="_blank" rel="noopener noreferrer" className={btnGhost}>
          Follow @{instagram.handle}
        </a>
      </div>
    </div>
  );
}

/* ── G/01 Cut on the Beat ────────────────────────────────────── */

const CLIP_MS = 6400;
const BEATS = Array.from({ length: 8 }, (_, i) => 500 + i * 760);
const PERFECT_MS = 90;
const GOOD_MS = 190;

type Hit = "perfect" | "good" | null;

function CutOnBeat() {
  const [phase, setPhase] = useState<"ready" | "play" | "done">("ready");
  const [t, setT] = useState(0);
  const [hits, setHits] = useState<Hit[]>(() => BEATS.map(() => null));
  const [strays, setStrays] = useState(0);
  const [flash, setFlash] = useState<{ text: string; key: number } | null>(null);
  const [sound, setSound] = useState(false);
  const [best, setBest] = useState(0);
  const start = useRef(0);
  const hitsRef = useRef<Hit[]>(hits);
  const ctx = useRef<AudioContext | null>(null);
  const nextClick = useRef(0);
  const soundRef = useRef(sound);
  useEffect(() => {
    soundRef.current = sound;
  }, [sound]);

  const click = useCallback(() => {
    if (!soundRef.current || !ctx.current) return;
    const ac = ctx.current;
    const o = ac.createOscillator();
    const g = ac.createGain();
    o.frequency.value = 1100;
    g.gain.setValueAtTime(0.18, ac.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + 0.06);
    o.connect(g).connect(ac.destination);
    o.start();
    o.stop(ac.currentTime + 0.07);
  }, []);

  const score = (h: Hit[], s: number) => {
    const raw = h.reduce((sum, x) => sum + (x === "perfect" ? 12.5 : x === "good" ? 7 : 0), 0);
    return Math.max(0, Math.round(raw - s * 3));
  };

  // Playhead loop.
  useEffect(() => {
    if (phase !== "play") return;
    let raf = 0;
    const tick = (now: number) => {
      const el = now - start.current;
      while (nextClick.current < BEATS.length && el >= BEATS[nextClick.current]) {
        click();
        nextClick.current++;
      }
      if (el >= CLIP_MS) {
        setT(CLIP_MS);
        setPhase("done");
        return;
      }
      setT(el);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [phase, click]);

  const begin = () => {
    if (sound && !ctx.current) {
      try {
        ctx.current = new AudioContext();
      } catch {
        /* no audio support */
      }
    }
    const fresh = BEATS.map(() => null);
    hitsRef.current = fresh;
    setHits(fresh);
    setStrays(0);
    setFlash(null);
    setT(0);
    nextClick.current = 0;
    start.current = performance.now();
    setPhase("play");
  };

  const cut = useCallback(() => {
    if (phase !== "play") return;
    const el = performance.now() - start.current;
    let idx = -1;
    let diff = Infinity;
    BEATS.forEach((b, i) => {
      const d = Math.abs(el - b);
      if (!hitsRef.current[i] && d < diff) {
        diff = d;
        idx = i;
      }
    });
    const grade: Hit = diff <= PERFECT_MS ? "perfect" : diff <= GOOD_MS ? "good" : null;
    if (idx >= 0 && grade) {
      const next = [...hitsRef.current];
      next[idx] = grade;
      hitsRef.current = next;
      setHits(next);
      setFlash({ text: grade === "perfect" ? "Perfect" : "Good", key: el });
    } else {
      setStrays((s) => s + 1);
      setFlash({ text: "Miss", key: el });
    }
  }, [phase]);

  // Space to cut while playing.
  useEffect(() => {
    if (phase !== "play") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.key === " ") {
        e.preventDefault();
        cut();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [phase, cut]);

  // Save best once a round ends.
  useEffect(() => {
    if (phase !== "done") return;
    const b = saveBest("beat", score(hitsRef.current, strays));
    const id = requestAnimationFrame(() => setBest(b));
    return () => cancelAnimationFrame(id);
  }, [phase, strays]);

  const pct = (t / CLIP_MS) * 100;
  const final = score(hits, strays);
  const perfects = hits.filter((h) => h === "perfect").length;

  if (phase === "done") {
    return (
      <GameOver
        game="beat"
        score={final}
        max={100}
        best={best}
        verdict={
          final >= 85
            ? `Editor's ears. ${perfects} perfect cuts.`
            : final >= 50
              ? "Solid timing. A few cuts landed late."
              : "The beat won this round. Try feeling it, not watching it."
        }
        onReplay={begin}
      />
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Timeline */}
      <div className="rounded-xl border-2 border-acid bg-ink p-3 md:p-4">
        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-paper/65">
          <span>V1 · beat_drop.mp4</span>
          <span className="tabular-nums">
            00:{String(Math.floor(t / 1000)).padStart(2, "0")} / 00:{String(Math.round(CLIP_MS / 1000)).padStart(2, "0")}
          </span>
        </div>
        <div className="relative mt-3 h-24 overflow-hidden rounded-md bg-paper/5 md:h-28">
          {/* waveform-ish clip */}
          <div aria-hidden className="absolute inset-x-0 top-1/2 flex h-12 -translate-y-1/2 items-center gap-[3px] px-1">
            {Array.from({ length: 64 }, (_, i) => (
              <span key={i} className="block flex-1 rounded-sm bg-acid/25" style={{ height: `${20 + ((i * 37) % 70)}%` }} />
            ))}
          </div>
          {BEATS.map((b, i) => {
            const left = (b / CLIP_MS) * 100;
            const passed = t >= b;
            return (
              <span
                key={b}
                aria-hidden
                className={clsx(
                  "absolute top-0 h-full w-1 -translate-x-1/2 rounded-full transition-colors duration-150",
                  hits[i] === "perfect" ? "bg-acid" : hits[i] === "good" ? "bg-paper" : passed ? "bg-paper/20" : "bg-acid/60",
                )}
                style={{ left: `${left}%` }}
              />
            );
          })}
          {/* playhead */}
          <span aria-hidden className="absolute top-0 h-full w-0.5 bg-paper" style={{ left: `${pct}%` }}>
            <span className="absolute -left-[5px] -top-0.5 h-3 w-3 rotate-45 bg-paper" />
          </span>
          {flash && (
            <span
              key={flash.key}
              aria-live="polite"
              className={clsx(
                "absolute right-3 top-2 font-mono text-xs font-bold uppercase tracking-[0.16em] motion-safe:animate-[pop_0.5s_ease-out]",
                flash.text === "Miss" ? "text-paper/70" : "text-acid",
              )}
            >
              {flash.text}
            </span>
          )}
        </div>
        <div className="mt-3 flex gap-1.5" aria-label="Beats hit">
          {hits.map((h, i) => (
            <span key={i} className={clsx("h-1.5 flex-1 rounded-full", h === "perfect" ? "bg-acid" : h === "good" ? "bg-paper" : "bg-paper/15")} />
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        {phase === "ready" ? (
          <button type="button" onClick={begin} className={btnSolid}>
            ▶ Start clip
          </button>
        ) : (
          <button
            type="button"
            onPointerDown={(e) => {
              e.preventDefault();
              cut();
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") cut();
            }}
            className={`${btnSolid} min-h-16 px-10 text-base`}
          >
            ✂ Cut
          </button>
        )}
        <button type="button" aria-pressed={sound} onClick={() => setSound((s) => !s)} className={btnGhost}>
          {sound ? "🔊 Click on" : "🔇 Click off"}
        </button>
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-paper/65">
          {phase === "play" ? "Space or tap to cut" : "8 beats · perfect = ±90 ms"}
        </p>
      </div>
    </div>
  );
}

/* ── G/02 Hook or Scroll ─────────────────────────────────────── */

function HookOrScroll() {
  const [round, setRound] = useState(0);
  const [picked, setPicked] = useState<"a" | "b" | null>(null);
  const [correct, setCorrect] = useState(0);
  const [done, setDone] = useState(false);
  const [best, setBest] = useState(0);
  const pair = hookPairs[round];

  const pick = (side: "a" | "b") => {
    if (picked) return;
    setPicked(side);
    if (side === pair.better) setCorrect((c) => c + 1);
  };

  const next = () => {
    if (round + 1 >= hookPairs.length) {
      setBest(saveBest("hook", correct));
      setDone(true);
      return;
    }
    setRound((r) => r + 1);
    setPicked(null);
  };

  const replay = () => {
    setRound(0);
    setPicked(null);
    setCorrect(0);
    setDone(false);
  };

  if (done) {
    return (
      <GameOver
        game="hook"
        score={correct}
        max={hookPairs.length}
        best={best}
        verdict={
          correct >= 7 ? "You'd write a hook that stops the scroll." : correct >= 5 ? "Good instincts. Specific beats vague, every time." : "Rule of thumb: name the problem, skip the intro."
        }
        onReplay={replay}
      />
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.16em] text-paper/65">
        <span>
          Round {round + 1}/{hookPairs.length} · {pair.topic}
        </span>
        <span>
          Score <span className="text-acid">{correct}</span>
        </span>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {(["a", "b"] as const).map((side) => {
          const isBetter = side === pair.better;
          const show = picked !== null;
          return (
            <button
              key={side}
              type="button"
              onClick={() => pick(side)}
              disabled={show}
              aria-pressed={picked === side}
              className={clsx(
                "relative flex min-h-36 flex-col justify-between gap-4 rounded-xl border-2 p-5 text-left transition-colors md:p-6",
                !show && "border-paper/25 bg-ink hover:border-acid",
                show && isBetter && "border-acid bg-acid text-ink",
                show && !isBetter && "border-paper/15 bg-ink opacity-60",
              )}
            >
              <span className={clsx("font-mono text-[10px] font-bold uppercase tracking-[0.18em]", show && isBetter ? "text-ink" : "text-acid")}>
                {side === "a" ? "Hook A" : "Hook B"}
                {show && isBetter && " · stops the scroll"}
              </span>
              <span className={clsx("font-display text-xl font-bold leading-snug md:text-2xl", show && isBetter ? "text-ink" : "text-paper")}>
                &ldquo;{side === "a" ? pair.a : pair.b}&rdquo;
              </span>
            </button>
          );
        })}
      </div>
      {picked && (
        <div className="flex flex-col gap-4 rounded-xl border-2 border-paper/15 p-5 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl text-paper" aria-live="polite">
            <span className="font-bold text-acid">{picked === pair.better ? "Nice. " : "Not this one. "}</span>
            {pair.why}
          </p>
          <button type="button" onClick={next} className={clsx(btnSolid, "shrink-0")}>
            {round + 1 >= hookPairs.length ? "See score" : "Next →"}
          </button>
        </div>
      )}
    </div>
  );
}

/* ── G/03 Ctrl+Z Speedrun ────────────────────────────────────── */

const RUN_MS = 20000;

type Q = { action: string; answer: string; options: string[] };

function buildQuiz(): Q[] {
  const answers = shortcutPool.map((s) => s.answer);
  return shuffle(shortcutPool).map((s) => ({
    ...s,
    options: shuffle([s.answer, ...shuffle(answers.filter((a) => a !== s.answer)).slice(0, 3)]),
  }));
}

function Speedrun() {
  const [phase, setPhase] = useState<"ready" | "play" | "done">("ready");
  const [quiz, setQuiz] = useState<Q[]>([]);
  const [i, setI] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [left, setLeft] = useState(RUN_MS);
  const [feedback, setFeedback] = useState<"right" | "wrong" | null>(null);
  const [best, setBest] = useState(0);
  const end = useRef(0);
  const correctRef = useRef(0);

  const finish = useCallback(() => {
    setBest(saveBest("keys", correctRef.current));
    setPhase("done");
  }, []);

  useEffect(() => {
    if (phase !== "play") return;
    const id = setInterval(() => {
      const ms = Math.max(0, end.current - performance.now());
      setLeft(ms);
      if (ms <= 0) finish();
    }, 100);
    return () => clearInterval(id);
  }, [phase, finish]);

  const begin = () => {
    setQuiz(buildQuiz());
    setI(0);
    setCorrect(0);
    correctRef.current = 0;
    setFeedback(null);
    setLeft(RUN_MS);
    end.current = performance.now() + RUN_MS;
    setPhase("play");
  };

  const answer = (opt: string) => {
    const q = quiz[i];
    const right = opt === q.answer;
    if (right) {
      correctRef.current += 1;
      setCorrect(correctRef.current);
    }
    setFeedback(right ? "right" : "wrong");
    if (i + 1 >= quiz.length) finish();
    else setI(i + 1);
  };

  if (phase === "done") {
    return (
      <GameOver
        game="keys"
        score={correct}
        max={shortcutPool.length}
        best={best}
        verdict={correct >= 10 ? "Keyboard wizard. Your mouse is decorative." : correct >= 5 ? "Fast hands. A few more and you'll never touch a menu." : "Start with Win + Shift + S. It changes lives."}
        onReplay={begin}
      />
    );
  }

  if (phase === "ready") {
    return (
      <div className="flex flex-col items-start gap-6">
        <div className="flex flex-wrap gap-2" aria-hidden>
          {["Ctrl", "Shift", "Z"].map((k) => (
            <span
              key={k}
              className="grid h-14 min-w-14 place-items-center rounded-lg border-2 border-acid bg-ink px-3 font-mono text-sm font-bold text-acid shadow-[0_5px_0_0_#ff6b1a]"
            >
              {k}
            </span>
          ))}
        </div>
        <p className="max-w-lg text-lg text-paper">Windows, Linux and editing shortcuts. One wrong answer doesn&rsquo;t stop the clock, so keep moving.</p>
        <button type="button" onClick={begin} className={btnSolid}>
          ▶ Start 20 s run
        </button>
      </div>
    );
  }

  const q = quiz[i];
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.16em] text-paper/65">
        <span>
          Correct <span className="text-acid">{correct}</span>
        </span>
        <span className={clsx("tabular-nums", left < 5000 && "text-acid")}>{(left / 1000).toFixed(1)} s</span>
      </div>
      <div aria-hidden className="h-1.5 overflow-hidden rounded-full bg-paper/15">
        <div className="h-full bg-acid" style={{ width: `${(left / RUN_MS) * 100}%` }} />
      </div>
      <p className="font-display text-3xl font-extrabold leading-tight tracking-tight text-paper md:text-4xl" aria-live="polite">
        {q.action}
      </p>
      <div className="grid grid-cols-2 gap-3">
        {q.options.map((o) => (
          <button key={o} type="button" onClick={() => answer(o)} className={clsx(btnGhost, "min-h-14 px-3 normal-case tracking-normal text-[13px] md:text-sm")}>
            {o}
          </button>
        ))}
      </div>
      <p className="h-4 font-mono text-[11px] uppercase tracking-[0.16em] text-paper/65" aria-live="polite">
        {feedback === "right" ? "✓ Correct" : feedback === "wrong" ? "✗ Nope, keep going" : ""}
      </p>
    </div>
  );
}

/* ── Section ─────────────────────────────────────────────────── */

export function Arcade() {
  const [game, setGame] = useState<GameId>("beat");
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = GAMES.find((g) => g.id === game)!;

  const onTabKey = (e: ReactKeyboardEvent, idx: number) => {
    const dir = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const n = (idx + dir + GAMES.length) % GAMES.length;
    setGame(GAMES[n].id);
    tabs.current[n]?.focus();
  };

  return (
    <section id="arcade" aria-labelledby="arcade-title" className="bg-ink px-5 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[96rem]">
        <SectionHeader
          index="03"
          label="Creator arcade"
          meta="3 games · 60 sec each"
          id="arcade-title"
          title={
            <>
              Think you could <span className="font-serif font-normal italic text-acid">edit a reel?</span>
            </>
          }
          intro="Three tiny games from the editing desk. Cut on the beat, spot the better hook, race the shortcuts. Then send your score to a friend."
        />

        <div className="mt-12 overflow-hidden rounded-2xl border-2 border-acid">
          {/* window bar */}
          <div className="flex items-center gap-3 border-b-2 border-acid bg-ink px-4 py-3">
            <span className="flex gap-1.5" aria-hidden>
              <span className="h-2.5 w-2.5 rounded-full bg-acid" />
              <span className="h-2.5 w-2.5 rounded-full bg-paper/30" />
              <span className="h-2.5 w-2.5 rounded-full bg-paper/30" />
            </span>
            <span className="truncate font-mono text-[11px] text-paper/65">arcade.exe · @{instagram.handle}</span>
          </div>

          <div role="tablist" aria-label="Games" className="grid grid-cols-3 border-b-2 border-acid">
            {GAMES.map((g, idx) => {
              const on = g.id === game;
              return (
                <button
                  key={g.id}
                  ref={(el) => {
                    tabs.current[idx] = el;
                  }}
                  role="tab"
                  id={`tab-${g.id}`}
                  aria-selected={on}
                  aria-controls="arcade-panel"
                  tabIndex={on ? 0 : -1}
                  onClick={() => setGame(g.id)}
                  onKeyDown={(e) => onTabKey(e, idx)}
                  className={clsx(
                    "flex min-h-14 flex-col items-start gap-1 px-3 py-3 text-left transition-colors md:px-6 md:py-4",
                    idx > 0 && "border-l-2 border-acid",
                    on ? "bg-acid text-ink" : "bg-ink text-paper hover:bg-acid/10",
                  )}
                >
                  <span className={clsx("font-mono text-[10px] font-bold tracking-[0.18em]", on ? "text-ink" : "text-acid")}>{g.code}</span>
                  <span className="font-display text-sm font-bold leading-tight md:text-xl">{g.label}</span>
                </button>
              );
            })}
          </div>

          <div id="arcade-panel" role="tabpanel" aria-labelledby={`tab-${game}`} className="bg-ink p-5 md:p-10">
            <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.16em] text-paper/65">{current.blurb}</p>
            {game === "beat" && <CutOnBeat key="beat" />}
            {game === "hook" && <HookOrScroll key="hook" />}
            {game === "keys" && <Speedrun key="keys" />}
          </div>
        </div>
      </div>
    </section>
  );
}
