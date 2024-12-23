import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Roland Chelwing | Fralle",
    short_name: "Roland Chelwing | Fralle",
    description: "Roland Chelwing | Fralle",
    start_url: "/",
    display: "standalone",
    background_color: "#21293a",
    theme_color: "#21293a",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/android-chrome-maskable-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/android-chrome-maskable-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    scope: "/",
    categories: ["Portfolio", "Personalization", "Productivity", "Education", "Entertainment", "Social"],
  };
}
