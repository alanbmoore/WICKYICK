// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next";
import { auth } from "../../../config/firebase-server";
import { IUser } from "../../../interfaces/user";
import { sendMail } from "../../../utils/mail";
import { createUserProfile } from "../../../utils/profile";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { body } = req;
  console.log("body", body);
  try {
    const user = await auth.createUser({
      email: body.email,
      password: body.password1,
      displayName: `${body.firstName} ${body.lastName}`,
      emailVerified: false,
    });

    let userProfile = <IUser>{
      first_name: body.firstName,
      last_name: body.lastName,
      pk: user.uid,
      email: body.email,
    };

    userProfile.first_name = body.first_name;
    userProfile.last_name = body.last_name;
    await createUserProfile(user.uid, userProfile);

    // console.log("auth.currentUser", auth.currentUser);
    const link = await auth.generateEmailVerificationLink(body.email);

    const emailBody = `User ${user.email} has requested an access to ${process.env.DOMAIN_URL}. Please use this link to make user active ${link}`;
    const subject = `${user.email} Access request - ${process.env.DOMAIN_URL}`;
    await sendMail(subject, emailBody, body.email, [
      process.env.DEFAULT_INVITE_EMAIL || "",
    ]);

    res.status(200).json({ message: "Verification e-mail sent." });
  } catch (error: any) {
    let errorMessage: string =
      "Unhandled error. Please contact site administrator.";
    if (error) {
      switch (error.code) {
        case "auth/email-already-exists":
          errorMessage = "Email already in use.";
          break;
        default:
          break;
      }
    }

    res.status(400).json({ message: errorMessage });
  }
}
