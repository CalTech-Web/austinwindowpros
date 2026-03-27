import type { Metadata } from "next";
import Image from "next/image";
import ServiceHero from "@/components/ServiceHero";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Outdoor Enclosures Austin TX",
  description:
    "Covered patios, pergolas, screened porches, and sunrooms in Austin, TX. Austin Window Pros has been building outdoor living spaces since 1992.",
  alternates: {
    canonical: "https://austinwindowpros.com/services/outdoor-enclosures/",
  },
  openGraph: {
    title: "Outdoor Enclosures in Austin, TX | Austin Window Pros",
    description:
      "Covered patios, pergolas, screened porches, and sunrooms in Austin, TX. Austin Window Pros has been building outdoor living spaces since 1992.",
    url: "https://austinwindowpros.com/services/outdoor-enclosures/",
    type: "website",
  },
};

const enclosureTypes = [
  {
    name: "Covered Patios",
    desc: "Solid roof patio covers protect your family and outdoor furniture from Austin rain and intense summer sun. Choose from insulated panels, wood, and aluminum options.",
  },
  {
    name: "Pergolas & Shade Structures",
    desc: "Open-beam pergolas and louvered shade structures provide stylish relief from the Texas heat whether you are poolside or relaxing on the patio.",
  },
  {
    name: "Screened Porches",
    desc: "Enjoy the outdoors without the bugs. Our screened porch enclosures use durable frames and fine mesh screening that holds up to the Texas climate.",
  },
  {
    name: "Sunrooms",
    desc: "Three-season or year-round sunrooms bring the outdoors inside. All-glass walls and roofs maximize natural light while keeping weather, bugs, and pollen out.",
  },
];

const enclosureFaqs = [
  {
    q: "What is the difference between a covered patio and a screened porch?",
    a: "A covered patio provides shade and rain protection with a solid roof structure. A screened porch adds insect screening to that covered space, creating a fully enclosed outdoor area that is comfortable from spring through fall. Screened porches extend the usable season longer than open covered patios, particularly on evenings when bugs would otherwise drive you inside.",
  },
  {
    q: "Do I need a permit for a covered patio or screened porch in Austin?",
    a: "Permit requirements vary by structure size, location, and whether your neighborhood has HOA rules. Austin Window Pros checks local permit requirements and setback regulations before quoting any outdoor enclosure project. David Adams is familiar with Austin, Cedar Park, Round Rock, and other Central Texas jurisdictions.",
  },
  {
    q: "How long does an outdoor enclosure project take?",
    a: "A standard covered patio project typically takes one to two days once materials are delivered. A screened porch on an existing slab adds one to two additional days for framing and screening. New from-scratch enclosed structures with slab work take longer and depend on the scope and local permit timeline.",
  },
  {
    q: "What materials do you use for outdoor enclosures?",
    a: "Austin Window Pros uses Structall engineered insulated panels for patio covers, which are designed for Texas wind loads and do not require the repainting cycle of wood structures. For glass-enclosed sunrooms, we work with Four Seasons Sunrooms products. Screening systems use heavy-gauge aluminum frames with fiberglass mesh rated for the Texas climate.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://austinwindowpros.com/" },
    { "@type": "ListItem", position: 2, name: "Outdoor Enclosures", item: "https://austinwindowpros.com/services/outdoor-enclosures/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: enclosureFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function OutdoorEnclosuresPage() {
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
        title="Outdoor Enclosures in Austin, TX"
        subtitle="Covered patios, pergolas, screened porches, and sunrooms built for the Texas climate. Get outside in June. Stay out through October."
        breadcrumb="Outdoor Enclosures"
        image="/images/gallery/project-21.jpg"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-6" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>
                More of Your Yard, More of the Year
              </h2>
              <p className="mb-4 leading-relaxed" style={{ color: "#374151" }}>
                June through September, an Austin back yard without shade is genuinely uncomfortable. Direct sun at 3pm in August is not something you work around. It is something you solve. A solid-roof patio cover drops the ambient temperature underneath by 15 to 20 degrees. A screened porch adds bug protection on top of that and stretches the usable season well into October evenings when open patios get cold.
              </p>
              <p className="leading-relaxed" style={{ color: "#374151" }}>
                Austin Window Pros has been building covered patios, pergolas, screened porches, and sunrooms in Central Texas since 1992. We work with Structall for engineered patio panels built to Texas wind loads and Four Seasons Sunrooms for glass-enclosed additions. David Adams will come out, look at your yard and how you use it, and give you a straight quote on what makes sense.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/images/gallery/project-20.jpg"
                alt="Outdoor enclosure project in Austin Texas"
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
            Outdoor Enclosure Options
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {enclosureTypes.map((e) => (
              <div key={e.name} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-lg mb-3" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>{e.name}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{e.desc}</p>
              </div>
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
            {enclosureFaqs.map((faq) => (
              <div key={faq.q} className="border-b border-gray-100 pb-6 last:border-b-0">
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
