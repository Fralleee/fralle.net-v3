import { Card } from "@/components/data-display/card";
import Header from "@/components/layout/header";
import Section from "@/components/layout/section";
import { TextLink } from "@/components/link";
import { data as articles } from "@/data/articles";
import { data as experiences } from "@/data/experiences";
import { data as projects } from "@/data/projects";
import { getInsights } from "../lib/insights";

export const revalidate = 86400;

export default async function Home() {
	const insights = await getInsights();
	return (
		<div className="lg:flex lg:justify-between lg:gap-4">
			<Header />
			<main className="pt-24 lg:w-1/2 lg:py-24" id="content">
				<Section id="about" label="About me" title="About">
					<div>
						<p className="mb-4">
							I started programming at the age of seven, creating text-based
							RPGs with my older brother on an ancient PASCAL computer.
							Computers and technology have always fascinated me, but it wasn't
							until many years later that I turned my passion into a profession.
						</p>
						<p className="mb-4">
							Over the years, I have had the opportunity to work with a diverse
							range of organizations, including a{" "}
							<TextLink href="https://www.aptic.net/">fintech company</TextLink>
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
							software development and am eager to bring my expertise to a new
							team.
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

				<Section id="experience" label="Experience" title="Experience">
					<ul className="group/list direction-aware">
						{experiences.map((entry) => (
							<li
								className="relative mb-8 after:hidden md:after:block"
								key={entry.title}
							>
								<Card
									details={entry.details}
									image={entry.image}
									imageHeader={entry.imageHeader}
									links={entry.links}
									meta={entry.meta}
									tags={entry.tags}
									title={entry.title}
									url={entry.url}
								/>
							</li>
						))}
					</ul>
				</Section>

				<Section id="projects" label="Projects" title="Projects">
					<ul className="group/list direction-aware">
						{projects.map((entry) => (
							<li
								className="relative mb-8 after:hidden md:after:block"
								key={entry.title}
							>
								<Card
									details={entry.details}
									image={entry.image}
									imageHeader={entry.imageHeader}
									links={entry.links}
									meta={entry.meta}
									sparkline={{
										data: entry.posthogId ? insights[entry.posthogId] : [],
										label: entry.sparkline?.label,
									}}
									tags={entry.tags}
									title={entry.title}
									url={entry.url}
								/>
							</li>
						))}
					</ul>
				</Section>

				<Section id="articles" label="Articles" title="Articles">
					<ul className="group/list direction-aware">
						{articles.map((entry) => (
							<li
								className="relative mb-8 after:hidden md:after:block"
								key={entry.title}
							>
								<Card
									details={entry.details}
									image={entry.image}
									imageHeader={entry.imageHeader}
									links={entry.links}
									meta={entry.meta}
									sparkline={{
										data: entry.posthogId ? insights[entry.posthogId] : [],
										label: entry.sparkline?.label,
									}}
									tags={entry.tags}
									title={entry.title}
									url={entry.url}
								/>
							</li>
						))}
					</ul>
				</Section>
			</main>
		</div>
	);
}
