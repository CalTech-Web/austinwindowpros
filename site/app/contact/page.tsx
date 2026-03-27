import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Contact Us | Get a Free Quote",
  description:
    "Contact Austin Window Pros for a free window or door replacement quote in Austin, TX. Call (512) 422-1907 or fill out our online form.",
  alternates: {
    canonical: "https://austinwindowpros.com/contact/",
  },
  openGraph: {
    title: "Contact Austin Window Pros | Get a Free Quote",
    description:
      "Contact Austin Window Pros for a free window or door replacement quote in Austin, TX. Call (512) 422-1907 or fill out our online form.",
    url: "https://austinwindowpros.com/contact/",
    type: "website",
  },
};

const faqs = [
  {
    q: "How long does window installation take?",
    a: "Most residential projects are completed in a single day. Our crew arrives on time, completes the installation efficiently, and leaves the job site clean before they go.",
  },
  {
    q: "Do you offer financing?",
    a: "Yes. We offer financing options with fast, one-click approvals to make your window or door replacement affordable. Ask us about current financing offers when you request your free quote.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve Austin and surrounding Central Texas communities including Round Rock, Cedar Park, Pflugerville, Leander, Georgetown, San Marcos, Buda, Kyle, Lakeway, and Dripping Springs.",
  },
  {
    q: "How much does window replacement cost?",
    a: "Cost varies depending on the number of windows, style, material, and custom sizing. We offer competitive pricing and financing options. Contact us for a free, no-pressure quote specific to your home.",
  },
  {
    q: "What window brands do you carry?",
    a: "We work with top manufacturers including Alside and Norandex for windows, and Therma-Tru, Neumadoors, and Masonite for doors. We can source most major brands on request.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero */}
      <section className="relative min-h-[400px] flex items-center overflow-hidden" style={{ backgroundColor: "#1a3a5c" }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/gallery/20220309_140536.jpg"
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
            <span>Contact Us</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3" style={{ fontFamily: "var(--font-overpass)" }}>
            Get a Free Quote
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mb-8">
            Contact Austin Window Pros today. No pressure, no obligation. We will assess your home and provide an honest, detailed quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:5124221907"
              className="inline-flex items-center justify-center px-7 py-3 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#3b82f6" }}
            >
              Call (512) 422-1907
            </a>
          </div>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold mb-6" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-base mb-5" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>
                  Contact Information
                </h3>
                <div className="space-y-4 text-sm" style={{ color: "#374151" }}>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#eff6ff", color: "#3b82f6" }}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-xs uppercase tracking-wide mb-0.5" style={{ color: "#6b7280" }}>Phone</p>
                      <a href="tel:5124221907" className="font-semibold text-base" style={{ color: "#3b82f6" }}>
                        (512) 422-1907
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#eff6ff", color: "#3b82f6" }}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-xs uppercase tracking-wide mb-0.5" style={{ color: "#6b7280" }}>Email</p>
                      <a href="mailto:windowprosaustin@gmail.com" className="hover:underline" style={{ color: "#3b82f6" }}>
                        windowprosaustin@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#eff6ff", color: "#3b82f6" }}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-xs uppercase tracking-wide mb-0.5" style={{ color: "#6b7280" }}>Address</p>
                      <p>13359 N Hwy 183, Suite 406-520</p>
                      <p>Austin, TX 78750</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#eff6ff", color: "#3b82f6" }}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <circle cx="12" cy="12" r="9" strokeWidth={1.5} />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 7v5l3 3" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-xs uppercase tracking-wide mb-0.5" style={{ color: "#6b7280" }}>Hours</p>
                      <p>Mon &ndash; Fri: 7:00am &ndash; 7:00pm</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-base mb-3" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>
                  Service Areas
                </h3>
                <p className="text-sm mb-3" style={{ color: "#6b7280" }}>
                  We serve Austin and surrounding Central Texas communities.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Austin", "Round Rock", "Cedar Park", "Pflugerville", "Leander", "Georgetown", "San Marcos", "Buda", "Kyle", "Lakeway", "Dripping Springs"].map((city, index) => (
                    <span
                      key={city}
                      className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: "#eff6ff", color: "#1a3a5c" }}
                    >
                      <svg
                        className="w-3.5 h-3.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        style={{ animation: "pulse-marker 2s ease-in-out infinite", animationDelay: `${index * 0.15}s`, color: "#3b82f6" }}
                      >
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                      </svg>
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#3b82f6" }}>Got Questions?</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mt-2" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>
              Frequently Asked Questions
            </h2>
          </div>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>
    </>
  );
}
