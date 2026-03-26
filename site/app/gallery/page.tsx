import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Window & Door Project Gallery",
  description:
    "Browse Austin Window Pros project gallery. Real window, door, and siding installations across Austin and Central Texas since 1992.",
  alternates: {
    canonical: "https://austinwindowpros.com/gallery/",
  },
  openGraph: {
    title: "Window & Door Project Gallery | Austin Window Pros",
    description:
      "Browse Austin Window Pros project gallery. Real window, door, and siding installations across Austin and Central Texas since 1992.",
    url: "https://austinwindowpros.com/gallery/",
    type: "website",
  },
};

const projects = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  src: `/images/gallery/project-${String(i + 1).padStart(2, "0")}.jpg`,
  alt: `Austin Window Pros project ${i + 1}`,
}));

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-14" style={{ backgroundColor: "#1a3a5c" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <nav className="text-sm mb-4 opacity-70">
            <Link href="/" className="hover:opacity-100">Home</Link>
            <span className="mx-2">/</span>
            <span>Gallery</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3" style={{ fontFamily: "var(--font-overpass)" }}>
            Project Gallery
          </h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Over 30 years of window and door installations across Austin and Central Texas. Browse real projects completed by our team.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {projects.map((p) => (
              <div key={p.id} className="relative aspect-square rounded-lg overflow-hidden bg-gray-200 group">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
