import type {
  Response,
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
  | { type: "setDataSummary"; payload: Response }
  | { type: "setOpenModal"; payload: { open: boolean } };

/**
 * Reductor de Redux que maneja las acciones relacionadas con un formulario de pasos
 */
export const stepsFormReducer = (
  state: IStepsForm,
  action: PayloadAction
): IStepsForm => {
  switch (action.type) {
    /**
     * Cambia el paso actual del formulario
     */
    case "changeStep":
      return {
        ...state,
        step: action.payload.step,
        actionStep: state.step < action.payload.step ? "next" : "back",
      };
    /**
     * Maneja los cambios en los datos del formulario
     */
    case "handleChange":
      const { key, value, field } = action.payload;
      return {
        ...state,
        [key]: { ...state[key], [field]: value },
      };
    /**
     * Actualiza el estado de los errores de validación del formulario
     */
    case "updateStateError":
      const { valueError, fieldError } = action.payload;
      return {
        ...state,
        validationErrors: {
          ...state.validationErrors,
          [fieldError]: valueError,
        },
      };
    /**
     * Maneja los cambios en los datos del formulario con el evento onblur
     */
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
    /**
     * Actualiza el estado de carga del formulario
     */
    case "updateLoading":
      return {
        ...state,
        loading: !state.loading,
      };
    /**
     * Establece el resumen de datos del formulario
     */
    case "setDataSummary":
      return {
        ...state,
        dataSummary: action.payload,
      };
    /**
     * Establece el estado de apertura del modal del formulario
     */
    case "setOpenModal":
      return {
        ...state,
        openModal: action.payload.open,
      };

    default:
      return state;
  }
};
