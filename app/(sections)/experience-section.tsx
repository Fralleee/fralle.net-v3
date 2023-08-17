import experiencesData from "@/data/experiences.json";
import Section from "@/components/section";
import Experience from "@/components/experience";

export default function ExperienceSection() {
  const experiences: Experiences = experiencesData;
  return (
    <Section id="experience" label="Experience" title="Experience">
      <div>
        <ol>
          {experiences.data.map(experience => (
            <Experience key={experience.company.name} experience={experience} />
          ))}
        </ol>
      </div>
    </Section>
  );
}
