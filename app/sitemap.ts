import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			lastModified: new Date(),
			url: "https://www.fralle.net",
		},
	];
}
