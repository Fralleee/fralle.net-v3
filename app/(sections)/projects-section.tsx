import projectsData from "@/data/projectsData.json";
import Section from "@/components/section";
import Project from "@/components/project";

export default function ProjectsSection() {
  const projects: Projects = projectsData;
  return (
    <Section id="projects" label="Projects" title="Projects">
      <ul className="group/list">
        {projects.data.map(project => (
          <li key={project.title} className="mb-12">
            <Project project={project} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
