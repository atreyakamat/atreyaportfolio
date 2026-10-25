/**
 * Service pages: written for people in Goa searching for software help.
 * Copy is plain-language and makes no claims about prices, timelines or
 * results that have not been agreed.
 */

export interface Faq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  code: string;
  name: string;
  short: string;
  /** <title> — primary keyword first, under ~60 chars */
  seoTitle: string;
  /** meta description — under ~155 chars */
  seoDescription: string;
  h1: string;
  h1Accent: string;
  intro: string;
  signs: string[];
  builds: { title: string; desc: string }[];
  forWho: string[];
  faqs: Faq[];
}

export const goaAreas = ["Panaji", "Porvorim", "Mapusa", "Margao", "Vasco da Gama", "Ponda", "Calangute", "Candolim"];

export const services: Service[] = [
  {
    slug: "website-development-goa",
    code: "S/01",
    name: "Websites & landing pages",
    short: "Fast, sharp websites with copy that says one thing clearly and a button people actually press.",
    seoTitle: "Website Developer in Goa | Websites & Landing Pages",
    seoDescription:
      "Website design and development in Goa for cafés, villas, clinics, shops and startups. Fast, SEO-ready sites built to bring in enquiries.",
    h1: "Websites for Goa businesses that",
    h1Accent: "bring in enquiries.",
    intro:
      "A website is not a brochure. It is the first salesperson most of your customers meet. I design and build fast, mobile-first sites for businesses across Goa, with clear copy, local SEO and enquiry buttons that work, so people who find you on Google actually get in touch.",
    signs: [
      "Customers find you on Instagram but there is nowhere to book or enquire properly",
      "Your current site is slow, outdated or broken on phones",
      "You do not show up when people search for what you do in Goa",
      "Every enquiry still comes through scattered DMs and calls",
    ],
    builds: [
      { title: "Business websites", desc: "Multi-page sites for cafés, restaurants, villas, clinics and services, with menus, galleries and maps." },
      { title: "Landing pages", desc: "One page, one goal: launches, events, offers and campaigns built to convert visitors into leads." },
      { title: "Local SEO setup", desc: "Page titles, structured data, sitemap and speed so Google understands who you are and where you are." },
      { title: "Redesigns", desc: "Your existing site rebuilt to be faster, clearer and easier for customers to act on." },
    ],
    forWho: ["Cafés & restaurants", "Villas, homestays & hotels", "Clinics & studios", "Shops & local brands", "Startups & founders"],
    faqs: [
      {
        q: "How much does a website cost in Goa?",
        a: "It depends on the number of pages, features and content. After a short call I send a written scope and a clear quote, so you know the full cost before any work starts.",
      },
      {
        q: "Will my website show up on Google?",
        a: "Every site ships with the technical SEO basics: fast loading, proper titles and descriptions, structured data, a sitemap and mobile-first layouts. Ranking also depends on your Google Business Profile, reviews and content, and I will show you what to do there.",
      },
      {
        q: "Can you redesign my existing website?",
        a: "Yes. I review what you have, keep what works, and rebuild the rest so it is faster and easier for customers to use.",
      },
      {
        q: "Do I own the website?",
        a: "Yes. The code, domain and hosting accounts are set up in your name. You are never locked in.",
      },
    ],
  },
  {
    slug: "custom-software-development-goa",
    code: "S/02",
    name: "Custom software & internal tools",
    short: "Dashboards, trackers, CRMs and inventory systems that replace the spreadsheet everyone is afraid to touch.",
    seoTitle: "Custom Software Development in Goa | Web Apps & Tools",
    seoDescription:
      "Custom software, web apps and internal tools for Goa businesses: inventory, CRM, bookings, dashboards. Built around how your team really works.",
    h1: "Custom software for Goa businesses",
    h1Accent: "outgrowing spreadsheets.",
    intro:
      "When the business runs on Excel sheets, WhatsApp groups and memory, things slip: stock runs out, leads go cold, staff do the same work twice. I build web apps and internal tools around how your team actually works, so the whole operation runs from one reliable system.",
    signs: [
      "Critical data lives in one person's spreadsheet",
      "You re-type the same information into three different places",
      "Nobody can tell you today's numbers without a phone call",
      "Off-the-shelf software almost fits, but not quite",
    ],
    builds: [
      { title: "Inventory & stock systems", desc: "Track items, orders and movement across locations, with alerts before you run out." },
      { title: "CRMs & lead trackers", desc: "Every enquiry captured, assigned and followed up, instead of lost in a chat thread." },
      { title: "Booking & operations tools", desc: "Schedules, bookings and staff workflows in one place, built for your exact process." },
      { title: "Dashboards & reports", desc: "Your key numbers live, on any device, without waiting for someone to compile them." },
    ],
    forWho: ["Hospitality & tourism operators", "Retail & distribution", "Real estate", "Clinics & labs", "Small teams of 5–50"],
    faqs: [
      {
        q: "Why custom software instead of an off-the-shelf tool?",
        a: "If a ready-made tool fits, I will tell you to use it. Custom software makes sense when your process is what makes you different, or when you are paying for five tools that still do not talk to each other.",
      },
      {
        q: "Can it work on phones?",
        a: "Yes. The tools I build are web apps that work on phones, tablets and laptops, so staff can use them on the floor, not just at a desk.",
      },
      {
        q: "What happens to my existing data?",
        a: "We plan the move from your spreadsheets or old system during the spec stage, so your history comes with you.",
      },
      {
        q: "Who maintains it after launch?",
        a: "You get a handover document and full access. I can also keep improving and supporting it on an agreed basis.",
      },
    ],
  },
  {
    slug: "ai-automation-goa",
    code: "S/03",
    name: "AI & automation",
    short: "Document parsing, summaries and data pipelines. The boring, repetitive work, done by software.",
    seoTitle: "AI & Business Automation in Goa | Workflow Automation",
    seoDescription:
      "Practical AI and automation for Goa businesses: document processing, OCR, AI assistants and automated reports that save your team hours.",
    h1: "Practical AI that gives your team",
    h1Accent: "hours back.",
    intro:
      "Not hype, just less admin. I connect your forms, documents and data so the repetitive work happens automatically: invoices read themselves, reports arrive on time, and your team spends its day on customers instead of copy-paste.",
    signs: [
      "Someone spends hours typing data out of PDFs, bills or photos",
      "The same report is rebuilt by hand every week",
      "Questions about your own documents take ages to answer",
      "You know AI could help but not where to start",
    ],
    builds: [
      { title: "Document processing & OCR", desc: "Read invoices, forms and receipts automatically and push the data where it belongs." },
      { title: "AI assistants", desc: "Assistants that answer questions from your own documents and data, privately." },
      { title: "Automated reports", desc: "Data pulled, cleaned and summarised on a schedule, delivered to your inbox." },
      { title: "Workflow automation", desc: "Connect the tools you already use so tasks move without manual handoffs." },
    ],
    forWho: ["Back offices & accounts teams", "Logistics & shipping", "Clinics & labs", "Agencies", "Any team drowning in admin"],
    faqs: [
      {
        q: "Is my business data safe with AI?",
        a: "Where privacy matters, I use models that can run on your own infrastructure, so sensitive documents never leave your control. We decide this together in the spec stage.",
      },
      {
        q: "Do I need a big budget to start with automation?",
        a: "No. The best starting point is usually one painful, repetitive task. We automate that first, measure the time saved, then decide what is next.",
      },
      {
        q: "Will automation replace my staff?",
        a: "The goal is to remove the copy-paste, not the people. Your team gets time back for the work that actually needs a human.",
      },
    ],
  },
];

/** General FAQs shown on the home page (and marked up as FAQPage). */
export const homeFaqs: Faq[] = [
  {
    q: "Are you based in Goa?",
    a: "Yes. I am a software engineer based in Goa, India, working with businesses across North and South Goa, and with clients elsewhere remotely.",
  },
  {
    q: "What kind of software projects do you take on?",
    a: "Websites and landing pages, custom web apps and internal tools such as inventory, CRM and booking systems, and AI and automation for repetitive admin work.",
  },
  {
    q: "How do projects start?",
    a: "With a short brief: what is broken, who it is for and when you need it. I reply personally with a scoped plan and a clear quote, and tell you honestly if I am not the right fit.",
  },
  {
    q: "Do I own what you build?",
    a: "Yes. Code, accounts and domain are set up in your name, with a handover document, so you are never locked in.",
  },
  {
    q: "Can you work with an existing website or system?",
    a: "Yes. I can fix, extend or rebuild what you already have, and plan the move of your existing data.",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
