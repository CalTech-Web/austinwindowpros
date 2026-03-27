import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ServiceHero from "@/components/ServiceHero";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Our Services | Austin Window Pros",
  description:
    "Window replacement, door replacement, patio doors, siding installation, and outdoor enclosures in Austin, TX. Custom measured and professionally installed by Austin Window Pros.",
  alternates: {
    canonical: "https://austinwindowpros.com/services/",
  },
  openGraph: {
    title: "Our Services | Austin Window Pros",
    description:
      "Window replacement, door replacement, patio doors, siding installation, and outdoor enclosures in Austin, TX. Custom measured and professionally installed.",
    url: "https://austinwindowpros.com/services/",
    type: "website",
  },
};

const services = [
  {
    title: "Window Replacement",
    description:
      "Custom measured to your exact specifications. Energy-efficient double-pane glass in vinyl, wood, aluminum clad, and fiberglass composite. Double-hung, casement, sliding, picture, awning, bay, and specialty styles available.",
    href: "/services/window-replacement/",
    image: "/images/gallery/project-03.jpg",
    features: [
      "Custom measured for a precise fit",
      "Energy Star double-pane glass",
      "Vinyl, wood, aluminum, and fiberglass options",
      "Blocks UV rays and reduces noise",
    ],
  },
  {
    title: "Door Replacement",
    description:
      "Entry doors in fiberglass, metal, and stainable options with a wide array of hardware. Energy Star Qualified with Low-E glass and manufacturer warranties for lasting performance.",
    href: "/services/door-replacement/",
    image: "/images/gallery/project-07.jpg",
    features: [
      "Fiberglass, metal, and stainable wood",
      "Energy Star Qualified with Low-E glass",
      "Wide selection of hardware finishes",
      "Manufacturer warranties included",
    ],
  },
  {
    title: "Patio Doors",
    description:
      "Sliding patio doors and French patio doors, both inswing and outswing, with modern fiberglass and composite jambs. Custom sizing and Energy Star glass for year-round comfort.",
    href: "/services/patio-door/",
    image: "/images/gallery/project-11.jpg",
    features: [
      "Sliding and French door styles",
      "Inswing and outswing configurations",
      "Fiberglass and composite jambs",
      "Custom sizing available",
    ],
  },
  {
    title: "Siding Installation",
    description:
      "Vinyl, fiber cement, wood, stucco, stone veneer, and composite siding. Low-maintenance options built to handle the Texas climate and boost your home's curb appeal.",
    href: "/services/siding/",
    image: "/images/gallery/project-14.jpg",
    features: [
      "Vinyl, fiber cement, wood, and composite",
      "Stone veneer and stucco options",
      "Low-maintenance and moisture-resistant",
      "Built for the Texas climate",
    ],
  },
  {
    title: "Outdoor Enclosures",
    description:
      "Covered patios, shade structures, pergolas, screened porches, and sunrooms to expand your living space and enjoy the outdoors protected from sun, rain, and insects.",
    href: "/services/outdoor-enclosures/",
    image: "/images/gallery/project-21.jpg",
    features: [
      "Covered patios and pergolas",
      "Screened porches and sunrooms",
      "Protection from sun, rain, and insects",
      "Expand your outdoor living space",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <ServiceHero
        title="Our Services"
        subtitle="Windows, doors, siding, and outdoor enclosures. Every project custom measured and professionally installed by Austin Window Pros."
        breadcrumb="Services"
        image="/images/gallery/project-13.jpg"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((svc, i) => (
              <div
                key={svc.href}
                className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-12 items-center`}
              >
                <div className="w-full lg:w-1/2">
                  <Link href={svc.href} className="block relative aspect-[4/3] rounded-xl overflow-hidden group">
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ backgroundColor: "rgba(26,58,92,0.3)" }}
                    />
                  </Link>
                </div>
                <div className="w-full lg:w-1/2">
                  <h2
                    className="text-2xl sm:text-3xl font-extrabold mb-4"
                    style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}
                  >
                    {svc.title}
                  </h2>
                  <p className="text-base leading-relaxed mb-6" style={{ color: "#374151" }}>
                    {svc.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm" style={{ color: "#374151" }}>
                        <svg
                          className="w-5 h-5 flex-shrink-0 mt-0.5"
                          style={{ color: "#3b82f6" }}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={svc.href}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
                    style={{ backgroundColor: "#3b82f6" }}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
