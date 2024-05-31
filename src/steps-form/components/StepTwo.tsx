import React from "react";
import Input from "@/components/form/Input";
import Select from "@/components/form/Select";
import ContentStepsForm from "./ContentStepsForm";
import { COUNTRIES } from "@/contants";
import { useStepsForm } from "@/hooks/useStepsForm";

const StepTwo = () => {
  const { handleChangeAction, addressInfo } = useStepsForm();
  return (
    <ContentStepsForm>
      <Input
        label="Dirección"
        placeholder="Calle nueva nro 5"
        value={addressInfo.street_address}
        error={false}
        errorMessage=""
        name="street_address"
        type="text"
        onChange={(e) =>
          handleChangeAction({
            key: "addressInfo",
            value: e.target.value,
            field: e.target.name,
          })
        }
        // onBlur={handleInputBlur}
      />
      <Input
        label="Ciudad"
        placeholder="Madrid"
        value={addressInfo.city}
        error={false}
        errorMessage=""
        name="city"
        type="text"
        onChange={(e) =>
          handleChangeAction({
            key: "addressInfo",
            value: e.target.value,
            field: e.target.name,
          })
        }
        // onBlur={handleInputBlur}
      />
      <Input
        label="Código postal"
        placeholder="28001"
        value={addressInfo.postal_code}
        error={false}
        errorMessage=""
        name="postal_code"
        type="text"
        onChange={(e) =>
          handleChangeAction({
            key: "addressInfo",
            value: e.target.value,
            field: e.target.name,
          })
        }
        // onBlur={handleInputBlur}
      />
      <Select
        label="País"
        name="country"
        value={addressInfo.country}
        error={false}
        errorMessage=""
        options={COUNTRIES}
        onChange={(e) =>
          handleChangeAction({
            key: "addressInfo",
            value: e.target.value,
            field: e.target.name,
          })
        }
        // onBlur={handleInputBlur}
      />
    </ContentStepsForm>
  );
};

export default StepTwo;
