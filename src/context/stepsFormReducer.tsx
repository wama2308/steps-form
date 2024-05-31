import { IStepsForm } from "@/steps-form/interfaces/steps-form";

type TodoAction = { type: "changeStep"; payload: { step: number } };

export const stepsFormReducer = (
  state: IStepsForm,
  action: TodoAction
): IStepsForm => {
  switch (action.type) {
    case "changeStep":
      return {
        ...state,
        step: action.payload.step,
        actionStep: state.step < action.payload.step ? "next" : "back",
      };

    default:
      return state;
  }
};
