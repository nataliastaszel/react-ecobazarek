import { Dispatch, SetStateAction } from "react";
import { TextFieldProps } from "../components/text-field/TextField";
import { InputProps } from "../components/input/Input";

export interface ContactFormState {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface CategoryItem {
  id?: string;
  name: string;
  type?: string;
  iconUrl: string;
}

export interface LoadingComponentProps {
  onRequestLoading: Dispatch<SetStateAction<boolean>>;
}

export interface FormValidationState {
  isEmailValid?: boolean;
  isPhoneValid?: boolean;
  isPasswordValid?: boolean;
  isPostCodeValid?: boolean;
  isStreetNumberValid?: boolean;
  isNumberValid?: boolean;
  isPasswordLengthValid?: boolean;
  isPasswordUpperCaseValid?: boolean;
  isPasswordLowerCaseValid?: boolean;
  isPasswordDigitValid?: boolean;
  isPasswordSpecialCharacterValid?: boolean;
  arePasswordsTheSame?: boolean;
}

export type FormFieldProps = InputProps & TextFieldProps;

export interface FormState {
  email?: string;
  phone?: string;
  password?: string;
  postCode?: string;
  streetNumber?: string;
  flatNumber?: string;
}

export interface RegistrationFormState {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  repeatedPassword?: string;
  farmName: string;
  farmDesc: string;
  street: string;
  streetNumber: string;
  flatNumber: string;
  city: string;
  postCode: string;
  country: string;
  voivodeship: string;
  county: string;
  district: string;
}

export interface UserLoginData {
  email: string;
  password: string;
}

export interface InitialStoreState {
  isAuthenticated: boolean;
  userProfileToken: string | null;
  userData: UserProfile;
  userProducts: NewProduct[]
}

export interface UserProfile {
  id: string;
  city: string;
  country: string;
  county: string;
  district: string;
  email: string;
  farmDesc: string;
  farmName: string;
  firstName: string;
  flatNumber: string;
  lastName: string;
  phone: string;
  postCode: string;
  street: string;
  streetNumber: string;
  voivodeship: string;
}

export interface PasswordChangeFormState {
  oldPassword: string;
  password: string;
  repeatedPassword: string;
}

export interface Product {
  id: string;
  name: string;
}

export interface NewProduct {
  name: string;
  desc: string;
  type: string;
  category: string;
  price: number;
  unit: string;
  id?: string;
}
