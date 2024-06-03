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

export interface IAdditionalPersonalInfo {
  date_of_birth: string;
  gender: string;
}

export interface IBusinessInfo {
  company_name: string;
  company_size: string;
  role_in_company: string;
}

export interface IPreferences {
  notifications: boolean;
  how_heard: string;
  terms_agreed: boolean;
  [key: string]: any;
}

export interface IStepsForm {
  step: number;
  actionStep: "next" | "back" | "";
  loading: boolean;
  dataSummary: Response | null;
  openModal: boolean;
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
  type?: "select" | "radio" | "checkbox" | "text" | "date" | "";
}

export interface IHandleErrors {
  valueError:
    | Partial<IPersonalInfo>
    | Partial<IAddressInfo>
    | Partial<IAccountDetails>
    | Partial<IAdditionalPersonalInfo>
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
  formatFullName?: string;
  formatUserName?: string;
  comparePassword?: string;
};

export type SectionState<T> = {
  [K in keyof T]: string;
};

export type TDataSteps = Partial<
  | IPersonalInfo
  | IAddressInfo
  | IAccountDetails
  | IAdditionalPersonalInfo
  | IBusinessInfo
  | IPreferences
>;

export interface Response {
  status: string;
  message: string;
  data: DataSend;
}

export interface DataSend {
  full_name: string;
  email: string;
  phone_number: string;
  street_address: string;
  city: string;
  postal_code: string;
  country: string;
  username: string;
  password: string;
  confirm_password: string;
  profile_type: string;
  personal_info: IAdditionalPersonalInfo | null;
  business_info: IBusinessInfo | null;
  notifications: boolean;
  how_heard: string;
  terms_agreed: boolean;
}
