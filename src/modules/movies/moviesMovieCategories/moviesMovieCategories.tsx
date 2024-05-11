import { MovieCategories } from "@/shared/movieCategories";
import { moviesMovieCategoriesMockData } from "./moviesMovieCategoriesMockData";
import { MovieType } from "@/types/movie";

export const MoviesMovieCategories = () => {
  const movies = moviesMovieCategoriesMockData();

  return (
    <>
      <MovieCategories
        title="Popular"
        type={MovieType.popular}
        movies={movies}
      />
      <MovieCategories title="Action" type={MovieType.action} movies={movies} />
      <MovieCategories title="Comedy" type={MovieType.comedy} movies={movies} />
      <MovieCategories title="Horor" type={MovieType.horor} movies={movies} />
      <MovieCategories title="Drama" type={MovieType.drama} movies={movies} />
      <MovieCategories
        title="History"
        type={MovieType.history}
        movies={movies}
      />
    </>
  );
};
