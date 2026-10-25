/**
 * Content for create.atreyakamat.dev.
 * Only real work with real links. Sticker art belongs to Stix N Vibes;
 * this site presents it as the brand Atreya runs, not as his illustrations.
 */

export const site = {
  url: "https://create.atreyakamat.dev",
  email: "atkamat1204@gmail.com",
  name: "Atreya Kamat",
  /** Creator handle this site is branded as. Link it once the platform URL is confirmed. */
  handle: "atreya.mp4",
  handleUrl: "https://www.instagram.com/atreya.mp4/" as string | null,
};

/** Sticker designs from Stix N Vibes (transparent webp), with a hero position (percent) and tilt. */
export const heroStickers: { src: string; x: number; y: number; r: number; w: number; mobile?: boolean }[] = [
  { src: "/stickers/lofi-14.webp", x: 6, y: 16, r: -10, w: 13, mobile: true },
  { src: "/stickers/lofi-06.webp", x: 78, y: 12, r: 9, w: 11, mobile: true },
  { src: "/stickers/lofi-16.webp", x: 62, y: 58, r: -6, w: 12 },
  { src: "/stickers/lofi-10.webp", x: 86, y: 52, r: 7, w: 10, mobile: true },
  { src: "/stickers/lofi-09.webp", x: 38, y: 8, r: -4, w: 10 },
  { src: "/stickers/lofi-02.webp", x: 18, y: 62, r: 12, w: 11, mobile: true },
  { src: "/stickers/lofi-11.webp", x: 26, y: 26, r: -14, w: 9 },
  { src: "/stickers/lofi-04.webp", x: 70, y: 30, r: 5, w: 9 },
  { src: "/stickers/lofi-13.webp", x: 45, y: 66, r: -8, w: 10, mobile: true },
  { src: "/stickers/lofi-07.webp", x: 90, y: 78, r: 10, w: 9 },
];

export const allStickers = Array.from({ length: 17 }, (_, i) => `/stickers/lofi-${String(i + 1).padStart(2, "0")}.webp`);

export const stall = [
  { src: "/stall/hero-wide.webp", alt: "Stix N Vibes stall crowded with students picking stickers", w: 1920, h: 1200 },
  { src: "/stall/clip-1.webp", alt: "A crowd of students picking stickers at the stall", w: 720, h: 1280 },
  { src: "/stall/clip-2.webp", alt: "Students gathered around the stall table in a college corridor", w: 720, h: 1280 },
  { src: "/stall/clip-3.webp", alt: "Browsing posters and sticker sheets at the pop-up", w: 720, h: 1280 },
  { src: "/stall/clip-4.webp", alt: "The stall set up under football flags", w: 720, h: 1280 },
  { src: "/stall/clip-5.webp", alt: "Hands sorting through a box of die-cut stickers", w: 720, h: 1280 },
  { src: "/stall/clip-6.webp", alt: "A customer looking through sticker sheets", w: 720, h: 1280 },
  { src: "/stall/hero-tall.webp", alt: "The Stix N Vibes stall from the front", w: 828, h: 1472 },
];

export const stixProducts = ["Sticker packs", "Custom stickers", "Peel-to-paste posters", "Framez", "Cards", "Music cards"];

export const codeWorks = [
  {
    code: "C/01",
    title: "Engraved art, drawn in code",
    desc: "Solara Studios' cobalt toile (houses, arches, a church, vines) is not an illustration file. It is drawn by code from a seed, so it renders the same every time and stays sharp at any size.",
    image: "/work/solara-art.webp",
    url: "https://solara.atreyakamat.dev",
    linkLabel: "See it live",
  },
  {
    code: "C/02",
    title: "Brand cards from a script",
    desc: "The share images for atreyakamat.dev are rendered from one template by a script: type, duotone portrait and grid, regenerated whenever a headline changes.",
    image: "/work/og-dev.webp",
    url: "https://atreyakamat.dev",
    linkLabel: "atreyakamat.dev",
  },
];

export const webWorks = [
  { name: "Stix N Vibes", kind: "Brand landing site", image: "/work/stix.webp", url: "https://stixnvibes.com" },
  { name: "Solara Studios", kind: "Studio website", image: "/work/solara.webp", url: "https://solara.atreyakamat.dev" },
  { name: "Pixel N Purpose", kind: "Agency platform", image: "/work/pnp.webp", url: "https://pixelnpurpose.com" },
  { name: "QuizMania", kind: "Rotaract Club of Mapusa", image: "/work/quizmania.webp", url: "https://quizmania.atreyakamat.dev" },
  { name: "Track.now", kind: "Product site", image: "/work/tracknow.webp", url: "https://tracknow.atreyakamat.dev" },
];

export const reelServices = [
  { title: "Instagram reels", desc: "Short vertical edits with pace, captions and sound that hold attention past the first second." },
  { title: "Brand & product shorts", desc: "Launches, menus, pop-ups and behind-the-scenes, cut for Reels, Shorts and stories." },
  { title: "Event recaps", desc: "Turn a day of raw clips into one tight recap people actually share." },
];

/**
 * Showreel: drop a vertical MP4/WebM (9:16, under ~8 MB) into public/reel/
 * and set src (and an optional poster image). While src is null the phone
 * frame shows the "coming soon" timeline.
 */
export const showreel: { src: string | null; poster: string | null; caption: string } = {
  src: null,
  poster: null,
  caption: "atreya.mp4 showreel",
};

/**
 * Top reels from the atreya.mp4 Instagram account, newest/best first (max 6).
 * Paste each reel's link, e.g. "https://www.instagram.com/reel/ABC123xyz/".
 * The section stays hidden while this list is empty.
 */
export const topReels: string[] = [];

export const instagram = { handle: "atreya.mp4", url: "https://www.instagram.com/atreya.mp4/" };
