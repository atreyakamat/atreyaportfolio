export type ProjectStatus = 'shipped' | 'active' | 'prototype' | 'archived';

export type ProjectCategory =
  | 'Product'
  | 'Web'
  | 'AI/Data'
  | 'Systems/Tools'
  | 'Commerce'
  | 'Education';

export interface MediaAsset {
  type: 'image' | 'video' | 'placeholder';
  src?: string;
  poster?: string;
  alt: string;
  caption?: string;
}

export interface ProjectDecision {
  decision: string;
  why: string;
  tradeoff?: string;
}

export interface WalkthroughStep {
  title: string;
  body: string;
}

export interface StackGroup {
  label: string;
  items: string[];
}

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription?: string;
  category: ProjectCategory;
  tags: string[];
  year: string;
  status: ProjectStatus;
  role: string[];
  featured: boolean;
  featuredOrder?: number;
  cover: MediaAsset;
  gallery: MediaAsset[];
  demo?: {
    type: 'live' | 'video';
    url?: string;
    videoSrc?: string;
    poster?: string;
    label: string;
  };
  links?: {
    live?: string;
    github?: string;
    documentation?: string;
  };
  problem?: string;
  contribution: string[];
  walkthrough: WalkthroughStep[];
  decisions: ProjectDecision[];
  stack: StackGroup[];
  outcomes: string[];
  learnings: string[];
  assetNeeds?: string[];
}

export interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  type?: string;
  location: string;
  period: string;
  summary: string;
  contributions: string[];
  relatedProjectSlugs?: string[];
  current?: boolean;
}

export interface Skill {
  name: string;
  level?: 'working' | 'strong' | 'advanced';
  projectSlugs?: string[];
  experienceIds?: string[];
  featured?: boolean;
}

export interface SkillGroup {
  id: string;
  title: string;
  summary: string;
  skills: Skill[];
}
