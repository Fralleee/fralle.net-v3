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
    <li className="mt-4">
      <a className={cn("group relative flex items-center h-8 w-48", activeClass)} href={link} onClick={onClick}>
        <div
          className={cn(
            `rounded transition-all motion-reduce:transition-none
            absolute inset-0 w-2 -z-10

        group-hover:w-48 group-focus-visible:w-48 

        bg-slate-300 group-hover:bg-blue-500 group-focus-visible:bg-blue-500
        dark:bg-slate-500 dark:group-hover:bg-amber-300 dark:group-focus-visible:bg-amber-300`,
            active && "w-48 h-8",
            active && "bg-blue-200",
            active && "dark:bg-slate-800"
          )}
        />
        <div
          className="nav-text text-xs font-bold uppercase tracking-widest transition-all motion-reduce:transition-none ml-6

        group-hover:ml-8 group-focus-visible:ml-8
        text-slate-700 group-hover:text-blue-50 group-focus-visible:text-blue-50
        dark:text-slate-300 dark:group-hover:text-slate-800 dark:group-focus-visible:text-slate-800">
          {title}
        </div>
      </a>
    </li>
  );
}
