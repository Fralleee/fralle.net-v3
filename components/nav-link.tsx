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
        className={cn("group relative flex h-8 w-48 items-center", activeClass)}
        href={link}
        onClick={onClick}
      >
        <div
          className={cn(
            `absolute inset-0 -z-10
            w-2 rounded bg-slate-300 transition-all

        group-hover:w-48 group-hover:bg-blue-500 
        group-focus-visible:w-48 group-focus-visible:bg-blue-500 motion-reduce:transition-none
        dark:bg-slate-500 dark:group-hover:bg-amber-300 dark:group-focus-visible:bg-amber-300`,
            active && "h-8 w-48",
            active && "bg-blue-200",
            active && "dark:bg-slate-800",
          )}
        />
        <div
          className="nav-text ml-6 text-xs font-bold uppercase tracking-widest text-slate-700 transition-all

        group-hover:ml-8 group-hover:text-blue-50
        group-focus-visible:ml-8 group-focus-visible:text-blue-50 motion-reduce:transition-none
        dark:text-slate-300 dark:group-hover:text-slate-800 dark:group-focus-visible:text-slate-800"
        >
          {title}
        </div>
      </a>
    </li>
  );
}
