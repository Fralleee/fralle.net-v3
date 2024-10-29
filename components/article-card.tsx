import Image from "next/image";
import Card from "./card";
import { GoArrowRight, GoNote } from "react-icons/go";

import TechList from "./tech-list";
import ExternalLink from "./external-link";
import { Article } from "@/data/types";

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <Card>
      <Image
        placeholder="blur"
        src={article.image}
        alt={article.title}
        width={96}
        height={96}
        className="mb-4 rounded transition group-hover:opacity-100 group-hover:contrast-100 sm:order-1 sm:col-span-2 sm:translate-y-1 lg:mb-0 lg:opacity-50 lg:contrast-75"
      />
      <div className="z-10 order-2 overflow-hidden sm:col-span-6">
        <h3 className="mb-2 font-medium leading-snug">
          <ExternalLink
            className="groudiv/link inline-flex max-w-[100%] items-baseline overflow-hidden text-base font-medium leading-tight text-slate-200 hover:text-amber-300 focus-visible:text-amber-300"
            href={article.url}
            aria-label={article.title}
          >
            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
            <span className="truncate">{article.title}</span>
            <span className="inline-block">
              <GoArrowRight className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover/link:translate-x-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
            </span>
          </ExternalLink>
          <div className="mt-px flex items-center text-sm text-slate-500">
            <GoNote className="mr-1 h-4 w-4" />
            {article.meta}
          </div>
        </h3>
        <p className="mt-2 text-sm leading-normal">{article.subtitle}</p>
        <TechList techs={article.tags} />
      </div>
    </Card>
  );
}
