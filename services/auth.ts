import { makeRequest } from "../Axios";
import { AxiosResponse } from "axios";

export const AuthServices = {
  signup: async (data: any) => {
    try {
      const url = "api/user/signup/";
      const response = (await makeRequest(
        url,
        "post",
        {},
        data
      )) as AxiosResponse<any>;
      return response.data;
    } catch (error: any) {
      throw error?.response?.data;
    }
  },
  sign: async (email: string, password: string) => {},
  submitSocialLogin: async (data: any, url: string) => {
    try {
      const response = (await makeRequest(
        url,
        "post",
        {},
        data
      )) as AxiosResponse<any>;
      return response.data;
    } catch (error: any) {
      throw error.response?.data;
    }
  },
};
