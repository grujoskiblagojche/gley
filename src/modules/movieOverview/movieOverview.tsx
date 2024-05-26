import Image from "next/image";
import { Nav } from "@/shared/nav";
import { MovieCard } from "@/shared/movieCard";
import { movieOverviewMockData } from "./movieOverviewMockData";
import Link from "next/link";
import { formatCommaSeparated } from "@/utils/formatCommaSeparated";

type Props = {
  movieId: string;
};

export const MovieOverview = async ({ movieId }: Props) => {
  const movie = movieOverviewMockData(movieId);

  return (
    <main
      className="relative flex w-full min-h-screen bg-no-repeat bg-cover bg-top bg-kinemoe-950"
      style={{
        backgroundImage: "url(/images/assets/artist-bg.png)",
      }}
    >
      <Nav />
      <div className="flex flex-1 flex-col mt-6 rounded-t-3xl bg-kinemoe-950 z-10 w-full max-w-5xl mx-auto shadow-2xl shadow-kinemoe-800 overflow-hidden">
        <div
          className="relative flex flex-col px-16 min-h-[540px] bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(/images/movies/banners/${movie.banner}.png)`,
          }}
        >
          <div className="flex flex-col flex-1 justify-end z-10">
            <h1 className="text-white text-5xl font-black uppercase mb-4">
              {movie?.name ?? ""}
            </h1>
            <p className="text-white text-md w-2/3">{movie?.longInfo ?? ""}</p>
            <div className="flex gap-6 items-center mt-12">
              <Link
                href={`/movies/${movie.id}/watch`}
                className="flex items-center gap-4 bg-gre bg-green-600 hover:bg-green-700 shadow-lg active:shadow-md shadow-green-800 hover:shadow-green-900 active:scale-95 rounded-lg p-3 pr-6 outline-none transition-all"
              >
                <Image
                  src="/images/icons/ph_play-bold.svg"
                  alt=""
                  width={40}
                  height={40}
                  className="w-8 h-8"
                />
                <span className="text-green-50 hover:text-green-100 text-xl">
                  Гледај
                </span>
              </Link>
              <Image
                src="/images/icons/ph_heart-bold.svg"
                alt=""
                width={40}
                height={40}
                className="w-8 h-8"
              />
              <Image
                src="/images/icons/typcn_plus.svg"
                alt=""
                width={40}
                height={40}
                className="w-8 h-8"
              />
              <Image
                src="/images/icons/fluent_share-24-regular.svg"
                alt=""
                width={40}
                height={40}
                className="w-8 h-8"
              />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-kinemoe-950 to-kinemoe-950/0"></div>
        </div>
        <div className="flex flex-col gap-6 px-16 my-12">
          <div className="flex items-center gap-6">
            <h6 className="text-2xl font-bold text-kinemoe-50">
              {movie.details?.premiere}
            </h6>
            <span className="text-kinemoe-100 text-sm font-semibold p-2 border-2 border-kinemoe-800">
              {movie.details?.ageRestriction}
            </span>
            <small className="text-kinemoe-100 text-sm">
              {formatCommaSeparated(movie.details?.ageInfo ?? [])}
            </small>
          </div>
        </div>
        <div className="flex flex-wrap px-16">
          {(
            [
              "genres",
              "writers",
              "editing",
              "cast",
              "produces",
              "costume_design",
              "director",
              "cinematography",
            ] as const
          ).map((detail, i) => (
            <div key={i} className="flex w-1/3 mb-6">
              <strong className="text-kinemoe-50 font-bold capitalize">
                {detail.split("_").join(" ")}:
                <span className="text-kinemoe-200 font-normal ml-2">
                  {formatCommaSeparated(movie.details?.[detail] ?? [])}
                </span>
              </strong>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-kinemoe-950 to-kinemoe-950/60 backdrop-blur-md"></div>
    </main>
  );
};
