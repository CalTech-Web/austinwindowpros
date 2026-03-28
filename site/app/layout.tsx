import type { Metadata } from "next";
import { Overpass, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

const overpass = Overpass({
  variable: "--font-overpass",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://austinwindowpros.com"),
  title: {
    default: "Austin Window Pros | Window & Door Replacement in Austin, TX",
    template: "%s | Austin Window Pros",
  },
  description:
    "Austin Window Pros is a locally owned window and door replacement company serving Austin, TX since 1992. Free quotes, Energy Star products, and professional installation.",
  keywords: [
    "window replacement Austin TX",
    "door replacement Austin",
    "window installation Austin",
    "energy efficient windows Austin",
  ],
  openGraph: {
    siteName: "Austin Window Pros",
    locale: "en_US",
    type: "website",
    url: "https://austinwindowpros.com",
    title: "Austin Window Pros | Window & Door Replacement in Austin, TX",
    description:
      "Austin Window Pros is a locally owned window and door replacement company serving Austin, TX since 1992. Free quotes, Energy Star products, and professional installation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Austin Window Pros | Window & Door Replacement in Austin, TX",
    description:
      "Austin Window Pros is a locally owned window and door replacement company serving Austin, TX since 1992. Free quotes, Energy Star products, and professional installation.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Austin Window Pros",
  legalName: "Window Pros LLC",
  description:
    "Locally owned window and door replacement company serving Austin, TX and surrounding Central Texas communities since 1992.",
  url: "https://austinwindowpros.com",
  telephone: "+15124221907",
  email: "windowprosaustin@gmail.com",
  foundingDate: "1992",
  address: {
    "@type": "PostalAddress",
    streetAddress: "13359 N N Hwy 183 Suite 406-520",
    addressLocality: "Austin",
    addressRegion: "TX",
    postalCode: "78750",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "19:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "37",
    bestRating: "5",
    worstRating: "1",
  },
  priceRange: "$$",
  areaServed: [
    { "@type": "City", name: "Austin", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Round Rock", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Cedar Park", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Pflugerville", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Leander", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Georgetown", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "San Marcos", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Buda", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Kyle", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Lakeway", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Dripping Springs", containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  sameAs: [
    "https://www.facebook.com/austinwindowpros/",
    "https://www.linkedin.com/in/window-pros-austin-67180515b",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${overpass.variable} ${poppins.variable}`}
    >
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        {/* Sticky mobile Call Now bar */}
        <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
          <a
            href="tel:5124221907"
            className="flex items-center justify-center gap-2 w-full py-3.5 text-white text-sm font-semibold"
            style={{ backgroundColor: "#3b82f6" }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call (512) 422-1907
          </a>
        </div>
      </body>
    </html>
  );
}
