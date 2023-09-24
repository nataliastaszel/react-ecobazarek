import { FormEvent, useEffect, useState } from "react";
import {
  FormFieldProps,
  FormValidationState,
  PasswordChangeFormState,
} from "../../types/types";
import Button from "../button/Button";
import Input from "../input/Input";
import { PasswordValidationInfo } from "./password-validation-info/PasswordValidationInfo";
import {
  PASSWORD_REGEXES,
  areAllFormFieldsValid,
  validateFormFieldWithRegex,
} from "./formValidation";
import { toast } from "react-toastify";
import { changePassword } from "../../api";
import { userProfileActions } from "../../redux/userProfile";
import { useDispatch } from "react-redux";

const initialPasswordChangeFormState: PasswordChangeFormState = {
  oldPassword: "",
  password: "",
  repeatedPassword: "",
};

const initialValidationState: FormValidationState = {
  isPasswordLengthValid: false,
  isPasswordUpperCaseValid: false,
  isPasswordLowerCaseValid: false,
  isPasswordDigitValid: false,
  isPasswordSpecialCharacterValid: false,
  arePasswordsTheSame: false,
};

export const UserPasswordChangeForm = () => {
  const dispatch = useDispatch();

  const [passwordChangeFormState, setPasswordChangeFormState] =
    useState<PasswordChangeFormState>(initialPasswordChangeFormState);

  const [passwordChangeValidationState, setPasswordChageValidationState] =
    useState<FormValidationState>(initialValidationState);

  useEffect(() => {
    validateFormFieldWithRegex(
      "isPasswordLengthValid",
      "password",
      PASSWORD_REGEXES.passwordLengthRegex,
      passwordChangeFormState,
      setPasswordChageValidationState
    );
    validateFormFieldWithRegex(
      "isPasswordUpperCaseValid",
      "password",
      PASSWORD_REGEXES.passwordUpperCaseRegex,
      passwordChangeFormState,
      setPasswordChageValidationState
    );
    validateFormFieldWithRegex(
      "isPasswordLowerCaseValid",
      "password",
      PASSWORD_REGEXES.passwordLowerCaseRegex,
      passwordChangeFormState,
      setPasswordChageValidationState
    );
    validateFormFieldWithRegex(
      "isPasswordDigitValid",
      "password",
      PASSWORD_REGEXES.passwordDigitRegex,
      passwordChangeFormState,
      setPasswordChageValidationState
    );
    validateFormFieldWithRegex(
      "isPasswordSpecialCharacterValid",
      "password",
      PASSWORD_REGEXES.passwordSpecialCharacterRegex,
      passwordChangeFormState,
      setPasswordChageValidationState
    );
    setPasswordChageValidationState((prev) => ({
      ...prev,
      arePasswordsTheSame:
        passwordChangeFormState.password ===
        passwordChangeFormState.repeatedPassword,
    }));
  }, [
    passwordChangeFormState,
    passwordChangeFormState.password,
    passwordChangeFormState.repeatedPassword,
  ]);

  const getInputProps = (
    key: keyof PasswordChangeFormState
  ): FormFieldProps => ({
    name: key,
    value: passwordChangeFormState[key],
    onChange: (event) =>
      setPasswordChangeFormState((previous) => ({
        ...previous,
        [key]: event.target.value,
      })),
  });

  const handlePasswordChange = async (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (areAllFormFieldsValid(passwordChangeValidationState)) {
      await changePassword(passwordChangeFormState)
        .then(() => {
          dispatch(userProfileActions.setUserData(passwordChangeFormState));
          toast("Hasło zostało zmienione", {
            type: "success",
            toastId: "success",
          });
        })
        .catch((error) => {
          toast(error.response?.data.message, {
            type: "error",
            toastId: "error",
          });
        });
    } else
      toast("Niepoprawnie uzupełniony formularz", {
        type: "error",
        toastId: "error",
      });
  };

  return (
    <>
      <form className="sm:w-[90%]  w-[95%]">
        <div className="flex flex-col w-full">
          <Input
            className="mb-4 sm:w-[550px]"
            labelText="Stare hasło"
            required
            inputProps={{ ...getInputProps("oldPassword"), type: "password" }}
          />
          <Input
            className="mb-4 sm:w-[550px]"
            labelText="Nowe hasło"
            required
            inputProps={{ ...getInputProps("password"), type: "password" }}
          />
          <Input
            className="mb-4 sm:w-[550px]"
            labelText="Powtórz nowe hasło"
            required
            inputProps={{
              ...getInputProps("repeatedPassword"),
              type: "password",
            }}
          />
          {passwordChangeFormState.password && (
            <PasswordValidationInfo
              isPasswordLengthValid={
                passwordChangeValidationState.isPasswordLengthValid!
              }
              isPasswordDigitValid={
                passwordChangeValidationState.isPasswordDigitValid!
              }
              isPasswordLowerCaseValid={
                passwordChangeValidationState.isPasswordLowerCaseValid!
              }
              isPasswordSpecialCharacterValid={
                passwordChangeValidationState.isPasswordSpecialCharacterValid!
              }
              isPasswordUpperCaseValid={
                passwordChangeValidationState.isPasswordUpperCaseValid!
              }
              arePasswordTheSame={
                passwordChangeValidationState.arePasswordsTheSame!
              }
            />
          )}
        </div>
        <div className="flex mt-10 mb-[120px] w-[98%] sm:w-[550px] h-9 items-end justify-end">
          <Button
            variant="colored"
            className="p-2 mt-2 w-3/6 sm:w-[110px] ml-1 "
            buttonText="Zmień hasło"
            onClick={handlePasswordChange}
          />
        </div>
      </form>
    </>
  );
};
