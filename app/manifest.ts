import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/fr",
    name: "SmartEducation — Une éducation de qualité pour tous",
    short_name: "SMED",
    description: "SmartEducation agit pour une éducation inclusive et équitable.",
    lang: "fr",
    start_url: "/fr",
    scope: "/",
    display: "standalone",
    background_color: "#f9f7f2",
    theme_color: "#0b4da1",
    icons: [
      { src: "/icons/pwa-icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icons/pwa-icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
  };
}
