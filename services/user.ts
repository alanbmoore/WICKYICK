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
};
