import Card from "./card";
import { GoArrowRight, GoLocation } from "react-icons/go";
import TechList from "./tech-list";

export default function Experience({ experience }: { experience: Experience }) {
  return (
    <Card>
      <header
        className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500 sm:col-span-2"
        aria-label={experience.duration}
      >
        {experience.duration}
      </header>
      <div className="z-10 sm:col-span-6">
        <h3 className="mb-2 font-medium leading-snug">
          <a
            className="group/link inline-flex items-baseline text-base font-medium leading-tight
            text-slate-800 hover:text-blue-500 focus-visible:text-blue-500 
            dark:text-slate-200 dark:hover:text-amber-300 dark:focus-visible:text-amber-300"
            href={experience.company.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`${experience.title} at ${experience.company.name}`}
          >
            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
            <span>{experience.title}</span>
            <span className="mx-2">·</span>
            <span className="inline-block">
              {experience.company.name}
              <GoArrowRight className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover/link:translate-x-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
            </span>
          </a>
          <div className="mt-px flex items-center text-sm text-slate-500 dark:text-slate-500">
            <GoLocation className="mr-1 h-4 w-4" />
            {experience.company.location}
          </div>
        </h3>
        <p className="mt-2 text-sm leading-normal">{experience.details}</p>
        <TechList techs={experience.tech} />
      </div>
    </Card>
  );
}
