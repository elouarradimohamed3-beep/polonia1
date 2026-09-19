/**
 * Real customer proof. Leave empty until you have genuine, permitted content:
 * the home page shows these blocks only when they contain data.
 * Never add invented names, quotes, counts or ratings.
 */
export type Testimonial = {
  name: string; // first name is enough, e.g. "Marek"
  place: string; // e.g. "Manchester, UK"
  plan: string; // e.g. "1 rok, 3 urządzenia"
  quote: string;
};

export const TESTIMONIALS: Testimonial[] = [];

/** e.g. { platform: "Google", rating: 4.8, count: 127, url: "https://g.page/..." } */
export const REVIEW_BADGE: { platform: string; rating: number; count: number; url: string } | null = null;
