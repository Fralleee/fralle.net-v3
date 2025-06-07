import experiencesData from "@/data/experiencesData";
import Section from "@/components/section";
import ExperienceCard from "@/components/experience-card";
import type { Experiences } from "@/data/types";

export default function ExperienceSection() {
	const experiences: Experiences = experiencesData;
	return (
		<Section id="experience" label="Experience" title="Experience">
			<ol className="group/list direction-aware">
				{experiences.data.map((experience) => (
					<li
						key={experience.company.name}
						className="relative mb-8 after:hidden lg:after:block"
					>
						<ExperienceCard experience={experience} />
					</li>
				))}
			</ol>
		</Section>
	);
}
