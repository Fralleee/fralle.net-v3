import type { LucideIcon } from "lucide-react";
import Link, { type LinkProps } from "next/link";
import type { PropsWithChildren } from "react";
import type { IconType } from "react-icons";
import { cn } from "@/lib/utils";

interface ExternalLinkProps extends LinkProps {
	href: string;
	className?: string;
}

export function ExternalLink({
	href,
	children,
	className,
	...rest
}: PropsWithChildren<ExternalLinkProps>) {
	const separator = href.indexOf("?") !== -1 ? "&" : "?";
	const utmParameters = `${separator}utm_source=fralle.net&utm_medium=portfolio&utm_campaign=external_link`;
	const fullUrl = href + utmParameters;
	return (
		<Link
			className={className}
			href={fullUrl}
			rel="noopener noreferrer"
			target="_blank"
			{...rest}
		>
			{children}
		</Link>
	);
}

interface TextLinkProps {
	href: string;
	children: React.ReactNode;
}

export function TextLink({ href, children }: TextLinkProps) {
	return (
		<ExternalLink
			className=" font-medium text-slate-200 hover:text-amber-400 hover:underline focus-visible:text-amber-400"
			href={href}
		>
			{children}
		</ExternalLink>
	);
}

interface NavLinkProps extends LinkProps {
	title: string;
	active: boolean;
	onClick: React.MouseEventHandler<HTMLAnchorElement>;
}

export default function NavLink({
	title,
	active,
	href,
	onClick,
	...rest
}: NavLinkProps) {
	const activeClass = active ? "active" : "";
	return (
		<li className="mt-2">
			<Link
				className={cn("group relative flex h-8 w-48 items-center", activeClass)}
				href={href}
				onClick={onClick}
				{...rest}
			>
				<div
					className={cn(
						"-z-10 absolute inset-0 w-2 rounded border border-slate-950 bg-slate-700 transition-all group-hover:w-48 group-hover:bg-amber-300 group-focus-visible:w-48 group-focus-visible:bg-amber-300 motion-reduce:transition-none",
						active && "h-8 w-48",
						active && "border-slate-950 bg-slate-700",
					)}
				/>
				<div className="nav-text ml-6 font-bold text-slate-300 text-xs uppercase tracking-widest transition-all group-hover:ml-8 group-hover:text-slate-800 group-focus-visible:ml-8 group-focus-visible:text-slate-800 motion-reduce:transition-none">
					{title}
				</div>
			</Link>
		</li>
	);
}

interface IconLinkProps extends ExternalLinkProps {
	href: string;
	title: string;
	icon: LucideIcon | IconType;
}

export const IconLink = ({
	href,
	title,
	icon: Icon,
	className,
}: IconLinkProps) => {
	return (
		<ExternalLink
			className={cn(
				"group relative grid h-14 w-14 place-items-center text-slate-500 transition-all hover:text-slate-200 focus-visible:text-slate-200",
				className,
			)}
			href={href}
		>
			<span className="sr-only">{title}</span>
			<Icon className="relative h-6 w-6" />
		</ExternalLink>
	);
};
