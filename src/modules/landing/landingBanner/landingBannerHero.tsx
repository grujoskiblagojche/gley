import Image from "next/image";
import Link from "next/link";

export const LandingBannerHero = () => {
  return (
    <div className="flex flex-col items-center mb-24 z-10">
      <Image
        src={"/images/kinemoe.png"}
        alt="KINEMOE"
        width={716}
        height={256}
        priority={true}
        className="w-auto h-auto"
      />
      <h1 className="text-kinemoe-50 text-5xl md:text-6xl font-black mb-6 text-center">
        EXPLORE, ENGAGE &amp; EXPRESS YOURSELF
      </h1>
      <p className="text-kinemoe-100 text-2xl md:text-4xl font-normal mb-12 text-center">
        Watch, learn and collaborate beyond the screen!
      </p>
      <Link
        href={"/auth/signin"}
        className="text-green-50 hover:text-green-100 bg-green-600 hover:bg-green-700 shadow-lg active:shadow-md shadow-green-800 hover:shadow-green-900 active:scale-95 text-2xl font-bold rounded-2xl p-4 min-w-80 outline-none text-center transition-all"
      >
        LOGIN
      </Link>
    </div>
  );
};
