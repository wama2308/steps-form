import { useStepsForm } from "@/hooks/useStepsForm";
import clsx from "clsx";
import React from "react";

const ContentStepsForm = ({ children }: { children: React.ReactNode }) => {
  const { actionStep } = useStepsForm();
  return (
    <div
      className={clsx({
        "fade-in-right": actionStep === "next",
        "fade-in-left": actionStep === "back",
      })}
    >
      {children}
    </div>
  );
};

export default ContentStepsForm;
