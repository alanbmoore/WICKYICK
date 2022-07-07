// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next";
import { auth } from "../../../../config/firebase-server";
import { IUser } from "../../../../interfaces/user";
import { getErrorMessageAndStatusCode } from "../../../../utils/errors";
import {
  createUserProfile,
  getProfileFromUserId,
  isProfileCreatedForUser,
} from "../../../../utils/profile";
import { generateEmailVerificationEmail } from "../../../../utils/users";

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

    const user = await auth.getUser(body.user.user.uid);
    let profile;

    const isProfileCreated = await isProfileCreatedForUser(body.user.user.uid);
    if (!isProfileCreated) {
      const names = user.displayName.split(" ");
      let userProfile = <IUser>{
        first_name: names.length > 0 ? names[0] : null,
        last_name: names.length > 1 ? names[1] : null,
        pk: user.uid,
      };

      profile = await createUserProfile(user, userProfile);

      await generateEmailVerificationEmail(profile);
    } else {
      profile = await getProfileFromUserId(body.user.user.uid);
    }

    res.status(200).json({
      message: "success",
      user: profile,
      token: body.user._tokenResponse.idToken,
    });
  } catch (error: any) {
    const { code, message } = await getErrorMessageAndStatusCode(error);
    res.status(code).json({ message });
  }
}
