import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Austin Window Pros.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <section className="min-h-[400px] flex items-center" style={{ backgroundColor: "#1a3a5c" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <nav className="text-sm mb-4 opacity-70">
            <Link href="/" className="hover:opacity-100">Home</Link>
            <span className="mx-2">/</span>
            <span>Terms of Service</span>
          </nav>
          <h1 className="text-3xl font-extrabold" style={{ fontFamily: "var(--font-overpass)" }}>
            Terms of Service
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8" style={{ color: "#374151" }}>
          <p className="text-sm mb-6" style={{ color: "#6b7280" }}>Last updated: March 2026</p>

          <h2 className="text-lg font-bold mb-3" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>Use of This Website</h2>
          <p className="mb-4 leading-relaxed">
            By accessing austinwindowpros.com, you agree to these terms. This website is provided for informational purposes. All content, images, and materials are the property of Window Pros LLC and may not be reproduced without permission.
          </p>

          <h2 className="text-lg font-bold mb-3" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>Accuracy of Information</h2>
          <p className="mb-4 leading-relaxed">
            We make every effort to keep the information on this site current and accurate. However, we make no warranties regarding the completeness, accuracy, or reliability of the content. Pricing, availability, and services are subject to change.
          </p>

          <h2 className="text-lg font-bold mb-3" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>Limitation of Liability</h2>
          <p className="mb-4 leading-relaxed">
            Austin Window Pros and Window Pros LLC are not liable for any damages arising from your use of this website or reliance on information contained herein.
          </p>

          <h2 className="text-lg font-bold mb-3" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>Contact</h2>
          <p className="leading-relaxed">
            Questions about these terms? Contact us at{" "}
            <a href="mailto:windowprosaustin@gmail.com" style={{ color: "#3b82f6" }}>
              windowprosaustin@gmail.com
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
