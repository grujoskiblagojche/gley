import Image from "next/image";

export const Footer = () => (
  <footer className="flex justify-center p-6">
    <div className="flex w-full max-w-[1820px] justify-between items-center border-t border-kinemoe-900 pt-4">
      <p className="text-kinemoe-100 text-xl font-normal">
        {new Date().getFullYear()} &copy; KineMoe - All rights reserved.
      </p>
      <Image
        src={"/images/kinemoe.png"}
        alt="KINEMOE"
        width={716}
        height={256}
        priority={true}
        className="w-auto h-14"
      />
    </div>
  </footer>
);
