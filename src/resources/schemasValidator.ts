import type {
  IAccountDetails,
  IAddressInfo,
  IPersonalInfo,
  ValidationRules,
} from "@/steps-form/interfaces/steps-form";

export const validateSchemaPersonalInfo: Record<
  keyof IPersonalInfo,
  ValidationRules
> = {
  full_name: { required: "El nombre completo es requerido" },
  email: {
    required: "El correo electrónico es requerido",
    formatEmail: "Formato de correo electrónico inválido",
  },
  phone_number: {
    required: "El número de teléfono es requerido",
    formatPhone: "Formato de teléfono inválido",
  },
};

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

export const validateSchemaAccountDetails: Record<
  keyof IAccountDetails,
  ValidationRules
> = {
  username: { required: "El nombre usuario es requerido" },
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
