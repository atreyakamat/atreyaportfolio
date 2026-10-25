/**
 * Content for teach.atreyakamat.dev.
 * Only facts Atreya has confirmed: what he teaches, how (1:1 in person in Goa,
 * small batches) and how to enquire. No prices, boards, results or testimonials.
 */

export const site = {
  url: "https://teach.atreyakamat.dev",
  name: "Atreya Kamat — Tuition & Workshops",
  email: "atkamat1204@gmail.com",
  /**
   * WhatsApp number for enquiries, digits only with country code (e.g. "919876543210").
   * Leave empty until Atreya supplies it: every enquiry button then falls back to
   * a prefilled email. Once set, the same buttons open WhatsApp with the message.
   */
  whatsappNumber: "",
};

export interface Track {
  code: string;
  slug: string;
  name: string;
  forWho: string;
  learn: string[];
  format: string;
  note?: { text: string; href: string; label: string };
}

export const tracks: Track[] = [
  {
    code: "T/01",
    slug: "school-cs",
    name: "School Computer Science",
    forWho: "Students in Class 8 to 12 who want the subject to finally click, not just survive the exam.",
    learn: [
      "Programming concepts explained from the ground up",
      "Writing, tracing and debugging programs by hand and on screen",
      "Practice on the kind of questions your syllabus asks",
      "Projects and practicals done properly, with understanding",
    ],
    format: "1:1 in person or small batch",
  },
  {
    code: "T/02",
    slug: "college-cs",
    name: "College CS & Engineering",
    forWho: "Degree and engineering students who need a clear explanation and someone to practise with.",
    learn: [
      "Data structures & algorithms, step by step",
      "DBMS and SQL with real schemas",
      "Object-oriented programming",
      "Web development, and help understanding your own project so you can explain it",
    ],
    format: "1:1 in person or small batch",
  },
  {
    code: "T/03",
    slug: "coding-from-zero",
    name: "Coding from Zero",
    forWho: "Anyone, any age, who has never written code and wants to start without feeling lost.",
    learn: [
      "Python fundamentals through small, useful programs",
      "How the web works: HTML, CSS and a little JavaScript",
      "Thinking in steps: breaking a problem down",
      "A first project you can show someone",
    ],
    format: "1:1 in person or small batch",
  },
  {
    code: "T/04",
    slug: "ai-tools-workshops",
    name: "AI Tools Workshops",
    forWho: "Colleges, clubs and teams who want a hands-on session on building with today's AI tools.",
    learn: [
      "Prompting with role, context, objective and constraints",
      "Generating UI and prototypes with AI tools",
      "Working with Gemini models and AI from the terminal",
      "Going from an idea to something that runs",
    ],
    format: "Batch workshop",
    note: {
      text: "Based on the SOLO × AITD AI Build Workshop I ran at AITD, Goa.",
      href: "https://speak.atreyakamat.dev",
      label: "See it on speak",
    },
  },
];

export const formats = [
  {
    name: "1:1 in person",
    tag: "Goa",
    points: [
      "Fully paced to one student",
      "We work on your syllabus, your doubts, your project",
      "In person, across Goa: tell me your area",
    ],
  },
  {
    name: "Small batches",
    tag: "Groups",
    points: [
      "A few students learning together",
      "Same level, so nobody is left behind",
      "Good for friends, classmates or a club",
    ],
  },
];

export const steps = [
  { code: "01", title: "First session", desc: "We find your level, your goal and what is getting in the way." },
  { code: "02", title: "A plan", desc: "A short written plan: topics in order, and what 'done' looks like for you." },
  { code: "03", title: "Weekly practice", desc: "Concepts, then real problems. You write the code; I help you see why it works." },
  { code: "04", title: "Projects", desc: "Small builds that prove the skill and give you something to show." },
];

export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: "What happens in the first session?",
    a: "We figure out where you are and where you want to get to. I ask a few questions, look at what you have been working on, and we agree on a plan. You leave knowing exactly what we will cover next.",
  },
  {
    q: "Where do classes happen?",
    a: "In person, across Goa. Tell me your area when you enquire and we will work out the most convenient place.",
  },
  {
    q: "Do you teach online?",
    a: "Sessions are in person in Goa. If you need online classes, mention it in your enquiry and I will tell you honestly whether it can work.",
  },
  {
    q: "How big are the batches?",
    a: "Small, so every student gets attention and can ask questions. Batches are grouped by level.",
  },
  {
    q: "Which classes and subjects do you cover?",
    a: "School computer science from Class 8 to 12, college computer science and engineering subjects, coding from zero for any age, and AI tools workshops for groups.",
  },
  {
    q: "Can you run a workshop at our college or club?",
    a: "Yes. AI tools workshops are run as batch sessions. Send the date, audience and topic and I will reply with a plan.",
  },
];

export const levels = ["Class 8–10", "Class 11–12", "College / engineering", "Beginner (any age)", "College / club workshop"];
export const formatOptions = ["1:1 in person", "Small batch", "Not sure yet"];

/** Facts mirrored from apps/dev/src/data/portfolio.ts (keep in sync). */
export const credentials = {
  roles: [
    { company: "Revature", role: "Trainee" },
    { company: "SparkPlus Tech.", role: "Junior Developer Intern" },
    { company: "Infosys Springboard", role: "Intern" },
    { company: "Google", role: "AI-ML Virtual Intern" },
  ],
  degrees: ["B.E. in Computer Engineering", "Honours in AI & Machine Learning"],
  systemsBuilt: 10,
};

export const teachingManifesto =
  "I teach the way I work as a software engineer: understand the problem first, write it down, then build it one small step at a time. No rote answers. You write the code, you break it, you fix it, and by the end you can explain why it works.";
