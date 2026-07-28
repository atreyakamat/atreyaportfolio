import portraitImg from '../assets/atreya_portrait.png';
import candidImg from '../assets/atreya_candid.png';

export interface PillarItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  examples: string[];
  colorAccent: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  category: string;
  year: string;
  outcome?: string;
  imageBg?: string;
  link?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  outcome: string;
}

export interface EcosystemDestination {
  pillar: string;
  label: string;
  subdomain: string;
  url: string;
  status: 'Active' | 'Progressive Destination';
}

export const HERO_DATA = {
  greeting: "Hi, I'm Atreya.",
  headline: "I build, design,\nteach and experiment.",
  subtext: "Engineer by profession. Creative by instinct. Curious about almost everything.",
  location: "Based in Goa, India.",
  portraitUrl: portraitImg,
};

export const ABOUT_DATA = {
  headline: "Engineer by profession. Creative by instinct.",
  body: "Atreya moves naturally across software engineering, product design, technical education, creative consulting, and AI experimentation. Based in Goa, he approaches code with aesthetic restraint and designs with structural discipline.",
  candidUrl: candidImg,
};

export const FIVE_PILLARS: PillarItem[] = [
  {
    id: "build",
    number: "01",
    title: "BUILD",
    subtitle: "Engineering / Software / Products",
    description: "High-performance web applications, WASAPI DSP engines, zero-trust security perimeters, and full-stack software products.",
    examples: ["WASAPI Audio DSP Mixer", "CIDR Attendance Invariant", "Zustand Cart Engine"],
    colorAccent: "#0d9488"
  },
  {
    id: "create",
    number: "02",
    title: "CREATE",
    subtitle: "Creative Freelance / Websites / Branding",
    description: "Art-directed digital experiences, custom merchandise packaging, tactile brand identities, and editorial web design.",
    examples: ["Stix 'n' Vibes Goa Packaging", "Editorial Web Systems", "Brand Identities"],
    colorAccent: "#06b6d4"
  },
  {
    id: "teach",
    number: "03",
    title: "TEACH",
    subtitle: "Private Tutoring / Mentoring / Education",
    description: "Demystifying complex computer science fundamentals, data structures, full-stack web architecture, and mentoring student developers.",
    examples: ["CS Fundamentals Mentorship", "Web Dev Masterclasses", "Private Engineering Tutoring"],
    colorAccent: "#0f766e"
  },
  {
    id: "speak",
    number: "04",
    title: "SPEAK",
    subtitle: "Talks / Workshops / Events / Community",
    description: "Keynotes and hands-on developer workshops on modern web architecture, UI physics, and building resilient systems.",
    examples: ["Goa Dev Community Keynote", "Web Performance Workshop", "AI Engineering Panels"],
    colorAccent: "#0891b2"
  },
  {
    id: "experiment",
    number: "05",
    title: "EXPERIMENT",
    subtitle: "AI Tools / Prototypes / New Ideas",
    description: "AST-sanitized natural language BI generators, Web Audio sound synthesizers, and procedural physics experiments.",
    examples: ["Vistara BI AST Parser", "Procedural Web Audio Engine", "LLM Prompt Generators"],
    colorAccent: "#14b8a6"
  }
];

export const SELECTED_WORKS: ProjectItem[] = [
  {
    id: "stix-n-vibes",
    name: "Stix 'n' Vibes",
    category: "Commerce Product & Packaging",
    year: "2026",
    outcome: "+34% Cart Conversion via 1-Tap WhatsApp Payloads"
  },
  {
    id: "attendance-invariant",
    name: "AttenDance Security",
    category: "Institutional Subnet Software",
    year: "2025",
    outcome: "99.4% Proxy Fraud Elimination without App Downloads"
  },
  {
    id: "echobridge-dsp",
    name: "EchoBridge WASAPI",
    category: "Real-Time Audio DSP",
    year: "2025",
    outcome: "<12ms WASAPI Loopback Low-Latency Routing"
  },
  {
    id: "pulsewatch-telemetry",
    name: "PulseWatch Heartbeat",
    category: "Reliability & Telemetry Pool",
    year: "2025",
    outcome: "100ms High-Frequency Degradation Alert Queue"
  },
  {
    id: "vistara-bi",
    name: "Vistara BI",
    category: "Conversational AI Architecture",
    year: "2024",
    outcome: "96.2% AST-Sanitized Read-Only SQL Precision"
  },
  {
    id: "goa-dev-community",
    name: "Goa Developer Guild",
    category: "Community & Event Series",
    year: "2024",
    outcome: "500+ Local Engineers Mentored Across Workshops"
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    company: "Independent Practice",
    role: "Product Engineer & Creative Consultant",
    period: "2024 — Present",
    outcome: "Designing and engineering full-stack products, WASAPI audio engines, and creative web platforms."
  },
  {
    company: "Stix 'n' Vibes",
    role: "Founding Tech Lead & Brand Lead",
    period: "2023 — Present",
    outcome: "Built sub-10ms custom merchandise area matrix and shipped 1,500+ orders across Goa."
  },
  {
    company: "Agnel Institute of Technology",
    role: "Technical Educator & Project Mentor",
    period: "2023 — 2025",
    outcome: "Architected campus zero-trust subnet check-in and mentored 200+ students in web engineering."
  }
];

export const NOW_DATA = {
  workingOn: "Refining high-speed WASAPI audio routing & procedural web audio synthesizers.",
  building: "atreyakamat.dev digital identity ecosystem & specialized subdomain hubs.",
  exploring: "AST-sanitized natural language SQL compilers and local LLM execution pipelines.",
  learning: "Advanced 3D surface material shading and physical web interaction design."
};

export const ECOSYSTEM_DESTINATIONS: EcosystemDestination[] = [
  {
    pillar: "BUILD",
    label: "Engineering & Product",
    subdomain: "work.atreyakamat.dev",
    url: "https://work.atreyakamat.dev",
    status: "Active"
  },
  {
    pillar: "CREATE",
    label: "Creative Studio",
    subdomain: "studio.atreyakamat.dev",
    url: "https://studio.atreyakamat.dev",
    status: "Progressive Destination"
  },
  {
    pillar: "TEACH",
    label: "Tutoring & Learning",
    subdomain: "learn.atreyakamat.dev",
    url: "https://learn.atreyakamat.dev",
    status: "Progressive Destination"
  },
  {
    pillar: "SPEAK",
    label: "Talks & Workshops",
    subdomain: "speaking.atreyakamat.dev",
    url: "https://speaking.atreyakamat.dev",
    status: "Progressive Destination"
  },
  {
    pillar: "EXPERIMENT",
    label: "AI & Experiments",
    subdomain: "lab.atreyakamat.dev",
    url: "https://lab.atreyakamat.dev",
    status: "Progressive Destination"
  }
];

export const CONTACT_DATA = {
  headline: "Let's make something good.",
  email: "atreyakamat@gmail.com",
  linkedin: "https://linkedin.com/in/atreyakamat",
  github: "https://github.com/atreyakamat",
  instagram: "https://instagram.com/atreyakamat",
  location: "Goa, India"
};
