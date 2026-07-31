import { useEffect } from 'react';
import { ArrowUpRight, Download, Sparkles } from 'lucide-react';
import { profile } from '../content/profile';
import { updateSeo } from '../lib/seo';
import { PageShell } from './PageShell';

export function ResumePage() {
  useEffect(() => {
    updateSeo({
      title: 'Resume',
      description: 'Resume and contact overview for Atreya Kamat, including access to the public PDF.',
      path: '/resume',
    });
  }, []);
  return (
    <PageShell className="px-6">
      <section className="mx-auto flex max-w-5xl flex-col gap-8 rounded-[2rem] border border-black/10 bg-white p-8 shadow-[0_20px_70px_rgba(21,21,21,0.05)] sm:p-10">
        <div className="space-y-4">
          <span className="block text-xs font-mono font-semibold uppercase tracking-[0.35em] text-[#0d9488]">
            RESUME // FORMAL SUMMARY
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-[#111113] sm:text-5xl">Atreya Kamat</h1>
          <p className="max-w-2xl text-base leading-8 text-slate-600">{profile.intro}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[1.5rem] border border-black/10 bg-[#f7f5ef] p-6">
            <div className="flex items-center gap-2 text-sm font-medium text-[#0d9488]">
              <Sparkles className="h-4 w-4" />
              Current portfolio snapshot
            </div>
            <p className="mt-4 text-lg font-semibold text-[#111113]">A practical résumé portal for product work, systems thinking and software delivery.</p>
            <p className="mt-3 text-sm leading-7 text-slate-600">The PDF is available from the public portfolio asset and the route keeps the experience focused on quick access and credible context.</p>
            <a href={`/${profile.resumeFileName}`} className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#111113] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0d9488]" target="_blank" rel="noreferrer">
              <Download className="h-4 w-4" />
              Open resume PDF
            </a>
          </div>

          <div className="rounded-[1.5rem] border border-black/10 bg-[#fafaf8] p-6">
            <p className="text-sm font-medium text-[#111113]">Connect</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
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
        </div>
      </section>
    </PageShell>
  );
}
