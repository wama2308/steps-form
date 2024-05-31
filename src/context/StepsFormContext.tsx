import { createContext } from "react";
import { IStepsForm } from "@/steps-form/interfaces/steps-form";

export type StepsFormContextProps = {
  stepsFormState: IStepsForm;
  changeStepAction: (step: number) => void;
};

export const StepsFormContext = createContext<StepsFormContextProps>(
  {} as StepsFormContextProps
);
