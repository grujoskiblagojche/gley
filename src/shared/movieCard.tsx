"use client";

import { Movie } from "@/types/movie";
import { cn } from "@/utils/className";

type Props = {
  movie: Movie;
  className?: string;
};

export const MovieCard = ({ movie, className }: Props) => (
  <figure
    className={cn(
      "flex flex-col justify-end rounded-lg bg-kinemoe-700 p-4 bg-no-repeat bg-center bg-cover transition-all",
      className
    )}
    style={{
      backgroundImage: `url(/images/movies/${movie.image}-min.jpg)`,
    }}
  >
    {movie.rating && (
      <figcaption className="flex gap-2 items-center">
        <strong className="text-kinemoe-900 text-lg md:text-xl px-2 py-1 rounded-md bg-yellow-500 font-bold">
          Imdb
        </strong>
        <p className="text-yellow-500 text-lg md:text-xl font-bold">
          {movie.rating}
          <span className="text-kinemoe-50 text-base md:text-lg font-normal">
            /10
          </span>
        </p>
      </figcaption>
    )}
  </figure>
);
