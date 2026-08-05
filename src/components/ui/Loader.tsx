export function Loader() {
  return (
    <div className="loader-shell" role="status" aria-live="polite">
      <div className="loader-dot" />
      <div className="loader-dot" />
      <div className="loader-dot" />
      <span className="sr-only">Loading content</span>
    </div>
  );
}
