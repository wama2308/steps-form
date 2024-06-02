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
          data ? data : personalInfo,
          validateSchemaPersonalInfo
        );
        if (data) {
          handleOnblurErrorsAction({
            valueErrorOnblur: getKeyValueDataObject(errors).value,
            fieldErrorOnblur: "personalInfo",
            keyErrorOnblur: getKeyValueDataObject(data).key,
          });
        } else {
          handleErrorsAction({
            valueError: errors,
            fieldError: "personalInfo",
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
        if (data) {
          handleOnblurErrorsAction({
            valueErrorOnblur: getKeyValueDataObject(errors).value,
            fieldErrorOnblur: "addressInfo",
            keyErrorOnblur: getKeyValueDataObject(data).key,
          });
        } else {
          handleErrorsAction({
            valueError: errors,
            fieldError: "addressInfo",
          });
        }

        if (!hasErrors(errors) && !data) {
          changeStepAction(step + 1);
        }
        break;
      case 3:
        let dataModified =
          data &&
          getKeyValueDataObject(data).key === "confirm_password" &&
          accountDetails.password
            ? { ...data, password: accountDetails.password }
            : data;
        errors = validateSteps<IAccountDetails>(
          dataModified ? dataModified : accountDetails,
          validateSchemaAccountDetails
        );
        if (dataModified) {
          handleOnblurErrorsAction({
            valueErrorOnblur: getKeyValueDataObject(errors).value,
            fieldErrorOnblur: "accountDetails",
            keyErrorOnblur: getKeyValueDataObject(dataModified).key,
          });
        } else {
          handleErrorsAction({
            valueError: errors,
            fieldError: "accountDetails",
          });
        }
        if (!hasErrors(errors) && !dataModified) {
          changeStepAction(step + 1);
        }
        break;
      case 4:
        if (profile_type === "Personal") {
          errors = validateSteps<IAdditionalPersonalInfo>(
            data ? data : additionalPersonalInfo!,
            validateSchemaAdditionalPersonalInfo
          );
          if (data) {
            handleOnblurErrorsAction({
              valueErrorOnblur: getKeyValueDataObject(errors).value,
              fieldErrorOnblur: "additionalPersonalInfo",
              keyErrorOnblur: getKeyValueDataObject(data).key,
            });
          } else {
            handleErrorsAction({
              valueError: errors,
              fieldError: "additionalPersonalInfo",
            });
          }
        } else {
          errors = validateSteps<IBusinessInfo>(
            data ? data : businessInfo!,
            validateSchemaBussinesInfo
          );
          if (data) {
            handleOnblurErrorsAction({
              valueErrorOnblur: getKeyValueDataObject(errors).value,
              fieldErrorOnblur: "businessInfo",
              keyErrorOnblur: getKeyValueDataObject(data).key,
            });
          } else {
            handleErrorsAction({
              valueError: errors,
              fieldError: "businessInfo",
            });
          }
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
