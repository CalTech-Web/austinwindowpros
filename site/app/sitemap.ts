import type { MetadataRoute } from "next";

const blogSlugs = [
  "casement-vs-double-hung-windows",
  "replace-one-window-or-all",
  "how-to-choose-window-contractor-austin",
  "covered-patio-vs-screened-porch-austin",
  "window-replacement-cost-austin",
  "vinyl-vs-fiber-cement-siding",
  "signs-you-need-new-windows",
  "energy-efficient-windows-austin",
  "window-frame-materials-guide",
  "patio-door-options",
  "window-installation-what-to-expect",
  "outdoor-enclosures-austin",
  "siding-replacement-signs-texas",
  "entry-door-replacement-austin",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://austinwindowpros.com";
  const now = new Date();

  const blogEntries = blogSlugs.map((slug) => ({
    url: `${base}/blog/${slug}/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

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
    { url: `${base}/locations/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/locations/round-rock/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/locations/cedar-park/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/locations/pflugerville/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/locations/leander/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/locations/georgetown/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/locations/san-marcos/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/locations/buda/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/locations/kyle/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/locations/lakeway/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/locations/dripping-springs/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/privacy-policy/`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms-of-service/`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    ...blogEntries,
  ];
}
