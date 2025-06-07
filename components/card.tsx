export default function Card({ children }: { children: React.ReactNode }) {
	return (
		<div className="group lg:hover:!opacity-100 relative grid pb-4 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50">
			{children}
		</div>
	);
}
