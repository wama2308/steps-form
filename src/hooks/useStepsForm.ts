import { useContext } from "react";
import { StepsFormContext } from "@/context/StepsFormContext";
import {
  IAccountDetails,
  IAdditionalPersonalInfo,
  IAddressInfo,
  IBusinessInfo,
  IPreferences,
  type IPersonalInfo,
} from "@/steps-form/interfaces/steps-form";
import { hasErrors, validateSteps } from "@/utils";
import {
  validateSchemaAccountDetails,
  validateSchemaAdditionalPersonalInfo,
  validateSchemaAddressInfo,
  validateSchemaBussinesInfo,
  validateSchemaPersonalInfo,
  validateSchemaPreferences,
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
    additionalPersonalInfo: additionalPersonalInfoError,
    businessInfo: businessInfoError,
    preferences: preferencesError,
  } = validationErrors;

  const sendStep = (step: number, data?: Record<string, string>) => {
    let errors: Partial<
      | IPersonalInfo
      | IAddressInfo
      | IAccountDetails
      | IAdditionalPersonalInfo
      | IBusinessInfo
      | IPreferences
    >;
    switch (step) {
      case 1:
        errors = validateSteps<IPersonalInfo>(
          personalInfo,
          validateSchemaPersonalInfo
        );
        handleErrorsAction({
          valueError: errors,
          fieldError: "personalInfo",
        });

        if (!hasErrors(errors)) {
          changeStepAction(step + 1);
        }
        break;
      case 2:
        errors = validateSteps<IAddressInfo>(
          addressInfo,
          validateSchemaAddressInfo
        );
        handleErrorsAction({
          valueError: errors,
          fieldError: "addressInfo",
        });

        if (!hasErrors(errors)) {
          changeStepAction(step + 1);
        }
        break;
      case 3:
        errors = validateSteps<IAccountDetails>(
          accountDetails,
          validateSchemaAccountDetails
        );
        handleErrorsAction({
          valueError: errors,
          fieldError: "accountDetails",
        });
        if (!hasErrors(errors)) {
          changeStepAction(step + 1);
        }
        break;
      case 4:
        if (profile_type === "Personal") {
          errors = validateSteps<IAdditionalPersonalInfo>(
            additionalPersonalInfo!,
            validateSchemaAdditionalPersonalInfo
          );
          handleErrorsAction({
            valueError: errors,
            fieldError: "additionalPersonalInfo",
          });
        } else {
          errors = validateSteps<IBusinessInfo>(
            businessInfo!,
            validateSchemaBussinesInfo
          );
          handleErrorsAction({
            valueError: errors,
            fieldError: "businessInfo",
          });
        }
        if (!hasErrors(errors)) {
          changeStepAction(step + 1);
        }
        break;
      case 5:
        errors = validateSteps<IPreferences>(
          {
            how_heard: preferences.how_heard,
            terms_agreed: preferences.terms_agreed ? "true" : "",
          },
          validateSchemaPreferences
        );
        handleErrorsAction({
          valueError: errors,
          fieldError: "preferences",
        });
        if (!hasErrors(errors)) {
          console.log("GUARDAR");
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
    additionalPersonalInfoError,
    businessInfoError,
    preferencesError,
  };
};
