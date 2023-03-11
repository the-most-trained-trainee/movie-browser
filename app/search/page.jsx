import getMovies from "../getMovies";
import MovieCard from "../MovieCard";
import AddFavorite from "../addFavorite";

const Search = async ({ searchParams }) => {
  const request = searchParams.query;
  const foundMovies = await getMovies(request);

  return (
    <div>
      {!!foundMovies.length && (
        <ul>
          {foundMovies.map((movie) => (
            <li key={movie.imdbID}>
              <MovieCard movie={movie} />
              <AddFavorite favorite={movie} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
