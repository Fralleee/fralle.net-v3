"use client";

import { useEffect, useRef, useState } from "react";
import NavLink from "./nav-link";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { GoDownload } from "react-icons/go";

export default function Header() {
  const [activeSection, setActiveSection] = useState("about");
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const autoScrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
      } else if (scrollY + windowHeight / 2 >= projectsSection.offsetTop) {
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
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Software Engineer at Nira</h2>
        <p className="mt-4 max-w-xs leading-normal">I build accessible, inclusive products and digital experiences for the web.</p>
        <Link
          className="mt-4 flex align-baseline font-medium text-slate-200 group hover:text-teal-300 focus-visible:text-teal-300"
          href="https://drive.google.com/uc?id=1hLQ18Bx3CMGYoTt85Ou1hSmCXv-AtAGM&export=download">
          Download resume <GoDownload className="ml-2 translate-y-1 group-hover:translate-y-2 transition-all" />
        </Link>

        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            <NavLink link="#about" title="About" active={activeSection === "about"} onClick={handleNavLinkClick("about")} />
            <NavLink link="#experience" title="Experience" active={activeSection === "experience"} onClick={handleNavLinkClick("experience")} />
            <NavLink link="#projects" title="Projects" active={activeSection === "projects"} onClick={handleNavLinkClick("projects")} />
          </ul>
        </nav>
      </div>
      <ul className="flex gap-3 items-center mt-4 lg:mt-0" aria-label="Social media">
        <li>
          <Link className="hover:text-slate-200 hover:scale-110 transition-all" href={"https://github.com/Fralleee/"} target="_blank" rel="noreferrer">
            <span className="sr-only">GitHub</span>
            <FaGithub className="w-7 h-7" />
          </Link>
        </li>
        <li>
          <Link className="hover:text-slate-200 hover:scale-110 transition-all" href={"https://www.linkedin.com/in/fralle/"} target="_blank" rel="noreferrer">
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin className="w-7 h-7" />
          </Link>
        </li>
      </ul>
    </header>
  );
}
