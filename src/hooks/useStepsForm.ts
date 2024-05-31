import { useContext } from "react";
import { StepsFormContext } from "@/context/StepsFormContext";

export const useStepsForm = () => {
  const { stepsFormState, changeStepAction, handleChangeAction } =
    useContext(StepsFormContext);
  const {
    step,
    actionStep,
    accountDetails,
    personalInfo,
    addressInfo,
    additionalPersonalInfo,
    businessInfo,
    preferences,
  } = stepsFormState;
  const { profile_type } = accountDetails;

  return {
    data: stepsFormState,
    step,
    actionStep,
    changeStepAction,
    profile_type,
    handleChangeAction,
    personalInfo,
    addressInfo,
    accountDetails,
    additionalPersonalInfo,
    businessInfo,
    preferences,
  };
};
