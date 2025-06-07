import CookingWithFralleImage from "@/public/cooking-with-fralle.png";
import CopyCodeContextImage from "@/public/copy-code-context.png";
import DisneyPlusImage from "@/public/disney+.png";
import VaktImage from "@/public/vakt.png";
import type { Entry } from "../lib/types";

export const data: Entry[] = [
	{
		title: "Cooking with Fralle",
		url: "https://cooking.fralle.net/",
		image: CookingWithFralleImage,
		details:
			"Next.js recipe app using Payload CMS. Also contains my best recipes.",
		extraLink: {
			title: "Code",
			href: "https://github.com/Fralleee/cooking-with-fralle-v2/",
		},
		tags: ["TypeScript", "NextJs"],
		posthogId: "7OrpqaRG",
		sparkline: {
			label: "Visitors (30 days)",
		},
	},
	{
		title: "Copy Context",
		url: "https://marketplace.visualstudio.com/items?itemName=Fralle.copy-code-context",
		image: CopyCodeContextImage,
		details:
			"VSCode extension that lets you copy context/structure for sharing in Markdown format.",
		extraLink: {
			title: "Code",
			href: "https://github.com/fralleee/copy-context/",
		},
		tags: ["TypeScript", "VSCode"],
		posthogId: "qZPEi5DV",
		sparkline: {
			label: "Commands invoked (30 days)",
		},
	},
	{
		title: "Disney+ Unblur",
		url: "https://chromewebstore.google.com/detail/disney+-unblur/epegomjmecdogfefcmadjkbinicbldmb",
		image: DisneyPlusImage,
		details:
			"Chrome extension that removes the blur overlay that appears on video controls and subtitles on Disney+",
		extraLink: {
			title: "Code",
			href: "https://github.com/Fralleee/disneyplus-unblur/",
		},
		tags: ["TypeScript", "Chrome API"],
	},
	{
		title: "VAKT",
		url: "https://www.youtube.com/@vakt-game",
		image: VaktImage,
		details:
			"Tower defense game where you upgrade and protect a single tower vs enemies.",
		tags: ["Unity", "C#"],
	},
];
