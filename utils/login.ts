import {
  AuthProvider,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../config/firebase-client";
import { AuthService } from "../services/auth";

export const submitSocialLogin = (
  providerName: "google" | "facebook",
  authProvider: AuthProvider
) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await signInWithPopup(auth, authProvider);
      let credential;
      switch (providerName) {
        case "facebook":
          credential = FacebookAuthProvider.credentialFromResult(result);
          break;
        case "google":
          credential = GoogleAuthProvider.credentialFromResult(result);
        default:
          credential = GoogleAuthProvider.credentialFromResult(result);
      }
      let obj = {
        credential,
        user: result,
      };
      const response = await AuthService.submitSocialLogin(
        obj,
        `/api/user/social-login/${providerName}/`
      );
      // console.log("AuthService.submitSocialLogin: response", response);
      resolve(response);
    } catch (error: any) {
      reject(error);
    }
  });
};
