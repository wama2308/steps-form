import React from "react";
import Radio from "@/components/form/Radio";
import Checkbox from "@/components/form/Checkbox";
import ContentStepsForm from "./ContentStepsForm";
import { useStepsForm } from "@/hooks/useStepsForm";
import { DATA_RADIOS_STEP_FIVE } from "@/resources/contants";

const StepFive = () => {
  const { handleChangeAction, preferences } = useStepsForm();

  return (
    <ContentStepsForm>
      <Checkbox
        name="notifications"
        label="¿Quieres recibir notificaciones vía email?:"
        value={preferences.notifications ? "true " : "false"}
        valueChecked={preferences.notifications}
        error={false}
        errorMessage=""
        onChange={(e) =>
          handleChangeAction({
            key: "preferences",
            value: e.target.checked,
            field: e.target.name,
          })
        }
      />
      <div className="flex flex-col my-2">
        <label className="text-sm font-medium text-gray-900 mb-3">
          ¿Cómo se enteró de nuestro servicio?
        </label>
        <>
          {DATA_RADIOS_STEP_FIVE.map((item) => (
            <Radio
              key={item}
              name="how_heard"
              id={`how_heard_${item.trim()}`}
              value={item}
              valueChecked={preferences.how_heard}
              label={item}
              error={false}
              errorMessage=""
              onChange={(e) =>
                handleChangeAction({
                  key: "preferences",
                  value: item,
                  field: e.target.name,
                })
              }
            />
          ))}
        </>
      </div>
      <Checkbox
        name="terms_agreed"
        label="Estoy de acuerdo con los términos y condiciones"
        value={preferences.notifications ? "true " : "false"}
        valueChecked={preferences.terms_agreed}
        error={false}
        errorMessage=""
        onChange={(e) =>
          handleChangeAction({
            key: "preferences",
            value: e.target.checked,
            field: e.target.name,
          })
        }
      />
    </ContentStepsForm>
  );
};

export default StepFive;
