"use client";

import Image from "next/image";
import { SyntheticEvent, useCallback, useRef, useState } from "react";
import { formatVideoDuration } from "./watchUtils";
import { WatchVideoComments } from "./watchVideoComments";

type Props = {
  movieId: string;
  url: string;
};

export const WatchVideo = ({ movieId, url }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoTime, setVideoTime] = useState(0);

  const handlePlayPause = useCallback(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  }, [isPlaying]);

  const handleRewind = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 10; // rewind 10 seconds
    }
  }, []);

  const handleFastForward = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.currentTime += 10; // fast forward 10 seconds
    }
  }, []);

  const handleVolumeChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (videoRef.current) {
        videoRef.current.volume = Number(e.target.value);
      }
    },
    []
  );

  const handleTimeUpdate = useCallback(
    (event: SyntheticEvent<HTMLVideoElement, Event>) => {
      setVideoTime(Math.round(event.currentTarget.currentTime));
    },
    []
  );

  const handleVideoEnded = useCallback(() => {
    setIsPlaying(false);
    setVideoTime(0);
  }, []);

  return (
    <div className="relative flex flex-1 justify-center items-center bg-black z-20">
      <video
        ref={videoRef}
        src={url}
        onEnded={handleVideoEnded}
        onTimeUpdate={handleTimeUpdate}
        className="flex max-w-full max-h-full"
      ></video>
      <div className="fixed bottom-0 left-0 flex flex-col gap-4 w-full p-8 pt-24 bg-gradient-to-t from-kinemoe-950/95 to-kinemoe-950/0">
        <div className="flex w-full h-1 bg-kinemoe-50/30 rounded-sm">
          {videoRef.current && (
            <div
              className="flex h-1 bg-red-600 relative duration-1000"
              style={{
                width: (videoTime / videoRef.current.duration) * 100 + "%",
              }}
            >
              <div className="absolute -top-1 -right-2 w-3 h-3 rounded-full bg-red-600"></div>
            </div>
          )}
        </div>
        <div className="flex flex-1 justify-between items-center">
          <span className="text-kinemoe-50">
            {formatVideoDuration(videoTime)} /{" "}
            {formatVideoDuration(videoRef.current?.duration)}
          </span>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={handleRewind}
              className="active:scale-90"
            >
              <Image
                src="/images/icons/rewind.svg"
                alt="back"
                width={33}
                height={33}
                className="w-8 h-8"
              />
            </button>
            <button
              type="button"
              onClick={handlePlayPause}
              className="active:scale-90"
            >
              {!isPlaying ? (
                <Image
                  src="/images/icons/gravity-ui_play-fill.svg"
                  alt="play"
                  width={33}
                  height={33}
                  className="w-12 h-12 text-kinemoe-50"
                />
              ) : (
                <Image
                  src="/images/icons/gravity-ui_pause-fill.svg"
                  alt="pause"
                  width={33}
                  height={33}
                  className="w-12 h-12 text-kinemoe-50"
                />
              )}
            </button>
            <button
              type="button"
              onClick={handleFastForward}
              className="active:scale-90"
            >
              <Image
                src="/images/icons/rewind.svg"
                alt="back"
                width={33}
                height={33}
                className="w-8 h-8 rotate-180"
              />
            </button>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex group relative">
              <div className="flex p-4 rounded-lg bg-kinemoe-950/60 opacity-0 group-hover:opacity-100 -rotate-90 absolute bottom-[104px] -right-14 -z-10 group-hover:z-50">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  onChange={handleVolumeChange}
                  defaultValue="1"
                  className="cursor-grab outline-none"
                />
              </div>
              <Image
                src="/images/icons/akar-icons_sound-on.svg"
                alt="back"
                width={33}
                height={33}
                className="w-10 h-10"
              />
            </div>
            <WatchVideoComments movieId={movieId} />
          </div>
        </div>
      </div>
    </div>
  );
};
