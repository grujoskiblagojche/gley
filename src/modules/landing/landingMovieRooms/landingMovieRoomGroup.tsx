import { MovieCard } from "@/shared/movieCard";
import { MovieRoomGroup } from "../landingTypes";
import { cn } from "@/utils/className";
import Link from "next/link";

type Props = {
  group: MovieRoomGroup;
};

export const LandingMovieRoomGroup = ({ group }: Props) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <h3 className="text-kinemoe-100 text-3xl font-bold">{group.room}</h3>
      <Link href={"/movies"} className="flex w-full max-w-[585px]">
        {group.movies.map((movie, i) => (
          <MovieCard
            key={i}
            movie={movie}
            className={cn(
              "relative w-[216px] h-[303px] shrink-0 first-of-type:ml-0 -ml-[130px] shadow-lg shadow-kinemoe-950",
              {
                "z-[5]": i === 0,
                "z-[4]": i === 1,
                "z-[3]": i === 2,
                "z-[2]": i === 3,
                "z-[1]": i === 4,
              }
            )}
          />
        ))}
      </Link>
    </div>
  );
};
