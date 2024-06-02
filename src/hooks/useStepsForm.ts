import { useContext } from "react";
import { StepsFormContext } from "@/context/StepsFormContext";
import {
  IAccountDetails,
  IAdditionalPersonalInfo,
  IAddressInfo,
  IBusinessInfo,
  IPreferences,
  type IPersonalInfo,
  ValidationRules,
  TDataSteps,
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
    let errors: TDataSteps;

    const handleValidationAndErrors = (
      stepData: TDataSteps | Record<string, string>,
      schema: Record<string, ValidationRules>,
      fieldError: string,
      dataModified?: Record<string, string>
    ) => {
      errors = validateSteps(stepData, schema);
      if (dataModified) {
        handleOnblurErrorsAction({
          valueErrorOnblur: getKeyValueDataObject(errors).value,
          fieldErrorOnblur: fieldError,
          keyErrorOnblur: getKeyValueDataObject(dataModified).key,
        });
      } else {
        handleErrorsAction({
          valueError: errors,
          fieldError,
        });
      }
      return errors;
    };

    switch (step) {
      case 1:
        errors = handleValidationAndErrors(
          data ? data : personalInfo,
          validateSchemaPersonalInfo,
          "personalInfo",
          data
        );
        if (!hasErrors(errors) && !data) {
          changeStepAction(step + 1);
        }
        break;
      case 2:
        errors = handleValidationAndErrors(
          data ? data : addressInfo,
          validateSchemaAddressInfo,
          "addressInfo",
          data
        );
        if (!hasErrors(errors) && !data) {
          changeStepAction(step + 1);
        }
        break;
      case 3:
        const dataModified =
          data &&
          getKeyValueDataObject(data).key === "confirm_password" &&
          accountDetails.password
            ? { ...data, password: accountDetails.password }
            : data;
        errors = handleValidationAndErrors(
          dataModified ? dataModified : accountDetails,
          validateSchemaAccountDetails,
          "accountDetails",
          dataModified
        );
        if (!hasErrors(errors) && !dataModified) {
          changeStepAction(step + 1);
        }
        break;
      case 4:
        if (profile_type === "Personal") {
          errors = handleValidationAndErrors(
            data ? data : additionalPersonalInfo!,
            validateSchemaAdditionalPersonalInfo,
            "additionalPersonalInfo",
            data
          );
        } else {
          errors = handleValidationAndErrors(
            data ? data : businessInfo!,
            validateSchemaBussinesInfo,
            "businessInfo",
            data
          );
        }
        if (!hasErrors(errors) && !data) {
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
