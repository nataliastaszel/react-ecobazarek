import { FormEvent, useState } from "react";
import {
  ContactFormState,
  FormFieldProps,
  FormValidationState,
} from "../../types/types";
import Button from "../button/Button";
import Input from "../input/Input";
import { toast } from "react-toastify";
import { postContactFormData } from "../../api";
import { TextField } from "../text-field/TextField";
import {
  EMAIL_REGEX,
  PHONE_REGEX,
  areAllFormFieldsValid,
  validateFormFieldWithRegex,
} from "./formValidation";
import { getErrorMessagesFromFailedResponse } from "./formErrorHandling";

const initialContactFormState: ContactFormState = {
  fullName: "",
  email: "",
  subject: "",
  message: "",
  phone: "",
};

const initialContactFormValidationState: FormValidationState = {
  isEmailValid: true,
  isPhoneValid: true,
};

export const ContactForm = () => {
  const [contactFormState, setContactFormState] = useState<ContactFormState>(
    initialContactFormState
  );

  const [contactFormValidationState, setContactFormValidationState] =
    useState<FormValidationState>(initialContactFormValidationState);

  const clearContactFormData = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setContactFormState(initialContactFormState);
    setContactFormValidationState(initialContactFormValidationState);
  };

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (areAllFormFieldsValid(contactFormValidationState)) {
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

  const getInputProps = (key: keyof ContactFormState): FormFieldProps => ({
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
      <p className="flex font-bold text-xl mb-7 w-[98%] sm:w-2/3 text-brown">
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
                validateFormFieldWithRegex(
                  "isEmailValid",
                  "email",
                  EMAIL_REGEX,
                  contactFormState,
                  setContactFormValidationState
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
                validateFormFieldWithRegex(
                  "isPhoneValid",
                  "phone",
                  PHONE_REGEX,
                  contactFormState,
                  setContactFormValidationState
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
