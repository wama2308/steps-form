import { createContext } from "react";
import type {
  Response,
  IHandleChange,
  IHandleErrors,
  IHandleOnblurErrors,
  IStepsForm,
} from "@/steps-form/interfaces/steps-form";

export type StepsFormContextProps = {
  stepsFormState: IStepsForm;
  changeStepAction: (step: number) => void;
  handleChangeAction: (data: IHandleChange) => void;
  handleErrorsAction: (data: IHandleErrors) => void;
  handleOnblurErrorsAction: (data: IHandleOnblurErrors) => void;
  setLoadingAction: () => void;
  updatedDataSummaryAction: (data: Response) => void;
  updatedOpenModalAction: (data: { open: boolean }) => void;
};

/**
 * Contexto de React que proporciona acceso a las funciones y el estado relacionados con el formulario.
 */
export const StepsFormContext = createContext<StepsFormContextProps>(
  {} as StepsFormContextProps
);
