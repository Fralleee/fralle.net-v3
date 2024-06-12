import TextLink from "@/components/text-link";
import Section from "@/components/section";

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
                    Over the years, I have had the opportunity to work with a
                    diverse range of organizations, including a{" "}
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
                    , a{" "}
                    <TextLink href="https://www.nira.com/">
                        highly innovative startup
                    </TextLink>
                    , and{" "}
                    <TextLink href="https://stackoverflow.com/">
                        one of the world’s most visited websites
                    </TextLink>
                    .
                </p>
                <p className="mb-4">
                    Currently seeking new opportunities, I am passionate about
                    software development and am eager to bring my expertise to a
                    new team.
                </p>
                <p className="mb-4">
                    Please feel free to contact me on{" "}
                    <TextLink href="https://www.linkedin.com/in/fralle/">
                        LinkedIn
                    </TextLink>{" "}
                    or via{" "}
                    <TextLink href="mailto://roland.chelwing@gmail.com">
                        email
                    </TextLink>{" "}
                    to discuss potential collaborations or job openings.
                </p>
            </div>
        </Section>
    );
}
