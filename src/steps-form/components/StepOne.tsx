import Input from "@/components/form/Input";
import React from "react";
import ContentStepsForm from "./ContentStepsForm";
import { useStepsForm } from "@/hooks/useStepsForm";

const StepOne = () => {
  const { handleChangeAction, personalInfo } = useStepsForm();
  return (
    <ContentStepsForm>
      <Input
        label="Nombre completo"
        placeholder="Wilfredo Medina"
        value={personalInfo.full_name}
        error={false}
        errorMessage=""
        name="full_name"
        type="text"
        onChange={(e) =>
          handleChangeAction({
            key: "personalInfo",
            value: e.target.value,
            field: e.target.name,
          })
        }
        // onBlur={handleInputBlur}
      />
      <Input
        label="Email"
        placeholder="test@gmail.com"
        value={personalInfo.email}
        error={false}
        errorMessage=""
        name="email"
        type="email"
        onChange={(e) =>
          handleChangeAction({
            key: "personalInfo",
            value: e.target.value,
            field: e.target.name,
          })
        }
        // onBlur={handleInputBlur}
      />
      <Input
        label="Teléfono"
        placeholder="15551234567"
        value={personalInfo.phone_number}
        error={false}
        errorMessage=""
        name="phone_number"
        type="number"
        onChange={(e) =>
          handleChangeAction({
            key: "personalInfo",
            value: e.target.value,
            field: e.target.name,
          })
        }
        // onBlur={handleInputBlur}
      />
    </ContentStepsForm>
  );
};

export default StepOne;
