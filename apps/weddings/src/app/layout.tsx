import type { Metadata, Viewport } from "next";
import "./globals.css";
import { display, mono, serif } from "./fonts";
import { Analytics } from "@atreya/ui/Analytics";
import { Providers } from "@atreya/ui/Providers";
import { WhatsAppButton } from "@atreya/ui/WhatsAppButton";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE_URL, site } from "@/data/site";

const title = "Saltwater Studios — Wedding Reels in Goa | Reel Editing for Videographers";
const description =
  "Vertical wedding reels for destination and local Goan weddings, from ₹6,000. Reel editing for videographers and photographers from ₹2,500 per reel.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: "%s · Saltwater Studios" },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: site.name,
    title,
    description,
    locale: "en_IN",
    images: [{ url: "/og/home.png", width: 1200, height: 630, alt: "Saltwater Studios — wedding reels in Goa" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og/home.png"] },
  keywords: [
    "wedding reels Goa",
    "wedding reel videographer Goa",
    "destination wedding reels Goa",
    "wedding reel editor",
    "reel editing for videographers",
    "Instagram wedding reels",
    "Saltwater Studios",
  ],
  other: { "geo.region": "IN-GA", "geo.placename": "Goa" },
};

export const viewport: Viewport = { themeColor: "#081A26", colorScheme: "dark" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${display.variable} ${serif.variable} ${mono.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-sun-400 focus:px-4 focus:py-2 focus:text-sm focus:text-tide-950"
        >
          Skip to content
        </a>
        <Providers>
          <div aria-hidden className="grain" />
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <WhatsAppButton message="Hi Saltwater Studios, I'd like to ask about wedding reels. Date: , Venue: " />
        </Providers>
        <Analytics token={process.env.NEXT_PUBLIC_CF_BEACON_TOKEN} />
      </body>
    </html>
  );
}
