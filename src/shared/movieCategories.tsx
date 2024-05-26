import { MovieCard } from "@/shared/movieCard";
import Link from "next/link";
import { Movie, MovieType } from "@/types/movie";

type Props = {
  title: string;
  type: MovieType;
  movies: Movie[];
};

export const MovieCategories = ({ title, type, movies }: Props) => {
  const moviesByType = movies.filter((movie) => movie.type === type);

  return (
    <section className="flex flex-col gap-8 pl-40">
      <h2 className="text-kinemoe-100 text-3xl font-bold">{title}</h2>
      <div className="flex flex-1 items-center justify-end gap-5">
        {moviesByType.map((movie, i) => (
          <Link key={i} href={`/movies/${movie.id}/overview`}>
            <MovieCard
              movie={movie}
              className="relative w-[276px] h-[388px] shrink-0 shadow-lg shadow-kinemoe-950 hover:scale-105 hover:z-50"
            />
          </Link>
        ))}
      </div>
    </section>
  );
};
