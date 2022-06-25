import axios, { AxiosRequestConfig } from "axios";
import router from "next/router";

const BASE_URL: string = process.env.REACT_APP_BASE_URL || "";
export const axiosObj = axios.create();

export const makeRequest = (
  url: AxiosRequestConfig["url"],
  method: AxiosRequestConfig["method"],
  headers?: AxiosRequestConfig["headers"],
  body?: AxiosRequestConfig["data"],
  params?: AxiosRequestConfig["params"]
) => {
  return new Promise((resolve, reject) => {
    const token = body.token || localStorage.getItem("id_token");
    let updatedHeaders: any = { ...headers };
    if (token)
      updatedHeaders = {
        ...updatedHeaders,
        Authorization: "Token " + token,
      };
    axiosObj({
      url: BASE_URL + url,
      method: method,
      headers: updatedHeaders,
      data: body,
      params,
    })
      .then((response: any) => {
        resolve(response);
      })
      .catch((err: any) => {
        // Handle error here.
        if (err?.response?.status === 403) {
          localStorage.removeItem("id_token");
          router.push("/");
        }
        reject(err);
      });
  });
};
