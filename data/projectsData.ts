import PollsImage from "@/public/polls.png";
import CookingWithFralleImage from "@/public/cooking-with-fralle.png";
import CopyCodeContextImage from "@/public/copy-code-context.png";
import DisneyPlusImage from "@/public/disney+.png";
import VaktImage from "@/public/vakt.png";

const data = {
	data: [
		{
			title: "Cooking with Fralle",
			url: "https://cooking.fralle.net/",
			image: CookingWithFralleImage,
			details:
				"Your go-to recipe app for all your favorite dishes. Easily adjust portions and ingredients on the fly, and explore a wide range of recipes, from mouth-watering pizzas and fluffy muffins to refreshing drinks.",
			codeLink: {
				title: "Code",
				href: "https://github.com/Fralleee/cooking-with-fralle-v2/",
			},
			tech: ["TypeScript", "NextJs"],
			posthogId: "7OrpqaRG",
			activityLabel: "Visitors (30 days)",
		},
		{
			title: "Copy Context",
			url: "https://marketplace.visualstudio.com/items?itemName=Fralle.copy-code-context",
			image: CopyCodeContextImage,
			details:
				"A VSCode extension that allows you to quickly copy one or more files or entire folders as Markdown-formatted code snippets.",
			codeLink: {
				title: "Code",
				href: "https://github.com/fralleee/copy-context/",
			},
			tech: ["TypeScript", "VSCode"],
			posthogId: "qZPEi5DV",
			activityLabel: "Commands invoked (30 days)",
		},
		{
			title: "Disney+ Unblur",
			url: "https://chromewebstore.google.com/detail/disney+-unblur/epegomjmecdogfefcmadjkbinicbldmb",
			image: DisneyPlusImage,
			details:
				"A Chrome extension that removes the blur-sm overlay from Disney+ controls.",
			codeLink: {
				title: "Code",
				href: "https://github.com/Fralleee/disneyplus-unblur/",
			},
			tech: ["TypeScript", "Chrome API"],
		},
		{
			title: "Polls",
			url: "https://poll.fralle.net/",
			image: PollsImage,
			details:
				"Effortlessly create real-time polls and storypoint sessions. Perfect for making every group choice clear and simple!",
			codeLink: {
				title: "Code",
				href: "https://github.com/Fralleee/voting-app/",
			},
			tech: ["TypeScript", "NextJs", "Firebase"],
		},
		{
			title: "VAKT",
			url: "https://www.youtube.com/@vakt-game",
			image: VaktImage,
			details:
				"Tower defense game where you upgrade and protect a tower vs enemies.",
			codeLink: null,
			tech: ["Unity", "C#"],
		},
	],
};

export default data;
