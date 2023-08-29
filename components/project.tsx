import Image from "next/image";
import Card from "./card";
import { GoArrowRight, GoLink } from "react-icons/go";
import TechList from "./tech-list";

export default function Project({ project }: { project: Project }) {
  return (
    <Card>
      <Image
        src={project.image}
        alt={project.title}
        width={96}
        height={96}
        className="mb-4 rounded contrast-75 transition group-hover:contrast-100 sm:order-1 sm:col-span-2 sm:translate-y-1 lg:mb-0"
      />
      <div className="z-10 order-2 sm:col-span-6">
        <h3 className="mb-2 font-medium leading-snug">
          <a
            className="group/link inline-flex items-baseline text-base font-medium leading-tight 
            text-slate-800 hover:text-blue-500 focus-visible:text-blue-500 
            dark:text-slate-200 dark:hover:text-amber-300 dark:focus-visible:text-amber-300"
            href={project.url}
            target="_blank"
            rel="noreferrer"
            aria-label={project.title}
          >
            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
            <span>{project.title}</span>
            <span className="inline-block">
              <GoArrowRight className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover/link:translate-x-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
            </span>
          </a>
        </h3>
        <p className="mt-2 text-sm leading-normal">{project.details}</p>
        <ul className="mt-2 flex flex-wrap" aria-label="Related links">
          {project.links.map((link) => (
            <li key={link.title}>
              <a
                className="relative mt-2 inline-flex items-center pr-4 text-sm font-medium 
                text-slate-700 hover:text-blue-500 focus-visible:text-blue-500
                dark:text-slate-300 dark:hover:text-amber-300 dark:focus-visible:text-amber-300
                "
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                <GoLink className="mr-1 h-3 w-3" />
                <span>{link.title}</span>
              </a>
            </li>
          ))}
        </ul>
        <TechList techs={project.tech} />
      </div>
    </Card>
  );
}
