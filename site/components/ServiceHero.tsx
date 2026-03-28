import Image from "next/image";
import Link from "next/link";

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  breadcrumb: string;
  image?: string;
}

export default function ServiceHero({ title, subtitle, breadcrumb, image }: ServiceHeroProps) {
  return (
    <section className="relative min-h-[400px] flex items-center overflow-hidden" style={{ backgroundColor: "#1a3a5c" }}>
      {image && (
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt=""
            fill
            className="object-cover opacity-20"
            priority
            quality={40}
          />
        </div>
      )}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
        <nav className="text-sm mb-4 opacity-70">
          <Link href="/" className="hover:opacity-100">Home</Link>
          <span className="mx-2">/</span>
          <span>{breadcrumb}</span>
        </nav>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4" style={{ fontFamily: "var(--font-overpass)" }}>
          {title}
        </h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact/"
            className="inline-flex items-center justify-center px-7 py-3 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#3b82f6" }}
          >
            Get a Free Quote
          </Link>
          <a
            href="tel:5124221907"
            className="inline-flex items-center justify-center px-7 py-3 rounded-lg text-sm font-semibold border border-white/50 hover:border-white transition-colors"
          >
            (512) 422-1907
          </a>
        </div>
      </div>
    </section>
  );
}
