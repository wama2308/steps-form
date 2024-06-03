import { useStepsForm } from "@/hooks/useStepsForm";
import clsx from "clsx";
import React from "react";

/**
 * Componente que envuelve los pasos del formulario.
 * Aplica animaciones de entrada dependiendo de la acción del paso (avance o retroceso).
 * @param children Los elementos hijos que se renderizarán dentro de ContentStepsForm.
 * @returns JSX.Element
 */
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
