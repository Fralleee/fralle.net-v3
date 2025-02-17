import PollsImage from "@/public/polls.png";
import CookingWithFralleImage from "@/public/cooking-with-fralle.png";
import CopyCodeContextImage from "@/public/copy-code-context.png";
import SwiftPasteImage from "@/public/swiftpaste.png";
import DisneyPlusImage from "@/public/disney+.png";
import VaktImage from "@/public/vakt.png";

const data = {
  data: [
    {
      title: "Polls",
      url: "https://poll.fralle.net/",
      image: PollsImage,
      details: "Effortlessly create real-time polls and storypoint sessions. Perfect for making every group choice clear and simple!",
      links: [
        {
          title: "Code",
          href: "https://github.com/Fralleee/voting-app/",
        },
      ],
      tech: ["TypeScript", "NextJs", "Firebase"],
    },
    {
      title: "Cooking with Fralle",
      url: "https://cooking.fralle.net/",
      image: CookingWithFralleImage,
      details:
        "Your go-to recipe app for all your favorite dishes. Easily adjust portions and ingredients on the fly, and explore a wide range of recipes, from mouth-watering pizzas and fluffy muffins to refreshing drinks.",
      links: [
        {
          title: "Code",
          href: "https://github.com/Fralleee/cooking-with-fralle-v2/",
        },
      ],
      tech: ["TypeScript", "NextJs"],
    },
    {
      title: "Copy Code Context",
      url: "https://marketplace.visualstudio.com/items?itemName=Fralle.copy-code-context",
      image: CopyCodeContextImage,
      details: "A VSCode extension that allows you to quickly copy one or more files or entire folders as Markdown-formatted code snippets.",
      links: [
        {
          title: "Code",
          href: "https://github.com/fralleee/copy-code-context/",
        },
      ],
      tech: ["TypeScript", "VSCode"],
    },
    {
      title: "SwiftPaste",
      url: "https://chromewebstore.google.com/detail/swiftpaste/ocamjpjndljkgcoeadplclcoiepjicgj",
      image: SwiftPasteImage,
      details: "A Chrome extension optimizing text inputs by providing quick access to a categorized text storage, based on context.",
      links: [
        {
          title: "Code",
          href: "https://github.com/Fralleee/SwiftPaste/",
        },
      ],
      tech: ["TypeScript", "Chrome API", "React"],
    },
    {
      title: "Disney+ Unblur",
      url: "https://chromewebstore.google.com/detail/disney+-unblur/epegomjmecdogfefcmadjkbinicbldmb",
      image: DisneyPlusImage,
      details: "A Chrome extension that removes the blur overlay from Disney+ controls.",
      links: [
        {
          title: "Code",
          href: "https://github.com/Fralleee/disneyplus-unblur/",
        },
      ],
      tech: ["TypeScript", "Chrome API"],
    },
    {
      title: "VAKT",
      url: "https://www.youtube.com/@vakt-game",
      image: VaktImage,
      details: "Tower defense game where you upgrade and protect a tower vs enemies.",
      links: [],
      tech: ["Unity", "C#"],
    },
  ],
};

export default data;
