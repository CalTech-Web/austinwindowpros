import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBanner from "@/components/CtaBanner";

const posts: Record<string, { title: string; date: string; isoDate: string; category: string; description: string; image: string; body: string }> = {
  "casement-vs-double-hung-windows": {
    title: "Casement vs. Double-Hung Windows: Which Style Fits Your Austin Home",
    date: "March 27, 2026",
    isoDate: "2026-03-27",
    category: "Buying Guide",
    description: "Double-hung is the default. Casement windows solve specific problems double-hung cannot. Here is how to decide which style belongs in each room before you order.",
    image: "/images/gallery/project-08.jpg",
    body: `
      <p>The default when replacing windows is double-hung. Same style as what was there before, familiar operation, widely available. Most of the time that is the right call. But casement windows solve specific problems that double-hung windows do not, and knowing the difference before you order saves you from fixing the right problem with the wrong window.</p>
      <h2>How Each Window Works</h2>
      <p>Double-hung windows have two sashes that slide vertically. The bottom sash goes up, the top sash comes down, and both tilt inward for cleaning. Casement windows are hinged on one side and crank open outward. When a casement closes, the sash presses against the frame on all four sides. That compression seal is tighter than what a sliding sash achieves, which matters in a climate where summer heat finds every gap.</p>
      <h2>Ventilation Differences</h2>
      <p>This is where casement windows have a measurable edge. When a casement is fully open, the sash acts as a scoop that redirects outside airflow into the room. A double-hung open at both sashes pulls air in at the bottom and lets it out at the top, but it catches less of a cross-breeze. For bedrooms and bathrooms on south or southeast-facing walls in Austin homes, a casement at the right position captures more of the prevailing wind.</p>
      <h2>Where Double-Hung Wins</h2>
      <p>Double-hung windows are the right choice for living rooms, dining areas, and any room where flexibility and a traditional look matter more than maximum airflow. They are also the lower-cost option. A vinyl double-hung from Alside typically runs 10 to 15 percent less than a comparable casement from the same manufacturer. If you are replacing 14 windows in a 1990s Austin house and budget is a real factor, double-hung throughout is a practical, durable answer.</p>
      <h2>The Crank Hardware Trade-off</h2>
      <p>Casement windows open and close with a crank operator. On quality units, that mechanism runs smoothly for years. On cheaper windows or units installed in high-humidity rooms without adequate ventilation, the crank can wear faster than a standard sash track. If you are putting casements in a bathroom or kitchen above the sink, ask your contractor about the hardware rating before selecting the unit.</p>
      <h2>When to Mix Styles</h2>
      <p>Nothing requires you to use the same style on every window. Casements are common in kitchens above a counter where the sill height makes a bottom-opening sash impractical. Double-hung works well everywhere else. David Adams frequently recommends casement windows for one or two specific rooms and double-hung for the rest of the house. During the in-home consultation, each opening gets measured and the use of that room enters the conversation.</p>
      <p>Walk through each room before finalizing your window order. Name what that window is actually for. Ventilation, light, view. The style choice usually becomes obvious from the answer. Call (512) 422-1907 to set up a free in-home consultation.</p>
    `,
  },
  "replace-one-window-or-all": {
    title: "Should You Replace One Window or All of Them at Once?",
    date: "March 27, 2026",
    isoDate: "2026-03-27",
    category: "Buying Guide",
    description: "One failed window raises the question about the rest. The answer depends on age, budget, and what a close look at the remaining windows actually shows.",
    image: "/images/gallery/project-11.jpg",
    body: `
      <p>One window fails and the others look fine. You call for a quote on that one replacement and the contractor walks the house and says most of the other windows are not far behind. Now you have to decide how much to tackle at once. The right answer depends on your budget, how old the remaining windows are, and how long you plan to stay in the house.</p>
      <h2>The Case for Replacing Just One</h2>
      <p>If budget is the real constraint, replacing the failed window now and planning the rest over the next two to three years is a legitimate strategy. One failed unit does not compromise the whole house. The rest can wait if they are still holding their seals and operating properly. A free in-home consultation will tell you which windows are at risk and which have time left, so you are not guessing at priorities.</p>
      <h2>The Case for Doing Them All at Once</h2>
      <p>The strongest argument is efficiency. One crew visit, one disruption, everything handled. There is also a cost advantage. Per-window labor carries a setup component that scales down when you do a full house rather than a partial job. On a 14-window house, the difference between one visit and two is meaningful. David Adams can walk you through the comparison before you commit to anything.</p>
      <h2>What to Check on the Remaining Windows</h2>
      <p>Before deciding, assess what you actually have. Press your palm flat against the center of a closed window on a hot afternoon. Warm glass means heat is transferring through. Look for fogging or condensation between the panes, particularly in the corners. Check whether each sash closes flush and whether the lock engages fully. Any of those issues means the window is closer to failure than it appears from across the room.</p>
      <h2>Age as the Deciding Factor</h2>
      <p>Windows from a 1995 to 2005 build are mostly at or past the end of their practical service life. The glass seals, the weatherstripping, the frame joints all age together, and one failing seal is usually a sign that others are not far behind. If your house was built in 2000 and the original windows are still in place, you are making a partial or full replacement decision regardless of which one failed first. Knowing that upfront makes the conversation easier.</p>
      <p>Tell us which window failed and when the house was built. We will come out, check the rest, and give you a direct answer about what needs to happen now and what can wait. Call (512) 422-1907 for a free, no-pressure consultation.</p>
    `,
  },
  "how-to-choose-window-contractor-austin": {
    title: "How to Choose a Window Contractor in Austin",
    date: "March 26, 2026",
    isoDate: "2026-03-26",
    category: "Buying Guide",
    description: "The lowest quote is not always the best value. Here is what to ask before signing, from insurance and crew accountability to warranty terms and measurement process.",
    image: "/images/gallery/project-01.jpg",
    body: `
      <p>The fastest mistake is signing with the lowest quote before you understand what it does not include. Custom measurement or stock sizing? Who backs the warranty, the contractor or the manufacturer? How many windows per day does the crew actually install? These are answerable questions, and asking them separates solid contractors from the ones who get sloppy at installation.</p>
      <h2>Check Insurance First, Not Credentials</h2>
      <p>Ask for a certificate of general liability insurance before the first meeting. A contractor installing windows without it leaves you holding the bag if something goes wrong on your property. Framed opening damage, a cracked sill, a worker injury, all of that becomes your problem without proper coverage. Most legitimate window contractors in Austin carry at least $1 million in general liability. If they cannot produce a certificate quickly, move on.</p>
      <h2>Custom Measurement vs. Stock Sizing</h2>
      <p>This question reveals the most about how a contractor operates. Stock window sizing rounds your opening to the nearest standard dimension, which means gap-filling with caulk or backer material instead of a tight frame fit. A custom measured window is ordered to your exact rough opening. The seal is better. The look is cleaner. David Adams measures every window opening himself before ordering. That is the standard worth asking about.</p>
      <h2>Ask About the Installation Crew</h2>
      <p>Some companies use a two-person crew for efficiency. Others send one person and take twice as long, which matters on a full-house replacement where weather exposure is a real factor. Ask who specifically will be doing the installation. Is it the company's own employees or a subcontracted crew? The answer tells you a lot about accountability when something needs to be fixed after the job is done.</p>
      <h2>Understand the Warranty</h2>
      <p>A manufacturer warranty covers the window unit itself, the glass seal, the hardware, the frame. It does not cover installation errors, which is where most post-installation problems originate. Ask whether the contractor provides a separate workmanship warranty on the installation. A company confident in its work offers one. Austin Window Pros backs the installation alongside the manufacturer warranty on every project.</p>
      <h2>Red Flags to Watch For</h2>
      <p>A quote significantly below every other estimate is not good luck. It usually means something is different, lower-grade window units, no custom measuring, a subcontracted crew with limited accountability, or a warranty with exclusions in the fine print. Pressure to sign the same day is another flag. Legitimate contractors in Austin give you time to compare.</p>
      <h2>What a Good First Meeting Looks Like</h2>
      <p>The contractor should come to your home, not ask you to a showroom. They should measure the windows themselves. They should give you material options with honest trade-offs, not steer you toward whatever margin is best for them. David Adams has been running exactly this kind of in-home consultation since 1992. Call (512) 422-1907 to set one up.</p>
    `,
  },
  "covered-patio-vs-screened-porch-austin": {
    title: "Covered Patio or Screened Porch: What Actually Gets Used in Austin",
    date: "March 26, 2026",
    isoDate: "2026-03-26",
    category: "Outdoor Enclosures",
    description: "Shade solves half the problem. Bug control solves most of it. Here is how to choose between a covered patio and a screened porch for an Austin back yard.",
    image: "/images/gallery/project-20.jpg",
    body: `
      <p>By mid-June, the average Austin back patio sits empty by noon. Shade solves half of that. A screened porch solves most of it. The choice between them comes down to how you actually use the space and how far into the year you want to keep using it.</p>
      <h2>What a Covered Patio Does</h2>
      <p>A solid-roof patio cover drops the temperature underneath by 15 to 20 degrees compared to direct sun. On a 105-degree August afternoon, that brings you to something closer to 85, which is workable. It handles rain. It protects furniture. Austin Window Pros builds covered patios with Structall insulated panels engineered for Texas wind loads, which means no warping and no repainting cycle like you get with wood pergola roofing. Most covered patio projects complete in one to two days.</p>
      <h2>What a Screened Porch Adds</h2>
      <p>Screens add bug control, which matters in Austin from April through October. Cedar Park and Round Rock homes near wooded lots know this particularly well. A screened porch also captures late evening cooling without the flying insects that make open patios miserable past 8pm in summer. The other advantage is season extension. Open patios in Austin get cold and windswept in November evenings. A screened porch stays comfortable two to three weeks longer on each end of the season.</p>
      <h2>Cost and Timeline</h2>
      <p>A covered patio is the lower-cost option, by a meaningful margin. A screened porch on an existing covered slab adds the screening system and frame to that base. Building a new screened porch from scratch, slab included, is the most involved project. Neither requires permits in most Austin jurisdictions for structures under a certain square footage, though that varies by neighborhood and HOA. David Adams knows the local rules and checks setback requirements before quoting.</p>
      <h2>When to Consider a Sunroom Instead</h2>
      <p>If you want to use the space in January, a screened porch will not be comfortable without a heater. A Four Seasons sunroom with a climate control option is the year-round answer. It is also a different category of project and investment. For most Austin homeowners whose goal is getting through summer and staying out through fall evenings, a covered patio or screened porch is the right call.</p>
      <h2>The Question Worth Asking</h2>
      <p>Tell David Adams how you use your yard now and what frustrates you about it. That conversation usually points clearly at one option. Call (512) 422-1907 for a free consultation and quote.</p>
    `,
  },
  "window-replacement-cost-austin": {
    title: "How Much Does Window Replacement Cost in Austin?",
    date: "March 25, 2026",
    isoDate: "2026-03-25",
    category: "Buying Guide",
    description: "Window replacement cost in Austin, TX depends on window count, frame material, and style. Here is how homeowners think through the numbers before requesting a quote.",
    image: "/images/gallery/project-07.jpg",
    body: `
      <p>Most homeowners call with a total project in mind before they have counted their windows. Start there. A typical Austin house has somewhere between 12 and 20 windows. The count alone changes the conversation more than any other single factor.</p>
      <h2>The Basic Price Drivers</h2>
      <p>Three things drive the cost of a window replacement project: how many windows you are replacing, what frame material and style you choose, and whether any rough openings need repair work before the new window can go in. Labor in Austin runs roughly $150 to $300 per window depending on complexity. Material cost on top of that ranges widely, which is where the real decisions happen.</p>
      <h2>Vinyl Windows</h2>
      <p>A quality vinyl replacement window, custom measured to your opening, typically lands between $300 and $600 per window installed in an Austin home. That includes the Alside or comparable unit, hardware, weatherproofing, and cleanup. Vinyl is the most common choice because the performance-to-cost ratio is hard to beat. You are not sacrificing much in energy performance to save 30 percent over fiberglass.</p>
      <h2>Fiberglass and Wood Windows</h2>
      <p>Fiberglass composite windows typically cost 20 to 30 percent more than vinyl for the same configuration. The upgrade makes sense for homeowners who want frames they can repaint as exterior colors change, or who want tighter dimensional stability over long Texas summers. Wood and aluminum clad wood windows can run considerably higher, from $700 to over $1,000 installed per window, depending on species and cladding.</p>
      <h2>Window Style Affects Price</h2>
      <p>A standard double-hung or single-hung replacement window costs less than a casement or awning window of the same size, partly because the hardware is simpler. Bay windows and bow windows sit at the top of the range. They require structural consideration and more installation time. If you are replacing a standard double-hung with a picture window, note that you are trading ventilation for a lower price point since picture windows have no operating sash.</p>
      <h2>Rough Opening Repairs</h2>
      <p>Rotted framing around a window adds to the cost of that window, sometimes significantly. Austin's summer humidity accelerates wood rot around windows that have been leaking at the sill or frame. A professional crew checks this during removal. If the framing is sound, you pay only the window price. If there is damage, fixing it properly before the new window goes in is the right call, even if it adds cost. Skipping it means the new window will fail at the same point in a few years.</p>
      <h2>What a Free Quote Actually Covers</h2>
      <p>David Adams will come to your home, count the windows, inspect the frames for damage, and give you a project-level price, not an estimate that triples after the crew arrives. Call (512) 422-1907 to set up the consultation. No obligation, no pressure, no showroom visit required.</p>
    `,
  },
  "vinyl-vs-fiber-cement-siding": {
    title: "Vinyl vs. Fiber Cement Siding for Austin Homes",
    date: "March 20, 2026",
    isoDate: "2026-03-20",
    category: "Siding",
    description: "Vinyl vs. fiber cement siding in Austin, TX. Compare cost, heat resistance, and long-term performance to choose the right material for your home.",
    image: "/images/gallery/project-21.jpg",
    body: `
      <p>Vinyl costs less upfront. Fiber cement lasts longer and paints better. That is the core trade-off, and it is genuinely worth thinking through before you commit to a full re-side.</p>
      <h2>Price Difference</h2>
      <p>On a typical Austin home, vinyl siding runs 20 to 40 percent less than fiber cement for the same coverage area. The gap narrows when you factor in premium vinyl products like insulated vinyl, which adds a foam backing for better thermal performance. If budget is the constraint, standard vinyl delivers a solid result at a lower entry point.</p>
      <h2>How Each Holds Up in Texas Heat</h2>
      <p>Vinyl expands and contracts with temperature. South-facing walls in Austin can hit surface temperatures above 150 degrees Fahrenheit in August. Properly installed vinyl with adequate expansion gaps handles this without warping. Vinyl installed too tight, or already aging from a previous installation, buckles. Fiber cement is dimensionally stable at those temperatures. It does not expand significantly, so the panels stay flat and the paint holds longer.</p>
      <h2>Painting and Color Changes</h2>
      <p>Vinyl siding ships in its color. The pigment runs through the material, so it does not chip the way paint does. But you cannot repaint it effectively. When the color fades after 15 to 20 years of UV exposure, your options are replacement or accepting the faded look. Fiber cement takes paint and holds it well, though it does require repainting every 10 to 15 years depending on sun exposure. If you are likely to repaint your home's exterior or change the color scheme, fiber cement gives you that flexibility.</p>
      <h2>Moisture and Pest Resistance</h2>
      <p>Both materials resist moisture better than wood. Vinyl is impervious to it. Fiber cement can absorb some moisture at cut edges if the field cuts are not sealed, so proper installation technique matters more with fiber cement. Neither material attracts termites or other wood-boring insects, which is worth noting for Central Texas homes that border wooded lots or have had previous termite activity.</p>
      <h2>Insulated Vinyl</h2>
      <p>One category worth calling out separately is insulated vinyl. It wraps a foam backing around each panel, adding measurable R-value and eliminating the hollow sound that standard vinyl produces when struck. In Austin's climate, the energy benefit is real on west-facing and south-facing walls. Cost is closer to fiber cement than standard vinyl, so the comparison shifts. If insulated vinyl is on the table, ask your contractor to compare it directly against fiber cement for your specific home.</p>
      <h2>Making the Call</h2>
      <p>If you are staying in the house for more than 15 years and exterior color matters to you, fiber cement is the stronger long-term choice. If you are focused on upfront cost and do not plan to repaint, vinyl is a practical answer for most Austin homes. Austin Window Pros installs both. Call (512) 422-1907 for a free consultation and we will tell you what makes more sense for your specific situation.</p>
    `,
  },
  "signs-you-need-new-windows": {
    title: "7 Signs It's Time to Replace Your Windows",
    date: "March 15, 2026",
    isoDate: "2026-03-15",
    category: "Window Replacement",
    description: "Drafts, condensation, and rising energy bills are the obvious signals. Seven warning signs Austin homeowners commonly overlook when evaluating windows.",
    image: "/images/gallery/project-02.jpg",
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
    isoDate: "2026-02-28",
    category: "Energy Efficiency",
    description: "How energy-efficient windows lower utility bills in Austin, TX. Learn how Low-E glass and double-pane insulation perform against the Texas summer heat.",
    image: "/images/gallery/project-06.jpg",
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
    isoDate: "2026-02-10",
    category: "Buying Guide",
    description: "Vinyl, fiberglass, or wood window frames for Austin homes. Compare cost, maintenance, and energy performance to choose the right replacement window material.",
    image: "/images/gallery/project-09.jpg",
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
    isoDate: "2026-01-22",
    category: "Door Replacement",
    description: "Sliding vs. French patio doors in Austin, TX. Compare clearance, screen options, cost, and sightlines to find the right fit for your floor plan.",
    image: "/images/gallery/project-16.jpg",
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
    isoDate: "2026-01-05",
    category: "Installation",
    description: "Most Austin window replacement projects complete in a single day. A step-by-step walkthrough from crew arrival through final inspection for Austin homeowners.",
    image: "/images/gallery/project-22.jpg",
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
    isoDate: "2025-12-18",
    category: "Outdoor Enclosures",
    description: "Covered patios, screened porches, pergolas, and sunrooms for Austin, TX. Choose the right outdoor enclosure for your yard and year-round comfort.",
    image: "/images/gallery/project-24.jpg",
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
    isoDate: "2026-03-10",
    category: "Siding",
    description: "Austin heat, UV exposure, and hail leave specific patterns on aging siding. Here is what Texas homeowners should look for before moisture gets in.",
    image: "/images/gallery/project-19.jpg",
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
    isoDate: "2026-03-03",
    category: "Door Replacement",
    description: "How to choose an entry door for your Austin home. Compare fiberglass, steel, and wood for durability, appearance, and energy performance in the Texas climate.",
    image: "/images/gallery/project-14.jpg",
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
  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `https://austinwindowpros.com/blog/${slug}/`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.isoDate,
      url: `https://austinwindowpros.com/blog/${slug}/`,
    },
  };
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://austinwindowpros.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://austinwindowpros.com/blog/" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://austinwindowpros.com/blog/${slug}/` },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.isoDate,
    dateModified: post.isoDate,
    author: {
      "@type": "Person",
      name: "David Adams",
      jobTitle: "Founder & Owner",
      worksFor: {
        "@type": "LocalBusiness",
        name: "Austin Window Pros",
      },
    },
    publisher: {
      "@type": "LocalBusiness",
      name: "Austin Window Pros",
      url: "https://austinwindowpros.com",
    },
    url: `https://austinwindowpros.com/blog/${slug}/`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://austinwindowpros.com/blog/${slug}/`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <section className="relative py-14 overflow-hidden" style={{ backgroundColor: "#1a3a5c" }}>
        <div className="absolute inset-0 z-0">
          <Image
            src={post.image}
            alt=""
            fill
            className="object-cover opacity-20"
            priority
            quality={40}
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
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
