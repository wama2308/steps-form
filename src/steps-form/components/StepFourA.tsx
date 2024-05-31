import React from "react";
import Input from "@/components/form/Input";
import Select from "@/components/form/Select";
import { GENDER } from "@/contants";

const StepFourA = () => {
  return (
    <div>
      <Input
        label="Fecha de nacimiento"
        error={false}
        errorMessage=""
        name="date_of_birth"
        type="date"
        // onChange={handleInputChange}
        // onBlur={handleInputBlur}
      />
      <Select
        label="Género"
        name="gender"
        error={false}
        errorMessage=""
        options={GENDER}
        // onChange={handleInputChange}
        // onBlur={handleInputBlur}
      />
    </div>
  );
};

export default StepFourA;
