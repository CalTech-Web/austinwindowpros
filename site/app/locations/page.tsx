import type { Metadata } from "next";
import Link from "next/link";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Service Areas | Window & Door Replacement Near Austin, TX",
  description:
    "Austin Window Pros serves Austin and surrounding Central Texas communities including Round Rock, Cedar Park, Pflugerville, Leander, Georgetown, San Marcos, and more.",
  alternates: {
    canonical: "https://austinwindowpros.com/locations/",
  },
  openGraph: {
    title: "Service Areas | Austin Window Pros",
    description:
      "Austin Window Pros serves Austin and surrounding Central Texas communities with professional window and door replacement since 1992.",
    url: "https://austinwindowpros.com/locations/",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://austinwindowpros.com/" },
    { "@type": "ListItem", position: 2, name: "Locations", item: "https://austinwindowpros.com/locations/" },
  ],
};

const locations = [
  {
    city: "Round Rock",
    state: "TX",
    href: "/locations/round-rock/",
    description: "Full window and door replacement services for Round Rock and Williamson County homeowners.",
  },
  {
    city: "Cedar Park",
    state: "TX",
    href: "/locations/cedar-park/",
    description: "Custom measured windows, doors, siding, and outdoor enclosures for Cedar Park homes.",
  },
  {
    city: "Pflugerville",
    state: "TX",
    href: "/locations/pflugerville/",
    description: "Energy Star certified window and door replacement for Pflugerville homeowners.",
  },
  {
    city: "Leander",
    state: "TX",
    href: "/locations/leander/",
    description: "Professional window and door replacement serving Leander and surrounding communities.",
  },
  {
    city: "Georgetown",
    state: "TX",
    href: null,
    description: "Window replacement, door replacement, siding, and outdoor enclosures.",
  },
  {
    city: "San Marcos",
    state: "TX",
    href: null,
    description: "Window replacement, door replacement, siding, and outdoor enclosures.",
  },
  {
    city: "Buda",
    state: "TX",
    href: null,
    description: "Window replacement, door replacement, siding, and outdoor enclosures.",
  },
  {
    city: "Kyle",
    state: "TX",
    href: null,
    description: "Window replacement, door replacement, siding, and outdoor enclosures.",
  },
  {
    city: "Lakeway",
    state: "TX",
    href: null,
    description: "Window replacement, door replacement, siding, and outdoor enclosures.",
  },
  {
    city: "Dripping Springs",
    state: "TX",
    href: null,
    description: "Window replacement, door replacement, siding, and outdoor enclosures.",
  },
];

export default function LocationsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="py-14" style={{ backgroundColor: "#1a3a5c" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <nav className="text-sm mb-4 opacity-70">
            <Link href="/" className="hover:opacity-100">Home</Link>
            <span className="mx-2">/</span>
            <span>Locations</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3" style={{ fontFamily: "var(--font-overpass)" }}>
            Window &amp; Door Replacement Near Austin, TX
          </h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Austin Window Pros serves Austin and surrounding Central Texas communities with professional window and door replacement, siding, and outdoor enclosures since 1992.
          </p>
        </div>
      </section>

      {/* Locations grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 text-center" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>
            Cities We Serve
          </h2>
          <p className="text-center mb-10 max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            David Adams personally handles every consultation across all service areas. Call (512) 422-1907 to schedule a free in-home quote anywhere in Central Texas.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((loc) => (
              <div
                key={loc.city}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100"
              >
                <h3 className="text-lg font-bold mb-1" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>
                  {loc.city}, {loc.state}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#6b7280" }}>{loc.description}</p>
                {loc.href ? (
                  <Link href={loc.href} className="text-sm font-semibold" style={{ color: "#3b82f6" }}>
                    Learn More &rarr;
                  </Link>
                ) : (
                  <Link href="/contact/" className="text-sm font-semibold" style={{ color: "#3b82f6" }}>
                    Get a Free Quote &rarr;
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-6" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>
            One Company, All of Central Texas
          </h2>
          <p className="mb-4 leading-relaxed" style={{ color: "#374151" }}>
            Austin Window Pros is a locally owned company, not a national franchise. David Adams has been serving homeowners across the Austin metro and surrounding communities since 1992. Every installation is custom measured. Every product is Energy Star certified for the Texas Southern climate zone. Financing options are available with one-click approvals.
          </p>
          <p className="leading-relaxed" style={{ color: "#374151" }}>
            Call (512) 422-1907 to schedule a free, no-pressure in-home consultation. We come to you, wherever you are in Central Texas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg text-base font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#3b82f6" }}
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:5124221907"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg text-base font-semibold border-2 hover:bg-[#1a3a5c] hover:text-white transition-colors"
              style={{ borderColor: "#1a3a5c", color: "#1a3a5c" }}
            >
              Call (512) 422-1907
            </a>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
