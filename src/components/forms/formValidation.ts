import { Dispatch, SetStateAction } from "react";
import { FormState, FormValidationState } from "../../types/types";

export const EMAIL_REGEX: RegExp =
  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
export const PHONE_REGEX: RegExp = /\d{9}/;
export const POST_CODE_REGEX: RegExp = /^[0-9]{2}-[0-9]{3}/;
export const NUMBER_REGEX: RegExp = /\d/;

export const PASSWORD_REGEXES = {
  passwordLengthRegex: /.{8,}/,
  passwordUpperCaseRegex: /[A-Z]/,
  passwordLowerCaseRegex: /[a-z]/,
  passwordDigitRegex: /[0-9]/,
  passwordSpecialCharacterRegex: /[^A-Za-z0-9]/,
};

export const validateFormFieldWithRegex = (
  validationField: keyof FormValidationState,
  formField: keyof FormState,
  regex: RegExp,
  formState: FormState,
  setFormValidationState: Dispatch<SetStateAction<FormValidationState>>
) => {
  if (formState[formField] && !formState[formField]?.match(regex)) {
    setFormValidationState((previous: FormValidationState) => ({
      ...previous,
      [validationField]: false,
    }));
  } else
    setFormValidationState((previous: FormValidationState) => ({
      ...previous,
      [validationField]: true,
    }));
};

export const areAllFormFieldsValid = (
  formValidationState: FormValidationState
): boolean => {
  for(const value of Object.values(formValidationState)) {
    if (!value) {
      return false;
    }
  }
  return true;
}