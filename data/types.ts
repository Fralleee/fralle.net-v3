import type { StaticImageData } from "next/image";

export interface Experience {
	title: string;
	company: {
		name: string;
		url: string;
		location: string;
	};
	iconSrc: string;
	duration: string;
	details: string;
	tech: string[];
}

export interface Experiences {
	data: Experience[];
}

export interface Link {
	title: string;
	href: string;
}

export interface Project {
	title: string;
	url: string;
	image: StaticImageData;
	details: string;
	links: Link[];
	tech: string[];
}

export interface Projects {
	data: Project[];
}

export interface Article {
	title: string;
	subtitle: string;
	meta: string;
	url: string;
	image: StaticImageData;
	tags: string[];
}

export interface Articles {
	data: Article[];
}
