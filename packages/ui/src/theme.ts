/*
  Light / dark theme shared by every atreyakamat.dev site.

  The <html data-theme> attribute is the source of truth. THEME_SCRIPT runs
  inline in <head> before first paint: saved choice, else the visitor's system
  setting. All sites share the same origin-independent key, so a choice made on
  one carries to the others when they are served from the same domain.
*/
export const THEME_KEY = "ak-theme";
export const THEME_EVENT = "ak-theme-change";

export type Theme = "light" | "dark";

export const THEME_SCRIPT = `(function(){var d=document.documentElement;try{var t=localStorage.getItem(${JSON.stringify(THEME_KEY)});if(t!=="light"&&t!=="dark")t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";d.dataset.theme=t}catch(e){d.dataset.theme="dark"}})()`;
