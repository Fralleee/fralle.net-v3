"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaDev, FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import NavLink, { IconLink } from "../link";
import { Tooltip, TooltipContent, TooltipTrigger } from "../tooltip";

const extraScrollPaddingArticles = 250;
const extraScrollPaddingProjects = 100;

export default function Header() {
	const [activeSection, setActiveSection] = useState("");
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
		const aboutSection = document.getElementById("about");
		const projectsSection = document.getElementById("projects");
		const articlesSection = document.getElementById("articles");

		if (!aboutSection || !projectsSection || !articlesSection) {
			return;
		}

		const handleScroll = () => {
			if (isAutoScrolling) {
				return;
			}
			const scrollY = window.scrollY;
			const windowHeight = window.innerHeight;

			if (scrollY < aboutSection.offsetHeight / 2) {
				setActiveSection("about");
			} else if (
				scrollY + extraScrollPaddingArticles + windowHeight / 2 >=
				articlesSection.offsetTop
			) {
				setActiveSection("articles");
			} else if (
				scrollY + extraScrollPaddingProjects + windowHeight / 2 >=
				projectsSection.offsetTop
			) {
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
				<h1 className="font-bold text-4xl text-slate-200 tracking-tight sm:text-5xl">
					<Link href="/">Roland Chelwing</Link>
				</h1>
				<h2 className="mt-3 font-medium text-lg text-slate-200 tracking-tight sm:text-xl">
					Fullstack Software Engineer
				</h2>
				<p className="mt-4 max-w-xs leading-normal">
					A curious and dedicated programmer with diverse experience spanning
					multiple industries.
				</p>

				<nav aria-label="In-page jump links" className="nav hidden lg:block">
					<ul className="mt-8 w-max">
						<NavLink
							active={activeSection === "about"}
							href="#about"
							onClick={handleNavLinkClick("about")}
							title="About"
						/>
						<NavLink
							active={activeSection === "experience"}
							href="#experience"
							onClick={handleNavLinkClick("experience")}
							title="Experience"
						/>
						<NavLink
							active={activeSection === "projects"}
							href="#projects"
							onClick={handleNavLinkClick("projects")}
							title="Projects"
						/>
						<NavLink
							active={activeSection === "articles"}
							href="#articles"
							onClick={handleNavLinkClick("articles")}
							title="Articles"
						/>
					</ul>
				</nav>
			</div>
			<ul
				aria-label="Social media"
				className="group/list direction-aware-x mt-16 flex items-center"
			>
				<li className=" after:hidden md:after:block">
					<Tooltip>
						<TooltipTrigger className="relative">
							<IconLink
								href="https://github.com/Fralleee/"
								icon={FaGithub}
								title="GitHub"
							/>
						</TooltipTrigger>
						<TooltipContent className="font-medium" side="top" sideOffset={5}>
							GitHub
						</TooltipContent>
					</Tooltip>
				</li>
				<li className="after:hidden md:after:block">
					<Tooltip>
						<TooltipTrigger className="relative">
							<IconLink
								href="https://www.linkedin.com/in/fralle/"
								icon={FaLinkedin}
								title="LinkedIn"
							/>
						</TooltipTrigger>
						<TooltipContent className="font-medium" side="top" sideOffset={5}>
							LinkedIn
						</TooltipContent>
					</Tooltip>
				</li>
				<li className="after:hidden md:after:block">
					<Tooltip>
						<TooltipTrigger className="relative">
							<IconLink
								href="https://medium.com/@fralle/"
								icon={FaMedium}
								title="Medium"
							/>
						</TooltipTrigger>
						<TooltipContent className="font-medium" side="top" sideOffset={5}>
							Medium
						</TooltipContent>
					</Tooltip>
				</li>
				<li className="after:hidden md:after:block">
					<Tooltip>
						<TooltipTrigger className="relative">
							<IconLink
								href="https://dev.to/fralleee"
								icon={FaDev}
								title="Dev.to"
							/>
						</TooltipTrigger>
						<TooltipContent className="font-medium" side="top" sideOffset={5}>
							Dev.to
						</TooltipContent>
					</Tooltip>
				</li>
			</ul>
		</header>
	);
}
