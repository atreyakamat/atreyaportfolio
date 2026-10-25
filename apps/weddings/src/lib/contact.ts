import { site } from "@/data/site";

export const waLink = (text: string) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
export const mailLink = (subject: string, body: string) =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export const defaultWa = waLink("Hi Saltwater Studios, I'd like to ask about wedding reels. Date: , Venue: ");

/** Fired by hero buttons so the track chooser switches before the page scrolls to it. */
export const TRACK_EVENT = "saltwater:track";
