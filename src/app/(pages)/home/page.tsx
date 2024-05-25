import { HomeHeader } from "@/modules/home/homeHeader/homeHeader";
import { HomeMovieCategories } from "@/modules/home/homeMovieCategories/homeMovieCategories";
import { Footer } from "@/shared/footer";
import { PageProps } from "@/types/page";
import { NextPage } from "next";

export const dynamic = "force-dynamic";

const Page: NextPage<PageProps> = async () => {
  return (
    <>
      <HomeHeader />
      <main className="flex flex-1 flex-col gap-12 pb-14">
        <HomeMovieCategories />
      </main>
      <Footer />
    </>
  );
};

export default Page;
