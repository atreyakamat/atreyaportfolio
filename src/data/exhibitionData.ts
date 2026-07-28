export interface ExhibitionRoom {
  id: string;
  roomNumber: string;
  title: string;
  subtitle: string;
  heroOutcome: string;
  category: string;
  headline: string;
  wordsText: string;
  invariants: string[];
  metrics: { label: string; value: string }[];
  codeSnippet?: string;
  schemaDdl?: string;
}

export interface ManifestoPrinciple {
  id: string;
  number: string;
  title: string;
  visualMetaphor: 'BALANCE_SCALE' | 'VECTOR_DIAGRAM' | 'VERSION_TREE' | 'NETWORK_MATRIX';
  statement: string;
  tradeoffA: { label: string; weight: number; detail: string; gain: string; sacrifice: string };
  tradeoffB: { label: string; weight: number; detail: string; gain: string; sacrifice: string };
  invariant: string;
}

export interface SpecimenSlide {
  id: string;
  number: string;
  title: string;
  category: 'Design Critique' | 'System Teardown' | 'Hypothesis';
  statement: string;
  date: string;
}

// ─────────────────────────────────────────────────────────────
// EXHIBITION ROOM DATA
// ─────────────────────────────────────────────────────────────

export const EXHIBITION_MANIFESTO: ManifestoPrinciple[] = [
  {
    id: 'man-1',
    number: '01',
    title: 'Systems Over Syntax',
    visualMetaphor: 'BALANCE_SCALE',
    statement: 'Syntax changes. Topology, data flow, failure modes, and state boundaries scale forever.',
    tradeoffA: { label: 'SYNTAX FLEET', weight: 30, detail: 'Ad-hoc controllers & un-buffered calls', gain: 'Quick short-term prototype', sacrifice: 'Cascading failures under surge load' },
    tradeoffB: { label: 'SYSTEM TOPOLOGY', weight: 80, detail: 'Idempotent events & outbox buffer', gain: 'Fault-tolerant zero-data loss architecture', sacrifice: 'Higher initial design overhead' },
    invariant: 'Never write a feature until you have drawn its failure fallback.'
  },
  {
    id: 'man-2',
    number: '02',
    title: 'Constraints Are Accelerators',
    visualMetaphor: 'VECTOR_DIAGRAM',
    statement: 'Infinite freedom breeds scope creep. Hard physical boundaries breed architectural elegance.',
    tradeoffA: { label: 'INVASIVE BIOMETRICS', weight: 20, detail: 'High student friction & privacy pushback', gain: 'Visual camera confirmation', sacrifice: 'App download dropoff' },
    tradeoffB: { label: 'SUBNET & TIME DECAY', weight: 90, detail: 'Zero app installs & 99.4% fraud elimination', gain: '99.4% proxy fraud block with web browser', sacrifice: 'Campus Wi-Fi connection required' },
    invariant: 'Enforce physical network boundaries over client-reported state.'
  },
  {
    id: 'man-3',
    number: '03',
    title: 'Trade-offs Over Dogma',
    visualMetaphor: 'VERSION_TREE',
    statement: 'There are no solutions. There are only trade-offs. State what you sacrifice upfront.',
    tradeoffA: { label: 'MONOLITH CONCURRENCY', weight: 40, detail: 'Low deployment overhead, higher lock contention', gain: 'Single codebase simplicity', sacrifice: 'Scaling bottleneck' },
    tradeoffB: { label: 'MICROSERVICE MESH', weight: 75, detail: 'Elastic velocity, higher network complexity', gain: 'Independent service velocity', sacrifice: 'Distributed tracing overhead' },
    invariant: 'Document intentional sacrifices before accepting a design.'
  }
];

export const EXHIBITION_ROOMS: ExhibitionRoom[] = [
  {
    id: 'room-attendance',
    roomNumber: 'ROOM 2A',
    title: 'AttenDance Security Perimeter',
    subtitle: 'Zero-Trust Proxy-Proof Auth',
    heroOutcome: '99.4%',
    category: 'Cybersecurity / Networking',
    headline: 'Eliminated proxy attendance via CIDR subnet boundaries & 90s session decay.',
    wordsText: 'Replaced invasive face biometrics with campus network perimeters and dynamic hash decay.',
    invariants: ['172.16.4.0/22 Subnet Check', '90s Ephemeral Hash Decay', 'Zero Native App Installs'],
    metrics: [
      { label: 'Fraud Elimination', value: '99.4%' },
      { label: 'Latency', value: '<45ms' }
    ],
    codeSnippet: `export function validateAttendanceAttempt(payload: AttendanceCheckPayload): boolean {
  if (Date.now() > payload.sessionExpiresAt) return false;
  return ipRangeCheck(payload.clientIp, payload.allowedCidrs);
}`,
    schemaDdl: `CREATE TABLE session_tokens (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  token_hash VARCHAR(64) NOT NULL,
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
  allowed_cidr VARCHAR(32) NOT NULL
);`
  },
  {
    id: 'room-stixnvibes',
    roomNumber: 'ROOM 2B',
    title: 'Stix \'N\' Vibes Commerce Engine',
    subtitle: 'Material-Aware Matrix & WhatsApp Checkout',
    heroOutcome: '+34%',
    category: 'E-Commerce / Systems',
    headline: 'Single-click WhatsApp order generation with instantaneous material matrix math.',
    wordsText: 'Eliminated cart friction with sub-10ms Zustand material pricing and instant WhatsApp links.',
    invariants: ['Sub-10ms Material Matrix', 'Single-Click WhatsApp Payload', 'Zero Monthly Server Overhead'],
    metrics: [
      { label: 'Cart Conversion', value: '+34%' },
      { label: 'Checkout Time', value: '180ms' }
    ],
    codeSnippet: `export function calculateMaterialMatrix(items: CartItem[]): number {
  return items.reduce((acc, item) => {
    const areaSqCm = (item.w * item.h) / 100;
    return acc + areaSqCm * 0.45 * MATERIAL_MULT[item.finish] * item.qty;
  }, 0);
}`
  },
  {
    id: 'room-echobridge',
    roomNumber: 'ROOM 2C',
    title: 'EchoBridge Low-Latency Audio Router',
    subtitle: 'WASAPI DSP Windows Mixer',
    heroOutcome: '<12ms',
    category: 'Audio Systems Engineering',
    headline: 'Sub-12ms multi-device WASAPI loopback routing with real-time DSP filter chains.',
    wordsText: 'Engineered desktop audio mixer in .NET 8 manipulating sample buffers in-place without pops.',
    invariants: ['WASAPI Loopback Capture', 'In-place DSP Buffer Scaling', 'Zero GC Memory Drops'],
    metrics: [
      { label: 'Roundtrip Latency', value: '<12ms' },
      { label: 'DSP Fidelity', value: '48kHz' }
    ]
  },
  {
    id: 'room-pulsewatch',
    roomNumber: 'ROOM 2D',
    title: 'PulseWatch Telemetry Engine',
    subtitle: 'Full-Stack Uptime & Incident Dispatch',
    heroOutcome: '100ms',
    category: 'Distributed Telemetry',
    headline: 'Per-site cron heartbeat scheduler with response latency degradation analytics.',
    wordsText: 'Worker pool polling target endpoints with keep-alive agents and 3-strike alert dispatch.',
    invariants: ['BullMQ Redis Worker Queue', 'Keep-Alive Socket Retention', '3-Strike Cascade Alert'],
    metrics: [
      { label: 'Polling Precision', value: '100ms' },
      { label: 'Alert Dispatch', value: '<2s' }
    ]
  },
  {
    id: 'room-vistara',
    roomNumber: 'ROOM 2E',
    title: 'Vistara BI LLM Analytics Sandbox',
    subtitle: 'Natural Language to SQL Synthesis',
    heroOutcome: '96.2%',
    category: 'AI / BI Architecture',
    headline: 'Eliminated dedicated data analysts for SMEs via conversational LLM query synthesis.',
    wordsText: 'Converts raw multi-table CSVs into visual dashboards with read-only AST query guardrails.',
    invariants: ['AST SELECT-Only Guardrail', 'Schema Introspection AST', 'Row-Limited Execution'],
    metrics: [
      { label: 'SQL Accuracy', value: '96.2%' },
      { label: 'Analysis Speed', value: '10x' }
    ]
  }
];

export const CAPABILITIES_EXHIBITION = [
  { domain: 'Systems Architecture', metric: '<12ms Latency', tech: 'PostgreSQL, Redis, K3s, Outbox Pattern' },
  { domain: 'Product Strategy & UX', metric: '+34% Conversion', tech: 'React, Zustand, WhatsApp Payload' },
  { domain: 'Security & Auth Invariants', metric: '99.4% Proxy Block', tech: 'CIDR Subnets, JWT Ephemeral Tokens' },
  { domain: 'Infrastructure & Automation', metric: '<2s Alert Dispatch', tech: 'Proxmox VE, Prometheus, Grafana' },
  { domain: 'Low-Latency Audio DSP', metric: '<12ms Roundtrip', tech: '.NET 8, WASAPI Loopback, NAudio' },
  { domain: 'AI & Business Intelligence', metric: '96.2% SQL Accuracy', tech: 'LLM Query Synthesis, AST Guardrails' }
];

export const SPECIMEN_ARCHIVE: SpecimenSlide[] = [
  {
    id: 'spec-1',
    number: 'SLIDE 01',
    title: 'Tactile Software Affordance',
    category: 'Design Critique',
    statement: 'Software should feel like a physical instrument. Every knob needs weight, resistance, and acoustic response.',
    date: '2026-07-15'
  },
  {
    id: 'spec-2',
    number: 'SLIDE 02',
    title: 'Autonomous Telemetry Synthesis',
    category: 'System Teardown',
    statement: 'Dashboards with 50 line graphs cause cognitive fatigue. Software should synthesize telemetry into direct action.',
    date: '2026-06-20'
  },
  {
    id: 'spec-3',
    number: 'SLIDE 03',
    title: 'Physical Network Invariants',
    category: 'Hypothesis',
    statement: 'Location-aware network boundaries combined with dynamic time decay eliminate 99% of auth fraud.',
    date: '2026-05-12'
  }
];

export const REALTIME_EXHIBITION_HUD = {
  version: 'v4.2.0',
  localTime: '12:26 PM IST',
  location: '15.5901° N, 73.8105° E (Goa, India)',
  uptime: '99.98%',
  currentFocus: 'Voice-First AI Agent Workflows, MCP Servers & Low-Latency Audio',
  activeRooms: ['ROOM 00', 'ROOM 01', 'ROOM 02', 'ROOM 03', 'ROOM 04', 'ROOM 05', 'ROOM 06']
};
