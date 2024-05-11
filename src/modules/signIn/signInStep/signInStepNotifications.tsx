"use client";

import { useCallback, useState } from "react";
import { SignInStep } from "../signInStepFormTypes";
import { persistValue } from "@/utils/storage";
import { cn } from "@/utils/className";

type Props = {
  setActiveStep: (step: SignInStep) => void;
};

export const SignInStepNotifications = ({ setActiveStep }: Props) => {
  const [notifications, setNotifications] = useState<string[]>([]);

  const notificationPreferences = [
    "Sign up for Email Notifications",
    "App Push Notifications",
    "No Notifications",
  ];

  const handleSetActiveStep = useCallback(
    (step: SignInStep) => {
      persistValue("user.notifications", notifications);
      setActiveStep(step);
    },
    [notifications, setActiveStep]
  );

  return (
    <div className="flex flex-col justify-center items-center rounded-xl overflow-hidden bg-kinemoe-950 w-4/5 h-[80vh]">
      <h4 className="text-kinemoe-50 text-6xl font-black mb-4">
        Stay in the loop!
      </h4>
      <span className="text-lg text-kinemoe-50 mb-12">
        Set your preferences for updates and announcements:
      </span>
      <div className="flex flex-col gap-6 w-1/3 px-10">
        {notificationPreferences.map((item, i) => (
          <button
            type="button"
            key={i}
            className={cn("flex gap-4 p-2 items-center")}
            onClick={() =>
              setNotifications((prevNot) => {
                if (prevNot.includes(item)) {
                  return prevNot.filter((not) => not !== item);
                } else {
                  return [...prevNot, item];
                }
              })
            }
          >
            <div
              className={cn(
                "flex w-10 h-10 border-2 border-kinemoe-100 rounded-lg",
                {
                  "bg-kinemoe-800": !notifications.includes(item),
                  "bg-kinemoe-50": notifications.includes(item),
                }
              )}
            ></div>
            <span className="text-kinemoe-50 text-2xl">{item}</span>
          </button>
        ))}
      </div>

      <div className="flex items-center gap-6 mt-14">
        <button
          type="button"
          className="text-green-50 hover:text-green-100 text-xl flex items-center justify-center bg-green-600 hover:bg-green-700 shadow-lg active:shadow-md shadow-green-800 hover:shadow-green-900 active:scale-95 rounded-lg py-3 px-6 outline-none transition-all w-32"
          onClick={() => handleSetActiveStep(SignInStep.recomendations)}
        >
          Back
        </button>
        <button
          type="button"
          className="text-green-50 hover:text-green-100 text-xl flex items-center justify-center bg-green-600 hover:bg-green-700 shadow-lg active:shadow-md shadow-green-800 hover:shadow-green-900 active:scale-95 rounded-lg py-3 px-6 outline-none transition-all w-32"
          onClick={() => handleSetActiveStep(SignInStep.privacy)}
        >
          Next
        </button>
      </div>
    </div>
  );
};
