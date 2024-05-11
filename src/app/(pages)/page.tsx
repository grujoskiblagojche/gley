import { LandingArtists } from "@/modules/landing/landingArtists/landingArtists";
import { LandingBanner } from "@/modules/landing/landingBanner/landingBanner";
import { LandingMovieRooms } from "@/modules/landing/landingMovieRooms/landingMovieRooms";
import { Footer } from "@/shared/footer";
import { PriceModels } from "@/shared/priceModels/priceModels";
import { PageProps } from "@/types/page";
import { NextPage } from "next";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

const Page: NextPage<PageProps> = async () => {
  const session = await getServerSession();

  if (session) redirect("/home");

  return (
    <>
      <main className="pb-48">
        <LandingBanner />
        <LandingMovieRooms />
        <LandingArtists />
        <section className="relative flex justify-center flex-1 p-6 mb-24">
          <Image
            src="/images/assets/movie-cover.jpg"
            width={1820}
            height={680}
            className="w-full max-w-[1820px] h-auto rounded-xl shadow-2xl z-10"
            alt=""
          />
          <div className="absolute top-0 left-0 bg-kinemoe-600/65 rounded-full w-full h-full blur-2xl"></div>
        </section>
        <PriceModels />
      </main>
      <Footer />
    </>
  );
};

export default Page;
