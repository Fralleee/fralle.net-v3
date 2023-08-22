import Link from "next/link";
import React from "react";

export default function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      className="font-medium 
        text-slate-800 hover:text-blue-500 focus-visible:text-blue-500
        dark:text-slate-200 dark:hover:text-amber-400 dark:focus-visible:text-amber-400
        "
      href={href}
      target="_blank"
      rel="noreferrer">
      {children}
    </Link>
  );
}
