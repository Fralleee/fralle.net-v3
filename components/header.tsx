"use client";

import { useEffect, useRef, useState } from "react";
import NavLink from "./nav-link";
import { FaLinkedin, FaGithub, FaMedium, FaDev } from "react-icons/fa";
import IconLink from "./icon-link";
import Link from "next/link";

const extraScrollPaddingArticles = 250;
const extraScrollPaddingProjects = 100;

export default function Header() {
  const [activeSection, setActiveSection] = useState("");
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
    const articlesSection = document.getElementById("articles")!;

    const handleScroll = () => {
      if (isAutoScrolling) {
        return;
      }
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollY < aboutSection.offsetHeight / 2) {
        setActiveSection("about");
      } else if (scrollY + extraScrollPaddingArticles + windowHeight / 2 >= articlesSection.offsetTop) {
        setActiveSection("articles");
      } else if (scrollY + extraScrollPaddingProjects + windowHeight / 2 >= projectsSection.offsetTop) {
        setActiveSection("projects");
      } else {
        setActiveSection("experience");
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isAutoScrolling]);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <Link href="/">Roland Chelwing</Link>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Fullstack Software Engineer</h2>
        <p className="mt-4 max-w-xs leading-normal">A curious and dedicated programmer with diverse experience spanning multiple industries.</p>

        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-8 w-max">
            <NavLink link="#about" title="About" active={activeSection === "about"} onClick={handleNavLinkClick("about")} />
            <NavLink link="#experience" title="Experience" active={activeSection === "experience"} onClick={handleNavLinkClick("experience")} />
            <NavLink link="#projects" title="Projects" active={activeSection === "projects"} onClick={handleNavLinkClick("projects")} />
            <NavLink link="#articles" title="Articles" active={activeSection === "articles"} onClick={handleNavLinkClick("articles")} />
          </ul>
        </nav>
      </div>
      <ul className="mt-16 flex items-center gap-6" aria-label="Social media">
        <li>
          <IconLink href="https://github.com/Fralleee/" title="GitHub" icon={FaGithub} />
        </li>
        <li>
          <IconLink href="https://www.linkedin.com/in/fralle/" title="LinkedIn" icon={FaLinkedin} />
        </li>
        <li>
          <IconLink href="https://medium.com/@fralle/" title="Medium" icon={FaMedium} />
        </li>
        <li>
          <IconLink href="https://dev.to/fralleee" title="Medium" icon={FaDev} />
        </li>
      </ul>
    </header>
  );
}
