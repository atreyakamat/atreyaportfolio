import type { SkillGroup } from './types';

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend-product',
    title: 'Product Frontend',
    summary:
      'Building responsive interfaces, mobile-first workflows and product surfaces that stay understandable under real use.',
    skills: [
      { name: 'React', level: 'strong', featured: true, projectSlugs: ['clinicos', 'pulsewatch', 'stix-n-vibes'] },
      { name: 'TypeScript', level: 'strong', featured: true, projectSlugs: ['tracknow', 'teamcord'] },
      { name: 'React Native', level: 'working', projectSlugs: ['tracknow'] },
      { name: 'Quasar', level: 'working', projectSlugs: ['tracknow'] },
      { name: 'Tailwind CSS', level: 'strong', featured: true },
      { name: 'Vue / Angular / Astro', level: 'working' },
    ],
  },
  {
    id: 'backend-systems',
    title: 'Backend & Systems',
    summary:
      'Designing APIs, data models, scheduled workers and role-aware systems for operational products.',
    skills: [
      { name: 'Node.js', level: 'strong', featured: true, projectSlugs: ['tracknow', 'clinicos', 'attendance', 'timeflex'] },
      { name: 'Express', level: 'strong', projectSlugs: ['pulsewatch'] },
      { name: 'NestJS / Hono', level: 'working' },
      { name: 'FastAPI', level: 'working', projectSlugs: ['vistara-bi'] },
      { name: 'REST APIs', level: 'strong', featured: true },
      { name: 'Scheduled workers', level: 'working', projectSlugs: ['pulsewatch'] },
    ],
  },
  {
    id: 'data-ai',
    title: 'Data, AI & Automation',
    summary:
      'Using data pipelines, LLM workflows and automation where they reduce manual work or reveal better decisions.',
    skills: [
      { name: 'PostgreSQL', level: 'strong', featured: true, projectSlugs: ['tracknow', 'clinicos', 'vistara-bi', 'pulsewatch'] },
      { name: 'Redis', level: 'working', projectSlugs: ['timeflex', 'teamcord'] },
      { name: 'Python', level: 'working', projectSlugs: ['vistara-bi'] },
      { name: 'LLM workflows', level: 'working', featured: true, projectSlugs: ['clinicos', 'vistara-bi'] },
      { name: 'RAG / vector search', level: 'working' },
      { name: 'Business intelligence', level: 'working', projectSlugs: ['vistara-bi'] },
    ],
  },
  {
    id: 'security-reliability',
    title: 'Security & Reliability',
    summary:
      'Thinking through boundaries, uptime, auth, audit trails and deployment workflows before the UI makes promises.',
    skills: [
      { name: 'JWT authentication', level: 'strong', featured: true, projectSlugs: ['attendance'] },
      { name: 'bcrypt', level: 'working', projectSlugs: ['attendance'] },
      { name: 'CIDR validation', level: 'working', projectSlugs: ['attendance'] },
      { name: 'Docker', level: 'working', featured: true },
      { name: 'GitHub Actions', level: 'working', experienceIds: ['sparkplus-dev'] },
      { name: 'Prometheus / Grafana', level: 'working' },
    ],
  },
  {
    id: 'desktop-realtime',
    title: 'Realtime & Desktop Systems',
    summary:
      'Working with realtime communication, audio routing and platform-specific constraints when products need lower-level control.',
    skills: [
      { name: 'WebSockets', level: 'working', featured: true, projectSlugs: ['teamcord'] },
      { name: 'WebRTC', level: 'working', projectSlugs: ['teamcord'] },
      { name: '.NET 8', level: 'working', projectSlugs: ['echobridge'] },
      { name: 'WPF', level: 'working', projectSlugs: ['echobridge'] },
      { name: 'WASAPI / NAudio', level: 'working', featured: true, projectSlugs: ['echobridge'] },
    ],
  },
  {
    id: 'product-leadership',
    title: 'Product, Design & Community',
    summary:
      'Connecting software decisions to users, events, branding, operations and the messy work around shipping.',
    skills: [
      { name: 'Product thinking', level: 'strong', featured: true, projectSlugs: ['stix-n-vibes', 'clinicos'] },
      { name: 'Community programming', level: 'strong', featured: true, experienceIds: ['solo-community'] },
      { name: 'Technical workshops', level: 'working', experienceIds: ['education-aitd'] },
      { name: 'Brand positioning', level: 'working', experienceIds: ['solo-community', 'stix-founder'] },
      { name: 'Client communication', level: 'strong', experienceIds: ['stix-founder'] },
    ],
  },
];

export const featuredSkills = skillGroups.flatMap((group) =>
  group.skills
    .filter((skill) => skill.featured)
    .map((skill) => ({
      ...skill,
      group: group.title,
    })),
);
