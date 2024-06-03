"use client";
import React from "react";
import StepOne from "./StepOne";
import { useStepsForm } from "@/hooks/useStepsForm";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";

const ContentForm = () => {
  const { step } = useStepsForm();

  return (
    <div className="flex flex-col bg-[#f3f4f6] w-full p-4 sm:p-6 border-t border-[#94a3b8] animate-fade-left">
      {step === 1 && <StepOne />}
      {step === 2 && <StepTwo />}
      {step === 3 && <StepThree />}
      {step === 4 && <StepFour />}
      {step === 5 && <StepFive />}
    </div>
  );
};

export default ContentForm;
