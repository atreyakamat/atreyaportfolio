/**
 * Draggable "bits of the internet" for the hero: small UI objects drawn in
 * code (no images), in the orange-and-black palette. Purely decorative.
 */
export type BitKind = "terminal" | "file" | "keys" | "disk" | "cursor" | "browser" | "toast" | "scrubber" | "render" | "wifi";

const card = "rounded-xl border-2 border-acid bg-ink text-paper shadow-[0_18px_40px_-12px_rgba(0,0,0,0.8)]";
const mono = "font-mono text-[11px] leading-relaxed";

function Dots() {
  return (
    <span className="flex gap-1.5">
      <span className="h-2 w-2 rounded-full bg-acid" />
      <span className="h-2 w-2 rounded-full bg-paper/30" />
      <span className="h-2 w-2 rounded-full bg-paper/30" />
    </span>
  );
}

export function WebBit({ kind }: { kind: BitKind }) {
  switch (kind) {
    case "terminal":
      return (
        <div className={`${card} w-60 p-3`}>
          <Dots />
          <p className={`${mono} mt-3 text-acid`}>$ sudo apt install linux</p>
          <p className={`${mono} text-paper/70`}>Unpacking… setting up…</p>
          <p className={`${mono} text-paper`}>✓ done. welcome to the dark side</p>
        </div>
      );
    case "file":
      return (
        <div className={`${card} flex w-52 items-center gap-3 p-3`}>
          <span className="grid h-12 w-10 place-items-center rounded-md bg-acid font-mono text-[10px] font-bold text-ink">MP4</span>
          <span>
            <span className="block font-mono text-xs text-paper">final_v3_REAL.mp4</span>
            <span className="block font-mono text-[10px] text-paper/60">9:16 · 59 sec</span>
          </span>
        </div>
      );
    case "keys":
      return (
        <div className="flex gap-2">
          {["Ctrl", "Alt", "Del"].map((k) => (
            <span
              key={k}
              className="grid h-14 min-w-14 place-items-center rounded-lg border-2 border-acid bg-ink px-3 font-mono text-sm font-bold text-acid shadow-[0_5px_0_0_#ff6b1a]"
            >
              {k}
            </span>
          ))}
        </div>
      );
    case "disk":
      return (
        <div className={`${card} w-60 p-3`}>
          <p className={`${mono} text-paper`}>Local Disk (C:)</p>
          <div className="mt-2 h-3 overflow-hidden rounded-sm border border-paper/30">
            <div className="h-full w-[94%] bg-acid" />
          </div>
          <p className={`${mono} mt-1 text-paper/60`}>almost full. we can fix that.</p>
        </div>
      );
    case "cursor":
      return (
        <svg width="64" height="76" viewBox="0 0 64 76" className="drop-shadow-[0_10px_16px_rgba(0,0,0,0.7)]">
          <path d="M4 4 L4 62 L19 48 L30 72 L40 67 L29 44 L50 44 Z" fill="#ff6b1a" stroke="#0a0a0a" strokeWidth="4" strokeLinejoin="round" />
        </svg>
      );
    case "browser":
      return (
        <div className={`${card} w-64 overflow-hidden`}>
          <div className="flex items-center gap-2 border-b-2 border-acid px-3 py-2">
            <Dots />
            <span className="ml-1 truncate rounded bg-paper/10 px-2 py-0.5 font-mono text-[10px] text-paper/80">create.atreyakamat.dev</span>
          </div>
          <div className="space-y-1.5 p-3">
            <div className="h-2.5 w-3/4 rounded bg-acid" />
            <div className="h-2 w-full rounded bg-paper/20" />
            <div className="h-2 w-5/6 rounded bg-paper/20" />
          </div>
        </div>
      );
    case "toast":
      return (
        <div className="flex items-center gap-3 rounded-full bg-acid py-2 pl-2 pr-4 text-ink shadow-[0_14px_30px_-10px_rgba(255,107,26,0.6)]">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-ink font-mono text-xs text-acid">✓</span>
          <span className="font-mono text-xs font-bold uppercase tracking-[0.12em]">Uploaded</span>
        </div>
      );
    case "scrubber":
      return (
        <div className={`${card} w-64 p-3`}>
          <div className="relative h-8 rounded bg-paper/10">
            <div className="absolute inset-y-1 left-1 w-[30%] rounded-sm bg-acid/80" />
            <div className="absolute inset-y-1 left-[34%] w-[22%] rounded-sm bg-paper/40" />
            <div className="absolute inset-y-1 left-[60%] w-[35%] rounded-sm bg-acid/50" />
            <div className="absolute -top-1 bottom-[-4px] left-[48%] w-0.5 bg-paper" />
          </div>
          <p className={`${mono} mt-2 flex justify-between text-paper/70`}>
            <span>00:27</span>
            <span>00:59</span>
          </p>
        </div>
      );
    case "render":
      return (
        <div className={`${card} w-52 p-3`}>
          <p className={`${mono} flex justify-between text-paper`}>
            <span>Rendering…</span>
            <span className="text-acid">87%</span>
          </p>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-paper/15">
            <div className="h-full w-[87%] rounded-full bg-acid" />
          </div>
        </div>
      );
    case "wifi":
      return (
        <div className="grid h-16 w-16 place-items-center rounded-2xl border-2 border-acid bg-ink">
          <svg width="34" height="28" viewBox="0 0 34 28" fill="none" stroke="#ff6b1a" strokeWidth="3.5" strokeLinecap="round">
            <path d="M3 10 C11 2 23 2 31 10" />
            <path d="M8 15.5 C13 11 21 11 26 15.5" />
            <path d="M13 21 C15.5 19 18.5 19 21 21" />
            <circle cx="17" cy="25" r="1.6" fill="#ff6b1a" />
          </svg>
        </div>
      );
  }
}
