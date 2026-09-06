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
  category: "PRODUCTIVITY & TASK MANAGEMENT",
  tag: "100+ ACTIVE USERS",
  title: "TRACK.NOW",
  triad: {
    problem: "Teams struggle with bloated project tracking tools that slow down daily execution.",
    build: "Full-stack agile task management app built with React, Node.js, Express, PostgreSQL, and Drizzle ORM.",
    outcome: "Reached 100+ active users with fast turnaround and iterative feedback cycles.",
  },
  stack: "React · Node.js · Express · PostgreSQL · Drizzle ORM",
  image: "/projects/tracknow.jpg",
  imageAlt: "Screenshot of Track.now productivity web application",
  liveUrl: null, // PLACEHOLDER UNTIL PROVIDED
  repoUrl: null, // PLACEHOLDER UNTIL PROVIDED
  overview: "Track.now is a focused agile productivity web application built to streamline everyday sprint workflows without the cognitive load of enterprise trackers.",
  keyFeatures: [
    "Sprint and task organization with real-time status transitions",
    "Type-safe schema definitions and automated migrations via Drizzle ORM",
    "RESTful API service with structured request validation in Express",
    "Active user milestone reaching 100+ users with iterative feature cycles",
  ],
  architecture: [
    "Frontend: React with responsive, accessible interface components",
    "Backend: Node.js & Express REST API with token authentication",
    "Database: PostgreSQL managed with Drizzle ORM for type safety",
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
    repoUrl: null, // PLACEHOLDER UNTIL PROVIDED
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
    repoUrl: null, // PLACEHOLDER UNTIL PROVIDED
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
  repoUrl: null, // PLACEHOLDER UNTIL PROVIDED
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
    id: "futsal",
    slug: "futsal",
    number: "ARCHIVE 01",
    category: "FACILITY MANAGEMENT",
    tag: "AIEM GOA",
    title: "Futsal Booking Platform",
    triad: {
      problem: "Facility double-booking, manual scheduling friction, and lack of player usage metrics.",
      build: "Facility reservation platform with Role-Based Access Control (RBAC), booking analytics, and AI insights.",
      outcome: "Automated booking conflict resolution and visibility into court utilization.",
    },
    stack: "Next.js · RBAC · Analytics · AI/ML",
    image: "/projects/pulsewatch.jpg",
    imageAlt: "Futsal facility booking platform preview",
    liveUrl: null, // PLACEHOLDER UNTIL PROVIDED
    repoUrl: null, // PLACEHOLDER UNTIL PROVIDED
    overview: "Developed for AIEM Goa, this platform manages court reservations, multi-role user access, and usage analytics for athletic facilities.",
    keyFeatures: [
      "Role-Based Access Control (RBAC) separating players, staff, and admins",
      "Real-time court availability schedule with instant booking confirmation",
      "AI-driven usage pattern analysis to identify peak demand hours",
    ],
    architecture: [
      "Framework: Next.js with server-side rendered dashboard routes",
      "Access Control: Granular RBAC middleware protecting booking endpoints",
      "Database: Relational schema tracking facilities, slots, and bookings",
    ],
    isFeatured: false,
  },
  {
    id: "stix-n-vibes",
    slug: "stix-n-vibes",
    number: "ARCHIVE 02",
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
    liveUrl: null, // PLACEHOLDER UNTIL PROVIDED
    repoUrl: null, // PLACEHOLDER UNTIL PROVIDED
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
  {
    id: "amthane-valley",
    slug: "amthane-valley",
    number: "ARCHIVE 03",
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
    repoUrl: null, // PLACEHOLDER UNTIL PROVIDED
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
    period: "July 2025 – Present",
    company: "SparkPlus Tech.",
    role: "Junior Developer Intern",
    isAccentRole: true,
    desc: "Production platform maintenance, internal monitoring, uptime and performance tracking, automated alerting, and live deployment support.",
  },
  {
    period: "April 2024 – June 2024",
    company: "Google",
    role: "AI-ML Virtual Intern",
    desc: "Computer vision and object classification using TensorFlow, dataset preparation, and model evaluation.",
  },
  {
    period: "Nov 2025 – Jan 2026",
    company: "Infosys Springboard",
    role: "Intern",
    desc: "AI-powered coding chatbot using Streamlit and Ollama, OCR pipelines for document and image processing.",
  },
  {
    period: "July 2026 – Sept 2026",
    company: "Revature",
    role: "Trainee",
    desc: "Java and Python development, microservices, containerization with Docker, Kubernetes, Jenkins CI/CD, and Prometheus/Grafana monitoring.",
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
