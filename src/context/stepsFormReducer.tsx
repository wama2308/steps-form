import type {
  IHandleChange,
  IHandleErrors,
  IStepsForm,
} from "@/steps-form/interfaces/steps-form";

type PayloadAction =
  | { type: "changeStep"; payload: { step: number } }
  | { type: "handleChange"; payload: IHandleChange }
  | { type: "updateStateError"; payload: IHandleErrors };

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
    case "updateStateError":
      const { valueError, fieldError } = action.payload;
      return {
        ...state,
        validationErrors: {
          ...state.validationErrors,
          [fieldError]: valueError,
        },
      };

    default:
      return state;
  }
};
