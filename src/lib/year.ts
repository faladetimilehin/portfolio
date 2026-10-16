/** Current year, so the footer updates itself every January (2026 → 2027 → …). */
export const currentYear = (now: Date = new Date()) => now.getFullYear();
