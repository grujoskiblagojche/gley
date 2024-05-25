import { MoviesHeader } from "@/modules/movies/moviesHeader/moviesHeader";
import { MoviesMovieCategories } from "@/modules/movies/moviesMovieCategories/moviesMovieCategories";
import { Footer } from "@/shared/footer";
import { PageProps } from "@/types/page";
import { NextPage } from "next";

export const dynamic = "force-dynamic";

const Page: NextPage<PageProps> = async () => {
  return (
    <>
      <MoviesHeader />
      <main className="flex flex-1 flex-col gap-12 pb-14">
        <MoviesMovieCategories />
      </main>
      <Footer />
    </>
  );
};

export default Page;
