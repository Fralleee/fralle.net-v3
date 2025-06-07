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
	data,
	width = 100,
	height = 20,
	strokeWidth = 2,
	className,
	title,
}: SparklineProps) {
	if (data.length < 2) return null;

	const min = Math.min(...data);
	const max = Math.max(...data);
	const range = max - min || 1;
	const id = useId();

	const points = data
		.map((d, i) => {
			const x = (i / (data.length - 1)) * width;
			const y = height - ((d - min) / range) * height;
			return `${x},${y}`;
		})
		.join(" ");

	return (
		<svg
			width={width}
			height={height}
			className={className}
			role="img"
			aria-label={title}
		>
			<defs>
				<linearGradient
					id={id}
					x1="0%"
					y1="0%"
					x2="0%"
					y2="100%"
					gradientUnits="objectBoundingBox"
				>
					<stop
						className="from-sky-400 to-sky-900"
						offset="0%"
						stopColor="var(--tw-gradient-from)"
					/>
					<stop
						className="from-sky-400 to-sky-900"
						offset="100%"
						stopColor="var(--tw-gradient-to)"
					/>
				</linearGradient>
			</defs>

			<polyline
				points={points}
				fill="none"
				stroke={`url(#${id})`}
				strokeWidth={strokeWidth}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
