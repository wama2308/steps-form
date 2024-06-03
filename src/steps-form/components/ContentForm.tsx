"use client";
import React from "react";
import StepOne from "./StepOne";
import { useStepsForm } from "@/hooks/useStepsForm";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";

/**
 * Componente que representa el contenido del formulario paso a paso.
 * Renderiza el componente correspondiente al paso actual del formulario.
 * @returns JSX.Element
 */
const ContentForm = () => {
  const { step } = useStepsForm();

  return (
    <div
      className="flex flex-col bg-[#f3f4f6] w-full p-4 sm:p-6 border-t border-[#94a3b8] animate-fade-left"
      data-cy="content-steps-form-8877"
    >
      {step === 1 && <StepOne />}
      {step === 2 && <StepTwo />}
      {step === 3 && <StepThree />}
      {step === 4 && <StepFour />}
      {step === 5 && <StepFive />}
    </div>
  );
};

export default ContentForm;
