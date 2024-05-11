import { LayoutProps } from "@/types/page";

export default function AuthLayout({ children }: Readonly<LayoutProps>) {
  return (
    <main
      className="relative flex justify-center items-center w-full min-h-screen bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: "url(/images/assets/auth-bg.jpg)",
      }}
    >
      {children}
    </main>
  );
}
