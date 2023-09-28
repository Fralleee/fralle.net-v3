import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://www.fralle.net",
            lastModified: new Date(),
        },
    ];
}
