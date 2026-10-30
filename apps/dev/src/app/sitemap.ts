import type { MetadataRoute } from "next";
import { allProjects, personalInfo } from "@/data/portfolio";
import { services } from "@/data/services";
import { caseStudyUrls } from "@/data/caseStudies";

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
    ...caseStudyUrls.map((u) => ({ url: `${base}${u}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...allProjects.map((p) => ({
      url: `${base}/projects/${p.slug}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: p.isFeatured ? 0.7 : 0.5,
    })),
  ];
}
