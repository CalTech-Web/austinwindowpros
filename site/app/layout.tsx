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
  },
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
