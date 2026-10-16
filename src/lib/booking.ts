export type Enquiry = {
  name: string;
  email: string;
  company?: string;
  service: string;
  budget: string;
  timeline: string;
  details: string;
};

/** One-line summary of the enquiry, shown in the Calendly booking notes. */
export function summarise(e: Enquiry): string {
  const parts = [
    `Service: ${e.service}`,
    `Budget: ${e.budget}`,
    `Timeline: ${e.timeline}`,
    e.company ? `Company: ${e.company}` : '',
    `Details: ${e.details.trim()}`,
  ].filter(Boolean);
  return parts.join(' | ');
}

/**
 * Builds a Calendly link pre-filled with the visitor's name, email and enquiry.
 * Calendly reads `name`, `email` and `a1` (the first custom question) from the URL.
 */
export function buildCalendlyUrl(base: string, e: Enquiry): string {
  const url = new URL(base);
  url.searchParams.set('name', e.name.trim());
  url.searchParams.set('email', e.email.trim());
  url.searchParams.set('a1', summarise(e).slice(0, 900));
  return url.toString();
}

/** Encodes form data for a Netlify Forms POST. */
export function encodeForm(data: Record<string, string>): string {
  return Object.entries(data)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&');
}
