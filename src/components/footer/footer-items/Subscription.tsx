import { useState } from "react";
import Button from "../../button/Button";
import Input from "../../input/Input";
import { subscribe } from "../../../api";
import { toast } from "react-toastify";
import axios, { AxiosError } from "axios";
import { AxiosResponseWithErrors } from "../../../types/types";

const Subscribe = () => {
  const [subscribedEmails, setSubscribedEmails] = useState<string[]>([]);
  const [email, setEmail] = useState<string>("");

  const handleSubscribe = async () => {
    if (!email) {
      toast("Wprowadź email", { type: "info", toastId: "info" });
      return;
    }

    if (subscribedEmails.includes(email)) {
      toast("Podany email znajduje się na liście subskrybentów", {
        type: "error",
        toastId: "error",
      });
      return;
    }

    await subscribe(email)
      .then(() => {
        setSubscribedEmails((prevSubscribedEmails) => [
          ...prevSubscribedEmails,
          email,
        ]);
        toast("Dziękujemy za subskrybcję", {
          type: "success",
          toastId: "success",
        });
      })
      .catch((error: AxiosError<AxiosResponseWithErrors>) => {
        const errorMessageResponse = error.response?.data.errors[0];
        if (axios.isAxiosError(error) && errorMessageResponse) {
          toast(errorMessageResponse, { type: "error", toastId: "error" });
        } else {
          toast("Coś poszło nie tak, nie można zasubkrybować", {
            type: "error",
            toastId: "error",
          });
        }
      });
  };

  return (
    <div className="flex flex-row justify-center items-center w-[95%] my-7">
      <Input
        inputProps={{
          type: email,
          value: email,
          onChange: (event) => setEmail(event.target.value),
        }}
        className=" h-10 mr-4 sm:w-[420px]"
      />
      <Button
        className="h-[42px] sm:w-[134px]"
        onClick={handleSubscribe}
        variant="colored"
        buttonText="Subskrybuj"
      ></Button>
    </div>
  );
};

export default Subscribe;
