interface IPersonalInfo {
  full_name: string;
  email: string;
  phone_number: string;
}

interface IAddressInfo {
  street_address: string;
  city: string;
  postal_code: string;
  country: string;
}

interface IAccountDetails {
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
  [key: string]: any;
}

export interface IHandleChange {
  key: string;
  value: string | boolean;
  field: string;
}

export interface IHandleErrors {
  valueError:
    | IPersonalInfo
    | IAddressInfo
    | IAccountDetails
    | IBusinessInfo
    | IPreferences;
  fieldError: string;
}

