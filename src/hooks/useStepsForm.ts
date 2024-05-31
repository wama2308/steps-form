import { useContext } from "react";
import { StepsFormContext } from "@/context/StepsFormContext";

export const useStepsForm = () => {
  const { stepsFormState, changeStepAction } = useContext(StepsFormContext);
  const { step, actionStep, accountDetails } = stepsFormState;
  const { profile_type } = accountDetails;

  return {
    data: stepsFormState,
    step,
    actionStep,
    changeStepAction,
    profile_type,
  };
};
