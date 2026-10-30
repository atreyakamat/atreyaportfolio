import type { Metadata, Viewport } from "next";
import "./globals.css";
import { display, mono, serif } from "./fonts";
import { Analytics } from "@atreya/ui/Analytics";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: "%s · Atreya Kamat",
  },
  description: site.description,
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": `${site.url}/feed.xml` },
  },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: `${site.name} — blog`,
    title: site.title,
    description: site.description,
    locale: site.locale,
    images: [{ url: "/og/blog.png", width: 1200, height: 630, alt: site.title }],
  },
  twitter: { card: "summary_large_image", title: site.title, description: site.description, images: ["/og/blog.png"] },
  authors: [{ name: site.author, url: site.mainSite }],
  other: { "geo.region": "IN-GA", "geo.placename": "Goa" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5F1E8" },
    { media: "(prefers-color-scheme: dark)", color: "#070B1A" },
  ],
};

/*
  Runs before first paint so the saved theme is applied with no flash.
  Falls back to the system setting, then to paper.
*/
const themeScript = `(function(){try{var t=localStorage.getItem("ak-theme");if(!t)t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme="light"}})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" data-theme="light" className={`${display.variable} ${serif.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="alternate" type="application/rss+xml" title={`${site.name} — blog`} href="/feed.xml" />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:text-[#11162e]"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Analytics token={process.env.NEXT_PUBLIC_CF_BEACON_TOKEN} />
      </body>
    </html>
  );
}
