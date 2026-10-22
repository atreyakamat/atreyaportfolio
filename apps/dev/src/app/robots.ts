import type { MetadataRoute } from "next";
import { personalInfo } from "@/data/portfolio";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${personalInfo.siteUrl}/sitemap.xml`,
  };
}
