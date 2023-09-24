import axios, { AxiosError, AxiosResponseHeaders } from "axios";

export const getErrorMessagesFromFailedResponse = (
  error: AxiosError<AxiosResponseHeaders>
) => {
  const errorsFromResponse = error.response?.data.message;
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
