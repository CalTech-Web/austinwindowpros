import type { Metadata } from "next";
import Link from "next/link";
import CtaBanner from "@/components/CtaBanner";

const posts: Record<string, { title: string; date: string; category: string; body: string }> = {
  "signs-you-need-new-windows": {
    title: "7 Signs It's Time to Replace Your Windows",
    date: "March 15, 2026",
    category: "Window Replacement",
    body: `
      <p>Most Austin homeowners do not think about their windows until something goes obviously wrong. But your windows are constantly working, keeping conditioned air inside and the Texas heat outside. When they start to fail, the signs are there if you know what to look for.</p>
      <h2>1. Drafts Around the Frame</h2>
      <p>If you feel air movement near a closed window, the seals have failed. In the Austin summer, that means your AC is working overtime to compensate.</p>
      <h2>2. Condensation Between Panes</h2>
      <p>Fogging or moisture inside double-pane glass means the insulating gas seal has broken. The window is no longer providing its rated insulation value.</p>
      <h2>3. Rising Energy Bills</h2>
      <p>Inefficient windows are one of the most common causes of high utility costs in Central Texas. Upgrading to Energy Star-rated double-pane windows can meaningfully reduce your monthly bills.</p>
      <h2>4. Difficulty Opening or Closing</h2>
      <p>Windows that stick, jam, or require significant force to operate are a safety hazard. Frames that have warped or shifted over time are difficult to seal properly.</p>
      <h2>5. Visible Damage to the Frame</h2>
      <p>Rotting wood, cracked vinyl, or corrosion on aluminum frames allows moisture intrusion and reduces structural integrity.</p>
      <h2>6. Excessive Outside Noise</h2>
      <p>Modern double-pane windows significantly reduce sound transmission. If street or neighbor noise seems louder than it used to, your windows may be a contributing factor.</p>
      <h2>7. Windows Over 15 to 20 Years Old</h2>
      <p>Even if your windows seem functional, technology has advanced significantly. A window evaluation is a smart investment to understand what you might be missing in energy performance and comfort.</p>
    `,
  },
  "energy-efficient-windows-austin": {
    title: "How Energy-Efficient Windows Lower Your Austin Utility Bills",
    date: "February 28, 2026",
    category: "Energy Efficiency",
    body: `
      <p>Austin summers are intense. Temperatures regularly exceed 100 degrees for weeks at a time, and your home's windows are on the front lines of that battle. Old, single-pane, or poorly sealed windows are one of the biggest sources of energy loss in Central Texas homes.</p>
      <h2>The Role of Low-E Glass</h2>
      <p>Low-emissivity (Low-E) glass has a microscopically thin metallic coating that reflects infrared heat while allowing visible light to pass through. In summer, it keeps solar heat outside. In winter, it keeps indoor warmth in.</p>
      <h2>Double-Pane vs. Single-Pane</h2>
      <p>Single-pane windows have almost no insulating value. Double-pane windows trap an insulating layer of argon or krypton gas between two panes, dramatically reducing heat transfer.</p>
      <h2>Energy Star Certification</h2>
      <p>Austin Window Pros installs Energy Star-certified windows rated for the Southern climate zone, which has specific performance requirements for solar heat gain coefficient (SHGC) and U-factor.</p>
      <h2>Expected Savings</h2>
      <p>The US Department of Energy estimates that upgrading from single-pane to Energy Star-certified windows can save 12 to 33 percent on heating and cooling costs depending on your climate and existing windows.</p>
    `,
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: "Blog Post" };
  return { title: post.title };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold mb-4" style={{ color: "#1a3a5c" }}>Post Not Found</h1>
        <Link href="/blog/" style={{ color: "#3b82f6" }}>Back to Blog</Link>
      </div>
    );
  }

  return (
    <>
      <section className="py-14" style={{ backgroundColor: "#1a3a5c" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <nav className="text-sm mb-4 opacity-70">
            <Link href="/" className="hover:opacity-100">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog/" className="hover:opacity-100">Blog</Link>
            <span className="mx-2">/</span>
            <span>{post.title}</span>
          </nav>
          <span className="text-xs font-semibold px-2 py-1 rounded mb-4 inline-block" style={{ backgroundColor: "#3b82f6" }}>
            {post.category}
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold mt-2 mb-2" style={{ fontFamily: "var(--font-overpass)" }}>
            {post.title}
          </h1>
          <p className="text-sm opacity-70">{post.date}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="prose prose-sm max-w-none"
            style={{ color: "#374151" }}
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
          <div className="mt-10 pt-6 border-t border-gray-100">
            <Link href="/blog/" className="text-sm font-semibold" style={{ color: "#3b82f6" }}>
              &larr; Back to Blog
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
