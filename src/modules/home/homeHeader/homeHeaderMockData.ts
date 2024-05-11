import { Movie } from "@/types/movie";

const mockHomeHeader: Movie[] = [
  {
    id: "1",
    name: "Balkankan",
    image: "movie-1",
    banner: "movie-1",
    shortInfo:
      "A dark comedy a road movie. An action thriller. A funny, deadly ride.",
    longInfo:
      "Дезертер од македонската војска и неговиот италијански крвен брат, бараат мртва баба завиткана во украден килим низ криминалниот свет на Балканот.",
  },
  {
    id: "2",
    name: "Juzni Vetar",
    image: "movie-2",
    banner: "movie-2",
    shortInfo:
      "A dark comedy a road movie. An action thriller. A funny, deadly ride.",
    longInfo:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: "3",
    name: "Lazar",
    image: "movie-3",
    banner: "movie-3",
    shortInfo:
      "A dark comedy a road movie. An action thriller. A funny, deadly ride.",
    longInfo:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  }
];

export const homeHeaderMockData = (): Movie[] => mockHomeHeader;
