import type {
  IHandleChange,
  IStepsForm,
} from "@/steps-form/interfaces/steps-form";

type PayloadAction =
  | { type: "changeStep"; payload: { step: number } }
  | { type: "handleChange"; payload: IHandleChange };

export const stepsFormReducer = (
  state: IStepsForm,
  action: PayloadAction
): IStepsForm => {
  switch (action.type) {
    case "changeStep":
      return {
        ...state,
        step: action.payload.step,
        actionStep: state.step < action.payload.step ? "next" : "back",
      };
    case "handleChange":
      const { key, value, field } = action.payload;
      return {
        ...state,
        [key]: { ...state[key], [field]: value },
      };

    default:
      return state;
  }
};
