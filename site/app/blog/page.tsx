import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Window and door replacement tips, guides, and news from Austin Window Pros. Learn how to choose the best windows for your Austin, TX home.",
};

const posts = [
  {
    slug: "signs-you-need-new-windows",
    title: "7 Signs It's Time to Replace Your Windows",
    excerpt:
      "Drafts, condensation, and rising energy bills are the most obvious signals. But there are several other warning signs that homeowners in Austin commonly overlook.",
    date: "March 15, 2026",
    image: "/images/gallery/project-02.jpg",
    category: "Window Replacement",
  },
  {
    slug: "siding-replacement-signs-texas",
    title: "Does Your Siding Need Replacing? What Texas Homes Show After 15 Years",
    excerpt:
      "Austin's heat, UV exposure, and occasional hail leave specific patterns on aging siding. Here is what to look for before a cosmetic problem becomes a moisture problem.",
    date: "March 10, 2026",
    image: "/images/gallery/project-19.jpg",
    category: "Siding",
  },
  {
    slug: "entry-door-replacement-austin",
    title: "How to Pick an Entry Door for Your Austin Home",
    excerpt:
      "Fiberglass, steel, or wood. Glass inserts or solid panels. Multi-point locks or standard deadbolts. Here is how to think through the decision before you start shopping.",
    date: "March 3, 2026",
    image: "/images/gallery/project-14.jpg",
    category: "Door Replacement",
  },
  {
    slug: "energy-efficient-windows-austin",
    title: "How Energy-Efficient Windows Lower Your Austin Utility Bills",
    excerpt:
      "Texas summers put enormous strain on home cooling systems. The right double-pane Low-E windows can significantly reduce that load and lower your monthly costs.",
    date: "February 28, 2026",
    image: "/images/gallery/project-06.jpg",
    category: "Energy Efficiency",
  },
  {
    slug: "window-frame-materials-guide",
    title: "Vinyl vs. Fiberglass vs. Wood: Choosing the Right Window Frame",
    excerpt:
      "Each frame material has strengths and trade-offs. Here is what Austin homeowners should consider before selecting their replacement windows.",
    date: "February 10, 2026",
    image: "/images/gallery/project-09.jpg",
    category: "Buying Guide",
  },
  {
    slug: "patio-door-options",
    title: "Sliding vs. French Patio Doors: Which Is Right for Your Home?",
    excerpt:
      "Both door styles have distinct advantages depending on your floor plan, opening size, and design preferences. We break down the key differences.",
    date: "January 22, 2026",
    image: "/images/gallery/project-16.jpg",
    category: "Door Replacement",
  },
  {
    slug: "window-installation-what-to-expect",
    title: "What to Expect on Window Installation Day",
    excerpt:
      "Most residential window projects are completed in a single day. Here is a step-by-step walkthrough so you know exactly what happens from arrival to cleanup.",
    date: "January 5, 2026",
    image: "/images/gallery/project-22.jpg",
    category: "Installation",
  },
  {
    slug: "outdoor-enclosures-austin",
    title: "Beat the Texas Heat with a Covered Patio or Screened Porch",
    excerpt:
      "Austin homeowners are discovering that the right outdoor enclosure can transform a rarely-used back yard into a year-round living space.",
    date: "December 18, 2025",
    image: "/images/gallery/project-24.jpg",
    category: "Outdoor Enclosures",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-14" style={{ backgroundColor: "#1a3a5c" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <nav className="text-sm mb-4 opacity-70">
            <Link href="/" className="hover:opacity-100">Home</Link>
            <span className="mx-2">/</span>
            <span>Blog</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3" style={{ fontFamily: "var(--font-overpass)" }}>
            Window &amp; Door Tips from Austin Pros
          </h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Guides, tips, and news from Austin Window Pros to help you make smart decisions about your home&rsquo;s windows, doors, and siding.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="relative aspect-[16/9] bg-gray-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold px-2 py-1 rounded" style={{ backgroundColor: "#eff6ff", color: "#3b82f6" }}>
                      {post.category}
                    </span>
                    <span className="text-xs" style={{ color: "#6b7280" }}>{post.date}</span>
                  </div>
                  <h2 className="font-bold text-base mb-2 leading-snug" style={{ color: "#1a3a5c", fontFamily: "var(--font-overpass)" }}>
                    {post.title}
                  </h2>
                  <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}/`}
                    className="inline-block mt-4 text-sm font-semibold"
                    style={{ color: "#3b82f6" }}
                  >
                    Read More &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-base mb-4" style={{ color: "#6b7280" }}>
            Have a question about your windows or doors? We are happy to help.
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center justify-center px-7 py-3 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#3b82f6" }}
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
