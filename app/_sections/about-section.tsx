import TextLink from "@/components/text-link";
import Section from "@/components/section";
import ResumeLink from "@/components/resume-link";

export default function AboutSection() {
    return (
        <Section id="about" label="About me" title="About">
            <div>
                <p className="mb-4">
                    I started programming at the age of seven, creating
                    text-based RPGs with my older brother on an ancient PASCAL
                    computer. Computers and technology have always fascinated
                    me, but it wasn't until many years later that I turned my
                    passion into a profession.
                </p>
                <p className="mb-4">
                    Since then, I've had the privilege of working at a{" "}
                    <TextLink href="https://www.aptic.net/">
                        fintech company
                    </TextLink>
                    , an{" "}
                    <TextLink href="https://www.gamesysgroup.com/">
                        online casino platform
                    </TextLink>
                    , a{" "}
                    <TextLink href="https://www.yubico.com/">
                        security company
                    </TextLink>
                    , and one of the{" "}
                    <TextLink href="https://stackoverflow.com/">
                        world's most visited websites
                    </TextLink>
                    .
                </p>
                <p className="mb-4">
                    Now, I work at{" "}
                    <TextLink href="https://nira.com/">Nira</TextLink>,
                    enhancing cloud document security systems for Google Drive
                    and OneDrive.
                </p>
                <p className="mb-4">
                    Outside of work, I devote most of my time to passion
                    projects, either developing add-ons for programs I
                    frequently use or creating games.
                </p>
            </div>
            <ResumeLink className="mt-8" />
        </Section>
    );
}
