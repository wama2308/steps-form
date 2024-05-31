import React from "react";
import { useStepsForm } from "@/hooks/useStepsForm";
import StepFourA from "./StepFourA";
import StepFourB from "./StepFourB";
import ContentStepsForm from "./ContentStepsForm";

const StepFour = () => {
  const { profile_type } = useStepsForm();
  return (
    <ContentStepsForm>
      {profile_type === "Personal" ? <StepFourA /> : <StepFourB />}
    </ContentStepsForm>
  );
};

export default StepFour;
