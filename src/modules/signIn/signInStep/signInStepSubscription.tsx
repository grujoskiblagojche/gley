"use client";

import { useCallback, useState } from "react";
import { SignInStep } from "../signInStepFormTypes";
import { persistValue } from "@/utils/storage";
import { cn } from "@/utils/className";
import { PriceModels } from "@/shared/priceModels/priceModels";

type Props = {
  setActiveStep: (step: SignInStep) => void;
};

export const SignInStepSubscription = ({ setActiveStep }: Props) => {
  const [subscription, setSubscription] = useState<string>();

  const artistSubscription = ["Show me arround", "Dive right in and explore"];

  const handleSetActiveStep = useCallback(
    (step: SignInStep) => {
      persistValue("user.subscription", subscription);
      setActiveStep(step);
    },
    [subscription, setActiveStep]
  );

  return (
    <div className="flex flex-col justify-center px-16 rounded-xl overflow-hidden bg-kinemoe-950 w-4/5 h-[80vh]">
      <PriceModels />

      <div className="flex items-center justify-center gap-6 mt-12">
        <button
          type="button"
          className="text-green-50 hover:text-green-100 text-xl flex items-center justify-center bg-green-600 hover:bg-green-700 shadow-lg active:shadow-md shadow-green-800 hover:shadow-green-900 active:scale-95 rounded-lg py-3 px-6 outline-none transition-all w-32"
          onClick={() => handleSetActiveStep(SignInStep.experience)}
        >
          Back
        </button>
        <button
          type="button"
          className="text-green-50 hover:text-green-100 text-xl flex items-center justify-center bg-green-600 hover:bg-green-700 shadow-lg active:shadow-md shadow-green-800 hover:shadow-green-900 active:scale-95 rounded-lg py-3 px-6 outline-none transition-all w-32"
          onClick={() => handleSetActiveStep(SignInStep.profile)}
        >
          Next
        </button>
      </div>
    </div>
  );
};
