import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Window & Door Replacement in Round Rock, TX",
  description:
    "Austin Window Pros serves Round Rock, TX with professional window and door replacement. Locally owned since 1992. Custom measured, Energy Star products, free quotes.",
  alternates: {
    canonical: "https://austinwindowpros.com/locations/round-rock/",
  },
  openGraph: {
    title: "Window & Door Replacement in Round Rock, TX | Austin Window Pros",
    description:
      "Austin Window Pros serves Round Rock, TX with professional window and door replacement. Locally owned since 1992. Free quotes and financing available.",
    url: "https://austinwindowpros.com/locations/round-rock/",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://austinwindowpros.com/" },
    { "@type": "ListItem", position: 2, name: "Locations", item: "https://austinwindowpros.com/locations/" },
    { "@type": "ListItem", position: 3, name: "Round Rock", item: "https://austinwindowpros.com/locations/round-rock/" },
  ],
};

const localServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Window and Door Replacement in Round Rock, TX",
  provider: {
    "@type": "LocalBusiness",
    name: "Austin Window Pros",
    url: "https://austinwindowpros.com",
    telephone: "+15124221907",
  },
  areaServed: {
    "@type": "City",
    name: "Round Rock",
    containedInPlace: { "@type": "State", name: "Texas" },
  },
  description:
    "Professional window and door replacement for Round Rock, TX homeowners. Custom measured windows and doors, Energy Star certified products, and professional installation.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you replace windows and doors in Round Rock, TX?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Austin Window Pros serves Round Rock and all of Williamson County with window replacement, door replacement, siding, and outdoor enclosures. David Adams personally handles every consultation.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get a free quote in Round Rock?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call (512) 422-1907 or submit our contact form to schedule a free in-home consultation. We come to your Round Rock home, measure your windows and doors, and provide a no-pressure quote.",
      },
    },
    {
      "@type": "Question",
      name: "What window brands do you install in Round Rock?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We install windows from top manufacturers including Alside and Norandex, and doors from Therma-Tru, Neumadoors, and Masonite. All products are Energy Star certified for the Texas climate.",
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

export default function RoundRockPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[400px] flex items-center" style={{ backgroundColor: "#1a3a5c" }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/gallery/project-09.jpg"
            alt="Window installation project in Round Rock TX"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <nav className="text-sm mb-4 opacity-70">
            <Link href="/" className="hover:opacity-100">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/locations/" className="hover:opacity-100">Locations</Link>
            <span className="mx-2">/</span>
            <span>Round Rock</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3" style={{ fontFamily: "var(--font-overpass)" }}>
            Window &amp; Door Replacement in Round Rock, TX
          </h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Locally owned since 1992. David Adams serves Round Rock homeowners personally, from the first call through the final inspection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
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

      {/* Why we serve Round Rock */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-6" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>
            Serving Round Rock Since 1992
          </h2>
          <p className="mb-4 leading-relaxed" style={{ color: "#374151" }}>
            Round Rock homeowners have been calling Austin Window Pros for over 30 years. The same Texas heat and humidity that drives energy bills up in Austin hits Round Rock just as hard. Homes in the Williamson County area built between 1990 and 2010 are frequently at the age where original windows and doors have reached the end of their useful life. A free in-home consultation tells you exactly where yours stand.
          </p>
          <p className="mb-4 leading-relaxed" style={{ color: "#374151" }}>
            Every window we install in Round Rock is custom measured to your exact opening. No stock sizing, no gap-filling with caulk, no shortcuts. David Adams personally handles every consultation and is accountable for every installation. That is how Austin Window Pros has operated for more than 30 years, and it is why customers in Round Rock keep referring their neighbors.
          </p>
          <p className="leading-relaxed" style={{ color: "#374151" }}>
            We install Energy Star certified windows and doors rated for the Southern climate zone, which means they are tested and verified to perform in the heat conditions common across Williamson County. Financing is available with fast, one-click approvals for qualifying customers.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-10 text-center" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>
            Services Available in Round Rock
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
