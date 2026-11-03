import type { Metadata, Viewport } from "next";
import "./globals.css";
import { display, mono, serif } from "./fonts";
import { Analytics } from "@atreya/ui/Analytics";
import { Providers } from "@atreya/ui/Providers";
import { ScrollProgress } from "@atreya/ui/ScrollProgress";
import { WhatsAppButton } from "@atreya/ui/WhatsAppButton";
import { CommandPalette } from "@/components/CommandPalette";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { personalInfo } from "@/data/portfolio";

const title = "Website & Software Developer in Goa | Atreya Kamat";
const description =
  "Freelance website and custom software developer in Goa. Websites, web apps, internal tools and AI automation for businesses across North and South Goa.";

export const metadata: Metadata = {
  metadataBase: new URL(personalInfo.siteUrl),
  title: {
    default: title,
    template: "%s · Atreya Kamat",
  },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: personalInfo.siteUrl,
    siteName: "Atreya Kamat",
    title,
    description,
    locale: "en_IN",
    images: [{ url: "/og/home.png", width: 1200, height: 630, alt: "Atreya Kamat — website and software developer in Goa" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og/home.png"],
  },
  keywords: [
    "website developer in Goa",
    "web design Goa",
    "software developer Goa",
    "custom software development Goa",
    "web app development Goa",
    "AI automation Goa",
    "freelance developer Goa",
  ],
  authors: [{ name: "Atreya Kamat", url: personalInfo.siteUrl }],
  other: { "geo.region": "IN-GA", "geo.placename": "Goa" },
};

export const viewport: Viewport = {
  themeColor: "#070B1A",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${display.variable} ${serif.variable} ${mono.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-lemon-400 focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:text-navy-950"
        >
          Skip to main content
        </a>
        <Providers>
          <ScrollProgress />
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <CommandPalette />
          <WhatsAppButton message="Hi Atreya, I found you on atreyakamat.dev. I need help with: " />
        </Providers>
        <Analytics token={process.env.NEXT_PUBLIC_CF_BEACON_TOKEN} />
      </body>
    </html>
  );
}
