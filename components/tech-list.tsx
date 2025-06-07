export default function TechList({ techs }: { techs: string[] }) {
	return (
		<ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
			{techs.map((tech) => (
				<li key={tech} className="mt-2 mr-1.5">
					<div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 font-medium text-sky-300 text-xs leading-5">
						{tech}
					</div>
				</li>
			))}
		</ul>
	);
}
