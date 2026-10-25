import { site } from "@/data/teach";

/**
 * Builds the enquiry link. With a WhatsApp number configured, opens a WhatsApp
 * chat with the message; otherwise falls back to a prefilled email.
 */
export function enquiryHref(message: string, subject = "Tuition enquiry") {
  if (site.whatsappNumber) {
    return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
  }
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
}

export const enquiryChannel = site.whatsappNumber ? "WhatsApp" : "Email";

export const defaultEnquiry =
  "Hi Atreya,\n\nStudent level:\nSubject / track:\nFormat (1:1 or small batch):\nArea in Goa:\n\nWhat I need help with:\n";
