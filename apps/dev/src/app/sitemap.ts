import type { MetadataRoute } from "next";
import { allProjects, personalInfo } from "@/data/portfolio";
import { posts } from "@/data/posts";
import { services } from "@/data/services";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = personalInfo.siteUrl;
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...services.map((s) => ({
      url: `${base}/services/${s.slug}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    { url: `${base}/blog/`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.7 },
    ...posts.map((p) => ({
      url: `${base}/blog/${p.slug}/`,
      lastModified: new Date(`${p.published}T00:00:00Z`),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...allProjects.map((p) => ({
      url: `${base}/projects/${p.slug}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: p.isFeatured ? 0.7 : 0.5,
    })),
  ];
}
