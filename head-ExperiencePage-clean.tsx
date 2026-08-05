import { useEffect } from 'react';
import { RouteLink } from '../app/router';
import { experience } from '../content/experience';
import { updateSeo } from '../lib/seo';
import { PageShell } from './PageShell';
import { InteractiveButton } from '../components/ui/InteractiveButton';
import { FileText } from 'lucide-react';

export function ExperiencePage() {
  useEffect(() => {
    updateSeo({
      title: 'Experience',
      description: 'Professional experience spanning product work, software engineering, leadership and community building.',
      path: '/experience',
    });
  }, []);

  return (
    <PageShell className="px-6 py-12">
      <section className="mx-auto max-w-4xl space-y-16">
        {/* Page Header */}
        <div className="space-y-4 max-w-2xl">
          <span className="block text-xs font-mono font-semibold uppercase tracking-[0.35em] text-[#087f78]">
            PROFESSIONAL HISTORY // EDITORIAL CV
          </span>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-[#151515] sm:text-5xl lg:text-6xl">
            Experience & Execution
          </h1>
          <p className="text-base leading-relaxed text-slate-700">
            A chronological summary of engineering roles, product ownership, student leadership and technical contributions.
          </p>
        </div>

        {/* Chronological Timeline */}
        <div className="relative border-l border-black/15 pl-6 sm:pl-8 space-y-12">
          {experience.map((item) => (
            <article key={item.id} className="relative space-y-4">
              {/* Timeline Dot */}
              <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[#151515] bg-[#32d6c5]" />

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 border-b border-black/5 pb-3">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-[#151515]">
                    {item.role} <span className="font-sans text-lg font-normal text-slate-500">at {item.organization}</span>
                  </h2>
                  <p className="text-xs font-mono uppercase tracking-wider text-[#087f78] mt-1">
                    {item.location} {item.type ? `┬╖ ${item.type}` : ''}
                  </p>
                </div>

                <span className="inline-block font-mono text-xs font-semibold uppercase tracking-widest text-slate-600 rounded-md bg-[#F7F5EF] px-3 py-1 border border-black/5">
                  {item.period}
                </span>
              </div>

              <p className="text-sm leading-relaxed text-slate-700 font-medium">
                {item.summary}
              </p>

              <ul className="space-y-2 text-sm text-slate-600 leading-relaxed pt-1">
                {item.contributions.map((contribution) => (
                  <li key={contribution} className="flex gap-2.5 items-start">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#151515]" />
                    <span>{contribution}</span>
                  </li>
                ))}
              </ul>

              {item.relatedProjectSlugs && item.relatedProjectSlugs.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider self-center">Related Work:</span>
                  {item.relatedProjectSlugs.map((slug) => (
                    <RouteLink
                      key={slug}
                      to={`/projects/${slug}`}
                      className="text-xs font-mono font-semibold uppercase tracking-wider text-[#087f78] underline hover:text-[#151515]"
                    >
                      {slug}
                    </RouteLink>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Formal Resume Link */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-black/10 bg-[#F7F5EF] p-8">
          <div>
            <h3 className="font-serif text-2xl font-bold text-[#151515]">Need the formal document?</h3>
            <p className="text-sm text-slate-600 mt-1">View or download the official single-page PDF resume.</p>
          </div>
          <RouteLink to="/resume">
            <InteractiveButton variant="primary" icon={<FileText className="h-4 w-4" />}>
              View Formal Resume
            </InteractiveButton>
          </RouteLink>
        </div>
      </section>
    </PageShell>
  );
}
