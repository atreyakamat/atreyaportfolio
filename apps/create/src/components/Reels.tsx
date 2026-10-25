import { Reveal } from "@atreya/ui/Reveal";
import { SectionHeader } from "@atreya/ui/SectionHeader";
import { reelServices, showreel } from "@/data/create";

/* A phone frame with a looping "edit timeline" — decorative, no fake footage. */
function PhoneTimeline() {
  if (showreel.src) {
    return (
      <div className="mx-auto w-full max-w-[17rem] rounded-[2.2rem] border-2 border-ink bg-ink p-3">
        <video
          className="aspect-[9/16] w-full rounded-[1.6rem] object-cover"
          src={showreel.src}
          poster={showreel.poster ?? undefined}
          aria-label={showreel.caption}
          autoPlay
          muted
          loop
          playsInline
          controls
          preload="metadata"
        />
      </div>
    );
  }
  return (
    <div aria-hidden className="mx-auto w-full max-w-[17rem] rounded-[2.2rem] border-2 border-ink bg-ink p-3">
      <div className="relative aspect-[9/16] overflow-hidden rounded-[1.6rem] bg-ink">
        <div className="absolute inset-0 grid place-items-center">
          <p className="text-center font-display text-4xl font-extrabold leading-[0.9] text-acid">
            REEL
            <br />
            <span className="font-serif text-3xl font-normal italic text-paper">coming soon</span>
          </p>
        </div>
        <div className="absolute inset-x-3 bottom-4 space-y-1.5">
          {[0, 1, 2].map((row) => (
            <div key={row} className="flex h-3 gap-1 overflow-hidden">
              {Array.from({ length: 7 }).map((_, i) => (
                <span
                  key={i}
                  className="reel-clip block h-full rounded-sm bg-acid/80"
                  style={{ width: `${18 + ((i * 7 + row * 11) % 5) * 9}%`, animationDelay: `${(i + row) * 0.18}s` }}
                />
              ))}
            </div>
          ))}
          <span className="reel-head absolute -top-2 bottom-0 w-0.5 bg-paper" />
        </div>
      </div>
    </div>
  );
}

export function Reels() {
  return (
    <section id="reels" aria-labelledby="reels-title" className="halftone bg-acid px-5 py-28 text-ink md:px-10 md:py-36">
      <div className="mx-auto max-w-[96rem]">
        <SectionHeader
          tone="lemon"
          index="04"
          label="Video editing & reels"
          meta="Now booking"
          id="reels-title"
          title={
            <>
              Cuts that keep <span className="font-serif font-normal italic">thumbs still.</span>
            </>
          }
          intro="I edit short-form video for brands and creators: reels, launches and recaps, cut to hold attention and fit each platform."
        />
        <div className="mt-16 grid items-center gap-10 lg:grid-cols-12">
          <ul className="grid gap-3 lg:col-span-8">
            {reelServices.map((r, i) => (
              <li key={r.title}>
                <Reveal delay={i * 0.07}>
                  <div className="grid gap-2 border-2 border-ink bg-acid p-6 md:grid-cols-[4rem_1fr_1.4fr] md:items-baseline md:gap-6">
                    <span className="font-mono text-xs font-bold">R/0{i + 1}</span>
                    <h3 className="font-display text-3xl font-extrabold tracking-tight">{r.title}</h3>
                    <p className="leading-relaxed text-ink/80">{r.desc}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
          <Reveal delay={0.15} className="lg:col-span-4">
            <PhoneTimeline />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
