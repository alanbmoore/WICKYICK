import { collection, addDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase-server";
import { IUser } from "../interfaces/user";

export const createUserProfile = (uid: string, obj: IUser) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("uid", uid);
      console.log("obj", obj);
      const profileRef = db.collection("users");
      //   .doc(uid);
      const profileDocs = await profileRef.where("pk", "==", uid).get();
      //   console.log("profileDoc", profileDoc);
      if (!profileDocs.empty) {
        throw new Error("Profile exists.");
      } else {
        const res = await db.collection("users").doc().set(obj);
        resolve(res);
      }
    } catch (error) {
      console.log("createUserProfile: error", error);
      reject(error);
    }
  });
};
export const updateUserProfile = async (obj: IUser) => {};
