/**
 * Cloudflare Web Analytics beacon: privacy-first, no cookies, free.
 * Renders nothing unless a site token is provided at build time
 * (NEXT_PUBLIC_CF_BEACON_TOKEN in the Netlify site's environment variables).
 */
export function Analytics({ token }: { token?: string }) {
  if (!token) return null;
  return (
    <script
      defer
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon={JSON.stringify({ token })}
    />
  );
}
