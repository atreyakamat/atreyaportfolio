/** Content for the Creator Arcade games. Original copy; no real view counts. */

export type HookPair = { topic: string; a: string; b: string; better: "a" | "b"; why: string };

export const hookPairs: HookPair[] = [
  {
    topic: "PC fixes",
    a: "Today I'll show you some tips to make your computer faster.",
    b: "Your laptop isn't old. One setting is choking it.",
    better: "b",
    why: "It names the viewer's problem and promises one specific fix. The first line is a slow intro anyone could say.",
  },
  {
    topic: "Linux",
    a: "I installed Linux on a ₹15,000 laptop. Here's what broke.",
    b: "Linux is an open-source operating system with many distributions.",
    better: "a",
    why: "A concrete setup plus a hint of drama makes you want the payoff. The second is a textbook definition.",
  },
  {
    topic: "Free tools",
    a: "Stop paying for this. There's a free tool that does the same thing.",
    b: "Here is a list of useful free software you might like.",
    better: "a",
    why: "It speaks to a habit you already have (paying) and creates a gap: which tool? A 'list you might like' asks for nothing.",
  },
  {
    topic: "AI tools",
    a: "AI is changing everything and you need to keep up.",
    b: "I let AI write my college notes for a week. My marks changed.",
    better: "b",
    why: "A personal experiment with a result beats a vague warning. Specific always wins over 'everything'.",
  },
  {
    topic: "PC fixes",
    a: "Your C drive is full of junk Windows will never tell you about.",
    b: "Disk cleanup is a utility included with Windows.",
    better: "a",
    why: "It hints at a hidden problem on the viewer's own machine. The second line explains a feature nobody asked about.",
  },
  {
    topic: "Behind the scenes",
    a: "This 30-second reel took me 6 hours. Here's every mistake.",
    b: "Welcome back to my channel, today's video is about editing.",
    better: "a",
    why: "Effort plus honesty is a story. 'Welcome back' is the line people scroll past in the first second.",
  },
  {
    topic: "Free tools",
    a: "Some websites can be quite helpful for students.",
    b: "Three websites I wish I'd known in first year of college.",
    better: "b",
    why: "A number, an audience and a hint of regret. It tells the right viewer 'this is for you'.",
  },
  {
    topic: "AI tools",
    a: "Don't use ChatGPT like this. Use it like this.",
    b: "ChatGPT is a popular chatbot made by OpenAI.",
    better: "a",
    why: "A wrong-versus-right contrast makes viewers check whether they're doing it wrong. Facts alone don't stop the thumb.",
  },
];

export type ShortcutQ = { action: string; answer: string };

/** Well-known, accurate shortcuts (Windows/Linux keys). */
export const shortcutPool: ShortcutQ[] = [
  { action: "Undo the last change", answer: "Ctrl + Z" },
  { action: "Redo (Premiere Pro, Photoshop)", answer: "Ctrl + Shift + Z" },
  { action: "Open a terminal on Ubuntu", answer: "Ctrl + Alt + T" },
  { action: "Screenshot a region on Windows", answer: "Win + Shift + S" },
  { action: "Open Task Manager directly", answer: "Ctrl + Shift + Esc" },
  { action: "Switch between open windows", answer: "Alt + Tab" },
  { action: "Lock your Windows PC", answer: "Win + L" },
  { action: "Jump to the browser address bar", answer: "Ctrl + L" },
  { action: "Reopen the tab you just closed", answer: "Ctrl + Shift + T" },
  { action: "Split a clip at the playhead (Premiere Pro)", answer: "Ctrl + K" },
  { action: "Ripple delete a clip (Premiere Pro)", answer: "Shift + Delete" },
  { action: "Paste inside a Linux terminal", answer: "Ctrl + Shift + V" },
  { action: "Show the desktop on Windows", answer: "Win + D" },
  { action: "Open File Explorer", answer: "Win + E" },
];

export const ARCADE_URL = "https://create.atreyakamat.dev/#arcade";
