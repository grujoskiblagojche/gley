import { ActorOverview } from "@/modules/actor/actorOverview";
import { PageProps } from "@/types/page";
import { NextPage } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

const Page: NextPage<PageProps> = async ({ params }: PageProps) => {
  const session = await getServerSession();

  const { actorId } = params;

  if (!actorId || !session) redirect("/auth/signin");

  return <ActorOverview actorId={actorId} />;
};

export default Page;
