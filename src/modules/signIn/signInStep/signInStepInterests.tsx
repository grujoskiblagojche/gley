"use client";

import { useCallback, useState } from "react";
import { SignInStep } from "../signInStepFormTypes";
import { persistValue } from "@/utils/storage";
import { cn } from "@/utils/className";

type Props = {
  setActiveStep: (step: SignInStep) => void;
};

export const SignInStepInterests = ({ setActiveStep }: Props) => {
  const [interests, setInterests] = useState<string[]>([]);

  const artistInterests = [
    "Cinema",
    "Visual Arts",
    "Dance",
    "Teatre",
    "Music",
    "Literature",
    "More Options",
  ];

  const handleSetActiveStep = useCallback(
    (step: SignInStep) => {
      persistValue("user.interests", interests);
      setActiveStep(step);
    },
    [interests, setActiveStep]
  );

  return (
    <div className="flex flex-col justify-center items-center rounded-xl overflow-hidden bg-kinemoe-950 w-4/5 h-[80vh]">
      <h4 className="text-kinemoe-50 text-2xl font-bold mb-12">
        Tell us what moves you. Select your interests to tailor your Kinemoe
        universe:
      </h4>
      <div className="flex flex-wrap gap-8 w-1/2 justify-center">
        {artistInterests.map((interest, i) => (
          <button
            type="button"
            key={i}
            className={cn(
              "flex flex-col p-2 items-center rounded-full min-w-40 border-2 hover:border-kinemoe-100",
              {
                "border-kinemoe-800": !interests.includes(interest),
                "border-kinemoe-50": interests.includes(interest),
              }
            )}
            onClick={() =>
              setInterests((prevInterests) => {
                if (prevInterests.includes(interest)) {
                  return prevInterests.filter((item) => item !== interest);
                } else {
                  return [...prevInterests, interest];
                }
              })
            }
          >
            <span className="text-kinemoe-100 text-xl">{interest}</span>
          </button>
        ))}
      </div>

      <div className="flex items-center gap-6 mt-12">
        <button
          type="button"
          className="text-green-50 hover:text-green-100 text-xl flex items-center justify-center bg-green-600 hover:bg-green-700 shadow-lg active:shadow-md shadow-green-800 hover:shadow-green-900 active:scale-95 rounded-lg py-3 px-6 outline-none transition-all w-32"
          onClick={() => handleSetActiveStep(SignInStep.artist)}
        >
          Back
        </button>
        <button
          type="button"
          className="text-green-50 hover:text-green-100 text-xl flex items-center justify-center bg-green-600 hover:bg-green-700 shadow-lg active:shadow-md shadow-green-800 hover:shadow-green-900 active:scale-95 rounded-lg py-3 px-6 outline-none transition-all w-32"
          onClick={() => handleSetActiveStep(SignInStep.experience)}
        >
          Next
        </button>
      </div>
    </div>
  );
};
