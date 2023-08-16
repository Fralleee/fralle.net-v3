import Image from 'next/image'
import NavLink from './nav-link'

export default function Header() {
    return (
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                <a href="/">Roland Chelwing</a>
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Software Engineer at Nira</h2>
            <p className="mt-4 max-w-xs leading-normal">I build good shit.</p>
            
            <nav className="nav hidden lg:block" aria-label="In-page jump links">
                <ul className="mt-16 w-max">
                    <NavLink link="#about" title="About" />   
                    <NavLink link="#experience" title="Experience" />   
                    <NavLink link="#projects" title="Projects" />   
                </ul>
            </nav>
        </header>
    )
}
