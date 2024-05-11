"use client";

import { useCallback, useState } from "react";
import { SignInStep } from "./signInStepFormTypes";
import { SignInStepArtist } from "./signInStep/signInStepArtist";
import { SignInStepInterests } from "./signInStep/signInStepInterests";
import { SignInStepExperience } from "./signInStep/signInStepExperience";
import { SignInStepSubscription } from "./signInStep/signInStepSubscription";
import { SignInStepProfile } from "./signInStep/signInStepProfile";
import { SignInStepCultural } from "./signInStep/signInStepCultural";
import { SignInStepRecomendations } from "./signInStep/signInStepRecomendations";
import { SignInStepNotifications } from "./signInStep/signInStepNotifications";
import { SignInStepPrivacy } from "./signInStep/signInStepPrivacy";
import { SignInStepAuth } from "./signInStep/signInStepAuth";

export const SignInStepForm = () => {
  const [activeStep, setActiveStep] = useState<SignInStep>(SignInStep.auth);

  const handleSetActiveStep = useCallback((step: SignInStep) => {
    setActiveStep(step);
  }, []);

  switch (activeStep) {
    case SignInStep.done:
      return <></>;
    case SignInStep.artist:
      return <SignInStepArtist setActiveStep={handleSetActiveStep} />;
    case SignInStep.interests:
      return <SignInStepInterests setActiveStep={handleSetActiveStep} />;
    case SignInStep.experience:
      return <SignInStepExperience setActiveStep={handleSetActiveStep} />;
    case SignInStep.subscription:
      return <SignInStepSubscription setActiveStep={handleSetActiveStep} />;
    case SignInStep.profile:
      return <SignInStepProfile setActiveStep={handleSetActiveStep} />;
    case SignInStep.cultural:
      return <SignInStepCultural setActiveStep={handleSetActiveStep} />;
    case SignInStep.recomendations:
      return <SignInStepRecomendations setActiveStep={handleSetActiveStep} />;
    case SignInStep.notifications:
      return <SignInStepNotifications setActiveStep={handleSetActiveStep} />;
    case SignInStep.privacy:
      return <SignInStepPrivacy setActiveStep={handleSetActiveStep} />;
    default:
      return <SignInStepAuth setActiveStep={handleSetActiveStep} />;
  }
};
