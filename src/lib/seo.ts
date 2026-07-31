interface SeoInput {
  title: string;
  description: string;
  path?: string;
  image?: string;
  jsonLd?: unknown;
}

const siteName = 'Atreya Kamat';
const baseUrl = 'https://atreyakamat.dev';

function setMeta(selector: string, attribute: 'content' | 'href', value: string) {
  const element = document.head.querySelector<HTMLMetaElement | HTMLLinkElement>(selector);
  if (element) {
    element.setAttribute(attribute, value);
  }
}

function ensureMeta(name: string, value: string, property = false) {
  const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(property ? 'property' : 'name', name);
    document.head.appendChild(element);
  }

  element.setAttribute('content', value);
}

function ensureCanonical(url: string) {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }

  element.setAttribute('href', url);
}

export function updateSeo({ title, description, path = '/', image, jsonLd }: SeoInput) {
  const fullTitle = title === siteName ? siteName : `${title} | ${siteName}`;
  const url = `${baseUrl}${path}`;

  document.title = fullTitle;
  ensureMeta('description', description);
  ensureMeta('og:site_name', siteName, true);
  ensureMeta('og:title', fullTitle, true);
  ensureMeta('og:description', description, true);
  ensureMeta('og:type', 'website', true);
  ensureMeta('og:url', url, true);
  ensureMeta('twitter:card', image ? 'summary_large_image' : 'summary');
  ensureMeta('twitter:title', fullTitle);
  ensureMeta('twitter:description', description);
  ensureCanonical(url);

  if (image) {
    ensureMeta('og:image', image, true);
    ensureMeta('twitter:image', image);
  }

  const existingJsonLd = document.getElementById('portfolio-json-ld');
  existingJsonLd?.remove();

  if (jsonLd) {
    const script = document.createElement('script');
    script.id = 'portfolio-json-ld';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);
  }

  setMeta('meta[name="theme-color"]', 'content', '#F7F5EF');
}

export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Atreya Kamat',
  url: baseUrl,
  sameAs: ['https://github.com/atreyakamat', 'https://linkedin.com/in/atreyakamat'],
  jobTitle: 'Software Engineer and Product Builder',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Goa',
    addressCountry: 'IN',
  },
};
