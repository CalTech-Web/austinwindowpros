import type { Metadata } from "next";
import Image from "next/image";
import ServiceHero from "@/components/ServiceHero";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Siding Installation Austin TX",
  description:
    "Vinyl, fiber cement, wood, and composite siding installation in Austin, TX. Professional installation by Austin Window Pros since 1992.",
};

const sidingTypes = [
  { name: "Vinyl Siding", desc: "Low-maintenance, moisture-resistant, and available in dozens of colors. Options include vinyl shake, faux wood, and insulated vinyl." },
  { name: "Fiber Cement Siding", desc: "Superior durability and weather resistance. Resists rot, pests, and fire while maintaining a realistic wood appearance." },
  { name: "Wood Siding", desc: "Classic curb appeal with modern protective treatments. Available in clapboard, shiplap, and board-and-batten profiles." },
  { name: "Stucco Siding", desc: "Traditional texture with excellent durability. Popular in Austin and Central Texas for its heat resistance." },
  { name: "Stone Veneer Siding", desc: "The appearance of natural stone at a fraction of the cost and weight. Adds dramatic curb appeal to any home." },
  { name: "Composite Siding", desc: "Combines the look of wood with the durability of engineered materials. Resists impact, moisture, and UV fading." },
];

export default function SidingPage() {
  return (
    <>
      <ServiceHero
        title="Siding Installation in Austin, TX"
        subtitle="Transform your home's exterior with durable, beautiful siding. Vinyl, fiber cement, wood, stucco, and more, professionally installed by Austin's local experts."
        breadcrumb="Siding"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-6" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>
                New Siding Changes Everything
              </h2>
              <p className="mb-4 leading-relaxed" style={{ color: "#374151" }}>
                Worn, faded, or damaged siding is more than an eyesore. It is a source of energy loss, moisture intrusion, and declining home value. New siding from Austin Window Pros protects your home and gives it a fresh, updated look that lasts for decades.
              </p>
              <p className="leading-relaxed" style={{ color: "#374151" }}>
                We help you select the right material, color, and profile for your home and budget, then install it cleanly and professionally. Every project is completed with attention to flashing, caulking, and weatherproofing for maximum protection.
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

      <CtaBanner />
    </>
  );
}
