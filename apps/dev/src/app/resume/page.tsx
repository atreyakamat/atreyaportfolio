import type { Metadata } from "next";
import Link from "next/link";
import { personalInfo } from "@/data/portfolio";
import { resumeEducation, resumeExperience, resumeProjects, resumeSkills } from "@/data/resume";

export const metadata: Metadata = {
  title: { absolute: "Résumé | Atreya Kamat, software engineer in Goa" },
  description:
    "Résumé of Atreya Kamat: software engineer in Goa. Experience at Revature, SparkPlus, Infosys Springboard and Google, plus shipped projects in Next.js, Python and AI.",
  alternates: { canonical: "/resume/" },
  openGraph: { type: "profile", url: "/resume/", title: "Résumé | Atreya Kamat", locale: "en_IN" },
};

const h2 = "font-mono text-[11px] uppercase tracking-[0.22em] text-lemon-400 print:text-black";

export default function ResumePage() {
  return (
    <div className="px-5 pb-24 pt-32 md:px-10 md:pt-40 print:p-0">
      <article className="mx-auto max-w-4xl">
        <header className="flex flex-col gap-6 border-b border-white/10 pb-10 md:flex-row md:items-end md:justify-between print:border-black/30">
          <div>
            <p className={h2}>Résumé</p>
            <h1 className="mt-4 font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.035em] text-paper md:text-7xl print:text-4xl print:text-black">
              Atreya Kamat
            </h1>
            <p className="mt-4 text-navy-300 print:text-black">
              <a href={`mailto:${personalInfo.email}`} className="hover:text-lemon-400">{personalInfo.email}</a>
              {" · "}
              <a href={personalInfo.linkedinUrl} className="hover:text-lemon-400">LinkedIn</a>
              {" · "}
              <a href={personalInfo.githubUrl} className="hover:text-lemon-400">GitHub</a>
              {" · "}
              <Link href="/" className="hover:text-lemon-400">atreyakamat.dev</Link>
            </p>
          </div>
          <div className="flex gap-3 print:hidden">
            <a
              href={personalInfo.resumeUrl}
              download="atreya_kamat_resume.pdf"
              className="rounded-full bg-lemon-400 px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-navy-950 hover:bg-lemon-300"
            >
              Download PDF ↓
            </a>
            <Link
              href="/#contact"
              className="rounded-full border border-white/25 px-6 py-3.5 font-mono text-xs uppercase tracking-[0.18em] text-paper hover:border-lemon-400 hover:text-lemon-400"
            >
              Hire me
            </Link>
          </div>
        </header>

        <section aria-labelledby="r-skills" className="mt-12">
          <h2 id="r-skills" className={h2}>Skills</h2>
          <dl className="mt-5 grid gap-4">
            {resumeSkills.map((s) => (
              <div key={s.label} className="grid gap-1 md:grid-cols-[14rem_1fr] md:gap-6">
                <dt className="font-display text-lg font-bold text-paper print:text-black">{s.label}</dt>
                <dd className="text-navy-300 print:text-black">{s.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-labelledby="r-exp" className="mt-14">
          <h2 id="r-exp" className={h2}>Experience</h2>
          <div className="mt-6 grid gap-10">
            {resumeExperience.map((r) => (
              <div key={r.org + r.period} className="break-inside-avoid">
                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                  <h3 className="font-display text-2xl font-bold text-paper print:text-lg print:text-black">
                    {r.role}, {r.org} <span className="font-normal text-navy-300 print:text-black">· {r.place}</span>
                  </h3>
                  <span className="font-mono text-xs text-navy-300 print:text-black">{r.period}</span>
                </div>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-navy-300 marker:text-navy-300 print:text-black">
                  {r.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="r-proj" className="mt-14">
          <h2 id="r-proj" className={h2}>Projects</h2>
          <div className="mt-6 grid gap-10">
            {resumeProjects.map((p) => (
              <div key={p.name} className="break-inside-avoid">
                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                  <h3 className="font-display text-2xl font-bold text-paper print:text-lg print:text-black">{p.name}</h3>
                  <span className="font-mono text-xs text-navy-300 print:text-black">{p.stack}</span>
                </div>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-navy-300 marker:text-navy-300 print:text-black">
                  {p.points.map((x) => <li key={x}>{x}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="r-edu" className="mt-14">
          <h2 id="r-edu" className={h2}>Education</h2>
          <ul className="mt-6 grid gap-5">
            {resumeEducation.map((e) => (
              <li key={e.degree} className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-paper print:text-black">{e.degree}</h3>
                  <p className="text-navy-300 print:text-black">{e.org}</p>
                </div>
                <span className="font-mono text-xs text-navy-300 print:text-black">{e.period}</span>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </div>
  );
}
