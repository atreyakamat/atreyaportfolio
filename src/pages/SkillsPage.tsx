import { useEffect } from 'react';
import { skillGroups } from '../content/skills';
import { updateSeo } from '../lib/seo';
import { PageShell } from './PageShell';

export function SkillsPage() {
  useEffect(() => {
    updateSeo({
      title: 'Skills',
      description: 'Capabilities spanning product frontend, backend systems, data and AI, reliability and product leadership.',
      path: '/skills',
    });
  }, []);
  return (
    <PageShell className="px-6">
      <section className="mx-auto flex max-w-6xl flex-col gap-10">
        <div className="max-w-3xl space-y-4">
          <span className="block text-xs font-mono font-semibold uppercase tracking-[0.35em] text-[#0d9488]">
            CAPABILITIES // TOOLING & THINKING
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-[#111113] sm:text-5xl">
            Practical capability organized around the kinds of problems that show up in real products.
          </h1>
          <p className="text-base leading-7 text-slate-600">
            The set is grouped by how the work actually gets done: frontend product delivery, backend systems, data and AI, and the reliability and leadership layers that make the work durable.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {skillGroups.map((group) => (
            <article key={group.id} className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-[0_20px_70px_rgba(21,21,21,0.05)]">
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold tracking-tight text-[#111113]">{group.title}</h2>
                <p className="text-sm leading-7 text-slate-600">{group.summary}</p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill.name} className="rounded-full border border-black/10 bg-[#fafaf8] px-3 py-1.5 text-sm text-slate-700">
                    {skill.name}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
