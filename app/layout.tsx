import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { CSPostHogProvider } from "../providers/posthog";
import Tracker from "@/components/tracker";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://www.fralle.net"),
	title: "Roland Chelwing | Fralle",
	description:
		"Roland Chelwing, a professional curious and dedicated software engineer with diverse experience spanning multiple industries.",
	keywords: [
		"software engineer",
		"senior",
		"developer",
		"programmer",
		"software development",
		"coding",
		"code",
		"programming",
		"typescript",
		"javascript",
		"c#",
		"sql",
		"postgres",
		"elasticsearch",
		"docker",
		"redis",
		"nodejs",
		"node.js",
		".NET",
		"git",
		"kubernetes",
		"react",
		"nextjs",
		"webpack",
		"redux",
		"tailwindcss",
		"shadcn",
		"fullstack",
		"full-stack",
		"front-end",
		"frontend",
		"back-end",
		"backend",
	],
};

export default function RootLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<html lang="en" className="scroll-smooth">
			<body
				className={cn(
					"bg-slate-800 text-slate-400 leading-relaxed antialiased selection:bg-amber-300 selection:text-amber-900",
					font.className,
				)}
			>
				<CSPostHogProvider>
					<Tracker />
					<div className="mx-auto min-h-screen max-w-(--breakpoint-xl) px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
						{children}
					</div>
				</CSPostHogProvider>
			</body>
		</html>
	);
}
