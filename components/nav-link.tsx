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
          
        bg-slate-300 group-hover:bg-blue-500 group-focus-visible:bg-blue-500
        dark:bg-slate-500 dark:group-hover:bg-amber-300 dark:group-focus-visible:bg-amber-300
         "
        />
        <span
          className="nav-text text-xs font-bold uppercase tracking-widest 
        text-slate-400 group-hover:text-blue-500 group-focus-visible:text-blue-500
        dark:text-slate-500 dark:group-hover:text-amber-300 dark:group-focus-visible:text-amber-300
        ">
          {title}
        </span>
      </a>
    </li>
  );
}
