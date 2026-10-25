import clsx from "clsx";
import type { FormState } from "./netlifyForm";

/**
 * Live status line for a Netlify form: sending, sent, or a failure that offers
 * the prefilled email instead. Colours come from the site via class props.
 */
export function FormStatus({
  state,
  mailto,
  className,
  linkClassName,
}: {
  state: FormState;
  mailto: string;
  className?: string;
  linkClassName?: string;
}) {
  return (
    <p role="status" aria-live="polite" className={clsx("min-h-[1.5em] text-sm leading-relaxed", className)}>
      {state === "sending" && "Sending…"}
      {state === "sent" && "Got it, thank you. I’ll reply personally."}
      {state === "error" && (
        <>
          Couldn&rsquo;t send from here.{" "}
          <a href={mailto} className={clsx("font-semibold underline underline-offset-4", linkClassName)}>
            Email it instead
          </a>{" "}
          &mdash; your message is already written.
        </>
      )}
    </p>
  );
}
