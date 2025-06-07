import { Blocks, Gamepad2, Globe } from "lucide-react";
import CookingWithFralleImage from "@/public/cooking-with-fralle.png";
import CopyCodeContextImage from "@/public/copy-code-context.png";
import DisneyPlusImage from "@/public/disney+.png";
import VaktImage from "@/public/vakt.png";
import type { Entry } from "../lib/types";

export const data: Entry[] = [
	{
		details:
			"Next.js recipe app using Payload CMS. Also contains my best recipes.",
		extraLink: {
			href: "https://github.com/Fralleee/cooking-with-fralle-v2/",
			title: "Code",
		},
		image: CookingWithFralleImage,
		meta: {
			icon: Globe,
			text: "Next.js App",
		},
		posthogId: "7OrpqaRG",
		sparkline: {
			label: "Visitors (30 days)",
		},
		tags: ["TypeScript", "NextJs"],
		title: "Cooking with Fralle",
		url: "https://cooking.fralle.net/",
	},
	{
		details:
			"VSCode extension that lets you copy context/structure for sharing in Markdown format.",
		extraLink: {
			href: "https://github.com/fralleee/copy-context/",
			title: "Code",
		},
		image: CopyCodeContextImage,
		meta: {
			icon: Blocks,
			text: "VSCode Extension",
		},
		posthogId: "qZPEi5DV",
		sparkline: {
			label: "Commands invoked (30 days)",
		},
		tags: ["TypeScript", "VSCode"],
		title: "Copy Context",
		url: "https://marketplace.visualstudio.com/items?itemName=Fralle.copy-code-context",
	},
	{
		details:
			"Chrome extension that removes the blur overlay that appears on video controls and subtitles on Disney+",
		extraLink: {
			href: "https://github.com/Fralleee/disneyplus-unblur/",
			title: "Code",
		},
		image: DisneyPlusImage,
		meta: {
			icon: Blocks,
			text: "Chrome Extension",
		},
		tags: ["TypeScript", "Chrome API"],
		title: "Disney+ Unblur",
		url: "https://chromewebstore.google.com/detail/disney+-unblur/epegomjmecdogfefcmadjkbinicbldmb",
	},
	{
		details:
			"Tower defense game where you upgrade and protect a single tower vs enemies.",
		image: VaktImage,
		meta: {
			icon: Gamepad2,
			text: "Game",
		},
		tags: ["Unity", "C#"],
		title: "VAKT",
		url: "https://www.youtube.com/@vakt-game",
	},
];
