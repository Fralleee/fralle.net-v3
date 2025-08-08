/** @type {import('next').NextConfig} */
const nextConfig = {
	compress: true,
	async headers() {
		return [
			{
				headers: [
					{
						key: "X-DNS-Prefetch-Control",
						value: "on",
					},
					{
						key: "X-Frame-Options",
						value: "SAMEORIGIN",
					},
					{
						key: "X-Content-Type-Options",
						value: "nosniff",
					},
					{
						key: "Referrer-Policy",
						value: "origin-when-cross-origin",
					},
				],
				source: "/:path*",
			},
		];
	},
	images: {
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		formats: ["image/avif", "image/webp"],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
	},
	poweredByHeader: false,
	reactStrictMode: true,
};

module.exports = nextConfig;
