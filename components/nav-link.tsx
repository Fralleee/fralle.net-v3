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
    <li>
      <a className={cn("group flex items-center py-3", activeClass)} href={link} onClick={onClick}>
        <span
          className="nav-indicator mr-4 h-px w-8 transition-all group-hover:w-16  group-focus-visible:w-16 motion-reduce:transition-none
          
        bg-stone-300 group-hover:bg-stone-800 group-focus-visible:bg-stone-800
        dark:bg-slate-600 dark:group-hover:bg-slate-200 dark:group-focus-visible:bg-slate-200
         "
        />
        <span
          className="nav-text text-xs font-bold uppercase tracking-widest 
        text-stone-400 group-hover:text-stone-800 group-focus-visible:text-stone-800
        dark:text-slate-500 dark:group-hover:text-slate-200 dark:group-focus-visible:text-slate-200
        ">
          {title}
        </span>
      </a>
    </li>
  );
}
