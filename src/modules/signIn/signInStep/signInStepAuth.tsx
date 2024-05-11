/* eslint-disable @next/next/no-img-element */
"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import { SignInStep } from "../signInStepFormTypes";
import { signIn, useSession } from "next-auth/react";

type Props = {
  setActiveStep: (step: SignInStep) => void;
};

export const SignInStepAuth = ({ setActiveStep }: Props) => {
  const session = useSession();

  const [formData, setFormData] = useState<{ email: string; password: string }>(
    {
      email: "",
      password: "",
    }
  );

  const handleSetActiveStep = useCallback(
    (step: SignInStep) => {
      setActiveStep(step);
    },
    [setActiveStep]
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSetActiveStep(SignInStep.artist);
  };

  useEffect(() => {
    if (!session.data) return;

    handleSetActiveStep(SignInStep.artist);
  }, [session, handleSetActiveStep]);

  return (
    <div className="flex rounded-xl overflow-hidden bg-kinemoe-950 w-4/5 h-[80vh]">
      <div
        className="flex flex-1 justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/images/assets/auth-cover.jpg)",
        }}
      >
        <h1 className="text-kinemoe-50 text-7xl font-black mt-36 drop-shadow-xl">
          KINE<span className="text-red-600">MOE</span>
        </h1>
      </div>
      <div className="flex flex-1">
        <div className="flex flex-1 flex-col p-32">
          <h2 className="text-3xl text-kinemoe-50 font-black mb-8 text-center">
            Welcome!
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6 mb-8">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              value={formData.email}
              onChange={(event) => {
                setFormData((prevState) => {
                  return {
                    ...prevState,
                    email: event.target.value,
                  };
                });
              }}
              className="w-full rounded-full py-3 px-6 outline-none bg-kinemoe-900/30 hover:bg-kinemoe-900/60 active:bg-kinemoe-900/60 text-kinemoe-50 text-lg font-semibold"
            ></input>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={formData.password}
              onChange={(event) => {
                setFormData((prevState) => {
                  return {
                    ...prevState,
                    password: event.target.value,
                  };
                });
              }}
              className="w-full rounded-full py-3 px-6 outline-none bg-kinemoe-900/30 hover:bg-kinemoe-900/60 active:bg-kinemoe-900/60 text-kinemoe-50 text-lg font-semibold"
            ></input>
            <button
              type="submit"
              className="text-green-50 hover:text-green-100 text-xl flex items-center justify-center bg-green-600 hover:bg-green-700 shadow-lg active:shadow-md shadow-green-800 hover:shadow-green-900 active:scale-95 rounded-full py-3 px-6 outline-none transition-all w-full"
            >
              Log in
            </button>
          </form>

          <div className="flex justify-center border-b border-kinemoe-900 w-3/4 mx-auto relative mb-12">
            <span className="p-4 bg-kinemoe-950 text-sm text-kinemoe-100 -mb-7">
              OR
            </span>
          </div>

          <button
            type="button"
            className="relative mb-6 text-kinemoe-50 hover:text-kinemoe-100 text-xl flex items-center justify-center bg-kinemoe-900/30 hover:bg-kinemoe-900/60 shadow-lg active:shadow-md active:scale-95 rounded-full py-3 px-6 outline-none transition-all w-full"
            onClick={() => signIn("google")}
          >
            <img
              src="/images/icons/google.svg"
              alt="google"
              className="w-6 h-6 absolute top-[14px] left-4"
            />
            Sign up with Google
          </button>
          <button
            type="button"
            className="relative text-kinemoe-50 hover:text-kinemoe-100 text-xl flex items-center justify-center bg-kinemoe-900/30 hover:bg-kinemoe-900/60 shadow-lg active:shadow-md active:scale-95 rounded-full py-3 px-6 outline-none transition-all w-full"
            onClick={() => signIn("facebook", { callbackUrl: "/auth/signin" })}
          >
            <img
              src="/images/icons/facebook.svg"
              alt="facebook"
              className="w-6 h-6 absolute top-[14px] left-4"
            />
            Sign up with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};
