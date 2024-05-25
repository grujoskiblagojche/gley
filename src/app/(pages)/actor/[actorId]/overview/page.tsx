import { ActorOverview } from "@/modules/actor/actorOverview";
import { PageProps } from "@/types/page";
import { NextPage } from "next";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

const Page: NextPage<PageProps> = async ({ params }: PageProps) => {
  const { actorId } = params;

  if (!actorId) redirect("/home");

  return <ActorOverview actorId={actorId} />;
};

export default Page;
