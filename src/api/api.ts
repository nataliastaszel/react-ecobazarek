import axios, { AxiosResponse } from "axios";

export const API_PATH = "https://api-eko-bazarek.azurewebsites.net/api";

export const subscribe = (email: string): Promise<AxiosResponse> =>
  axios.post(API_PATH + "/subscribe", { email });
