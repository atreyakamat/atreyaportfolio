import type { Metadata, Viewport } from "next";
import "./globals.css";
import { display, mono, serif } from "./fonts";
import { Analytics } from "@atreya/ui/Analytics";
import { Providers } from "@atreya/ui/Providers";
import { ScrollProgress } from "@atreya/ui/ScrollProgress";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/data/create";

const title = "atreya.mp4 — Tech content creator from Goa | Brand collaborations";
const description =
  "atreya.mp4 by Atreya Kamat: short, useful tech reels on PC fixes, free tools, Linux and AI. Open to brand collaborations: dedicated reels, integrations, stories and UGC.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: "%s · atreya.mp4" },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: "atreya.mp4",
    title,
    description,
    locale: "en_IN",
    images: [{ url: "/og/home.png", width: 1200, height: 630, alt: "atreya.mp4 — reels, brands, stickers and web by Atreya Kamat" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og/home.png"] },
  keywords: ["atreya.mp4", "tech creator India", "tech influencer Goa", "brand collaboration", "UGC creator", "tech reels", "Atreya Kamat"],
  authors: [{ name: "Atreya Kamat", url: "https://atreyakamat.dev" }],
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${display.variable} ${serif.variable} ${mono.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-acid focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:text-ink"
        >
          Skip to main content
        </a>
        <Providers>
          <ScrollProgress className="bg-acid" />
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </Providers>
        <Analytics token={process.env.NEXT_PUBLIC_CF_BEACON_TOKEN} />
      </body>
    </html>
  );
}
