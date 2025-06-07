import projectsData from "@/data/projectsData";
import Section from "@/components/section";
import ProjectCard from "@/components/project-card";
import type { Insights, Projects } from "@/data/types";

interface Props {
	insights: Insights;
}

export default function ProjectsSection({ insights }: Props) {
	const projects: Projects = projectsData;
	return (
		<Section id="projects" label="Projects" title="Projects">
			<ul className="group/list direction-aware">
				{projects.data.map((project) => (
					<li
						key={project.title}
						className="relative mb-8 after:hidden lg:after:block"
					>
						<ProjectCard
							project={project}
							insight={project.posthogId ? insights[project.posthogId] : []}
						/>
					</li>
				))}
			</ul>
		</Section>
	);
}
