import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Button from "../button/Button";
import Input from "../input/Input";
import TextField from "../text-field/TextField";
import { FormEvent, useState } from "react";
import { FormFieldProps, UserProfile } from "../../types/types";
import { updateUserData } from "../../api";
import axios, { AxiosError, AxiosResponseHeaders } from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { userProfileActions } from "../../redux/userProfile";

const resetUserFarmDescValue: UserProfile = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
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

export const UserFarmDescForm = () => {
  const dispatch = useDispatch();

  const storedUserFarmData = useSelector(
    (state: RootState) => state.userProfile.userData
  );
  const [userFarmData, setUserFarmData] = useState(storedUserFarmData);

  const clearFormFields = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setUserFarmData(resetUserFarmDescValue);
  };

  const handleUpdate = async (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    await updateUserData(userFarmData)
      .then(() => {
        dispatch(userProfileActions.setUserData(userFarmData));
        toast("Dane zostały zmienione", {
          type: "success",
          toastId: "success",
        });
      })
      .catch((error: AxiosError<AxiosResponseHeaders>) => {
        const errorMessageResponse = error.response?.data.message;
        if (axios.isAxiosError(error) && errorMessageResponse) {
          toast(errorMessageResponse, {
            type: "error",
            toastId: "error",
          });
        } else {
          toast("Coś poszło nie tak, nie można zapisać", {
            type: "error",
            toastId: "error",
          });
        }
      });
  };

  const getInputValue = (key: keyof UserProfile): FormFieldProps => ({
    name: key,
    value: userFarmData[key],
    onChange: (event) =>
      setUserFarmData((previous) => ({
        ...previous,
        [key]: event.target.value,
      })),
  });

  return (
    <>
      <form className="sm:w-full  w-[95%] justify-center items-center">
        <div className="flex sm:w-full flex-wrap w-[73%] ml-9 sm:ml-0">
          <Input
            className="mb-4 sm:w-[342px] mr-4"
            labelText="Imię"
            required
            value={userFarmData.firstName}
            inputProps={{ ...getInputValue("firstName") }}
          />
          <Input
            className="mb-4 sm:w-[342px] mr-4"
            labelText="Nazwisko"
            required
            value={userFarmData.lastName}
            inputProps={{ ...getInputValue("lastName") }}
          />
          <Input
            className="mb-4 sm:w-[342px] mr-4"
            labelText="Email"
            required
            value={userFarmData.email}
            inputProps={{ ...getInputValue("email") }}
          />
          <Input
            className="mb-4 sm:w-[342px] mr-4"
            labelText="Telefon"
            required
            value={userFarmData.phone}
            inputProps={{ ...getInputValue("phone") }}
          />
        </div>
        <h4 className="flex text-sm font-bold mt-2 mb-7 ml-4 sm:ml-0 w-[73%] sm:w-2/3 text-brown">
          ADRES I INFORMACJE O GOSPODARSTWIE
        </h4>
        <div className="flex w-[73%] flex-wrap items-center justify-center">
          <Input
            className="mb-4 sm:w-full"
            labelText="Nazwa gospodarstwa"
            required
            value={userFarmData.farmName}
            inputProps={{ ...getInputValue("farmName") }}
          />
          <TextField
            labelText="Opis gospodarstwa"
            className="mb-4 sm:w-full sm:h-[130px]"
            value={userFarmData.farmDesc}
            textFieldProps={{ ...getInputValue("farmDesc") }}
          />
          <Input
            className="mb-4 sm:w-[333px] sm:mr-4"
            labelText="Ulica"
            required
            value={userFarmData.street}
            inputProps={{ ...getInputValue("street") }}
          />
          <Input
            className="mb-4 sm:w-[164px] sm:mr-4"
            labelText="Numer domu"
            required
            value={userFarmData.streetNumber}
            inputProps={{ ...getInputValue("streetNumber") }}
          />
          <Input
            className="mb-4 sm:w-[164px]"
            labelText="Numer mieszkania"
            required
            value={userFarmData.flatNumber}
            inputProps={{ ...getInputValue("flatNumber") }}
          />
          <Input
            className="mb-4 sm:w-[338px] sm:mr-4"
            labelText="Miasto/Wieś"
            required
            value={userFarmData.city}
            inputProps={{ ...getInputValue("city") }}
          />
          <Input
            className="mb-4 sm:w-[338px]"
            labelText="Kod pocztowy"
            required
            value={userFarmData.postCode}
            inputProps={{ ...getInputValue("postCode") }}
          />
          <Input
            className="mb-4 sm:w-[338px] sm:mr-4"
            labelText="Kraj"
            required
            value={userFarmData.country}
            inputProps={{ ...getInputValue("country") }}
          />
          <Input
            className="mb-4 sm:w-[338px]"
            labelText="Województwo"
            required
            value={userFarmData.voivodeship}
            inputProps={{ ...getInputValue("voivodeship") }}
          />
          <Input
            className="mb-4 sm:w-[338px] sm:mr-4"
            labelText="Powiat"
            required
            value={userFarmData.county}
            inputProps={{ ...getInputValue("county") }}
          />
          <Input
            className="mb-4 sm:w-[338px]"
            labelText="Gmina"
            required
            value={userFarmData.district}
            inputProps={{ ...getInputValue("district") }}
          />
        </div>
        <div className="flex mt-10 mb-[120px] w-[98%] sm:w-[73%] h-9 items-end justify-end">
          <Button
            variant="basic"
            buttonText="Reset"
            className="p-2 mt-2 sm:w-[115px] w-2/6 text-center mr-2"
            onClick={clearFormFields}
          />
          <Button
            variant="colored"
            buttonText="Zapisz"
            className="p-2 mt-2 w-1/6 sm:w-[99px] ml-1 "
            onClick={handleUpdate}
          />
        </div>
      </form>
    </>
  );
};
