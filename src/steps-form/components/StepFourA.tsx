import React from "react";
import Input from "@/components/form/Input";
import Select from "@/components/form/Select";
import { GENDER } from "@/contants";
import { useStepsForm } from "@/hooks/useStepsForm";

const StepFourA = () => {
  const { handleChangeAction, additionalPersonalInfo } = useStepsForm();
  return (
    <div>
      <Input
        label="Fecha de nacimiento"
        error={false}
        value={additionalPersonalInfo?.date_of_birth}
        errorMessage=""
        name="date_of_birth"
        type="date"
        onChange={(e) =>
          handleChangeAction({
            key: "additionalPersonalInfo",
            value: e.target.value,
            field: e.target.name,
          })
        }
        // onBlur={handleInputBlur}
      />
      <Select
        label="Género"
        name="gender"
        value={additionalPersonalInfo?.gender}
        error={false}
        errorMessage=""
        options={GENDER}
        onChange={(e) =>
          handleChangeAction({
            key: "additionalPersonalInfo",
            value: e.target.value,
            field: e.target.name,
          })
        }
        // onBlur={handleInputBlur}
      />
    </div>
  );
};

export default StepFourA;
