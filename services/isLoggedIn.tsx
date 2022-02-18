import router from "next/router";

const TOKEN_KEY = "id_token";

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
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
