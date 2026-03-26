import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "40+", label: "Years of Experience" },
  { value: "4.9★", label: "Google Rating" },
  { value: "1992", label: "Year Founded" },
  { value: "1,000s", label: "Installations Completed" },
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

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden" style={{ backgroundColor: "#1a3a5c" }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/gallery/project-13.jpg"
            alt="Window installation project in Austin TX"
            fill
            className="object-cover opacity-25"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#93c5fd" }}>
              Austin, TX &bull; Since 1992
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6" style={{ fontFamily: "var(--font-overpass)" }}>
              Transform Your Home with Expert Window &amp; Door Replacement
            </h1>
            <p className="text-lg sm:text-xl opacity-90 mb-8 leading-relaxed">
              Locally owned and operated since 1992. Over 40 years of experience. Thousands of happy homeowners across Austin and Central Texas.
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
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-extrabold" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>
                  {s.value}
                </div>
                <div className="text-sm mt-1" style={{ color: "#6b7280" }}>{s.label}</div>
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
              From windows and doors to siding and outdoor living spaces, we handle every aspect of your home exterior.
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
              Real window and door installations across Austin and Central Texas.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <div key={n} className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={`/images/gallery/project-${String(n).padStart(2, "0")}.jpg`}
                  alt={`Austin Window Pros project ${n}`}
                  fill
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
              Our simple 5-step process from first call to final inspection.
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
              <div key={t.name} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex mb-3" style={{ color: "#f59e0b" }}>
                  {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
                </div>
                <p className="text-sm leading-relaxed mb-4 italic" style={{ color: "#374151" }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
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
            Get a free, no-pressure consultation and quote from Austin&rsquo;s trusted window and door replacement experts. Financing options available.
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
