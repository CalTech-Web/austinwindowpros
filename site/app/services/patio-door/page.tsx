import type { Metadata } from "next";
import Image from "next/image";
import ServiceHero from "@/components/ServiceHero";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Patio Door Replacement Austin TX",
  description:
    "Sliding and French patio door replacement in Austin, TX. Energy Star glass, custom sizing, and professional installation by Austin Window Pros.",
};

export default function PatioDoorPage() {
  return (
    <>
      <ServiceHero
        title="Patio Door Replacement Austin, TX"
        subtitle="Sliding and French patio doors with Energy Star glass, smooth operation, and custom sizing to fit your home perfectly."
        breadcrumb="Patio Doors"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-6" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>
                Open Up Your Living Space
              </h2>
              <p className="mb-4 leading-relaxed" style={{ color: "#374151" }}>
                A quality patio door creates a seamless connection between your indoor living space and your outdoor entertaining area. Austin Window Pros installs sliding and French patio doors with smooth, silent operation and superior energy performance.
              </p>
              <ul className="space-y-3">
                {[
                  "Energy Star Qualified glass with Low-E coating",
                  "Custom sizing for openings of any width",
                  "Multi-point locking systems for security",
                  "Sliding doors with soft-close hardware",
                  "French doors in both inswing and outswing configurations",
                  "Modern fiberglass and composite jamb materials",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs" style={{ backgroundColor: "#3b82f6" }}>
                      ✓
                    </span>
                    <span style={{ color: "#374151" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/images/gallery/project-15.jpg"
                alt="Patio door installation in Austin Texas"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-4" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>
                Sliding Patio Doors
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#6b7280" }}>
                Our sliding patio doors glide on precision stainless steel rollers for decades of smooth, reliable operation. Available with multiple glass panel configurations and Energy Star glass.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                Custom sizing ensures a perfect fit even in non-standard openings, and the multi-point locking systems provide peace of mind.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-4" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>
                French Patio Doors
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#6b7280" }}>
                French doors add architectural elegance to any home. We offer both inswing and outswing configurations with modern fiberglass and composite jambs for superior weather resistance.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                Glass insert options range from clear to decorative, with full Low-E and Energy Star qualification available throughout.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
