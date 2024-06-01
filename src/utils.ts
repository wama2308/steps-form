import type {
  SectionState,
  ValidationRules,
} from "./steps-form/interfaces/steps-form";

export const validateSteps = <T>(
  sectionState: SectionState<Partial<T>>,
  sectionSchema: Record<keyof T, ValidationRules>
): Partial<Record<keyof T, string>> => {
  const errors: Partial<Record<keyof T, string>> = {};

  for (const field in sectionState) {
    if (sectionState.hasOwnProperty(field)) {
      const fieldErrors = sectionSchema[field];
      if (fieldErrors) {
        for (const type in fieldErrors) {
          if (fieldErrors.hasOwnProperty(type)) {
            switch (type) {
              case "required":
                if (sectionState[field] === "") {
                  errors[field] = fieldErrors[type] as string;
                }
                break;
              case "formatEmail":
                if (
                  sectionState[field] &&
                  !emailRegex.test(sectionState[field] as string)
                ) {
                  errors[field] = fieldErrors[type] as string;
                }
                break;
              case "formatPhone":
                if (
                  sectionState[field] &&
                  !phoneRegex.test(sectionState[field] as string)
                ) {
                  errors[field] = fieldErrors[type] as string;
                }
                break;
              case "formatPostalCode":
                if (
                  sectionState[field] &&
                  !postalCodeRegex.test(sectionState[field] as string)
                ) {
                  errors[field] = fieldErrors[type] as string;
                }
                break;
              case "formatPassword":
                if (
                  sectionState[field] &&
                  !passwordRegex.test(sectionState[field] as string)
                ) {
                  errors[field] = fieldErrors[type] as string;
                }
                break;
              case "comparePassword":
                const compareField = fieldErrors[type];
                console.log(10, fieldErrors)
                console.log(0, type)
                console.log(1, fieldErrors[type])
                console.log(2, sectionState[field])
                console.log(3, sectionState)
                console.log(4, sectionState[compareField as keyof T])
                
                if (
                  sectionState[field] &&
                  sectionState[compareField as keyof T] &&
                  sectionState[field] !== sectionState[compareField as keyof T]
                ) {
                  errors[field] = `El valor no coincide con ${compareField}`;
                }
                break;

              default:
                break;
            }
          }
        }
      }
    }
  }

  if (Object.keys(errors).length === 0) {
    for (const field in sectionState) {
      if (sectionState.hasOwnProperty(field)) {
        errors[field] = "";
      }
    }
  }

  return errors;
};

export const compareObjects = (
  obj1: Record<string, string>,
  obj2: Record<string, string>
): boolean => {
  for (const key in obj1) {
    if (obj1.hasOwnProperty(key)) {
      if (obj1[key] !== obj2[key]) {
        return true;
      }
    }
  }
  return false;
};

export const hasErrors = (errors: Record<string, string>): boolean => {
  return Object.values(errors).some((value) => value.trim() !== "");
};

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^\+?[0-9\s\-\(\)]{9,15}$/;
const postalCodeRegex = /^[A-Za-z0-9\s\-]{3,10}$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
