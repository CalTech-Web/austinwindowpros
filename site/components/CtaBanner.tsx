import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="py-14" style={{ backgroundColor: "#3b82f6" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-3" style={{ fontFamily: "var(--font-overpass)" }}>
          Ready for a Free Consultation?
        </h2>
        <p className="text-base opacity-90 mb-6">
          No pressure, no obligation. We will assess your home and provide an honest quote for any window, door, or siding project.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact/"
            className="inline-flex items-center justify-center px-7 py-3 rounded-lg text-sm font-semibold bg-white hover:bg-gray-100 transition-colors"
            style={{ color: "#1a3a5c" }}
          >
            Get a Free Quote
          </Link>
          <a
            href="tel:5124221907"
            className="inline-flex items-center justify-center px-7 py-3 rounded-lg text-sm font-semibold border-2 border-white hover:bg-white/10 transition-colors text-white"
          >
            Call (512) 422-1907
          </a>
        </div>
      </div>
    </section>
  );
}
