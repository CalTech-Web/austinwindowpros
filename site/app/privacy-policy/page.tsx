import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Austin Window Pros.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="min-h-[400px] flex items-center" style={{ backgroundColor: "#1a3a5c" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <nav className="text-sm mb-4 opacity-70">
            <Link href="/" className="hover:opacity-100">Home</Link>
            <span className="mx-2">/</span>
            <span>Privacy Policy</span>
          </nav>
          <h1 className="text-3xl font-extrabold" style={{ fontFamily: "var(--font-overpass)" }}>
            Privacy Policy
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-sm" style={{ color: "#374151" }}>
          <p className="text-sm mb-6" style={{ color: "#6b7280" }}>Last updated: March 2026</p>

          <h2 className="text-lg font-bold mb-3" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>Information We Collect</h2>
          <p className="mb-4 leading-relaxed">
            When you contact Austin Window Pros through our website contact form, we collect your name, email address, phone number, and the message you submit. We use this information solely to respond to your inquiry and provide you with a quote or consultation.
          </p>

          <h2 className="text-lg font-bold mb-3" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>How We Use Your Information</h2>
          <p className="mb-4 leading-relaxed">
            We use the information you provide to contact you about your request, provide quotes, schedule consultations, and answer your questions. We do not sell, trade, or share your personal information with third parties for marketing purposes.
          </p>

          <h2 className="text-lg font-bold mb-3" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>Cookies and Analytics</h2>
          <p className="mb-4 leading-relaxed">
            Our website may use cookies and analytics tools to understand how visitors use our site. This information is aggregated and anonymous and is used only to improve our website experience.
          </p>

          <h2 className="text-lg font-bold mb-3" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>Contact</h2>
          <p className="leading-relaxed">
            If you have questions about this privacy policy, contact us at{" "}
            <a href="mailto:windowprosaustin@gmail.com" style={{ color: "#3b82f6" }}>
              windowprosaustin@gmail.com
            </a>{" "}
            or call{" "}
            <a href="tel:5124221907" style={{ color: "#3b82f6" }}>
              (512) 422-1907
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
