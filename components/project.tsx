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
        className="rounded transition sm:order-1 sm:col-span-2 sm:translate-y-1 mb-4 lg:mb-0 contrast-75 group-hover:contrast-100"
      />
      <div className="z-10 sm:col-span-6 order-2">
        <h3 className="font-medium leading-snug mb-2">
          <a
            className="inline-flex items-baseline font-medium leading-tight group/link text-base 
            text-slate-800 hover:text-blue-500 focus-visible:text-blue-500 
            dark:text-slate-200 dark:hover:text-amber-300 dark:focus-visible:text-amber-300"
            href={project.url}
            target="_blank"
            rel="noreferrer"
            aria-label={project.title}>
            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
            <span>{project.title}</span>
            <span className="inline-block">
              <GoArrowRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:translate-x-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 -translate-y-px" />
            </span>
          </a>
        </h3>
        <p className="mt-2 text-sm leading-normal">{project.details}</p>
        <ul className="mt-2 flex flex-wrap" aria-label="Related links">
          {project.links.map(link => (
            <li key={link.title}>
              <a
                className="relative mt-2 inline-flex items-center text-sm font-medium pr-4 
                text-slate-700 hover:text-blue-500 focus-visible:text-blue-500
                dark:text-slate-300 dark:hover:text-amber-300 dark:focus-visible:text-amber-300
                "
                href={link.href}
                title={link.title}
                target="_blank"
                rel="noreferrer">
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
