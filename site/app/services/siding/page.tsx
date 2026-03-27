import type { Metadata } from "next";
import Image from "next/image";
import ServiceHero from "@/components/ServiceHero";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Siding Installation Austin TX",
  description:
    "Vinyl, fiber cement, wood, and composite siding installation in Austin, TX. Professional installation by Austin Window Pros since 1992.",
  alternates: {
    canonical: "https://austinwindowpros.com/services/siding/",
  },
  openGraph: {
    title: "Siding Installation in Austin, TX | Austin Window Pros",
    description:
      "Vinyl, fiber cement, wood, and composite siding installation in Austin, TX. Professional installation by Austin Window Pros since 1992.",
    url: "https://austinwindowpros.com/services/siding/",
    type: "website",
  },
};

const sidingTypes = [
  { name: "Vinyl Siding", desc: "Low-maintenance, moisture-resistant, and available in dozens of colors. Options include vinyl shake, faux wood, and insulated vinyl." },
  { name: "Fiber Cement Siding", desc: "Superior durability and weather resistance. Resists rot, pests, and fire while maintaining a realistic wood appearance." },
  { name: "Wood Siding", desc: "Classic curb appeal with modern protective treatments. Available in clapboard, shiplap, and board-and-batten profiles." },
  { name: "Stucco Siding", desc: "Traditional texture with excellent durability. Popular in Austin and Central Texas for its heat resistance." },
  { name: "Stone Veneer Siding", desc: "The appearance of natural stone at a fraction of the cost and weight. Adds dramatic curb appeal to any home." },
  { name: "Composite Siding", desc: "Combines the look of wood with the durability of engineered materials. Resists impact, moisture, and UV fading." },
];

const sidingFaqs = [
  {
    q: "What siding materials do you install?",
    a: "Austin Window Pros installs vinyl siding, fiber cement siding, wood siding, stucco siding, stone veneer siding, aluminum siding, and composite siding. We can compare options side by side so you can choose the right material for your home's sun exposure, budget, and long-term plans.",
  },
  {
    q: "How long does siding last in the Texas climate?",
    a: "Quality vinyl siding typically lasts 20 to 40 years with minimal maintenance. Fiber cement siding can last 50 years or more with periodic repainting. Austin's intense UV load and summer heat accelerate color fading on vinyl, so south and west-facing walls tend to show age first.",
  },
  {
    q: "What is the difference between vinyl and fiber cement siding?",
    a: "Vinyl siding costs less, requires no painting, and is virtually maintenance free. Fiber cement siding costs more but is more dimensionally stable in Texas heat, can be repainted, and holds up better over the long term on south and west-facing exposures. Both materials resist moisture and pests better than wood.",
  },
  {
    q: "How long does siding installation take?",
    a: "A typical siding project takes two to five days depending on the size of the home and the material selected. Fiber cement takes slightly longer to install than vinyl due to handling and cutting requirements. David Adams will give you an accurate timeline when he quotes your project.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://austinwindowpros.com/" },
    { "@type": "ListItem", position: 2, name: "Siding Installation", item: "https://austinwindowpros.com/services/siding/" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: sidingFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function SidingPage() {
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
        title="Siding Installation in Austin, TX"
        subtitle="Transform your home's exterior with durable, beautiful siding. Vinyl, fiber cement, wood, stucco, and more, professionally installed by Austin's local experts."
        breadcrumb="Siding"
        image="/images/gallery/project-14.jpg"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-6" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>
                Siding That Actually Holds Up in Texas
              </h2>
              <p className="mb-4 leading-relaxed" style={{ color: "#374151" }}>
                Most vinyl siding fails first on south and west walls. Austin summers push surface temperatures past 150 degrees on exposed panels, and 15 years of that UV load breaks down the color and makes the material brittle enough to crack on impact. Fiber cement holds up better in that heat. Insulated vinyl is a step up from standard vinyl. Which material makes sense depends on your home&apos;s sun exposure, your budget, and how long you plan to stay.
              </p>
              <p className="leading-relaxed" style={{ color: "#374151" }}>
                Austin Window Pros installs vinyl, fiber cement, wood, stucco, stone veneer, and composite siding. David Adams can look at your exterior, tell you honestly what is wearing and what is not, and put together pricing across two or three material options so you have something real to compare. Call (512) 422-1907 for a free walkthrough.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/images/gallery/project-19.jpg"
                alt="Siding installation project in Austin Texas"
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
            Siding Materials We Install
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sidingTypes.map((s) => (
              <div key={s.name} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-base mb-2" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>{s.name}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{s.desc}</p>
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
            {sidingFaqs.map((faq) => (
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
