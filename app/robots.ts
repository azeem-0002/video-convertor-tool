import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://yt2mp3cnv.com"

  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/privacy-policy", "/terms-of-service", "/api-access"],
      disallow: ["/api/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
