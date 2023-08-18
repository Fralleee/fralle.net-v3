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
      <a className={`group flex items-center py-3 ${activeClass}`} href={link} onClick={onClick}>
        <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none" />
        <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">{title}</span>
      </a>
    </li>
  );
}
