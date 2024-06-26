import Input from "@/components/form/Input";
import React from "react";
import ContentStepsForm from "./ContentStepsForm";
import { useStepsForm } from "@/hooks/useStepsForm";

/**
 * Componente que representa el primer paso del formulario.
 * Este paso permite al usuario ingresar su nombre completo, email y teléfono.
 * @returns JSX.Element
 */
const StepOne = () => {
  const {
    handleChangeAction,
    personalInfo,
    sendStep,
    step,
    personalInfoError,
  } = useStepsForm();
  return (
    <ContentStepsForm>
      <Input
        label="Nombre completo"
        placeholder="Wilfredo Medina"
        value={personalInfo.full_name}
        error={Boolean(personalInfoError.full_name)}
        errorMessage={personalInfoError.full_name ?? ""}
        name="full_name"
        type="text"
        onChange={(e) =>
          handleChangeAction({
            key: "personalInfo",
            value: e.target.value,
            field: e.target.name,
          })
        }
        onBlur={(e) => sendStep(step, { [e.target.name]: e.target.value })}
        data-cy="input-fullname-steps-form-4455"
      />
      <Input
        label="Email"
        placeholder="test@gmail.com"
        value={personalInfo.email}
        error={Boolean(personalInfoError.email)}
        errorMessage={personalInfoError.email ?? ""}
        name="email"
        type="email"
        onChange={(e) =>
          handleChangeAction({
            key: "personalInfo",
            value: e.target.value,
            field: e.target.name,
          })
        }
        onBlur={(e) => sendStep(step, { [e.target.name]: e.target.value })}
        data-cy="input-email-steps-form-4455"
      />
      <Input
        label="Teléfono"
        placeholder="15551234567"
        value={personalInfo.phone_number}
        error={Boolean(personalInfoError.phone_number)}
        errorMessage={personalInfoError.phone_number ?? ""}
        name="phone_number"
        type="number"
        onChange={(e) =>
          handleChangeAction({
            key: "personalInfo",
            value: e.target.value,
            field: e.target.name,
          })
        }
        onBlur={(e) => sendStep(step, { [e.target.name]: e.target.value })}
        data-cy="input-phone-steps-form-4455"
      />
    </ContentStepsForm>
  );
};

export default StepOne;
