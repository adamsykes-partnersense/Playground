import { ExtractBody, ExtractData, ExtractError } from "@/types";

export const mutate = async <T>({
	endpoint,
	method = "POST",
	headers,
	body,
	cache = "force-cache",
	tags
}: {
	endpoint: string;
	method?: "POST" | "PUT" | "DELETE";
	headers?: HeadersInit;
	body?: ExtractBody<T>;
	cache?: RequestCache;
	tags?: string[];
}) => {
	try {
		const response = await fetch(endpoint, {
			method,
			headers: {
				"Content-Type": "application/json",
				...headers
			},
			body: JSON.stringify(body),
			cache,
			...(tags && { next: { tags } })
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
