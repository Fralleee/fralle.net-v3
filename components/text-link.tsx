import React from "react";
import ExternalLink from "./external-link";

export default function TextLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <ExternalLink
            className=" font-medium text-slate-200 hover:text-amber-400 hover:underline focus-visible:text-amber-400"
            href={href}
        >
            {children}
        </ExternalLink>
    );
}
