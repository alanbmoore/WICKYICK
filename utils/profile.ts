import { DecodedIdToken, UserRecord } from "firebase-admin/auth";
import { User } from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  setDoc,
  updateDoc,
  orderBy,
  limit as collectionLimit,
  startAt,
  endAt,
} from "firebase/firestore";
import { db } from "../config/firebase-client";
import { auth } from "../config/firebase-server";
import { DB_CONSTANTS } from "../constants/db";
import { ERRORS } from "../constants/errors";
import { IUser } from "../interfaces/user";

export const createUserProfile = (
  user: UserRecord | User | DecodedIdToken,
  obj: IUser
) => {
  return new Promise<IUser>(async (resolve, reject) => {
    try {
      const profileRef = doc(
        collection(db, DB_CONSTANTS.PROFILE.COLLECTION_NAME)
      );

      const profileQuery = query(
        collection(db, DB_CONSTANTS.PROFILE.COLLECTION_NAME),
        where("pk", "==", user.uid)
      );
      const profileDocs = await getDocs(profileQuery);
      if (!profileDocs.empty) {
        throw new Error(ERRORS.PROFILE.EXISTS);
      } else {
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

export const updateUserProfile = (
  id: string | null | undefined,
  obj: IUser
) => {
  return new Promise<IUser>(async (resolve, reject) => {
    try {
      const profileRef = doc(
        db,
        DB_CONSTANTS.PROFILE.COLLECTION_NAME,
        id || ""
      );

      let profileSnap = await getDoc(profileRef);
      if (!profileSnap.exists) throw new Error(ERRORS.PROFILE.NOT_FOUND);

      await updateDoc(profileRef, obj as any);

      profileSnap = await getDoc(profileRef);

      resolve({ id: profileSnap.id, ...profileSnap.data() });
    } catch (error) {
      console.log("error", error);
      reject(error);
    }
  });
};

export const isProfileCreatedForUser = (id: string) => {
  return new Promise<boolean>(async (resolve, reject) => {
    try {
      const user = await auth.getUser(id);
      const profileQuery = query(
        collection(db, DB_CONSTANTS.PROFILE.COLLECTION_NAME),
        where("pk", "==", id)
      );
      const profileDocs = await getDocs(profileQuery);

      resolve(!profileDocs.empty);
    } catch (error) {
      reject(error);
    }
  });
};
export const getProfileFromUserId = (id: string) => {
  return new Promise<IUser>(async (resolve, reject) => {
    try {
      const user = await auth.getUser(id);
      const profileQuery = query(
        collection(db, DB_CONSTANTS.PROFILE.COLLECTION_NAME),
        where("pk", "==", id)
      );
      const profileDocs = await getDocs(profileQuery);

      if (!profileDocs.empty) {
        // Get Followers
        const follwersQuery = query(
          collection(db, DB_CONSTANTS.FOLLWERS.COLLECTION_NAME),
          where("agent", "==", id)
        );
        const followerDocs = await getDocs(follwersQuery);
        const agent_followed = followerDocs.docs.map((d) => {
          return d.data();
        });

        // Get Likes
        const likesQuery = query(
          collection(db, DB_CONSTANTS.LIKES.COLLECTION_NAME),
          where("agent", "==", id)
        );
        const likesDocs = await getDocs(likesQuery);
        const agent_liked = likesDocs.docs.map((d) => {
          return d.data();
        });

        resolve({
          id: profileDocs.docs[0].id,
          ...profileDocs.docs[0].data(),
          email: user.email,
          agent_followed,
          agent_liked,
        });
      } else {
        throw new Error(ERRORS.PROFILE.NOT_FOUND);
      }
    } catch (error) {
      reject(error);
    }
  });
};

export const getProfileFromUser = (
  user: UserRecord | User | DecodedIdToken
) => {
  return new Promise<IUser>(async (resolve, reject) => {
    try {
      const profileQuery = query(
        collection(db, DB_CONSTANTS.PROFILE.COLLECTION_NAME),
        where("pk", "==", user.uid)
      );

      const profileDocs = await getDocs(profileQuery);

      if (!profileDocs.empty) {
        const profile = profileDocs.docs.find((d) => d.data().pk === user.uid); //profileDocs.docs[0].data();

        resolve({ id: profile?.id, ...profile?.data(), email: user.email });
      } else {
        throw new Error(ERRORS.PROFILE.NOT_FOUND);
      }
    } catch (error) {
      console.log("error", error);
      reject(error);
    }
  });
};

export const getProfiles = (limit?: number, start?: number, end?: number) => {
  return new Promise<IUser[]>(async (resolve, reject) => {
    try {
      const profilesRef = collection(db, DB_CONSTANTS.PROFILE.COLLECTION_NAME);
      let q;
      if (start || end) {
        q = query(
          profilesRef,
          orderBy("last_name"),
          startAt(start),
          endAt(end)
        );
      } else {
        q = query(
          profilesRef,
          orderBy("last_name"),
          collectionLimit(limit || DB_CONSTANTS.PROFILE.DEFAULT_LIMIT)
        );
      }
      const profileDocs = await getDocs(q);

      if (!profileDocs.empty) {
        let profiles: IUser[] = [];
        profileDocs.forEach((profile) => {
          profiles.push({ id: profile.id, ...profile.data() });
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
