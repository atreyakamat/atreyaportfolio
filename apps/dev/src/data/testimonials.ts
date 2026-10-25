/**
 * Real client quotes only. The section stays hidden while this list is empty.
 * Add a quote only with the person's permission, exactly as they wrote it.
 *
 * Example entry:
 * {
 *   quote: "Atreya rebuilt our booking flow and now enquiries come straight to us.",
 *   name: "Full name",
 *   role: "Owner",
 *   org: "Business name, Mapusa",
 *   project: "Website rebuild",
 *   url: "https://example.com",   // optional: their live site
 * },
 */
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  org: string;
  project?: string;
  url?: string;
}

export const testimonials: Testimonial[] = [];
