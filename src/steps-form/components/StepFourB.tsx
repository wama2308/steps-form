import React from "react";
import Input from "@/components/form/Input";
import Select from "@/components/form/Select";
import { COMPANY_SIZE } from "@/contants";
import { useStepsForm } from "@/hooks/useStepsForm";

const StepFourB = () => {
  const { handleChangeAction, businessInfo } = useStepsForm();
  return (
    <div>
      <Input
        label="Nombre de empresa"
        error={false}
        value={businessInfo?.company_name}
        errorMessage=""
        name="company_name"
        type="text"
        onChange={(e) =>
          handleChangeAction({
            key: "businessInfo",
            value: e.target.value,
            field: e.target.name,
          })
        }
        // onBlur={handleInputBlur}
      />
      <Select
        label="Tamaño de la empresa"
        name="company_size"
        value={businessInfo?.company_size}
        error={false}
        errorMessage=""
        options={COMPANY_SIZE}
        onChange={(e) =>
          handleChangeAction({
            key: "businessInfo",
            value: e.target.value,
            field: e.target.name,
          })
        }
        // onBlur={handleInputBlur}
      />
      <Input
        label="Rol en la empresa"
        value={businessInfo?.role_in_company}
        error={false}
        errorMessage=""
        name="role_in_company"
        type="text"
        onChange={(e) =>
          handleChangeAction({
            key: "businessInfo",
            value: e.target.value,
            field: e.target.name,
          })
        }
        // onBlur={handleInputBlur}
      />
    </div>
  );
};

export default StepFourB;
