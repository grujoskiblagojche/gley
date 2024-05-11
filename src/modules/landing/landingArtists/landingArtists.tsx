import { ArtistCard } from "@/shared/artistCard";
import { landingArtistsMockData } from "./landingArtistsMockData";

export const LandingArtists = () => {
  const artists = landingArtistsMockData();

  return (
    <section className="flex flex-1 flex-col items-center text-center gap-6">
      <h2 className="text-kinemoe-50 text-5xl md:text-6xl font-black uppercase">
        Meet the artists
      </h2>
      <div className="flex justify-center w-full overflow-x-auto gap-6 px-6 pt-6 pb-20">
        {artists.map((artist, i) => (
          <ArtistCard key={i} artist={artist} />
        ))}
      </div>
    </section>
  );
};
