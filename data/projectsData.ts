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
				"Next.js recipe app using Payload CMS. Also contains my best recipes.",
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
				"VSCode extension that lets you copy context/structure for sharing in Markdown format.",
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
				"Chrome extension that removes the blur overlay that appears on video controls and subtitles on Disney+",
			codeLink: {
				title: "Code",
				href: "https://github.com/Fralleee/disneyplus-unblur/",
			},
			tech: ["TypeScript", "Chrome API"],
		},
		{
			title: "VAKT",
			url: "https://www.youtube.com/@vakt-game",
			image: VaktImage,
			details:
				"Tower defense game where you upgrade and protect a single tower vs enemies.",
			codeLink: null,
			tech: ["Unity", "C#"],
		},
	],
};

export default data;
