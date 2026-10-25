import { reels } from "@/data/site";

/** Portfolio reels. While the list is empty, three "loading" frames invite early bookings. */
export function Reels() {
  return (
    <section id="reels" aria-labelledby="reels-title" className="relative overflow-hidden bg-tide-950 px-5 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-sand">04 · Reels</p>
        <h2 id="reels-title" className="mt-5 max-w-4xl font-display text-5xl leading-[0.95] text-salt md:text-7xl">
          {reels.length ? (
            <>
              Recent <em className="text-sun-400">cuts.</em>
            </>
          ) : (
            <>
              First reels <em className="text-sun-400">dropping soon.</em>
            </>
          )}
        </h2>

        {reels.length === 0 ? (
          <div className="mt-14 grid items-center gap-12 lg:grid-cols-12">
            <div aria-hidden className="flex justify-center gap-3 sm:gap-5 lg:col-span-7">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={`relative aspect-[9/16] w-[28%] max-w-[12rem] overflow-hidden rounded-[1.4rem] border border-salt/15 bg-tide-900 ${i === 1 ? "-translate-y-6" : ""}`}
                >
                  <div className="shimmer absolute inset-x-0 h-1/2 bg-gradient-to-b from-transparent via-sun-400/20 to-transparent" style={{ animationDelay: `${i * 0.6}s` }} />
                  <div className="absolute inset-x-3 bottom-4 space-y-1.5">
                    <span className="block h-1.5 w-3/4 rounded-full bg-salt/20" />
                    <span className="block h-1.5 w-1/2 rounded-full bg-salt/15" />
                  </div>
                  <span className="absolute left-3 top-3 font-mono text-[9px] uppercase tracking-[0.2em] text-salt/60">Reel 0{i + 1}</span>
                </div>
              ))}
            </div>
            <div className="lg:col-span-5">
              <p className="text-lg leading-relaxed text-salt/85">
                Saltwater Studios is new, and the first reels are on their way. Book an early date and yours could be one of the first we share.
              </p>
              <a href="#enquire" className="mt-8 inline-flex items-center gap-2 rounded-full bg-sun-400 px-7 py-4 text-sm font-semibold text-tide-950 transition-transform hover:-translate-y-0.5">
                Book an early date <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        ) : (
          <ul className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {reels.map((r) => (
              <li key={r.caption} className="overflow-hidden rounded-[1.4rem] border border-salt/15 bg-tide-900">
                {r.src ? (
                  <video className="aspect-[9/16] w-full object-cover" src={r.src} poster={r.poster} muted loop playsInline controls preload="metadata" aria-label={r.caption} />
                ) : (
                  <a href={r.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex aspect-[9/16] items-end bg-cover bg-center p-4" style={r.poster ? { backgroundImage: `url(${r.poster})` } : undefined}>
                    <span className="rounded-full bg-tide-950/80 px-3 py-1.5 text-xs text-salt">Watch on Instagram ↗</span>
                  </a>
                )}
                <p className="p-4 text-sm text-salt/85">{r.caption}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
