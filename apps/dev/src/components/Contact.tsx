import { Magnetic } from "@/components/Magnetic";
import { Reveal } from "@/components/Reveal";
import { personalInfo } from "@/data/portfolio";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-lemon-400">04 / Contact</p>
          <h2 id="contact-title" className="mt-4 font-display text-6xl font-extrabold leading-[0.9] tracking-tight text-paper md:text-9xl">
            Tell me what is{" "}
            <span className="font-serif font-normal italic text-lemon-400">broken.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-8"><p className="max-w-xl text-lg leading-relaxed text-navy-300">Two lines is plenty: what is slowing you down and who it is for. I reply personally and tell you honestly whether I am the right person for it.</p></Reveal>

        <Reveal delay={0.15} className="mt-12">
          <Magnetic strength={0.12}>
            <a
              href={`mailto:${personalInfo.email}?subject=${encodeURIComponent("Project enquiry")}`}
              className="break-all font-display text-3xl font-bold tracking-tight text-paper underline decoration-lemon-400 decoration-2 underline-offset-[0.35em] transition-colors hover:text-lemon-400 md:text-6xl"
            >
              {personalInfo.email}
            </a>
          </Magnetic>
        </Reveal>

        <Reveal delay={0.25} className="mt-12 flex flex-wrap gap-4 font-mono text-xs uppercase tracking-[0.18em]">
          {[
            { label: "GitHub", href: personalInfo.githubUrl },
            { label: "LinkedIn", href: personalInfo.linkedinUrl },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/25 px-6 py-3 text-paper transition-colors hover:border-lemon-400 hover:text-lemon-400"
            >
              {l.label} ↗
            </a>
          ))}
          <a
            href={personalInfo.resumeUrl}
            download="atreya_kamat_resume.pdf"
            className="rounded-full bg-lemon-400 px-6 py-3 font-semibold text-navy-950 transition-colors hover:bg-lemon-300"
          >
            Resume ↓
          </a>
        </Reveal>
      </div>
    </section>
  );
}
