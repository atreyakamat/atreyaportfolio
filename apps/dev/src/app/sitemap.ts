import type { MetadataRoute } from "next";
import { allProjects, personalInfo } from "@/data/portfolio";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = personalInfo.siteUrl;
  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    ...allProjects.map((p) => ({
      url: `${base}/projects/${p.slug}/`,
      changeFrequency: "monthly" as const,
      priority: p.isFeatured ? 0.8 : 0.6,
    })),
  ];
}
