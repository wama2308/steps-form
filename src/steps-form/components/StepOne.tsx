import Input from "@/components/form/Input";
import React from "react";
import ContentStepsForm from "./ContentStepsForm";

const StepOne = () => {
  return (
    <ContentStepsForm>
      <Input
        label="Nombre completo"
        placeholder="Wilfredo Medina"
        error={false}
        errorMessage=""
        name="full_name"
        type="text"
        // onChange={handleInputChange}
        // onBlur={handleInputBlur}
      />
      <Input
        label="Email"
        placeholder="test@gmail.com"
        error={false}
        errorMessage=""
        name="email"
        type="email"
        // onChange={handleInputChange}
        // onBlur={handleInputBlur}
      />
      <Input
        label="Teléfono"
        placeholder="15551234567"
        error={false}
        errorMessage=""
        name="phone_number"
        type="number"
        // onChange={handleInputChange}
        // onBlur={handleInputBlur}
      />
    </ContentStepsForm>
  );
};

export default StepOne;
