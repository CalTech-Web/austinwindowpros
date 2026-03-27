import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Window & Door Tips | Austin Blog",
  description:
    "Window and door replacement tips, guides, and news from Austin Window Pros. Learn how to choose the best windows for your Austin, TX home.",
  alternates: {
    canonical: "https://austinwindowpros.com/blog/",
  },
  openGraph: {
    title: "Window & Door Tips | Austin Window Pros Blog",
    description:
      "Window and door replacement tips, guides, and news from Austin Window Pros. Learn how to choose the best windows for your Austin, TX home.",
    url: "https://austinwindowpros.com/blog/",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://austinwindowpros.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://austinwindowpros.com/blog/" },
  ],
};

const posts = [
  {
    slug: "casement-vs-double-hung-windows",
    title: "Casement vs. Double-Hung Windows: Which Style Fits Your Austin Home",
    excerpt:
      "Double-hung is the default. Casement windows solve specific problems double-hung cannot. Here is how to decide which style belongs in each room before you order.",
    date: "March 27, 2026",
    image: "/images/gallery/project-08.jpg",
    category: "Buying Guide",
  },
  {
    slug: "replace-one-window-or-all",
    title: "Should You Replace One Window or All of Them at Once?",
    excerpt:
      "One failed window raises the question about the rest. The answer depends on age, budget, and what a close look at the remaining windows actually shows.",
    date: "March 27, 2026",
    image: "/images/gallery/project-11.jpg",
    category: "Buying Guide",
  },
  {
    slug: "how-to-choose-window-contractor-austin",
    title: "How to Choose a Window Contractor in Austin",
    excerpt:
      "The lowest quote is not always the best value. Here is what to ask before signing, from insurance and crew accountability to warranty terms and measurement process.",
    date: "March 26, 2026",
    image: "/images/gallery/project-01.jpg",
    category: "Buying Guide",
  },
  {
    slug: "covered-patio-vs-screened-porch-austin",
    title: "Covered Patio or Screened Porch: What Actually Gets Used in Austin",
    excerpt:
      "Shade solves half the problem. Bug control solves most of it. Here is how to choose between a covered patio and a screened porch for an Austin back yard.",
    date: "March 26, 2026",
    image: "/images/gallery/project-20.jpg",
    category: "Outdoor Enclosures",
  },
  {
    slug: "window-replacement-cost-austin",
    title: "How Much Does Window Replacement Cost in Austin?",
    excerpt:
      "The honest answer depends on window count, frame material, and style. Here is how Austin homeowners typically think through the numbers before requesting a quote.",
    date: "March 25, 2026",
    image: "/images/gallery/project-07.jpg",
    category: "Buying Guide",
  },
  {
    slug: "vinyl-vs-fiber-cement-siding",
    title: "Vinyl vs. Fiber Cement Siding for Austin Homes",
    excerpt:
      "Both materials dominate the Central Texas market. The right choice depends on your budget, maintenance tolerance, and how long you plan to stay in the house.",
    date: "March 20, 2026",
    image: "/images/gallery/project-21.jpg",
    category: "Siding",
  },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero */}
      <section className="relative py-14 overflow-hidden" style={{ backgroundColor: "#1a3a5c" }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/gallery/project-06.jpg"
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
              <article key={post.slug} className="bg-white rounded-xl overflow-hidden border border-gray-100 border-l-4 border-l-[#3b82f6] shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 group">
                <div className="relative aspect-[16/9] bg-gray-100 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
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
