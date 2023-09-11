"use client";

import { useEffect, useRef, useState } from "react";
import NavLink from "./nav-link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import ResumeLink from "./resume-link";
import IconLink from "./icon-link";

const extraScrollPaddingProjects = 100;

export default function Header() {
    const [activeSection, setActiveSection] = useState("about");
    const [isAutoScrolling, setIsAutoScrolling] = useState(false);
    const autoScrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
        null,
    );

    const handleNavLinkClick = (sectionId: string) => (_: React.MouseEvent) => {
        setIsAutoScrolling(true);
        const section = document.getElementById(sectionId);
        if (section) {
            setActiveSection(sectionId);

            section.scrollIntoView({ behavior: "smooth" });
            if (autoScrollTimeoutRef.current) {
                clearTimeout(autoScrollTimeoutRef.current);
            }
            autoScrollTimeoutRef.current = setTimeout(() => {
                setIsAutoScrolling(false);
            }, 500);
        }
    };

    useEffect(() => {
        const aboutSection = document.getElementById("about")!;
        const projectsSection = document.getElementById("projects")!;

        const handleScroll = () => {
            if (isAutoScrolling) {
                return;
            }
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;

            if (scrollY < aboutSection.offsetHeight / 2) {
                setActiveSection("about");
            } else if (
                scrollY + extraScrollPaddingProjects + windowHeight / 2 >=
                projectsSection.offsetTop
            ) {
                setActiveSection("projects");
            } else {
                setActiveSection("experience");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isAutoScrolling]);

    return (
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                    <a href="/">Roland Chelwing</a>
                </h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                    Senior Software Engineer at Nira
                </h2>
                <p className="mt-4 max-w-xs leading-normal">
                    A curious and dedicated programmer with diverse experience
                    spanning multiple industries.
                </p>
                <ResumeLink className="mt-4" />

                <nav
                    className="nav hidden lg:block"
                    aria-label="In-page jump links"
                >
                    <ul className="mt-8 w-max">
                        <NavLink
                            link="#about"
                            title="About"
                            active={activeSection === "about"}
                            onClick={handleNavLinkClick("about")}
                        />
                        <NavLink
                            link="#experience"
                            title="Experience"
                            active={activeSection === "experience"}
                            onClick={handleNavLinkClick("experience")}
                        />
                        <NavLink
                            link="#projects"
                            title="Projects"
                            active={activeSection === "projects"}
                            onClick={handleNavLinkClick("projects")}
                        />
                    </ul>
                </nav>
            </div>
            <ul
                className="mt-8 flex items-center gap-6"
                aria-label="Social media"
            >
                <li>
                    <IconLink
                        href="https://github.com/Fralleee/"
                        title="GitHub"
                        icon={FaGithub}
                    />
                </li>
                <li>
                    <IconLink
                        href="https://www.linkedin.com/in/fralle/"
                        title="LinkedIn"
                        icon={FaLinkedin}
                    />
                </li>
            </ul>
        </header>
    );
}
