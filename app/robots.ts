import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://ashamimomo.com"; // Using the production domain from content

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/private"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
