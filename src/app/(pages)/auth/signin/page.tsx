import { SignInStepForm } from "@/modules/signIn/signInStepForm";
import { PageProps } from "@/types/page";
import { NextPage } from "next";

export const dynamic = "force-dynamic";

const Page: NextPage<PageProps> = async () => {
  return <SignInStepForm />;
};

export default Page;
