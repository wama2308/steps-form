import React from "react";
import clsx from "clsx";
import Input from "@/components/form/Input";
import Radio from "@/components/form/Radio";
import ContentStepsForm from "./ContentStepsForm";
import { useStepsForm } from "@/hooks/useStepsForm";
import { DATA_RADIOS_STEP_THREE } from "@/resources/contants";

const StepThree = () => {
  const {
    handleChangeAction,
    accountDetails,
    accountDetailsError,
    sendStep,
    step,
  } = useStepsForm();

  return (
    <ContentStepsForm>
      <Input
        label="Nombre de usuario"
        placeholder="usuariotest"
        value={accountDetails.username}
        error={Boolean(accountDetailsError.username)}
        errorMessage={accountDetailsError.username ?? ""}
        name="username"
        type="text"
        onChange={(e) =>
          handleChangeAction({
            key: "accountDetails",
            value: e.target.value,
            field: e.target.name,
          })
        }
        // onBlur={(e) => sendStep(step, { [e.target.name]: e.target.value })}
      />
      <Input
        label="Contraseña"
        value={accountDetails.password}
        error={Boolean(accountDetailsError.password)}
        errorMessage={accountDetailsError.password ?? ""}
        name="password"
        type="text"
        onChange={(e) =>
          handleChangeAction({
            key: "accountDetails",
            value: e.target.value,
            field: e.target.name,
          })
        }
        // onBlur={(e) => sendStep(step, { [e.target.name]: e.target.value })}
      />
      <Input
        label="Confirmar contraseña"
        value={accountDetails.confirm_password}
        error={Boolean(accountDetailsError.confirm_password)}
        errorMessage={accountDetailsError.confirm_password ?? ""}
        name="confirm_password"
        type="text"
        onChange={(e) =>
          handleChangeAction({
            key: "accountDetails",
            value: e.target.value,
            field: e.target.name,
          })
        }
        // onBlur={(e) => sendStep(step, { [e.target.name]: e.target.value })}
      />
      <div className="flex flex-col">
        <label
          className={clsx("text-sm font-medium text-gray-900 mb-3", {
            "text-red-500": Boolean(accountDetailsError.profile_type),
          })}
        >
          Perfil de usuario
        </label>
        <>
          {DATA_RADIOS_STEP_THREE.map((item) => (
            <Radio
              key={item}
              name="profile_type"
              id={`profile_type_${item.trim()}`}
              value={item}
              valueChecked={accountDetails.profile_type}
              label={item}
              error={Boolean(accountDetailsError.profile_type)}
              onChange={(e) =>
                handleChangeAction({
                  key: "accountDetails",
                  value: item,
                  field: e.target.name,
                  type: "radio",
                })
              }
            />
          ))}
        </>
        {Boolean(accountDetailsError.profile_type) && (
          <p className="text-xs text-red-500">
            {accountDetailsError.profile_type ?? ""}
          </p>
        )}
      </div>
    </ContentStepsForm>
  );
};

export default StepThree;
