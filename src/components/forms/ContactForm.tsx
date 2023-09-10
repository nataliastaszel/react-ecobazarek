import { FormEvent, useState } from "react";
import {
  AxiosResponseWithErrors,
  ContactFormFieldProps,
  ContactFormState,
  ContactFormValidationState,
} from "../../types/types";
import Button from "../button/Button";
import Input from "../input/Input";
import { toast } from "react-toastify";
import { postContactFormData } from "../../api";
import axios, { AxiosError } from "axios";
import { TextField } from "../text-field/TextField";

const initialContactFormState: ContactFormState = {
  fullName: "",
  email: "",
  subject: "",
  message: "",
  phone: "",
};

const initialContactFormValidationState: ContactFormValidationState = {
  isEmailValid: true,
  isPhoneValid: true,
};

const EMAIL_REGEX: RegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const PHONE_REGEX: RegExp = /\d{9}/;

export const ContactForm = () => {
  const [contactFormState, setContactFormState] = useState<ContactFormState>(
    initialContactFormState
  );

  const [contactFormValidationState, setContactFromValidationState] =
    useState<ContactFormValidationState>(initialContactFormValidationState);

  const clearContactFormData = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setContactFormState(initialContactFormState);
    setContactFromValidationState(initialContactFormValidationState);
  };

  const validateContactFormFieldWithRegex = (
    validationField: keyof ContactFormValidationState,
    contactField: keyof ContactFormState,
    regex: RegExp
  ) => {
    if (
      contactFormState[contactField] &&
      !contactFormState[contactField].match(regex)
    ) {
      setContactFromValidationState((previous) => ({
        ...previous,
        [validationField]: false,
      }));
    } else
      setContactFromValidationState((previous) => ({
        ...previous,
        [validationField]: true,
      }));
  };

  const areAllFormFieldsValid = (): boolean => {
    const { isEmailValid, isPhoneValid } = contactFormValidationState;
    return isEmailValid && isPhoneValid;
  };
  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (areAllFormFieldsValid()) {
      await postContactFormData(contactFormState)
        .then(() => {
          toast(
            "Dziękujemy za przesłanie formularza, skontaktujemy się z tobą najszybciej jak to możliwe",
            { type: "success", toastId: "success" }
          );
        })
        .catch((error) => {
          getErrorMessagesFromFailedResponse(error).forEach((message, index) =>
            toast(message, { type: "error", toastId: index })
          );
        });
    } else
      toast("Niepoprawnie uzupełniony formularz", {
        type: "error",
        toastId: "error",
      });
  };

  const getErrorMessagesFromFailedResponse = (
    error: AxiosError<AxiosResponseWithErrors>
  ): string[] => {
    const errorsFromResponse = error.response?.data.errors;
    const errorMessagesToDisplay: string[] = [];

    if (axios.isAxiosError(error)) {
      if (errorsFromResponse?.includes("email must be a valid email")) {
        errorMessagesToDisplay.push("Wprowadź poprawny email");
      }
      if (errorsFromResponse?.includes("Phone number is not valid")) {
        errorMessagesToDisplay.push("Wprowadź poprawny numer telefonu");
      }
      return errorMessagesToDisplay;
    }
    return ["Coś poszło nie tak, nie można wysłać formularza"];
  };

  const getInputProps = (
    key: keyof ContactFormState
  ): ContactFormFieldProps => ({
    name: key,
    value: contactFormState[key],
    onChange: (event) =>
      setContactFormState((previous) => ({
        ...previous,
        [key]: event.target.value,
      })),
  });

  return (
    <>
      <p className="flex font-bold text-xl mb-7 w-[98%] sm:w-2/3">
        NAPISZ WIADOMOŚĆ
      </p>
      <form onSubmit={handleFormSubmit} className="sm:w-2/3  w-[98%]">
        <div className="flex flex-col w-full">
          <Input
            className="mb-1 sm:w-5/6"
            labelText="Imię i nazwisko"
            required
            inputProps={{ ...getInputProps("fullName") }}
          />
          <div className="flex flex-row sm:w-[69%]">
            <Input
              className="mb-1 w-full mr-1"
              labelText="Email"
              required
              inputProps={{ ...getInputProps("email") }}
              onBlur={() =>
                validateContactFormFieldWithRegex(
                  "isEmailValid",
                  "email",
                  EMAIL_REGEX
                )
              }
              error={!contactFormValidationState.isEmailValid}
              errorHelperText="Wprowadź poprawny email"
            />
            <Input
              className="mb-1 w-full ml-1"
              labelText="Telefon"
              inputProps={{ ...getInputProps("phone") }}
              onBlur={() =>
                validateContactFormFieldWithRegex(
                  "isPhoneValid",
                  "phone",
                  PHONE_REGEX
                )
              }
              error={!contactFormValidationState.isPhoneValid}
              errorHelperText="Wprowadź poprawny numer telefonu"
            />
          </div>
          <Input
            className="mb-1 sm:w-5/6"
            labelText="Temat"
            required
            inputProps={{ ...getInputProps("subject") }}
          />
          <TextField
            className="mb-1 sm:w-5/6 max-w-[100%] h-[123px] break-normal"
            textFieldProps={{ ...getInputProps("message") }}
            labelText="Wiadomość"
            required
          />
        </div>
        <div className="flex mt-2  w-[98%] sm:w-[70%] items-end justify-end">
          <Button
            className="p-2 mt-2 sm:w-1/6 mr-1"
            variant="basic"
            buttonText="Reset"
            onClick={clearContactFormData}
          />
          <Button
            className="p-2 mt-2  sm:w-1/6 ml-1 mr-1"
            variant="colored"
            buttonText="Dodaj"
          />
        </div>
      </form>
    </>
  );
};
