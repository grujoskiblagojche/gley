"use client";

import { useCallback, useEffect, useState } from "react";
import { SignInStep } from "../signInStepFormTypes";
import { Profile } from "@/types/userProfile";
import { getPersistedValue, persistValue } from "@/utils/storage";
import Image from "next/image";
import { cn } from "@/utils/className";
import { useRouter } from "next/navigation";

type Props = {
  setActiveStep: (step: SignInStep) => void;
};

export const SignInStepPrivacy = ({ setActiveStep }: Props) => {
  const [profile, setProfile] = useState<Profile>();
  const [privacy, setPrivacy] = useState<string>();

  const router = useRouter();

  const privacyPreferences = ["My Friends", "Public", "Only Me"];

  const handleSetActiveStep = useCallback(
    (step: SignInStep) => {
      persistValue("user.privacy", privacy);
      setActiveStep(step);

      if (step === SignInStep.done) {
        router.replace("/home");
      }
    },
    [router, privacy, setActiveStep]
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

      <h4 className="text-kinemoe-50 text-4xl font-bold mb-2">
        Select your privacy settings
      </h4>
      <p className="text-kinemoe-50 text-base font-normal mb-12">
        Choose who sees your profile:
      </p>
      <div className="flex flex-wrap gap-8 w-2/3 justify-center">
        {privacyPreferences.map((priv, i) => (
          <button
            type="button"
            key={i}
            className={cn(
              "flex flex-col p-2 items-center rounded-full min-w-40 border-2 hover:border-kinemoe-100",
              {
                "border-kinemoe-800": priv !== privacy,
                "border-kinemoe-50": priv === privacy,
              }
            )}
            onClick={() => setPrivacy(priv)}
          >
            <span className="text-kinemoe-100 text-xl">{priv}</span>
          </button>
        ))}
      </div>

      <div className="flex items-center gap-6 mt-12">
        <button
          type="button"
          className="text-green-50 hover:text-green-100 text-xl flex items-center justify-center bg-green-600 hover:bg-green-700 shadow-lg active:shadow-md shadow-green-800 hover:shadow-green-900 active:scale-95 rounded-lg py-3 px-6 outline-none transition-all w-32"
          onClick={() => handleSetActiveStep(SignInStep.notifications)}
        >
          Back
        </button>
        <button
          type="button"
          className="text-green-50 hover:text-green-100 text-xl flex items-center justify-center bg-green-600 hover:bg-green-700 shadow-lg active:shadow-md shadow-green-800 hover:shadow-green-900 active:scale-95 rounded-lg py-3 px-6 outline-none transition-all w-44"
          onClick={() => handleSetActiveStep(SignInStep.done)}
        >
          Set my profile
        </button>
      </div>
    </div>
  );
};
