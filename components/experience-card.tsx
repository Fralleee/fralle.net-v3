import Card from "./card";
import { GoArrowUpRight } from "react-icons/go";
import TechList from "./tech-list";

export default function Experience({ experience }: { experience: Experience }) {
  return (
    <Card>
      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-stone-400 dark:text-slate-500 sm:col-span-2" aria-label="2018 to Present">
        {experience.duration}
      </header>
      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-snug mb-2">
          <a
            className="inline-flex items-baseline font-medium leading-tight group/link text-base
            text-stone-800 hover:text-pink-600 focus-visible:text-pink-600 
            dark:text-slate-200 dark:hover:text-teal-300 dark:focus-visible:text-teal-300"
            href={experience.company.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`${experience.title} at ${experience.company.name}`}>
            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
            <span>{experience.title}</span>
            <span className="mx-2">·</span>
            <span className="inline-block">
              {experience.company.name}
              <GoArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
            </span>
          </a>
          <div className="text-stone-500 dark:text-slate-500 text-sm">{experience.company.location}</div>
        </h3>
        <p className="mt-2 text-sm leading-normal">{experience.details}</p>
        <TechList techs={experience.tech} />
      </div>
    </Card>
  );
}
