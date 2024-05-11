import { Profile } from "@/modules/profile/profile";
import { PageProps } from "@/types/page";
import { NextPage } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

const Page: NextPage<PageProps> = async ({ params }: PageProps) => {
  const session = await getServerSession();
  const { userId } = params;

  if (!session || !userId) redirect("/auth/signin");

  return <Profile userId={userId} />;
};

export default Page;
