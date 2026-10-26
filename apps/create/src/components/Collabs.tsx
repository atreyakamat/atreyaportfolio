import { Reveal } from "@atreya/ui/Reveal";
import { SectionHeader } from "@atreya/ui/SectionHeader";
import { CornerTicks } from "@atreya/ui/Tile";
import { collabFormats, collabReasons, creatorPitch, creatorStats, instagram, mediaKitUrl, pastBrands } from "@/data/create";

/** Brand-facing section: what the channel is, collab formats, why me, and media-kit numbers once filled. */
export function Collabs() {
  const stats = creatorStats.filter((s) => s.value);
  return (
    <section id="collabs" aria-labelledby="collabs-title" className="bg-ink px-5 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[96rem]">
        <SectionHeader
          index="01"
          label="For brands"
          meta={`@${instagram.handle}`}
          id="collabs-title"
          title={
            <>
              Your product, explained like <span className="font-serif font-normal italic text-acid">it&rsquo;s my own tip.</span>
            </>
          }
        />

        <ul className="mt-10 flex flex-wrap gap-2" aria-label="Content pillars">
          {creatorPitch.pillars.map((p) => (
            <li key={p} className="border-2 border-acid px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-acid">
              {p}
            </li>
          ))}
        </ul>

        {stats.length > 0 && (
          <Reveal className="mt-12">
            <dl className="grid gap-px overflow-hidden border-2 border-acid bg-acid sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-ink p-6">
                  <dt className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-paper/65">{s.label}</dt>
                  <dd className="mt-2 font-display text-5xl font-extrabold tracking-tight text-acid">{s.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        )}

        <ul className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {collabFormats.map((f, i) => (
            <li key={f.code}>
              <Reveal delay={(i % 3) * 0.07} className="h-full">
                <div className="group relative flex h-full flex-col gap-6 border-2 border-paper/20 p-7 transition-colors hover:border-acid hover:bg-acid">
                  <span className="font-mono text-[11px] font-bold tracking-[0.18em] text-acid group-hover:text-ink">{f.code}</span>
                  <h3 className="font-display text-3xl font-extrabold tracking-tight text-paper group-hover:text-ink">{f.title}</h3>
                  <p className="leading-relaxed text-paper/70 group-hover:text-ink">{f.desc}</p>
                </div>
              </Reveal>
            </li>
          ))}
          <li>
            <Reveal delay={0.14} className="h-full">
              <a
                href="#commission"
                className="flex h-full flex-col justify-between gap-6 bg-acid p-7 text-ink transition-transform hover:-translate-y-1"
              >
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em]">Pitch me</span>
                <span className="font-display text-4xl font-extrabold leading-none tracking-tight">
                  Send a brief <span aria-hidden>→</span>
                </span>
              </a>
            </Reveal>
          </li>
        </ul>

        <div className="relative mt-16 grid gap-px border-2 border-paper/15 bg-paper/15 md:grid-cols-2 lg:grid-cols-4">
          <CornerTicks className="text-acid/70" />
          {collabReasons.map((r) => (
            <div key={r.title} className="bg-ink p-7">
              <h3 className="font-display text-xl font-bold tracking-tight text-paper">{r.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-paper/70">{r.desc}</p>
            </div>
          ))}
        </div>

        {(pastBrands.length > 0 || mediaKitUrl) && (
          <div className="mt-12 flex flex-wrap items-center gap-4">
            {pastBrands.length > 0 && (
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper/65">
                Worked with:{" "}
                {pastBrands.map((b, i) => (
                  <span key={b.name} className="text-paper">
                    {b.url ? (
                      <a href={b.url} target="_blank" rel="noopener noreferrer" className="hover:text-acid">
                        {b.name}
                      </a>
                    ) : (
                      b.name
                    )}
                    {i < pastBrands.length - 1 ? " · " : ""}
                  </span>
                ))}
              </p>
            )}
            {mediaKitUrl && (
              <a href={mediaKitUrl} className="border-2 border-acid px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.18em] text-acid hover:bg-acid hover:text-ink">
                Download media kit ↓
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
