import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Window & Door Replacement in Leander, TX",
  description:
    "Austin Window Pros serves Leander, TX with professional window and door replacement. Locally owned since 1992. Custom measured, Energy Star products, free quotes.",
  alternates: {
    canonical: "https://austinwindowpros.com/locations/leander/",
  },
  openGraph: {
    title: "Window & Door Replacement in Leander, TX | Austin Window Pros",
    description:
      "Austin Window Pros serves Leander, TX with professional window and door replacement. Locally owned since 1992. Free quotes and financing available.",
    url: "https://austinwindowpros.com/locations/leander/",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://austinwindowpros.com/" },
    { "@type": "ListItem", position: 2, name: "Locations", item: "https://austinwindowpros.com/locations/" },
    { "@type": "ListItem", position: 3, name: "Leander", item: "https://austinwindowpros.com/locations/leander/" },
  ],
};

const localServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Window and Door Replacement in Leander, TX",
  provider: {
    "@type": "LocalBusiness",
    name: "Austin Window Pros",
    url: "https://austinwindowpros.com",
    telephone: "+15124221907",
  },
  areaServed: {
    "@type": "City",
    name: "Leander",
    containedInPlace: { "@type": "State", name: "Texas" },
  },
  description:
    "Professional window and door replacement for Leander, TX homeowners. Custom measured windows and doors, Energy Star certified products, and professional installation.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you replace windows and doors in Leander, TX?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Austin Window Pros serves Leander with window replacement, door replacement, siding, and outdoor enclosures. David Adams handles every consultation personally and is involved from first call through final inspection.",
      },
    },
    {
      "@type": "Question",
      name: "How long does window replacement take in Leander?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most residential window replacement projects in Leander are completed in a single day. Every window is custom measured before ordering, so the installation goes smoothly and efficiently.",
      },
    },
    {
      "@type": "Question",
      name: "What types of windows do you install in Leander?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We install double-hung, casement, picture, slider, awning, and bay windows in vinyl, fiberglass, aluminum clad, and composite frames. All products are Energy Star certified for the Southern climate zone.",
      },
    },
  ],
};

const services = [
  {
    title: "Window Replacement",
    description: "Custom measured replacement windows in vinyl, fiberglass, and aluminum clad. Energy Star certified for Texas heat.",
    href: "/services/window-replacement/",
  },
  {
    title: "Door Replacement",
    description: "Entry doors, sliding patio doors, and French doors with Energy Star glass and manufacturer warranties.",
    href: "/services/door-replacement/",
  },
  {
    title: "Siding",
    description: "Vinyl, fiber cement, and composite siding options built to handle Central Texas weather.",
    href: "/services/siding/",
  },
  {
    title: "Outdoor Enclosures",
    description: "Covered patios, screened porches, and pergolas to expand your outdoor living space.",
    href: "/services/outdoor-enclosures/",
  },
];

export default function LeanderPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[400px] flex items-center" style={{ backgroundColor: "#1a3a5c" }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/gallery/project-12.jpg"
            alt="Window installation project in Leander TX"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
          <nav className="text-sm mb-4 opacity-70">
            <Link href="/" className="hover:opacity-100">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/locations/" className="hover:opacity-100">Locations</Link>
            <span className="mx-2">/</span>
            <span>Leander</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3" style={{ fontFamily: "var(--font-overpass)" }}>
            Window &amp; Door Replacement in Leander, TX
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Locally owned since 1992. David Adams serves Leander homeowners personally, from the first call through the final inspection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#3b82f6" }}
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:5124221907"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold border-2 border-white text-white hover:bg-white hover:text-[#1a3a5c] transition-colors"
            >
              Call (512) 422-1907
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-6" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>
            Serving Leander Since 1992
          </h2>
          <p className="mb-4 leading-relaxed" style={{ color: "#374151" }}>
            Leander has grown dramatically over the past two decades, but many of its established neighborhoods are now at the age where original windows and doors warrant serious evaluation. The combination of summer heat, UV exposure, and the occasional hail storm that crosses Williamson County leaves aging windows visibly worse for wear. Fogging panes, sticking sashes, and higher utility bills are the signs homeowners in Leander most commonly call us about.
          </p>
          <p className="mb-4 leading-relaxed" style={{ color: "#374151" }}>
            Austin Window Pros brings the same standard of service to Leander that we have delivered across Central Texas since 1992. Every window and door is custom measured by David Adams personally. Nothing is ordered to a stock dimension. Every product we install is Energy Star certified for the Southern climate zone, which means it has been tested and rated for the heat conditions Leander homeowners deal with from May through September.
          </p>
          <p className="leading-relaxed" style={{ color: "#374151" }}>
            Call (512) 422-1907 to schedule a free in-home consultation. No showroom visit, no pressure, no obligation.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-10 text-center" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>
            Services Available in Leander
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-lg font-bold mb-2" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>
                  {svc.title}
                </h3>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "#6b7280" }}>{svc.description}</p>
                <span className="text-sm font-semibold" style={{ color: "#3b82f6" }}>Learn More &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold mb-8" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((item) => (
              <div key={item.name} className="rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
                <h3 className="font-semibold mb-2" style={{ color: "#1a3a5c" }}>{item.name}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
