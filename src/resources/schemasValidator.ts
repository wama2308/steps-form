import type {
  IAccountDetails,
  IAdditionalPersonalInfo,
  IAddressInfo,
  IBusinessInfo,
  IPersonalInfo,
  IPreferences,
  ValidationRules,
} from "@/steps-form/interfaces/steps-form";

// Esquema de validación para la información personal
export const validateSchemaPersonalInfo: Record<
  keyof IPersonalInfo,
  ValidationRules
> = {
  full_name: {
    required: "El nombre completo es requerido",
    formatFullName: "El nombre completo debe tener al menos dos palabras",
  },
  email: {
    required: "El correo electrónico es requerido",
    formatEmail: "Formato de correo electrónico inválido",
  },
  phone_number: {
    required: "El número de teléfono es requerido",
    formatPhone: "Formato de teléfono inválido",
  },
};

// Esquema de validación para la información de dirección
export const validateSchemaAddressInfo: Record<
  keyof IAddressInfo,
  ValidationRules
> = {
  street_address: { required: "La dirección es requerida" },
  city: { required: "La ciudad es requerida" },
  postal_code: {
    required: "El código postal es requerido",
    formatPostalCode: "Formato de código postal inválido",
  },
  country: {
    required: "El país es requerido",
  },
};

// Esquema de validación para los detalles de la cuenta
export const validateSchemaAccountDetails: Record<
  keyof IAccountDetails,
  ValidationRules
> = {
  username: {
    required: "El nombre usuario es requerido",
    formatUserName: "El nombre de usuario debe contener al menos tres letras",
  },
  password: {
    required: "La contraseña es requerida",
    formatPassword: `La contraseña debe tener: mínimo 8 caracteres, al menos una letra mayúscula, un
    número y un carácter especial`,
  },
  confirm_password: {
    required: "La confirmación de la contraseña es requerida",
    comparePassword: "password",
  },
  profile_type: { required: "El perfil de usuario es requerido" },
};

// Esquema de validación para la información adicional del perfil personal
export const validateSchemaAdditionalPersonalInfo: Record<
  keyof IAdditionalPersonalInfo,
  ValidationRules
> = {
  date_of_birth: { required: "La fecha de nacimiento es requerida" },
  gender: { required: "El género es requerido" },
};

// Esquema de validación para la información del negocio
export const validateSchemaBussinesInfo: Record<
  keyof IBusinessInfo,
  ValidationRules
> = {
  company_name: { required: "El nombre de la empresa es requerida" },
  company_size: { required: "El tamaño de la empresa es requerido" },
  role_in_company: { required: "El rol en la empresa es requerido" },
};

// Esquema de validación para las preferencias del usuario
export const validateSchemaPreferences: Record<
  keyof Omit<IPreferences, "notifications">,
  ValidationRules
> = {
  how_heard: {
    required:
      "Debe seleccionar una opcion en: ¿Cómo se enteró de nuestro servicio?",
  },
  terms_agreed: { required: "Debe aceptar los términos y condiciones" },
};
