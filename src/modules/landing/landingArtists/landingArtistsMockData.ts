import { LandingArtistCard } from "../landingTypes";

const mockArtists: LandingArtistCard[] = [
  {
    name: "Igor Dzambazov",
    image: "igor-dzambazov",
  },
  {
    name: "Rade Sherbedzija",
    image: "rade-sherbedzija",
  },
  {
    name: "Toni Mihajlovski",
    image: "toni-mihajlovski",
  },
  {
    name: "Sashko Kocev",
    image: "sashko-kocev",
  },
];

export const landingArtistsMockData = (): LandingArtistCard[] => mockArtists;
