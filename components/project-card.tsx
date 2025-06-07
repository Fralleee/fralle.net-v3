import Image from "next/image";
import Card from "./card";
import TechList from "./tech-list";
import ExternalLink from "./external-link";
import type { Project } from "@/data/types";
import { ArrowRight, Link } from "lucide-react";

export default function ProjectCard({ project }: { project: Project }) {
	return (
		<Card>
			<Image
				placeholder="blur"
				src={project.image}
				alt={project.title}
				width={96}
				height={96}
				className="mb-4 rounded transition group-hover:opacity-100 group-hover:contrast-100 sm:order-1 sm:col-span-2 sm:translate-y-1 lg:mb-0 lg:opacity-50 lg:contrast-75"
			/>
			<div className="z-10 order-2 sm:col-span-6">
				<h3 className="mb-2 font-medium leading-snug">
					<ExternalLink
						className="group/link inline-flex items-baseline font-medium text-base text-slate-200 leading-tight hover:text-amber-300 focus-visible:text-amber-300"
						href={project.url}
						aria-label={project.title}
					>
						<span className="-inset-x-4 -inset-y-2.5 md:-inset-x-6 md:-inset-y-4 absolute hidden rounded lg:block" />
						<span>{project.title}</span>
						<span className="inline-block">
							<ArrowRight className="-translate-y-px ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:translate-x-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
						</span>
					</ExternalLink>
				</h3>
				<p className="mt-2 text-sm leading-normal">{project.details}</p>
				{project.links.length > 0 && (
					<ul className="mt-2 flex flex-wrap" aria-label="Related links">
						{project.links.map((link) => (
							<li key={link.title}>
								<ExternalLink
									className="relative mt-2 inline-flex items-center pr-4 font-medium text-slate-300 text-sm hover:text-amber-300 focus-visible:text-amber-300 "
									href={link.href}
								>
									<Link className="mr-1 h-3 w-3" />
									<span>{link.title}</span>
								</ExternalLink>
							</li>
						))}
					</ul>
				)}
				<TechList techs={project.tech} />
			</div>
		</Card>
	);
}
