export function validateEnv() {
	const required = {
		NEXT_PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST,
		NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
		POSTHOG_HOST: process.env.POSTHOG_HOST,
		POSTHOG_PROJECT_API_KEY: process.env.POSTHOG_PROJECT_API_KEY,
		POSTHOG_PROJECT_ID: process.env.POSTHOG_PROJECT_ID,
	};

	const missing = Object.entries(required)
		.filter(([_, value]) => !value)
		.map(([key]) => key);

	if (missing.length > 0 && process.env.NODE_ENV === "production") {
		throw new Error(
			`Missing required environment variables: ${missing.join(", ")}`,
		);
	}

	if (missing.length > 0 && process.env.NODE_ENV === "development") {
		console.warn(
			`Missing environment variables (optional in development): ${missing.join(", ")}`,
		);
	}

	return {
		posthog: {
			apiKey: required.POSTHOG_PROJECT_API_KEY || "",
			host: required.POSTHOG_HOST || "",
			projectId: required.POSTHOG_PROJECT_ID || "",
			publicHost: required.NEXT_PUBLIC_POSTHOG_HOST || "",
			publicKey: required.NEXT_PUBLIC_POSTHOG_KEY || "",
		},
	};
}
