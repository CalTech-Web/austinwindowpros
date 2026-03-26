import type { Metadata } from "next";
import Link from "next/link";
import CtaBanner from "@/components/CtaBanner";

const posts: Record<string, { title: string; date: string; category: string; body: string }> = {
  "signs-you-need-new-windows": {
    title: "7 Signs It's Time to Replace Your Windows",
    date: "March 15, 2026",
    category: "Window Replacement",
    body: `
      <p>Austin homes work hard. The AC runs from May through October, the sun bakes south-facing glass all afternoon, and the occasional hailstorm puts real stress on anything not built for the Texas climate. Most windows last 15 to 20 years before the signs of failure start showing up. Here is what to look for before a small problem becomes an expensive one.</p>
      <h2>Drafts Around the Frame</h2>
      <p>Hold your hand near a closed window on a hot afternoon. If you feel warm air creeping in around the edge, the seal between the frame and the rough opening has broken down. Your AC is compensating. You are paying for it on your electric bill without knowing why.</p>
      <h2>Fogging Between the Panes</h2>
      <p>Double-pane windows trap argon gas between two panes of glass to create an insulating barrier. When the seal fails, that gas escapes and moisture moves in. The foggy look is irreversible without replacing the window or the glass unit. A single failed pane in an otherwise sound window is sometimes repairable, but an old window with a failed seal has usually reached the end of its practical life.</p>
      <h2>Rising Utility Bills Without a Clear Reason</h2>
      <p>Windows account for roughly 25 to 30 percent of a home's heating and cooling load according to the US Department of Energy. When they fail, your HVAC system picks up the slack silently. If your summer bills have climbed over the past few years and your equipment has not changed, old windows are a logical suspect.</p>
      <h2>Windows That Stick or Won't Lock Properly</h2>
      <p>Frames warp. Wood frames absorb moisture and swell. Vinyl frames installed without adequate expansion gaps bind up in summer heat. A window that requires significant force to open or close is also one that cannot seal properly when shut. That is a security issue, not just a nuisance.</p>
      <h2>Visible Frame Damage</h2>
      <p>Rotting wood, cracked vinyl, or corroded aluminum around the frame is a direct path for moisture intrusion. Water gets into the wall cavity, and then you have a much more expensive problem than the window itself. Paint bubbling or peeling on interior trim near the window is often the first visible sign.</p>
      <h2>Street Noise That Seems Louder Than It Used To</h2>
      <p>Modern double-pane windows with laminated glass reduce sound transmission noticeably. If traffic or neighbor noise seems louder than it did a few years ago, the glass or frame seals may have deteriorated. A subtle sign, but a real one.</p>
      <h2>Age Alone</h2>
      <p>Windows older than 20 years are worth evaluating even if no obvious symptoms have appeared. The technology in a current Energy Star-rated window is meaningfully better than what was standard in 2005. A free consultation with Austin Window Pros takes about an hour and gives you a clear picture of where your windows actually stand.</p>
    `,
  },
  "energy-efficient-windows-austin": {
    title: "How Energy-Efficient Windows Lower Your Austin Utility Bills",
    date: "February 28, 2026",
    category: "Energy Efficiency",
    body: `
      <p>July in Austin averages daily highs above 100 degrees for weeks at a stretch. Your home's windows are on the front line of that heat load. Old, single-pane, or poorly sealed windows bleed conditioned air all summer long. The right replacement windows make a measurable difference on your monthly bill.</p>
      <h2>What Low-E Glass Actually Does</h2>
      <p>Low-emissivity glass has a microscopically thin metallic oxide coating that reflects infrared radiation while letting visible light pass through. On a hot afternoon, it pushes a significant portion of solar heat back outside before it can warm the room. In winter, it reflects indoor warmth back in rather than letting it bleed out through the glass. One coating, two real benefits.</p>
      <h2>The Difference Between Single-Pane and Double-Pane</h2>
      <p>A single-pane window has a U-factor, the measure of heat transfer, around 1.0. A double-pane window with argon gas fill and Low-E coating can reach a U-factor of 0.20 or lower. That is roughly a five-times improvement in insulating performance. Austin homeowners replacing original single-pane windows with Energy Star-rated double-pane units typically notice the difference in both comfort and cooling costs within the first summer.</p>
      <h2>Energy Star Certification for the Southern Climate Zone</h2>
      <p>Energy Star rates windows for four climate zones. Austin falls in the Southern zone, which has specific requirements for solar heat gain coefficient, a measure of how much solar radiation passes through the glass. Windows certified for the Southern zone are tested and verified to perform in high-sun, high-heat conditions. Not every window sold in Texas meets this standard. The ones Austin Window Pros installs do.</p>
      <h2>What the Numbers Say</h2>
      <p>The US Department of Energy estimates 12 to 33 percent savings on heating and cooling costs when replacing single-pane windows with Energy Star-certified units. The range is wide because it depends on your existing windows, your home's insulation, and how hard you run the HVAC. A professional window evaluation can narrow that estimate for your specific situation before you commit to anything.</p>
    `,
  },
  "window-frame-materials-guide": {
    title: "Vinyl vs. Fiberglass vs. Wood: Choosing the Right Window Frame",
    date: "February 10, 2026",
    category: "Buying Guide",
    body: `
      <p>The frame material is the first decision that eliminates half your options. Get it wrong and you will be living with the consequences for 20 years. Vinyl is what most Austin homeowners end up with, and that is not a default choice so much as a well-tested one. But fiberglass and wood have real advantages that vinyl cannot match. Here is how to think through it.</p>
      <h2>Vinyl</h2>
      <p>Vinyl frames are made from PVC and do not rot, rust, or require painting. In Austin's heat and humidity, that matters. A quality vinyl window like those made by Alside holds its shape and seal well, costs less than fiberglass or wood, and is available in virtually every style. The honest downside is color. You can get white, tan, and a handful of other options, but you cannot repaint a vinyl frame when your trim colors change.</p>
      <h2>Fiberglass Composite</h2>
      <p>Fiberglass is stronger than vinyl and expands and contracts less with temperature swings. For a home that runs the AC hard all summer and rarely opens windows, that dimensional stability means tighter seals over time. Fiberglass frames can also be painted, so if the exterior color of your home changes down the road, you are not stuck with whatever shade shipped from the factory. Cost is higher, typically 20 to 30 percent more than vinyl for the same window configuration.</p>
      <h2>Wood and Aluminum Clad Wood</h2>
      <p>Wood frames look better than vinyl or fiberglass in almost every traditional home. Full stop. They hold paint well and have a natural insulating value that synthetic frames cannot fully replicate. The trade-off is maintenance. In Austin's summer humidity and intense sun, unprotected wood will degrade faster than you might expect. Aluminum clad wood frames address this by wrapping the exterior face in metal while keeping the interior wood surface visible. It is the best of both materials if the budget allows.</p>
      <h2>Aluminum Thermal Break</h2>
      <p>Aluminum alone conducts heat, which is a problem in Texas. A thermal break frame solves this by inserting a non-conductive material between the inner and outer aluminum sections, reducing heat transfer significantly. These frames are often used on casement and commercial-style windows where strength and slim sight lines matter more than maximum insulation. They perform well in Austin homes with strong architectural character.</p>
      <h2>How to Choose</h2>
      <p>If you want low maintenance and competitive pricing, vinyl is the right answer for most Austin homes. If your home has distinctive character and you want frames you can paint to match future changes, look at fiberglass. If you have wood interior trim you want your windows to complement, aluminum clad wood is worth the premium. Call Austin Window Pros and we will walk through the options specific to your home without the showroom sales routine.</p>
    `,
  },
  "patio-door-options": {
    title: "Sliding vs. French Patio Doors: Which Is Right for Your Home?",
    date: "January 22, 2026",
    category: "Door Replacement",
    body: `
      <p>Walk into any Austin home built in the last 30 years and you will likely find a sliding glass door connecting the living room to the back patio. It works. It is practical. But French patio doors have made a real comeback, and for some floor plans they are simply the better fit. The difference comes down to space, sightlines, and what you want your home to feel like when you open it up.</p>
      <h2>The Case for Sliding Patio Doors</h2>
      <p>Sliding doors do not swing into the room, which matters in kitchens and dining areas where furniture crowds the doorway. A quality sliding door glides on a multi-point roller system, operates smoothly for decades, and is available in widths up to eight feet or more. Austin Window Pros installs sliding patio doors with Energy Star glass and custom sizing to fit your exact opening. The screen is built into the same track, so bug control is straightforward.</p>
      <h2>The Case for French Patio Doors</h2>
      <p>French doors open fully from the center, creating a wide, symmetrical opening. If you entertain often, or simply want the back of your house to feel like a true transition to outdoor space, few other options achieve that as well. The frames are typically fiberglass or composite, which holds up better in the Texas climate than painted wood. Both inswing and outswing configurations are available depending on your porch or patio layout.</p>
      <h2>What Usually Decides It</h2>
      <p>Width of the rough opening is the practical constraint. Openings narrower than five feet are often better served by a sliding door. Wider openings give both styles room to work well. French doors also need clear swing space, about three feet in either direction, so if a counter or sofa sits close to the doorway, that narrows the choice quickly. Budget matters too. French patio doors with full fiberglass composite jambs typically run higher than a comparable sliding unit.</p>
      <h2>What to Know Before the Quote Conversation</h2>
      <p>Measure your opening width. Then check whether your porch slab or landing allows outswing clearance. If you want screen coverage, note that sliding doors take a standard screen track while French doors require a retractable or hinged screen panel. Neither is a dealbreaker, just worth knowing ahead of time. David Adams has been fitting Austin homes with patio doors since 1992 and can tell you in about ten minutes which option fits your situation.</p>
    `,
  },
  "window-installation-what-to-expect": {
    title: "What to Expect on Window Installation Day",
    date: "January 5, 2026",
    category: "Installation",
    body: `
      <p>Most window replacement jobs in Austin finish in a single day. That is not a sales pitch. It is the actual schedule, assuming your windows were measured correctly and ordered to spec. Here is a straightforward walkthrough of what happens from first arrival to final inspection.</p>
      <h2>Morning Arrival</h2>
      <p>The crew arrives early, typically between 7 and 9 in the morning. They will assess the job before pulling any tools from the truck. If you have furniture near the windows, move it back about three feet the night before. The crew brings drop cloths, but that extra clearance makes work go faster and keeps dust off anything you care about.</p>
      <h2>Removal and Rough Opening Prep</h2>
      <p>Each old window is removed one at a time. The rough opening is inspected for rot or water damage before the new window goes in. If the framing is solid, installation proceeds immediately. Damaged framing is not common but it does happen, particularly with wood-framed windows over 20 years old in Austin's humid summers. A good crew shows you what they find before doing anything about it. No surprise charges after the fact.</p>
      <h2>Installation and Sealing</h2>
      <p>New windows are set, leveled, and shimmed to fit precisely. Then they are fastened, flashed, and sealed. The weatherproofing step is where cut-rate jobs often fail. Properly installed windows get flashing tape on the exterior and a backer rod with caulk on the interior. Done right, water cannot find a way in at the frame joint.</p>
      <h2>Interior Trim and Cleanup</h2>
      <p>Interior trim work, if included in your project, happens after each window is secured. Some homeowners choose to repaint trim themselves after installation, which is a reasonable way to save a bit of money. Either way, the crew vacuums and wipes down each work area before moving to the next window. By the time the last window is in, the first area is already clean.</p>
      <h2>Final Walkthrough</h2>
      <p>Before anyone packs up, a team lead does a walkthrough of every window with you. Open it. Close it. Lock it. Check the seal. If anything is not right, it gets addressed before the truck leaves. One verified Austin customer put it plainly in a review from ten years ago: the windows still perform exactly as they did on installation day. That is the standard the Austin Window Pros team works to.</p>
    `,
  },
  "outdoor-enclosures-austin": {
    title: "Beat the Texas Heat with a Covered Patio or Screened Porch",
    date: "December 18, 2025",
    category: "Outdoor Enclosures",
    body: `
      <p>The back yard problem in Austin is simple. Half the year it is perfect outside. The other half, roughly June through September, it is genuinely too hot to sit in direct sun for more than a few minutes. A covered patio solves that. A screened porch solves it even better. The right structure turns a rarely-used back yard into a space you actually want to spend time in.</p>
      <h2>Covered Patios</h2>
      <p>A solid-roof patio cover drops the temperature underneath by 15 to 20 degrees compared to direct sun conditions. Austin Window Pros builds covered patios using Structall panels, which are engineered for Texas wind loads and do not require the painting and sealing that wood pergola roofs need every few years. Most covered patio projects are complete in one to two days. That is the fastest path to usable outdoor shade.</p>
      <h2>Pergolas and Shade Structures</h2>
      <p>A pergola trades full shade for an open, architectural feel. It works well poolside where you want filtered light rather than complete cover. The honest answer is that a pergola without additional shade fabric provides limited relief in an Austin August. If shade is the primary goal, a solid patio cover delivers more value per dollar in this climate. If aesthetics are driving the decision, a pergola with a shade sail or motorized screen is worth looking at.</p>
      <h2>Screened Porches</h2>
      <p>A screened porch is the upgrade that actually changes how you use your home. Shade, bug protection, and a weatherproof space that stays comfortable well into October when unenclosed patios get cold in the evenings. We screen in existing covered patios or build new enclosures from scratch, sized to your footprint and local setback requirements. Austin homeowners who add a screened porch almost universally say they wished they had done it sooner.</p>
      <h2>Sunrooms</h2>
      <p>A Four Seasons sunroom is a year-round room, not just an upgraded porch. Glass-enclosed with a climate control option, it adds real usable square footage without the permitting complexity of a full home addition. These work particularly well on homes with east or north-facing exposures where direct afternoon sun is not the primary issue. If you want a space that functions in January and July alike, a sunroom is worth considering.</p>
      <h2>The Right Call for Your Yard</h2>
      <p>Tell us how you use the space now and what frustrates you about it. Heat and bugs point toward a screened porch. Direct sun with good airflow points toward a solid cover. David Adams will come out, look at your yard, and give you a straight answer with a free quote. Call (512) 422-1907 to set it up.</p>
    `,
  },
  "siding-replacement-signs-texas": {
    title: "Does Your Siding Need Replacing? What Texas Homes Show After 15 Years",
    date: "March 10, 2026",
    category: "Siding",
    body: `
      <p>Fifteen-year-old siding on an Austin home shows its age in specific ways. The sun does more damage here than in most parts of the country. Heat, UV, and the occasional hail event leave a pattern that is easy to read if you know what to look for.</p>
      <h2>Faded or Chalky Color</h2>
      <p>Vinyl siding loses its color gradually from UV exposure. A house installed in 2005 with medium-gray vinyl often looks washed out today, not from dirt but from the outermost surface of the material breaking down. A pressure wash will not restore the color. That surface degradation is also a sign the panels are getting brittle and less able to absorb impact without cracking.</p>
      <h2>Cracks, Warping, or Buckling</h2>
      <p>Vinyl expands and contracts with temperature. Austin summers routinely push surface temperatures on south-facing walls past 150 degrees. Panels installed without proper expansion gaps buckle. Cracks appear near fasteners. If you see wavy sections on a wall that used to be flat, the panels are expanding without room to move and the damage compounds each summer.</p>
      <h2>Moisture Behind the Siding</h2>
      <p>Paint peeling on interior walls near the exterior, soft drywall, or visible mold growth are the clearest signals of moisture intrusion. Siding itself rarely causes the problem. Failing caulk at windows and doors, improper flashing, or cracked panels are the entry points. Once water is behind the siding the clock is running, and what starts as a caulk job can become a framing repair.</p>
      <h2>Hail Damage</h2>
      <p>Central Texas gets hail every few years. A storm that dents car hoods is leaving marks on vinyl and fiber cement siding too. Hail impacts create micro-cracks that are not always visible to the eye but compromise the surface seal over time. If your area had a significant storm in the past two or three years and you have not had the siding inspected, it is worth doing before the next season.</p>
      <h2>Wood Siding Specific Issues</h2>
      <p>Original wood siding on Austin homes from the 1970s and 1980s sometimes survives in good shape if it has been maintained and repainted regularly. More often it has not. Soft spots in the wood, visible rot at the base or around window frames, or gaps in the paint that have not been addressed are signs the wood is failing. Fiber cement or insulated vinyl can replace it without the ongoing maintenance burden.</p>
      <h2>Get a Free Assessment</h2>
      <p>Austin Window Pros evaluates siding during the same consultation as windows and doors. If you are not sure whether your siding needs replacing or just cleaning and minor repairs, a free walkthrough gives you a clear answer. Call (512) 422-1907 to schedule.</p>
    `,
  },
  "entry-door-replacement-austin": {
    title: "How to Pick an Entry Door for Your Austin Home",
    date: "March 3, 2026",
    category: "Door Replacement",
    body: `
      <p>The entry door is the first thing visitors notice. It is also the thing most homeowners replace only once. Pick the wrong material and you will be repainting or refinishing it every couple of years in Austin's climate. Here is how to think through the decision before you start shopping.</p>
      <h2>Start with the Material</h2>
      <p>Fiberglass is the right answer for most Austin homes. It does not warp, rust, or rot, holds paint and stain well, and is available in styles that convincingly replicate wood grain. If your home has a traditional look and you want a wood feel without the upkeep, fiberglass is the more durable option for the Texas climate. Austin Window Pros installs Therma-Tru fiberglass doors, which carry a strong industry reputation for longevity.</p>
      <p>Steel doors cost less and are harder to dent than fiberglass, but they scratch and can develop rust at the bottom edge in humid conditions if the finish is compromised. They are a reasonable choice for secondary entries. Real wood doors look exceptional and can be stained to match interior trim. The trade-off is maintenance. An unprotected wood entry door on a west-facing facade in Austin will need refinishing every two to three years.</p>
      <h2>Glass and Light</h2>
      <p>A fully solid door makes an entry feel dark and closed off. Most fiberglass and steel doors come with glass insert options, from a narrow sidelite panel to full decorative glass spanning much of the door face. Low-E glass keeps heat gain manageable even with large glass areas. If you have a covered porch, direct solar exposure to the door glass is reduced and you have more flexibility on glass size without sacrificing energy performance.</p>
      <h2>Hardware and Security</h2>
      <p>The lock is not the door, but a good door with a weak installation defeats the purpose. Every door Austin Window Pros installs gets proper strike plate depth set during installation. Multi-point locking systems are available on request for Therma-Tru and Masonite doors. If security is a priority at your primary entry, ask about reinforced frame anchoring when you request your quote.</p>
      <h2>What the Quote Covers</h2>
      <p>A free consultation with Austin Window Pros covers measurement, material options, hardware selection, and pricing. David Adams handles these consultations personally and has been fitting Austin homes with replacement doors since 1992. Call (512) 422-1907 or use the contact form to set up a time.</p>
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
