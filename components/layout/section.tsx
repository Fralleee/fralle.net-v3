interface Props {
	id: string;
	label: string;
	title: string;
	children: React.ReactNode;
}

export default function Section({ id, label, title, children }: Props) {
	return (
		<section
			aria-label={label}
			className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
			id={id}
		>
			<div className="-mx-6 md:-mx-12 sticky top-0 z-20 g:mx-auto mb-4 w-screen bg-slate-800/75 px-6 py-5 backdrop-blur-sm md:px-12 lg:sr-only lg:relative lg:top-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
				<h2 className="font-bold text-slate-200 text-sm uppercase tracking-widest lg:sr-only">
					{title}
				</h2>
			</div>
			<div>{children}</div>
		</section>
	);
}
