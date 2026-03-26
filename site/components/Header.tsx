"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services/window-replacement/",
    children: [
      { label: "Window Replacement", href: "/services/window-replacement/" },
      { label: "Door Replacement", href: "/services/door-replacement/" },
      { label: "Patio Doors", href: "/services/patio-door/" },
      { label: "Siding", href: "/services/siding/" },
      { label: "Outdoor Enclosures", href: "/services/outdoor-enclosures/" },
    ],
  },
  { label: "Gallery", href: "/gallery/" },
  { label: "About Us", href: "/about/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact Us", href: "/contact/" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header style={{ backgroundColor: "#1a3a5c" }} className="text-white sticky top-0 z-50 shadow-lg">
      {/* Top bar */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center text-sm">
          <span className="opacity-80">Locally Owned &amp; Operated in Austin, TX Since 1992</span>
          <a
            href="tel:5124221907"
            className="font-semibold hover:opacity-90 transition-opacity"
            style={{ color: "#93c5fd" }}
          >
            (512) 422-1907
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-extrabold tracking-tight" style={{ fontFamily: "var(--font-overpass)" }}>
              <span className="text-white">Austin</span>{" "}
              <span style={{ color: "#3b82f6" }}>Window</span>{" "}
              <span className="text-white">Pros</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative group">
                  <button
                    className="px-3 py-2 text-sm font-medium hover:opacity-90 flex items-center gap-1 transition-opacity"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    {link.label}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`absolute top-full left-0 mt-1 w-52 rounded-lg shadow-xl overflow-hidden transition-all duration-150 ${
                      servicesOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                    style={{ backgroundColor: "#1a3a5c", border: "1px solid rgba(255,255,255,0.15)" }}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-3 text-sm hover:bg-white/10 transition-colors border-b border-white/10 last:border-b-0"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/contact/"
              className="ml-3 px-5 py-2 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#3b82f6" }}
            >
              Get a Free Quote
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10" style={{ backgroundColor: "#1a3a5c" }}>
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  className="block py-2 text-sm font-medium hover:opacity-80"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="pl-4 space-y-1 mt-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-1.5 text-sm opacity-80 hover:opacity-100"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact/"
              className="block mt-4 px-4 py-2 rounded-lg text-sm font-semibold text-center text-white"
              style={{ backgroundColor: "#3b82f6" }}
              onClick={() => setMobileOpen(false)}
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
