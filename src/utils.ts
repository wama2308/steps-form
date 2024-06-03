import type {
  SectionState,
  ValidationRules,
} from "./steps-form/interfaces/steps-form";

/**
 * Funcion para validar cada uno de los campos del formulario, esta recibe un objeto (que representa el estado actual de la sección
 * del formulario) y un esquema de validacion (que define las reglas de validación para cada campo del formulario).
 */
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
                if (!sectionState[field]) {
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
              case "formatFullName":
                if (
                  sectionState[field] &&
                  !fullNameRegex.test(sectionState[field] as string)
                ) {
                  errors[field] = fieldErrors[type] as string;
                }
                break;
              case "formatUserName":
                if (
                  sectionState[field] &&
                  !usernameRegex.test(sectionState[field] as string)
                ) {
                  errors[field] = fieldErrors[type] as string;
                }
                break;
              case "comparePassword":
                const compareField = fieldErrors[type];
                if (
                  sectionState[field] &&
                  sectionState[compareField as keyof T] &&
                  sectionState[field] !== sectionState[compareField as keyof T]
                ) {
                  errors[
                    field
                  ] = `La confirmación no coincide con la contraseña`;
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

/**
 * Esta función verifica si hay errores en el objeto de errores proporcionado.
 */
export const hasErrors = (errors: Record<string, string>): boolean => {
  return Object.values(errors).some((value) => value.trim() !== "");
};

/**
 * Un objeto que mapea los nombres de los campos de un objeto, se usa para mostrar los datos en la pagina summary.
 */
export const formattedKeys: Record<string, string> = {
  full_name: "Nombre Completo",
  email: "Email",
  phone_number: "Teléfono",
  street_address: "Dirección",
  city: "Ciudad",
  postal_code: "Código Postal",
  country: "País",
  username: "Nombre de Usuario",
  profile_type: "Tipo de Perfil",
  notifications: "¿Quieres recibir notificaciones vía email?",
  how_heard: "¿Cómo se enteró de nuestro servicio?",
  terms_agreed: "Términos y condiciones",
  date_of_birth: "Fecha de nacimiento",
  gender: "Género",
  company_name: "Nombre de la empresa",
  company_size: "Tamaño de la empresa",
  role_in_company: "Rol en la empresa",
};

/**
 * Esta función formatea el valor de un campo del formulario, especialmente útil para formatear booleanos como "Sí" o "No".
 */
export const formatValue = (value: string | boolean) => {
  if (typeof value === "boolean") {
    return value ? "Sí" : "No";
  }
  return value;
};

/**
 * Valida el formato de un correo electrónico
 */
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

/**
 * Valida el formato de un número de teléfono
 */
const phoneRegex = /^\+?[0-9\s\-\(\)]{9,15}$/;

/**
 * Valida el formato de un código postal
 */
const postalCodeRegex = /^[A-Za-z0-9\s\-]{3,10}$/;

/**
 * Valida el formato de un nombre completo
 */
const fullNameRegex = /^\w+\s+\w+.*$/;

/**
 * Valida el formato de un nombre de usuario
 */
const usernameRegex = /.{3,}/;

/**
 * Valida el formato de una contraseña
 */
const passwordRegex =
  /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d\s])[A-Za-z\d\S]{8,}$/;

  /**
   * Variables para obtener la fecha actual
   */
  const hoy = new Date();
  const year = hoy.getFullYear();
  const month = String(hoy.getMonth() + 1).padStart(2, '0'); // Meses van de 0 a 11
  const day = String(hoy.getDate()).padStart(2, '0');
  export const fechaHoy = `${year}-${month}-${day}`;
