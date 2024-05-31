import React from "react";
import Input from "@/components/form/Input";
import Select from "@/components/form/Select";
import { COMPANY_SIZE } from "@/contants";

const StepFourB = () => {
  return (
    <div>
      <Input
        label="Nombre de empresa"
        error={false}
        errorMessage=""
        name="company_name"
        type="text"
        // onChange={handleInputChange}
        // onBlur={handleInputBlur}
      />
      <Select
        label="Tamaño de la empresa"
        name="company_size"
        error={false}
        errorMessage=""
        options={COMPANY_SIZE}
        // onChange={handleInputChange}
        // onBlur={handleInputBlur}
      />
      <Input
        label="Rol en la empresa"
        error={false}
        errorMessage=""
        name="role_in_company"
        type="text"
        // onChange={handleInputChange}
        // onBlur={handleInputBlur}
      />
    </div>
  );
};

export default StepFourB;
