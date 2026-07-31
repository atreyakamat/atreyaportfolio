import type { ExperienceItem } from './types';

export const experience: ExperienceItem[] = [
  {
    id: 'sparkplus-dev',
    organization: 'SparkPlus Technologies',
    role: 'Junior Developer Intern',
    type: 'Part-time',
    location: 'Remote',
    period: 'Jul 2025 - Present',
    current: true,
    summary:
      'Maintaining and enhancing core production platform work across client-facing environments.',
    contributions: [
      'Maintain and improve production platform reliability.',
      'Designed and shipped internal monitoring tools for uptime, response-time tracking and automated alerting workflows.',
      'Implemented CI/CD-aligned deployment pipelines and collaborated on live releases.',
    ],
    relatedProjectSlugs: ['pulsewatch'],
  },
  {
    id: 'solo-community',
    organization: 'SOLO by SPARK+',
    role: 'Community Manager',
    type: 'SparkPlus Technologies',
    location: 'Goa, India / Remote',
    period: 'Nov 2025 - Present',
    current: true,
    summary:
      'Leading branding, positioning and event programming for a product-based SaaS community.',
    contributions: [
      'Shape identity and outreach strategy within the regional tech ecosystem.',
      'Coordinate tech-focused events and structured collaboration programs.',
      'Grow community engagement across local and online channels.',
    ],
  },
  {
    id: 'stix-founder',
    organization: "Stix 'N' Vibes",
    role: 'Founder',
    location: 'Goa, India',
    period: 'Feb 2024 - Present',
    current: true,
    summary:
      'Founder of a sticker-design venture serving individual customers and restaurant-branding clients.',
    contributions: [
      'Own marketing, client relationships and campus stall operations end to end.',
      'Launched promotional campaigns to expand brand visibility and customer reach.',
      'Built a modular e-commerce platform with material-aware cart logic, dynamic pricing, WhatsApp checkout and recommendations.',
    ],
    relatedProjectSlugs: ['stix-n-vibes'],
  },
  {
    id: 'education-aitd',
    organization: 'Agnel Institute of Technology and Design',
    role: 'B.E. Computer Engineering',
    location: 'Assagao, Goa',
    period: 'Sep 2022 - Jul 2026',
    summary:
      'Computer engineering education with documented CGPA 8.92 / 10.0 and student leadership work.',
    contributions: [
      'Chairperson, ACCESS Student Council (2024-25).',
      'Main Coordinator, Techyothon Hackathon and Tech Urja 2025.',
      'Google Professional certifications in Cybersecurity, Business Intelligence and Project Management.',
    ],
  },
];

export const currentExperience = experience.filter((item) => item.current);
