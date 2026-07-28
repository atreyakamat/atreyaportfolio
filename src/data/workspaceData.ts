export interface LayerNode {
  id: string;
  name: string;
  type: 'canvas' | 'frame' | 'component' | 'prototype';
  icon: string;
  nodeCount: number;
}

export interface DesignFileProject {
  id: string;
  name: string;
  tagline: string;
  category: 'Security & Auth' | 'E-Commerce Matrix' | 'Audio Engine' | 'Distributed Telemetry' | 'AI Systems';
  heroMetric: { label: string; value: string; detail: string };
  stages: {
    sketch: { title: string; description: string; napkinSvgNote: string };
    wireframe: { title: string; blueprintFlow: string[]; constraints: string[] };
    prototype: { title: string; componentState: string; codeSnippet: string };
    shipped: { title: string; productionMetrics: string[]; ddlSchema: string };
  };
}

export interface UxLabItem {
  id: string;
  title: string;
  subtitle: string;
  paramName: string;
  minValue: number;
  maxValue: number;
  defaultValue: number;
  minLabel: string;
  maxLabel: string;
  getOutcome: (val: number) => { metric: string; status: string; rationale: string };
}

// ─────────────────────────────────────────────────────────────
// WORKSPACE DATA OBJECTS
// ─────────────────────────────────────────────────────────────

export const LAYERS_TREE: LayerNode[] = [
  { id: 'node-hero', name: '01. Hero Canvas', type: 'canvas', icon: 'Layout', nodeCount: 4 },
  { id: 'node-principles', name: '02. Principles Workbench', type: 'frame', icon: 'Sliders', nodeCount: 5 },
  { id: 'node-projects', name: '03. Living Project Files', type: 'prototype', icon: 'FileText', nodeCount: 5 },
  { id: 'node-uxlab', name: '04. UX Decision Lab', type: 'component', icon: 'CheckSquare', nodeCount: 2 },
  { id: 'node-now', name: '05. Live System State', type: 'frame', icon: 'Activity', nodeCount: 3 },
  { id: 'node-contact', name: '06. Direct Collaboration', type: 'component', icon: 'Send', nodeCount: 2 }
];

export const LIVING_PROJECT_FILES: DesignFileProject[] = [
  {
    id: 'proj-attendance',
    name: 'AttenDance — Zero-Trust Security File',
    tagline: 'Eliminates proxy attendance via Wi-Fi subnet CIDR boundaries & 90s session decay.',
    category: 'Security & Auth',
    heroMetric: { label: 'Proxy Reduction', value: '99.4%', detail: 'Eliminated remote check-ins' },
    stages: {
      sketch: {
        title: '01. Napkin Problem Sketch',
        description: 'College classrooms suffer from proxy attendance where students screenshot QR codes and send them over WhatsApp.',
        napkinSvgNote: 'Problem: Static QR codes = Easily forwarded screenshots.\nSolution: Enforce physical campus network perimeter.'
      },
      wireframe: {
        title: '02. Network Architecture Wireframe',
        blueprintFlow: ['Student Request (Browser)', 'Campus Subnet CIDR Check (172.16.4.0/22)', '90s Ephemeral Hash Token', 'PostgreSQL Audit Log'],
        constraints: ['Zero Native App Downloads', 'No GPS Spoofing Vulnerability', 'Sub-45ms Validation']
      },
      prototype: {
        title: '03. Interactive Component & Executable Invariant',
        componentState: 'CIDR Subnet Match: ACTIVE // Ephemeral Hash Decay: 90s',
        codeSnippet: `export function validateAttendance(payload: AttendanceCheckPayload): boolean {
  if (Date.now() > payload.sessionExpiresAt) return false;
  return ipRangeCheck(payload.clientIp, payload.allowedCidrs);
}`
      },
      shipped: {
        title: '04. Production Deployment & DDL Schema',
        productionMetrics: ['99.4% Proxy Fraud Blocked', 'Deployed across Agnel Institute Engineering Labs', '<45ms Average Latency'],
        ddlSchema: `CREATE TABLE session_tokens (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  token_hash VARCHAR(64) NOT NULL,
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
  allowed_cidr VARCHAR(32) NOT NULL
);`
      }
    }
  },
  {
    id: 'proj-stixnvibes',
    name: 'Stix \'N\' Vibes — Commerce Engine File',
    tagline: 'Material-aware cart matrix with single-click WhatsApp order payload builder.',
    category: 'E-Commerce Matrix',
    heroMetric: { label: 'Cart Conversion', value: '+34%', detail: 'Compared to multi-step checkout forms' },
    stages: {
      sketch: {
        title: '01. Friction Audit Sketch',
        description: 'Sticker quote requests required manual messaging and static tables, causing customer drop-off.',
        napkinSvgNote: 'Problem: Multi-step checkout forms destroy micro-commerce conversions.\nSolution: Compute custom area surcharges in sub-10ms and payload to WhatsApp.'
      },
      wireframe: {
        title: '02. Material Cart Wireframe',
        blueprintFlow: ['Select Finish (Matte/Holographic)', 'Calculate Area (w * h * rate)', 'Tiered Bulk Discount', 'Generate WhatsApp URI'],
        constraints: ['Sub-10ms Recalculation', 'Zero Fixed Monthly Server Cost', 'Mobile 3G Optimized']
      },
      prototype: {
        title: '03. Zustand Material Matrix Engine',
        componentState: 'Finish: Holographic // Multiplier: 1.45x // Bulk Discount: Tiered',
        codeSnippet: `export function calculateMaterialMatrix(items: CartItem[]): number {
  return items.reduce((subtotal, item) => {
    const areaSqCm = (item.w * item.h) / 100;
    return subtotal + areaSqCm * 0.45 * MATERIAL_SURCHARGE[item.finish] * item.quantity;
  }, 0);
}`
      },
      shipped: {
        title: '04. Shipped Product Results',
        productionMetrics: ['1,500+ Custom Stickers Shipped', '+34% Conversion Lift', '180ms End-to-End Payload Gen'],
        ddlSchema: `CREATE TABLE order_payloads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_phone VARCHAR(20) NOT NULL,
  items JSONB NOT NULL,
  total_amount_cents INT NOT NULL
);`
      }
    }
  },
  {
    id: 'proj-echobridge',
    name: 'EchoBridge — WASAPI Low-Latency Audio Router',
    tagline: 'Windows DSP multi-device audio router & mixer built with .NET 8, WPF, WASAPI, and NAudio.',
    category: 'Audio Engine',
    heroMetric: { label: 'Audio Latency', value: '<12ms', detail: 'WASAPI loopback round-trip' },
    stages: {
      sketch: {
        title: '01. Audio Subsystem Sketch',
        description: 'Windows audio lacks software routing between desktop playback devices without introducing noticeable delay.',
        napkinSvgNote: 'Problem: DirectSound latency >50ms causes voice monitoring echo.\nSolution: WASAPI loopback with in-place sample byte buffer manipulation.'
      },
      wireframe: {
        title: '02. DSP Processing Wireframe',
        blueprintFlow: ['WASAPI Loopback Capture', 'In-Place Sample Gain Shift', 'High-Pass Filter', 'Ring Buffer Output'],
        constraints: ['Sub-15ms Latency Budget', 'Zero GC Allocations inside Callback', '48kHz Fidelity']
      },
      prototype: {
        title: '03. In-Place Sample Buffer Invariant',
        componentState: 'Buffer Duration: 10ms // Sample Rate: 48000Hz // Channel: Stereo',
        codeSnippet: `_capture.DataAvailable += (s, e) => {
  byte[] buffer = e.Buffer;
  for (int i = 0; i < e.BytesRecorded; i += 2) {
    short sample = (short)(buffer[i] | (buffer[i + 1] << 8));
    sample = (short)(sample * 1.25);
    buffer[i] = (byte)(sample & 0xFF);
    buffer[i + 1] = (byte)((sample >> 8) & 0xFF);
  }
};`
      },
      shipped: {
        title: '04. Shipped Desktop Software',
        productionMetrics: ['<12ms Roundtrip Latency', 'Zero Audio Drops or Pops', 'Real-time Compressor & EQ'],
        ddlSchema: `// Device Profile XML Spec
<AudioProfile name="Default">
  <SampleRate>48000</SampleRate>
  <BufferMs>10</BufferMs>
</AudioProfile>`
      }
    }
  }
];

export const UX_LAB_ITEMS: UxLabItem[] = [
  {
    id: 'ux-checkout',
    title: 'Checkout Friction vs Conversion Leverage',
    subtitle: 'Drag the slider to test how checkout steps impact customer conversion rate.',
    paramName: 'Checkout Steps',
    minValue: 1,
    maxValue: 5,
    defaultValue: 1,
    minLabel: '1-Click WhatsApp Payload',
    maxLabel: '5-Step Registration Form',
    getOutcome: (val: number) => {
      if (val === 1) {
        return {
          metric: 'CONVERSION: 84%',
          status: 'OPTIMAL (ATREYA\'S CHOICE)',
          rationale: 'Single-click WhatsApp checkout removes all registration drop-off for micro-commerce.'
        };
      } else if (val <= 3) {
        return {
          metric: 'CONVERSION: 58%',
          status: 'MODERATE FRICTION',
          rationale: 'Requiring account creation drops conversion by 26% on mobile.'
        };
      } else {
        return {
          metric: 'CONVERSION: 22%',
          status: 'HIGH DROPOFF (ANTI-PATTERN)',
          rationale: 'Complex multi-step forms kill impulse purchases in campus demographics.'
        };
      }
    }
  },
  {
    id: 'ux-security',
    title: 'Authentication Perimeter: Biometrics vs Subnet Invariants',
    subtitle: 'Compare camera biometrics friction against Wi-Fi subnet CIDR boundaries.',
    paramName: 'Security Strategy',
    minValue: 1,
    maxValue: 2,
    defaultValue: 2,
    minLabel: 'Face Biometrics (Native App)',
    maxLabel: 'Subnet CIDR + 90s Decay (AttenDance)',
    getOutcome: (val: number) => {
      if (val === 2) {
        return {
          metric: 'FRAUD BLOCK: 99.4%',
          status: 'ZERO APP INSTALLS (ATREYA\'S CHOICE)',
          rationale: 'Mathematical network perimeter prevents proxy check-in directly inside web browser.'
        };
      } else {
        return {
          metric: 'FRAUD BLOCK: 88%',
          status: 'HIGH USER RESISTANCE',
          rationale: 'Students refuse camera permissions or fail native APK installation on diverse mobile OS.'
        };
      }
    }
  }
];

export const NOW_WORKSPACE_STATE = {
  version: 'v4.2.0 (Figma Workspace Edition)',
  localTime: '01:00 PM IST',
  location: 'Goa, India (15.5901° N, 73.8105° E)',
  systemHealth: 'ALL SYSTEMS OPERATIONAL // 99.98% UPTIME',
  currentObsession: 'Voice-First AI Agent Workflows, MCP Server Introspection & Sub-12ms Audio DSP',
  activeDeployments: [
    { name: 'AttenDance Security Perimeter', target: 'Production Lab Mesh', status: 'ACTIVE' },
    { name: 'Stix \'N\' Vibes Commerce Matrix', target: 'Cloud Edge', status: 'ACTIVE' },
    { name: 'PulseWatch Telemetry Worker', target: 'K3s Cluster Node', status: 'ACTIVE' }
  ]
};
