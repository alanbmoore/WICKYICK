import { FirebaseError } from "firebase-admin";
import { ERRORS } from "../constants/errors";

export const getErrorMessageAndStatusCode = (error: FirebaseError) => {
  return new Promise<{ code: number; message: string }>(async (resolve) => {
    console.log("error", error);

    let message: string = "Unknown error occurred.";
    let code: number = 400;
    try {
      if (error.code) {
        if (error.code === "auth/id-token-expired") code = 403;
        message = getErrorMessageFromFirebaseCode(error.code);
      } else {
        message = error.message;
      }
      resolve({ message, code });
    } catch (error) {
      console.log("error", error);
      resolve({ message, code });
    }
  });
};

export const getErrorMessageFromFirebaseCode = (code: string) => {
  console.log("code", code);
  let message = "Unknown Error.";
  switch (code) {
    case "auth/id-token-expired":
      message = ERRORS.TOKEN.EXPIRED;
      break;
    case "auth/wrong-password":
      message = ERRORS.LOGIN.INCORRECT;
      break;
    case "auth/email-already-exists":
      message = ERRORS.SIGN_UP.ACCOUNT_IN_USE;
      break;
    case "auth/account-exists-with-different-credential":
      message = ERRORS.SIGN_UP.ACCOUNT_IN_USE;
      break;
    default:
      break;
  }
  return message;
};
