import { ArrowRight, Link } from "lucide-react";
import Image from "next/image";
import type { Entry } from "@/lib/types";
import { cn } from "@/lib/utils";
import { ExternalLink } from "../link";
import TagList from "../tag-list";
import { Tooltip, TooltipContent, TooltipTrigger } from "../tooltip";
import { Sparkline } from "./sparkline";

interface Props extends Omit<Entry, "posthogId" | "sparkline"> {
	sparkline?: {
		data: number[];
		label?: string;
	};
}

export function Card({
	image,
	title,
	url,
	meta,
	details,
	imageHeader,
	tags,
	links,
	sparkline,
}: Props) {
	return (
		<div className="group relative grid pb-4 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 md:group-hover/list:opacity-50 md:hover:opacity-100!">
			<header className="z-10 mt-1 mb-2 font-semibold text-slate-500 text-xs uppercase tracking-wide sm:col-span-2 md:text-center">
				{imageHeader && imageHeader}
				<Image
					alt={title}
					blurDataURL={image.blurDataURL}
					className={cn(
						"my-4 h-16 w-16 transition group-hover:opacity-100 group-hover:contrast-100 sm:col-span-2 sm:mx-auto sm:translate-y-1 md:mb-0 md:opacity-50 md:contrast-75",
						{ "h-22 w-22": !imageHeader, "my-0": !imageHeader },
					)}
					height={image.height}
					placeholder={image.blurDataURL ? "blur" : "empty"}
					src={image.src}
					width={image.width}
				/>
			</header>

			<div className="z-10 overflow-hidden sm:col-span-6">
				<h3 className="mb-2 flex flex-col gap-2 font-medium leading-snug">
					<ExternalLink
						aria-label={title}
						className="group/link inline-flex items-baseline font-medium text-base text-slate-200 leading-tight hover:text-amber-300 focus-visible:text-amber-300"
						href={url}
					>
						<span className="-inset-x-4 -inset-y-2.5 md:-inset-x-6 md:-inset-y-4 absolute md:block" />
						<span className="truncate">{title}</span>
						<span className="inline-block">
							<ArrowRight
								className="-translate-y-px ml-1 inline-block shrink-0 opacity-0 transition-all group-hover/link:translate-x-1 group-hover/link:opacity-100 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
								size={16}
							/>
						</span>
					</ExternalLink>
					{meta && (
						<div className="flex items-center text-slate-500 text-sm">
							{meta.icon && <meta.icon className="mr-0.5" size={16} />}
							<span className="ml-1">{meta.text}</span>
						</div>
					)}
				</h3>

				<p className="text-sm leading-normal">{details}</p>

				{(links || sparkline) && (
					<div className="mt-2 flex items-center">
						{links && links.length > 0 && (
							<div className="flex flex-col">
								{links.map((link) => (
									<ExternalLink
										aria-label={link.title}
										className="group/extralink relative inline-flex items-center py-1 pr-4 font-medium text-slate-200 text-sm hover:text-amber-300 focus-visible:text-amber-300"
										href={link.href}
										key={`${title}-${link.title}`}
									>
										{link.icon ? (
											<link.icon className="mr-1" size={14} />
										) : (
											<Link className="mr-1" size={14} />
										)}
										<span className="ml-1">{link.title}</span>

										<ArrowRight
											className="ml-1 inline-block shrink-0 opacity-0 transition-all group-hover/extralink:translate-x-1 group-hover/extralink:opacity-100 group-focus-visible/extralink:translate-x-1 motion-reduce:transition-none"
											size={16}
										/>
									</ExternalLink>
								))}
							</div>
						)}
						{sparkline && (
							<Tooltip>
								<TooltipTrigger className="relative mr-8 ml-auto">
									<Sparkline data={sparkline.data} title={sparkline.label} />
								</TooltipTrigger>
								<TooltipContent side="top" sideOffset={5}>
									{sparkline.label}
								</TooltipContent>
							</Tooltip>
						)}
					</div>
				)}

				<TagList tags={tags} />
			</div>
		</div>
	);
}
