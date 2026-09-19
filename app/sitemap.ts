import type { MetadataRoute } from "next";
import { LAST_MODIFIED } from "@/lib/seo";
import { SITE } from "@/lib/site";

const ROUTES: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/sprzedawca-iptv", priority: 0.8, changeFrequency: "monthly" },
  { path: "/przewodnik-instalacji", priority: 0.8, changeFrequency: "monthly" },
  { path: "/skontaktuj-sie-z-nami", priority: 0.7, changeFrequency: "yearly" },
  { path: "/o-nas", priority: 0.5, changeFrequency: "yearly" },
  { path: "/regulamin-iptv", priority: 0.3, changeFrequency: "yearly" },
  { path: "/zasady-zwrotow-i-anulowania", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE.url}${path === "/" ? "" : path}`,
    lastModified: LAST_MODIFIED,
    changeFrequency,
    priority,
  }));
}
