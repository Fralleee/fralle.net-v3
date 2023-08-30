import projectsData from "@/data/projectsData.json";
import Section from "@/components/section";
import Project from "@/components/project";

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
            <Project project={project} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
