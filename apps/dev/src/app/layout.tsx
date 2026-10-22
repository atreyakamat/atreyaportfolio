import type { Metadata, Viewport } from "next";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/jetbrains-mono";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { personalInfo } from "@/data/portfolio";

const description =
  "Software engineer who turns messy workflows into useful products across frontend, backend, data, automation and AI.";

export const metadata: Metadata = {
  metadataBase: new URL(personalInfo.siteUrl),
  title: {
    default: "Atreya Kamat — Software Engineer",
    template: "%s · Atreya Kamat",
  },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: personalInfo.siteUrl,
    siteName: "Atreya Kamat",
    title: "Atreya Kamat — Software Engineer",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Atreya Kamat — Software Engineer",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#070B1F",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
        </Providers>
      </body>
    </html>
  );
}
