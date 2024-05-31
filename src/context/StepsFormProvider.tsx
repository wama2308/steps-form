"use client";

import { ReactNode, useReducer } from "react";
import { StepsFormContext } from "./StepsFormContext";
import { IStepsForm } from "@/steps-form/interfaces/steps-form";
import { stepsFormReducer } from "./stepsFormReducer";

const INITIAL_STATE: IStepsForm = {
  step: 1,
  actionStep: "",
  personalInfo: {
    full_name: "",
    email: "",
    phone_number: "",
  },
  addressInfo: {
    street_address: "",
    city: "",
    postal_code: "",
    country: "",
  },
  accountDetails: {
    username: "",
    password: "",
    confirm_password: "",
    profile_type: "Business",
  },
  additionalPersonalInfo: {
    date_of_birth: "",
    gender: "",
  },
  businessInfo: {
    company_name: "",
    company_size: "",
    role_in_company: "",
  },
  preferences: {
    notifications: false,
    how_heard: "",
    terms_agreed: false,
  },
};

interface Props {
  children: ReactNode;
}

export const StepsFormProvider = ({ children }: Props) => {
  const [stepsFormState, dispatch] = useReducer(
    stepsFormReducer,
    INITIAL_STATE
  );

  const changeStepAction = (step: number) => {
    dispatch({ type: "changeStep", payload: { step } });
  };

  return (
    <StepsFormContext.Provider
      value={{
        stepsFormState,
        changeStepAction,
      }}
    >
      {children}
    </StepsFormContext.Provider>
  );
};
