import projectsData from "@/data/projectsData";
import Section from "@/components/section";
import ProjectCard from "@/components/project-card";
import { Projects } from "@/data/types";

export default function ProjectsSection() {
    const projects: Projects = projectsData;
    return (
        <Section id="projects" label="Projects" title="Projects">
            <ul className="group/list direction-aware">
                {projects.data.map((project) => (
                    <li
                        key={project.title}
                        className="relative mb-8 after:hidden lg:after:block"
                    >
                        <ProjectCard project={project} />
                    </li>
                ))}
            </ul>
        </Section>
    );
}
