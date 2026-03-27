import type { Metadata } from "next";
import Image from "next/image";
import ServiceHero from "@/components/ServiceHero";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Window Replacement Austin TX",
  description:
    "Custom window replacement in Austin, TX. Double-pane, Energy Star windows in vinyl, wood, and fiberglass. Free quotes from Austin Window Pros.",
  alternates: {
    canonical: "https://austinwindowpros.com/services/window-replacement/",
  },
  openGraph: {
    title: "Window Replacement in Austin, TX | Austin Window Pros",
    description:
      "Custom window replacement in Austin, TX. Double-pane, Energy Star windows in vinyl, wood, and fiberglass. Free quotes from Austin Window Pros.",
    url: "https://austinwindowpros.com/services/window-replacement/",
    type: "website",
  },
};

const windowTypes = [
  { name: "Double-Hung Windows", desc: "The most popular style. Both sashes slide up and down for easy cleaning and ventilation." },
  { name: "Casement Windows", desc: "Hinged on one side and crank open outward, providing excellent ventilation and a clean look." },
  { name: "Sliding Windows", desc: "Horizontal sashes that glide smoothly, ideal for wide openings and contemporary homes." },
  { name: "Picture Windows", desc: "Fixed panes that frame outdoor views and flood rooms with natural light." },
  { name: "Awning Windows", desc: "Hinged at the top and open outward, allowing fresh air even during light rain." },
  { name: "Bay & Bow Windows", desc: "Extend outward from the exterior wall to create a dramatic architectural feature and extra interior space." },
];

const materials = [
  { name: "Vinyl", desc: "Low maintenance, moisture-resistant, and highly energy-efficient. Our most popular choice." },
  { name: "Wood", desc: "Classic beauty with natural insulating properties. Ideal for traditional and historic homes." },
  { name: "Aluminum Clad", desc: "Wood interior with aluminum exterior for a durable, weather-resistant finish." },
  { name: "Aluminum Thermal Break", desc: "Commercial-grade durability with a thermal break to reduce heat transfer." },
  { name: "Fiberglass Composite", desc: "The strongest and most dimensionally stable material. Resists warping, swelling, and rotting." },
];

const windowFaqs = [
  {
    q: "What are the benefits of window replacement?",
    a: "Window replacement improves energy efficiency, reduces noise, and enhances security. Upgrading to Energy Star-rated double-pane windows keeps indoor temperatures stable year-round, which lowers utility bills significantly in Austin's hot climate. New windows also enhance curb appeal and can increase your home's resale value.",
  },
  {
    q: "How do I know if my windows need replacing?",
    a: "Common signs include drafts around the frame, condensation or fogging between panes, difficulty opening or closing, rising energy bills, or visible damage to the frame or glass. Windows more than 15 to 20 years old are worth evaluating even without obvious symptoms, since the technology in a current Energy Star window is meaningfully better than what was standard in 2005.",
  },
  {
    q: "How long does window installation take?",
    a: "Most residential projects are completed in a single day. The crew arrives, removes old windows one at a time, inspects the rough openings, installs and seals the new windows, and completes a full walkthrough before leaving. The job site is cleaned as the work progresses.",
  },
  {
    q: "What window brands and styles do you install?",
    a: "We install windows from top manufacturers including Alside and Norandex in double-hung, casement, sliding, picture, awning, and bay styles. Every window is custom measured to your exact rough opening for a precise fit and airtight seal. Frame materials include vinyl, wood, aluminum clad, aluminum thermal break, and fiberglass composite.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://austinwindowpros.com/" },
    { "@type": "ListItem", position: 2, name: "Window Replacement", item: "https://austinwindowpros.com/services/window-replacement/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: windowFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function WindowReplacementPage() {
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
        title="Window Replacement in Austin, TX"
        subtitle="Custom measured windows installed by experienced professionals. Energy Star qualified double-pane glass to lower your utility bills year-round."
        breadcrumb="Window Replacement"
        image="/images/gallery/project-03.jpg"
      />

      {/* Why replace */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-6" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>
                Why Replace Your Windows?
              </h2>
              <p className="mb-4 leading-relaxed" style={{ color: "#374151" }}>
                Windows account for 25 to 30 percent of a home&apos;s heating and cooling load. In Austin, where the AC runs from May through October, that number matters. Old, failed, or single-pane windows make your HVAC work harder than it needs to, and you see it every month on your electric bill.
              </p>
              <p className="mb-4 leading-relaxed" style={{ color: "#374151" }}>
                Double-pane Low-E glass reflects solar heat in summer and holds warmth in winter. Up to 99 percent of UV rays blocked at the glass means furniture and flooring last longer. The noise reduction is real too, particularly if you are near a major road or have an airport flight path overhead.
              </p>
              <p className="leading-relaxed" style={{ color: "#374151" }}>
                Modern frames with multi-point locking systems are meaningfully more secure than the single-point locks found on windows from the 1990s. Curb appeal and resale value are genuine benefits as well, though they tend to be the last reason people call us. The energy savings usually close the argument first.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/images/gallery/project-03.jpg"
                alt="Window replacement project in Austin Texas"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Window types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-10 text-center" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>
            Window Styles We Install
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {windowTypes.map((w) => (
              <div key={w.name} className="bg-white rounded-xl p-6 border border-gray-100 border-l-4 border-l-[#3b82f6] shadow-sm hover:shadow-md transition-shadow duration-200">
                <h3 className="font-bold text-base mb-2" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>{w.name}</h3>
                <p className="text-sm" style={{ color: "#6b7280" }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-10 text-center" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>
            Frame Materials
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {materials.map((m) => (
              <div key={m.name} className="bg-gray-50 rounded-xl p-5 text-center">
                <h3 className="font-bold text-sm mb-2" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>{m.name}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-10 text-center" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>
            Recent Window Projects
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[5, 6, 7, 9, 10, 11].map((n) => (
              <div key={n} className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-200">
                <Image
                  src={`/images/gallery/project-${String(n).padStart(2, "0")}.jpg`}
                  alt={`Austin Window Pros window project`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
                  className="object-cover"
                />
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
            {windowFaqs.map((faq) => (
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
