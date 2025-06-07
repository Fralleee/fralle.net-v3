import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		background_color: "#21293a",
		categories: [
			"Portfolio",
			"Personalization",
			"Productivity",
			"Education",
			"Entertainment",
			"Social",
		],
		description: "Roland Chelwing | Fralle",
		display: "standalone",
		icons: [
			{
				sizes: "192x192",
				src: "/android-chrome-192x192.png",
				type: "image/png",
			},
			{
				sizes: "512x512",
				src: "/android-chrome-512x512.png",
				type: "image/png",
			},
			{
				purpose: "maskable",
				sizes: "192x192",
				src: "/android-chrome-maskable-192x192.png",
				type: "image/png",
			},
			{
				purpose: "maskable",
				sizes: "512x512",
				src: "/android-chrome-maskable-512x512.png",
				type: "image/png",
			},
		],
		name: "Roland Chelwing | Fralle",
		scope: "/",
		short_name: "Roland Chelwing | Fralle",
		start_url: "/",
		theme_color: "#21293a",
	};
}
