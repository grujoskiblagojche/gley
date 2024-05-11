"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { WatchVideo } from "./watchVideo";

type Props = {
  movieId: string;
};

export const Watch = ({ movieId }: Props) => {
  const router = useRouter();
  // fetch video by ID and pass URL
  const videoUrl =
    "https://cdn.pixabay.com/video/2024/02/02/199001-909564581_large.mp4";

  const handleRouterBack = () => {
    router.back();
  };

  return (
    <div className="relative flex flex-1 justify-center items-center bg-kinemoe-950 overflow-hidden">
      <button
        type="button"
        onClick={handleRouterBack}
        className="absolute top-8 left-8 rounded-full border-2 border-kinemoe-100 p-3 active:scale-95 z-30"
      >
        <Image
          src="/images/icons/fa_arrow-left.svg"
          alt="back"
          width={33}
          height={33}
          className="w-6 h-6"
        />
      </button>
      <WatchVideo movieId={movieId} url={videoUrl} />
    </div>
  );
};
