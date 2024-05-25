import { Profile } from "@/modules/profile/profile";
import { PageProps } from "@/types/page";
import { NextPage } from "next";

export const dynamic = "force-dynamic";

const Page: NextPage<PageProps> = () => {
  return <Profile />;
};

export default Page;
