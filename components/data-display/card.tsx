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
	extraLink,
	sparkline,
}: Props) {
	return (
		<div className="group relative grid pb-4 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:opacity-100!">
			<header className="z-10 mt-1 mb-2 font-semibold text-slate-500 text-xs uppercase tracking-wide sm:col-span-2 lg:text-center">
				{imageHeader && imageHeader}
				<Image
					alt={title}
					blurDataURL={image.blurDataURL}
					className={cn(
						"my-4 h-16 w-16 transition group-hover:opacity-100 group-hover:contrast-100 sm:order-1 sm:col-span-2 sm:translate-y-1 lg:mx-auto lg:mb-0 lg:opacity-50 lg:contrast-75",
						{ "h-22 w-22": !imageHeader, "my-0": !imageHeader },
					)}
					height={image.height}
					placeholder={image.blurDataURL ? "blur" : "empty"}
					src={image.src}
					width={image.width}
				/>
			</header>

			<div className="z-10 order-2 overflow-hidden sm:col-span-6">
				<h3 className="mb-2 font-medium leading-snug">
					<ExternalLink
						aria-label={title}
						className="group/link inline-flex items-baseline font-medium text-base text-slate-200 leading-tight hover:text-amber-300 focus-visible:text-amber-300"
						href={url}
					>
						<span className="-inset-x-4 -inset-y-2.5 md:-inset-x-6 md:-inset-y-4 absolute lg:block" />
						<span className="truncate">{title}</span>
						<span className="inline-block">
							<ArrowRight className="-translate-y-px ml-1 inline-block h-4 w-4 shrink-0 opacity-0 transition-all group-hover/link:translate-x-1 group-hover/link:opacity-100 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
						</span>
					</ExternalLink>
					{meta && (
						<div className="mt-px flex items-center text-slate-500 text-sm">
							{meta.icon && <meta.icon className="mr-0.5" size={14} />}
							<span className="ml-1">{meta.text}</span>
						</div>
					)}
				</h3>

				<p className="mt-2 text-sm leading-normal">{details}</p>

				{(extraLink || sparkline) && (
					<div className="mt-2 flex items-center">
						{extraLink && (
							<ExternalLink
								aria-label={extraLink.title}
								className="relative inline-flex items-center pr-4 font-medium text-slate-300 text-sm hover:text-amber-300 focus-visible:text-amber-300"
								href={extraLink.href}
							>
								<Link className="mr-1 h-3 w-3" />
								<span className="ml-1">{extraLink.title}</span>
							</ExternalLink>
						)}
						{sparkline && (
							<Tooltip>
								<TooltipTrigger className="relative mr-8 ml-auto">
									<Sparkline data={sparkline.data} title={sparkline.label} />
								</TooltipTrigger>
								<TooltipContent>{sparkline.label}</TooltipContent>
							</Tooltip>
						)}
					</div>
				)}

				<TagList tags={tags} />
			</div>
		</div>
	);
}
