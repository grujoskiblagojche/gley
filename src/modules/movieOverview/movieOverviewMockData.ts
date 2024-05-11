import { Movie } from "@/types/movie";

const mockMovieOverview: Movie = {
  id: "1",
  name: "Lazar",
  banner: "movie-3",
  longInfo:
    "Involved in a ring of illegal smugglers, Lazar lives a disconnected life until he meets Katerina, with whom he envisions a hopeful future. But leaving the criminal world is harder than he imagined. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  details: {
    premiere: "100% Match 2024",
    ageRestriction: "16+",
    ageInfo: ["action", "language"],
    genres: ["History", "Drama", "Action"],
    writers: ["Svetozar Ristovski", "Grace Lea Troje"],
    editing: ["Atanas Georgiev"],
    cast: ["Rade Sherbedzija", "Silvija Stojanovska", "Ratka Radmanovikj"],
    produces: ["Suza Horvat"],
    costume_design: ["Nevena Caklovic", "Katarina Kolumbatovic"],
    director: ["Svetozar Ristovski"],
    cinematography: ["Dejan Dimeski"],
  },
};

export const movieOverviewMockData = (_movieId?: string): Movie =>
  mockMovieOverview;
