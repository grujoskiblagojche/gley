import Image from "next/image";
import { Nav } from "@/shared/nav";
import { MovieCard } from "@/shared/movieCard";
import { actorOverviewMockData } from "./actorOverviewMockData";
import Link from "next/link";

type Props = {
  actorId: string;
};

export const ActorOverview = async ({ actorId }: Props) => {
  const actor = actorOverviewMockData(actorId);

  return (
    <main
      className="relative flex w-full min-h-screen bg-no-repeat bg-cover bg-top bg-kinemoe-950"
      style={{
        backgroundImage: "url(/images/assets/artist-bg.png)",
      }}
    >
      <Nav />
      <div className="flex flex-1 flex-col p-9 mt-6 rounded-t-3xl bg-kinemoe-950 z-10 w-full max-w-5xl mx-auto shadow-2xl shadow-kinemoe-800">
        <div className="flex gap-6 mb-12">
          <Image
            src={`/images/artists/${actor.image}.png`}
            alt={actor.name}
            width={341}
            height={396}
            className="rounded-2xl border-2 border-kinemoe-900 shadow-kinemoe-800 shadow-lg max-w-80 bg-gradient-to-tr from-kinemoe-800 to-kinemoe-950"
          />
          <div className="flex flex-col gap-4 text-center items-center p-6">
            <h1 className="text-kinemoe-50 text-3xl font-bold">{actor.name}</h1>
            <p className="text-kinemoe-100 text-base mb-6">{actor.bio}</p>
            <Link
              href={"/"}
              className="text-green-50 hover:text-green-100 bg-green-600 hover:bg-green-700 shadow-lg active:shadow-md shadow-green-800 hover:shadow-green-900 active:scale-95 text-2xl font-bold rounded-2xl p-4 w-full outline-none text-center transition-all max-w-80"
            >
              See more
            </Link>
          </div>
        </div>
        <div className="flex flex-col px-4">
          <h4 className="text-xl font-bold text-kinemoe-50 mb-4">Филмови:</h4>
          <div className="flex items-center gap-4">
            {actor.movies.map((movie, i) => (
              <MovieCard
                key={i}
                movie={movie}
                className="relative w-[173px] h-[239px] shrink-0 shadow-lg shadow-kinemoe-950 hover:scale-105 hover:z-50"
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col px-4 mt-12">
          <ul className="list-disc pl-4">
            {actor.achievements.map((achievement, i) => (
              <li key={i} className="text-kinemoe-100 mb-1">
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-kinemoe-950 to-kinemoe-950/60 backdrop-blur-md"></div>
    </main>
  );
};
