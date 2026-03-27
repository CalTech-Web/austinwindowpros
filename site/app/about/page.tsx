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
  {
    text: "Locally owned and operated in Austin, TX with deep community roots since 1992",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    text: "David Adams personally involved from first contact through project completion",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    text: "Over 40 years of hands-on experience in the home improvement industry",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" strokeWidth={1.5} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 7v5l3 3" />
      </svg>
    ),
  },
  {
    text: "Custom measured windows and doors for a perfect fit every time",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
      </svg>
    ),
  },
  {
    text: "Energy Star Qualified products with Low-E glass",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    text: "4.9 stars on Google with 37 verified reviews",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
      </svg>
    ),
  },
  {
    text: "Financing options with fast one-click approvals",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="2" y="5" width="20" height="14" rx="2" strokeWidth={1.5} />
        <path strokeLinecap="round" strokeWidth={1.5} d="M2 10h20" />
      </svg>
    ),
  },
  {
    text: "Free consultation and quote with no pressure",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    name: "Frank K.",
    location: "Austin, Texas",
    initials: "FK",
    quote: "Dave replaced our drafty old windows for us recently and did an excellent job! He helped us pick out the right windows for a great price and we couldn't be happier with the work he has done.",
  },
  {
    name: "Brian G.",
    location: "Round Rock, Texas",
    initials: "BG",
    quote: "Window Pros recently replaced all of our windows and our sliding back door in our Northwest Austin house. The service was professional and reliable, and we would easily recommend Window Pros in the future.",
  },
  {
    name: "Verified Customer",
    location: "Austin, Texas",
    initials: null,
    quote: "Dave and his team did work on-time and kept the installation site clean. My windows still look and operate as well after 10 years as they did the day they were installed.",
  },
  {
    name: "Verified Customer",
    location: "Austin, Texas",
    initials: null,
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
      <section className="relative min-h-[400px] flex items-center overflow-hidden" style={{ backgroundColor: "#1a3a5c" }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/gallery/winpro-image-101.jpg"
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
          <p className="text-lg opacity-90 max-w-2xl mb-8">
            Locally owned and operated in Austin, TX since 1992. Over 40 years of hands-on experience. Thousands of happy homeowners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center px-7 py-3 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#3b82f6" }}
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:5124221907"
              className="inline-flex items-center justify-center px-7 py-3 rounded-lg text-sm font-semibold border border-white/50 hover:border-white transition-colors"
            >
              (512) 422-1907
            </a>
          </div>
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
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-72 sm:w-80 lg:w-96">
                <Image
                  src="/images/david-adams.webp"
                  alt="David Adams, Founder and Owner of Austin Window Pros"
                  width={600}
                  height={720}
                  className="rounded-xl"
                />
              </div>
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
              <div key={i} className="flex items-start gap-4 bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#eff6ff", color: "#3b82f6" }}>
                  {d.icon}
                </div>
                <span className="text-sm leading-relaxed pt-2.5" style={{ color: "#374151" }}>{d.text}</span>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.name + t.location + t.quote.slice(0, 20)} className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100 relative overflow-hidden hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <span
                  className="absolute -top-4 left-3 text-9xl font-serif leading-none pointer-events-none select-none"
                  style={{ color: "#3b82f6", opacity: 0.1 }}
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <div className="flex mb-3 relative" style={{ color: "#f59e0b" }}>
                  {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
                </div>
                <p className="text-sm leading-relaxed mb-4 italic relative" style={{ color: "#374151" }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="relative flex items-center gap-3">
                  {t.initials ? (
                    <div className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: "#1a3a5c" }}>
                      {t.initials}
                    </div>
                  ) : (
                    <div className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: "#3b82f6" }}>
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-sm" style={{ color: "#1a3a5c" }}>{t.name}</p>
                    <p className="text-xs" style={{ color: "#6b7280" }}>{t.location}</p>
                  </div>
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
