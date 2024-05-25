"use client";

import Image from "next/image";
import { Nav } from "@/shared/nav";
import { WatchVideoComment } from "../watch/watchVideoComment";
import {
  profileCommentsMockData,
  profileMoviesMockData,
} from "./profileMockData";
import { MovieCard } from "@/shared/movieCard";
import { CircleProgressBar } from "@/shared/circleProgressBar";
import { getPersistedValue } from "@/utils/storage";

export const Profile = () => {
  const session = getPersistedValue<any>("user.profile");

  const comments = profileCommentsMockData();
  const watchedMovies = profileMoviesMockData();

  const profileComments = comments.map((comment) => ({
    ...comment,
    author: {
      image: session?.image ?? "",
      name: session?.username ?? "",
    },
  }));

  return (
    <main
      className="relative flex w-full min-h-screen bg-no-repeat bg-cover bg-top"
      style={{
        backgroundImage: "url(/images/users/banner/user-banner.jpg)",
      }}
    >
      <Nav />
      <div className="flex flex-1 bg-kinemoe-950 mt-44 w-full">
        <div className="flex flex-col items-center bg-kinemoe-800 px-8 rounded-br-3xl w-full max-w-[376px] text-center shrink-0">
          <Image
            src={session?.image ?? ""}
            alt={session?.username ?? ""}
            width={214}
            height={214}
            className="w-48 h-48 shrink-0 rounded-full -mt-24 mb-4 shadow-xl"
          />
          <h3 className="text-2xl font-bold text-kinemoe-50">
            {session?.username ?? ""}
          </h3>
          <span className="text-base text-kinemoe-200">Movie Enjoyer</span>
          <p className="text-base text-kinemoe-100 my-6">
            Lorem ipsum dolor sit amet consectetur. At sed dui faucibus dictum.
            Condimentum auctor scelerisque nunc nam. Mauris vel commodo
            hendrerit mattis varius risus massa vitae velit. Aenean urna euismod
            auctor tortor bibendum nunc sed.
          </p>

          <h4 className="text-xl font-bold text-kinemoe-50">Badges:</h4>
          <div className="flex justify-center items-center gap-6 py-6 border-b-2 mb-6 border-kinemoe-300 w-full">
            {["badge-1", "badge-2", "badge-3", "badge-4"].map((badge) => (
              <Image
                key={badge}
                src={`/images/users/badges/${badge}.svg`}
                alt=""
                width={48}
                height={48}
              />
            ))}
          </div>
          <div className="flex justify-evenly">
            <div className="flex flex-col items-center">
              <CircleProgressBar progress={75} />
              <span className="text-kinemoe-50 text-base">Comments</span>
            </div>
            <div className="flex flex-col items-center">
              <CircleProgressBar progress={12} />
              <span className="text-kinemoe-50 text-base">Discussions</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 py-6 pl-8 w-full overflow-hidden">
          <h4 className="text-xl font-bold text-kinemoe-50">
            Comments by {session?.username}:
          </h4>
          <div className="flex flex-col gap-3 my-8 w-3/5">
            {profileComments.map((comment, i) => (
              <WatchVideoComment
                key={i}
                comment={comment}
                className="bg-black"
              />
            ))}
          </div>
          <h4 className="text-xl font-bold text-kinemoe-50 mb-8">
            What {session?.username} watched:
          </h4>
          <div className="flex flex-1">
            <div className="flex items-center gap-5 w-full">
              {watchedMovies.map((movie, i) => (
                <MovieCard
                  key={i}
                  movie={movie}
                  className="relative w-[256px] h-[368px] shrink-0 shadow-lg shadow-kinemoe-950 hover:scale-105 hover:z-50"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
