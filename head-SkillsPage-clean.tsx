import { useEffect } from 'react';
import { RouteLink } from '../app/router';
import { skillGroups } from '../content/skills';
import { updateSeo } from '../lib/seo';
import { PageShell } from './PageShell';

export function SkillsPage() {
  useEffect(() => {
    updateSeo({
      title: 'Skills & Capabilities',
      description: 'Technical capabilities organized by systems, product, backend, AI and engineering craft with evidence links.',
      path: '/skills',
    });
  }, []);

  return (
    <PageShell className="px-6 py-12">
      <section className="mx-auto max-w-5xl space-y-16">
        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <span className="block text-xs font-mono font-semibold uppercase tracking-[0.35em] text-[#087f78]">
            CAPABILITIES // TOOLING & SYSTEMS
          </span>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-[#151515] sm:text-5xl lg:text-6xl">
            Practical capability organized by outcome.
          </h1>
          <p className="text-base leading-relaxed text-slate-700">
            Skills are backed by real production code and project evidence rather than arbitrary percentage bars.
          </p>
        </div>

        {/* Skill Groups */}
        <div className="grid gap-8 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.id}
              className="space-y-6 rounded-3xl border border-black/10 bg-white p-8 shadow-[0_15px_45px_rgba(21,21,21,0.04)]"
            >
              <div className="space-y-2 border-b border-black/5 pb-4">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#087f78]">
                  {group.id}
                </span>
                <h2 className="font-serif text-2xl font-bold text-[#151515]">{group.title}</h2>
                <p className="text-sm text-slate-600 leading-relaxed">{group.summary}</p>
              </div>

              <div className="space-y-3">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 rounded-xl border border-black/5 bg-[#F7F5EF] p-3 text-xs"
                  >
                    <span className="font-semibold text-[#151515] font-sans">{skill.name}</span>

                    {skill.projectSlugs && skill.projectSlugs.length > 0 && (
                      <div className="flex flex-wrap items-center gap-1.5 font-mono text-[10px] text-slate-500">
                        <span>Used in:</span>
                        {skill.projectSlugs.map((slug) => (
                          <RouteLink
                            key={slug}
                            to={`/projects/${slug}`}
                            className="font-bold text-[#087f78] uppercase underline hover:text-[#151515]"
                          >
                            {slug}
                          </RouteLink>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
