import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import {
  CategoryItem,
  ContactFormState,
  NewProduct,
  PasswordChangeFormState,
  Product,
  RegistrationFormState,
  UserLoginData,
  UserProfile,
} from "../types/types";

const getAxiosRequestConfig = (): AxiosRequestConfig => ({
  headers: {
    Authorization: "Bearer " + localStorage.getItem("userProfileToken"),
  },
});

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

export const getAllCategories = (): Promise<AxiosResponse<CategoryItem[]>> =>
  axios.get(API_PATH + "/products/categories");

export const register = (data: RegistrationFormState): Promise<AxiosResponse> =>
  axios.post(API_PATH + "/users", { ...data, repeatedPassword: undefined });

export const updateUserData = (data: UserProfile): Promise<AxiosResponse> => {
  return axios.put(API_PATH + "/users", data, getAxiosRequestConfig());
};

export const login = (data: UserLoginData) =>
  axios.post(API_PATH + "/users/login", { ...data }).then((response) => {
    if (response.data.token) {
      localStorage.setItem("userProfileToken", response.data.token);
    }
    return response;
  });

export const logOut = () => {
  localStorage.removeItem("userProfileToken");
};

export const changePassword = (
  data: PasswordChangeFormState
): Promise<AxiosResponse> => {
  return axios.post(
    API_PATH + "/users/change-password",
    { oldPassword: data.oldPassword, newPassword: data.password },
    getAxiosRequestConfig()
  );
};

export const getProductTypes = (): Promise<AxiosResponse<Product[]>> => {
  return axios.get(API_PATH + "/products/types", getAxiosRequestConfig());
};

export const getProductUnits = (): Promise<AxiosResponse<Product[]>> => {
  return axios.get(API_PATH + "/products/units", getAxiosRequestConfig());
};

export const getProductCategories = (): Promise<AxiosResponse<Product[]>> => {
  return axios.get(API_PATH + "/products/categories", getAxiosRequestConfig());
};

export const createNewProduct = (data: NewProduct): Promise<AxiosResponse> => {
  return axios.post(API_PATH + "/products", data, getAxiosRequestConfig());
};

export const getUserData = (): Promise<AxiosResponse> => {
  return axios.get(API_PATH + "/users/me", getAxiosRequestConfig());
};

export const getUserProducts = (): Promise<AxiosResponse<NewProduct[]>> => {
  return axios.get(API_PATH + "/products", getAxiosRequestConfig());
};
