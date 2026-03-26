import type { Metadata } from "next";
import Image from "next/image";
import ServiceHero from "@/components/ServiceHero";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Outdoor Enclosures Austin TX",
  description:
    "Covered patios, pergolas, screened porches, and sunrooms in Austin, TX. Austin Window Pros has been building outdoor living spaces since 1992.",
};

const enclosureTypes = [
  {
    name: "Covered Patios",
    desc: "Solid roof patio covers protect your family and outdoor furniture from Austin rain and intense summer sun. Choose from insulated panels, wood, and aluminum options.",
  },
  {
    name: "Pergolas & Shade Structures",
    desc: "Open-beam pergolas and louvered shade structures provide stylish relief from the Texas heat whether you are poolside or relaxing on the patio.",
  },
  {
    name: "Screened Porches",
    desc: "Enjoy the outdoors without the bugs. Our screened porch enclosures use durable frames and fine mesh screening that holds up to the Texas climate.",
  },
  {
    name: "Sunrooms",
    desc: "Three-season or year-round sunrooms bring the outdoors inside. All-glass walls and roofs maximize natural light while keeping weather, bugs, and pollen out.",
  },
];

export default function OutdoorEnclosuresPage() {
  return (
    <>
      <ServiceHero
        title="Outdoor Enclosures in Austin, TX"
        subtitle="Covered patios, pergolas, screened porches, and sunrooms to expand your living space and make the most of Austin's beautiful weather."
        breadcrumb="Outdoor Enclosures"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-6" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>
                Extend Your Living Space Outdoors
              </h2>
              <p className="mb-4 leading-relaxed" style={{ color: "#374151" }}>
                Austin has beautiful weather most of the year, but the summer heat and unpredictable rain can limit how much time you spend outside. A covered patio, screened porch, or sunroom changes that.
              </p>
              <p className="leading-relaxed" style={{ color: "#374151" }}>
                Austin Window Pros has been building outdoor living structures in Central Texas since 1992. We work with trusted suppliers including Structall and Four Seasons Sunrooms to deliver lasting quality at competitive prices.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/images/gallery/project-20.jpg"
                alt="Outdoor enclosure project in Austin Texas"
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
            Outdoor Enclosure Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {enclosureTypes.map((e) => (
              <div key={e.name} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-lg mb-3" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>{e.name}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
