// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next";
import { IUser } from "../../../../interfaces/user";
import { getErrorMessageAndStatusCode } from "../../../../utils/errors";
import { createUserProfile } from "../../../../utils/profile";
import { verifyToken } from "../../../../utils/token";
import {
  createNewUserAndProfile,
  generateEmailVerificationEmail,
} from "../../../../utils/users";

type Data = {
  message?: string;
  user?: IUser;
  token?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const { body, query } = req;

    const decodedUser = await verifyToken(body.token);

    const names = decodedUser.name.split(" ");
    let userProfile = <IUser>{
      first_name: names.length > 0 ? names[0] : null,
      last_name: names.length > 1 ? names[1] : null,
      pk: decodedUser.uid,
    };

    const profile = await createUserProfile(decodedUser, userProfile);

    await generateEmailVerificationEmail(profile);

    res.status(200).json({
      message: "success",
      user: profile,
      token: body.token,
    });
  } catch (error: any) {
    const { code, message } = await getErrorMessageAndStatusCode(error);
    res.status(code).json({ message });
  }
}
