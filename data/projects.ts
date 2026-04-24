import { Blocks, Code2, Gamepad2, Globe } from "lucide-react";
import CodeClickerImage from "@/public/code-clicker.png";
import CookingWithFralleImage from "@/public/cooking-with-fralle.png";
import CopyCodeContextImage from "@/public/copy-code-context.png";
import DisneyPlusImage from "@/public/disney+.png";
import QuizGameImage from "@/public/quiz-game.png";
import ShotKitImage from "@/public/shotkit.png";
import VaktImage from "@/public/vakt.png";
import type { Entry } from "../lib/types";

export const data: Entry[] = [
	{
		details:
			"Next.js recipe app using Payload CMS. Also contains my best recipes.",
		image: CookingWithFralleImage,
		links: [
			{
				href: "https://github.com/Fralleee/cooking-with-fralle-v2/",
				icon: Code2,
				title: "Code",
			},
		],
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
		image: CopyCodeContextImage,
		links: [
			{
				href: "https://github.com/fralleee/copy-context/",
				icon: Code2,
				title: "Code",
			},
			// {
			// 	href: "https://github.com/fralleee/copy-context/",
			// 	icon: Clapperboard,
			// 	title: "Video",
			// },
		],
		meta: {
			icon: Blocks,
			text: "VSCode Extension",
		},
		posthogId: "qZPEi5DV",
		sparkline: {
			label: "Commands invoked (90 days)",
		},
		tags: ["TypeScript", "VSCode"],
		title: "Copy Context",
		url: "https://marketplace.visualstudio.com/items?itemName=Fralle.copy-code-context",
	},
	{
		details:
			"Screenshot beautifier that lets you paste, style, and export polished screenshots with minimal friction.",
		image: ShotKitImage,
		links: [
			{
				href: "https://github.com/fralleee/shot-kit",
				icon: Code2,
				title: "Code",
			},
		],
		meta: {
			icon: Globe,
			text: "Web App",
		},
		tags: ["TypeScript", "React"],
		title: "ShotKit",
		url: "https://shotkit.fralle.net/",
	},
	{
		details:
			"Real-time multiplayer quiz with AI-generated questions. Create or join a game, pick a topic, and race for points over SSE.",
		image: QuizGameImage,
		links: [
			{
				href: "https://github.com/Fralleee/quiz-game",
				icon: Code2,
				title: "Code",
			},
		],
		meta: {
			icon: Gamepad2,
			text: "Web Game",
		},
		tags: ["TypeScript", "NextJs"],
		title: "Quiz Game",
		url: "https://quiz.fralle.net/",
	},
	{
		details:
			"Programming-themed idle game where every building you run generates tech debt that scales the production penalty.",
		image: CodeClickerImage,
		links: [
			{
				href: "https://github.com/Fralleee/code-clicker",
				icon: Code2,
				title: "Code",
			},
		],
		meta: {
			icon: Gamepad2,
			text: "Web Game",
		},
		tags: ["TypeScript", "React"],
		title: "Code Clicker",
		url: "https://clicker.fralle.net/",
	},
	{
		details:
			"Chrome extension that removes the blur overlay that appears on video controls and subtitles on Disney+",
		image: DisneyPlusImage,
		links: [
			{
				href: "https://github.com/Fralleee/disneyplus-unblur/",
				icon: Code2,
				title: "Code",
			},
		],
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
