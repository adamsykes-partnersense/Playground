import Link from "next/link";
import { TMDBResult } from "@/src/types/tmdb";
import { envClient } from "@/src/lib/schema/clientEnvSchema";
import { Toggle } from "./Toggle";
import Image from "next/image";

export const Card = ({ movie }: { movie: TMDBResult }) => {
	return (
		<article key={movie.id} className="relative isolate">
			<Link href={`/movie/${movie.id}`} aria-label={`Go to ${movie.title} details`}>
				<Image
					src={`${envClient.NEXT_PUBLIC_TMDB_IMAGE_URL}/w400${movie.poster_path}`}
					alt={movie.title}
					width={240}
					height={360}
					className="h-auto w-full rounded-md transition hover:scale-105"
				/>
			</Link>

			<Toggle />

			<div className="absolute inset-0 hidden overflow-auto bg-black/50 p-4 text-white peer-checked:block">
				<h2 className="text-lg font-bold">{movie.title}</h2>
				<p className="mt-2 text-sm font-medium">{movie.overview}</p>
			</div>
		</article>
	);
};
