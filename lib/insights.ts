import { data } from "@/data/projects";
import type { Insights } from "@/lib/types";

interface PostHogInsightListItem {
	id: number;
	short_id: string;
}
interface PostHogInsightDetail {
	result?: { data: number[] }[];
}

const {
	POSTHOG_HOST: host,
	POSTHOG_PROJECT_ID: projectId,
	POSTHOG_PROJECT_API_KEY: apiKey,
} = process.env;
export async function getInsights(): Promise<Insights> {
	const desiredShortIds = data.map((p) => p.posthogId).filter(Boolean);
	const listUrl = new URL(
		`/api/projects/${projectId}/insights`,
		host,
	).toString();
	const listRes = await fetch(listUrl, {
		headers: { Authorization: `Bearer ${apiKey}` },
	});
	if (!listRes.ok) {
		console.error("Failed to fetch insight list", await listRes.text());
		return {};
	}
	const { results: allInsights }: { results: PostHogInsightListItem[] } =
		await listRes.json();

	const idByShort = new Map(allInsights.map((i) => [i.short_id, i.id]));
	const detailPromises = desiredShortIds.map(async (shortId) => {
		if (!shortId) return null;

		const insightId = idByShort.get(shortId);
		if (!insightId) return null;

		const detailUrl = new URL(
			`/api/projects/${projectId}/insights/${insightId}/?refresh=force_blocking`,
			host,
		).toString();
		const detailRes = await fetch(detailUrl, {
			headers: { Authorization: `Bearer ${apiKey}` },
		});
		if (!detailRes.ok) {
			console.warn(
				`Failed to fetch detail for ${shortId}`,
				await detailRes.text(),
			);
			return null;
		}
		const { result }: PostHogInsightDetail = await detailRes.json();
		const dataSeries = result?.[0]?.data ?? [];
		return [shortId, dataSeries] as [string, number[]];
	});

	const entries = (await Promise.all(detailPromises)).filter(
		(e): e is [string, number[]] => e !== null,
	);

	return Object.fromEntries(entries);
}
