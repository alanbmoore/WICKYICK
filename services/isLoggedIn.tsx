import router from "next/router";

export const TOKEN_KEY = "id_token";
export const USER_KEY = "user";

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
  router.push("/");
};

export const isLogin = () => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem(TOKEN_KEY) || "") {
      return true;
    }
  }
  return false;
};

export const getUser = () => {
  if (typeof window !== "undefined") {
    if (
      localStorage.getItem(USER_KEY) !== "null" &&
      localStorage.getItem(USER_KEY) !== "undefined" &&
      localStorage.getItem(USER_KEY)
    ) {
      return JSON.parse(localStorage.getItem(USER_KEY) || "");
    } else {
      localStorage.removeItem(USER_KEY);
      localStorage.removeItem(TOKEN_KEY);
      router.push("/login");
    }
  }
  return false;
};
