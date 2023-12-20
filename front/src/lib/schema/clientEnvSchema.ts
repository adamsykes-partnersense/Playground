import z from "zod";

const envSchema = z.object({
	NEXT_PUBLIC_URL: z.string().url(),
	NEXT_PUBLIC_TMDB_IMAGE_URL: z.string().url()
});

export const envClient = envSchema.parse({
	NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
	NEXT_PUBLIC_TMDB_IMAGE_URL: process.env.NEXT_PUBLIC_TMDB_IMAGE_URL
});

type EnvSchemaType = z.infer<typeof envSchema>;

declare global {
	namespace NodeJS {
		interface ProcessEnv extends EnvSchemaType {}
	}
}
