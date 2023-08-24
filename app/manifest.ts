import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Roland Chelwing | Fralle",
    short_name: "Roland Chelwing | Fralle",
    description: "Roland Chelwing | Fralle",
    start_url: "/",
    display: "standalone",
    background_color: "#101E3F",
    theme_color: "#101E3F",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
