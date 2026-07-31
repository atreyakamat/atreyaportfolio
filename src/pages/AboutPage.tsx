import { profile } from '../content/profile';
import { PageShell } from './PageShell';

export function AboutPage() {
  return (
    <PageShell className="px-6">
      <section className="mx-auto flex max-w-6xl flex-col gap-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-5">
            <span className="block text-xs font-mono font-semibold uppercase tracking-[0.35em] text-[#0d9488]">
              ABOUT // HUMAN CONTEXT
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-[#111113] sm:text-5xl">
              A builder who cares about useful software, clear systems and honest product thinking.
            </h1>
            <p className="text-base leading-8 text-slate-600">{profile.intro}</p>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3 text-sm font-medium text-[#0d9488]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#0d9488]" />
              {profile.location}
            </div>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-600">
              {profile.credibility.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#111113]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
