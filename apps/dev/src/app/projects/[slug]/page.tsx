import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allProjects, getProjectBySlug } from "@/data/portfolio";

export const dynamicParams = false;

export function generateStaticParams() {
  return allProjects.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  const url = `/projects/${project.slug}/`;
  return {
    title: project.title,
    description: project.triad.build,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: `${project.title} · Atreya Kamat`,
      description: project.triad.build,
      images: [{ url: "/og/projects.png", width: 1200, height: 630, alt: "Selected work by Atreya Kamat" }],
    },
    twitter: { card: "summary_large_image", title: `${project.title} · Atreya Kamat`, images: ["/og/projects.png"] },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <article className="px-5 pb-28 pt-32 md:px-10">
      <div className="mx-auto max-w-5xl">
        <Link href="/#work" className="font-mono text-xs uppercase tracking-[0.18em] text-navy-300 transition-colors hover:text-lemon-400">
          ← Back to work
        </Link>

        <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.2em] text-lemon-400">
          {project.number} · {project.category}
        </p>
        <h1 className="mt-4 font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-paper md:text-8xl">
          {project.title}
        </h1>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-navy-300">{project.overview}</p>

        <div className="mt-8 flex flex-wrap gap-4 font-mono text-xs uppercase tracking-[0.16em]">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-lemon-400 px-6 py-3 font-semibold text-navy-950 hover:bg-lemon-300">
              Live site ↗
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/25 px-6 py-3 text-paper hover:border-lemon-400 hover:text-lemon-400">
              Source code ↗
            </a>
          )}
        </div>

        {project.image && (
          <div className="relative mt-14 aspect-[16/9] overflow-hidden rounded-3xl ring-1 ring-white/10">
            <Image src={project.image} alt={project.imageAlt} fill sizes="(min-width: 1024px) 64rem, 100vw" className="object-cover" priority />
          </div>
        )}

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {(
            [
              ["Problem", project.triad.problem],
              ["Built", project.triad.build],
              ["Outcome", project.triad.outcome],
            ] as const
          ).map(([label, text]) => (
            <div key={label} className="border-t border-white/15 pt-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-lemon-400">{label}</p>
              <p className="mt-3 leading-relaxed text-navy-100">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <section>
            <h2 className="font-display text-2xl font-bold text-paper">Key features</h2>
            <ul className="mt-5 space-y-3 text-navy-300">
              {project.keyFeatures.map((f) => (
                <li key={f} className="flex gap-3">
                  <span aria-hidden className="text-lemon-400">→</span>
                  {f}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-paper">Architecture</h2>
            <ul className="mt-5 space-y-3 text-navy-300">
              {project.architecture.map((a) => (
                <li key={a} className="flex gap-3">
                  <span aria-hidden className="text-lemon-400">→</span>
                  {a}
                </li>
              ))}
            </ul>
            <p className="mt-8 font-mono text-xs leading-relaxed text-navy-300">{project.stack}</p>
          </section>
        </div>
      </div>
    </article>
  );
}
