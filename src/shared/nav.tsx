"use client";

import { getPersistedValue, persistValue } from "@/utils/storage";
import Image from "next/image";
import Link from "next/link";

export const Nav = () => {
  const session = getPersistedValue<any>("user.profile");
  const userId: string = session?.username.split(" ")[0] ?? "userId";

  return (
    <nav className="flex flex-col items-center justify-between w-24 min-h-full bg-kinemoe-950/30 backdrop-blur-lg z-10 shrink-0">
      <Link
        href={
          !session
            ? "/auth/signin"
            : `/user/${userId.toLocaleLowerCase()}/profile`
        }
        className="flex justify-center items-center w-full h-24"
      >
        <Image
          src={session?.image ?? "/images/icons/User.svg"}
          alt=""
          width={56}
          height={56}
          className="w-10 h-10 rounded-full"
          priority
        />
      </Link>
      <div className="flex flex-col items-center">
        <Link
          href="/home"
          className="flex justify-center items-center w-full h-24"
        >
          <Image
            src="/images/icons/Home.svg"
            alt=""
            width={56}
            height={56}
            className="w-9 h-9"
          />
        </Link>
        <Link
          href="/home"
          className="flex justify-center items-center w-full h-24"
        >
          <Image
            src="/images/icons/Vector.svg"
            alt=""
            width={56}
            height={56}
            className="w-9 h-9"
          />
        </Link>
        <Link
          href="/home"
          className="flex justify-center items-center w-full h-24"
        >
          <Image
            src="/images/icons/wpf_chat.svg"
            alt=""
            width={56}
            height={56}
            className="w-9 h-9"
          />
        </Link>
        <Link
          href="/movies"
          className="flex justify-center items-center w-full h-24"
        >
          <Image
            src="/images/icons/bx_camera-movie.svg"
            alt=""
            width={56}
            height={56}
            className="w-9 h-9"
          />
        </Link>
      </div>
      <button
        type="button"
        onClick={() => persistValue("user.profile", undefined)}
        className="flex justify-center items-center w-full h-24"
      >
        <Image
          src="/images/icons/Settings.svg"
          alt=""
          width={56}
          height={56}
          className="w-9 h-9"
        />
      </button>
    </nav>
  );
};
