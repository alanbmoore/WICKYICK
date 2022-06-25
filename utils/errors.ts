import { ERRORS } from "../constants/errors";

export const getErrorMessageAndStatusCode = (error) => {
  return new Promise<{ code: number; message: string }>(async (resolve) => {
    console.log("error", error);
    // console.log(
    //   "error.response.data.error_message",
    //   error.response.data.error_message
    // );
    let message: string = "Unknown error occurred.";
    let code: number = 400;
    try {
      if (error.code) {
        switch (error.code) {
          case "auth/id-token-expired":
            code = 403;
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
