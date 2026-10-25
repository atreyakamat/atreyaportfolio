import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Faq } from "@/components/Faq";
import { Reveal } from "@atreya/ui/Reveal";
import { SectionHeader } from "@atreya/ui/SectionHeader";
import { CornerTicks, TileLabel } from "@atreya/ui/Tile";
import { personalInfo, systemStages } from "@/data/portfolio";
import { getService, goaAreas, services } from "@/data/services";
import { businessLd, faqLd, graph } from "@/lib/jsonld";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  const url = `/services/${s.slug}/`;
  return {
    title: { absolute: s.seoTitle },
    description: s.seoDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: s.seoTitle,
      description: s.seoDescription,
      locale: "en_IN",
      images: [{ url: `/og/${s.slug}.png`, width: 1200, height: 630, alt: s.seoTitle }],
    },
    twitter: { card: "summary_large_image", title: s.seoTitle, description: s.seoDescription, images: [`/og/${s.slug}.png`] },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const site = personalInfo.siteUrl;
  const serviceLd = {
    "@type": "Service",
    name: s.name,
    serviceType: s.name,
    description: s.seoDescription,
    url: `${site}/services/${s.slug}/`,
    provider: { "@id": `${site}/#business` },
    areaServed: [{ "@type": "State", name: "Goa" }, ...goaAreas.map((name) => ({ "@type": "City", name }))],
  };
  const crumbsLd = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site}/` },
      { "@type": "ListItem", position: 2, name: "Services", item: `${site}/#services` },
      { "@type": "ListItem", position: 3, name: s.name, item: `${site}/services/${s.slug}/` },
    ],
  };
  const mail = `mailto:${personalInfo.email}?subject=${encodeURIComponent(`Project enquiry: ${s.name}`)}`;
  const others = services.filter((o) => o.slug !== s.slug);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: graph(businessLd, serviceLd, crumbsLd, faqLd(s.faqs)) }} />

      <section className="px-5 pb-20 pt-32 md:px-10 md:pt-40">
        <div className="mx-auto max-w-[96rem]">
          <nav aria-label="Breadcrumb" className="font-mono text-[11px] uppercase tracking-[0.2em] text-navy-300">
            <Link href="/" className="hover:text-lemon-400">Home</Link> <span aria-hidden>/</span>{" "}
            <Link href="/#services" className="hover:text-lemon-400">Services</Link> <span aria-hidden>/</span>{" "}
            <span className="text-lemon-400">{s.code}</span>
          </nav>
          <h1 className="mt-10 max-w-6xl font-display text-5xl font-extrabold leading-[0.92] tracking-[-0.035em] text-paper md:text-8xl">
            {s.h1} <span className="font-serif font-normal italic text-lemon-400">{s.h1Accent}</span>
          </h1>
          <div className="mt-10 grid gap-10 lg:grid-cols-12">
            <p className="text-xl leading-relaxed text-navy-300 lg:col-span-7">{s.intro}</p>
            <div className="flex flex-wrap items-start gap-3 lg:col-span-5 lg:justify-end">
              <a href={mail} className="rounded-full bg-lemon-400 px-7 py-4 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-navy-950 hover:bg-lemon-300">
                Get a quote →
              </a>
              <Link href="/#work" className="rounded-full border border-white/25 px-7 py-4 font-mono text-xs uppercase tracking-[0.18em] text-paper hover:border-lemon-400 hover:text-lemon-400">
                See the work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="signs-title" className="px-5 py-20 md:px-10">
        <div className="mx-auto grid max-w-[96rem] gap-3 lg:grid-cols-12">
          <div className="relative rounded-[1.5rem] bg-lemon-400 p-7 text-navy-950 md:p-10 lg:col-span-5">
            <TileLabel>Diagnosis</TileLabel>
            <h2 id="signs-title" className="mt-8 font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
              You need this if&hellip;
            </h2>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            {s.signs.map((sign, i) => (
              <li key={sign} className="rounded-[1.5rem] border border-white/10 bg-navy-900/80 p-6">
                <span className="font-mono text-[11px] text-lemon-400">0{i + 1}</span>
                <p className="mt-4 text-lg leading-snug text-paper">{sign}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="builds-title" className="px-5 py-20 md:px-10">
        <div className="mx-auto max-w-[96rem]">
          <SectionHeader
            index="A"
            label="What I build"
            id="builds-title"
            title={<>What you can <span className="font-serif font-normal italic text-lemon-400">get built</span>.</>}
          />
          <div className="mt-14 grid gap-3 md:grid-cols-2">
            {s.builds.map((b, i) => (
              <Reveal key={b.title} delay={(i % 2) * 0.08}>
                <div className="relative h-full rounded-[1.5rem] border border-white/10 bg-navy-900/80 p-7 md:p-9">
                  <CornerTicks />
                  <h3 className="font-display text-3xl font-bold tracking-tight text-paper">{b.title}</h3>
                  <p className="mt-3 text-lg leading-relaxed text-navy-300">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-2">
            <span className="mr-2 font-mono text-[11px] uppercase tracking-[0.2em] text-navy-300">Built for</span>
            {s.forWho.map((w) => (
              <span key={w} className="rounded-full border border-white/15 px-4 py-2 text-sm text-paper">
                {w}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="process-title" className="px-5 py-20 md:px-10">
        <div className="mx-auto max-w-[96rem]">
          <SectionHeader
            index="B"
            label="How it runs"
            id="process-title"
            title={<>One process, <span className="font-serif font-normal italic text-lemon-400">five stages</span>.</>}
          />
          <ol className="mt-14 grid gap-3 md:grid-cols-5">
            {systemStages.map((st) => (
              <li key={st.code} className="rounded-[1.5rem] border border-white/10 bg-navy-900/80 p-6">
                <span className="font-mono text-[11px] text-lemon-400">{st.code}</span>
                <h3 className="mt-6 font-display text-2xl font-bold text-paper">{st.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-300">{st.line}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Faq index="C" items={s.faqs} title={<>{s.name}: <span className="font-serif font-normal italic text-lemon-400">FAQ</span></>} />

      <section className="px-5 pb-28 md:px-10">
        <div className="mx-auto grid max-w-[96rem] gap-3 md:grid-cols-3">
          <a href={mail} className="group flex flex-col justify-between gap-10 rounded-[1.5rem] bg-lemon-400 p-7 text-navy-950 md:p-9">
            <TileLabel dot>Taking on projects in Goa</TileLabel>
            <span className="font-display text-4xl font-extrabold leading-none tracking-tight">
              Get a quote <span aria-hidden className="inline-block transition-transform group-hover:-rotate-45">→</span>
            </span>
          </a>
          {others.map((o) => (
            <Link key={o.slug} href={`/services/${o.slug}/`} className="group flex flex-col justify-between gap-10 rounded-[1.5rem] border border-white/10 bg-navy-900/80 p-7 transition-colors hover:border-lemon-400/60 md:p-9">
              <TileLabel className="text-lemon-400">{o.code}</TileLabel>
              <span className="font-display text-3xl font-bold leading-tight tracking-tight text-paper">
                {o.name} <span aria-hidden className="text-lemon-400">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
