import experiencesData from "@/data/experiencesData.json";
import Section from "@/components/section";
import Experience from "@/components/experience-card";

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
            <Experience experience={experience} />
          </li>
        ))}
      </ol>
    </Section>
  );
}
