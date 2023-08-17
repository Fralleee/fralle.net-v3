import { FaExternalLinkAlt } from "react-icons/fa";
export default function Experience({ experience }: { experience: Experience }) {
  return (
    <li className="mb-12">
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2018 to Present">
          {experience.duration}
        </header>
        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug text-slate-200 mb-2">
            <a
              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
              href={experience.company.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`${experience.title} at ${experience.company.name}`}>
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              <span>
                {experience.title} ·{" "}
                <span className="inline-block">
                  {experience.company.name}
                  <FaExternalLinkAlt className="inline-block w-3 relative -top-0.5 ml-2" />
                </span>
              </span>
            </a>
            <div className="text-slate-500">{experience.company.location}</div>
          </h3>
          <p className="mt-2 text-sm leading-normal">{experience.details}</p>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {experience.tech.map(tech => (
              <li key={tech} className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">{tech}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}
