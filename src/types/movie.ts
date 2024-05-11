export enum MovieType {
  popular = "POPULAR",
  newRealise = "NEW_REALISE",
  comingSoon = "COMING_SOON",
  recommended = "RECOMMENDED",
  podcasts = "PODCASTS",
  kids = "KIDS",
  action = "ACTION",
  comedy = "COMEDY",
  horor = "HOROR",
  drama = "DRAMA",
  history = "HISTORY",
}

export type MovieDetails = {
  genres?: string[];
  writers?: string[];
  editing?: string[];
  cast?: string[];
  produces?: string[];
  costume_design?: string[];
  director?: string[];
  cinematography?: string[];

  premiere?: string;
  ageRestriction?: string;
  ageInfo?: string[];
};

export type Movie = {
  id?: string;
  name?: string;
  image?: string;
  type?: MovieType;
  banner?: string;
  rating?: string;
  category?: string;
  shortInfo?: string;
  longInfo?: string;
  details?: MovieDetails;
};

export type MovieCategory = {
  category: string;
  movies: Movie[];
};
