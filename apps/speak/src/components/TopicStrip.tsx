import { topics } from "@/data/speak";

const items = [...topics.map((t) => t.title), "Hands-on workshops", "College sessions", "Panels"];

function Track({ hidden }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden}>
      {items.map((item, i) => (
        <li key={`${item}-${i}`} className="flex items-center">
          <span className="whitespace-nowrap px-7 font-display text-3xl font-bold uppercase tracking-tight text-cobalt-950 md:text-5xl">{item}</span>
          <span aria-hidden className="text-2xl text-cobalt-500 md:text-4xl">
            ●
          </span>
        </li>
      ))}
    </ul>
  );
}

/** Lemonade marquee of topics between the hero and the workshop. */
export function TopicStrip() {
  return (
    <section aria-label="Topics I speak on" className="marquee overflow-hidden border-y border-cobalt-950/20 bg-lemonade py-5">
      <div className="marquee-track flex w-max">
        <Track />
        <Track hidden />
      </div>
    </section>
  );
}
