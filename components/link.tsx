import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
	href: string;
	className: string;
	children: React.ReactNode;
}

export function ExternalLink({ href, children, className, ...rest }: Props) {
	const separator = href.indexOf("?") !== -1 ? "&" : "?";
	const utmParameters = `${separator}utm_source=fralle.net&utm_medium=portfolio&utm_campaign=external_link`;
	const fullUrl = href + utmParameters;
	return (
		<Link
			href={fullUrl}
			target="_blank"
			rel="noopener noreferrer"
			className={className}
			{...rest}
		>
			{children}
		</Link>
	);
}

export function TextLink({
	href,
	children,
}: { href: string; children: React.ReactNode }) {
	return (
		<ExternalLink
			className=" font-medium text-slate-200 hover:text-amber-400 hover:underline focus-visible:text-amber-400"
			href={href}
		>
			{children}
		</ExternalLink>
	);
}

interface NavLinkProps {
	link: string;
	title: string;
	active: boolean;
	onClick: React.MouseEventHandler<HTMLAnchorElement>;
}

export default function NavLink({
	link,
	title,
	active,
	onClick,
}: NavLinkProps) {
	const activeClass = active ? "active" : "";
	return (
		<li className="mt-2">
			<Link
				className={cn("group relative flex h-8 w-48 items-center", activeClass)}
				href={link}
				onClick={onClick}
			>
				<div
					className={cn(
						"-z-10 absolute inset-0 w-2 rounded border border-slate-900/50 bg-slate-500/50 transition-all group-hover:w-48 group-hover:bg-amber-300 group-focus-visible:w-48 group-focus-visible:bg-amber-300 motion-reduce:transition-none",
						active && "h-8 w-48",
						active && "border-slate-900/50 bg-slate-700/50",
					)}
				/>
				<div className="nav-text ml-6 font-bold text-slate-300 text-xs uppercase tracking-widest transition-all group-hover:ml-8 group-hover:text-slate-800 group-focus-visible:ml-8 group-focus-visible:text-slate-800 motion-reduce:transition-none">
					{title}
				</div>
			</Link>
		</li>
	);
}
