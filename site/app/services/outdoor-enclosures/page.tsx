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
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9l9-7 9 7" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 9h20" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 9v11h14V9" />
        <line x1="9" y1="9" x2="9" y2="20" strokeWidth={1.5} strokeLinecap="round" />
        <line x1="15" y1="9" x2="15" y2="20" strokeWidth={1.5} strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Pergolas & Shade Structures",
    desc: "Open-beam pergolas and louvered shade structures provide stylish relief from the Texas heat whether you are poolside or relaxing on the patio.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <line x1="4" y1="5" x2="20" y2="5" strokeWidth={1.5} strokeLinecap="round" />
        <line x1="7" y1="5" x2="7" y2="9" strokeWidth={1.5} strokeLinecap="round" />
        <line x1="12" y1="5" x2="12" y2="9" strokeWidth={1.5} strokeLinecap="round" />
        <line x1="17" y1="5" x2="17" y2="9" strokeWidth={1.5} strokeLinecap="round" />
        <line x1="2" y1="9" x2="22" y2="9" strokeWidth={2} strokeLinecap="round" />
        <line x1="5" y1="9" x2="5" y2="20" strokeWidth={1.5} strokeLinecap="round" />
        <line x1="19" y1="9" x2="19" y2="20" strokeWidth={1.5} strokeLinecap="round" />
        <line x1="3" y1="20" x2="21" y2="20" strokeWidth={1.5} strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Screened Porches",
    desc: "Enjoy the outdoors without the bugs. Our screened porch enclosures use durable frames and fine mesh screening that holds up to the Texas climate.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="1.5" strokeWidth={1.5} />
        <line x1="8" y1="2" x2="8" y2="22" strokeWidth={1} strokeLinecap="round" />
        <line x1="14" y1="2" x2="14" y2="22" strokeWidth={1} strokeLinecap="round" />
        <line x1="2" y1="8" x2="22" y2="8" strokeWidth={1} strokeLinecap="round" />
        <line x1="2" y1="14" x2="22" y2="14" strokeWidth={1} strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Sunrooms",
    desc: "Three-season or year-round sunrooms bring the outdoors inside. All-glass walls and roofs maximize natural light while keeping weather, bugs, and pollen out.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="10" r="3" strokeWidth={1.5} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2v2M12 16v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 10h2M20 10h2M4.22 15.78l1.42-1.42M18.36 1.64l1.42 1.42" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 20h16" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 20V14h12v6" />
      </svg>
    ),
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
              <div key={e.name} className="bg-white rounded-xl p-6 border border-gray-100 border-l-4 border-l-[#3b82f6] shadow-sm hover:shadow-md transition-shadow duration-200 flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#eff6ff", color: "#3b82f6" }}>
                  {e.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-3" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>{e.name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{e.desc}</p>
                </div>
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
