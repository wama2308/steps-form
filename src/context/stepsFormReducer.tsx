import type {
  DataSend,
  IHandleChange,
  IHandleErrors,
  IHandleOnblurErrors,
  IStepsForm,
} from "@/steps-form/interfaces/steps-form";

type PayloadAction =
  | { type: "changeStep"; payload: { step: number } }
  | { type: "handleChange"; payload: IHandleChange }
  | { type: "updateStateError"; payload: IHandleErrors }
  | { type: "updateLoading" }
  | { type: "updateStateOnblurError"; payload: IHandleOnblurErrors }
  | { type: "setDataSummary"; payload: DataSend };

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
    case "updateStateOnblurError":
      const { valueErrorOnblur, fieldErrorOnblur, keyErrorOnblur } =
        action.payload;
      return {
        ...state,
        validationErrors: {
          ...state.validationErrors,
          [fieldErrorOnblur]: {
            ...state.validationErrors[fieldErrorOnblur],
            [keyErrorOnblur]: valueErrorOnblur,
          },
        },
      };
    case "updateLoading":
      return {
        ...state,
        loading: !state.loading,
      };
    case "setDataSummary":
      return {
        ...state,
        dataSummary: action.payload,
      };

    default:
      return state;
  }
};
