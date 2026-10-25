import { marquee } from "@/data/site";

function Track({ hidden }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden}>
      {marquee.map((m) => (
        <li key={m} className="flex items-center">
          <span className="whitespace-nowrap px-8 font-display text-3xl italic text-tide-950 md:text-5xl">{m}</span>
          <span aria-hidden className="text-2xl text-sun-700 md:text-3xl">✺</span>
        </li>
      ))}
    </ul>
  );
}

export function Marquee() {
  return (
    <section aria-label="What Saltwater Studios does" className="overflow-hidden bg-sand py-5">
      <div className="marquee-track flex w-max">
        <Track />
        <Track hidden />
      </div>
    </section>
  );
}
