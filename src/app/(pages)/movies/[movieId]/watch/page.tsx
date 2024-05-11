import { Watch } from "@/modules/watch/watch";
import { PageProps } from "@/types/page";
import { NextPage } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

const Page: NextPage<PageProps> = async ({ params }) => {
  const { movieId } = params;
  const session = await getServerSession();

  if (!movieId || !session) redirect("/auth/signin");

  return (
    <main className="flex w-screen h-screen">
      <Watch movieId={movieId} />
    </main>
  );
};

export default Page;
