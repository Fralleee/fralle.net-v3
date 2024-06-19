import articlesData from "@/data/articlesData";
import Section from "@/components/section";
import ArticleCard from "@/components/article-card";
import { Articles } from "@/data/types";

export default function ProjectsSection() {
    const articles: Articles = articlesData;
    return (
        <Section id="articles" label="Articles" title="Articles">
            <ul className="group/list direction-aware">
                {articles.data.map((article) => (
                    <li
                        key={article.title}
                        className="relative mb-8 after:hidden lg:after:block"
                    >
                        <ArticleCard article={article} />
                    </li>
                ))}
            </ul>
        </Section>
    );
}
