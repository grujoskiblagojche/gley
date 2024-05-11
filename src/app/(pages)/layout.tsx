import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "../globals.css";
import { LayoutProps } from "@/types/page";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import SessionProvider from "@/context/SessionProvider";
import { cn } from "@/utils/className";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KINEMOE",
  description: "Explore, engage and express yourself.",
};

export default async function RootLayout({
  params,
  children,
}: Readonly<LayoutProps>) {
  const session = await getServerSession(authOptions);

  return (
    <html lang={params.lang as string}>
      <body
        className={cn(
          "select-none overscroll-y-contain bg-kinemoe-950 antialiased",
          lato.className
        )}
      >
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
