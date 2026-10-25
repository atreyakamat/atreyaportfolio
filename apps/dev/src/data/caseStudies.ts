/**
 * Case studies: real builds, written only from what each repository and live
 * site show. No invented metrics. `quote` stays null until the client gives one.
 *
 * Security note (inventory system): this is an internal tool. Do not add its
 * hosted URL, role design, schema names, accounts or any org data here.
 */

export interface CaseImage {
  src: string;
  alt: string;
  caption: string;
  /** "wide" fills the row; "tall" is a phone screenshot. */
  shape?: "wide" | "tall";
}

export interface CaseService {
  label: string;
  href: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  /** One-line hook used on cards and as the meta description base. */
  summary: string;
  client: string;
  location: string;
  /** Only when evident from the repository history. */
  year: string | null;
  kind: string;
  services: CaseService[];
  problem: string[];
  approach: { title: string; desc: string }[];
  built: { title: string; desc: string }[];
  /** Optional flow diagram (used when there are no screenshots). */
  flow?: string[];
  stack: string[];
  outcome: string[];
  images: CaseImage[];
  liveUrl: string | null;
  quote: { text: string; name: string; role: string } | null;
  seoTitle: string;
  seoDescription: string;
}

const SVC = {
  web: { label: "Websites & landing pages", href: "/services/website-development-goa/" },
  software: { label: "Custom software & internal tools", href: "/services/custom-software-development-goa/" },
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "beyond-temptation-cafe-website",
    title: "Beyond Temptation",
    summary: "A loud, fast café website for Mapusa that turns visitors into WhatsApp orders.",
    client: "Beyond Temptation café",
    location: "Mapusa, Goa",
    year: "2024–2026",
    kind: "Café website & landing page",
    services: [SVC.web],
    problem: [
      "Beyond Temptation is a café in Mapusa: burgers, pizza, loaded sandwiches, thick shakes and proper coffee. Its first website went up in 2024 as a starter build with a few pages and a gallery.",
      "Orders come in on WhatsApp, and people find the café on Instagram and Google. The new site had to make that path obvious: see the food, check if it is open, tap to order.",
    ],
    approach: [
      { title: "One source of truth", desc: "Hours, phone, address, ratings and the full menu live in two data files, so a price or timing change is one edit, not a hunt through pages." },
      { title: "Order-first layout", desc: "Every dish card, the hero and a sticky phone bar open WhatsApp with the order already typed." },
      { title: "A brand with a voice", desc: "Chocolate-and-yellow palette, sticker-style labels, huge type and copy that sounds like the counter, not a brochure." },
      { title: "Motion that stays fast", desc: "Smooth scrolling and scroll-linked animation, with interactive parts loaded only when they come into view." },
    ],
    built: [
      { title: "WhatsApp ordering everywhere", desc: "Tap any dish, the hero button or the sticky phone bar to open WhatsApp with a ready-made order message." },
      { title: "Live open / closed status", desc: "A pill computed in India time from the café's real hours: open now, closing time, or when it reopens." },
      { title: "The real menu, online", desc: "Around 80 dishes across 13 sections, transcribed from the printed menu with prices, plus bestsellers filterable by category." },
      { title: "Shake wall", desc: "A scroll-driven showcase of the café's shake range, grouped by type." },
      { title: "Real Google reviews", desc: "A draggable strip of real reviews next to the café's Google, Justdial and Zomato ratings." },
      { title: "Instagram reels", desc: "A strip of the café's own reels and collabs, embedded from Instagram." },
      { title: "Events booking", desc: "A booking form for birthdays and get-togethers that sends the request straight to WhatsApp." },
      { title: "Local SEO", desc: "Café structured data (address, phone, cuisine), a Google Maps link and embed, tap-to-call, and titles written for café searches in Mapusa." },
    ],
    stack: ["Astro", "React islands", "Tailwind CSS", "Framer Motion", "Lenis", "Netlify"],
    outcome: [
      "Live on Netlify. Rebuilt in October 2026, replacing the 2024 starter site.",
      "Ordering moved to one tap on every screen: no forms, no app, straight to the café's WhatsApp.",
      "Menu, hours and contact details now change in one place.",
    ],
    images: [
      { src: "/work/beyond-temptation/hero.webp", alt: "Beyond Temptation website hero: giant yellow wordmark on a chocolate background with sticker labels", caption: "The hero: price for two, hours and WhatsApp ordering above the fold.", shape: "wide" },
      { src: "/work/beyond-temptation/bestsellers.webp", alt: "Bestsellers section with category filter chips", caption: "Bestsellers with category filters. Every card orders on WhatsApp.", shape: "wide" },
      { src: "/work/beyond-temptation/mobile.webp", alt: "Beyond Temptation website on a phone", caption: "On phones: thumb-sized ordering button first.", shape: "tall" },
      { src: "/work/beyond-temptation/menu-cards.webp", alt: "Menu cards with prices and a dish marquee", caption: "Menu cards, a dish marquee and the start of the shake wall.", shape: "wide" },
      { src: "/work/beyond-temptation/reviews.webp", alt: "Real Google reviews shown as tilted cards with a 4.5 rating", caption: "Real Google reviews, shown as a draggable strip.", shape: "wide" },
    ],
    liveUrl: "https://beyondtemptation.netlify.app",
    quote: null,
    seoTitle: "Café Website in Mapusa, Goa: Beyond Temptation Case Study",
    seoDescription:
      "How I rebuilt the Beyond Temptation café website in Mapusa: WhatsApp ordering on every dish, live open status, real menu and reviews, and local SEO.",
  },
  {
    slug: "inventory-management-system",
    title: "Inventory & stock request system",
    summary: "An internal tool that gives a 10-person team one audited system for stock, requests and approvals.",
    client: "Internal tool for a 10-person team",
    location: "Private deployment",
    year: "2026",
    kind: "Custom internal software",
    services: [SVC.software],
    problem: [
      "A 10-person team needed to know what stock it had in each location, who had asked for which items, and who had signed them off.",
      "That meant one reliable place for stock across locations, a clear request process with approvals, and an honest record of every change, kept private and secure.",
    ],
    approach: [
      { title: "Model the real process", desc: "Mapped how requests actually move through the team, then built the workflow around those steps instead of a generic template." },
      { title: "Security in the database", desc: "Every rule is enforced by the database itself, not only hidden in the interface, so a crafted request cannot get around it." },
      { title: "Never overwrite stock", desc: "Stock is a ledger of movements, so every number can be traced back to who changed it and when." },
      { title: "Testable offline", desc: "A full offline copy runs on one machine with demo data, so changes are tested without touching real records." },
    ],
    built: [
      { title: "Stock across locations", desc: "Items, categories and locations with live totals, built from an append-only ledger of stock movements." },
      { title: "Low-stock alerts", desc: "Items below their threshold are flagged, based on the total across all locations." },
      { title: "Request workflow", desc: "Raise a request, have it reviewed, approved or rejected, then handed over, with the status visible to the person who asked." },
      { title: "Role-based access", desc: "Each person sees and does only what their role allows, with approval steps before stock leaves the store." },
      { title: "Two-factor sign-in", desc: "Authenticator-app codes are required for everyone. Accounts are created by invitation only." },
      { title: "Full audit log", desc: "Every change to stock, requests and accounts is recorded." },
      { title: "Encrypted nightly backups", desc: "An automated job backs up the data every night, encrypted." },
      { title: "Offline Docker version", desc: "The whole system, with seed data, runs locally in Docker for testing and demos." },
    ],
    flow: ["Raise request", "Review", "Approve", "Hand over", "Stock updated"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase (Postgres, Auth, row-level security)", "GitHub Actions", "Docker", "Netlify"],
    outcome: [
      "One system for stock, requests and approvals, with two-factor sign-in for everyone.",
      "Every stock change and approval now has a name and a time attached.",
      "A separate offline copy lets the team test changes on demo data first.",
    ],
    images: [],
    liveUrl: null,
    quote: null,
    seoTitle: "Custom Inventory Management System: Case Study",
    seoDescription:
      "How I built an inventory and stock request system for a 10-person team: stock across locations, approvals, two-factor sign-in, audit log and encrypted backups.",
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);

/** For sitemap.ts (wired by the sitemap owner). */
export const caseStudyUrls = caseStudies.map((c) => `/work/${c.slug}/`);
