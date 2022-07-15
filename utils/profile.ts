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
import {
  SearchParams,
  SearchResponse,
} from "typesense/lib/Typesense/Documents";
import { db } from "../config/firebase-client";
import { auth } from "../config/firebase-server";
import { DB_CONSTANTS } from "../constants/db";
import { ERRORS } from "../constants/errors";
import { IProfileSnapshot } from "../interfaces/profile";
import { IUser } from "../interfaces/user";
import client from "../utils/typesense";

export const createProfileInSearchIndex = (snapshot: IProfileSnapshot) => {
  return new Promise(async (resolve, reject) => {
    try {
      const search = {
        q: snapshot.uid,
        query_by: "uid",
      };
      const result = await client
        .collections("profiles")
        .documents()
        .search(search);

      if (result.found === 0) {
        console.log("no results");
        const result = await client
          .collections("profiles")
          .documents()
          .create(snapshot);
      }
      resolve(result);
    } catch (error) {
      resolve(error);
    }
  });
};
export const updateProfileInSearchIndex = (snapshot: IProfileSnapshot) => {
  return new Promise(async (resolve, reject) => {
    try {
      const document = result.hits[0].document;
      await client
        .collections("profiles")
        .documents(document.id)
        .update(snapshot);
      resolve(result);
    } catch (error) {
      resolve(error);
    }
  });
};
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

        // create new record in typesense
        console.log("create new record in typesense");
        const { first_name, last_name, company, site_username, pk, picture } =
          profileSnap.data();
        const document: IProfileSnapshot = {
          uid: pk,
          first_name,
          last_name,
          company,
          site_username,
          picture,
        };

        // Index the document in profiles collection
        await createProfileInSearchIndex(document);
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

      // update record in typesense
      const { first_name, last_name, company, site_username, pk, picture } =
        profileSnap.data();
      const document: IProfileSnapshot = {
        uid: pk,
        first_name,
        last_name,
        company,
        site_username,
        picture,
      };
      // Index the document in profiles collection
      await updateProfileInSearchIndex(document);

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
        where("pk", "==", user.uid)
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
        // create and send back
        const names = (user.displayName || "").split(" ");
        let userProfile = <IUser>{
          first_name: names.length > 0 ? names[0] : null,
          last_name: names.length > 1 ? names[1] : null,
          display_name: user.displayName,
          picture: user.photoURL,
          phone_number: user.phoneNumber || "",
          pk: user.uid,
          role: "Basic",
        };

        const newProfile = await createUserProfile(user, userProfile);
        resolve(newProfile);
      }
    } catch (error) {
      console.log("error", error);
      reject(error);
    }
  });
};

export const getProfiles = (
  limit?: number,
  start?: number,
  end?: number,
  keyword?: string
) => {
  return new Promise<IUser[]>(async (resolve, reject) => {
    try {
      let searchResults: SearchResponse;
      let search: SearchParams;
      if (keyword) {
        search = {
          q: keyword,
          query_by: "first_name,last_name,site_username",
        };
      } else {
        search = {
          q: "*",
          query_by: "first_name,last_name,site_username",
        };
      }

      searchResults = await client
        .collections("profiles")
        .documents()
        .search(search);

      const profiles: IUser[] = searchResults.hits?.map((h) => {
        return {
          id: h.document.uid,
          pk: h.document.uid,
          first_name: h.document.first_name,
          last_name: h.document.last_name,
          company: h.document.company,
          site_username: h.document.site_username,
          picture: h.document.picture,
        };
      });

      resolve(profiles);
    } catch (error) {
      console.log("error", error);
      reject(error);
    }
  });
};
// export const getProfiles = (
//   limit?: number,
//   start?: number,
//   end?: number,
//   keyword?: string
// ) => {
//   return new Promise<IUser[]>(async (resolve, reject) => {
//     try {
//       const profilesRef = collection(db, DB_CONSTANTS.PROFILE.COLLECTION_NAME);

//       let q;
//       if (start || end) {
//         q = query(
//           profilesRef,
//           orderBy("display_name"),
//           startAt(start),
//           endAt(end)
//         );
//       } else if (keyword) {
//         console.log("keyword", keyword);
//         console.log(`${keyword.toLowerCase()}\uf8ff`);
//         q = query(
//           profilesRef,
//           orderBy("display_name"),
//           startAt(keyword.toUpperCase()),
//           endAt(`${keyword.toLowerCase()}\uf8ff`),
//           collectionLimit(limit || DB_CONSTANTS.PROFILE.DEFAULT_LIMIT)
//         );
//       } else {
//         console.log("else");
//         q = query(
//           profilesRef,
//           orderBy("display_name"),
//           collectionLimit(limit || DB_CONSTANTS.PROFILE.DEFAULT_LIMIT)
//         );
//       }

//       const profileDocs = await getDocs(q);
//       let profiles: IUser[] = [];

//       if (!profileDocs.empty) {
//         profileDocs.forEach((profile) => {
//           profiles.push({ id: profile.id, ...profile.data() });
//         });
//         console.log("profiles", profiles);
//       }
//       resolve(profiles);
//     } catch (error) {
//       console.log("error", error);
//       reject(error);
//     }
//   });
// };
