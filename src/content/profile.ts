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

export const archiveItems = [
  {
    label: 'SparkPlus production work',
    image: portrait,
    alt: 'Atreya Kamat working at a laptop in a bright studio space',
  },
  {
    label: 'Goa-based product building',
    image: candid,
    alt: 'Atreya Kamat working on a laptop beside a window in Goa',
  },
  {
    label: 'ACCESS Student Council',
    image: portrait,
    alt: 'Portrait of Atreya Kamat used as a personal archive image',
  },
  {
    label: 'Techyothon and Tech Urja 2025',
    image: candid,
    alt: 'Atreya Kamat in a work setting, representing student leadership archive material',
  },
  {
    label: "Stix 'N' Vibes",
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
