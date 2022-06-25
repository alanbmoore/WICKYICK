import { getAuth, UserRecord } from "firebase-admin/auth";
import { User, UserCredential } from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  addDoc,
  setDoc,
  updateDoc,
  orderBy,
  limit as collectionLimit,
  startAt,
  endAt,
} from "firebase/firestore";
import { db } from "../config/firebase-client";
import { DB_CONSTANTS } from "../constants/db";
import { ERRORS } from "../constants/errors";
import { IUser } from "../interfaces/user";

export const createUserProfile = (uid: string, obj: IUser) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log(
        "DB_CONSTANTS.PROFILE.COLLECTION_NAME",
        DB_CONSTANTS.PROFILE.COLLECTION_NAME
      );
      const profileRef = doc(
        collection(db, DB_CONSTANTS.PROFILE.COLLECTION_NAME)
      );
      console.log("profileRef", profileRef);
      const q = query(
        collection(db, DB_CONSTANTS.PROFILE.COLLECTION_NAME),
        where("pk", "==", uid)
      );
      const profileDocs = await getDocs(q);
      if (!profileDocs.empty) {
        throw new Error(ERRORS.PROFILE.EXISTS);
      } else {
        console.log("");
        await setDoc(profileRef, obj);
        let profileSnap = await getDoc(profileRef);
        resolve({ id: profileSnap.id, ...profileSnap.data() });
      }
    } catch (error) {
      console.log("createUserProfile: error", error);
      reject(error);
    }
  });
};

export const updateUserProfile = (id: string, obj: IUser) => {
  return new Promise<IUser>(async (resolve, reject) => {
    try {
      // console.log("updateUserProfile", id);
      const profileRef = doc(db, DB_CONSTANTS.PROFILE.COLLECTION_NAME, id);

      let profileSnap = await getDoc(profileRef);
      if (!profileSnap.exists) throw new Error(ERRORS.PROFILE.NOT_FOUND);
      // console.log("obj", obj);
      await updateDoc(profileRef, obj);

      profileSnap = await getDoc(profileRef);

      resolve({ id: profileSnap.id, ...profileSnap.data() });
    } catch (error) {
      console.log("error", error);
      reject(error);
    }
  });
};

export const getProfileFromId = (id: string) => {
  return new Promise<IUser>(async (resolve, reject) => {
    try {
      const profileRef = doc(db, DB_CONSTANTS.PROFILE.COLLECTION_NAME, id);

      const profileSnap = await getDoc(profileRef);

      if (!profileSnap.exists()) {
        resolve({ id: profileSnap.id, ...profileSnap.data() });
      } else {
        throw new Error(ERRORS.PROFILE.EXISTS);
      }
    } catch (error) {
      reject(error);
    }
  });
};
export const getProfileFromUser = (
  user: UserRecord | User | UserCredential
) => {
  return new Promise<IUser>(async (resolve, reject) => {
    try {
      console.log("getProfileFromUserId");

      const q = query(
        collection(db, DB_CONSTANTS.PROFILE.COLLECTION_NAME),
        where("pk", "==", user.uid)
      );

      const profileDocs = await getDocs(q);

      if (!profileDocs.empty) {
        const profile = profileDocs.docs.find((d) => d.data().pk === user.uid); //profileDocs.docs[0].data();
        // console.log("getProfileFromUserId:profile", profile);
        resolve({ id: profile?.id, ...profile?.data(), email: user.email });
      } else {
        throw new Error(ERRORS.PROFILE.EXISTS);
      }
    } catch (error) {
      console.log("error", error);
      reject(error);
    }
  });
};

export const getProfiles = (limit?: number, start?: number, end?: number) => {
  return new Promise(async (resolve, reject) => {
    try {
      const profilesRef = collection(db, DB_CONSTANTS.PROFILE.COLLECTION_NAME);
      let q;
      if (start || end) {
        console.log("start || end", start, end);
        q = query(
          profilesRef,
          orderBy("last_name"),
          startAt(start),
          endAt(end)
        );
      } else {
        console.log("else start || end");
        q = query(
          profilesRef,
          orderBy("last_name"),
          collectionLimit(limit || DB_CONSTANTS.PROFILE.DEFAULT_LIMIT)
        );
      }
      const profileDocs = await getDocs(q);

      if (!profileDocs.empty) {
        // console.log("getProfileFromUserId:profile", profile);
        const profiles = profileDocs.forEach((profile) => {
          return { id: profile.id, ...profile.data() };
        });
        resolve(profiles);
      } else {
        throw new Error(ERRORS.PROFILE.NOT_FOUND);
      }
    } catch (error) {
      console.log("error", error);
      reject(error);
    }
  });
};
