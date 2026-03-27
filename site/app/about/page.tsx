import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "About Austin Window Pros",
  description:
    "Learn about Austin Window Pros, a locally owned window and door replacement company founded by David Adams in 1992 with over 40 years of industry experience.",
  alternates: {
    canonical: "https://austinwindowpros.com/about/",
  },
  openGraph: {
    title: "About Austin Window Pros | Locally Owned Since 1992",
    description:
      "Learn about Austin Window Pros, a locally owned window and door replacement company founded by David Adams in 1992 with over 40 years of industry experience.",
    url: "https://austinwindowpros.com/about/",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://austinwindowpros.com/" },
    { "@type": "ListItem", position: 2, name: "About Us", item: "https://austinwindowpros.com/about/" },
  ],
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "David Adams",
  jobTitle: "Founder & Owner",
  description: "David Adams founded Austin Window Pros in 1992 and has over 40 years of experience in the home improvement industry. He personally handles every consultation and is involved in each project from first contact through installation.",
  worksFor: {
    "@type": "LocalBusiness",
    name: "Austin Window Pros",
    url: "https://austinwindowpros.com",
  },
  url: "https://austinwindowpros.com/about/",
};

const differentiators = [
  "Locally owned and operated in Austin, TX with deep community roots since 1992",
  "David Adams personally involved from first contact through project completion",
  "Over 40 years of hands-on experience in the home improvement industry",
  "Custom measured windows and doors for a perfect fit every time",
  "Energy Star Qualified products with Low-E glass",
  "4.9 stars on Google with 37 verified reviews",
  "Financing options with fast one-click approvals",
  "Free consultation and quote with no pressure",
];

const testimonials = [
  {
    name: "Frank K.",
    location: "Austin, Texas",
    quote: "Dave replaced our drafty old windows for us recently and did an excellent job! He helped us pick out the right windows for a great price and we couldn't be happier with the work he has done.",
  },
  {
    name: "Brian G.",
    location: "Round Rock, Texas",
    quote: "Window Pros recently replaced all of our windows and our sliding back door in our Northwest Austin house. The service was professional and reliable, and we would easily recommend Window Pros in the future.",
  },
  {
    name: "Verified Customer",
    location: "Austin, Texas",
    quote: "Dave and his team did work on-time and kept the installation site clean. My windows still look and operate as well after 10 years as they did the day they were installed.",
  },
  {
    name: "Verified Customer",
    location: "Austin, Texas",
    quote: "Dave responded quickly to my inquiry, had excellent communication throughout the entire process, was friendly and professional, and made everything easy. The warranty offered gave me peace of mind.",
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      {/* Hero */}
      <section className="relative py-14 overflow-hidden" style={{ backgroundColor: "#1a3a5c" }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/gallery/project-25.jpg"
            alt=""
            fill
            className="object-cover opacity-20"
            priority
            quality={40}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <nav className="text-sm mb-4 opacity-70">
            <Link href="/" className="hover:opacity-100">Home</Link>
            <span className="mx-2">/</span>
            <span>About Us</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3" style={{ fontFamily: "var(--font-overpass)" }}>
            About Austin Window Pros
          </h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Locally owned and operated in Austin, TX since 1992. Over 40 years of hands-on experience. Thousands of happy homeowners.
          </p>
        </div>
      </section>

      {/* Founder story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-6" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>
                Our Story
              </h2>
              <p className="mb-4 leading-relaxed" style={{ color: "#374151" }}>
                David Adams started in the home improvement business in 1979, doing full remodels, decks, patio covers, and pretty much anything a house needed. By 1992, he had found his focus. Window and door replacement was the work that combined precision craftsmanship with real, visible results for homeowners. Austin Window Pros has been at it ever since.
              </p>
              <p className="mb-4 leading-relaxed" style={{ color: "#374151" }}>
                David is not a salesman who hands your project off to a crew after the sale. He shows up for the consultation, walks through the measurement, and is accountable for the final result. That is not a marketing claim. It is how the company has operated for over 30 years, and it is why customers leave reviews saying the windows installed a decade ago still perform the same way they did on day one.
              </p>
              <blockquote className="border-l-4 pl-6 py-2 italic" style={{ borderColor: "#3b82f6", color: "#374151" }}>
                &ldquo;With over 40 years in the home improvement business, we offer personal service to every customer from beginning to end. Our highest priority is customer service, which includes offering high quality products and professional installation to each consumer.&rdquo;
                <cite className="block mt-2 not-italic text-sm font-semibold" style={{ color: "#1a3a5c" }}>
                  David Adams, Founder &amp; Owner
                </cite>
              </blockquote>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/images/gallery/project-25.jpg"
                alt="Austin Window Pros team at work"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-10 text-center" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>
            Why Choose Austin Window Pros
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {differentiators.map((d, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-100">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: "#3b82f6" }}>
                  ✓
                </span>
                <span className="text-sm" style={{ color: "#374151" }}>{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-10 text-center" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>
            What Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name + t.location + t.quote.slice(0, 20)} className="bg-gray-50 rounded-xl p-6">
                <div className="flex mb-3" style={{ color: "#f59e0b" }}>
                  {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
                </div>
                <p className="text-sm leading-relaxed mb-4 italic" style={{ color: "#374151" }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="font-semibold text-sm" style={{ color: "#1a3a5c" }}>{t.name}</p>
                <p className="text-xs" style={{ color: "#6b7280" }}>{t.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
