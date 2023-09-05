import { cn } from "@/lib/utils";

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
        <li className="mt-4">
            <a
                className={cn(
                    "group relative flex h-8 w-48 items-center",
                    activeClass,
                )}
                href={link}
                onClick={onClick}
            >
                <div
                    className={cn(
                        "absolute inset-0 -z-10 w-2 rounded bg-slate-500/50 transition-all group-hover:w-48  group-hover:bg-amber-300 group-focus-visible:w-48 group-focus-visible:bg-amber-300 motion-reduce:transition-none",
                        active && "h-8 w-48",
                        active && "bg-slate-700/50",
                    )}
                />
                <div className="nav-text ml-6 text-xs font-bold uppercase tracking-widest text-slate-300 transition-all group-hover:ml-8 group-hover:text-slate-800 group-focus-visible:ml-8 group-focus-visible:text-slate-800 motion-reduce:transition-none">
                    {title}
                </div>
            </a>
        </li>
    );
}
