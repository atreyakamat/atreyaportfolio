import { personalInfo } from "@/data/portfolio";
import { getAllPosts } from "@/lib/markdown";

export const dynamic = "force-static";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** RSS 2.0 feed of published posts, built at export time. */
export function GET() {
  const site = personalInfo.siteUrl;
  const posts = getAllPosts();
  const items = posts
    .map((p) => {
      const url = `${site}/blog/${p.slug}/`;
      return `    <item>
      <title>${esc(p.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(`${p.date}T09:00:00+05:30`).toUTCString()}</pubDate>
      <description>${esc(p.description)}</description>
${p.tags.map((t) => `      <category>${esc(t)}</category>`).join("\n")}
      <content:encoded><![CDATA[${p.html.replace(/]]>/g, "]]]]><![CDATA[>")}]]></content:encoded>
    </item>`;
    })
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Atreya Kamat — Blog</title>
    <link>${site}/blog/</link>
    <atom:link href="${site}/feed.xml" rel="self" type="application/rss+xml" />
    <description>Plain-language guides on websites, custom software and automation for businesses in Goa.</description>
    <language>en-IN</language>
    <lastBuildDate>${new Date(`${posts[0]?.updated ?? posts[0]?.date ?? "2026-01-01"}T09:00:00+05:30`).toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
