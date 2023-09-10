import axios, { AxiosResponse } from "axios";
import { CategoryItem, ContactFormState } from "../types/types";

export const API_PATH = "https://api-eko-bazarek.azurewebsites.net/api";

export const subscribe = (email: string): Promise<AxiosResponse> =>
  axios.post(API_PATH + "/subscribe", { email });

export const postContactFormData = (
  data: ContactFormState
): Promise<AxiosResponse> =>
  axios.post(API_PATH + "/contact", {
    ...data,
    phone: data.phone ? data.phone : undefined,
  });

export const getCategories = (): Promise<AxiosResponse<CategoryItem[]>> =>
  axios.get(API_PATH + "/products/categories/top");
