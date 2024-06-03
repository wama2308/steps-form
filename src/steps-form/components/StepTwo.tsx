import React from "react";
import Input from "@/components/form/Input";
import Select from "@/components/form/Select";
import ContentStepsForm from "./ContentStepsForm";
import { COUNTRIES } from "@/resources/contants";
import { useStepsForm } from "@/hooks/useStepsForm";

/**
 * Componente que representa el segundo paso del formulario.
 * Este paso permite al usuario ingresar detalles de dirección, como la dirección, ciudad, código postal y país.
 * @returns JSX.Element
 */
const StepTwo = () => {
  const { handleChangeAction, addressInfo, addressInfoError, sendStep, step } =
    useStepsForm();
  return (
    <ContentStepsForm>
      <Input
        label="Dirección"
        placeholder="Calle nueva nro 5"
        value={addressInfo.street_address}
        error={Boolean(addressInfoError.street_address)}
        errorMessage={addressInfoError.street_address ?? ""}
        name="street_address"
        type="text"
        onChange={(e) =>
          handleChangeAction({
            key: "addressInfo",
            value: e.target.value,
            field: e.target.name,
          })
        }
        onBlur={(e) => sendStep(step, { [e.target.name]: e.target.value })}
      />
      <Input
        label="Ciudad"
        placeholder="Madrid"
        value={addressInfo.city}
        error={Boolean(addressInfoError.city)}
        errorMessage={addressInfoError.city ?? ""}
        name="city"
        type="text"
        onChange={(e) =>
          handleChangeAction({
            key: "addressInfo",
            value: e.target.value,
            field: e.target.name,
          })
        }
        onBlur={(e) => sendStep(step, { [e.target.name]: e.target.value })}
      />
      <Input
        label="Código postal"
        placeholder="28001"
        value={addressInfo.postal_code}
        error={Boolean(addressInfoError.postal_code)}
        errorMessage={addressInfoError.postal_code ?? ""}
        name="postal_code"
        type="text"
        onChange={(e) =>
          handleChangeAction({
            key: "addressInfo",
            value: e.target.value,
            field: e.target.name,
          })
        }
        onBlur={(e) => sendStep(step, { [e.target.name]: e.target.value })}
      />
      <Select
        label="País"
        name="country"
        value={addressInfo.country}
        error={Boolean(addressInfoError.country)}
        errorMessage={addressInfoError.country ?? ""}
        options={COUNTRIES}
        onChange={(e) => {
          handleChangeAction({
            key: "addressInfo",
            value: e.target.value,
            field: e.target.name,
            type: "select",
          });
        }}
        onBlur={(e) => sendStep(step, { [e.target.name]: e.target.value })}
      />
    </ContentStepsForm>
  );
};

export default StepTwo;
