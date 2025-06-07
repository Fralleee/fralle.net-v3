export default function TagList({ tags }: { tags: string[] }) {
	return (
		<ul aria-label="Technologies used" className="mt-2 flex flex-wrap">
			{tags.map((tag) => (
				<li className="mt-2 mr-1.5" key={tag}>
					<div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 font-medium text-sky-300 text-xs leading-5">
						{tag}
					</div>
				</li>
			))}
		</ul>
	);
}
