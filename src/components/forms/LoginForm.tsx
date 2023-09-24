import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import Input from "../input/Input";
import {
  FormFieldProps,
  FormValidationState,
  UserLoginData,
} from "../../types/types";
import { FormEvent, useState } from "react";

import { useDispatch } from "react-redux";
import { userProfileActions } from "../../redux/userProfile";
import { login } from "../../api";
import { toast } from "react-toastify";
import {
  EMAIL_REGEX,
  areAllFormFieldsValid,
  validateFormFieldWithRegex,
} from "./formValidation";

const initialLoginFormState: UserLoginData = {
  email: "",
  password: "",
};

const initialLoginFormValidationState: FormValidationState = {
  isEmailValid: true,
};

export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loginFormState, setLoginFormState] = useState<UserLoginData>(
    initialLoginFormState
  );
  const [loginFormValidationState, setLoginFormValidationState] =
    useState<FormValidationState>(initialLoginFormValidationState);

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (areAllFormFieldsValid(loginFormValidationState)) {
      await login(loginFormState)
        .then((response) => {
          dispatch(userProfileActions.login(response.data));
          navigate("/profile");
        })
        .catch((error) => {
          toast(error.response?.data.message, {
            type: "error",
            toastId: "error",
          });
        });
    }
  };

  const getInputProps = (key: keyof UserLoginData): FormFieldProps => ({
    name: key,
    value: loginFormState[key],
    onChange: (event) =>
      setLoginFormState((previous) => ({
        ...previous,
        [key]: event.target.value,
      })),
  });

  return (
    <>
      <h1 className="flex text-[48px] font-bold mt-14 mb-7 w-[98%] sm:w-2/3 text-brown">
        ZALOGUJ SIĘ
      </h1>
      <form onSubmit={handleFormSubmit} className="sm:w-2/3  w-[95%]">
        <div className="flex flex-col w-full">
          <Input
            className="mb-4 sm:w-9/12"
            labelText="Email"
            required
            inputProps={{ ...getInputProps("email") }}
            onBlur={() =>
              validateFormFieldWithRegex(
                "isEmailValid",
                "email",
                EMAIL_REGEX,
                loginFormState,
                setLoginFormValidationState
              )
            }
            error={!loginFormValidationState.isEmailValid}
            errorHelperText="Wprowadź poprawny email"
          />
          <Input
            className="mb-1 sm:w-9/12"
            labelText="Hasło"
            required
            inputProps={{ ...getInputProps("password"), type: "password" }}
          />
        </div>
        <div className="flex mt-12 mb-[150px] w-[98%] sm:w-[57%] h-9 items-end justify-end">
          <Button
            variant="basic"
            type="button"
            className="p-2 mt-2 sm:w-[115px] w-2/6 text-center mr-2"
            buttonText="Zarejestruj się"
            onClick={() => navigate("/registration")}
          />
          <Button
            variant="colored"
            className="p-2 mt-2 w-1/6 sm:w-[99px] ml-1 sm:mr-2 "
            buttonText="Zaloguj"
          />
        </div>
      </form>
    </>
  );
};
