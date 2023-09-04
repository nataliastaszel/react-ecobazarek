import { useState } from "react";
import Button from "../../button/Button";
import Input from "../../input/Input";
import { subscribe } from "../../../api";
import { toast } from "react-toastify";
import { HttpStatusCode } from "axios";

const Subscribe = () => {
  const [subscribedEmails, setSubscribedEmails] = useState<string[]>([]);
  const [email, setEmail] = useState<string>("");

  const handleSubscribe = (): void => {
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

    subscribe(email)
      .then((response) => {
        if (response.status !== HttpStatusCode.Accepted) {
          throw new Error();
        }
        setSubscribedEmails((prevSubscribedEmails) => [
          ...prevSubscribedEmails,
          email,
        ]);
        toast("Dziękujemy za subskrybcję", {
          type: "success",
          toastId: "success",
        });
      })
      .catch(() =>
        toast("Niepoprawny email", { type: "error", toastId: "error" })
      );
  };

  return (
    <div className="flex flex-row justify-center items-center w-[95%] my-7">
      <Input
        inputProps={{
          value: email,
          onChange: (event) => setEmail(event.target.value),
        }}
        className=" mr-4 sm:w-[420px]"
      />
      <Button
        className="h-[42px] sm:w-[134px]"
        onClick={handleSubscribe}
        variant="colored"
      >
        Subskrybuj
      </Button>
    </div>
  );
};

export default Subscribe;
