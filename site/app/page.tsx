import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Austin Window Pros | Window & Door Replacement in Austin, TX",
  description:
    "Austin Window Pros is a locally owned window and door replacement company serving Austin, TX since 1992. Custom measured windows and doors, Energy Star products, free quotes, and financing available.",
  alternates: {
    canonical: "https://austinwindowpros.com/",
  },
  openGraph: {
    title: "Austin Window Pros | Window & Door Replacement in Austin, TX",
    description:
      "Locally owned window and door replacement in Austin, TX since 1992. Custom measured windows and doors, Energy Star products, free quotes, and financing available.",
    url: "https://austinwindowpros.com/",
    type: "website",
  },
};

const stats = [
  {
    value: "40+",
    label: "Years of Experience",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" strokeWidth={1.5} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 7v5l3 3" />
      </svg>
    ),
  },
  {
    value: "4.9★",
    label: "Google Rating",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
      </svg>
    ),
  },
  {
    value: "1992",
    label: "Year Founded",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="4" width="18" height="17" rx="2" strokeWidth={1.5} />
        <path strokeLinecap="round" strokeWidth={1.5} d="M3 9h18M8 2v4M16 2v4" />
      </svg>
    ),
  },
  {
    value: "1,000s",
    label: "Installations Completed",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
];

const services = [
  {
    title: "Window Replacement",
    description:
      "Custom measured to your exact specifications. Energy-efficient double-pane glass in vinyl, wood, aluminum clad, and fiberglass composite.",
    href: "/services/window-replacement/",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="3" width="8" height="8" rx="1" strokeWidth={1.5} />
        <rect x="13" y="3" width="8" height="8" rx="1" strokeWidth={1.5} />
        <rect x="3" y="13" width="8" height="8" rx="1" strokeWidth={1.5} />
        <rect x="13" y="13" width="8" height="8" rx="1" strokeWidth={1.5} />
      </svg>
    ),
  },
  {
    title: "Door Replacement",
    description:
      "Entry doors, sliding patio doors, and French doors in fiberglass, metal, and stainable wood. Energy Star Qualified with Low-E glass.",
    href: "/services/door-replacement/",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16" />
        <circle cx="15" cy="12" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Siding Installation",
    description:
      "Vinyl, fiber cement, wood, stucco, stone veneer, and composite siding. Low-maintenance options built to handle the Texas climate.",
    href: "/services/siding/",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Outdoor Enclosures",
    description:
      "Covered patios, pergolas, screened porches, and sunrooms to expand your living space and escape the Texas heat in style.",
    href: "/services/outdoor-enclosures/",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline strokeWidth={1.5} points="9,22 9,12 15,12 15,22" />
      </svg>
    ),
  },
];

const steps = [
  { step: "01", title: "Free Consultation", desc: "Contact us for a free quote and we assess your home's window and door needs in person." },
  { step: "02", title: "Custom Measurement", desc: "Every window and door is custom measured in your home to ensure a precise fit and airtight seal." },
  { step: "03", title: "Product Selection", desc: "We help you compare options across styles, materials, and price points so you can make an informed decision." },
  { step: "04", title: "Professional Installation", desc: "Our skilled team completes installation cleanly and efficiently, typically in a single day." },
  { step: "05", title: "Quality Inspection", desc: "We conduct thorough quality control before leaving to ensure everything performs as expected." },
];

const testimonials = [
  {
    name: "Frank K.",
    location: "Austin, Texas",
    quote:
      "Dave replaced our drafty old windows for us recently and did an excellent job! He helped us pick out the right windows for a great price and we couldn't be happier with the work he has done. Thank You Window Pros!",
  },
  {
    name: "Brian G.",
    location: "Round Rock, Texas",
    quote:
      "Window Pros recently replaced all of our windows and our sliding back door in our Northwest Austin house. The service was professional and reliable, and we would easily recommend Window Pros in the future.",
  },
  {
    name: "Verified Customer",
    location: "Austin, Texas",
    quote:
      "From the first meeting, Dave demonstrated expertise and experience in selecting the right products. The crew showed up early, stayed late to complete the work in one day, and left nothing to clean up.",
  },
];

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Austin Window Pros",
  url: "https://austinwindowpros.com",
  description:
    "Austin Window Pros is a locally owned window and door replacement company serving Austin, TX and surrounding Central Texas communities since 1992.",
};

const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does window replacement cost in Austin, TX?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Window replacement cost in Austin depends on the number of windows, frame material, and style. A quality vinyl replacement window typically runs between $300 and $600 installed. Contact us for a free, no-pressure quote specific to your home.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer financing for window replacement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Austin Window Pros offers financing options with fast, one-click approvals to make your window or door replacement affordable. Ask us about current financing offers when you request your free quote.",
      },
    },
    {
      "@type": "Question",
      name: "What areas do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve Austin, TX and surrounding Central Texas communities including Round Rock, Cedar Park, Pflugerville, Leander, Georgetown, San Marcos, Buda, Kyle, Lakeway, and Dripping Springs.",
      },
    },
    {
      "@type": "Question",
      name: "How long does window installation take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most residential window replacement projects are completed in a single day. Our crew arrives on time, completes the installation efficiently, and leaves the job site clean before they go.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get a free quote?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call us at (512) 422-1907 or use our online contact form to schedule a free in-home consultation. David Adams personally handles every consultation with no pressure and no obligation.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />
      {/* Hero */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden" style={{ backgroundColor: "#1a3a5c" }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/gallery/project-13.jpg"
            alt="Window installation project in Austin TX"
            fill
            className="object-cover opacity-25"
            priority
            quality={45}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#93c5fd" }}>
              Austin, TX &bull; Since 1992
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6" style={{ fontFamily: "var(--font-overpass)" }}>
              Window &amp; Door Replacement Done Right, the First Time
            </h1>
            <p className="text-lg sm:text-xl opacity-90 mb-8 leading-relaxed">
              David Adams started Austin Window Pros in 1992 and still shows up personally for every project. Custom measured windows and doors. Free quotes. No pressure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg text-base font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#3b82f6" }}
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:5124221907"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg text-base font-semibold border-2 border-white text-white hover:bg-white hover:text-[#1a3a5c] transition-colors"
              >
                Call (512) 422-1907
              </a>
            </div>
            <div className="mt-8 pt-6 border-t border-white/20 flex flex-nowrap gap-x-6 gap-y-3">
              {[
                "4.9\u2605 Google Rating",
                "40+ Years Experience",
                "Free Consultations",
                "Financing Available",
              ].map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.85)" }}>
                  <svg className="w-4 h-4 flex-shrink-0" style={{ color: "#93c5fd" }} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: "#f0f7ff" }} className="border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y-0 lg:divide-x lg:divide-blue-200 gap-y-8 lg:gap-y-0 text-center">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-2 lg:px-6">
                <div className="flex items-center justify-center w-11 h-11 rounded-full" style={{ backgroundColor: "#dbeafe", color: "#3b82f6" }}>
                  {s.icon}
                </div>
                <div className="text-3xl font-extrabold" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>
                  {s.value}
                </div>
                <div className="text-sm" style={{ color: "#6b7280" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>
              Our Services
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
              Windows, doors, siding, and outdoor enclosures. Every project custom measured and professionally installed, typically in a single day.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
              >
                <div className="mb-4 w-16 h-16 rounded-2xl flex items-center justify-center" style={{ backgroundColor: "#eff6ff", color: "#3b82f6" }}>{svc.icon}</div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>
                  {svc.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{svc.description}</p>
                <span className="inline-block mt-4 text-sm font-semibold" style={{ color: "#3b82f6" }}>
                  Learn More &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>
              Recent Projects
            </h2>
            <p className="text-lg" style={{ color: "#6b7280" }}>
              Over 170 real project photos from Austin homes. This is what the work actually looks like.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <div key={n} className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={`/images/gallery/project-${String(n).padStart(2, "0")}.jpg`}
                  alt={`Austin Window Pros project ${n}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/gallery/"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg text-sm font-semibold border-2 transition-colors hover:text-white"
              style={{ borderColor: "#1a3a5c", color: "#1a3a5c" }}
              onMouseEnter={undefined}
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20" style={{ backgroundColor: "#1a3a5c" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4" style={{ fontFamily: "var(--font-overpass)" }}>
              How It Works
            </h2>
            <p className="text-lg opacity-75 text-white">
              Five steps from first call to finished install. Most projects are done in a single day.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:items-start gap-6 lg:gap-0">
            {steps.map((s, i) => (
              <div key={s.step} className="relative text-center lg:flex-1">
                {i < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute h-px top-6 left-1/2 w-full"
                    style={{ backgroundColor: "rgba(59,130,246,0.35)" }}
                  />
                )}
                <div
                  className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4"
                  style={{ backgroundColor: "#3b82f6", color: "white" }}
                >
                  {s.step}
                </div>
                <h3 className="font-bold text-white mb-2" style={{ fontFamily: "var(--font-overpass)" }}>
                  {s.title}
                </h3>
                <p className="text-sm opacity-75 text-white leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>
              What Our Customers Say
            </h2>
            <div className="flex items-center justify-center gap-2">
              <span className="text-2xl font-bold" style={{ color: "#3b82f6" }}>4.9</span>
              <div className="flex" style={{ color: "#f59e0b" }}>
                {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
              </div>
              <span style={{ color: "#6b7280" }} className="text-sm">37 Google Reviews</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 relative overflow-hidden">
                <span
                  className="absolute -top-4 left-3 text-9xl font-serif leading-none pointer-events-none select-none"
                  style={{ color: "#3b82f6", opacity: 0.07 }}
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
                <div className="relative">
                  <p className="font-semibold text-sm" style={{ color: "#1a3a5c" }}>{t.name}</p>
                  <p className="text-xs" style={{ color: "#6b7280" }}>{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>
            Ready to Transform Your Home?
          </h2>
          <p className="text-lg mb-8" style={{ color: "#6b7280" }}>
            David Adams has been doing this since 1992 and will come to your home, assess your windows and doors, and give you a straight quote. No pressure, no obligation. Financing options available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg text-base font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#3b82f6" }}
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:5124221907"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg text-base font-semibold border-2 hover:bg-[#1a3a5c] hover:text-white transition-colors"
              style={{ borderColor: "#1a3a5c", color: "#1a3a5c" }}
            >
              Call (512) 422-1907
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
