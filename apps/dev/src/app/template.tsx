import type { ReactNode } from "react";
import { PageTransition } from "@atreya/ui/PageTransition";

/** Re-mounts on every navigation, so each route animates in. */
export default function Template({ children }: { children: ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
