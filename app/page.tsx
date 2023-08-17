import Header from "@/components/header";
import About from "./(sections)/about-section";
import Experience from "./(sections)/experience-section";
import Projects from "./(sections)/projects-section";

export default function Home() {
  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      <Header />
      <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
        <About />
        <Experience />
        <Projects />
      </main>
    </div>
  );
}
