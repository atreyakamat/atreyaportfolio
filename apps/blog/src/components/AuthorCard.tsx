import Image from "next/image";
import { site } from "@/data/site";

export function AuthorCard() {
  return (
    <aside className="flex flex-col gap-5 rounded-[1.5rem] border border-rule bg-card p-6 sm:flex-row sm:items-center">
      <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full ring-2 ring-accent ring-offset-4 ring-offset-card">
        <Image src="/atreyapfp.webp" alt="Atreya Kamat" fill sizes="80px" className="object-cover" />
      </span>
      <div className="min-w-0">
        <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-muted">Written by</p>
        <p className="mt-1 font-display text-2xl font-bold tracking-[-0.02em]">{site.author}</p>
        <p className="mt-2 text-[15px] leading-relaxed text-muted">
          Freelance product engineer in Goa. I build websites, internal tools and automations for local businesses, and make
          short tech videos as @atreya.mp4.{" "}
          <a href={site.mainSite} className="text-link underline underline-offset-4">
            Work with me
          </a>
          .
        </p>
      </div>
    </aside>
  );
}
