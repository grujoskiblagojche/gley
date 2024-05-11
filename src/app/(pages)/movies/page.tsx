import { MoviesHeader } from "@/modules/movies/moviesHeader/moviesHeader";
import { MoviesMovieCategories } from "@/modules/movies/moviesMovieCategories/moviesMovieCategories";
import { Footer } from "@/shared/footer";
import { PageProps } from "@/types/page";
import { NextPage } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

const Page: NextPage<PageProps> = async () => {
  const session = await getServerSession();

  if (!session) redirect("/auth/signin");

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
