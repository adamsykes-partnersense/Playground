import { getPopularMovies } from "@/src/lib/queries";
import { Grid, Container, Card } from "@/src/components";

export default async function HomePage() {
	const { success, data, error } = await getPopularMovies();

	return (
		<Container>
			<Grid asChild>
				<main className="gap-[clamp(1rem,_4%,_1.5rem)]">
					{data?.results.map((movie) => <Card key={movie.id} movie={movie} />)}
				</main>
			</Grid>
		</Container>
	);
}
