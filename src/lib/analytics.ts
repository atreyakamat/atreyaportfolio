type AnalyticsPayload = Record<string, string | number | boolean | undefined>;

export function trackEvent(name: string, payload: AnalyticsPayload = {}) {
  window.dispatchEvent(
    new CustomEvent('portfolio:analytics', {
      detail: { name, payload, timestamp: new Date().toISOString() },
    }),
  );
}
