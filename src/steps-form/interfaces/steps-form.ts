export interface IPersonalInfo {
  full_name: string;
  email: string;
  phone_number: string;
}

export interface IAddressInfo {
  street_address: string;
  city: string;
  postal_code: string;
  country: string;
}

export interface IAccountDetails {
  username: string;
  password: string;
  confirm_password: string;
  profile_type: string;
}

interface IAdditionalPersonalInfo {
  date_of_birth: string;
  gender: string;
}

interface IBusinessInfo {
  company_name: string;
  company_size: string;
  role_in_company: string;
}

interface IPreferences {
  notifications: boolean;
  how_heard: string;
  terms_agreed: boolean;
}

export interface IStepsForm {
  step: number;
  actionStep: "next" | "back" | "";
  personalInfo: IPersonalInfo;
  addressInfo: IAddressInfo;
  accountDetails: IAccountDetails;
  additionalPersonalInfo: IAdditionalPersonalInfo | null;
  businessInfo: IBusinessInfo | null;
  preferences: IPreferences;
  validationErrors: IValidationErrors;
  [key: string]: any;
}

export interface IHandleChange {
  key: string;
  value: string | boolean;
  field: string;
}

export interface IHandleErrors {
  valueError:
    | Partial<IPersonalInfo>
    | Partial<IAddressInfo>
    | Partial<IAccountDetails>
    | Partial<IBusinessInfo>
    | Partial<IPreferences>;
  fieldError: string;
}

export interface IHandleOnblurErrors {
  valueErrorOnblur: string;
  fieldErrorOnblur: string;
  keyErrorOnblur: string;
}

interface IValidationErrors {
  personalInfo: {
    full_name?: string;
    email?: string;
    phone_number?: string;
  };
  addressInfo: {
    street_address?: string;
    city?: string;
    postal_code?: string;
    country?: string;
  };
  accountDetails: {
    username?: string;
    password?: string;
    confirm_password?: string;
    profile_type?: string;
  };
  additionalPersonalInfo: {
    date_of_birth?: string;
    gender?: string;
  };
  businessInfo: {
    company_name?: string;
    company_size?: string;
    role_in_company?: string;
  };
  preferences: {
    notifications?: string;
    how_heard?: string;
    terms_agreed?: string;
  };
  [key: string]: any;
}

export type ValidationRules = {
  required?: string;
  formatEmail?: string;
  formatPhone?: string;
  formatPostalCode?: string;
  formatPassword?: string;
  comparePassword?: string;
  // Agregar cualquier otra regla de validación necesaria
};

export type SectionState<T> = {
  [K in keyof T]: string;
};
