import { site } from "@/data/site";
import type { Post } from "@/lib/markdown";

const person = {
  "@type": "Person",
  "@id": `${site.mainSite}/#person`,
  name: site.author,
  url: site.mainSite,
  sameAs: [site.github, site.linkedin, site.instagram],
};

export const blogLd = {
  "@type": "Blog",
  "@id": `${site.url}/#blog`,
  url: site.url,
  name: site.title,
  description: site.description,
  inLanguage: "en-IN",
  author: person,
  publisher: person,
};

export const postLd = (p: Post) => ({
  "@type": "BlogPosting",
  "@id": `${site.url}/${p.slug}/#post`,
  headline: p.title,
  description: p.description,
  datePublished: p.date,
  dateModified: p.updated ?? p.date,
  url: `${site.url}/${p.slug}/`,
  mainEntityOfPage: { "@type": "WebPage", "@id": `${site.url}/${p.slug}/` },
  image: p.ogImage.startsWith("http") ? p.ogImage : `${site.url}${p.ogImage}`,
  wordCount: p.words,
  keywords: p.tags.join(", "),
  articleSection: p.categoryLabel,
  isPartOf: { "@id": `${site.url}/#blog` },
  author: person,
  publisher: person,
});

export const faqLd = (faq: { q: string; a: string }[]) =>
  faq.length
    ? {
        "@type": "FAQPage",
        mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }
    : null;

export const breadcrumbLd = (trail: { name: string; url: string }[]) => ({
  "@type": "BreadcrumbList",
  itemListElement: trail.map((t, i) => ({ "@type": "ListItem", position: i + 1, name: t.name, item: t.url })),
});

/** Wrap one or more nodes in a single @graph document. */
export const graph = (...nodes: (object | null)[]) => JSON.stringify({ "@context": "https://schema.org", "@graph": nodes.filter(Boolean) });
