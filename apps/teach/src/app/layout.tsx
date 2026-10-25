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
import { site } from "@/data/teach";

const title = "Computer Science & Coding Tuition in Goa | Atreya Kamat";
const description =
  "1:1 and small-batch tuition in Goa for school computer science (Class 8–12), college CS and engineering, coding from zero, and AI tools workshops. Taught by a working software engineer.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: "%s · Atreya Kamat" },
  description,
  alternates: { canonical: "/" },
  keywords: [
    "computer science tuition Goa",
    "coding classes Goa",
    "programming tutor Goa",
    "Python classes Goa",
    "engineering tuition Goa",
    "AI workshop Goa",
  ],
  authors: [{ name: "Atreya Kamat", url: "https://atreyakamat.dev" }],
  openGraph: {
    type: "website",
    url: site.url,
    siteName: "Atreya Kamat — Teach",
    title,
    description,
    locale: "en_IN",
    images: [{ url: "/og/home.png", width: 1200, height: 630, alt: "Coding and computer science tuition in Goa with Atreya Kamat" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og/home.png"] },
  other: { "geo.region": "IN-GA", "geo.placename": "Goa" },
};

export const viewport: Viewport = {
  themeColor: "#FBFAF4",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-ink-navy focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:text-marker"
        >
          Skip to main content
        </a>
        <Providers>
          <ScrollProgress className="bg-ink-navy" />
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
