import type { Metadata, Viewport } from "next";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/jetbrains-mono";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "./globals.css";
import { Providers } from "@atreya/ui/Providers";
import { ScrollProgress } from "@atreya/ui/ScrollProgress";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/data/create";

const title = "atreya.mp4 — Reels, brands, stickers & creative web by Atreya Kamat | Goa";
const description =
  "Creative work by Atreya Kamat in Goa: the Stix N Vibes sticker brand, art drawn in code, websites built as craft, and reel editing for brands.";

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
  keywords: ["atreya.mp4", "creative developer Goa", "reel editor Goa", "sticker brand Goa", "creative coding", "Stix N Vibes", "Atreya Kamat"],
  authors: [{ name: "Atreya Kamat", url: "https://atreyakamat.dev" }],
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
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
      </body>
    </html>
  );
}
