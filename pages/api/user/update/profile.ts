// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import middleware from "../../../../middleware/middleware";
import nextConnect from "next-connect";

import type { NextApiRequest, NextApiResponse } from "next";

import { IUser } from "../../../../interfaces/user";
import {
  getProfileFromUser,
  updateUserProfile,
} from "../../../../utils/profile";
import { getErrorMessageAndStatusCode } from "../../../../utils/errors";
import { NextApiRequestWithUser } from "../../../../types/http";

type Data = {
  user?: IUser | null;
  message?: string;
};

const handler = nextConnect();
handler.use(middleware);

handler.put(async (req: NextApiRequestWithUser, res: NextApiResponse<Data>) => {
  try {
    const { body, user } = req;

    const profile = await getProfileFromUser(user);

    const profileRecord = await updateUserProfile(profile.id, body);

    res.status(200).json({ user: profileRecord });
  } catch (error: any) {
    const { message, code } = await getErrorMessageAndStatusCode(error);
    res.status(code).json({ message });
  }
});

export default handler;
