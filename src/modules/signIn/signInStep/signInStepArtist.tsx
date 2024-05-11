"use client";

import { useCallback, useState } from "react";
import { SignInStep } from "../signInStepFormTypes";
import { cn } from "@/utils/className";
import Image from "next/image";
import { persistValue } from "@/utils/storage";

type Props = {
  setActiveStep: (step: SignInStep) => void;
};

export const SignInStepArtist = ({ setActiveStep }: Props) => {
  const [accountType, setAccountType] = useState<string>();

  const artistViewer = [
    {
      type: "artist",
      image: "artist",
      label: "Sign up as Artist",
    },
    {
      type: "viewer",
      image: "viewer",
      label: "Sign up as Viewer",
    },
  ];

  const handleSetActiveStep = useCallback(
    (step: SignInStep) => {
      persistValue("user.accountType", accountType);
      setActiveStep(step);
    },
    [accountType, setActiveStep]
  );

  return (
    <div className="flex flex-col justify-center items-center rounded-xl overflow-hidden bg-kinemoe-950 w-4/5 h-[80vh]">
      <h2 className="text-kinemoe-50 text-5xl font-bold mb-12">
        Join as a viewer or artist:
      </h2>
      <div className="flex gap-8">
        {artistViewer.map((artist) => (
          <button
            type="button"
            key={artist.type}
            className={cn(
              "flex flex-col p-8 rounded-xl border-2 w-[375px] h-[196px] border-kinemoe-800 hover:border-kinemoe-100"
            )}
            onClick={() => setAccountType(artist.type)}
          >
            <div className="flex w-full justify-between mb-4">
              <Image
                src={`/images/icons/${artist.image}.svg`}
                alt=""
                width={80}
                height={80}
              />
              <div
                className={cn("flex w-9 h-9 border-2 rounded-full", {
                  "border-kinemoe-800": accountType !== artist.type,
                  "border-kinemoe-50 bg-white": accountType === artist.type,
                })}
              ></div>
            </div>
            <span className="text-kinemoe-100 text-2xl mb-3">
              {artist.label}
            </span>
          </button>
        ))}
      </div>

      <div className="flex items-center gap-6 mt-12">
        <button
          type="button"
          className="text-green-50 hover:text-green-100 text-xl flex items-center justify-center bg-green-600 hover:bg-green-700 shadow-lg active:shadow-md shadow-green-800 hover:shadow-green-900 active:scale-95 rounded-lg py-3 px-6 outline-none transition-all w-32"
          onClick={() => handleSetActiveStep(SignInStep.auth)}
        >
          Back
        </button>
        <button
          type="button"
          className="text-green-50 hover:text-green-100 text-xl flex items-center justify-center bg-green-600 hover:bg-green-700 shadow-lg active:shadow-md shadow-green-800 hover:shadow-green-900 active:scale-95 rounded-lg py-3 px-6 outline-none transition-all w-32"
          onClick={() => handleSetActiveStep(SignInStep.interests)}
        >
          Next
        </button>
      </div>
    </div>
  );
};
