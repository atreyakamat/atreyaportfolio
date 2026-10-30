import { site } from "@/data/site";
import { getAllPosts } from "@/lib/markdown";

export const dynamic = "force-static";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** RSS 2.0 feed of published posts, built at export time. */
export function GET() {
  const posts = getAllPosts();
  const items = posts
    .map((p) => {
      const url = `${site.url}/${p.slug}/`;
      return `    <item>
      <title>${esc(p.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(`${p.date}T09:00:00+05:30`).toUTCString()}</pubDate>
      <description>${esc(p.description)}</description>
      <category>${esc(p.categoryLabel)}</category>
${p.tags.map((t) => `      <category>${esc(t)}</category>`).join("\n")}
      <content:encoded><![CDATA[${p.html.replace(/]]>/g, "]]]]><![CDATA[>")}]]></content:encoded>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${esc(site.title)}</title>
    <link>${site.url}/</link>
    <atom:link href="${site.url}/feed.xml" rel="self" type="application/rss+xml" />
    <description>${esc(site.description)}</description>
    <language>en-IN</language>
    <lastBuildDate>${new Date(`${posts[0]?.updated ?? posts[0]?.date ?? "2026-01-01"}T09:00:00+05:30`).toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
