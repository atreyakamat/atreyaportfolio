/**
 * Blog posts for atreyakamat.dev, written as typed blocks (no markdown runtime).
 * Rules: no invented statistics, prices, client names or results.
 */

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; title?: string; text: string }
  | { type: "quote"; text: string };

export interface Post {
  slug: string;
  title: string;
  description: string;
  kicker: string;
  published: string; // ISO date
  service: { label: string; href: string };
  related?: { label: string; href: string }[];
  blocks: Block[];
}

export const posts: Post[] = [
  {
    slug: "website-cost-goa",
    title: "How much does a website cost in Goa? (2026 guide)",
    description:
      "What actually drives the cost of a website in Goa, the four ways to get one built, what you should get no matter what you pay, and how to get an honest quote.",
    kicker: "Websites · Pricing",
    published: "2026-10-25",
    service: { label: "Website development in Goa", href: "/services/website-development-goa/" },
    blocks: [
      {
        type: "p",
        text: "It is the first question every café owner, villa host and clinic in Goa asks me, and the honest answer is: it depends on a handful of things you can name. Once you know what they are, you can read any quote, compare it fairly, and spot the ones that are padding the bill or cutting corners.",
      },
      {
        type: "p",
        text: "This guide skips the fake price tables. A number without a scope is meaningless, and a website quoted in one line is usually missing half of what you need. Instead, here is what drives the cost, the four ways to get a site built, the things you should get whatever you pay, and how to ask for a quote that is actually comparable.",
      },
      { type: "h2", id: "what-drives-cost", text: "What actually drives the cost" },
      {
        type: "p",
        text: "Almost every website quote is built from the same seven ingredients. The more of them your site needs, and the more custom each one is, the more it costs.",
      },
      {
        type: "ol",
        items: [
          "Pages and structure. A one-page landing page is very different from a site with separate pages for rooms, menu, gallery, events and contact. Every page needs a design, content and testing on phones.",
          "Content. Who writes the copy and who supplies the photos? Good words and good photos are often the biggest difference between a site that gets enquiries and one that does not. If the developer writes your copy or arranges photography, that is real work and it should show up in the quote.",
          "Features. Bookings, table reservations, payments, a menu you can update, WhatsApp buttons, enquiry forms, multiple languages, Google Maps. Each one adds design, build and testing time. Payments and bookings add the most, because mistakes there cost you money.",
          "Editing it yourself (CMS). If you want to change prices, menus or photos without calling anyone, the site needs a content management system set up for you. That is extra setup, but it saves you money every month after launch.",
          "SEO and speed. Proper titles, descriptions, structured data, a sitemap, fast loading on mobile data and a link to your Google Business Profile. This is what helps people searching in Goa actually find you.",
          "Hosting and domain. Your .com or .in domain is a yearly fee. Hosting can be close to free for a simple, fast site, or a monthly bill for heavier setups. Ask what you will pay every year, not just on day one.",
          "Maintenance. Updates, fixes, small changes, seasonal offers. Some people want this handled; some only need a handover. Either is fine, as long as it is agreed upfront.",
        ],
      },
      {
        type: "callout",
        title: "The quick test",
        text: "If a quote does not say which of these seven are included, you cannot compare it with another quote. Ask for them line by line.",
      },
      { type: "h2", id: "four-options", text: "The four ways to get a website built" },
      { type: "h3", text: "1. Do it yourself with a website builder" },
      {
        type: "p",
        text: "Builders like Wix, Squarespace or a free Google Business Profile site are the cheapest way to get something online. They are fine for a very simple presence. The trade-offs: you spend your own time, templates look like everyone else's, you pay a monthly subscription for as long as the site exists, and moving away later is hard.",
      },
      { type: "h3", text: "2. A freelancer" },
      {
        type: "p",
        text: "One person designs and builds your site. The best freelancers are fast, direct and affordable, because you are not paying for an office or a sales team. The risk is quality varies a lot, so look at their live work and ask who will own the code and accounts.",
      },
      { type: "h3", text: "3. An agency" },
      {
        type: "p",
        text: "A team with designers, developers and account managers. Agencies make sense for larger projects with many moving parts, marketing campaigns, or when you need several people at once. You pay for the team and the process, so expect it to cost more than a freelancer for the same site.",
      },
      { type: "h3", text: "4. A custom build" },
      {
        type: "p",
        text: "Built from scratch around your business, usually because you need something a template cannot do well: a booking flow that matches how you really work, a dashboard for staff, or a site that has to load instantly on mobile data. It costs more upfront, but you are not renting a template forever and you own everything.",
      },
      { type: "h2", id: "what-you-should-get", text: "What you should get, whatever you pay" },
      {
        type: "p",
        text: "Whether you spend a little or a lot, these are not extras. If a quote is missing them, ask why.",
      },
      {
        type: "ul",
        items: [
          "A site that is fast and readable on a phone. Most of your visitors in Goa will open it on mobile, often on patchy data.",
          "A clear way to contact you: a WhatsApp button, a phone link, or a form that actually reaches your inbox.",
          "Your domain registered in your name, with the login in your hands. Not the developer's.",
          "Ownership of the code or the site account, so you can move to someone else any time.",
          "Basic SEO: a real title and description for every page, a sitemap, and your Google Business Profile linked.",
          "Simple analytics, so you can see how many people visit and where they come from.",
          "A short handover: what was built, where it is hosted, what it costs every year, and how to make basic changes.",
        ],
      },
      { type: "h2", id: "red-flags", text: "Red flags in a website quote" },
      {
        type: "ul",
        items: [
          "The domain or hosting will be registered in the developer's name.",
          "A single total with no breakdown of pages, features and content.",
          "No mention of mobile, speed or SEO at all.",
          "You cannot see any live websites they have built.",
          "Monthly fees that are not explained, or that you cannot cancel.",
          "Promises of guaranteed first-page Google rankings. Nobody can guarantee that.",
        ],
      },
      { type: "h2", id: "honest-quote", text: "How to get an honest quote" },
      {
        type: "p",
        text: "You do not need a long document. Two lines are enough to start a useful conversation: what is not working today, and who the website is for. For example: \"Guests keep asking for our menu on Instagram and we miss bookings at night. The site is for tourists and locals in North Goa.\"",
      },
      {
        type: "p",
        text: "With that, a good developer can ask the right follow-up questions and send you a written scope: the pages, the features, who supplies content, what it costs to build and what it costs every year after. That written scope is what you compare, not the headline number.",
      },
      {
        type: "callout",
        title: "How I work",
        text: "I build websites for businesses across Goa. You get a written scope and a clear quote before anything starts, and the domain, code and accounts are set up in your name.",
      },
    ],
  },
  {
    slug: "outgrown-excel",
    title: "5 signs your business has outgrown Excel",
    description:
      "Spreadsheets are where most small businesses start. Here are five signs yours has become a risk, and three honest options for what to do next.",
    kicker: "Operations · Software",
    published: "2026-10-25",
    service: { label: "Custom software in Goa", href: "/services/custom-software-development-goa/" },
    blocks: [
      {
        type: "p",
        text: "Excel and Google Sheets are brilliant. Almost every business I work with started on one, and for a long time that was the right call: free, flexible, and everyone already knows how to use it. The problem is that spreadsheets grow quietly. One day the sheet that tracked ten orders is tracking hundreds, three people edit it at once, and nobody is quite sure which version is correct.",
      },
      {
        type: "p",
        text: "Outgrowing a spreadsheet does not automatically mean you need custom software. Sometimes a cleaner sheet is the answer. But if you recognise yourself in the signs below, it is worth thinking about what comes next.",
      },
      { type: "h2", id: "sign-1", text: "1. One person is the only one who understands the sheet" },
      {
        type: "p",
        text: "There is a tab, a formula or a colour code that only one person really understands. When they are on leave, things slow down or go wrong. That is not a spreadsheet anymore. It is a single point of failure for your business.",
      },
      { type: "h2", id: "sign-2", text: "2. You type the same information in more than one place" },
      {
        type: "p",
        text: "An order comes in on WhatsApp, gets typed into a sheet, then into an invoice, then into a stock list. Every copy is a chance for a typo, and every typo turns into a missed delivery, a wrong bill or an awkward phone call. If the same customer or item lives in three places, your data is already drifting apart.",
      },
      { type: "h2", id: "sign-3", text: "3. Nobody can answer \"how are we doing?\" without a phone call" },
      {
        type: "p",
        text: "How much stock is left? Which leads are waiting for a reply? What did we sell this week? If answering takes someone opening four files and adding things up, you are flying blind most of the time. Good systems answer these questions on a screen, any time, on any phone.",
      },
      { type: "h2", id: "sign-4", text: "4. Mistakes are found by customers, not by you" },
      {
        type: "p",
        text: "Double-booked rooms. An item sold that was not in stock. A follow-up that never happened. Spreadsheets do not warn you when something is wrong, so problems surface when a customer complains. A proper system can stop the mistake from happening in the first place: no double bookings, alerts before stock runs out, a reminder when a lead goes quiet.",
      },
      { type: "h2", id: "sign-5", text: "5. You are scared to touch it" },
      {
        type: "p",
        text: "The sheet is slow, it breaks when someone sorts the wrong column, and there is a copy called \"FINAL v3 (use this one)\". If the team is nervous about editing the thing that runs the business, it is time to change something.",
      },
      { type: "h2", id: "what-next", text: "What to do next: three honest options" },
      { type: "h3", text: "Option 1: Fix the spreadsheet" },
      {
        type: "p",
        text: "If you only recognise one or two signs, a cleanup may be enough. Lock the formula columns, use dropdowns instead of free typing, split one giant sheet into clear tabs, and give each person a defined job in it. This costs very little and buys time.",
      },
      { type: "h3", text: "Option 2: Move to an off-the-shelf tool" },
      {
        type: "p",
        text: "For common jobs like accounting, invoicing, appointment booking or a simple CRM, there are good ready-made tools. If one fits how you work with small compromises, use it. It is usually the fastest and cheapest route, and I will tell you so.",
      },
      { type: "h3", text: "Option 3: Build a system around your process" },
      {
        type: "p",
        text: "Custom software makes sense when your process is what makes you different, or when you are paying for several tools that still do not talk to each other. A focused web app can take the work your team does in sheets and chats and put it in one place: stock across locations, orders, leads, bookings, with the right people seeing the right screens and the numbers always up to date.",
      },
      {
        type: "callout",
        title: "Start small",
        text: "The best first version is not everything. Pick the one sheet that causes the most pain, replace that, and let the team use it for real before adding more.",
      },
      { type: "h2", id: "what-good-looks-like", text: "What a proper system gives you that a sheet cannot" },
      {
        type: "ul",
        items: [
          "One source of truth. Every customer, order or item lives in one place, so there is no \"which file is right?\"",
          "The right access for each person. Staff see and change only what they need; the owner sees everything.",
          "A history of changes. You can see who changed what and when, instead of guessing.",
          "Rules that prevent mistakes. A room cannot be booked twice; an order cannot go out for stock you do not have.",
          "Alerts. Low stock, an overdue payment or a lead nobody has called back shows up before it becomes a problem.",
          "It works on a phone. Staff on the floor, in the kitchen or on the road can update things as they happen.",
          "Reports without the copy-paste. This week's numbers are a screen away, not an afternoon of adding up tabs.",
        ],
      },
      { type: "h2", id: "common-worries", text: "Common worries, answered" },
      { type: "h3", text: "\"My team is used to Excel. Will they actually use something new?\"" },
      {
        type: "p",
        text: "They will if it is simpler than what they do today. That is the bar. A good system is built around the steps your team already follows, uses their words for things, and removes work rather than adding it. Involving one or two people from the team in the early versions helps more than any training session.",
      },
      { type: "h3", text: "\"What happens to all our old data?\"" },
      {
        type: "p",
        text: "It comes with you. Moving the existing sheets into the new system is planned from the start, including cleaning up duplicates and odd formats along the way. You should never have to start from an empty screen.",
      },
      { type: "h3", text: "\"Is this only for big companies?\"" },
      {
        type: "p",
        text: "No. Small teams often feel spreadsheet pain the most, because there is no spare person to double-check everything. A focused tool for five or ten people can be small, quick to build and cheap to run.",
      },
      { type: "h2", id: "how-to-start", text: "How to start" },
      {
        type: "ol",
        items: [
          "Write down the three things that go wrong most often today.",
          "List who touches the sheet and what each person needs to see or change.",
          "Note what must never happen: a double booking, a wrong bill, running out of a key item.",
        ],
      },
      {
        type: "p",
        text: "That list is a better starting point than any feature wish-list, because it describes the problem, not a solution. Bring it to a short call and we can work out together whether you need a cleaner sheet, a ready-made tool, or something built for you.",
      },
    ],
  },
  {
    slug: "custom-vs-off-the-shelf",
    title: "Custom software vs off-the-shelf: an honest guide for small teams",
    description:
      "A plain-language framework for deciding between ready-made software and a custom build, what each really costs over time, and when you should not build custom at all.",
    kicker: "Software · Decisions",
    published: "2026-10-25",
    service: { label: "Custom software in Goa", href: "/services/custom-software-development-goa/" },
    related: [{ label: "AI & automation in Goa", href: "/services/ai-automation-goa/" }],
    blocks: [
      {
        type: "p",
        text: "I build custom software for a living, so you might expect me to tell you to build custom. Often I tell people the opposite. The right choice depends on how your business works, how many people use the tool, and how much your process is part of what makes you good. This guide is the framework I use with every small team that asks.",
      },
      { type: "h2", id: "the-short-answer", text: "The short answer" },
      {
        type: "p",
        text: "Use off-the-shelf software for jobs that every business does the same way. Build custom for the jobs that make your business different, or where the gaps between your tools are costing you real time and money.",
      },
      { type: "h2", id: "off-the-shelf", text: "When off-the-shelf is the right call" },
      {
        type: "ul",
        items: [
          "The job is standard: accounting, payroll, email, basic invoicing, simple appointment booking.",
          "A tool already fits how you work with only small compromises.",
          "You need it working this week, not next month.",
          "Your team is small and the process is still changing every few weeks.",
          "You do not want to think about hosting, updates or security at all.",
        ],
      },
      {
        type: "p",
        text: "In these cases a ready-made tool is faster and usually cheaper. You get a product that thousands of other businesses have already tested. Take it, set it up properly, and spend your energy elsewhere.",
      },
      { type: "h2", id: "custom", text: "When custom is worth it" },
      {
        type: "ul",
        items: [
          "Your process is unusual, and bending it to fit a generic tool would make your team slower.",
          "You are paying for several tools that do not talk to each other, and someone copies data between them by hand.",
          "Per-user subscription fees keep growing as the team grows.",
          "You need a specific workflow: a multi-step approval, stock across several locations, a booking rule that no tool supports.",
          "The data matters a lot to you and you want it in your own database, under your control.",
        ],
      },
      { type: "h2", id: "framework", text: "A quick decision framework" },
      { type: "p", text: "Score each question honestly. The more \"yes\" answers you have, the stronger the case for custom." },
      {
        type: "ol",
        items: [
          "Is this process part of what makes customers choose you?",
          "Have you tried at least one ready-made tool and found real gaps, not just small annoyances?",
          "Does someone spend hours every week copying data between systems?",
          "Will more than a handful of people use it every day?",
          "Do you expect to rely on this process for years, not months?",
          "Do you need the data in one place to make decisions?",
        ],
      },
      {
        type: "callout",
        title: "Rule of thumb",
        text: "Mostly \"no\": buy a tool. A mix: start with a tool and automate the gaps. Mostly \"yes\": a focused custom build is likely worth it.",
      },
      { type: "h2", id: "costs-over-time", text: "How the costs compare over time" },
      {
        type: "p",
        text: "Off-the-shelf tools are cheap to start and cost you every month for as long as you use them, usually per user. As the team grows, so does the bill, and you pay for features you never touch. You also pay in time: workarounds, copy-pasting and training people around the tool's limits.",
      },
      {
        type: "p",
        text: "Custom software costs more upfront, because someone has to design and build it. After launch, running costs can be small, mainly hosting and occasional improvements, and they do not grow with every new person you hire. The real question is not which is cheaper on day one, but which costs less over the years you will use it, including your team's time.",
      },
      { type: "h2", id: "middle-path", text: "The middle path most teams miss" },
      {
        type: "p",
        text: "It is rarely all or nothing. Many small teams get the best result by keeping good ready-made tools for standard jobs and adding small pieces of custom work around them: an automation that moves data between two tools, a dashboard that pulls numbers together, or a document reader that turns invoices and forms into clean data instead of manual typing. That is often where AI and automation pay off fastest.",
      },
      { type: "h2", id: "questions-before-building", text: "Questions to ask before anyone writes code" },
      {
        type: "p",
        text: "Whether you buy or build, these questions save money because they force clarity before work starts. Write the answers down; any developer worth hiring will want to see them.",
      },
      {
        type: "ol",
        items: [
          "Who will use it every day, and what is each person trying to get done?",
          "What is the one problem that, if solved, would make the biggest difference this month?",
          "Where does the data come from today, and where does it need to go?",
          "What must never happen? A double booking, a wrong bill, a lost lead?",
          "Who owns the code, the hosting and the data once it is built?",
          "What happens after launch: who fixes things, and how are changes requested?",
        ],
      },
      { type: "h2", id: "first-version", text: "What a sensible first version looks like" },
      {
        type: "p",
        text: "The most common mistake is trying to build everything at once. A good first version does one job end to end, for the people who feel the pain most. For a shop, that might be stock across two locations with low-stock alerts. For a services team, a single place where every enquiry is logged, assigned and followed up.",
      },
      {
        type: "p",
        text: "Your team should be clicking a working version early, on a private link, not waiting for a big reveal. Their feedback in the first weeks is worth more than any amount of planning, and it is far cheaper to change direction before the second feature than after the tenth.",
      },
      {
        type: "callout",
        title: "Ownership matters",
        text: "If you pay for custom software, the code, the database and the hosting accounts should be in your name, with a handover document. Otherwise you have not bought software, you have rented a dependency.",
      },
      { type: "h2", id: "when-not-to-build", text: "When I would tell you not to build custom" },
      {
        type: "ul",
        items: [
          "You have not tried any existing tool yet.",
          "The process is still changing every week. Settle it first, then build.",
          "Nobody on your side has time to answer questions and test early versions.",
          "The only reason is that it would be nice to have your own app.",
        ],
      },
      {
        type: "p",
        text: "A good developer should be willing to say no. If a ready-made tool will do, I will point you to it. If it will not, we start with the smallest version that fixes the most painful problem, put it in front of your team, and grow it from there.",
      },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

/** Word count across all text in a post, used for reading time. */
export function wordCount(post: Post): number {
  const text = post.blocks
    .map((b) => {
      if (b.type === "ul" || b.type === "ol") return b.items.join(" ");
      if (b.type === "callout") return `${b.title ?? ""} ${b.text}`;
      return b.text;
    })
    .join(" ");
  return text.split(/\s+/).filter(Boolean).length;
}

/** Minutes to read at about 220 words per minute, minimum 1. */
export const readingMinutes = (post: Post) => Math.max(1, Math.round(wordCount(post) / 220));

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
