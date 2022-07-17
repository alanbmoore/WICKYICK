// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next";
import { SearchParams } from "typesense/lib/Typesense/Documents";
import { auth } from "../../../../config/firebase-server";
import { IProfileSnapshot } from "../../../../interfaces/profile";
import { IUser } from "../../../../interfaces/user";
import { getErrorMessageAndStatusCode } from "../../../../utils/errors";
import {
  createProfileInSearchIndex,
  createUserProfile,
  getProfileFromUserId,
  isProfileCreatedForUser,
} from "../../../../utils/profile";
import client from "../../../../utils/typesense";
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
    // if (!user.emailVerified) throw new Error("Email not verified!");
    let profile;

    const isProfileCreated = await isProfileCreatedForUser(body.user.user.uid);
    console.log("isProfileCreated", isProfileCreated);
    console.log("user", user);
    if (!isProfileCreated && user) {
      const names = (user.displayName || "").split(" ");
      let userProfile = <IUser>{
        first_name: names.length > 0 ? names[0] : null,
        last_name: names.length > 1 ? names[1] : null,
        display_name: user.displayName,
        picture: user.photoURL,
        phone_number: user.phoneNumber || "",
        is_on_boarding_completed: false,
        pk: user.uid,
        role: "Basic",
      };

      profile = await createUserProfile(user, userProfile);

      await generateEmailVerificationEmail({ ...profile, email: user.email });
    }

    profile = await getProfileFromUserId(body.user.user.uid);

    let search: SearchParams = {
      q: profile.id || "",
      query_by: "uid",
    };
    const searchResults = await client
      .collections("profiles")
      .documents()
      .search(search);

    if (searchResults.found === 0) {
      const { first_name, last_name, company, site_username, pk, picture } =
        profile;
      const document: IProfileSnapshot = {
        uid: pk || "",
        first_name: first_name || "",
        last_name: last_name || "",
        company: company || "",
        site_username: site_username || "",
        picture: picture || "",
      };

      // Index the document in profiles collection
      await createProfileInSearchIndex(document);
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
