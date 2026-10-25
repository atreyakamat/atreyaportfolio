import clsx from "clsx";

/**
 * Long-form reading typography for post HTML (rendered at build time from
 * markdown in content/posts). Midnight Citrus: paper text on navy, lemon accents.
 * Blockquotes double as callouts: a leading **bold** line becomes the label.
 */
const prose = clsx(
  "text-[1.075rem] leading-[1.75] text-navy-100",
  "[&>*+*]:mt-6",
  // headings
  "[&_h2]:scroll-mt-28 [&_h2]:pt-8 [&_h2]:font-display [&_h2]:text-3xl [&_h2]:font-extrabold [&_h2]:leading-tight [&_h2]:tracking-tight [&_h2]:text-paper md:[&_h2]:text-4xl",
  "[&_h3]:scroll-mt-28 [&_h3]:pt-3 [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-bold [&_h3]:tracking-tight [&_h3]:text-paper md:[&_h3]:text-2xl",
  // inline
  "[&_strong]:font-semibold [&_strong]:text-paper",
  "[&_a]:text-lemon-400 [&_a]:underline [&_a]:decoration-lemon-400/40 [&_a]:underline-offset-4 hover:[&_a]:decoration-lemon-400",
  "[&_:not(pre)>code]:rounded [&_:not(pre)>code]:bg-navy-800 [&_:not(pre)>code]:px-1.5 [&_:not(pre)>code]:py-0.5 [&_:not(pre)>code]:font-mono [&_:not(pre)>code]:text-[0.88em] [&_:not(pre)>code]:text-lemon-300",
  // lists
  "[&_ul]:list-disc [&_ul]:space-y-3 [&_ul]:pl-6 [&_ul_li]:marker:text-lemon-400",
  "[&_ol]:list-decimal [&_ol]:space-y-4 [&_ol]:pl-7 [&_ol_li]:pl-1 [&_ol_li]:marker:font-mono [&_ol_li]:marker:text-sm [&_ol_li]:marker:text-lemon-400",
  // callouts / quotes
  "[&_blockquote]:rounded-2xl [&_blockquote]:border [&_blockquote]:border-lemon-400/40 [&_blockquote]:bg-navy-900 [&_blockquote]:p-6 [&_blockquote]:text-paper",
  "[&_blockquote>*+*]:mt-2 [&_blockquote>p:first-child>strong:only-child]:font-mono [&_blockquote>p:first-child>strong:only-child]:text-[11px] [&_blockquote>p:first-child>strong:only-child]:font-normal [&_blockquote>p:first-child>strong:only-child]:uppercase [&_blockquote>p:first-child>strong:only-child]:tracking-[0.2em] [&_blockquote>p:first-child>strong:only-child]:text-lemon-400",
  // code blocks
  "[&_pre]:overflow-x-auto [&_pre]:rounded-2xl [&_pre]:border [&_pre]:border-white/10 [&_pre]:bg-navy-950 [&_pre]:p-5 [&_pre]:font-mono [&_pre]:text-sm [&_pre]:leading-relaxed [&_pre]:text-navy-100",
  // tables
  "[&_.table-wrap]:overflow-x-auto [&_.table-wrap]:rounded-2xl [&_.table-wrap]:border [&_.table-wrap]:border-white/10",
  "[&_table]:w-full [&_table]:border-collapse [&_table]:text-left [&_table]:text-[0.95rem]",
  "[&_th]:bg-navy-900 [&_th]:px-4 [&_th]:py-3 [&_th]:font-mono [&_th]:text-[11px] [&_th]:font-normal [&_th]:uppercase [&_th]:tracking-[0.16em] [&_th]:text-lemon-400",
  "[&_td]:border-t [&_td]:border-white/10 [&_td]:px-4 [&_td]:py-3 [&_td]:align-top",
  // media + rules
  "[&_img]:h-auto [&_img]:w-full [&_img]:rounded-2xl [&_img]:border [&_img]:border-white/10",
  "[&_hr]:border-white/10",
);

export function PostBody({ html }: { html: string }) {
  // HTML is generated at build time from the site's own markdown files.
  return <div className={prose} dangerouslySetInnerHTML={{ __html: html }} />;
}
