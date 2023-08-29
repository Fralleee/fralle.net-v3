import Link from "next/link";
import React from "react";

export default function TextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      className="font-medium text-slate-200 hover:text-amber-400 focus-visible:text-amber-400"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </Link>
  );
}
