import React from "react";
import Input from "@/components/form/Input";
import Radio from "@/components/form/Radio";
import ContentStepsForm from "./ContentStepsForm";

const StepThree = () => {
  const DATA_RADIOS_STEP_THREE: string[] = ["Personal", "Business"];

  return (
    <ContentStepsForm>
      <Input
        label="Nombre de usuario"
        placeholder="usuariotest"
        error={false}
        errorMessage=""
        name="username"
        type="text"
        // onChange={handleInputChange}
        // onBlur={handleInputBlur}
      />
      <Input
        label="Contraseña"
        error={false}
        errorMessage=""
        name="password"
        type="password"
        // onChange={handleInputChange}
        // onBlur={handleInputBlur}
      />
      <Input
        label="Confirmar contraseña"
        error={false}
        errorMessage=""
        name="confirm_password"
        type="password"
        // onChange={handleInputChange}
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
              label={item}
              error={false}
              errorMessage=""
              // onChange={handleInputChange}
              // onBlur={handleInputBlur}
              name="profile_type"
            />
          ))}
        </>
      </div>
    </ContentStepsForm>
  );
};

export default StepThree;
