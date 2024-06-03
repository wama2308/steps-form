"use client";

import { ReactNode, useReducer } from "react";
import { StepsFormContext } from "./StepsFormContext";
import type {
  Response,
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

let INITIAL_INFO = {
  personalInfo: { ...DEFAULT_PERSONAL_INFO },
  addressInfo: { ...DEFAULT_ADDRESS_INFO },
  accountDetails: { ...DEFAULT_ACCOUNT_DETAILS },
  additionalPersonalInfo: { ...DEFAULT_ADDITIONAL_PERSONAL_INFO },
  businessInfo: { ...DEFAULT_BUSINESS_INFO },
};

/**
 * estado inicial de la aplicacion
 */
const INITIAL_STATE: IStepsForm = {
  step: 1,
  actionStep: "",
  loading: false,
  dataSummary: null,
  openModal: false,
  ...INITIAL_INFO,
  preferences: { ...DEFAULT_PREFERENCES },
  validationErrors: {
    ...INITIAL_INFO,
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

  /**
   * funcion para cambiar el valor de los pasos del formulario
   */
  const changeStepAction = (step: number) => {
    dispatch({ type: "changeStep", payload: { step } });
  };

  /**
   * funcion para cambiar el valor de los campos del formulario, dependiendo del tipo de campo tambien se actualiza el valor
   * del campo que esta dentro del objeto validationErrors
   */
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

  /**
   * Funcion para actualizar los errores en el form
   */
  const handleErrorsAction = (data: IHandleErrors) => {
    dispatch({ type: "updateStateError", payload: data });
  };

  /**
   * Funcion para actualizar los errores en el form con el evento onblur
   */
  const handleOnblurErrorsAction = (data: IHandleOnblurErrors) => {
    dispatch({ type: "updateStateOnblurError", payload: data });
  };

  /**
   * Funcion para actualizar el estado del campo loading
   */
  const setLoadingAction = () => {
    dispatch({ type: "updateLoading" });
  };

  /**
   * Funcion para actualizar la data una vez enviado el formulario
   */
  const updatedDataSummaryAction = (data: Response) => {
    dispatch({ type: "setDataSummary", payload: data });
  };

  /**
   * Funcion para actualizar el valor open para mostrar u ocultar el modal de confirmacion
   */
  const updatedOpenModalAction = (data: { open: boolean }) => {
    dispatch({ type: "setOpenModal", payload: data });
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
        updatedOpenModalAction,
      }}
    >
      {children}
    </StepsFormContext.Provider>
  );
};
