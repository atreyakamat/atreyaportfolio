import { skillGroups } from '../content/skills';
import { PageShell } from './PageShell';

export function SkillsPage() {
  return (
    <PageShell className="px-6">
      <section className="mx-auto flex max-w-6xl flex-col gap-10">
        <div className="max-w-3xl space-y-4">
          <span className="block text-xs font-mono font-semibold uppercase tracking-[0.35em] text-[#0d9488]">
            CAPABILITIES // TOOLING & THINKING
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-[#111113] sm:text-5xl">
            A practical mix of product delivery, systems thinking and modern development tooling.
          </h1>
          <p className="text-base leading-7 text-slate-600">
            The skill set is organized around the kinds of problems that show up in real products rather than a generic stack inventory.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {skillGroups.map((group) => (
            <article key={group.id} className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
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
