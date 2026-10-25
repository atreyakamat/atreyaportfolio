"use client";

import { motion, useReducedMotion } from "framer-motion";
import { whatsappLink } from "./contact";

/**
 * Floating "Message on WhatsApp" button. Hidden until WHATSAPP_NUMBER is set
 * in contact.ts, so no dead link ever ships.
 */
export function WhatsAppButton({ message, label = "WhatsApp me" }: { message: string; label?: string }) {
  const reduce = useReducedMotion();
  const href = whatsappLink(message);
  if (!href) return null;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} on WhatsApp`}
      initial={reduce ? false : { opacity: 0, y: 24, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1.6, type: "spring", stiffness: 260, damping: 22 }}
      className="fixed bottom-5 right-5 z-[70] flex items-center gap-2 rounded-full bg-[#25D366] py-3 pl-3 pr-4 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#06281a] shadow-[0_12px_40px_-8px_rgba(37,211,102,0.55)] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 md:bottom-7 md:right-7"
    >
      <svg aria-hidden viewBox="0 0 32 32" width="22" height="22" fill="currentColor">
        <path d="M16.04 3C9.4 3 4 8.33 4 14.9c0 2.34.69 4.52 1.88 6.36L4 29l7.98-1.84A12.2 12.2 0 0 0 16.04 26.8C22.67 26.8 28 21.47 28 14.9S22.67 3 16.04 3Zm0 21.7c-1.86 0-3.6-.5-5.1-1.37l-.37-.21-4.73 1.1 1.12-4.53-.24-.38a9.6 9.6 0 0 1-1.52-5.21c0-5.4 4.42-9.79 9.84-9.79 5.42 0 9.84 4.4 9.84 9.8 0 5.4-4.42 9.6-9.84 9.6Zm5.4-7.2c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.95-.94 1.15-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.47-1.74-1.64-2.03-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.57-.48-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.48.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.08 1.75-.71 2-1.4.25-.69.25-1.28.17-1.4-.07-.13-.27-.2-.57-.35Z" />
      </svg>
      <span>{label}</span>
    </motion.a>
  );
}
