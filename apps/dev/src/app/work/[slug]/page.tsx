import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import clsx from "clsx";
import { Reveal } from "@atreya/ui/Reveal";
import { SectionHeader } from "@atreya/ui/SectionHeader";
import { SpotlightCard } from "@atreya/ui/Spotlight";
import { CornerTicks, Tile, TileLabel } from "@atreya/ui/Tile";
import { caseStudies, getCaseStudy, type CaseStudy } from "@/data/caseStudies";
import { personalInfo } from "@/data/portfolio";
import { graph, personLd } from "@/lib/jsonld";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

type Props = { params: Promise<{ slug: string }> };

const ogImageFor = (c: CaseStudy) => c.images[0]?.src ?? "/og/projects.png";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  if (!c) return {};
  const url = `/work/${c.slug}/`;
  const image = ogImageFor(c);
  return {
    title: { absolute: c.seoTitle },
    description: c.seoDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: c.seoTitle,
      description: c.seoDescription,
      locale: "en_IN",
      images: [{ url: image, alt: c.images[0]?.alt ?? c.title }],
    },
    twitter: { card: "summary_large_image", title: c.seoTitle, description: c.seoDescription, images: [image] },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  if (!c) notFound();

  const site = personalInfo.siteUrl;
  const pageUrl = `${site}/work/${c.slug}/`;
  const articleLd = {
    "@type": "Article",
    "@id": `${pageUrl}#article`,
    headline: c.seoTitle,
    description: c.seoDescription,
    url: pageUrl,
    image: `${site}${ogImageFor(c)}`,
    author: { "@id": `${site}/#person` },
    publisher: { "@id": `${site}/#person` },
    about: {
      "@type": "CreativeWork",
      name: c.title,
      description: c.summary,
      ...(c.liveUrl ? { url: c.liveUrl } : {}),
      creator: { "@id": `${site}/#person` },
      keywords: c.stack.join(", "),
    },
  };
  const crumbsLd = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site}/` },
      { "@type": "ListItem", position: 2, name: "Work", item: `${site}/#work` },
      { "@type": "ListItem", position: 3, name: c.title, item: pageUrl },
    ],
  };
  const others = caseStudies.filter((o) => o.slug !== c.slug);
  const primaryService = c.services[0];
  const brief = `mailto:${personalInfo.email}?subject=${encodeURIComponent(`Project enquiry: like ${c.title}`)}`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: graph(personLd, articleLd, crumbsLd) }} />

      {/* Hero */}
      <section className="px-5 pb-16 pt-32 md:px-10 md:pt-40">
        <div className="mx-auto max-w-[96rem]">
          <nav aria-label="Breadcrumb" className="font-mono text-[11px] uppercase tracking-[0.2em] text-navy-300">
            <Link href="/" className="hover:text-lemon-400">Home</Link> <span aria-hidden>/</span>{" "}
            <Link href="/#work" className="hover:text-lemon-400">Work</Link> <span aria-hidden>/</span>{" "}
            <span className="text-lemon-400">Case study</span>
          </nav>

          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-lemon-400">{c.kind}</p>
              <h1 className="mt-4 font-display text-5xl font-extrabold leading-[0.92] tracking-[-0.035em] text-paper md:text-8xl">
                {c.title}
              </h1>
              <p className="mt-6 max-w-2xl font-serif text-3xl leading-[1.1] text-paper md:text-4xl">
                <em className="text-lemon-400">{c.summary}</em>
              </p>
            </div>
            <Tile ticks className="p-6 lg:col-span-4">
              <dl className="grid grid-cols-2 gap-5 font-mono text-[11px] uppercase tracking-[0.16em]">
                <div>
                  <dt className="text-navy-300">Client</dt>
                  <dd className="mt-1 normal-case tracking-normal text-paper">{c.client}</dd>
                </div>
                <div>
                  <dt className="text-navy-300">Where</dt>
                  <dd className="mt-1 normal-case tracking-normal text-paper">{c.location}</dd>
                </div>
                {c.year && (
                  <div>
                    <dt className="text-navy-300">When</dt>
                    <dd className="mt-1 normal-case tracking-normal text-paper">{c.year}</dd>
                  </div>
                )}
                <div>
                  <dt className="text-navy-300">Status</dt>
                  <dd className="mt-1 normal-case tracking-normal text-lemon-400">{c.liveUrl ? "Live" : "Deployed (private)"}</dd>
                </div>
              </dl>
              <div className="mt-6 flex flex-wrap gap-2">
                {c.services.map((s) => (
                  <Link key={s.href} href={s.href} className="rounded-full border border-white/20 px-3 py-1.5 text-xs text-paper hover:border-lemon-400 hover:text-lemon-400">
                    {s.label}
                  </Link>
                ))}
              </div>
              {c.liveUrl && (
                <a
                  href={c.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-lemon-400 px-5 py-3 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-navy-950 hover:bg-lemon-300"
                >
                  Visit the live site <span aria-hidden>↗</span>
                </a>
              )}
            </Tile>
          </div>

          {c.images[0] && (
            <Reveal className="mt-14">
              <figure className="overflow-hidden rounded-[1.5rem] border border-white/10">
                <Image src={c.images[0].src} alt={c.images[0].alt} width={1440} height={900} priority sizes="(min-width: 1536px) 96rem, 100vw" className="h-auto w-full" />
              </figure>
            </Reveal>
          )}
          {c.flow && (
            <Reveal className="mt-14">
              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-navy-900/80 p-6 md:p-10">
                <CornerTicks />
                <TileLabel className="text-navy-300">How a request moves</TileLabel>
                <ol className="mt-8 grid gap-3 md:grid-cols-5">
                  {c.flow.map((step, i) => (
                    <li key={step} className="relative">
                      <div className={clsx("rounded-2xl border p-5", i === c.flow!.length - 1 ? "border-lemon-400 bg-lemon-400 text-navy-950" : "border-white/15 bg-navy-950 text-paper")}>
                        <span className={clsx("font-mono text-[11px]", i === c.flow!.length - 1 ? "text-navy-800" : "text-lemon-400")}>0{i + 1}</span>
                        <p className="mt-3 font-display text-2xl font-bold tracking-tight">{step}</p>
                      </div>
                      {i < c.flow!.length - 1 && (
                        <span aria-hidden className="absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 font-mono text-lemon-400 md:block">
                          →
                        </span>
                      )}
                    </li>
                  ))}
                </ol>
                <p className="mt-6 text-sm text-navy-300">Each step is logged with who did it and when.</p>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* Problem */}
      <section aria-labelledby="problem-title" className="px-5 py-20 md:px-10">
        <div className="mx-auto max-w-[96rem]">
          <SectionHeader index="01" label="The problem" id="problem-title" title={<>What needed <span className="font-serif font-normal italic text-lemon-400">fixing</span>.</>} />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {c.problem.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-xl leading-relaxed text-navy-100">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section aria-labelledby="approach-title" className="px-5 py-20 md:px-10">
        <div className="mx-auto max-w-[96rem]">
          <SectionHeader index="02" label="Approach" id="approach-title" title={<>How I <span className="font-serif font-normal italic text-lemon-400">went about it</span>.</>} />
          <ol className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {c.approach.map((a, i) => (
              <li key={a.title}>
                <Reveal delay={i * 0.06} className="h-full">
                  <Tile className="h-full p-6">
                    <span className="font-mono text-[11px] text-lemon-400">0{i + 1}</span>
                    <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-paper">{a.title}</h3>
                    <p className="mt-3 leading-relaxed text-navy-300">{a.desc}</p>
                  </Tile>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Built */}
      <section aria-labelledby="built-title" className="px-5 py-20 md:px-10">
        <div className="mx-auto max-w-[96rem]">
          <SectionHeader index="03" label="What I built" meta={`${c.built.length} parts`} id="built-title" title={<>The <span className="font-serif font-normal italic text-lemon-400">system</span>.</>} />
          <ul className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {c.built.map((b, i) => (
              <li key={b.title} className={clsx(i === 0 && "lg:col-span-2")}>
                <Reveal delay={(i % 4) * 0.05} className="h-full">
                  <SpotlightCard className="h-full">
                    <div className="p-6">
                      <h3 className="font-display text-xl font-bold tracking-tight text-paper">{b.title}</h3>
                      <p className="mt-2 leading-relaxed text-navy-300">{b.desc}</p>
                    </div>
                  </SpotlightCard>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Gallery */}
      {c.images.length > 1 && (
        <section aria-labelledby="gallery-title" className="px-5 py-20 md:px-10">
          <div className="mx-auto max-w-[96rem]">
            <SectionHeader index="04" label="Screens" meta="From the live site" id="gallery-title" title={<>A closer <span className="font-serif font-normal italic text-lemon-400">look</span>.</>} />
            <div className="mt-12 grid gap-3 md:grid-cols-3">
              {c.images.slice(1).map((img) => (
                <Reveal key={img.src} className={clsx(img.shape === "tall" ? "md:row-span-2" : "md:col-span-2")}>
                  <figure className="h-full overflow-hidden rounded-[1.25rem] border border-white/10 bg-navy-900">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={img.shape === "tall" ? 780 : 1440}
                      height={img.shape === "tall" ? 1688 : 900}
                      sizes={img.shape === "tall" ? "(min-width: 768px) 30vw, 100vw" : "(min-width: 768px) 62vw, 100vw"}
                      className={clsx("w-full", img.shape === "tall" ? "h-full object-cover object-top" : "h-auto")}
                    />
                    <figcaption className="border-t border-white/10 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-navy-300">{img.caption}</figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Stack + outcome */}
      <section aria-labelledby="outcome-title" className="px-5 py-20 md:px-10">
        <div className="mx-auto grid max-w-[96rem] gap-3 lg:grid-cols-12">
          <Tile tone="lemon" className="p-7 md:p-9 lg:col-span-7">
            <TileLabel>Outcome</TileLabel>
            <h2 id="outcome-title" className="mt-6 font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
              What changed.
            </h2>
            <ul className="mt-6 space-y-3 text-lg leading-relaxed text-navy-900">
              {c.outcome.map((o) => (
                <li key={o} className="flex gap-3">
                  <span aria-hidden className="mt-1 font-mono">✓</span>
                  {o}
                </li>
              ))}
            </ul>
          </Tile>
          <Tile ticks className="p-7 md:p-9 lg:col-span-5">
            <TileLabel className="text-navy-300">Stack</TileLabel>
            <ul className="mt-6 flex flex-wrap gap-2">
              {c.stack.map((t) => (
                <li key={t} className="rounded-md border border-white/15 px-3 py-1.5 font-mono text-xs text-paper">
                  {t}
                </li>
              ))}
            </ul>
          </Tile>
        </div>
      </section>

      {/* Quote (only when the client has given one) */}
      {c.quote && (
        <section className="px-5 py-12 md:px-10">
          <figure className="mx-auto max-w-4xl text-center">
            <blockquote className="font-serif text-3xl leading-snug text-paper md:text-5xl">
              <span aria-hidden className="text-lemon-400">“</span>
              {c.quote.text}
              <span aria-hidden className="text-lemon-400">”</span>
            </blockquote>
            <figcaption className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-navy-300">
              {c.quote.name} · {c.quote.role}
            </figcaption>
          </figure>
        </section>
      )}

      {/* CTA */}
      <section className="px-5 pb-28 pt-8 md:px-10">
        <div className="mx-auto grid max-w-[96rem] gap-3 md:grid-cols-3">
          <Link href="/#contact" className="group flex flex-col justify-between gap-10 rounded-[1.5rem] bg-lemon-400 p-7 text-navy-950 md:col-span-2 md:p-9">
            <TileLabel dot>Taking on projects</TileLabel>
            <span className="font-display text-4xl font-extrabold leading-none tracking-tight md:text-5xl">
              Want something like this? <span aria-hidden className="inline-block transition-transform group-hover:-rotate-45">→</span>
            </span>
          </Link>
          <div className="flex flex-col gap-3">
            {primaryService && (
              <Link href={primaryService.href} className="flex flex-1 flex-col justify-between gap-6 rounded-[1.5rem] border border-white/10 bg-navy-900/80 p-6 transition-colors hover:border-lemon-400/60">
                <TileLabel className="text-lemon-400">Service</TileLabel>
                <span className="font-display text-2xl font-bold text-paper">{primaryService.label} →</span>
              </Link>
            )}
            {others.map((o) => (
              <Link key={o.slug} href={`/work/${o.slug}/`} className="flex flex-1 flex-col justify-between gap-6 rounded-[1.5rem] border border-white/10 bg-navy-900/80 p-6 transition-colors hover:border-lemon-400/60">
                <TileLabel className="text-navy-300">Next case study</TileLabel>
                <span className="font-display text-2xl font-bold text-paper">{o.title} →</span>
              </Link>
            ))}
            <a href={brief} className="font-mono text-xs uppercase tracking-[0.16em] text-navy-300 hover:text-lemon-400">
              or email a brief →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
