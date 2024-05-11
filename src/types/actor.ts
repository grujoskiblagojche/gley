import { Movie } from "./movie";

export type Actor = {
  id: string;
  name: string;
  image: string;
  bio: string;
  movies: Movie[];
  achievements: string[];
};
