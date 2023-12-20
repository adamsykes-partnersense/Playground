import { z } from "zod";

const envSchema = z.object({
	TMDB_API_KEY: z.string(),
	TMDB_ACCESS_TOKEN: z.string()
});

export const envServer = envSchema.parse(process.env);

type EnvSchemaType = z.infer<typeof envSchema>;

declare global {
	namespace NodeJS {
		interface ProcessEnv extends EnvSchemaType {}
	}
}
