import {
  LandingArtistCard,
  BannerMovieCard,
} from "@/modules/landing/landingTypes";
import { cn } from "@/utils/className";
import Image from "next/image";
import Link from "next/link";

type Props = {
  artist: LandingArtistCard;
  className?: string;
};

export const ArtistCard = ({ artist, className }: Props) => (
  <Link
    href={`/actor/${artist.name
      .split(" ")
      .join("-")
      .toLocaleLowerCase()}/overview`}
    className={cn(
      "relative flex flex-col justify-between items-center rounded-[56px] bg-gradient-to-tr from-kinemoe-800 to-kinemoe-950 shadow-xl hover:shadow-2xl hover:scale-105 shadow-kinemoe-950 pt-14 transition-all w-full max-w-[586px] overflow-hidden aspect-[4/5]",
      className
    )}
  >
    <h4 className="text-kinemoe-50 text-3xl font-black mb-6">{artist.name}</h4>
    <Image
      src={`/images/artists/${artist.image}.png`}
      width={300}
      height={300}
      alt={artist.name}
      className="w-full h-auto"
    />
  </Link>
);
