import GetHarleyLogo from "@/public/logos/getharley.svg";
import NiraLogo from "@/public/logos/nira.svg";
import StackOverflowLogo from "@/public/logos/stackoverflow.svg";
import YubicoLogo from "@/public/logos/yubico.svg";
import GamesysLogo from "@/public/logos/gamesys.svg";
import AsitisLogo from "@/public/logos/asitis.svg";
import { MapPin } from "lucide-react";
import type { Entry } from "../lib/types";

export const data: Entry[] = [
	{
		title: "Frontend Engineer · GetHarley",
		url: "https://getharley.com/",
		image: GetHarleyLogo,
		meta: {
			icon: MapPin,
			text: "London, UK (Remote)",
		},
		imageHeader: "2024 — Present",
		details:
			"Contributing to a telehealth platform that connects patients with expert clinicians, focusing on enhancing user experience, implementing new features and designs.",
		tags: ["TypeScript", "React", "NextJs", "AWS"],
	},
	{
		title: "Senior Software Engineer · Nira",
		url: "https://www.nira.com/",
		meta: {
			icon: MapPin,
			text: "California, US (Remote)",
		},
		image: NiraLogo,
		imageHeader: "2023 — 2024",
		details:
			"Helping companies take control over their documents, enhancing the transparency of both internal and external access to company records.",
		tags: [
			"TypeScript",
			"React",
			"NextJs",
			"tRPC",
			"GraphQL",
			"ElasticSearch",
			"AWS",
		],
	},
	{
		title: "Software Engineer · Stack Overflow",
		url: "https://stackoverflow.com/",
		meta: {
			icon: MapPin,
			text: "New York, US (Remote)",
		},
		image: StackOverflowLogo,
		imageHeader: "2022 — 2023",
		details:
			"Part of the Awareness team, primarily involved in optimizing ads and metrics to improve click-through rates, automation, and impressions.",
		tags: [
			"TypeScript",
			"Webpack",
			"C#",
			"SQL",
			"Redis",
			"ElasticSearch",
			"Google Ads",
		],
	},
	{
		title: "Senior Software Engineer · Yubico",
		url: "https://www.yubico.com/",
		meta: {
			icon: MapPin,
			text: "California, US (Remote)",
		},
		image: YubicoLogo,
		imageHeader: "2022 — 2022",
		details:
			"Responsible for maintaining an e-commerce website built on React and overseeing the migration of its functionality to a new Svelte-based application.",
		tags: [
			"TypeScript",
			"React",
			"NextJs",
			"Svelte",
			"TailwindCSS",
			"MySQL",
			"Docker",
		],
	},
	{
		title: "Software Engineer · Gamesys Group",
		url: "https://www.gamesysgroup.com/",
		meta: {
			icon: MapPin,
			text: "Skövde, Sweden (Hybrid)",
		},
		image: GamesysLogo,
		imageHeader: "2020 — 2022",
		details:
			"Developed payment APIs and mocking solutions for the online gambling platform.",
		tags: ["JavaScript", "Vue", "PHP", "Java", "Docker"],
	},
	{
		title: "Software Engineer · Asitis",
		url: "https://www.aptic.net/",
		meta: {
			icon: MapPin,
			text: "Skövde, Sweden (Hybrid)",
		},
		image: AsitisLogo,
		imageHeader: "2015 — 2020",
		details:
			"Served as a front-end development team leader for a cloud-based project called Cloudware.",
		tags: [
			"JavaScript",
			"React",
			"Redux",
			"Webpack",
			"Microsoft Azure",
			"C#",
			"SQL",
		],
	},
];
