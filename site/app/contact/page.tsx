import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

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
      <section className="py-14" style={{ backgroundColor: "#1a3a5c" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <nav className="text-sm mb-4 opacity-70">
            <Link href="/" className="hover:opacity-100">Home</Link>
            <span className="mx-2">/</span>
            <span>Contact Us</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3" style={{ fontFamily: "var(--font-overpass)" }}>
            Get a Free Quote
          </h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Contact Austin Window Pros today. No pressure, no obligation. We will assess your home and provide an honest, detailed quote.
          </p>
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
                <h3 className="font-bold text-base mb-4" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>
                  Contact Information
                </h3>
                <div className="space-y-3 text-sm" style={{ color: "#374151" }}>
                  <div>
                    <p className="font-semibold" style={{ color: "#1a3a5c" }}>Phone</p>
                    <a href="tel:5124221907" className="font-semibold text-base" style={{ color: "#3b82f6" }}>
                      (512) 422-1907
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: "#1a3a5c" }}>Email</p>
                    <a href="mailto:windowprosaustin@gmail.com" className="hover:underline" style={{ color: "#3b82f6" }}>
                      windowprosaustin@gmail.com
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: "#1a3a5c" }}>Address</p>
                    <p>13359 N Hwy 183, Suite 406-520</p>
                    <p>Austin, TX 78750</p>
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: "#1a3a5c" }}>Hours</p>
                    <p>Mon &ndash; Fri: 7:00am &ndash; 7:00pm</p>
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
                  {["Austin", "Round Rock", "Cedar Park", "Pflugerville", "Leander", "Georgetown", "San Marcos", "Buda", "Kyle", "Lakeway", "Dripping Springs"].map((city) => (
                    <span
                      key={city}
                      className="text-xs px-2 py-1 rounded"
                      style={{ backgroundColor: "#eff6ff", color: "#1a3a5c" }}
                    >
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
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-10 text-center" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
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
    </>
  );
}
