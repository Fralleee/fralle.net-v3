export default function TechList({ techs }: { techs: string[] }) {
    return (
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {techs.map((tech) => (
                <li key={tech} className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5  text-sky-300">
                        {tech}
                    </div>
                </li>
            ))}
        </ul>
    );
}
