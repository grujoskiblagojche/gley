import { LandingBannerMovies } from "./landingBannerMovies";
import { LandingBannerHero } from "./landingBannerHero";
import { landingBannerMoviesMockData } from "./landingBannerMoviesMockData";

export const LandingBanner = () => {
  const movies = landingBannerMoviesMockData();

  return (
    <section
      className="relative flex flex-1 flex-col justify-center bg-no-repeat"
      style={{
        backgroundImage: `url(/images/assets/banner-bg.png)`,
        backgroundSize: "103%",
        backgroundPosition: "-30px -30px",
      }}
    >
      <LandingBannerHero />
      <LandingBannerMovies movies={movies} />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-kinemoe-950 to-kinemoe-950/60"></div>
    </section>
  );
};
