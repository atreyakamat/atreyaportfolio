/**
 * Content for speak.atreyakamat.dev.
 * Honest only: the AITD workshop is the one talk with verifiable material
 * (its slide deck is in the ai-tools-workshop-aitd repo). Everything else here
 * is an offer (topics, formats), not a claim about past events.
 */

export const site = {
  url: "https://speak.atreyakamat.dev",
  devUrl: "https://atreyakamat.dev",
  email: "atkamat1204@gmail.com",
  name: "Atreya Kamat",
  location: "Goa, India",
  linkedin: "https://linkedin.com/in/atreya-kamat",
  github: "https://github.com/atreyakamat",
};

export const bookingMailto = (subject = "Talk / workshop enquiry", body = "") =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ""}`;

export interface AgendaSegment {
  code: string;
  slides: string;
  title: string;
  line: string;
  learn: string[];
}

export const workshop = {
  title: "SOLO × AITD AI Build Workshop",
  venue: "AITD (Agnel Institute of Technology and Design), Goa",
  format: "Hands-on workshop",
  slides: 34,
  tools: 4,
  summary:
    "A hands-on session for students on moving from learning to building: a structured path into frontend or backend work, a simple framework for prompting AI well, and live tours of four AI tools for designing, prototyping, automating and coding.",
  deckUrl: "/decks/solo-aitd/",
  agenda: [
    {
      code: "01",
      slides: "2–5",
      title: "SOLO platform",
      line: "Stop just learning. Start building.",
      learn: [
        "What SOLO is: a learning ecosystem built around real projects",
        "The journey: create a profile, pick a learning path, build, earn credentials, showcase work",
        "Getting started on the platform",
      ],
    },
    {
      code: "02",
      slides: "6–8",
      title: "Development pathways",
      line: "Pick a path, not a pile of tutorials.",
      learn: [
        "Frontend: what users see and interact with",
        "Backend: the logic, databases and systems behind it",
        "Why a structured path beats jumping between tools",
      ],
    },
    {
      code: "03",
      slides: "9–13",
      title: "Prompt engineering",
      line: "Output quality follows instruction quality.",
      learn: [
        "Role: tell the AI who it is",
        "Context: the problem, project and environment",
        "Objective and constraints: exactly what you want, in what shape",
      ],
    },
    {
      code: "04",
      slides: "14–18",
      title: "Google Stitch",
      line: "From a sentence to a working interface.",
      learn: [
        "Generating polished UI from natural-language prompts",
        "The loop: describe, generate, refine, export",
        "Closing the gap between design and code",
      ],
    },
    {
      code: "05",
      slides: "19–23",
      title: "Google AI Studio",
      line: "Test the prompt before you write the app.",
      learn: [
        "A browser-based playground for Gemini models",
        "Comparing prompts and outputs side by side",
        "Prototyping AI features before writing code",
      ],
    },
    {
      code: "06",
      slides: "24–28",
      title: "Antigravity",
      line: "Automations without a big engineering team.",
      learn: [
        "Building AI workflows with little or no code",
        "Connecting services and multi-step AI pipelines",
        "Automating repetitive work",
      ],
    },
    {
      code: "07",
      slides: "29–33",
      title: "Gemini CLI",
      line: "AI where developers already work: the terminal.",
      learn: [
        "Using Gemini from the command line",
        "Chaining it with git, npm and build tools",
        "Where it speeds up day-to-day development",
      ],
    },
    {
      code: "08",
      slides: "34",
      title: "Build mode",
      line: "Now it is your turn.",
      learn: ["Picking a first project", "Putting the tools together", "Shipping something real"],
    },
  ] satisfies AgendaSegment[],
};

export interface Topic {
  code: string;
  title: string;
  desc: string;
  points: string[];
  audience: string;
}

export const topics: Topic[] = [
  {
    code: "T/01",
    title: "AI tools for builders",
    desc: "A hands-on tour of the AI tools that change how software gets made, with live demos instead of slides about slides.",
    points: ["Design and UI generation", "Prompt playgrounds and prototyping", "AI in the terminal", "Running models locally"],
    audience: "Students · developers",
  },
  {
    code: "T/02",
    title: "Prompting that ships",
    desc: "Role, context, objective and constraints: a simple framework that turns vague AI answers into usable output.",
    points: ["The four-part prompt", "Before / after rewrites", "Prompting for code, copy and data"],
    audience: "Anyone using AI at work",
  },
  {
    code: "T/03",
    title: "From idea to shipped product",
    desc: "How a product goes from a messy problem to something live: scoping, specs, building in slices and launching.",
    points: ["Scoping the smallest useful version", "Writing it down before coding", "Launch, measure, tighten"],
    audience: "Students · founders",
  },
  {
    code: "T/04",
    title: "Systems for small businesses",
    desc: "Why spreadsheets and WhatsApp threads stop scaling, and what a small team in Goa can replace them with.",
    points: ["Spotting the time leaks", "Websites vs internal tools vs automation", "Owning your code and data"],
    audience: "Business owners · managers",
  },
  {
    code: "T/05",
    title: "Getting into tech by building",
    desc: "Internships, real projects and a portfolio that proves it. What actually helped, from someone who did it recently.",
    points: ["Projects over certificates", "Learning in public", "Turning coursework into real work"],
    audience: "School & college students",
  },
];

export const formats = [
  { title: "Talk", desc: "A focused talk for a conference, meetup or company session, built around live demos and real projects." },
  { title: "Hands-on workshop", desc: "Laptops open. Attendees follow along and leave with something they built themselves." },
  { title: "College session", desc: "Guest lectures and workshops for students, tuned to their year and syllabus." },
  { title: "Panel & fireside", desc: "Conversations on AI, building products and starting a career in tech." },
];

export const bios = {
  short:
    "Atreya Kamat is a software engineer and freelance product builder based in Goa. He builds web products, internal tools and AI automation, and runs hands-on workshops that get people building with AI tools, not just reading about them.",
  long:
    "Atreya Kamat is a software engineer and freelance product builder based in Goa, India. He studied Computer Engineering (B.E.) at the Agnel Institute of Technology and Design, with Honours in Artificial Intelligence & Machine Learning from Goa University. He has worked on production platform monitoring and deployments at SparkPlus Tech, AI chatbots and OCR pipelines with Infosys Springboard, and computer vision as a Google AI-ML virtual intern, and trained in microservices and DevOps at Revature. Today he builds websites, custom software and AI automation for businesses, alongside products of his own such as Track.now. His sessions are practical: live demos, real projects, and tools people can use the same day.",
};

export const faqs = [
  {
    q: "Where are you based?",
    a: "In Goa, India. I'm open to in-person sessions in Goa and online sessions anywhere else.",
  },
  {
    q: "Can the session be tailored to my audience?",
    a: "Yes. Tell me who is in the room (school students, college students, developers or business owners) and I'll pitch the depth, examples and tools to match.",
  },
  {
    q: "What do you need from organisers?",
    a: "Usually a projector or screen with HDMI and reliable Wi-Fi for live demos. For hands-on workshops, attendees bring laptops. I'll confirm the exact list once we agree the format.",
  },
  {
    q: "Do you share slides afterwards?",
    a: "Yes. The SOLO × AITD workshop deck is public on this site, and I share slides for other sessions with organisers.",
  },
  {
    q: "What does it cost?",
    a: "It depends on the format, audience and location. Send the details through the form below and I'll reply with a clear answer.",
  },
];
