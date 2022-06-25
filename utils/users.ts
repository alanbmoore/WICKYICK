import { UserRecord } from "firebase-admin/auth";
import { User } from "firebase/auth";
import generator from "generate-password";
import { auth } from "../config/firebase-server";
import { IUser } from "../interfaces/user";
import { sendMail } from "./mail";
import { createUserProfile } from "./profile";

export const createNewUserAndProfile = (obj: any, password?: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await auth.createUser({
        email: obj.email,
        password: password
          ? password
          : generator.generate({ length: 8, numbers: true }),
        emailVerified: false,
      });

      let userProfile = <IUser>{
        first_name: obj.firstName,
        last_name: obj.lastName,
        pk: user.uid,
      };

      userProfile.first_name = obj.first_name;
      userProfile.last_name = obj.last_name;
      const profile = await createUserProfile(user.uid, userProfile);

      resolve(profile);
    } catch (error) {
      reject(error);
    }
  });
};

export const getUserFromUid = (uid: string) => {
  return new Promise<UserRecord>(async (resolve, reject) => {
    try {
      const user = await auth.getUser(uid);
      resolve(user);
    } catch (error) {
      reject(error);
    }
  });
};

export const generateEmailVerificationEmail = (profile: any) => {
  return new Promise(async (resolve, reject) => {
    try {
      const link = await auth.generateEmailVerificationLink(profile.email);

      const emailBody = `User ${profile.email} has requested an access to ${process.env.DOMAIN_URL}. Please use this link to make user active ${link}`;
      const subject = `${profile.email} Access request - ${process.env.DOMAIN_URL}`;
      await sendMail(subject, emailBody, profile.email, [
        process.env.DEFAULT_INVITE_EMAIL || "",
      ]);
      resolve("success");
    } catch (error) {
      reject(error);
    }
  });
};

export const generatePasswordResetEmail = (profile: any) => {
  return new Promise(async (resolve, reject) => {
    try {
      const link = await auth.generatePasswordResetLink(profile.email, {
        url: process.env.DOMAIN_URL,
      });

      const emailBody = `Please click on the link below to reset your password \n${link}`;
      const subject = `Reset your password - ${process.env.DOMAIN_URL}`;
      await sendMail(subject, emailBody, process.env.DEFAULT_FROM_EMAIL, [
        profile.email,
      ]);
      resolve("success");
    } catch (error) {
      reject(error);
    }
  });
};
