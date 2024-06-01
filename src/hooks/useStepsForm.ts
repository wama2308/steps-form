import { useContext } from "react";
import { StepsFormContext } from "@/context/StepsFormContext";
import {
  IAccountDetails,
  IAddressInfo,
  type IPersonalInfo,
} from "@/steps-form/interfaces/steps-form";
import { hasErrors, validateSteps } from "@/utils";
import {
  validateSchemaAccountDetails,
  validateSchemaAddressInfo,
  validateSchemaPersonalInfo,
} from "@/resources/schemasValidator";

export const useStepsForm = () => {
  const {
    stepsFormState,
    changeStepAction,
    handleChangeAction,
    handleErrorsAction,
    handleOnblurErrorsAction,
  } = useContext(StepsFormContext);
  const {
    step,
    actionStep,
    accountDetails,
    personalInfo,
    addressInfo,
    additionalPersonalInfo,
    businessInfo,
    preferences,
    validationErrors,
  } = stepsFormState;
  const { profile_type } = accountDetails;
  const {
    personalInfo: personalInfoError,
    addressInfo: addressInfoError,
    accountDetails: accountDetailsError,
  } = validationErrors;

  const sendStep = (step: number, data?: Record<string, string>) => {
    let errors: Partial<IPersonalInfo | IAddressInfo | IAccountDetails>;
    console.log(data);
    switch (step) {
      case 1:
        errors = validateSteps<IPersonalInfo>(
          data ? data : personalInfo,
          validateSchemaPersonalInfo
        );
        if (!data) {
          handleErrorsAction({
            valueError: errors,
            fieldError: "personalInfo",
          });
        } else {
          handleOnblurErrorsAction({
            valueErrorOnblur: getKeyValueDataObject(errors).value,
            fieldErrorOnblur: "personalInfo",
            keyErrorOnblur: getKeyValueDataObject(errors).key,
          });
        }
        if (!hasErrors(errors) && !data) {
          changeStepAction(step + 1);
        }
        break;
      case 2:
        errors = validateSteps<IAddressInfo>(
          data ? data : addressInfo,
          validateSchemaAddressInfo
        );
        if (!data) {
          handleErrorsAction({
            valueError: errors,
            fieldError: "addressInfo",
          });
        } else {
          handleOnblurErrorsAction({
            valueErrorOnblur: getKeyValueDataObject(errors).value,
            fieldErrorOnblur: "addressInfo",
            keyErrorOnblur: getKeyValueDataObject(errors).key,
          });
        }
        if (!hasErrors(errors) && !data) {
          changeStepAction(step + 1);
        }
        break;
      case 3:
        console.log(data)
        errors = validateSteps<IAccountDetails>(
          data ? { ...data, password: accountDetails.password } : accountDetails,
          validateSchemaAccountDetails
        );
        if (!data) {
          handleErrorsAction({
            valueError: errors,
            fieldError: "accountDetails",
          });
        } else {
          handleOnblurErrorsAction({
            valueErrorOnblur: getKeyValueDataObject(errors).value,
            fieldErrorOnblur: "accountDetails",
            keyErrorOnblur: getKeyValueDataObject(errors).key,
          });
        }
        if (!hasErrors(errors) && !data) {
          changeStepAction(step + 1);
        }
        break;
      default:
        console.error("Step no válido");
        return;
    }
  };

  const getKeyValueDataObject = (
    obj: Record<string, string>
  ): Record<string, string> => {
    const key = Object.keys(obj)[0];
    const value = obj[key];

    return {
      key,
      value,
    };
  };

  return {
    data: stepsFormState,
    step,
    actionStep,
    changeStepAction,
    profile_type,
    handleChangeAction,
    personalInfo,
    addressInfo,
    accountDetails,
    additionalPersonalInfo,
    businessInfo,
    preferences,
    sendStep,
    personalInfoError,
    addressInfoError,
    accountDetailsError,
  };
};
