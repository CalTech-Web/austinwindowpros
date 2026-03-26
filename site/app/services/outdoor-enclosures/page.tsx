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
                More of Your Yard, More of the Year
              </h2>
              <p className="mb-4 leading-relaxed" style={{ color: "#374151" }}>
                June through September, an Austin back yard without shade is genuinely uncomfortable. Direct sun at 3pm in August is not something you work around. It is something you solve. A solid-roof patio cover drops the ambient temperature underneath by 15 to 20 degrees. A screened porch adds bug protection on top of that and stretches the usable season well into October evenings when open patios get cold.
              </p>
              <p className="leading-relaxed" style={{ color: "#374151" }}>
                Austin Window Pros has been building covered patios, pergolas, screened porches, and sunrooms in Central Texas since 1992. We work with Structall for engineered patio panels built to Texas wind loads and Four Seasons Sunrooms for glass-enclosed additions. David Adams will come out, look at your yard and how you use it, and give you a straight quote on what makes sense.
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
