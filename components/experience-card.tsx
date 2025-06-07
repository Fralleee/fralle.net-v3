import Card from "./card";
import TechList from "./tech-list";
import Image from "next/image";
import ExternalLink from "./external-link";
import type { Experience } from "@/data/types";
import { ArrowRight, MapPin } from "lucide-react";

export default function ExperienceCard({
	experience,
}: { experience: Experience }) {
	return (
		<Card>
			<header
				className="z-10 mt-1 mb-2 font-semibold text-slate-500 text-xs uppercase tracking-wide sm:col-span-2 lg:text-center"
				aria-label={experience.duration}
			>
				{experience.duration}
				<Image
					src={experience.iconSrc}
					alt={experience.title}
					width={64}
					height={64}
					className="my-4 h-16 w-16 transition group-hover:opacity-100 group-hover:contrast-100 sm:order-1 sm:col-span-2 sm:translate-y-1 lg:mx-auto lg:mb-0 lg:opacity-50 lg:contrast-75"
				/>
			</header>
			<div className="z-10 sm:col-span-6">
				<h3 className="mb-2 font-medium leading-snug">
					<ExternalLink
						className="group/link inline-flex items-baseline font-medium text-base text-slate-200 leading-tight hover:text-amber-300 focus-visible:text-amber-300"
						href={experience.company.url}
						aria-label={`${experience.title} at ${experience.company.name}`}
					>
						<span className="-inset-x-4 -inset-y-2.5 md:-inset-x-6 md:-inset-y-4 absolute rounded" />
						<span>{experience.title}</span>
						<span className="mx-2">·</span>
						<span className="inline-block">
							{experience.company.name}
							<ArrowRight className="-translate-y-px ml-1 inline-block h-4 w-4 shrink-0 opacity-0 transition-transform group-hover/link:translate-x-1 group-hover/link:opacity-100 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
						</span>
					</ExternalLink>
					<div className="mt-px flex items-center text-slate-500 text-sm">
						<MapPin className="mr-1 h-3 w-3" />
						{experience.company.location}
					</div>
				</h3>
				<p className="mt-2 text-sm leading-normal">{experience.details}</p>
				<TechList techs={experience.tech} />
			</div>
		</Card>
	);
}
