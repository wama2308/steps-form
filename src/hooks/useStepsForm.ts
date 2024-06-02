import { useCallback, useContext, useMemo } from "react";
import { StepsFormContext } from "@/context/StepsFormContext";
import {
  IPreferences,
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
import { registerProfile } from "@/servers";
import {
  registerProfileBusinessUrl,
  registerProfilePersonalUrl,
} from "@/resources/urls";

export const useStepsForm = () => {
  const {
    stepsFormState,
    changeStepAction,
    handleChangeAction,
    handleErrorsAction,
    handleOnblurErrorsAction,
    setLoadingAction,
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
    loading,
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
          sendData();
        }
        break;
      default:
        console.error("Step no válido");
        return;
    }
  };

  const sendData = () => {
    setLoadingAction();
    const dataSend = {
      ...personalInfo,
      ...addressInfo,
      ...accountDetails,
      personal_info:
        profile_type === "Personal" ? additionalPersonalInfo : null,
      business_info: profile_type === "Business" ? businessInfo : null,
      ...preferences,
    };
    const urlSend =
      profile_type === "Personal"
        ? registerProfilePersonalUrl
        : registerProfileBusinessUrl;

    registerProfile(urlSend, dataSend)
      .then(() => {})
      .catch((error: Error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setLoadingAction();
      });
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

  const disabledAction = useCallback(
    (step: number) => {
      if (step === 1) {
        return hasErrors(
          validateSteps(personalInfo, validateSchemaPersonalInfo)
        );
      }
      if (step === 2) {
        return hasErrors(validateSteps(addressInfo, validateSchemaAddressInfo));
      }
      if (step === 3) {
        return hasErrors(
          validateSteps(accountDetails, validateSchemaAccountDetails)
        );
      }
      if (step === 4) {
        if (profile_type === "Personal") {
          return hasErrors(
            validateSteps(
              additionalPersonalInfo!,
              validateSchemaAdditionalPersonalInfo
            )
          );
        } else {
          return hasErrors(
            validateSteps(businessInfo!, validateSchemaBussinesInfo)
          );
        }
      }
      if (step === 5) {
        return hasErrors(
          validateSteps(
            {
              how_heard: preferences.how_heard,
              terms_agreed: preferences.terms_agreed ? "true" : "",
            },
            validateSchemaPreferences
          )
        );
      }
      return false;
    },
    [accountDetails, additionalPersonalInfo, addressInfo, businessInfo, personalInfo, preferences.how_heard, preferences.terms_agreed, profile_type]
  );

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
    loading,
    disabledAction
  };
};
