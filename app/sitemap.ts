import { MetadataRoute } from "next"
import { TARGET_CITIES } from "@/lib/cities"

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://www.empirestatebulldogs.com"

    const cityUrls = TARGET_CITIES.map((city) => ({
        url: `${baseUrl}/locations/${city.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.8,
    }))

    const staticUrls = [
        "",
        "/faq",
        "/health-guarantee",
        "/shipping",
        "/breeding-policies",
        "/privacy",
        "/terms",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: route === "" ? 1.0 : 0.5,
    }))

    return [...staticUrls, ...cityUrls]
}
