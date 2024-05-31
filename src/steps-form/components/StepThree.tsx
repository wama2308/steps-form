import React from "react";
import Input from "@/components/form/Input";
import Radio from "@/components/form/Radio";
import ContentStepsForm from "./ContentStepsForm";
import { useStepsForm } from "@/hooks/useStepsForm";

const StepThree = () => {
  const { handleChangeAction, accountDetails } = useStepsForm();
  const DATA_RADIOS_STEP_THREE: string[] = ["Personal", "Business"];

  return (
    <ContentStepsForm>
      <Input
        label="Nombre de usuario"
        placeholder="usuariotest"
        value={accountDetails.username}
        error={false}
        errorMessage=""
        name="username"
        type="text"
        onChange={(e) =>
          handleChangeAction({
            key: "accountDetails",
            value: e.target.value,
            field: e.target.name,
          })
        }
        // onBlur={handleInputBlur}
      />
      <Input
        label="Contraseña"
        error={false}
        value={accountDetails.password}
        errorMessage=""
        name="password"
        type="password"
        onChange={(e) =>
          handleChangeAction({
            key: "accountDetails",
            value: e.target.value,
            field: e.target.name,
          })
        }
        // onBlur={handleInputBlur}
      />
      <Input
        label="Confirmar contraseña"
        error={false}
        value={accountDetails.confirm_password}
        errorMessage=""
        name="confirm_password"
        type="password"
        onChange={(e) =>
          handleChangeAction({
            key: "accountDetails",
            value: e.target.value,
            field: e.target.name,
          })
        }
        // onBlur={handleInputBlur}
      />
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-900 mb-3">
          Perfil de usuario
        </label>
        <>
          {DATA_RADIOS_STEP_THREE.map((item) => (
            <Radio
              key={item}
              name="profile_type"
              id={`profile_type_${item.trim()}`}
              value={item}
              label={item}
              error={false}
              errorMessage=""
              onChange={(e) =>
                handleChangeAction({
                  key: "accountDetails",
                  value: item,
                  field: e.target.name,
                })
              }
            />
          ))}
        </>
      </div>
    </ContentStepsForm>
  );
};

export default StepThree;
