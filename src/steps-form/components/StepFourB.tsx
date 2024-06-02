import React from "react";
import Input from "@/components/form/Input";
import Select from "@/components/form/Select";
import { COMPANY_SIZE } from "@/resources/contants";
import { useStepsForm } from "@/hooks/useStepsForm";

const StepFourB = () => {
  const { handleChangeAction, businessInfo, businessInfoError } = useStepsForm();
  return (
    <div>
      <Input
        label="Nombre de empresa"
        value={businessInfo?.company_name}
        error={Boolean(businessInfoError.company_name)}
        errorMessage={businessInfoError.company_name ?? ""}
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
        error={Boolean(businessInfoError.company_size)}
        errorMessage={businessInfoError.company_size ?? ""}
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
        error={Boolean(businessInfoError.role_in_company)}
        errorMessage={businessInfoError.role_in_company ?? ""}
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
