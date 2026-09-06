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

export interface FeaturedProject {
  id: string;
  number: string;
  category: string;
  subcategory?: string;
  tag?: string;
  title: string;
  triad: ProjectTriad;
  stack: string;
  image: string;
  imageAlt: string;
  link: string;
  linkText: string;
}

export interface ArchiveProject {
  title: string;
  desc: string;
  stack: string;
  link?: string;
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
  githubUrl: "https://github.com/Atreya-Kamat",
  linkedinUrl: "https://linkedin.com/in/atreyakamat",
  resumeUrl: "/atreya_kamat_resume.pdf",
};

export const navLinks: NavLink[] = [
  { name: "WORK", href: "#selected-work" },
  { name: "APPROACH", href: "#methodology" },
  { name: "CAPABILITIES", href: "#capabilities" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "ABOUT", href: "#about" },
  { name: "CONTACT", href: "#contact" },
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

export const trackNowProject: FeaturedProject = {
  id: "tracknow",
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
  link: "https://github.com/Atreya-Kamat",
  linkText: "VIEW APPLICATION",
};

export const gridProjects: FeaturedProject[] = [
  {
    id: "pulsewatch",
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
    link: "https://github.com/Atreya-Kamat",
    linkText: "OVERVIEW",
  },
  {
    id: "vistarabi",
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
    link: "https://github.com/Atreya-Kamat",
    linkText: "OVERVIEW",
  },
];

export const lawyerCrmProject: FeaturedProject = {
  id: "lawyer-crm",
  number: "PROJECT 04",
  category: "WORKFLOW AUTOMATION",
  subcategory: "BOOKING & CLIENT INTAKE",
  title: "LAWYER BOOKING & CRM PLATFORM",
  triad: {
    problem: "Fragmented consultation booking and missed follow-ups across client channels.",
    build: "Client intake and booking platform integrated with n8n workflow automation and WhatsApp notification webhooks.",
    outcome: "Streamlined client intake and automated WhatsApp booking confirmations.",
  },
  stack: "Next.js · n8n · WhatsApp Automation · CRM",
  image: "/projects/lawyer-crm.jpg",
  imageAlt: "Modern legal scheduling and client CRM dashboard",
  link: "https://github.com/Atreya-Kamat",
  linkText: "OVERVIEW",
};

export const archiveProjects: ArchiveProject[] = [
  {
    title: "Futsal Booking Platform",
    desc: "Facility reservation platform with Role-Based Access Control (RBAC), booking analytics, and AI insights.",
    stack: "Next.js · RBAC · Analytics · AI/ML",
    link: "https://github.com/Atreya-Kamat",
  },
  {
    title: "Stix 'N' Vibes",
    desc: "Modular e-commerce platform with material-aware cart logic, dynamic pricing, and WhatsApp checkout.",
    stack: "Next.js · E-commerce · WhatsApp Integration · Analytics",
    link: "https://github.com/Atreya-Kamat",
  },
  {
    title: "Amthane Valley",
    desc: "Self-hosted direct reservation platform for farm activities, SEO-optimized and mobile responsive.",
    stack: "Next.js · Booking System · SEO · Deployment",
    link: "https://github.com/Atreya-Kamat",
  },
];

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
