export interface ProofStat {
  value: string;
  label: string;
  isAccent?: boolean;
}

export interface ApproachStep {
  num: string;
  title: string;
  desc: string;
}

export interface ProjectTriad {
  problem: string;
  build: string;
  outcome: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  number: string;
  category: string;
  subcategory?: string;
  tag?: string;
  title: string;
  triad: ProjectTriad;
  stack: string;
  image: string;
  imageAlt: string;
  liveUrl: string | null;
  repoUrl: string | null;
  overview: string;
  keyFeatures: string[];
  architecture: string[];
  isFeatured: boolean;
}

// Backward compatibility aliases
export type FeaturedProject = ProjectItem;
export interface ArchiveProject {
  id?: string;
  slug: string;
  title: string;
  desc: string;
  stack: string;
  liveUrl: string | null;
  repoUrl: string | null;
}

export interface CapabilityGroup {
  kicker: string;
  title: string;
  desc: string;
  items: string[];
}

export interface ExperienceEntry {
  period: string;
  company: string;
  role: string;
  isAccentRole?: boolean;
  desc: string;
}

export interface EducationEntry {
  degree: string;
  period: string;
  institution: string;
  specialization?: string;
}

export interface NavLink {
  name: string;
  href: string;
}

export const personalInfo = {
  name: "ATREYA KAMAT",
  title: "SOFTWARE ENGINEER",
  kicker: "FULL-STACK ENGINEERING",
  headlinePrefix: "I build software to solve ",
  headlineHighlight: "real problems",
  headlineSuffix: ".",
  bio: "I work across frontend, backend, data, automation and AI to turn messy workflows into useful products.",
  location: "GOA, INDIA",
  locationShort: "GOA, IN",
  statusShort: "OPEN TO ROLES · GOA, IN",
  statusBanner: "AVAILABLE FOR PRODUCT ENGINEERING",
  email: "atkamat1204@gmail.com",
  githubUrl: "https://github.com/atreyakamat",
  linkedinUrl: "https://linkedin.com/in/atreya-kamat",
  resumeUrl: "/atreya_kamat_resume.pdf",
  siteUrl: "https://atreyakamat.dev",
};

export const navLinks: NavLink[] = [
  { name: "WORK", href: "/#selected-work" },
  { name: "APPROACH", href: "/#methodology" },
  { name: "CAPABILITIES", href: "/#capabilities" },
  { name: "EXPERIENCE", href: "/#experience" },
  { name: "ABOUT", href: "/#about" },
  { name: "CONTACT", href: "/#contact" },
];

export const proofStats: ProofStat[] = [
  { value: "100+", label: "Users on Track.now" },
  { value: "SPARKPLUS", label: "Platform Monitoring" },
  { value: "GOOGLE", label: "TensorFlow & CV" },
  { value: "AI / ML", label: "Honours Degree", isAccent: true },
];

export const approachSteps: ApproachStep[] = [
  {
    num: "01",
    title: "UNDERSTAND",
    desc: "Find the real problem, constraints, and workflow.",
  },
  {
    num: "02",
    title: "DESIGN",
    desc: "Break the problem into a practical product and system.",
  },
  {
    num: "03",
    title: "BUILD",
    desc: "Implement the software required to make it work.",
  },
  {
    num: "04",
    title: "IMPROVE",
    desc: "Test, measure, learn, and refine.",
  },
];

export const trackNowProject: ProjectItem = {
  id: "tracknow",
  slug: "tracknow",
  number: "PROJECT 01",
  category: "PRODUCTIVITY & HABIT ENGINE",
  tag: "100+ ACTIVE USERS",
  title: "TRACK.NOW",
  triad: {
    problem: "Teams and individuals struggle with bloated tracking tools that lack habit-focused workflows and quick voice capture.",
    build: "Mission-based habit product with Quasar/Vue 3 PWA, browser extension, voice-to-task capture, and dual Demo/Firebase runtimes.",
    outcome: "Reached 100+ active users with instant offline local mode and production Firebase cloud synchronization.",
  },
  stack: "Vue 3 · Quasar · Firebase · Web Extension · TypeScript · PWA",
  image: "/projects/tracknow.jpg",
  imageAlt: "Screenshot of Track.now productivity web application and habit manager",
  liveUrl: null, // PENDING PRODUCTION DOMAIN
  repoUrl: "https://github.com/atreyakamat/track.now",
  overview: "Track.now is a mission-based habit product and agile task manager featuring a full Quasar/Vue 3 web app, an installable offline-capable PWA, a companion browser extension, and built-in voice-to-task capture. The platform supports dual runtime modes: a zero-backend local demo mode storing data in browser storage, and a production Firebase mode providing authenticated cloud synchronization with Firestore.",
  keyFeatures: [
    "Dual runtime modes: instant local demo storage or full production Firebase (Auth + Firestore)",
    "Multi-client ecosystem: Quasar/Vue 3 web app, offline PWA for Android, and browser extension",
    "Voice-to-task capture pipeline for low-friction habit and task creation",
    "Comprehensive product documentation suite including PRD, product specs, and business workflows",
    "Active user milestone with 100+ users and automated PowerShell release packaging scripts",
  ],
  architecture: [
    "Frontend: Quasar Framework + Vue 3 with responsive PWA and WebExtension bundles",
    "Backend & Auth: Dual-mode architecture supporting local browser storage and Firebase/Firestore",
    "Release Pipeline: Automated release preparation and Firebase CLI deployment scripts",
  ],
  isFeatured: true,
};

export const gridProjects: ProjectItem[] = [
  {
    id: "pulsewatch",
    slug: "pulsewatch",
    number: "PROJECT 02",
    category: "UPTIME SERVICE",
    tag: "PULSEWATCH",
    title: "PULSEWATCH",
    triad: {
      problem: "Silent service outages and slow response times go unnoticed without automated alerting.",
      build: "Uptime monitoring and response-time tracking service built with React, Express, PostgreSQL, and Drizzle ORM.",
      outcome: "Automated health checks and incident logs across monitored endpoints.",
    },
    stack: "React · Express · PostgreSQL · Drizzle ORM · Node.js",
    image: "/projects/pulsewatch.jpg",
    imageAlt: "Technical monitoring dashboard of PulseWatch uptime platform",
    liveUrl: null, // PLACEHOLDER UNTIL PROVIDED
    repoUrl: "https://github.com/atreyakamat/pulsewatch",
    overview: "PulseWatch is an uptime and health monitoring platform providing continuous HTTP endpoint checks, latency telemetry, and instant incident alerting.",
    keyFeatures: [
      "Configurable per-endpoint check frequencies automated with node-cron",
      "Response-time tracking and statistical analytics across 24h, 7d, and 30d spans",
      "Automated email notifications triggered on service outages and recovery",
      "Operational dashboard displaying real-time endpoint status and historical logs",
    ],
    architecture: [
      "Polling Engine: Scheduled asynchronous HTTP pings with timeout guards",
      "API Layer: Express server serving aggregated uptime calculations",
      "Database: PostgreSQL storing time-stamped status events and incident logs",
    ],
    isFeatured: true,
  },
  {
    id: "vistarabi",
    slug: "vistarabi",
    number: "PROJECT 03",
    category: "BUSINESS INTELLIGENCE",
    tag: "VISTARABI",
    title: "VISTARABI",
    triad: {
      problem: "Operational business data is difficult to interpret without dedicated data engineering workflows.",
      build: "AI-powered analytics app featuring KPI detection, trend forecasting, and local LLM insights via Ollama.",
      outcome: "Automated business analytics and data summaries without third-party cloud data dependencies.",
    },
    stack: "React · Ollama · AI/ML · Open Source",
    image: "/projects/vistarabi.jpg",
    imageAlt: "Data visualization display of business intelligence by VistaraBI",
    liveUrl: null, // PLACEHOLDER UNTIL PROVIDED
    repoUrl: "https://github.com/atreyakamat/VistaraBI",
    overview: "VistaraBI is an open-source business intelligence platform that combines automated data ingestion, KPI discovery, and local LLM inference via Ollama.",
    keyFeatures: [
      "Automated domain and KPI detection from tabular business datasets",
      "Local LLM synthesis with Ollama for privacy-preserving data summaries",
      "Interactive data visualizations highlighting anomalies and trends",
      "Completely local execution avoiding expensive third-party SaaS APIs",
    ],
    architecture: [
      "Inference Pipeline: Ollama local LLM integration with structured prompting",
      "Frontend: React with responsive data charts and executive dashboards",
      "Data Engine: Tabular ingestion and metric aggregation routines",
    ],
    isFeatured: true,
  },
];

export const lawyerCrmProject: ProjectItem = {
  id: "lawyer-crm",
  slug: "lawyer-crm",
  number: "PROJECT 04",
  category: "WORKFLOW AUTOMATION",
  subcategory: "BOOKING & CLIENT INTAKE",
  tag: "CRM & WORKFLOWS",
  title: "LAWYER BOOKING & CRM PLATFORM",
  triad: {
    problem: "Fragmented consultation booking and missed follow-ups across client channels.",
    build: "Client intake and booking platform integrated with n8n workflow automation and WhatsApp notification webhooks.",
    outcome: "Streamlined client intake and automated WhatsApp booking confirmations.",
  },
  stack: "Next.js · n8n · WhatsApp Automation · CRM",
  image: "/projects/lawyer-crm.jpg",
  imageAlt: "Modern legal scheduling and client CRM dashboard",
  liveUrl: null, // PLACEHOLDER UNTIL PROVIDED
  repoUrl: "https://github.com/atreyakamat/anirudh-abcoflaw",
  overview: "A specialized legal practice booking and client intake system built to replace manual scheduling with automated webhook notifications and WhatsApp confirmations.",
  keyFeatures: [
    "Self-service consultation booking calendar with automatic conflict checking",
    "n8n webhook automations triggered immediately upon client submission",
    "Automated WhatsApp notification delivery for appointment confirmations",
    "Client relationship dashboard for case notes and schedule oversight",
  ],
  architecture: [
    "Application: Next.js full-stack framework with server actions",
    "Automation: n8n workflow engine connecting database events to external APIs",
    "Messaging: WhatsApp Business API webhook integrations",
  ],
  isFeatured: true,
};

export const archiveProjectsList: ProjectItem[] = [
  {
    id: "scaleup",
    slug: "scaleup",
    number: "ARCHIVE 01",
    category: "AI & SYSTEMS COMPUTING",
    tag: "VULKAN · FASTAPI · NCNN",
    title: "ScaleUp — Local Batch AI Image Upscaler",
    triad: {
      problem: "Cloud image upscaling compromises privacy and incurs API fees, while PyTorch desktop tools cause VRAM exhaustion and session crashes on Linux.",
      build: "Self-hosted local super-resolution tool using C++ NCNN-Vulkan compute and dynamic tile clamping on Mesa RADV, paired with FastAPI and React.",
      outcome: "Ultra-low memory footprint (≤ 120 MB API process RSS, ≤ 600 MB UMA GPU tile clamping) with rock-solid Hyprland desktop stability.",
    },
    stack: "Vulkan 1.4 · FastAPI · React · Vite · Docker · C++ NCNN · RADV",
    image: "/projects/vistarabi.jpg",
    imageAlt: "ScaleUp local AI super-resolution and image upscaling dashboard",
    liveUrl: null, // LOCAL DESKTOP APP
    repoUrl: "https://github.com/atreyakamat/ScaleUp",
    overview: "ScaleUp is a self-hosted, privacy-first local image enhancement and batch super-resolution application. Built for Linux desktop environments (Arch Linux + Hyprland), it harnesses NCNN-Vulkan C++ compute to execute hardware-accelerated deep learning models directly on integrated and discrete AMD GPUs via Mesa's RADV driver. By bypassing heavy PyTorch runtimes, ScaleUp operates with an ultra-low memory footprint (≤ 120 MB API process RSS, dynamic tile clamping keeping GPU memory ≤ 600 MB UMA), avoiding VRAM exhaustion and ensuring total desktop stability under Hyprland without killing user sessions.",
    keyFeatures: [
      "NCNN-Vulkan C++ inference engine for hardware-accelerated deep learning super-resolution",
      "Dynamic tile clamping maintaining GPU UMA memory allocation ≤ 600 MB to prevent VRAM exhaustion",
      "Lean FastAPI asynchronous backend operating at ≤ 120 MB process RSS, eliminating PyTorch overhead",
      "High-throughput batch processing queue with real-time progress telemetry and image preview",
      "Engineered specifically for Arch Linux + Hyprland desktop environments with complete system stability",
    ],
    architecture: [
      "Compute Engine: NCNN C++ compute with Vulkan 1.4 shaders targeting Mesa RADV drivers",
      "Backend: FastAPI asynchronous service managing batch job queues and image I/O",
      "Frontend: React + Vite modern interface with batch configuration controls",
      "Containerization: Docker container setup with Vulkan ICD hardware passthrough",
    ],
    isFeatured: false,
  },
  {
    id: "timeflex",
    slug: "timeflex",
    number: "ARCHIVE 02",
    category: "ENTERPRISE SCHEDULING & OR-TOOLS",
    tag: "ACTIVE DEVELOPMENT",
    title: "TimeFlex — AI Academic Timetable Engine",
    triad: {
      problem: "College departments spend weeks manually building academic timetables, continually battling teacher overlapping and lab/room constraint violations.",
      build: "Enterprise scheduling monorepo featuring a Python OR-Tools constraint solver, Node.js orchestration API, and interactive React timetable editor.",
      outcome: "Automated hard-constraint satisfaction and optimization with manual drag-and-drop cell adjustments and PDF/Excel export.",
    },
    stack: "TypeScript · Python · Google OR-Tools · Node.js · React · Monorepo",
    image: "/projects/tracknow.jpg",
    imageAlt: "TimeFlex enterprise education scheduling and timetable solver preview",
    liveUrl: null, // IN ACTIVE DEVELOPMENT
    repoUrl: "https://github.com/atreyakamat/timesflex",
    overview: "TimeFlex is an enterprise education scheduling platform engineered for AI-assisted and algorithmic timetable generation. Structured as a modern multi-package monorepo, it pairs a high-performance Python constraint satisfaction solver using Google OR-Tools with a Node.js orchestration API and a React timetable management interface. The system automates division and batch scheduling, room and lab allocation, teacher availability, and strict lunch/break hard constraints while allowing seamless manual timetable adjustments and PDF/Excel export.",
    keyFeatures: [
      "Google OR-Tools Python solver engine for automated hard-constraint satisfaction",
      "Monorepo architecture separating React frontend, Node.js API, and Python solver services",
      "Multi-tiered scheduling rules: divisions, student batches, teacher loads, and lab room allocation",
      "Interactive timetable editor supporting manual adjustments with real-time constraint checks",
      "Automated export pipeline generating formatted PDF and Excel schedules for departments",
    ],
    architecture: [
      "Solver Engine: Python service executing Google OR-Tools constraint satisfaction algorithms",
      "Backend API: Node.js service managing institutional entities, scheduling queues, and exports",
      "Frontend App: React interface for division setup, timetable editing, and constraint configuration",
      "Shared Core: Monorepo package defining shared TypeScript types, schemas, and API contracts",
    ],
    isFeatured: false,
  },
  {
    id: "futsal",
    slug: "futsal",
    number: "ARCHIVE 03",
    category: "FACILITY PLATFORM & CONCURRENCY",
    tag: "AITD GOA",
    title: "Agnel Arena Futsal & Turf Booking Platform",
    triad: {
      problem: "Turf double-bookings, manual cash handling friction, and payment drop-offs during peak reservation hours.",
      build: "Enterprise-grade multi-arena booking platform built with Next.js 15 App Router, PostgreSQL, PayU Gateway, and AiSensy WhatsApp OTP.",
      outcome: "Concurrent 10-minute session slot locking, automated ticket security, and restricted payment modes.",
    },
    stack: "Next.js 15 · PostgreSQL · PayU Gateway · AiSensy WhatsApp OTP",
    image: "/projects/pulsewatch.jpg",
    imageAlt: "Agnel Arena Futsal and turf booking platform preview",
    liveUrl: null, // PENDING CAMPUS LAUNCH
    repoUrl: "https://github.com/atreyakamat/futsal-laravel",
    overview: "Agnel Arena Futsal is an enterprise-grade, high-concurrency multi-arena futsal and turf booking platform built for college athletic facilities. Built with Next.js 15 App Router and PostgreSQL, it provides instant mobile-based OTP login via AiSensy WhatsApp API (with SMS fallback), 10-minute concurrent session slot locks during checkout to prevent double-booking collisions, PayU gateway integration with strict payment status enforcement (confirmed, failed, cancelled), restricting PDF ticket access exclusively to confirmed bookings, and dynamic checkout payment restrictions (UPI, Debit Cards, Net Banking, and Wallets).",
    keyFeatures: [
      "Instant OTP Authentication: Seamless mobile login via AiSensy WhatsApp API with SMS fallback",
      "Concurrent Slot Locking: 10-minute session slot reservation locks preventing double-booking collisions",
      "Payment Lifecycle & Ticket Security: PayU integration with strict status enforcement and PDF ticket security",
      "Dynamic Method Restrictions: Enforces checkout to UPI, Debit, Net Banking, and Wallets (blocks Credit/BNPL)",
      "Multi-arena administrative dashboard for court schedules, player records, and revenue tracking",
    ],
    architecture: [
      "Framework: Next.js 15 App Router with server actions and optimized cache invalidation",
      "Database: PostgreSQL with ACID transaction locks for concurrent slot reservation",
      "Integrations: PayU Payment Gateway + AiSensy WhatsApp/SMS communication APIs",
    ],
    isFeatured: false,
  },
  {
    id: "pixel-n-purpose",
    slug: "pixel-n-purpose",
    number: "ARCHIVE 04",
    category: "CLIENT PLATFORM & BRAND ENGINE",
    tag: "AGENCY WEB PLATFORM",
    title: "Pixel N Purpose — Agency Web Platform",
    triad: {
      problem: "Creative social media agencies require high-converting client showcases with sub-second page loads and mobile-optimized inquiry funnels.",
      build: "Production agency web platform built with Next.js and Tailwind CSS featuring optimized media delivery and structured client onboarding.",
      outcome: "Deployed live client platform at PixelNPurpose.com with fast Core Web Vitals and fluid responsive storytelling.",
    },
    stack: "Next.js · Tailwind CSS · TypeScript · Responsive Design",
    image: "/projects/tracknow.jpg",
    imageAlt: "Pixel N Purpose social media agency web platform preview",
    liveUrl: "https://pixelnpurpose.com",
    repoUrl: "https://github.com/atreyakamat/pixel-n-purpose",
    overview: "Pixel N Purpose is a modern client web platform designed and built for a creative social media agency. Built with Next.js and Tailwind CSS, the platform delivers high-performance portfolio showcases, engaging case studies, and a streamlined client inquiry workflow to drive agency conversion.",
    keyFeatures: [
      "High-performance media delivery and responsive creative case study showcases",
      "Streamlined prospective client inquiry funnels with validation",
      "Tailored brand typography and responsive layouts optimized across mobile and desktop",
      "Production deployment on edge infrastructure with high Core Web Vitals performance",
    ],
    architecture: [
      "Frontend: Next.js with optimized image pipelines and server-rendered SEO metadata",
      "Styling: Tailwind CSS design system with custom brand color tokens",
      "Deployment: Production edge hosting at PixelNPurpose.com",
    ],
    isFeatured: false,
  },
  {
    id: "amthane-valley",
    slug: "amthane-valley",
    number: "ARCHIVE 05",
    category: "HOSPITALITY WEB PLATFORM",
    tag: "AMTHANE VALLEY",
    title: "Amthane Valley",
    triad: {
      problem: "Over-reliance on third-party aggregators with high commissions and disconnected direct reservation experience.",
      build: "Self-hosted direct reservation platform for farm activities, SEO-optimized and mobile responsive.",
      outcome: "Direct reservation flow with fast page load metrics and organic discovery.",
    },
    stack: "Next.js · Booking System · SEO · Deployment",
    image: "/projects/tracknow.jpg",
    imageAlt: "Amthane Valley farm reservation website preview",
    liveUrl: null, // PLACEHOLDER UNTIL PROVIDED
    repoUrl: "https://github.com/atreyakamat/Amthane-Valley",
    overview: "A direct client website for Amthane Valley farm activities providing seamless self-hosted booking and high-performance local search discovery.",
    keyFeatures: [
      "Direct booking flow bypassing third-party aggregator commissions",
      "Structured SEO metadata for agro-tourism and local activity discovery",
      "Optimized static delivery ensuring sub-second initial page render",
    ],
    architecture: [
      "Frontend: Next.js with server-rendered metadata and responsive layout",
      "Reservation System: Form intake handling custom activity schedules",
      "Deployment: Production edge hosting with automated cache invalidation",
    ],
    isFeatured: false,
  },
  {
    id: "stix-n-vibes",
    slug: "stix-n-vibes",
    number: "ARCHIVE 06",
    category: "COMMERCE ENGINE",
    tag: "CUSTOM MERCH",
    title: "Stix 'N' Vibes",
    triad: {
      problem: "Custom merchandise requires multi-variant pricing logic and low-friction mobile checkout.",
      build: "Modular e-commerce platform with material-aware cart logic, dynamic pricing multipliers, and WhatsApp checkout.",
      outcome: "Seamless catalog browsing and automated order messaging.",
    },
    stack: "Next.js · E-commerce · WhatsApp Integration · Analytics",
    image: "/projects/vistarabi.jpg",
    imageAlt: "Stix 'N' Vibes e-commerce platform preview",
    liveUrl: "https://stixnvibes.com",
    repoUrl: null, // PENDING PUBLIC RELEASE / REPO POLISH
    overview: "A custom merchandise and sticker e-commerce storefront featuring dynamic material-aware pricing and frictionless mobile order placement.",
    keyFeatures: [
      "Material-aware cart calculating pricing multipliers for Paper and Vinyl finishes",
      "Direct WhatsApp checkout link generation pre-formatting the customer order",
      "Modular product, collection, and category data structures",
    ],
    architecture: [
      "Storefront: Next.js with static page generation for high-speed catalog browsing",
      "Pricing Logic: Client-side mathematical multipliers based on material selection",
      "Checkout: Pre-formatted WhatsApp API URI encoding",
    ],
    isFeatured: false,
  },
];

export const archiveProjects: ArchiveProject[] = archiveProjectsList.map((p) => ({
  id: p.id,
  slug: p.slug,
  title: p.title,
  desc: p.triad.build,
  stack: p.stack,
  liveUrl: p.liveUrl,
  repoUrl: p.repoUrl,
}));

export const allProjects: ProjectItem[] = [
  trackNowProject,
  ...gridProjects,
  lawyerCrmProject,
  ...archiveProjectsList,
];

export const getProjectBySlug = (slug: string): ProjectItem | undefined => {
  return allProjects.find((p) => p.slug.toLowerCase() === slug.toLowerCase());
};

export const capabilityGroups: CapabilityGroup[] = [
  {
    kicker: "01 / CLIENT-SIDE",
    title: "APPLICATIONS",
    desc: "Fast, accessible user interfaces and modern web applications.",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript & HTML/CSS"],
  },
  {
    kicker: "02 / SERVICES",
    title: "BACKEND & DATA",
    desc: "Reliable server runtimes, structured APIs, and data processing.",
    items: ["Python (Flask)", "Node.js / Express", "PostgreSQL & MySQL", "MongoDB / Pandas / NumPy"],
  },
  {
    kicker: "03 / SYSTEMS",
    title: "AI & INFRASTRUCTURE",
    desc: "Machine learning models, local LLMs, and deployment pipelines.",
    items: ["TensorFlow & Computer Vision", "Ollama & OCR", "Docker & Kubernetes", "Prometheus, Grafana, Jenkins"],
  },
];

export const experienceEntries: ExperienceEntry[] = [
  {
    period: "July 2026 – Sept 2026",
    company: "Revature",
    role: "Trainee",
    isAccentRole: true,
    desc: "Java and Python development, microservices, containerization with Docker, Kubernetes, Jenkins CI/CD, and Prometheus/Grafana monitoring.",
  },
  {
    period: "July 2025 – July 2026",
    company: "SparkPlus Tech.",
    role: "Junior Developer Intern",
    desc: "Production platform maintenance, internal monitoring, uptime and performance tracking, automated alerting, and live deployment support.",
  },
  {
    period: "Nov 2025 – Jan 2026",
    company: "Infosys Springboard",
    role: "Intern",
    desc: "AI-powered coding chatbot using Streamlit and Ollama, OCR pipelines for document and image processing.",
  },
  {
    period: "April 2024 – June 2024",
    company: "Google",
    role: "AI-ML Virtual Intern",
    desc: "Computer vision and object classification using TensorFlow, dataset preparation, and model evaluation.",
  },
];

export const educationEntries: EducationEntry[] = [
  {
    degree: "B.E. in Computer Engineering",
    period: "2022 – 2026",
    institution: "Agnel Institute of Technology and Design",
  },
  {
    degree: "Honours in Computer Engineering",
    period: "2023 – 2026",
    institution: "Goa University",
    specialization: "Artificial Intelligence & Machine Learning",
  },
];
