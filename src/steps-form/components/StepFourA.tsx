import React from "react";
import Input from "@/components/form/Input";
import Select from "@/components/form/Select";
import { GENDER } from "@/resources/contants";
import { useStepsForm } from "@/hooks/useStepsForm";

/**
 * Componente que representa el cuarto paso del formulario para perfiles personales.
 * Este paso permite al usuario ingresar información adicional, como fecha de nacimiento y género.
 * @returns JSX.Element
 */
const StepFourA = () => {
  const {
    handleChangeAction,
    additionalPersonalInfo,
    additionalPersonalInfoError,
    sendStep,
    step,
  } = useStepsForm();
  return (
    <div>
      <Input
        label="Fecha de nacimiento"
        value={additionalPersonalInfo?.date_of_birth}
        error={Boolean(additionalPersonalInfoError.date_of_birth)}
        errorMessage={additionalPersonalInfoError.date_of_birth ?? ""}
        name="date_of_birth"
        type="date"
        onChange={(e) =>
          handleChangeAction({
            key: "additionalPersonalInfo",
            value: e.target.value,
            field: e.target.name,
            type: "date",
          })
        }
        onBlur={(e) => sendStep(step, { [e.target.name]: e.target.value })}
      />
      <Select
        label="Género"
        name="gender"
        value={additionalPersonalInfo?.gender}
        error={Boolean(additionalPersonalInfoError.gender)}
        errorMessage={additionalPersonalInfoError.gender ?? ""}
        options={GENDER}
        onChange={(e) =>
          handleChangeAction({
            key: "additionalPersonalInfo",
            value: e.target.value,
            field: e.target.name,
            type: "select",
          })
        }
        onBlur={(e) => sendStep(step, { [e.target.name]: e.target.value })}
      />
    </div>
  );
};

export default StepFourA;
