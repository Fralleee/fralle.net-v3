import articlesData from "@/data/articlesData.json";
import Section from "@/components/section";
import Article from "@/components/article-card";

export default function ProjectsSection() {
    const articles: Articles = articlesData;
    return (
        <Section id="articles" label="Articles" title="Articles">
            <ul className="group/list direction-aware pb-16">
                {articles.data.map((article) => (
                    <li
                        key={article.title}
                        className="relative mb-8 after:hidden lg:after:block"
                    >
                        <Article article={article} />
                    </li>
                ))}
            </ul>
        </Section>
    );
}
