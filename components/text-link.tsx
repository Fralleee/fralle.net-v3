import Link from "next/link";
import React from "react";

export default function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      className="font-medium 
        text-stone-800 hover:text-pink-600 focus-visible:text-pink-600
        dark:text-slate-200 dark:hover:text-teal-300 dark:focus-visible:text-teal-300        
        "
      href={href}
      target="_blank"
      rel="noreferrer">
      {children}
    </Link>
  );
}
