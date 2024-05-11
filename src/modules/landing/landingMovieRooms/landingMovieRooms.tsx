import { LandingMovieRoomGroup } from "./landingMovieRoomGroup";
import { landingMovieRoomsMockData } from "./landingMovieRoomsMockData";

export const LandingMovieRooms = () => {
  const movieRoomGroups = landingMovieRoomsMockData();

  return (
    <section className="flex flex-1 flex-wrap justify-center gap-6 mb-20">
      {movieRoomGroups.map((group, i) => (
        <LandingMovieRoomGroup key={i} group={group} />
      ))}
    </section>
  );
};
