import { ExtractBody, ExtractData, ExtractError } from "@/src/types";
import { envServer } from "../schema/serverEnvSchema";
import { TMDBFetch } from "@/src/types/tmdb";

export const query = async <T>({
	endpoint,
	headers,
	body,
	cache = "force-cache",
	tags,
	revalidate
}: {
	endpoint: string;
	headers?: HeadersInit;
	body?: ExtractBody<T>;
	cache?: RequestCache;
	tags?: string[];
	revalidate?: number;
}) => {
	try {
		const response = await fetch(endpoint, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				...headers
			},
			body: JSON.stringify(body),
			...(!revalidate && { cache }),
			...(tags || (revalidate && { next: { tags, revalidate } }))
		});

		if (!response.ok) {
			throw {
				cause: response.statusText || "unknown",
				status: response.status,
				message: null,
				endpoint
			};
		}

		const data = (await response.json()) as ExtractData<T>;

		return {
			success: true,
			data,
			error: null
		};
	} catch (error) {
		console.log(error);

		return {
			success: false,
			data: null,
			error: error as ExtractError<T>
		};
	}
};

export const getPopularMovies = async ({ language = "en-US", page = 1, region = "SE" } = {}) => {
	console.log(language, page, region);
	const endpoint = new URL("https://api.themoviedb.org/3/movie/popular");
	endpoint.searchParams.append("language", language);
	endpoint.searchParams.append("page", page.toString());
	endpoint.searchParams.append("region", region);
	endpoint.searchParams.append("api_key", envServer.TMDB_API_KEY);

	console.log(endpoint.toString());

	return await query<TMDBFetch>({
		endpoint: endpoint.toString(),
		revalidate: 3600 // at most every hour
	});
};
