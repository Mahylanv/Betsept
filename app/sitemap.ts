import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const rawSiteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://betsept.vercel.app";
  const siteUrl = rawSiteUrl.replace(/\/+$/, "");
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    }
  ];
}
