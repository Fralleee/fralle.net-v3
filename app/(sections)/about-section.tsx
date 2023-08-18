import TextLink from "@/components/text-link";
import Section from "@/components/section";

export default function AboutSection() {
  return (
    <Section id="about" label="About me" title="About">
      <div>
        <p className="mb-4">
          I like playing games and getting shit done. I have already pimped out many pages in my years. I've worked at different places, one was a{" "}
          <TextLink href="#">fintech company</TextLink>, an <TextLink href="#">online gambling platform</TextLink>, and one of the{" "}
          <TextLink href="#">most visited websites in the world</TextLink>.
        </p>
        <p className="mb-4">Current focus...</p>
      </div>
    </Section>
  );
}
