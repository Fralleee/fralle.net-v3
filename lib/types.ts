import type { LucideIcon } from "lucide-react";
import type { StaticImageData } from "next/image";

export interface Entry {
	image: StaticImageData;
	title: string;
	url: string;
	imageHeader?: string;
	details: string;
	meta?: {
		icon: LucideIcon;
		text: string;
	};
	tags: string[];
	links?: {
		icon?: LucideIcon;
		href: string;
		title: string;
	}[];
	posthogId?: string;
	sparkline?: {
		label?: string;
	};
}

export type Insights = Record<string, number[]>;
