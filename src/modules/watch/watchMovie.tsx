"use client";

type Props = {
  movieId: string;
};

export const Watch = ({ movieId }: Props) => {
  // fetch movie by ID
  const videoUrl = "https://www.youtube.com/watch?v=n3kbkzVkbA4";

  return (
    <div className="flex flex-1 justify-center items-center bg-black">
      <video
        autoPlay={true}
        ref={videoRef}
        src={videoUrl}
        className="flex max-w-full max-h-full"
      ></video>
      <div className="absolute bottom-0 flex justify-between items-center w-full p-4 bg-opacity-50 bg-gray-800 text-white">
        <button onClick={handlePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button onClick={handleRewind}>Rewind</button>
        <button onClick={handleFastForward}>Fast Forward</button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          onChange={handleVolumeChange}
          defaultValue="1"
        />
        <button onClick={handleFullScreen}>Full Screen</button>
      </div>
    </div>
  );
};
