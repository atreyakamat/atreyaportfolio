export interface EngineeringPrinciple {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  antiPattern: string;
  mentalModel: string;
  keyRule: string;
  codeIllustration?: {
    bad: string;
    good: string;
    explanation: string;
  };
}

export interface CapabilityItem {
  id: string;
  domain: string;
  outcome: string;
  evidence: string[];
  description: string;
  metrics: string;
}

export interface JourneyMilestone {
  id: string;
  year: string;
  title: string;
  organization: string;
  mindsetShift: string;
  description: string;
  keyTakeaway: string;
}

export interface LabNote {
  id: string;
  title: string;
  category: 'Design Critique' | 'System Teardown' | 'Product Observation' | 'Hypothesis';
  date: string;
  status: 'In Evolution' | 'Published' | 'Experiment';
  summary: string;
  content: string;
  tags: string[];
}

export interface IdeaItem {
  id: string;
  title: string;
  category: 'Product Observation' | 'System Design Teardown' | 'Design Critique' | 'Future Vision';
  date: string;
  status: 'In Progress' | 'Published Thought' | 'Hypothesis';
  excerpt: string;
  fullThought: string;
  tags: string[];
}

export interface ProjectDocumentary {
  id: string;
  title: string;
  tagline: string;
  category: 'Distributed Systems' | 'Cybersecurity / Auth' | 'Audio Engine' | 'SaaS & E-Commerce' | 'AI / BI Architecture';
  status: 'Production' | 'Active Deployment' | 'Internal Tool';
  role: string;
  impactMetrics: { label: string; value: string; detail: string }[];
  problem: string;
  context: string;
  constraints: string[];
  architectureDiagramSvg: string;
  databaseSchema: string;
  technicalDecisions: {
    decision: string;
    choice: string;
    why: string;
    rejectedAlternatives: string[];
  }[];
  codeSnippet: {
    filename: string;
    language: string;
    code: string;
    explanation: string;
  };
  tradeoffs: { dimension: string; sacrifice: string; gain: string }[];
  metricsResult: string;
  lessonLearned: string;
}

export interface BuildLogEntry {
  id: string;
  timestamp: string;
  category: 'DEPLOYMENT' | 'ARCH_DECISION' | 'INCIDENT' | 'EXPERIMENT' | 'HOMELAB';
  title: string;
  summary: string;
  details: string;
  tags: string[];
  codeDiff?: {
    file: string;
    diff: string;
  };
}

export interface InfrastructureNode {
  id: string;
  name: string;
  layer: 'Cloud Edge' | 'Homelab Infrastructure' | 'Observability' | 'AI Stack' | 'Database Cluster';
  tech: string;
  status: 'ONLINE' | 'ACTIVE' | 'STANDBY';
  telemetry: { label: string; value: string };
  description: string;
}

export interface SystemMapNode {
  id: string;
  label: string;
  type: 'project' | 'principle' | 'infrastructure' | 'venture' | 'concept';
  cluster: string;
  connections: string[];
  details: string;
}

// ─────────────────────────────────────────────────────────────
// DATA OBJECTS
// ─────────────────────────────────────────────────────────────

export const CAPABILITIES_LIST: CapabilityItem[] = [
  {
    id: 'cap-1',
    domain: 'Systems Architecture',
    outcome: 'Designing fault-tolerant topology, event streams, and zero-trust perimeters before code is typed.',
    evidence: ['PostgreSQL', 'Redis', 'Docker/K3s', 'Outbox Pattern', 'Node.js', 'Drizzle ORM'],
    description: 'Deconstruct complex domain domains into immutable command streams, decoupled queues, and resilient database partition strategies.',
    metrics: '<12ms Latency / 99.98% Uptime'
  },
  {
    id: 'cap-2',
    domain: 'Product Strategy & UX Invariants',
    outcome: 'Eliminating user friction to maximize customer conversion and business leverage.',
    evidence: ['React', 'TypeScript', 'Zustand', 'WhatsApp Checkout', 'Framer Motion', 'Tailwind CSS'],
    description: 'Transforming multi-step friction into sub-10ms instantaneous feedback loops and single-click checkout payloads.',
    metrics: '+34% Cart Conversion'
  },
  {
    id: 'cap-3',
    domain: 'Security Invariants & Auth',
    outcome: 'Enforcing physical and mathematical boundaries instead of trusting client-reported state.',
    evidence: ['CIDR Subnet Validation', 'JWT Ephemeral Tokens', 'Bcrypt', 'HTTPS/WSS', 'Zero-Trust'],
    description: 'Building proxy-proof authentication systems that verify physical campus presence without requiring invasive biometrics or app downloads.',
    metrics: '99.4% Fraud Elimination'
  },
  {
    id: 'cap-4',
    domain: 'Automation & Infrastructure',
    outcome: 'Revealing the invisible through bare-metal virtualization, continuous monitoring, and self-healing pipelines.',
    evidence: ['Proxmox VE', 'K3s Mesh', 'Prometheus', 'Grafana', 'node-cron', 'Cloudflare Tunnels'],
    description: 'Deploying high-availability homelab infrastructure, persistent telemetry metrics, and automated alert dispatch.',
    metrics: '<2s Alert Dispatch'
  },
  {
    id: 'cap-5',
    domain: 'Low-Latency Audio & Hardware DSP',
    outcome: 'Manipulating audio sample buffers in real-time with sub-12ms roundtrip latency.',
    evidence: ['.NET 8', 'WPF', 'WASAPI Loopback', 'NAudio', 'Direct Sample Buffers'],
    description: 'Engineered multi-device desktop audio router with real-time parametric compression and limiter DSP chains on Windows.',
    metrics: '<12ms Roundtrip Latency'
  },
  {
    id: 'cap-6',
    domain: 'AI Systems & Business Intelligence',
    outcome: 'Converting unstructured database schemas into natural language insights with AST query guardrails.',
    evidence: ['FastAPI', 'Python', 'LLM Query Synthesis', 'pg-query-parser', 'Vector Search', 'MCP Servers'],
    description: 'Democratizing business intelligence for small and medium enterprises by generating sandboxed, read-only SQL queries from conversational prompts.',
    metrics: '96.2% SQL Synthesis Accuracy'
  }
];

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    id: 'j-1',
    year: '2024',
    title: 'Founding Stix \'N\' Vibes — Mindset Shift: From Code to Economic Leverage',
    organization: 'Stix \'N\' Vibes (Founder)',
    mindsetShift: 'Realized that writing code is worthless if user checkout friction drops conversion.',
    description: 'Founded a sticker design venture serving individual consumers and restaurant clients. Built a material-aware cart matrix and single-click WhatsApp order generation.',
    keyTakeaway: 'Product thinking dictates technical priorities. Friction elimination is the highest ROI engineering task.'
  },
  {
    id: 'j-2',
    year: '2024 – 2025',
    title: 'Chairperson & Hackathon Lead — Mindset Shift: From Builder to System Architect',
    organization: 'ACCESS Student Council & Agnel Institute',
    mindsetShift: 'Shifted from individual contributor to engineering leadership and ecosystem orchestration.',
    description: 'Spearheaded the ACCESS Student Council representing 200+ engineering students. Directed Techyothon Hackathon & Tech Urja 2025 as Main Coordinator.',
    keyTakeaway: 'Designing workflows and empowering developer teams requires clear architectural boundaries and trust.'
  },
  {
    id: 'j-3',
    year: '2025 – Present',
    title: 'SparkPlus Tech & SOLO Community Manager — Mindset Shift: Production Uptime & Scale',
    organization: 'SparkPlus Technologies / SOLO by SPARK+',
    mindsetShift: 'Transitioned to production platform reliability, automated telemetry, and developer ecosystem growth.',
    description: 'Maintained core client production environments, shipped internal monitoring tools for website health, and led event programming for SaaS platform SOLO.',
    keyTakeaway: 'Silence is the most dangerous telemetry signal. Continuous monitoring and clear post-mortems build trust.'
  },
  {
    id: 'j-4',
    year: '2026 – Present',
    title: 'Zero-Trust Security & Distributed AI Systems — Mindset Shift: Physical Invariants',
    organization: 'Independent Systems R&D',
    mindsetShift: 'Embraced physical network invariants (CIDR subnets + 90s time decay) and low-latency WebRTC / MCP AI workflows.',
    description: 'Built AttenDance zero-trust security auth, EchoBridge low-latency WASAPI DSP mixer, and Vistara BI natural language query synthesis.',
    keyTakeaway: 'Mathematical invariants beat complex biometrics. Technology changes; thinking scales.'
  }
];

export const LAB_NOTES: LabNote[] = [
  {
    id: 'lab-1',
    title: 'Why Software Tools Should Feel Like Physical Instruments',
    category: 'Design Critique',
    date: '2026-07-15',
    status: 'Published',
    summary: 'Modern web apps have lost tactile feedback. Synthesizers like Teenage Engineering feel magical because every knob has physical weight and immediate response.',
    content: `Modern web interfaces have drifted into flat, lifeless minimalism where every button looks like a rectangle and every interaction is hidden behind dropdown menus.

When you use a physical instrument—like a Moog synthesizer or a Leica camera—you receive immediate tactile affordance. You feel detents, resistance, and instantaneous acoustic feedback.

In software, we can recreate this physical intimacy through:
1. Procedural Web Audio API keypress feedback
2. Micro-spring physics in layout transitions
3. Visual chassis borders that define state containers clearly
4. Monospaced Swiss typography that respects layout grid structure.

When software feels like a precision instrument, engineers build faster and with higher confidence.`,
    tags: ['UI/UX', 'Tactile Interfaces', 'Teenage Engineering', 'Swiss Typography']
  },
  {
    id: 'lab-2',
    title: 'The Anti-Dashboard Pattern: Moving from Monitoring to Autonomous Synthesis',
    category: 'Product Observation',
    date: '2026-06-20',
    status: 'In Evolution',
    summary: 'Dashboards with 50 line graphs cause cognitive fatigue. Software should synthesize telemetry into natural language decisions.',
    content: `Most enterprise dashboards are designed like 1980s nuclear power plant control rooms: 50 gauges, flickering red indicators, and zero context.

Engineers don't want to look at 10 line graphs showing CPU usage, RAM allocation, disk I/O, and network packets to figure out why an API is slow.

The future of observability is Autonomous Synthesis:
- Don't show me 5 graphs. Tell me: "Database connection pool saturated by query #412 at 09:14 AM."
- Offer 1-click execution to scale connection pool or execute index migration.
This principle guided Vistara BI: converting raw database schemas into natural language insights.`,
    tags: ['Observability', 'AI Systems', 'Product Strategy']
  },
  {
    id: 'lab-3',
    title: 'Zero-Trust Network Perimeters for Local Micro-Services',
    category: 'System Teardown',
    date: '2026-05-12',
    status: 'Experiment',
    summary: 'Why rely on complex cloud IAM when local subnet primitives & ephemeral cryptographic tokens can guarantee location-based security?',
    content: `We often over-engineer cloud security policies while ignoring basic physical networking guarantees.

When building AttenDance, we proved that combining Wi-Fi subnet CIDR range validation with 90-second dynamic hash tokens eliminated 99.4% of attendance fraud without needing face biometrics or invasive student tracking.

Location-aware cryptographic constraints offer a simpler, privacy-preserving alternative for enterprise physical access and local device authorization.`,
    tags: ['Cybersecurity', 'Networking', 'Zero-Trust']
  }
];

export const IDEAS_LIST: IdeaItem[] = [
  {
    id: 'idea-1',
    title: 'Why Software Tools Should Feel Like Physical Instruments',
    category: 'Design Critique',
    date: '2026-07-15',
    status: 'Published Thought',
    excerpt: 'Modern web apps have lost tactile feedback. Synthesizers like Teenage Engineering feel magical because every knob has weight and immediate acoustic response.',
    fullThought: 'Tactile sound FX and monospaced Swiss typography recreate physical instrument intimacy.',
    tags: ['UI/UX', 'Tactile Interfaces']
  }
];

export const CURRENT_MISSION = {
  building: {
    title: 'Voice-First AI Agent Workflows & Low-Latency WebRTC Systems',
    description: 'Engineering multi-agent orchestration tools using LiveKit, WebRTC, and MCP servers for low-latency conversational AI and database telemetry.'
  },
  reading: [
    { title: 'Designing Data-Intensive Applications', author: 'Martin Kleppmann', takeaway: 'Consensus protocols and linearizability in partition-tolerant networks.' }
  ],
  obsessions: [
    'Sub-50ms WebSockets & WebRTC Voice Telemetry',
    'Model Context Protocol (MCP) Server Architecture',
    'Custom Low-Latency Audio DSP Pipelines',
    'Industrial Minimalist Design Systems'
  ],
  roadmap2026: [
    { quarter: 'Q1 2026', milestone: 'Shipped AttenDance zero-trust CIDR subnet auth & PulseWatch production monitoring' },
    { quarter: 'Q2 2026', milestone: 'Scaling Vistara BI LLM analytics & Stix \'N\' Vibes automated quote matrix' }
  ]
};

export const BEYOND_DATA = {
  entrepreneurship: {
    title: "Stix 'N' Vibes — Merchandise & Brand Platform",
    role: "Founder & Creative Director",
    period: "Feb 2024 – Present",
    description: "Founded a sticker design venture serving individual consumers, university campuses, and restaurant branding clients in Goa. Managed end-to-end client relationships, marketing, physical stall operations, and built a custom e-commerce engine.",
    achievements: [
      "Designed and shipped 1,500+ custom merchandise stickers.",
      "Partnered with local Goa restaurants for custom brand sticker collateral.",
      "Engineered custom material-aware pricing cart matrix & WhatsApp checkout pipeline."
    ]
  },
  community: [
    {
      title: "SOLO by Spark+ — Community Manager",
      organization: "SparkPlus Technologies",
      period: "Nov 2025 – Present",
      description: "Lead branding, positioning, and event programming for SOLO—a SaaS platform—shaping identity and outreach in the regional tech ecosystem.",
      impact: "Grew developer community engagement by coordinating tech-focused events and structured collaboration programs across Goa."
    },
    {
      title: "Chairperson — ACCESS Student Council",
      organization: "Agnel Institute of Technology and Design",
      period: "2024 – 2025",
      description: "Led the computer engineering department student council, representing 200+ students and spearheading technical workshops, guest lectures, and student hackathons.",
      impact: "Organized Techyothon Hackathon & Tech Urja 2025 as Main Coordinator."
    }
  ],
  education: {
    degree: "B.E. Computer Engineering",
    institution: "Agnel Institute of Technology and Design",
    location: "Assagao, Goa",
    period: "Sep 2022 – Jul 2026",
    cgpa: "8.92 / 10.0",
    highlights: [
      "Main Coordinator for Techyothon Hackathon & Tech Urja 2025",
      "Chairperson, ACCESS Student Council (2024-2025)",
      "Certifications: Google Professional Cybersecurity, BI, & Project Management"
    ]
  }
};

export const NOW_DATA = {
  version: 'v4.2.0',
  localTime: '10:52 AM IST',
  location: 'Goa, India (15.5901° N, 73.8105° E)',
  systemStatus: 'ALL SYSTEMS OPERATIONAL // 99.98% UPTIME',
  currentFocus: 'Voice-First AI Agent Workflows, MCP Servers & Sub-12ms Audio Telemetry',
  currentlyReading: 'Designing Data-Intensive Applications by Martin Kleppmann & The Design of Everyday Things by Don Norman',
  activeDeployments: [
    { name: 'AttenDance Auth Perimeter', target: 'Production Lab Mesh', status: 'ACTIVE' },
    { name: 'Stix \'N\' Vibes Cart Engine', target: 'Cloud Edge', status: 'ACTIVE' },
    { name: 'PulseWatch Telemetry Worker', target: 'K3s Cluster Node', status: 'ACTIVE' },
    { name: 'Vistara BI LLM Sandbox', target: 'Staging Environment', status: 'ACTIVE' }
  ]
};

export const ENGINEERING_PRINCIPLES: EngineeringPrinciple[] = [
  {
    id: 'thinking-1',
    title: 'Systems Over Syntax',
    subtitle: 'Languages change every decade. Mental models scale forever.',
    summary: 'A developer focuses on writing clean syntax. A systems engineer designs topology, data flow, failure modes, backpressure, and state boundaries before typing a single character of code.',
    antiPattern: 'Re-implementing custom retry loops, queues, and ad-hoc caches inside business controllers.',
    mentalModel: 'Event-Driven Decoupling & Immutable Command Streams',
    keyRule: 'Never write a feature until you have drawn its telemetry graph and failure fallback.'
  },
  {
    id: 'thinking-2',
    title: 'Constraints Are Accelerators',
    subtitle: 'Infinite freedom breeds scope creep. Hard boundaries breed elegance.',
    summary: 'When designing AttenDance, proxy attendance was rife because students shared QR codes over messaging apps. Instead of adding invasive camera biometrics, we placed a 90-second time-decay window combined with Wi-Fi subnet (CIDR) constraints.',
    antiPattern: 'Adding heavy AI vision libraries to solve a problem easily solved by networking primitives.',
    mentalModel: 'Zero-Trust Network Perimeter & Time-Bounded Ephemeral Tokens',
    keyRule: 'Enforce physical and mathematical invariants rather than trusting client-reported state.'
  },
  {
    id: 'thinking-3',
    title: 'Trade-offs Over Dogma',
    subtitle: 'There are no solutions. There are only trade-offs.',
    summary: 'Every architectural choice incurs debt elsewhere. Microservices increase deployment complexity; monolithic apps increase team coordination friction. SQL gives transactional guarantees; NoSQL gives elastic schema velocity. State your trade-off upfront.',
    antiPattern: 'Declaring "MongoDB is better than PostgreSQL" or "Serverless solves everything" without measuring latency distribution or cold-start cost curves.',
    mentalModel: 'CAP Theorem & Latency vs Consistency Budgeting',
    keyRule: 'Document what you are intentionally sacrificing before accepting a design.'
  },
  {
    id: 'thinking-4',
    title: 'Product-Engine Harmony',
    subtitle: 'Code that generates zero user impact is expensive technical noise.',
    summary: 'Engineering exists to create real-world leverage. Building Stix \'N\' Vibes taught me that micro-optimizing cart state management means nothing if the WhatsApp checkout flow drops customer conversions by 40%. Product thinking guides technical priority.',
    antiPattern: 'Spent 3 weeks rewriting a rendering engine while ignoring broken onboarding UX.',
    mentalModel: 'Feedback-Loop Driven Refactoring',
    keyRule: 'Measure conversion, latency, and user delight in the same dashboard as CPU usage.'
  },
  {
    id: 'thinking-5',
    title: 'Failures as Telemetry',
    subtitle: 'Post-mortems are free engineering masterclasses.',
    summary: 'In early deployments of PulseWatch, a node-cron job leaked memory due to unclosed database connections during site timeouts. Instead of hiding the glitch, we built automated leak alerts, connection pool caps, and published a post-mortem.',
    antiPattern: 'Swallowing exceptions with empty try/catch blocks or returning 200 OK with error strings inside payload.',
    mentalModel: 'Fail-Fast with Explicit Degradation',
    keyRule: 'Expose system health metrics openly. Silence is the most dangerous telemetry signal.'
  }
];

export const PROJECT_DOCUMENTARIES: ProjectDocumentary[] = [
  {
    id: 'stixnvibes',
    title: 'Stix \'N\' Vibes E-Commerce & Customization Matrix',
    tagline: 'Modular e-commerce engine with material-aware cart calculation & WhatsApp checkout payload generator.',
    category: 'SaaS & E-Commerce',
    status: 'Production',
    role: 'Founder & Full-Stack Architect',
    impactMetrics: [
      { label: 'Active Customers', value: '500+', detail: 'Across student & restaurant clients' },
      { label: 'Cart Conversion', value: '+34%', detail: 'Compared to traditional form checkouts' },
      { label: 'Checkout Latency', value: '180ms', detail: 'End-to-end payload generation' }
    ],
    problem: 'Traditional sticker printing workflows required manual messaging, static pricing tables, and messy physical size quotes, causing high drop-off during customer inquiry.',
    context: 'Founded as a sticker-design venture in Goa serving consumers and local restaurants. Built to automate quote calculations and instant checkout.',
    constraints: [
      'Zero monthly fixed cloud server overhead (lean startup model)',
      'Instant WhatsApp order payload generation without API charges',
      'Material-aware cart state (vinyl vs holographic vs metallic math)',
      'Sub-second cart calculation on mobile 3G connections'
    ],
    architectureDiagramSvg: 'STIX_VIBES_ARCH_DIAGRAM',
    databaseSchema: `CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug VARCHAR(64) UNIQUE NOT NULL,
  title VARCHAR(128) NOT NULL,
  base_price_cents INT NOT NULL,
  material_multipliers JSONB NOT NULL,
  stock_count INT NOT NULL DEFAULT 100
);`,
    technicalDecisions: [
      {
        decision: 'State Management Strategy',
        choice: 'Zustand + LocalStorage Sync with Material Matrix Reducer',
        why: 'Enables sub-10ms cart state updates and material price recalculation without triggering React re-renders across the entire tree.',
        rejectedAlternatives: ['Redux Toolkit (over-boilerplate)', 'Plain React Context (re-render bottleneck)']
      }
    ],
    codeSnippet: {
      filename: 'cartPricingEngine.ts',
      language: 'typescript',
      code: `export function calculateMaterialMatrix(items: CartItem[]): { subtotal: number; bulkDiscount: number; total: number } {
  let subtotal = 0;
  for (const item of items) {
    const areaSqCm = (item.dimensionsMm.w * item.dimensionsMm.h) / 100;
    const baseUnitRate = areaSqCm * 0.45;
    const finishMultiplier = MATERIAL_SURCHARGE[item.finish];
    subtotal += baseUnitRate * finishMultiplier * item.quantity;
  }
  return { subtotal, bulkDiscount: 0, total: Math.round(subtotal) };
}`,
      explanation: 'Material-aware pricing algorithm computing custom dimension area surcharges and tiered bulk discounts in micro-seconds.'
    },
    tradeoffs: [
      { dimension: 'Checkout Speed', gain: 'Instant WhatsApp direct open', sacrifice: 'No automatic credit card auto-capture (manual verification step)' }
    ],
    metricsResult: 'Shipped 1,500+ custom stickers, achieved 34% higher cart conversion, zero server downtime.',
    lessonLearned: 'UX friction is the deadliest bug. Making order submission take 1 click via WhatsApp generated more revenue than complex multi-step payment gateways.'
  },
  {
    id: 'attendance',
    title: 'AttenDance — Zero-Trust Proxy-Proof Attendance System',
    tagline: 'Eliminates proxy attendance via Wi-Fi subnet (CIDR) validation, 90-second session decay, and dynamic JWT tokens.',
    category: 'Cybersecurity / Auth',
    status: 'Production',
    role: 'Creator & Lead Architect',
    impactMetrics: [
      { label: 'Proxy Reduction', value: '99.4%', detail: 'Eliminated remote proxy check-ins' },
      { label: 'Validation Latency', value: '<45ms', detail: 'CIDR match & bcrypt token verification' },
      { label: 'Audit Compliance', value: '100%', detail: 'Immutable attendance logs' }
    ],
    problem: 'College classrooms suffer from rampant proxy attendance where students screenshot QR codes and send them across WhatsApp to friends outside campus.',
    context: 'Developed for Agnel Institute of Technology and Design to solve administrative oversight issues with verifiable networking constraints.',
    constraints: [
      'Must work on student mobile web browsers without installing native APKs',
      'Cannot rely solely on GPS (GPS spoofing mobile apps are widely available)',
      'Session window must expire in 90 seconds to prevent link forwarding',
      'Must check student IP against campus CIDR Wi-Fi subnet ranges'
    ],
    architectureDiagramSvg: 'ATTENDANCE_ARCH_DIAGRAM',
    databaseSchema: `CREATE TABLE session_tokens (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  class_id UUID NOT NULL REFERENCES classes(id),
  token_hash VARCHAR(64) NOT NULL,
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
  allowed_cidr VARCHAR(32) NOT NULL
);`,
    technicalDecisions: [
      {
        decision: 'Proxy Verification Mechanism',
        choice: 'Dual Invariant: Campus Subnet CIDR match + 90s One-Time Dynamic Hash',
        why: 'Even if a student forwards a screenshot, the recipient connected to cellular 4G/5G or home broadband fails the subnet check.',
        rejectedAlternatives: ['Static QR code (easily spoofed)', 'Bluetooth Beacons (requires native mobile app installation)']
      }
    ],
    codeSnippet: {
      filename: 'subnetValidator.ts',
      language: 'typescript',
      code: `export function validateAttendanceAttempt(payload: AttendanceCheckPayload): { valid: boolean; reason?: string } {
  if (Date.now() > payload.sessionExpiresAt) return { valid: false, reason: 'SESSION_EXPIRED' };
  const isCampusIp = ipRangeCheck(payload.clientIp, payload.allowedCidrs);
  return { valid: isCampusIp, reason: isCampusIp ? undefined : 'IP_FORBIDDEN' };
}`,
      explanation: 'Core network boundary verification function verifying client IPv4/IPv6 against allowed campus CIDR blocks within strict time bounds.'
    },
    tradeoffs: [
      { dimension: 'Security Invariant', gain: '99.4% proxy elimination', sacrifice: 'Students must be connected to campus Wi-Fi (no cellular fallback)' }
    ],
    metricsResult: 'Successfully deployed across college engineering labs, eliminating unauthorized remote check-ins.',
    lessonLearned: 'Security is about layer compounding. No single check is unbreakable, but combining dynamic time decay with network layer boundaries creates an un-gameable system.'
  }
];

export const BUILD_LOG_ENTRIES: BuildLogEntry[] = [
  {
    id: 'log-1',
    timestamp: '2026-07-22',
    category: 'DEPLOYMENT',
    title: 'Migrated PulseWatch Telemetry to Distributed Worker Model',
    summary: 'Shifted per-site cron monitoring from single-node event loops to Redis-backed BullMQ job queues.',
    details: 'As target endpoints crossed 150+, single-thread event loop execution showed 15ms poll jitter. Implemented BullMQ concurrency with exponential backoff on retry timeouts.',
    tags: ['Distributed Systems', 'Redis', 'BullMQ', 'Telemetry']
  },
  {
    id: 'log-2',
    timestamp: '2026-06-14',
    category: 'ARCH_DECISION',
    title: 'Zero-Trust CIDR Subnet Match Optimizations in AttenDance',
    summary: 'Replaced linear IP lookup loop with pre-compiled radix tree byte mask indexing.',
    details: 'Under high concurrent check-in peaks during 9:00 AM lectures, checking 500+ student IP addresses against campus CIDRs created minor CPU overhead. Radix lookup reduced match time to 1.2 microseconds.',
    tags: ['Networking', 'CIDR', 'Security', 'Performance']
  }
];

export const INFRASTRUCTURE_NODES: InfrastructureNode[] = [
  {
    id: 'infra-1',
    name: 'Proxmox VE Homelab Cluster',
    layer: 'Homelab Infrastructure',
    tech: 'Dual-Node Intel i7 / 64GB RAM / NVMe Ceph Storage',
    status: 'ONLINE',
    telemetry: { label: 'CPU Usage', value: '14.2%' },
    description: 'Self-hosted bare-metal virtualisation cluster running LXC containers, K3s Kubernetes master nodes, and local staging sandboxes.'
  },
  {
    id: 'infra-2',
    name: 'Kubernetes (K3s) Container Mesh',
    layer: 'Cloud Edge',
    tech: 'K3s + MetalLB + Cloudflare Zero-Trust Tunnels',
    status: 'ACTIVE',
    telemetry: { label: 'Active Pods', value: '28 Pods' },
    description: 'Lightweight K8s orchestration running automated container deployments, internal ingress routers, and SSL cert auto-renewals.'
  }
];

export const SYSTEM_MAP_NODES: SystemMapNode[] = [
  { id: 'node-atreya', label: 'ATREYA KAMAT', type: 'concept', cluster: 'Core', connections: ['node-p1', 'node-p2'], details: 'Product Engineer, Systems Thinker & Entrepreneur.' },
  { id: 'node-p1', label: 'Stix \'N\' Vibes Engine', type: 'project', cluster: 'Projects', connections: ['node-atreya'], details: 'Material-aware e-commerce matrix & WhatsApp payload pipeline.' },
  { id: 'node-p2', label: 'AttenDance Security', type: 'project', cluster: 'Projects', connections: ['node-atreya'], details: 'Zero-trust CIDR subnet auth & 90s session decay.' }
];
