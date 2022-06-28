// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next";
import { NextApiRequestWithUser } from "../../../types/http";

import { getErrorMessageAndStatusCode } from "../../../utils/errors";
import { getProfileFromUser } from "../../../utils/profile";
import { generatePasswordResetEmail } from "../../../utils/users";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequestWithUser,
  res: NextApiResponse<Data>
) {
  const { user } = req;

  try {
    const profile = await getProfileFromUser(user);
    await generatePasswordResetEmail(profile);
    res.status(200).json({ message: "Invite request e-mail sent." });
  } catch (error: any) {
    const { code, message } = await getErrorMessageAndStatusCode(error);
    res.status(code).json({ message });
  }
}
