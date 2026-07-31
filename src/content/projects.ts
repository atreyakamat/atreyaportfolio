import type { Project, ProjectCategory, ProjectStatus } from './types';

const placeholder = (alt: string) => ({
  type: 'placeholder' as const,
  alt,
});

const stack = (label: string, items: string[]) => ({ label, items });

export const projects: Project[] = [
  {
    slug: 'tracknow',
    title: 'TrackNow',
    shortDescription:
      'A progressive web app with mobile-first workflows, offline support, real-time sync and push notifications.',
    fullDescription:
      'TrackNow is a full-stack PWA built for cross-platform use, with a backend designed around real-time data sync and optimized API endpoints.',
    category: 'Product',
    tags: ['PWA', 'Mobile-first', 'Realtime', 'Offline support'],
    year: '2026',
    status: 'shipped',
    role: ['Full-stack product engineer'],
    featured: true,
    featuredOrder: 1,
    cover: placeholder('Project media placeholder for TrackNow'),
    gallery: [],
    problem:
      'The product needed to serve a growing mobile-first user base while keeping key workflows available across devices and network conditions.',
    contribution: [
      'Built the full-stack PWA experience across frontend and backend concerns.',
      'Integrated real-time data sync, push notifications and offline support.',
      'Optimized API endpoints to support growing concurrent usage.',
    ],
    walkthrough: [
      {
        title: 'Mobile-first access',
        body: 'The experience is structured around app-like workflows that remain usable from a browser.',
      },
      {
        title: 'Realtime and offline behavior',
        body: 'Sync, notifications and offline support carry the product beyond a static dashboard.',
      },
    ],
    decisions: [
      {
        decision: 'Progressive web app delivery',
        why: 'A PWA keeps the product accessible across devices while supporting native-feeling behavior.',
        tradeoff: 'The interface has to respect browser constraints instead of assuming a fully native runtime.',
      },
    ],
    stack: [
      stack('App', ['React Native', 'Quasar']),
      stack('Backend', ['Node.js', 'PostgreSQL']),
    ],
    outcomes: ['Documented in the resume as currently serving 100+ active users.'],
    learnings: [
      'Mobile usability and reliability matter more than framework labels when people use a product repeatedly.',
    ],
    assetNeeds: ['Current app screenshots', 'Short walkthrough video', 'Public repository or demo link if available'],
  },
  {
    slug: 'clinicos',
    title: 'ClinicOS',
    shortDescription:
      'A patient CRM concept for clinics with automated follow-up, appointment scheduling and AI-assisted communication.',
    fullDescription:
      'ClinicOS focuses on reducing manual overhead for practitioners through structured patient workflows, role-based access and automated communication.',
    category: 'AI/Data',
    tags: ['CRM', 'AI workflows', 'Healthcare operations', 'Multi-tenant'],
    year: '2026',
    status: 'active',
    role: ['Product engineer', 'System designer'],
    featured: true,
    featuredOrder: 2,
    cover: placeholder('Project media placeholder for ClinicOS'),
    gallery: [],
    problem:
      'Clinic staff often lose time to repeated follow-ups, appointment coordination and fragmented patient communication.',
    contribution: [
      'Designed automated patient follow-up workflows and appointment scheduling flows.',
      'Planned a multi-tenant architecture with role-based access for doctors, staff and admins.',
      'Explored AI-driven communication patterns for reducing practitioner overhead.',
    ],
    walkthrough: [
      {
        title: 'Patient relationship layer',
        body: 'The product centers the follow-up workflow rather than treating patient records as static data.',
      },
      {
        title: 'Role-aware access',
        body: 'Doctors, staff and admins require different permissions and views of the same operational flow.',
      },
    ],
    decisions: [
      {
        decision: 'Workflow-first CRM structure',
        why: 'The useful product value is in reducing repeated coordination, not simply storing patient fields.',
      },
      {
        decision: 'Role-based access from the start',
        why: 'Clinical operations need clearer boundaries than a single shared admin dashboard.',
      },
    ],
    stack: [
      stack('Frontend', ['React']),
      stack('Backend', ['Node.js', 'PostgreSQL']),
      stack('AI', ['LLM-assisted communication']),
    ],
    outcomes: ['Active build described in the resume; production outcomes should be added after deployment.'],
    learnings: [
      'Sensitive operational tools need trust, permissions and auditability designed before visual polish.',
    ],
    assetNeeds: ['Workflow screenshots', 'Demo video without patient data', 'Architecture diagram once finalized'],
  },
  {
    slug: 'vistara-bi',
    title: 'Vistara BI',
    shortDescription:
      'An AI-powered business intelligence platform for SMEs that turns messy data into dashboards and conversational insight.',
    fullDescription:
      'Vistara BI targets teams that need useful metrics without a dedicated analyst, combining data cleaning, KPI detection, forecasting and conversational analysis.',
    category: 'AI/Data',
    tags: ['Business intelligence', 'LLM', 'Dashboards', 'Forecasting'],
    year: '2026',
    status: 'active',
    role: ['AI product engineer', 'Backend engineer'],
    featured: true,
    featuredOrder: 3,
    cover: placeholder('Project media placeholder for Vistara BI'),
    gallery: [],
    problem:
      'Small and medium enterprises often have useful data but not the analyst capacity to clean, query and interpret it.',
    contribution: [
      'Designed automated data cleaning and KPI detection flows.',
      'Built toward conversational insights through LLM-assisted analysis.',
      'Structured the product for interactive dashboards and forecasting support.',
    ],
    walkthrough: [
      {
        title: 'Dataset intake',
        body: 'The system starts by organizing domain context before presenting analytics.',
      },
      {
        title: 'Conversational insight',
        body: 'The LLM layer is used to ask business questions, not to replace data modeling discipline.',
      },
    ],
    decisions: [
      {
        decision: 'AI as an analysis layer',
        why: 'The product value is making business answers more accessible, while still grounding output in structured data.',
      },
    ],
    stack: [
      stack('Frontend', ['React']),
      stack('Backend', ['Python', 'FastAPI', 'PostgreSQL']),
      stack('AI', ['LLM workflows']),
    ],
    outcomes: ['Active product direction from the resume; verified launch outcomes are not yet documented.'],
    learnings: [
      'Business intelligence products have to earn trust by showing where answers come from.',
    ],
    assetNeeds: ['Dashboard screenshots', 'Safe sample dataset demo', 'Recorded conversational analysis walkthrough'],
  },
  {
    slug: 'attendance',
    title: 'AttenDance',
    shortDescription:
      'A proxy-resistant attendance system using Wi-Fi subnet validation, short-lived sessions and secure tokens.',
    fullDescription:
      'AttenDance replaces easily forwarded attendance flows with time-bound sessions, network validation and auditable role-based dashboards.',
    category: 'Systems/Tools',
    tags: ['Security', 'Attendance', 'JWT', 'PostgreSQL', 'Audit logs'],
    year: '2025',
    status: 'shipped',
    role: ['Backend engineer', 'Security workflow designer'],
    featured: true,
    featuredOrder: 4,
    cover: placeholder('Project media placeholder for AttenDance'),
    gallery: [],
    problem:
      'Proxy attendance can happen when students forward static attendance links or screenshots outside the intended classroom context.',
    contribution: [
      'Implemented Wi-Fi subnet validation with CIDR checks.',
      'Added 90-second time-bound sessions and one-time secure tokens.',
      'Shipped Student, Teacher and Admin dashboards with JWT auth, bcrypt hashing and auditable attendance logs.',
    ],
    walkthrough: [
      {
        title: 'Session creation',
        body: 'A teacher starts a short-lived attendance session that cannot be reused indefinitely.',
      },
      {
        title: 'Boundary validation',
        body: 'The attendance attempt is checked against the allowed network context and token state.',
      },
      {
        title: 'Audit trail',
        body: 'Role-based dashboards keep administrative oversight visible.',
      },
    ],
    decisions: [
      {
        decision: 'Subnet validation plus time-bound sessions',
        why: 'The combination addresses forwarded links without requiring invasive biometric capture.',
        tradeoff: 'Students need to be on the expected Wi-Fi network for the check to succeed.',
      },
      {
        decision: 'Auditable role-based dashboards',
        why: 'Attendance systems need explainable administration rather than opaque pass/fail states.',
      },
    ],
    stack: [
      stack('Backend', ['Node.js', 'PostgreSQL']),
      stack('Security', ['JWT', 'bcrypt', 'CIDR validation']),
    ],
    outcomes: ['Resume states the project blocked proxy attendance and shipped role-based dashboards.'],
    learnings: [
      'A simple physical/network invariant can be more appropriate than a heavier identity mechanism.',
    ],
    assetNeeds: ['Dashboard screenshots with private data removed', 'Architecture diagram', 'Demo recording'],
  },
  {
    slug: 'pulsewatch',
    title: 'PulseWatch',
    shortDescription:
      'A full-stack uptime monitor with configurable checks, response-time tracking, incident logs and email alerts.',
    fullDescription:
      'PulseWatch tracks site health over time through scheduled checks, uptime analytics and automated notification workflows.',
    category: 'Systems/Tools',
    tags: ['Uptime', 'Observability', 'Cron', 'PostgreSQL'],
    year: '2025',
    status: 'shipped',
    role: ['Full-stack engineer'],
    featured: true,
    featuredOrder: 5,
    cover: placeholder('Project media placeholder for PulseWatch'),
    gallery: [],
    problem:
      'Client-facing websites can degrade or fail quietly unless monitoring, incident history and alerting are built into the workflow.',
    contribution: [
      'Built configurable per-site checks with response-time tracking.',
      'Stored incident logs and 24h/7d/30d uptime analytics.',
      'Automated email alerting with PostgreSQL-backed scheduled workers.',
    ],
    walkthrough: [
      {
        title: 'Target configuration',
        body: 'Each monitored site can be checked on a repeatable schedule.',
      },
      {
        title: 'Incident history',
        body: 'Response times and uptime windows turn failures into inspectable records.',
      },
      {
        title: 'Alert workflow',
        body: 'Email alerts reduce reliance on manual checking.',
      },
    ],
    decisions: [
      {
        decision: 'Scheduled checks with persistent incident logs',
        why: 'Operational visibility depends on history, not just the current up/down state.',
      },
    ],
    stack: [
      stack('Frontend', ['React']),
      stack('Backend', ['Express', 'Drizzle ORM', 'PostgreSQL', 'node-cron']),
    ],
    outcomes: ['Built as a production-oriented monitoring tool for uptime, response time and alerting workflows.'],
    learnings: [
      'Monitoring should convert silence into visible action before users have to report a problem.',
    ],
    assetNeeds: ['Dashboard screenshots', 'Alert email example', 'Short uptime workflow video'],
  },
  {
    slug: 'echobridge',
    title: 'EchoBridge',
    shortDescription:
      'A Windows audio routing and FX mixer with multi-device routing, DSP effect chains and device sync compensation.',
    fullDescription:
      'EchoBridge explores low-latency desktop audio control with WASAPI loopback, NAudio and real-time effect chains.',
    category: 'Systems/Tools',
    tags: ['Audio', '.NET', 'WPF', 'WASAPI', 'DSP'],
    year: '2025',
    status: 'prototype',
    role: ['Desktop software engineer'],
    featured: false,
    cover: placeholder('Project media placeholder for EchoBridge'),
    gallery: [],
    problem:
      'Windows audio routing often lacks a simple product layer for sending different sources to different devices with real-time effects.',
    contribution: [
      'Engineered multi-device audio routing with independent real-time DSP effect chains.',
      'Used WASAPI loopback and NAudio for desktop audio capture and processing.',
      'Integrated per-device sync compensation and Spotify API integration.',
    ],
    walkthrough: [
      {
        title: 'Audio capture and routing',
        body: 'The mixer separates sources and outputs instead of treating the desktop as a single audio stream.',
      },
      {
        title: 'Effect chain control',
        body: 'Each route can carry its own real-time processing behavior.',
      },
    ],
    decisions: [
      {
        decision: 'Native Windows audio stack',
        why: 'WASAPI and WPF fit the product target more directly than a browser-only audio prototype.',
      },
    ],
    stack: [
      stack('Desktop', ['.NET 8', 'WPF']),
      stack('Audio', ['WASAPI', 'NAudio']),
      stack('Integrations', ['Spotify API']),
    ],
    outcomes: ['Engineered as a desktop audio routing and FX mixer prototype.'],
    learnings: ['Low-latency tools are shaped as much by runtime constraints as by interface ideas.'],
    assetNeeds: ['Desktop app screenshots', 'Audio routing diagram', 'Screen recording of mixer controls'],
  },
  {
    slug: 'stix-n-vibes',
    title: "Stix 'N' Vibes Platform",
    shortDescription:
      'A modular e-commerce platform for a sticker-design venture with material-aware cart logic and WhatsApp checkout.',
    fullDescription:
      "Stix 'N' Vibes combines a real venture with a custom product layer for pricing, cart behavior and customer checkout.",
    category: 'Commerce',
    tags: ['E-commerce', 'Founder', 'WhatsApp checkout', 'PostgreSQL'],
    year: '2024',
    status: 'active',
    role: ['Founder', 'Product owner', 'Full-stack builder'],
    featured: false,
    cover: placeholder("Project media placeholder for Stix 'N' Vibes"),
    gallery: [],
    problem:
      'Custom sticker orders need flexible pricing and low-friction checkout instead of a static product catalog.',
    contribution: [
      'Founded the sticker-design venture and owned client relationships, marketing and campus stall operations.',
      'Built a modular e-commerce platform with material-aware cart logic, dynamic pricing and WhatsApp checkout.',
      'Added popularity-based recommendations to support product discovery.',
    ],
    walkthrough: [
      {
        title: 'Material-aware pricing',
        body: 'The cart can represent different sticker materials and pricing behavior.',
      },
      {
        title: 'WhatsApp checkout',
        body: 'The checkout flow aligns with how local customers already communicate and place orders.',
      },
    ],
    decisions: [
      {
        decision: 'WhatsApp checkout',
        why: 'For a small local commerce operation, the familiar communication channel can reduce operational friction.',
      },
    ],
    stack: [
      stack('Frontend', ['React']),
      stack('Backend', ['Node.js', 'PostgreSQL']),
    ],
    outcomes: ['Operational venture serving individual consumers and restaurant-branding clients.'],
    learnings: [
      'Building for a real business forces product choices to answer revenue and operations, not just technical taste.',
    ],
    assetNeeds: ['Sticker/product photography', 'E-commerce screenshots', 'Checkout flow recording'],
  },
  {
    slug: 'timeflex',
    title: 'TimeFlex',
    shortDescription:
      'A school ERP direction covering timetabling, attendance, grading, fee management and policy administration.',
    category: 'Education',
    tags: ['ERP', 'School management', 'Scheduling'],
    year: '2026',
    status: 'active',
    role: ['Product engineer'],
    featured: false,
    cover: placeholder('Project media placeholder for TimeFlex'),
    gallery: [],
    problem:
      'Schools often operate across fragmented systems for scheduling, attendance, grades, fees and policy management.',
    contribution: [
      'Developing an all-in-one school management platform inspired by Odoo-style modularity.',
      'Structuring core modules for timetable, attendance, grading, fee and policy workflows.',
    ],
    walkthrough: [
      {
        title: 'Unified modules',
        body: 'The product direction groups common school operations into one system of record.',
      },
    ],
    decisions: [
      {
        decision: 'Modular ERP direction',
        why: 'School operations need connected modules without forcing every workflow into one generic screen.',
      },
    ],
    stack: [
      stack('Frontend', ['React']),
      stack('Backend', ['Node.js', 'PostgreSQL', 'Redis']),
    ],
    outcomes: ['Active development direction; verified deployment outcomes are not yet documented.'],
    learnings: ['Operational software gets complex quickly when every module touches shared people and calendars.'],
    assetNeeds: ['Module screenshots', 'Data model diagram', 'Demo recording'],
  },
  {
    slug: 'teamcord',
    title: 'TeamCord',
    shortDescription:
      'A lightweight team communication platform with real-time messaging, voice channels and threaded discussions.',
    category: 'Web',
    tags: ['Realtime', 'WebSockets', 'WebRTC', 'Team communication'],
    year: '2026',
    status: 'active',
    role: ['Full-stack engineer'],
    featured: false,
    cover: placeholder('Project media placeholder for TeamCord'),
    gallery: [],
    problem:
      'Small teams and agencies can need focused communication without the weight of broad community-first platforms.',
    contribution: [
      'Building real-time messaging, voice channels, threaded discussions and lightweight project coordination features.',
    ],
    walkthrough: [
      {
        title: 'Realtime rooms',
        body: 'Messaging and voice features are designed around small team coordination.',
      },
    ],
    decisions: [
      {
        decision: 'Realtime-first architecture',
        why: 'Communication products need instant feedback as a baseline interaction contract.',
      },
    ],
    stack: [
      stack('Frontend', ['React']),
      stack('Realtime', ['WebSockets', 'WebRTC']),
      stack('Backend', ['Node.js', 'Redis']),
    ],
    outcomes: ['Active build described in the resume; public launch outcomes are not yet documented.'],
    learnings: ['Realtime collaboration tools need restraint so coordination does not become noise.'],
    assetNeeds: ['Messaging screenshots', 'Voice-channel demo', 'Architecture diagram'],
  },
];

export const featuredProjects = [...projects]
  .filter((project) => project.featured)
  .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99));

export const projectCategories: ProjectCategory[] = Array.from(
  new Set(projects.map((project) => project.category)),
).sort();

export const statusLabels: Record<ProjectStatus, string> = {
  shipped: 'Shipped',
  active: 'Active',
  prototype: 'Prototype',
  archived: 'Archived',
};

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  return {
    previous: index > 0 ? projects[index - 1] : undefined,
    next: index >= 0 && index < projects.length - 1 ? projects[index + 1] : undefined,
  };
}
