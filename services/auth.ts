import { makeRequest } from "../Axios";
import { AxiosResponse } from "axios";

export const AuthServices = {
  requestAccess: async (data: any) => {
    try {
      const url = "api/user/request-access/";
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
  resetPassword: async (data: any) => {
    try {
      const url = "api/user/send-password-reset-email/";
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
  changePassword: async (data: any) => {
    try {
      const url = "api/user/change-password/";
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
  changeEmail: async (data: any) => {
    try {
      const url = "api/user/change-email/";
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
  setPassword: async (data: any) => {
    try {
      const url = "api/user/password-reset/";
      const response = (await makeRequest(
        url,
        "patch",
        {},
        data
      )) as AxiosResponse<any>;
      return response.data;
    } catch (error: any) {
      throw error?.response?.data;
    }
  },
  login: async (data: any) => {
    try {
      const url = "api/rest-auth/login/";
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
