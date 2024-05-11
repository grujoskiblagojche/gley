import { MovieCategories } from "@/shared/movieCategories";
import { homeMovieCategoriesMockData } from "./homeMovieCategoriesMockData";
import { MovieType } from "@/types/movie";
import Image from "next/image";

export const HomeMovieCategories = () => {
  const movies = homeMovieCategoriesMockData();

  return (
    <>
      <MovieCategories
        title="Popular"
        type={MovieType.popular}
        movies={movies}
      />
      <MovieCategories
        title="New Releases"
        type={MovieType.newRealise}
        movies={movies}
      />
      <section className="flex flex-col gap-8 pl-40">
        <h2 className="text-kinemoe-100 text-3xl font-bold">Coming soon</h2>
        <div className="flex flex-1 pr-6">
          <Image
            src="/images/movies/banners/peaky-blinders.png"
            alt=""
            width={1666}
            height={655}
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </section>
      <MovieCategories
        title="Our recommendations"
        type={MovieType.recommended}
        movies={movies}
      />
      <section className="flex pl-40">
        <div className="flex flex-1 pr-6">
          <Image
            src="/images/movies/banners/movie-5.png"
            alt=""
            width={1666}
            height={655}
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </section>
      <MovieCategories
        title="Podcasts"
        type={MovieType.podcasts}
        movies={movies}
      />
      <MovieCategories title="Kids" type={MovieType.kids} movies={movies} />
    </>
  );
};
