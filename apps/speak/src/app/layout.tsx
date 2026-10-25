import type { Metadata, Viewport } from "next";
import "./globals.css";
import { display, mono, serif } from "./fonts";
import { Analytics } from "@atreya/ui/Analytics";
import { Providers } from "@atreya/ui/Providers";
import { ScrollProgress } from "@atreya/ui/ScrollProgress";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/data/speak";

const title = "Atreya Kamat — Speaker on AI tools & building software | Goa";
const description =
  "Talks and hands-on workshops on AI tools, prompting and shipping real software, by Goa-based software engineer Atreya Kamat. In person in Goa, online anywhere.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: "%s · Atreya Kamat Speaks" },
  description,
  alternates: { canonical: "/" },
  keywords: [
    "AI workshop Goa",
    "tech speaker Goa",
    "AI tools workshop for students",
    "prompt engineering workshop",
    "guest lecture software engineering Goa",
    "Atreya Kamat",
  ],
  authors: [{ name: "Atreya Kamat", url: site.devUrl }],
  openGraph: {
    type: "website",
    url: site.url,
    siteName: "Atreya Kamat — Speak",
    title,
    description,
    locale: "en_IN",
    images: [{ url: "/og/home.png", width: 1200, height: 630, alt: "Atreya Kamat — talks and workshops on building with AI" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og/home.png"] },
  other: { "geo.region": "IN-GA", "geo.placename": "Goa" },
};

export const viewport: Viewport = {
  themeColor: "#06114A",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${display.variable} ${serif.variable} ${mono.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-lemonade focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:text-cobalt-950"
        >
          Skip to main content
        </a>
        <Providers>
          <ScrollProgress className="bg-lemonade" />
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </Providers>
        <Analytics token={process.env.NEXT_PUBLIC_CF_BEACON_TOKEN} />
      </body>
    </html>
  );
}
