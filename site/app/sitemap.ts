import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://austinwindowpros.com";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/services/window-replacement/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/door-replacement/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/patio-door/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/siding/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/outdoor-enclosures/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/gallery/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about/`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/blog/`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${base}/contact/`, lastModified: now, changeFrequency: "yearly", priority: 0.9 },
    { url: `${base}/privacy-policy/`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms-of-service/`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
