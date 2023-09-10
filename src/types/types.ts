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

export interface ContactFormValidationState {
  isEmailValid: boolean;
  isPhoneValid: boolean;
}

export type ContactFormFieldProps = InputProps & TextFieldProps;

export interface AxiosResponseWithErrors {
  errors: string[];
}
