import type { MetadataRoute } from "next";
import { site } from "@/data/speak";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${site.url}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/decks/solo-aitd/`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
  ];
}
