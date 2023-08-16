
import Link from 'next/link'
import React from 'react'

export default function TextLink({ href, children }: { href: string, children: React.ReactNode }) {
    return (
        <Link className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" href={href} target="_blank" rel="noreferrer">
            {children}
        </Link>
    )
}
