import { MovieCard } from "@/shared/movieCard";
import { BannerMovieCard } from "../landingTypes";

type Props = {
  movies: BannerMovieCard[];
};

export const LandingBannerMovies = ({ movies }: Props) => {
  return (
    <div className="flex flex-1 z-10 justify-center pb-64 fade-in-up">
      {movies.map((movie, i) => (
        <MovieCard
          key={i}
          movie={movie}
          className="relative w-[306px] aspect-[4/6] banner-movie-card"
        />
      ))}
    </div>
  );
};
