import type { Metadata } from "next";
import { Overpass, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
