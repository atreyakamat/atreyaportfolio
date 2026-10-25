/**
 * Contact details shared by all four sites. One place to change them.
 * WHATSAPP_NUMBER: international format, digits only, e.g. "919876543210".
 * Leave empty to hide WhatsApp buttons everywhere.
 */
export const CONTACT_EMAIL = "atkamat1204@gmail.com";
export const WHATSAPP_NUMBER = "";

export function whatsappLink(text: string, number: string = WHATSAPP_NUMBER): string | null {
  if (!number) return null;
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
