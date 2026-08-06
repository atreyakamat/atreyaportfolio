import portrait from '../assets/atreya_portrait.png';
import candid from '../assets/atreya_candid.png';

export const profile = {
  name: 'Atreya Kamat',
  location: 'Goa, India',
  email: 'atkamat1204@gmail.com',
  phone: '+91 77440 20601',
  github: 'https://github.com/atreyakamat',
  linkedin: 'https://linkedin.com/in/atreyakamat',
  resumeFileName: 'Atreya_Kamat_Resume.pdf',
  portrait,
  candid,
  headline: 'I make useful things happen.',
  intro:
    'Software engineer and product builder working across web products, systems, automation, AI tooling and the details that make software feel usable.',
  resumeFeaturedProjects: ['pulsewatch', 'stix-n-vibes', 'teamcord'],
  credibility: [
    'Junior Developer Intern at SparkPlus Technologies',
    'B.E. Computer Engineering, CGPA 8.92 / 10.0',
    'Based in Goa, building across product, code and community',
  ],
};

export const ecosystem = [
  {
    id: 'create',
    title: 'Create',
    label: 'creative direction, stickers, visual systems',
    enabled: false,
  },
  {
    id: 'teach',
    title: 'Teach',
    label: 'mentoring, workshops, engineering fundamentals',
    enabled: false,
  },
  {
    id: 'speak',
    title: 'Speak',
    label: 'events, community programming, technical sessions',
    enabled: false,
  },
  {
    id: 'experiment',
    title: 'Experiment',
    label: 'AI workflows, audio systems, prototypes',
    enabled: false,
  },
];

export interface ArchiveItem {
  label: string;
  category: string;
  aspect: string;
  image: string;
  alt: string;
  year?: string;
  href?: string;
}

export const archiveSection = {
  label: 'LIFE // ARCHIVE',
  title: 'A visual record of building, community and craft.',
  description: 'Fragments from software development, workshops, student leadership and creative projects.',
};

export const archiveItems: ArchiveItem[] = [
  {
    label: 'SparkPlus Production Engineering',
    category: 'Work',
    aspect: 'aspect-[4/5]',
    image: portrait,
    alt: 'Atreya Kamat working at a laptop in a bright studio space',
  },
  {
    label: 'Product Design & System Architecture',
    category: 'Projects',
    aspect: 'aspect-[16/9]',
    image: candid,
    alt: 'Atreya Kamat working on a laptop beside a window in Goa',
  },
  {
    label: 'ACCESS Student Council Leadership',
    category: 'Community work',
    aspect: 'aspect-[3/4]',
    image: portrait,
    alt: 'Portrait of Atreya Kamat representing student leadership',
  },
  {
    label: 'Techyothon & Engineering Workshops 2025',
    category: 'Workshops',
    aspect: 'aspect-[4/5]',
    image: candid,
    alt: 'Atreya Kamat in a work setting, representing student leadership archive material',
  },
  {
    label: "Stix 'N' Vibes Sticker Venture",
    category: 'Creative work',
    aspect: 'aspect-[1/1]',
    image: portrait,
    alt: 'Atreya Kamat portrait used for entrepreneurship archive material',
  },
];

export const resumeAssetNeeds = [
  'Current PDF resume exported as /public/Atreya_Kamat_Resume.pdf',
  'Workshop/event photographs for ACCESS, Techyothon, Tech Urja and SOLO',
  "Product photographs for Stix 'N' Vibes stickers and packaging",
  'Project screenshots or short demo videos for pinned project pages',
];
