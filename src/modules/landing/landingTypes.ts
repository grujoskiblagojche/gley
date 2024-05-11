export type BannerMovieCard = {
  image: string;
  rating?: string; // Imdb
};

export type MovieRoomCard = {
  image: string;
};

export type MovieRoomGroup = {
  room: string;
  movies: MovieRoomCard[];
};

export type LandingArtistCard = {
  name: string;
  image: string;
};
