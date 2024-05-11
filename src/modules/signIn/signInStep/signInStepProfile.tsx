"use client";

import { FormEvent, useCallback, useState } from "react";
import { SignInStep } from "../signInStepFormTypes";
import { persistValue } from "@/utils/storage";
import { AvatarUpload } from "@/shared/avatarUpload";
import { Profile } from "@/types/userProfile";

type Props = {
  setActiveStep: (step: SignInStep) => void;
};

export const SignInStepProfile = ({ setActiveStep }: Props) => {
  const [profile, setProfile] = useState<Profile>({
    image: "",
    username: "",
    password: "",
    confirmPassword: "",
    bio: "",
  });

  const handleSetActiveStep = useCallback(
    (step: SignInStep) => {
      persistValue("user.profile", profile);
      setActiveStep(step);
    },
    [profile, setActiveStep]
  );

  const handleImageUpload = useCallback((img: string) => {
    setProfile((prevProfile) => {
      return {
        ...prevProfile,
        image: img,
      };
    });
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    persistValue("user.profile", profile);
  };

  return (
    <div className="flex flex-col justify-center items-center rounded-xl overflow-hidden bg-kinemoe-950 w-4/5 h-[80vh]">
      <h4 className="text-kinemoe-50 text-2xl font-bold mb-12">
        Setup Profile:
      </h4>

      <div className="flex gap-24 items-center w-2/3 px-8">
        <AvatarUpload onImageUpload={handleImageUpload} />
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 flex-1">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            value={profile.username}
            onChange={(event) => {
              setProfile((prevProfile) => {
                return {
                  ...prevProfile,
                  username: event.target.value,
                };
              });
            }}
            className="w-full rounded-lg py-2 px-4 outline-none"
          ></input>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={profile.password}
            onChange={(event) => {
              setProfile((prevProfile) => {
                return {
                  ...prevProfile,
                  password: event.target.value,
                };
              });
            }}
            className="w-full rounded-lg py-2 px-4 outline-none"
          ></input>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password"
            value={profile.confirmPassword}
            onChange={(event) => {
              setProfile((prevProfile) => {
                return {
                  ...prevProfile,
                  confirmPassword: event.target.value,
                };
              });
            }}
            className="w-full rounded-lg py-2 px-4 outline-none"
          ></input>
          <textarea
            name="bio"
            id="bio"
            placeholder="Tell us about yourself.."
            value={profile.bio}
            onChange={(event) => {
              setProfile((prevProfile) => {
                return {
                  ...prevProfile,
                  bio: event.target.value,
                };
              });
            }}
            className="w-full h-24 rounded-lg py-2 px-4 outline-none"
          ></textarea>
        </form>
      </div>

      <div className="flex items-center gap-6 mt-12">
        <button
          type="button"
          className="text-green-50 hover:text-green-100 text-xl flex items-center justify-center bg-green-600 hover:bg-green-700 shadow-lg active:shadow-md shadow-green-800 hover:shadow-green-900 active:scale-95 rounded-lg py-3 px-6 outline-none transition-all w-32"
          onClick={() => handleSetActiveStep(SignInStep.subscription)}
        >
          Back
        </button>
        <button
          type="button"
          className="text-green-50 hover:text-green-100 text-xl flex items-center justify-center bg-green-600 hover:bg-green-700 shadow-lg active:shadow-md shadow-green-800 hover:shadow-green-900 active:scale-95 rounded-lg py-3 px-6 outline-none transition-all w-32"
          onClick={() => handleSetActiveStep(SignInStep.cultural)}
        >
          Next
        </button>
      </div>
    </div>
  );
};
