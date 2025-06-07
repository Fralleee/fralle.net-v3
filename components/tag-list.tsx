export default function TagList({ tags }: { tags: string[] }) {
	return (
		<ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
			{tags.map((tag) => (
				<li key={tag} className="mt-2 mr-1.5">
					<div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 font-medium text-sky-300 text-xs leading-5">
						{tag}
					</div>
				</li>
			))}
		</ul>
	);
}
