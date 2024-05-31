import React from "react";
import Input from "@/components/form/Input";
import Select from "@/components/form/Select";
import ContentStepsForm from "./ContentStepsForm";
import { COUNTRIES } from "@/contants";

const StepTwo = () => {
  return (
    <ContentStepsForm>
      <Input
        label="Dirección"
        placeholder="Calle nueva nro 5"
        error={false}
        errorMessage=""
        name="street_address"
        type="text"
        // onChange={handleInputChange}
        // onBlur={handleInputBlur}
      />
      <Input
        label="Ciudad"
        placeholder="Madrid"
        error={false}
        errorMessage=""
        name="city"
        type="text"
        // onChange={handleInputChange}
        // onBlur={handleInputBlur}
      />
      <Input
        label="Código postal"
        placeholder="28001"
        error={false}
        errorMessage=""
        name="postal_code"
        type="text"
        // onChange={handleInputChange}
        // onBlur={handleInputBlur}
      />
      <Select
        label="Nombre completo"
        name="country"
        error={false}
        errorMessage=""
        options={COUNTRIES}
        // onChange={handleInputChange}
        // onBlur={handleInputBlur}
      />
    </ContentStepsForm>
  );
};

export default StepTwo;
