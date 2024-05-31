import { createContext } from "react";
import type { IHandleChange, IStepsForm } from "@/steps-form/interfaces/steps-form";

export type StepsFormContextProps = {
  stepsFormState: IStepsForm;
  changeStepAction: (step: number) => void;
  handleChangeAction: (data: IHandleChange) => void;
};

export const StepsFormContext = createContext<StepsFormContextProps>(
  {} as StepsFormContextProps
);
