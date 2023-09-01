import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://fralle.net",
            lastModified: new Date(),
        },
    ];
}
