import type { Metadata } from "next";
import Image from "next/image";
import ServiceHero from "@/components/ServiceHero";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Window Replacement Austin TX",
  description:
    "Custom window replacement in Austin, TX. Double-pane, Energy Star windows in vinyl, wood, and fiberglass. Free quotes from Austin Window Pros.",
};

const windowTypes = [
  { name: "Double-Hung Windows", desc: "The most popular style. Both sashes slide up and down for easy cleaning and ventilation." },
  { name: "Casement Windows", desc: "Hinged on one side and crank open outward, providing excellent ventilation and a clean look." },
  { name: "Sliding Windows", desc: "Horizontal sashes that glide smoothly, ideal for wide openings and contemporary homes." },
  { name: "Picture Windows", desc: "Fixed panes that frame outdoor views and flood rooms with natural light." },
  { name: "Awning Windows", desc: "Hinged at the top and open outward, allowing fresh air even during light rain." },
  { name: "Bay & Bow Windows", desc: "Extend outward from the exterior wall to create a dramatic architectural feature and extra interior space." },
];

const materials = [
  { name: "Vinyl", desc: "Low maintenance, moisture-resistant, and highly energy-efficient. Our most popular choice." },
  { name: "Wood", desc: "Classic beauty with natural insulating properties. Ideal for traditional and historic homes." },
  { name: "Aluminum Clad", desc: "Wood interior with aluminum exterior for a durable, weather-resistant finish." },
  { name: "Aluminum Thermal Break", desc: "Commercial-grade durability with a thermal break to reduce heat transfer." },
  { name: "Fiberglass Composite", desc: "The strongest and most dimensionally stable material. Resists warping, swelling, and rotting." },
];

export default function WindowReplacementPage() {
  return (
    <>
      <ServiceHero
        title="Window Replacement in Austin, TX"
        subtitle="Custom measured windows installed by experienced professionals. Energy Star qualified double-pane glass to lower your utility bills year-round."
        breadcrumb="Window Replacement"
      />

      {/* Why replace */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-6" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>
                Why Replace Your Windows?
              </h2>
              <ul className="space-y-4">
                {[
                  "Lower energy bills with double-pane, Low-E glass that stabilizes indoor temperatures",
                  "Block up to 99% of harmful UV rays that fade furniture and flooring",
                  "Reduce outside noise for a quieter, more comfortable home",
                  "Improve curb appeal and increase your home&apos;s resale value",
                  "Eliminate drafts, condensation, and difficult operation from worn-out frames",
                  "Upgrade to modern security features with multi-point locking systems",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: "#3b82f6" }}>
                      ✓
                    </span>
                    <span style={{ color: "#374151" }} dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/images/gallery/project-03.jpg"
                alt="Window replacement project in Austin Texas"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Window types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-10 text-center" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>
            Window Styles We Install
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {windowTypes.map((w) => (
              <div key={w.name} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-base mb-2" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>{w.name}</h3>
                <p className="text-sm" style={{ color: "#6b7280" }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-10 text-center" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>
            Frame Materials
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {materials.map((m) => (
              <div key={m.name} className="bg-gray-50 rounded-xl p-5 text-center">
                <h3 className="font-bold text-sm mb-2" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>{m.name}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-10 text-center" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>
            Recent Window Projects
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[5, 6, 7, 9, 10, 11].map((n) => (
              <div key={n} className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-200">
                <Image
                  src={`/images/gallery/project-${String(n).padStart(2, "0")}.jpg`}
                  alt={`Austin Window Pros window project`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
