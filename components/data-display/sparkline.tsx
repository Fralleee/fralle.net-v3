import { useId } from "react";

interface SparklineProps {
	data: number[];
	width?: number;
	height?: number;
	strokeWidth?: number;
	className?: string;
	title?: string;
}

export function Sparkline({
	data = [],
	width = 155,
	height = 30,
	strokeWidth = 2,
	className,
	title,
}: SparklineProps) {
	const id = useId();

	if (data.length < 2) return null;

	const min = Math.min(...data);
	const max = Math.max(...data);
	const range = max - min || 1;

	const points = data
		.map((d, i) => {
			const x = (i / (data.length - 1)) * width;
			const y = height - ((d - min) / range) * height;
			return `${x},${y}`;
		})
		.join(" ");

	return (
		<svg
			aria-label={title}
			className={className}
			height={height}
			role="img"
			width={width}
		>
			<defs>
				<linearGradient
					gradientUnits="objectBoundingBox"
					id={id}
					x1="0%"
					x2="0%"
					y1="0%"
					y2="100%"
				>
					<stop
						className="from-sky-400 to-sky-950"
						offset="0%"
						stopColor="var(--tw-gradient-from)"
					/>
					<stop
						className="from-sky-400 to-sky-950"
						offset="100%"
						stopColor="var(--tw-gradient-to)"
					/>
				</linearGradient>
			</defs>

			<polyline
				fill="none"
				points={points}
				stroke={`url(#${id})`}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={strokeWidth}
			/>
		</svg>
	);
}
