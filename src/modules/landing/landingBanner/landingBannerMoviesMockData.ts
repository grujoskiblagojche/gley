import { BannerMovieCard } from "../landingTypes";

const mockMovies: BannerMovieCard[] = [
  {
    image: "movie-1",
    rating: "8.8",
  },
  {
    image: "movie-2",
    rating: "8.7",
  },
  {
    image: "movie-3",
    rating: "8.6",
  },
  {
    image: "movie-4",
    rating: "8.0",
  },
  {
    image: "movie-5",
    rating: "8.4",
  },
  {
    image: "movie-6",
    rating: "8.8",
  },
  {
    image: "movie-7",
    rating: "9.2",
  },
];

export const landingBannerMoviesMockData = (): BannerMovieCard[] => mockMovies;
