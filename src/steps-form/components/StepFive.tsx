import React from "react";
import Radio from "@/components/form/Radio";
import Checkbox from "@/components/form/Checkbox";
import ContentStepsForm from "./ContentStepsForm";

const StepFive = () => {
  const DATA_RADIOS_STEP_FIVE: string[] = [
    "Online Ads",
    "Friend Referral",
    "Social Media",
    "Other",
  ];
  return (
    <ContentStepsForm>
      <Checkbox
        label="¿Quieres recibir notificaciones vía email?:"
        error={false}
        errorMessage=""
        // onChange={handleInputChange}
        // onBlur={handleInputBlur}
        name="notifications"
      />
      <div className="flex flex-col my-2">
        <label className="text-sm font-medium text-gray-900 mb-3">
          ¿Cómo se enteró de nuestro servicio?
        </label>
        <>
          {DATA_RADIOS_STEP_FIVE.map((item) => (
            <Radio
              key={item}
              label={item}
              error={false}
              errorMessage=""
              // onChange={handleInputChange}
              // onBlur={handleInputBlur}
              name="how_heard"
            />
          ))}
        </>
      </div>
      <Checkbox
        label="Estoy de acuerdo con los términos y condiciones"
        error={false}
        errorMessage=""
        // onChange={handleInputChange}
        // onBlur={handleInputBlur}
        name="terms_agreed"
      />
    </ContentStepsForm>
  );
};

export default StepFive;
