import { FormEvent, useEffect, useState } from "react";
import {
  FormFieldProps,
  RegistrationFormState,
  FormValidationState,
} from "../../types/types";
import Button from "../button/Button";
import Input from "../input/Input";
import TextField from "../text-field/TextField";
import { register } from "../../api";
import { toast } from "react-toastify";
import {
  EMAIL_REGEX,
  NUMBER_REGEX,
  PASSWORD_REGEXES,
  PHONE_REGEX,
  POST_CODE_REGEX,
  areAllFormFieldsValid,
  validateFormFieldWithRegex,
} from "./formValidation";
import { useDispatch } from "react-redux";
import { userProfileActions } from "../../redux/userProfile";
import { useNavigate } from "react-router-dom";
import { PasswordValidationInfo } from "./password-validation-info/PasswordValidationInfo";

const initialRegistrationFormState: RegistrationFormState = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  repeatedPassword: "",
  farmName: "",
  farmDesc: "",
  street: "",
  streetNumber: "",
  flatNumber: "",
  city: "",
  postCode: "",
  country: "",
  voivodeship: "",
  county: "",
  district: "",
};

const initialRegistrationFormValidationState: FormValidationState = {
  isEmailValid: true,
  isPhoneValid: true,
  isPasswordValid: true,
  isPostCodeValid: true,
  isStreetNumberValid: true,
  isNumberValid: true,
  isPasswordLengthValid: false,
  isPasswordUpperCaseValid: false,
  isPasswordLowerCaseValid: false,
  isPasswordDigitValid: false,
  isPasswordSpecialCharacterValid: false,
  arePasswordsTheSame: false,
};

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [registrationFormState, setRegistrationFormState] =
    useState<RegistrationFormState>(initialRegistrationFormState);

  const [registrationFormValidationState, setRegistrationFormValidationState] =
    useState<FormValidationState>(initialRegistrationFormValidationState);

  useEffect(() => {
    validateFormFieldWithRegex(
      "isPasswordLengthValid",
      "password",
      PASSWORD_REGEXES.passwordLengthRegex,
      registrationFormState,
      setRegistrationFormValidationState
    );
    validateFormFieldWithRegex(
      "isPasswordUpperCaseValid",
      "password",
      PASSWORD_REGEXES.passwordUpperCaseRegex,
      registrationFormState,
      setRegistrationFormValidationState
    );
    validateFormFieldWithRegex(
      "isPasswordLowerCaseValid",
      "password",
      PASSWORD_REGEXES.passwordLowerCaseRegex,
      registrationFormState,
      setRegistrationFormValidationState
    );
    validateFormFieldWithRegex(
      "isPasswordDigitValid",
      "password",
      PASSWORD_REGEXES.passwordDigitRegex,
      registrationFormState,
      setRegistrationFormValidationState
    );
    validateFormFieldWithRegex(
      "isPasswordSpecialCharacterValid",
      "password",
      PASSWORD_REGEXES.passwordSpecialCharacterRegex,
      registrationFormState,
      setRegistrationFormValidationState
    );
    setRegistrationFormValidationState((prev) => ({
      ...prev,
      arePasswordsTheSame:
        registrationFormState.password ===
        registrationFormState.repeatedPassword,
    }));
  }, [
    registrationFormState,
    registrationFormState.password,
    registrationFormState.repeatedPassword,
  ]);

  const clearRegistrationFormData = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setRegistrationFormState(initialRegistrationFormState);
    setRegistrationFormValidationState(initialRegistrationFormValidationState);
  };

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (areAllFormFieldsValid(registrationFormValidationState)) {
      await register(registrationFormState)
        .then((response) => {
          dispatch(userProfileActions.register(response.data));
          navigate("/profile");
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

  const getInputProps = (key: keyof RegistrationFormState): FormFieldProps => ({
    name: key,
    value: registrationFormState[key],
    onChange: (event) =>
      setRegistrationFormState((previous) => ({
        ...previous,
        [key]: event.target.value,
      })),
  });

  return (
    <>
      <h1 className="flex text-[48px] font-bold mt-14 mb-7 w-[98%] sm:w-2/3 text-brown">
        REJESTRACJA
      </h1>
      <form onSubmit={handleFormSubmit} className="sm:w-2/3   w-[95%]">
        <div className="flex w-full flex-wrap">
          <Input
            className="mb-4 sm:w-[342px] mr-4"
            labelText="Imię"
            required
            inputProps={{ ...getInputProps("firstName") }}
          />
          <Input
            className="mb-4 sm:w-[342px] mr-4"
            labelText="Nazwisko"
            required
            inputProps={{ ...getInputProps("lastName") }}
          />
          <Input
            className="mb-4 sm:w-[342px] mr-4"
            labelText="Email"
            required
            inputProps={{ ...getInputProps("email") }}
            onBlur={() =>
              validateFormFieldWithRegex(
                "isEmailValid",
                "email",
                EMAIL_REGEX,
                registrationFormState,
                setRegistrationFormValidationState
              )
            }
            error={!registrationFormValidationState.isEmailValid}
            errorHelperText="Wprowadź poprawny email"
          />
          <Input
            className="mb-4 sm:w-[342px] mr-4"
            labelText="Telefon"
            required
            inputProps={{ ...getInputProps("phone") }}
            onBlur={() =>
              validateFormFieldWithRegex(
                "isPhoneValid",
                "phone",
                PHONE_REGEX,
                registrationFormState,
                setRegistrationFormValidationState
              )
            }
            error={!registrationFormValidationState.isPhoneValid}
            errorHelperText="Wprowadź poprawny numer telefonu"
          />
          <Input
            className="mb-4 sm:w-[342px] mr-4"
            labelText="Hasło"
            required
            inputProps={{ ...getInputProps("password"), type: "password" }}
          />
          <Input
            className="mb-4 sm:w-[342px] mr-4"
            labelText="Powtórz hasło"
            required
            inputProps={{
              ...getInputProps("repeatedPassword"),
              type: "password",
            }}
          />
          {registrationFormState.password && (
            <PasswordValidationInfo
              isPasswordLengthValid={
                registrationFormValidationState.isPasswordLengthValid!
              }
              isPasswordDigitValid={
                registrationFormValidationState.isPasswordDigitValid!
              }
              isPasswordLowerCaseValid={
                registrationFormValidationState.isPasswordLowerCaseValid!
              }
              isPasswordSpecialCharacterValid={
                registrationFormValidationState.isPasswordSpecialCharacterValid!
              }
              isPasswordUpperCaseValid={
                registrationFormValidationState.isPasswordUpperCaseValid!
              }
              arePasswordTheSame={
                registrationFormValidationState.arePasswordsTheSame!
              }
            />
          )}
        </div>
        <h4 className="flex text-sm font-bold mt-2 mb-7 w-[98%] sm:w-2/3 text-brown">
          ADRES I INFORMACJE O GOSPODARSTWIE
        </h4>
        <div className="flex w-[73%] flex-wrap">
          <Input
            className="mb-4 sm:w-full"
            labelText="Nazwa gospodarstwa"
            required
            inputProps={{ ...getInputProps("farmName") }}
          />
          <TextField
            labelText="Opis gospodarstwa"
            className="mb-4 sm:w-full sm:h-[130px]"
            textFieldProps={{ ...getInputProps("farmDesc") }}
          />
          <Input
            className="mb-4 sm:w-[335px] mr-4"
            labelText="Ulica"
            required
            inputProps={{ ...getInputProps("street") }}
          />
          <Input
            className="mb-4 sm:w-[166px] mr-2"
            labelText="Numer domu"
            required
            inputProps={{ ...getInputProps("streetNumber") }}
            onBlur={() =>
              validateFormFieldWithRegex(
                "isStreetNumberValid",
                "streetNumber",
                NUMBER_REGEX,
                registrationFormState,
                setRegistrationFormValidationState
              )
            }
            error={!registrationFormValidationState.isStreetNumberValid}
            errorHelperText="Wprowadź poprawny numer domu"
          />
          <Input
            className="mb-4 sm:w-[166px]"
            labelText="Numer mieszkania"
            required
            inputProps={{ ...getInputProps("flatNumber") }}
            onBlur={() =>
              validateFormFieldWithRegex(
                "isNumberValid",
                "flatNumber",
                NUMBER_REGEX,
                registrationFormState,
                setRegistrationFormValidationState
              )
            }
            error={!registrationFormValidationState.isNumberValid}
            errorHelperText="Wprowadź poprawny numer mieszkania"
          />
          <Input
            className="mb-4 sm:w-[340px] mr-3"
            labelText="Miasto/Wieś"
            required
            inputProps={{ ...getInputProps("city") }}
          />
          <Input
            className="mb-4 sm:w-[340px]"
            labelText="Kod pocztowy"
            required
            inputProps={{ ...getInputProps("postCode") }}
            onBlur={() =>
              validateFormFieldWithRegex(
                "isPasswordValid",
                "postCode",
                POST_CODE_REGEX,
                registrationFormState,
                setRegistrationFormValidationState
              )
            }
            error={!registrationFormValidationState.isPasswordValid}
            errorHelperText="Wprowadź poprawny kod pocztowy"
          />
          <Input
            className="mb-4 sm:w-[340px] mr-3"
            labelText="Kraj"
            required
            inputProps={{ ...getInputProps("country") }}
          />
          <Input
            className="mb-4 sm:w-[340px]"
            labelText="Województwo"
            required
            inputProps={{ ...getInputProps("voivodeship") }}
          />
          <Input
            className="mb-4 sm:w-[340px] mr-3"
            labelText="Powiat"
            required
            inputProps={{ ...getInputProps("county") }}
          />
          <Input
            className="mb-4 sm:w-[340px]"
            labelText="Gmina"
            required
            inputProps={{ ...getInputProps("district") }}
          />
        </div>
        <div className="flex mt-10 mb-[120px] w-[98%] sm:w-[73%] h-9 items-end justify-end">
          <Button
            variant="basic"
            buttonText="Reset"
            className="p-2 mt-2 sm:w-[115px] w-2/6 text-center mr-2"
            onClick={clearRegistrationFormData}
            type="button"
          />
          <Button
            variant="colored"
            buttonText="Zapisz"
            className="p-2 mt-2 w-1/6 sm:w-[99px] ml-1 "
          />
        </div>
      </form>
    </>
  );
};
