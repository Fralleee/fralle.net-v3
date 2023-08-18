import experiencesData from "@/data/experiences.json";
import Section from "@/components/section";
import Experience from "@/components/experience";

export default function ExperienceSection() {
  const experiences: Experiences = experiencesData;
  return (
    <Section id="experience" label="Experience" title="Experience">
      <ol className="group/list">
        {experiences.data.map(experience => (
          <li key={experience.company.name} className="mb-12">
            <Experience experience={experience} />
          </li>
        ))}
      </ol>
    </Section>
  );
}
