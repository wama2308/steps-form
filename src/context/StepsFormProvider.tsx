"use client";

import { ReactNode, useReducer } from "react";
import { StepsFormContext } from "./StepsFormContext";
import type {
  DataSend,
  IHandleChange,
  IHandleErrors,
  IHandleOnblurErrors,
  IStepsForm,
} from "@/steps-form/interfaces/steps-form";
import { stepsFormReducer } from "./stepsFormReducer";
import {
  DEFAULT_PERSONAL_INFO,
  DEFAULT_ADDRESS_INFO,
  DEFAULT_ACCOUNT_DETAILS,
  DEFAULT_ADDITIONAL_PERSONAL_INFO,
  DEFAULT_BUSINESS_INFO,
  DEFAULT_PREFERENCES,
  DEFAULT_PREFERENCES_ERROR,
} from "@/resources/contants";

const INITIAL_STATE: IStepsForm = {
  step: 1,
  actionStep: "",
  loading: false,
  dataSummary: null,
  personalInfo: { ...DEFAULT_PERSONAL_INFO },
  addressInfo: { ...DEFAULT_ADDRESS_INFO },
  accountDetails: { ...DEFAULT_ACCOUNT_DETAILS },
  additionalPersonalInfo: { ...DEFAULT_ADDITIONAL_PERSONAL_INFO },
  businessInfo: { ...DEFAULT_BUSINESS_INFO },
  preferences: { ...DEFAULT_PREFERENCES },
  validationErrors: {
    personalInfo: { ...DEFAULT_PERSONAL_INFO },
    addressInfo: { ...DEFAULT_ADDRESS_INFO },
    accountDetails: { ...DEFAULT_ACCOUNT_DETAILS },
    additionalPersonalInfo: { ...DEFAULT_ADDITIONAL_PERSONAL_INFO },
    businessInfo: { ...DEFAULT_BUSINESS_INFO },
    preferences: { ...DEFAULT_PREFERENCES_ERROR },
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

  const handleChangeAction = (data: IHandleChange) => {
    dispatch({ type: "handleChange", payload: data });
    if (
      data.value &&
      data.type &&
      ["select", "radio", "checkbox", "date"].includes(data.type)
    ) {
      dispatch({
        type: "updateStateOnblurError",
        payload: {
          valueErrorOnblur: "",
          fieldErrorOnblur: data.key,
          keyErrorOnblur: data.field,
        },
      });
    }
  };

  const handleErrorsAction = (data: IHandleErrors) => {
    dispatch({ type: "updateStateError", payload: data });
  };

  const handleOnblurErrorsAction = (data: IHandleOnblurErrors) => {
    dispatch({ type: "updateStateOnblurError", payload: data });
  };

  const setLoadingAction = () => {
    dispatch({ type: "updateLoading" });
  };

  const updatedDataSummaryAction = (data: DataSend) => {
    dispatch({ type: "setDataSummary", payload: data });
  };

  return (
    <StepsFormContext.Provider
      value={{
        stepsFormState,
        changeStepAction,
        handleChangeAction,
        handleErrorsAction,
        handleOnblurErrorsAction,
        setLoadingAction,
        updatedDataSummaryAction,
      }}
    >
      {children}
    </StepsFormContext.Provider>
  );
};
