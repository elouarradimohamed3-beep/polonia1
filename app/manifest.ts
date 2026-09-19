import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "IPTV Polska",
    short_name: "IPTV Polska",
    description: "Subskrypcje IPTV od 15 € miesięcznie. Kanały na żywo, VOD, 4K/FHD/HD, wsparcie 24/7.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0a1628",
    lang: "pl",
  };
}
