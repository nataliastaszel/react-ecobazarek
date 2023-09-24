import Input from "../input/Input";
import { BanknotesIcon, PhotoIcon } from "@heroicons/react/24/outline";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import TextField from "../text-field/TextField";
import Button from "../button/Button";
import { FormEvent, useEffect, useState } from "react";
import { FormFieldProps, NewProduct, Product } from "../../types/types";
import { toast } from "react-toastify";
import {
  createNewProduct,
  getProductCategories,
  getProductTypes,
  getProductUnits,
} from "../../api";
import { Autocomplate } from "../autocomplete/AutoCompleteInput";
import { useDispatch } from "react-redux";
import { userProfileActions } from "../../redux/userProfile";

const initialAddProductFormState: NewProduct = {
  name: "",
  desc: "",
  type: "",
  category: "",
  price: 0,
  unit: "",
};

export const AddingProductForm = () => {
  const [productTypes, setProductTypes] = useState<Product[]>([]);
  const [productUnits, setProductUnits] = useState<Product[]>([]);
  const [productCategories, setProductCategories] = useState<Product[]>([]);
  const [addProductFormState, setAddProductFormState] = useState<NewProduct>(
    initialAddProductFormState
  );

  const dispatch = useDispatch();

  useEffect(() => {
    Promise.all([getProductTypes(), getProductUnits(), getProductCategories()])
      .then((response) => {
        setProductTypes(response[0].data);
        setProductUnits(response[1].data);
        setProductCategories(response[2].data);
      })
      .catch((error) => {
        toast(error.response?.data.message, {
          type: "error",
          toastId: "error",
        });
      });
  }, []);

  const filterFunction = (query: string, product: Product): boolean =>
    product.name.toLowerCase().includes(query.toLowerCase());

  const clearFormData = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setAddProductFormState(initialAddProductFormState);
  };

  const getInputValue = (key: keyof NewProduct): FormFieldProps => ({
    name: key,
    value: addProductFormState[key],
    onChange: (event) =>
      setAddProductFormState((previous) => ({
        ...previous,
        [key]: event.target.value,
      })),
  });

  const handleSubmit = async (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    await createNewProduct(addProductFormState)
      .then((response) => {
        dispatch(userProfileActions.setUserProducts(response.data));
        toast("Produkt został dodany", { type: "success", toastId: "success" });
      })
      .catch((error) => {
        toast(
          error.response?.data.message ??
            "Nie można dodać produktu, spróbuj za chwilę",
          {
            type: "error",
            toastId: "error",
          }
        );
      });
  };

  return (
    <>
      <h1 className="flex text-[52px] font-extrabold mt-14 mb-7 w-[98%] sm:w-2/3 text-brown">
        DODAJ PRODUKTY
      </h1>
      <form className="sm:w-2/3 flex flex-wrap">
        <div className="p-4 bg-white sm:w-[514px] sm:h-[258px] mb-2 border-b-grey rounded-2xl flex items-center justify-center flex-col">
          <PhotoIcon className="w-[151px] h-[151px]" />
          <p className=" text-sm mt-2">Kliknij lub upuść plik</p>
        </div>
        <p className=" text-xs mb-8 flex sm:w-2/3">
          <ExclamationTriangleIcon className="w-[20px] h-[18px] mr-1" />
          Maksymalny rozmiar pliku 1 MB. Wspieramy formaty *.jpg, *.gif, *.png
        </p>
        <Input
          labelText="Nazwa produktu"
          className="w-11/12 mb-2"
          inputProps={{ ...getInputValue("name") }}
        />
        <TextField
          labelText="Opis"
          className="w-11/12 mb-2 sm:h-[150px]"
          textFieldProps={{ ...getInputValue("desc") }}
        />
        <Autocomplate
          className="mb-2 mr-4 sm:w-[250px]"
          labelText="Typ produktu"
          items={productTypes}
          selected={
            productTypes.find(
              (product) => product.name === addProductFormState.type
            ) || null
          }
          required
          onSelectItem={(item) =>
            setAddProductFormState((prev) => ({ ...prev, type: item!.name }))
          }
          getKey={(product) => product.id}
          getLabel={(product) => product.name}
          filterFunction={filterFunction}
          inputProps={{ ...getInputValue("type") }}
        />
        <Autocomplate
          className="mb-2 mr-4 sm:w-[250px]"
          labelText="Kategoria"
          items={productCategories}
          selected={
            productCategories.find(
              (category) => category.name === addProductFormState.category
            ) || null
          }
          onSelectItem={(item) =>
            setAddProductFormState((prev) => ({
              ...prev,
              category: item!.name,
            }))
          }
          getKey={(product) => product.id}
          getLabel={(product) => product.name}
          required
          filterFunction={filterFunction}
          inputProps={{ ...getInputValue("category") }}
        />
        <div className="relative mt-2">
          <Input
            labelText="Cena za jednostkę"
            className="sm:w-[250px] mb-2 input-test"
            inputProps={{ ...getInputValue("price") }}
          />
          <BanknotesIcon className="w-[19px] h-[19px] absolute top-[45%] right-3 translate-y--1/2" />
        </div>
        <Autocomplate
          className="mb-2 mr-4 sm:w-[250px]"
          labelText="Jednostka"
          items={productUnits}
          selected={
            productUnits.find(
              (unit) => unit.name === addProductFormState.unit
            ) || null
          }
          required
          onSelectItem={(item) =>
            setAddProductFormState((prev) => ({ ...prev, unit: item!.name }))
          }
          getKey={(product) => product.id}
          getLabel={(product) => product.name}
          filterFunction={filterFunction}
          inputProps={{ ...getInputValue("unit") }}
        />
        <div className="flex mt-[100px] mb-[150px] w-[98%] sm:w-[57%] h-9 items-end justify-end">
          <Button
            variant="basic"
            type="button"
            className="p-2 mt-2 sm:w-[115px] w-2/6 text-center mr-2"
            buttonText="Reset"
            onClick={clearFormData}
          />
          <Button
            variant="colored"
            className="p-2 mt-2 w-1/6 sm:w-[99px] ml-1 sm:mr-1"
            buttonText="Dodaj"
            onClick={handleSubmit}
          />
        </div>
      </form>
    </>
  );
};
