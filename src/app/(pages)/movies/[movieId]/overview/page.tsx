import { MovieOverview } from "@/modules/movieOverview/movieOverview";
import { PageProps } from "@/types/page";
import { NextPage } from "next";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

const Page: NextPage<PageProps> = async ({ params }) => {
  const { movieId } = params;

  if (!movieId) redirect("/home");

  return (
    <main className="flex w-screen h-screen">
      <MovieOverview movieId={movieId} />
    </main>
  );
};

export default Page;
