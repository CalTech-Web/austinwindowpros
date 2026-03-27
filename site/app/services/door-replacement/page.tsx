import type { Metadata } from "next";
import Image from "next/image";
import ServiceHero from "@/components/ServiceHero";
import CtaBanner from "@/components/CtaBanner";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Door Replacement Austin TX",
  description:
    "Entry doors, sliding patio doors, and French doors in Austin, TX. Energy Star Qualified with Low-E glass. Free quotes from Austin Window Pros.",
  alternates: {
    canonical: "https://austinwindowpros.com/services/door-replacement/",
  },
  openGraph: {
    title: "Door Replacement in Austin, TX | Austin Window Pros",
    description:
      "Entry doors, sliding patio doors, and French doors in Austin, TX. Energy Star Qualified with Low-E glass. Free quotes from Austin Window Pros.",
    url: "https://austinwindowpros.com/services/door-replacement/",
    type: "website",
  },
};

const doorTypes = [
  {
    name: "Entry Doors",
    desc: "Fiberglass, steel, and stainable wood entry doors with a wide array of hardware, glass inserts, and finish options.",
  },
  {
    name: "Sliding Patio Doors",
    desc: "Smooth-gliding patio doors with Energy Star glass, custom sizing, and multi-point locking systems.",
    link: "/services/patio-door/",
  },
  {
    name: "French Patio Doors",
    desc: "Classic hinged doors, both inswing and outswing, with modern fiberglass and composite jambs.",
  },
];

const brands = ["Therma-Tru", "Neumadoors", "Masonite"];

const doorFaqs = [
  {
    q: "What types of doors do you install?",
    a: "Austin Window Pros installs fiberglass, steel, and wood entry doors, along with sliding patio doors and French patio doors. Fiberglass doors from Therma-Tru and Masonite are our most popular choice for Austin homeowners due to their durability and low maintenance in the Texas climate.",
  },
  {
    q: "How long does door installation take?",
    a: "A standard entry door or patio door replacement is typically completed in a single day. The crew removes the existing door, inspects the rough opening, installs and seals the new door, and completes a full walkthrough before leaving. The job site is cleaned before the crew goes.",
  },
  {
    q: "Are your replacement doors Energy Star Qualified?",
    a: "Yes. Every door we install is Energy Star Qualified with Low-E glass and manufacturer warranty coverage. Energy Star certified doors are tested to perform in Austin's Southern climate zone, reducing heat transfer and lowering your energy bills.",
  },
  {
    q: "What door brands do you carry?",
    a: "We carry Therma-Tru, Neumadoors, and Masonite doors. All three manufacturers offer strong warranty programs and a wide selection of entry door and patio door styles in fiberglass, steel, and wood options.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://austinwindowpros.com/" },
    { "@type": "ListItem", position: 2, name: "Door Replacement", item: "https://austinwindowpros.com/services/door-replacement/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: doorFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function DoorReplacementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServiceHero
        title="Door Replacement in Austin, TX"
        subtitle="Beautiful, energy-efficient entry doors and patio doors installed by Austin's local experts. Energy Star Qualified with Low-E glass and manufacturer warranties."
        breadcrumb="Door Replacement"
        image="/images/gallery/project-07.jpg"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-6" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>
                Upgrade Your Doors Inside and Out
              </h2>
              <p className="mb-4 leading-relaxed" style={{ color: "#374151" }}>
                Most homeowners replace a door when something breaks. The deadbolt stops latching cleanly. The weather seal pulls apart. On a January morning you feel cold air at the threshold and realize the door has been leaking for years. Those are valid reasons to call. But a 20-year-old door is also undermining every other efficiency improvement you have made to the house.
              </p>
              <p className="leading-relaxed" style={{ color: "#374151" }}>
                Austin Window Pros carries Therma-Tru, Neumadoors, and Masonite. Every door we install is Energy Star Qualified with Low-E glass and comes with manufacturer warranty coverage. We custom size entries and patio doors to your opening, so the fit is right the first time and you are not looking at visible gaps at the frame a year later.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/images/gallery/project-14.jpg"
                alt="Door replacement project in Austin Texas"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-10 text-center" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>
            Door Types We Install
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {doorTypes.map((d) => (
              <div key={d.name} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-lg mb-3" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>{d.name}</h3>
                <p className="text-sm mb-4" style={{ color: "#6b7280" }}>{d.desc}</p>
                {d.link && (
                  <Link href={d.link} className="text-sm font-semibold" style={{ color: "#3b82f6" }}>
                    Learn more about patio doors &rarr;
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-bold mb-6" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>
            Trusted Door Brands We Carry
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {brands.map((b) => (
              <span
                key={b}
                className="px-6 py-3 rounded-lg text-sm font-semibold border"
                style={{ borderColor: "#e5e7eb", color: "#1a3a5c", backgroundColor: "#f9fafb" }}
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-10 text-center" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {doorFaqs.map((faq) => (
              <div key={faq.q} className="rounded-xl p-6 border border-gray-100 border-l-4 border-l-[#3b82f6] shadow-sm hover:shadow-md transition-shadow duration-200">
                <h3 className="font-bold text-base mb-2" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>
                  {faq.q}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
