import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { getAllPosts } from "@/lib/markdown";
import { CATEGORIES } from "@/data/categories";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const posts = getAllPosts();
  return [
    { url: `${site.url}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/archive/`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${site.url}/about/`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    ...CATEGORIES.map((c) => ({
      url: `${site.url}/topics/${c.slug}/`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...posts.map((p) => ({
      url: `${site.url}/${p.slug}/`,
      lastModified: new Date(`${p.updated ?? p.date}T00:00:00Z`),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ];
}
