/**
 * Saltwater Studios: content in one place.
 * Only facts Atreya has given: the two tracks, their prices, the gear and the
 * contact details. No testimonials, past weddings, couple names, turnaround
 * times or counts until they are real.
 */

// TODO: domain not chosen yet. Replace before launch (canonical, sitemap, OG, JSON-LD).
export const SITE_URL = "https://saltwaterstudios.in";

export const site = {
  name: "Saltwater Studios",
  tagline: "Wedding reels, cut for the scroll.",
  description:
    "Saltwater Studios makes vertical wedding reels in Goa: reel editing for videographers and photographers, and reels shot for couples at destination and local Goan weddings.",
  email: "atkamat1204@gmail.com",
  whatsapp: "917744020601",
  whatsappDisplay: "+91 77440 20601",
  /** No Instagram yet. Set to the profile URL once it exists. */
  instagram: null as string | null,
  founder: { name: "Atreya Kamat", url: "https://atreyakamat.dev" },
};

export type TrackId = "couples" | "editors";

export interface Track {
  id: TrackId;
  label: string;
  who: string;
  headline: string;
  pitch: string;
  price: { prefix?: string; amount: string; unit: string };
  priceNote?: string;
  includes: string[];
  process: { title: string; body: string }[];
}

export const tracks: Track[] = [
  {
    id: "editors",
    label: "For videographers",
    who: "Videographers and photographers",
    headline: "Your footage, cut into reels while you shoot the next one.",
    pitch:
      "You already have the footage. I turn it into scroll-stopping vertical reels in your couple's style, so you can deliver more without editing late into the night.",
    price: { prefix: "Starting at", amount: "₹2,500", unit: "per reel" },
    priceNote: "₹2,000 per reel when you send more than 5 reels a week.",
    includes: ["Vertical reel edits from your footage", "Edited in your couple's style", "Room for your feedback before final", "Volume pricing above 5 reels a week"],
    process: [
      { title: "Enquire", body: "Tell me how many reels you need and the style you shoot." },
      { title: "Send footage", body: "Share the footage, any must-have moments and the music direction." },
      { title: "Edit", body: "I cut the reels and send them over for your notes." },
      { title: "Deliver", body: "Final reels, ready for you to hand to your couple." },
    ],
  },
  {
    id: "couples",
    label: "For couples",
    who: "Destination and local Goan weddings",
    headline: "Your day, as reels you'll actually rewatch.",
    pitch:
      "I shoot your wedding for vertical: the glances, the noise, the light on the water. Then I cut it into reels made for your phone and your feed.",
    price: { amount: "₹6,000–8,000", unit: "per wedding" },
    priceNote: "Depends on the day. Includes 2 reels and a few posts.",
    includes: ["2 wedding reels", "A few posts for your feed", "Shot vertical, on camera and phone", "Stabilised with a gimbal, clean audio with a shotgun mic"],
    process: [
      { title: "Enquire", body: "Send your date, venue and the feel you want. I reply personally." },
      { title: "Plan the day", body: "We go through the schedule and the moments that matter most to you." },
      { title: "Shoot", body: "I film vertical through the day, close to the moments, out of the way." },
      { title: "Edit & deliver", body: "Your reels and posts, cut for the scroll, ready to share." },
    ],
  },
];

export const gear = [
  { name: "Camera", note: "The main eye for the day" },
  { name: "Phone", note: "Native vertical, made for reels" },
  { name: "Gimbal", note: "Smooth, moving, cinematic shots" },
  { name: "Shotgun mic", note: "Vows and speeches you can hear" },
];

export interface Reel {
  /** Self-hosted vertical video (public/reels/...). */
  src?: string;
  /** Or a link to the reel on Instagram. */
  instagramUrl?: string;
  poster?: string;
  caption: string;
}

/** Portfolio reels. Empty until the first ones are ready: the section shows a "dropping soon" state. */
export const reels: Reel[] = [];

export const faqs = [
  {
    q: "Do you shoot the full wedding film?",
    a: "No. Saltwater Studios makes reels: short, vertical edits made for Instagram and your phone. If you already have a videographer, I can edit reels from their footage.",
  },
  {
    q: "What's included for couples?",
    a: "Two wedding reels and a few posts, for ₹6,000–8,000 depending on the day.",
  },
  {
    q: "How does reel editing for videographers work?",
    a: "You share the footage, the couple's style and any must-have moments. I cut the reels and send them for your notes before they're final. It starts at ₹2,500 per reel, and drops to ₹2,000 per reel when you send more than 5 reels a week.",
  },
  {
    q: "Do you travel?",
    a: "Across Goa, yes, for destination and local Goan weddings. Planning a wedding somewhere else? Ask: tell me the place and the date.",
  },
  {
    q: "Do you fly a drone?",
    a: "No, so there are no aerial shots. The focus is close, stabilised, cinematic moments on the ground.",
  },
  {
    q: "How do I book?",
    a: "Send the form below or message on WhatsApp with your date and venue. I'll reply personally.",
  },
];

export const marquee = ["Reel editing for videographers", "Partner with your studio", "Destination weddings", "Local Goan weddings", "Reels for couples", "Vertical first", "Cut for the scroll"];
