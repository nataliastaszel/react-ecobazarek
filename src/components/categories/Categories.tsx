import axios, { AxiosError } from "axios";
import { getCategories } from "../../api";
import {
  AxiosResponseWithErrors,
  CategoryItem,
  LoadingComponentProps,
} from "../../types/types";
import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import { toast } from "react-toastify";

export const Categories = ({ onRequestLoading }: LoadingComponentProps) => {
  const [categoryItems, setCategoryItems] = useState<CategoryItem[]>([]);

  useEffect(() => {
    const getCategoryItems = async () => {
      onRequestLoading(true);
      await getCategories()
        .then((response) => {
          setCategoryItems(response.data);
          onRequestLoading(false);
        })
        .catch((error: AxiosError<AxiosResponseWithErrors>) => {
          onRequestLoading(false);
          const errorMessageResponse = error.response?.data.errors[0];
          if (axios.isAxiosError(error) && errorMessageResponse) {
            toast(errorMessageResponse, {
              type: "error",
              toastId: "error",
            });
          } else {
            toast("Coś poszło nie tak, nie można załadować kategorii", {
              type: "error",
              toastId: "error",
            });
          }
        });
    };
    getCategoryItems();
  }, [onRequestLoading]);

  return (
    <>
      <h1 className="mb-4 text-[32px] font-medium text-center">
        POPULARNE KATEGORIE
      </h1>
      <div className="flex flex-wrap sm:w-[70%] justify-center items-center mb-5">
        {categoryItems.map((data) => (
          <CategoryCard key={data.id} iconUrl={data.iconUrl} name={data.name} />
        ))}
      </div>
    </>
  );
};
