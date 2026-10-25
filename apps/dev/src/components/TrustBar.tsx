const items = [
  "Written spec before any code",
  "Private staging link while we build",
  "Code, domain & accounts in your name",
  "Based in Goa · one direct contact",
];

/** Slim row of guarantees under the hero. */
export function TrustBar() {
  return (
    <div className="px-3 md:px-6">
      <ul className="mx-auto grid max-w-[96rem] gap-px overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((t) => (
          <li key={t} className="flex items-center gap-3 bg-navy-950 px-5 py-4 text-sm text-paper">
            <span aria-hidden className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lemon-400 text-[11px] font-bold text-navy-950">
              ✓
            </span>
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}
