import Header from "@/components/header";
import About from "./_sections/about-section";
import Experience from "./_sections/experience-section";
import Projects from "./_sections/projects-section";
import Articles from "./_sections/articles-section";
import { getInsights } from "./(api)/insights";

export const revalidate = 86400;

export default async function Home() {
	const insights = await getInsights();
	return (
		<div className="lg:flex lg:justify-between lg:gap-4">
			<Header />
			<main id="content" className="pt-24 lg:w-1/2 lg:py-24">
				<About />
				<Experience />
				<Projects insights={insights} />
				<Articles />
			</main>
		</div>
	);
}
