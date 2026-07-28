export interface ProjectWorldData {
  id: string;
  name: string;
  hookQuestion: string;
  tagline: string;
  category: string;
  firstLayer: {
    heroMetric: string;
    heroMetricLabel: string;
    experienceText: string;
    productVisualType: 'STICKER' | 'REGISTER' | 'SIGNAL' | 'AUDIO_MIXER' | 'DATA_CHAOS';
  };
  secondLayer: {
    rejectedDecisions: { title: string; rationale: string }[];
    userFlowChange: string;
  };
  thirdLayer: {
    architectureSummary: string;
    codeSnippet: string;
    ddlSchema: string;
  };
}

export interface ArchiveArtifact {
  id: string;
  title: string;
  type: 'polaroid' | 'ticket' | 'sketch' | 'sticker' | 'note';
  rotation: number;
  top: string;
  left: string;
  imageOrNote: string;
  backText?: string;
}

// ─────────────────────────────────────────────────────────────
// DATA OBJECTS
// ─────────────────────────────────────────────────────────────

export const HERO_DATA = {
  headline: "I make ideas tangible.",
  subtag: "Design × Engineering × Product",
  stages: [
    { label: "IDEA", description: "Abstract problem & napkin hypothesis" },
    { label: "FORM", description: "Geometry, paper wireframe & spatial structure" },
    { label: "INTERACTION", description: "Physics, tactile feedback & micro-transitions" },
    { label: "PRODUCT", description: "Shipped system creating real-world leverage" }
  ]
};

export const PROJECT_WORLDS: ProjectWorldData[] = [
  {
    id: 'stix-n-vibes',
    name: 'Stix \'N\' Vibes',
    hookQuestion: 'What if ordering custom merchandise took one tap?',
    tagline: 'Material-aware cart matrix with instant WhatsApp checkout payload generation.',
    category: 'E-Commerce & Custom Merchandise',
    firstLayer: {
      heroMetric: '+34%',
      heroMetricLabel: 'Cart Conversion Lift',
      experienceText: 'Traditional forms required manual size quotes and messy messages. Single-tap WhatsApp payloads eliminated checkout friction.',
      productVisualType: 'STICKER'
    },
    secondLayer: {
      rejectedDecisions: [
        { title: 'Multi-Step Credit Card Form', rationale: 'Rejected because mandatory account creation created 40% drop-off in student demographic.' },
        { title: 'Static Price Table', rationale: 'Rejected because material surcharges (vinyl/holographic) require real-time area calculation.' }
      ],
      userFlowChange: 'Shifted from 5-step registration form to instant 1-tap WhatsApp quote generation.'
    },
    thirdLayer: {
      architectureSummary: 'Client Zustand material pricing engine computing sub-10ms area surcharges synced to LocalStorage.',
      codeSnippet: `export function calculateMaterialMatrix(items: CartItem[]): number {
  return items.reduce((subtotal, item) => {
    const areaSqCm = (item.w * item.h) / 100;
    return subtotal + areaSqCm * 0.45 * MATERIAL_SURCHARGE[item.finish] * item.qty;
  }, 0);
}`,
      ddlSchema: `CREATE TABLE order_payloads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_phone VARCHAR(20) NOT NULL,
  items JSONB NOT NULL,
  total_amount_cents INT NOT NULL
);`
    }
  },
  {
    id: 'attendance',
    name: 'AttenDance',
    hookQuestion: 'What if classroom attendance couldn\'t be faked?',
    tagline: 'Zero-trust proxy-proof security using Wi-Fi CIDR subnet boundaries & 90-second session decay.',
    category: 'Cybersecurity / Network Invariants',
    firstLayer: {
      heroMetric: '99.4%',
      heroMetricLabel: 'Proxy Fraud Blocked',
      experienceText: 'Paper registers and static QR codes were easily spoofed. Enforcing campus Wi-Fi network perimeters stopped remote check-ins instantly.',
      productVisualType: 'REGISTER'
    },
    secondLayer: {
      rejectedDecisions: [
        { title: 'Camera Face Biometrics', rationale: 'Rejected due to high student friction, privacy concerns, and native app download hurdles.' },
        { title: 'GPS Location Check', rationale: 'Rejected because location-spoofing mobile apps bypass simple GPS checks.' }
      ],
      userFlowChange: 'Replaced manual paper signing & static QR codes with a 90-second ephemeral subnet check.'
    },
    thirdLayer: {
      architectureSummary: 'Dual invariant auth system combining campus CIDR range check with 90-second dynamic hash tokens.',
      codeSnippet: `export function validateAttendanceAttempt(payload: AttendancePayload): boolean {
  if (Date.now() > payload.sessionExpiresAt) return false;
  return ipRangeCheck(payload.clientIp, payload.allowedCidrs);
}`,
      ddlSchema: `CREATE TABLE session_tokens (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  token_hash VARCHAR(64) NOT NULL,
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
  allowed_cidr VARCHAR(32) NOT NULL
);`
    }
  },
  {
    id: 'pulsewatch',
    name: 'PulseWatch',
    hookQuestion: 'What if a failing server alerted you before users noticed?',
    tagline: 'Per-site cron heartbeat monitoring, response latency degradation analytics, and incident alert dispatch.',
    category: 'Distributed Telemetry & Uptime',
    firstLayer: {
      heroMetric: '100ms',
      heroMetricLabel: 'Polling Precision',
      experienceText: 'Websites fail quietly until customers complain. PulseWatch continuously checks site health and dispatches instant alerts.',
      productVisualType: 'SIGNAL'
    },
    secondLayer: {
      rejectedDecisions: [
        { title: 'Synchronous Polling Loop', rationale: 'Rejected due to socket starvation and metric jitter under 100+ endpoints.' }
      ],
      userFlowChange: 'Shifted from manual website checks to automated 3-strike alert dispatch queues.'
    },
    thirdLayer: {
      architectureSummary: 'BullMQ Redis worker pool executing non-blocking HTTP keep-alive checks with Drizzle ORM persistence.',
      codeSnippet: `const worker = new Worker('ping-jobs', async job => {
  return await executePingCheck(job.data);
}, { concurrency: 25 });`,
      ddlSchema: `CREATE TABLE uptime_pings (
  id BIGSERIAL PRIMARY KEY,
  target_id UUID REFERENCES monitor_targets(id),
  response_time_ms INT NOT NULL,
  is_up BOOLEAN NOT NULL
);`
    }
  },
  {
    id: 'echobridge',
    name: 'EchoBridge',
    hookQuestion: 'One computer. Two people. Two completely different listening experiences.',
    tagline: 'Windows DSP multi-device audio router built with .NET 8, WASAPI loopback, and NAudio.',
    category: 'Low-Latency Audio DSP',
    firstLayer: {
      heroMetric: '<12ms',
      heroMetricLabel: 'Roundtrip Latency',
      experienceText: 'Windows lacks native low-latency routing between desktop outputs. EchoBridge routes and filters multi-device audio in real-time.',
      productVisualType: 'AUDIO_MIXER'
    },
    secondLayer: {
      rejectedDecisions: [
        { title: 'DirectSound Driver', rationale: 'Rejected because >50ms latency introduced noticeable voice monitor echo.' }
      ],
      userFlowChange: 'Engineered hardware-like mixer knobs to adjust low-latency WASAPI buffer gain in real-time.'
    },
    thirdLayer: {
      architectureSummary: 'WASAPI exclusive loopback capture manipulating sample byte buffers in-place without garbage collection pauses.',
      codeSnippet: `_capture.DataAvailable += (s, e) => {
  byte[] buffer = e.Buffer;
  for (int i = 0; i < e.BytesRecorded; i += 2) {
    short sample = (short)(buffer[i] | (buffer[i + 1] << 8));
    sample = (short)(sample * 1.25);
    buffer[i] = (byte)(sample & 0xFF);
    buffer[i + 1] = (byte)((sample >> 8) & 0xFF);
  }
};`,
      ddlSchema: `// Audio Device Profile Configuration
<Profile name="WASAPI_LowLatency">
  <SampleRate>48000</SampleRate>
  <BufferMs>10</BufferMs>
</Profile>`
    }
  },
  {
    id: 'vistara-bi',
    name: 'Vistara BI',
    hookQuestion: 'What if data chaos organized itself into instant natural language insights?',
    tagline: 'Eliminates dedicated data analysts for SMEs via conversational LLM query synthesis and AST safety guardrails.',
    category: 'AI Systems & Business Intelligence',
    firstLayer: {
      heroMetric: '96.2%',
      heroMetricLabel: 'SQL Synthesis Accuracy',
      experienceText: 'Raw database rows create information chaos. Pulling fragments together synthesizes clear, actionable business answers.',
      productVisualType: 'DATA_CHAOS'
    },
    secondLayer: {
      rejectedDecisions: [
        { title: 'Direct Un-Sanitized Execution', rationale: 'Rejected due to severe SQL injection risk from LLM generated strings.' }
      ],
      userFlowChange: 'Replaced manual SQL dashboard building with conversational prompt-to-query synthesis.'
    },
    thirdLayer: {
      architectureSummary: 'Read-only PostgreSQL schema replica with AST query parsing wrapping requests in time-bounded transactions.',
      codeSnippet: `export function sanitizeAiQuery(sql: string): { safe: boolean; sanitizedSql?: string } {
  if (/DROP|DELETE|UPDATE|INSERT/i.test(sql)) return { safe: false };
  return { safe: true, sanitizedSql: \`WITH target AS (\${sql.replace(/;$/, '')}) SELECT * FROM target LIMIT 1000;\` };
}`,
      ddlSchema: `CREATE TABLE dataset_meta (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  dataset_name VARCHAR(128) NOT NULL,
  inferred_schema JSONB NOT NULL
);`
    }
  }
];

export const ARCHIVE_TABLE_ARTIFACTS: ArchiveArtifact[] = [
  {
    id: 'art-1',
    title: 'Stix \'N\' Vibes First Sticker Batch',
    type: 'sticker',
    rotation: -4,
    top: '10%',
    left: '8%',
    imageOrNote: 'Sticker Sheet #01 — Custom Vinyl & Holographic Cut',
    backText: 'Hand-packed in Goa (Feb 2024). Shipped over 1,500+ stickers to students and local Goa restaurants.'
  },
  {
    id: 'art-2',
    title: 'Techyothon Hackathon Director Pass',
    type: 'ticket',
    rotation: 6,
    top: '20%',
    left: '35%',
    imageOrNote: 'MAIN COORDINATOR PASS // Techyothon 2025',
    backText: 'Led Agnel Institute ACCESS Student Council (200+ students) organizing university hackathons.'
  },
  {
    id: 'art-3',
    title: 'Napkin Circuit Diagram',
    type: 'sketch',
    rotation: -2,
    top: '45%',
    left: '18%',
    imageOrNote: 'AttenDance Subnet Invariant Sketch',
    backText: 'Drawn in college cafeteria. Realized Wi-Fi CIDR checking eliminates proxy QR screenshots without camera apps.'
  },
  {
    id: 'art-4',
    title: 'SOLO Community Event Goa',
    type: 'polaroid',
    rotation: 5,
    top: '40%',
    left: '62%',
    imageOrNote: 'SOLO Developer Meetup 2025',
    backText: 'Organized tech community meetups across Goa for SaaS platform SOLO by Spark+ Technologies.'
  },
  {
    id: 'art-5',
    title: 'Hardware DSP Mixer Notebook',
    type: 'note',
    rotation: -6,
    top: '15%',
    left: '70%',
    imageOrNote: 'WASAPI Sample Rate Compensation Notes',
    backText: 'Calculating buffer allocation in C# to prevent garbage collection pauses during real-time audio routing.'
  }
];

export const HUMAN_CONTACT_DATA = {
  headline: "Have something worth making?",
  subhead: "Let's talk.",
  email: "atkamat1204@gmail.com",
  phone: "+91 77440 20601",
  linkedin: "https://linkedin.com/in/atreyakamat",
  github: "https://github.com/atreyakamat",
  signature: "— Atreya"
};
