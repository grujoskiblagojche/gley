"use client";

import { useEffect, useState } from "react";
import { moviesHeaderMockData } from "./moviesHeaderMockData";
import { Movie } from "@/types/movie";
import { MovieCard } from "@/shared/movieCard";
import Link from "next/link";
import Image from "next/image";
import { Nav } from "@/shared/nav";

export const MoviesHeader = () => {
  const [activeMovie, setActiveMovie] = useState<Movie>();
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const headerMovies = moviesHeaderMockData();
    setActiveMovie(headerMovies[0]);
    setMovies(headerMovies);
  }, []);

  return (
    <header
      className="relative flex w-full min-h-screen bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(/images/movies/banners/movie-1.png)`,
      }}
    >
      <Nav />
      <div className="flex flex-col w-1/2 gap-40 pl-16 z-10 pb-40">
        <strong className="text-white/60 text-6xl mt-4 font-bold">
          Movies Room
        </strong>
        <div className="flex flex-col justify-end flex-1 gap-4">
          <span className="text-white text-base">
            {activeMovie?.shortInfo ?? ""}
          </span>
          <h1 className="text-white text-8xl font-black uppercase">
            {activeMovie?.name ?? ""}
          </h1>
          <p className="text-white text-xl w-2/3">
            {activeMovie?.longInfo ?? ""}
          </p>
          <div className="flex gap-6 items-center mt-24">
            <Link
              href="/movies/1/watch"
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
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-kinemoe-950 to-kinemoe-950/60"></div>
    </header>
  );
};
