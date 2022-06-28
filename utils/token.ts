import { DecodedIdToken } from "firebase-admin/auth";
import { auth } from "../config/firebase-server";

export const verifyToken = (token: string) => {
  return new Promise<DecodedIdToken>(async (resolve, reject) => {
    try {
      const decodedToken = await auth.verifyIdToken(token, true);

      resolve(decodedToken);
    } catch (error) {
      reject(error);
    }
  });
};
