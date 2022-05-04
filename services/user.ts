import { makeRequest } from "../Axios";
import { AxiosResponse } from "axios";

export const UserService = {
  updateProfile: async (data: any) => {
    try {
      const url = "api/user/update/profile/";
      const response = (await makeRequest(
        url,
        "put",
        {},
        data
      )) as AxiosResponse<any>;
      return response.data;
    } catch (error: any) {
      throw error?.response?.data;
    }
  },

  getUserList: async (params: any) => {
    try {
      const url = "api/user/users/";
      const response = (await makeRequest(
        url,
        "get",
        {},
        {},
        params
      )) as AxiosResponse<any>;
      return response.data;
    } catch (error: any) {
      throw error?.response?.data;
    }
  },

  getInstagramData: async (id: any) => {
    try {
      const url = `api/user/get-instagram-media/${id}/`;
      const response = (await makeRequest(
        url,
        "get",
        {},
        {}
      )) as AxiosResponse<any>;
      return response.data;
    } catch (error: any) {
      throw error?.response?.data;
    }
  },

  sendInstagramCode: async (data: any) => {
    try {
      const url = "api/user/get-instagram-token/";
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

  followAgent: async (data: any) => {
    try {
      const url = "api/user/add-follower/";
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

  likeAgent: async (data: any) => {
    try {
      const url = "api/user/like-agent/";
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
};
