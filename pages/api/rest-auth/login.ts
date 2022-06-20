// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { signInWithEmailAndPassword, User } from "firebase/auth";
import type { NextApiRequest, NextApiResponse } from "next";
import { auth } from "../../../config/firebase-client";
import { db } from "../../../config/firebase-server";
import { IUser } from "../../../interfaces/user";

type Data = {
  non_field_errors: string[] | null;
  key: string | null;
  user: IUser | null;
};

// Fields
// {
//   "pk": 76,
//   "email": "mike@munchdevelopment.com",
//   "first_name": "Michael",
//   "last_name": "Griffin",
//   "picture": null,
//   "license_number": null,
//   "company": null,
//   "location": null,
//   "phone_number": null,
//   "site_username": null,
//   "bio": null,
//   "language": null,
//   "job_title": null,
//   "instagram_data": null,
//   "instagram_connected": false,
//   "address": null,
//   "tags": null,
//   "is_on_boarding_completed": false,
//   "is_verified": false,
//   "agent_followed": [],
//   "agent_liked": [],
//   "experience": null,
//   "role": "Basic"
// }
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { body } = req;
  try {
    const response = await signInWithEmailAndPassword(
      auth,
      body.email,
      body.password
    );

    const profileRef = db.collection("users");
    //   .doc(uid);
    const profileDocs = await profileRef
      .where("pk", "==", response.user.uid)
      .get();

    const profile = profileDocs.docs[0].data();
    const key = await response.user.getIdToken();
    const user: IUser = {
      last_name: profile.last_name,
      first_name: profile.first_name,
    };

    res.status(200).json({
      key,
      user,
      non_field_errors: null,
    });
  } catch (error: any) {
    let errorMessage: string =
      "Unhandled error.  Please contact site administrator.";
    if (error) {
      switch (error.code) {
        case "auth/wrong-password":
          errorMessage = "Login Incorrect.";
          break;

        default:
          break;
      }
    }
    res
      .status(400)
      .json({ key: null, user: null, non_field_errors: [errorMessage] });
  }
}
