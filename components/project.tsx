import Image from "next/image";
import Card from "./card";
import { GoArrowUpRight, GoLink } from "react-icons/go";

export default function Project({ project }: { project: Project }) {
  return (
    <Card>
      <Image
        src={project.image}
        alt={project.title}
        width={96}
        height={96}
        className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/20 sm:order-1 sm:col-span-2 sm:translate-y-1"
      />
      <div className="z-10 sm:col-span-6 order-2">
        <h3 className="font-medium leading-snug text-slate-200 mb-2">
          <a
            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
            href={project.url}
            target="_blank"
            rel="noreferrer"
            aria-label={project.title}>
            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
            <span>{project.title}</span>
            <span className="inline-block">
              <GoArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
            </span>
          </a>
        </h3>
        <p className="mt-2 text-sm leading-normal">{project.details}</p>
        <ul className="mt-2 flex flex-wrap" aria-label="Related links">
          {project.links.map(link => (
            <li key={link.title}>
              <a
                className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300 pr-4"
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
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
          {project.tech.map(tech => (
            <li key={tech} className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{tech}</div>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
