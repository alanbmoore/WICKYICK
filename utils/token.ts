import { auth } from "../config/firebase-server";

export const verifyToken = (token: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const decodedToken = await auth.verifyIdToken(token, true);

      resolve(decodedToken);
    } catch (error) {
      reject(error);
    }
  });
};