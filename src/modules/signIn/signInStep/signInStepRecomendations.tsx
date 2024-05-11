"use client";

import { useCallback, useEffect, useState } from "react";
import { SignInStep } from "../signInStepFormTypes";
import { Profile } from "@/types/userProfile";
import Image from "next/image";
import { getPersistedValue, persistValue } from "@/utils/storage";
import { cn } from "@/utils/className";

type Props = {
  setActiveStep: (step: SignInStep) => void;
};

export const SignInStepRecomendations = ({ setActiveStep }: Props) => {
  const [profile, setProfile] = useState<Profile>();
  const [content, setContent] = useState<string[]>([]);

  const contentRecomendations = [
    "Action",
    "Comedy",
    "Drama",
    "Horror",
    "Science Fiction",
    "Fantasy",
    "Romance",
    "Thriller",
    "Documentary",
  ];

  const handleSetActiveStep = useCallback(
    (step: SignInStep) => {
      persistValue("user.content", content);
      setActiveStep(step);
    },
    [content, setActiveStep]
  );

  useEffect(() => {
    const user = getPersistedValue<Profile>("user.profile");
    setProfile(user);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center rounded-xl overflow-hidden bg-kinemoe-950 w-4/5 h-[80vh]">
      <div className="flex flex-col gap-3 items-center mb-16">
        <Image
          src={profile?.image || "/images/assets/profile.jpg"}
          alt={profile?.username || ""}
          width={320}
          height={320}
          className="rounded-full shrink-0 w-40 aspect-square"
        />
        <span className="text-base text-kinemoe-50">
          {profile?.username ?? ""}
        </span>
      </div>

      <h4 className="text-kinemoe-50 text-4xl font-bold mb-12">
        Content Recommendations:
      </h4>
      <div className="flex flex-wrap gap-8 w-2/3 justify-center">
        {contentRecomendations.map((item, i) => (
          <button
            type="button"
            key={i}
            className={cn(
              "flex flex-col p-2 items-center rounded-full min-w-40 border-2 hover:border-kinemoe-100",
              {
                "border-kinemoe-800": !content.includes(item),
                "border-kinemoe-50": content.includes(item),
              }
            )}
            onClick={() =>
              setContent((prevContent) => {
                if (prevContent.includes(item)) {
                  return prevContent.filter((cont) => cont !== item);
                } else {
                  return [...prevContent, item];
                }
              })
            }
          >
            <span className="text-kinemoe-100 text-xl">{item}</span>
          </button>
        ))}
      </div>

      <div className="flex items-center gap-6 mt-12">
        <button
          type="button"
          className="text-green-50 hover:text-green-100 text-xl flex items-center justify-center bg-green-600 hover:bg-green-700 shadow-lg active:shadow-md shadow-green-800 hover:shadow-green-900 active:scale-95 rounded-lg py-3 px-6 outline-none transition-all w-32"
          onClick={() => handleSetActiveStep(SignInStep.cultural)}
        >
          Back
        </button>
        <button
          type="button"
          className="text-green-50 hover:text-green-100 text-xl flex items-center justify-center bg-green-600 hover:bg-green-700 shadow-lg active:shadow-md shadow-green-800 hover:shadow-green-900 active:scale-95 rounded-lg py-3 px-6 outline-none transition-all w-32"
          onClick={() => handleSetActiveStep(SignInStep.notifications)}
        >
          Next
        </button>
      </div>
    </div>
  );
};
