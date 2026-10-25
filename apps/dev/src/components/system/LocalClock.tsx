"use client";

import { useSyncExternalStore } from "react";

const fmt = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Kolkata",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

function subscribe(cb: () => void) {
  const id = setInterval(cb, 1000);
  return () => clearInterval(id);
}

/** Live time in Goa (IST). Renders a placeholder on the server. */
export function LocalClock({ className }: { className?: string }) {
  const time = useSyncExternalStore(subscribe, () => fmt.format(new Date()), () => "--:--:--");
  return (
    <time className={className} suppressHydrationWarning>
      {time}
    </time>
  );
}
