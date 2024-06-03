"use client";
import React from "react";
import clsx from "clsx";
import { useStepsForm } from "@/hooks/useStepsForm";

interface PropsStep {
  step: number;
  stepSelected: number;
  isLast: boolean;
}

const Step = ({ step, stepSelected, isLast }: PropsStep) => {
  const stepClasses = clsx(
    "flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0",
    {
      "bg-blue-800 text-white": stepSelected === step || step <= stepSelected,
      "bg-gray-100 text-black": stepSelected !== step && step > stepSelected,
    }
  );

  const connectorClasses = clsx(
    "w-full after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block",
    {
      "after:border-blue-800": stepSelected === step || step <= stepSelected,
      "after:border-gray-100": stepSelected !== step && step > stepSelected,
    }
  );

  return (
    <li className={clsx("flex items-center", !isLast && connectorClasses)}>
      <span className={stepClasses}>{step}</span>
    </li>
  );
};

const HeaderFormRegister = () => {
  const { step: activeStep } = useStepsForm();
  const steps = [1, 2, 3, 4, 5];

  return (
    <div className="flex flex-col w-full items-center gap-7 p-6 text-blue-800">
      <h1 className="text-2xl text-center">Formulario de registro</h1>
      <ol className="flex items-center w-full">
        {steps.map((step, index) => (
          <Step
            key={step}
            step={step}
            stepSelected={activeStep}
            isLast={index === steps.length - 1}
          />
        ))}
      </ol>
    </div>
  );
};

export default HeaderFormRegister;
