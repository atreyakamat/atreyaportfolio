import { ArrowUpRight } from 'lucide-react';
import { profile } from '../content/profile';
import { PageShell } from './PageShell';

export function ResumePage() {
  return (
    <PageShell className="px-6">
      <section className="mx-auto flex max-w-5xl flex-col gap-8 rounded-3xl border border-black/10 bg-white p-8 shadow-sm sm:p-10">
        <div className="space-y-4">
          <span className="block text-xs font-mono font-semibold uppercase tracking-[0.35em] text-[#0d9488]">
            RESUME // FORMAL SUMMARY
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-[#111113] sm:text-5xl">Atreya Kamat</h1>
          <p className="max-w-2xl text-base leading-8 text-slate-600">{profile.intro}</p>
        </div>

        <div className="rounded-2xl border border-black/10 bg-[#fafaf8] p-6">
          <p className="text-sm font-medium text-[#111113]">Available as a PDF resume</p>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-600">
            <a href={`/` + profile.resumeFileName} className="inline-flex items-center gap-2 font-medium text-[#111113] hover:text-[#0d9488]" target="_blank" rel="noreferrer">
              Open resume
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href={profile.linkedin} className="inline-flex items-center gap-2 font-medium text-[#111113] hover:text-[#0d9488]" target="_blank" rel="noreferrer">
              LinkedIn
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href={profile.github} className="inline-flex items-center gap-2 font-medium text-[#111113] hover:text-[#0d9488]" target="_blank" rel="noreferrer">
              GitHub
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
