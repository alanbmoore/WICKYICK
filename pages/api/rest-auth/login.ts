// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { signInWithEmailAndPassword, User } from "firebase/auth";
import type { NextApiRequest, NextApiResponse } from "next";
import { auth } from "../../../config/firebase-client";

import { IUser } from "../../../interfaces/user";
import { getErrorMessageAndStatusCode } from "../../../utils/errors";
import { getProfileFromUser } from "../../../utils/profile";

type Data = {
  non_field_errors: string[] | null;
  key: string | null;
  user: IUser | null;
};

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

    const profile = await getProfileFromUser(response.user);

    const key = await response.user.getIdToken();

    res.status(200).json({
      key,
      user: profile,
      non_field_errors: null,
    });
  } catch (error: any) {
    const { code, message } = await getErrorMessageAndStatusCode(error);
    res
      .status(code)
      .json({ key: null, user: null, non_field_errors: [message] });
  }
}
