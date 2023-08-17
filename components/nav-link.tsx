"use client";

import { usePathname, useSearchParams, useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function NavLink({ link, title }: { link: string; title: string }) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setIsActive(window.location.hash === link);
    };

    // Initial check
    handleHashChange();

    // Attach the event listener
    window.addEventListener("hashchange", handleHashChange);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [link]);

  const activeClass = isActive ? "active" : "";
  return (
    <li>
      <a className={`group flex items-center py-3 ${activeClass}`} href={link}>
        <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none" />
        <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">{title}</span>
      </a>
    </li>
  );
}
