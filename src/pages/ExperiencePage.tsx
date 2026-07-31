import { useEffect } from 'react';
import { Briefcase, MapPin } from 'lucide-react';
import { experience } from '../content/experience';
import { updateSeo } from '../lib/seo';
import { PageShell } from './PageShell';

export function ExperiencePage() {
  useEffect(() => {
    updateSeo({
      title: 'Experience',
      description: 'Professional experience spanning product work, software engineering, leadership and community building.',
      path: '/experience',
    });
  }, []);
  return (
    <PageShell className="px-6">
      <section className="mx-auto flex max-w-6xl flex-col gap-10">
        <div className="max-w-3xl space-y-4">
          <span className="block text-xs font-mono font-semibold uppercase tracking-[0.35em] text-[#0d9488]">
            EXPERIENCE // BUILDING IN PUBLIC
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-[#111113] sm:text-5xl">
            A track record shaped by execution, leadership and the willingness to work across product and systems.
          </h1>
          <p className="text-base leading-7 text-slate-600">
            The work spans internships, community leadership, founder-led ventures and high-context software delivery.
          </p>
        </div>

        <div className="space-y-5">
          {experience.map((item) => (
            <article key={item.id} className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-[0_20px_70px_rgba(21,21,21,0.05)]">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm font-medium text-[#0d9488]">
                    <Briefcase className="h-4 w-4" />
                    {item.role}
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-[#111113]">{item.organization}</h2>
                    <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                      {item.type && <span>{item.type}</span>}
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {item.location}
                      </span>
                    </div>
                  </div>
                  <p className="max-w-2xl text-base leading-7 text-slate-600">{item.summary}</p>
                </div>

                <div className="rounded-[1.25rem] border border-black/10 bg-[#fafaf8] px-4 py-3 text-sm font-mono uppercase tracking-[0.24em] text-slate-500">
                  {item.period}
                </div>
              </div>

              <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-600">
                {item.contributions.map((contribution) => (
                  <li key={contribution} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#0d9488]" />
                    <span>{contribution}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
