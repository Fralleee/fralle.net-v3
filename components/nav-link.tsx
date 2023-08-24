import { cn } from "@/lib/utils";

interface NavLinkProps {
  link: string;
  title: string;
  active: boolean;
  onClick: React.MouseEventHandler<HTMLAnchorElement>;
}

export default function NavLink({ link, title, active, onClick }: NavLinkProps) {
  const activeClass = active ? "active" : "";
  return (
    <li className="mt-2">
      <a className={cn("group flex items-center h-8", activeClass)} href={link} onClick={onClick}>
        <span
          className={cn(
            `nav-indicator mr-4 h-8 w-2 rounded transition-all motion-reduce:transition-none

        group-hover:w-48 group-focus-visible:w-48 
        group-hover:h-8 group-focus-visible:h-8 

        bg-slate-300 group-hover:bg-blue-500 group-focus-visible:bg-blue-500
        dark:bg-slate-500 dark:group-hover:bg-amber-300 dark:group-focus-visible:bg-amber-300`,
            active && "w-48 h-8",
            active && "bg-blue-500",
            active && "dark:bg-slate-300"
          )}
        />
        <span
          className={cn(
            `nav-text text-xs font-bold uppercase tracking-widest transition-all motion-reduce:transition-none

        group-hover:-translate-x-48  group-focus-visible:-translate-x-48
        group-hover:ml-2  group-focus-visible:ml-2

        text-slate-400 group-hover:text-blue-500 group-focus-visible:text-blue-500
        dark:text-slate-300 dark:group-hover:text-slate-700 dark:group-focus-visible:text-slate-700`,
            active && "-translate-x-48",
            active && "ml-2",
            active && "text-blue-500",
            active && "dark:text-slate-700"
          )}>
          {title}
        </span>
      </a>
    </li>
  );
}
