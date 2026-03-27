import Link from "next/link";

const serviceLinks = [
  { label: "Window Replacement", href: "/services/window-replacement/" },
  { label: "Door Replacement", href: "/services/door-replacement/" },
  { label: "Siding", href: "/services/siding/" },
  { label: "Outdoor Enclosures", href: "/services/outdoor-enclosures/" },
];

const serviceAreas = [
  { label: "Round Rock", href: "/locations/round-rock/" },
  { label: "Cedar Park", href: "/locations/cedar-park/" },
  { label: "Pflugerville", href: "/locations/pflugerville/" },
  { label: "Leander", href: "/locations/leander/" },
  { label: "Georgetown", href: "/locations/georgetown/" },
  { label: "San Marcos", href: "/locations/san-marcos/" },
  { label: "Buda", href: "/locations/buda/" },
  { label: "Kyle", href: "/locations/kyle/" },
  { label: "Lakeway", href: "/locations/lakeway/" },
  { label: "Dripping Springs", href: "/locations/dripping-springs/" },
];

const companyLinks = [
  { label: "About Us", href: "/about/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact Us", href: "/contact/" },
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Terms of Service", href: "/terms-of-service/" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1a3a5c" }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div>
            <div className="text-xl font-extrabold mb-3" style={{ fontFamily: "var(--font-overpass)" }}>
              <span className="text-white">Austin</span>{" "}
              <span style={{ color: "#3b82f6" }}>Window</span>{" "}
              <span className="text-white">Pros</span>
            </div>
            <p className="text-sm opacity-75 mb-4 leading-relaxed">
              Locally owned and operated in Austin, TX since 1992. Expert window and door replacement with over 40 years of experience.
            </p>
            <p className="text-sm opacity-75">13359 N Hwy 183, Suite 406-520</p>
            <p className="text-sm opacity-75">Austin, TX 78750</p>
            <a href="tel:5124221907" className="block mt-2 text-sm font-semibold" style={{ color: "#93c5fd" }}>
              (512) 422-1907
            </a>
            <a href="mailto:windowprosaustin@gmail.com" className="block mt-1 text-sm opacity-75 hover:opacity-100">
              windowprosaustin@gmail.com
            </a>
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.facebook.com/austinwindowpros/"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-75 hover:opacity-100 transition-opacity"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/window-pros-austin-67180515b"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-75 hover:opacity-100 transition-opacity"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-60">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm opacity-75 hover:opacity-100 transition-opacity">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-60">Service Areas</h3>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li key={area.href}>
                  <Link href={area.href} className="text-sm opacity-75 hover:opacity-100 transition-opacity">
                    {area.label}, TX
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-60">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm opacity-75 hover:opacity-100 transition-opacity">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="text-xs opacity-60 mb-1">Mon - Fri: 7:00am - 7:00pm</p>
              <p className="text-xs opacity-60">Free consultations available</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs opacity-60">
          <p>&copy; 2025 Austin Window Pros, All Rights Reserved.</p>
          <a
            href="https://caltechweb.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-100 transition-opacity"
          >
            Built by CalTech Web
          </a>
        </div>
      </div>
    </footer>
  );
}
