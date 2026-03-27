import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBanner from "@/components/CtaBanner";
import GalleryGrid from "@/components/GalleryGrid";
import { galleryImages } from "@/data/gallery";

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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://austinwindowpros.com/" },
    { "@type": "ListItem", position: 2, name: "Gallery", item: "https://austinwindowpros.com/gallery/" },
  ],
};

export default function GalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero */}
      <section className="relative min-h-[400px] flex items-center overflow-hidden" style={{ backgroundColor: "#1a3a5c" }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/gallery/winpro-image-210.jpg"
            alt=""
            fill
            className="object-cover opacity-20"
            priority
            quality={40}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <nav className="text-sm mb-4 opacity-70">
            <Link href="/" className="hover:opacity-100">Home</Link>
            <span className="mx-2">/</span>
            <span>Gallery</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3" style={{ fontFamily: "var(--font-overpass)" }}>
            Project Gallery
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mb-8">
            Over 30 years of window and door installations across Austin and Central Texas. Browse real projects completed by our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center px-7 py-3 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#3b82f6" }}
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:5124221907"
              className="inline-flex items-center justify-center px-7 py-3 rounded-lg text-sm font-semibold border border-white/50 hover:border-white transition-colors"
            >
              (512) 422-1907
            </a>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid images={galleryImages} />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
