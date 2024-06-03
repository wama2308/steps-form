"use client";
import React from "react";
import clsx from "clsx";
import { useStepsForm } from "@/hooks/useStepsForm";

/**
 * Componente que representa el pie de página del formulario paso a paso.
 * Permite navegar entre los diferentes pasos del formulario y enviar el formulario.
 * @returns JSX.Element
 */
const FooterForm = () => {
  const { changeStepAction, step, sendStep, disabledAction } = useStepsForm();
  return (
    <div
      className="flex flex-col gap-4 justify-start items-center px-4 py-4 sm:justify-end sm:flex-row bg-[#f3f4f6] w-full border-t border-[#94a3b8]"
      data-cy="footer-steps-form-8877"
    >
      {step > 1 && (
        <button
          type="button"
          className="w-full sm:w-auto py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
          onClick={() => changeStepAction(step - 1)}
        >
          Atras
        </button>
      )}
      <button
        type="button"
        className={clsx(
          "w-full sm:w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5",
          {
            "pointer-events-none opacity-50": disabledAction(step),
          }
        )}
        onClick={() => sendStep(step)}
        disabled={disabledAction(step)}
        data-cy="button-next-action-4455"
      >
        Siguiente
      </button>
    </div>
  );
};

export default FooterForm;
