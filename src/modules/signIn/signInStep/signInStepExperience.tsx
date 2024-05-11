"use client";

import { useCallback, useState } from "react";
import { SignInStep } from "../signInStepFormTypes";
import { persistValue } from "@/utils/storage";
import { cn } from "@/utils/className";

type Props = {
  setActiveStep: (step: SignInStep) => void;
};

export const SignInStepExperience = ({ setActiveStep }: Props) => {
  const [preferences, setPreferences] = useState<string[]>([]);

  const artistPreferences = ["Show me arround", "Dive right in and explore"];

  const handleSetActiveStep = useCallback(
    (step: SignInStep) => {
      persistValue("user.preferences", preferences);
      setActiveStep(step);
    },
    [preferences, setActiveStep]
  );

  return (
    <div className="flex flex-col justify-center items-center rounded-xl overflow-hidden bg-kinemoe-950 w-4/5 h-[80vh]">
      <h4 className="text-kinemoe-50 text-2xl font-bold mb-12">
        How do you wish to engage with Kinemoe?
      </h4>
      <div className="flex flex-wrap gap-8 w-1/2 justify-center">
        {artistPreferences.map((preference, i) => (
          <button
            type="button"
            key={i}
            className={cn(
              "flex flex-col py-2 px-6 items-center rounded-full min-w-[265px] border-2 hover:border-kinemoe-100",
              {
                "border-kinemoe-800": !preferences.includes(preference),
                "border-kinemoe-50": preferences.includes(preference),
              }
            )}
            onClick={() =>
              setPreferences((prevPreferences) => {
                if (prevPreferences.includes(preference)) {
                  return prevPreferences.filter((item) => item !== preference);
                } else {
                  return [...prevPreferences, preference];
                }
              })
            }
          >
            <span className="text-kinemoe-100 text-xl">{preference}</span>
          </button>
        ))}
      </div>

      <div className="flex items-center gap-6 mt-12">
        <button
          type="button"
          className="text-green-50 hover:text-green-100 text-xl flex items-center justify-center bg-green-600 hover:bg-green-700 shadow-lg active:shadow-md shadow-green-800 hover:shadow-green-900 active:scale-95 rounded-lg py-3 px-6 outline-none transition-all w-32"
          onClick={() => handleSetActiveStep(SignInStep.interests)}
        >
          Back
        </button>
        <button
          type="button"
          className="text-green-50 hover:text-green-100 text-xl flex items-center justify-center bg-green-600 hover:bg-green-700 shadow-lg active:shadow-md shadow-green-800 hover:shadow-green-900 active:scale-95 rounded-lg py-3 px-6 outline-none transition-all w-32"
          onClick={() => handleSetActiveStep(SignInStep.subscription)}
        >
          Next
        </button>
      </div>
    </div>
  );
};
