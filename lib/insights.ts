import { data } from "@/data/projects";
import type { Insights } from "@/lib/types";

interface PostHogInsight {
	short_id: string;
	result: { data: number[] }[];
}

const {
	POSTHOG_HOST: host,
	POSTHOG_PROJECT_ID: projectId,
	POSTHOG_PROJECT_API_KEY: apiKey,
} = process.env;

export async function getInsights(): Promise<Insights> {
	try {
		const ids = data.map((project) => project.posthogId).filter(Boolean);
		const url = new URL(`/api/projects/${projectId}/insights`, host);

		const res = await fetch(url.toString(), {
			headers: { Authorization: `Bearer ${apiKey}` },
		});
		if (!res.ok) {
			return {};
		}

		const { results }: { results: PostHogInsight[] } = await res.json();
		return Object.fromEntries(
			results
				.filter(({ short_id }) => ids.includes(short_id))
				.map(({ short_id, result }) => [short_id, result[0]?.data ?? []]),
		);
	} catch (error) {
		console.error("Error fetching insights:", error);
		return {};
	}
}
