import type { Metadata } from "next";
import Image from "next/image";
import ServiceHero from "@/components/ServiceHero";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Patio Door Replacement Austin TX",
  description:
    "Sliding and French patio door replacement in Austin, TX. Energy Star glass, custom sizing, and professional installation by Austin Window Pros.",
  alternates: {
    canonical: "https://austinwindowpros.com/services/patio-door/",
  },
  openGraph: {
    title: "Patio Door Replacement in Austin, TX | Austin Window Pros",
    description:
      "Sliding and French patio door replacement in Austin, TX. Energy Star glass, custom sizing, and professional installation by Austin Window Pros.",
    url: "https://austinwindowpros.com/services/patio-door/",
    type: "website",
  },
};

const patioDoorFaqs = [
  {
    q: "What is the difference between a sliding patio door and a French patio door?",
    a: "Sliding patio doors glide horizontally on a track and do not require swing clearance, making them ideal for spaces with furniture near the doorway. French patio doors swing open from the center and create a wide, symmetrical opening. Both styles are available with Energy Star glass and custom sizing to fit your exact opening.",
  },
  {
    q: "How do I know if my patio door needs replacing?",
    a: "Common signs include a door that sticks or is hard to slide, visible gaps or drafts at the frame, fogging between the glass panes, worn or broken rollers, or a lock that no longer engages cleanly. Patio doors from the 1990s are often past their practical service life and a replacement will be noticeably more efficient.",
  },
  {
    q: "Are your replacement patio doors Energy Star Qualified?",
    a: "Yes. Every patio door we install is Energy Star Qualified with Low-E glass rated for Austin's Southern climate zone. Low-E glass reflects solar heat in summer and retains warmth in winter, reducing the load on your HVAC system and lowering monthly energy costs.",
  },
  {
    q: "Do you custom size patio doors?",
    a: "Yes. Every patio door we install is custom sized to your exact rough opening. This ensures a precise fit and airtight seal, which is essential for both energy performance and long-term durability. Stock-size doors rarely fit correctly without gap-filling, which leads to air and moisture infiltration over time.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://austinwindowpros.com/" },
    { "@type": "ListItem", position: 2, name: "Door Replacement", item: "https://austinwindowpros.com/services/door-replacement/" },
    { "@type": "ListItem", position: 3, name: "Patio Doors", item: "https://austinwindowpros.com/services/patio-door/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: patioDoorFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function PatioDoorPage() {
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
        title="Patio Door Replacement Austin, TX"
        subtitle="Sliding and French patio doors with Energy Star glass, smooth operation, and custom sizing to fit your home perfectly."
        breadcrumb="Patio Doors"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-6" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>
                Open Up Your Living Space
              </h2>
              <p className="mb-4 leading-relaxed" style={{ color: "#374151" }}>
                A patio door that sticks, rattles in the wind, or leaks air on a July afternoon is working against you every day. The right replacement fixes that immediately. Austin Window Pros installs sliding and French patio doors with precision-roller hardware, Energy Star glass rated for the Southern climate zone, and custom sizing to fit your exact opening.
              </p>
              <p className="mb-4 leading-relaxed" style={{ color: "#374151" }}>
                Both sliding and French configurations are available with multi-point locking systems. Fiberglass and composite jamb materials hold up to Austin heat better than painted wood. If you are replacing an original door from the 1990s, the difference in energy performance will be noticeable by the first full summer.
              </p>
              <ul className="space-y-3">
                {[
                  "Energy Star glass with Low-E coating for the Southern climate zone",
                  "Custom sizing for non-standard openings",
                  "Multi-point locking systems standard on request",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs" style={{ backgroundColor: "#3b82f6" }}>
                      ✓
                    </span>
                    <span style={{ color: "#374151" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/images/gallery/project-15.jpg"
                alt="Patio door installation in Austin Texas"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-4" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>
                Sliding Patio Doors
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#6b7280" }}>
                Most Austin back yard connections are a sliding glass door, and the hardware is usually what goes first. The rollers wear, the track corrodes, and a door that once glided easily starts dragging in summer heat. We replace sliding patio doors with precision-roller units custom sized to your exact opening, with Energy Star glass rated for the Texas Southern climate zone.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                Integrated screen track is included. Multi-point locking systems available on request.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-4" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>
                French Patio Doors
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#6b7280" }}>
                French doors work best when the rough opening is wide enough for the symmetrical panel layout, typically 72 inches or wider. Both inswing and outswing configurations are available. Fiberglass and composite jambs hold up to Austin heat without the repainting cycle that comes with wood frames.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                Glass insert options from narrow sidelite to full decorative panels, all with Low-E and Energy Star qualification available.
              </p>
            </div>
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
            {patioDoorFaqs.map((faq) => (
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
