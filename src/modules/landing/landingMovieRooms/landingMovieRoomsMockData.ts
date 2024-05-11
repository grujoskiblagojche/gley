import { MovieRoomGroup } from "../landingTypes";

const mockRoomGroups: MovieRoomGroup[] = [
  {
    room: "Movie Room",
    movies: [...new Array(5)].map((_, index) => ({
      image: `movie-${index + 5}`,
    })),
  },
  {
    room: "Kids Room",
    movies: [...new Array(5)].map((_, index) => ({
      image: `movie-${index + 10}`,
    })),
  },
  {
    room: "Doc. Room",
    movies: [...new Array(5)].map((_, index) => ({
      image: `movie-${index + 15}`,
    })),
  },
  {
    room: "Podcasts",
    movies: [...new Array(5)].map((_, index) => ({
      image: `movie-${index + 20}`,
    })),
  },
  {
    room: "TV Series",
    movies: [...new Array(5)].map((_, index) => ({
      image: `movie-${index + 25}`,
    })),
  },
];

export const landingMovieRoomsMockData = (): MovieRoomGroup[] => mockRoomGroups;
