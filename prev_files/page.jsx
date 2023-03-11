import MovieCard from "./MovieCard";
import getMovies from "./getMovies";

export default async function MovieList({ search }) {
  const movies = await getMovies(search);
  return (
    <div>
      {!!movies.length && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.imdbID}>
              <MovieCard movie={movie} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
