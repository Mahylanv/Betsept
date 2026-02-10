import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const rawSiteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://betsept.vercel.app";
  const siteUrl = rawSiteUrl.replace(/\/+$/, "");
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl
  };
}
